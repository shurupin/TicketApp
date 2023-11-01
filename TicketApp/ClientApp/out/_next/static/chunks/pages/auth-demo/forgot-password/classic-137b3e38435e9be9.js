(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8168,4532,6459,9265],{93155:function(e,a,t){"use strict";t.d(a,{Z:function(){return E}});var s=t(87462),r=t(63366),o=t(67294),i=t(86010),n=t(94780),d=t(57579),l=t(90948),c=t(71657),u=t(79332),h=t(6135),m=t(57709),p=t(15704),f=t(74423),x=t(40476),g=t(64748),b=t(56727),v=t(85893);let Z=["disableAnimation","margin","shrink","variant","className"],y=e=>{let{classes:a,formControl:t,size:r,shrink:o,disableAnimation:i,variant:d,required:l}=e,c=(0,n.Z)({root:["root",t&&"formControl",!i&&"animated",o&&"shrink","small"===r&&"sizeSmall",d],asterisk:[l&&"asterisk"]},b.Y,a);return(0,s.Z)({},a,c)},w=(0,l.ZP)(x.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiInputLabel",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:t}=e;return[{[`& .${g.Z.asterisk}`]:a.asterisk},a.root,t.formControl&&a.formControl,"small"===t.size&&a.sizeSmall,t.shrink&&a.shrink,!t.disableAnimation&&a.animated,a[t.variant]]}})(({theme:e,ownerState:a})=>(0,s.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},a.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===a.size&&{transform:"translate(0, 17px) scale(1)"},a.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!a.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},"filled"===a.variant&&(0,s.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===a.size&&{transform:"translate(12px, 13px) scale(1)"},a.shrink&&(0,s.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===a.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===a.variant&&(0,s.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===a.size&&{transform:"translate(14px, 9px) scale(1)"},a.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}))),j=o.forwardRef(function(e,a){let t=(0,c.Z)({name:"MuiInputLabel",props:e}),{disableAnimation:o=!1,shrink:n,className:d}=t,l=(0,r.Z)(t,Z),u=(0,f.Z)(),h=n;void 0===h&&u&&(h=u.filled||u.focused||u.adornedStart);let m=(0,p.Z)({props:t,muiFormControl:u,states:["size","variant","required"]}),x=(0,s.Z)({},t,{disableAnimation:o,formControl:u,shrink:h,size:m.size,variant:m.variant,required:m.required}),g=y(x);return(0,v.jsx)(w,(0,s.Z)({"data-shrink":h,ownerState:x,ref:a,className:(0,i.Z)(g.root,d)},l,{classes:g}))});var k=t(94054),I=t(56815),S=t(18360),C=t(1588),P=t(34867);function z(e){return(0,P.Z)("MuiTextField",e)}(0,C.Z)("MuiTextField",["root"]);let R=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],F={standard:u.Z,filled:h.Z,outlined:m.Z},W=e=>{let{classes:a}=e;return(0,n.Z)({root:["root"]},z,a)},T=(0,l.ZP)(k.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,a)=>a.root})({}),_=o.forwardRef(function(e,a){let t=(0,c.Z)({props:e,name:"MuiTextField"}),{autoComplete:o,autoFocus:n=!1,children:l,className:u,color:h="primary",defaultValue:m,disabled:p=!1,error:f=!1,FormHelperTextProps:x,fullWidth:g=!1,helperText:b,id:Z,InputLabelProps:y,inputProps:w,InputProps:k,inputRef:C,label:P,maxRows:z,minRows:_,multiline:E=!1,name:q,onBlur:L,onChange:M,onFocus:N,placeholder:O,required:D=!1,rows:A,select:B=!1,SelectProps:H,type:V,value:$,variant:X="outlined"}=t,J=(0,r.Z)(t,R),K=(0,s.Z)({},t,{autoFocus:n,color:h,disabled:p,error:f,fullWidth:g,multiline:E,required:D,select:B,variant:X}),Y=W(K),G={};"outlined"===X&&(y&&void 0!==y.shrink&&(G.notched=y.shrink),G.label=P),B&&(H&&H.native||(G.id=void 0),G["aria-describedby"]=void 0);let Q=(0,d.Z)(Z),U=b&&Q?`${Q}-helper-text`:void 0,ee=P&&Q?`${Q}-label`:void 0,ea=F[X],et=(0,v.jsx)(ea,(0,s.Z)({"aria-describedby":U,autoComplete:o,autoFocus:n,defaultValue:m,fullWidth:g,multiline:E,name:q,rows:A,maxRows:z,minRows:_,type:V,value:$,id:Q,inputRef:C,onBlur:L,onChange:M,onFocus:N,placeholder:O,inputProps:w},G,k));return(0,v.jsxs)(T,(0,s.Z)({className:(0,i.Z)(Y.root,u),disabled:p,error:f,fullWidth:g,ref:a,required:D,color:h,variant:X,ownerState:K},J,{children:[null!=P&&""!==P&&(0,v.jsx)(j,(0,s.Z)({htmlFor:Q,id:ee},y,{children:P})),B?(0,v.jsx)(S.Z,(0,s.Z)({"aria-describedby":U,id:Q,labelId:ee,value:$,input:et},H,{children:l})):et,b&&(0,v.jsx)(I.Z,(0,s.Z)({id:U},x,{children:b}))]}))});var E=_},71353:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth-demo/forgot-password/classic",function(){return t(52712)}])},13971:function(e,a,t){"use strict";t.d(a,{A:function(){return f}});var s=t(85893),r=t(41664),o=t.n(r),i=t(45697),n=t.n(i),d=t(36822),l=t(21214),c=t(26447),u=t(90948),h=t(52540),m=t(98637),p=(0,u.ZP)("div")(function(e){return{backgroundColor:e.theme.palette.background.default,backgroundRepeat:"no-repeat",backgroundPosition:"top center",backgroundImage:'url("/assets/gradient-bg.svg")',display:"flex",flex:"1 1 auto",flexDirection:"column",height:"100%"}}),f=function(e){var a=e.children;return(0,s.jsxs)(p,{children:[(0,s.jsx)(d.Z,{component:"header",sx:{left:0,position:"fixed",right:0,top:0,zIndex:function(e){return e.zIndex.appBar}},children:(0,s.jsx)(l.Z,{maxWidth:"lg",children:(0,s.jsx)(c.Z,{direction:"row",spacing:2,sx:{height:64},children:(0,s.jsxs)(c.Z,{alignItems:"center",component:o(),direction:"row",display:"inline-flex",href:m.H.index,spacing:1,sx:{textDecoration:"none"},children:[(0,s.jsx)(d.Z,{sx:{display:"inline-flex",height:24,width:24},children:(0,s.jsx)(h.T,{})}),(0,s.jsxs)(d.Z,{sx:{color:"text.primary",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:800,letterSpacing:"0.3px",lineHeight:2.5,"& span":{color:"primary.main"}},children:["Devias Kit ",(0,s.jsx)("span",{children:"PRO"})]})]})})})}),(0,s.jsx)(d.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"center",flex:"1 1 auto"},children:(0,s.jsx)(l.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:a})})]})};f.propTypes={children:n().node}},52712:function(e,a,t){"use strict";t.r(a);var s=t(85893),r=t(41664),o=t.n(r),i=t(74231),n=t(82175),d=t(30136),l=t(36822),c=t(23795),u=t(53219),h=t(15861),m=t(66242),p=t(78445),f=t(44267),x=t(93155),g=t(11057),b=t(13971),v=t(98637),Z={email:""},y=i.Ry({email:i.Z_().email("Must be a valid email").max(255).required("Email is required")}),w=function(){var e=(0,n.TA)({initialValues:Z,validationSchema:y,onSubmit:function(){}});return(0,s.jsxs)("div",{children:[(0,s.jsx)(l.Z,{sx:{mb:4},children:(0,s.jsxs)(c.Z,{color:"text.primary",component:o(),href:v.H.dashboard.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[(0,s.jsx)(u.Z,{sx:{mr:1},children:(0,s.jsx)(d.Z,{})}),(0,s.jsx)(h.Z,{variant:"subtitle2",children:"Dashboard"})]})}),(0,s.jsxs)(m.Z,{elevation:16,children:[(0,s.jsx)(p.Z,{sx:{pb:0},title:"Forgot password"}),(0,s.jsx)(f.Z,{children:(0,s.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[(0,s.jsx)(x.Z,{autoFocus:!0,error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),(0,s.jsx)(g.Z,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Send reset link"})]})})]})]})};w.getLayout=function(e){return(0,s.jsx)(b.A,{children:e})},a.default=w},98637:function(e,a,t){"use strict";t.d(a,{H:function(){return s}});var s={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{auth0:{callback:"/auth/auth0/callback",login:"/auth/auth0/login"},jwt:{login:"/auth/jwt/login",register:"/auth/jwt/register"},firebase:{login:"/auth/firebase/login",register:"/auth/firebase/register"},amplify:{confirmRegister:"/auth/amplify/confirm-register",forgotPassword:"/auth/amplify/forgot-password",login:"/auth/amplify/login",register:"/auth/amplify/register",resetPassword:"/auth/amplify/reset-password"}},authDemo:{forgotPassword:{classic:"/auth-demo/forgot-password/classic",modern:"/auth-demo/forgot-password/modern"},login:{classic:"/auth-demo/login/classic",modern:"/auth-demo/login/modern"},register:{classic:"/auth-demo/register/classic",modern:"/auth-demo/register/modern"},resetPassword:{classic:"/auth-demo/reset-password/classic",modern:"/auth-demo/reset-password/modern"},verifyCode:{classic:"/auth-demo/verify-code/classic",modern:"/auth-demo/verify-code/modern"}},dashboard:{index:"/dashboard",academy:{index:"/dashboard/academy",courseDetails:"/dashboard/academy/courses/:courseId"},account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",blog:{index:"/dashboard/blog",postDetails:"/dashboard/blog/:postId",postCreate:"/dashboard/blog/create"},calendar:"/dashboard/calendar",chat:"/dashboard/chat",crypto:"/dashboard/crypto",customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},ecommerce:"/dashboard/ecommerce",fileManager:"/dashboard/file-manager",invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},jobs:{index:"/dashboard/jobs",create:"/dashboard/jobs/create",companies:{details:"/dashboard/jobs/companies/:companyId"}},kanban:"/dashboard/kanban",logistics:{index:"/dashboard/logistics",fleet:"/dashboard/logistics/fleet"},mail:"/dashboard/mail",orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"},social:{index:"/dashboard/social",profile:"/dashboard/social/profile",feed:"/dashboard/social/feed"}},components:{index:"/components",dataDisplay:{detailLists:"/components/data-display/detail-lists",tables:"/components/data-display/tables",quickStats:"/components/data-display/quick-stats"},lists:{groupedLists:"/components/lists/grouped-lists",gridLists:"/components/lists/grid-lists"},forms:"/components/forms",modals:"/components/modals",charts:"/components/charts",buttons:"/components/buttons",typography:"/components/typography",colors:"/components/colors",inputs:"/components/inputs"},docs:{analytics:{configuration:"/docs/analytics-configuration",eventTracking:"/docs/analytics-event-tracking",introduction:"/docs/analytics-introduction"},auth:{amplify:"/docs/auth-amplify",auth0:"/docs/auth-auth0",firebase:"/docs/auth-firebase",jwt:"/docs/auth-jwt"},changelog:"/docs/changelog",contact:"/docs/contact",dependencies:"/docs/dependencies",deployment:"/docs/deployment",environmentVariables:"/docs/environment-variables",gettingStarted:"/docs/getting-started",guards:{auth:"/docs/guards-auth",guest:"/docs/guards-guest",roleBased:"/docs/guards-role-based"},furtherSupport:"/docs/further-support",internationalization:"/docs/internationalization",mapbox:"/docs/mapbox",redux:"/docs/redux",routing:"/docs/routing",rtl:"/docs/rtl",serverCalls:"/docs/server-calls",settings:"/docs/settings",theming:"/docs/theming",welcome:"/docs/welcome"},401:"/401",404:"/404",500:"/500"}},30136:function(e,a,t){"use strict";var s=t(87462);t(67294);var r=t(85893);a.Z=function(e){return(0,r.jsxs)("svg",(0,s.Z)({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e,{children:[(0,r.jsx)("path",{fill:"#fff",fillOpacity:.01,d:"m12 19-7-7 7-7"}),(0,r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 12H5m0 0 7 7m-7-7 7-7"})]}))}}},function(e){e.O(0,[1664,5978,1238,8360,939,1141,7470,9774,2888,179],function(){return e(e.s=71353)}),_N_E=e.O()}]);