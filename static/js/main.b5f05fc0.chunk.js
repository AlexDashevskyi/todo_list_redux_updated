(this.webpackJsonptodo_list_redux_updated=this.webpackJsonptodo_list_redux_updated||[]).push([[0],{16:function(t,e,o){t.exports=o(34)},21:function(t,e,o){},28:function(t,e,o){},34:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(7),c=o.n(r),d=(o(21),o(2)),i=(o(28),o(6));var u=Object(d.b)((function(t){return{todos:t.todos}}),(function(t){return{addTodo:function(e){return t({type:"TODO_ADD",payload:e})}}}))((function(t){var e=Object(n.useState)(""),o=Object(i.a)(e,2),r=o[0],c=o[1];return a.a.createElement("div",null,"TODO LIST",a.a.createElement("div",{className:"mt-2"},"Create new todo(s);",a.a.createElement("input",{value:r,onChange:function(t){return c(t.target.value)},type:"text"}),a.a.createElement("button",{onClick:function(){t.addTodo(r),c("")}},"create")))}));var l=Object(d.b)((function(t){return{todos:t.todos}}),(function(t){return{deleteTodo:function(e){return t({type:"DELETE_TODO",payload:e})},editTodo:function(e,o){return t({type:"EDIT_TODO",payload:{todoId:e,newTitle:o}})},toggleTodo:function(e){return t({type:"TOGGLE_TODO",payload:e})}}}))((function(t){var e=t.done,o=t.id,r=t.title,c=Object(n.useState)(t.todos.title),d=Object(i.a)(c,2),u=d[0],l=d[1],s=Object(n.useState)(!1),O=Object(i.a)(s,2),b=O[0],p=O[1],E=e?{textDecoration:"line-through"}:{};return b?a.a.createElement("div",null,a.a.createElement("input",{type:"text",value:u,onChange:function(t){return l(t.target.value)}}),a.a.createElement("button",{onClick:function(){return e=o,t.editTodo(e,u),p(!1),void l(t.todos.title);var e}},"save")):a.a.createElement("div",null,a.a.createElement("span",{style:E},r,a.a.createElement("input",{type:"checkbox",checked:e,onChange:function(){return t.toggleTodo(o,e)}}),a.a.createElement("button",{onClick:function(){return p(!0)}},"edit"),a.a.createElement("button",{onClick:function(){return t.deleteTodo(o)}},"X")))})),s=o(3);var O=Object(d.b)((function(t){return{todos:t.todos}}),(function(t){return{deleteAll:function(e){return t({type:"DELETE_ALL",payload:e})}}}))((function(t){return a.a.createElement("div",{className:"App"},a.a.createElement(u,null),t.todos.map((function(t,e){return a.a.createElement(l,{title:t.title,id:t.id,done:t.done,key:Object(s.uuid)()})})),a.a.createElement("button",{onClick:function(){return t.deleteAll()}},"delete all"))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=o(4),p=o(14),E=o(15),f=o(1),j={todos:[{title:"First todo",done:!1,id:Object(s.uuid)()},{title:"Second todo",done:!1,id:Object(s.uuid)()},{title:"Third todo",done:!1,id:Object(s.uuid)()},{title:"Fourth todo",done:!1,id:Object(s.uuid)()}]},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TODO_ADD":return Object(f.a)(Object(f.a)({},t),{},{todos:[].concat(Object(E.a)(t.todos),[{title:e.payload,done:!1,id:Object(s.uuid)()}])});case"DELETE_TODO":var o=t.todos.filter((function(t){return t.id!==e.payload}));return Object(f.a)(Object(f.a)({},t),{},{todos:o});case"DELETE_ALL":return Object(f.a)(Object(f.a)({},t),{},{todos:[]});case"TOGGLE_TODO":return Object(f.a)(Object(f.a)({},t),{},{todos:t.todos.map((function(t){return t.id===e.payload?Object(f.a)(Object(f.a)({},t),{},{done:!t.done}):t}))});case"EDIT_TODO":return Object(f.a)(Object(f.a)({},t),{},{todos:t.todos.map((function(t){return t.id===e.payload.todoId?Object(f.a)(Object(f.a)({},t),{},{title:e.payload.newTitle}):t}))});default:return t}},T=Object(b.createStore)(m,Object(p.composeWithDevTools)(Object(b.applyMiddleware)()));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d.a,{store:T},a.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.b5f05fc0.chunk.js.map