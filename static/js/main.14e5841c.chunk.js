(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),n=c(4),o=c(5),l=c(8),r=c(7),d=c(1),i=c.n(d),u=(c(13),c(14),c(6)),b=c.n(u),j=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.clear=function(){e.setState({selectedGood:""})},e.addGoods=function(t){e.state.selectedGood===t?e.clear():e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood,c="No goods selected";return t&&(c="".concat(t," is selected")),Object(j.jsxs)("main",{className:"section container",children:[Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[c,t&&Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3","aria-label":"clear",onClick:this.clear})]}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(c){return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()("Good",{"has-background-success-light":t.includes(c)}),children:[Object(j.jsx)("td",{children:t===c?Object(j.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.clear,children:"-"}):Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.addGoods(c)},children:"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.a.Component);s.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.14e5841c.chunk.js.map