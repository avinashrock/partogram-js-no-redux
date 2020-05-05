import { Util } from 'stella-timeline';

/**
   * A helper function to filter upper steps.It returns upper steps that are aligned with lower steps.
   * @param {Date[]} upperBar - Array of Date objects to be displayed on upper bar
   * @param {Date[]} lowerSteps - Array of Date objects to be displayed on lower bar
   * @returns {Date[]} filtered upper steps
   */
export default function getTimelineMiddleBar(upperBar, lowerBar, interval) {
  const filteredUpperSteps = (upperBar && lowerBar) ? upperBar.filter((upper) => lowerBar.map((s) => s.getTime()).includes(upper.getTime())) : undefined;
  return Util.calculateMidPoints(filteredUpperSteps, lowerBar, interval);
}

export const getTicks = (timelineProps) => {
  // Calculate middle steps using lower and upper steps.
  const lowerBarTicks = timelineProps.tickValues.lowerBar;
  const upperBarTicks = timelineProps.tickValues.upperBar;

  const middleBar = getTimelineMiddleBar(upperBarTicks, lowerBarTicks, timelineProps.viewData);

  const lowerTicks = lowerBarTicks ? lowerBarTicks.map((lowerStep) => lowerStep.toISOString()) : undefined;
  const upperTicks = upperBarTicks ? upperBarTicks.map((upperStep) => upperStep.toISOString()) : undefined;
  const middleTicks = middleBar ? middleBar.map((middleStep) => middleStep.toISOString()) : undefined;

  // return tick object
  return {
    lowerStepTickValues: lowerTicks,
    midpointTickValues: middleTicks,
    upperStepTickValues: upperTicks,
  };
};
