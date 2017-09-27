!function(){"use strict";function e([e,...t],...s){return s.reduce((e,s)=>e.concat(s,t.shift()),[e]).filter(e=>null!=e).join("")}const t=e=>e.split(" ").map(e=>e.toLowerCase()).join("-"),s=["Background","Usage","How it works"],n=()=>e`
  <div class="navbar">
    <div class="navbar-logo">
      <img src="logo.png"/>
      <span> innerself </span>
    </div>
    <div class="navbar-links">
      ${s.map(e=>`\n        <a href="#${t(e)}">\n          ${e}\n        </a>\n      `)}
      <a href="https://github.com/stasm/innerself">
        Github
      </a>
    </div>
  </div>
`,i=()=>e`
  <div class="footer">
    © innerself @stas
  </div>
`,o=(e,t=!1)=>`&lt;${t?"/":""}${e}&gt;`,a=()=>e`
  <div id="usage">
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
        ${o("h2")}My Active Tasks${o("h2",!0)}
        ${o("ul")}
            \${tasks.map(ActiveTask)}
        ${o("ul",!0)}
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
    <div class="row">
      <div style="width:100%;text-align:center;margin-top:20px;">
        <a class="large-button" href="#documentation">
          go to full docs
        </a>
      </div>
    </div>
  </div>
`,r=()=>e`
  <div class="background-container">
    <div id="background">
      <h2>Background</h2>
      <p>
        I wrote innerself because I needed to make sense of the UI for a game I wrote for the js13kGames jam. The whole game had to fit into 13KB. I needed something extremely small which would not make me lose sanity. innerself clocks in at under 50 lines of code. That's around 600 bytes minified, ~350 gzipped.
      </p>
    </div>
  </div>
`,c=()=>e`
  <div class="how-it-works-container">
    <div id="how-it-works">
      <div class="row">
        <h2 style="padding-left:10px;">How it works.</h2>
      </div>
      <div class="row">
        <div class="column">
          <p>
            The update cycle starts with the dispatch function which passes the action to the reducer and updates the state.
          </p>
          <p>
          When the state changes, the store compares the entire string output of top-level components (the ones attached to a root element in the DOM) with the output they produced last. This means that most of the time, even a slightest change in output will re-render the entire root.
          </p>
          <p>
            It's possible to dispatch actions which change the state and don't trigger re-renders. For instance in example01 the text input dispatches CHANGE_INPUT actions on keyup events. The current value of the input is then saved in the store. Crucially, this value is not used by the TaskInput component to populate the input element. The whole thing relies on the fact that the native HTML input element stores its own state when the user is typing into it.
          </p>
          <p>
            This limitation was fine for my use-case but it's worth pointing out that it badly hurts accessibility. Any change to the state which causes a re-render will make the currently focused element lose focus.
          </p>
        </div>
        <div class="column">
          <p>
            React is of course much smarter: the Virtual DOM is a lightweight representation of the render tree and updates to components produce an actual diff. React maps the items in the Virtual DOM to the elements in the real DOM and is able to only update what has really changed, regardless of its position in the tree.
          </p>
          <p>
            Here's an interesting piece of trivia that I learned about while working on this project. React only re-renders components when their local state changes, as signaled by this.setState(). The fact that it also looks like components re-render when their props change derives from that as well. Something needs to pass those props in, after all, and this something is the parent component which first needs to decide to re-render itself.
          </p>
          <p>
            When you think about how you can connect components with react-redux to avoid passing state to them from parents it becomes clear why behind the scenes it calls this.setState(dummyState) (which is an empty object) to trigger a re-render of the connected component :) It does this only when the sub-state as described by the selector (mapStateToProps) changes, which is easy to compute (and fast) if the reducers use immutability right. In the best case scenario it only needs to compare the identity of the sub-state to know that it's changed.
          </p>
        </div>
      </div>
    </div>
  </div>
`,h=()=>e`
  <div class="content">
    ${[r(),a(),c()]}
  </div>
`,d="INIT",l="INCREMENT",p="DECREMENT",u={count:0},{dispatch:m,connect:v,attach:f}=function(e){function t(){for(const[e,t]of n){const n=t();if(n!==i.get(e)){i.set(e,n),e.innerHTML=n;const t=new CustomEvent("render",{detail:s});e.dispatchEvent(t)}}}let s=e();const n=new Map,i=new Map;return{attach(e,s){n.set(s,e),t()},connect:e=>(...t)=>e(s,...t),dispatch(n,...i){s=e(s,n,i),t()}}}(function(e=u,t={type:d}){switch(t.type){case l:return{count:e.count+t.payload.amount};case p:return{count:e.count-t.payload.amount};default:return e}});window.dispatch=function(e,t){return t?`'event.preventDefault();dispatch(${JSON.stringify(e)})';`:setTimeout(m,0,e)},f(()=>e`
  <div class="container">
    ${[n(),h(),i()]}
  </div>
`,document.getElementById("root"))}();
