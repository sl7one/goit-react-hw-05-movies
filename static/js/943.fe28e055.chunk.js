"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[943],{25:function(n,t,e){e.d(t,{Nw:function(){return o},P7:function(){return u},V0:function(){return a},WN:function(){return c},lT:function(){return s}});var r=e(388),i="a087ec88dfb73069c17edb46f5fa13b0",a=function(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i)).then((function(n){return n})).then((function(n){return n.data.results}))},c=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US")).then((function(n){return n})).then((function(n){return n.data}))},o=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-USS")).then((function(n){return n})).then((function(n){return n.data}))},u=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(n){return n})).then((function(n){return n.data}))},s=function(n){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n)).then((function(n){return n})).then((function(n){return n.data}))}},943:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,i,a,c,o=e(439),u=e(168),s=e(444),l=e(25),h=e(689),d=e(791),f=e(87),p=e(184),g=s.ZP.div(r||(r=(0,u.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),v=function(){return(0,p.jsxs)(g,{children:[(0,p.jsx)(f.rU,{to:"cast",children:"Casts"}),(0,p.jsx)(f.rU,{to:"reviews",children:"Reviews"}),(0,p.jsx)(h.j3,{})]})},x=e(185),m=(0,s.ZP)(f.rU)(i||(i=(0,u.Z)(["\n  font-size: 20px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 15px;\n"]))),j=function(){var n,t,e=(0,h.TH)();return(0,p.jsxs)(m,{to:null!==(n=null===(t=e.state)||void 0===t?void 0:t.location)&&void 0!==n?n:"/",children:[(0,p.jsx)(x.aEb,{})," Go back"]})},_=s.ZP.div(a||(a=(0,u.Z)(["\n  display: flex;\n"]))),Z=s.ZP.div(c||(c=(0,u.Z)(["\n  margin-left: 20px;\n"]))),b=function(){var n=(0,h.UO)().movieId,t=(0,d.useState)(null),e=(0,o.Z)(t,2),r=e[0],i=e[1];if((0,d.useEffect)((function(){(0,l.WN)(Number(n)).then((function(n){i(n)})).catch(console.log)}),[n]),!r)return null;var a=r.poster_path?"https://image.tmdb.org/t/p/w500".concat(r.poster_path):"https://m.media-amazon.com/images/M/MV5BMjM5MTc3NDU4NV5BMl5BanBnXkFtZTgwMTkxMjk3MjE@._V1_.jpg";return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(j,{}),(0,p.jsxs)(_,{children:[(0,p.jsx)("img",{src:a,alt:r.title,width:300}),(0,p.jsxs)(Z,{children:[(0,p.jsx)("h2",{children:r.title}),(0,p.jsxs)("p",{children:["User score : ","".concat(10*r.vote_average," %")]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:r.overview}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:r.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,p.jsx)(v,{})]})}}}]);
//# sourceMappingURL=943.fe28e055.chunk.js.map