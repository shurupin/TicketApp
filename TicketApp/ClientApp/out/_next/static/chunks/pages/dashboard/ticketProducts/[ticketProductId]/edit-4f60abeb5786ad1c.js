(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[307],{82034:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/ticketProducts/[ticketProductId]/edit",function(){return r(10371)}])},32035:function(e,t,r){"use strict";r.d(t,{X:function(){return v}});var n=r(47568),i=r(51438),s=r(52951),c=r(70655),a=r(6154),u=r(48355),o=r(25997),d=r(5704),l=r(7069),h=r(88330),m=r(1784),g=r(33511),Z=new Date;(0,l.Z)((0,h.Z)(Z,7),1).getTime(),(0,l.Z)((0,h.Z)(Z,1),2).getTime(),(0,l.Z)((0,h.Z)(Z,4),2).getTime(),(0,l.Z)((0,h.Z)(Z,11),2).getTime(),(0,l.Z)((0,h.Z)(Z,7),3).getTime(),(0,l.Z)((0,h.Z)(Z,5),4).getTime(),(0,l.Z)((0,h.Z)(Z,15),4).getTime(),(0,l.Z)((0,h.Z)(Z,2),5).getTime(),(0,l.Z)((0,h.Z)(Z,8),6).getTime(),(0,l.Z)((0,h.Z)(Z,1),9).getTime();var f=[{id:"5ece2ce3613486d95ffaea58",createdAt:(0,l.Z)((0,h.Z)((0,m.Z)(Z,34),5),3).getTime(),description:"Order confirmation"},{id:"5ece2ce8cebf7ad1d100c0cd",createdAt:(0,l.Z)((0,h.Z)((0,m.Z)(Z,49),11),4).getTime(),description:"Order confirmation"}],p=[{id:"528651571NT",issueDate:Z.getTime(),status:"paid",amount:1358.75},{id:"311658671JR",issueDate:Z.getTime(),status:"unpaid",amount:1451.75}],x=[{id:"5ece2cfeb6e2ac847bba11ce",createdAt:(0,l.Z)((0,m.Z)((0,g.Z)(Z,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:200},{id:"5ece2d02510484b2952e1e05",createdAt:(0,l.Z)((0,m.Z)((0,g.Z)(Z,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:522},{id:"5ece2d08e2748e4e9788901a",createdAt:(0,l.Z)((0,m.Z)((0,g.Z)(Z,23),8),2).getTime(),description:"Cart remove",ip:"84.234.243.42",method:"DELETE",route:"/api/products/d65654e/remove",status:200},{id:"5ece2d0c47214e342c2d7f28",createdAt:(0,l.Z)((0,m.Z)((0,g.Z)(Z,54),20),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/d65654e/add",status:200},{id:"5ece2d11e4060a97b2b57623",createdAt:(0,l.Z)((0,m.Z)((0,g.Z)(Z,16),34),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f/add",status:200},{id:"5ece2d16cf6d53d8e33656af",createdAt:(0,l.Z)((0,m.Z)((0,g.Z)(Z,30),54),2).getTime(),description:"View product",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f",status:200},{id:"5ece2d1b2ec5071be9286a96",createdAt:(0,l.Z)((0,m.Z)((0,g.Z)(Z,40),56),2).getTime(),description:"Get products",ip:"84.234.243.42",method:"GET",route:"/api/products",status:200},{id:"5ece2d22e68d5498917e47bc",createdAt:(0,l.Z)((0,m.Z)((0,g.Z)(Z,5),57),2).getTime(),description:"Login",ip:"84.234.243.42",method:"POST",route:"/api/auth/login",status:200}],v=new(function(){function e(){(0,i.Z)(this,e)}return(0,s.Z)(e,[{key:"getTicketProducts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.Z)(function(){var t,r,n,i,s,d,l,h;return(0,c.__generator)(this,function(c){switch(c.label){case 0:return t=e.filters,r=e.page,n=e.rowsPerPage,i=e.sortBy,s=e.sortDir,[4,a.Z.get("/Product")];case 1:return l=(d=c.sent()).data,h=Number(d.headers.count),void 0!==t&&(h=(l=l.filter(function(e){if(void 0!==t.query&&""!==t.query){var r=!1;if(["category","name"].forEach(function(n){e[n].toLowerCase().includes(t.query.toLowerCase())&&(r=!0)}),!r)return!1}return(void 0===t.hasAcceptedMarketing||e.hasAcceptedMarketing===t.hasAcceptedMarketing)&&(void 0===t.isProspect||e.isProspect===t.isProspect)&&(void 0===t.isReturning||e.isReturning===t.isReturning)})).length),void 0!==i&&void 0!==s&&(l=(0,o.v)(l,i,s)),void 0!==r&&void 0!==n&&(l=(0,u.i)(l,r,n)),[2,Promise.resolve({data:l,count:h})]}})})()}},{key:"getTicketProduct",value:function(e){return(0,n.Z)(function(){return(0,c.__generator)(this,function(t){switch(t.label){case 0:return[4,a.Z.get("/Product/".concat(e))];case 1:return[2,t.sent().data]}})})()}},{key:"updateTicketProduct",value:function(e){return(0,n.Z)(function(){return(0,c.__generator)(this,function(t){switch(t.label){case 0:return[4,a.Z.put("/Product",e)];case 1:return[2,t.sent().data]}})})()}},{key:"getEmails",value:function(e){return Promise.resolve((0,d.p)(f))}},{key:"getInvoices",value:function(e){return Promise.resolve((0,d.p)(p))}},{key:"getLogs",value:function(e){return Promise.resolve((0,d.p)(x))}}]),e}())},38242:function(e,t,r){"use strict";r.d(t,{s:function(){return i}});var n=r(67294),i=function(){var e=(0,n.useRef)(!1);return(0,n.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,n.useCallback)(function(){return e.current},[])}},70563:function(e,t,r){"use strict";r.d(t,{a:function(){return s}});var n=r(67294),i=r(56204),s=function(){(0,n.useEffect)(function(){i.w.push({event:"page_view"})},[])}},10371:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return V}});var n=r(47568),i=r(828),s=r(70655),c=r(85893),a=r(11163),u=r(67294),o=r(41664),d=r.n(o),l=r(9008),h=r.n(l),m=r(30136),g=r(36822),Z=r(21214),f=r(26447),p=r(23795),x=r(53219),v=r(15861),b=r(87952),j=r(87918),k=r(32035),y=r(38242),T=r(70563),P=r(9639),w=r(98637),C=r(14924),_=r(26042),S=r(69396),A=r(99534),E=r(45697),B=r.n(E),I=r(86501),D=r(74231),O=r(82175),N=r(66242),R=r(78445),q=r(44267),W=r(11887),X=r(93155),G=r(67720),L=r(45843),M=r(11057),U=function(e){var t,r,i=e.ticketProduct,a=(0,A.Z)(e,["ticketProduct"]),u=(0,O.TA)({initialValues:{image:i.image||"",sku:i.sku||"",category:i.category||"",name:i.name||"",hasDiscount:i.hasDiscount||!1,inStock:i.inStock||!1,isAvailable:i.isAvailable||!1,status:i.status||"",currency:i.currency||"",submit:null},validationSchema:D.Ry((r={image:D.Z_().max(500),sku:D.Z_().max(255),category:D.Z_().max(255),hasDiscount:D.Xg(),inStock:D.Xg()},(0,C.Z)(r,"inStock",D.Xg()),(0,C.Z)(r,"name",D.Z_().max(255).required("Name is required")),(0,C.Z)(r,"status",D.Z_().max(15)),(0,C.Z)(r,"currency",D.Z_().max(255)),r)),onSubmit:(t=(0,n.Z)(function(e,t){var r,n;return(0,s.__generator)(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),r=(0,_.Z)({},i,e),[4,k.X.updateTicketProduct(r)];case 1:return s.sent().data,t.setStatus({success:!0}),t.setSubmitting(!1),I.ZP.success("Ticket Product updated"),[3,3];case 2:return console.error(n=s.sent()),I.ZP.error("Something went wrong!"),t.setStatus({success:!1}),t.setErrors({submit:n.message}),t.setSubmitting(!1),[3,3];case 3:return[2]}})}),function(e,r){return t.apply(this,arguments)})});return(0,c.jsx)("form",(0,S.Z)((0,_.Z)({onSubmit:u.handleSubmit},a),{children:(0,c.jsxs)(N.Z,{children:[(0,c.jsx)(R.Z,{title:"Edit Ticket Product"}),(0,c.jsxs)(q.Z,{sx:{pt:0},children:[(0,c.jsxs)(W.Z,{container:!0,spacing:3,children:[(0,c.jsx)(W.Z,{xs:12,md:6,children:(0,c.jsx)(X.Z,{error:!!(u.touched.name&&u.errors.name),fullWidth:!0,helperText:u.touched.name&&u.errors.name,label:"Name",name:"name",onBlur:u.handleBlur,onChange:u.handleChange,required:!0,value:u.values.name})}),(0,c.jsx)(W.Z,{xs:12,md:6,children:(0,c.jsx)(X.Z,{error:!!(u.touched.category&&u.errors.category),fullWidth:!0,helperText:u.touched.category&&u.errors.category,label:"Category",name:"category",onBlur:u.handleBlur,onChange:u.handleChange,value:u.values.category})}),(0,c.jsx)(W.Z,{xs:12,md:6,children:(0,c.jsx)(X.Z,{error:!!(u.touched.currency&&u.errors.currency),fullWidth:!0,helperText:u.touched.currency&&u.errors.currency,label:"Currency",name:"currency",onBlur:u.handleBlur,onChange:u.handleChange,value:u.values.currency})}),(0,c.jsx)(W.Z,{xs:12,md:6,children:(0,c.jsx)(X.Z,{error:!!(u.touched.image&&u.errors.image),fullWidth:!0,helperText:u.touched.image&&u.errors.image,label:"Image",name:"image",onBlur:u.handleBlur,onChange:u.handleChange,value:u.values.image})}),(0,c.jsx)(W.Z,{xs:12,md:6,children:(0,c.jsx)(X.Z,{error:!!(u.touched.sku&&u.errors.sku),fullWidth:!0,helperText:u.touched.sku&&u.errors.sku,label:"SKU",name:"sku",onBlur:u.handleBlur,onChange:u.handleChange,value:u.values.sku})}),(0,c.jsx)(W.Z,{xs:12,md:6,children:(0,c.jsx)(X.Z,{error:!!(u.touched.status&&u.errors.status),fullWidth:!0,helperText:u.touched.status&&u.errors.status,label:"Status",name:"status",onBlur:u.handleBlur,onChange:u.handleChange,value:u.values.status})})]}),(0,c.jsxs)(f.Z,{divider:(0,c.jsx)(G.Z,{}),spacing:3,sx:{mt:3},children:[(0,c.jsxs)(f.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,children:[(0,c.jsxs)(f.Z,{spacing:1,children:[(0,c.jsx)(v.Z,{gutterBottom:!0,variant:"subtitle1",children:"Is In Stock?"}),(0,c.jsx)(v.Z,{color:"text.secondary",variant:"body2",children:"Means that the product is in stock"})]}),(0,c.jsx)(L.Z,{checked:u.values.inStock,color:"primary",edge:"start",name:"inStock",onChange:u.handleChange,value:u.values.inStock})]}),(0,c.jsxs)(f.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,children:[(0,c.jsxs)(f.Z,{spacing:1,children:[(0,c.jsx)(v.Z,{gutterBottom:!0,variant:"subtitle1",children:"Is Available?"}),(0,c.jsx)(v.Z,{color:"text.secondary",variant:"body2",children:"Means that the product is available"})]}),(0,c.jsx)(L.Z,{checked:u.values.isAvailable,color:"primary",edge:"start",name:"isAvailable",onChange:u.handleChange,value:u.values.isAvailable})]})]})]}),(0,c.jsxs)(f.Z,{direction:{xs:"column",sm:"row"},flexWrap:"wrap",spacing:3,sx:{p:3},children:[(0,c.jsx)(M.Z,{disabled:u.isSubmitting,type:"submit",variant:"contained",children:"Update"}),(0,c.jsx)(M.Z,{color:"inherit",component:d(),disabled:u.isSubmitting,href:w.H.dashboard.ticketProducts.details.replace(":ticketProductId",i.id),children:"Cancel"})]})]})}))};U.propTypes={ticketProduct:B().object.isRequired};var H=r(30682),K=function(){var e=(0,a.useRouter)().query.ticketProductId,t=(0,y.s)(),r=(0,i.Z)((0,u.useState)(null),2),c=r[0],o=r[1],d=(0,u.useCallback)((0,n.Z)(function(){var r;return(0,s.__generator)(this,function(n){switch(n.label){case 0:if(n.trys.push([0,3,,4]),!e)return[3,2];return[4,k.X.getTicketProduct(e)];case 1:r=n.sent(),n.label=2;case 2:return t()&&o(r),[3,4];case 3:return console.error(n.sent()),[3,4];case 4:return[2]}})}),[t]);return(0,u.useEffect)(function(){d()},[]),c},Q=function(){var e=K();return((0,T.a)(),e)?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(h(),{children:(0,c.jsx)("title",{children:"Dashboard: Ticket Product Edit | Devias Kit PRO"})}),(0,c.jsx)(g.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,c.jsx)(Z.Z,{maxWidth:"lg",children:(0,c.jsxs)(f.Z,{spacing:4,children:[(0,c.jsxs)(f.Z,{spacing:4,children:[(0,c.jsx)("div",{children:(0,c.jsxs)(p.Z,{color:"text.primary",component:d(),href:w.H.dashboard.ticketProducts.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[(0,c.jsx)(x.Z,{sx:{mr:1},children:(0,c.jsx)(m.Z,{})}),(0,c.jsx)(v.Z,{variant:"subtitle2",children:"Ticket Products"})]})}),(0,c.jsx)(f.Z,{alignItems:"flex-start",direction:{xs:"column",md:"row"},justifyContent:"space-between",spacing:4,children:(0,c.jsxs)(f.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,c.jsx)(b.Z,{src:e.image,sx:{height:64,width:64},children:(0,H.Q)(e.name)}),(0,c.jsxs)(f.Z,{spacing:1,children:[(0,c.jsx)(v.Z,{variant:"h4",children:e.name}),(0,c.jsxs)(f.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,c.jsx)(v.Z,{variant:"subtitle2",children:"id:"}),(0,c.jsx)(j.Z,{label:e.id,size:"small"})]})]})]})})]}),(0,c.jsx)(U,{ticketProduct:e})]})})})]}):null};Q.getLayout=function(e){return(0,c.jsx)(P.A,{children:e})};var V=Q},48355:function(e,t,r){"use strict";function n(e,t,r){return e.slice(t*r,t*r+r)}r.d(t,{i:function(){return n}})},25997:function(e,t,r){"use strict";function n(e,t,r){return t[r]<e[r]?-1:t[r]>e[r]?1:0}function i(e,t,r){var i="desc"===r?function(e,r){return n(e,r,t)}:function(e,r){return-n(e,r,t)},s=e.map(function(e,t){return[e,t]});return s.sort(function(e,t){var r=i(e[0],t[0]);return 0!==r?r:e[1]-t[1]}),s.map(function(e){return e[0]})}r.d(t,{v:function(){return i}})},5704:function(e,t,r){"use strict";r.d(t,{p:function(){return function e(t){return"object"!=typeof t||null===t?t:t instanceof Date?new Date(t.getTime()):t instanceof Array?t.reduce(function(t,r,n){return t[n]=e(r),t},[]):t instanceof Object?Object.keys(t).reduce(function(r,n){return r[n]=e(t[n]),r},{}):void 0}}})},30682:function(e,t,r){"use strict";r.d(t,{Q:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join("")}}},function(e){e.O(0,[1664,5978,1238,8360,1273,1220,1813,6383,5104,939,1141,8764,6154,1618,9639,9774,2888,179],function(){return e(e.s=82034)}),_N_E=e.O()}]);