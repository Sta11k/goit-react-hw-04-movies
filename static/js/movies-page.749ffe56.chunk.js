(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{119:function(e,t,r){},120:function(e,t,r){},121:function(e,t,r){"use strict";var n=r(122),o=r(123),a=r(127),i=r(128),c=r(132),u=r(133),s=r(134),l=r(135),f=Symbol("encodeFragmentIdentifier");function p(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function y(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function v(e,t){return t.decode?u(e):e}function m(e){return Array.isArray(e)?e.sort():"object"===typeof e?m(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function d(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function b(e){var t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function g(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){p((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var o="string"===typeof r&&r.includes(e.arrayFormatSeparator),a="string"===typeof r&&!o&&v(r,e).includes(e.arrayFormatSeparator);r=a?v(r,e):r;var i=o||a?r.split(e.arrayFormatSeparator).map((function(t){return v(t,e)})):null===r?r:v(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return v(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=r?v(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!==typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var i,c=a(e.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value;if(""!==u){var l=s(t.decode?u.replace(/\+/g," "):u,"="),f=o(l,2),y=f[0],d=f[1];d=void 0===d?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?d:v(d,t),r(v(y,t),d,n)}}}catch(w){c.e(w)}finally{c.f()}for(var b=0,h=Object.keys(n);b<h.length;b++){var j=h[b],O=n[j];if("object"===typeof O&&null!==O)for(var x=0,S=Object.keys(O);x<S.length;x++){var k=S[x];O[k]=g(O[k],t)}else n[j]=g(O,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=m(r):e[t]=r,e}),Object.create(null))}t.extract=b,t.parse=h,t.stringify=function(e,t){if(!e)return"";p((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&(null===(n=e[r])||void 0===n)||t.skipEmptyString&&""===e[r];var n},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[y(t,e),"[",o,"]"].join("")]:[[y(t,e),"[",y(o,e),"]=",y(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[y(t,e),"[]"].join("")]:[[y(t,e),"[]=",y(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[y(r,e),t,y(o,e)].join("")]:[[n,y(o,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[y(t,e)]:[[y(t,e),"=",y(n,e)].join("")])}}}}(t),o={},a=0,c=Object.keys(e);a<c.length;a++){var u=c[a];r(u)||(o[u]=e[u])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var o=e[r];return void 0===o?"":null===o?y(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?y(r,t)+"[]":o.reduce(n(r),[]).join("&"):y(r,t)+"="+y(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=s(e,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:h(b(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:v(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},f,!0),r);var o=d(e.url).split("?")[0]||"",a=t.extract(e.url),i=t.parse(a,{sort:!1}),c=Object.assign(i,e.query),u=t.stringify(c,r);u&&(u="?".concat(u));var s=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(r[f]?y(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(o).concat(u).concat(s)},t.pick=function(e,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},f,!1),o);var a=t.parseUrl(e,o),i=a.url,c=a.query,u=a.fragmentIdentifier;return t.stringifyUrl({url:i,query:l(c,r),fragmentIdentifier:u},o)},t.exclude=function(e,r,n){var o=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,o,n)}},122:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},123:function(e,t,r){var n=r(124),o=r(125),a=r(85),i=r(126);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()}},124:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},125:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}},126:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},127:function(e,t,r){var n=r(85);e.exports=function(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}},128:function(e,t,r){var n=r(129),o=r(130),a=r(85),i=r(131);e.exports=function(e){return n(e)||o(e)||a(e)||i()}},129:function(e,t,r){var n=r(95);e.exports=function(e){if(Array.isArray(e))return n(e)}},130:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},131:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},132:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},133:function(e,t,r){"use strict";var n="%[a-f0-9]{2}",o=new RegExp(n,"gi"),a=new RegExp("("+n+")+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],i(r),i(n))}function c(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(o),r=1;r<t.length;r++)t=(e=i(t,r).join("")).match(o);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=a.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var o=c(n[0]);o!==n[0]&&(r[n[0]]=o)}n=a.exec(e)}r["%C2"]="\ufffd";for(var i=Object.keys(r),u=0;u<i.length;u++){var s=i[u];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},134:function(e,t,r){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},135:function(e,t,r){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],c=e[i];(o?-1!==t.indexOf(i):t(i,c,e))&&(r[i]=c)}return r}},138:function(e,t,r){"use strict";r.r(t);var n=r(80),o=r.n(n),a=r(86),i=r(81),c=r(76),u=r(77),s=r(79),l=r(78),f=r(0),p=r(12),y=r(4),v=(r(119),r(3)),m=function(e){var t=e.poster,r=e.baseUrl,n=e.title;return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:t?"".concat(r).concat(t):t,alt:n})}),Object(v.jsx)("h3",{className:"MoviesPageQuery-title",children:n})]})};m.defaultProps={title:"Nothing Found"};var d=m,b=Object(y.f)((function(e){var t=e.movies,r=e.location,n=e.baseUrl;return Object(v.jsx)("div",{className:"MoviesPageQuery-container",children:Object(v.jsx)("ul",{className:"MoviesPageQuery-list",children:t&&t.map((function(e){var t=e.id,o=e.title,a=e.poster_path;return Object(v.jsx)("li",{className:"MoviesPageQuery-item",children:Object(v.jsx)(p.b,{to:{pathname:"/movies/".concat(t),state:{from:r}},children:Object(v.jsx)(d,{poster:a,title:o,baseUrl:n})})},t)}))})})})),g=r(75),h=(r(120),function(e){Object(s.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={query:""},e.handleInput=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){var r=e.state.query;t.preventDefault(),e.props.onSubmit(r)},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("form",{onSubmit:this.handleSubmit,className:"MoviesPage-form",children:[Object(v.jsx)("input",{className:"MoviesPage-input",type:"text",value:this.state.query,onChange:this.handleInput,placeholder:"Search movie"}),Object(v.jsx)("button",{className:"MoviesPage-button",type:"submit",children:"Search"})]})})}}]),r}(f.Component)),j=r(121),O=r.n(j),x=r(73),S=function(e){Object(s.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={query:"",movies:[],page:1},e.componentDidMount=function(){var t=e.getQueryFromProps(e.props).query;t&&e.setState({query:t})},e.onChangeQuery=function(t){e.setState({query:t,movies:[],page:1})},e.onBtnClickUp=function(){window.scrollTo({top:0,behavior:"smooth"})},e.getQueryFromProps=function(e){return O.a.parse(e.location.search)},e}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(e,t){var r=this.state,n=r.query,o=r.movies;t.query!==n&&(this.fetchMovies(),this.props.history.push({search:"query=".concat(n)})),o.length>20&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"fetchMovies",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,r,n,i,c=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state,r=t.query,n=t.page,i={query:r,page:n},g.a.getMovieByQuery(i).then((function(e){c.setState((function(t){return{movies:[].concat(Object(a.a)(t.movies),Object(a.a)(e)),page:t.page+1}}))}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.movies,n=t.base_url,o=t.page;return Object(v.jsxs)("div",{className:"Movies-container",children:[Object(v.jsx)(h,{onSubmit:this.onChangeQuery}),r&&Object(v.jsx)(b,{movies:r,baseUrl:n}),r.length>0&&Object(v.jsxs)("div",{children:[Object(v.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){return e.fetchMovies(o+1)},children:"More movies"}),Object(v.jsx)(x.a,{variant:"contained",color:"primary",onClick:this.onBtnClickUp,children:"UP"})]})]})}}]),r}(f.Component);t.default=S},75:function(e,t,r){"use strict";var n=r(84),o=r.n(n),a="eef1cd881f885cf39765ac4359f8bbb0";o.a.defaults.baseURL="https://api.themoviedb.org/3/";t.a={getMovieTrends:function(e){return o.a.get("trending/movie/week?api_key=".concat(a,"&page=").concat(e))},getMovieByQuery:function(e){var t=e.query,r=e.page;return o.a.get("search/movie?query=".concat(t,"&api_key=").concat(a,"&language=en-US&page=").concat(r,"&include_adult=false")).then((function(e){return e.data.results}))},getMoviesDetail:function(e){return o.a.get("movie/".concat(e,"?api_key=").concat(a,"&language=en-US"))},getMovieCast:function(e){return o.a.get("/movie/".concat(e,"/credits?api_key=").concat(a,"&language=en-US"))},getMovieReview:function(e){return o.a.get("/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}}},85:function(e,t,r){var n=r(95);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},86:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return o}))},95:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}}]);
//# sourceMappingURL=movies-page.749ffe56.chunk.js.map