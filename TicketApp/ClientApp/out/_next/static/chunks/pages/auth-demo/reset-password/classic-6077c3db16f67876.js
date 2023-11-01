(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[852,4532,6459,9265],{93155:function(e,s,a){"use strict";a.d(s,{Z:function(){return q}});var r=a(87462),t=a(63366),o=a(67294),n=a(86010),i=a(94780),d=a(57579),l=a(90948),c=a(71657),u=a(79332),h=a(6135),p=a(57709),m=a(15704),f=a(74423),x=a(40476),g=a(64748),b=a(56727),w=a(85893);let v=["disableAnimation","margin","shrink","variant","className"],Z=e=>{let{classes:s,formControl:a,size:t,shrink:o,disableAnimation:n,variant:d,required:l}=e,c=(0,i.Z)({root:["root",a&&"formControl",!n&&"animated",o&&"shrink","small"===t&&"sizeSmall",d],asterisk:[l&&"asterisk"]},b.Y,s);return(0,r.Z)({},s,c)},y=(0,l.ZP)(x.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiInputLabel",slot:"Root",overridesResolver:(e,s)=>{let{ownerState:a}=e;return[{[`& .${g.Z.asterisk}`]:s.asterisk},s.root,a.formControl&&s.formControl,"small"===a.size&&s.sizeSmall,a.shrink&&s.shrink,!a.disableAnimation&&s.animated,s[a.variant]]}})(({theme:e,ownerState:s})=>(0,r.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},s.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===s.size&&{transform:"translate(0, 17px) scale(1)"},s.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!s.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},"filled"===s.variant&&(0,r.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===s.size&&{transform:"translate(12px, 13px) scale(1)"},s.shrink&&(0,r.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===s.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===s.variant&&(0,r.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===s.size&&{transform:"translate(14px, 9px) scale(1)"},s.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}))),j=o.forwardRef(function(e,s){let a=(0,c.Z)({name:"MuiInputLabel",props:e}),{disableAnimation:o=!1,shrink:i,className:d}=a,l=(0,t.Z)(a,v),u=(0,f.Z)(),h=i;void 0===h&&u&&(h=u.filled||u.focused||u.adornedStart);let p=(0,m.Z)({props:a,muiFormControl:u,states:["size","variant","required"]}),x=(0,r.Z)({},a,{disableAnimation:o,formControl:u,shrink:h,size:p.size,variant:p.variant,required:p.required}),g=Z(x);return(0,w.jsx)(y,(0,r.Z)({"data-shrink":h,ownerState:x,ref:s,className:(0,n.Z)(g.root,d)},l,{classes:g}))});var k=a(94054),C=a(56815),P=a(18360),I=a(1588),R=a(34867);function S(e){return(0,R.Z)("MuiTextField",e)}(0,I.Z)("MuiTextField",["root"]);let z=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],W={standard:u.Z,filled:h.Z,outlined:p.Z},T=e=>{let{classes:s}=e;return(0,i.Z)({root:["root"]},S,s)},_=(0,l.ZP)(k.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,s)=>s.root})({}),F=o.forwardRef(function(e,s){let a=(0,c.Z)({props:e,name:"MuiTextField"}),{autoComplete:o,autoFocus:i=!1,children:l,className:u,color:h="primary",defaultValue:p,disabled:m=!1,error:f=!1,FormHelperTextProps:x,fullWidth:g=!1,helperText:b,id:v,InputLabelProps:Z,inputProps:y,InputProps:k,inputRef:I,label:R,maxRows:S,minRows:F,multiline:q=!1,name:O,onBlur:E,onChange:L,onFocus:M,placeholder:N,required:B=!1,rows:D,select:H=!1,SelectProps:A,type:V,value:$,variant:X="outlined"}=a,J=(0,t.Z)(a,z),K=(0,r.Z)({},a,{autoFocus:i,color:h,disabled:m,error:f,fullWidth:g,multiline:q,required:B,select:H,variant:X}),Y=T(K),G={};"outlined"===X&&(Z&&void 0!==Z.shrink&&(G.notched=Z.shrink),G.label=R),H&&(A&&A.native||(G.id=void 0),G["aria-describedby"]=void 0);let Q=(0,d.Z)(v),U=b&&Q?`${Q}-helper-text`:void 0,ee=R&&Q?`${Q}-label`:void 0,es=W[X],ea=(0,w.jsx)(es,(0,r.Z)({"aria-describedby":U,autoComplete:o,autoFocus:i,defaultValue:p,fullWidth:g,multiline:q,name:O,rows:D,maxRows:S,minRows:F,type:V,value:$,id:Q,inputRef:I,onBlur:E,onChange:L,onFocus:M,placeholder:N,inputProps:y},G,k));return(0,w.jsxs)(_,(0,r.Z)({className:(0,n.Z)(Y.root,u),disabled:m,error:f,fullWidth:g,ref:s,required:B,color:h,variant:X,ownerState:K},J,{children:[null!=R&&""!==R&&(0,w.jsx)(j,(0,r.Z)({htmlFor:Q,id:ee},Z,{children:R})),H?(0,w.jsx)(P.Z,(0,r.Z)({"aria-describedby":U,id:Q,labelId:ee,value:$,input:ea},A,{children:l})):ea,b&&(0,w.jsx)(C.Z,(0,r.Z)({id:U},x,{children:b}))]}))});var q=F},28887:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth-demo/reset-password/classic",function(){return a(7907)}])},13971:function(e,s,a){"use strict";a.d(s,{A:function(){return f}});var r=a(85893),t=a(41664),o=a.n(t),n=a(45697),i=a.n(n),d=a(36822),l=a(21214),c=a(26447),u=a(90948),h=a(52540),p=a(98637),m=(0,u.ZP)("div")(function(e){return{backgroundColor:e.theme.palette.background.default,backgroundRepeat:"no-repeat",backgroundPosition:"top center",backgroundImage:'url("/assets/gradient-bg.svg")',display:"flex",flex:"1 1 auto",flexDirection:"column",height:"100%"}}),f=function(e){var s=e.children;return(0,r.jsxs)(m,{children:[(0,r.jsx)(d.Z,{component:"header",sx:{left:0,position:"fixed",right:0,top:0,zIndex:function(e){return e.zIndex.appBar}},children:(0,r.jsx)(l.Z,{maxWidth:"lg",children:(0,r.jsx)(c.Z,{direction:"row",spacing:2,sx:{height:64},children:(0,r.jsxs)(c.Z,{alignItems:"center",component:o(),direction:"row",display:"inline-flex",href:p.H.index,spacing:1,sx:{textDecoration:"none"},children:[(0,r.jsx)(d.Z,{sx:{display:"inline-flex",height:24,width:24},children:(0,r.jsx)(h.T,{})}),(0,r.jsxs)(d.Z,{sx:{color:"text.primary",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:800,letterSpacing:"0.3px",lineHeight:2.5,"& span":{color:"primary.main"}},children:["Devias Kit ",(0,r.jsx)("span",{children:"PRO"})]})]})})})}),(0,r.jsx)(d.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"center",flex:"1 1 auto"},children:(0,r.jsx)(l.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:s})})]})};f.propTypes={children:i().node}},7907:function(e,s,a){"use strict";a.r(s);var r=a(85893),t=a(41664),o=a.n(t),n=a(74231),i=a(82175),d=a(30136),l=a(36822),c=a(23795),u=a(53219),h=a(15861),p=a(66242),m=a(78445),f=a(44267),x=a(26447),g=a(93155),b=a(11057),w=a(13971),v=a(98637),Z={password:"",passwordConfirm:""},y=n.Ry({password:n.Z_().min(7,"Must be at least 7 characters").max(255).required("Required"),passwordConfirm:n.Z_().oneOf([n.iH("password"),null],"Passwords must match").required("Required")}),j=function(){var e=(0,i.TA)({initialValues:Z,validationSchema:y,onSubmit:function(){}});return(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{sx:{mb:4},children:(0,r.jsxs)(c.Z,{color:"text.primary",component:o(),href:v.H.dashboard.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[(0,r.jsx)(u.Z,{sx:{mr:1},children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)(h.Z,{variant:"subtitle2",children:"Dashboard"})]})}),(0,r.jsxs)(p.Z,{elevation:16,children:[(0,r.jsx)(m.Z,{sx:{pb:0},title:"Reset Password"}),(0,r.jsx)(f.Z,{children:(0,r.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[(0,r.jsxs)(x.Z,{spacing:3,children:[(0,r.jsx)(g.Z,{error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password}),(0,r.jsx)(g.Z,{error:!!(e.touched.passwordConfirm&&e.errors.passwordConfirm),fullWidth:!0,helperText:e.touched.passwordConfirm&&e.errors.passwordConfirm,label:"Password (Confirm)",name:"passwordConfirm",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.passwordConfirm})]}),(0,r.jsx)(b.Z,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Reset"})]})})]})]})};j.getLayout=function(e){return(0,r.jsx)(w.A,{children:e})},s.default=j},98637:function(e,s,a){"use strict";a.d(s,{H:function(){return r}});var r={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{auth0:{callback:"/auth/auth0/callback",login:"/auth/auth0/login"},jwt:{login:"/auth/jwt/login",register:"/auth/jwt/register"},firebase:{login:"/auth/firebase/login",register:"/auth/firebase/register"},amplify:{confirmRegister:"/auth/amplify/confirm-register",forgotPassword:"/auth/amplify/forgot-password",login:"/auth/amplify/login",register:"/auth/amplify/register",resetPassword:"/auth/amplify/reset-password"}},authDemo:{forgotPassword:{classic:"/auth-demo/forgot-password/classic",modern:"/auth-demo/forgot-password/modern"},login:{classic:"/auth-demo/login/classic",modern:"/auth-demo/login/modern"},register:{classic:"/auth-demo/register/classic",modern:"/auth-demo/register/modern"},resetPassword:{classic:"/auth-demo/reset-password/classic",modern:"/auth-demo/reset-password/modern"},verifyCode:{classic:"/auth-demo/verify-code/classic",modern:"/auth-demo/verify-code/modern"}},dashboard:{index:"/dashboard",academy:{index:"/dashboard/academy",courseDetails:"/dashboard/academy/courses/:courseId"},account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",blog:{index:"/dashboard/blog",postDetails:"/dashboard/blog/:postId",postCreate:"/dashboard/blog/create"},calendar:"/dashboard/calendar",chat:"/dashboard/chat",crypto:"/dashboard/crypto",customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},ecommerce:"/dashboard/ecommerce",fileManager:"/dashboard/file-manager",invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},jobs:{index:"/dashboard/jobs",create:"/dashboard/jobs/create",companies:{details:"/dashboard/jobs/companies/:companyId"}},kanban:"/dashboard/kanban",logistics:{index:"/dashboard/logistics",fleet:"/dashboard/logistics/fleet"},mail:"/dashboard/mail",orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"},social:{index:"/dashboard/social",profile:"/dashboard/social/profile",feed:"/dashboard/social/feed"}},components:{index:"/components",dataDisplay:{detailLists:"/components/data-display/detail-lists",tables:"/components/data-display/tables",quickStats:"/components/data-display/quick-stats"},lists:{groupedLists:"/components/lists/grouped-lists",gridLists:"/components/lists/grid-lists"},forms:"/components/forms",modals:"/components/modals",charts:"/components/charts",buttons:"/components/buttons",typography:"/components/typography",colors:"/components/colors",inputs:"/components/inputs"},docs:{analytics:{configuration:"/docs/analytics-configuration",eventTracking:"/docs/analytics-event-tracking",introduction:"/docs/analytics-introduction"},auth:{amplify:"/docs/auth-amplify",auth0:"/docs/auth-auth0",firebase:"/docs/auth-firebase",jwt:"/docs/auth-jwt"},changelog:"/docs/changelog",contact:"/docs/contact",dependencies:"/docs/dependencies",deployment:"/docs/deployment",environmentVariables:"/docs/environment-variables",gettingStarted:"/docs/getting-started",guards:{auth:"/docs/guards-auth",guest:"/docs/guards-guest",roleBased:"/docs/guards-role-based"},furtherSupport:"/docs/further-support",internationalization:"/docs/internationalization",mapbox:"/docs/mapbox",redux:"/docs/redux",routing:"/docs/routing",rtl:"/docs/rtl",serverCalls:"/docs/server-calls",settings:"/docs/settings",theming:"/docs/theming",welcome:"/docs/welcome"},401:"/401",404:"/404",500:"/500"}},30136:function(e,s,a){"use strict";var r=a(87462);a(67294);var t=a(85893);s.Z=function(e){return(0,t.jsxs)("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e,{children:[(0,t.jsx)("path",{fill:"#fff",fillOpacity:.01,d:"m12 19-7-7 7-7"}),(0,t.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 12H5m0 0 7 7m-7-7 7-7"})]}))}}},function(e){e.O(0,[1664,5978,1238,8360,939,1141,7470,9774,2888,179],function(){return e(e.s=28887)}),_N_E=e.O()}]);