(this.webpackJsonpmyreact=this.webpackJsonpmyreact||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(22),s=n.n(r),i=(n(29),n(13)),j=n(11),b=n(7),d=n(40),l=n(41),o=n(42),u=n(43),O=n(2),h=function(){return Object(O.jsxs)(d.a,{color:"dark",children:[Object(O.jsx)(l.a,{className:"text-white",children:"MySimpleCrud"}),Object(O.jsx)(o.a,{children:Object(O.jsx)(u.a,{children:Object(O.jsx)(j.b,{className:"btn btn-primary",to:"/add",children:"Add User"})})})]})},m=n(44),x=n(45),f=n(46),p=Object(c.createContext)([]),v=function(){var e=Object(c.useContext)(p),t=e.users,n=e.removeUser;return Object(O.jsx)(m.a,{className:"container p-0 mt-3",children:t.map((function(e){return Object(O.jsxs)(x.a,{className:"d-flex justify-content-between",children:[Object(O.jsx)("span",{children:e.username}),Object(O.jsxs)("div",{children:[Object(O.jsx)(j.b,{to:"/edit/".concat(e.id),className:"btn btn-warning",children:"Edit"}),Object(O.jsx)(f.a,{className:"btn btn-danger ml-2",onClick:function(){return n(e.id)},children:"Delete"})]})]},e.id)}))})},g=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{}),Object(O.jsx)(v,{})]})},C=n(47),N=n(48),y=n(49),E=n(50),S=function(e){var t=Object(c.useContext)(p),n=t.users,a=t.handleEdit,r=Object(c.useState)({id:"",username:""}),s=Object(i.a)(r,2),d=s[0],l=s[1],o=Object(b.f)(),u=e.match.params.id;Object(c.useEffect)((function(){var e=u,t=n.find((function(t){return t.id===e}));l(t)}),[u,n]);return Object(O.jsxs)(C.a,{children:[Object(O.jsxs)(N.a,{children:[Object(O.jsx)(y.a,{className:"text-white",children:"Enter Name: "}),Object(O.jsx)(E.a,{type:"text",onChange:function(e){l({id:u,username:e.target.value})},value:d.username,placeholder:"Enter Name of User",bsSize:"lg"})]}),Object(O.jsx)(f.a,{type:"submit",onClick:function(){o.push("/"),a(d)},color:"primary",children:"Edit"}),Object(O.jsx)(j.b,{to:"/",className:"btn btn-danger ml-2",children:"Cancel"})]})},w=n(24),U=n(51),k=function(){var e=Object(c.useContext)(p).setUsers,t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(b.f)();return Object(O.jsxs)(C.a,{children:[Object(O.jsxs)(N.a,{children:[Object(O.jsx)(y.a,{className:"text-white",children:"Enter Name: "}),Object(O.jsx)(E.a,{bsSize:"lg",type:"text",onChange:function(e){r(e.target.value)},placeholder:"Enter Name of User"})]}),Object(O.jsx)(f.a,{color:"primary",onClick:function(){e((function(e){return[].concat(Object(w.a)(e),[{id:Object(U.a)(),username:a}])})),s.push("/")},children:"Submit"}),Object(O.jsx)(j.b,{to:"/",className:"btn btn-danger ml-2",children:"Cancel"})]})};n(36),n(37);var F=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(O.jsx)("div",{className:"container-fluid",children:Object(O.jsx)(p.Provider,{value:{users:n,setUsers:a,removeUser:function(e){var t=n.filter((function(t){return t.id!==e}));a(t)},handleEdit:function(e){var t=e,c=n.map((function(e){return e.id===t.id?t:e}));a(c),console.log("hi"+e.id)}},children:Object(O.jsx)(j.a,{basename:"/sample3",children:Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:"/",exact:!0,component:g}),Object(O.jsx)(b.a,{path:"/add",component:k}),Object(O.jsx)(b.a,{path:"/edit/:id",component:S})]})})})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root")),P()}},[[38,1,2]]]);
//# sourceMappingURL=main.689f71a6.chunk.js.map