(this.webpackJsonpsylaby=this.webpackJsonpsylaby||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,l=n(0),r=n.n(l),o=n(3),c=n.n(o),i=(n(9),n(1)),u=(n(10),function(e){return r.a.createElement("button",{className:e.class,style:e.style,onClick:e.onClick},e.text)}),s=function(e){return r.a.createElement("textarea",{onChange:function(t){return e.onChange(t.target.value)},value:e.value})},b=function(e){return r.a.createElement("input",{onChange:function(t){return e.onChange(t.target.value)},value:e.value})};!function(e){e[e.OK=0]="OK",e[e.FAIL=1]="FAIL",e[e.NONE=2]="NONE"}(a||(a={}));var f=function(e){var t=Object(l.useState)(),n=Object(i.a)(t,2),o=n[0],c=n[1],s=Object(l.useState)(),b=Object(i.a)(s,2),f=b[0],m=b[1],d=Object(l.useState)(!1),E=Object(i.a)(d,2),v=E[0],y=E[1];Object(l.useEffect)((function(){var t=[];e.sylaby.forEach((function(e){t.push({sylaba:e,wynik:a.NONE})})),c(t)}),[e.sylaby]),Object(l.useEffect)((function(){var e=(null===o||void 0===o?void 0:o.filter((function(e){return e.wynik===a.NONE})))||[],t=e[Math.floor(Math.random()*e.length)];m(t)}),[o]);Object(l.useEffect)((function(){0===(null===o||void 0===o?void 0:o.filter((function(e){return e.wynik===a.NONE})).length)?y(!0):y(!1)}),[o]);return r.a.createElement("div",null,r.a.createElement("div",{className:"small"},"Wybrane: ",e.sylaby.join(",")),f&&r.a.createElement("div",null,r.a.createElement("div",{className:"main",style:{fontSize:"".concat(e.fontSize,"px")}},function(){if(f){var t=e.litery?f.sylaba.toUpperCase():f.sylaba.toLowerCase();return e.firstCol&&t.length>1?r.a.createElement("span",null,r.a.createElement("span",{style:{color:"red"}},t.substr(0,1)),t.substr(1,t.length-1)):e.lastCol&&t.length>1?r.a.createElement("span",null,t.substr(0,t.length-1),r.a.createElement("span",{style:{color:"red"}},t.substr(t.length-1,1))):t}return""}()),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(u,{text:"\u0179le",onClick:function(){var e=Object.assign([],o),t=(null===e||void 0===e?void 0:e.filter((function(e){return e.sylaba===(null===f||void 0===f?void 0:f.sylaba)}))[0])||null;t&&(t.wynik=a.FAIL,c(e))},style:{padding:"10px 30px 10px 30px",backgroundColor:"red",color:"white",fontSize:"20px",border:"1px solid #ccc",borderRadius:"20px"}}),r.a.createElement(u,{text:"OK",onClick:function(){var e=Object.assign([],o),t=(null===e||void 0===e?void 0:e.filter((function(e){return e.sylaba===(null===f||void 0===f?void 0:f.sylaba)}))[0])||null;t&&(t.wynik=a.OK,c(e))},style:{padding:"10px 30px 10px 30px",backgroundColor:"green",color:"white",fontSize:"20px",border:"1px solid #ccc",borderRadius:"20px"}})),v&&r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{style:{fontSize:"26px"}},"Do poprawy: ",r.a.createElement("span",{style:{color:"red"}},null===o||void 0===o?void 0:o.filter((function(e){return e.wynik===a.FAIL})).map((function(e){return e.sylaba})).join(",")))," ",r.a.createElement("br",null),r.a.createElement("hr",null),"OK: ",null===o||void 0===o?void 0:o.filter((function(e){return e.wynik===a.OK})).map((function(e){return e.sylaba})).join(","),r.a.createElement(u,{text:"Powr\xf3t",onClick:e.onEnd})))},m=function(e){var t=Object(l.useState)(""),n=Object(i.a)(t,2),a=n[0],o=n[1],c=Object(l.useState)([]),m=Object(i.a)(c,2),d=m[0],E=m[1],v=Object(l.useState)(!1),y=Object(i.a)(v,2),p=y[0],O=y[1],h=Object(l.useState)(!1),j=Object(i.a)(h,2),g=j[0],x=j[1],k=Object(l.useState)("250"),C=Object(i.a)(k,2),w=C[0],S=C[1],N=Object(l.useState)(!1),z=Object(i.a)(N,2),K=z[0],A=z[1],I=Object(l.useState)(!1),L=Object(i.a)(I,2),F=L[0],B=L[1];return r.a.createElement("div",{className:"App"},!p&&r.a.createElement("div",null,r.a.createElement(u,{text:"Litery",onClick:function(){return x(!g)}}),": ",g?"DU\u017bE":"ma\u0142e",r.a.createElement("br",null),"Czcionka: ",r.a.createElement(b,{onChange:function(e){return S(e)},value:w}),r.a.createElement("br",null),r.a.createElement(u,{text:"Pierwsz kolorowa",onClick:function(){return B(!F)}})," ",F?"TAK":"NIE",r.a.createElement("br",null),r.a.createElement(u,{text:"Ostatnia kolorowa",onClick:function(){return A(!K)}})," ",K?"TAK":"NIE",r.a.createElement("br",null),r.a.createElement(s,{onChange:function(e){return o(e)},value:a}),r.a.createElement("br",null),r.a.createElement(u,{text:"Start",onClick:function(){return function(){var e=a.trim().split(",");E(e),O(!0)}()},class:"startBtn"})),p&&r.a.createElement("div",null,r.a.createElement(f,{litery:g,sylaby:d,onEnd:function(){return O(!1)},fontSize:w,firstCol:F,lastCol:K})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.fce864ad.chunk.js.map