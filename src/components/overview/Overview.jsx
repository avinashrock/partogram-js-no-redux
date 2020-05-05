import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import Grid from 'terra-grid';
import Card from 'terra-card';
import GridColumn from 'terra-grid/lib/GridColumn';
import ToggleSectionHeader from 'terra-toggle-section-header';
import Text from 'terra-text';
import EGA from './EGA';
import EDD from './EDD';
import GravidaParityInformation from './GravidaParityInformation';
import GroupBStrepStatus from './GroupBStrepStatus';
import BloodType from './BloodType';
import LaborOnset from './LaborOnset';
import Epidural from './Epidural';
import Meows from './Meows';
import PregnancyDescriptor from './PregnancyDescriptor';
import OverviewComponentItemView from './OverviewComponentItemView';
import {
  NO_RESULT, OVERVIEW_COMPONENT_ID, GBS_EXT_ID, BLOODTYPE_ID, MEOWS_LABEL_ID,
} from '../../constants';
import partogramUserContext from '../../partogramUserContext';
import RuptureOfMembrane from './RuptureOfMembrane';
import EgaAtDelivery from './EgaAtDelivery';
import DateTimeOfBirth from './DateTimeOfBirth';
import AdditionalClinicalResultsDisplay from './AdditionalClinicalDetailsDisplay';
import { ColumnDataObject } from './initialization-components/ColumnDataObject';
import { getComponentHeader, validateBedrockDetails } from '../../application/helpers/BedrockPreference';
import {
  populateROMData, displayAdditionalClinicalDetails, populateEGAData, populateDOBData,
} from './overviewHelper';

const propTypes = {
  // pregnancyDetails for a specific encounterId
  pregnancyDetails: PropTypes.shape({
    estimatedGestationalAge: PropTypes.number,
    estimatedDeliveryDate: PropTypes.string,
    hasDelivered: PropTypes.bool,
  }),
  // laborDetails for a specific encounterId
  laborDetails: PropTypes.shape({
    laborStartDateTimeDisplay: PropTypes.string,
    laborStopDateTimeDisplay: PropTypes.string,
    laborStartDateTime: PropTypes.string,
    laborStopDateTime: PropTypes.string,
    partogramStopDateTime: PropTypes.string,
  }),
  // medicationDetails for a specific encounterId
  medicationDetails: PropTypes.shape({
    epiduralDetails: PropTypes.arrayOf(
      PropTypes.shape({
        display: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.string,
        dateTime: PropTypes.string,
      }),
    ),
  }),
  // fetalDetails for a specific encounterId
  fetalDetails: PropTypes.arrayOf(PropTypes.shape({
    deliveryDateTime: PropTypes.string,
    ruptureOfMembraneDateTime: PropTypes.string,
    additionalFetalInformation: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.number,
        unit: PropTypes.string,
        documentedDateTime: PropTypes.string,
        documentedBy: PropTypes.string,
      }),
    ),
  })),
  // maternalDetails for specific encounterId.
  maternalDetails: PropTypes.shape({
    groupBStrepStatus: PropTypes.string,
    bloodType: PropTypes.string,
  }),
  // Additional Clinical Details (Client configurable)
  additionalClinicalDetails: PropTypes.array,
  bedrockPreferenceResponse: PropTypes.shape({
    componentsConfigurations: PropTypes.array,
  }),
  intl: intlShape.isRequired,
};

/* The component displays all the several components pertaining to partogram Overview in three or four columns
based on whether or not the additional clinical events are configured */
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.ruptureOfMembraneData = [];
    this.egaData = [];
    this.dobData = [];
    this.meowsData = [];
    this.thirdColumnData = [];
    this.fourthColumnData = [];
  }


  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    /* Populates the second column data and make it ready for the Overview component to be able
       to consume and render the data.
    */
    this.ruptureOfMembraneData = populateROMData(this.props.fetalDetails, this.props.intl);
    this.egaData = populateEGAData(this.props.fetalDetails, this.props.intl);
    this.dobData = populateDOBData(this.props.fetalDetails, this.props.intl);
    if (validateBedrockDetails(
      this.props.bedrockPreferenceResponse, OVERVIEW_COMPONENT_ID, MEOWS_LABEL_ID,
    ).isPresent
    && this.props.maternalDetails) {
      if ('meowsScore' in this.props.maternalDetails) {
        this.meowsData.push(
          ColumnDataObject(
            validateBedrockDetails(
              this.props.bedrockPreferenceResponse,
              OVERVIEW_COMPONENT_ID,
              MEOWS_LABEL_ID,
            ).display,
            <Meows maternalDetails={this.props.maternalDetails} />, 'meowsLabel', 'meowsValue',
          ),
        );
      }
    }

    // Populating the third column data for the Overview component.
    this.thirdColumnData.push(
      ColumnDataObject(this.props.intl.formatMessage({ id: 'partogram-engine.oxytocin' }), NO_RESULT),
      ColumnDataObject(this.props.intl.formatMessage({ id: 'partogram-engine.epidural' }),
        <Epidural
          medicationDetails={this.props.medicationDetails}
          laborDetails={this.props.laborDetails}
          intl={this.props.intl}
        />),
    );

    if (validateBedrockDetails(this.props.bedrockPreferenceResponse, OVERVIEW_COMPONENT_ID, GBS_EXT_ID).isPresent
    && this.props.maternalDetails) {
      if ('groupBStrepStatus' in this.props.maternalDetails) {
        this.thirdColumnData.push(
          ColumnDataObject(this.props.intl.formatMessage({ id: 'partogram-engine.gbs-status' }),
            <GroupBStrepStatus maternalDetails={this.props.maternalDetails} intl={this.props.intl} />),
        );
      }
    }

    if (validateBedrockDetails(this.props.bedrockPreferenceResponse, OVERVIEW_COMPONENT_ID, BLOODTYPE_ID).isPresent
    && this.props.maternalDetails) {
      if ('bloodType' in this.props.maternalDetails) {
        this.thirdColumnData.push(
          ColumnDataObject(this.props.intl.formatMessage({ id: 'partogram-engine.blood-type' }),
            <BloodType maternalDetails={this.props.maternalDetails} intl={this.props.intl} />),
        );
      }
    }

    /*
    The following Function prepares the thirdColumn and forurthColumn data for the overview component to be able
    to consume it and thus render the data based on the availability of the additional Clinical Details,
    which are clearly client configurable. The function also handles the dynamic key value pairs.
    */
    displayAdditionalClinicalDetails(this.props.additionalClinicalDetails,
      this.thirdColumnData, this.fourthColumnData, this.context.timezone);
  }

  render() {
    const {
      laborDetails, fetalDetails, pregnancyDetails, bedrockPreferenceResponse, intl,
    } = this.props;
    const overviewColumnOne = [];
    const overviewColumnTwo = [];
    const overViewColumnThree = [];
    const overviewColumnFour = [];
    const firstColumnData = [
      ColumnDataObject(intl.formatMessage({ id: 'partogram-engine.gestational-information' }),
        undefined),
      ColumnDataObject(<Text fontSize={12} isItalic>{intl.formatMessage({ id: 'partogram-engine.ega' })}</Text>,
        <EGA
          estimatedGestationalAge={pregnancyDetails.estimatedGestationalAge}
          allBabiesDelivered={pregnancyDetails.hasDelivered}
          intl={intl}
        />),
      ColumnDataObject(<Text fontSize={12} isItalic>{intl.formatMessage({ id: 'partogram-engine.edd' })}</Text>,
        <EDD
          estimatedDeliveryDate={pregnancyDetails.estimatedDeliveryDate}
          timezone={this.context.timezone}
          intl={intl}
        />),
      ColumnDataObject(intl.formatMessage({ id: 'partogram-engine.gravida-para' }),
        <GravidaParityInformation pregnancyDetails={pregnancyDetails} intl={intl} />),
      ColumnDataObject(intl.formatMessage({ id: 'partogram-engine.labor-onset' }),
        <LaborOnset laborDetails={laborDetails} fetalDetails={fetalDetails} intl={intl} />),
      ColumnDataObject(intl.formatMessage({ id: 'partogram-engine.pregnancy-descriptor' }),
        <PregnancyDescriptor pregnancyDetails={pregnancyDetails} intl={intl} />),
    ];
    firstColumnData.forEach((data, index) => {
      overviewColumnOne.push(
        <OverviewComponentItemView
          label={data.label}
          value={data.value}
          isPaddingRequired={index === 0 || index === 1}
        />,
      );
    });
    overviewColumnTwo.push(
      <RuptureOfMembrane
        intl={intl}
        romData={this.ruptureOfMembraneData}
        bedrockPreferenceResponse={bedrockPreferenceResponse}
      />, <EgaAtDelivery
        egaData={this.egaData}
      />, <DateTimeOfBirth
        dobData={this.dobData}
      />,
    );
    if (this.meowsData.length && this.meowsData[0].meowsLabel) {
      overviewColumnTwo.push(<OverviewComponentItemView
        label={this.meowsData[0].meowsLabel}
        value={this.meowsData[0].meowsValue}
        isPaddingRequired={false}
      />);
    }
    this.thirdColumnData.forEach((data, index) => {
      if (data.dynamiclabel) {
        overViewColumnThree.push(
          <AdditionalClinicalResultsDisplay
            clinicalDetailsDynamiclabel={data.dynamiclabel}
            clinicalDetailsDynamicValue={data.dynamicValue}
            criticality={data.criticality}
            dynamicLabelObject={this.thirdColumnData[index + 1]}
          />,
        );
      } else if (data.clinicalDetailslabel) {
        overViewColumnThree.push(
          <AdditionalClinicalResultsDisplay
            clinicalDetailslabel={data.clinicalDetailslabel}
            clinicalDetailsValue={data.value}
            criticality={data.criticality}
            dynamicLabelObject={this.thirdColumnData[index + 1]}
          />,
        );
      } else {
        overViewColumnThree.push(
          <OverviewComponentItemView
            label={data.label}
            value={data.value}
            isPaddingRequired={false}
          />,
        );
      }
    });
    this.fourthColumnData.forEach((result, index) => {
      if (result.dynamiclabel) {
        overviewColumnFour.push(
          <AdditionalClinicalResultsDisplay
            index={index}
            clinicalDetailsDynamiclabel={result.dynamiclabel}
            clinicalDetailsDynamicValue={result.dynamicValue}
            criticality={result.criticality}
            dynamicLabelObject={this.fourthColumnData[index + 1]}
          />,
        );
      } else {
        overviewColumnFour.push(
          <AdditionalClinicalResultsDisplay
            clinicalDetailsValue={result.value}
            clinicalDetailslabel={result.clinicalDetailslabel}
            criticality={result.criticality}
            dynamicLabelObject={this.fourthColumnData[index + 1]}
          />,
        );
      }
    });
    let overviewContent;
    if (this.fourthColumnData.length === 0) {
      // renders three columns when the additionalClinicalDetails is empty.
      overviewContent = (
        <Card>
          <Card.Body>
            <Grid.Row>
              <Grid.Column enormous={4} medium={4} small={12} tiny={12} huge={4} large={4}>
                <Grid.Row>
                  {overviewColumnOne}
                </Grid.Row>
              </Grid.Column>
              <GridColumn enormous={4} medium={4} small={12} tiny={12} huge={4} large={4}>
                <Grid.Row>
                  {overviewColumnTwo}
                </Grid.Row>
              </GridColumn>
              <GridColumn enormous={4} medium={4} small={12} tiny={12} huge={4} large={4}>
                <Grid.Row>
                  {overViewColumnThree}
                </Grid.Row>
              </GridColumn>
            </Grid.Row>
          </Card.Body>
        </Card>
      );
    } else {
      overviewContent = (
        <Card>
          <Card.Body>
            <Grid.Row>
              <Grid.Column enormous={3} medium={12} small={12} tiny={12} huge={3} large={3}>
                <Grid.Row>
                  {overviewColumnOne}
                </Grid.Row>
              </Grid.Column>
              <GridColumn enormous={3} medium={12} small={12} tiny={12} huge={3} large={3}>
                <Grid.Row>
                  {overviewColumnTwo}
                </Grid.Row>
              </GridColumn>
              <GridColumn enormous={3} medium={12} small={12} tiny={12} huge={3} large={3}>
                <Grid.Row>
                  {overViewColumnThree}
                </Grid.Row>
              </GridColumn>
              <GridColumn enormous={3} medium={12} small={12} tiny={12} huge={3} large={3}>
                <Grid.Row>
                  {overviewColumnFour}
                </Grid.Row>
              </GridColumn>
            </Grid.Row>
          </Card.Body>
        </Card>
      );
    }

    // default title : Partogram Overview
    const componentHeader = getComponentHeader(bedrockPreferenceResponse, OVERVIEW_COMPONENT_ID)
    || intl.formatMessage({ id: 'partogram-engine.parto-overview-header' });
    const content = (
      <ToggleSectionHeader
        title={componentHeader.toString()}
        isInitiallyOpen
        isAnimated
      >
        {overviewContent}
      </ToggleSectionHeader>
    );
    return (
      content
    );
  }
}

Overview.contextType = partogramUserContext;
Overview.propTypes = propTypes;
export default injectIntl(Overview);
