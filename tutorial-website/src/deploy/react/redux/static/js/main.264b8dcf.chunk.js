(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";a.r(t);a(24);var n=a(0),l=a.n(n),c=a(12),r=a(3),i=a(4),s=a(20),u=a(15),o={articles:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ARTICLE":return Object(u.a)({},e,{articles:Object(s.a)(e.articles).concat([t.payload])});default:return e}},d=Object(i.b)(m),b=Object(r.b)(function(e){return{articles:e.articles}})(function(e){var t=e.articles;return l.a.createElement("ul",{className:"list-group list-group-flush"},t.map(function(e){return l.a.createElement("li",{key:e.id,className:"list-group-item"},e.title)}))}),h=a(5),f=a(16),p=a(17),v=a(21),E=a(18),j=a(22),O=a(2),g=a(19),y=a.n(g),w=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(v.a)(this,Object(E.a)(t).call(this))).state={title:""},e.handleChange=e.handleChange.bind(Object(O.a)(Object(O.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(O.a)(Object(O.a)(e))),e}return Object(j.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.title,a=y()();this.props.addArticle({title:t,id:a}),this.setState({title:""})}},{key:"render",value:function(){var e=this.state.title;return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",id:"title",value:e,onChange:this.handleChange})),l.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg"},"Save"))}}]),t}(l.a.Component),A=Object(r.b)(null,function(e){return{addArticle:function(t){return e(function(e){return{type:"ADD_ARTICLE",payload:e}}(t))}}})(w),C=function(){return l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-md-4 offset-md-1"},l.a.createElement("h2",null,"Articles"),l.a.createElement(b,null)),l.a.createElement("div",{className:"col-md-4 offset-md-1"},l.a.createElement("h2",null,"Add a new Article"),l.a.createElement(A,null)))};Object(c.render)(l.a.createElement(r.a,{store:d},l.a.createElement(C,null)),document.getElementById("app"))}},[[23,2,1]]]);
//# sourceMappingURL=main.264b8dcf.chunk.js.map