(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),l=a(1),o=(a(14),a(9)),d=a.n(o),u=a(0),m=function(e){var t=e.user,a=t.name,n=t.email;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},j=function(e){var t=e.todo,a=t.title,n=t.user,i=t.completed;return Object(u.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:a}),n&&Object(u.jsx)(m,{user:n})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:(t=e.userId,h.find((function(e){return e.id===t}))||null)});var t})),f=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(O),c=Object(s.a)(i,2),o=c[0],d=c[1],m=Object(l.useState)(""),j=Object(s.a)(m,2),f=j[0],p=j[1],x=Object(l.useState)(!0),v=Object(s.a)(x,2),y=v[0],S=v[1],N=Object(l.useState)(!0),I=Object(s.a)(N,2),g=I[0],C=I[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),a&&f){var t=h.find((function(e){return e.name===f}))||null,i=o.map((function(e){return e.id})),s={id:Math.max.apply(Math,Object(r.a)(i))+1,title:a,userId:(null===t||void 0===t?void 0:t.id)||null,completed:!1,user:t};d([].concat(Object(r.a)(o),[s])),n(""),p("")}a||S(!1),f||C(!1)},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(u.jsx)("input",{id:"title",type:"text","data-cy":"titleInput",placeholder:"Enter a title",name:"title",value:a,onChange:function(e){n(e.target.value),S(!0)}}),!y&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"user",children:"User: "}),Object(u.jsxs)("select",{id:"user","data-cy":"userSelect",value:f,onChange:function(e){p(e.target.value),C(!0)},children:[Object(u.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{children:e.name},e.id)}))]}),!g&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(b,{todos:o})]})};i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a67ee82e.chunk.js.map