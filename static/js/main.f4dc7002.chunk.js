(this["webpackJsonpthe-league-of-beans"]=this["webpackJsonpthe-league-of-beans"]||[]).push([[0],{126:function(e,t,n){e.exports=n(266)},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},139:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},264:function(e,t,n){},265:function(e,t,n){},266:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(100),c=n.n(r),o=(n(131),n(41)),l=n(19),s=(n(132),n(3)),u=n(4),m=n(6),d=n(7),f=n(14),b=n.n(f),g=n(268),p=n(17),v=(n(133),n(18)),h=n.n(v),y=(n(134),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={showLinks:!1},e.toggleShowLinks=function(){e.setState({showLinks:!e.state.showLinks})},e.handleLinkClick=function(){e.toggleShowLinks(),window.scrollTo(0,0)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.links,n=void 0===t?[]:t,a=this.state.showLinks;return i.a.createElement("div",{className:"navbar"},i.a.createElement("div",{className:"navbar__logo"},"Beans"),i.a.createElement("div",{className:"navbar__links"},i.a.createElement("button",{onClick:this.toggleShowLinks,className:"navbar__toggle-links-button"},i.a.createElement("span",{className:h()("navbar__toggle-links-button-icon",{"navbar__toggle-links-button-icon--hide":a})},i.a.createElement("i",{className:"fas fa-bars"})),i.a.createElement("span",{className:h()("navbar__toggle-links-button-icon",{"navbar__toggle-links-button-icon--hide":!a})},i.a.createElement("i",{className:"fas fa-times"}))),a&&i.a.createElement("ul",{className:"navbar__link-dropdown"},n.map((function(t){return i.a.createElement("li",{key:t.route,className:"navbar__link-item"},i.a.createElement(o.b,{onClick:e.handleLinkClick,className:"navbar__link",to:t.route},t.name))})))))}}]),n}(a.Component)),k=(n(139),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer"},i.a.createElement(g.a,{textAlign:"right"},i.a.createElement("div",{className:"footer__licence"},"Beans \xa9 2020")))}}]),n}(a.Component)),E=n(43),j=n(44);function _(){var e=Object(E.a)(["\n    color: var(--white);\n    font-size: 64px;\n    line-height: 64px;\n\n    @media (max-width: 500px) {\n        font-size: 32px;\n        line-height: 32px;\n    }\n\n    text-shadow:\n        -1px -1px 0 var(--black),  \n        1px -1px 0 var(--black),\n        -1px 1px 0 var(--black),\n        1px 1px 0 var(--black);\n"]);return _=function(){return e},e}function O(){var e=Object(E.a)(["\n        background-image: url(",");\n    "]);return O=function(){return e},e}function w(){var e=Object(E.a)(["\n    display: flex;\n    height: 90vh;\n    margin-bottom: 24px;\n    justify-content: center;\n    align-items: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 0px;\n\n    ","\n"]);return w=function(){return e},e}window.addEventListener("scroll",b.a.debounce((function(){var e=.9*window.innerHeight,t=document.documentElement;if(window.scrollY>e){var n=getComputedStyle(t).getPropertyValue("--navbar-scroll-background-color");t.style.setProperty("--navbar-background-color",n)}else t.style.setProperty("--navbar-background-color","transparent")}),100));var x=j.b.div(w(),(function(e){return e.image&&Object(j.a)(O(),e.image)})),N=j.b.span(_()),S=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.image,n=e.title;return i.a.createElement(x,{image:t},i.a.createElement(N,null,n))}}]),n}(a.Component),C=(n(219),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.x,a=e.y,r=e.z,c=e.description,o=e.imageUrl,l=e.imageLeft;return i.a.createElement(I,{mediaType:"image",imageUrl:o,mediaLeft:l},i.a.createElement("h2",null,t),i.a.createElement("h3",null,n,", ",a,", ",r),i.a.createElement("div",{dangerouslySetInnerHTML:c}))}}]),n}(a.Component)),L=(n(220),function(e){var t=e.youtubeId;return i.a.createElement("div",{className:"youtube-video"},i.a.createElement("iframe",{className:"youtube-video__iframe",title:t,src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0"}))}),I=(n(221),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.imageUrl,a=e.mediaType,r=void 0===a?"image":a,c=e.mediaLeft,o=e.youtubeId;return i.a.createElement("div",{className:h()("media-with-description",{"media-with-description--media-left":c})},i.a.createElement("div",{className:"media-with-description__description"},t),i.a.createElement("div",{className:h()("media-with-description__media",{"media-with-description__media--media-left":c})},"image"===r&&i.a.createElement("div",{className:"media-with-description__image",style:{backgroundImage:"url(".concat(n,")")}}),"youtube"===r&&i.a.createElement(L,{youtubeId:o})))}}]),n}(a.Component)),T=n(112),H=new(function(){function e(){Object(s.a)(this,e),this.client=T.a({space:"mpx8c6msjcdu",accessToken:"yX49obCAWPagE4kF5DBdKJNU6lbQwgCz2nDmykXnHM8"})}return Object(u.a)(e,[{key:"getContent",value:function(e){return this.client.getEntry(e)}}]),e}()),M=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a.contentService=H,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.contentService.getContent("VRC12pE1gJZZmqYDVrE8u").then((function(t){var n=Object(p.documentToHtmlString)(t.fields.description),a=b.a.get(t,"fields.headerImage.fields.file.url");e.setState({description:{__html:n},imageUrl:a})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"landing-page"},i.a.createElement(S,{image:this.state.imageUrl}),i.a.createElement(g.a,null,i.a.createElement("div",{dangerouslySetInnerHTML:this.state.description})))}}]),n}(a.Component),U=(n(264),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={body:[]},a.contentService=H,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.contentService.getContent("2engluBafuOhCCaxCbFC6D").then((function(t){var n=Object(p.documentToHtmlString)(t.fields.description),a=b.a.get(t,"fields.headerImage.fields.file.url"),i=t.fields.body.map((function(e){return{title:e.fields.title,x:e.fields.x,y:e.fields.y,z:e.fields.z,description:{__html:Object(p.documentToHtmlString)(e.fields.description)},imageUrl:b.a.get(e,"fields.image.fields.file.url")}}));e.setState({title:t.fields.title,description:{__html:n},imageUrl:a,body:i})}))}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.imageUrl,a=e.description,r=e.body;return i.a.createElement("div",{className:"minecraft-page"},i.a.createElement(S,{title:t,image:n}),i.a.createElement(g.a,null,i.a.createElement("div",{className:"minecraft-page__description",dangerouslySetInnerHTML:a}),r.map((function(e,t){return i.a.createElement(C,Object.assign({key:e.title,imageLeft:t%2===0},e))}))))}}]),n}(a.Component)),B=(n(265),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={body:[]},a.contentService=H,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.contentService.getContent("4VbH6oL30BM12r2RYnhQ2w").then((function(t){var n=b.a.get(t,"fields.headerImage.fields.file.url"),a=t.fields.body.map((function(e){return{title:e.fields.title,description:{__html:Object(p.documentToHtmlString)(e.fields.description)},youtubeId:e.fields.youTubeVideoId}}));e.setState({title:t.fields.title,imageUrl:n,description:{__html:Object(p.documentToHtmlString)(t.fields.description)},body:a})}))}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.imageUrl,a=e.description,r=e.body;return i.a.createElement("div",{className:"rocket-league-page"},i.a.createElement(S,{title:t,image:n}),i.a.createElement(g.a,null,i.a.createElement("div",{className:"rocket-league-page__description",dangerouslySetInnerHTML:a}),r.map((function(e,t){return i.a.createElement(I,{mediaType:"youtube",mediaLeft:t%2===0,youtubeId:e.youtubeId},i.a.createElement("h2",null,e.title),i.a.createElement("div",{dangerouslySetInnerHTML:e.description}))}))))}}]),n}(a.Component)),z=[{name:"Home",route:"/"},{name:"Minecraft",route:"/minecraft"},{name:"Rocket League",route:"/rocket-league"}];var D=function(){return i.a.createElement(o.a,null,i.a.createElement(y,{links:z}),i.a.createElement(l.a,{path:"/minecraft"},i.a.createElement(U,null)),i.a.createElement(l.a,{path:"/rocket-league"},i.a.createElement(B,null)),i.a.createElement(l.a,{exact:!0,path:"/"},i.a.createElement(M,null)),i.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t){}},[[126,1,2]]]);
//# sourceMappingURL=main.f4dc7002.chunk.js.map