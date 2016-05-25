/**
 * CostPage selectors
 */

import { createSelector } from 'reselect';

const selectCost = () => (state) => state.get('cost');

const selectAws = () => createSelector(
  selectCost(),
  (costState) => {
    // console.log('asdfdsf');
    // console.log(costState);
    // console.log(costState.get('aws'));
    // costState.get('aws').map( (item, index) => {
    //   console.log(item);
    //   console.log(index);
    // })
    costState.get('aws');
  }
);

const selectAwsPrice = () => createSelector(
  selectCost(),
  (costState) => costState.get('aws_price')
);

export {
  selectCost,
  selectAws,
  selectAwsPrice,
};
