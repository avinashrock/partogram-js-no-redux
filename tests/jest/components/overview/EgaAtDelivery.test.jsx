import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';
import EgaAtDelivery from '../../../../src/components/overview/EgaAtDelivery';


describe('EgaAtDelivery component', () => {
  it('EgaAtDelivery component should match its snapshot when delivery value exists', () => {
    const egaData = [{
      egaLabel: 'EGA at Delivery', value: undefined,
    }, {
      deliveryLabel: 'Baby B', deliveryValue: '39w 4d',
    }];
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(<EgaAtDelivery egaData={egaData} />);
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
  });
  it('EgaAtDelivery component should match its snapshot when delivery value is --', () => {
    const egaData = [{
      egaLabel: 'EGA at Delivery', value: undefined,
    }, {
      deliveryLabel: 'Baby B', deliveryValue: '--',
    }];
    const wrapper = shallowWithIntl(<EgaAtDelivery egaData={egaData} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('EgaAtDelivery component should match its snapshot when value is --', () => {
    const egaData = [{
      label: 'EGA at Delivery', value: '--',
    },
    ];
    const wrapper = shallowWithIntl(<EgaAtDelivery egaData={egaData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
