"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[741],{25:function(t,n,e){e.d(n,{Nw:function(){return c},P7:function(){return o},V0:function(){return i},WN:function(){return u},lT:function(){return f}});var r=e(388),a="a087ec88dfb73069c17edb46f5fa13b0",i=function(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(a)).then((function(t){return t})).then((function(t){return t.data.results}))},u=function(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(a,"&language=en-US")).then((function(t){return t})).then((function(t){return t.data}))},c=function(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(a,"&language=en-USS")).then((function(t){return t})).then((function(t){return t.data}))},o=function(t){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(a,"&language=en-US&page=1")).then((function(t){return t})).then((function(t){return t.data}))},f=function(t){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&page=1&include_adult=false&query=").concat(t)).then((function(t){return t})).then((function(t){return t.data}))}},741:function(t,n,e){e.r(n);var r=e(439),a=e(25),i=e(791),u=e(689),c=e(184);n.default=function(){var t=(0,u.UO)().movieId,n=(0,i.useState)(null),e=(0,r.Z)(n,2),o=e[0],f=e[1];return(0,i.useEffect)((function(){(0,a.Nw)(Number(t)).then((function(t){f(t)}))}),[t]),o?(0,c.jsx)("ul",{children:o.cast.map((function(t){var n=t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"https://mod.go.ke/wp-content/uploads/2021/04/default-profile-pic.png";return(0,c.jsxs)("li",{children:[(0,c.jsx)("img",{src:n,alt:t.name,width:200}),(0,c.jsxs)("h2",{children:["Artist : ",t.name]}),(0,c.jsxs)("p",{children:["Character : ",t.character]})]},t.id)}))}):null}}}]);
//# sourceMappingURL=741.fec54b14.chunk.js.map