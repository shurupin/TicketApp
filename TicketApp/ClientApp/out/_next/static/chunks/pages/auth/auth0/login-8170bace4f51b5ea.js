(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6321],{67441:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/auth0/login",function(){return o(6050)}])},72308:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bailoutToClientRendering=function(){var e=n.staticGenerationAsyncStorage&&"getStore"in n.staticGenerationAsyncStorage?null==n.staticGenerationAsyncStorage?void 0:n.staticGenerationAsyncStorage.getStore():n.staticGenerationAsyncStorage;return null!=e&&!!e.forceStatic||((null==e?void 0:e.isStaticGeneration)&&r.suspense(),!1)};var r=o(54564),n=o(82437);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},13897:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(79658).Z,n=o(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useSearchParams=function(){var e=a.useContext(i.SearchParamsContext),t=a.useMemo(function(){return new p(e||new URLSearchParams)},[e]);if(d.bailoutToClientRendering())return t;if(!e)throw Error("invariant expected search params to be mounted");return t},t.usePathname=function(){return a.useContext(i.PathnameContext)},Object.defineProperty(t,"ServerInsertedHTMLContext",{enumerable:!0,get:function(){return u.ServerInsertedHTMLContext}}),Object.defineProperty(t,"useServerInsertedHTML",{enumerable:!0,get:function(){return u.useServerInsertedHTML}}),t.useRouter=function(){var e=a.useContext(s.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e},t.useSelectedLayoutSegments=b,t.useSelectedLayoutSegment=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children",t=b(e);return 0===t.length?null:t[0]},Object.defineProperty(t,"redirect",{enumerable:!0,get:function(){return c.redirect}}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return l.notFound}});var a=o(67294),s=o(48245),i=o(78914),d=o(72308),u=o(20671),c=o(30761),l=o(18739),f=Symbol("internal for urlsearchparams readonly");function h(){return Error("ReadonlyURLSearchParams cannot be modified")}var p=function(){function e(t){r(this,e),this[f]=t,this.entries=t.entries.bind(t),this.forEach=t.forEach.bind(t),this.get=t.get.bind(t),this.getAll=t.getAll.bind(t),this.has=t.has.bind(t),this.keys=t.keys.bind(t),this.values=t.values.bind(t),this.toString=t.toString.bind(t)}return n(e,[{key:Symbol.iterator,value:function(){return this[f][Symbol.iterator]()}},{key:"append",value:function(){throw h()}},{key:"delete",value:function(){throw h()}},{key:"set",value:function(){throw h()}},{key:"sort",value:function(){throw h()}}]),e}();function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children";return function e(t,o){var r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(r)a=t[1][o];else{var a,s,i=t[1];a=null!=(s=i.children)?s:Object.values(i)[0]}if(!a)return n;var d=a[0],u=Array.isArray(d)?d[1]:d;return u?(n.push(u),e(a,o,!1,n)):n}(a.useContext(s.LayoutRouterContext).tree,e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},18739:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.notFound=function(){var e=Error(o);throw e.digest=o,e},t.NOT_FOUND_ERROR_CODE=void 0;var o="NEXT_NOT_FOUND";t.NOT_FOUND_ERROR_CODE=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30761:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.redirect=function(e){var t=Error(o);throw t.digest=o+";"+e,t},t.REDIRECT_ERROR_CODE=void 0;var o="NEXT_REDIRECT";t.REDIRECT_ERROR_CODE=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},54564:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.children},t.suspense=function(){var e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e},(0,o(92648).Z)(o(67294));var r=o(92983)},20671:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useServerInsertedHTML=function(e){var t=r.useContext(n);t&&t(e)},t.ServerInsertedHTMLContext=void 0;var r=(0,o(91598).Z)(o(67294)),n=r.default.createContext(null);t.ServerInsertedHTMLContext=n},20142:function(e,t,o){"use strict";o.d(t,{A:function(){return l}});var r=o(828),n=o(85893),a=o(67294),s=o(39332),i=o(45697),d=o.n(i),u=o(72662),c=o(98637),l=function(e){var t=e.children,o=(0,u.a)().isAuthenticated,i=(0,s.useRouter)(),d=(0,r.Z)((0,a.useState)(!1),2),l=d[0],f=d[1],h=(0,a.useCallback)(function(){o?i.replace(c.H.dashboard.index):f(!0)},[o,i]);return((0,a.useEffect)(function(){h()},[]),l)?(0,n.jsx)(n.Fragment,{children:t}):null};l.propTypes={children:d().node}},97034:function(e,t,o){"use strict";o.d(t,{z:function(){return u}});var r=o(85893),n=o(12918),a=o.n(n),s=o(45697),i=o.n(s),d=o(72662),u=function(e){var t=e.children,o=e.issuer,n=(0,d.a)().issuer;return o!==n?(0,r.jsx)(a(),{statusCode:400,title:"Issuer mismatch, currently using ".concat(n),withDarkMode:!1}):(0,r.jsx)(r.Fragment,{children:t})};u.propTypes={children:i().any,issuer:i().any}},72662:function(e,t,o){"use strict";o.d(t,{a:function(){return a}});var r=o(67294),n=o(29325),a=function(){return(0,r.useContext)(n.Vo)}},6050:function(e,t,o){"use strict";o.r(t);var r=o(47568),n=o(70655),a=o(85893),s=o(67294),i=o(20142),d=o(97034),u=o(72662),c=o(98637),l=o(14229),f=function(){var e=(0,u.a)().loginWithRedirect,t=(0,s.useCallback)((0,r.Z)(function(){return(0,n.__generator)(this,function(t){switch(t.label){case 0:return[4,e({returnTo:new URLSearchParams(globalThis.location.search).get("returnTo")||c.H.dashboard.index})];case 1:return t.sent(),[2]}})}),[e]);return(0,s.useEffect)(function(){t()},[]),null};f.getLayout=function(e){return(0,a.jsx)(d.z,{issuer:l.M.Auth0,children:(0,a.jsx)(i.A,{children:e})})},t.default=f},98637:function(e,t,o){"use strict";o.d(t,{H:function(){return r}});var r={index:"/",checkout:"/checkout",contact:"/contact",pricing:"/pricing",auth:{auth0:{callback:"/auth/auth0/callback",login:"/auth/auth0/login"},jwt:{login:"/auth/jwt/login",register:"/auth/jwt/register"},firebase:{login:"/auth/firebase/login",register:"/auth/firebase/register"},amplify:{confirmRegister:"/auth/amplify/confirm-register",forgotPassword:"/auth/amplify/forgot-password",login:"/auth/amplify/login",register:"/auth/amplify/register",resetPassword:"/auth/amplify/reset-password"}},authDemo:{forgotPassword:{classic:"/auth-demo/forgot-password/classic",modern:"/auth-demo/forgot-password/modern"},login:{classic:"/auth-demo/login/classic",modern:"/auth-demo/login/modern"},register:{classic:"/auth-demo/register/classic",modern:"/auth-demo/register/modern"},resetPassword:{classic:"/auth-demo/reset-password/classic",modern:"/auth-demo/reset-password/modern"},verifyCode:{classic:"/auth-demo/verify-code/classic",modern:"/auth-demo/verify-code/modern"}},dashboard:{index:"/dashboard",academy:{index:"/dashboard/academy",courseDetails:"/dashboard/academy/courses/:courseId"},account:"/dashboard/account",analytics:"/dashboard/analytics",blank:"/dashboard/blank",blog:{index:"/dashboard/blog",postDetails:"/dashboard/blog/:postId",postCreate:"/dashboard/blog/create"},calendar:"/dashboard/calendar",chat:"/dashboard/chat",crypto:"/dashboard/crypto",customers:{index:"/dashboard/customers",details:"/dashboard/customers/:customerId",edit:"/dashboard/customers/:customerId/edit"},ecommerce:"/dashboard/ecommerce",fileManager:"/dashboard/file-manager",invoices:{index:"/dashboard/invoices",details:"/dashboard/invoices/:orderId"},jobs:{index:"/dashboard/jobs",create:"/dashboard/jobs/create",companies:{details:"/dashboard/jobs/companies/:companyId"}},kanban:"/dashboard/kanban",logistics:{index:"/dashboard/logistics",fleet:"/dashboard/logistics/fleet"},mail:"/dashboard/mail",orders:{index:"/dashboard/orders",details:"/dashboard/orders/:orderId"},products:{index:"/dashboard/products",create:"/dashboard/products/create"},social:{index:"/dashboard/social",profile:"/dashboard/social/profile",feed:"/dashboard/social/feed"}},components:{index:"/components",dataDisplay:{detailLists:"/components/data-display/detail-lists",tables:"/components/data-display/tables",quickStats:"/components/data-display/quick-stats"},lists:{groupedLists:"/components/lists/grouped-lists",gridLists:"/components/lists/grid-lists"},forms:"/components/forms",modals:"/components/modals",charts:"/components/charts",buttons:"/components/buttons",typography:"/components/typography",colors:"/components/colors",inputs:"/components/inputs"},docs:{analytics:{configuration:"/docs/analytics-configuration",eventTracking:"/docs/analytics-event-tracking",introduction:"/docs/analytics-introduction"},auth:{amplify:"/docs/auth-amplify",auth0:"/docs/auth-auth0",firebase:"/docs/auth-firebase",jwt:"/docs/auth-jwt"},changelog:"/docs/changelog",contact:"/docs/contact",dependencies:"/docs/dependencies",deployment:"/docs/deployment",environmentVariables:"/docs/environment-variables",gettingStarted:"/docs/getting-started",guards:{auth:"/docs/guards-auth",guest:"/docs/guards-guest",roleBased:"/docs/guards-role-based"},furtherSupport:"/docs/further-support",internationalization:"/docs/internationalization",mapbox:"/docs/mapbox",redux:"/docs/redux",routing:"/docs/routing",rtl:"/docs/rtl",serverCalls:"/docs/server-calls",settings:"/docs/settings",theming:"/docs/theming",welcome:"/docs/welcome"},401:"/401",404:"/404",500:"/500"}},12918:function(e,t,o){e.exports=o(97345)},39332:function(e,t,o){e.exports=o(13897)},82437:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.staticGenerationAsyncStorage=void 0;var o={};t.staticGenerationAsyncStorage=o,globalThis.AsyncLocalStorage&&(t.staticGenerationAsyncStorage=o=new globalThis.AsyncLocalStorage),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=67441)}),_N_E=e.O()}]);