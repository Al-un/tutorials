(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(8),c=n.n(r),i=(n(15),n(2)),o=n(3),u=n(5),d=n(4),s=n(6),h=n(1),m=(n(17),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={name:""},n.handleAdd=n.handleAdd.bind(Object(h.a)(Object(h.a)(n))),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"handleAdd",value:function(e){e.preventDefault(),this.props.onAdd(this.state.name)}},{key:"render",value:function(){var e=this;return l.a.createElement("form",null,l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}}),l.a.createElement("button",{onClick:this.handleAdd},"Add"))}}]),t}(l.a.Component)),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("table",{className:"myClass"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Index"))),l.a.createElement("tbody",null,this.props.data.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e),l.a.createElement("td",null,t))})))}}]),t}(l.a.Component),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={list:[]},n.handleAdd=n.handleAdd.bind(Object(h.a)(Object(h.a)(n))),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"handleAdd",value:function(e){var t=this.state.list.slice();t.push(e),this.setState({list:t})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m,{onAdd:this.handleAdd}),l.a.createElement(b,{data:this.state.list}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.3bb30900.chunk.js.map