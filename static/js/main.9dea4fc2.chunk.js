(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{111:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(94),o=n.n(c),i=(n(111),n(15)),s=n(7),u=n(4),l=n(6),d=function(e,t){switch(console.log(e,t),t.type){case"REQUEST_REGISTER":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case"REGISTER_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{token:t.payload.token,loading:!1});case"REGISTER_ERROR":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,errorMessage:t.error});case"REQUEST_LOGIN":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case"LOGIN_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{user:t.payload,token:t.payload.token,isAuth:!0,loading:!1});case"LOGOUT":return localStorage.removeItem("token"),Object(l.a)(Object(l.a)({},e),{},{user:"",token:"",isAuth:!1});case"LOGIN_ERROR":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,errorMessage:t.error});default:throw new Error("Unhandled action type: ".concat(t.type))}},p=n(1),b=Object(r.createContext)(),j=Object(r.createContext)(),h=function(){var e=Object(r.useContext)(b);if(!e)throw new Error("useAuthState must be used within a AuthProvider");return e};function f(){var e=Object(r.useContext)(j);if(!e)throw new Error("useAuthDispatch must be used within a AuthProvider");return e}var x,O,g,m,v,y,w,S,C,k,E=function(e){var t=e.children,n=Object(r.useReducer)(d,pt),a=Object(u.a)(n,2),c=a[0],o=a[1];return Object(p.jsx)(b.Provider,{value:c,children:Object(p.jsx)(j.Provider,{value:o,children:t})})},A=n(8),R=n(9),N=n(47),U=n(95),T=n(96),I=n(97),F=n(43),q=n(58),L="#1564bf",M="#5e91f2",B="#003b8e",_="#fff",P="#aaa",D="#f44336",z="768px",G="1024px",H="1440px",V="12px",J="18px",W={home:Object(p.jsx)(N.a,{}),world:Object(p.jsx)(U.a,{}),favorite:Object(p.jsx)(N.c,{}),subscription:Object(p.jsx)(T.a,{}),profile:Object(p.jsx)(I.a,{}),like:Object(p.jsx)(N.b,{}),add:Object(p.jsx)(F.a,{}),edit:Object(p.jsx)(q.a,{}),close:Object(p.jsx)(F.b,{}),feed:Object(p.jsx)(q.b,{})},Q=R.a.nav(x||(x=Object(A.a)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  z-index: 5;\n  min-width: 40px;\n  width: 100%;\n  background-color: ",";\n\n  @media screen and (min-width: ",") {\n    top: 50%;\n    right: 0;\n    left: auto;\n    bottom: auto;\n    max-width: 40px;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    transform: translateY(-50%);\n  }\n"])),L,z),Y=R.a.ul(O||(O=Object(A.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  @media screen and (min-width: ",') {\n    flex-direction: column;\n  }\n\n  li {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    list-style: none;\n\n    &::after {\n      content: "";\n      position: absolute;\n      right: 0;\n      display: block;\n      width: 2px;\n      height: 50%;\n      border-radius: 75%;\n      background-color: ',";\n      opacity: 0.4;\n    }\n\n    svg {\n      font-size: ",";\n      color: ",";\n    }\n\n    a {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 10px 0;\n      border-bottom: 2px solid transparent;\n      width: 100%;\n      height: 100%;\n      transition: 0.4s border-bottom ease;\n      text-decoration: none;\n      color: ",";\n\n      &:hover {\n        background-color: ",";\n        cursor: poiner;\n        transition: 0.4s background-color ease;\n      }\n    }\n  }\n"])),z,P,J,_,_,B),K=R.a.button(g||(g=Object(A.a)(["\n  position: ",";\n  bottom: 50px;\n  right: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: ",";\n  min-width: 40px;\n  min-height: 40px;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  background-color: "," !important;\n  color: ",";\n  font-size: ",";\n\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    position: static;\n    background-color: ",";\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n"])),(function(e){return e.position||"static"}),(function(e){return e.margin||"0"}),(function(e){return e.isFavorited?"transparent":L}),(function(e){return e.isFavorited?L:_}),J,M,z,B,M),X=function(e){return Object(p.jsxs)(K,{onClick:e.handle,color:e.color||"transparent",position:e.position,isFavorited:e.isFavorited||"",likesCount:e.likesCount||"",margin:e.margin,children:[e.content,e.likesCount]})},Z=function(){var e=h(),t=Object(s.f)(),n=[{title:"My Posts",path:"/home",icon:W.home,query:""},{title:"Feeds",path:"/feeds",icon:W.feed,query:""},{title:"Favorites",path:"/favorites",query:"",icon:W.like},{title:"Profile",path:"/profiles/".concat(e.user.username),query:"author=".concat(e.user.username),icon:W.profile}];return Object(p.jsx)(Y,{children:n.map((function(n){return Object(p.jsx)("li",{children:Object(p.jsx)(X,{type:"link",content:n.icon,handle:function(){t.push({pathname:n.path,search:n.query,state:{author:e.user.username,currentUser:!0}})}})},n.title+Math.random())}))})},$=function(){return h().isAuth?Object(p.jsx)(Q,{children:Object(p.jsx)(Z,{})}):null},ee=R.a.div(m||(m=Object(A.a)(["\n  display: flex;\n  flex-direction: ",";\n  align-items: ",";\n  justify-content: ",";\n  flex-wrap: ",";\n  width: 100%;\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    max-width: ",";\n  }\n"])),(function(e){return e.direction||"row"}),(function(e){return e.flexAlign||"center"}),(function(e){return e.flexSpacing||"space-between"}),(function(e){return e.flexWrap||"nowrap"}),z,(function(e){return e.maxWidth||"none"})),te=R.a.div(v||(v=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: ",";\n"])),(function(e){return e.flexSpacing||"space-between"})),ne=R.a.div(y||(y=Object(A.a)(["\n  margin: 0 auto;\n  padding: 12px 6px;\n  width: 100%;\n  max-width: ",";\n"])),H),re=R.a.section(w||(w=Object(A.a)(["\n  width: 100%;\n  max-width: ",";\n"])),G),ae=n(3),ce=n.n(ae),oe=n(5),ie=function(e){var t=e.imgUrl;return Object(p.jsx)(se,{src:t,alt:t})},se=R.a.img(S||(S=Object(A.a)(["\n  display: flex;\n  align-self: flex-start;\n  max-width: 50px;\n  max-height: 50px;\n  border-radius: 50%;\n  color: ",";\n  font-weight: bold;\n"])),_),ue=n(20),le=R.a.div(C||(C=Object(A.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(200, 200, 200, 0.5);\n\n  form{\n    position: relative;\n    left: 50%;\n    top: 50%;\n    display: flex;\n    max-width: 600px;\n    width: 100%;\n    background-color: ",";\n    border-radius: 5px;\n    transform: translate(-50%, -50%);\n\n    button {\n      position: absolute;\n      right: 0;\n      top: 0;\n      color: ",";\n    }\n\n    fieldset {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      border: none;\n      * {\n        margin: 5px 0;\n        border-radius: 4px;\n      }\n\n      label {\n        display: flex;\n        flex-direction: column;\n      }\n\n      input {\n        height: 40px;\n        border: 0.5px solid ",";\n\n        &:focus {\n          border-color: ",';\n        }\n      }\n\n      input[type="submit"] {\n        border: none;\n        background-color: ',";\n        color: ",";\n        text-transform: uppercase;\n      }\n    }\n  }\n"])),_,P,P,M,L,_),de=n(13),pe=(de.a({username:de.b().trim().required("Required"),email:de.b().trim().required("Required").email("Not valid"),password:de.b().trim().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.")}),de.a().shape({email:de.b().trim().required("Required").email("Not Valid")}),de.a({title:de.b().trim().required("Required"),body:de.b().trim().required("Required"),description:de.b().trim().required("Required")})),be=de.a().shape({email:de.b().trim().required("Required").email("Not Valid"),username:de.b().trim().required("Required"),password:de.b().trim().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.")}),je=n(12),he=n.n(je),fe=function(e,t){return function(){return e.get("".concat(t,"/articles/feed")).catch((function(e){return console.log("Error when gets feeds")}))}},xe=function(e){return function(t){return he.a.get("".concat(e,"/articles/").concat(t)).catch((function(e){return console.log("Error when gets single article")}))}},Oe=function(e,t){return function(){return e.get("".concat(t,"/user")).catch((function(e){return console.log("Error when gets user")}))}},ge=function(e){return function(t){return he.a.get("".concat(e,"/profiles/").concat(t)).catch((function(e){return console.log("Error when gets profile")}))}},me=function(e,t){return function(n){return e.get("".concat(t,"/articles/").concat(n,"/comments")).catch((function(e){return console.log("Error when gets comments")}))}},ve=function(e){return function(){return he.a.get("".concat(e,"/tags")).catch((function(e){return console.log("Error when gets tags")}))}},ye=function(e,t){return function(n){return e.post("".concat(t,"/articles"),n).catch((function(e){return console.log("Error when creating new article")}))}},we=function(e,t){return function(n,r){return e.post("".concat(t,"/articles/").concat(r,"/comments"),n).catch((function(e){return console.log("Error when creating new comment")}))}},Se=function(e){return function(t){return he.a.post("".concat(e,"/users/"),t).catch((function(e){return console.log("Error when creating new user")}))}},Ce=function(e,t){return function(n){return e.post("".concat(t,"/profiles/").concat(n,"/follow")).catch((function(e){return console.log("Error when creating new subscription")}))}},ke=function(e,t){return function(n){return e.post("".concat(t,"/articles/").concat(n,"/favorite")).catch((function(e){return console.log("Error when creating new follow")}))}},Ee=function(e,t){return function(n,r){return e.put("".concat(t,"/articles/").concat(n),r).catch((function(e){return console.log("Error when updating article")}))}},Ae=function(e,t){return function(n){return e.put("".concat(t,"/user"),n).catch((function(e){return console.log("Error when updating profile")}))}},Re=function(e,t){return function(n){return e.delete("".concat(t,"/profiles/").concat(n,"/follow")).catch((function(e){return console.log("Error when deleting subscription")}))}},Ne=function(e,t){return function(n){return e.delete("".concat(t,"/articles/").concat(n)).catch((function(e){return console.log("Error when deleting article")}))}},Ue=function(e,t){return function(n,r){return e.delete("".concat(t,"/articles/").concat(n,"/comments/").concat(r)).catch((function(e){return console.log("Error when deleting comment")}))}},Te=function(e,t){return function(n){return e.delete("".concat(t,"/articles/").concat(n,"/favorite")).catch((function(e){return console.log("Error when deleting follow")}))}},Ie=function(){var e,t="https://conduit.productionready.io/api",n=localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):"",r=he.a.create({baseURL:t,headers:{Authorization:"Token ".concat(n),"Content-type":"application/json"}});return{getArticlesApi:(e=t,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return he.a.get("".concat(e,"/articles/").concat(t)).catch((function(e){return console.log("Error when gets articles")}))}),getArticleApi:xe(t),getCommentsApi:me(r,t),getProfileApi:ge(t),getUserApi:Oe(r,t),getTagsApi:ve(t),getFeeds:fe(r,t),createNewUserApi:Se(r),createNewCommentApi:we(r,t),createNewSubscriptionApi:Ce(r,t),createNewArticleApi:ye(r,t),createNewFollowApi:ke(r,t),updateArticleApi:Ee(r,t),updateProfileApi:Ae(r,t),deleteArticleApi:Ne(r,t),delereFollowApi:Te(r,t),deleteCommentApi:Ue(r,t),deleteSubscriptionApi:Re(r,t)}},Fe=Object(ue.c)({validationSchema:pe,mapPropsToValues:function(e){var t=e.initialValues;return t||""}})((function(e){var t=e.values,n=e.onSubmit,r=e.handleSubmit,a=e.handleChange,c=e.handleBlur,o=Ie().updateArticleApi,i=function(){var a=Object(oe.a)(ce.a.mark((function a(c){return ce.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),r(),a.next=4,o(t.slug,t);case 4:e.setModalOpen(!e.isModalOpen),n(t);case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:e.isModalOpen?Object(p.jsx)(le,{children:Object(p.jsxs)(ue.a,{onSubmit:i,children:[Object(p.jsx)("button",{type:"button",onClick:e.setModalOpen,children:"x"}),Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{children:"Edit Article "}),Object(p.jsxs)("label",{children:[" ","Title",Object(p.jsx)("input",{name:"title",type:"text",placeholder:"Article Title",onChange:a,onBlur:c,value:t.title})]}),Object(p.jsxs)("label",{children:[" ","Description",Object(p.jsx)("input",{name:"description",type:"text",placeholder:"Article Description",onChange:a,onBlur:c,value:t.description})]}),Object(p.jsxs)("label",{children:[" ","Body",Object(p.jsx)("input",{name:"body",type:"text",placeholder:"Article Body",onChange:a,onBlur:c,value:t.body})]}),Object(p.jsxs)("label",{children:[" ","Tags",Object(p.jsx)("input",{name:"tags",placeholder:"Tags",onChange:a,onBlur:c,value:t.tags})]}),Object(p.jsx)("input",{type:"submit",value:"Save Changes"})]})]})}):""})})),qe=R.a.section(k||(k=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 40px 0;\n  padding: 12px 6px;\n  border-top: 5px solid ",";\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  width: 100%;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  box-sizing: border-box;\n\n  .post-content {\n    margin-top: 20px;\n    border-top: 1px solid ",";\n  }\n\n  .post-title {\n    color: ",";\n  }\n\n  .post-body {\n    min-height: 80px;\n    border: 2px solid ",";\n  }\n\n  .post-description,\n  .post-tags {\n    display: flex;\n    flex-wrap: wrap;\n    color: ",";\n    font-style: italic;\n  }\n\n  div.post-heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    p {\n      margin: 0;\n      font-size: ",";\n    }\n    .author-name {\n      font-weight: bold;\n      color: ",";\n    }\n  }\n"])),P,P,M,L,P,V,M),Le=function(e){var t=h(),n=Object(s.f)(),a=Object(r.useState)(e),c=Object(u.a)(a,2),o=c[0],i=c[1],l=Object(r.useState)(!1),d=Object(u.a)(l,2),b=d[0],j=d[1],f=Ie(),x=f.deleteArticleApi,O=f.createNewFollowApi,g=f.delereFollowApi,m=function(){var e=Object(oe.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(o.slug);case 2:t=e.sent,i(t.data.article);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(oe.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(o.slug);case 2:t=e.sent,i(t.data.article);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(oe.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(o.slug);case 2:t=e.sent,i(t.data.article);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:o?Object(p.jsxs)(qe,{children:[Object(p.jsx)(Fe,{initialValues:o,isModalOpen:b,setModalOpen:function(){return j(!b)},onSubmit:i}),Object(p.jsxs)("div",{className:"post-heading",children:[Object(p.jsx)(ie,{imgUrl:o.author.image}),Object(p.jsxs)(te,{flexSpacing:"flex-start",children:[Object(p.jsx)("button",{type:"link",onClick:function(){n.push({pathname:"/profiles/".concat(o.author.username),state:{author:o.author.username,currentUser:o.author.username===t.user.username}})},children:o.author.username}),Object(p.jsx)("p",{children:o.createdAt})]}),Object(p.jsx)(ee,{flexSpacing:"flex-end",children:Object(p.jsx)(X,{color:M,content:W.like,handle:o.favorited?y:v,isFavorited:o.favorited,likesCount:o.favoritesCount,margin:"6px"})})]}),Object(p.jsxs)("div",{className:"post-content",children:[Object(p.jsx)("button",{type:"link",onClick:function(){n.push({pathname:"/articles/".concat(o.slug),state:{author:o.author.username,slug:o.slug,currentUser:o.author.username===t.user.username}})},children:o.title}),Object(p.jsx)("p",{className:"post-body",children:o.body})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)(ee,{flexSpacing:"space-between",children:[Object(p.jsx)("p",{className:"post-description",children:o.description}),Object(p.jsx)("div",{className:"post-tags",children:o.tagList.map((function(e){return Object(p.jsx)("span",{children:"#"+e},o.author+e)}))})]}),Object(p.jsx)(ee,{children:o.author.username===t.user.username?Object(p.jsxs)(ee,{flexSpacing:"flex-end",children:[Object(p.jsx)(X,{color:D,content:W.close,handle:m,margin:"6px"}),Object(p.jsx)(X,{color:L,content:W.edit,handle:j,margin:"6px"})]}):null})]}):""})},Me=function(e,t){var n=t.type,r=t.payload;switch(n){case"FETCH_INIT":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0,error:null});case"FETCH_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,data:r.data,error:null});case"FETCH_FAILURE":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,error:r});default:return e}};function Be(e,t){return _e.apply(this,arguments)}function _e(){return(_e=Object(oe.a)(ce.a.mark((function e(t,n){var r,a,c=arguments;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>2&&void 0!==c[2]?c[2]:{didCancel:!1},n({type:"FETCH_INIT",payload:null}),e.prev=2,e.next=5,t;case 5:a=e.sent,r.didCancel||n({type:"FETCH_SUCCESS",payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),(null===r||void 0===r?void 0:r.didCancel)||n({type:"FETCH_FAILURE",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var Pe=function(e){var t=e.fetchHandler,n=e.initialData,a=void 0===n?{}:n,c=e.isLazy,o=void 0!==c&&c,i=e.isLoadingInitial,s=void 0!==i&&i,l=Object(r.useReducer)(Me,{isLoading:s,error:null,data:a}),d=Object(u.a)(l,2),p=d[0],b=d[1];return Object(r.useEffect)((function(){var e={didCancel:!1};return o||e.didCancel||Be(t(),b,e),function(){e.didCancel=!0}}),[]),[p,function(e){return Be(t(e),b)}]},De=function(){var e=function(){var e=Ie().getArticlesApi,t=Object(r.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Pe({fetchHandler:function(){var t=Object(oe.a)(ce.a.mark((function t(){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("?limit=5");case 2:return n=t.sent,c(n.data.articles),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),isLazy:!0,initialData:[]}),i=Object(u.a)(o,2)[1];return Object(r.useEffect)((function(){i()}),[]),{articles:a}}().articles,t=function(){var e=Ie().getTagsApi,t=Object(r.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Pe({fetchHandler:function(){var t=Object(oe.a)(ce.a.mark((function t(){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return n=t.sent,c(n.data.tags),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),isLazy:!0,initialData:[]}),i=Object(u.a)(o,2)[1];return Object(r.useEffect)((function(){i()}),[]),{tags:a}}().tags;return Object(p.jsx)("main",{children:Object(p.jsx)(ne,{children:Object(p.jsxs)(ee,{flexSpacing:"space-around",flexAlign:"flex-start",direction:"column-reverse",children:[Object(p.jsx)(re,{children:e?e.map((function(e,t){return Object(p.jsx)(Le,Object(l.a)({},e),t)})):Object(p.jsx)("div",{children:"No articles avalaible yet..."})}),Object(p.jsx)(ee,{flexWrap:"wrap",maxWidth:"200px",flexSpacing:"flex-start",children:t?t.map((function(e,t){return Object(p.jsx)(X,{content:e,margin:"5px"},t+e)})):Object(p.jsx)("div",{children:"Not tags avalaible yet..."})})]})})})},ze="https://conduit.productionready.io/api";function Ge(e,t){return He.apply(this,arguments)}function He(){return(He=Object(oe.a)(ce.a.mark((function e(t,n){var r;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REQUEST_LOGIN"}),e.next=4,he.a.post("".concat(ze,"/users/login"),n,{headers:{"Content-type":"application/json;charset=utf-8"}}).catch((function(e){return console.log("error when login",e)}));case 4:if(r=e.sent,console.log("login res",r),!r.data){e.next=10;break}return t({payload:r.data.user,type:"LOGIN_SUCCESS"}),localStorage.setItem("token",JSON.stringify(r.data.user.token)),e.abrupt("return",r.data.user);case 10:return e.abrupt("return");case 13:e.prev=13,e.t0=e.catch(0),t({type:"LOGIN_ERROR",error:e.t0});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function Ve(e,t){return Je.apply(this,arguments)}function Je(){return(Je=Object(oe.a)(ce.a.mark((function e(t,n){var r;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REQUEST_REGISTER"}),e.next=4,he.a.post("".concat(ze,"/users"),n,{headers:{"Content-type":"application/json;charset=utf-8"}}).catch((function(e){return console.log(e)}));case 4:return(r=e.sent).data&&(t({type:"REGISTER_SUCCESS",payload:r}),localStorage.setItem("currentUser",JSON.stringify(r))),t({type:"REGISTER_ERROR",error:r.errorMessage}),e.abrupt("return");case 10:e.prev=10,e.t0=e.catch(0),t({type:"REGISTER_ERROR",error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function We(){return(We=Object(oe.a)(ce.a.mark((function e(t){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"}),localStorage.removeItem("token");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Qe,Ye,Ke,Xe=function(){var e=h(),t=Object(r.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Object(s.f)();return!1===e.isAuth&&o.push("/auth/login"),Object(r.useEffect)((function(){he.a.get("".concat(ze,"/articles?favorited=").concat(e.user.username)).then((function(e){return c(e.data.articles)}))}),[]),Object(p.jsx)(ne,{children:Object(p.jsx)("section",{className:"favorited",children:a.map((function(e,t){return Object(p.jsx)(Le,Object(l.a)({},e),t+e.title)}))})})},Ze=R.a.header(Qe||(Qe=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  background-color: ",";\n\n  a, button {\n    margin: 0 10px;\n    border: none;\n    outline: none;\n    background-color: transparent;\n    color: ",";\n    opacity: 0.5;\n    text-decoration: none;\n    font-size: ",";\n    font-weight: bold;\n\n    &:hover {\n      opacity: 1;\n      cursor: pointer;\n    }\n  }\n"])),M,_,J),$e={title:"title",body:"body",description:"description"},et=Object(ue.c)({validationSchema:pe,mapPropsToValues:function(e){var t=e.initialValues;return t||$e}})((function(e){var t=e.values,n=e.onSubmit,r=(e.handleSubmit,e.handleChange),a=e.handleBlur,c=Ie().createNewArticleApi,o=function(){var r=Object(oe.a)(ce.a.mark((function r(a){return ce.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.next=3,c(t);case 3:e.handleCloseModal(),n(t);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:e.isModalOpen?Object(p.jsx)(le,{children:Object(p.jsxs)(ue.a,{onSubmit:o,children:[Object(p.jsx)("button",{onClick:e.handleCloseModal,children:"x"}),Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{children:"Add New Article "}),Object(p.jsxs)("label",{children:[" ","Title",Object(p.jsx)("input",{name:"title",type:"text",placeholder:"Article Title",onChange:r,onBlur:a,value:t.title})]}),Object(p.jsxs)("label",{children:[" ","Description",Object(p.jsx)("input",{name:"description",type:"text",placeholder:"Article Description",onChange:r,onBlur:a,value:t.description})]}),Object(p.jsxs)("label",{children:[" ","Body",Object(p.jsx)("input",{name:"body",type:"text",placeholder:"Article Body",onChange:r,onBlur:a,value:t.body})]}),Object(p.jsxs)("label",{children:[" ","Tags",Object(p.jsx)("input",{name:"tags",placeholder:"Tags",onChange:r,onBlur:a,value:t.tags})]}),Object(p.jsx)("input",{type:"submit",value:"Create Article"})]})]})}):""})})),tt=function(){var e=h(),t=Object(s.f)(),n=f(),a=Object(r.useState)(),c=Object(u.a)(a,2),o=(c[0],c[1]),l=Object(r.useState)(!1),d=Object(u.a)(l,2),b=d[0],j=d[1],x=function(){j(!b)};return Object(p.jsxs)(Ze,{children:[Object(p.jsx)(et,{isModalOpen:b,handleCloseModal:x,onSubmit:o,initialValues:{title:"",body:"",description:"",tags:[]}}),Object(p.jsx)(ne,{children:Object(p.jsxs)(ee,{children:[Object(p.jsx)(ie,{}),Object(p.jsxs)(ee,{flexSpacing:"flex-end",flexWrap:"wrap",children:[Object(p.jsx)(i.b,{to:"/home",children:"Home"}),!e.isAuth&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(i.b,{to:"/auth/login",children:"Log In"}),Object(p.jsx)(i.b,{to:"/auth/signup",children:"Sign Up"})]}),e.isAuth&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(X,{content:W.add,color:M,handle:x,position:"fixed"}),Object(p.jsxs)("button",{type:"link",onClick:function(){t.push({pathname:"/profiles/".concat(e.user.username),search:"",state:{author:e.user.username,currentUser:!0}})},children:[" ","Profile"]}),Object(p.jsx)("button",{onClick:function(){!function(e){We.apply(this,arguments)}(n),t.push("/home")},children:"Logout"})]})]})]})})]})},nt=R.a.form(Ye||(Ye=Object(A.a)(["\n  margin: 40px auto;\n  padding: 10px;\n  max-width: 500px;\n  box-sizing: border-box;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n\n  fieldset {\n    display: flex;\n    flex-direction: column;\n    border: none;\n  }\n\n  input {\n    position: relative;\n    margin: 10px 0;\n    padding: 12px;\n    border: 2px solid ",";\n    border-radius: 5px;\n    box-sizing: border-box;\n  }\n  button {\n    padding: 10px 0;\n    border-color: transparent;\n    border-radius: 5px;\n    background-color: ",";\n    font-size: ",";\n    color: ",";\n    text-transform: uppercase;\n    cursor: pointer;\n  }\n"])),M,L,J,_),rt=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(u.a)(c,2),l=o[0],d=o[1],b=Object(s.f)(),j=f();h().isAuth&&(b.push("/home"),s.a);var x=function(){var e=Object(oe.a)(ce.a.mark((function e(t){var r;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=JSON.stringify({user:{email:n,password:l}}),e.prev=2,e.next=5,Ge(j,r);case 5:e.sent&&(b.push("/home"),s.a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(nt,{children:[Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{children:"Login"}),Object(p.jsx)("input",{placeholder:"Email",type:"email",onChange:function(e){return a(e.target.value)},value:n,required:!0}),Object(p.jsx)("input",{placeholder:"Password",type:"password",onChange:function(e){return d(e.target.value)},value:l,required:!0}),Object(p.jsx)("button",{type:"button",onClick:x,children:"Login"})]}),Object(p.jsx)(ee,{flexSpacing:"center",children:Object(p.jsxs)("span",{children:["Don`t have an account? ",Object(p.jsx)(i.b,{to:"/auth/signup",children:"Create "}),"Now!"]})})]})},at=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(u.a)(c,2),l=o[0],d=o[1],b=Object(r.useState)(""),j=Object(u.a)(b,2),h=j[0],x=j[1],O=Object(s.f)(),g=f(),m=function(){var e=Object(oe.a)(ce.a.mark((function e(t){var r;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=JSON.stringify({user:{username:n,email:l,password:h}});try{Ve(g,r).then((function(){return O.push("/auth/login")}))}catch(a){console.log(a)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(nt,{onSubmit:m,children:[Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{children:"Sign Up"}),Object(p.jsx)("input",{placeholder:"Name",type:"text",onChange:function(e){return a(e.target.value)},value:n,required:!0}),Object(p.jsx)("input",{placeholder:"Email",type:"email",onChange:function(e){return d(e.target.value)},value:l,required:!0}),Object(p.jsx)("input",{placeholder:"Password",type:"password",onChange:function(e){return x(e.target.value)},value:h,required:!0}),Object(p.jsx)("button",{type:"submit",onSubmit:m,children:"Sign Up"})]}),Object(p.jsx)(ee,{flexSpacing:"center",children:Object(p.jsxs)("span",{children:["Already have an account? ",Object(p.jsx)(i.b,{to:"/auth/signup",children:"Log In"})," ","Now!"]})})]})},ct=Object(ue.c)({validationSchema:be,mapPropsToValues:function(e){var t=e.initialState;return t||""}})((function(e){var t=e.values,n=e.onSubmit,r=e.handleSubmit,a=e.handleChange,c=e.handleBlur,o=Ie().updateProfileApi,i=h(),s=(i.user,i.setUser),u=(f(),function(){var a=Object(oe.a)(ce.a.mark((function a(c){var i;return ce.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),r(),a.next=4,o(t);case 4:i=a.sent,s(i.data.user),e.handleCloseModal(!e.isModalOpen),n(t);case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}());return Object(p.jsx)(p.Fragment,{children:e.isModalOpen?Object(p.jsx)(le,{children:Object(p.jsxs)(ue.a,{onSubmit:u,children:[Object(p.jsx)("button",{onClick:e.handleCloseModal,children:"x"}),Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{children:"Edit your personal data"}),Object(p.jsxs)("label",{children:[" ","Avatar",Object(p.jsx)("input",{type:"text",name:"image",placeholder:"Paste image url here",onChange:a,onBlur:c,value:t.image})]}),Object(p.jsxs)("label",{children:[" ","Name",Object(p.jsx)("input",{type:"text",placeholder:"Set new name",name:"username",onChange:a,onBlur:c,value:t.username})]}),Object(p.jsxs)("label",{children:[" ","Biography",Object(p.jsx)("input",{type:"text",placeholder:"Update  your`s story",name:"bio",onChange:a,onBlur:c,value:t.bio})]}),Object(p.jsxs)("label",{children:[" ","Email",Object(p.jsx)("input",{type:"text",placeholder:"Change Email",name:"email",onChange:a,onBlur:c,value:t.email})]}),Object(p.jsx)("input",{type:"button",value:"Save changes",onClick:u})]})]})}):""})})),ot=function(){var e=Object(s.f)(),t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(!1),i=Object(u.a)(o,2),d=i[0],b=(i[1],Object(r.useState)([])),j=Object(u.a)(b,2),h=j[0],f=(j[1],function(e){var t=Ie().getProfileApi,n=Object(r.useState)({}),a=Object(u.a)(n,2),c=a[0],o=a[1],i=Pe({fetchHandler:function(){var n=Object(oe.a)(ce.a.mark((function n(){var r;return ce.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(e);case 2:return r=n.sent,o(r.data.profile),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),isLazy:!0,initialData:[]}),s=Object(u.a)(i,2)[1];return Object(r.useEffect)((function(){s()}),[]),{profile:c}}(e.location.state.author).profile);return console.log(e.location.state.author),console.log(f),Object(p.jsx)(p.Fragment,{children:a?Object(p.jsxs)(ne,{children:[Object(p.jsx)(ct,{isModalOpen:d,initialState:a,onSubmit:c}),Object(p.jsx)("section",{className:"user-info",children:Object(p.jsxs)(ee,{children:[Object(p.jsx)("img",{src:a.image,alt:"Avatar"}),Object(p.jsxs)(te,{children:[Object(p.jsx)("p",{children:a.username}),Object(p.jsx)("p",{children:a.createdAt}),Object(p.jsx)("p",{children:a.bio}),e.location.state.currentUser?Object(p.jsx)(X,{content:W.edit,color:M}):Object(p.jsx)(X,{content:W.subscription,color:M,isFavorited:a.following})]})]})}),Object(p.jsx)("section",{className:"my-articles",children:h.map((function(e,t){return Object(p.jsx)(Le,Object(l.a)({},e),t+e.title)}))})]}):""})},it=R.a.div(Ke||(Ke=Object(A.a)(["\n  display: flex;\n  margin: 12px 0;\n  padding: 10px;\n  border: 1px solid black;\n  width: 100%;\n  box-sizing: border-box;\n"]))),st=function(e){var t=Object(r.useState)(e),n=Object(u.a)(t,2),a=n[0],c=n[1],o=h(),i=Object(s.f)(),l=Ie().deleteCommentApi,d=function(){var t=Object(oe.a)(ce.a.mark((function t(n){return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,l(e.slug,e.id);case 3:c("");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)(ne,{children:a?Object(p.jsx)(it,{children:Object(p.jsxs)(te,{children:[Object(p.jsxs)(ee,{children:[Object(p.jsx)(ie,{imgUrl:a.author.image}),Object(p.jsxs)(te,{children:[Object(p.jsx)("button",{type:"link",onClick:function(){i.push({pathname:"/profiles/".concat(a.author.username),state:{author:a.author.username,currentUser:a.author.username===o.user.username}})},children:a.author.username}),Object(p.jsx)("p",{children:a.createdAt})]}),a.author.username===o.user.username?Object(p.jsx)(X,{color:D,content:W.close,handle:d}):""]}),Object(p.jsx)("div",{children:a.body})]})}):""})},ut=function(e){var t=Object(s.f)(),n=h(),a=Object(r.useState)(""),c=Object(u.a)(a,2),o=c[0],i=c[1],d=Object(r.useState)([]),b=Object(u.a)(d,2),j=b[0],f=b[1],x=Ie(),O=x.getCommentsApi,g=x.createNewCommentApi,m=Object(ue.b)({initialValues:{body:""}});console.log(t.location.pathname);var v=function(){var e=Object(oe.a)(ce.a.mark((function e(){var n;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t.location.state.slug);case 2:n=e.sent,f(n.data.comments);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(oe.a)(ce.a.mark((function e(n){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,g(m.values,t.location.state.slug);case 3:v();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){(function(){var e=Object(oe.a)(ce.a.mark((function e(){var n;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.a.get("".concat(ze).concat(t.location.pathname));case 2:n=e.sent,i(n.data.article),v();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(p.jsx)(p.Fragment,{children:o?Object(p.jsxs)(ne,{children:[Object(p.jsxs)("section",{children:[" ",Object(p.jsx)(Le,Object(l.a)({},o))," "]}),n.isAuth?Object(p.jsxs)("section",{children:[Object(p.jsx)("form",{onSubmit:y,children:Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{children:"Comments"}),Object(p.jsx)(ie,{imgUrl:o.author.image}),Object(p.jsx)("input",{type:"text",name:"body",onChange:m.handleChange,value:m.values.body,placeholder:"Write some About Article"}),Object(p.jsx)("input",{type:"submit",value:"Create Comment"})]})}),Object(p.jsx)("section",{children:j?j.map((function(e,t){return Object(r.createElement)(st,Object(l.a)(Object(l.a)({},e),{},{key:o.slug+e.id,slug:o.slug}))})):""})]}):""]}):""})},lt=n(106),dt=function(){var e=Ie().getFeeds,t=Object(lt.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],o=function(){var t=Object(oe.a)(ce.a.mark((function t(){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,console.log(n),c(n.data.articles);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){o()}),[]),Object(p.jsx)(ne,{children:Object(p.jsx)("section",{children:a.map((function(e,t){return Object(p.jsx)(Le,Object(l.a)({},e),t+e.title)}))})})},pt={user:"",token:localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):"",isAuth:!1,loading:!1,errorMessage:null};var bt=function(){var e=f(),t=Ie().getUserApi;return h(),Object(r.useEffect)((function(){pt.token&&t().then((function(t){e({payload:t.data,type:"LOGIN_SUCCESS"})})).catch((function(){return console.log("Error arter trying login")}))}),[]),Object(p.jsxs)(i.a,{children:[Object(p.jsx)(tt,{}),Object(p.jsx)($,{}),Object(p.jsx)(s.b,{exact:!0,path:"/home",component:De}),Object(p.jsx)(s.b,{exact:!0,path:"/auth/login",component:rt}),Object(p.jsx)(s.b,{exact:!0,path:"/auth/signup",component:at}),Object(p.jsx)(s.b,{exact:!0,path:"/favorites",component:Xe}),Object(p.jsx)(s.b,{exact:!0,path:"/feeds",component:dt}),Object(p.jsx)(s.b,{path:"/profiles",component:ot}),Object(p.jsx)(s.b,{path:"/articles",component:ut})]})};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(E,{children:Object(p.jsx)(bt,{})})}),document.getElementById("root"))}},[[233,1,2]]]);
//# sourceMappingURL=main.9dea4fc2.chunk.js.map