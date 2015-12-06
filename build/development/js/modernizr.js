!function(e,t,n){function r(e,t){return typeof e===t}function a(){var e,t,n,a,o,s,i;for(var d in b)if(b.hasOwnProperty(d)){if(e=[],t=b[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],i=s.split("."),1===i.length?T[i[0]]=a:(!T[i[0]]||T[i[0]]instanceof Boolean||(T[i[0]]=new Boolean(T[i[0]])),T[i[0]][i[1]]=a),y.push((a?"":"no-")+i.join("-"))}}function o(e){var t=S.className,n=T._config.classPrefix||"";if(C&&(t=t.baseVal),T._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}T._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?S.className.baseVal=t:S.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||(e=s(C?"svg":"body"),e.fake=!0),e}function d(e,n,r,a){var o,d,l,c,u="modernizr",p=s("div"),f=i();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=a?a[r]:u+(r+1),p.appendChild(l);return o=s("style"),o.type="text/css",o.id="s"+u,(f.fake?f:p).appendChild(o),f.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=u,f.fake&&(f.style.background="",f.style.overflow="hidden",c=S.style.overflow,S.style.overflow="hidden",S.appendChild(f)),d=n(p,e),f.fake?(f.parentNode.removeChild(f),S.style.overflow=c,S.offsetHeight):p.parentNode.removeChild(p),!!d}function l(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var a;for(var o in e)if(e[o]in t)return n===!1?e[o]:(a=t[e[o]],r(a,"function")?u(a,n||t):a);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(t,r){var a=t.length;if("CSS"in e&&"supports"in e.CSS){for(;a--;)if(e.CSS.supports(f(t[a]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];a--;)o.push("("+f(t[a])+":"+r+")");return o=o.join(" or "),d("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,a,o){function i(){u&&(delete W.style,delete W.modElem)}if(o=r(o,"undefined")?!1:o,!r(a,"undefined")){var d=g(e,a);if(!r(d,"undefined"))return d}for(var u,p,f,m,v,h=["modernizr","tspan"];!W.style;)u=!0,W.modElem=s(h.shift()),W.style=W.modElem.style;for(f=e.length,p=0;f>p;p++)if(m=e[p],v=W.style[m],l(m,"-")&&(m=c(m)),W.style[m]!==n){if(o||r(a,"undefined"))return i(),"pfx"==t?m:!0;try{W.style[m]=a}catch(y){}if(W.style[m]!=v)return i(),"pfx"==t?m:!0}return i(),!1}function v(e,t,n,a,o){var s=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+B.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(i,t,a,o):(i=(e+" "+P.join(s+" ")+s).split(" "),p(i,t,n))}function h(e,t,r){return v(e,n,n,t,r)}var y=[],b=[],x={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},T=function(){};T.prototype=x,T=new T,T.addTest("applicationcache","applicationCache"in e),T.addTest("geolocation","geolocation"in navigator),T.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1});var w=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];x._prefixes=w;var S=t.documentElement,C="svg"===S.nodeName.toLowerCase(),k="Moz O ms Webkit",P=x._config.usePrefixes?k.toLowerCase().split(" "):[];x._domPrefixes=P,T.addTest("postmessage","postMessage"in e),T.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var E=function(){function e(e,t){var a;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,a=e in t,!a&&r&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),a="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),a):!1}var r=!("onblur"in t.documentElement);return e}();x.hasEvent=E,T.addTest("hashchange",function(){return E("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7}),T.addTest("audio",function(){var e=s("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),T.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),T.addTest("canvastext",function(){return T.canvas===!1?!1:"function"==typeof s("canvas").getContext("2d").fillText}),T.addTest("video",function(){var e=s("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),T.addTest("webgl",function(){var t=s("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e}),T.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING);var R=s("input"),_="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),A={};T.input=function(t){for(var n=0,r=t.length;r>n;n++)A[t[n]]=!!(t[n]in R);return A.list&&(A.list=!(!s("datalist")||!e.HTMLDataListElement)),A}(_);var z="search tel url email datetime date month week time datetime-local number range color".split(" "),$={};T.inputtypes=function(e){for(var r,a,o,s=e.length,i="1)",d=0;s>d;d++)R.setAttribute("type",r=e[d]),o="text"!==R.type&&"style"in R,o&&(R.value=i,R.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&R.style.WebkitAppearance!==n?(S.appendChild(R),a=t.defaultView,o=a.getComputedStyle&&"textfield"!==a.getComputedStyle(R,null).WebkitAppearance&&0!==R.offsetHeight,S.removeChild(R)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?R.checkValidity&&R.checkValidity()===!1:R.value!=i)),$[e[d]]=!!o;return $}(z),T.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",a=0,o=w.length-1;o>a;a++)e=0===a?"to ":"",r+=t+w[a]+"linear-gradient("+e+"left top, #9f9, white);";T._config.usePrefixes&&(r+=t+"-webkit-"+n);var i=s("a"),d=i.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),T.addTest("multiplebgs",function(){var e=s("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)});var N=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return d("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=N;var O=x.testStyles=d;O('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){T.addTest("generatedcontent",e.offsetHeight>=7)});var L=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,a=533>t&&e.match(/android/gi);return n||a||r}();L?T.addTest("fontface",!1):O('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),a=r.sheet||r.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"",s=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);T.addTest("fontface",s)});var B=x._config.usePrefixes?k.split(" "):[];x._cssomPrefixes=B,T.addTest("hsla",function(){var e=s("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",l(e.backgroundColor,"rgba")||l(e.backgroundColor,"hsla")});var I=function(t){var r,a=w.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var s=0;a>s;s++){var i=w[s],d=i.toUpperCase()+"_"+r;if(d in o)return"@-"+i.toLowerCase()+"-"+t}return!1};x.atRule=I,T.addTest("opacity",function(){var e=s("a").style;return e.cssText=w.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),T.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var M={elem:s("modernizr")};T._q.push(function(){delete M.elem});var W={style:M.elem.style};T._q.unshift(function(){delete W.style});var V=x.testProp=function(e,t,r){return m([e],n,t,r)};T.addTest("textshadow",V("textShadow","1px 1px")),x.testAllProps=v,x.testAllProps=h,T.addTest("flexbox",h("flexBasis","1px",!0)),T.addTest("flexboxlegacy",h("boxDirection","reverse",!0)),T.addTest("cssreflections",h("boxReflect","above",!0)),T.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)});var j=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?I(e):(-1!=e.indexOf("-")&&(e=c(e)),t?v(e,t,n):v(e,"pfx"))},q=j("indexedDB",e);T.addTest("indexeddb",!!q),q&&T.addTest("indexeddb.deletedatabase","deleteDatabase"in q),T.addTest("csstransitions",h("transition","all",!0)),T.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),T.addTest("websqldatabase","openDatabase"in e),T.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}});var G={}.toString;T.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(G.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),T.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),T.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(G.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))}),T.addTest("webworkers","Worker"in e);var U="CSS"in e&&"supports"in e.CSS,H="supportsCSS"in e;T.addTest("supports",U||H),T.addTest("csstransforms3d",function(){var e=!!h("perspective","1px",!0),t=T._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n,r="#modernizr{width:0;height:0}";T.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",O(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),T.addTest("cssanimations",h("animationName","a",!0)),T.addTest("backgroundsize",h("backgroundSize","100%",!0)),T.addTest("borderimage",h("borderImage","url() 1",!0)),T.addTest("borderradius",h("borderRadius","0px",!0)),T.addTest("boxshadow",h("boxShadow","1px 1px",!0)),function(){T.addTest("csscolumns",function(){var e=!1,t=h("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=h("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||h(n[r])),T.addTest("csscolumns."+e,t)}(),a(),o(y),delete x.addTest,delete x.addAsyncTest;for(var D=0;D<T._q.length;D++)T._q[D]();e.Modernizr=T}(window,document);