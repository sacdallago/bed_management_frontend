(this.webpackJsonpbed_management_frontend=this.webpackJsonpbed_management_frontend||[]).push([[0],{113:function(e,t,a){e.exports=a(152)},118:function(e,t,a){},119:function(e,t,a){},146:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(12),i=a.n(r),c=(a(118),a(24)),u=a(25),o=function(){function e(){Object(c.a)(this,e),this.authKey=null,this.authKey=window.localStorage.getItem("authKey")}return Object(u.a)(e,[{key:"auth",value:function(e){return this.authKey=e,window.localStorage.setItem("authKey",this.authKey),this.authKey}},{key:"getKey",value:function(){return this.authKey}},{key:"isAuthenticated",value:function(){return null!==this.authKey}},{key:"logoff",value:function(){return window.localStorage.removeItem("authKey"),this.authKey=null,!0}}]),e}(),s=a(57),m=a(58),h=(a(119),a(156)),b=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).updateText=function(t){var a=t.target.value;e.setState({textInput:a})},e.authenticate=function(){e.state.textInput&&""!==e.state.textInput&&e.auth.auth(e.state.textInput),window.location.reload()},e.state={textInput:""},e.auth=new o,e}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"AuthView"},l.a.createElement(h.c,{tagName:"h1"},"Gib deine user ID ein"),l.a.createElement("input",{className:"input",value:this.state.textInput,onChange:this.updateText,autoFocus:!0}),l.a.createElement(h.a,{rightIcon:"arrow-right",intent:"success",className:"button",onClick:this.authenticate}),l.a.createElement(h.c,{tagName:"p"},"Bei fragen, schick uns eine email."))}}]),a}(n.Component),g=a(29),d=a(36),p=a(22),E=a.n(p),f=a(37),v=a(17);a(146);function N(){var e=Object(d.a)(["\nmutation updateNumberOfBeds($input: UpdateNumberOfBedsInput!){\n      updateNumberOfBeds(input: $input) {\n        success\n      }\n    }\n"]);return N=function(){return e},e}function O(){var e=Object(d.a)(["\nquery getHospital($input: GetHospitalInput!) {\n  getHospital(input: $input) {\n    hospital{\n      totalBeds\n      availableBeds\n      unavailableBeds\n    }\n      \n    }\n  }\n"]);return O=function(){return e},e}var w=E()(O()),I=E()(N());var S=function(){var e=new o,t=Object(n.useState)(0),a=Object(g.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(0),u=Object(g.a)(c,2),s=u[0],m=u[1],b=Object(f.b)(w,{variables:{input:{hospitalId:e.getKey()}}}),d=b.data,p=b.loading,E=(b.error,Object(f.a)(I)),N=Object(g.a)(E,2),O=N[0],S=N[1].success;Object(n.useEffect)((function(){d&&d.getHospital&&(i(d.getHospital.hospital.totalBeds),m(d.getHospital.hospital.availableBeds))}),[d]);var y={total:function(e){O({variables:{input:e}}),console.log(S),i(e)},available:m},C={total:r,available:s},k=function(e){return function(t){var a=t.target.value;a=K(a),_(a)&&y[e](a)}},j=function(e){return function(){var t=C[e]+1;y[e](t)}},B=function(e){return function(){var t=C[e]-1;_(t)&&y[e](t)}},K=function(e){try{return parseInt(e)}catch(t){return!1}},_=function(e){return e>-1};return l.a.createElement("div",{className:"BedView"},l.a.createElement("div",{className:"section"},l.a.createElement("input",{className:"input",value:r,onChange:k("total")})," ",l.a.createElement(h.c,{tagName:"h1"},"Verf\xfcgbar"),l.a.createElement("br",null),l.a.createElement(h.a,{rightIcon:"plus",intent:v.a.SUCCESS,className:"buttonL",onClick:j("total"),large:!0,loading:p}),l.a.createElement(h.a,{rightIcon:"minus",intent:v.a.DANGER,className:"buttonR",onClick:B("total"),large:!0,loading:p})),l.a.createElement("div",{className:"section"},l.a.createElement("input",{className:"input",value:s,onChange:k("available")})," ",l.a.createElement(h.c,{tagName:"h1"},"Besetzt"),l.a.createElement("br",null),l.a.createElement(h.a,{rightIcon:"plus",intent:v.a.SUCCESS,className:"buttonL",onClick:j("available"),large:!0,loading:p}),l.a.createElement(h.a,{rightIcon:"minus",intent:v.a.DANGER,className:"buttonR",onClick:B("available"),large:!0,loading:p})),l.a.createElement(h.c,{tagName:"p"},"Belastung ",parseInt(s/r*100),"%"),l.a.createElement(h.b,{animate:!1,value:s/r,intent:s/r<.8?v.a.SUCCESS:v.a.DANGER}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h.a,{rightIcon:"log-out",intent:v.a.WARNING,onClick:function(){return e.logoff()&&window.location.reload()},text:"Log out",loading:p}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h.c,{tagName:"p"},"Bei fragen, schick uns eine email."))},y=a(56),C=a(55),k=a(13);a(149),a(150),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=new y.a({uri:Object({NODE_ENV:"production",PUBLIC_URL:"/bed_management_frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_GRAPHQL_ENDPOINT||"https://bed-tracking.gigalixirapp.com/api",fetch:C.a}),B=new o;i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k.a,{client:j},B.isAuthenticated()?l.a.createElement(S,null):l.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[113,1,2]]]);
//# sourceMappingURL=main.609ce763.chunk.js.map