(this.webpackJsonptha21=this.webpackJsonptha21||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(6),s=n.n(a),r=n(7),j=n(2),l=(n(12),n(0)),i=function(e){var t=e.handleAddTodo,n=e.cals,c=e.setCals,a=e.val,s=e.setVal;return Object(l.jsxs)("form",{className:"panel",onSubmit:t,children:[Object(l.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter Food Name",className:"inputOne"}),Object(l.jsx)("input",{type:"number",value:a,onChange:function(e){return s(e.target.value)},placeholder:"Enter Calori Amount",className:"inputTwo"}),Object(l.jsx)("button",{className:"BtnOne",children:"Add"})]})},u=function(e){var t=e.ca,n=e.va,a=Object(c.useState)(!0),s=Object(j.a)(a,2),r=s[0],i=s[1],u=Object(c.useState)(t),o=Object(j.a)(u,2),b=o[0],d=o[1],O=Object(c.useState)(n),h=Object(j.a)(O,2),v=h[0],x=h[1],m=Object(c.useState)(!0),p=Object(j.a)(m,2),f=p[0],N=p[1];return f?Object(l.jsxs)("div",{className:"list",children:[r?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("span",{children:b})}),Object(l.jsx)("div",{className:"desc",children:isNaN(v)?Object(l.jsx)("span",{children:"Expected a Number in Calori"}):Object(l.jsxs)("span",{children:["You have consumed ",v," calories"]})})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{value:b,onChange:function(e){return d(e.target.value)}}),Object(l.jsx)("input",{value:v,onChange:function(e){return x(e.target.value)}})]}),Object(l.jsxs)("div",{className:"actionPanel",children:[Object(l.jsx)("button",{onClick:function(){N(!1)},children:"Delete"}),Object(l.jsx)("button",{onClick:function(){console.log(r),i(!r)},children:r?"Edit":"Done"})]})]}):null},o=function(e){var t=e.todos,n=Object(c.useState)(0),a=Object(j.a)(n,2),s=a[0];a[1];return Object(l.jsx)("div",{className:"TodoList",children:s?Object(l.jsx)("div",{className:"alert white",children:"Start Adding Item"}):t.map((function(e,t){return Object(l.jsx)(u,{ca:e[0],va:e[1]},t)}))})};function b(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),u=Object(j.a)(s,2),b=u[0],d=u[1],O=Object(c.useState)([]),h=Object(j.a)(O,2),v=h[0],x=h[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(i,{handleAddTodo:function(e){e.preventDefault(),x((function(){return[].concat(Object(r.a)(v),[[n,b]])})),a(""),d(0)},cals:n,setCals:a,val:b,setVal:d}),Object(l.jsx)(o,{todos:v})]})}var d=document.getElementById("root");s.a.render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(b,{})}),d)}},[[14,1,2]]]);
//# sourceMappingURL=main.d9d16627.chunk.js.map