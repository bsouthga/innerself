!function(){"use strict";function n([n,...t],...e){return e.reduce((n,e)=>n.concat(e,t.shift()),[n]).filter(n=>null!=n).join("")}const t=["Home","Examples","Documentation","Download","Github"],e=()=>n`
  <div class="navbar">
    <div class="navbar-logo">
      <img src="logo.png"/>
      <span> innerself </span>
    </div>
    <div class="navbar-links">
      ${t.map(n=>`\n        <a href="#${n.toLowerCase()}">\n          ${n}\n        </a>\n      `)}
    </div>
  </div>
`,s=()=>n`
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
`,a=()=>n`
  <div class="footer">
    © innerself @stas
  </div>
`,i="INIT",c="INCREMENT",o="DECREMENT",d={count:0},{dispatch:r,connect:u,attach:v}=function(n){function t(){for(const[n,t]of s){const s=t();if(s!==a.get(n)){a.set(n,s),n.innerHTML=s;const t=new CustomEvent("render",{detail:e});n.dispatchEvent(t)}}}let e=n();const s=new Map,a=new Map;return{attach(n,e){s.set(e,n),t()},connect:n=>(...t)=>n(e,...t),dispatch(s,...a){e=n(e,s,a),t()}}}(function(n=d,t={type:i}){switch(t.type){case c:return{count:n.count+t.payload.amount};case o:return{count:n.count-t.payload.amount};default:return n}});window.dispatch=function(n,t){return t?`'event.preventDefault();dispatch(${JSON.stringify(n)})';`:setTimeout(r,0,n)},v(()=>n`
  <div class="container">
    ${[e(),s(),a()]}
  </div>
`,document.getElementById("root"))}();
