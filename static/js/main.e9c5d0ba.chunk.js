(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(9),a=n.n(c),r=(n(64),n(29)),o=n(20),l=n(24),s=n(16),d=(n(65),n(114)),j=n(104),u=n(105),b=n(5);function O(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)(null),o=Object(s.a)(r,2),l=o[0],O=o[1],f=function(){""!==c.trim()?(e.addItem(c),a("")):O("Title is required")};return Object(b.jsxs)("div",{children:[Object(b.jsx)(d.a,{variant:"outlined",error:!!l,value:c,onChange:function(e){a(e.currentTarget.value)},onKeyPress:function(e){O(null),13===e.charCode&&f()},label:"Title",helperText:l}),Object(b.jsx)(j.a,{color:"primary",onClick:f,children:Object(b.jsx)(u.a,{})})]})}function f(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)(e.value),o=Object(s.a)(r,2),l=o[0],j=o[1];return c?Object(b.jsx)(d.a,{variant:"outlined",value:l,onChange:function(e){j(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),e.onChange(l)}}):Object(b.jsx)("span",{onDoubleClick:function(){a(!0),j(e.value)},children:e.value})}var h=n(116),v=n(107),x=n(106);function g(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:[" ",Object(b.jsx)(f,{value:e.title,onChange:function(t){e.changeTodolistTitle(e.id,t)}}),Object(b.jsx)(j.a,{onClick:function(){e.removeTodolist(e.id)},children:Object(b.jsx)(x.a,{})})]}),Object(b.jsx)(O,{addItem:function(t){e.addTask(t,e.id)}}),Object(b.jsx)("div",{children:e.tasks.map((function(t){return Object(b.jsxs)("div",{className:t.isDone?"is-done":"",children:[Object(b.jsx)(h.a,{checked:t.isDone,color:"primary",onChange:function(n){var i=n.currentTarget.checked;e.changeTaskStatus(t.id,i,e.id)}}),Object(b.jsx)(f,{value:t.title,onChange:function(n){e.changeTaskTitle(t.id,n,e.id)}}),Object(b.jsx)(j.a,{onClick:function(){return e.removeTask(t.id,e.id)},children:Object(b.jsx)(x.a,{})})]},t.id)}))}),Object(b.jsxs)("div",{children:[Object(b.jsx)(v.a,{variant:"all"===e.filter?"outlined":"text",onClick:function(){return e.changeFilter("all",e.id)},color:"default",children:"All"}),Object(b.jsx)(v.a,{variant:"active"===e.filter?"outlined":"text",onClick:function(){return e.changeFilter("active",e.id)},color:"primary",children:"Active"}),Object(b.jsx)(v.a,{variant:"completed"===e.filter?"outlined":"text",onClick:function(){return e.changeFilter("completed",e.id)},color:"secondary",children:"Completed"})]})]})}var m=n(115),k=n(108),p=n(109),T=n(111),C=n(112),D=n(113),S=n(73),y=n(110);var w=function(){var e,t=Object(m.a)(),n=Object(m.a)(),c=Object(i.useState)([{id:t,title:"What to learn",filter:"all"},{id:n,title:"What to buy",filter:"all"}]),a=Object(s.a)(c,2),d=a[0],u=a[1],f=Object(i.useState)((e={},Object(l.a)(e,t,[{id:Object(m.a)(),title:"HTML&CSS",isDone:!0},{id:Object(m.a)(),title:"JS",isDone:!0}]),Object(l.a)(e,n,[{id:Object(m.a)(),title:"Milk",isDone:!0},{id:Object(m.a)(),title:"React Book",isDone:!0}]),e)),h=Object(s.a)(f,2),x=h[0],w=h[1];function F(e,t){var n=x[t];x[t]=n.filter((function(t){return t.id!=e})),w(Object(o.a)({},x))}function B(e,t){var n={id:Object(m.a)(),title:e,isDone:!1},i=x[t];x[t]=[n].concat(Object(r.a)(i)),w(Object(o.a)({},x))}function I(e,t,n){var i=x[n].find((function(t){return t.id===e}));i&&(i.isDone=t,w(Object(o.a)({},x)))}function W(e,t,n){var i=x[n].find((function(t){return t.id===e}));i&&(i.title=t,w(Object(o.a)({},x)))}function A(e,t){var n=d.find((function(e){return e.id===t}));n&&(n.filter=e,u(Object(r.a)(d)))}function J(e){u(d.filter((function(t){return t.id!=e}))),delete x[e],w(Object(o.a)({},x))}function N(e,t){var n=d.find((function(t){return t.id===e}));n&&(n.title=t,u(Object(r.a)(d)))}return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(k.a,{position:"static",children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(j.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(b.jsx)(y.a,{})}),Object(b.jsx)(T.a,{variant:"h6",children:"News"}),Object(b.jsx)(v.a,{color:"inherit",children:"Login"})]})}),Object(b.jsxs)(C.a,{fixed:!0,children:[Object(b.jsx)(D.a,{container:!0,style:{padding:"20px"},children:Object(b.jsx)(O,{addItem:function(e){var t=Object(m.a)();u([{id:t,title:e,filter:"all"}].concat(Object(r.a)(d))),w(Object(o.a)(Object(o.a)({},x),{},Object(l.a)({},t,[])))}})}),Object(b.jsx)(D.a,{container:!0,spacing:3,children:d.map((function(e){var t=x[e.id],n=t;return"active"===e.filter&&(n=t.filter((function(e){return!1===e.isDone}))),"completed"===e.filter&&(n=t.filter((function(e){return!0===e.isDone}))),Object(b.jsx)(D.a,{item:!0,children:Object(b.jsx)(S.a,{style:{padding:"10px"},children:Object(b.jsx)(g,{id:e.id,title:e.title,tasks:n,removeTask:F,changeFilter:A,addTask:B,changeTaskStatus:I,filter:e.filter,removeTodolist:J,changeTaskTitle:W,changeTodolistTitle:N},e.id)})})}))})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(b.jsx)(w,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.e9c5d0ba.chunk.js.map