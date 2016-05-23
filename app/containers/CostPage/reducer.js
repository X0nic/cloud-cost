/*
 * CostReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  CHANGE_USERNAME,
} from './constants';
import { fromJS } from 'immutable';

import pricing from './data/aws';

// The initial state of the App
const initialState = fromJS({
  aws: pricing
});

function costReducer(state = initialState, action) {
  switch (action.type) {
    default:
      // console.log(state);
      return state;
  }
}

export default costReducer;

