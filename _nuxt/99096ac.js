(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{323:function(e,t,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("7cf0485c",content,!0,{sourceMap:!1})},325:function(e,t,n){"use strict";n(323)},326:function(e,t,n){var o=n(11)(!1);o.push([e.i,".scroll-top{background-color:#82388d!important;border-color:#82388d!important}.v-toolbar{height:70px!important}@media screen and (max-width:1910px){.v-toolbar{height:50px!important}}.v-toolbar__content{padding:0 10px 0 0!important;height:70px!important}@media screen and (max-width:1910px){.v-toolbar__content{height:50px!important}}.logo{width:auto;height:50px}@media screen and (max-width:1910px){.logo{height:30px}}.bg-logo{padding-left:20px;min-width:500px;height:70px;background:#262261;-webkit-clip-path:polygon(0 0,90% 0,100% 100%,0 100%);clip-path:polygon(0 0,90% 0,100% 100%,0 100%)}@media screen and (max-width:1910px){.bg-logo{height:50px;min-width:260px}}@media screen and (max-width:600px){.bg-logo{min-width:260px}}.nav-link{display:flex;align-items:center}.nav-link .theme--light.v-btn{color:#fff;font-family:ChakraPetch,Roboto,system-ui,-apple-system,Segoe UI,Ubuntu,Cantarell,Noto Sans,sans-serif;font-weight:600;text-transform:uppercase;padding:25px 30px;font-size:20px}@media screen and (max-width:1910px){.nav-link .theme--light.v-btn{padding:0 24px;font-size:16px}}.nav-link .theme--light.v-btn.active,.nav-link .theme--light.v-btn.v-btn--active{-webkit-clip-path:polygon(18% 0,100% 0,82% 100%,0 100%);clip-path:polygon(18% 0,100% 0,82% 100%,0 100%);background:red;padding:25px 40px;background:linear-gradient(90deg,#b56cc4 0,#b56cc4)}@media screen and (max-width:1910px){.nav-link .theme--light.v-btn.active,.nav-link .theme--light.v-btn.v-btn--active{-webkit-clip-path:polygon(19% 0,100% 0,81% 100%,0 100%);clip-path:polygon(19% 0,100% 0,81% 100%,0 100%);padding:0 40px}}.theme--dark.v-navigation-drawer{background:linear-gradient(-248deg,#1d193a 20%,#3b235f);box-shadow:unset}.theme--dark.v-navigation-drawer a{color:#fff;text-decoration:none}.theme--dark.v-navigation-drawer .v-navigation-drawer__content .v-list-item__title{font-weight:700;font-size:16px}",""]),e.exports=o},327:function(e,t,n){"use strict";var o=n(330),r={data:function(){return{drawer:!1,fab:!1,isActive:[{header:!1},{feature:!1},{roadmap:!1},{teammember:!1},{partner:!1}]}},computed:{isMobile2:function(){return this.$vuetify.breakpoint.mdAndDown},options:function(){return this.isMobile2?{duration:1e3,offset:50,easing:"easeInCubic"}:{duration:1e3,offset:70,easing:"easeInCubic"}}},watch:{$route:function(e,t){var n=this;e.hash&&this.$nextTick((function(){document.querySelector(e.hash)&&n.$vuetify.goTo(e.hash,n.options)}))}},methods:{onScroll:n.n(o).a.throttle((function(e){if("undefined"!=typeof window){var t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>500}}),500),toTop:function(){this.$vuetify.goTo(0)},goTo:function(e){}}},c=(n(325),n(30)),l=n(49),d=n.n(l),v=n(582),m=n(569),h=n(311),f=n(122),y=n(337),w=n(333),_=n(497),k=n(322),x=n(576),P=n(570),T=n(331),W=n.n(T),F=n(329),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{staticClass:"pa-0",attrs:{id:"header",flat:""}},[n("div",{staticClass:"d-flex align-center",staticStyle:{width:"100%"}},[n("nuxt-link",{attrs:{to:"/"}},[n("div",{staticClass:"bg-logo d-flex align-center"},[n("img",{staticClass:"logo",attrs:{src:"/images/logo-08.svg",alt:"WANAKA"}})])]),e._v(" "),n("v-spacer"),e._v(" "),n("div",{staticClass:"nav-link hidden-mobile-header"},[n("v-btn",{class:{active:e.isActive.header},attrs:{text:"",nuxt:"",to:"/"}},[e._v("\n          Home\n        ")]),e._v(" "),n("v-btn",{class:{active:e.isActive.feature},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#feature"}},nativeOn:{click:function(t){return e.goTo("#feature",e.options)}}},[e._v("\n          Features\n        ")]),e._v(" "),n("v-btn",{class:{active:e.isActive.roadmap},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#roadmap"}},nativeOn:{click:function(t){return e.goTo("#roadmap",e.options)}}},[e._v("\n          Roadmap\n        ")]),e._v(" "),n("v-btn",{class:{active:e.isActive.teammember},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#teammember"}},nativeOn:{click:function(t){return e.goTo("#teammember",e.options)}}},[e._v("\n          Team\n        ")]),e._v(" "),n("v-btn",{attrs:{text:"",nuxt:"",to:"/ecosystem"}},[e._v("Ecosystem")]),e._v(" "),n("v-btn",{attrs:{text:"",nuxt:"",to:"/papers"}},[e._v("Papers")]),e._v(" "),n("v-btn",{class:{active:e.isActive.teammember},attrs:{text:"",nuxt:"",to:{path:"/",hash:"#partner"}},nativeOn:{click:function(t){return e.goTo("#partner",e.options)}}},[e._v("\n          Partners\n        ")]),e._v(" "),n("v-btn",{attrs:{text:"",nuxt:"",to:"/download"}},[e._v("Download")])],1),e._v(" "),n("div",{staticClass:"nav-link__icon hidden-pc"},[n("v-app-bar-nav-icon",{attrs:{dark:"",color:"rgb(227,163,93)"},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1)],1)]),e._v(" "),n("v-navigation-drawer",{staticClass:"nav-link__mobile hidden-pc",attrs:{right:"",app:"",dark:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",[n("nuxt-link",{attrs:{to:"/"},on:{click:function(t){e.drawer=!e.drawer}}},[n("v-list-item",{class:{active:e.isActive.header}},[n("v-list-item-title",[e._v("Home")])],1)],1),e._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#feature"}},on:{click:function(t){e.drawer=!e.drawer||e.goTo("#feature",e.options)}}},[n("v-list-item",{class:{active:e.isActive.feature}},[n("v-list-item-title",[e._v("Features")])],1)],1),e._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#roadmap"}},on:{click:function(t){e.drawer=!e.drawer||e.goTo("#roadmap",e.options)}}},[n("v-list-item",{class:{active:e.isActive.roadmap}},[n("v-list-item-title",[e._v("Roadmap")])],1)],1),e._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#teammember"}},on:{click:function(t){e.drawer=!e.drawer||e.goTo("#teammember",e.options)}}},[n("v-list-item",{class:{active:e.isActive.teammember}},[n("v-list-item-title",[e._v("Team")])],1)],1),e._v(" "),n("nuxt-link",{attrs:{to:"/ecosystem"},on:{click:function(t){e.drawer=!e.drawer}}},[n("v-list-item",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[n("v-list-item-title",[e._v("Ecosystem")])],1)],1),e._v(" "),n("nuxt-link",{attrs:{to:"/papers"},on:{click:function(t){e.drawer=!e.drawer}}},[n("v-list-item",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[n("v-list-item-title",[e._v("Paper")])],1)],1),e._v(" "),n("nuxt-link",{attrs:{to:{path:"/",hash:"#partner"}},on:{click:function(t){e.drawer=!e.drawer||e.goTo("#partner",e.options)}}},[n("v-list-item",{class:{active:e.isActive.partner}},[n("v-list-item-title",[e._v("Partners")])],1)],1),e._v(" "),n("nuxt-link",{attrs:{to:"/download"},on:{click:function(t){e.drawer=!e.drawer}}},[n("v-list-item",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[n("v-list-item-title",[e._v("Download")])],1)],1)],1)],1)],1),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"}],staticClass:"scroll-top",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:""},on:{click:e.toTop}},[n("v-icon",[e._v("mdi-arrow-up")])],1)],1)}),[],!1,null,null,null);t.a=component.exports;d()(component,{VAppBar:v.a,VAppBarNavIcon:m.a,VBtn:h.a,VIcon:f.a,VList:y.a,VListItem:w.a,VListItemGroup:_.a,VListItemTitle:k.a,VNavigationDrawer:x.a,VSpacer:P.a}),W()(component,{Scroll:F.b})},344:function(e,t,n){var content=n(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("ce753880",content,!0,{sourceMap:!1})},530:function(e,t,n){"use strict";n(344)},531:function(e,t,n){var o=n(11)(!1);o.push([e.i,'.teams{font-family:"ChakraPetch";font-weight:400;background:linear-gradient(138deg,#3b235f,#140e3b)!important;position:relative;z-index:3}.jss1{color:#fff;padding:60px 100px}@media screen and (max-width:600px){.jss1{padding:40px 0}}.jss4,.jss5{text-align:center}.jss5{margin-top:25px}.jss2{margin-top:50px}.jss3 p,.jss3>div{margin-top:30px}',""]),e.exports=o},579:function(e,t,n){"use strict";n.r(t);var o={components:{AppHeader:n(327).a}},r=(n(530),n(30)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("app-header"),e._v(" "),e._m(0)],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"teams"},[n("div",{staticClass:"c-container"},[n("div",{staticClass:"jss1"},[n("h1",{staticClass:"jss4"},[e._v("Privacy Policy")]),e._v(" "),n("p",{staticClass:"jss5"},[e._v("Last Updated: [Aug 20, 2021]")]),e._v(" "),n("section",{staticClass:"jss2"},[n("p",[e._v("\n            This Privacy Policy describes how Wanaka Farm (referred to herein as\n            “Wanaka Farm”, “we”, “us” or “our”), a company formed pursuant to the\n            laws of the Republic of Panama, will manage end user’s personal data\n            collected. This Policy, in consonance with our Terms, applies to\n            your use of Wanaka Farm platform.\n          ")]),e._v(" "),n("p",[e._v("\n            By accessing the platform and using our services, you consent to the\n            collection, storage, use, and disclosure of your personal data, in\n            accordance with this Privacy Policy. We will not collect any\n            information from you, except where it is knowingly and explicitly\n            provided by you.\n          ")]),e._v(" "),n("p",[e._v("\n            Wanaka Farm is committed to respecting your privacy and ensuring that\n            the personal data we collect about you is protected and is used,\n            stored and disclosed in accordance with this Privacy Policy. Please\n            read this Policy carefully to understand our practices regarding\n            your personal data and how we will treat it. If you do not agree\n            with this Privacy Policy, please do not use our services or provide\n            Wanaka Farm platforms with your personal data.\n          ")])]),e._v(" "),n("section",{staticClass:"jss3"},[n("div",[n("h2",[e._v("1. Reasons We Collect Your Data")]),e._v(" "),n("p",[e._v("\n              1.1. Wanaka Farm will collect your Personal Data only by lawful and\n              fair means for the following purposes. One or more purposes may\n              apply simultaneously.\n            ")]),e._v(" "),n("ul",[n("li",[e._v("To verify your identity for security purposes;")]),e._v(" "),n("li",[e._v("\n                To provide services to you as a user, for example, processing\n                your requests or managing your account;\n              ")]),e._v(" "),n("li",[e._v("To update you on technical progress of Wanaka Farm;")]),e._v(" "),n("li",[e._v("\n                To contact you in relation to the management and administration\n                of your Wanaka Farm account\n              ")]),e._v(" "),n("li",[e._v("\n                To email you our newsletter or communicate with you in other\n                form about our products or services that we think may be of\n                interest to you;\n              ")]),e._v(" "),n("li",[e._v("\n                To take appropriate action if Wanaka Farm has reason to suspect\n                that unlawful activity or misconduct of a serious nature has\n                been, is being or may be engaged in that relates to our\n                functions and activities;\n              ")]),e._v(" "),n("li",[e._v("To comply with a legal or regulatory obligation.")])]),e._v(" "),n("p",[e._v("\n              1.2. You may choose to deal with us on an anonymous basis or to\n              use a pseudonym unless it is not practicable for us to deal with\n              individuals who we cannot identify or we are required by law to\n              only deal with identified individuals. Also, if you do not provide\n              Wanaka Farm with the Personal Data we request, we may be unable to\n              process your request to become a User, provide you with our\n              services or respond to your enquiry or complaint. Examples of\n              Personal Data That may be collected by Wanaka Farm include your name,\n              email address, telephone numbers, your date of birth, other\n              verification information such as your Service usage activities. By\n              becoming a User or otherwise choosing to provide Wanaka Farm with\n              Personal Data You consent to Wanaka Farm collecting, using and\n              disclosing your Personal Data For the above purposes.\n            ")])]),e._v(" "),n("div",[n("h2",[e._v("2. Types of Data We Collect")]),e._v(" "),n("p",[e._v("\n              2.1. The types of Personal Data that Wanaka Farm may collect from you\n              are:\n            ")]),e._v(" "),n("ul",[n("li",[e._v("\n                Personal identification information: name, email address,\n                country, date of birth, nationality, photo of identification\n                document (national ID card or passport), photo of you holding\n                your identification document;\n              ")]),e._v(" "),n("li",[e._v("User non-custodial wallet address, telegram username.")])]),e._v(" "),n("p",[e._v("\n              2.2. With regard to each of your visits to our Wanaka Farm platform\n              and access to the services we may automatically collect the\n              following information:\n            ")]),e._v(" "),n("ul",[n("li",[e._v("Transaction data including purchases of crypto assets;")]),e._v(" "),n("li",[e._v("\n                The smart contract stored in your non-custodial wallet address;\n              ")]),e._v(" "),n("li",[e._v("\n                Technical data including IP address, time zone setting and\n                locations, operating system, and other technologies on your\n                device used to access the platform;\n              ")]),e._v(" "),n("li",[e._v("\n                Information about your visits, including the full Uniform\n                Resource Locators (URL) clickstream to, through and from the Red\n                Kite (including date and time);\n              ")]),e._v(" "),n("li",[e._v("\n                Products or pools you viewed or searched for; page response\n                times, download errors, length of visits to certain pages, page\n                interaction information (such as scrolling, clicks, and\n                mouse-overs), and methods used to browse away from the page;\n              ")]),e._v(" "),n("li",[e._v("\n                Information regarding the provision of Wanaka Farm services we\n                might receive from any other sources.\n              ")])])]),e._v(" "),n("div",[n("h2",[e._v("3. Collection of Your Data")]),e._v(" "),n("p",[e._v("\n              3.1. You directly provide Wanaka Farm with most of the data we\n              collect. We collect data and process data when you:\n            ")]),e._v(" "),n("ul",[n("li",[e._v("Register online and use the Wanaka Farm platform services;")]),e._v(" "),n("li",[e._v("\n                Voluntarily complete a Client survey or provide feedback on any\n                of our message boards or via email;\n              ")]),e._v(" "),n("li",[e._v("\n                Contact us, we will keep a record of the information shared\n                during the correspondence.\n              ")])]),e._v(" "),n("p",[e._v("\n              3.2. Additionally, we may receive information about you from\n              publicly available sources and collect technical and usage data\n              automatically when you use our services. For example, we may\n              aggregate your usage data to calculate the percentage of users\n              accessing a specific feature of the services.\n            ")])]),e._v(" "),n("div",[n("h2",[e._v("Management of Your Data")]),e._v(" "),n("p",[e._v("\n              4.1. Wanaka Farm will take all reasonable steps to ensure that the\n              Personal Data which it collects, uses or discloses is correct and\n              is stored in a secure environment which is accessed only by\n              authorised persons.\n            ")]),e._v(" "),n("p",[e._v("\n              4.2. Wanaka Farm will destroy or permanently de-identify the Personal\n              Data we hold when it is no longer required for any purpose\n              permitted.\n            ")])]),e._v(" "),n("div",[n("h2",[e._v("5. Security of Your Data")]),e._v(" "),n("p",[e._v("\n              5.1. The security of your Personal Data is important to us, but\n              remember that no method of transmission over the Internet, or\n              method of electronic storage is totally secure. Therefore, we\n              cannot warrant its absolute security of any information which you\n              transmit. Any information which you transmit to Wanaka Farm is\n              transmitted at your own risk.\n            ")]),e._v(" "),n("p",[e._v("\n              Remember to always log out of your account when you have completed\n              your time on the website. This is particularly important if you\n              share a computer with another person. You are responsible for the\n              security of and access to your own computer, mobile device or any\n              other handset used to access the website.\n            ")]),e._v(" "),n("p",[e._v("\n              Ultimately, you are solely responsible for maintaining the secrecy\n              of your username, password and any account information. Please be\n              careful whenever using the Internet and our website.\n            ")]),e._v(" "),n("p",[e._v("\n              5.2. However, we strive to use commercially acceptable means to\n              protect your Personal Data, from misuse, loss and unauthorised\n              access, modification and disclosure including by using password\n              protected systems and databases and security technology. Wanaka Farm\n              employees, agents and contractors are required to maintain the\n              confidentiality of users’ Personal Information and trading\n              behaviour. We will comply with the requirements of applicable laws\n              in the event of a data or security risk.\n            ")])]),e._v(" "),n("div",[n("h2",[e._v("6. Law Enforcement")]),e._v(" "),n("p",[e._v("\n              Under certain circumstances, Wanaka Farm may be required to disclose\n              your Personal Data if required to do so by law or in response to\n              valid requests by public authorities (e.g., a court or a\n              government agency).\n            ")])]),e._v(" "),n("div",[n("h2",[e._v("7. Business Transactions")]),e._v(" "),n("p",[e._v("\n              You are aware that if Wanaka Farm is ever involved in a merger,\n              acquisition by another organisation or goes through asset sale,\n              your personal data might be among the assets transferred. We will\n              provide notice before your Personal Data is transferred and\n              becomes subject to a different Privacy Policy.\n            ")])]),e._v(" "),n("div",[n("h2",[e._v("8. Link to Other Third Parties")]),e._v(" "),n("p",[e._v("\n              Under certain circumstances, Wanaka Farm may be required to disclose\n              your Personal Data if required to do so by law or in response to\n              valid requests by public authorities (e.g., a court or a\n              government agency).\n            ")])]),e._v(" "),n("div",[n("h2",[e._v("9. Contact Details")]),e._v(" "),n("p",[e._v("\n              If you believe that someone has provided us with your Personal\n              Data and you would like to request that it be removed from our\n              database, please contact us at our contact email as specified\n              below. Besides, if you have any queries, requests for access or\n              correction or complaints relating to the handling of your personal\n              data, please also contact us by email.\n            ")]),e._v(" "),n("p",[e._v("\n              Email:\n              "),n("a",{attrs:{href:"support@wanakafarm.com",target:"_blank"}},[e._v("support@wanakafarm.com")])])])])])])])}],!1,null,null,null);t.default=component.exports}}]);