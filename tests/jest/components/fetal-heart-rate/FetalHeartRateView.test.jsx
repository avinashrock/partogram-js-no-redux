import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import FetalHeartRateView from '../../../../src/components/fetal-heart-rate/FetalHeartRateView';

loadTranslation('../../../../translations/en-US.json');

describe('FetalHeartRateView component', () => {
  it('FetalHeartRateView should match snapshot', () => {
    const wrapper = shallowWithIntl(<FetalHeartRateView />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a FetalHeartRateView that has failed', () => {
    const wrapper = shallowWithIntl(<FetalHeartRateView isFailed />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a FetalHeartRateView that has failed', () => {
    const wrapper = shallowWithIntl(<FetalHeartRateView isLoading />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a FetalHeartRateView that has failed', () => {
    const wrapper = shallowWithIntl(<FetalHeartRateView isFailed errorResponse={500} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a FetalHeartRateView that has failed', () => {
    const wrapper = shallowWithIntl(<FetalHeartRateView isFailed errorResponse={401} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a FetalHeartRateView that has failed', () => {
    const wrapper = shallowWithIntl(<FetalHeartRateView isFailed errorResponse={404} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a FetalHeartRateView that has failed', () => {
    const wrapper = shallowWithIntl(<FetalHeartRateView isFailed errorResponse={400} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a FetalHeartRateView with fetalAssessmentResponse', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const fetalAssessmentResponse = {
      fetalAssessment: {
        fetalHeartRateDetails: [{
          dynamicLabel: 'Baby A',
          dynamicLabelId: 12314,
          fhrBaselineDetails: [
            {
              name: 'Baseline',
              value: 110,
              unit: 'bpm',
              documentedDateTime: '2019-07-18T01:35:00.000Z',
              isResultModified: true,
            },
          ],
        }],
      },
    };
    const wrapper = shallowWithIntl(<FetalHeartRateView fetalAssessmentResponse={fetalAssessmentResponse.fetalAssessment.fetalHeartRateDetails} />);
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
  });
  it('should render a FetalHeartRateView with fetalAssessmentResponse as null', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const fetalAssessmentResponse = {
      fetalAssessment: {
        fetalHeartRateDetails: null,
      },
    };
    const wrapper = shallowWithIntl(<FetalHeartRateView fetalAssessmentResponse={fetalAssessmentResponse.fetalAssessment.fetalHeartRateDetails} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
    console.error = originalError;
  });
});
