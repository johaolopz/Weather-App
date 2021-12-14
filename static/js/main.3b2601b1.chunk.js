(this["webpackJsonpjlopez-app-weather"]=this["webpackJsonpjlopez-app-weather"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(20),i=c.n(a),s=c(16),r=c.n(s),o=c(25),d=c(21),l=c(12),j=c(22),h=c.n(j),m=c(2),u=(c(33),c.p+"static/media/logoApp.6d552a63.svg"),b=c(0);function p(e){var t=e.onSearch,c=Object(n.useState)(""),a=Object(l.a)(c,2),i=a[0],s=a[1];return Object(b.jsx)("form",{className:"formSearching",onSubmit:function(e){e.preventDefault(),t(i),s("")},children:Object(b.jsxs)("div",{className:"divSearching",children:[Object(b.jsx)("input",{type:"text",className:"inputSearch",placeholder:"City...",value:i,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("input",{className:"botonSearch",type:"submit",value:"Search"})]})})}c(35);var x=c(7);var f=function(e){var t=e.onSearch;return Object(b.jsxs)("nav",{className:"navContainer",children:[Object(b.jsx)(x.b,{to:"/",className:"aNav",children:Object(b.jsxs)("div",{className:"divLogo",children:[Object(b.jsx)("img",{id:"logoApp",src:u,width:"30",height:"30",className:"d-inline-block align-top",alt:""}),Object(b.jsx)("h1",{className:"stroke",children:"Weather App"})]})}),Object(b.jsx)(x.b,{to:"/about",className:"aAbout",children:Object(b.jsx)("span",{className:"about",children:"About"})}),Object(b.jsx)(p,{onSearch:t})]})};c(40),c(41);function O(e){var t=e.min,c=e.max,n=e.name,a=e.img,i=e.onClose,s=e.id,r=e.flag;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{id:"closeIcon",className:"row",children:Object(b.jsx)("button",{id:"botonX",onClick:i,className:"btn btn-sm btn-danger",children:"X"})}),Object(b.jsx)(x.b,{className:"anchorTitle",to:"/ciudad/".concat(s),children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("img",{className:"iconoBandera",src:r,width:"60",height:"40",alt:""}),Object(b.jsx)("h5",{className:"card-title",children:n}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-sm-4 col-md-4 col-lg-4",children:[Object(b.jsx)("p",{children:"Min"}),Object(b.jsxs)("p",{children:[t,"\xb0"]})]}),Object(b.jsxs)("div",{className:"col-sm-4 col-md-4 col-lg-4",children:[Object(b.jsx)("p",{children:"Max"}),Object(b.jsxs)("p",{children:[c,"\xb0"]})]}),Object(b.jsx)("div",{className:"col-sm-4 col-md-4 col-lg-4",children:Object(b.jsx)("img",{className:"iconoClima",src:"http://openweathermap.org/img/wn/"+a+"@2x.png",width:"80",height:"80",alt:""})})]})]})})]})}function g(e){var t=e.cities,c=e.onClose;return Object(b.jsx)("div",{className:"cards",children:t.map((function(e){return Object(b.jsx)(O,{id:e.id,max:e.max,min:e.min,name:e.name,img:e.img,flag:e.flag,onClose:function(){return c(e.id)}},e.id)}))})}c(42);var v=c.p+"static/media/profile_photo_Johao.49dec561.jpg";function N(){return Object(b.jsx)("div",{className:"mainContainer",children:Object(b.jsxs)("div",{className:"aboutContainer",children:[Object(b.jsxs)("div",{className:"headAbout",children:[Object(b.jsx)("div",{className:"divPhoto",children:Object(b.jsx)("img",{id:"profilePhoto",src:v,alt:"not found"})}),Object(b.jsxs)("div",{className:"divDetailContainer",children:[Object(b.jsx)("h3",{children:"Johao L\xf3pez Mayorga"}),Object(b.jsx)("p",{children:"Aplicaci\xf3n para consumir recursos del clima buscando por el nombre de la ciudad."})]})]}),Object(b.jsxs)("div",{className:"divSocial",children:[Object(b.jsx)("div",{className:"facebook",children:Object(b.jsx)("a",{href:"https:\\\\www.facebook.com",children:Object(b.jsx)("img",{className:"redes",src:"https://norfipc.com/img/logos/logotipo-oficial-facebook-2014.png",alt:"not found"})})}),Object(b.jsx)("div",{className:"twitter",children:Object(b.jsx)("a",{href:"https:\\\\www.twitter.com",children:Object(b.jsx)("img",{className:"redes",src:"https://i.pinimg.com/originals/f3/6f/51/f36f511b261596a2debe85d844bb1b87.png",alt:"not found"})})}),Object(b.jsx)("div",{className:"linkedin",children:Object(b.jsx)("a",{href:"https:\\\\www.linkedin.com",children:Object(b.jsx)("img",{className:"redes",src:"https://copyblogger.com/cdn-origin/images/linkedin.png",alt:"not found"})})})]})]})})}c(43);function w(e){var t=e.city;return Object(b.jsx)("div",{className:"ciudad",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{children:t.name}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsxs)("div",{children:["Temperature: ",t.temp," \xbaC"]}),Object(b.jsxs)("div",{children:["Weather: ",t.weather]}),Object(b.jsxs)("div",{children:["Wind: ",t.wind," km/h"]}),Object(b.jsxs)("div",{children:["Amount of clouds: ",t.clouds]}),Object(b.jsxs)("div",{children:["Latitude: ",t.latitud,"\xba"]}),Object(b.jsxs)("div",{children:["Longitude: ",t.longitud,"\xba"]})]}),Object(b.jsx)("br",{}),Object(b.jsx)(x.b,{to:"/",children:Object(b.jsx)("button",{className:"botonHome",children:"Home"})})]})})}var C=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];function i(e){a((function(t){return t.filter((function(t){return t.id!==e}))}))}function s(e){fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("3b54cd82b15fdca9207908255cfc5562")).then((function(e){return e.json()})).then((function(e){if(void 0!==e.main){var t=function(){var e=Object(d.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/alpha/".concat(c.alphaCode)).then((function(e){return e.json()})).then((function(e){c.flag=e[0].flags.svg,a((function(e){return[].concat(Object(o.a)(e),[c])}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c={min:Math.round(e.main.temp_min),max:Math.round(e.main.temp_max),img:e.weather[0].icon,id:e.id,wind:e.wind.speed,temp:e.main.temp,name:e.name,weather:e.weather[0].main,clouds:e.clouds.all,latitud:e.coord.lat,longitud:e.coord.lon,alphaCode:e.sys.country,flag:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Globe.svg"};t()}else h()("City not Found!","Try again","error")}))}function j(e){var t=c.filter((function(t){return t.id===parseInt(e)}));return t.length>0?t[0]:null}return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m.a,{path:"/",render:function(){return Object(b.jsx)(f,{onSearch:s})}}),Object(b.jsx)(m.a,{path:"/about",component:N}),Object(b.jsx)(m.a,{exact:!0,path:"/",render:function(){return Object(b.jsx)(g,{cities:c,onClose:i})}}),Object(b.jsx)(m.a,{exact:!0,path:"/ciudad/:ciudadId",render:function(e){var t=e.match;return Object(b.jsx)(w,{city:j(t.params.ciudadId)})}})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};i.a.render(Object(b.jsx)(x.a,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),k()}},[[44,1,2]]]);
//# sourceMappingURL=main.3b2601b1.chunk.js.map