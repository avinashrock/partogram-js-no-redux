import moment from 'moment-timezone';
import { inAmbiguousTime, getFormattedDateTime } from '../../../../src/application/helpers/FormatDateTimeValue';

describe('FormatDateTimeValue method', () => {
  it('inAmbiguosTime returns a boolean value which helps to decide if the value was charted in the right timeframe.', () => {
    expect(inAmbiguousTime(moment('2019-11-03T06:59:59Z'), 'Asia/Calcutta')).toEqual(false);
  });
  it('inAmbiguosTime returns a boolean value which helps to decide if the value was charted in the right timeframe honoring DST', () => {
    expect(inAmbiguousTime(moment('2019-11-03T06:59:59Z'), 'America/Chicago')).toEqual(true);
  });
  it('inAmbiguosTime returns a boolean value when the date time format is not correct', () => {
    expect(inAmbiguousTime(moment('dummystring'), 'America/Chicago')).toEqual(false);
  });
  it('getFormattedDateTime returns the formatted date and time when format is ll', () => {
    const formattedDateTime = 'May 22, 2019';
    expect(getFormattedDateTime('2019-05-22T05:00:00Z', 'Asia/Calcutta', 'll')).toEqual(formattedDateTime);
  });
});
