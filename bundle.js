!function(){"use strict";function t([t,...n],...e){return e.reduce((t,e)=>t.concat(e,n.shift()),[t]).filter(t=>null!=t).join("")}function n(t,n){return n?`'event.preventDefault();dispatch(${JSON.stringify(t)})';`:setTimeout(s,0,t)}const e="INIT",c="INCREMENT",o="DECREMENT",u=(t=1)=>({type:c,payload:{amount:t}}),a=(t=1)=>({type:o,payload:{amount:t}}),i={count:0},{dispatch:s,connect:r,attach:d}=function(t){function n(){for(const[t,n]of c){const c=n();if(c!==o.get(t)){o.set(t,c),t.innerHTML=c;const n=new CustomEvent("render",{detail:e});t.dispatchEvent(n)}}}let e=t();const c=new Map,o=new Map;return{attach(t,e){c.set(e,t),n()},connect:t=>(...n)=>t(e,...n),dispatch(c,...o){e=t(e,c,o),n()}}}(function(t=i,n={type:e}){switch(n.type){case c:return{count:t.count+n.payload.amount};case o:return{count:t.count-n.payload.amount};default:return t}});window.dispatch=n;const l=r(e=>t`
    <div class="counter">
      <button onclick=${n(u(1),!0)}>
        increment
      </button>
      <button onclick=${n(a(1),!0)}>
        decrement
      </button>
    </div>
  `);d(r(n=>t`
  <div class="container">
    <div class="header">
      <img src="logo.png" />
      <h2>
        you've used an innerself app ${n.count} times...
      </h2>
    </div>
    ${l()}
  </div>
`),document.getElementById("root"))}();
