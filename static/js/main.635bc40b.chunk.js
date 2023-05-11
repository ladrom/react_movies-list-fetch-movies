(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(6),s=c.n(i),a=(c(13),c(8)),n=c(2),l=c(1),r=(c(14),c(15),c(16),c(0)),d=function(e){var t=e.movie;return t&&Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(d,{movie:e},e.imdbId)}))})},j=c(7),m=c.n(j);c(18);var b=function(e){var t=e.addMovie,c=Object(l.useState)(""),i=Object(n.a)(c,2),s=i[0],a=i[1],o=Object(l.useState)(null),j=Object(n.a)(o,2),b=j[0],u=j[1],h=Object(l.useState)(null),v=Object(n.a)(h,2),O=v[0],x=v[1],f=Object(l.useState)(!1),p=Object(n.a)(f,2),N=p[0],g=p[1],y=0===s.trim().length;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),g(!0),function(e){return fetch("".concat("http://www.omdbapi.com/?i=tt3896198&apikey=909ceea8","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(s.trim()).then((function(e){"Error"in e?x(e):u({title:e.Title,description:e.Plot,imgUrl:"N/A"===e.Poster?"https://placehold.co/600x400":e.Poster,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID})})).finally((function(){g(!1)}))},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:s,onChange:function(e){a(e.target.value),x(null)}})}),O&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":N}),disabled:y,children:b?"Search again":"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:b&&Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){b&&(t(b),u(null),a(""))},children:"Add to the list"})})]})]}),Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[b&&Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(d,{movie:b})]})]})},u=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(b,{addMovie:function(e){c.some((function(t){return t.imdbId===e.imdbId}))||i([].concat(Object(a.a)(c),[e]))}})})]})};s.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.635bc40b.chunk.js.map