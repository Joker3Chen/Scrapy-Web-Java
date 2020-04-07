/*!
 * weui.js v1.2.1 (https://weui.io)
 * Copyright 2019, wechat ui team
 * MIT license
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.weui=t():e.weui=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=i(a),r=n(7),u=i(r),l=n(8),s=i(l),d=n(9),f=i(d),c=n(11),p=i(c),h=n(13),v=i(h),m=n(15),_=i(m),g=n(17),w=i(g),y=n(18),b=i(y),k=n(19),x=i(k),C=n(20),M=i(C),E=n(24),j=n(30),S=i(j),O=n(32),P=i(O);t.default={dialog:o.default,alert:u.default,confirm:s.default,toast:f.default,loading:p.default,actionSheet:v.default,topTips:_.default,searchBar:w.default,tab:b.default,form:x.default,uploader:M.default,picker:E.picker,datePicker:E.datePicker,gallery:S.default,slider:P.default},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){function e(t){e=r.default.noop,u.addClass("weui-animate-fade-out"),o.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){a.remove(),s=!1,t&&t()})}function t(t){e(t)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(s)return s;var i=r.default.os.android;n=r.default.extend({title:null,content:"",className:"",buttons:[{label:"确定",type:"primary",onClick:r.default.noop}],isAndroid:i},n);var a=(0,r.default)(r.default.render(l.default,n)),o=a.find(".weui-dialog"),u=a.find(".weui-mask");return(0,r.default)("body").append(a),u.addClass("weui-animate-fade-in"),o.addClass("weui-animate-fade-in"),a.on("click",".weui-dialog__btn",function(e){var i=(0,r.default)(this).index();n.buttons[i].onClick?n.buttons[i].onClick.call(this,e)!==!1&&t():t()}).on("touchmove",function(e){e.stopPropagation(),e.preventDefault()}),s=a[0],s.hide=t,s}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(6),l=i(u),s=void 0;t.default=a,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=this.os={},n=e.match(/(Android);?[\s\/]+([\d.]+)?/);n&&(t.android=!0,t.version=n[2])}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n(3);var r=n(4),u=i(r),l=n(5),s=i(l);a.call(s.default,navigator.userAgent),(0,u.default)(s.default.fn,{append:function(e){return e instanceof HTMLElement||(e=e[0]),this.forEach(function(t){t.appendChild(e)}),this},remove:function(){return this.forEach(function(e){e.parentNode.removeChild(e)}),this},find:function(e){return(0,s.default)(e,this)},addClass:function(e){return this.forEach(function(t){t.classList.add(e)}),this},removeClass:function(e){return this.forEach(function(t){t.classList.remove(e)}),this},eq:function(e){return(0,s.default)(this[e])},show:function(){return this.forEach(function(e){e.style.display="block"}),this},hide:function(){return this.forEach(function(e){e.style.display="none"}),this},html:function(e){return this.forEach(function(t){t.innerHTML=e}),this},css:function(e){var t=this;return Object.keys(e).forEach(function(n){t.forEach(function(t){t.style[n]=e[n]})}),this},on:function(e,t,n){var i="string"==typeof t&&"function"==typeof n;return i||(n=t),this.forEach(function(a){e.split(" ").forEach(function(e){a.addEventListener(e,function(e){i?this.contains(e.target.closest(t))&&n.call(e.target,e):n.call(this,e)})})}),this},off:function(e,t,n){return"function"==typeof t&&(n=t,t=null),this.forEach(function(i){e.split(" ").forEach(function(e){"string"==typeof t?i.querySelectorAll(t).forEach(function(t){t.removeEventListener(e,n)}):i.removeEventListener(e,n)})}),this},index:function(){var e=this[0],t=e.parentNode;return Array.prototype.indexOf.call(t.children,e)},offAll:function(){var e=this;return this.forEach(function(t,n){var i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),e[n]=i}),this},val:function(){var e=arguments;return arguments.length?(this.forEach(function(t){t.value=e[0]}),this):this[0].value},attr:function(){var e=arguments;if("object"==o(arguments[0])){var t=arguments[0],n=this;return Object.keys(t).forEach(function(e){n.forEach(function(n){n.setAttribute(e,t[e])})}),this}return"string"==typeof arguments[0]&&arguments.length<2?this[0].getAttribute(arguments[0]):(this.forEach(function(t){t.setAttribute(e[0],e[1])}),this)}}),(0,u.default)(s.default,{extend:u.default,noop:function(){},render:function(e,t){var n="var p=[];with(this){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');";return new Function(n).apply(t)},getStyle:function(e,t){var n,i=(e.ownerDocument||document).defaultView;return i&&i.getComputedStyle?(t=t.replace(/([A-Z])/g,"-$1").toLowerCase(),i.getComputedStyle(e,null).getPropertyValue(t)):e.currentStyle?(t=t.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()}),n=e.currentStyle[t],/^\d+(em|pt|%|ex)?$/i.test(n)?function(t){var n=e.style.left,i=e.runtimeStyle.left;return e.runtimeStyle.left=e.currentStyle.left,e.style.left=t||0,t=e.style.pixelLeft+"px",e.style.left=n,e.runtimeStyle.left=i,t}(n):n):void 0}}),t.default=s.default,e.exports=t.default},function(e,t){!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),i=0;n[i]&&n[i]!==t;)++i;return Boolean(n[i])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype)},function(e,t){/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function i(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var i=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==i.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}var a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=i()?Object.assign:function(e,t){for(var i,u,l=n(e),s=1;s<arguments.length;s++){i=Object(arguments[s]);for(var d in i)o.call(i,d)&&(l[d]=i[d]);if(a){u=a(i);for(var f=0;f<u.length;f++)r.call(i,u[f])&&(l[u[f]]=i[u[f]])}}return l}},function(e,t,n){var i,a;!function(n,o){o=function(e,t,n){function i(a,o,r){return r=Object.create(i.fn),a&&r.push.apply(r,a[t]?[a]:""+a===a?/</.test(a)?((o=e.createElement(o||t)).innerHTML=a,o.children):o?(o=i(o)[0])?o[n](a):r:e[n](a):"function"==typeof a?e.readyState[7]?a():e[t]("DOMContentLoaded",a):a),r}return i.fn=[],i.one=function(e,t){return i(e,t)[0]||null},i}(document,"addEventListener","querySelectorAll"),i=[],a=function(){return o}.apply(t,i),!(void 0!==a&&(e.exports=a))}(this)},function(e,t){e.exports='<div class="<%=className%>"> <div class=weui-mask></div> <div class="weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class="weui-dialog__btn weui-dialog__btn_<%=buttons[i][\'type\']%>"><%=buttons[i][\'label\']%></a> <% } %> </div> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.default.noop,n=arguments[2];return"object"===("undefined"==typeof t?"undefined":o(t))&&(n=t,t=u.default.noop),n=u.default.extend({content:e,buttons:[{label:"确定",type:"primary",onClick:t}]},n),(0,s.default)(n)}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(2),u=i(r),l=n(1),s=i(l);t.default=a,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.default.noop,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.default.noop,i=arguments[3];return"object"===("undefined"==typeof t?"undefined":o(t))?(i=t,t=u.default.noop):"object"===("undefined"==typeof n?"undefined":o(n))&&(i=n,n=u.default.noop),i=u.default.extend({content:e,buttons:[{label:"取消",type:"default",onClick:n},{label:"确定",type:"primary",onClick:t}]},i),(0,s.default)(i)}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(2),u=i(r),l=n(1),s=i(l);t.default=a,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s)return s;"number"==typeof t&&(t={duration:t}),"function"==typeof t&&(t={callback:t}),t=r.default.extend({content:e,duration:3e3,callback:r.default.noop,className:""},t);var n=(0,r.default)(r.default.render(l.default,t)),i=n.find(".weui-toast"),a=n.find(".weui-mask");return(0,r.default)("body").append(n),i.addClass("weui-animate-fade-in"),a.addClass("weui-animate-fade-in"),setTimeout(function(){a.addClass("weui-animate-fade-out"),i.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){n.remove(),s=!1,t.callback()})},t.duration),s=n[0],n[0]}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(10),l=i(u),s=void 0;t.default=a,e.exports=t.default},function(e,t){e.exports='<div class="<%= className %>"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class="weui-icon_toast weui-icon-success-no-circle"></i> <p class=weui-toast__content><%=content%></p> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){function e(t){e=r.default.noop,u.addClass("weui-animate-fade-out"),o.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){a.remove(),s=!1,t&&t()})}function t(t){e(t)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s)return s;i=r.default.extend({content:n,className:""},i);var a=(0,r.default)(r.default.render(l.default,i)),o=a.find(".weui-toast"),u=a.find(".weui-mask");return(0,r.default)("body").append(a),o.addClass("weui-animate-fade-in"),u.addClass("weui-animate-fade-in"),s=a[0],s.hide=t,s}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(12),l=i(u),s=void 0;t.default=a,e.exports=t.default},function(e,t){e.exports='<div class="weui-loading_toast <%= className %>"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class="weui-loading weui-icon_toast"></i> <p class=weui-toast__content><%=content%></p> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){function e(t){e=r.default.noop,d.addClass(a.isAndroid?"weui-animate-fade-out":"weui-animate-slide-down"),f.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){u.remove(),s=!1,a.onClose(),t&&t()})}function t(t){e(t)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(s)return s;var o=r.default.os.android;a=r.default.extend({menus:n,actions:i,title:"",className:"",isAndroid:o,onClose:r.default.noop},a);var u=(0,r.default)(r.default.render(l.default,a)),d=u.find(".weui-actionsheet"),f=u.find(".weui-mask");return(0,r.default)("body").append(u),r.default.getStyle(d[0],"transform"),d.addClass(a.isAndroid?"weui-animate-fade-in":"weui-animate-slide-up"),f.addClass("weui-animate-fade-in").on("click",function(){t()}),u.find(".weui-actionsheet__menu").on("click",".weui-actionsheet__cell",function(e){var i=(0,r.default)(this).index();n[i].onClick.call(this,e),t()}),u.find(".weui-actionsheet__action").on("click",".weui-actionsheet__cell",function(e){var n=(0,r.default)(this).index();i[n].onClick.call(this,e),t()}),s=u[0],s.hide=t,s}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(14),l=i(u),s=void 0;t.default=a,e.exports=t.default},function(e,t){e.exports='<div class="<% if(isAndroid){ %>weui-skin_android <% } %><%= className %>"> <div class=weui-mask></div> <div class=weui-actionsheet> <% if(!isAndroid && title){ %> <div class=weui-actionsheet__title> <p class=weui-actionsheet__title-text><%= title %></p> </div> <% } %> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){function t(e){t=r.default.noop,a.remove(),e&&e(),i.callback(),s=null}function n(e){t(e)}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"number"==typeof i&&(i={duration:i}),"function"==typeof i&&(i={callback:i}),i=r.default.extend({content:e,duration:3e3,callback:r.default.noop,className:""},i);var a=(0,r.default)(r.default.render(l.default,i));return(0,r.default)("body").append(a),s&&(clearTimeout(s.timeout),s.hide()),s={hide:n},s.timeout=setTimeout(n,i.duration),a[0].hide=n,a[0]}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(16),l=i(u),s=null;t.default=a,e.exports=t.default},function(e,t){e.exports='<div class="weui-toptips weui-toptips_warn <%= className %>" style=display:block><%= content %></div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=(0,r.default)(e);return t.forEach(function(e){function t(){a.val(""),n.removeClass("weui-search-bar_focusing")}var n=(0,r.default)(e),i=n.find(".weui-search-bar__label"),a=n.find(".weui-search-bar__input"),o=n.find(".weui-icon-clear"),u=n.find(".weui-search-bar__cancel-btn");i.on("click",function(){n.addClass("weui-search-bar_focusing"),a[0].focus()}),a.on("blur",function(){this.value.length||t()}),o.on("click",function(){a.val(""),a[0].focus()}),u.on("click",function(){t(),a[0].blur()})}),t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o);t.default=a,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,r.default)(e);return t=r.default.extend({defaultIndex:0,onChange:r.default.noop},t),n.forEach(function(e){var n=(0,r.default)(e),i=n.find(".weui-navbar__item, .weui-tabbar__item"),a=n.find(".weui-tab__content");i.eq(t.defaultIndex).addClass("weui-bar__item_on"),a.eq(t.defaultIndex).show(),i.on("click",function(){var e=(0,r.default)(this),n=e.index();i.removeClass("weui-bar__item_on"),e.addClass("weui-bar__item_on"),a.hide(),a.eq(n).show(),t.onChange.call(this,n)})}),this}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o);t.default=a,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return e&&e.classList?e.classList.contains("weui-cell")?e:a(e.parentNode):null}function o(e,t,n){var i=e[0],a=e.val();if("INPUT"==i.tagName||"TEXTAREA"==i.tagName){var o=i.getAttribute("pattern")||"";if("radio"==i.type){for(var r=t.find('input[type="radio"][name="'+i.name+'"]'),u=0,l=r.length;u<l;++u)if(r[u].checked)return null;return"empty"}if("checkbox"==i.type){if(o){var s=t.find('input[type="checkbox"][name="'+i.name+'"]'),d=o.replace(/[{\s}]/g,"").split(","),f=0;if(2!=d.length)throw i.outerHTML+" regexp is wrong.";return s.forEach(function(e){e.checked&&++f}),""===d[1]?f>=parseInt(d[0])?null:0==f?"empty":"notMatch":parseInt(d[0])<=f&&f<=parseInt(d[1])?null:0==f?"empty":"notMatch"}return i.checked?null:"empty"}if(o){if(/^REG_/.test(o)){if(!n)throw"RegExp "+o+" is empty.";if(o=o.replace(/^REG_/,""),!n[o])throw"RegExp "+o+" has not found.";o=n[o]}return new RegExp(o).test(a)?null:e.val().length?"notMatch":"empty"}return e.val().length?null:"empty"}return a.length?null:"empty"}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.default.noop,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=(0,f.default)(e);return i.forEach(function(e){var i=(0,f.default)(e),a=i.find("[required]");"function"!=typeof t&&(t=l);for(var r=0,u=a.length;r<u;++r){var s=a.eq(r),d=o(s,i,n.regexp),c={ele:s[0],msg:d};if(d)return void(t(c)||l(c))}t(null)}),this}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,f.default)(e);return n.forEach(function(e){var n=(0,f.default)(e);n.find("[required]").on("blur",function(){if("checkbox"!=this.type&&"radio"!=this.type){var e=(0,f.default)(this);if(!(e.val().length<1)){var i=o(e,n,t.regexp);i&&l({ele:e[0],msg:i})}}}).on("focus",function(){s(this)})}),this}function l(e){if(e){var t=(0,f.default)(e.ele),n=e.msg,i=t.attr(n+"Tips")||t.attr("tips")||t.attr("placeholder");if(i&&(0,p.default)(i),"checkbox"==e.ele.type||"radio"==e.ele.type)return;var o=a(e.ele);o&&o.classList.add("weui-cell_warn")}}function s(e){var t=a(e);t&&t.classList.remove("weui-cell_warn")}Object.defineProperty(t,"__esModule",{value:!0});var d=n(2),f=i(d),c=n(15),p=i(c);t.default={showErrorTips:l,hideErrorTips:s,validate:r,checkIfBlur:u},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){function n(e,t){var n=e.find('[data-id="'+t+'"]'),i=n.find(".weui-uploader__file-content");return i.length||(i=(0,r.default)('<div class="weui-uploader__file-content"></div>'),n.append(i)),n.addClass("weui-uploader__file_status"),i}function i(e,t){var n=e.find('[data-id="'+t+'"]').removeClass("weui-uploader__file_status");n.find(".weui-uploader__file-content").remove()}function a(e){e.url=u.createObjectURL(e),e.status="ready",e.upload=function(){(0,f.default)(r.default.extend({$uploader:o,file:e},t))},e.stop=function(){this.xhr.abort()},t.onQueued(e),t.auto&&e.upload()}var o=(0,r.default)(e),u=window.URL||window.webkitURL||window.mozURL;if(t=r.default.extend({url:"",auto:!0,type:"file",fileVal:"file",xhrFields:{},onBeforeQueued:r.default.noop,onQueued:r.default.noop,onBeforeSend:r.default.noop,onSuccess:r.default.noop,onProgress:r.default.noop,onError:r.default.noop},t),t.compress!==!1&&(t.compress=r.default.extend({width:1600,height:1600,quality:.8},t.compress)),t.onBeforeQueued){var d=t.onBeforeQueued;t.onBeforeQueued=function(e,t){var n=d.call(e,t);if(n===!1)return!1;if(n!==!0){var i=(0,r.default)(r.default.render(l.default,{id:e.id}));o.find(".weui-uploader__files").append(i)}}}if(t.onQueued){var p=t.onQueued;t.onQueued=function(e){if(!p.call(e)){var n=o.find('[data-id="'+e.id+'"]');n.css({backgroundImage:'url("'+(e.base64||e.url)+'")'}),t.auto||i(o,e.id)}}}if(t.onBeforeSend){var h=t.onBeforeSend;t.onBeforeSend=function(e,t,n){var i=h.call(e,t,n);if(i===!1)return!1}}if(t.onSuccess){var v=t.onSuccess;t.onSuccess=function(e,t){e.status="success",v.call(e,t)||i(o,e.id)}}if(t.onProgress){var m=t.onProgress;t.onProgress=function(e,t){m.call(e,t)||n(o,e.id).html(t+"%")}}if(t.onError){var _=t.onError;t.onError=function(e,t){e.status="fail",_.call(e,t)||n(o,e.id).html('<i class="weui-icon-warn"></i>')}}o.find('input[type="file"]').on("change",function(e){var n=e.target.files;0!==n.length&&(t.compress===!1&&"file"==t.type?Array.prototype.forEach.call(n,function(e){e.id=++c,t.onBeforeQueued(e,n)!==!1&&a(e)}):Array.prototype.forEach.call(n,function(e){e.id=++c,t.onBeforeQueued(e,n)!==!1&&(0,s.compress)(e,t,function(e){e&&a(e)})}),this.value="")})}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(21),l=i(u),s=n(22),d=n(23),f=i(d),c=0;t.default=a,e.exports=t.default},function(e,t){e.exports='<li class="weui-uploader__file weui-uploader__file_status" data-id="<%= id %>"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> '},function(e,t){"use strict";function n(e){var t,n=e.naturalHeight,i=document.createElement("canvas");i.width=1,i.height=n;var a=i.getContext("2d");a.drawImage(e,0,0);try{t=a.getImageData(0,0,1,n).data}catch(e){return 1}for(var o=0,r=n,u=n;u>o;){var l=t[4*(u-1)+3];0===l?r=u:o=u,u=r+o>>1}var s=u/n;return 0===s?1:s}function i(e){for(var t=atob(e.split(",")[1]),n=new ArrayBuffer(t.length),i=new Uint8Array(n),a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return n}function a(e){var t=e.split(",")[0].split(":")[1].split(";")[0],n=i(e);return new Blob([n],{type:t})}function o(e){var t=new DataView(e);if(65496!=t.getUint16(0,!1))return-2;for(var n=t.byteLength,i=2;i<n;){var a=t.getUint16(i,!1);if(i+=2,65505==a){if(1165519206!=t.getUint32(i+=2,!1))return-1;var o=18761==t.getUint16(i+=6,!1);i+=t.getUint32(i+4,o);var r=t.getUint16(i,o);i+=2;for(var u=0;u<r;u++)if(274==t.getUint16(i+12*u,o))return t.getUint16(i+12*u+8,o)}else{if(65280!=(65280&a))break;i+=t.getUint16(i,!1)}}return-1}function r(e,t,n){var i=e.width,a=e.height;switch(n>4&&(e.width=a,e.height=i),n){case 2:t.translate(i,0),t.scale(-1,1);break;case 3:t.translate(i,a),t.rotate(Math.PI);break;case 4:t.translate(0,a),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-a);break;case 7:t.rotate(.5*Math.PI),t.translate(i,-a),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-i,0)}}function u(e,t,u){var l=new FileReader;l.onload=function(l){if(t.compress===!1)return e.base64=l.target.result,void u(e);var s=new Image;s.onload=function(){var l=n(s),d=o(i(s.src)),f=document.createElement("canvas"),c=f.getContext("2d"),p=t.compress.width,h=t.compress.height,v=s.width,m=s.height,_=void 0;if(v<m&&m>h?(v=parseInt(h*s.width/s.height),m=h):v>=m&&v>p&&(m=parseInt(p*s.height/s.width),v=p),f.width=v,f.height=m,d>0&&r(f,c,d),c.drawImage(s,0,0,v,m/l),_=/image\/jpeg/.test(e.type)||/image\/jpg/.test(e.type)?f.toDataURL("image/jpeg",t.compress.quality):f.toDataURL(e.type),"file"==t.type)if(/;base64,null/.test(_)||/;base64,$/.test(_))u(e);else{var g=a(_);g.id=e.id,g.name=e.name,g.lastModified=e.lastModified,g.lastModifiedDate=e.lastModifiedDate,u(g)}else/;base64,null/.test(_)||/;base64,$/.test(_)?(t.onError(e,new Error("Compress fail, dataURL is "+_+".")),u()):(e.base64=_,u(e))},s.src=l.target.result},l.readAsDataURL(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={compress:u},e.exports=t.default},function(e,t){"use strict";function n(e){var t=e.url,n=e.file,i=e.fileVal,a=e.onBeforeSend,o=e.onProgress,r=e.onError,u=e.onSuccess,l=e.xhrFields,s=n.name,d=n.type,f=n.lastModifiedDate,c={name:s,type:d,size:"file"==e.type?n.size:n.base64.length,lastModifiedDate:f},p={};if(a(n,c,p)!==!1){n.status="progress",o(n,0);var h=new FormData,v=new XMLHttpRequest;n.xhr=v,Object.keys(c).forEach(function(e){h.append(e,c[e])}),"file"==e.type?h.append(i,n,s):h.append(i,n.base64),v.onreadystatechange=function(){if(4==v.readyState)if(200==v.status)try{var e=JSON.parse(v.responseText);u(n,e)}catch(e){r(n,e)}else r(n,new Error("XMLHttpRequest response status is "+v.status))},v.upload.addEventListener("progress",function(e){if(0!=e.total){var t=100*Math.ceil(e.loaded/e.total);o(n,t)}},!1),v.open("POST",t),Object.keys(l).forEach(function(e){v[e]=l[e]}),Object.keys(p).forEach(function(e){v.setRequestHeader(e,p[e])}),v.send(h)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e){"object"!=("undefined"==typeof e?"undefined":l(e))&&(e={label:e,value:e}),d.default.extend(this,e)}function r(){function e(){(0,d.default)(r.container).append(v),d.default.getStyle(v[0],"transform"),v.find(".weui-half-screen-dialog__title").html(r.title),v.find(".weui-mask").addClass("weui-animate-fade-in"),v.find(".weui-picker").addClass("weui-animate-slide-up")}function t(e){t=d.default.noop,v.find(".weui-mask").addClass("weui-animate-fade-out"),v.find(".weui-picker").addClass("weui-animate-slide-down").on("animationend webkitAnimationEnd",function(){v.remove(),w=!1,r.onClose(),e&&e()})}function n(e){t(e)}function i(e,t){if(void 0===p[t]&&r.defaultValue&&void 0!==r.defaultValue[t]){var n=r.defaultValue[t],a=0,u=e.length;if("object"==l(e[a]))for(;a<u&&n!=e[a].value;++a);else for(;a<u&&n!=e[a];++a);a<u&&(p[t]=a)}v.find(".weui-picker__group").eq(t).scroll({items:e,temp:p[t],onChange:function(e,n){if(e?c[t]=new o(e):c[t]=null,p[t]=n,s)c.length==_&&r.onChange(c);else if(e.children&&e.children.length>0)v.find(".weui-picker__group").eq(t+1).show(),!s&&i(e.children,t+1);else{var a=v.find(".weui-picker__group");a.forEach(function(e,n){n>t&&(0,d.default)(e).hide()}),c.splice(t+1),r.onChange(c)}},onConfirm:r.onConfirm})}if(w)return w;var a=arguments[arguments.length-1],r=d.default.extend({id:"default",className:"",container:"body",title:"",onChange:d.default.noop,onConfirm:d.default.noop,onClose:d.default.noop},a),u=void 0,s=!1;if(arguments.length>2){var f=0;for(u=[];f<arguments.length-1;)u.push(arguments[f++]);s=!0}else u=arguments[0];y[r.id]=y[r.id]||[];for(var c=[],p=y[r.id],v=(0,d.default)(d.default.render(m.default,r)),_=a.depth||(s?u.length:h.depthOf(u[0])),b="",k=_;k--;)b+=g.default;return v.find(".weui-picker__bd").html(b),e(),s?u.forEach(function(e,t){i(e,t)}):i(u,0),v.on("click",".weui-mask",function(){n()}).on("click",".weui-picker__btn",function(){n()}).on("click","#weui-picker-confirm",function(){r.onConfirm(c)}),w=v[0],w.hide=n,w}function u(e){var t=new Date,n=d.default.extend({id:"datePicker",onChange:d.default.noop,onConfirm:d.default.noop,start:t.getFullYear()-20,end:t.getFullYear()+20,defaultValue:[t.getFullYear(),t.getMonth()+1,t.getDate()],cron:"* * *"},e);"number"==typeof n.start?n.start=new Date(n.start+"/01/01"):"string"==typeof n.start&&(n.start=new Date(n.start.replace(/-/g,"/"))),"number"==typeof n.end?n.end=new Date(n.end+"/12/31"):"string"==typeof n.end&&(n.end=new Date(n.end.replace(/-/g,"/")));var i=function(e,t,n){for(var i=0,a=e.length;i<a;i++){var o=e[i];if(o[t]==n)return o}},a=[],o=c.default.parse(n.cron,n.start,n.end),u=void 0;do{u=o.next();var l=u.value.getFullYear(),s=u.value.getMonth()+1,f=u.value.getDate(),p=i(a,"value",l);p||(p={label:l+"年",value:l,children:[]},a.push(p));var h=i(p.children,"value",s);h||(h={label:s+"月",value:s,children:[]},p.children.push(h)),h.children.push({label:f+"日",value:f})}while(!u.done);return r(a,n)}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(2),d=a(s),f=n(25),c=a(f);n(26);var p=n(27),h=i(p),v=n(28),m=a(v),_=n(29),g=a(_);o.prototype.toString=function(){return this.value},o.prototype.valueOf=function(){return this.value};var w=void 0,y={};t.default={picker:r,datePicker:u},e.exports=t.default},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){var n=t[0],i=t[1],a=[],o=void 0;e=e.replace(/\*/g,n+"-"+i);for(var u=e.split(","),l=0,s=u.length;l<s;l++){var d=u[l];d.match(r)&&d.replace(r,function(e,t,r,u){u=parseInt(u)||1,t=Math.min(Math.max(n,~~Math.abs(t)),i),r=r?Math.min(i,~~Math.abs(r)):t,o=t;do a.push(o),o+=u;while(o<=r)})}return a}function a(e,t,n){var a=e.replace(/^\s\s*|\s\s*$/g,"").split(/\s+/),o=[];return a.forEach(function(e,t){var n=u[t];o.push(i(e,n))}),new l(o,t,n)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=/^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g,u=[[1,31],[1,12],[0,6]],l=function(){function e(t,i,a){n(this,e),this._dates=t[0],this._months=t[1],this._days=t[2],this._start=i,this._end=a,this._pointer=i}return o(e,[{key:"_findNext",value:function(){for(var e=void 0;;){if(this._end.getTime()-this._pointer.getTime()<0)throw new Error("out of range, end is "+this._end+", current is "+this._pointer);var t=this._pointer.getMonth(),n=this._pointer.getDate(),i=this._pointer.getDay();if(this._months.indexOf(t+1)!==-1)if(this._dates.indexOf(n)!==-1){if(this._days.indexOf(i)!==-1){e=new Date(this._pointer);break}this._pointer.setDate(n+1)}else this._pointer.setDate(n+1);else this._pointer.setMonth(t+1),this._pointer.setDate(1)}return e}},{key:"next",value:function(){var e=this._findNext();return this._pointer.setDate(this._pointer.getDate()+1),{value:e,done:!this.hasNext()}}},{key:"hasNext",value:function(){try{return this._findNext(),!0}catch(e){return!1}}}]),e}();t.default={parse:a},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(2),r=i(o),u=function(e,t){return e.css({"-webkit-transition":"all "+t+"s",transition:"all "+t+"s"})},l=function(e,t){return e.css({"-webkit-transform":"translate3d(0, "+t+"px, 0)",transform:"translate3d(0, "+t+"px, 0)"})},s=function(e){for(var t=Math.floor(e.length/2),n=0;e[t]&&e[t].disabled;)if(t=++t%e.length,n++,n>e.length)throw new Error("No selectable item.");return t},d=function(e,t,n){var i=s(n);return(e-i)*t},f=function(e,t){return e*t},c=function(e,t,n){return-(t*(n-e-1))};r.default.fn.scroll=function(e){function t(e){_=e,w=+new Date}function n(e){g=e;var t=g-_;u(m,0),l(m,y+t),w=+new Date,b.push({time:w,y:g}),b.length>40&&b.shift()}function i(e){if(_){var t=(new Date).getTime(),n=v[0].getBoundingClientRect().top+p.bodyHeight/2;if(g=e,t-w>100)C(Math.abs(g-_)>10?g-_:n-g);else if(Math.abs(g-_)>10){for(var i=b.length-1,a=i,o=i;o>0&&w-b[o].time<100;o--)a=o;if(a!==i){var r=b[i],u=b[a],l=r.time-u.time,s=r.y-u.y,d=s/l,f=150*d+(g-_);C(f)}else C(0)}else C(n-g);_=null}}var o=this,p=r.default.extend({items:[],scrollable:".weui-picker__content",offset:2,rowHeight:48,onChange:r.default.noop,temp:null,bodyHeight:240},e),h=p.items.map(function(e){return'<div class="weui-picker__item'+(e.disabled?" weui-picker__item_disabled":"")+'">'+("object"==("undefined"==typeof e?"undefined":a(e))?e.label:e)+"</div>"}).join(""),v=(0,r.default)(this);v.find(".weui-picker__content").html(h);var m=v.find(p.scrollable),_=void 0,g=void 0,w=void 0,y=void 0,b=[];if(null!==p.temp&&p.temp<p.items.length){var k=p.temp;p.onChange.call(this,p.items[k],k),y=(p.offset-k)*p.rowHeight}else{var x=s(p.items);p.onChange.call(this,p.items[x],x),y=d(p.offset,p.rowHeight,p.items)}l(m,y);var C=function(e){y+=e,y=Math.round(y/p.rowHeight)*p.rowHeight;var t=f(p.offset,p.rowHeight),n=c(p.offset,p.rowHeight,p.items.length);y>t&&(y=t),y<n&&(y=n);for(var i=p.offset-y/p.rowHeight;p.items[i]&&p.items[i].disabled;)e>0?++i:--i;y=(p.offset-i)*p.rowHeight,u(m,.3),l(m,y),p.onChange.call(o,p.items[i],i)};m=v.offAll().on("touchstart",function(e){t(e.changedTouches[0].pageY)}).on("touchmove",function(e){n(e.changedTouches[0].pageY),e.preventDefault()}).on("touchend",function(e){i(e.changedTouches[0].pageY)}).find(p.scrollable);var M="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch;M||v.on("mousedown",function(e){t(e.pageY),e.stopPropagation(),e.preventDefault()}).on("mousemove",function(e){_&&(n(e.pageY),e.stopPropagation(),e.preventDefault())}).on("mouseup mouseleave",function(e){i(e.pageY),e.stopPropagation(),e.preventDefault()})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.depthOf=function e(t){var n=1;return t.children&&t.children[0]&&(n=e(t.children[0])+1),n}},function(e,t){e.exports=' <div class="<%= className %>"> <div class=weui-mask></div> <div class="weui-half-screen-dialog weui-picker"> <div class=weui-half-screen-dialog__hd> <div class=weui-half-screen-dialog__hd__side> <button class="weui-icon-btn weui-icon-btn_close weui-picker__btn">关闭</button> </div> <div class=weui-half-screen-dialog__hd__main> <strong class=weui-half-screen-dialog__title>标题</strong> </div> </div> <div class=weui-half-screen-dialog__bd> <div class=weui-picker__bd></div> </div> <div class=weui-half-screen-dialog__ft> <a href=javascript:; class="weui-btn weui-btn_primary weui-picker__btn" id=weui-picker-confirm data-action=select>确定</a> </div> </div> </div>'},function(e,t){e.exports="<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>"},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){function t(e){t=r.default.noop,a.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){a.remove(),s=!1,e&&e()})}function n(e){t(e)}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s)return s;i=r.default.extend({className:"",onDelete:r.default.noop},i);var a=(0,r.default)(r.default.render(l.default,r.default.extend({url:e},i)));return(0,r.default)("body").append(a),a.find(".weui-gallery__img").on("click",function(){n()}),a.find(".weui-gallery__del").on("click",function(){i.onDelete.call(this,e)}),a.show().addClass("weui-animate-fade-in"),s=a[0],s.hide=n,s}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(31),l=i(u),s=void 0;t.default=a,e.exports=t.default},function(e,t){e.exports='<div class="weui-gallery <%= className %>"> <span class=weui-gallery__img style="background-image:url(<%= url %>)"></span> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class="weui-icon-delete weui-icon_gallery-delete"></i> </a> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,r.default)(e);if(t=r.default.extend({step:void 0,defaultValue:0,onChange:r.default.noop},t),void 0!==t.step&&(t.step=parseFloat(t.step),!t.step||t.step<0))throw new Error("Slider step must be a positive number.");if(void 0!==t.defaultValue&&t.defaultValue<0||t.defaultValue>100)throw new Error("Slider defaultValue must be >= 0 and <= 100.");return n.forEach(function(e){function n(){var e=r.default.getStyle(l[0],"left");return e=/%/.test(e)?s*parseFloat(e)/100:parseFloat(e)}function i(n){var i=void 0,a=void 0;t.step&&(n=Math.round(n/p)*p),i=f+n,i=i<0?0:i>s?s:i,a=100*i/s,u.css({width:a+"%"}),l.css({left:a+"%"}),t.onChange.call(e,a)}var a=(0,r.default)(e),o=a.find(".weui-slider__inner"),u=a.find(".weui-slider__track"),l=a.find(".weui-slider__handler"),s=parseInt(r.default.getStyle(o[0],"width")),d=o[0].offsetLeft,f=0,c=0,p=void 0;t.step&&(p=s*t.step/100),t.defaultValue&&i(s*t.defaultValue/100),a.on("click",function(e){e.preventDefault(),f=n(),i(e.pageX-d-f)}),l.on("touchstart",function(e){f=n(),c=e.changedTouches[0].clientX}).on("touchmove",function(e){e.preventDefault(),i(e.changedTouches[0].clientX-c)})}),this}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o);t.default=a,e.exports=t.default}])});
// 京价保
var observeDOM = (function () {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver
  return function (obj, callback) {
    // define a new observer
    var obs = new MutationObserver(function (mutations, observer) {
      if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
        callback(observer);
      }
    });
    // have the observer observe foo for changes in children
    obs.observe(obj, { childList: true, subtree: true });
  };
})();

function priceFormatter(price) {
  return Number(Number(price).toFixed(2))
}

function injectScript(file, node) {
  var th = document.getElementsByTagName(node)[0];
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('charset', "UTF-8");
  s.setAttribute('src', file);
  th.appendChild(s);
}

function injectScriptCode(code, node) {
  var th = document.getElementsByTagName(node)[0];
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('language', 'JavaScript');
  script.textContent = code;
  th.appendChild(script);
}

injectScriptCode(`
  if (typeof hrl != 'undefined' && typeof host != 'undefined') {
    document.write('<a style="display:none" href="' + hrl + '" id="exe"></a>');
    document.getElementById('exe').click()
  }
`, 'body')

function escapeSpecialChars(jsonString) {
  return jsonString.replace(/\\n/g, "\\n").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, "\\r").replace(/\\t/g, "\\t").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f");
}

async function fetchProductPage(sku) {
  var resp = await fetch('https://item.m.jd.com/product/' + sku + '.html', {
    cache: 'no-cache'
  })
  var page = await resp.text()
  if ($(page)[0] && $(page)[0].id == 'returnurl') {
    var url = $(page)[0].value.replace("http://", "https://")
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);

    if (request.status === 200) {
      var newData = request.responseText
      request.abort();
      return newData
    } else {
      request.abort();
      throw new Error('GET Error')
    }
  } else {
    return page
  }
}

function mockClick(element) {
  var dispatchMouseEvent = function (target, var_args) {
    var e = document.createEvent("MouseEvents");
    e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
    target.dispatchEvent(e);
  };
  if (element) {
    dispatchMouseEvent(element, 'mouseover', true, true);
    dispatchMouseEvent(element, 'mousedown', true, true);
    dispatchMouseEvent(element, 'click', true, true);
    dispatchMouseEvent(element, 'mouseup', true, true);
  }
}

/* eventType is 'touchstart', 'touchmove', 'touchend'... */
function sendTouchEvent(x, y, element, eventType) {
  const touchObj = new Touch({
    identifier: Date.now(),
    target: element,
    clientX: x,
    clientY: y,
    radiusX: 2.5,
    radiusY: 2.5,
    rotationAngle: 10,
    force: 0.5,
  });

  if ('TouchEvent' in window && TouchEvent.length > 0) {
    const touchEvent = new TouchEvent(eventType, {
      cancelable: true,
      bubbles: true,
      touches: [touchObj],
      targetTouches: [],
      changedTouches: [touchObj],
      shiftKey: true,
    });
    element.dispatchEvent(touchEvent);
  } else {
    console.log('no TouchEvent')
  }

}

// 申请价保
function apply(applyBtn, priceInfo, setting) {
  let order_price = applyBtn.attr('order_price')
  let product_name = applyBtn.attr('product_name')
  let applyId = applyBtn.attr('id')
  // 是否暂停价保
  if (!applyId || setting.suspendedApplyIds.indexOf(applyId) > -1) {
    return console.log('价保暂停', applyId)
  }
  // 获取上次申请价保的价格
  getSetting('last_apply_price' + applyId, (lastApply) => {
    let lastApplyPrice = lastApply ? lastApply.price : localStorage.getItem('jjb_order_' + applyId)
    if (priceInfo.price > 0 && priceInfo.price < order_price && (order_price - priceInfo.price) > setting.pro_min ) {
      if (lastApplyPrice && Number(lastApplyPrice) - priceInfo.price <= setting.pro_min ) {
        console.log('Pass: ' + product_name + '当前价格上次已经申请过了:', priceInfo.price, ' Vs ', lastApplyPrice)
        return
      }
      // 如果禁止了自动申请
      if (setting.prompt_only) {
        localStorage.setItem('jjb_order_' + applyId, priceInfo.price)
        chrome.runtime.sendMessage({
          action: "setVariable",
          key: 'last_apply_price' + applyId,
          value: {
            price: priceInfo.price,
            submitted: false,
            time: new Date()
          }
        }, function (response) {
          console.log("Response: ", response);
        });
        chrome.runtime.sendMessage({
          action: "priceProtectionNotice",
          task: {
            id: "1"
          },
          log: true,
          batch: 'jiabao',
          title: '报告老板，发现价格保护机会！',
          product_name: product_name,
          content: '购买价：'+ order_price + ' 现价：' + priceInfo.price + '，请手动提交价保申请。'
        }, function(response) {
          console.log("Response: ", response);
        });
      } else {
        // 申请
        simulateClick(applyBtn, true)
        setTimeout(() => {
          let resultId = "applyResult_" + applyId.substr(8)
          if (applyBtn.hasClass("disable-apply") || $("#" + resultId).is(":visible")) {
            localStorage.setItem('jjb_order_' + applyId, priceInfo.price)
            chrome.runtime.sendMessage({
              action: "setVariable",
              key: 'last_apply_price' + applyId,
              value: {
                price: priceInfo.price,
                submitted: true,
                time: new Date()
              }
            }, function (response) {
              console.log("Response: ", response);
            });
            chrome.runtime.sendMessage({
              action: "priceProtectionNotice",
              title: '报告老板，发现价格保护机会！',
              product_name: product_name,
              task: {
                id: "1"
              },
              log: true,
              batch: 'jiabao',
              content: '购买价：'+ order_price + ' 现价：' + priceInfo.price + '，已经自动提交价保申请，正在等待申请结果。'
            }, function(response) {
              console.log("Response: ", response);
            });
          }

          observeDOM(document.getElementById(resultId), function (observer) {
            let resultText = $("#" + resultId).text()
            if (resultText && resultText.indexOf("预计") < 0 && resultText.indexOf("繁忙") < 0) {
              if (observer) observer.disconnect();
              chrome.runtime.sendMessage({
                action: "priceProtectionNotice",
                title: "报告老板，价保申请有结果了",
                task: {
                  id: "1"
                },
                log: true,
                batch: 'jiabao',
                product_name: product_name,
                content: "价保结果：" + resultText
              }, function (response) {
                console.log("Response: ", response);
              });
            }
          });
        }, 1500);
      }
    }
  });
}


// 提取优惠信息
function seekPromInfo(platform) {
  let urlInfo, sku
  let promotions = []
  if (platform == 'pc') {
    urlInfo = /(https|http):\/\/item.jd.com\/([0-9]*).html/g.exec(window.location.href);
    sku = urlInfo[2]

    $(".prom-gift-list .prom-gift-item").each(function (index, giftDom) {
      let number, img, description, link
      number = $(giftDom).find(".gift-number").text()
      if ($(giftDom).find("a")) {
        link = $(giftDom).find("a").attr("href")
        img = $(giftDom).find(".gift-img").attr("src")
        description = $(giftDom).find("a").attr("title")
      }
      promotions.push({
        typeName: "赠品",
        number,
        img,
        description,
        link
      })
    })
    $(".p-promotions .prom-item").each(function (index, promDom) {
      let typeName, code, description, link
      typeName = $(promDom).find(".hl_red_bg").text()
      code = $(promDom).data("code")
      description = $(promDom).find(".hl_red").text()
      if ($(promDom).find("a")) {
        link = $(promDom).find("a").attr("href")
      }
      promotions.push({
        typeName,
        code,
        description,
        link
      })
    })
  } else {
    urlInfo = /(https|http):\/\/(item.m.jd.com|mitem.jd.hk)\/product\/([0-9]*).html/g.exec(window.location.href);
    sku = urlInfo[3]
    $(".mod_discount .detail_prom .prom_item").each(function (index, promDom) {
      let typeName, code, description, link
      typeName = $(promDom).find(".hl_red_bg").text()
      code = $(promDom).find(".de_tag").data("code")
      description = $(promDom).find(".de_span").text()
      if ($(promDom).find("a")) {
        link = $(promDom).find("a").attr("href")
      }
      promotions.push({
        typeName,
        code,
        description,
        link
      })
    })
  }
  console.log('find promotions', platform, promotions)
  // 通知促销
  chrome.runtime.sendMessage({
    action: 'promotions',
    sku,
    promotions
  }, function (response) {
    console.log("promotions Response: ", response);
  });
}

// 提取价格信息
function seekPriceInfo(platform) {
  let urlInfo, sku, price, normal_price, presale_price, plus_price, pingou_price, spec_price, orgin_price, skuName
  // 顺便获取促销
  seekPromInfo(platform)
  if (platform == 'pc') {
    urlInfo = /(https|http):\/\/item.jd.com\/([0-9]*).html/g.exec(window.location.href);
    skuName = $(".sku-name").text() ? $(".sku-name").text().trim() : null
    sku = urlInfo[2]
    // 需要对预售定金进行区分
    if ($('span.p-price').length > 1) {
      $('span.p-price').each(function (priceDom) {
        if ($(priceDom).hasClass('J-earnest')) {
          earnest_price = $(priceDom).find('.price').text() ? $(priceDom).find('.price').text().replace(/[^0-9\.-]+/g, "") : null
        } else {
          normal_price = $(priceDom).find('.price').text() ? $(priceDom).find('.price').text().replace(/[^0-9\.-]+/g, "") : null
        }
      })
    } else {
      normal_price = ($('span.p-price .price').text() ? $('span.p-price .price').text().replace(/[^0-9\.-]+/g, "") : null) || ($('#jd-price').text() ? $('#jd-price').text().replace(/[^0-9\.-]+/g, "") : null)
    }

    presale_price = $('.J-presale-price').text() ? $('.J-presale-price').text() : null

    plus_price = $('.p-price-plus .price').text() ? $('.p-price-plus .price').text().replace(/[^0-9\.-]+/g, "") : null
    pingou_price = null
    if ($('#pingou-banner-new') && $('#pingou-banner-new').length > 0 && ($('#pingou-banner-new').css('display') !== 'none')) {
      pingou_price = ($(".btn-pingou span").first().text() ? $(".btn-pingou span").first().text().replace(/[^0-9\.-]+/g, "") : null) || normal_price
      normal_price = $("#InitCartUrl span").text() ? $("#InitCartUrl span").text().replace(/[^0-9\.-]+/g, "") : price
    }
    price = normal_price || presale_price
  } else {
    urlInfo = /(https|http):\/\/item.m.jd.com\/product\/([0-9]*).html/g.exec(window.location.href);
    sku = urlInfo[2]
    skuName = $("#itemName").text() ? $("#itemName").text().trim() : null

    normal_price =($('#priceSaleChoice').text() ? $('#priceSaleChoice').text().replace(/[^0-9\.-]+/g, "") : null) || $('#jdPrice').val() || ($('#specJdPrice').text() ? $('#specJdPrice').text().replace(/[^0-9\.-]+/g, "") : null)

    spec_price = ($('#priceSale').text() && $('#priceSale').height() > 0 ? $('#priceSale').text().replace(/[^0-9\.-]+/g, "") : null) || $('#spec_price').text() && $('#spec_price').height() > 0|| ($('#specPrice').text() ? $('#specPrice').text().replace(/[^0-9\.-]+/g, "") : null)

    plus_price = ($('.vip_price #priceSaleChoice1').text() ? $('.vip_price #priceSaleChoice1').text().replace(/[^0-9\.-]+/g, "") : null) || $('#specPlusPrice').text()

    orgin_price = ($("#orginBuyBtn span").text() ? $("#orginBuyBtn span").text().replace(/[^0-9\.-]+/g, "") : null) || $("#ysOriPrice").text() ? $("#ysOriPrice").text().replace(/[^0-9\.-]+/g, "") : null

    price = normal_price || spec_price || orgin_price

    pingou_price = $('#tuanDecoration .price_warp .price').text() ? $('#tuanDecoration .price_warp .price').text().replace(/[^0-9\.-]+/g, "") : null
  }

  let priceInfo = {
    name: skuName,
    sku: sku,
    normal_price: price ? Number(price) : null,
    plus_price: plus_price ? Number(plus_price) : null,
    pingou_price: pingou_price? Number(pingou_price) : null
  }

  console.log(platform, priceInfo)

  // 通知价格
  chrome.runtime.sendMessage({
    action: 'productPrice',
    ...priceInfo
  }, function (response) {
    console.log("productPrice Response: ", response);
  });

  return priceInfo
}

// 查找订单并对比
function findOrderBySkuAndApply(priceInfo, setting) {
  console.log('findOrderBySkuAndApply', priceInfo)
  $( ".applyBtn" ).each(function() {
    let skuId = $(this).attr('sku')
    let applyId = $(this).attr('id')
    if (skuId && skuId == priceInfo.sku) {
      apply($(this), priceInfo, setting)
    }
    if (setting.suspendedApplyIds.indexOf(applyId) > -1) {
      $(this).text("已暂停")
      $(this).addClass("disable-apply")
      $(this).removeAttr("onclick")
      $(this).removeAttr("report-eventid")
      $(this).removeAttr("id")
    }
  });
}

async function dealProduct(product, orderInfo, setting) {
  console.log('dealProduct', product, orderInfo, setting)
  let pro_logs = []
  let product_name = product.find('.p-name a').text() || product.find('.item-name .name').text()
  let orderPriceDom = product.find('.price-count .price').text() ? product.find('.price-count .price') : product.find('.item-opt .price')
  let order_price = Number(orderPriceDom.text().replace(/[^0-9\.-]+/g, ""))

  let applyBtn = product.find('.item-opt .apply').text() ? product.find('.item-opt .apply') : product.find('.btn a')
  let orderId = applyBtn.attr('id') ? applyBtn.attr('id').split('_') : null

  if (!orderId) {
    return console.log('找不到 orderId')
  }

  let orderCountDom = product.find('.price-count .count').text() ? product.find('.price-count .count') : product.find('.item-name .count')
  let order_quantity =  Number(orderCountDom.text().trim().replace(/[^0-9\.-]+/g, ""))

  let order_pro_logs = product.find('.show-detail').text() ? product.find('.show-detail td') : product.next().next().find('.item-jb')

  let product_img = product.find('a img').attr('src') ? product.find('a img').attr('src') : product.find('.img img').attr('src')

  if (order_price < 0.01) {
    return console.log('忽略免费的商品')
  }
  console.log('发现有效的订单：', product_name, " 下单价格：", order_price)
  if (order_pro_logs && order_pro_logs.length > 0) {
    order_pro_logs.each(function() {
      let logElement = $(this)
      let log = logElement.text().trim().replace('查看退款详情','').replace('查看申请记录','').replace('查看详细规则','')
      if (log && log.indexOf("成功") > -1 || logElement.hasClass("jb-has-succ")) {
        pro_logs.push({
          status: "success",
          message: log
        })
      } else {
        pro_logs.push({
          status: "failed",
          message: log
        })
      }
    });
  }
  // 请求价格
  chrome.runtime.sendMessage({
    action: "getProductPrice",
    sku: orderId[2],
    setting: setting
  }, function(response) {
    console.log("getProductPrice Response: ", response);
  });
  let goodInfo = {
    sku: orderId[2],
    name: product_name,
    img: product_img,
    order_price: order_price,
    logs: pro_logs,
    quantity: order_quantity
  }
  chrome.runtime.sendMessage({
    action: "findGood",
    task: {
      id: "1"
    },
    log: true,
    title: `发现有效的订单：${product_name} 下单价格：${order_price}`,
    orderId: orderInfo.id,
    good: goodInfo
  }, function(response) {
    console.log("good Response: ", response);
  });

  // 记录订单信息
  applyBtn.addClass('applyBtn')
  applyBtn.attr('sku', orderId[2])
  applyBtn.attr('order_price', order_price)
  applyBtn.attr('product_name', product_name)
}

async function dealOrder(order, setting) {
  console.log('dealOrder', order)

  let order_time = order.find('span.time').text() ? new Date(order.find('span.time').text()) : new Date(order.find('.title span').last().text().trim().split('：')[1])
  let order_id = order.find('span.order').text() ? order.find('span.order').text().replace(/[^0-9\.-]+/g, "") : order.find('.title .order-code').text().trim().split('：')[1]

  console.log('订单:', order_id, order_time, setting)
  let proTime = Date.now() - 60*60*1000*24*Number(setting.pro_days);
  // 如果订单时间在设置的价保监控范围以内
  if (order_time.getTime() > proTime) {
    let orderInfo = {
      id: order_id,
      timestamp: order_time.getTime(),
      goods: []
    }
    chrome.runtime.sendMessage({
      action: "findOrder",
      task: {
        id: "1"
      },
      log: true,
      title: `发现有效的订单：${order_id} 下单时间：${order_time}`,
      orderId: order_id,
      order: orderInfo
    }, function(response) {
      console.log("good Response: ", response);
    });
    let productList = order.find('.product-item').length > 0 ? order.find('.product-item') : order.filter( ".co-th" )
    let time = 500
    productList.each(function () {
      let productElement = $(this)
      setTimeout(async () => {
        try {
          await dealProduct(productElement, orderInfo, setting)
        } catch (error) {
          console.error(error)
        }
      }, time);
      time += 2000;
    })
  }
}

async function getAllOrders(mode, setting) {
  console.log('京价保开始自动检查订单', mode)
  // 移动价保
  if ($( "#dataList0 li").length > 0) {
    let time = 0
    $( "#dataList0 li").each(function() {
      let orderElement = $(this)
      setTimeout(async () => {
        try {
          await dealOrder(orderElement, setting)
        } catch (error) {
          console.error(error)
        }
      }, time);
      time += 3000;
    });
  }
  // PC价保
  if ($( "#dataList .tr-th").length > 0) {
    let time = 0
    $( "#dataList .tr-th").each(function() {
      setTimeout(async () => {
        let orderDom = $(this)
        let product = $(this).next()
        orderDom = orderDom.add(product)
        while (product.next().hasClass('co-th')) {
          orderDom = orderDom.add(product.next())
          product = product.next()
        }
        try {
          await dealOrder(orderDom, setting)
        } catch (error) {
          console.error(error)
        }
      }, time);
      time += 500;
    });
  }

  localStorage.setItem('jjb_last_check', new Date().getTime());
}

// 4：领取白条券
function CheckBaitiaoCouponDom(task) {
  if (task.frequency != 'never') {
    console.log('开始领取白条券')
    runStatus(task, {
      mode: 'm',
    })
    let time = 0;
    $(".coupon-use-btn").each(function () {
      let targetEle = $(this)
      if (targetEle.text() == '确定') {
        console.log('需要登录')
        simulateClick(targetEle)
      }
      if (targetEle.text() == '立即领取') {
        let couponDetails = targetEle.parent().prev().find('span').toArray()
        var coupon_name = couponDetails[2] ? $(couponDetails[2]).text().trim() : '未知白条券'
        var coupon_price = couponDetails[0] ? $(couponDetails[0]).text().trim(): '？' + (couponDetails[1] ? (' (' + $(couponDetails[1]).text() + ')') : '')

        setTimeout(function () {
          simulateClick(targetEle, true)
          setTimeout(function () {
            if (targetEle.text() == '去使用') {
              chrome.runtime.sendMessage({
                action: "couponReceived",
                type: "coupon",
                task: task,
                log: true,
                title: "京价保自动领到一张白条优惠券",
                content: {
                  batch: 'baitiao',
                  price: coupon_price,
                  name: coupon_name
                }
              }, function (response) {
                console.log("Response: ", response);
              });
            }
          }, 1500)
        }, time)
        time += 15000;
      }
    })
  }
}

// 3：领取 PLUS 券
function getPlusCoupon(task) {
  if (task.frequency != 'never') {
    let time = 0;
    runStatus(task)
    if ($(".nut-dialog-close")) {
      $(".nut-dialog-close").click()
    }
    $(".list-item-plus").each(function () {
      let that = $(this)
      let getBtn = $(this).find('.btn-txt')
      if (getBtn.text().indexOf("立即领取") > -1) {
        let coupon_name = that.find('.descr').text().trim().replace(/[\r|\n|\\s]/g,"")
        let coupon_price = that.find('.money').text().trim().replace(/[\r|\n|\\s]/g,"") + ' (' + that.find('.rule').text().trim().replace(/[\r|\n|\\s]/g,"") + ')'
        setTimeout(function () {
          getBtn.trigger("click")
          setTimeout(function () {
            if (getBtn.text().indexOf("去使用") > -1 || getBtn.text().indexOf("已领取") > -1) {
              chrome.runtime.sendMessage({
                action: "couponReceived",
                task: task,
                log: true,
                type: "coupon",
                title: "京价保自动领到一张 PLUS 优惠券",
                content: {
                  price: coupon_price,
                  name: coupon_name
                }
              }, function (response) {
                console.log("Response: ", response);
              });
            }
          }, time + 1500)
        }, time)
        time += 5000;
      }
    })
  }
}

// 15：领取全品类券
function getCommonUseCoupon(task) {
  if (task.frequency != 'never') {
    let time = 0;
    weui.toast('京价保运行中', 1000);
    runStatus(task)
    $("#quanlist .quan-item").each(function () {
      let that = $(this)
      if (that.find('.q-ops-box .q-opbtns .txt').text() == '立即领取' && that.find('.q-range').text().indexOf("全品类") > -1) {
        let coupon_name = that.find('.q-range').text().trim()
        let coupon_price = that.find('.q-price strong').text().trim() + '元 (' + that.find('.q-limit').text().trim() + ')'
        let targetBtn = $(that).find('.btn-def')
        setTimeout(function () {
          simulateClick(targetBtn, true)
          setTimeout(function () {
            if ($(".tip-title").text() && $(".tip-title").text().indexOf("领取成功") > -1) {
              chrome.runtime.sendMessage({
                action: "couponReceived",
                type: "coupon",
                task: task,
                log: true,
                title: "京价保自动领到一张全品类优惠券",
                content: {
                  price: coupon_price,
                  name: coupon_name
                }
              }, function (response) {
                console.log("Response: ", response);
              });
            }
          }, 1500)
        }, time)
        time += 5000;
      }
    })
  }
}

// 21：领取话费券
function getTelephoneCoupon(task) {
  if (task.frequency != 'never') {
    weui.toast('京价保运行中', 1000);
    runStatus(task)
    if ($("#quanlist .quan-item").length < 0) {
      let time = 0;
      $("#quanlist .quan-item").each(function () {
        let that = $(this)
        if (that.find('.q-ops-box .q-opbtns .txt').text() == '立即领取' && that.find('.q-range').text().indexOf("话费充值券") > -1) {
          let coupon_name = that.find('.q-range').text().trim()
          let uuid = Date.now()
          let coupon_price = that.find('.q-price strong').text().trim() + '元 (' + that.find('.q-limit').text().trim() + ')'
          setTimeout(function () {
            $(that).find('.btn-def').trigger("click")
            setTimeout(function () {
              if ($(".tip-title").text() && $(".tip-title").text().indexOf("领取成功") > -1) {
                chrome.runtime.sendMessage({
                  action: "couponReceived",
                  type: "coupon",
                  uuid: uuid,
                  task: task,
                  log: true,
                  title: "京价保自动领到一张话费优惠券",
                  content: {
                    price: coupon_price,
                    name: coupon_name
                  }
                }, function (response) {
                  console.log("Response: ", response);
                });
              }
            }, 1500)
          }, time)
          time += 5000;
        }
      })
    }
  }
}

// 通用任务方法
function runCommonTask(task) {
  if (task.frequency != 'never') {
    weui.toast('京价保运行中', 1000);
    runStatus(task)
    if (task.selector) {
      let targetElement = $(`${task.selector.target}`)
      console.log('targetElement', targetElement)
      if (targetElement && targetElement.length > 0) {
        simulateClick(targetElement, true)
        if (task.selector.result) {
          let uuid = Date.now()
          observeDOM(document.body, function (observer) {
            let resultElement = $(`${task.selector.result}`)
            if (resultElement && resultElement.text().indexOf(task.selector.successKeyWord) > -1) {
              if (observer) observer.disconnect();
              return chrome.runtime.sendMessage(Object.assign({
                task: task,
                log: true,
              }, task.successMessage, {
                uuid: uuid
              }), function (response) {
                console.log("Response: ", response);
              });
            }
          })
        }
      }
    }
  }
}


// 自动浏览店铺（7：店铺签到）
function autoVisitShop(task) {
  if (task.frequency != 'never') {
    weui.toast('京价保运行中', 1000);
    runStatus(task)
    var time = 0;
    $(".bean-shop-list li").each(function () {
      var that = $(this)
      if ($(that).find('.s-btn').text() == '去签到') {
        setTimeout(function () {
          chrome.runtime.sendMessage({
            action: "create_tab",
            batch: "bean",
            task: task,
            log: true,
            content: JSON.stringify({
              index: 0,
              url: $(that).find('.s-btn').attr('href'),
              active: "false",
              pinned: "true"
            })
          }, function (response) {
            console.log("Response: ", response);
          });
        }, time)
        time += 30000;
      }
    })
  }
}

// 店铺签到（7：店铺签到）
function doShopSign(task) {
  if (task.frequency != 'never') {
    console.log('店铺自动签到')
    if ($(".J_giftClose").length > 0) {
      simulateClick($(".J_giftClose"), true)
    }
    if ($(".jShopHeaderArea .jSign .signed").length > 0) {
      if ($(".real-gift-tip .jingdou").length > 0) {
        let value = $(".real-gift-tip .jingdou span").text()
        chrome.runtime.sendMessage({
          action: "checkin_notice",
          task: task,
          log: true,
          title: "京价保自动为店铺签到领京豆",
          reward: "bean",
          value: Number(value),
          content: "恭喜您获得了" + value + "京豆"
        }, function (response) {
          console.log("Response: ", response);
        })
      }
      setTimeout(() => {
        chrome.runtime.sendMessage({
          action: "remove_tab",
          task: task,
          log: true,
          content: {
            url: window.location.href,
            pinned: true
          }
        }, function(response) {
          console.log("Response: ", response);
        });
      }, 1500);
    } else {
      chrome.runtime.sendMessage({ text: "myTab" }, function (result) {
        console.log('tab', result.tab)
        if (result.tab.pinned) {
          if ($(".j-unsigned.j-sign").length > 0 && $(".j-unsigned.j-sign").attr("status") == 'true') {
            simulateClick($('.j-unsigned.j-sign'))
          } else {
            setTimeout(function () {
              simulateClick($('.jSign .unsigned'))
            }, 3000)
          }
        } else {
          console.log('正常访问不执行店铺自动签到')
        }
      });
    }
  }
}

function runStatus(task, parameters) {
  console.log(`${task.title}开始运行`)
  chrome.runtime.sendMessage(Object.assign({
    action: "runStatus",
    task: task,
    timestamp: Date.now(),
    log: true
  }, parameters))
}

// 移动页领取优惠券（2：领精选券）
function pickupCoupon(task) {
  if (task.frequency != 'never') {
    let time = 0;
    runStatus(task)
    $(".coupon_sec_body a.coupon_default").each(function () {
      let that = $(this)
      let coupon_name = that.find('.coupon_default_name').text().trim()
      let coupon_id = that.find("input[class=id]").val()
      let coupon_price = that.find('.coupon_default_price').text().trim()
      if (that.find('.coupon_default_des').text()) {
        coupon_price = that.find('.coupon_default_des').text()
      }
      if ($(this).find('.coupon_default_status_icon').text() == '立即领取') {
        setTimeout(function () {
          simulateClick($(that).find('.coupon_default_status_icon'))
          setTimeout(function () {
            if ($(that).find('.coupon_default_status_icon').text() == '立即使用') {
              chrome.runtime.sendMessage({
                action: "couponReceived",
                type: "coupon",
                task: task,
                log: true,
                title: "京价保自动领到一张新的优惠券",
                content: {
                  id: coupon_id,
                  price: coupon_price,
                  name: coupon_name
                }
              }, function (response) {
                console.log("Response: ", response);
              });
            }
          }, 500)
        }, time)
        time += 5000;
      }
    })
  }
}

// 14: 钢镚签到
function getCoin(task) {
  if (task.frequency != 'never') {
    runStatus(task)
    if ($("#myCanvas").length > 0) {
      let canvas = $("#myCanvas")[0]
      let rect = canvas.getBoundingClientRect()
      let startX = rect.left * (canvas.width / rect.width)

      sendTouchEvent(startX + 10, rect.y + 10, canvas, 'touchstart');
      sendTouchEvent(startX + 70, rect.y + 10, canvas, 'touchmove');
      sendTouchEvent(startX + 70, rect.y + 10, canvas, 'touchend');

      // 监控结果
      observeDOM(document.body, function (observer) {
        let resultElement = $(".package_c .popup_line1")
        if (resultElement && resultElement.text().indexOf("成功") > -1) {
          if (observer) observer.disconnect();
          markCheckinStatus('coin', '～0.02个钢镚', () => {
            chrome.runtime.sendMessage({
              action: "checkin_notice",
              task: task,
              log: true,
              title: "京价保自动为您签到抢钢镚",
              value: 0.02,
              reward: "coin",
              unit: 'coin',
              content: "恭喜您领到了～0.02个钢镚"
            }, function (response) {
              console.log("Response: ", response);
            })
          })
        }
      })
    } else {
      markCheckinStatus('coin')
    }
  }
}


// 生鲜价保模式
function modifyRefundType(mode = "m") {
  getSetting('refund_type', (setting) => {
    if (!setting || setting == "") setting = "1"
    if (mode == "pc") {
      $("select.modifyRefundType").each(function(index) {
        if ($(this).val() == setting) return
        setTimeout(() => {
          $(this).val(setting)
          $(this)[0].dispatchEvent(new Event('change', { bubbles: true }))
        }, 1000 * index);
      });
    }
    if (mode == "m") {
      $("a.type-modify").each(function(index) {
        setTimeout(() => {
          simulateClick($(this))
          setTimeout(() => {
            $(".type-wrapper .list .item").each(function() {
              if ($(this).attr("value") == setting) {
                if ($(this).hasClass("selected")) return
                simulateClick($(this))
                setTimeout(() => {
                  simulateClick($(".type-wrapper .close-modfiy-type"))
                }, 500);
              }
            })
          }, 1000);

        }, 5000 * index);
      });
    }
  })
}

// 1: 价格保护
function priceProtect(task) {
  if (task.frequency != 'never') {
    weui.toast('京价保运行中', 3500);
    let mode = "m"
    // 加载第二页
    if (document.getElementById("mescroll0")) {
      document.getElementById("mescroll0").scrollTop = (document.getElementById("mescroll0").scrollHeight * 2);
      setTimeout(() => {
        document.getElementById("mescroll0").scrollTop = (document.getElementById("mescroll0").scrollHeight * 2);
      }, 3000);
      setTimeout(() => {
        document.getElementById("mescroll0").scrollTop = (document.getElementById("mescroll0").scrollHeight * 2);
      }, 6000);
      setTimeout(() => {
        document.getElementById("mescroll0").scrollTop =0
      }, 6500);
      setTimeout(() => {
        modifyRefundType(mode)
      }, 7500);
    }
    if (document.getElementById("dataList")) {
      mode = "pc"
      $(window).scrollTop(document.getElementById("dataList").scrollHeight * 2);
      setTimeout(() => {
        $(window).scrollTop(document.getElementById("dataList").scrollHeight * 2);
      }, 3000);
      setTimeout(() => {
        $(window).scrollTop(document.getElementById("dataList").scrollHeight * 2);
      }, 6000);
      setTimeout(() => {
        $(window).scrollTop(0)
      }, 6500);
      setTimeout(() => {
        modifyRefundType(mode)
      }, 7500);
    }

    if ($(".bd-product-list li").length > 0 || $(".co-th").length > 0) {
      console.log('成功获取价格保护商品列表', new Date())
      runStatus(task, {
        mode: mode
      })
      chrome.runtime.sendMessage({
        text: "getPriceProtectionSetting"
      }, function (response) {
        setTimeout(function () {
          getAllOrders(mode, response)
        }, 8000)
        console.log("getPriceProtectionSetting Response: ", response);
      });
    } else {
      console.log('好尴尬，最近没有买东西..', new Date())
    }
  }
}

// 从京东热卖自动跳转到商品页面
function autoGobuy(setting) {
  if (setting == "checked") {
    weui.toast('京价保自动跳转', 3000);
    simulateClick($(".shop_intro .gobuy a"))
  }
}

// 显示引荐来源
function showUtmSource() {
  const urlParams = new URLSearchParams(window.location.search);
  const utm_source = urlParams.get('utm_source');
  const utmSourceDom = `<div class="utm_source-notice">
    <div class="area_md">
      引荐来源：${utm_source}
      <span id="reportUtmSource" class="report">举报</span>
    </div>
  </div>`
  if (utm_source && utm_source.indexOf('zaoshu.so') < 0) {
    $("body").prepend(utmSourceDom);
  }
  $("#reportUtmSource").on("click", function () {
    weui.dialog({
      title: '举报劫持',
      content: `<iframe id="changelogIframe" frameborder="0" src="https://i.duotai.net/forms/znd7e/pliwjpzx?utm_source=${utm_source}" style="width: 100%;min-height: 385px;"></iframe>`,
      className: 'reportUtmSource',
      buttons: [{
        label: '完成',
        type: 'primary'
      }]
    })
  })
}

// 价格历史
function showPriceChart(disable) {
  if (disable == "checked") {
    console.log('价格走势图已禁用')
  } else {
    injectScript(chrome.extension.getURL('/static/priceChart.js'), 'body');
    window.addEventListener("message", function (event) {
      if (event.source != window)
        return;
      if (event.data.type && (event.data.type == "FROM_PAGE") && (event.data.text == "disablePriceChart")) {
        chrome.runtime.sendMessage({
          action: "setVariable",
          key: "disable_pricechart",
          value: "checked"
        },
        function (response) {
          weui.toast('停用成功', 1000);
          $(".jjbPriceChart").hide()
          console.log("disablePriceChart Response: ", response);
        });
      }
    });
  }
}

// 剁手保护模式
function handProtection(setting, priceInfo) {
  if (setting == "checked") {
    injectScript(chrome.extension.getURL('/static/dialog-polyfill.js'), 'body');
    console.log('剁手保护模式')
    let buyDom = $("#InitCartUrl").length > 0 ? $("#InitCartUrl") : $("#btn-reservation")
    let item = $(".ellipsis").text()
    let price = priceInfo ? (priceInfo.normal_price || priceInfo.plus_price) : ($('.p-price .price').text() ? $('.p-price .price').text().replace(/[^0-9\.-]+/g, "") : null) || ($('#jd-price').text() ? $('#jd-price').text().replace(/[^0-9\.-]+/g, "") : null)
    // 拼接提示
    let dialogMsgDOM = `<dialog id="dialogMsg" class="message">` +
      `<p class="green-text">恭喜你省下了 ` + price + ` ！</p>` +
      `</dialog>`
    // 写入提示消息
    $("body").append(dialogMsgDOM);

    buyDom.removeAttr("clstag")
    buyDom.on("click", function () {
      let count = $('#buy-num').val()
      // 移除此前的提示
      if ($("#dialog").length > 0) {
        $("#dialog").remove()
      }
      // 拼接提示
      let dialogDOM = `<dialog id="dialog">` +
        `<span class="close">x</span>` +
        `<form method="dialog">` +
        `<h3>你真的需要买` + (Number(count) > 1 ? count + '个' : '') + item + `吗?</h3>` +
        `<div class="consideration">` +
        `<p>它是必须的吗？使用的频率足够高吗？</p>` +
        `<p>它真的可以解决你的需求吗？现有方案完全无法接受吗？</p>` +
        `<p>如果收到不合适，它在试用之后退款方便吗？</p>` +
        `<p>现在购买它的价格 ` + price + ` 合适吗？</p>` +
        (Number(count) > 1 ? `<p>有必要现在购买 ` + count + `个吗？</p>` : '') +
        `</div>` +
        `<div class="actions">` +
        `<a href="` + buyDom.attr("href") + `" class="volume-purchase forcedbuy" target="_blank">坚持购买</a>` +
        `<button type="submit" value="no" class="giveUp btn-special2 btn-lg" autofocus>一键省钱</button>` +
        `</div>` +
        `<p class="admonish">若无必要，勿增实体</p>` +
        `</form>` +
        `</dialog>`
      // 写入提示
      $("body").append(dialogDOM);
      var dialog = document.getElementById('dialog');
      var dialogMsg = document.getElementById('dialogMsg');

      dialog.showModal();
      document.querySelector('#dialog .close').onclick = function () {
        dialog.close();
      };

      document.querySelector('#dialog .giveUp').onclick = function () {
        dialog.close();
        setTimeout(() => {
          dialogMsg.showModal();
        }, 50);
        setTimeout(() => {
          dialogMsg.close();
          if (confirm("京价保剁手保护模式准备帮你关闭这个标签页，确认要关闭吗?")) {
            window.close();
          }
        }, 1000);
      };

      return false;
    })
  }
}

// 模拟点击
function simulateClick(dom, mouseEvent) {
  let domNode = dom.get(0)
  console.log('simulateClick', dom, mouseEvent)
  if (mouseEvent && domNode) {
    return mockClick(domNode)
  }
  try {
    domNode.trigger("tap")
    domNode.trigger("click")
  } catch (error) {
    try {
      mockClick(domNode)
    } catch (err) {
      console.log('fullback to mockClick', err)
    }
  }
}

function markCheckinStatus(type, value, cb) {
  chrome.runtime.sendMessage({
    action: "markCheckinStatus",
    batch: type,
    value: value,
    status: "signed"
  }, function (response) {
    console.log('markCheckinStatus response', response)
    if (cb && response) { cb() }
  });
}

var auto_login_html = "<p class='auto_login'><span class='jjb-login'>让京价保记住密码并自动登录</span></p>";
var remberme_html = `<label for="remberme" class="remberme J_ping" report-eventid="MLoginRegister_AutoLogin">
  <input type="checkbox" id="remberme" checked>
  <span class="icon icon-rember"></span>
  <span class="txt-remberme">一个月内免登录</span>
  </label>`

// 保存账号
function saveAccount(account) {
  chrome.runtime.sendMessage({
    action: "saveAccount",
    content: account
  }, function (response) {
    console.log('saveAccount response', response)
  });
}

// 获取账号信息
function getAccount(type) {
  console.log("getAccount", type)
  chrome.runtime.sendMessage({
    action: "getAccount",
    type: type
  }, function (response) {
    if (response && response.username && response.password) {
      setTimeout(() => {
        autoLogin(response, type)
      }, 500);
    } else {
      chrome.runtime.sendMessage({
        action: "saveLoginState",
        state: "failed",
        message: "由于账号未保存无法自动登录",
        type: type
      }, function (response) {
        console.log("Response: ", response);
      });
    }
  });
}
// 获取设置
function getSetting(name, cb) {
  chrome.runtime.sendMessage({
    text: "getSetting",
    content: name
  }, function (response) {
    cb(response)
    console.log("getSetting Response: ", name, response);
  });
}

// 获取任务设置
function getTask(taskId, cb) {
  chrome.runtime.sendMessage({
    action: "getTask",
    taskId: taskId
  }, function (response) {
    cb(response)
    console.log("getTask Response: ", taskId, response);
  });
}

// 登录失败
function dealLoginFailed(type, errorMsg) {
  let loginFailedDetail = {
    text: "loginFailed",
    type: type,
    notice: true,
    content: errorMsg,
    state: "failed"
  }
  // 如果是单纯的登录页面，则不发送浏览器提醒
  if (window.innerWidth == 420 || window.location.href == "https://passport.jd.com/uc/login") {
    loginFailedDetail.notice = false
    console.log("主动登录页面不发送浏览器消息提醒")
  }
  chrome.runtime.sendMessage(loginFailedDetail, function (response) {
    console.log("loginFailed Response: ", response);
  });
}

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

// 自动登录
function autoLogin(account, type) {
  if (account.autoLoginQuota && account.autoLoginQuota < 1) {
    return console.log('当前时段无可用自动登录配额，暂不运行自动登录', type)
  }
  weui.toast('京价保正在自动登录', 1000);
  function login(type) {
    chrome.runtime.sendMessage({
      action: "autoLogin",
      type: type
    }, function (response) {
      console.log("autoLogin Response: ", response);
    });
    setTimeout(() => {
      if (type == 'pc') {
        simulateClick($(".login-btn a"), true)
      } else {
        simulateClick($(".page a.btn.J_ping"), true)
      }
    }, 1200);
  }

  // PC 网页登录
  if (type == 'pc') {
    // 自动补全填入
    $("#loginname").val(account.username)
    $("#nloginpwd").val(account.password)
    // 监控验证结果
    let authcodeDom = document.getElementById("s-authcode")
    if (authcodeDom) {
      observeDOM(authcodeDom, function () {
        let resultText = $("#s-authcode .authcode-btn").text()
        if (resultText && resultText == "验证成功") {
          login('pc')
        }
      });
    }
    // 如果此前已经登录失败
    if (account.loginState && account.loginState.state == 'failed') {
      $(".tips-inner .cont-wrapper p").text('由于在' + account.loginState.displayTime + '自动登录失败（原因：' + account.loginState.message + '），京价保暂停自动登录').css('color', '#f73535').css('font-size', '14px')
      $(".login-wrap .tips-wrapper").hide()
      $("#content .tips-wrapper").css('background', '#fff97a')
      chrome.runtime.sendMessage({
        text: "highlightTab",
        content: JSON.stringify({
          url: window.location.href,
          pinned: "true"
        })
      }, function (response) {
        console.log("Response: ", response);
      });
    } else {
      // 如果显示需要验证
      if ($("#s-authcode").height() > 0) {
        dealLoginFailed("pc", "需要完成登录验证")
      } else {
        setTimeout(function () {
          login('pc')
        }, 1500)
        // 是否需要滑动验证
        setTimeout(function () {
          let slideMsg = $(".JDJRV-suspend-slide .JDJRV-lable-refresh").text()
          if (slideMsg && slideMsg.length > 0) {
            dealLoginFailed("pc", "需要完成登录验证")
            chrome.runtime.sendMessage({
              text: "highlightTab",
              content: JSON.stringify({
                title: "需要完成滑动拼图以登录",
                url: window.location.href,
                pinned: "true"
              })
            }, function (response) {
              console.log("Response: ", response);
            });
          }
        }, 2500)
        // 监控登录失败
        setTimeout(function () {
          let errorMsg = $('.login-box .msg-error').text()
          if (errorMsg && errorMsg.length > 0) {
            dealLoginFailed("pc", errorMsg)
          }
        }, 3000)
      }
    }
  // 手机登录
  } else {
    $("#username").val(account.username)
    $("#pwd").val(account.password)
    $("#username")[0].dispatchEvent(new Event('input', { bubbles: true }))
    $("#pwd")[0].dispatchEvent(new Event('input', { bubbles: true }))
    $(".page a.btn.J_ping").addClass("btn-active")
    // 自动登录
    function mLogin() {
      setTimeout(function () {
        if ($("#username").val() && $("#pwd").val()) {
          login('m')
          // 是否需要滑动验证
          observeDOM(document.body, function (observer) {
            let captchaMsg = $("#captcha_dom .captcha_header").text()
            if (captchaMsg && captchaMsg.length > 0) {
              if (observer) observer.disconnect();
              dealLoginFailed("m", "需要完成登录验证")
            }
          })
          // 监控失败提示
          setTimeout(function () {
            let errorMsg = $(".notice").text() ? $(".notice").text().trim() : null
            if (errorMsg && errorMsg.length > 0) {
              dealLoginFailed("m", errorMsg)
            }
          }, 2000)
        } else {
          console.log("missing username or password", $("#username").val(), $("#password").val())
        }
      }, 500)
    }
    // 如果需要验证码
    if ($("#input-code").height() > 0) {
      tryFillCaptcha()
    } else {
      mLogin()
    }
  }
}


function dealWithCaptchaError(isRetry, error) {
  console.log('dealWithCaptchaError', error)
  if (isRetry) {
    dealLoginFailed("m", "需要完成登录验证")
  } else {
    setTimeout(() => {
      tryFillCaptcha(true)
    }, 500);
  }
}

// 识别验证码
function tryFillCaptcha(isRetry) {
  let captcha = $("#username_login .code-box img")[0]
  let base64Image = getBase64Image(captcha)
  $("#username_login").append(`<div class="weui-loadmore">
        <i class="weui-loading"></i>
        <span class="weui-loadmore__tips">${isRetry ? '正在重新识别验证码' : '正在识别验证码'}</span>
    </div>
  `)
  $.ajax({
    method: "POST",
    type: "POST",
    url: "https://jjb.zaoshu.so/captcha",
    data: {
      base64Image: base64Image,
    },
    timeout: 8000,
    dataType: "json",
    success: function(data){
      if (data.result && data.result.length > 3) {
        if ($("#code").is(":focus") || $("#code").val().length > 0 ) {
          $("#username_login").append(`<p class="tips">验证码参考：${data.result}</p>`)
        } else {
          $("#code").val(data.result)
          mLogin()
        }
      } else {
        dealWithCaptchaError(isRetry, data.result)
      }
    },
    error: function(xhr, type){
      dealWithCaptchaError(isRetry, xhr)
    },
    complete: function() {
      $("#username_login .weui-loadmore").hide()
    }
  })
}

// 转存老的账号
function resaveAccount() {
  var jjb_username = localStorage.getItem('jjb_username')
  var jjb_password = localStorage.getItem('jjb_password')
  if (jjb_username && jjb_password) {
    localStorage.removeItem('jjb_username')
    localStorage.removeItem('jjb_password')
    saveAccount({
      username: jjb_username,
      password: jjb_password
    })
  }
}

// 登录页
function dealLoginPage() {
  // 手机版登录页
  if ( $(".quick-btn").length > 0 && $("#username").length > 0) {
    // 切换登录模式
    simulateClick($(".planBLogin"), true)

    getAccount('m')
    $(auto_login_html).insertAfter( ".page .notice")
    // 点击让京价保自动登录
    $('.page').on('click', '.jjb-login', function (e) {
      window.event ? window.event.returnValue = false : e.preventDefault();
      let username = $("#username").val()
      let password = $("#pwd").val()
      // 保存账号和密码
      if (username && password) {
        saveAccount({
          username: username,
          password: password
        })
      }
      simulateClick($(".page a.btn.J_ping"), true)
    })
  };
  // PC版登录页
  if ($(".login-tab-r").length > 0 && $("#loginname").length > 0) {
    // 切换到账号登录
    simulateClick($(".login-tab-r a"), true)
    // 获取账号
    getAccount('pc')
    $(auto_login_html).insertAfter("#formlogin")
    $('.login-box').on('click', '.jjb-login', function (e) {
      window.event ? window.event.returnValue = false : e.preventDefault();
      var username = $("#loginname").val()
      var password = $("#nloginpwd").val()
      // 保存账号和密码
      if (username && password) {
        saveAccount({
          username: username,
          password: password
        })
      }
      simulateClick($(".login-btn a"), true)
    })
  };
}
// 签到领京豆（vip）
function vipCheckin(task) {
  if (task.frequency != 'never') {
    weui.toast('京价保运行中', 1000);
    runStatus(task)
    const signRes = $(".signin-desc").text() || $(".dayGet").text()
    if (signRes && (signRes.indexOf("获得") > -1 || signRes.indexOf("已领取") > -1)) {
      let value = $(".beanNum").text() || signRes.substring(signRes.indexOf("获得")).replace(/[^0-9\.-]+/g, "")
      markCheckinStatus('vip', value + '京豆', () => {
        chrome.runtime.sendMessage({
          action: "checkin_notice",
          batch: "bean",
          task: task,
          log: true,
          value: value,
          unit: 'bean',
          reward: "bean",
          title: "京价保自动为您签到领京豆",
          content: "恭喜您获得了" + value + '个京豆奖励'
        }, function (response) {
          console.log("Response: ", response);
        })
      })
    }
  }
}

// 16: 白条免息红包（baitiao）
function baitiaoLottery(task) {
  if (task.frequency != 'never') {
    weui.toast('京价保运行中', 1000);
    runStatus(task)
    setTimeout(() => {
      simulateClick($("#lottery .mark_btn_start"), true)
    }, 1500);
    observeDOM(document.body, function (observer) {
      let resultElement = $('.layer_wrap_header:visible')
      if (resultElement && resultElement.text().indexOf('恭喜') > -1) {
        if (observer) observer.disconnect();
        let result = $('.layer_wrap_content p:visible').first().text()
        markCheckinStatus('baitiao', result, () => {
          chrome.runtime.sendMessage({
            action: "checkin_notice",
            task: task,
            log: true,
            title: "京价保自动为您白条签到",
            content: "恭喜您获得了" + result
          }, function (response) {
            console.log("Response: ", response);
          })
        })
      }
      if ($(".jrm-tips").text() == '您今天已签到,请明天再来') {
        markCheckinStatus('baitiao')
      }
    })
  }
}

// 18: 拍拍二手签到有礼
function dailyPaipai(task) {
	if (task.frequency != 'never') {
		weui.toast('京价保运行中', 1000);
    runStatus(task)
    setTimeout(() => {
      if ($(".signIn_btnTxt").text() == '签到') {
        simulateClick($(".signIn_btnTxt"))
        observeDOM(document.body, function (observer) {
          let resultElement = $('.signIn_pop .signIn_Title')
          if (resultElement && resultElement.text().indexOf('成功') > -1) {
            if (observer) observer.disconnect();
            let value = $(".signIn_pop .signIn_bean").text() ? $(".signIn_pop .signIn_bean").text().replace(/[^0-9\.-]+/g, "") : null
            if (value && value > 0) {
              markCheckinStatus('paipai', value + '京豆', () => {
                chrome.runtime.sendMessage({
                  action: "checkin_notice",
                  task: task,
                  log: true,
                  batch: "bean",
                  reward: "bean",
                  value: value,
                  unit: 'bean',
                  title: "京价保自动为您领取拍拍签到有礼",
                  content: "恭喜您获得了" + value + '个京豆奖励'
                }, function (response) {
                  console.log("Response: ", response);
                })
              })
            } else {
              markCheckinStatus('paipai')
            }
          }
        })
      } else {
        if ($(".signIn_btnTxt").text() && $(".signIn_btnTxt").text().indexOf("连续签到") > -1){
          markCheckinStatus('paipai')
        }
      }
    }, 2000);
  }
}

// 11: 每日京豆签到（bean）
function beanCheckin(task) {
  function observerBeanCheckinResult() {
    observeDOM(document.body, function (observer) {
      let resultElement = $('span:contains("签到成功 恭喜获得")')
      if (resultElement && resultElement.text().indexOf('恭喜') > -1) {
        if (observer) observer.disconnect();
        let value = resultElement.parent().next().text().replace(/[^0-9\.-]+/g, "")
        markCheckinStatus('bean', value + '京豆', () => {
          chrome.runtime.sendMessage({
            action: "checkin_notice",
            task: task,
            log: true,
            batch: "bean",
            reward: "bean",
            value: value,
            unit: 'bean',
            title: "京价保自动为您签到领京豆",
            content: `恭喜您获得了${value}个京豆奖励`
          }, function (response) {
            console.log("Response: ", response);
          })
        })
      }
    })
  }
  if (task.frequency != 'never') {
    weui.toast('京价保运行中', 1000);
    runStatus(task)
    observerBeanCheckinResult()

    $("#m_common_content .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view span").each(function () {
      let targetEle = $(this)
      if (targetEle.text() == '签到领京豆') {
        simulateClick(targetEle, true)
        observerBeanCheckinResult()
      }
    })

    $("#m_common_content .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view .react-view span").each(function () {
      if ($(this).text() == '已连续签到') {
        markCheckinStatus('bean')
      }
    })
  }
}



// 9: 金融会员签到
function jrIndexCheckin(task) {
  if (task.frequency != 'never') {
    weui.toast('京价保运行中', 1000);
    runStatus(task)
    if ($(".top-mian .sign-btn").length > 0 && $(".top-mian .sign-btn").text().indexOf('签到') > -1) {
      simulateClick($(".top-mian .sign-btn"), true)
      // 监控结果
      observeDOM(document.body, function (observer) {
        let resultElement = $('.signDialog h1:visible')
        if (resultElement && resultElement.text().indexOf('成功') > -1) {
          if (observer) observer.disconnect();
          let rawValue = $("#fengkong .goldcolor").first().text()
          markCheckinStatus('jr-index', rawValue + "个钢镚", () => {
            chrome.runtime.sendMessage({
              action: "checkin_notice",
              title: "京价保自动为您签到京东金融",
              value: Number(rawValue),
              unit: 'coin',
              task: task,
              log: true,
              reward: "coin",
              content: "恭喜您！领到了" + rawValue + "个钢镚"
            }, function (response) {
              console.log("Response: ", response);
            })
          })
        }
      })
    } else {
      if ($(".top-mian .sign-btn").text().indexOf('再签') == 0) {
        markCheckinStatus('jr-index')
      }
    }
  }
}

// 金币
function getGoldCoin(task) {
  if (task && task.frequency != 'never') {
    let time = 0;
    weui.toast('京价保运行中', 1000);
    runStatus(task)
    $("#content .set-coin-item a.btn").each(function () {
      let that = $(this)
      if (that.text() == '立即领取') {
        setTimeout(function () {
          simulateClick($(that))
          let uuid = Date.now()
          observeDOM(document.body, function (observer) {
            let resultElement = $(".draw-dialog-content-top .draw-dialog-coin-num")
            if (resultElement && resultElement.text().indexOf('成功') > -1) {
              if (observer) observer.disconnect();
              let value = resultElement.text().replace(/[^0-9\.-]+/g, "")
              return chrome.runtime.sendMessage({
                task: task,
                log: true,
                action: "goldCoinReceived",
                title: "京价保自动为您领取金币",
                value: value,
                reward: "goldCoin",
                content: `恭喜您领到了${value}个金币`,
                uuid: uuid
              }, function (response) {
                console.log("Response: ", response);
              });
            }
          })
        }, time)
        time += 5000;
      }
    })
  }
}

// 23: 京东支付单单返
function getJDPayBean(task) {
  if (task && task.frequency != 'never') {
    let time = 0;
    weui.toast('京价保运行中', 1000);
    runStatus(task)

    const paybackBeansNumber = $("#index .per-payback-beens .beens-part .number").text().replace(/[^0-9\.-]+/g, "")
    if (Number(paybackBeansNumber) < 1) {
      return console.log('no beans')
    }
    $("#index .per-payback-beens .btn").each(function () {
      let that = $(this)
      if (that.text().indexOf("立即领取") > -1) {
        setTimeout(function () {
          simulateClick($(that))
          let uuid = Date.now()
          observeDOM(document.body, function (observer) {
            let resultElement = $(".jrm-dialog-box .title")
            if (resultElement && resultElement.text().indexOf('获得') > -1) {
              if (observer) observer.disconnect();
              let value = $(".jrm-dialog-box .num").text().replace(/[^0-9\.-]+/g, "")
              return chrome.runtime.sendMessage({
                task: task,
                log: true,
                action: "beanReceived",
                title: "京价保自动为您领取单单返京豆",
                value: value,
                reward: "bean",
                content: `恭喜您领到了${value}个京豆`,
                uuid: uuid
              }, function (response) {
                console.log("Response: ", response);
              });
            }
          })
        }, time)
        time += 5000;
      }
    })
  }
}

function pineappleCheckIn(task) {
  if (task && task.frequency != 'never') {
    let time = 0;
    runStatus(task)
    $(".get_btn_title").each(function () {
      let that = $(this)
      if (that.text() == '领钢镚') {
        setTimeout(function () {
          simulateClick($(that))
          let uuid = Date.now()
          observeDOM(document.body, function (observer) {
            let resultElement = $(".reward_title")
            if (resultElement && resultElement.text().indexOf('领取成功') > -1) {
              if (observer) observer.disconnect();
              let value = $(".reward_hasnum>span").text()
              if (value !== '') {
                return markCheckinStatus('pineapple', `${value}个钢蹦`, () => {
                  chrome.runtime.sendMessage({
                    task: task,
                    log: true,
                    action: "checkin_notice",
                    title: "京价保自动为您领取钢镚",
                    value: value,
                    reward: "coin",
                    content: `恭喜您领到了${value}个钢蹦`,
                    uuid: uuid
                  }, function (response) {
                    console.log("Response: ", response);
                  });
                })
              }
            }
            let errorMsg = $(".error_content")
            if (errorMsg && errorMsg.text().indexOf('明天再来') > -1) {
              markCheckinStatus('pineapple')
            }
          })
        }, time)
        time += 5000;
      }
    })
  }
}

function swingCheckIn(task) {
  if (task && task.frequency != 'never') {
    let time = 0;
    runStatus(task)
    $(".rewardBoxBot").each(function () {
      let that = $(this)
      if (that.text() == '摇一摇 有惊喜') {
        setTimeout(function () {
          simulateClick($(that))
          let uuid = Date.now()
          observeDOM(document.body, function (observer) {
            let resultElement = $(".rewardPopupT")
            if (resultElement && resultElement.text().indexOf('小盒子送你') > -1) {
              if (observer) observer.disconnect();
              let value = $(".rewardBeanPopContent em").text()
              if (value !== '') {
                return markCheckinStatus('swing-reward', `${value}个京豆`, () => {
                  chrome.runtime.sendMessage({
                    task: task,
                    log: true,
                    action: "checkin_notice",
                    title: "京价保自动为您摇一摇领京豆",
                    value: value,
                    reward: "bean",
                    content: `恭喜您领到了${value}个京豆`,
                    uuid: uuid
                  }, function (response) {
                    console.log("Response: ", response);
                  });
                });
              } else {
                markCheckinStatus('swing-reward')
              }
            }
          })
        }, time)
        time += 5000;
      }
    })
  }
}


// ************
// 主体任务
// ************

var pageTaskRunning = false

function triggerTask(task) {
  switch (task.id) {
    // 1:价保
    case '1':
      priceProtect(task)
    // 3:PLUS券
    case '3':
      getPlusCoupon(task)
      break;
    // 4:精选白条券
    case '4':
      CheckBaitiaoCouponDom(task)
      break;
    // 15:全品类券
    case '15':
      getCommonUseCoupon(task)
      break;
    // 18:拍拍签到有礼
    case '18':
      dailyPaipai(task)
      break;
    // 21:话费券
    case '21':
      getTelephoneCoupon(task)
      break;
    // 22:金币
    case '22':
      getGoldCoin(task)
      break;
    // 23: 京东支付单单返
    case '23':
      getJDPayBean(task)
      break;
    // 29: 每日镚一镚
    case '29':
      pineappleCheckIn(task)
      break;
    // 30: 摇一摇领京豆
    case '30':
      swingCheckIn(task)
      break;
    // 9: 金融会员签到
    case '9':
      jrIndexCheckin(task)
      break;
    default:
      break;
  }
  if (task.selector) {
    runCommonTask(task)
  }
}


function accountAlive(type, message) {
  chrome.runtime.sendMessage({
    action: "saveLoginState",
    state: "alive",
    message: message,
    type: type
  }, function(response) {
    console.log("accountAlive ", type, message, response);
  });
}

function CheckDom() {
  pageTaskRunning = true
  // 转存账号
  resaveAccount()

  // 登录状态检查
  checkLoginState()

  // getPageSetting
  chrome.runtime.sendMessage({
    action: "getPageSetting",
    location: {
      host: window.location.host,
      href: window.location.href,
      origin: window.location.origin,
      pathname: window.location.pathname
    }
  }, function (response) {
    if (response && response.tasks) {
      let time = 1500
      response.tasks.forEach(task => {
        setTimeout(() => {
          triggerTask(task)
        }, time)
        time += 15000;
      });
    }
    console.log('getPageSetting', response)
  });

  // 是否是PLUS会员
  if ($(".cw-user .fm-icon").length > 0 && $(".cw-user .fm-icon").text() == '正式会员') {
    chrome.runtime.sendMessage({
      action: "setVariable",
      key: "jjb_plus",
      value: "Y"
    }, function (response) {
      console.log("Response: ", response);
    });
  }

  // 账号登录页
  setTimeout(() => {
    dealLoginPage()
  }, 500);

  // 移除遮罩
  if ($("#pcprompt-viewpc").length > 0) {
    simulateClick($("#pcprompt-viewpc"))
  }

  // 商品页
  if (window.location.host == 'item.jd.com' || window.location.host == 're.jd.com') {
    getSetting('disable_pricechart', showPriceChart);
    if (window.location.host == 'item.jd.com') {
      setTimeout(() => {
        let priceInfo = seekPriceInfo('pc');
        getSetting('hand_protection', (setting) => {
          handProtection(setting, priceInfo)
        })
      }, 1500);
    }
  }

  // 移动商品页
  if (window.location.host == 'item.m.jd.com') {
    setTimeout(() => {
      seekPriceInfo("m");
    }, 500);
  }

  // 移动页增加滑动支持
  if (window.location.host == 'm.jd.com' || window.location.host == 'm.jr.jd.com' || window.location.host == "plogin.m.jd.com") {
    injectScript(chrome.extension.getURL('/static/touch-emulator.js'), 'body');
    injectScriptCode(`
      setTimeout(function () {
        TouchEmulator();
      }, 200)
    `, 'body')
  }

  // 会员页签到 (5:京东会员签到)
  if ($(".sign-pop").length || $(".signin .signin-days").length || window.location.host == 'vip.m.jd.com') {
    getTask('5', vipCheckin)
  };

  // 16 白条签到
  if ($("#lottery .mark_btn_start").length || $("#lottery .mark_btn_start").length > 0) {
    getTask('16', baitiaoLottery)
  };


  // 京豆签到 (11:京豆签到)
  if (window.location.host == 'bean.m.jd.com') {
    getTask('11', beanCheckin)
  }

  // 钢镚签到 (14:钢镚签到)
  if (window.location.origin == "https://coin.jd.com" && window.location.pathname == "/m/gb/index.html") {
    injectScriptCode(`
      function canvasEventListener() {
        let canvas = $("#myCanvas")[0];
        canvas.addEventListener('touchstart', canvas.ontouchstart);
        canvas.addEventListener('touchmove', canvas.ontouchmove);
        canvas.addEventListener('touchend', canvas.ontouchend);
      };
      canvasEventListener();
    `, 'body')
    setTimeout(() => {
      getTask('14', getCoin);
    }, 1000);
  };

  // 单独的领券页面
  if ( $("#js_detail .coupon_get") && $(".coupon_get .js_getCoupon").length > 0) {
    console.log('单独的领券页面', $("#js_detail .coupon_get").find('.js_getCoupon'))
    $("#js_detail .coupon_get").find('.js_getCoupon').trigger( "tap" )
    $("#js_detail .coupon_get").find('.js_getCoupon').trigger( "click" )
  }

  // 自动访问店铺领京豆
  if ( $(".bean-shop-list").length > 0 ) {
    getTask('7', autoVisitShop)
  };

  if ($(".jShopHeaderArea").length > 0 && $(".jShopHeaderArea .jSign").length > 0) {
    getTask('7', doShopSign)
  }

  // 领取精选券
  if ($(".coupon_sec_body").length > 0) {
    getTask('2', pickupCoupon)
  };

  // 自动跳转至商品页面
  if ($(".shop_intro .gobuy").length > 0) {
    showUtmSource()
    getSetting('auto_gobuy', autoGobuy)
  };

  // 手机验证码
  if ($('.tip-box').length > 0 && $(".tip-box").text().indexOf("账户存在风险") > -1) {
    dealLoginFailed("pc", "需要手机验证码")
    chrome.runtime.sendMessage({
      text: "highlightTab",
      content: JSON.stringify({
        url: window.location.href,
        pinned: "true"
      })
    }, function(response) {
      console.log("Response: ", response);
    });
  }

  // 验证码
  if ($('.page-notice .txt-end').length > 0 && $('.page-notice .txt-end').text().indexOf("账户存在风险") > -1) {
    dealLoginFailed("m", "需要手机验证码")
  }

  // go to user page
  if (window.location != window.parent.location) {
    setTimeout(() => {
      if ($("#mCommonCart").length > 0) {
        simulateClick($("#mCommonCart"), true)
      }
      if ($("#m_common_header_shortcut_h_home").length > 0) {
        simulateClick($("#m_common_header_shortcut_h_home"), true)
      }
      if ($("#ttbar-myjd a").length > 0) {
        $("#ttbar-myjd a").attr('target', '_self')
        simulateClick($("#ttbar-myjd a"), true)
      }
    }, 2 * 60 * 1000);
  }
}

// 检查登录状态
function checkLoginState() {
  if (document.getElementById("ttbar-login") && document.getElementsByClassName("nickname")[0] && document.getElementsByClassName("nickname")[0].innerText) {
    accountAlive('pc', 'PC网页检测到用户名')
  }
  if ($("#J_user .user_show .user_logout").length > 0) {
    accountAlive('pc', 'PC网页检测到用户名')
  };
  // M 是否登录
  if (($("#mCommonMy").length > 0 && $("#mCommonMy").attr("report-eventid") == "MCommonBottom_My") || ($("#userName") && $("#userName").length > 0) || ($("#myHeader .my_header_name") && $("#myHeader .my_header_name").length > 0) || ($(".user_info .name").text() && $(".user_info .name").text().length > 0)) {
    accountAlive('m', '移动网页检测到登录')
  };
  if (location.href == "https://home.m.jd.com/myJd/newhome.action") {
    accountAlive('m', '移动网页打开个人中心')
  }
}

// 不在收银台域名下运行任何任务
if (window.location.host != 'pcashier.jd.com') {
  $( document ).ready(function() {
    console.log('京价保注入页面成功');
    checkLoginState()
    if (!pageTaskRunning) {
      setTimeout( function(){
        console.log('京价保开始执行任务');
        CheckDom()
      }, 1200)
    }
  });
}

// 消息
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  switch (message.action) {
    case 'productPrice':
      findOrderBySkuAndApply(message, message.setting)
      sendResponse({
        gotcha: message
      })
      break;
    default:
      break;
  }
});

var passiveSupported = false;
try {
  var options = Object.defineProperty({}, "passive", {
    get: function() {
      passiveSupported = true;
    }
  });

  window.addEventListener("test", null, options);
} catch(err) {}

window.addEventListener("message", function(event) {
    if (event.data && event.data.action == 'productPrice') {
      findOrderBySkuAndApply(event.data, event.data.setting)
    }
  },
  passiveSupported ? { passive: true } : false
);


var nodeList = document.querySelectorAll('script');
for (var i = 0; i < nodeList.length; ++i) {
  var node = nodeList[i];
  node.src = node.src.replace("http://", "https://")
}