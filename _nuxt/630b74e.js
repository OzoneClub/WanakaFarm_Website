(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{322:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7cf0485c",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n(322)},325:function(t,e,n){var o=n(11)(!1);o.push([t.i,".scroll-top{background-color:#1d6a65!important;border-color:#1d6a65!important}.v-toolbar{height:70px!important}@media screen and (max-width:1910px){.v-toolbar{height:50px!important}}.v-toolbar__content{padding:0 10px 0 0!important;height:70px!important}@media screen and (max-width:1910px){.v-toolbar__content{height:50px!important}}.logo{width:auto;height:50px}@media screen and (max-width:1910px){.logo{height:30px}}.bg-logo{padding-left:20px;min-width:500px;height:70px;background:#106836;-webkit-clip-path:polygon(0 0,90% 0,100% 100%,0 100%);clip-path:polygon(0 0,90% 0,100% 100%,0 100%)}@media screen and (max-width:1910px){.bg-logo{height:50px;min-width:260px}}@media screen and (max-width:600px){.bg-logo{min-width:260px}}.nav-link{display:flex;align-items:center}.nav-link .theme--light.v-btn{color:#fff;font-family:ChakraPetch,Roboto,system-ui,-apple-system,Segoe UI,Ubuntu,Cantarell,Noto Sans,sans-serif;font-weight:600;text-transform:uppercase;padding:25px 30px;font-size:20px}@media screen and (max-width:1910px){.nav-link .theme--light.v-btn{padding:0 24px;font-size:16px}}.nav-link .theme--light.v-btn.active,.nav-link .theme--light.v-btn.v-btn--active{-webkit-clip-path:polygon(18% 0,100% 0,82% 100%,0 100%);clip-path:polygon(18% 0,100% 0,82% 100%,0 100%);background:red;padding:25px 40px;background:linear-gradient(90deg,#87be49 0,#87be49)}@media screen and (max-width:1910px){.nav-link .theme--light.v-btn.active,.nav-link .theme--light.v-btn.v-btn--active{-webkit-clip-path:polygon(19% 0,100% 0,81% 100%,0 100%);clip-path:polygon(19% 0,100% 0,81% 100%,0 100%);padding:0 40px}}.theme--dark.v-navigation-drawer{background:linear-gradient(-248deg,#2c703a 20%,#79ad50);box-shadow:unset}.theme--dark.v-navigation-drawer a{color:#fff;text-decoration:none}.theme--dark.v-navigation-drawer .v-navigation-drawer__content .v-list-item__title{font-weight:700;font-size:16px}",""]),t.exports=o},326:function(t,e,n){"use strict";var o=n(329),r={data:function(){return{drawer:!1,fab:!1,isActive:[{header:!1},{feature:!1},{roadmap:!1},{teammember:!1},{partner:!1}]}},computed:{isMobile2:function(){return this.$vuetify.breakpoint.mdAndDown},options:function(){return this.isMobile2?{duration:1e3,offset:50,easing:"easeInCubic"}:{duration:1e3,offset:70,easing:"easeInCubic"}}},watch:{$route:function(t,e){var n=this;t.hash&&this.$nextTick((function(){document.querySelector(t.hash)&&n.$vuetify.goTo(t.hash,n.options)}))}},methods:{onScroll:n.n(o).a.throttle((function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>500}}),500),toTop:function(){this.$vuetify.goTo(0)},goTo:function(t){}}},d=(n(324),n(30)),l=n(49),c=n.n(l),m=n(582),v=n(569),h=n(310),w=n(122),f=n(336),x=n(332),_=n(496),k=n(321),y=n(576),C=n(570),A=n(330),T=n.n(A),P=n(328),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"pa-0",attrs:{id:"header",flat:""}},[n("div",{staticClass:"d-flex align-center",staticStyle:{width:"100%"}},[n("nuxt-link",{attrs:{to:"/"}},[n("div",{staticClass:"bg-logo d-flex align-center"},[n("img",{staticClass:"logo",attrs:{src:"/images/logo-08.svg",alt:"WANAKA"}})])]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"nav-link hidden-mobile-header"},[n("v-btn",{class:{active:t.isActive.header},attrs:{text:"",nuxt:"",to:"/"}},[t._v("\n          Home\n        ")]),t._v(" "),n("v-btn",{class:{active:t.isActive.feature},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#feature"}},nativeOn:{click:function(e){return t.goTo("#feature",t.options)}}},[t._v("\n          Features\n        ")]),t._v(" "),n("v-btn",{class:{active:t.isActive.roadmap},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#roadmap"}},nativeOn:{click:function(e){return t.goTo("#roadmap",t.options)}}},[t._v("\n          Roadmap\n        ")]),t._v(" "),n("v-btn",{class:{active:t.isActive.teammember},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#teammember"}},nativeOn:{click:function(e){return t.goTo("#teammember",t.options)}}},[t._v("\n          Team\n        ")]),t._v(" "),n("v-btn",{attrs:{text:"",nuxt:"",to:"/ecosystem"}},[t._v("Ecosystem")]),t._v(" "),n("v-btn",{attrs:{text:"",nuxt:"",to:"/papers"}},[t._v("Papers")]),t._v(" "),n("v-btn",{class:{active:t.isActive.teammember},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#partner"}},nativeOn:{click:function(e){return t.goTo("#partner",t.options)}}},[t._v("\n          Partners\n        ")]),t._v(" "),n("v-btn",{attrs:{text:"",nuxt:"",to:"/download"}},[t._v("Download")])],1),t._v(" "),n("div",{staticClass:"nav-link__icon hidden-pc"},[n("v-app-bar-nav-icon",{attrs:{dark:"",color:"rgb(227,163,93)"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1)]),t._v(" "),n("v-navigation-drawer",{staticClass:"nav-link__mobile hidden-pc",attrs:{right:"",app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",[n("nuxt-link",{attrs:{to:"/"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-list-item",{class:{active:t.isActive.header}},[n("v-list-item-title",[t._v("Home")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#feature"}},on:{click:function(e){t.drawer=!t.drawer||t.goTo("#feature",t.options)}}},[n("v-list-item",{class:{active:t.isActive.feature}},[n("v-list-item-title",[t._v("Features")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#roadmap"}},on:{click:function(e){t.drawer=!t.drawer||t.goTo("#roadmap",t.options)}}},[n("v-list-item",{class:{active:t.isActive.roadmap}},[n("v-list-item-title",[t._v("Roadmap")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#teammember"}},on:{click:function(e){t.drawer=!t.drawer||t.goTo("#teammember",t.options)}}},[n("v-list-item",{class:{active:t.isActive.teammember}},[n("v-list-item-title",[t._v("Team")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:"/ecosystem"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-list-item",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-list-item-title",[t._v("Ecosystem")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:"/papers"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-list-item",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-list-item-title",[t._v("Paper")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#partner"}},on:{click:function(e){t.drawer=!t.drawer||t.goTo("#partner",t.options)}}},[n("v-list-item",{class:{active:t.isActive.partner}},[n("v-list-item-title",[t._v("Partners")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:"/download"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-list-item",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-list-item-title",[t._v("Download")])],1)],1)],1)],1)],1),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"scroll-top",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:""},on:{click:t.toTop}},[n("v-icon",[t._v("mdi-arrow-up")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VAppBar:m.a,VAppBarNavIcon:v.a,VBtn:h.a,VIcon:w.a,VList:f.a,VListItem:x.a,VListItemGroup:_.a,VListItemTitle:k.a,VNavigationDrawer:y.a,VSpacer:C.a}),T()(component,{Scroll:P.b})},340:function(t,e,n){var content=n(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("4e6a7054",content,!0,{sourceMap:!1})},523:function(t,e,n){"use strict";n(340)},524:function(t,e,n){var o=n(11)(!1);o.push([t.i,".download-link{color:#ffe4c5!important;font-weight:medium}#download{background:url(/images/bg-7-min.jpg) 50% no-repeat;background-size:cover;padding:3rem 0 5rem;min-height:calc(100vh - 318px);height:100%;display:flex;align-items:center;justify-content:center}@media screen and (max-width:600px){#download{padding-bottom:2rem;padding-top:3rem}}.download__title img{height:50px;width:auto}@media screen and (max-width:500px){.download__title img{width:100%;height:auto}}.download-card{max-width:600px;width:100%;min-height:250px;background:url(/images/bg-download.png) 50% no-repeat;background-size:cover;padding:2rem;text-align:center;margin:1rem}@media screen and (max-width:500px){.download-card{padding:2rem 1rem}}.download__desc{color:#ffe4c5;margin-top:1rem;font-weight:500}.download__bottom{margin-top:2rem}.download__bottom .btn-download{background:#b36a30;height:54px;padding:8px 12px;border:3px solid #582710;margin:6px}.download__bottom .btn-download.disabled{cursor:no-drop;filter:grayscale(1)}@media screen and (max-width:500px){.download__bottom .btn-download{height:48px;min-width:180px}}.download__bottom .btn-download:hover{background:rgba(179,106,48,.5)}.download__bottom .btn-download img{height:100%;width:auto}",""]),t.exports=o},578:function(t,e,n){"use strict";n.r(e);var o={components:{AppHeader:n(326).a},computed:{isMobile2:function(){return this.$vuetify.breakpoint.xsOnly}}},r=(n(523),n(30)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("app-header"),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"download"}},[n("div",{staticClass:"download-card"},[n("div",{staticClass:"download__title"},[n("img",{attrs:{src:"/images/download.png",alt:""}})]),t._v(" "),n("div",{staticClass:"download__desc"},[t._v("Wanaka Farm for windows PC version")]),t._v(" "),n("div",{staticClass:"download__bottom"},[n("a",{attrs:{href:"https://assets.wanakafarm.com/app/standalone-osx/WanakaFarm.zip"}},[n("button",{staticClass:"btn-download"},[n("img",{attrs:{src:"/images/mac-download.png",alt:"macos"}})])]),t._v(" "),n("a",{attrs:{href:"https://assets.wanakafarm.com/app/standalone-win/builds/launcher/wana_setup.zip"}},[n("button",{staticClass:"btn-download"},[n("img",{attrs:{src:"/images/win-download.png",alt:"windown"}})])])]),t._v(" "),n("div",[n("a",{staticClass:"download-link",attrs:{href:"https://assets.wanakafarm.com/app/standalone-win/WanakaFarm.zip"}},[t._v("WanakaFarm.zip for windows")])])])])}],!1,null,null,null);e.default=component.exports}}]);