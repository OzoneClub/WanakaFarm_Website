(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(t,e,n){"use strict";var o=n(120),r=n.n(o);n(347);e.a=function(t){t.app.AOS=new r.a.init({delay:0,duration:1e3,easing:"ease-in-out",once:!0,startEvent:"DOMContentLoaded"})}},144:function(t,e,n){"use strict";var o=n(1),r=n(203);o.default.use(r.a,{preLoad:1.3,listenEvents:["scroll"],silent:!1})},145:function(t,e,n){"use strict";var o=n(1),r=n(204),c=n.n(r);n(349);o.default.use(c.a)},146:function(t,e,n){"use strict";var o=n(1),r=n(205);o.default.use(r.a)},173:function(t,e,n){var content=n(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("2f40dcf8",content,!0,{sourceMap:!1})},175:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n(8),n(6),n(7),n(11),n(12);var o=n(2),r=n(20),c=n(28),l=(n(19),n(198));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=n.n(l).a.create({timeout:3e4}),h=new(function(){function t(){var e=this;Object(r.a)(this,t),this.get=function(t,data){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return f.get(e.getUrl(t),m(m({},n),{},{params:data})).then(e.responseBody).then(e.resolveData).catch(e.handleErrors)},this.post=function(t,data){return f.post(e.getUrl(t),e.jsonData(data),{headers:e.getHeaders()}).then(e.responseBody).then(e.resolveData).catch(e.handleErrors)},this.postForm=function(t,data){return f.post(e.getUrl(t),data,{headers:{"Content-Type":"multipart/form-data"}}).then(e.responseBody).then(e.resolveData).catch(e.handleErrors)},this.put=function(t,data){return f.put(e.getUrl(t),e.jsonData(data),{headers:e.getHeaders()}).then(e.responseBody).then(e.resolveData).catch(e.handleErrors)},this.delete=function(t,data){return f.delete(e.getUrl(t),{data:e.jsonData(data),headers:e.getHeaders()}).then(e.responseBody).then(e.resolveData).catch(e.handleErrors)}}return Object(c.a)(t,[{key:"getUrl",value:function(t){return t}},{key:"getHeaders",value:function(){return{"Content-Type":"application/json"}}},{key:"handleErrors",value:function(t){if(t&&t.response&&t.response.status)t.response.status;return Promise.reject(t)}},{key:"responseBody",value:function(t){if(401!==t.status){if(t.status>=200&&t.status<=399)return void 0===t.data||void 0===t.data.status||t.data.status>=200&&t.data.status<=399?t.data:Promise.reject({response:{data:t.data}});throw new Error(t)}return t.data}},{key:"jsonData",value:function(data){return JSON.stringify(data)}},{key:"resolveData",value:function(data){return Promise.resolve(data)}}]),t}())},184:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("79312afa",content,!0,{sourceMap:!1})},187:function(t,e,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("041d3a1c",content,!0,{sourceMap:!1})},188:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7cf0485c",content,!0,{sourceMap:!1})},193:function(t,e,n){var content=n(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("4f5a6d92",content,!0,{sourceMap:!1})},208:function(t,e,n){"use strict";n(25),n(19);var o=n(175);var r={data:function(){return{email:null,snackbar:null,messageResponse:null,color:"success",numberRules:[],rulesName:{required:function(t){return!!t||"E-mail is required."},email:function(t){return!t||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}},valid:!0,loading:!1}},methods:{onSubmit:function(){var t=this;this.numberRules=[this.rulesName.required,this.rulesName.email],setTimeout((function(){t.$refs.formSub.validate()&&(t.loading=!0,o.a.post("https://api.wanakafarm.com/api/landing-subscribe/create",{email:t.email}).then((function(e){t.email=null,t.numberRules=[],t.$refs.formSub.reset(),t.snackbar=!0,t.messageResponse=e.message||"Submitted successfully",t.color="success"})).catch((function(e){var n=function(t){var e=function(t){return t&&t.response&&t.response.data?t.response.data:null}(t);return e&&e.message?e.message:""}(e);console.log(e),t.snackbar=!0,t.numberRules=[],t.$refs.formSub.reset(),t.messageResponse=n||"Something went error",t.color="error"})).finally((function(){t.loading=!1})))}))}}},c=(n(277),n(31)),l=n(47),d=n.n(l),m=n(210),f=n(361),h=n(362),v=n(365),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box-subscribe"},[n("v-form",{ref:"formSub",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("v-text-field",{attrs:{type:"email","hide-details":"auto",requiered:"",rules:t.numberRules,color:"#90b751",dark:"",placeholder:"Enter Email address"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-btn",{staticClass:"btn-summit-contact",attrs:{type:"submit",dark:"",color:"#1A2788",loading:t.loading,disabled:t.loading}},[t._v("\n      Subscribe\n    ")])],1),t._v(" "),n("v-snackbar",{attrs:{timeout:5e3,color:t.color,top:!0,right:!0,bottom:!1,left:!1},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("div",{staticClass:"d-flex justify-space-between align-center"},[n("span",{staticClass:"text-capitalize subtitle-2"},[t._v(t._s(t.messageResponse))]),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)])],1)}),[],!1,null,null,null),x=component.exports;d()(component,{VBtn:m.a,VForm:f.a,VSnackbar:h.a,VTextField:v.a});var w={components:{subcribe:x}},y=(n(315),Object(c.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("subcribe"),t._v(" "),n("div",{staticClass:"address"},[t._v("Craigmuir Chambers, P.O. Box 71, Road Town, Tortola, VG 1110, British Virgin Islands")]),t._v(" "),n("div",{staticClass:"footer__info"},[n("div",[n("div",{staticClass:"footer__info-item"},[n("nuxt-link",{attrs:{to:"/terms"}},[t._v("Terms of Service")])],1),t._v(" "),n("div",{staticClass:"spacer"}),t._v(" "),n("div",{staticClass:"footer__info-item"},[n("nuxt-link",{attrs:{to:"/privacy"}},[t._v("Privacy Policy")])],1),t._v(" "),n("div",{staticClass:"spacer hidden-mb"})]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"footer__community"},[n("a",{attrs:{href:"https://discord.com/invite/Q4aN8VZCqD",target:"_blank"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/discord.svg",expression:"'/images/discord.svg'"}],attrs:{alt:""}})]),t._v(" "),n("a",{attrs:{href:"https://www.youtube.com/channel/UC5wkn4ZygtqOa7icfIoI00w",target:"_blank"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/youtube.svg",expression:"'/images/youtube.svg'"}],attrs:{alt:""}})]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/Wanaka_Farm",target:"_blank"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/twitter.svg",expression:"'/images/twitter.svg'"}],attrs:{alt:""}})]),t._v(" "),n("a",{attrs:{href:"https://t.me/WanakaOfficial",target:"_blank"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/telegram.svg",expression:"'/images/telegram.svg'"}],attrs:{alt:""}})]),t._v(" "),n("a",{attrs:{href:"https://medium.com/@wanakafarm",target:"_blank"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/medium.png",expression:"'/images/medium.png'"}],attrs:{alt:""}})]),t._v(" "),n("a",{attrs:{href:"https://www.facebook.com/wanakafarmofficial",target:"_blank"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/facebook.svg",expression:"'/images/facebook.svg'"}],attrs:{alt:""}})])]),t._v(" "),n("div",{staticClass:"footer__bottom"},[t._v("\n    Copyright © Wanaka Tech Ltd\n  ")])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-mail footer__info-item"},[n("a",{attrs:{href:"mailto:contact@wanakafarm.com",target:"_blank"}},[t._v("contact@wanakafarm.com")])])}],!1,null,null,null).exports),_=n(200),k={data:function(){return{drawer:!1,fab:!1,isActive:[{header:!1},{feature:!1},{roadmap:!1},{teammember:!1},{partner:!1}]}},computed:{isMobile2:function(){return this.$vuetify.breakpoint.mdAndDown},options:function(){return this.isMobile2?{duration:1e3,offset:50,easing:"easeInCubic"}:{duration:1e3,offset:70,easing:"easeInCubic"}}},watch:{$route:function(t,e){var n=this;t.hash&&this.$nextTick((function(){document.querySelector(t.hash)&&n.$vuetify.goTo(t.hash,n.options)}))}},methods:{onScroll:n.n(_).a.throttle((function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>500}}),500),toTop:function(){this.$vuetify.goTo(0)},goTo:function(t){}}},C=(n(317),n(367)),z=n(363),O=n(137),j=n(138),E=n(92),P=n(139),S=n(91),A=n(366),M=n(364),T=n(201),N=n.n(T),D=n(117),V=Object(c.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"pa-0",attrs:{id:"header",fixed:"",flat:""}},[n("div",{staticClass:"d-flex align-center",staticStyle:{width:"100%"}},[n("nuxt-link",{attrs:{to:"/"}},[n("div",{staticClass:"bg-logo d-flex align-center"},[n("img",{staticClass:"logo",attrs:{src:"/images/logo-08.svg",alt:"WANAKA"}})])]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"nav-link hidden-mobile-header"},[n("v-btn",{class:{active:t.isActive.header},attrs:{text:"",nuxt:"",to:"/"}},[t._v("\n          Home\n        ")]),t._v(" "),n("v-btn",{class:{active:t.isActive.feature},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#feature"}},nativeOn:{click:function(e){return t.goTo("#feature",t.options)}}},[t._v("\n          Features\n        ")]),t._v(" "),n("v-btn",{class:{active:t.isActive.roadmap},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#roadmap"}},nativeOn:{click:function(e){return t.goTo("#roadmap",t.options)}}},[t._v("\n          Roadmap\n        ")]),t._v(" "),n("v-btn",{class:{active:t.isActive.teammember},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#teammember"}},nativeOn:{click:function(e){return t.goTo("#teammember",t.options)}}},[t._v("\n          Team\n        ")]),t._v(" "),n("v-btn",{attrs:{text:"",nuxt:"",to:"/ecosystem"}},[t._v("Ecosystem")]),t._v(" "),n("v-btn",{attrs:{text:"",nuxt:"",to:"/papers"}},[t._v("Papers")]),t._v(" "),n("v-btn",{class:{active:t.isActive.teammember},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#partner"}},nativeOn:{click:function(e){return t.goTo("#partner",t.options)}}},[t._v("\n          Partners\n        ")])],1),t._v(" "),n("div",{staticClass:"nav-link__icon hidden-pc"},[n("v-app-bar-nav-icon",{attrs:{dark:"",color:"rgb(227,163,93)"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1)]),t._v(" "),n("v-navigation-drawer",{staticClass:"nav-link__mobile hidden-pc",attrs:{right:"",app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",[n("nuxt-link",{attrs:{to:"/"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-list-item",{class:{active:t.isActive.header}},[n("v-list-item-title",[t._v("Home")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#feature"}},on:{click:function(e){t.drawer=!t.drawer||t.goTo("#feature",t.options)}}},[n("v-list-item",{class:{active:t.isActive.feature}},[n("v-list-item-title",[t._v("Features")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#roadmap"}},on:{click:function(e){t.drawer=!t.drawer||t.goTo("#roadmap",t.options)}}},[n("v-list-item",{class:{active:t.isActive.roadmap}},[n("v-list-item-title",[t._v("Roadmap")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#teammember"}},on:{click:function(e){t.drawer=!t.drawer||t.goTo("#teammember",t.options)}}},[n("v-list-item",{class:{active:t.isActive.teammember}},[n("v-list-item-title",[t._v("Team")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:"/ecosystem"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-list-item",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-list-item-title",[t._v("Ecosystem")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:"/papers"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-list-item",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-list-item-title",[t._v("Paper")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#partner"}},on:{click:function(e){t.drawer=!t.drawer||t.goTo("#partner",t.options)}}},[n("v-list-item",{class:{active:t.isActive.partner}},[n("v-list-item-title",[t._v("Partners")])],1)],1)],1)],1)],1),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#1d6a65"},on:{click:t.toTop}},[n("v-icon",[t._v("mdi-arrow-up")])],1)],1)}),[],!1,null,null,null),B=V.exports;d()(V,{VAppBar:C.a,VAppBarNavIcon:z.a,VBtn:m.a,VIcon:O.a,VList:j.a,VListItem:E.a,VListItemGroup:P.a,VListItemTitle:S.a,VNavigationDrawer:A.a,VSpacer:M.a}),N()(V,{Scroll:D.b});var F=n(120),$=n.n(F),R={name:"Default",components:{AppHeader:B,AppFooter:y},data:function(){return{isLoading:!0}},mounted:function(){var t=this;document.onreadystatechange=function(){"complete"===document.readyState&&(console.log("Page completed with image and files!"),t.isLoading=!1,$.a.refresh()),"index"===t.$route.name&&t.ball()}},methods:{ball:function(){var t=["#3CC157","#2AA7FF","#1B1B1B","#FCBC0F","#F85F36"],e=[],n=document.createElement("div");n.classList.add("wrap-ball");for(var i=0;i<50;i++){var o=document.createElement("div");n.appendChild(o),o.classList.add("ball"),o.style.background=t[Math.floor(Math.random()*t.length)],o.style.left="".concat(Math.floor(100*Math.random()),"vw"),o.style.top="".concat(Math.floor(100*Math.random()),"vh"),o.style.transform="scale(".concat(Math.random(),")"),o.style.width="".concat(Math.random(),"em"),o.style.height=o.style.width,e.push(o),document.body.append(n)}e.forEach((function(t,i,e){var n={x:Math.random()*(i%2==0?-11:11),y:12*Math.random()};t.animate([{transform:"translate(0, 0)"},{transform:"translate(".concat(n.x,"rem, ").concat(n.y,"rem)")}],{duration:2e3*(Math.random()+1),direction:"alternate",fill:"both",iterations:1/0,easing:"ease-in-out"})}))}}},I=(n(345),n(360)),L=Object(c.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("app-header"),t._v(" "),n("nuxt"),t._v(" "),n("app-footer"),t._v(" "),t.isLoading?n("div",{staticClass:"loading-overlay"},[n("div",{staticClass:"quiver"},[n("span",{staticClass:"arrows st"}),t._v(" "),n("span",{staticClass:"arrows nd"}),t._v(" "),n("span",{staticClass:"arrows rd"}),t._v(" "),n("span",{staticClass:"arrows th"}),t._v(" "),n("span",{staticClass:"arrows fth"}),t._v(" "),n("span",{staticClass:"loading"},[t._v("Loading")])])]):t._e()],1)}),[],!1,null,null,null);e.a=L.exports;d()(L,{VApp:I.a})},209:function(t,e,n){"use strict";var o={name:"Blank"},r=n(31),c=n(47),l=n.n(c),d=n(360),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a})},219:function(t,e,n){t.exports=n(220)},247:function(t,e,n){"use strict";n(173)},248:function(t,e,n){var o=n(9)(!1);o.push([t.i,"h1[data-v-15f1d07f]{font-size:20px}",""]),t.exports=o},253:function(t,e,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("49bb9be4",content,!0,{sourceMap:!1})},254:function(t,e,n){var o=n(9),r=n(216),c=n(255),l=n(256),d=n(257),m=n(258),f=n(259),h=o(!1),v=r(c),x=r(l),w=r(d),y=r(m),_=r(f);h.push([t.i,"@font-face{font-family:CreakyFrank;font-weight:400;font-style:normal;src:url("+v+') format("opentype")}@font-face{font-family:EvilEmpire;font-weight:400;font-style:normal;src:url('+x+') format("opentype")}@font-face{font-family:ChakraPetch;font-weight:600;font-style:normal;src:url('+w+') format("opentype")}@font-face{font-family:ChakraPetch;font-weight:400;font-style:normal;src:url('+y+') format("opentype")}@font-face{font-family:ChakraPetch;font-weight:500;font-style:normal;src:url('+_+') format("opentype")}*,:after,:before{box-sizing:border-box;margin:0}body,html{font-family:Montserrat,Roboto,"Source Sans Pro","Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;overflow-x:hidden;position:relative}#app.theme--light.v-application{font-family:Montserrat,Roboto,"Source Sans Pro","Segoe UI","Helvetica Neue",Arial,sans-serif!important;font-size:16px;color:#fff;background:#2e8d44}.c-container{width:100%;padding:0 1.5rem;margin-right:auto!important;margin-left:auto!important;max-width:1600px}@media(min-width:600px){.c-container{padding:0 2rem}}@media(min-width:1264px){.c-container{padding:0 3rem}}@media(min-width:1910px){.c-container{padding:0 .75em;max-width:1370px}}.c-container-header{max-width:100%;margin:auto;padding:0 1rem}@media(min-width:600px){.c-container-header{padding:0 2rem}}@media(min-width:1264px){.c-container-header{padding:0 3rem}}@media(min-width:1440px){.c-container-header{padding:0 .75em;max-width:1370px}}@media(min-width:1650px){.c-container-header{max-width:1600px}}.theme--light.v-toolbar{z-index:6!important;background:linear-gradient(90deg,#399b48 0,#106836)}.hidden-mobile{display:none!important}@media screen and (min-width:1264px){.hidden-mobile{display:flex!important}}.hidden-pc{display:flex!important}@media screen and (min-width:1264px){.hidden-pc{display:none!important}}.hidden-mobile-header{display:none!important}@media screen and (min-width:1260px){.hidden-mobile-header{display:flex!important}}.hidden-pc-header{display:flex!important}@media screen and (min-width:1260px){.hidden-pc-header{display:none!important}}.border-section{height:40px;width:100%;background:url(/images/wood-05-06.svg);background-size:cover}.border-section-2{height:40px;width:100%;background:url(/images/7-12.svg);background-size:cover}.border-section-3{height:6px;width:100%;background:linear-gradient(90deg,#399b48 0,#106836);background-size:cover;position:absolute;bottom:0;z-index:5}.border-section-3 img{width:100%;height:auto}.bg-page{background:url(/images/bg-PC-min.jpg) top no-repeat;background-size:cover}.bg-page-2{background:url(/images/bg-12.jpg) top no-repeat;background-size:cover}.bg-page-3{background:linear-gradient(150deg,#9bcc5a,#18732a)!important}.bg-page-3.full-h{overflow:hidden;max-width:100vw}.swiper-pagination .swiper-pagination-bullet-active{background-color:hsla(0,0%,100%,.8)}.wrap-buy{position:absolute;left:50%;transform:translateX(-50%);bottom:-40px}@media screen and (max-width:1600px){.wrap-buy{bottom:-40px}}@media screen and (max-width:960px){.wrap-buy{bottom:-30px}}.wrap-buy a{cursor:pointer;display:block;width:390px;overflow:hidden;transition-duration:.3s;transition-timing-function:ease-in-out}.wrap-buy a:hover{transform:scale(1.1)}.wrap-buy a:hover .buy-wana.hoved{display:block}.wrap-buy a:hover .buy-wana{display:none}@media screen and (max-width:1600px){.wrap-buy a{width:330px}}@media screen and (max-width:1300px){.wrap-buy a{width:290px}}@media screen and (max-width:1100px){.wrap-buy a{width:270px}}.wrap-buy .buy-wana.hoved{display:none}.wrap-buy .buy-wana{display:block}',""]),t.exports=h},255:function(t,e,n){t.exports=n.p+"fonts/CreakyFrank.377197a.ttf"},256:function(t,e,n){t.exports=n.p+"fonts/Evil Empire.e3f4420.otf"},257:function(t,e,n){t.exports=n.p+"fonts/ChakraPetch-Bold.93ca478.ttf"},258:function(t,e,n){t.exports=n.p+"fonts/ChakraPetch-Medium.fbaa5ab.ttf"},259:function(t,e,n){t.exports=n.p+"fonts/ChakraPetch-SemiBold.465bd46.ttf"},277:function(t,e,n){"use strict";n(184)},278:function(t,e,n){var o=n(9)(!1);o.push([t.i,".box-subscribe{margin-bottom:1rem;display:flex;justify-content:center;width:100%}.box-subscribe .v-form{padding:0 15px;background:#087951;border-radius:4px;background-size:cover;display:flex;align-items:center;max-width:500px;width:100%;height:60px}@media screen and (max-width:600px){.box-subscribe .v-form{padding:0 10px}}.box-subscribe .v-form .theme--dark.v-input input,.box-subscribe .v-form .theme--dark.v-input textarea{color:#e8e8e8;font-weight:500;font-size:18px;padding:0}@media screen and (max-width:600px){.box-subscribe .v-form .theme--dark.v-input input,.box-subscribe .v-form .theme--dark.v-input textarea{font-size:16px}}.box-subscribe .v-form .theme--dark.v-text-field>.v-input__control>.v-input__slot:before{border-color:transparent}.box-subscribe .v-form .v-input{padding-top:0;margin-top:0}.box-subscribe .v-form .btn-summit-contact{background-color:#d0753a!important;border-color:transparent!important;box-shadow:none;margin-left:1rem;padding:0 28px;font-family:ChakraPetch;height:40px}@media screen and (max-width:600px){.box-subscribe .v-form .btn-summit-contact{padding:0 12px}}.box-subscribe .v-form .btn-summit-contact .v-btn__content{font-weight:600!important;font-size:18px}@media screen and (max-width:600px){.box-subscribe .v-form .btn-summit-contact .v-btn__content{font-weight:500!important;font-size:16px}}@media screen and (max-width:400px){.box-subscribe .v-form .btn-summit-contact .v-btn__content{font-size:14px}}.box-subscribe .v-form .v-input__slot{margin-bottom:0}.box-subscribe .v-form .v-input__slot:after,.box-subscribe .v-form .v-input__slot:before{display:none}",""]),t.exports=o},315:function(t,e,n){"use strict";n(187)},316:function(t,e,n){var o=n(9)(!1);o.push([t.i,".footer{border-top:6px solid #67c18b;background:linear-gradient(138deg,#046743,#033222);background-size:cover;text-align:center;padding:25px 20px 20px;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:ChakraPetch,Roboto,system-ui,-apple-system,Segoe UI,Ubuntu,Cantarell,Noto Sans,sans-serif;font-size:14px}@media screen and (max-width:600px){.footer .address{margin:0 10px 10px}}.footer .address,.footer .footer__bottom{color:rgba(103,193,139,.4)}.footer__community{margin-top:10px;min-height:68px}.footer__community img{width:40px;margin:10px 5px}.footer__info{display:flex;align-items:center}@media screen and (max-width:600px){.footer__info{flex-direction:column}.footer__info .contact-mail{margin-top:5px!important}}.footer__info .spacer{width:2px;height:80%;background-color:rgba(103,193,139,.4)}@media screen and (max-width:600px){.footer__info .spacer.hidden-mb{display:none}}.footer__info>div{height:100%;display:flex;align-items:center}.footer__info .footer__info-item{margin:0 10px}.footer__info .footer__info-item a{color:rgba(103,193,139,.4);text-decoration:none}",""]),t.exports=o},317:function(t,e,n){"use strict";n(188)},318:function(t,e,n){var o=n(9)(!1);o.push([t.i,".v-toolbar{height:70px!important}@media screen and (max-width:1910px){.v-toolbar{height:50px!important}}.v-toolbar__content{padding:0 10px 0 0!important;height:70px!important}@media screen and (max-width:1910px){.v-toolbar__content{height:50px!important}}.logo{width:auto;height:50px}@media screen and (max-width:1910px){.logo{height:30px}}.bg-logo{padding-left:20px;min-width:500px;height:70px;background:#106836;-webkit-clip-path:polygon(0 0,90% 0,100% 100%,0 100%);clip-path:polygon(0 0,90% 0,100% 100%,0 100%)}@media screen and (max-width:1910px){.bg-logo{height:50px;min-width:260px}}@media screen and (max-width:600px){.bg-logo{min-width:260px}}.nav-link{display:flex;align-items:center}.nav-link .theme--light.v-btn{color:#fff;font-family:ChakraPetch,Roboto,system-ui,-apple-system,Segoe UI,Ubuntu,Cantarell,Noto Sans,sans-serif;font-weight:600;text-transform:uppercase;padding:25px 30px;font-size:20px}@media screen and (max-width:1910px){.nav-link .theme--light.v-btn{padding:0 24px;font-size:16px}}.nav-link .theme--light.v-btn.active,.nav-link .theme--light.v-btn.v-btn--active{-webkit-clip-path:polygon(18% 0,100% 0,82% 100%,0 100%);clip-path:polygon(18% 0,100% 0,82% 100%,0 100%);background:red;padding:25px 40px;background:linear-gradient(90deg,#87be49 0,#87be49)}@media screen and (max-width:1910px){.nav-link .theme--light.v-btn.active,.nav-link .theme--light.v-btn.v-btn--active{-webkit-clip-path:polygon(19% 0,100% 0,81% 100%,0 100%);clip-path:polygon(19% 0,100% 0,81% 100%,0 100%);padding:0 40px}}.theme--dark.v-navigation-drawer{background:linear-gradient(-248deg,#2c703a 20%,#79ad50);box-shadow:unset}.theme--dark.v-navigation-drawer a{color:#fff;text-decoration:none}.theme--dark.v-navigation-drawer .v-navigation-drawer__content .v-list-item__title{font-weight:700;font-size:16px}",""]),t.exports=o},345:function(t,e,n){"use strict";n(193)},346:function(t,e,n){var o=n(9)(!1);o.push([t.i,'.loading-overlay{position:fixed;z-index:999;height:2em;width:2em;overflow:visible;margin:auto;top:0;left:0;bottom:0;right:0}.loading-overlay:after{content:"";display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fafafa;z-index:-1}.quiver{position:fixed;bottom:50%;left:50%;z-index:899;margin-bottom:-50px;margin-left:-50px;width:125px}.arrows{animation:equalizor .5s cubic-bezier(.77,0,.175,1) infinite alternate-reverse;vertical-align:baseline;display:inline-block;width:0;height:0;border-color:hsla(0,0%,100%,0) hsla(0,0%,100%,0) #0b486b;border-style:solid;border-width:0 10px 1px}.st{border-bottom-color:#0b486b}.nd{border-bottom-color:#3b8686}.rd{border-bottom-color:#79bd9a}.th{border-bottom-color:#a8dba8}.fth{border-bottom-color:#cff09e}span:first-child{-webkit-animation-delay:0s;animation-delay:0s}span:nth-child(2){-webkit-animation-delay:.1s;animation-delay:.1s}span:nth-child(3){-webkit-animation-delay:.2s;animation-delay:.2s}span:nth-child(4){-webkit-animation-delay:.3s;animation-delay:.3s}span:nth-child(5){-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes equalizor{0%{border-bottom-width:60px}to{border-bottom-width:1px}}@keyframes equalizor{0%{border-bottom-width:60px}to{border-bottom-width:1px}}.loading{text-transform:uppercase;color:#6ab04c;font-weight:700;font-size:26px}',""]),t.exports=o},66:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(247),n(31)),c=n(47),l=n.n(c),d=n(360),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"15f1d07f",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[219,8,1,9]]]);