import { setLaborCurveHoverData, laborCurveHoverData } from '../../../../src/components/labor-curve/LaborCurveHoverData';

describe('Labor Curve Hover Data', () => {
  it('setLaborCurveData should return data object.', () => {
    const index = new Date('2019-12-17T01:35:00.000Z').toISOString();
    expect(laborCurveHoverData).toEqual(new Map());
    expect(setLaborCurveHoverData('2019-12-17T01:35:00.000Z', 'Cervix Dilation', 'M24,48C10.7,48,0,37.3,0,24S10.7,0,24,0s24,10.7,24,24S37.3,48,24,48z', '#007cc3', 5, 'cms')).toMatchSnapshot();
    expect(laborCurveHoverData[index]).toEqual([{
      event: 'Cervix Dilation',
      value: 5,
      resultUnit: 'cms',
      shape: 'M24,48C10.7,48,0,37.3,0,24S10.7,0,24,0s24,10.7,24,24S37.3,48,24,48z',
      color: '#007cc3',
    }]);
  });
});
