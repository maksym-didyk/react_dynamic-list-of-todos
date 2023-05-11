(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(8),l=c(2),d=c(1),i=(c(13),c(14),c(6)),o=c.n(i),r=c(0),j=function(e){var t=e.todos,c=e.selectedTodoId,s=e.onSelectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed,l=e.userId;return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":c===t}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:t}),Object(r.jsx)("td",{className:"is-vcentered",children:n&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-danger":!n,"has-text-success":n}),children:a})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s({id:t,title:a,completed:n,userId:l})},children:Object(r.jsx)("span",{className:"icon",children:c===t?Object(r.jsx)("i",{className:"far fa-eye-slash"}):Object(r.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})},b=function(e){var t=e.query,c=e.onQuery;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},h=(c(16),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=100,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.todo,c=e.onClose,s=Object(d.useState)(null),a=Object(l.a)(s,2),n=a[0],i=a[1];return Object(d.useEffect)((function(){var e;t.userId&&(e=t.userId,u("/users/".concat(e))).then(i)}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),n?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(n.email),children:(null===n||void 0===n?void 0:n.name)||"Uknown user"})]})]})]}):Object(r.jsx)(h,{})]})},O=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(null),i=Object(l.a)(a,2),o=i[0],O=i[1],x=Object(d.useState)(""),f=Object(l.a)(x,2),N=f[0],p=f[1];Object(d.useEffect)((function(){u("/todos").then(s)}),[]);var v=Object(d.useCallback)((function(e){O(e)}),[]),y=Object(d.useCallback)((function(e){p(e)}),[]),g=Object(n.a)(c);return N&&(g=g.filter((function(e){return e.title.includes(N)}))),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{query:N,onQuery:y})}),Object(r.jsx)("div",{className:"block",children:c.length>0?Object(r.jsx)(j,{todos:g,selectedTodoId:null===o||void 0===o?void 0:o.id,onSelectedTodo:v}):Object(r.jsx)(h,{})})]})})}),o&&Object(r.jsx)(m,{todo:o,onClose:function(){return O(null)}})]})};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.07a78bda.chunk.js.map