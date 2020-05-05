import React from 'react';
import { loadTranslation } from 'enzyme-react-intl';
import EpiduralGraph from '../../../../src/components/epidural/EpiduralGraph';

loadTranslation('../../../translations/en-US.json');

describe('EpiduralGraph component', () => {
  const mockMedicationData = {
    medicationDetails: {
      epiduralDetails: [
        {
          display: 'Epidural Start',
          type: 'EPIDURAL_START',
          value: '2019-10-11T11:23:00Z',
          dateTime: '2019-07-26T08:00:00Z',
        },
        {
          display: 'Epidural Bolus, Anesthesia',
          type: 'EPIDURAL_BOLUS_ANESTHESIA',
          value: '2019-10-11T09:30:00Z',
          dateTime: '2019-07-26T10:00:00Z',
        },
        {
          display: 'Epidural Bolus, Patient',
          type: 'EPIDURAL_BOLUS_PATIENT',
          value: '2019-10-11T09:52:00Z',
          dateTime: '2019-07-26T14:00:00Z',
        },
        {
          display: 'Epidural Discontinued',
          type: 'EPIDURAL_DISCONTINUED',
          value: '2019-10-11T09:52:00Z',
          dateTime: '2019-07-26T15:00:00Z',
        },
      ],
    },
  };

  const mockTimelineData = {
    endDate: new Date('2019-10-11T12:30:00.000Z'),
    initialLoadDate: new Date('2019-10-24T06:39:37.000Z'),
    is12HourTime: false,
    viewData: {
      lower: {
        offset: (a) => new Date('2019-10-11T12:30:00.000Z'),
      },
    },
    getTimebarWidth: jest.fn(),
    margin: { left: 320, right: 10 },
    startDate: new Date('2019-10-11T00:30:00.000Z'),
    tickValues: {
      upperBar: [],
      lowerBar: [new Date('2019-10-11T00:30:00.000Z'), new Date('2019-10-11T06:30:00.000Z')],
    },
  };

  it('Should load properly without error', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = mount(<EpiduralGraph medicationDetails={mockMedicationData.medicationDetails} timelineProps={mockTimelineData} createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })} />);
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
  });
  it('Should cover else part for null props', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = mount(<EpiduralGraph
      medicationDetails={{ epiduralDetails: [] }}
      timelineProps={mockTimelineData}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
    />);
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
  });
  describe('componentWillUnmount', () => {
    it('should call destory function', () => {
      const originalError = console.error;
      console.error = jest.fn();
      const wrapper = mount(<EpiduralGraph medicationDetails={mockMedicationData.medicationDetails} timelineProps={mockTimelineData} createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })} />);
      const destroySpy = jest.fn();
      wrapper.instance().destroy = destroySpy;
      expect(destroySpy).not.toHaveBeenCalled();
      wrapper.instance().componentWillUnmount();
      expect(destroySpy).toHaveBeenCalled();
      console.error = originalError;
    });
  });
  describe('destroy', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = mount(<EpiduralGraph
      medicationDetails={mockMedicationData.medicationDetails}
      timelineProps={mockTimelineData}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
    />);
    console.error = originalError;
    it('should call graphInstance.destroy() and nullify graphInstance', () => {
      const destroySpy = jest.fn();
      wrapper.instance().graphInstance = { destroy: destroySpy };
      expect(destroySpy).not.toHaveBeenCalled();
      wrapper.instance().destroy();
      expect(destroySpy).toHaveBeenCalled();
      expect(wrapper.instance().graphInstance).toEqual(null);
    });
    it('should call graphInstance.destroy() else part', () => {
      const destroySpy = jest.fn();
      wrapper.instance().graphInstance = null;
      expect(destroySpy).not.toHaveBeenCalled();
      wrapper.instance().destroy();

      expect(wrapper.instance().graphInstance).toEqual(null);
    });
  });
  describe('componentDidUpdate', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = mount(<EpiduralGraph
      medicationDetails={mockMedicationData.medicationDetails}
      timelineProps={mockTimelineData}
      createGraph={() => ({ unloadContent: jest.fn(), loadContent: jest.fn() })}
    />);
    console.error = originalError;
    it('should call the componentDidUpdate', () => {
      const changedTimelineData = {
        endDate: new Date('2019-10-11T12:30:00.000Z'),
        initialLoadDate: new Date('2019-10-24T06:39:37.000Z'),
        is12HourTime: false,
        viewData: {
          lower: {
            offset: (a) => new Date('2019-10-11T12:30:00.000Z'),
          },
        },
        margin: { left: 320, right: 10 },
        startDate: new Date('2019-10-11T00:30:00.000Z'),
        tickValues: {
          upperBar: [],
          lowerBar: [new Date('2019-10-11T00:30:00.000Z'), new Date('2019-10-11T06:30:00.000Z')],
        },
      };

      const destroySpy = jest.fn();
      wrapper.instance().graphInstance = { destroy: destroySpy };

      wrapper.instance().componentDidUpdate({ timelineProps: changedTimelineData });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
