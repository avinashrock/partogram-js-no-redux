import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import ContractionView from '../../../../src/components/contraction/ContractionView';

loadTranslation('../../../../translations/en-US.json');


describe('Contraction View', () => {
  it('FetalHeartRateView should match snapshot', () => {
    const wrapper = shallowWithIntl(<ContractionView />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a ContractionView that has failed', () => {
    const wrapper = shallowWithIntl(<ContractionView isFailed />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a ContractionView that has failed', () => {
    const wrapper = shallowWithIntl(<ContractionView isLoading />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a ContractionView that has failed', () => {
    const wrapper = shallowWithIntl(<ContractionView isFailed errorResponse={500} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a ContractionView that has failed', () => {
    const wrapper = shallowWithIntl(<ContractionView isFailed errorResponse={401} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a ContractionView that has failed', () => {
    const wrapper = shallowWithIntl(<ContractionView isFailed errorResponse={404} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a ContractionView that has failed', () => {
    const wrapper = shallowWithIntl(<ContractionView isFailed errorResponse={400} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
  });
  it('should render a ContractionView with contractionResponse', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const contractionResponse = {
      uterineAssessment: {
        contractionFrequencyDisplay: 'Parto contraction freq',
        contractionIntensityDisplay: 'Parto contraction Intensity',
        contractionDetails: [
          {
            contractionFrequency: '6',
            contractionIntensity: 'Moderate',
            nomenclatureID: '960970',
            frequencyUnit: null,
            resultDateTime: '2020-01-09T06:00:00Z',
            isModifiedFrequency: false,
            isModifiedIntensity: false,
          },
          {
            contractionFrequency: '10',
            contractionIntensity: 'Moderate',
            nomenclatureID: '960970',
            frequencyUnit: null,
            resultDateTime: '2020-01-09T06:15:00Z',
            isModifiedFrequency: false,
            isModifiedIntensity: false,
          }],
      },
    };
    const wrapper = shallowWithIntl(<ContractionView isLoading={false} isFailed={false} contractionResponse={contractionResponse} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a ContractionView with contractionResponse as null', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const contractionResponse = null;
    const wrapper = shallowWithIntl(<ContractionView contractionResponse={contractionResponse} />);
    expect(wrapper.first().shallow()).toMatchSnapshot();
    console.error = originalError;
  });
  describe('check toggleHeader function', () => {
    const contractionResponse = {
      uterineAssessment: {
        contractionFrequencyDisplay: 'Parto contraction freq',
        contractionIntensityDisplay: 'Parto contraction Intensity',
        contractionDetails: [
          {
            contractionFrequency: '6',
            contractionIntensity: 'Moderate',
            nomenclatureID: '960970',
            frequencyUnit: null,
            resultDateTime: '2020-01-09T06:00:00Z',
            isModifiedFrequency: false,
            isModifiedIntensity: false,
          },
          {
            contractionFrequency: '10',
            contractionIntensity: 'Moderate',
            nomenclatureID: '960970',
            frequencyUnit: null,
            resultDateTime: '2020-01-09T06:15:00Z',
            isModifiedFrequency: false,
            isModifiedIntensity: false,
          }],
      },
    };
    const wrapper = shallowWithIntl(<ContractionView contractionResponse={contractionResponse} />);
    it('should call toggleHeader', () => {
      const originalError = jest.fn();
      const spyFnc = jest.fn();
      wrapper.dive().instance().toggleHeader = spyFnc;
      expect(spyFnc).not.toHaveBeenCalled();
      wrapper.dive().instance().toggleHeader();
      expect(wrapper).toMatchSnapshot();
      console.error = originalError;
    });
  });
});
