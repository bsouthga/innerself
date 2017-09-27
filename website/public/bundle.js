(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function () {
'use strict';

function html([first, ...strings], ...values) {
    // Weave the literal strings and the interpolations.
    // We don't have to explicitly handle array-typed values
    // because concat will spread them flat for us.
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )

    // Filter out interpolations which are null or undefined.  null is
    // loosely-equal only to undefined and itself.
    .filter(value => value != null)
    .join("");
}

function createStore(reducer) {
    let state = reducer();
    const roots = new Map();
    const prevs = new Map();

    function render() {
        for (const [root, component] of roots) {
            const output = component();

            // Poor man's Virtual DOM implementation :)  Compare the new output
            // with the last output for this root.  Don't trust the current
            // value of root.innerHTML as it may have been changed by other
            // scripts or extensions.
            if (output !== prevs.get(root)) {
                prevs.set(root, output);
                root.innerHTML = output;

                // Dispatch an event on the root to give developers a chance to
                // do some housekeeping after the whole DOM is replaced under
                // the root. You can re-focus elements in the listener to this
                // event. See example03.
                const event = new CustomEvent("render", { detail: state });
                root.dispatchEvent(event);
            }
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component);
            render();
        },
        connect(component) {
            // Return a decorated component function.
            return (...args) => component(state, ...args);
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        },
    };
}

const links = [
  'Home',
  'Examples',
  'Documentation',
  'Download',
  'Github'
];

const Navbar = () => html`
  <div class="navbar">
    <div class="navbar-logo">
      <img src="logo.png"/>
      <span> innerself </span>
    </div>
    <div class="navbar-links">
      ${links.map(link => `
        <a href="#${link.toLowerCase()}">
          ${link}
        </a>
      `)}
    </div>
  </div>
`;

const Content = () => html`
  <div class="content">
    <div class="hero">

    </div>
    <div class="abstract">

    </div>
    <div class="background">

    </div>
    <div class="usage">

    </div>
    <div class="how-it-works">

    </div>
  </div>
`;

const Footer = () => html`
  <div class="footer">
    © innerself @stas
  </div>
`;

const App = () => html`
  <div class="container">
    ${[
      Navbar(),
      Content(),
      Footer()
    ]}
  </div>
`;

/**
 * action types
 */

const INIT = 'INIT';

const INCREMENT = 'INCREMENT';

const DECREMENT = 'DECREMENT';

/**
 *
 * app action creators
 *
 */

const initialState = {
  count: 0
};

/**
 *
 * main application reducer
 *
 */

function reducer(state = initialState, action = { type: INIT }) {
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

const { dispatch: originalDispatch, connect, attach } = createStore(reducer);
window.dispatch = dispatch;

/**
 * convenience wrapper for components
 *
 * @param action application action
 * @param toString whether or not to produce a string (for element events)
 */

function dispatch(action, toString) {
  if (toString) {
    const actionString = JSON.stringify(action);
    return `'event.preventDefault();dispatch(${actionString})';`;
  }
  return setTimeout(originalDispatch, 0, action);
}

attach(App, document.getElementById('root'));

}());
