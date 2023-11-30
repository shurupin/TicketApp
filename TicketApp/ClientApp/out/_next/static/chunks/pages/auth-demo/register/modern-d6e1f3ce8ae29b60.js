(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4377],{43120:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth-demo/register/modern",function(){return s(38042)}])},42683:function(e,a,s){"use strict";s.d(a,{A:function(){return y}});var o=s(85893),r=s(41664),t=s.n(r),i=s(45697),d=s.n(i),n=s(36822),c=s(15861),l=s(26447),h=s(52540),u=s(84960),m=s(30974),p=s(76638),x=s(55614),g=s(40734),b=s(57372),f=s(98637),y=function(e){var a=e.children;return(0,o.jsxs)(n.Z,{sx:{backgroundColor:"background.default",display:"flex",flex:"1 1 auto",flexDirection:{xs:"column-reverse",md:"row"}},children:[(0,o.jsx)(n.Z,{sx:{alignItems:"center",backgroundColor:"neutral.800",backgroundImage:'url("/assets/gradient-bg.svg")',backgroundPosition:"top center",backgroundRepeat:"no-repeat",color:"common.white",display:"flex",flex:{xs:"0 0 auto",md:"1 1 auto"},justifyContent:"center",p:{xs:4,md:8}},children:(0,o.jsxs)(n.Z,{maxWidth:"md",children:[(0,o.jsx)(c.Z,{sx:{mb:1},variant:"h4",children:"Welcome to Devias Kit PRO"}),(0,o.jsx)(c.Z,{color:"text.secondary",sx:{mb:4},children:"A professional kit that comes with ready-to-use MUI components developed with one common goal in mind, help you build faster & beautiful applications."}),(0,o.jsx)(c.Z,{variant:"subtitle2",sx:{mb:2},children:"Join 6,000+ forward-thinking companies:"}),(0,o.jsxs)(l.Z,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:4,sx:{color:"text.primary","& > *":{color:"neutral.400",flex:"0 0 auto"}},children:[(0,o.jsx)(u.T,{}),(0,o.jsx)(m.z,{}),(0,o.jsx)(p.p,{}),(0,o.jsx)(x.f,{}),(0,o.jsx)(g.D,{}),(0,o.jsx)(b.m,{})]})]})}),(0,o.jsx)(n.Z,{sx:{backgroundColor:"background.paper",display:"flex",flex:{xs:"1 1 auto",md:"0 0 auto"},flexDirection:"column",justifyContent:{md:"center"},maxWidth:"100%",p:{xs:4,md:8},width:{md:600}},children:(0,o.jsxs)("div",{children:[(0,o.jsx)(n.Z,{sx:{mb:4},children:(0,o.jsxs)(l.Z,{alignItems:"center",component:t(),direction:"row",display:"inline-flex",href:f.H.index,spacing:1,sx:{textDecoration:"none"},children:[(0,o.jsx)(n.Z,{sx:{display:"inline-flex",height:24,width:24},children:(0,o.jsx)(h.T,{})}),(0,o.jsxs)(n.Z,{sx:{color:"text.primary",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:800,letterSpacing:"0.3px",lineHeight:2.5,"& span":{color:"primary.main"}},children:["Devias Kit ",(0,o.jsx)("span",{children:"PRO"})]})]})}),a]})})]})};y.propTypes={children:d().node}},38042:function(e,a,s){"use strict";s.r(a);var o=s(85893),r=s(41664),t=s.n(r),i=s(74231),d=s(82175),n=s(30136),c=s(36822),l=s(23795),h=s(53219),u=s(15861),m=s(26447),p=s(93155),x=s(69368),g=s(56815),b=s(11057),f=s(42683),y=s(98637),j={email:"",name:"",password:"",policy:!1},v=i.Ry({email:i.Z_().email("Must be a valid email").max(255).required("Email is required"),name:i.Z_().max(255).required("Name is required"),password:i.Z_().min(7).max(255).required("Password is required"),policy:i.O7().oneOf([!0],"This field must be checked")}),w=function(){var e=(0,d.TA)({initialValues:j,validationSchema:v,onSubmit:function(){}});return(0,o.jsxs)("div",{children:[(0,o.jsx)(c.Z,{sx:{mb:4},children:(0,o.jsxs)(l.Z,{color:"text.primary",component:t(),href:y.H.dashboard.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[(0,o.jsx)(h.Z,{sx:{mr:1},children:(0,o.jsx)(n.Z,{})}),(0,o.jsx)(u.Z,{variant:"subtitle2",children:"Dashboard"})]})}),(0,o.jsxs)(m.Z,{sx:{mb:4},spacing:1,children:[(0,o.jsx)(u.Z,{variant:"h5",children:"Register"}),(0,o.jsxs)(u.Z,{color:"text.secondary",variant:"body2",children:["Already have an account? \xa0",(0,o.jsx)(l.Z,{href:"#",underline:"hover",variant:"subtitle2",children:"Log in"})]})]}),(0,o.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[(0,o.jsxs)(m.Z,{spacing:3,children:[(0,o.jsx)(p.Z,{error:!!(e.touched.name&&e.errors.name),fullWidth:!0,helperText:e.touched.name&&e.errors.name,label:"Name",name:"name",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.name}),(0,o.jsx)(p.Z,{error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),(0,o.jsx)(p.Z,{error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password})]}),(0,o.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",ml:-1,mt:1},children:[(0,o.jsx)(x.Z,{checked:e.values.policy,name:"policy",onChange:e.handleChange}),(0,o.jsxs)(u.Z,{color:"text.secondary",variant:"body2",children:["I have read the"," ",(0,o.jsx)(l.Z,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),!!(e.touched.policy&&e.errors.policy)&&(0,o.jsx)(g.Z,{error:!0,children:e.errors.policy}),(0,o.jsx)(b.Z,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Register"})]})]})};w.getLayout=function(e){return(0,o.jsx)(f.A,{children:e})},a.default=w},98637:function(e,a,s){"use strict";s.d(a,{H:function(){return o}});var o={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{auth0:{callback:"/auth/auth0/callback",login:"/auth/auth0/login"},jwt:{login:"/auth/jwt/login",register:"/auth/jwt/register"},firebase:{login:"/auth/firebase/login",register:"/auth/firebase/register"},amplify:{confirmRegister:"/auth/amplify/confirm-register",forgotPassword:"/auth/amplify/forgot-password",login:"/auth/amplify/login",register:"/auth/amplify/register",resetPassword:"/auth/amplify/reset-password"}},authDemo:{forgotPassword:{classic:"/auth-demo/forgot-password/classic",modern:"/auth-demo/forgot-password/modern"},login:{classic:"/auth-demo/login/classic",modern:"/auth-demo/login/modern"},register:{classic:"/auth-demo/register/classic",modern:"/auth-demo/register/modern"},resetPassword:{classic:"/auth-demo/reset-password/classic",modern:"/auth-demo/reset-password/modern"},verifyCode:{classic:"/auth-demo/verify-code/classic",modern:"/auth-demo/verify-code/modern"}},dashboard:{index:"/dashboard",academy:{index:"/dashboard/academy",courseDetails:"/dashboard/academy/courses/:courseId"},account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",blog:{index:"/dashboard/blog",postDetails:"/dashboard/blog/:postId",postCreate:"/dashboard/blog/create"},calendar:"/dashboard/calendar",chat:"/dashboard/chat",crypto:"/dashboard/crypto",customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},ticketProducts:{index:"/dashboard/ticketProducts",details:"/dashboard/ticketProducts/:ticketProductId",edit:"/dashboard/ticketProducts/:ticketProductId/edit"},ecommerce:"/dashboard/ecommerce",fileManager:"/dashboard/file-manager",invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},jobs:{index:"/dashboard/jobs",create:"/dashboard/jobs/create",companies:{details:"/dashboard/jobs/companies/:companyId"}},kanban:"/dashboard/kanban",logistics:{index:"/dashboard/logistics",fleet:"/dashboard/logistics/fleet"},mail:"/dashboard/mail",orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"},social:{index:"/dashboard/social",profile:"/dashboard/social/profile",feed:"/dashboard/social/feed"}},components:{index:"/components",dataDisplay:{detailLists:"/components/data-display/detail-lists",tables:"/components/data-display/tables",quickStats:"/components/data-display/quick-stats"},lists:{groupedLists:"/components/lists/grouped-lists",gridLists:"/components/lists/grid-lists"},forms:"/components/forms",modals:"/components/modals",charts:"/components/charts",buttons:"/components/buttons",typography:"/components/typography",colors:"/components/colors",inputs:"/components/inputs"},docs:{analytics:{configuration:"/docs/analytics-configuration",eventTracking:"/docs/analytics-event-tracking",introduction:"/docs/analytics-introduction"},auth:{amplify:"/docs/auth-amplify",auth0:"/docs/auth-auth0",firebase:"/docs/auth-firebase",jwt:"/docs/auth-jwt"},changelog:"/docs/changelog",contact:"/docs/contact",dependencies:"/docs/dependencies",deployment:"/docs/deployment",environmentVariables:"/docs/environment-variables",gettingStarted:"/docs/getting-started",guards:{auth:"/docs/guards-auth",guest:"/docs/guards-guest",roleBased:"/docs/guards-role-based"},furtherSupport:"/docs/further-support",internationalization:"/docs/internationalization",mapbox:"/docs/mapbox",redux:"/docs/redux",routing:"/docs/routing",rtl:"/docs/rtl",serverCalls:"/docs/server-calls",settings:"/docs/settings",theming:"/docs/theming",welcome:"/docs/welcome"},401:"/401",404:"/404",500:"/500"}}},function(e){e.O(0,[1664,5978,1238,8360,939,1141,2344,2642,9774,2888,179],function(){return e(e.s=43120)}),_N_E=e.O()}]);