(this["webpackJsonpthe-league-of-beans"]=this["webpackJsonpthe-league-of-beans"]||[]).push([[0],{126:function(e,t,n){e.exports=n(263)},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},139:function(e,t,n){},219:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(100),c=n.n(i),o=(n(131),n(41)),l=n(17),s=(n(132),n(4)),u=n(5),m=n(8),d=n(9),f=n(19),g=n.n(f),b=n(265),v=n(27),p=(n(133),n(16)),h=n.n(p),k=(n(134),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showLinks:!1},e.toggleShowLinks=function(){e.setState({showLinks:!e.state.showLinks})},e.handleLinkClick=function(){e.toggleShowLinks(),window.scrollTo(0,0)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.links,n=void 0===t?[]:t,a=this.state.showLinks;return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar__logo"},"Beans"),r.a.createElement("div",{className:"navbar__links"},r.a.createElement("button",{onClick:this.toggleShowLinks,className:"navbar__toggle-links-button"},r.a.createElement("span",{className:h()("navbar__toggle-links-button-icon",{"navbar__toggle-links-button-icon--hide":a})},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement("span",{className:h()("navbar__toggle-links-button-icon",{"navbar__toggle-links-button-icon--hide":!a})},r.a.createElement("i",{className:"fas fa-times"}))),a&&r.a.createElement("ul",{className:"navbar__link-dropdown"},n.map((function(t){return r.a.createElement("li",{key:t.route,className:"navbar__link-item"},r.a.createElement(o.b,{onClick:e.handleLinkClick,className:"navbar__link",to:t.route},t.name))})))))}}]),n}(a.Component)),E=(n(139),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(b.a,{textAlign:"right"},r.a.createElement("div",{className:"footer__licence"},"Beans \xa9 2020")))}}]),n}(a.Component)),y=n(43),j=n(44);function _(){var e=Object(y.a)(["\n    color: var(--white);\n    font-size: 64px;\n    line-height: 64px;\n    text-shadow:\n        -1px -1px 0 var(--black),  \n        1px -1px 0 var(--black),\n        -1px 1px 0 var(--black),\n        1px 1px 0 var(--black);\n"]);return _=function(){return e},e}function O(){var e=Object(y.a)(["\n        background-image: url(",");\n    "]);return O=function(){return e},e}function w(){var e=Object(y.a)(["\n    display: flex;\n    height: 90vh;\n    margin-bottom: 24px;\n    justify-content: center;\n    align-items: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 0px;\n\n    ","\n"]);return w=function(){return e},e}window.addEventListener("scroll",g.a.debounce((function(){var e=.9*window.innerHeight,t=document.documentElement;if(window.scrollY>e){var n=getComputedStyle(t).getPropertyValue("--navbar-scroll-background-color");t.style.setProperty("--navbar-background-color",n)}else t.style.setProperty("--navbar-background-color","transparent")}),100));var x=j.b.div(w(),(function(e){return e.image&&Object(j.a)(O(),e.image)})),C=j.b.span(_()),N=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.image,n=e.title;return r.a.createElement(x,{image:t},r.a.createElement(C,null,n))}}]),n}(a.Component),S=(n(219),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.x,a=e.y,i=e.z,c=e.description,o=e.imageUrl,l=e.imageLeft;return r.a.createElement("div",{className:h()("minecraft-coordinate",{"minecraft-coordinate--image-left":l})},r.a.createElement("div",{className:"minecraft-coordinate__text"},r.a.createElement("h2",null,t),r.a.createElement("h3",null,n,", ",a,", ",i),r.a.createElement("div",{dangerouslySetInnerHTML:c})),r.a.createElement("div",{className:h()("minecraft-coordinate__image",{"minecraft-coordinate__image--image-left":l}),style:{backgroundImage:"url(".concat(o,")")}}))}}]),n}(a.Component)),L=n(112),H=new(function(){function e(){Object(s.a)(this,e),this.client=L.a({space:"mpx8c6msjcdu",accessToken:"yX49obCAWPagE4kF5DBdKJNU6lbQwgCz2nDmykXnHM8"})}return Object(u.a)(e,[{key:"getContent",value:function(e){return this.client.getEntry(e)}}]),e}()),M=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a.contentService=H,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.contentService.getContent("VRC12pE1gJZZmqYDVrE8u").then((function(t){var n=Object(v.documentToHtmlString)(t.fields.description),a=g.a.get(t,"fields.headerImage.fields.file.url");e.setState({description:{__html:n},imageUrl:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"landing-page"},r.a.createElement(N,{image:this.state.imageUrl}),r.a.createElement(b.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:this.state.description})))}}]),n}(a.Component),T=(n(262),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={body:[]},a.contentService=H,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.contentService.getContent("2engluBafuOhCCaxCbFC6D").then((function(t){var n=Object(v.documentToHtmlString)(t.fields.description),a=g.a.get(t,"fields.headerImage.fields.file.url"),r=t.fields.body.map((function(e){return{title:e.fields.title,x:e.fields.x,y:e.fields.y,z:e.fields.z,description:{__html:Object(v.documentToHtmlString)(e.fields.description)},imageUrl:g.a.get(e,"fields.image.fields.file.url")}}));e.setState({title:t.fields.title,description:{__html:n},imageUrl:a,body:r})}))}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.imageUrl,a=e.description,i=e.body;return r.a.createElement("div",{className:"minecraft-page"},r.a.createElement(N,{title:t,image:n}),r.a.createElement(b.a,null,r.a.createElement("div",{className:"minecraft-page__description",dangerouslySetInnerHTML:a}),i.map((function(e,t){return r.a.createElement(S,Object.assign({key:e.title,imageLeft:t%2===0},e))}))))}}]),n}(a.Component)),I=[{name:"Home",route:"/"},{name:"Minecraft",route:"/minecraft"}];var U=function(){return r.a.createElement(o.a,null,r.a.createElement(k,{links:I}),r.a.createElement(l.a,{path:"/minecraft"},r.a.createElement(T,null)),r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(M,null)),r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t){}},[[126,1,2]]]);
//# sourceMappingURL=main.2e02e44c.chunk.js.map