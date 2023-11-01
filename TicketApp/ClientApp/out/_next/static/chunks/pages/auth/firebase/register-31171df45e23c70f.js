(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5224],{18016:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/firebase/register",function(){return r(64975)}])},20142:function(e,s,r){"use strict";r.d(s,{A:function(){return u}});var t=r(828),o=r(85893),a=r(67294),n=r(39332),i=r(45697),d=r.n(i),c=r(72662),l=r(98637),u=function(e){var s=e.children,r=(0,c.a)().isAuthenticated,i=(0,n.useRouter)(),d=(0,t.Z)((0,a.useState)(!1),2),u=d[0],h=d[1],m=(0,a.useCallback)(function(){r?i.replace(l.H.dashboard.index):h(!0)},[r,i]);return((0,a.useEffect)(function(){m()},[]),u)?(0,o.jsx)(o.Fragment,{children:s}):null};u.propTypes={children:d().node}},97034:function(e,s,r){"use strict";r.d(s,{z:function(){return c}});var t=r(85893),o=r(12918),a=r.n(o),n=r(45697),i=r.n(n),d=r(72662),c=function(e){var s=e.children,r=e.issuer,o=(0,d.a)().issuer;return r!==o?(0,t.jsx)(a(),{statusCode:400,title:"Issuer mismatch, currently using ".concat(o),withDarkMode:!1}):(0,t.jsx)(t.Fragment,{children:s})};c.propTypes={children:i().any,issuer:i().any}},72662:function(e,s,r){"use strict";r.d(s,{a:function(){return a}});var t=r(67294),o=r(29325),a=function(){return(0,t.useContext)(o.Vo)}},38242:function(e,s,r){"use strict";r.d(s,{s:function(){return o}});var t=r(67294),o=function(){var e=(0,t.useRef)(!1);return(0,t.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,t.useCallback)(function(){return e.current},[])}},70563:function(e,s,r){"use strict";r.d(s,{a:function(){return a}});var t=r(67294),o=r(56204),a=function(){(0,t.useEffect)(function(){o.w.push({event:"page_view"})},[])}},13971:function(e,s,r){"use strict";r.d(s,{A:function(){return g}});var t=r(85893),o=r(41664),a=r.n(o),n=r(45697),i=r.n(n),d=r(36822),c=r(21214),l=r(26447),u=r(90948),h=r(52540),m=r(98637),p=(0,u.ZP)("div")(function(e){return{backgroundColor:e.theme.palette.background.default,backgroundRepeat:"no-repeat",backgroundPosition:"top center",backgroundImage:'url("/assets/gradient-bg.svg")',display:"flex",flex:"1 1 auto",flexDirection:"column",height:"100%"}}),g=function(e){var s=e.children;return(0,t.jsxs)(p,{children:[(0,t.jsx)(d.Z,{component:"header",sx:{left:0,position:"fixed",right:0,top:0,zIndex:function(e){return e.zIndex.appBar}},children:(0,t.jsx)(c.Z,{maxWidth:"lg",children:(0,t.jsx)(l.Z,{direction:"row",spacing:2,sx:{height:64},children:(0,t.jsxs)(l.Z,{alignItems:"center",component:a(),direction:"row",display:"inline-flex",href:m.H.index,spacing:1,sx:{textDecoration:"none"},children:[(0,t.jsx)(d.Z,{sx:{display:"inline-flex",height:24,width:24},children:(0,t.jsx)(h.T,{})}),(0,t.jsxs)(d.Z,{sx:{color:"text.primary",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:800,letterSpacing:"0.3px",lineHeight:2.5,"& span":{color:"primary.main"}},children:["Devias Kit ",(0,t.jsx)("span",{children:"PRO"})]})]})})})}),(0,t.jsx)(d.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"center",flex:"1 1 auto"},children:(0,t.jsx)(c.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:s})})]})};g.propTypes={children:i().node}},64975:function(e,s,r){"use strict";r.r(s);var t=r(47568),o=r(70655),a=r(85893),n=r(67294),i=r(9008),d=r.n(i),c=r(39332),l=r(41664),u=r.n(l),h=r(74231),m=r(82175),p=r(66242),g=r(78445),f=r(15861),x=r(23795),b=r(44267),y=r(36822),j=r(11057),v=r(67720),w=r(26447),Z=r(93155),k=r(69368),C=r(56815),_=r(20142),I=r(97034),T=r(72662),S=r(38242),P=r(70563),R=r(13971),E=r(98637),z=r(78825),A=r(14229),W={email:"",password:"",policy:!0,submit:null},D=h.Ry({email:h.Z_().email("Must be a valid email").max(255).required("Email is required"),password:h.Z_().min(7).max(255).required("Password is required"),policy:h.O7().oneOf([!0],"This field must be checked")}),H=function(){var e,s=(0,S.s)(),r=(0,c.useRouter)(),i={returnTo:(0,c.useSearchParams)().get("returnTo")||void 0}.returnTo,l=(0,T.a)(),h=l.issuer,_=l.createUserWithEmailAndPassword,I=l.signInWithGoogle,R=(0,m.TA)({initialValues:W,validationSchema:D,onSubmit:(e=(0,t.Z)(function(e,t){var a;return(0,o.__generator)(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,_(e.email,e.password)];case 1:return o.sent(),s()&&r.push(i||E.H.dashboard.index),[3,3];case 2:return console.error(a=o.sent()),s()&&(t.setStatus({success:!1}),t.setErrors({submit:a.message}),t.setSubmitting(!1)),[3,3];case 3:return[2]}})}),function(s,r){return e.apply(this,arguments)})}),A=(0,n.useCallback)((0,t.Z)(function(){return(0,o.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,I()];case 1:return e.sent(),s()&&r.push(i||E.H.dashboard.index),[3,3];case 2:return console.error(e.sent()),[3,3];case 3:return[2]}})}),[r,s,I,i]);return(0,P.a)(),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d(),{children:(0,a.jsx)("title",{children:"Register | Devias Kit PRO"})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(p.Z,{elevation:16,children:[(0,a.jsx)(g.Z,{subheader:(0,a.jsxs)(f.Z,{color:"text.secondary",variant:"body2",children:["Already have an account? \xa0",(0,a.jsx)(x.Z,{component:u(),href:E.H.auth.firebase.login,underline:"hover",variant:"subtitle2",children:"Log in"})]}),sx:{pb:0},title:"Register"}),(0,a.jsx)(b.Z,{children:(0,a.jsxs)("form",{noValidate:!0,onSubmit:R.handleSubmit,children:[(0,a.jsxs)(y.Z,{sx:{flexGrow:1,mt:3},children:[(0,a.jsxs)(j.Z,{fullWidth:!0,onClick:A,size:"large",sx:{backgroundColor:"common.white",color:"common.black","&:hover":{backgroundColor:"common.white",color:"common.black"}},variant:"contained",children:[(0,a.jsx)(y.Z,{alt:"Google",component:"img",src:"/assets/logos/logo-google.svg",sx:{mr:1}}),"Google"]}),(0,a.jsxs)(y.Z,{sx:{alignItems:"center",display:"flex",mt:2},children:[(0,a.jsx)(y.Z,{sx:{flexGrow:1},children:(0,a.jsx)(v.Z,{orientation:"horizontal"})}),(0,a.jsx)(f.Z,{color:"text.secondary",sx:{m:2},variant:"body1",children:"OR"}),(0,a.jsx)(y.Z,{sx:{flexGrow:1},children:(0,a.jsx)(v.Z,{orientation:"horizontal"})})]})]}),(0,a.jsxs)(w.Z,{spacing:3,children:[(0,a.jsx)(Z.Z,{error:!!(R.touched.email&&R.errors.email),fullWidth:!0,helperText:R.touched.email&&R.errors.email,label:"Email Address",name:"email",onBlur:R.handleBlur,onChange:R.handleChange,type:"email",value:R.values.email}),(0,a.jsx)(Z.Z,{error:!!(R.touched.password&&R.errors.password),fullWidth:!0,helperText:R.touched.password&&R.errors.password,label:"Password",name:"password",onBlur:R.handleBlur,onChange:R.handleChange,type:"password",value:R.values.password})]}),(0,a.jsxs)(y.Z,{sx:{alignItems:"center",display:"flex",ml:-1,mt:1},children:[(0,a.jsx)(k.Z,{checked:R.values.policy,name:"policy",onChange:R.handleChange}),(0,a.jsxs)(f.Z,{color:"text.secondary",variant:"body2",children:["I have read the"," ",(0,a.jsx)(x.Z,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),!!(R.touched.policy&&R.errors.policy)&&(0,a.jsx)(C.Z,{error:!0,children:R.errors.policy}),R.errors.submit&&(0,a.jsx)(C.Z,{error:!0,sx:{mt:3},children:R.errors.submit}),(0,a.jsx)(y.Z,{sx:{mt:2},children:(0,a.jsx)(j.Z,{disabled:R.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register"})})]})})]}),(0,a.jsx)(y.Z,{sx:{mt:3},children:(0,a.jsx)(z.b,{issuer:h})})]})]})};H.getLayout=function(e){return(0,a.jsx)(I.z,{issuer:A.M.Firebase,children:(0,a.jsx)(_.A,{children:(0,a.jsx)(R.A,{children:e})})})},s.default=H},98637:function(e,s,r){"use strict";r.d(s,{H:function(){return t}});var t={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{auth0:{callback:"/auth/auth0/callback",login:"/auth/auth0/login"},jwt:{login:"/auth/jwt/login",register:"/auth/jwt/register"},firebase:{login:"/auth/firebase/login",register:"/auth/firebase/register"},amplify:{confirmRegister:"/auth/amplify/confirm-register",forgotPassword:"/auth/amplify/forgot-password",login:"/auth/amplify/login",register:"/auth/amplify/register",resetPassword:"/auth/amplify/reset-password"}},authDemo:{forgotPassword:{classic:"/auth-demo/forgot-password/classic",modern:"/auth-demo/forgot-password/modern"},login:{classic:"/auth-demo/login/classic",modern:"/auth-demo/login/modern"},register:{classic:"/auth-demo/register/classic",modern:"/auth-demo/register/modern"},resetPassword:{classic:"/auth-demo/reset-password/classic",modern:"/auth-demo/reset-password/modern"},verifyCode:{classic:"/auth-demo/verify-code/classic",modern:"/auth-demo/verify-code/modern"}},dashboard:{index:"/dashboard",academy:{index:"/dashboard/academy",courseDetails:"/dashboard/academy/courses/:courseId"},account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",blog:{index:"/dashboard/blog",postDetails:"/dashboard/blog/:postId",postCreate:"/dashboard/blog/create"},calendar:"/dashboard/calendar",chat:"/dashboard/chat",crypto:"/dashboard/crypto",customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},ecommerce:"/dashboard/ecommerce",fileManager:"/dashboard/file-manager",invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},jobs:{index:"/dashboard/jobs",create:"/dashboard/jobs/create",companies:{details:"/dashboard/jobs/companies/:companyId"}},kanban:"/dashboard/kanban",logistics:{index:"/dashboard/logistics",fleet:"/dashboard/logistics/fleet"},mail:"/dashboard/mail",orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"},social:{index:"/dashboard/social",profile:"/dashboard/social/profile",feed:"/dashboard/social/feed"}},components:{index:"/components",dataDisplay:{detailLists:"/components/data-display/detail-lists",tables:"/components/data-display/tables",quickStats:"/components/data-display/quick-stats"},lists:{groupedLists:"/components/lists/grouped-lists",gridLists:"/components/lists/grid-lists"},forms:"/components/forms",modals:"/components/modals",charts:"/components/charts",buttons:"/components/buttons",typography:"/components/typography",colors:"/components/colors",inputs:"/components/inputs"},docs:{analytics:{configuration:"/docs/analytics-configuration",eventTracking:"/docs/analytics-event-tracking",introduction:"/docs/analytics-introduction"},auth:{amplify:"/docs/auth-amplify",auth0:"/docs/auth-auth0",firebase:"/docs/auth-firebase",jwt:"/docs/auth-jwt"},changelog:"/docs/changelog",contact:"/docs/contact",dependencies:"/docs/dependencies",deployment:"/docs/deployment",environmentVariables:"/docs/environment-variables",gettingStarted:"/docs/getting-started",guards:{auth:"/docs/guards-auth",guest:"/docs/guards-guest",roleBased:"/docs/guards-role-based"},furtherSupport:"/docs/further-support",internationalization:"/docs/internationalization",mapbox:"/docs/mapbox",redux:"/docs/redux",routing:"/docs/routing",rtl:"/docs/rtl",serverCalls:"/docs/server-calls",settings:"/docs/settings",theming:"/docs/theming",welcome:"/docs/welcome"},401:"/401",404:"/404",500:"/500"}},78825:function(e,s,r){"use strict";r.d(s,{b:function(){return p}});var t=r(26042),o=r(85893),a=r(45697),n=r.n(a),i=r(36822),d=r(15861),c=r(23795),l=r(26447),u=r(34386),h=r(98637),m={Amplify:"/assets/logos/logo-amplify.svg",Auth0:"/assets/logos/logo-auth0.svg",Firebase:"/assets/logos/logo-firebase.svg",JWT:"/assets/logos/logo-jwt.svg"},p=function(e){var s=e.issuer;return(0,o.jsxs)(i.Z,{sx:{borderColor:"divider",borderRadius:2.5,borderStyle:"solid",borderWidth:1,display:"flex",flexDirection:"column",alignItems:"center",p:3},children:[(0,o.jsxs)(d.Z,{variant:"body2",children:["Visit our"," ",(0,o.jsx)(c.Z,{component:"a",href:h.H.docs.welcome,target:"_blank",underline:"hover",variant:"subtitle2",children:"docs"})," ","and find out how to switch between"]}),(0,o.jsx)(l.Z,{alignItems:"center",direction:"row",gap:3,sx:{mt:2},children:Object.keys(m).map(function(e){var r=m[e];return(0,o.jsx)(u.Z,{title:e,children:(0,o.jsx)(i.Z,{component:"img",src:r,sx:{height:30,"&:not(:hover)":(0,t.Z)({},e!==s&&{filter:"grayscale(100%)"})}})},e)})})]})};p.propTypes={issuer:n().string.isRequired}}},function(e){e.O(0,[1664,5978,1238,8360,939,1141,7470,469,4432,9774,2888,179],function(){return e(e.s=18016)}),_N_E=e.O()}]);