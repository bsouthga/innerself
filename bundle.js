!function(){"use strict";function e([e,...t],...n){return n.reduce((e,n)=>e.concat(n,t.shift()),[e]).filter(e=>null!=e).join("")}const t=["Home","Examples","Documentation","Download","Github"],n=()=>e`
  <div class="navbar">
    <div class="navbar-logo">
      <img src="logo.png"/>
      <span> innerself </span>
    </div>
    <div class="navbar-links">
      ${t.map(e=>`\n        <a href="#${e.toLowerCase()}">\n          ${e}\n        </a>\n      `)}
    </div>
  </div>
`,o=()=>e`
  <div class="footer">
    © innerself @stas
  </div>
`,a=(e,t=!1)=>`&lt;${t?"/":""}${e}&gt;`,i=()=>e`
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
        ${a("h2")}My Active Tasks${a("h2",!0)}
        ${a("ul")}
            \${tasks.map(ActiveTask)}
        ${a("ul",!0)}
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
`,s=()=>e`
  <div class="background-container">
    <div class="background">
      <h2>Background</h2>
      <p>
        I wrote innerself because I needed to make sense of the UI for a game I wrote for the js13kGames jam. The whole game had to fit into 13KB. I needed something extremely small which would not make me lose sanity. innerself clocks in at under 50 lines of code. That's around 600 bytes minified, ~350 gzipped.
      </p>
    </div>
  </div>
`,c=()=>e`
  <div class="content">
    ${[s(),i()]}
  </div>
`,r="INIT",d="INCREMENT",l="DECREMENT",u={count:0},{dispatch:v,connect:h,attach:p}=function(e){function t(){for(const[e,t]of o){const o=t();if(o!==a.get(e)){a.set(e,o),e.innerHTML=o;const t=new CustomEvent("render",{detail:n});e.dispatchEvent(t)}}}let n=e();const o=new Map,a=new Map;return{attach(e,n){o.set(n,e),t()},connect:e=>(...t)=>e(n,...t),dispatch(o,...a){n=e(n,o,a),t()}}}(function(e=u,t={type:r}){switch(t.type){case d:return{count:e.count+t.payload.amount};case l:return{count:e.count-t.payload.amount};default:return e}});window.dispatch=function(e,t){return t?`'event.preventDefault();dispatch(${JSON.stringify(e)})';`:setTimeout(v,0,e)},p(()=>e`
  <div class="container">
    ${[n(),c(),o()]}
  </div>
`,document.getElementById("root"))}();
