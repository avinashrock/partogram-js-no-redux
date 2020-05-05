import { setFHRHoverData, fhrHoverData } from '../../../../src/components/fetal-heart-rate/FetalHeartRateHoverData';

describe('Fetal Heart Rate hover data', () => {
  it('setFHRHoverData should return fhr hover data Object', () => {
    const index = new Date('2019-12-12T18:30:00.000Z').toISOString();
    expect(fhrHoverData).toEqual(new Map());
    expect(setFHRHoverData('2019-12-12T18:30:00.000Z', 'Baby B - Intermittent', 110, 'bpm', 'M0,16h16V0h16v16h16v16H32v16H16V32H0V16z', '#a5d784', false)).toMatchSnapshot();
    expect(fhrHoverData[index]).toEqual([{
      event: 'Baby B - Intermittent',
      value: 110,
      resultUnit: 'bpm',
      shape: 'M0,16h16V0h16v16h16v16H32v16H16V32H0V16z',
      color: '#a5d784',
      isResultModified: false,
    }]);
  });
});
