(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7073],{23306:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/ticketProducts",function(){return n(37046)}])},32035:function(e,t,n){"use strict";n.d(t,{X:function(){return m}});var r=n(47568),i=n(51438),c=n(52951),s=n(70655),a=n(6154),o=n(48355),u=n(25997),d=n(5704),l=n(7069),h=n(88330),f=n(1784),g=n(33511),p=new Date;(0,l.Z)((0,h.Z)(p,7),1).getTime(),(0,l.Z)((0,h.Z)(p,1),2).getTime(),(0,l.Z)((0,h.Z)(p,4),2).getTime(),(0,l.Z)((0,h.Z)(p,11),2).getTime(),(0,l.Z)((0,h.Z)(p,7),3).getTime(),(0,l.Z)((0,h.Z)(p,5),4).getTime(),(0,l.Z)((0,h.Z)(p,15),4).getTime(),(0,l.Z)((0,h.Z)(p,2),5).getTime(),(0,l.Z)((0,h.Z)(p,8),6).getTime(),(0,l.Z)((0,h.Z)(p,1),9).getTime();var Z=[{id:"5ece2ce3613486d95ffaea58",createdAt:(0,l.Z)((0,h.Z)((0,f.Z)(p,34),5),3).getTime(),description:"Order confirmation"},{id:"5ece2ce8cebf7ad1d100c0cd",createdAt:(0,l.Z)((0,h.Z)((0,f.Z)(p,49),11),4).getTime(),description:"Order confirmation"}],v=[{id:"528651571NT",issueDate:p.getTime(),status:"paid",amount:1358.75},{id:"311658671JR",issueDate:p.getTime(),status:"unpaid",amount:1451.75}],x=[{id:"5ece2cfeb6e2ac847bba11ce",createdAt:(0,l.Z)((0,f.Z)((0,g.Z)(p,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:200},{id:"5ece2d02510484b2952e1e05",createdAt:(0,l.Z)((0,f.Z)((0,g.Z)(p,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:522},{id:"5ece2d08e2748e4e9788901a",createdAt:(0,l.Z)((0,f.Z)((0,g.Z)(p,23),8),2).getTime(),description:"Cart remove",ip:"84.234.243.42",method:"DELETE",route:"/api/products/d65654e/remove",status:200},{id:"5ece2d0c47214e342c2d7f28",createdAt:(0,l.Z)((0,f.Z)((0,g.Z)(p,54),20),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/d65654e/add",status:200},{id:"5ece2d11e4060a97b2b57623",createdAt:(0,l.Z)((0,f.Z)((0,g.Z)(p,16),34),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f/add",status:200},{id:"5ece2d16cf6d53d8e33656af",createdAt:(0,l.Z)((0,f.Z)((0,g.Z)(p,30),54),2).getTime(),description:"View product",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f",status:200},{id:"5ece2d1b2ec5071be9286a96",createdAt:(0,l.Z)((0,f.Z)((0,g.Z)(p,40),56),2).getTime(),description:"Get products",ip:"84.234.243.42",method:"GET",route:"/api/products",status:200},{id:"5ece2d22e68d5498917e47bc",createdAt:(0,l.Z)((0,f.Z)((0,g.Z)(p,5),57),2).getTime(),description:"Login",ip:"84.234.243.42",method:"POST",route:"/api/auth/login",status:200}],m=new(function(){function e(){(0,i.Z)(this,e)}return(0,c.Z)(e,[{key:"getTicketProducts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.Z)(function(){var t,n,r,i,c,d,l,h;return(0,s.__generator)(this,function(s){switch(s.label){case 0:return t=e.filters,n=e.page,r=e.rowsPerPage,i=e.sortBy,c=e.sortDir,[4,a.Z.get("/Product")];case 1:return l=(d=s.sent()).data,h=Number(d.headers.count),void 0!==t&&(h=(l=l.filter(function(e){if(void 0!==t.query&&""!==t.query){var n=!1;if(["category","name"].forEach(function(r){e[r].toLowerCase().includes(t.query.toLowerCase())&&(n=!0)}),!n)return!1}return(void 0===t.hasAcceptedMarketing||e.hasAcceptedMarketing===t.hasAcceptedMarketing)&&(void 0===t.isProspect||e.isProspect===t.isProspect)&&(void 0===t.isReturning||e.isReturning===t.isReturning)})).length),void 0!==i&&void 0!==c&&(l=(0,u.v)(l,i,c)),void 0!==n&&void 0!==r&&(l=(0,o.i)(l,n,r)),[2,Promise.resolve({data:l,count:h})]}})})()}},{key:"getTicketProduct",value:function(e){return(0,r.Z)(function(){return(0,s.__generator)(this,function(t){switch(t.label){case 0:return[4,a.Z.get("/Product/".concat(e))];case 1:return[2,t.sent().data]}})})()}},{key:"updateTicketProduct",value:function(e){return(0,r.Z)(function(){return(0,s.__generator)(this,function(t){switch(t.label){case 0:return[4,a.Z.put("/Product",e)];case 1:return[2,t.sent().data]}})})()}},{key:"getEmails",value:function(e){return Promise.resolve((0,d.p)(Z))}},{key:"getInvoices",value:function(e){return Promise.resolve((0,d.p)(v))}},{key:"getLogs",value:function(e){return Promise.resolve((0,d.p)(x))}}]),e}())},38242:function(e,t,n){"use strict";n.d(t,{s:function(){return i}});var r=n(67294),i=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,r.useCallback)(function(){return e.current},[])}},70563:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var r=n(67294),i=n(56204),c=function(){(0,r.useEffect)(function(){i.w.push({event:"page_view"})},[])}},21486:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var r=n(67294),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(0,r.useRef)(!0);(0,r.useEffect)(function(){if(!n.current)return e();n.current=!1},t)}},37046:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ef}});var r=n(47568),i=n(26042),c=n(69396),s=n(828),a=n(70655),o=n(85893),u=n(67294),d=n(9008),l=n.n(d),h=n(25308),f=n(10216),g=n(2957),p=n(36822),Z=n(21214),v=n(26447),x=n(15861),m=n(11057),P=n(53219),j=n(66242),k=n(32035),b=n(38242),C=n(70563),w=n(9639),T=n(45697),y=n.n(T),A=n(95226),R=n(37023),D=n(40044),E=n(67720),_=n(57709),O=n(87109),S=n(93155),I=n(21486),B=[{label:"All",value:"all"},{label:"Accepts Marketing",value:"hasAcceptedMarketing"},{label:"Prospect",value:"isProspect"},{label:"Returning",value:"isReturning"}],q=[{label:"Last update (newest)",value:"updatedAt|desc"},{label:"Last update (oldest)",value:"updatedAt|asc"},{label:"Total orders (highest)",value:"totalOrders|desc"},{label:"Total orders (lowest)",value:"totalOrders|asc"}],L=function(e){var t=e.onFiltersChange,n=e.onSortChange,r=e.sortBy,a=e.sortDir,d=(0,u.useRef)(null),l=(0,s.Z)((0,u.useState)("all"),2),h=l[0],f=l[1],g=(0,s.Z)((0,u.useState)({}),2),Z=g[0],x=g[1],m=(0,u.useCallback)(function(){null==t||t(Z)},[Z,t]);(0,I.r)(function(){m()},[Z,m]);var j=(0,u.useCallback)(function(e,t){f(t),x(function(e){var n=(0,c.Z)((0,i.Z)({},e),{hasAcceptedMarketing:void 0,isProspect:void 0,isReturning:void 0});return"all"!==t&&(n[t]=!0),n})},[]),k=(0,u.useCallback)(function(e){e.preventDefault(),x(function(e){var t;return(0,c.Z)((0,i.Z)({},e),{query:null===(t=d.current)||void 0===t?void 0:t.value})})},[]),b=(0,u.useCallback)(function(e){var t=(0,s.Z)(e.target.value.split("|"),2),r=t[0],i=t[1];null==n||n({sortBy:r,sortDir:i})},[n]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(R.Z,{indicatorColor:"primary",onChange:j,scrollButtons:"auto",sx:{px:3},textColor:"primary",value:h,variant:"scrollable",children:B.map(function(e){return(0,o.jsx)(D.Z,{label:e.label,value:e.value},e.value)})}),(0,o.jsx)(E.Z,{}),(0,o.jsxs)(v.Z,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:3,sx:{p:3},children:[(0,o.jsx)(p.Z,{component:"form",onSubmit:k,sx:{flexGrow:1},children:(0,o.jsx)(_.Z,{defaultValue:"",fullWidth:!0,inputProps:{ref:d},placeholder:"Search Ticket Products",startAdornment:(0,o.jsx)(O.Z,{position:"start",children:(0,o.jsx)(P.Z,{children:(0,o.jsx)(A.Z,{})})})})}),(0,o.jsx)(S.Z,{label:"Sort By",name:"sort",onChange:b,select:!0,SelectProps:{native:!0},value:"".concat(r,"|").concat(a),children:q.map(function(e){return(0,o.jsx)("option",{value:e.value,children:e.label},e.value)})})]})]})};L.propTypes={onFiltersChange:y().func,onSortChange:y().func,sortBy:y().string,sortDir:y().oneOf(["asc","desc"])};var M=n(99534),N=n(36305),G=n(41664),z=n.n(G),F=n(92077),W=n.n(F),X=n(30381),Y=n.n(X),H=n(94723),Q=n(76585),U=n(69368),V=n(7906),J=n(53184),K=n(53816),$=n(98102),ee=n(295),et=n(87952),en=n(23795),er=n(93946),ei=n(8896),ec=n(44254),es=n(98637),ea=n(30682),eo=function(e){var t=(0,u.useMemo)(function(){return e.map(function(e){return e.id})},[e]),n=(0,s.Z)((0,u.useState)([]),2),r=n[0],i=n[1];(0,u.useEffect)(function(){i([])},[t]);var c=(0,u.useCallback)(function(e){i(function(t){return(0,N.Z)(t).concat([e])})},[]),a=(0,u.useCallback)(function(e){i(function(t){return t.filter(function(t){return t!==e})})},[]),o=(0,u.useCallback)(function(){i((0,N.Z)(t))},[t]);return{deselectAll:(0,u.useCallback)(function(){i([])},[]),deselectOne:a,selectAll:o,selectOne:c,selected:r}},eu=function(e){var t=e.ticketProducts,n=e.ticketProductsCount,r=e.onPageChange,s=e.onRowsPerPageChange,a=e.page,d=e.rowsPerPage,l=(0,M.Z)(e,["ticketProducts","ticketProductsCount","onPageChange","onRowsPerPageChange","page","rowsPerPage"]),h=eo(t),f=h.deselectAll,g=h.selectAll,Z=h.deselectOne,j=h.selectOne,k=h.selected,b=(0,u.useCallback)(function(e){e.target.checked?g():f()},[g,f]),C=k.length===t.length,w=k.length>0&&k.length<t.length,T=k.length>0;return(0,o.jsxs)(p.Z,(0,c.Z)((0,i.Z)({sx:{position:"relative"}},l),{children:[T&&(0,o.jsxs)(v.Z,{direction:"row",spacing:2,sx:{alignItems:"center",backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.50"},display:T?"flex":"none",position:"absolute",top:0,left:0,width:"100%",px:2,py:.5,zIndex:10},children:[(0,o.jsx)(U.Z,{checked:C,indeterminate:w,onChange:b}),(0,o.jsx)(m.Z,{color:"inherit",size:"small",children:"Delete"}),(0,o.jsx)(m.Z,{color:"inherit",size:"small",children:"Edit"})]}),(0,o.jsx)(ec.L,{children:(0,o.jsxs)(V.Z,{sx:{minWidth:700},children:[(0,o.jsx)(J.Z,{children:(0,o.jsxs)(K.Z,{children:[(0,o.jsx)($.Z,{padding:"checkbox",children:(0,o.jsx)(U.Z,{checked:C,indeterminate:w,onChange:b})}),(0,o.jsx)($.Z,{children:"Name"}),(0,o.jsx)($.Z,{children:"Category"}),(0,o.jsx)($.Z,{children:"Updated At"}),(0,o.jsx)($.Z,{children:"Price"}),(0,o.jsx)($.Z,{align:"right",children:"Actions"})]})}),(0,o.jsx)(ee.Z,{children:t.map(function(e){var t=k.includes(e.id),n=e.category,r=W()(e.price).format("".concat(e.currency,"0,0.00")),i=Y()(e.updatedAt).format("DD.MM.YYYY hh:mm:ss");return(0,o.jsxs)(K.Z,{hover:!0,selected:t,children:[(0,o.jsx)($.Z,{padding:"checkbox",children:(0,o.jsx)(U.Z,{checked:t,onChange:function(t){t.target.checked?j(e.id):Z(e.id)},value:t})}),(0,o.jsx)($.Z,{children:(0,o.jsxs)(v.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,o.jsx)(et.Z,{src:e.image,sx:{height:42,width:42},children:(0,ea.Q)(e.name)}),(0,o.jsxs)("div",{children:[(0,o.jsx)(en.Z,{color:"inherit",component:z(),href:es.H.dashboard.ticketProducts.details.replace(":ticketProductId",e.id),variant:"subtitle2",children:e.name}),(0,o.jsx)(x.Z,{color:"text.secondary",variant:"body2",children:e.status})]})]})}),(0,o.jsx)($.Z,{children:n}),(0,o.jsx)($.Z,{children:i}),(0,o.jsx)($.Z,{children:(0,o.jsx)(x.Z,{variant:"subtitle2",children:r})}),(0,o.jsxs)($.Z,{align:"right",children:[(0,o.jsx)(er.Z,{component:z(),href:es.H.dashboard.ticketProducts.edit.replace(":ticketProductId",e.id),children:(0,o.jsx)(P.Z,{children:(0,o.jsx)(Q.Z,{})})}),(0,o.jsx)(er.Z,{component:z(),href:es.H.dashboard.ticketProducts.details.replace(":ticketProductId",e.id),children:(0,o.jsx)(P.Z,{children:(0,o.jsx)(H.Z,{})})})]})]},e.id)})})]})}),(0,o.jsx)(ei.Z,{component:"div",count:n,onPageChange:r,onRowsPerPageChange:s,page:a,rowsPerPage:d,rowsPerPageOptions:[5,10,25]})]}))};eu.propTypes={ticketProducts:y().array.isRequired,ticketProductsCount:y().number.isRequired,onPageChange:y().func.isRequired,onRowsPerPageChange:y().func,page:y().number.isRequired,rowsPerPage:y().number.isRequired};var ed=function(){var e=(0,s.Z)((0,u.useState)({filters:{query:void 0,hasAcceptedMarketing:void 0,isProspect:void 0,isReturning:void 0},page:0,rowsPerPage:5,sortBy:"updatedAt",sortDir:"desc"}),2);return{search:e[0],updateSearch:e[1]}},el=function(e){var t=(0,b.s)(),n=(0,s.Z)((0,u.useState)({ticketProducts:[],ticketProductsCount:0}),2),i=n[0],c=n[1],o=(0,u.useCallback)((0,r.Z)(function(){var n;return(0,a.__generator)(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,k.X.getTicketProducts(e)];case 1:return n=r.sent(),t()&&c({ticketProducts:n.data,ticketProductsCount:n.count}),[3,3];case 2:return console.error(r.sent()),[3,3];case 3:return[2]}})}),[e,t]);return(0,u.useEffect)(function(){o()},[e]),i},eh=function(){var e=ed(),t=e.search,n=e.updateSearch,r=el(t),s=r.ticketProducts,a=r.ticketProductsCount;(0,C.a)();var d=(0,u.useCallback)(function(e){n(function(t){return(0,c.Z)((0,i.Z)({},t),{filters:e})})},[n]),k=(0,u.useCallback)(function(e){n(function(t){return(0,c.Z)((0,i.Z)({},t),{sortBy:e.sortBy,sortDir:e.sortDir})})},[n]),b=(0,u.useCallback)(function(e,t){n(function(e){return(0,c.Z)((0,i.Z)({},e),{page:t})})},[n]),w=(0,u.useCallback)(function(e){n(function(t){return(0,c.Z)((0,i.Z)({},t),{rowsPerPage:parseInt(e.target.value,10)})})},[n]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l(),{children:(0,o.jsx)("title",{children:"Dashboard: Ticket Product List | Devias Kit PRO"})}),(0,o.jsx)(p.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,o.jsx)(Z.Z,{maxWidth:"xl",children:(0,o.jsxs)(v.Z,{spacing:4,children:[(0,o.jsxs)(v.Z,{direction:"row",justifyContent:"space-between",spacing:4,children:[(0,o.jsxs)(v.Z,{spacing:1,children:[(0,o.jsx)(x.Z,{variant:"h4",children:"Ticket Products"}),(0,o.jsxs)(v.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,o.jsx)(m.Z,{color:"inherit",size:"small",startIcon:(0,o.jsx)(P.Z,{children:(0,o.jsx)(g.Z,{})}),children:"Import"}),(0,o.jsx)(m.Z,{color:"inherit",size:"small",startIcon:(0,o.jsx)(P.Z,{children:(0,o.jsx)(h.Z,{})}),children:"Export"})]})]}),(0,o.jsx)(v.Z,{alignItems:"center",direction:"row",spacing:3,children:(0,o.jsx)(m.Z,{startIcon:(0,o.jsx)(P.Z,{children:(0,o.jsx)(f.Z,{})}),variant:"contained",children:"Add"})})]}),(0,o.jsxs)(j.Z,{children:[(0,o.jsx)(L,{onFiltersChange:d,onSortChange:k,sortBy:t.sortBy,sortDir:t.sortDir}),(0,o.jsx)(eu,{ticketProducts:s,ticketProductsCount:a,onPageChange:b,onRowsPerPageChange:w,rowsPerPage:t.rowsPerPage,page:t.page})]})]})})})]})};eh.getLayout=function(e){return(0,o.jsx)(w.A,{children:e})};var ef=eh},48355:function(e,t,n){"use strict";function r(e,t,n){return e.slice(t*n,t*n+n)}n.d(t,{i:function(){return r}})},25997:function(e,t,n){"use strict";function r(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function i(e,t,n){var i="desc"===n?function(e,n){return r(e,n,t)}:function(e,n){return-r(e,n,t)},c=e.map(function(e,t){return[e,t]});return c.sort(function(e,t){var n=i(e[0],t[0]);return 0!==n?n:e[1]-t[1]}),c.map(function(e){return e[0]})}n.d(t,{v:function(){return i}})},5704:function(e,t,n){"use strict";n.d(t,{p:function(){return function e(t){return"object"!=typeof t||null===t?t:t instanceof Date?new Date(t.getTime()):t instanceof Array?t.reduce(function(t,n,r){return t[r]=e(n),t},[]):t instanceof Object?Object.keys(t).reduce(function(n,r){return n[r]=e(t[r]),n},{}):void 0}}})},30682:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join("")}}},function(e){e.O(0,[4885,1664,5978,1238,8360,1273,1220,1813,6383,5104,2077,9365,285,8896,8764,6154,6269,9639,9774,2888,179],function(){return e(e.s=23306)}),_N_E=e.O()}]);