(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1602],{69368:function(e,r,t){"use strict";t.d(r,{Z:function(){return R}});var s=t(63366),a=t(87462),o=t(67294),n=t(86010),i=t(94780),d=t(94581),c=t(21964),l=t(82066),u=t(85893),h=(0,l.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,l.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,l.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),g=t(98216),f=t(71657),b=t(90948),x=t(1588),v=t(34867);function y(e){return(0,v.Z)("MuiCheckbox",e)}let Z=(0,x.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],w=e=>{let{classes:r,indeterminate:t,color:s}=e,o={root:["root",t&&"indeterminate",`color${(0,g.Z)(s)}`]},n=(0,i.Z)(o,y,r);return(0,a.Z)({},r,n)},k=(0,b.ZP)(c.Z,{shouldForwardProp:e=>(0,b.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.indeterminate&&r.indeterminate,"default"!==t.color&&r[`color${(0,g.Z)(t.color)}`]]}})(({theme:e,ownerState:r})=>(0,a.Z)({color:(e.vars||e).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===r.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)("default"===r.color?e.palette.action.active:e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${Z.checked}, &.${Z.indeterminate}`]:{color:(e.vars||e).palette[r.color].main},[`&.${Z.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),C=(0,u.jsx)(m,{}),S=(0,u.jsx)(h,{}),I=(0,u.jsx)(p,{}),P=o.forwardRef(function(e,r){var t,i;let d=(0,f.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=C,color:l="primary",icon:h=S,indeterminate:m=!1,indeterminateIcon:p=I,inputProps:g,size:b="medium",className:x}=d,v=(0,s.Z)(d,j),y=m?p:h,Z=m?p:c,P=(0,a.Z)({},d,{color:l,indeterminate:m,size:b}),R=w(P);return(0,u.jsx)(k,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":m},g),icon:o.cloneElement(y,{fontSize:null!=(t=y.props.fontSize)?t:b}),checkedIcon:o.cloneElement(Z,{fontSize:null!=(i=Z.props.fontSize)?i:b}),ownerState:P,ref:r,className:(0,n.Z)(R.root,x)},v,{classes:R}))});var R=P},21964:function(e,r,t){"use strict";t.d(r,{Z:function(){return j}});var s=t(63366),a=t(87462),o=t(67294),n=t(86010),i=t(94780),d=t(98216),c=t(90948),l=t(49299),u=t(74423),h=t(49990),m=t(1588),p=t(34867);function g(e){return(0,p.Z)("PrivateSwitchBase",e)}(0,m.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var f=t(85893);let b=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=e=>{let{classes:r,checked:t,disabled:s,edge:a}=e,o={root:["root",t&&"checked",s&&"disabled",a&&`edge${(0,d.Z)(a)}`],input:["input"]};return(0,i.Z)(o,g,r)},v=(0,c.ZP)(h.Z)(({ownerState:e})=>(0,a.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),y=(0,c.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Z=o.forwardRef(function(e,r){let{autoFocus:t,checked:o,checkedIcon:i,className:d,defaultChecked:c,disabled:h,disableFocusRipple:m=!1,edge:p=!1,icon:g,id:Z,inputProps:j,inputRef:w,name:k,onBlur:C,onChange:S,onFocus:I,readOnly:P,required:R,tabIndex:z,type:B,value:T}=e,_=(0,s.Z)(e,b),[E,F]=(0,l.Z)({controlled:o,default:Boolean(c),name:"SwitchBase",state:"checked"}),O=(0,u.Z)(),q=e=>{I&&I(e),O&&O.onFocus&&O.onFocus(e)},H=e=>{C&&C(e),O&&O.onBlur&&O.onBlur(e)},N=e=>{if(e.nativeEvent.defaultPrevented)return;let r=e.target.checked;F(r),S&&S(e,r)},M=h;O&&void 0===M&&(M=O.disabled);let A=(0,a.Z)({},e,{checked:E,disabled:M,disableFocusRipple:m,edge:p}),D=x(A);return(0,f.jsxs)(v,(0,a.Z)({component:"span",className:(0,n.Z)(D.root,d),centerRipple:!0,focusRipple:!m,disabled:M,tabIndex:null,role:void 0,onFocus:q,onBlur:H,ownerState:A,ref:r},_,{children:[(0,f.jsx)(y,(0,a.Z)({autoFocus:t,checked:o,defaultChecked:c,className:D.input,disabled:M,id:("checkbox"===B||"radio"===B)&&Z,name:k,onChange:N,readOnly:P,ref:w,required:R,ownerState:A,tabIndex:z,type:B},"checkbox"===B&&void 0===T?{}:{value:T},j)),E?i:g]}))});var j=Z},88778:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/jwt/register",function(){return t(21230)}])},20142:function(e,r,t){"use strict";t.d(r,{A:function(){return u}});var s=t(828),a=t(85893),o=t(67294),n=t(39332),i=t(45697),d=t.n(i),c=t(72662),l=t(98637),u=function(e){var r=e.children,t=(0,c.a)().isAuthenticated,i=(0,n.useRouter)(),d=(0,s.Z)((0,o.useState)(!1),2),u=d[0],h=d[1],m=(0,o.useCallback)(function(){t?i.replace(l.H.dashboard.index):h(!0)},[t,i]);return((0,o.useEffect)(function(){m()},[]),u)?(0,a.jsx)(a.Fragment,{children:r}):null};u.propTypes={children:d().node}},97034:function(e,r,t){"use strict";t.d(r,{z:function(){return c}});var s=t(85893),a=t(12918),o=t.n(a),n=t(45697),i=t.n(n),d=t(72662),c=function(e){var r=e.children,t=e.issuer,a=(0,d.a)().issuer;return t!==a?(0,s.jsx)(o(),{statusCode:400,title:"Issuer mismatch, currently using ".concat(a),withDarkMode:!1}):(0,s.jsx)(s.Fragment,{children:r})};c.propTypes={children:i().any,issuer:i().any}},72662:function(e,r,t){"use strict";t.d(r,{a:function(){return o}});var s=t(67294),a=t(29325),o=function(){return(0,s.useContext)(a.Vo)}},38242:function(e,r,t){"use strict";t.d(r,{s:function(){return a}});var s=t(67294),a=function(){var e=(0,s.useRef)(!1);return(0,s.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,s.useCallback)(function(){return e.current},[])}},70563:function(e,r,t){"use strict";t.d(r,{a:function(){return o}});var s=t(67294),a=t(56204),o=function(){(0,s.useEffect)(function(){a.w.push({event:"page_view"})},[])}},13971:function(e,r,t){"use strict";t.d(r,{A:function(){return g}});var s=t(85893),a=t(41664),o=t.n(a),n=t(45697),i=t.n(n),d=t(36822),c=t(21214),l=t(26447),u=t(90948),h=t(52540),m=t(98637),p=(0,u.ZP)("div")(function(e){return{backgroundColor:e.theme.palette.background.default,backgroundRepeat:"no-repeat",backgroundPosition:"top center",backgroundImage:'url("/assets/gradient-bg.svg")',display:"flex",flex:"1 1 auto",flexDirection:"column",height:"100%"}}),g=function(e){var r=e.children;return(0,s.jsxs)(p,{children:[(0,s.jsx)(d.Z,{component:"header",sx:{left:0,position:"fixed",right:0,top:0,zIndex:function(e){return e.zIndex.appBar}},children:(0,s.jsx)(c.Z,{maxWidth:"lg",children:(0,s.jsx)(l.Z,{direction:"row",spacing:2,sx:{height:64},children:(0,s.jsxs)(l.Z,{alignItems:"center",component:o(),direction:"row",display:"inline-flex",href:m.H.index,spacing:1,sx:{textDecoration:"none"},children:[(0,s.jsx)(d.Z,{sx:{display:"inline-flex",height:24,width:24},children:(0,s.jsx)(h.T,{})}),(0,s.jsxs)(d.Z,{sx:{color:"text.primary",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:800,letterSpacing:"0.3px",lineHeight:2.5,"& span":{color:"primary.main"}},children:["Devias Kit ",(0,s.jsx)("span",{children:"PRO"})]})]})})})}),(0,s.jsx)(d.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"center",flex:"1 1 auto"},children:(0,s.jsx)(c.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:r})})]})};g.propTypes={children:i().node}},21230:function(e,r,t){"use strict";t.r(r);var s=t(47568),a=t(70655),o=t(85893),n=t(9008),i=t.n(n),d=t(39332),c=t(41664),l=t.n(c),u=t(74231),h=t(82175),m=t(66242),p=t(78445),g=t(15861),f=t(23795),b=t(44267),x=t(26447),v=t(93155),y=t(36822),Z=t(69368),j=t(56815),w=t(11057),k=t(20142),C=t(97034),S=t(72662),I=t(38242),P=t(70563),R=t(13971),z=t(98637),B=t(78825),T=t(14229),_={email:"",name:"",password:"",policy:!1,submit:null},E=u.Ry({email:u.Z_().email("Must be a valid email").max(255).required("Email is required"),name:u.Z_().max(255).required("Name is required"),password:u.Z_().min(7).max(255).required("Password is required"),policy:u.O7().oneOf([!0],"This field must be checked")}),F=function(){var e,r=(0,I.s)(),t=(0,d.useRouter)(),n={returnTo:(0,d.useSearchParams)().get("returnTo")||void 0}.returnTo,c=(0,S.a)(),u=c.issuer,k=c.signUp,C=(0,h.TA)({initialValues:_,validationSchema:E,onSubmit:(e=(0,s.Z)(function(e,s){var o;return(0,a.__generator)(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,k(e.email,e.name,e.password)];case 1:return a.sent(),r()&&t.push(n||z.H.dashboard.index),[3,3];case 2:return console.error(o=a.sent()),r()&&(s.setStatus({success:!1}),s.setErrors({submit:o.message}),s.setSubmitting(!1)),[3,3];case 3:return[2]}})}),function(r,t){return e.apply(this,arguments)})});return(0,P.a)(),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i(),{children:(0,o.jsx)("title",{children:"Register | Devias Kit PRO"})}),(0,o.jsxs)("div",{children:[(0,o.jsxs)(m.Z,{elevation:16,children:[(0,o.jsx)(p.Z,{subheader:(0,o.jsxs)(g.Z,{color:"text.secondary",variant:"body2",children:["Already have an account? \xa0",(0,o.jsx)(f.Z,{component:l(),href:z.H.auth.jwt.login,underline:"hover",variant:"subtitle2",children:"Log in"})]}),sx:{pb:0},title:"Register"}),(0,o.jsx)(b.Z,{children:(0,o.jsxs)("form",{noValidate:!0,onSubmit:C.handleSubmit,children:[(0,o.jsxs)(x.Z,{spacing:3,children:[(0,o.jsx)(v.Z,{error:!!(C.touched.name&&C.errors.name),fullWidth:!0,helperText:C.touched.name&&C.errors.name,label:"Name",name:"name",onBlur:C.handleBlur,onChange:C.handleChange,value:C.values.name}),(0,o.jsx)(v.Z,{error:!!(C.touched.email&&C.errors.email),fullWidth:!0,helperText:C.touched.email&&C.errors.email,label:"Email Address",name:"email",onBlur:C.handleBlur,onChange:C.handleChange,type:"email",value:C.values.email}),(0,o.jsx)(v.Z,{error:!!(C.touched.password&&C.errors.password),fullWidth:!0,helperText:C.touched.password&&C.errors.password,label:"Password",name:"password",onBlur:C.handleBlur,onChange:C.handleChange,type:"password",value:C.values.password})]}),(0,o.jsxs)(y.Z,{sx:{alignItems:"center",display:"flex",ml:-1,mt:1},children:[(0,o.jsx)(Z.Z,{checked:C.values.policy,name:"policy",onChange:C.handleChange}),(0,o.jsxs)(g.Z,{color:"text.secondary",variant:"body2",children:["I have read the"," ",(0,o.jsx)(f.Z,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),!!(C.touched.policy&&C.errors.policy)&&(0,o.jsx)(j.Z,{error:!0,children:C.errors.policy}),C.errors.submit&&(0,o.jsx)(j.Z,{error:!0,sx:{mt:3},children:C.errors.submit}),(0,o.jsx)(w.Z,{disabled:C.isSubmitting,fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Register"})]})})]}),(0,o.jsx)(y.Z,{sx:{mt:3},children:(0,o.jsx)(B.b,{issuer:u})})]})]})};F.getLayout=function(e){return(0,o.jsx)(C.z,{issuer:T.M.JWT,children:(0,o.jsx)(k.A,{children:(0,o.jsx)(R.A,{children:e})})})},r.default=F},98637:function(e,r,t){"use strict";t.d(r,{H:function(){return s}});var s={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{auth0:{callback:"/auth/auth0/callback",login:"/auth/auth0/login"},jwt:{login:"/auth/jwt/login",register:"/auth/jwt/register"},firebase:{login:"/auth/firebase/login",register:"/auth/firebase/register"},amplify:{confirmRegister:"/auth/amplify/confirm-register",forgotPassword:"/auth/amplify/forgot-password",login:"/auth/amplify/login",register:"/auth/amplify/register",resetPassword:"/auth/amplify/reset-password"}},authDemo:{forgotPassword:{classic:"/auth-demo/forgot-password/classic",modern:"/auth-demo/forgot-password/modern"},login:{classic:"/auth-demo/login/classic",modern:"/auth-demo/login/modern"},register:{classic:"/auth-demo/register/classic",modern:"/auth-demo/register/modern"},resetPassword:{classic:"/auth-demo/reset-password/classic",modern:"/auth-demo/reset-password/modern"},verifyCode:{classic:"/auth-demo/verify-code/classic",modern:"/auth-demo/verify-code/modern"}},dashboard:{index:"/dashboard",academy:{index:"/dashboard/academy",courseDetails:"/dashboard/academy/courses/:courseId"},account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",blog:{index:"/dashboard/blog",postDetails:"/dashboard/blog/:postId",postCreate:"/dashboard/blog/create"},calendar:"/dashboard/calendar",chat:"/dashboard/chat",crypto:"/dashboard/crypto",customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},ecommerce:"/dashboard/ecommerce",fileManager:"/dashboard/file-manager",invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},jobs:{index:"/dashboard/jobs",create:"/dashboard/jobs/create",companies:{details:"/dashboard/jobs/companies/:companyId"}},kanban:"/dashboard/kanban",logistics:{index:"/dashboard/logistics",fleet:"/dashboard/logistics/fleet"},mail:"/dashboard/mail",orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"},social:{index:"/dashboard/social",profile:"/dashboard/social/profile",feed:"/dashboard/social/feed"}},components:{index:"/components",dataDisplay:{detailLists:"/components/data-display/detail-lists",tables:"/components/data-display/tables",quickStats:"/components/data-display/quick-stats"},lists:{groupedLists:"/components/lists/grouped-lists",gridLists:"/components/lists/grid-lists"},forms:"/components/forms",modals:"/components/modals",charts:"/components/charts",buttons:"/components/buttons",typography:"/components/typography",colors:"/components/colors",inputs:"/components/inputs"},docs:{analytics:{configuration:"/docs/analytics-configuration",eventTracking:"/docs/analytics-event-tracking",introduction:"/docs/analytics-introduction"},auth:{amplify:"/docs/auth-amplify",auth0:"/docs/auth-auth0",firebase:"/docs/auth-firebase",jwt:"/docs/auth-jwt"},changelog:"/docs/changelog",contact:"/docs/contact",dependencies:"/docs/dependencies",deployment:"/docs/deployment",environmentVariables:"/docs/environment-variables",gettingStarted:"/docs/getting-started",guards:{auth:"/docs/guards-auth",guest:"/docs/guards-guest",roleBased:"/docs/guards-role-based"},furtherSupport:"/docs/further-support",internationalization:"/docs/internationalization",mapbox:"/docs/mapbox",redux:"/docs/redux",routing:"/docs/routing",rtl:"/docs/rtl",serverCalls:"/docs/server-calls",settings:"/docs/settings",theming:"/docs/theming",welcome:"/docs/welcome"},401:"/401",404:"/404",500:"/500"}},78825:function(e,r,t){"use strict";t.d(r,{b:function(){return p}});var s=t(26042),a=t(85893),o=t(45697),n=t.n(o),i=t(36822),d=t(15861),c=t(23795),l=t(26447),u=t(34386),h=t(98637),m={Amplify:"/assets/logos/logo-amplify.svg",Auth0:"/assets/logos/logo-auth0.svg",Firebase:"/assets/logos/logo-firebase.svg",JWT:"/assets/logos/logo-jwt.svg"},p=function(e){var r=e.issuer;return(0,a.jsxs)(i.Z,{sx:{borderColor:"divider",borderRadius:2.5,borderStyle:"solid",borderWidth:1,display:"flex",flexDirection:"column",alignItems:"center",p:3},children:[(0,a.jsxs)(d.Z,{variant:"body2",children:["Visit our"," ",(0,a.jsx)(c.Z,{component:"a",href:h.H.docs.welcome,target:"_blank",underline:"hover",variant:"subtitle2",children:"docs"})," ","and find out how to switch between"]}),(0,a.jsx)(l.Z,{alignItems:"center",direction:"row",gap:3,sx:{mt:2},children:Object.keys(m).map(function(e){var t=m[e];return(0,a.jsx)(u.Z,{title:e,children:(0,a.jsx)(i.Z,{component:"img",src:t,sx:{height:30,"&:not(:hover)":(0,s.Z)({},e!==r&&{filter:"grayscale(100%)"})}})},e)})})]})};p.propTypes={issuer:n().string.isRequired}}},function(e){e.O(0,[1664,5978,1238,8360,939,1141,7470,469,9774,2888,179],function(){return e(e.s=88778)}),_N_E=e.O()}]);