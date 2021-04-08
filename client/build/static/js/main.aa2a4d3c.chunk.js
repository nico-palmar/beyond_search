(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(9),s=n.n(a),i=(n(87),n.p,n(88),n(74)),o=n(13),l=n(43),j=n(51),u=n(24),d=n.n(u),h=n(41),b=n(5),p=n(52),x=n(160),O=n(148),f=n(161),m=n(162),g=n(163),v=n(165),y=n(171),k=n(172),w=n(168),N=n(152),C=n(4),F=function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(O.a,{item:!0,xs:12,align:"center",children:[e.icon,Object(C.jsxs)(k.a,{children:[Object(C.jsx)(w.a,{variant:"outlined",label:e.fieldName,value:e.fieldValue,onChange:function(t){"Add a github user"===e.helperText?e.updateTextField(t,"addUser"):e.updateTextField(t,"searchRepo")}}),Object(C.jsx)(N.a,{children:e.helperText})]})]})})},T=n(153),U=function(e){return Object(C.jsx)(O.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(C.jsx)(T.a,{variant:"contained",color:"primary",onClick:function(){e.buttonClicked()},style:{backgroundColor:"#7b113a"},children:"Add"})})},S=n(164),A=n(166),R=n(167),D=n(169),I=n(154),B=n(155),V=n(156),E=n(157),H=n(158),J=n(159),L=function(e){var t=Object(b.a)({root:{color:"#150e56"}})(I.a);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(B.a,{children:Object(C.jsxs)(V.a,{"aria-label":"simple-table",children:[Object(C.jsx)(E.a,{children:Object(C.jsxs)(H.a,{children:[Object(C.jsx)(t,{component:"th",scope:"row",children:"Id"}),Object(C.jsx)(t,{align:"right",children:"Repo Name"}),Object(C.jsx)(t,{align:"right",children:"Github User"})]})}),Object(C.jsx)(J.a,{children:e.rows.map((function(e){return Object(C.jsxs)(H.a,{children:[Object(C.jsx)(t,{component:"th",scope:"row",children:e.id}),Object(C.jsx)(t,{align:"right",children:e.repoName}),Object(C.jsx)(t,{align:"right",children:e.userName})]},e.id)}))})]})})})},P=n(42),z=n.n(P),G=n(112),M=function(){var e="https://beyond-search.herokuapp.com/api";Object(c.useEffect)((function(){(function(){var t=Object(h.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e+"/create-trie",t.next=3,z.a.get("https://beyond-search.herokuapp.com/api/create-trie");case 3:n=t.sent,c=n.data,console.log(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var t=Object(b.a)({root:{color:"#150e56"}})(p.a),n=Object(c.useState)({addUser:"",searchRepo:""}),r=Object(j.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)({open:!1,status:null}),o=Object(j.a)(i,2),u=o[0],k=o[1],w=Object(c.useState)([]),N=Object(j.a)(w,2),T=N[0],I=N[1],B=function(e){k("success"===e?{open:!0,status:"success"}:{open:!0,status:"error"})},V=function(e){k((function(e){return Object(l.a)(Object(l.a)({},e),{},{open:!1})}))},E=function(){var t=Object(h.a)(d.a.mark((function t(n,c){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s((function(e){var t=Object(l.a)({},e);return t[c]=n.target.value,t})),"searchRepo"!==c){t.next=15;break}return e+"/search-trie",t.prev=3,t.next=6,z.a.get("https://beyond-search.herokuapp.com/api/search-trie",{params:{searchString:n.target.value}});case 6:r=t.sent,a=r.data,I((function(e){return a})),console.log(a),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e,n){return t.apply(this,arguments)}}(),H=function(){var t=Object(h.a)(d.a.mark((function t(n){var c,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e+"/add-user",(c=new G).append("userName",a.addUser),t.prev=3,t.next=6,z.a.post("https://beyond-search.herokuapp.com/api/add-user",c);case 6:r=t.sent,i=r.data,console.log(i),B("success"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),B("error");case 15:s((function(e){var t=Object(l.a)({},e);return t.addUser="",t}));case 16:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}(),J=function(){var t=Object(h.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e+"/truncate/8",t.next=3,z.a.delete("https://beyond-search.herokuapp.com/api/truncate/8");case 3:t.sent,console.log("Data Deleted");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(x.a,{maxWidth:"xs",children:Object(C.jsxs)(O.a,{container:!0,spacing:8,alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:[Object(C.jsx)(O.a,{item:!0,xs:12,className:"title",align:"center",children:Object(C.jsx)(t,{variant:"h2",children:" Beyond Search "})}),Object(C.jsx)(O.a,{item:!0,xs:12,align:"center",children:Object(C.jsxs)(f.a,{children:[Object(C.jsx)(m.a,{action:Object(C.jsx)(g.a,{"aria-label":"delete",onClick:J,children:Object(C.jsx)(S.a,{style:{color:"#880e4f"}})})}),Object(C.jsxs)(v.a,{children:[Object(C.jsx)(F,{fieldValue:a.addUser,fieldName:"User Name",icon:Object(C.jsx)(A.a,{style:{color:"#7b113a"}}),helperText:"Add a github user",updateTextField:E}),Object(C.jsx)(U,{buttonClicked:H})]})]})}),Object(C.jsx)(y.a,{anchorOrigin:{vertical:"center",horizontal:"center"},open:u.open,autoHideDuration:3e3,onClose:V,children:Object(C.jsx)(D.a,{onClose:V,severity:u.status,children:"success"===u.status?"User Added!":"User Not Added :("})}),Object(C.jsx)(O.a,{item:!0,xs:12,align:"center",children:Object(C.jsx)(f.a,{children:Object(C.jsx)(v.a,{children:Object(C.jsx)(F,{fieldValue:a.searchRepo,fieldName:"Repo Name",icon:Object(C.jsx)(R.a,{style:{color:"#7b113a"}}),helperText:"Search for repo",updateTextField:E})})})}),Object(C.jsx)(O.a,{item:!0,xs:12,align:"center",children:Object(C.jsx)(L,{rows:T})})]})})})};var W=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(i.a,{children:Object(C.jsxs)(o.d,{children:[Object(C.jsx)(o.b,{exact:!0,path:"/",children:Object(C.jsx)(o.a,{to:"/main"})}),Object(C.jsx)(o.b,{path:"/main",component:M})]})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,173)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(W,{})}),document.getElementById("root")),q()},87:function(e,t,n){},88:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.aa2a4d3c.chunk.js.map