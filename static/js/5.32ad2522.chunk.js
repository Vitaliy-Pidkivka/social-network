(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[5],{237:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},239:function(e,t,n){e.exports=n.p+"static/media/user-avatar.d60e2ec5.png"},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(64);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},303:function(e,t,n){e.exports={users:"Users_users__1SSz_",users__btn:"Users_users__btn__3ZlVi",users__preloader:"Users_users__preloader__Qj0EC"}},304:function(e,t,n){e.exports={paginator:"Paginator_paginator__1Fn3F",button:"Paginator_button__IsVCx"}},305:function(e,t,n){e.exports={button:"PaginationButton_button__wFJjP",current:"PaginationButton_current__1_v8O"}},306:function(e,t,n){e.exports=n.p+"static/media/prev-arrow.6962a174.svg"},307:function(e,t,n){e.exports=n.p+"static/media/next-arrow.6329c0a6.svg"},308:function(e,t,n){e.exports={user:"User_user__2x0YP",user__box:"User_user__box__2QurH",user__avatar:"User_user__avatar__2mfCO",user__btn:"User_user__btn__2Zo7X",user__name:"User_user__name__10ChZ",user__status:"User_user__status__3Isw1"}},315:function(e,t,n){"use strict";n.r(t);var r=n(33),a=n(34),o=n(36),s=n(35),u=n(237),l=n(0),i=n.n(l),c=n(303),p=n.n(c),f=n(54),g=n(245),_=n(304),m=n.n(_),h=n(305),v=n.n(h),b=function(e){return i.a.createElement("span",{className:"".concat(v.a.button," ").concat(e.current===e.page&&v.a.current),onClick:e.onClick},e.value)},d=n(60),y=n(306),w=n.n(y),P=n(307),C=n.n(P),k=function(e){for(var t=e.totalItemsCount,n=e.pageSizes,r=e.currentPage,a=e.onPageChanged,o=e.portionSize,s=void 0===o?5:o,u=Math.ceil(t/n),c=[],p=1;p<=u;p++)c.push(p);var f=Object(l.useState)(1),_=Object(g.a)(f,2),h=_[0],v=_[1],y=Math.ceil(u/s),P=(h-1)*s+1,k=h*s;return i.a.createElement("div",{className:m.a.paginator},h>1&&i.a.createElement(d.a,{type:"button",value:"",sizeClass:"small",typeClass:"aqua",className:m.a.button,imgSrc:w.a,imgClassName:"",onClick:function(){v(h-1)}}),c.filter((function(e){return e>=P&&e<=k})).map((function(e){return i.a.createElement(b,{onClick:function(){a(e)},key:e,value:e,current:r,page:e})})),y>h&&i.a.createElement(d.a,{type:"button",value:"",sizeClass:"small",typeClass:"aqua",className:m.a.button,imgSrc:C.a,imgClassName:"null",onClick:function(){v(h+1)}}))},E=n(308),S=n.n(E),O=n(239),j=n.n(O),x=n(12),U=function(e){var t=e.followingInProgress,n=e.unfollowThunk,r=e.followThunk,a=e.user;return i.a.createElement("div",{className:S.a.user},i.a.createElement("div",{className:S.a.user__box},i.a.createElement("img",{src:a.photos.small||j.a,alt:"avatar",className:S.a.user__avatar}),!t.some((function(e){return e===a.id}))&&i.a.createElement(d.a,{value:a.followed?"Unfollow":"Follow",onClick:a.followed?function(){n(a.id)}:function(){r(a.id)},sizeClass:"small",typeClass:"purple",className:S.a.user__btn})),i.a.createElement("div",{className:S.a.user__box},i.a.createElement(x.b,{to:"/profile/"+a.id},i.a.createElement("h3",{className:S.a.user__name}," ",a.name)),i.a.createElement("p",{className:S.a.user__status},a.status||"status will be here")),i.a.createElement("div",{className:S.a.user__box},i.a.createElement("p",{className:S.a.user__city},"user.location.city"," "),i.a.createElement("p",{className:S.a.user__country},"user.location.country")))},N=function(e){var t=e.totalUsersCount,n=e.pageSizes,r=e.onPageChanged,a=e.currentPage,o=e.users,s=e.isFetching,l=Object(u.a)(e,["totalUsersCount","pageSizes","onPageChanged","currentPage","users","isFetching"]);return i.a.createElement("div",{className:p.a.users},s&&i.a.createElement(f.a,{big:!1,className:p.a.users__preloader}),i.a.createElement(k,{totalItemsCount:t,pageSizes:n,onPageChanged:r,currentPage:a}),o.map((function(e){return i.a.createElement(U,{user:e,key:e.id,followingInProgress:l.followingInProgress,followThunk:l.followThunk,unfollowThunk:l.unfollowThunk})})))},z=n(21),I=n(86),T=n(16);function F(e,t){return e===t}function A(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function J(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var M=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,s=r.pop(),u=J(r),l=e.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(n)),i=e((function(){for(var e=[],t=u.length,n=0;n<t;n++)e.push(u[n].apply(null,arguments));return l.apply(null,e)}));return i.resultFunc=s,i.dependencies=u,i.recomputations=function(){return o},i.resetRecomputations=function(){return o=0},i}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F,n=null,r=null;return function(){return A(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var Z=M((function(e){return e.userPage.users}),(function(e){return e.filter((function(e){return!0}))})),q=function(e){return e.userPage.pageSizes},B=function(e){return e.userPage.totalUsersCount},Q=function(e){return e.userPage.page},V=function(e){return e.userPage.isFetching},D=function(e){return e.userPage.followingInProgress},H=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){var n=e.props.pageSizes;e.props.setPage(t),e.props.getUsers(t,n)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.page,n=e.pageSizes;this.props.getUsers(t,n)}},{key:"render",value:function(){return i.a.createElement(N,{totalUsersCount:this.props.totalUsersCount,pageSizes:this.props.pageSizes,currentPage:this.props.page,onPageChanged:this.onPageChanged,users:this.props.users,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,followThunk:this.props.followThunk,unfollowThunk:this.props.unfollowThunk})}}]),n}(i.a.Component);t.default=Object(T.d)(Object(z.b)((function(e){return{users:Z(e),pageSizes:q(e),totalUsersCount:B(e),page:Q(e),isFetching:V(e),followingInProgress:D(e)}}),{getUsers:I.c,followThunk:I.b,unfollowThunk:I.e,setPage:I.d}))(H)}}]);
//# sourceMappingURL=5.32ad2522.chunk.js.map