(this.webpackJsonpbed_management_frontend=this.webpackJsonpbed_management_frontend||[]).push([[0],{113:function(e,t,a){e.exports=a(152)},118:function(e,t,a){},119:function(e,t,a){},146:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(12),i=a.n(r),u=(a(118),a(25)),c=a(26),o=function(){function e(){Object(u.a)(this,e),this.authKey=null,this.authKey=window.localStorage.getItem("authKey")}return Object(c.a)(e,[{key:"auth",value:function(e){return this.authKey=e,window.localStorage.setItem("authKey",this.authKey),this.authKey}},{key:"getKey",value:function(){return this.authKey}},{key:"isAuthenticated",value:function(){return null!==this.authKey}},{key:"logoff",value:function(){return window.localStorage.removeItem("authKey"),this.authKey=null,!0}}]),e}(),s=a(57),m=a(58),b=(a(119),a(156)),h=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).updateText=function(t){var a=t.target.value;e.setState({textInput:a})},e.authenticate=function(){e.state.textInput&&""!==e.state.textInput&&e.auth.auth(e.state.textInput),window.location.reload()},e.state={textInput:""},e.auth=new o,e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"AuthView"},l.a.createElement(b.c,{tagName:"h1"},"Gib deine user ID ein"),l.a.createElement("input",{className:"input",value:this.state.textInput,onChange:this.updateText,autoFocus:!0}),l.a.createElement(b.a,{rightIcon:"arrow-right",intent:"success",className:"button",onClick:this.authenticate}),l.a.createElement(b.c,{tagName:"p"},"Bei fragen, schick uns eine email."))}}]),a}(n.Component),p=a(24),d=a(30),g=a(21),f=a.n(g),E=a(31),v=a(17);a(146);function O(){var e=Object(d.a)(["\nmutation updateNumberOfAvailableBeds($input: UpdateNumberOfAvailableBedsInput!){\n      updateNumberOfAvailableBeds(input: $input) {\n        success\n      }\n    }\n"]);return O=function(){return e},e}function N(){var e=Object(d.a)(["\nmutation updateNumberOfBeds($input: UpdateNumberOfBedsInput!){\n      updateNumberOfBeds(input: $input) {\n        success\n      }\n    }\n"]);return N=function(){return e},e}function I(){var e=Object(d.a)(["\nquery getHospital($input: GetHospitalInput!) {\n  getHospital(input: $input) {\n    hospital{\n      totalBeds\n      availableBeds\n      unavailableBeds\n    }\n      \n    }\n  }\n"]);return I=function(){return e},e}var w=f()(I()),y=f()(N()),S=f()(O());var B=function(){var e=new o,t=Object(n.useState)(0),a=Object(p.a)(t,2),r=a[0],i=a[1],u=Object(n.useState)(0),c=Object(p.a)(u,2),s=c[0],m=c[1],h=Object(E.b)(w,{variables:{input:{hospitalId:e.getKey()}}}),d=h.data,g=h.loading,f=(h.error,Object(E.a)(y)),O=Object(p.a)(f,2),N=O[0],I=O[1].s_1,B=Object(E.a)(S),C=Object(p.a)(B,2),j=C[0],k=C[1].s_2;Object(n.useEffect)((function(){d&&d.getHospital&&(i(d.getHospital.hospital.totalBeds),m(d.getHospital.hospital.availableBeds))}),[d]);var K={total:function(t){N({variables:{input:{hospitalId:e.getKey(),numberOfBeds:parseInt(t)}}}),console.log(I),i(t)},available:function(t){j({variables:{input:{hospitalId:e.getKey(),numberOfAvailableBeds:parseInt(t)}}}),console.log(k),m(t)}},_={total:r,available:s},A=function(e){return function(t){var a=t.target.value;a=T(a),D(a)&&K[e](a)}},x=function(e){return function(){var t=_[e]+1;K[e](t)}},R=function(e){return function(){var t=_[e]-1;D(t)&&K[e](t)}},T=function(e){try{return parseInt(e)}catch(t){return!1}},D=function(e){return e>-1};return l.a.createElement("div",{className:"BedView"},l.a.createElement("div",{className:"section"},l.a.createElement("input",{className:"input",value:r,onChange:A("total")})," ",l.a.createElement(b.c,{tagName:"h1"},"Verf\xfcgbar"),l.a.createElement("br",null),l.a.createElement(b.a,{rightIcon:"plus",intent:v.a.SUCCESS,className:"buttonL",onClick:x("total"),large:!0,loading:g}),l.a.createElement(b.a,{rightIcon:"minus",intent:v.a.DANGER,className:"buttonR",onClick:R("total"),large:!0,loading:g})),l.a.createElement("div",{className:"section"},l.a.createElement("input",{className:"input",value:s,onChange:A("available")})," ",l.a.createElement(b.c,{tagName:"h1"},"Besetzt"),l.a.createElement("br",null),l.a.createElement(b.a,{rightIcon:"plus",intent:v.a.SUCCESS,className:"buttonL",onClick:x("available"),large:!0,loading:g}),l.a.createElement(b.a,{rightIcon:"minus",intent:v.a.DANGER,className:"buttonR",onClick:R("available"),large:!0,loading:g})),l.a.createElement(b.c,{tagName:"p"},"Belastung ",parseInt(s/r*100),"%"),l.a.createElement(b.b,{animate:!1,value:s/r,intent:s/r<.8?v.a.SUCCESS:v.a.DANGER}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{rightIcon:"log-out",intent:v.a.WARNING,onClick:function(){return e.logoff()&&window.location.reload()},text:"Log out",loading:g}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.c,{tagName:"p"},"Bei fragen, schick uns eine email."))},C=a(56),j=a(55),k=a(13);a(149),a(150),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=new C.a({uri:Object({NODE_ENV:"production",PUBLIC_URL:"/bed_management_frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_GRAPHQL_ENDPOINT||"https://bed-tracking.gigalixirapp.com/api",fetch:j.a}),_=new o;i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k.a,{client:K},_.isAuthenticated()?l.a.createElement(B,null):l.a.createElement(h,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[113,1,2]]]);
//# sourceMappingURL=main.b3665ba7.chunk.js.map