(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),l=(n(14),n(7)),i=n(8),u=n(1),m=(n(15),Object(a.createContext)(null)),d=function(e){var t=e.todo,n=t.completed,r=t.id,c=t.title,l=Object(a.useContext)(m),i=l.markComplete,u=l.delTodo;return o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return i(r)}}),"",c,o.a.createElement("button",{onClick:function(){return u(r)}},"x")))},s=function(e){var t=e.todos;return o.a.createElement(o.a.Fragment,null,t.map((function(e){return o.a.createElement(d,{key:e.id,todo:e})})))},p=function(){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Todo"))},f=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useContext)(m).addTodo;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e&&(c(n),r(""))},style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:n,onChange:function(e){r(e.target.value)},autoComplete:"off"}),o.a.createElement("input",{type:"submit",value:"submit",style:{flex:"1"}}))},v=n(6),E=n.n(v),b=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",null,o.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onload=function(){return r(n.result)},n.onerror=function(e){return console.log("Error: ",e)}},name:"img",accept:"image/*"}),o.a.createElement("img",{src:n,alt:"preview"}))},h=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Container"},o.a.createElement(m.Provider,{value:{addTodo:function(e){var t={id:E.a.v4(),title:e,completed:!1};r([].concat(Object(l.a)(n),[t]))},markComplete:function(e){r(n.map((function(t){return t.id===e?Object(i.a)({},t,{completed:!t.completed}):t})))},delTodo:function(e){r(n.filter((function(t){return t.id!==e})))}}},o.a.createElement(p,null),o.a.createElement(b,null),o.a.createElement(f,null),o.a.createElement(s,{todos:n}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.7e9e69bd.chunk.js.map