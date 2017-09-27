import { createStore } from 'innerself';
import { reducer } from './reducer';

const { dispatch: originalDispatch, connect, attach } = createStore(reducer);
window.dispatch = dispatch;

/**
 * convenience wrapper for components
 *
 * @param action application action
 * @param toString whether or not to produce a string (for element events)
 */

export function dispatch(action, toString) {
  if (toString) {
    const actionString = JSON.stringify(action);
    return `'event.preventDefault();dispatch(${actionString})';`;
  }
  return setTimeout(originalDispatch, 0, action);
}

export * from './actions';

export { connect, attach };
