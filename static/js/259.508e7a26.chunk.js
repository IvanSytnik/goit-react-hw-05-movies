"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[259],{1716:function(t,e,n){n.d(e,{Z:function(){return l}});var c=n(5861),r=n(7757),s=n.n(r),a=n(3263),o="https://www.themoviedb.org/3",i="2ab76973979a35747718d3c676d235cc";function l(t,e){return u.apply(this,arguments)}function u(){return(u=(0,c.Z)(s().mark((function t(e,n){var c,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("".concat(e));case 3:c=t.sent,r=c.data,console.log(r),n(r.results),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:return t.prev=11,console.log("end"),console.log("".concat(o).concat(e).concat(i)),t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[0,9,11,15]])})))).apply(this,arguments)}},725:function(t,e,n){var c=n(1087),r=n(184);e.Z=function(t){var e=t.products,n=t.location;return(0,r.jsx)("ul",{class:"cards__list",children:e.map((function(t){return(0,r.jsx)("li",{class:"cards__item",children:(0,r.jsxs)(c.rU,{to:"/movies/".concat(t.id),state:{from:n},children:[(0,r.jsx)("img",{src:"https://image.tmdb.org/t/p/w400https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:""}),(0,r.jsx)("h2",{class:"cards__name",children:t.title})]})},t.id)}))})}},8259:function(t,e,n){n.r(e);var c=n(9439),r=n(2791),s=n(3682),a=n(7689),o=n(725),i=n(1716),l=n(184);e.default=function(){var t=(0,r.useState)(null),e=(0,c.Z)(t,2),n=e[0],u=e[1],p=(0,a.TH)();return(0,r.useEffect)((function(){console.log(n)}),[n]),(0,r.useEffect)((function(){(0,i.Z)("https://api.themoviedb.org/3/trending/movie/week?api_key=2ab76973979a35747718d3c676d235cc",u)}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(s.x,{display:"flex",justifyContent:"center",flexDirection:"column",children:[n&&(0,l.jsx)(o.Z,{location:p,products:n}),(0,l.jsx)(a.j3,{})]})})}}}]);
//# sourceMappingURL=259.508e7a26.chunk.js.map