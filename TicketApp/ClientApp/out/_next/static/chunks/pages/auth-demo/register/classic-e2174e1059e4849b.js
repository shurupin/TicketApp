(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5849,2344,4532,6459,9265],{69368:function(e,a,t){"use strict";t.d(a,{Z:function(){return S}});var r=t(63366),o=t(87462),s=t(67294),n=t(86010),i=t(94780),d=t(94581),l=t(21964),c=t(82066),u=t(85893),h=(0,c.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,c.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,c.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),x=t(98216),f=t(71657),b=t(90948),g=t(1588),v=t(34867);function Z(e){return(0,v.Z)("MuiCheckbox",e)}let y=(0,g.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),k=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],w=e=>{let{classes:a,indeterminate:t,color:r}=e,s={root:["root",t&&"indeterminate",`color${(0,x.Z)(r)}`]},n=(0,i.Z)(s,Z,a);return(0,o.Z)({},a,n)},j=(0,b.ZP)(l.Z,{shouldForwardProp:e=>(0,b.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:t}=e;return[a.root,t.indeterminate&&a.indeterminate,"default"!==t.color&&a[`color${(0,x.Z)(t.color)}`]]}})(({theme:e,ownerState:a})=>(0,o.Z)({color:(e.vars||e).palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===a.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)("default"===a.color?e.palette.action.active:e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&{[`&.${y.checked}, &.${y.indeterminate}`]:{color:(e.vars||e).palette[a.color].main},[`&.${y.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),C=(0,u.jsx)(p,{}),P=(0,u.jsx)(h,{}),I=(0,u.jsx)(m,{}),z=s.forwardRef(function(e,a){var t,i;let d=(0,f.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:l=C,color:c="primary",icon:h=P,indeterminate:p=!1,indeterminateIcon:m=I,inputProps:x,size:b="medium",className:g}=d,v=(0,r.Z)(d,k),Z=p?m:h,y=p?m:l,z=(0,o.Z)({},d,{color:c,indeterminate:p,size:b}),S=w(z);return(0,u.jsx)(j,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":p},x),icon:s.cloneElement(Z,{fontSize:null!=(t=Z.props.fontSize)?t:b}),checkedIcon:s.cloneElement(y,{fontSize:null!=(i=y.props.fontSize)?i:b}),ownerState:z,ref:a,className:(0,n.Z)(S.root,g)},v,{classes:S}))});var S=z},93155:function(e,a,t){"use strict";t.d(a,{Z:function(){return W}});var r=t(87462),o=t(63366),s=t(67294),n=t(86010),i=t(94780),d=t(57579),l=t(90948),c=t(71657),u=t(79332),h=t(6135),p=t(57709),m=t(15704),x=t(74423),f=t(40476),b=t(64748),g=t(56727),v=t(85893);let Z=["disableAnimation","margin","shrink","variant","className"],y=e=>{let{classes:a,formControl:t,size:o,shrink:s,disableAnimation:n,variant:d,required:l}=e,c=(0,i.Z)({root:["root",t&&"formControl",!n&&"animated",s&&"shrink","small"===o&&"sizeSmall",d],asterisk:[l&&"asterisk"]},g.Y,a);return(0,r.Z)({},a,c)},k=(0,l.ZP)(f.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiInputLabel",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:t}=e;return[{[`& .${b.Z.asterisk}`]:a.asterisk},a.root,t.formControl&&a.formControl,"small"===t.size&&a.sizeSmall,t.shrink&&a.shrink,!t.disableAnimation&&a.animated,a[t.variant]]}})(({theme:e,ownerState:a})=>(0,r.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},a.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===a.size&&{transform:"translate(0, 17px) scale(1)"},a.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!a.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},"filled"===a.variant&&(0,r.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===a.size&&{transform:"translate(12px, 13px) scale(1)"},a.shrink&&(0,r.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===a.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===a.variant&&(0,r.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===a.size&&{transform:"translate(14px, 9px) scale(1)"},a.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}))),w=s.forwardRef(function(e,a){let t=(0,c.Z)({name:"MuiInputLabel",props:e}),{disableAnimation:s=!1,shrink:i,className:d}=t,l=(0,o.Z)(t,Z),u=(0,x.Z)(),h=i;void 0===h&&u&&(h=u.filled||u.focused||u.adornedStart);let p=(0,m.Z)({props:t,muiFormControl:u,states:["size","variant","required"]}),f=(0,r.Z)({},t,{disableAnimation:s,formControl:u,shrink:h,size:p.size,variant:p.variant,required:p.required}),b=y(f);return(0,v.jsx)(k,(0,r.Z)({"data-shrink":h,ownerState:f,ref:a,className:(0,n.Z)(b.root,d)},l,{classes:b}))});var j=t(94054),C=t(56815),P=t(18360),I=t(1588),z=t(34867);function S(e){return(0,z.Z)("MuiTextField",e)}(0,I.Z)("MuiTextField",["root"]);let R=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],F={standard:u.Z,filled:h.Z,outlined:p.Z},B=e=>{let{classes:a}=e;return(0,i.Z)({root:["root"]},S,a)},O=(0,l.ZP)(j.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,a)=>a.root})({}),T=s.forwardRef(function(e,a){let t=(0,c.Z)({props:e,name:"MuiTextField"}),{autoComplete:s,autoFocus:i=!1,children:l,className:u,color:h="primary",defaultValue:p,disabled:m=!1,error:x=!1,FormHelperTextProps:f,fullWidth:b=!1,helperText:g,id:Z,InputLabelProps:y,inputProps:k,InputProps:j,inputRef:I,label:z,maxRows:S,minRows:T,multiline:W=!1,name:q,onBlur:M,onChange:N,onFocus:E,placeholder:_,required:L=!1,rows:H,select:$=!1,SelectProps:V,type:A,value:D,variant:X="outlined"}=t,J=(0,o.Z)(t,R),K=(0,r.Z)({},t,{autoFocus:i,color:h,disabled:m,error:x,fullWidth:b,multiline:W,required:L,select:$,variant:X}),Y=B(K),G={};"outlined"===X&&(y&&void 0!==y.shrink&&(G.notched=y.shrink),G.label=z),$&&(V&&V.native||(G.id=void 0),G["aria-describedby"]=void 0);let Q=(0,d.Z)(Z),U=g&&Q?`${Q}-helper-text`:void 0,ee=z&&Q?`${Q}-label`:void 0,ea=F[X],et=(0,v.jsx)(ea,(0,r.Z)({"aria-describedby":U,autoComplete:s,autoFocus:i,defaultValue:p,fullWidth:b,multiline:W,name:q,rows:H,maxRows:S,minRows:T,type:A,value:D,id:Q,inputRef:I,onBlur:M,onChange:N,onFocus:E,placeholder:_,inputProps:k},G,j));return(0,v.jsxs)(O,(0,r.Z)({className:(0,n.Z)(Y.root,u),disabled:m,error:x,fullWidth:b,ref:a,required:L,color:h,variant:X,ownerState:K},J,{children:[null!=z&&""!==z&&(0,v.jsx)(w,(0,r.Z)({htmlFor:Q,id:ee},y,{children:z})),$?(0,v.jsx)(P.Z,(0,r.Z)({"aria-describedby":U,id:Q,labelId:ee,value:D,input:et},V,{children:l})):et,g&&(0,v.jsx)(C.Z,(0,r.Z)({id:U},f,{children:g}))]}))});var W=T},21964:function(e,a,t){"use strict";t.d(a,{Z:function(){return k}});var r=t(63366),o=t(87462),s=t(67294),n=t(86010),i=t(94780),d=t(98216),l=t(90948),c=t(49299),u=t(74423),h=t(49990),p=t(1588),m=t(34867);function x(e){return(0,m.Z)("PrivateSwitchBase",e)}(0,p.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var f=t(85893);let b=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=e=>{let{classes:a,checked:t,disabled:r,edge:o}=e,s={root:["root",t&&"checked",r&&"disabled",o&&`edge${(0,d.Z)(o)}`],input:["input"]};return(0,i.Z)(s,x,a)},v=(0,l.ZP)(h.Z)(({ownerState:e})=>(0,o.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),Z=(0,l.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),y=s.forwardRef(function(e,a){let{autoFocus:t,checked:s,checkedIcon:i,className:d,defaultChecked:l,disabled:h,disableFocusRipple:p=!1,edge:m=!1,icon:x,id:y,inputProps:k,inputRef:w,name:j,onBlur:C,onChange:P,onFocus:I,readOnly:z,required:S,tabIndex:R,type:F,value:B}=e,O=(0,r.Z)(e,b),[T,W]=(0,c.Z)({controlled:s,default:Boolean(l),name:"SwitchBase",state:"checked"}),q=(0,u.Z)(),M=e=>{I&&I(e),q&&q.onFocus&&q.onFocus(e)},N=e=>{C&&C(e),q&&q.onBlur&&q.onBlur(e)},E=e=>{if(e.nativeEvent.defaultPrevented)return;let a=e.target.checked;W(a),P&&P(e,a)},_=h;q&&void 0===_&&(_=q.disabled);let L=(0,o.Z)({},e,{checked:T,disabled:_,disableFocusRipple:p,edge:m}),H=g(L);return(0,f.jsxs)(v,(0,o.Z)({component:"span",className:(0,n.Z)(H.root,d),centerRipple:!0,focusRipple:!p,disabled:_,tabIndex:null,role:void 0,onFocus:M,onBlur:N,ownerState:L,ref:a},O,{children:[(0,f.jsx)(Z,(0,o.Z)({autoFocus:t,checked:s,defaultChecked:l,className:H.input,disabled:_,id:("checkbox"===F||"radio"===F)&&y,name:j,onChange:E,readOnly:z,ref:w,required:S,ownerState:L,tabIndex:R,type:F},"checkbox"===F&&void 0===B?{}:{value:B},k)),T?i:x]}))});var k=y},76582:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth-demo/register/classic",function(){return t(71744)}])},13971:function(e,a,t){"use strict";t.d(a,{A:function(){return x}});var r=t(85893),o=t(41664),s=t.n(o),n=t(45697),i=t.n(n),d=t(36822),l=t(21214),c=t(26447),u=t(90948),h=t(52540),p=t(98637),m=(0,u.ZP)("div")(function(e){return{backgroundColor:e.theme.palette.background.default,backgroundRepeat:"no-repeat",backgroundPosition:"top center",backgroundImage:'url("/assets/gradient-bg.svg")',display:"flex",flex:"1 1 auto",flexDirection:"column",height:"100%"}}),x=function(e){var a=e.children;return(0,r.jsxs)(m,{children:[(0,r.jsx)(d.Z,{component:"header",sx:{left:0,position:"fixed",right:0,top:0,zIndex:function(e){return e.zIndex.appBar}},children:(0,r.jsx)(l.Z,{maxWidth:"lg",children:(0,r.jsx)(c.Z,{direction:"row",spacing:2,sx:{height:64},children:(0,r.jsxs)(c.Z,{alignItems:"center",component:s(),direction:"row",display:"inline-flex",href:p.H.index,spacing:1,sx:{textDecoration:"none"},children:[(0,r.jsx)(d.Z,{sx:{display:"inline-flex",height:24,width:24},children:(0,r.jsx)(h.T,{})}),(0,r.jsxs)(d.Z,{sx:{color:"text.primary",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:800,letterSpacing:"0.3px",lineHeight:2.5,"& span":{color:"primary.main"}},children:["Devias Kit ",(0,r.jsx)("span",{children:"PRO"})]})]})})})}),(0,r.jsx)(d.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"center",flex:"1 1 auto"},children:(0,r.jsx)(l.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:a})})]})};x.propTypes={children:i().node}},71744:function(e,a,t){"use strict";t.r(a);var r=t(85893),o=t(41664),s=t.n(o),n=t(74231),i=t(82175),d=t(30136),l=t(36822),c=t(23795),u=t(53219),h=t(15861),p=t(66242),m=t(78445),x=t(44267),f=t(26447),b=t(93155),g=t(69368),v=t(56815),Z=t(11057),y=t(13971),k=t(98637),w={email:"",name:"",password:"",policy:!1},j=n.Ry({email:n.Z_().email("Must be a valid email").max(255).required("Email is required"),name:n.Z_().max(255).required("Name is required"),password:n.Z_().min(7).max(255).required("Password is required"),policy:n.O7().oneOf([!0],"This field must be checked")}),C=function(){var e=(0,i.TA)({initialValues:w,validationSchema:j,onSubmit:function(){}});return(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{sx:{mb:4},children:(0,r.jsxs)(c.Z,{color:"text.primary",component:s(),href:k.H.dashboard.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[(0,r.jsx)(u.Z,{sx:{mr:1},children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)(h.Z,{variant:"subtitle2",children:"Dashboard"})]})}),(0,r.jsxs)(p.Z,{elevation:16,children:[(0,r.jsx)(m.Z,{subheader:(0,r.jsxs)(h.Z,{color:"text.secondary",variant:"body2",children:["Already have an account? \xa0",(0,r.jsx)(c.Z,{href:"#",underline:"hover",variant:"subtitle2",children:"Log in"})]}),sx:{pb:0},title:"Register"}),(0,r.jsx)(x.Z,{children:(0,r.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[(0,r.jsxs)(f.Z,{spacing:3,children:[(0,r.jsx)(b.Z,{error:!!(e.touched.name&&e.errors.name),fullWidth:!0,helperText:e.touched.name&&e.errors.name,label:"Name",name:"name",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.name}),(0,r.jsx)(b.Z,{error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),(0,r.jsx)(b.Z,{error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password})]}),(0,r.jsxs)(l.Z,{sx:{alignItems:"center",display:"flex",ml:-1,mt:1},children:[(0,r.jsx)(g.Z,{checked:e.values.policy,name:"policy",onChange:e.handleChange}),(0,r.jsxs)(h.Z,{color:"text.secondary",variant:"body2",children:["I have read the"," ",(0,r.jsx)(c.Z,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),!!(e.touched.policy&&e.errors.policy)&&(0,r.jsx)(v.Z,{error:!0,children:e.errors.policy}),(0,r.jsx)(Z.Z,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Register"})]})})]})]})};C.getLayout=function(e){return(0,r.jsx)(y.A,{children:e})},a.default=C},98637:function(e,a,t){"use strict";t.d(a,{H:function(){return r}});var r={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{auth0:{callback:"/auth/auth0/callback",login:"/auth/auth0/login"},jwt:{login:"/auth/jwt/login",register:"/auth/jwt/register"},firebase:{login:"/auth/firebase/login",register:"/auth/firebase/register"},amplify:{confirmRegister:"/auth/amplify/confirm-register",forgotPassword:"/auth/amplify/forgot-password",login:"/auth/amplify/login",register:"/auth/amplify/register",resetPassword:"/auth/amplify/reset-password"}},authDemo:{forgotPassword:{classic:"/auth-demo/forgot-password/classic",modern:"/auth-demo/forgot-password/modern"},login:{classic:"/auth-demo/login/classic",modern:"/auth-demo/login/modern"},register:{classic:"/auth-demo/register/classic",modern:"/auth-demo/register/modern"},resetPassword:{classic:"/auth-demo/reset-password/classic",modern:"/auth-demo/reset-password/modern"},verifyCode:{classic:"/auth-demo/verify-code/classic",modern:"/auth-demo/verify-code/modern"}},dashboard:{index:"/dashboard",academy:{index:"/dashboard/academy",courseDetails:"/dashboard/academy/courses/:courseId"},account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",blog:{index:"/dashboard/blog",postDetails:"/dashboard/blog/:postId",postCreate:"/dashboard/blog/create"},calendar:"/dashboard/calendar",chat:"/dashboard/chat",crypto:"/dashboard/crypto",customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},ticketProducts:{index:"/dashboard/ticketProducts",details:"/dashboard/ticketProducts/:ticketProductId",edit:"/dashboard/ticketProducts/:ticketProductId/edit"},ecommerce:"/dashboard/ecommerce",fileManager:"/dashboard/file-manager",invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},jobs:{index:"/dashboard/jobs",create:"/dashboard/jobs/create",companies:{details:"/dashboard/jobs/companies/:companyId"}},kanban:"/dashboard/kanban",logistics:{index:"/dashboard/logistics",fleet:"/dashboard/logistics/fleet"},mail:"/dashboard/mail",orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"},social:{index:"/dashboard/social",profile:"/dashboard/social/profile",feed:"/dashboard/social/feed"}},components:{index:"/components",dataDisplay:{detailLists:"/components/data-display/detail-lists",tables:"/components/data-display/tables",quickStats:"/components/data-display/quick-stats"},lists:{groupedLists:"/components/lists/grouped-lists",gridLists:"/components/lists/grid-lists"},forms:"/components/forms",modals:"/components/modals",charts:"/components/charts",buttons:"/components/buttons",typography:"/components/typography",colors:"/components/colors",inputs:"/components/inputs"},docs:{analytics:{configuration:"/docs/analytics-configuration",eventTracking:"/docs/analytics-event-tracking",introduction:"/docs/analytics-introduction"},auth:{amplify:"/docs/auth-amplify",auth0:"/docs/auth-auth0",firebase:"/docs/auth-firebase",jwt:"/docs/auth-jwt"},changelog:"/docs/changelog",contact:"/docs/contact",dependencies:"/docs/dependencies",deployment:"/docs/deployment",environmentVariables:"/docs/environment-variables",gettingStarted:"/docs/getting-started",guards:{auth:"/docs/guards-auth",guest:"/docs/guards-guest",roleBased:"/docs/guards-role-based"},furtherSupport:"/docs/further-support",internationalization:"/docs/internationalization",mapbox:"/docs/mapbox",redux:"/docs/redux",routing:"/docs/routing",rtl:"/docs/rtl",serverCalls:"/docs/server-calls",settings:"/docs/settings",theming:"/docs/theming",welcome:"/docs/welcome"},401:"/401",404:"/404",500:"/500"}},30136:function(e,a,t){"use strict";var r=t(87462);t(67294);var o=t(85893);a.Z=function(e){return(0,o.jsxs)("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e,{children:[(0,o.jsx)("path",{fill:"#fff",fillOpacity:.01,d:"m12 19-7-7 7-7"}),(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 12H5m0 0 7 7m-7-7 7-7"})]}))}}},function(e){e.O(0,[1664,5978,1238,8360,939,1141,7470,9774,2888,179],function(){return e(e.s=76582)}),_N_E=e.O()}]);