(this.webpackJsonpday26=this.webpackJsonpday26||[]).push([[0],{2:function(e,t,n){e.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),u=n.n(r),o=n.p+"static/media/logo.b2e5a01e.svg",s=n(11),i=n(3),l=n(9),d=n.n(l),b=n(10),j=n(4);function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var f=Object(j.b)("counter/fetchCount",function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(j.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(f.pending,(function(e){e.status="loading"})).addCase(f.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),v=x.actions,O=v.increment,p=v.decrement,h=v.incrementByAmount,_=function(e){return e.counter.value},C=x.reducer,N=n(2),y=n.n(N),g=n(1);function A(){var e=Object(i.c)(_),t=Object(i.b)(),n=Object(a.useState)("2"),c=Object(s.a)(n,2),r=c[0],u=c[1],o=Number(r)||0;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:y.a.row,children:[Object(g.jsx)("button",{className:y.a.button,"aria-label":"Decrement value",onClick:function(){return t(p())},children:"-"}),Object(g.jsx)("span",{className:y.a.value,children:e}),Object(g.jsx)("button",{className:y.a.button,"aria-label":"Increment value",onClick:function(){return t(O())},children:"+"})]}),Object(g.jsxs)("div",{className:y.a.row,children:[Object(g.jsx)("input",{className:y.a.textbox,"aria-label":"Set increment amount",value:r,onChange:function(e){return u(e.target.value)}}),Object(g.jsx)("button",{className:y.a.button,onClick:function(){return t(h(o))},children:"Add Amount"}),Object(g.jsx)("button",{className:y.a.asyncButton,onClick:function(){return t(f(o))},children:"Add Async"}),Object(g.jsx)("button",{className:y.a.button,onClick:function(){return t((e=o,function(t,n){_(n())%2===1&&t(h(e))}));var e},children:"Add If Odd"})]})]})}n(22);var k=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(g.jsx)(A,{}),Object(g.jsx)("p",{children:"From DarkCookie"})]})})},w=Object(j.a)({reducer:{counter:C}});u.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(i.a,{store:w,children:Object(g.jsx)(k,{})})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.898cced9.chunk.js.map