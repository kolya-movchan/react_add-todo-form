(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(2),c=a(6),o=(a(14),a(1)),l=a(8),d=a.n(l),u=a(0),m=function(e){var t=e.user,a=t.email,n=t.name;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},j=function(e){var t=e.todo,a=t.id,n=t.completed,i=t.title,r=t.user;return Object(u.jsxs)("article",{"data-id":a,className:d()("TodoInfo",{"TodoInfo--completed":!0===n}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:i}),r&&Object(u.jsx)(m,{user:r})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:(t=e.userId,h.find((function(e){return e.id===t}))||null)});var t})),f=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),l=c[0],d=c[1],m=Object(o.useState)(O),j=Object(s.a)(m,2),f=j[0],p=j[1],x=Object(o.useState)(!1),v=Object(s.a)(x,2),y=v[0],S=v[1],N=Object(o.useState)(!1),I=Object(s.a)(N,2),g=I[0],C=I[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),l||S(!0),a||C(!0),l&&a){var t=h.find((function(e){return e.name===a})),i=f.sort((function(e,t){return t.id-e.id}))[0].id;if(t){var s=[].concat(Object(r.a)(f),[{id:i+1,title:l,completed:!1,userId:i+1,user:{id:i+1,name:a,username:t.username,email:t.email}}]);p(s),d(""),n("")}}},children:[Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{className:"titleLabel",children:[Object(u.jsx)("span",{children:"Title: "}),Object(u.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:l,onChange:function(e){var t=e.target.value;(function(e){var t=/^[A-Za-z0-9 ]*$/.test(e),a=/^[\u0401\u0451\u0410-\u044f0-9 ]*$/.test(e);return t||a})(t)&&(d(t),S(!1))}}),y&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"User: "}),Object(u.jsxs)("select",{"data-cy":"userSelect",value:a,onChange:function(e){n(e.target.value),C(!1)},children:[Object(u.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),g&&Object(u.jsx)("span",{className:"error",children:" Please choose a user"})]})}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(b,{todos:f})]})};i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7ab5327b.chunk.js.map