import html from 'innerself';

const tag = (str, close = false) => `&lt;${close ? '/' : ''}${str}&gt;`;

export const Usage = () => html`
  <div class="usage">
    <div class="row">
      <div class="column">
        <h2>
          Basic Usage
        </h2>
        <p>
          <i>innerself</i> expects you to build a serialized version of your DOM which will then be assigned to <code>innerHTML</code> of a root element. The <code>html</code> helper allows you to easily interpolate Arrays.
        </p>
      </div>
      <div class="column">
        <pre>
import html from "innerself";
import ActiveTask from "./ActiveTask";

export default function ActiveList(tasks) {
    return html\`
        ${tag('h2')}My Active Tasks${tag('h2', true)}
        ${tag('ul')}
            \${tasks.map(ActiveTask)}
        ${tag('ul', true)}
    \`;
}
        </pre>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <p>
        The state of your app lives in a store, which you create by passing the reducer function to createStore:
        </p>
      </div>
      <div class="column">
        <pre>
const {
  attach,
  connect,
  dispatch
} = createStore(reducer);

window.dispatch = dispatch;
export { attach, connect };
        </pre>
      </div>
    </div>
    <div style="width:100%;text-align:center;margin-top:20px;">
      <a class="large-button" href="#documentation">
        go to full docs
      </a>
    </div>
  </div>
`;