"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[674],{654:function(e,t,n){var r=n(689),u=n(87),a=n(184);t.Z=function(e){var t=e.movies,n=(0,r.TH)();return(0,a.jsx)("ul",{children:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(u.OL,{to:"/movies/"+e.id,state:n,children:e.name||e.original_title})},e.id)}))})}},674:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(439),u=n(791),a=n(973),i=n(87),o="SearchForm_form__o80os",c=n(184),s=function(){var e=(0,u.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],s=(0,i.lr)(),f=(0,r.Z)(s,2)[1];return(0,c.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault(),f({query:n})},children:[(0,c.jsx)("input",{type:"text",name:"input",placeholder:"Search...",value:n,onChange:function(e){return a(e.target.value)}}),(0,c.jsx)("button",{type:"submit",children:"Search Movies"})]})},f=n(654),l=function(){var e=(0,u.useState)([]),t=(0,r.Z)(e,2),n=t[0],o=t[1],l=(0,i.lr)(),m=(0,r.Z)(l,1)[0].get("query");return(0,u.useEffect)((function(){m&&(0,a.eP)(m).then((function(e){return o(e.results)})).catch((function(e){return console.log(e)}))}),[m]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{}),(0,c.jsx)(f.Z,{movies:n})]})}},973:function(e,t,n){n.d(t,{Df:function(){return a},eP:function(){return o},k8:function(){return i},wk:function(){return c},xi:function(){return s}});var r=n(243),u="bdc42118597db190ea765e4758333984";r.Z.defaults.baseURL="https://api.themoviedb.org/3";var a=function(){return r.Z.get("/trending/all/day",{params:{api_key:u}}).then((function(e){return e.data}))},i=function(e){return r.Z.get("/movie/"+e,{params:{api_key:u}}).then((function(e){return e.data}))},o=function(e){return r.Z.get("/search/movie",{params:{api_key:u,query:e}}).then((function(e){return e.data}))},c=function(e){return r.Z.get("/movie/"+e+"/credits",{params:{api_key:u}}).then((function(e){return e.data}))},s=function(e){return r.Z.get("/movie/"+e+"/reviews",{params:{api_key:u}}).then((function(e){return e.data}))}}}]);
//# sourceMappingURL=674.d8a466be.chunk.js.map