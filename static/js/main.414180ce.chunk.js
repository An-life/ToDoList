(this["webpackJsonpmu-app"]=this["webpackJsonpmu-app"]||[]).push([[0],{105:function(t,e,n){"use strict";n.r(e);var c,i,a=n(0),o=n.n(a),r=n(9),s=n.n(r),l=(n(79),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))}),u=(n(80),n(29)),d=n(146),j=n(136),O=n(137),b=n(5),f=o.a.memo((function(t){var e=Object(a.useState)(""),n=Object(u.a)(e,2),c=n[0],i=n[1],o=Object(a.useState)(null),r=Object(u.a)(o,2),s=r[0],l=r[1],f=Object(a.useCallback)((function(){""!==c.trim()?(t.addItem(c),console.log(c),i("")):l("No title")}),[c]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(d.a,{variant:"outlined",error:!!s,value:c,onChange:function(t){null!==s&&l(null),i(t.currentTarget.value)},onKeyPress:function(t){13===t.charCode&&f()},label:"Title",helperText:s}),Object(b.jsx)(j.a,{color:"primary",onClick:f,children:Object(b.jsx)(O.a,{})})]})})),h=o.a.memo((function(t){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),c=n[0],i=n[1],o=Object(a.useState)(t.title),r=Object(u.a)(o,2),s=r[0],l=r[1];return c?Object(b.jsx)(d.a,{variant:"outlined",value:s,onChange:function(t){return l(t.currentTarget.value)},onBlur:function(){i(!1),t.onChange(s)},autoFocus:!0}):Object(b.jsx)("span",{onDoubleClick:function(){i(!0),l(t.title)},children:s})})),T=n(147),p=n(139),m=n(138),v=n(22),x=n(23),I=n(42),L=n(10),g=n(65),k=n.n(g).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"5aecab3c-05b6-41db-afbc-a453341bf70f"}}),C=function(){return k.get("todo-lists")},S=function(t){return k.post("todo-lists",{title:t})},D=function(t){return k.delete("todo-lists/".concat(t))},E=function(t,e){return k.put("todo-lists/".concat(t),{title:e})},y=function(t){return k.get("todo-lists/".concat(t,"/tasks"))},A=function(t,e){return k.delete("todo-lists/".concat(t,"/tasks/").concat(e))},w=function(t,e,n){return k.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},N=function(t,e){return k.post("todo-lists/".concat(e,"/tasks"),{title:t})};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(c||(c={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var F={},K=function(t,e,n){return function(i,a){var o=a().tasks[n].find((function(e){return e.id===t}));if(!o)throw new Error("task is not in the state");var r=Object(L.a)({title:o.title,description:o.description,completed:o.status!==c.New,status:o.status,priority:o.priority,startDate:o.startDate,deadline:o.deadline},e);w(n,t,r).then((function(c){i(function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n))}))}},P=o.a.memo((function(t){var e=Object(v.b)();Object(a.useEffect)((function(){var n;e((n=t.id,function(t){y(n).then((function(e){t(function(t,e){return{type:"SET-TASKS",todolistId:e,tasks:t}}(e.data.items,n))}))}))}),[]);var n=Object(v.c)((function(e){return e.tasks[t.id]})),i=Object(a.useCallback)((function(){t.removeTodoList(t.id)}),[t.removeTodoList,t.id]),o=Object(a.useCallback)((function(e){t.changeTodoListTitle(e,t.id)}),[t.changeTodoListTitle,t.id]),r=n;"active"===t.filter&&(r=r.filter((function(t){return t.status===c.New}))),"completed"===t.filter&&(r=r.filter((function(t){return t.status===c.Completed})));var s=Object(a.useCallback)((function(n){e(function(t,e){return function(n){N(t,e).then((function(t){n({type:"ADD-TASK",task:t.data.data.item})}))}}(n,t.id))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{title:t.title,onChange:o})," ",Object(b.jsx)(j.a,{onClick:i,children:Object(b.jsx)(m.a,{})})]}),Object(b.jsx)(f,{addItem:s}),Object(b.jsx)("div",{children:r.map((function(n){return Object(b.jsxs)("div",{className:n.status===c.Completed?"is-Done":"",children:[Object(b.jsx)(T.a,{onChange:function(i){var a=i.currentTarget.checked;e(K(n.id,{status:a?c.Completed:c.New},t.id))},color:"primary",checked:n.status===c.Completed}),Object(b.jsx)(h,{title:n.title,onChange:function(c){e(K(n.id,{title:c},t.id))}}),Object(b.jsx)(j.a,{onClick:function(){var c,i;e((c=t.id,i=n.id,function(t){A(c,i).then((function(e){t(function(t,e){return{type:"REMOVE-TASK",todolistId:e,taskId:t}}(i,c))}))}))},children:Object(b.jsx)(m.a,{})})]},n.id)}))}),Object(b.jsx)(p.a,{color:"inherit",variant:"all"===t.filter?"outlined":"text",onClick:function(){t.changeFilter("all",t.id)},children:"All"}),Object(b.jsx)(p.a,{color:"primary",variant:"active"===t.filter?"outlined":"text",onClick:function(){t.changeFilter("active",t.id)},children:"Active"}),Object(b.jsx)(p.a,{color:"secondary",variant:"completed"===t.filter?"outlined":"text",onClick:function(){t.changeFilter("completed",t.id)},children:"Completed"})]})})),R=n(140),M=n(141),H=n(143),U=n(144),V=n(145),G=n(106),B=n(142),J=[];var Y=function(){var t=Object(v.b)(),e=Object(v.c)((function(t){return t.todolists}));Object(a.useEffect)((function(){t((function(t){C().then((function(e){t({type:"SET-TODOLIST",todoLists:e.data})}))}))}),[]);var n=Object(a.useCallback)((function(e,n){var c={type:"CHANGE-TODOLIST-FILTER",filter:e,id:n};t(c)}),[t]),c=Object(a.useCallback)((function(e){t(function(t){return function(e){D(t).then((function(n){e({type:"REMOVE-TODOLIST",id:t})}))}}(e))}),[t]),i=Object(a.useCallback)((function(e,n){t(function(t,e){return function(n){E(t,e).then((function(c){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",title:t,id:e}}(t,e))}))}}(n,e))}),[t]),o=Object(a.useCallback)((function(e){t(function(t){return function(e){S(t).then((function(t){e({type:"ADD-TODOLIST",todoList:t.data.data.item})}))}}(e))}),[t]);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(R.a,{position:"static",children:Object(b.jsxs)(M.a,{children:[Object(b.jsx)(j.a,{edge:"start",color:"inherit","area-label":"menu",children:Object(b.jsx)(B.a,{})}),Object(b.jsx)(H.a,{variant:"h6",children:"News"}),Object(b.jsx)(p.a,{color:"inherit",children:"Login"})]})}),Object(b.jsxs)(U.a,{fixed:!0,children:[Object(b.jsx)(V.a,{container:!0,style:{padding:"20px"},children:Object(b.jsx)(f,{addItem:o})}),Object(b.jsx)(V.a,{container:!0,spacing:3,children:e.map((function(t){return Object(b.jsx)(V.a,{item:!0,children:Object(b.jsx)(G.a,{style:{padding:"10px"},children:Object(b.jsx)(P,{id:t.id,title:t.title,changeFilter:n,filter:t.filter,removeTodoList:c,changeTodoListTitle:i},t.id)})})}))})]})]})},q=n(44),z=n(66),Q=Object(q.b)({todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD-TODOLIST":return[Object(L.a)(Object(L.a)({},e.todoList),{},{filter:"all"})].concat(Object(I.a)(t));case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(L.a)(Object(L.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(L.a)(Object(L.a)({},t),{},{filter:e.filter}):t}));case"SET-TODOLIST":return e.todoLists.map((function(t){return Object(L.a)(Object(L.a)({},t),{},{filter:"all"})}));default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD-TASK":return Object(L.a)(Object(L.a)({},t),{},Object(x.a)({},e.task.todoListId,[e.task].concat(Object(I.a)(t[e.task.todoListId]))));case"REMOVE-TASK":return Object(L.a)(Object(L.a)({},t),{},Object(x.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!=e.taskId}))));case"UPDATE-TASK":return Object(L.a)(Object(L.a)({},t),{},Object(x.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(L.a)(Object(L.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(L.a)(Object(L.a)({},t),{},Object(x.a)({},e.todoList.id,[]));case"REMOVE-TODOLIST":var n=Object(L.a)({},t);return delete n[e.id],n;case"SET-TODOLIST":var c=Object(L.a)({},t);return e.todoLists.forEach((function(t){c[t.id]=[]})),c;case"SET-TASKS":return Object(L.a)(Object(L.a)({},t),{},Object(x.a)({},e.todolistId,e.tasks));default:return t}}}),W=Object(q.c)(Q,Object(q.a)(z.a));window.store=W,s.a.render(Object(b.jsx)(v.a,{store:W,children:Object(b.jsx)(Y,{})}),document.getElementById("root")),l()},79:function(t,e,n){},80:function(t,e,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.414180ce.chunk.js.map