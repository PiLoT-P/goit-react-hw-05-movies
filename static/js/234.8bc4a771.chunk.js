"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[234],{234:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(439),u=e(184),i=function(n){var t=n.reviews;return(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsxs)("li",{children:[(0,u.jsxs)("p",{children:["Autor:",n.author]}),(0,u.jsx)("p",{children:n.content})]},n.id)}))})},a=e(791),c=e(689),o=e(973),f=function(){var n=(0,c.UO)().movieID,t=(0,a.useState)([]),e=(0,r.Z)(t,2),f=e[0],s=e[1];return(0,a.useEffect)((function(){(0,o.xi)(n).then((function(n){return s(n.results)})).catch((function(n){return console.log(n)}))}),[n]),(0,u.jsx)(i,{reviews:f})}},973:function(n,t,e){e.d(t,{Df:function(){return i},eP:function(){return c},k8:function(){return a},wk:function(){return o},xi:function(){return f}});var r=e(243),u="bdc42118597db190ea765e4758333984";r.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){return r.Z.get("/trending/all/day",{params:{api_key:u}}).then((function(n){return n.data}))},a=function(n){return r.Z.get("/movie/"+n,{params:{api_key:u}}).then((function(n){return n.data}))},c=function(n){return r.Z.get("/search/movie",{params:{api_key:u,query:n}}).then((function(n){return n.data}))},o=function(n){return r.Z.get("/movie/"+n+"/credits",{params:{api_key:u}}).then((function(n){return n.data}))},f=function(n){return r.Z.get("/movie/"+n+"/reviews",{params:{api_key:u}}).then((function(n){return n.data}))}}}]);
//# sourceMappingURL=234.8bc4a771.chunk.js.map