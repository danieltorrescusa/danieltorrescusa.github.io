(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6Gk8":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz");t.a=function(){var e,t=Object(n.useStaticQuery)("104267996").author,a=null==t||null===(e=t.avatar)||void 0===e?void 0:e.url;return i.a.createElement("div",{className:"bio"},a&&i.a.createElement("img",{alt:(null==t?void 0:t.firstName)||"",className:"bio-avatar",src:a}),(null==t?void 0:t.firstName)&&i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,t.firstName)," ",(null==t?void 0:t.description)||null," ",(null==t?void 0:t.twitter)&&i.a.createElement("a",{href:"https://twitter.com/"+((null==t?void 0:t.twitter)||"")},"You should follow them on Twitter")))}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),d=r(a("pVnL")),o=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=c(e),a=p(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+o+l+s+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=o.default.createElement(V,(0,d.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,i(r),s):s})),V=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},m,{onLoad:l,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=p(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,R=e.draggable,O=g||h;if(!O)return null;var N=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,d.default)({opacity:N?1:0,transition:P?"opacity "+v+"ms":"none"},s),H="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},W=(0,d.default)({opacity:this.state.imgLoaded?0:1},P&&T,s,f),C={title:t,alt:this.state.isVisible?"":a,style:W,className:p,itemProp:S},j=this.state.isHydrated?m(O):O[0];if(g)return o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},o.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),H&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&T)}),j.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:C,imageVariants:O,generateSources:I}),j.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:C,imageVariants:O,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,E(O),o.default.createElement(V,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:R})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:a,title:t,loading:w},j,{imageVariants:O}))}}));if(h){var q=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete q.display,o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},H&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:H,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},P&&T)}),j.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:C,imageVariants:O,generateSources:I}),j.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:C,imageVariants:O,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,E(O),o.default.createElement(V,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:R})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:a,title:t,loading:w},j,{imageVariants:O}))}}))}return null},t}(o.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),k=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function H(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}N.propTypes={resolutions:P,sizes:k,fixed:H(u.default.oneOfType([P,u.default.arrayOf(P)])),fluid:H(u.default.oneOfType([k,u.default.arrayOf(k)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=N;t.default=T},FyuP:function(e,t,a){},QmWP:function(e,t,a){},yZlL:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=a("9eSz"),s=a.n(l),d=a("4a3J"),o=(a("FyuP"),a("QmWP"),a("6Gk8")),u=a("Bl7J"),c=a("vrFN");t.default=function(e){var t,a,r,l,f,p,m=e.data,g=m.previous,h=m.next,b=m.post,v={fluid:null===(t=b.featuredImage)||void 0===t||null===(a=t.node)||void 0===a||null===(r=a.localFile)||void 0===r||null===(l=r.childImageSharp)||void 0===l?void 0:l.fluid,alt:(null===(f=b.featuredImage)||void 0===f||null===(p=f.node)||void 0===p?void 0:p.alt)||""};return i.a.createElement(u.a,null,i.a.createElement(c.a,{title:b.title,description:b.excerpt}),i.a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},i.a.createElement("header",null,i.a.createElement("h1",{itemProp:"headline"},Object(d.a)(b.title)),i.a.createElement("p",null,b.date),(null==v?void 0:v.fluid)&&i.a.createElement(s.a,{fluid:v.fluid,alt:v.alt,style:{marginBottom:50}})),!!b.content&&i.a.createElement("section",{itemProp:"articleBody"},Object(d.a)(b.content)),i.a.createElement("hr",null),i.a.createElement("footer",null,i.a.createElement(o.a,null))),i.a.createElement("nav",{className:"blog-post-nav"},i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,g&&i.a.createElement(n.Link,{to:g.uri,rel:"prev"},"← ",Object(d.a)(g.title))),i.a.createElement("li",null,h&&i.a.createElement(n.Link,{to:h.uri,rel:"next"},Object(d.a)(h.title)," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bb3189a04a69bdcbf9ea.js.map