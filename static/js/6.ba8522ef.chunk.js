(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[6],{233:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(236),s=t(0),i=t.n(s),o=t(234),r=t.n(o),c=t(117),l=function(e,a,t,n,s,o){var r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"label",m=arguments.length>8?arguments[8]:void 0,u="checkbox"===o;return i.a.createElement("div",{className:m||""},i.a.createElement(c.a,Object.assign({placeholder:e,name:a,types:t,component:n,validate:s,type:o,id:u&&a},r)),u&&i.a.createElement("label",{htmlFor:a},l))};a.b=function(e){var a=e.input,t=e.meta,s=t.touched,o=t.error,c=Object(n.a)(e,["input","meta"]),l=s&&o,m=c.types,u=c.id;return i.a.createElement("div",{className:"".concat(r.a["custom-field"]," ").concat(l?r.a.error:"")},"input"===m?i.a.createElement("input",Object.assign({},a,c,{className:r.a.input,id:u})):"textarea"===m?i.a.createElement("textarea",Object.assign({},a,c,{id:u})):"checkbox"===m?i.a.createElement("input",Object.assign({type:"checkbox"},a,c,{id:u})):i.a.createElement("span",null," "),l&&i.a.createElement("div",null,o))}},234:function(e,a,t){e.exports={"custom-field":"CustomField_custom-field__26Tf7",error:"CustomField_error__3nk_w"}},235:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return s}));var n=function(e){return null!=e?void 0:"This field is required!"},s=function(e){return function(a){return a.length>e?"Max length of this message is ".concat(e," characters"):void 0}}},307:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1L9Fj",dialogs__items:"Dialogs_dialogs__items__1c-wd",dialogs__messages:"Dialogs_dialogs__messages__3fIU0",message:"Dialogs_message__3L_9e",opponent:"Dialogs_opponent__2KbC0",message__text:"Dialogs_message__text__2a7QK",dialogs__btn:"Dialogs_dialogs__btn__14aSb"}},308:function(e,a,t){e.exports={dialog:"Dialog_dialog__3_zAd"}},309:function(e,a,t){e.exports={message:"Message_message__2H8jp",opponent:"Message_opponent__2hH1K",message__text:"Message_message__text__1SnJW"}},314:function(e,a,t){"use strict";t.r(a);var n=t(78),s=t(0),i=t.n(s),o=t(307),r=t.n(o),c=t(308),l=t.n(c),m=t(12),u=t(59),d=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:l.a.dialog},i.a.createElement(m.b,{to:a},e.name)," ",i.a.createElement(u.a,{value:"remove",sizeClass:"small",typeClass:"aqua"}))},_=t(309),g=t.n(_),p=function(e){var a=e.opponent,t="".concat(g.a.message," ").concat(a?g.a.opponent:"");return i.a.createElement("div",{className:t},i.a.createElement("span",{className:g.a.message__text},e.message),i.a.createElement(u.a,{value:"remove",sizeClass:"small",typeClass:"aqua"}))},b=t(117),f=t(118),v=t(233),h=t(235),E=Object(h.a)(80),j=Object(f.a)({form:"AddNewMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement(b.a,{name:"newMessageBody",types:"textarea",validate:[h.b,E],component:v.b,placeholder:"Send your message...",id:"newMessageBody"}),i.a.createElement(u.a,{onClick:e.handleSubmit,type:"submit",value:"Send",typeClass:"aqua",sizeClass:"small",className:r.a.dialogs__btn}))})),y=function(e){var a=e.match.params.id;return i.a.createElement("div",{className:r.a.dialogs},i.a.createElement("div",{className:r.a.dialogs__items},e.state.dialogList.map((function(e){return i.a.createElement(d,Object.assign({},e,{key:e.id}))}))),a&&i.a.createElement("div",{className:r.a.dialogs__messages},(e.state.messages[a]||[]).map((function(e,a){return i.a.createElement(p,Object.assign({},e,{key:a}))})),i.a.createElement(j,{onSubmit:function(t){e.addMessage(a,t.newMessageBody)}})))},x=t(21),O=t(32),k=t(33),C=t(35),N=t(34),w=t(20),M=function(e){return{isAuth:e.auth.isAuth}},D=t(16);a.default=Object(D.d)(Object(x.b)((function(e){return{state:e.dialogs}}),{addMessage:n.a}),(function(e){var a=function(a){Object(C.a)(n,a);var t=Object(N.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(k.a)(n,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(w.a,{to:"/login"})}}]),n}(i.a.Component);return Object(x.b)(M)(a)}))(y)}}]);
//# sourceMappingURL=6.ba8522ef.chunk.js.map