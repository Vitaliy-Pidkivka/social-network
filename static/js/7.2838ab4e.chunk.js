(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[7],{233:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(236),r=n(0),i=n.n(r),o=n(234),c=n.n(o),u=n(117),l=function(e,t,n,a,r,o){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"label",s=arguments.length>8?arguments[8]:void 0,m="checkbox"===o;return i.a.createElement("div",{className:s||""},i.a.createElement(u.a,Object.assign({placeholder:e,name:t,types:n,component:a,validate:r,type:o,id:m&&t},c)),m&&i.a.createElement("label",{htmlFor:t},l))};t.b=function(e){var t=e.input,n=e.meta,r=n.touched,o=n.error,u=Object(a.a)(e,["input","meta"]),l=r&&o,s=u.types,m=u.id;return i.a.createElement("div",{className:"".concat(c.a["custom-field"]," ").concat(l?c.a.error:"")},"input"===s?i.a.createElement("input",Object.assign({},t,u,{className:c.a.input,id:m})):"textarea"===s?i.a.createElement("textarea",Object.assign({},t,u,{id:m})):"checkbox"===s?i.a.createElement("input",Object.assign({type:"checkbox"},t,u,{id:m})):i.a.createElement("span",null," "),l&&i.a.createElement("div",null,o))}},234:function(e,t,n){e.exports={"custom-field":"CustomField_custom-field__26Tf7",error:"CustomField_error__3nk_w"}},235:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){return null!=e?void 0:"This field is required!"},r=function(e){return function(t){return t.length>e?"Max length of this message is ".concat(e," characters"):void 0}}},310:function(e,t,n){e.exports={login:"Login_login__2fecb","input-group":"Login_input-group__3NwUm",error:"Login_error__3fDP0"}},311:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(118),o=n(310),c=n.n(o),u=n(233),l=n(235),s=n(21),m=n(25),p=n(20),b=n(59),d=Object(i.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(u.a)("Email","email","input",u.b,[l.b],"text"),Object(u.a)("Password","password","input",u.b,[l.b],"password"),Object(u.a)("","rememberMe","input",u.b,[],"checkbox",{},"Remember me",[c.a["input-group"]]),n&&r.a.createElement("div",{className:c.a.error},n),r.a.createElement(b.a,{typeClass:"aqua",value:"Login",type:"submit"}))}));t.default=Object(s.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:m.c})((function(e){if(e.isAuth)return r.a.createElement(p.a,{to:"/profile"});return r.a.createElement("div",{className:c.a.login},r.a.createElement("h1",null,"Login"),r.a.createElement(d,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}))}}]);
//# sourceMappingURL=7.2838ab4e.chunk.js.map