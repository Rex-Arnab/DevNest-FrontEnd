(this.webpackJsonpday26=this.webpackJsonpday26||[]).push([[0],{16:function(e,t,n){},2:function(e,t,n){e.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),u=(n(16),n.p+"static/media/logo.b2e5a01e.svg"),i=n(11),s=n(3),l=n(9),d=n.n(l),b=n(10),j=n(4);function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var f=Object(j.b)("counter/fetchCount",function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(j.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(f.pending,(function(e){e.status="loading"})).addCase(f.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),h=v.actions,x=h.increment,O=h.decrement,p=h.incrementByAmount,_=function(e){return e.counter.value},C=v.reducer,w=n(2),g=n.n(w),y=n(1);function N(){var e=Object(s.c)(_),t=Object(s.b)(),n=Object(a.useState)("2"),c=Object(i.a)(n,2),r=c[0],o=c[1],u=Number(r)||0;return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:g.a.row,children:[Object(y.jsx)("button",{className:g.a.button,"aria-label":"Decrement value",onClick:function(){return t(O())},children:"-"}),Object(y.jsx)("span",{className:g.a.value,children:e}),Object(y.jsx)("button",{className:g.a.button,"aria-label":"Increment value",onClick:function(){return t(x())},children:"+"})]}),Object(y.jsxs)("div",{className:g.a.row,children:[Object(y.jsx)("input",{className:g.a.textbox,"aria-label":"Set increment amount",value:r,onChange:function(e){return o(e.target.value)}}),Object(y.jsx)("button",{className:g.a.button,onClick:function(){return t(p(u))},children:"Add Amount"}),Object(y.jsx)("button",{className:g.a.asyncButton,onClick:function(){return t(f(u))},children:"Add Async"}),Object(y.jsx)("button",{className:g.a.button,onClick:function(){return t((e=u,function(t,n){_(n())%2===1&&t(p(e))}));var e},children:"Add If Odd"})]})]})}n(23);var k=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("header",{className:"App-header",children:[Object(y.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(y.jsx)(N,{}),Object(y.jsx)("p",{children:"From DarkCookie"})]})})},A=Object(j.a)({reducer:{counter:C}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(s.a,{store:A,children:Object(y.jsx)(k,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.1d5f2a3b.chunk.js.map