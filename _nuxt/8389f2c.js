(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{322:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7cf0485c",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n(322)},325:function(t,e,n){var o=n(11)(!1);o.push([t.i,".scroll-top{background-color:#1d6a65!important;border-color:#1d6a65!important}.v-toolbar{height:70px!important}@media screen and (max-width:1910px){.v-toolbar{height:50px!important}}.v-toolbar__content{padding:0 10px 0 0!important;height:70px!important}@media screen and (max-width:1910px){.v-toolbar__content{height:50px!important}}.logo{width:auto;height:50px}@media screen and (max-width:1910px){.logo{height:30px}}.bg-logo{padding-left:20px;min-width:500px;height:70px;background:#106836;-webkit-clip-path:polygon(0 0,90% 0,100% 100%,0 100%);clip-path:polygon(0 0,90% 0,100% 100%,0 100%)}@media screen and (max-width:1910px){.bg-logo{height:50px;min-width:260px}}@media screen and (max-width:600px){.bg-logo{min-width:260px}}.nav-link{display:flex;align-items:center}.nav-link .theme--light.v-btn{color:#fff;font-family:ChakraPetch,Roboto,system-ui,-apple-system,Segoe UI,Ubuntu,Cantarell,Noto Sans,sans-serif;font-weight:600;text-transform:uppercase;padding:25px 30px;font-size:20px}@media screen and (max-width:1910px){.nav-link .theme--light.v-btn{padding:0 24px;font-size:16px}}.nav-link .theme--light.v-btn.active,.nav-link .theme--light.v-btn.v-btn--active{-webkit-clip-path:polygon(18% 0,100% 0,82% 100%,0 100%);clip-path:polygon(18% 0,100% 0,82% 100%,0 100%);background:red;padding:25px 40px;background:linear-gradient(90deg,#87be49 0,#87be49)}@media screen and (max-width:1910px){.nav-link .theme--light.v-btn.active,.nav-link .theme--light.v-btn.v-btn--active{-webkit-clip-path:polygon(19% 0,100% 0,81% 100%,0 100%);clip-path:polygon(19% 0,100% 0,81% 100%,0 100%);padding:0 40px}}.theme--dark.v-navigation-drawer{background:linear-gradient(-248deg,#2c703a 20%,#79ad50);box-shadow:unset}.theme--dark.v-navigation-drawer a{color:#fff;text-decoration:none}.theme--dark.v-navigation-drawer .v-navigation-drawer__content .v-list-item__title{font-weight:700;font-size:16px}",""]),t.exports=o},326:function(t,e,n){"use strict";var o=n(329),c={data:function(){return{drawer:!1,fab:!1,isActive:[{header:!1},{feature:!1},{roadmap:!1},{teammember:!1},{partner:!1}]}},computed:{isMobile2:function(){return this.$vuetify.breakpoint.mdAndDown},options:function(){return this.isMobile2?{duration:1e3,offset:50,easing:"easeInCubic"}:{duration:1e3,offset:70,easing:"easeInCubic"}}},watch:{$route:function(t,e){var n=this;t.hash&&this.$nextTick((function(){document.querySelector(t.hash)&&n.$vuetify.goTo(t.hash,n.options)}))}},methods:{onScroll:n.n(o).a.throttle((function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>500}}),500),toTop:function(){this.$vuetify.goTo(0)},goTo:function(t){}}},r=(n(324),n(30)),m=n(49),l=n.n(m),d=n(582),v=n(569),_=n(310),h=n(122),x=n(336),f=n(332),y=n(496),w=n(321),k=n(576),C=n(570),T=n(330),A=n.n(T),$=n(328),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"pa-0",attrs:{id:"header",flat:""}},[n("div",{staticClass:"d-flex align-center",staticStyle:{width:"100%"}},[n("nuxt-link",{attrs:{to:"/"}},[n("div",{staticClass:"bg-logo d-flex align-center"},[n("img",{staticClass:"logo",attrs:{src:"/images/logo-08.svg",alt:"WANAKA"}})])]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"nav-link hidden-mobile-header"},[n("v-btn",{class:{active:t.isActive.header},attrs:{text:"",nuxt:"",to:"/"}},[t._v("\n          Home\n        ")]),t._v(" "),n("v-btn",{class:{active:t.isActive.feature},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#feature"}},nativeOn:{click:function(e){return t.goTo("#feature",t.options)}}},[t._v("\n          Features\n        ")]),t._v(" "),n("v-btn",{class:{active:t.isActive.roadmap},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#roadmap"}},nativeOn:{click:function(e){return t.goTo("#roadmap",t.options)}}},[t._v("\n          Roadmap\n        ")]),t._v(" "),n("v-btn",{class:{active:t.isActive.teammember},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#teammember"}},nativeOn:{click:function(e){return t.goTo("#teammember",t.options)}}},[t._v("\n          Team\n        ")]),t._v(" "),n("v-btn",{attrs:{text:"",nuxt:"",to:"/ecosystem"}},[t._v("Ecosystem")]),t._v(" "),n("v-btn",{attrs:{text:"",nuxt:"",to:"/papers"}},[t._v("Papers")]),t._v(" "),n("v-btn",{class:{active:t.isActive.teammember},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#partner"}},nativeOn:{click:function(e){return t.goTo("#partner",t.options)}}},[t._v("\n          Partners\n        ")]),t._v(" "),n("v-btn",{attrs:{text:"",nuxt:"",to:"/download"}},[t._v("Download")])],1),t._v(" "),n("div",{staticClass:"nav-link__icon hidden-pc"},[n("v-app-bar-nav-icon",{attrs:{dark:"",color:"rgb(227,163,93)"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1)]),t._v(" "),n("v-navigation-drawer",{staticClass:"nav-link__mobile hidden-pc",attrs:{right:"",app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",[n("nuxt-link",{attrs:{to:"/"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-list-item",{class:{active:t.isActive.header}},[n("v-list-item-title",[t._v("Home")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#feature"}},on:{click:function(e){t.drawer=!t.drawer||t.goTo("#feature",t.options)}}},[n("v-list-item",{class:{active:t.isActive.feature}},[n("v-list-item-title",[t._v("Features")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#roadmap"}},on:{click:function(e){t.drawer=!t.drawer||t.goTo("#roadmap",t.options)}}},[n("v-list-item",{class:{active:t.isActive.roadmap}},[n("v-list-item-title",[t._v("Roadmap")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#teammember"}},on:{click:function(e){t.drawer=!t.drawer||t.goTo("#teammember",t.options)}}},[n("v-list-item",{class:{active:t.isActive.teammember}},[n("v-list-item-title",[t._v("Team")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:"/ecosystem"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-list-item",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-list-item-title",[t._v("Ecosystem")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:"/papers"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-list-item",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-list-item-title",[t._v("Paper")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#partner"}},on:{click:function(e){t.drawer=!t.drawer||t.goTo("#partner",t.options)}}},[n("v-list-item",{class:{active:t.isActive.partner}},[n("v-list-item-title",[t._v("Partners")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:"/download"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-list-item",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-list-item-title",[t._v("Download")])],1)],1)],1)],1)],1),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"scroll-top",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:""},on:{click:t.toTop}},[n("v-icon",[t._v("mdi-arrow-up")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VAppBar:d.a,VAppBarNavIcon:v.a,VBtn:_.a,VIcon:h.a,VList:x.a,VListItem:f.a,VListItemGroup:y.a,VListItemTitle:w.a,VNavigationDrawer:k.a,VSpacer:C.a}),A()(component,{Scroll:$.b})},341:function(t,e,n){var content=n(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("5559569c",content,!0,{sourceMap:!1})},525:function(t,e,n){"use strict";n(341)},526:function(t,e,n){var o=n(11)(!1);o.push([t.i,".bg-title-eco{margin:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;background:#eec028;padding:10px 20px;font-size:28px;font-weight:700;font-family:ChakraPetch;border:2px solid #d4a629;border-radius:8px}@media screen and (max-width:1910px){.bg-title-eco{font-size:21px}}#ecosystem{background:url(/images/bg-7-min.jpg) 50% no-repeat;background-size:cover;padding:3rem 0 5rem;min-height:calc(100vh - 318px);height:100%;justify-content:center}#ecosystem,.ecosystem__title{display:flex;align-items:center}.ecosystem__title{background:url(/images/word-1.svg) 50% no-repeat;background-size:cover;height:60px;width:-webkit-min-content;width:-moz-min-content;width:min-content;padding:0 30px 0 20px;font-size:48px;font-family:CreakyFrank;margin:auto auto 5rem}@media screen and (max-width:1910px){.ecosystem__title{font-size:40px;margin-bottom:3rem}}@media screen and (max-width:600px){.ecosystem__title{font-size:32px}}.ecosystem__title img{margin-right:8px;height:40px}@media screen and (max-width:600px){.ecosystem__title img{height:30px}}.ecosystem__content{display:flex;justify-content:center;margin-top:3rem;flex-wrap:wrap}@media screen and (max-width:1910px){.ecosystem__content{margin-top:2rem}}.ecosystem__content .ecosystem__item .ecosystem__logo{border-radius:8px;width:65px;height:65px;background:#fff;display:flex;align-items:center;justify-content:center;padding:10px}@media screen and (max-width:1910px){.ecosystem__content .ecosystem__item .ecosystem__logo{width:50px;height:50px}}@media screen and (max-width:600px){.ecosystem__content .ecosystem__item .ecosystem__logo{min-width:45px;min-height:45px;max-width:45px;max-height:45px;padding:5px}}@media screen and (max-width:370px){.ecosystem__content .ecosystem__item .ecosystem__logo{min-width:45px;min-height:45px;max-width:45px;max-height:45px}}.ecosystem__item{position:relative;width:280px;margin:10px 28px;font-size:22px;line-height:1.2}.ecosystem__item img{width:100%;max-height:100%}@media screen and (max-width:1910px){.ecosystem__item{width:220px;margin:8px 20px;font-size:16px}}@media screen and (max-width:600px){.ecosystem__item{margin:10px;width:185px}}@media screen and (max-width:370px){.ecosystem__item{width:200px}}.ecosystem__item-content{position:absolute;top:41%;left:18%;transform:translateY(-50%);display:flex;align-items:center;font-family:ChakraPetch,Roboto,system-ui,-apple-system,Segoe UI,Ubuntu,Cantarell,Noto Sans,sans-serif;font-weight:700;width:82%}@media screen and (max-width:1910px){.ecosystem__item-content{left:18%}}.ecosystem__item-content .ecosystem__name{margin-left:45px;max-width:90px}@media screen and (max-width:1910px){.ecosystem__item-content .ecosystem__name{margin-left:15%}}@media screen and (max-width:600px){.ecosystem__item-content .ecosystem__name{margin-left:19%;max-width:90px;line-height:1.1}}@media screen and (max-width:370px){.ecosystem__item-content .ecosystem__name{margin-left:17%}}",""]),t.exports=o},574:function(t,e,n){"use strict";n.r(e);var o={computed:{isMobile2:function(){return this.$vuetify.breakpoint.xsOnly}}},c=(n(525),n(30)),r={components:{Ecosystem:Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ecosystem"}},[n("div",{staticClass:"c-container"},[n("div",{staticClass:"ecosystem__title",attrs:{"data-aos":t.isMobile2?"":"fade-left","data-aos-delay":"200"}},[n("img",{staticClass:"ecosystem__bg",attrs:{src:"/images/icon-title.svg",alt:""}}),t._v("\n      Ecosystem\n    ")]),t._v(" "),n("div",{staticClass:"ecosystem__content",attrs:{"data-aos":t.isMobile2?"":"fade-right","data-aos-delay":"400"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),n("div",{staticClass:"ecosystem__content",attrs:{"data-aos":t.isMobile2?"":"fade-left","data-aos-delay":"400"}},[t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ecosystem__item"},[n("img",{attrs:{src:"/images/icon-29.svg",alt:""}}),t._v(" "),n("div",{staticClass:"ecosystem__item-content"},[n("div",{staticClass:"ecosystem__logo"},[n("img",{attrs:{src:"/images/bsc.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"ecosystem__name"},[t._v("Binance smart chain")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ecosystem__item"},[n("img",{attrs:{src:"/images/icon-29.svg",alt:""}}),t._v(" "),n("div",{staticClass:"ecosystem__item-content"},[n("div",{staticClass:"ecosystem__logo"},[n("img",{attrs:{src:"/images/tron.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"ecosystem__name"},[t._v("Tron")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ecosystem__item"},[n("img",{attrs:{src:"/images/icon-29.svg",alt:""}}),t._v(" "),n("div",{staticClass:"ecosystem__item-content"},[n("div",{staticClass:"ecosystem__logo"},[n("img",{attrs:{src:"/images/polygon.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"ecosystem__name"},[t._v("Polygon")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ecosystem__item"},[n("img",{attrs:{src:"/images/icon-29.svg",alt:""}}),t._v(" "),n("div",{staticClass:"ecosystem__item-content"},[n("div",{staticClass:"ecosystem__logo"},[n("img",{attrs:{src:"/images/solana.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"ecosystem__name"},[t._v("Solana")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ecosystem__item"},[n("img",{attrs:{src:"/images/icon-29.svg",alt:""}}),t._v(" "),n("div",{staticClass:"ecosystem__item-content"},[n("div",{staticClass:"ecosystem__logo"},[n("img",{attrs:{src:"/images/babilons.png",alt:""}})]),t._v(" "),n("div",{staticClass:"ecosystem__name"},[t._v("Babylons")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ecosystem__item"},[n("img",{attrs:{src:"/images/icon-29.svg",alt:""}}),t._v(" "),n("div",{staticClass:"ecosystem__item-content"},[n("div",{staticClass:"ecosystem__logo"},[n("img",{attrs:{src:"/images/bsc.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"ecosystem__name"},[t._v("Binance NFT")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ecosystem__item"},[n("img",{attrs:{src:"/images/icon-29.svg",alt:""}}),t._v(" "),n("div",{staticClass:"ecosystem__item-content"},[n("div",{staticClass:"ecosystem__logo"},[n("img",{attrs:{src:"/images/mochi.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"ecosystem__name"},[t._v("Mochi market")])])])}],!1,null,null,null).exports,AppHeader:n(326).a}},m=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("app-header"),t._v(" "),n("ecosystem")],1)}),[],!1,null,null,null);e.default=m.exports}}]);