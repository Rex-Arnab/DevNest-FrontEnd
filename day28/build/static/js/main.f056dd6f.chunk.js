(this.webpackJsonpday28=this.webpackJsonpday28||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var s=t(4),n=t.n(s),a=t(3),i=(t(9),t(1)),l=(t(10),t(0));function r(){var e=Object(i.useState)(""),c=Object(a.a)(e,2),t=c[0],s=c[1],n=Object(i.useState)({}),r=Object(a.a)(n,2),j=r[0],d=r[1];return Object(l.jsx)("div",{className:"App p-4",children:Object(l.jsx)("div",{className:"container p-4",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-12 d-flex align-items-center justify-content-center",children:[Object(l.jsx)("input",{type:"text",className:"p-1 px-2 m-2",value:t,placeholder:"Enter City...",onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){fetch("https://api.weatherapi.com/v1/current.json?key=4b03a187449744a482b145514210608&q=".concat(t)).then((function(e){return e.json()})).then((function(e){console.log(e),d(e)}))},children:"Search"})]}),Object(l.jsx)("div",{className:"offset-md-4 col-12 col-md-4 mt-4",children:Object(l.jsx)("div",{className:"card",children:j.location?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"location",children:[Object(l.jsx)("h2",{children:j.location.name}),Object(l.jsxs)("h6",{children:[j.location.region," , ",j.location.country]})]}),Object(l.jsxs)("div",{className:"weather my-2",children:[Object(l.jsx)("img",{classNmae:"my-2",src:j.current.condition.icon,alt:""}),Object(l.jsxs)("h3",{children:[j.current.temp_c,"\xb0C "]}),Object(l.jsx)("h6",{children:j.current.condition.text})]}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsxs)("div",{className:"row d-flex weatherPlace",children:[Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("div",{className:"title",children:"Wind Speed"}),Object(l.jsxs)("div",{className:"data ",children:[j.current.wind_kph,Object(l.jsx)("span",{className:"unit",children:"km"})]})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("div",{className:"title",children:"Humidity"}),Object(l.jsxs)("div",{className:"data",children:[j.current.humidity,Object(l.jsx)("span",{className:"unit",children:"%"})]})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("div",{className:"title",children:"Precipitation"}),Object(l.jsxs)("div",{className:"data",children:[j.current.precip_mm,Object(l.jsx)("span",{className:"unit",children:"mm"})]})]})]})})]}):Object(l.jsx)("h2",{children:"Enter City"})})})]})})})}n.a.render(Object(l.jsx)(r,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.f056dd6f.chunk.js.map