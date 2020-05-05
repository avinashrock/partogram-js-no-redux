/* eslint-disable no-unused-expressions */
import Carbon from '@cerner/carbon-graphs';
import '@cerner/carbon-graphs/dist/css/carbon-graphs.css';
import { setEpiduralHoverData } from './epidural/helper/helper';
import { setLaborCurveHoverData } from './labor-curve/LaborCurveHoverData';
import { setFHRHoverData } from './fetal-heart-rate/FetalHeartRateHoverData';
import { fetalPositionSvgObject } from './labor-curve/FetalPositionSvgObject';
import { FETAL_POSITION_PREF_CONFIG, FETAL_POSITION_POS_LABEL, REGION_COLOR } from '../constants';

/**
 * Legend color used for babys.
 */
const babyLegendColors = [
  {
    color: Carbon.helpers.COLORS.BLUE,
  },
  {
    color: Carbon.helpers.COLORS.GREEN,
  },
  {
    color: Carbon.helpers.COLORS.BLACK,
  },
];

// Specified icon shapes and svg path for respective babies
const shape = [
  {
    x: Carbon.helpers.SHAPES.RHOMBUS,
    d: Carbon.helpers.SHAPES.RHOMBUS.path.d,
    y: Carbon.helpers.SHAPES.SQUARE,
    d1: Carbon.helpers.SHAPES.SQUARE.path.d,
  },
  {
    x: Carbon.helpers.SHAPES.X,
    d: Carbon.helpers.SHAPES.X.path.d,
    y: Carbon.helpers.SHAPES.CROSS,
    d1: Carbon.helpers.SHAPES.CROSS.path.d,
  },
  {
    x: Carbon.helpers.SHAPES.TRIANGLE_DOWN,
    d: Carbon.helpers.SHAPES.TRIANGLE_DOWN.path.d,
    y: Carbon.helpers.SHAPES.TRIANGLE,
    d1: Carbon.helpers.SHAPES.TRIANGLE.path.d,
  },
];

// specific shape for epidural
const epiduralShape = {
  bolusPatient: Carbon.helpers.SHAPES.DARK.CIRCLE,
  bolusAnesthesia: Carbon.helpers.SHAPES.DARK.CROSS,
};

// specific color for epidural
const epiduralColor = {
  bolusPatient: Carbon.helpers.COLORS.GREEN,
  bolusAnesthesia: Carbon.helpers.COLORS.BLUE,
};

// specific shape for labor curve
const laborShape = [{
  shape: Carbon.helpers.SHAPES.DARK.CIRCLE,
},
{
  shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,
},
{
  shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,
}];

// specific color for labor curve
const laborColor = [{
  color: Carbon.helpers.COLORS.BLUE,
},
{
  color: Carbon.helpers.COLORS.LIGHT_PURPLE,
},
{
  color: Carbon.helpers.COLORS.LIGHT_PURPLE,
}];

/**
 * A helper function to create json data to load canvas.
 * @param {String} graphId - DOM id to bind the graph into.
 * @param {String} startDate - Start date of graph.
 * @param  {String} endDate - End date of graph.
 * @param  {String} legendId - DOM id to bind the legend into.
 * @param  {Object} ticks - Object contains the tick values of the graph canvas.
 * @param  {Object} upperLimitValue - Maximum value of y axis.
 * @param  {Object} lowerLimitValue - Minimum value of y axis
 * @return {JSON} - JOSN data to load canvas
 */
export function getGraphCanvasJSON(graphId, startDate, endDate, legendId, ticks, upperLimitValue, lowerLimitValue, labelY, timelineTargetDate) {
  const canvasData = {
    bindTo: graphId,
    bindLegendTo: `#${legendId}`,
    axis: {
      x: {
        rangeRounding: false,
        type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
        show: false,
        lowerLimit: startDate,
        upperLimit: endDate,
        ticks: {
          format: '%H:%S',
          lowerStepTickValues: ticks.lowerStepTickValues,
          midpointTickValues: ticks.midpointTickValues,
          upperStepTickValues: ticks.upperStepTickValues,
        },
      },
      y: {
        label: labelY,
        lowerLimit: lowerLimitValue,
        upperLimit: upperLimitValue,
        rangeRounding: false,
        padDomain: false,
      },
    },
    dimension: {
      height: 400,
    },
    showLabel: true,
    showLegend: true,
    padding:
      {
        top: 0, bottom: 6, left: 51, right: 0,
      },
    pan: {
      enabled: true,
    },
  };
  const datelineProperty = {
    dateline: [
      {
        showDatelineIndicator: false,
        color: '#ffba02',
        shape: Carbon.helpers.SHAPES.TRIANGLE,
        value: timelineTargetDate,
      },
    ],
  };
  return Object.assign(canvasData, datelineProperty);
}

/**
 * A helper function to create data set for line graph for fhr baseline/ intermittent values .
 * @param  {Object} fhrDetails - Value and date details of fhr baseline/ intermittent event.
 * @param  {Number} regionStart - Start of FHR reference region.
 * @param  {Number} regionEnd - End of FHR reference region.
 * @return {Array} - Array of data set to plot graph in the canvas.
 * @return {Boolean} - boolean value to identify Baseline dataset OR Intermittent dataset
 */
export function getDataSet(fhrDetails, regionStart, regionEnd, isBaseLineDataSet, handlePopup) {
  const lineScatterData = [];
  //  Populate baseline/ intermittent details of each baby into lineData array.
  // Data slicing is required becuase as per the partogram standards max allowed baby count is three
  fhrDetails.slice(0, 3).forEach(
    (babyObject, index) => {
      let eventDisplayName = '';
      let eventUnit = '';
      // Populate baseline/ intermittent values documented for baby.
      const baseIntermittentValue = [];
      const babyObjectDataSet = isBaseLineDataSet ? babyObject.fhrBaselineDetails : babyObject.fhrIntermittentDetails;
      if (babyObjectDataSet.length) {
        babyObjectDataSet.forEach(
          (baseIntermittentObject) => {
            eventDisplayName = baseIntermittentObject.name;
            eventUnit = baseIntermittentObject.unit;
            setFHRHoverData(
              baseIntermittentObject.documentedDateTime,
              `${babyObject.dynamicLabel} - ${eventDisplayName}`,
              baseIntermittentObject.value,
              eventUnit,
              isBaseLineDataSet ? shape[index].d : shape[index].d1,
              babyLegendColors[index].color,
              baseIntermittentObject.isResultModified,
            );
            if (isBaseLineDataSet) {
              baseIntermittentObject.value >= 60 && baseIntermittentObject.value <= 210 ? baseIntermittentValue.push({
                x: baseIntermittentObject.documentedDateTime,
                y: baseIntermittentObject.value,
              }) : null;
            } else {
              baseIntermittentValue.push({
                mid: {
                  x: baseIntermittentObject.documentedDateTime,
                  y: baseIntermittentObject.value,
                },
              });
            }
          },
        );
        if (isBaseLineDataSet) {
          lineScatterData.push(
            {
              key: `baseline_uid_${index}`,
              label: {
                display: `${babyObject.dynamicLabel} - ${eventDisplayName}`, unit: `${eventUnit}`,
              },
              regions: [
                {
                  axis: 'y',
                  start: regionStart,
                  end: regionEnd,
                  color: REGION_COLOR,
                },
              ],
              shape: shape[index].x,
              color: babyLegendColors[index].color,
              values: baseIntermittentValue,
              onClick: handlePopup,
            },
          );
        } else {
          lineScatterData.push(
            {
              key: `intermittent_uid_${index}`,
              label: {
                mid: { display: `${babyObject.dynamicLabel} - ${eventDisplayName}`, unit: `${eventUnit}` },
              },
              regions: {
                mid: [{
                  axis: 'y',
                  start: regionStart,
                  end: regionEnd,
                  color: REGION_COLOR,
                }],
              },
              shape: { mid: shape[index].y },
              color: { mid: babyLegendColors[index].color },
              values: baseIntermittentValue,
              onClick: handlePopup,
            },
          );
        }
      } else {
        baseIntermittentValue.push();
        lineScatterData.push(
          {
            values: null,
          },
        );
      }
    },
  );
  return lineScatterData;
}

const getActionData = (medicationDetails) => {
  const actions = [];
  let epiduralBolusLabel;
  let epiduralAnesthesiaLabel;

  const epiduralData = medicationDetails.epiduralDetails;
  epiduralData.forEach((element, index) => {
    if (element.type === 'EPIDURAL_BOLUS_PATIENT') {
      if (epiduralBolusLabel === undefined) {
        epiduralBolusLabel = element.display;
        actions.push({
          key: 'medication_2',
          label: {
            display: epiduralBolusLabel,
          },
          shape: epiduralShape.bolusPatient,
          color: epiduralColor.bolusPatient,
        });
      }
    }
    if (element.type === 'EPIDURAL_BOLUS_ANESTHESIA') {
      if (epiduralAnesthesiaLabel === undefined) {
        epiduralAnesthesiaLabel = element.display;
        actions.push({
          key: 'medication_1',
          label: {
            display: epiduralAnesthesiaLabel,
          },
          shape: epiduralShape.bolusAnesthesia,
          color: epiduralColor.bolusAnesthesia,
        });
      }
    }
  });
  return actions;
};
/**
 * A helper function to create json data to load time
 graph type canvas.
 * @param {String} id - id of the div where we want to load the graph
 * @param  {Object} ticks - Object contains the tick values of the graph canvas.
 * @param  {String} legendId - DOM id to bind the legend into.
 * @param {String} startDate - Start date of graph.
 * @param  {String} endDate - End date of graph.
 */
export const getEpiduralGraphData = (graphId, ticks, legendId, startDate, endDate, medicationDetails, initialLoadDate) => ({
  bindTo: graphId,
  bindLegendTo: `#${legendId}`,
  axis: {
    x: {
      show: false,
      lowerLimit: startDate,
      upperLimit: endDate,
      rangeRounding: true,
      ticks: {
        format: '%H:%M',
        lowerStepTickValues: ticks.lowerStepTickValues,
        midpointTickValues: ticks.midpointTickValues,
        upperStepTickValues: ticks.upperStepTickValues,
      },
    },
  },
  actionLegend: getActionData(medicationDetails),
  dateline: [
    {
      showDatelineIndicator: false,
      color: Carbon.helpers.COLORS.YELLOW,
      shape: Carbon.helpers.SHAPES.DARK.SQUARE,
      value: new Date(initialLoadDate).toISOString(),
    },
  ],
  showActionLegend: true,
  padding:
      {
        left: 0, right: 0, bottom: 0, top: 0,
      },
  pan: {
    enabled: true,
  },
});

/**
 * A helper function to create EpiduralAnesthesiaData
 * @param {object} medicationData - medicationDetails are passed to get epidural Data.
 * @return {object} - return epiduralAnesthesia data object reday to be consumable by carbon.
 */
export const getEpiduralData = (medicationData, isInitialLoad, handlePopup) => {
  const epiBolusAnesthesia = [];
  let epiduralResult;

  const epiduralData = medicationData.epiduralDetails;

  const epiAnesthesiaShapePath = epiduralShape.bolusAnesthesia.path.d;
  epiduralData.forEach((element, index) => {
    if (element.type === 'EPIDURAL_BOLUS_ANESTHESIA') {
      if (isInitialLoad) {
        setEpiduralHoverData(element.value, element.display, epiAnesthesiaShapePath, epiduralColor.bolusAnesthesia);
      }
      epiBolusAnesthesia.push(
        element.value,
      );
    }
  });
  const epiBolusPatient = [];
  const epiBolusShapePath = epiduralShape.bolusPatient.path.d;
  epiduralData.forEach((element, index) => {
    if (element.type === 'EPIDURAL_BOLUS_PATIENT') {
      if (isInitialLoad) {
        setEpiduralHoverData(element.value, element.display, epiBolusShapePath, epiduralColor.bolusPatient);
      }
      epiBolusPatient.push(
        element.value,
      );
    }
  });

  if (epiBolusAnesthesia.length) {
    epiduralResult = {
      key: 'track 1',
      trackLabel: {
        display: ' ',
      },
      tasks: [],
      actions: [{
        key: 'medication_1',
        onClick: handlePopup,
        values: epiBolusAnesthesia,
      }],
    };
  }
  if (epiBolusPatient.length) {
    if (epiduralResult && epiduralResult.actions) {
      epiduralResult.actions.push({
        key: 'medication_2',
        values: epiBolusPatient,
        onClick: handlePopup,
      });
    } else {
      epiduralResult = {
        key: 'track 1',
        trackLabel: {
          display: ' ',
        },
        tasks: [],
        actions: [{
          key: 'medication_2',
          values: epiBolusPatient,
          onClick: handlePopup,
        }],
      };
    }
  }

  return epiduralResult;
};

/** Formulating the data
* @param {object} laborCurveResponse - LaborCurveResponse contains the mock data.
* @param {object} handlePopup - Handles the popup functionality.
* @param {variable} isFifthPalpable - Checks if the data has Fetal Station or Fifth Palpables.
* @return {Array} - Array of data set to plot graph in the canvas.
*/

export function getLaborData(laborCurveResponse, handlePopup, isFifthPalpable) {
  const laborLineData = [];
  const laborCurveData = laborCurveResponse;
  const newLaborCurveData = [];
  if (isFifthPalpable) {
    newLaborCurveData.push(laborCurveResponse.dilationDetails);
    newLaborCurveData.push(laborCurveResponse.fifthPalpableDetails);
  } else if (isFifthPalpable !== null) {
    newLaborCurveData.push(laborCurveResponse.dilationDetails);
    newLaborCurveData.push(laborCurveResponse.fetalStationDetails);
  } else {
    newLaborCurveData.push(laborCurveResponse.dilationDetails);
  }
  if (laborCurveData) {
    newLaborCurveData.slice(0, 2).forEach((details, index) => {
      let eventDisplayName = '';
      let eventUnit = '';
      const laborCurveGraphData = [];
      const laborCurveTypeDataSet = details;
      if (details) {
        laborCurveTypeDataSet.forEach(
          (laborCurveTypeObject) => {
            eventDisplayName = laborCurveTypeObject.name;
            eventUnit = laborCurveTypeObject.unit;
            setLaborCurveHoverData(
              laborCurveTypeObject.documentedDateTime,
              eventDisplayName,
              laborShape[index].shape,
              laborColor[index].color,
              laborCurveTypeObject.value,
              eventUnit,
              laborCurveTypeObject.isResultModified,
            );
            if (isFifthPalpable && laborCurveTypeObject.name !== 'Cervix Dilation') {
              laborCurveTypeObject.value >= 0 && laborCurveTypeObject.value <= 5 ? laborCurveGraphData.push({
                x: laborCurveTypeObject.documentedDateTime,
                y: laborCurveTypeObject.value,
              }) : null;
            } else if (isFifthPalpable === false && laborCurveTypeObject.name === 'Fetal Station') {
              laborCurveTypeObject.value >= -5 && laborCurveTypeObject.value <= 5 ? laborCurveGraphData.push({
                x: laborCurveTypeObject.documentedDateTime,
                y: laborCurveTypeObject.value,
              }) : null;
            } else {
              laborCurveTypeObject.value >= 0 && laborCurveTypeObject.value <= 10 ? laborCurveGraphData.push({
                x: laborCurveTypeObject.documentedDateTime,
                y: laborCurveTypeObject.value,
              }) : null;
            }
          },
        );
        if (eventDisplayName === 'Cervix Dilation') {
          laborLineData.push(
            {
              key: `labor_curve_uid_${index}`,
              label: {
                display: `${eventDisplayName}`, unit: `${eventUnit}`,
              },
              shape: laborShape[index].shape,
              color: laborColor[index].color,
              values: laborCurveGraphData,
              onClick: handlePopup,
            },
          );
        } else {
          laborLineData.push(
            {
              key: `labor_curve_uid_${index}`,
              label: {
                display: `${eventDisplayName}`, unit: `${eventUnit}`,
              },
              shape: laborShape[index].shape,
              color: laborColor[index].color,
              values: laborCurveGraphData,
              onClick: handlePopup,
              yAxis: 'y2',
            },
          );
        }
      } else {
        laborCurveGraphData.push();
        laborLineData.push(
          {
            values: null,
          },
        );
      }
    });
    return laborLineData;
  }
  return null;
}


/**
 * A helper function to create json data to load time
 graph type canvas.
 * @param {String} graphId - id of the div where we want to load the graph.
 * @param  {Object} ticks - Object contains the tick values of the graph canvas.
 * @param  {String} legendId - DOM id to bind the legend into.
 * @param {String} startDate - Start date of graph.
 * @param  {String} endDate - End date of graph.
 * @param  {Object} upperLimitValue - Maximum value of y axis.
 * @param  {Object} lowerLimitValue - Minimum value of y axis.
 * @param  {Object} nextUpperLimitValue - Maximum value of y2 axis.
 * @param  {Object} nextLowerLimitValue- Minimum value of y2 axis.
 * @param {String} timelineTargetDate - Date that the current timeline holds.
 * @param {String} Y1_AXIS_LABEL - Label of y1 axis
 * @param {String} Y2_AXIS_LABEL - Label of y2 axis
 * @param {Number} graphHeight - Height of the graph.
 * @param {String} isFifthPalpable - Checks whether data has Fetal Station or Fifth Palpables.
 * @return {JSON} - JSON data to load canvas.
 */
export function getLaborCurveGraphData(graphId, ticks, legendId, startDate, endDate, upperLimitValue, lowerLimitValue, nextUpperLimitValue, nextLowerLimitValue, timelineTargetDate, Y1_AXIS_LABEL, Y2_AXIS_LABEL, graphHeight, isFifthPalpable) {
  let tickValues = [];
  if (isFifthPalpable) tickValues = [0, 1, 2, 3, 4, 5];
  else if (isFifthPalpable !== null) tickValues = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
  else tickValues = [0];
  const Data = {
    bindTo: graphId,
    bindLegendTo: `#${legendId}`,
    axis: {
      x: {
        rangeRounding: false,
        type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
        show: false,
        lowerLimit: startDate,
        upperLimit: endDate,
        ticks: {
          format: '%H:%S',
          lowerStepTickValues: ticks.lowerStepTickValues,
          midpointTickValues: ticks.midpointTickValues,
          upperStepTickValues: ticks.upperStepTickValues,
        },
      },
      y: {
        ticks: {
          format: '.0f',
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        label: Y1_AXIS_LABEL,
        lowerLimit: lowerLimitValue,
        upperLimit: upperLimitValue,
        rangeRounding: false,
        padDomain: false,
      },
      y2: {
        ticks: {
          format: '.0f',
          values: tickValues,
        },
        label: Y2_AXIS_LABEL,
        show: true,
        lowerLimit: nextLowerLimitValue,
        upperLimit: nextUpperLimitValue,
        rangeRounding: false,
        padDomain: false,
      },
    },
    dimension: {
      height: graphHeight,
    },
    showLabel: true,
    showLegend: true,
    showShapes: true,
    padding:
      {
        top: 0, bottom: 30, left: 51, right: 25,
      },
    pan: {
      enabled: true,
    },
  };
  const datelineProperty = {
    dateline: [
      {
        showDatelineIndicator: false,
        color: '#ffba02',
        shape: Carbon.helpers.SHAPES.TRIANGLE,
        value: timelineTargetDate,
      },
    ],
  };
  return Object.assign(Data, datelineProperty);
}

/** Formulating the data
* @return {Array} - Maps the different fetal positions to the Fetal Position Legend.
*/

const constructFetalPositionShapes = () => {
  const actionLegendArray = [];
  fetalPositionSvgObject().forEach((fetalPostion, index) => {
    actionLegendArray.push({
      key: `fetal_position_${index}`,
      label: {
        display: fetalPostion.label,
      },
      shape: {
        path: {
          d: fetalPostion.value,
        },
        options: {
          x: -10,
          y: -10,
          scale: 0.65,
        },
      },
    });
  });
  return actionLegendArray;
};

/** Formulating the data
* @param {object} pregnancyDescriptor - Contains the Pregnancy Descriptor details for Nullipara,Multipara or Had C Section.
* @param {object} laborData - Contains the fetal position graph data to be rendered.
* @param {Date} startDate - Indicates the start date of the graph.
* @param {Date} endDate - Indicates the end date of the graph.
* @return {Array} - Array of data set to plot graph in the canvas.
*/

export function getLaborFetalLegend(pregnancyDescriptor, laborData, startDate, endDate, intl) {
  const labelData = {
    key: 'fetal_position_graph',
    trackLabel: {
      display: null,
    },
    activities: [
      {
        key: 'pregnancy_descriptor',
        color: null,
        label: {
          display: null,
        },
        startDate,
        endDate,
      },
    ],
    actions: laborData,
  };
  if (pregnancyDescriptor.isNulliPara) {
    labelData.trackLabel.display = intl.formatMessage({ id: 'partogram-engine.nullipara' });
    labelData.activities[0].color = Carbon.helpers.COLORS.LIGHT_YELLOW;
    labelData.activities[0].label.display = intl.formatMessage({ id: 'partogram-engine.nullipara' });
  } else if (pregnancyDescriptor.isMultiPara) {
    labelData.trackLabel.display = intl.formatMessage({ id: 'partogram-engine.multipara' });
    labelData.activities[0].color = Carbon.helpers.COLORS.LIGHT_BLUE;
    labelData.activities[0].label.display = intl.formatMessage({ id: 'partogram-engine.multipara' });
  } else if (pregnancyDescriptor.hadPreviousCSection) {
    labelData.trackLabel.display = intl.formatMessage({ id: 'partogram-engine.prev_C_Section' });
    labelData.activities[0].color = Carbon.helpers.COLORS.LIGHT_PURPLE;
    labelData.activities[0].label.display = intl.formatMessage({ id: 'partogram-engine.prev_C_Section' });
  }
  return labelData;
}

export function getLaborFetalData(laborCurveResponse, handlePopup, preferenceResponse) {
  const positionArray = fetalPositionSvgObject();
  const laborCurveFetalData = laborCurveResponse.fetalPositionDetails;
  const actualData = [];
  const laborCurveSettings = preferenceResponse.componentsConfigurations.filter(
    (data) => data.id === FETAL_POSITION_PREF_CONFIG,
  );
  const laborCurveFilters = laborCurveSettings[0].filterDetails.filter((data) => data.id.includes(FETAL_POSITION_POS_LABEL));
  if (laborCurveFilters.length) {
    const fetalPositionArray = [];
    laborCurveFilters.forEach((laborFilterObject) => {
      const posLabelObject = positionArray.map((positionObject) => positionObject.label);
      const fetalIndex = posLabelObject.indexOf(laborFilterObject.id);
      const shapeObject = positionArray.map((positionObject) => positionObject.value);
      const fetalShapeIndex = shapeObject[fetalIndex];
      if (posLabelObject) {
        fetalPositionArray.push(
          {
            nomenclatureID: laborFilterObject.filterNomens[0].displayCode,
            name: laborFilterObject.filterNomens[0].display,
            fetalPosIndex: fetalIndex,
            shape: {
              path:
            {
              d: fetalShapeIndex,
            },
            },
          },
        );
      }
    });
    if (laborCurveFetalData) {
      laborCurveFetalData.forEach((fetalPosition, index) => {
        const requiredFetalObject = fetalPositionArray.find((fetalMappedObject) => fetalMappedObject.name.toUpperCase() === fetalPosition.value.toUpperCase());
        setLaborCurveHoverData(
          fetalPosition.documentedDateTime,
          fetalPosition.name,
          requiredFetalObject.shape,
          null,
          fetalPosition.value,
          null,
          fetalPosition.isResultModified,
        );
        const existingFetalElement = actualData.findIndex((fetalElement) => fetalElement.key === `fetal_position_${requiredFetalObject.fetalPosIndex}`);
        if (existingFetalElement !== -1) {
          actualData[existingFetalElement].values.push(fetalPosition.documentedDateTime);
        } else {
          actualData.push(
            {
              key: `fetal_position_${requiredFetalObject.fetalPosIndex}`,
              onClick: handlePopup,
              values: [
                fetalPosition.documentedDateTime,
              ],
            },
          );
        }
      });
      return actualData;
    }
    return actualData;
  }
  return actualData;
}


export const getLaborCurveGraphDataFetal = (graphId, legendId, ticks, startDate, endDate, initialLoadDate, handlePopup, laborCurveResponse, preferenceResponse) => ({
  bindTo: `#${graphId}`,
  bindLegendTo: `#${legendId}`,
  axis: {
    x: {
      show: false,
      lowerLimit: startDate,
      upperLimit: endDate,
      rangeRounding: true,
      ticks: {
        format: '%H:%M',
        lowerStepTickValues: ticks.lowerStepTickValues,
        midpointTickValues: ticks.midpointTickValues,
        upperStepTickValues: ticks.upperStepTickValues,
      },
    },
  },
  clickPassThrough: {
    tasks: false,
    activities: false,
    events: false,
    actions: false,
    datelines: false,
  },
  actionLegend: constructFetalPositionShapes(),
  dateline: [
    {
      showDatelineIndicator: false,
      color: Carbon.helpers.COLORS.YELLOW,
      shape: Carbon.helpers.SHAPES.DARK.SQUARE,
      value: new Date(initialLoadDate).toISOString(),
    },
  ],
  showActionLegend: false,
  padding:
    {
      left: 0, right: 0, bottom: 0, top: 0,
    },
  pan: {
    enabled: true,
  },
});
