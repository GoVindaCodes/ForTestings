(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[9],{1225:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a(45),n=a(2);var c=e=>{let{children:t}=e;return Object(n.jsx)("main",{className:"h-full overflow-y-auto",children:Object(n.jsx)("div",{className:"container grid px-6 mx-auto",children:t})})};const l=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1199)))),o=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1204)))),i=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1206)))),d=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1205)))),j=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1209)))),b=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1208)))),m=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1192)))),x=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1200)))),h=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1201)))),g=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1207)))),u=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1191)))),p=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1198)))),O=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1197)))),y=Object(s.lazy)((()=>a.e(0).then(a.bind(null,1228)))),f=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,569)))),v=Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,568))));var N=[{path:"/dashboard",component:l},{path:"/products",component:d},{path:"/attributes",component:o},{path:"/attributes/:id",component:i},{path:"/product/:id",component:j},{path:"/categories",component:b},{path:"/languages",component:Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1203))))},{path:"/currencies",component:Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1202))))},{path:"/categories/:id",component:m},{path:"/customers",component:h},{path:"/customer-order/:id",component:g},{path:"/our-staff",component:x},{path:"/orders",component:u},{path:"/order/:id",component:p},{path:"/coupons",component:O},{path:"/settings",component:Object(s.lazy)((()=>Promise.resolve().then(a.bind(null,1196))))},{path:"/404",component:y},{path:"/coming-soon",component:f},{path:"/edit-profile",component:v}],k=a(4),w=a(82),S=a.n(w),C=a(61),P=a(125),z=a(34),B=a(139),M=a(226),L=a.p+"static/media/de.4d811e50.svg",T=a.p+"static/media/us.cb3557fd.svg",A=a(119),D=a(19),E=a(249);var F=a(331);var $=()=>{const e=Object(M.b)(),{toggleSidebar:t,handleLanguageChange:a,setNavBar:r,navBar:c}=Object(s.useContext)(D.a),{state:l,dispatch:o}=Object(s.useContext)(A.a),{adminInfo:i}=l,{mode:d,toggleMode:j}=Object(s.useContext)(k.WindmillContext),[b,m]=Object(s.useState)(!1),[x,h]=Object(s.useState)(!1),g=Object(s.useRef)(),u=Object(s.useRef)(),p=S.a.get("i18next")||"en",{t:O}=Object(B.a)();Object(s.useEffect)((()=>{document.addEventListener("mousedown",(e=>{var t,a;null!==g&&void 0!==g&&null!==(t=g.current)&&void 0!==t&&t.contains(e.target)||m(!1),null!==u&&void 0!==u&&null!==(a=u.current)&&void 0!==a&&a.contains(e.target)||h(!1)}))}),[g,u]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("header",{className:"z-30 py-4 bg-white shadow-sm dark:bg-gray-800",children:Object(n.jsxs)("div",{className:"container flex items-center justify-between h-full px-6 mx-auto text-green-500 dark:text-green-500",children:[Object(n.jsx)("button",{type:"button",onClick:()=>r(!c),className:"hidden lg:block outline-0 focus:outline-none",children:Object(n.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})}),Object(n.jsx)("button",{className:"p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none",onClick:t,"aria-label":"Menu",children:Object(n.jsx)(P.h,{className:"w-6 h-6","aria-hidden":"true"})}),Object(n.jsx)("span",{}),Object(n.jsxs)("ul",{className:"flex justify-end items-center flex-shrink-0 space-x-6",children:[Object(n.jsx)("li",{className:"changeLanguage",children:Object(n.jsxs)("div",{className:"dropdown",children:[Object(n.jsxs)("button",{className:"dropbtn focus:outline-none",children:["de"===p?Object(n.jsx)("img",{src:L,width:16,alt:"lang",className:"mx-2"}):Object(n.jsx)("img",{src:T,className:"mx-2",alt:"lang",width:16}),"de"===p?"GERMAN":"ENGLISH"]}),Object(n.jsxs)("div",{className:"dropdown-content",children:[Object(n.jsxs)("div",{onClick:()=>a("en"),className:"focus:outline-none cursor-pointer",children:[Object(n.jsx)("img",{src:T,width:16,alt:"lang"})," English"," "]}),Object(n.jsxs)("div",{onClick:()=>a("de"),className:"focus:outline-none cursor-pointer",children:[Object(n.jsx)("img",{src:L,width:16,alt:"lang"})," German"]})]})]})}),Object(n.jsx)("li",{className:"flex",children:Object(n.jsx)("button",{className:"rounded-md focus:outline-none",onClick:j,"aria-label":"Toggle color mode",children:"dark"===d?Object(n.jsx)(P.m,{className:"w-5 h-5","aria-hidden":"true"}):Object(n.jsx)(P.i,{className:"w-5 h-5","aria-hidden":"true"})})}),Object(n.jsxs)("li",{className:"relative inline-block text-left",ref:u,children:[Object(n.jsxs)("button",{className:"relative align-middle rounded-md focus:outline-none",onClick:()=>{h(!x),m(!1)},children:[Object(n.jsx)(P.j,{className:"w-5 h-5","aria-hidden":"true"}),Object(n.jsx)("span",{className:"absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full",children:"6"})]}),x&&Object(n.jsx)("div",{className:"origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none",children:Object(n.jsx)("div",{className:"notification-box",children:Object(n.jsx)(C.Scrollbars,{children:Object(n.jsxs)("ul",{className:"block text-sm border-t border-gray-100 dark:border-gray-700 rounded-md",children:[Object(n.jsxs)("li",{className:"flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer",children:[Object(n.jsxs)("div",{className:"flex items-center",children:[Object(n.jsx)(k.Avatar,{className:"p-1 mr-2 md:block bg-gray-50 border border-gray-200",src:"https://i.postimg.cc/tCsSNSxS/Yellow-Sweet-Corn-Bag-each.jpg",alt:"image"}),Object(n.jsxs)("div",{className:"notification-content",children:[Object(n.jsx)("h6",{className:"font-medium text-gray-500",children:"Yellow Sweet Corn Stock out, please check!"}),Object(n.jsxs)("p",{className:"flex items-center text-xs text-gray-400",children:[Object(n.jsx)(k.Badge,{type:"danger",children:"Stock Out"}),Object(n.jsx)("span",{className:"ml-2",children:"Dec 12 2021 - 12:40PM"})]})]})]}),Object(n.jsx)("span",{className:"px-2",children:Object(n.jsx)(P.d,{})})]}),Object(n.jsxs)("li",{className:"flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer",children:[Object(n.jsxs)("div",{className:"flex items-center",children:[Object(n.jsx)(k.Avatar,{className:"mr-2 md:block bg-gray-50 border border-gray-200",src:"https://i.ibb.co/ZTWbx5z/team-1.jpg",alt:"image"}),Object(n.jsxs)("div",{className:"notification-content",children:[Object(n.jsxs)("h6",{className:"font-medium text-gray-500",children:["Sam L. Placed ",Object(n.jsx)("span",{className:"font-bold",children:"$300"})," USD order!"]}),Object(n.jsxs)("p",{className:"flex items-center text-xs text-gray-400",children:[Object(n.jsx)(k.Badge,{type:"success",children:"New Order"}),Object(n.jsx)("span",{className:"ml-2",children:"Nov 30 2021 - 2:40PM"})]})]})]}),Object(n.jsx)("span",{className:"px-2",children:Object(n.jsx)(P.d,{})})]}),Object(n.jsxs)("li",{className:"flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer",children:[Object(n.jsxs)("div",{className:"flex items-center",children:[Object(n.jsx)(k.Avatar,{className:"p-1 mr-2 md:block bg-gray-50 border border-gray-200",src:"https://i.postimg.cc/5y7rNDFv/Radicchio-12ct.jpg",alt:"image"}),Object(n.jsxs)("div",{className:"notification-content",children:[Object(n.jsx)("h6",{className:"font-medium text-gray-500",children:"Radicchio Stock out, please check!"}),Object(n.jsxs)("p",{className:"flex items-center text-xs text-gray-400",children:[Object(n.jsx)(k.Badge,{type:"danger",children:"Stock Out"}),Object(n.jsx)("span",{className:"ml-2",children:"Dec 15 2021 - 12:40PM"})]})]})]}),Object(n.jsx)("span",{className:"px-2",children:Object(n.jsx)(P.d,{})})]}),Object(n.jsxs)("li",{className:"flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer",children:[Object(n.jsxs)("div",{className:"flex items-center",children:[Object(n.jsx)(k.Avatar,{className:"mr-2 md:block bg-gray-50 border border-gray-200",src:"https://i.postimg.cc/SNmQX9Yx/Organic-Baby-Carrot-1oz.jpg",alt:"image"}),Object(n.jsxs)("div",{className:"notification-content",children:[Object(n.jsx)("h6",{className:"font-medium text-gray-500",children:"Organic Baby Carrot Stock out, please check!"}),Object(n.jsxs)("p",{className:"flex items-center text-xs text-gray-400",children:[Object(n.jsx)(k.Badge,{type:"danger",children:"Stock Out"}),Object(n.jsx)("span",{className:"ml-2",children:"Dec 20 2021 - 12:40PM"})]})]})]}),Object(n.jsx)("span",{className:"px-2",children:Object(n.jsx)(P.d,{})})]}),Object(n.jsxs)("li",{className:"flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer",children:[Object(n.jsxs)("div",{className:"flex items-center",children:[Object(n.jsx)(k.Avatar,{className:"mr-2 md:block bg-gray-50 border border-gray-200",src:"https://i.postimg.cc/nM8QfhcP/Orange-20ct.jpg",alt:"image"}),Object(n.jsxs)("div",{className:"notification-content",children:[Object(n.jsx)("h6",{className:"font-medium text-gray-500",children:"Orange Stock out, please check!"}),Object(n.jsxs)("p",{className:"flex items-center text-xs text-gray-400",children:[Object(n.jsx)(k.Badge,{type:"danger",children:"Stock Out"}),Object(n.jsx)("span",{className:"ml-2",children:"Dec 25 2021 - 12:40PM"})]})]})]}),Object(n.jsx)("span",{className:"px-2",children:Object(n.jsx)(P.d,{})})]}),Object(n.jsxs)("li",{className:"flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer",children:[Object(n.jsxs)("div",{className:"flex items-center",children:[Object(n.jsx)(k.Avatar,{className:"mr-2 md:block bg-gray-50 border border-gray-200",src:"https://i.ibb.co/GWVWYNn/team-7.jpg",alt:"Josh"}),Object(n.jsxs)("div",{className:"notification-content",children:[Object(n.jsxs)("h6",{className:"font-medium text-gray-500",children:["John Doe Placed ",Object(n.jsx)("span",{className:"font-bold",children:"$513"})," USD order!"]}),Object(n.jsxs)("p",{className:"flex items-center text-xs text-gray-400",children:[Object(n.jsx)(k.Badge,{type:"success",children:"New Order"}),Object(n.jsx)("span",{className:"ml-2",children:"Dec 18 2021 - 12:40PM"})]})]})]}),Object(n.jsx)("span",{className:"px-2",children:Object(n.jsx)(P.d,{})})]})]})})})})]}),Object(n.jsxs)("li",{className:"relative inline-block text-left",ref:g,children:[Object(n.jsx)("button",{className:"rounded-full dark:bg-gray-500 bg-green-500 text-white h-8 w-8 font-medium mx-auto focus:outline-none",onClick:()=>{m(!b),h(!1)},children:i.image?Object(n.jsx)(k.Avatar,{className:"align-middle",src:`${i.image}`,"aria-hidden":"true"}):Object(n.jsx)("span",{children:i.email[0].toUpperCase()})}),b&&Object(n.jsxs)("ul",{className:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none",children:[Object(n.jsx)("li",{className:"justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",children:Object(n.jsx)(z.b,{to:"/dashboard",children:Object(n.jsxs)("span",{className:"flex items-center text-sm",children:[Object(n.jsx)(P.f,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),Object(n.jsx)("span",{children:O("Dashboard")})]})})}),Object(n.jsx)("li",{className:"justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",children:Object(n.jsx)(z.b,{to:"/edit-profile",children:Object(n.jsxs)("span",{className:"flex items-center text-sm",children:[Object(n.jsx)(P.l,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),Object(n.jsx)("span",{children:O("EditProfile")})]})})}),Object(n.jsx)("li",{onClick:()=>{o({type:"USER_LOGOUT"}),S.a.remove("adminInfo"),e((async(e,t)=>{e({type:F.b,payload:null}),localStorage.setItem("_sideBarAdd",JSON.stringify(t().addToSideBar.sideBarAdd))})),e(((e,t)=>{e({type:E.b,payload:{}}),localStorage.setItem("_settingItem",JSON.stringify(t().setting.settingItem))})),window.location.replace("/login")},className:"cursor-pointer justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",children:Object(n.jsxs)("span",{className:"flex items-center text-sm",children:[Object(n.jsx)(P.g,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),Object(n.jsx)("span",{children:O("LogOut")})]})})]})]})]})]})})})},I=a.p+"static/media/logo.74e6b5be.png",U=a(13);var R=[{path:"/dashboard",icon:U.f,name:"Dashboard"},{icon:U.l,name:"Catalog",routes:[{path:"/products",name:"Products"},{path:"/categories",name:"Categories"},{path:"/attributes",name:"Attributes"},{path:"/coupons",name:"Coupons"}]},{path:"/users",icon:U.s,name:"Users",routes:[{path:"/customers",name:"Customers"},{path:"/our-staff",icon:U.r,name:"OurStaff"}]},{path:"/orders",icon:U.c,name:"Orders"},{path:"/settings",icon:U.j,name:"Manage Master",routes:[{path:"/Settings",name:"Settings"},{path:"/languages",name:"Languages"},{path:"/currencies",name:"Currencies"}]},{icon:U.m,name:"ViewStore",path:"http://localhost:3000",outside:"store"},{icon:U.l,name:"Pages",routes:[{path:"/404",name:"404"},{path:"/coming-soon",name:"Coming Soon"}]}];var _=e=>{let{route:t}=e;const{t:a}=Object(B.a)(),[c,l]=Object(s.useState)(!1);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("li",{className:"relative px-6 py-3",children:[Object(n.jsx)("button",{className:"inline-flex items-center justify-between focus:outline-none w-full text-sm font-semibold transition-colors duration-150 hover:text-green-600 dark:hover:text-gray-200",onClick:()=>l(!c),"aria-haspopup":"true",children:Object(n.jsxs)("span",{className:"inline-flex items-center",children:[Object(n.jsx)(t.icon,{className:"w-5 h-5","aria-hidden":"true"}),Object(n.jsx)("span",{className:"ml-4 mt-1",children:a(`${t.name}`)}),Object(n.jsx)("span",{className:"pl-4 mt-1",children:c?Object(n.jsx)(P.b,{}):Object(n.jsx)(P.c,{})})]})}),c&&Object(n.jsx)("ul",{className:"p-2  overflow-hidden text-sm font-medium text-gray-500 rounded-md dark:text-gray-400 dark:bg-gray-900","aria-label":"submenu",children:t.routes.map(((e,s)=>Object(n.jsx)("li",{children:Object(n.jsxs)(z.c,{to:e.path,className:"flex items-center font-serif py-1 text-sm text-gray-600 hover:text-green-600 cursor-pointer",activeClassName:"text-green-500 dark:text-gray-100",children:[Object(n.jsx)(r.b,{path:e.path,exact:t.exact,children:Object(n.jsx)("span",{className:"absolute inset-y-0 left-0 w-1 bg-green-600 rounded-tr-lg rounded-br-lg","aria-hidden":"true"})}),Object(n.jsx)("span",{className:"text-xs text-gray-500 pr-1",children:Object(n.jsx)(P.k,{})}),Object(n.jsx)("span",{className:"text-gray-500 hover:text-green-600 dark:hover:text-gray-200",children:a(`${e.name}`)})]})},s+1)))})]},t.name)})};var G=()=>{const{t:e}=Object(B.a)(),{mode:t}=Object(s.useContext)(k.WindmillContext),{dispatch:a}=Object(s.useContext)(A.a);return Object(n.jsxs)("div",{className:"py-4 text-gray-500 dark:text-gray-400",children:[Object(n.jsx)("a",{className:" text-gray-900 dark:text-gray-200",href:"/dashboard",children:"dark"===t?Object(n.jsx)("img",{src:I,alt:"dashtar",width:"150",className:"pl-6"}):Object(n.jsx)("img",{src:I,alt:"dashtar",width:"160",className:"pl-6"})}),Object(n.jsx)("ul",{className:"mt-8",children:R.map((t=>t.routes?Object(n.jsx)(_,{route:t},t.name):Object(n.jsx)("li",{className:"relative",children:null!==t&&void 0!==t&&t.outside?Object(n.jsxs)("a",{href:"store.example.com",target:"_blank",className:"px-6 py-4 inline-flex items-center cursor-pointer w-full text-sm font-semibold transition-colors duration-150 hover:text-green-700 dark:hover:text-gray-200",rel:"noreferrer",children:[Object(n.jsx)(r.b,{path:t.path,exact:t.exact,children:Object(n.jsx)("span",{className:"absolute inset-y-0 left-0 w-1 bg-green-500 rounded-tr-lg rounded-br-lg","aria-hidden":"true"})}),Object(n.jsx)(t.icon,{className:"w-5 h-5","aria-hidden":"true"}),Object(n.jsx)("span",{className:"ml-4",children:e(`${t.name}`)})]}):Object(n.jsxs)(z.c,{exact:!0,to:t.path,target:""+(null!==t&&void 0!==t&&t.outside?"_blank":"_self"),className:"px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-700 dark:hover:text-gray-200",activeClassName:"text-green-500 dark:text-gray-100",children:[Object(n.jsx)(r.b,{path:t.path,exact:t.exact,children:Object(n.jsx)("span",{className:"absolute inset-y-0 left-0 w-1 bg-green-500 rounded-tr-lg rounded-br-lg","aria-hidden":"true"})}),Object(n.jsx)(t.icon,{className:"w-5 h-5","aria-hidden":"true"}),Object(n.jsx)("span",{className:"ml-4",children:e(`${t.name}`)})]})},t.name)))}),Object(n.jsx)("span",{className:"lg:fixed bottom-0 px-6 py-6 w-64 mx-auto relative mt-3 block",children:Object(n.jsx)(k.Button,{onClick:()=>{a({type:"USER_LOGOUT"}),S.a.remove("adminInfo")},size:"large",className:"w-full",children:Object(n.jsxs)("span",{className:"flex items-center",children:[Object(n.jsx)(P.g,{className:"mr-3 text-lg"}),Object(n.jsx)("span",{className:"text-sm",children:e("LogOut")})]})})})]})};var J=()=>Object(n.jsx)("aside",{className:"z-30 flex-shrink-0 hidden shadow-sm w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block",children:Object(n.jsx)(G,{})});var W=function(){const{isSidebarOpen:e,closeSidebar:t}=Object(s.useContext)(D.a);return Object(n.jsx)(k.Transition,{show:e,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k.Transition,{enter:"transition ease-in-out duration-150",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-in-out duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(n.jsx)(k.Backdrop,{onClick:t})}),Object(n.jsx)(k.Transition,{enter:"transition ease-in-out duration-150",enterFrom:"opacity-0 transform -translate-x-20",enterTo:"opacity-100",leave:"transition ease-in-out duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0 transform -translate-x-20",children:Object(n.jsx)("aside",{className:"fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden",children:Object(n.jsx)(G,{})})})]})})};var Y=()=>Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(J,{}),Object(n.jsx)(W,{})]}),Q=a(533);const V=Object(s.lazy)((()=>a.e(0).then(a.bind(null,1228))));t.default=()=>{const{isSidebarOpen:e,closeSidebar:t,navBar:a}=Object(s.useContext)(D.a);let l=Object(r.h)();return Object(s.useEffect)((()=>{t()}),[l]),Object(n.jsxs)("div",{className:`flex h-screen bg-gray-50 dark:bg-gray-900 ${e&&"overflow-hidden"}`,children:[a&&Object(n.jsx)(Y,{}),Object(n.jsxs)("div",{className:"flex flex-col flex-1 w-full",children:[Object(n.jsx)($,{}),Object(n.jsx)(c,{children:Object(n.jsx)(s.Suspense,{fallback:Object(n.jsx)(Q.a,{}),children:Object(n.jsxs)(r.d,{children:[N.map(((e,t)=>e.component?Object(n.jsx)(r.b,{exact:!0,path:`${e.path}`,render:t=>Object(n.jsx)(e.component,{...t})},t):null)),Object(n.jsx)(r.a,{exact:!0,from:"/",to:"/dashboard"}),Object(n.jsx)(r.b,{component:V})]})})})]})]})}}}]);
//# sourceMappingURL=9.7fb020b5.chunk.js.map