/**
 * CostPage selectors
 */

import { createSelector } from 'reselect';

const selectCost = () => (state) => state.get('cost');

const selectAwsPrice = () => createSelector(
  selectCost(),
  (costState) => costState.get('aws_price')
);

export {
  selectCost,
  selectAwsPrice,
};
