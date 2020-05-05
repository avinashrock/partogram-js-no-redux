import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';
import AdditionalClinicalDetailsDisplay from '../../../../src/components/overview/AdditionalClinicalDetailsDisplay';


describe('AdditionalClinicalDetailsDisplay', () => {
  it('AdditionalClinicalDetailsDisplay component should match its snapshot when there is dynamic label and isResultModified is true',
    () => {
      const wrapper = shallowWithIntl(<AdditionalClinicalDetailsDisplay
        clinicalDetailsDynamiclabel="dynamiclabel"
        clinicalDetailsDynamicValue="dynamicvalue"
        clinicalDetailslabel="label"
        clinicalDetailsValue="value"
        criticality="high"
      />);
      expect(wrapper).toMatchSnapshot();
    });
  it('AdditionalClinicalDetailsDisplay component should match its snapshot when there is dynamic label and isResultModified is false', () => {
    const wrapper = shallowWithIntl(<AdditionalClinicalDetailsDisplay
      clinicalDetailsDynamiclabel="dynamiclabel"
      clinicalDetailsDynamicValue="dynamicvalue"
      clinicalDetailslabel="label"
      clinicalDetailsValue="value"
      criticality="high"
    />);
    expect(wrapper).toMatchSnapshot();
  });
  it('AdditionalClinicalDetailsDisplay component should match its snapshot when the dynamic label is undefined and isResultModified is false', () => {
    const wrapper = shallowWithIntl(<AdditionalClinicalDetailsDisplay
      clinicalDetailsDynamiclabel={undefined}
      clinicalDetailsDynamicValue={undefined}
      clinicalDetailslabel="label"
      clinicalDetailsValue="value"
      criticality="high"
    />);
    expect(wrapper).toMatchSnapshot();
  });
  it('AdditionalClinicalDetailsDisplay component should match its snapshot when the dynamic label is undefined and isResultModified is true', () => {
    const wrapper = shallowWithIntl(<AdditionalClinicalDetailsDisplay
      clinicalDetailsDynamiclabel={undefined}
      clinicalDetailsDynamicValue={undefined}
      clinicalDetailslabel="label"
      clinicalDetailsValue="value"
      criticality="high"
    />);
    expect(wrapper).toMatchSnapshot();
  });
  it('AdditionalClinicalDetailsDisplay component should match its snapshot when the dynamic label is undefined and isResultModified is true', () => {
    const wrapper = shallowWithIntl(<AdditionalClinicalDetailsDisplay
      clinicalDetailsDynamiclabel={undefined}
      clinicalDetailsDynamicValue={undefined}
      clinicalDetailslabel="label"
      clinicalDetailsValue="value"
      criticality={undefined}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
