import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs';
import EpiduralContainer from '../../../../src/components/epidural/EpiduralContainer';
import EpiduralGraph from '../../../../src/components/epidural/EpiduralGraph';

loadTranslation('../../../translations/en-US.json');


describe('Epidural Component', () => {
  let mockMedicationData = {
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

  it('Component should load properly without error', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(<EpiduralContainer medicationDetails={mockMedicationData.medicationDetails} />);
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
  });
  it('Component should not load if epidural details are empty', () => {
    mockMedicationData = {
      medicationDetails: {
        epiduralDetails: [],
      },
    };

    const originalError = console.error;
    console.error = jest.fn();
    const wrapper = shallowWithIntl(<EpiduralContainer medicationDetails={mockMedicationData.medicationDetails} />);
    expect(wrapper).toMatchSnapshot();
    console.error = originalError;
  });
  describe('functions are getting called', () => {
    const mockMedicationDetails = {
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
    it('passes a createGraph function to EpiduralGraph', () => {
      const wrapper = shallow(<EpiduralContainer medicationDetails={mockMedicationDetails} timelineProps={mockTimelineData} />);

      const graphSpy = jest.fn();
      const orig = Carbon.api.gantt;
      Carbon.api.gantt = graphSpy;

      expect(graphSpy).not.toHaveBeenCalled();
      wrapper.find(EpiduralGraph).props().createGraph();
      expect(graphSpy).toHaveBeenCalled();

      Carbon.api.gantt = orig;
    });
    it('should call handleOnClose function', () => {
      const wrapper = shallow(<EpiduralContainer medicationDetails={mockMedicationDetails} timelineProps={mockTimelineData} />);
      const toggleSelection = jest.fn();
      const mockSelectedDataPoint = {
        key: 'medication_uid_1',
        toggleSelection,
        index: 1,
        config: {},
      };
      wrapper.instance().setState({ isOpen: true, selectedDataPoint: mockSelectedDataPoint });
      wrapper.instance().handleOnClose();
    });
    it('should call handleOnclose function with selectedDataPoint as null', () => {
      const wrapper = shallow(<EpiduralContainer medicationDetails={mockMedicationDetails} timelineProps={mockTimelineData} />);
      wrapper.instance().handleOnClose();
    });
    it('should call handlePopup function', () => {
      const wrapper = shallow(<EpiduralContainer medicationDetails={mockMedicationDetails} timelineProps={mockTimelineData} />);
      const toggleSelection = jest.fn();
      wrapper.instance().handlePopup('medication_uid_1', toggleSelection, 1, []);
    });
    it('should call handlePopup function with selectedDataPoint', () => {
      const wrapper = shallow(<EpiduralContainer medicationDetails={mockMedicationDetails} timelineProps={mockTimelineData} />);
      const toggleSelection = jest.fn();
      const mockSelectedDataPoint = {
        key: 'medication_uid_1',
        toggleSelection,
        index: 1,
        config: {},
      };
      wrapper.instance().setState({ selectedDataPoint: mockSelectedDataPoint });
      wrapper.instance().handlePopup('medication_uid_1', toggleSelection, 1, []);
    });
  });
});
