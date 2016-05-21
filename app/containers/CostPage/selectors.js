/**
 * CostPage selectors
 */

import { createSelector } from 'reselect';

const selectCost = () => (state) => state.get('cost');

const selectAws = () => createSelector(
  selectCost(),
  (costState) => costState.get('aws')
);

export {
  selectCost,
  selectAws
};
