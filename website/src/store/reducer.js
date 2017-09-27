import { INCREMENT, DECREMENT, INIT } from './actions';

/**
 * initial state for app
 */

const initialState = {
  count: 0
};

/**
 *
 * main application reducer
 *
 */

export function reducer(state = initialState, action = { type: INIT }) {
  switch (action.type) {
    case INCREMENT: {
      return {
        count: state.count + action.payload.amount
      };
    }
    case DECREMENT: {
      return {
        count: state.count - action.payload.amount
      };
    }
    default:
      return state;
  }
}
