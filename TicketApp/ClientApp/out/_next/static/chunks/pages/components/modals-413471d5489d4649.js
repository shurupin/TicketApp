(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4488],{26145:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/modals",function(){return r(86774)}])},15097:function(e,t,r){"use strict";r.d(t,{$:function(){return a}});var n=r(85893),i=r(36822),a=function(){return(0,n.jsx)(i.Z,{sx:{backgroundColor:"neutral.500",borderRadius:"50%",height:4,width:4}})}},58530:function(e,t,r){"use strict";r.d(t,{z:function(){return x}});var n=r(26042),i=r(99534),a=r(85893),s=r(45697),l=r.n(s),o=r(90948),d={small:8,medium:16,large:23},c=(0,o.ZP)("span")(function(e){var t=e.theme,r=e.ownerState,n=d[r.size];return{backgroundColor:({offline:t.palette.neutral[100],away:t.palette.warning.main,busy:t.palette.error.main,online:t.palette.success.main})[r.status],borderRadius:"50%",display:"inline-block",flexGrow:0,flexShrink:0,height:n,width:n}}),x=function(e){var t=e.size,r=e.status,s=(0,i.Z)(e,["size","status"]);return(0,a.jsx)(c,(0,n.Z)({ownerState:{size:void 0===t?"medium":t,status:void 0===r?"offline":r}},s))};x.propTypes={size:l().oneOf(["small","medium","large"]),status:l().oneOf(["online","offline","away","busy"])}},21427:function(e,t,r){"use strict";r.d(t,{B:function(){return p}});var n=r(26042),i=r(69396),a=r(99534),s=r(85893);r(80091);var l=r(67294),o=r(5152),d=r.n(o),c=r(45697),x=r.n(c),u=r(90948),h=d()(function(){return Promise.all([r.e(2937),r.e(939),r.e(8764),r.e(1167)]).then(r.t.bind(r,71167,23))},{loadableGenerated:{webpack:function(){return[71167]}},ssr:!1,loading:function(){return null}}),m=(0,u.ZP)("div")(function(e){var t=e.theme;return{border:1,borderColor:t.palette.divider,borderRadius:t.shape.borderRadius,borderStyle:"solid",display:"flex",flexDirection:"column",overflow:"hidden","& .quill":{display:"flex",flex:1,flexDirection:"column",overflow:"hidden"},"& .ql-snow.ql-toolbar":{borderColor:t.palette.divider,borderLeft:"none",borderRight:"none",borderTop:"none","& .ql-picker-label:hover":{color:t.palette.primary.main},"& .ql-picker-label.ql-active":{color:t.palette.primary.main},"& .ql-picker-item:hover":{color:t.palette.primary.main},"& .ql-picker-item.ql-selected":{color:t.palette.primary.main},"& button:hover":{color:t.palette.primary.main,"& .ql-stroke":{stroke:t.palette.primary.main}},"& button:focus":{color:t.palette.primary.main,"& .ql-stroke":{stroke:t.palette.primary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:t.palette.primary.main}},"& .ql-stroke":{stroke:t.palette.text.primary},"& .ql-picker":{color:t.palette.text.primary},"& .ql-picker-options":{backgroundColor:t.palette.background.paper,border:"none",borderRadius:t.shape.borderRadius,boxShadow:t.shadows[10],padding:t.spacing(2)}},"& .ql-snow.ql-container":{borderBottom:"none",borderColor:t.palette.divider,borderLeft:"none",borderRight:"none",display:"flex",flex:1,flexDirection:"column",height:"auto",overflow:"hidden","& .ql-editor":{color:t.palette.text.primary,flex:1,fontFamily:t.typography.body1.fontFamily,fontSize:t.typography.body1.fontSize,height:"auto",overflowY:"auto",padding:t.spacing(2),"&.ql-blank::before":{color:t.palette.text.secondary,fontStyle:"normal",left:t.spacing(2)}}}}}),p=function(e){var t=e.sx,r=e.onChange,o=e.placeholder,d=e.value,c=(0,a.Z)(e,["sx","onChange","placeholder","value"]),x=(0,l.useRef)(null);return(0,s.jsx)(m,(0,i.Z)((0,n.Z)({sx:t,ref:x},c),{children:(0,s.jsx)(h,{onChange:r,placeholder:o,value:d,bounds:x.current||void 0})}))};p.propTypes={onChange:x().func,placeholder:x().string,sx:x().object,value:x().string}},42367:function(e,t,r){"use strict";r.d(t,{r:function(){return a}});var n=r(67294),i=r(18050),a=function(){return(0,n.useContext)(i.J6)}},5696:function(e,t,r){"use strict";r.d(t,{A:function(){return y}});var n=r(85893),i=r(45697),a=r.n(i),s=r(41664),l=r.n(s),o=r(30136),d=r(36822),c=r(21214),x=r(26447),u=r(23795),h=r(53219),m=r(15861),p=r(12963),j=r(67720),Z=r(90948),f=r(15097),v=r(98637),g=(0,Z.ZP)("div")(function(e){return{backgroundColor:e.theme.palette.background.default,display:"flex",flex:"1 1 auto",flexDirection:"column"}}),b=(0,Z.ZP)("div")({display:"flex",flex:"1 1 auto",flexDirection:"column",width:"100%"}),y=function(e){var t=e.breadcrumbs,r=e.children,i=e.title;return(0,n.jsxs)(g,{children:[(0,n.jsx)(d.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.50"},py:"120px"},children:(0,n.jsx)(c.Z,{maxWidth:"lg",children:(0,n.jsxs)(x.Z,{spacing:3,children:[!t&&(0,n.jsx)("div",{children:(0,n.jsxs)(u.Z,{color:"text.primary",component:l(),href:v.H.components.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[(0,n.jsx)(h.Z,{sx:{mr:1},children:(0,n.jsx)(o.Z,{})}),(0,n.jsx)(m.Z,{variant:"subtitle2",children:"Components"})]})}),(0,n.jsx)("div",{children:(0,n.jsx)(m.Z,{variant:"h1",children:i})}),t&&(0,n.jsx)("div",{children:(0,n.jsx)(p.Z,{separator:(0,n.jsx)(f.$,{}),children:t.map(function(e,r){return t.length-1===r?(0,n.jsx)(m.Z,{color:"text.secondary",variant:"subtitle2",children:e.title},r):(0,n.jsx)(u.Z,{color:"text.primary",component:l(),href:e.href,variant:"subtitle2",children:e.title},r)})})})]})})}),(0,n.jsx)(j.Z,{}),(0,n.jsx)(b,{children:r})]})};y.propTypes={breadcrumbs:a().array,children:a().node.isRequired,title:a().string.isRequired}},86774:function(e,t,r){"use strict";r.r(t),r.d(t,{Page:function(){return ea},default:function(){return es}});var n=r(85893),i=r(9008),a=r.n(i),s=r(36822),l=r(21214),o=r(26447),d=r(70563),c=r(5696),x=r(26291),u=r(16756),h=r(35485),m=r(16828),p=r(63692),j=r(45331),Z=r(11791),f=r(15861),v=r(93946),g=r(53219),b=r(79332),y=r(67720),k=r(34386),w=r(11057),C=r(21427),A=r(63931),T=r(48885),q=r(59334),S=[{icon:"/assets/flags/flag-uk.svg",label:"English"},{icon:"/assets/flags/flag-de.svg",label:"German"},{icon:"/assets/flags/flag-es.svg",label:"Spanish"}],M=r(95226),W=r(57709),z=r(87109),D=r(88330),P=r(1784),_=r(7069),R=r(44086),N=r(78462),I=r(19294),B=r(18987),G=r(87952),L=r(23795),E=r(58530),O=new Date,Y=[{id:"5e8891ab188cd2855e6029b7",avatar:"/assets/avatars/avatar-alcides-antonio.png",isActive:!0,lastActivity:O.getTime(),name:"Alcides Antonio"},{id:"5e887a62195cc5aef7e8ca5d",avatar:"/assets/avatars/avatar-marcus-finn.png",isActive:!1,lastActivity:(0,D.Z)(O,2).getTime(),name:"Marcus Finn"},{id:"5e887ac47eed253091be10cb",avatar:"/assets/avatars/avatar-carson-darrin.png",isActive:!1,lastActivity:(0,P.Z)(O,15).getTime(),name:"Carson Darrin"},{id:"5e887b209c28ac3dd97f6db5",avatar:"/assets/avatars/avatar-fran-perez.png",isActive:!0,lastActivity:O.getTime(),name:"Fran Perez"},{id:"5e887b7602bdbc4dbb234b27",avatar:"/assets/avatars/avatar-jie-yan-song.png",isActive:!0,lastActivity:O.getTime(),name:"Jie Yan Song"},{id:"5e86805e2bafd54f66cc95c3",avatar:"/assets/avatars/avatar-miron-vitold.png",isActive:!1,lastActivity:(0,_.Z)(O,2).getTime(),name:"Miron Vitold"},{id:"5e887a1fbefd7938eea9c981",avatar:"/assets/avatars/avatar-penjani-inyene.png",isActive:!1,lastActivity:(0,D.Z)(O,6).getTime(),name:"Penjani Inyene"},{id:"5e887d0b3d090c1b8f162003",avatar:"/assets/avatars/avatar-omar-darboe.png",isActive:!0,lastActivity:O.getTime(),name:"Omar Darobe"},{id:"5e88792be2d4cfb4bf0971d9",avatar:"/assets/avatars/avatar-siegbert-gottfried.png",isActive:!0,lastActivity:O.getTime(),name:"Siegbert Gottfried"},{id:"5e8877da9a65442b11551975",avatar:"/assets/avatars/avatar-iulia-albu.png",isActive:!0,lastActivity:O.getTime(),name:"Iulia Albu"},{id:"5e8680e60cba5019c5ca6fda",avatar:"/assets/avatars/avatar-nasimiyu-danai.png",isActive:!0,lastActivity:O.getTime(),name:"Nasimiyu Danai"}],F=r(87824),H=r(95918),J=r(31500),U=new Date,X=[{id:"5e8883f1b51cc1956a5a1ec0",createdAt:(0,D.Z)(U,2).getTime(),description:"Dummy text",title:"Your order is placed",type:"order_placed"},{id:"5e8883f7ed1486d665d8be1e",createdAt:(0,_.Z)(U,1).getTime(),description:"You have 32 unread messages",title:"New message received",type:"new_message"},{id:"5e8883fca0e8612044248ecf",createdAt:(0,_.Z)(U,3).getTime(),description:"Dummy text",title:"Your item is shipped",type:"item_shipped"},{id:"5e88840187f6b09b431bae68",createdAt:(0,_.Z)(U,7).getTime(),description:"You have 32 unread messages",title:"New message received",type:"new_message"}],$={item_shipped:(0,n.jsx)(J.Z,{}),new_message:(0,n.jsx)(H.Z,{}),order_placed:(0,n.jsx)(F.Z,{})},K=r(32661),V=r(92736),Q=r(93155),ee=r(50480),et=r(45843),er=r(99317),en=r(8704),ei=[{element:(0,n.jsx)(function(){return(0,n.jsx)(s.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},p:3},children:(0,n.jsxs)(Z.Z,{elevation:12,sx:{display:"flex",flexDirection:"column",margin:3,maxWidth:"100%",minHeight:500,mx:"auto",outline:"none",width:600},children:[(0,n.jsxs)(o.Z,{alignItems:"center",direction:"row",spacing:1,sx:{px:2,py:1},children:[(0,n.jsx)(f.Z,{sx:{flexGrow:1},variant:"h6",children:"New Message"}),(0,n.jsx)(v.Z,{children:(0,n.jsx)(g.Z,{children:(0,n.jsx)(m.Z,{})})}),(0,n.jsx)(v.Z,{children:(0,n.jsx)(g.Z,{children:(0,n.jsx)(j.Z,{})})})]}),(0,n.jsx)(b.Z,{disableUnderline:!0,fullWidth:!0,placeholder:"To",sx:{p:1,borderBottom:1,borderBottomColor:"divider",borderBottomStyle:"solid"}}),(0,n.jsx)(b.Z,{disableUnderline:!0,fullWidth:!0,placeholder:"Subject",sx:{p:1,borderBottom:1,borderBottomColor:"divider",borderBottomStyle:"solid"}}),(0,n.jsx)(C.B,{placeholder:"Leave a message",sx:{border:"none",flexGrow:1}}),(0,n.jsx)(y.Z,{}),(0,n.jsxs)(o.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{p:2},children:[(0,n.jsxs)(o.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,n.jsx)(k.Z,{title:"Attach image",children:(0,n.jsx)(v.Z,{size:"small",children:(0,n.jsx)(g.Z,{children:(0,n.jsx)(p.Z,{})})})}),(0,n.jsx)(k.Z,{title:"Attach file",children:(0,n.jsx)(v.Z,{size:"small",children:(0,n.jsx)(g.Z,{children:(0,n.jsx)(h.Z,{})})})})]}),(0,n.jsx)("div",{children:(0,n.jsx)(w.Z,{variant:"contained",children:"Send"})})]})]})})},{}),title:"Modal 1"},{element:(0,n.jsx)(function(){return(0,n.jsx)(s.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},p:3},children:(0,n.jsx)(Z.Z,{elevation:12,sx:{width:240,mx:"auto"},children:S.map(function(e){return(0,n.jsxs)(A.Z,{children:[(0,n.jsx)(T.Z,{children:(0,n.jsx)(s.Z,{sx:{display:"flex",height:20,width:20,"& img":{width:"100%"}},children:(0,n.jsx)("img",{alt:e.label,src:e.icon})})}),(0,n.jsx)(q.Z,{primary:(0,n.jsx)(f.Z,{variant:"subtitle2",children:e.label})})]},e.label)})})})},{}),title:"Modal 2"},{element:(0,n.jsx)(function(){return(0,n.jsx)(s.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},p:3},children:(0,n.jsxs)(Z.Z,{elevation:12,children:[(0,n.jsx)(s.Z,{sx:{p:3},children:(0,n.jsx)(s.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,n.jsx)(v.Z,{children:(0,n.jsx)(g.Z,{children:(0,n.jsx)(j.Z,{})})})})}),(0,n.jsx)(s.Z,{sx:{p:3},children:(0,n.jsx)(l.Z,{maxWidth:"md",children:(0,n.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,n.jsx)(W.Z,{fullWidth:!0,placeholder:"Search...",startAdornment:(0,n.jsx)(z.Z,{position:"start",children:(0,n.jsx)(g.Z,{children:(0,n.jsx)(M.Z,{})})})}),(0,n.jsx)(w.Z,{size:"large",sx:{ml:2},variant:"contained",children:"Search"})]})})})]})})},{}),title:"Modal 3"},{element:(0,n.jsx)(function(){return(0,n.jsx)(s.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},p:3},children:(0,n.jsxs)(Z.Z,{elevation:12,sx:{maxWidth:320,mx:"auto",p:2},children:[(0,n.jsx)(f.Z,{variant:"h6",children:"Contacts"}),(0,n.jsx)(s.Z,{sx:{mt:2},children:(0,n.jsx)(N.Z,{disablePadding:!0,children:Y.map(function(e){var t=e.isActive,r=!e.isActive&&e.lastActivity?(0,R.Z)(e.lastActivity):void 0;return(0,n.jsxs)(I.ZP,{disableGutters:!0,children:[(0,n.jsx)(B.Z,{children:(0,n.jsx)(G.Z,{src:e.avatar})}),(0,n.jsx)(q.Z,{disableTypography:!0,primary:(0,n.jsx)(L.Z,{color:"text.primary",noWrap:!0,underline:"none",variant:"subtitle2",children:e.name})}),t&&(0,n.jsx)(E.z,{size:"small",status:"online"}),r&&(0,n.jsxs)(f.Z,{color:"text.secondary",noWrap:!0,variant:"caption",children:[r," ","ago"]})]},e.id)})})})]})})},{}),title:"Modal 4"},{element:(0,n.jsx)(function(){return(0,n.jsx)(s.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},p:3},children:(0,n.jsxs)(Z.Z,{elevation:12,sx:{maxWidth:320,mx:"auto"},children:[(0,n.jsx)(s.Z,{sx:{p:2},children:(0,n.jsx)(f.Z,{variant:"h6",children:"Notifications"})}),(0,n.jsx)(N.Z,{disablePadding:!0,children:X.map(function(e){var t=$[e.type];return(0,n.jsxs)(I.ZP,{divider:!0,children:[(0,n.jsx)(B.Z,{children:(0,n.jsx)(G.Z,{sx:{backgroundColor:"primary.main",color:"primary.contrastText"},children:(0,n.jsx)(g.Z,{children:t})})}),(0,n.jsx)(q.Z,{primary:(0,n.jsx)(L.Z,{color:"text.primary",sx:{cursor:"pointer"},underline:"none",variant:"subtitle2",children:e.title}),secondary:e.description})]},e.id)})}),(0,n.jsx)(s.Z,{sx:{display:"flex",justifyContent:"center",p:1},children:(0,n.jsx)(w.Z,{size:"small",children:"Mark all as read"})})]})})},{}),title:"Modal 5"},{element:(0,n.jsx)(function(){return(0,n.jsx)(s.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},p:3},children:(0,n.jsxs)(Z.Z,{elevation:12,sx:{maxWidth:320,mx:"auto"},children:[(0,n.jsxs)(s.Z,{sx:{p:2},children:[(0,n.jsx)(f.Z,{variant:"subtitle2",children:"demo@devias.io"}),(0,n.jsx)(f.Z,{color:"text.secondary",variant:"subtitle2",children:"Devias"})]}),(0,n.jsx)(y.Z,{}),(0,n.jsxs)(s.Z,{sx:{mt:2},children:[(0,n.jsxs)(A.Z,{children:[(0,n.jsx)(T.Z,{children:(0,n.jsx)(g.Z,{children:(0,n.jsx)(V.Z,{})})}),(0,n.jsx)(q.Z,{primary:(0,n.jsx)(f.Z,{variant:"subtitle2",children:"Profile"})})]}),(0,n.jsxs)(A.Z,{children:[(0,n.jsx)(T.Z,{children:(0,n.jsx)(g.Z,{children:(0,n.jsx)(K.Z,{})})}),(0,n.jsx)(q.Z,{primary:(0,n.jsx)(f.Z,{variant:"subtitle2",children:"Settings"})})]})]}),(0,n.jsx)(s.Z,{sx:{p:2},children:(0,n.jsx)(w.Z,{fullWidth:!0,variant:"outlined",children:"Logout"})})]})})},{}),title:"Modal 6"},{element:(0,n.jsx)(function(){return(0,n.jsx)(s.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},p:3},children:(0,n.jsxs)(Z.Z,{elevation:12,sx:{maxWidth:320,mx:"auto"},children:[(0,n.jsx)(s.Z,{sx:{pt:3,px:3},children:(0,n.jsx)(f.Z,{variant:"h6",children:"Settings"})}),(0,n.jsxs)(o.Z,{sx:{p:3},spacing:3,children:[(0,n.jsx)(Q.Z,{fullWidth:!0,label:"Theme",select:!0,SelectProps:{native:!0},children:["Light","Dark","Nature"].map(function(e){return(0,n.jsx)("option",{value:e,children:e},e)})}),(0,n.jsxs)(o.Z,{spacing:1,children:[(0,n.jsx)("div",{children:(0,n.jsx)(ee.Z,{control:(0,n.jsx)(et.Z,{}),label:"RTL"})}),(0,n.jsx)("div",{children:(0,n.jsx)(ee.Z,{control:(0,n.jsx)(et.Z,{}),label:"Responsive font sizes"})}),(0,n.jsx)("div",{children:(0,n.jsx)(ee.Z,{control:(0,n.jsx)(et.Z,{}),label:"Compact"})}),(0,n.jsx)("div",{children:(0,n.jsx)(ee.Z,{control:(0,n.jsx)(et.Z,{}),label:"Rounded Corners"})})]})]}),(0,n.jsx)(s.Z,{sx:{pb:3,px:3},children:(0,n.jsx)(w.Z,{fullWidth:!0,variant:"contained",children:"Save Settings"})})]})})},{}),title:"Modal 7"},{element:(0,n.jsx)(function(){return(0,n.jsx)(s.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},p:3},children:(0,n.jsx)(l.Z,{maxWidth:"sm",children:(0,n.jsxs)(Z.Z,{elevation:12,children:[(0,n.jsxs)(o.Z,{direction:"row",spacing:2,sx:{display:"flex",p:3},children:[(0,n.jsx)(G.Z,{sx:{backgroundColor:"error.lightest",color:"error.main"},children:(0,n.jsx)(g.Z,{children:(0,n.jsx)(er.Z,{})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(f.Z,{variant:"h5",children:"Deactivate account"}),(0,n.jsx)(f.Z,{color:"text.secondary",sx:{mt:1},variant:"body2",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."})]})]}),(0,n.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"flex-end",pb:3,px:3},children:[(0,n.jsx)(w.Z,{color:"inherit",sx:{mr:2},children:"Cancel"}),(0,n.jsx)(w.Z,{sx:{backgroundColor:"error.main","&:hover":{backgroundColor:"error.dark"}},variant:"contained",children:"Deactivate"})]})]})})})},{}),title:"Modal 8"},{element:(0,n.jsx)(function(){return(0,n.jsx)(s.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},p:3},children:(0,n.jsx)(l.Z,{maxWidth:"sm",children:(0,n.jsxs)(Z.Z,{elevation:12,sx:{p:3,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsx)(G.Z,{sx:{backgroundColor:"success.lightest",color:"success.main",mb:2},children:(0,n.jsx)(g.Z,{children:(0,n.jsx)(en.Z,{})})}),(0,n.jsx)(f.Z,{variant:"h5",children:"Payment successful"}),(0,n.jsx)(f.Z,{align:"center",color:"text.secondary",sx:{mt:1},variant:"body2",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident facere eum obcaecati pariatur magnam eius fugit nostrum sint enim, amet rem aspernatur distinctio tempora repudiandae, maiores quod. Ad, expedita assumenda!"}),(0,n.jsx)(w.Z,{fullWidth:!0,size:"large",sx:{mt:4},variant:"contained",children:"Go back to dashboard"})]})})})},{}),title:"Modal 9"},{element:(0,n.jsx)(function(){return(0,n.jsx)(s.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},p:3},children:(0,n.jsx)(l.Z,{maxWidth:"sm",children:(0,n.jsxs)(Z.Z,{elevation:12,sx:{p:3},children:[(0,n.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsx)(G.Z,{sx:{backgroundColor:"success.lightest",color:"success.main",mb:2},children:(0,n.jsx)(g.Z,{children:(0,n.jsx)(en.Z,{})})}),(0,n.jsx)(f.Z,{variant:"h5",children:"Payment successful"}),(0,n.jsx)(f.Z,{align:"center",color:"text.secondary",sx:{mt:1},variant:"body2",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident facere eum obcaecati pariatur magnam eius fugit nostrum sint enim, amet rem aspernatur distinctio tempora repudiandae, maiores quod. Ad, expedita assumenda!"})]}),(0,n.jsxs)(o.Z,{alignItems:"center",direction:"row",spacing:3,sx:{mt:4},children:[(0,n.jsx)(w.Z,{color:"inherit",fullWidth:!0,size:"large",children:"Cancel"}),(0,n.jsx)(w.Z,{fullWidth:!0,size:"large",variant:"contained",children:"Deactivate"})]})]})})})},{}),title:"Modal 10"}],ea=function(){return(0,d.a)(),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"Components: Modals | Devias Kit PRO"})}),(0,n.jsx)(s.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,n.jsx)(l.Z,{maxWidth:"lg",children:(0,n.jsx)(o.Z,{spacing:8,children:ei.map(function(e){return(0,n.jsx)(u.M,{title:e.title,children:e.element},e.title)})})})})]})};ea.getLayout=function(e){return(0,n.jsx)(x.A,{children:(0,n.jsx)(c.A,{title:"Modals",children:e})})};var es=ea},16756:function(e,t,r){"use strict";r.d(t,{M:function(){return y}});var n=r(26042),i=r(69396),a=r(99534),s=r(828),l=r(85893),o=r(67294),d=r(45697),c=r.n(d),x=r(71677),u=r(15974),h=r(66242),m=r(78445),p=r(93946),j=r(53219),Z=r(67720),f=r(78885),v=r(36822),g=r(42367),b=r(88427),y=function(e){var t=e.children,r=e.title,d=(0,a.Z)(e,["children","title"]),c=(0,g.r)(),y=(0,s.Z)((0,o.useState)(c.paletteMode),2),k=y[0],w=y[1],C=(0,o.useMemo)(function(){return(0,b.j)((0,i.Z)((0,n.Z)({},c),{paletteMode:k}))},[c,k]);(0,o.useEffect)(function(){w(c.paletteMode)},[c.paletteMode]);var A=(0,o.useCallback)(function(){w(function(e){return"light"===e?"dark":"light"})},[]);return(0,l.jsxs)(h.Z,(0,i.Z)((0,n.Z)({variant:"outlined"},d),{children:[(0,l.jsx)(m.Z,{action:(0,l.jsx)(p.Z,{onClick:A,children:(0,l.jsx)(j.Z,{fontSize:"small",children:"light"===k?(0,l.jsx)(x.Z,{}):(0,l.jsx)(u.Z,{})})}),title:r}),(0,l.jsx)(Z.Z,{}),(0,l.jsx)(f.Z,{theme:C,children:(0,l.jsx)(v.Z,{sx:{colorScheme:k},children:t})})]}))};y.propTypes={children:c().node.isRequired,title:c().string.isRequired}}},function(e){e.O(0,[3662,1664,5978,1238,8360,1273,1220,1813,6383,9661,2183,5355,4673,8065,9774,2888,179],function(){return e(e.s=26145)}),_N_E=e.O()}]);