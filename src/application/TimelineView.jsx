import React, { useContext, Component } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Timeline, { TimelineBucket, TimelineApp } from 'stella-timeline';
import partogramUserContext from '../partogramUserContext';
import EpiduralContainer from '../components/epidural/EpiduralContainer';
import LaborCurveContainer from '../components/labor-curve/LaborCurveContainer';
import FetalHeartRateContainer from '../components/fetal-heart-rate/FetalHeartRateContainer';
import ContractionContainer from '../components/contraction/ContractionContainer';

const propTypes = {
  //  Start value from when the partogam is configured
  partogramStartDateTime: PropTypes.string,
  // Stop value when the partogram is stopped
  partogramStopDateTime: PropTypes.string,
  service: PropTypes.object,
  medicationDetails: PropTypes.object,
  pregnancyDescriptor: PropTypes.object,
  bedrockPreferenceResponse: PropTypes.shape({
    componentsConfigurations: PropTypes.array,
  }),
};

/*
* TimelineView renders FetalHeartRateContainer component which will be rendered within the TimelineContainer component  after receiving the appropriate props.
*/
// eslint-disable-next-line react/prefer-stateless-function
class TimelineView extends Component {
  render() {
    const {
      partogramStartDateTime, partogramStopDateTime, service, medicationDetails, bedrockPreferenceResponse, pregnancyDescriptor,
    } = this.props;
    const contextValue = this.context;
    const targetDateTime = partogramStopDateTime ? new Date(partogramStopDateTime) : new Date();
    const TIMELINE_PADDING_LEFT = 320;
    const TIMELINE_PADDING_RIGHT = 90;
    if (contextValue.workflowAPI) {
      contextValue.workflowAPI.onInitialRequestCompleted({ error: undefined });
    }
    return (
      <Timeline.Container
        hasNav
        padding={{ left: TIMELINE_PADDING_LEFT, right: TIMELINE_PADDING_RIGHT }}
        initialView={Timeline.Opts.Views.Timeframes.HOURS_12}
        supportedViews={[Timeline.Opts.Views.Timeframes.HOUR_1,
          Timeline.Opts.Views.Timeframes.HOURS_4,
          Timeline.Opts.Views.Timeframes.HOURS_8,
          Timeline.Opts.Views.Timeframes.HOURS_12,
          Timeline.Opts.Views.Timeframes.HOURS_24]}
        targetDateTime={targetDateTime}
      >
        <TimelineBucket
          hasTimeline
        >
          { medicationDetails ? (
            <EpiduralContainer
              partogramStartDate={partogramStartDateTime}
              partogramStopDate={partogramStopDateTime}
              medicationDetails={medicationDetails}
            />
          ) : null}
          <TimelineApp style={{ height: '100vh' }}>
            <LaborCurveContainer
              partogramStartDate={partogramStartDateTime}
              partogramStopDate={partogramStopDateTime}
              service={service}
              pregnancyDescriptor={pregnancyDescriptor}
            />
            <FetalHeartRateContainer
              bedrockPreferenceResponse={bedrockPreferenceResponse}
              partogramStartDate={partogramStartDateTime}
              partogramStopDate={partogramStopDateTime}
              service={service}
            />
            <ContractionContainer
              partogramStartDate={partogramStartDateTime}
              partogramStopDate={partogramStopDateTime}
              service={service}
            />
          </TimelineApp>
        </TimelineBucket>
      </Timeline.Container>
    );
  }
}

TimelineView.propTypes = propTypes;
TimelineView.contextType = partogramUserContext;
export default injectIntl(TimelineView);
