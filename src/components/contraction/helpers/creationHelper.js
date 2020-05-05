import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs';
import { setEpiduralHoverData } from './helper';

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
export function getGraphCanvasJSON(
  graphId,
  startDate,
  endDate,
  legendId,
  ticks,
  upperLimitValue,
  lowerLimitValue,
  labelY,
  timelineTargetDate,
) {
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
        rangeRounding: true,
        padDomain: false,
        ticks: {
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
      },
    },
    dimension: {
      height: 400,
    },
    showLabel: true,
    showLegend: true,
    padding: {
      top: 0,
      bottom: 6,
      left: 51,
      right: 0,
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

// Enumerator for all different type of contraction data having color and size property for bubble.
const contractionColorSize = {
  WF_PARTO_CONTRACT_STR: { color: '#004C76', size: 28, order: 0 },
  WF_PARTO_CONTRACT_MOD: { color: '#007CC3', size: 21, order: 1 },
  WF_PARTO_CONTRACT_WK: { color: '#0092E0', size: 16, order: 2 },
  WF_PARTO_CONTRACT_NP: { color: '#4CB2E9', size: 10, order: 3 },
};

/**
 * A function to create carbon acceptable data from contration response and prefernce setting response.
 * @param {Object} contractionData - contraction response object
 * @param {Function} loadPopup - loadpopup function to be passed to each data point
 * @param {String} noIntensity - Internationalised string for No Intensity
 * @param {Object} preferenceSetting - preference Setting response object
 * @returns {Array} - returns array having carbon acceptable data for different contaction types.
 */
export const createBubbleData = (
  contractionData,
  loadPopup,
  noIntensity,
  preferenceSetting,
) => {
  const actualData = [];
  const dataMap = new Map();
  const contactionDataMap = new Map();

  const contractionSettings = preferenceSetting.componentsConfigurations.filter(
    (data) => data.id === 'MP_VB_WF_PARTO_CONTRACT',
  );

  const contractionFilters = contractionSettings[0].filterDetails;
  const labelFilters = contractionFilters.filter((data) => data.id.includes('_LABEL'));
  const nomenFilters = contractionFilters.filter((data) => data.id.includes('_NOMEN'));
  const filterDataMap = new Map();

  nomenFilters.forEach((ele, index) => {
    filterDataMap.set(ele.filterNomens[0].displayCode.toString(), {
      nomenId: ele.filterNomens[0].displayCode,
      display: labelFilters[index].display,
      type: ele.id.replace('_NOMEN', ''),
    });
  });

  const {
    contractionDetails,
    contractionFrequencyDisplay,
    contractionIntensityDisplay,
  } = contractionData;

  if (filterDataMap.size) {
    contractionDetails.forEach((ele, index) => {
      if (filterDataMap.get(ele.nomenclatureID)) {
        Object.assign(ele, {
          intensityDisplay: filterDataMap.get(ele.nomenclatureID).display,
        });
      } else {
        Object.assign(ele, { intensityDisplay: noIntensity });
      }
    });

    setEpiduralHoverData(contractionDetails);

    contractionDetails.forEach((details) => {
      const contractionDetail = dataMap.get(details.nomenclatureID);
      if (contractionDetail) {
        const data = {
          ...details,
          contractionFrequencyDisplay,
          contractionIntensityDisplay,
        };
        contractionDetail.push(data);
      } else {
        const data = {
          ...details,
          contractionFrequencyDisplay,
          contractionIntensityDisplay,
        };
        dataMap.set(details.nomenclatureID, [data]);
      }
    });

    dataMap.forEach((value) => {
      value.forEach((data) => {
        const intensityBubbleValue = contactionDataMap.get(data.nomenclatureID);
        if (intensityBubbleValue) {
          intensityBubbleValue.push({
            x: data.resultDateTime,
            y: data.contractionFrequency,
          });
        } else {
          contactionDataMap.set(data.nomenclatureID, [
            {
              x: data.resultDateTime,
              y: data.contractionFrequency,
            },
          ]);
        }
      });
    });
    let contractionInfo;
    contactionDataMap.forEach((value, key) => {
      if (key) {
        let contractionInfos;
        const details = filterDataMap.get(key).type;
        if (filterDataMap.get(key).nomenId === key) {
          contractionInfos = {
            key: `uid_${contractionColorSize[details].order}`,
            label: {
              display: filterDataMap.get(key).display,
              contractionFrequencyDisplay,
              contractionIntensityDisplay,
            },
            color: contractionColorSize[details].color,
            onClick: loadPopup,
            weight: {
              maxRadius: contractionColorSize[details].size,
            },
            values: value,
          };
          actualData.push(contractionInfos);
        }
      } else {
        contractionInfo = {
          key: 'uid_4',
          label: {
            display: noIntensity,
            contractionFrequencyDisplay,
            contractionIntensityDisplay,
          },
          color: '#A6D9F4',
          onClick: loadPopup,
          weight: {
            maxRadius: 6,
          },
          values: value,
        };
        actualData.push(contractionInfo);
      }
    });
    actualData.sort((a, b) => parseInt(a.key.slice(a.key.length - 1, a.key.length), 10) - parseInt(b.key.slice(b.key.length - 1, b.key.length), 10));
    return actualData;
  }
  return actualData;
};
