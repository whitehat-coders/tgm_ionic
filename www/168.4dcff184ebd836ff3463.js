(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{Gc5z:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=(u("OO+k"),u("HNzf")),e=u("e8Qb"),r=function(){function n(n,l,u,t,o){this.appService=n,this.httpClient=l,this.nativeStorage=u,this.router=t,this.toastController=o,this.currentUser={},console.log("+++ account constructor")}return n.prototype.navigate=function(n){this.router.navigate([n])},n.prototype.ngOnInit=function(){},n.prototype.doFacebookLogout=function(){return n=this,void 0,u=function(){return function(n,l){var u,t,o,e,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return e={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function a(e){return function(a){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;r;)try{if(u=1,t&&(o=2&e[0]?t.return:e[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,e[1])).done)return o;switch(t=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return r.label++,{value:e[1],done:!1};case 5:r.label++,t=e[1],e=[0];continue;case 7:e=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){r=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){r.label=e[1];break}if(6===e[0]&&r.label<o[1]){r.label=o[1],o=e;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(e);break}o[2]&&r.ops.pop(),r.trys.pop();continue}e=l.call(n,r)}catch(a){e=[6,a],t=0}finally{u=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,a])}}}(this,function(n){switch(n.label){case 0:return console.log("+++ logging out facebook..."),this.nativeStorage.remove("current_user"),[4,this.toastController.create({message:"Logged out.",duration:2e3})];case 1:return n.sent().present(),[2]}})},new((l=void 0)||(l=Promise))(function(t,o){function e(n){try{a(u.next(n))}catch(l){o(l)}}function r(n){try{a(u.throw(n))}catch(l){o(l)}}function a(n){n.done?t(n.value):new l(function(l){l(n.value)}).then(e,r)}a((u=u.apply(n,[])).next())});var n,l,u},n}(),a=function(){return function(){}}(),c=u("pMnS"),i=u("ra/t"),b=u("ntG5"),p=u("M9A9"),s=u("ZYCi"),f=u("tXrQ"),h=u("Ip0R"),g=u("t/Na"),v=u("P87I"),w=t.nb({encapsulation:0,styles:[[""]],data:{}});function d(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,7,"ion-item",[["button",""]],null,[[null,"click"]],function(n,l,u){var o=!0,e=n.component;return"click"===l&&(o=!1!==t.zb(n,2).onClick(u)&&o),"click"===l&&(o=!1!==e.doFacebookLogout()&&o),o},i.v,i.h)),t.ob(1,49152,null,0,b.C,[t.h,t.k],{button:[0,"button"]},null),t.ob(2,16384,null,0,p.a,[[2,s.n],f.a,t.k],null,null),(n()(),t.pb(3,0,null,0,1,"ion-icon",[["name","power"],["slot","start"]],null,null,null,i.u,i.g)),t.ob(4,49152,null,0,b.x,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.pb(5,0,null,0,2,"ion-label",[],null,null,null,i.w,i.i)),t.ob(6,49152,null,0,b.I,[t.h,t.k],null,null),(n()(),t.Db(-1,0,[" Logout "]))],function(n,l){n(l,1,0,""),n(l,4,0,"power")},null)}function k(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,12,"ion-content",[["padding",""]],null,null,null,i.s,i.e)),t.ob(1,49152,null,0,b.p,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,8,"ul",[],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["name:"])),(n()(),t.Db(6,null,[" ",""])),(n()(),t.pb(7,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t.pb(8,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["email:"])),(n()(),t.Db(10,null,[" ",""])),(n()(),t.gb(16777216,null,0,1,null,d)),t.ob(12,16384,null,0,h.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,12,0,l.component.currentUser)},function(n,l){var u=l.component;n(l,6,0,u.currentUser.name),n(l,10,0,u.currentUser.email)})}function x(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,1,"app-account",[],null,null,null,k,w)),t.ob(1,114688,null,0,r,[e.a,g.c,o.a,s.n,v.a],null,null)],function(n,l){n(l,1,0)},null)}var y=t.lb("app-account",r,x,{},{},[]),m=u("gIcY"),I=u("95zI"),C=u("9opb"),S=u("apKv"),j=u("B4/3");u.d(l,"AccountPageModuleNgFactory",function(){return z});var z=t.mb(a,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[c.a,y]],[3,t.j],t.x]),t.xb(4608,h.k,h.j,[t.u,[2,h.r]]),t.xb(4608,m.c,m.c,[]),t.xb(4608,I.a,I.a,[t.z,t.g]),t.xb(4608,C.a,C.a,[I.a,t.j,t.q]),t.xb(4608,S.a,S.a,[I.a,t.j,t.q]),t.xb(1073742336,h.b,h.b,[]),t.xb(1073742336,m.b,m.b,[]),t.xb(1073742336,m.a,m.a,[]),t.xb(1073742336,j.a,j.a,[]),t.xb(1073742336,s.q,s.q,[[2,s.w],[2,s.n]]),t.xb(1073742336,a,a,[]),t.xb(1024,s.l,function(){return[[{path:"",component:r}]]},[])])})}}]);