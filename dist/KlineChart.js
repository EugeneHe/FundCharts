/*!
 * 
 *   KlineChart
 *   @version: 0.9.3
 *   @author: Micheal Wayne(michealwayne@163.com)
 *   @build time: 2018-11-22
 *   @update time: 2019-09-20
 * 
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";function r(t){return Object.prototype.toString.call(t).replace(/\[object\s|\]/g,"")}function i(t){return"Object"===r(t)}function o(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)}e.__esModule=!0,e.type=r,e.isArray=function(t){return"Array"===r(t)},e.isString=function(t){return"String"===r(t)},e.isObject=i,e.isFunction=function(t){return"Function"===r(t)},e.each=o,e.cloneObjDeep=function t(e,n){if(!i(e)||!i(n))return!1;for(var r in e)!i(n[r])||a[r]?n[r]=n[r]||e[r]:t(e[r],n[r]);return n},e.isEmptyObj=a,e.getColorRgb=s,e.Lighting=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return s(t).map(function(t){return(t+=t*e)>255?255:t})},e.throwError=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";throw new Error("Error!"+t+".(FundCharts-"+e+" "+n+")")};e.cloneArray=function(t,e){return o(t,function(t,n){e[n]=t}),e};function a(t){if(!t)return!1;for(var e in t)return!1;return!0}function s(t){var e=t.toLowerCase();if(e&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)){if(4===e.length){for(var n="#",r=1;r<4;r++)n+=e.slice(r,r+1).concat(e.slice(r,r+1));e=n}for(var i=[],o=1;o<7;o+=2)i.push(parseInt("0x"+e.slice(o,o+2)));return i}return e}},function(t,e,n){"use strict";e.__esModule=!0,e.drawLine=function(t,e,n,r,i){t.beginPath(),t.moveTo(e,n),t.lineTo(r,i),t.closePath(),t.stroke()},e.drawDashLine=function(t,e,n,r,i,o){o=o||5;var a=(s=r-e,c=i-n,~~(Math.sqrt(Math.pow(s,2)+Math.pow(c,2))/o));var s,c;t.beginPath();for(var h=0;h<a;h++)t[h%2==0?"moveTo":"lineTo"](e+(r-e)/a*h,n+(i-n)/a*h);t.closePath(),t.stroke()},e.drawPoint=function(t,e,n,r,i,o,a){t.beginPath(),t.strokeStyle=i||"#fff",t.lineWidth=void 0!==a?a:1,t.arc(e,n,o,0,2*Math.PI,!0),t.closePath(),t.fillStyle=r,t.fill(),a&&t.stroke()},e.retinaScale=function(t,e){var n=window.devicePixelRatio||1;if(1===n)return!1;var r=t.width,i=t.height;return t.width=r*n,t.height=i*n,e.scale(n,n),t.style.width=r+"px",t.style.height=i+"px",n},e.setContext=function(t,e,n){(!t||e?t.$el:t.opts.Canvas||n)||(0,i.throwError)("no chart object to set context","setContext");var o=t.opts,a=void 0,s=o.width||500,c=o.height||500;if(e&&!n){var h=t.$el;if(h.style.webkitUserSelect="none",h.style.userSelect="none",(0,i.isFunction)(h.getContext))a=h;else{(a=document.createElement("canvas")).id=o.id+"Canvas";var u=o.width||(0,r.getStyle)(h,"width"),f=o.height||(0,r.getStyle)(h,"height");a.width=u,a.height=f,h.appendChild(a)}}else if(n){wx&&(0,i.isFunction)(wx.createCanvasContext)||(0,i.throwError)("no param {Object} Ctx","setContext");var l=wx.createCanvasContext(o.id);a={info:"Weapp native canvas",width:s,height:c,getContext:function(){return l},draw:function(e){if(e)return l.draw(!0);wx.drawCanvas({canvasId:o.id,actions:t.ctx.getActions()})}}}else{var d=o.Canvas;o.Canvas||(0,i.throwError)("no param {Object} Canvas","setContext"),a=d.createCanvas(s,c),o.handleOut&&o.handleOut(a)}t.canvas=a,t.ctx=a.getContext("2d"),t._chart={width:a.width,height:a.height}};var r=n(3),i=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(1),o=n(4),a=o.default.inBrowser,s=o.default.inWeapp,c=function(){function t(t){this.$el=null,this.drawer=null,this.canvas=null,this.ctx=null;var e=t.id,n=t.colors,i=t.data,c=t.datas;e&&(i||c)||r.throwError("no container id or datas in options","setConfig"),a&&!s&&(this.$el=document.getElementById(e)),n&&(t.colors=n.concat(o.default.colors)),t=r.cloneObjDeep(o.default,t),i&&(t.datas=[i],delete t.data),this.opts=t}return t.prototype.update=function(t){t&&(t.data&&(t.datas=[t.data],delete t.data),this.opts=r.cloneObjDeep(this.opts,t)),this.drawer.draw(!0,this.opts.noAnimation)},t.prototype._init=function(){i.setContext(this,a,s),a&&!s&&(this.pixelRatio=i.retinaScale(this.canvas,this.ctx))},t}();e.default=c},function(t,e,n){"use strict";e.__esModule=!0,e.getStyle=function(t,e){var n=t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="undefined"!=typeof wx&&void 0!==wx.getSystemInfo,i=r?2:1,o={inBrowser:"undefined"!=typeof window,inWeapp:r,backgroundColor:"#fff",colors:["#fe5d4e","#43c2f7","#707ad9","#ffa61b","#64d290","#cf27bd"],duration:600,events:["touchstart","touchmove"],hoverLineColor:"#999",hoverHighlight:1,grid:{yTickLength:5},bar:{margin:60/i},chartTop:0,chartLeft:50/i,chartRight:15,dash:{color:"#e2e2e2",length:3/i},font:{color:"#666",fontFamily:"Arial",fontSize:{x:"11px",y:"10px"}}};e.default=o},function(t,e,n){"use strict";e.__esModule=!0,e.Animation=function(t){t.duration=t.duration||600;var e=23,n=i(),r=null;n(function i(a){if(null===a)return t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish(),!1;null===r&&(r=a);if(a-r<t.duration){var s=(a-r)/t.duration;s=o(s),t.onProcess&&t.onProcess(s),n(i,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()},e)};var r=void 0;"undefined"!=typeof window&&(r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame);var i=function(){return void 0!==r?(i=function(){return r},r):function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}},o=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(1),o=n(5),a=function(){function t(t){this.yaxis={min:0,max:0,range:0,unit:0},this.xaxis={min:0,max:0,range:0,unit:0},this.xRate=0,this.xBasic=0,this.yRate=0,this.yBasic=0,this.drawPoint=i.drawPoint,this.chartjs=t}return t.prototype.getBasicData=function(t){var e,n,i=this.chartjs.opts,o=t||i.datas,a=i.range;return a?(void 0!==a.min&&void 0!==a.max||r.throwError('param range need params "min" and "max"',"setConfig"),e=a.min,n=a.max):r.each(o,function(t){var r=Math.min.apply(null,t),i=Math.max.apply(null,t);e=void 0!==e&&e<r?e:r,n=n&&n>i?n:i}),[e||0,n||0]},t.prototype.clearCtn=function(t){var e=this.chartjs,n=e.opts,r=e.ctx,i=e._chart.width,o=e._chart.height;r.beginPath(),t?r.rect(n.chartLeft-4,n.chartTop-5,i+1,o-16-n.chartTop):r.rect(0,0,1e5,1e5),r.fillStyle=n.backgroundColor,r.fill(),r.closePath()},t.prototype.drawDashs=function(t){var e=this.chartjs,n=e.opts,r=n.grid,o=n.dash,a=o.isSolid,s=n.dash.color,c=r.showGrid,h=r.xTickLength,u=r.yTickLength,f=e.ctx;f.save();var l=e._chart.width-n.chartRight+2,d=(e._chart.height-n.chartTop-30)/(u-1),p=(l-2-n.chartLeft)/(h-1),v=(u-1)*d+n.chartTop+5.5;if(!n.noDash){f.strokeStyle=s,f.beginPath(),f.lineWidth=1;for(var y=a?i.drawLine:i.drawDashLine,w=a?l-2:l,x=0;x<u;x++){var g=t||x*d+5+n.chartTop;y(f,n.chartLeft,g,w,g,o.length)}if(h){var m=n.chartTop+5;for(x=0;x<h;x++){var _=x*p+n.chartLeft-.5;y(f,_,v,_,m,o.length)}}}if(c){r.color&&(f.strokeStyle=r.color);var b=n.chartLeft-.5,j=e.drawer.zeroY||v;i.drawLine(f,b,n.chartTop,b,v),i.drawLine(f,b,j,l-2,j),f.stroke()}f.strokeStyle=s,f.restore()},t.prototype.drawTexts=function(t,e){var n=this.chartjs,r=n.opts,i=r.grid.yTickLength,o=r.font,a=n.ctx,s=r.xaxis,c=n._chart.width,h=n._chart.height;if(r.handleTextX&&(t=r.handleTextX),r.handleTextY&&(e=r.handleTextY),a.lineWidth=1,a.textAlign="right",a.textBaseline="middle",a.font=o.fontSize.x+" "+o.fontFamily,a.fillStyle=o.color,t)t(a,s);else{var u=h-10;a.fillText(s[s.length-1],c-r.chartRight,u),a.textAlign="left",a.fillText(s[0],r.chartLeft,u)}a.font=o.fontSize.y+" "+o.fontFamily,a.textAlign="right";var f=this.yaxis;if(e)e(a,f);else for(var l=r.chartLeft-5,d=r.yaxisfunc||function(t){return t.toFixed(2)},p=0;p<i;p++){var v=f.min+p*f.unit;a.fillText(d(v),l,this.yRate*v+this.yBasic)}},t.prototype.drawHover=function(t,e){},t.prototype.setEvents=function(){var t=this,e=this.chartjs.canvas,n=this.chartjs.opts,r=n.events;if(!r||!n.inBrowser)return!1;r.forEach(function(n){e.addEventListener(n,function(e){var r=~n.indexOf("touch")?e.touches[0]:e,i=r.clientX,o=r.pageY-r.target.offsetTop;return t.drawHover(i,o),!1},!1)})},t.prototype.setAnimation=function(t){var e=this.chartjs.opts;o.Animation({duration:e.duration,onProcess:t,onAnimationFinish:e.onFinish})},t}();e.default=a},,,,function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=n(11),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.init=function(){this._init(),this.drawer=new a.default(this),this.drawer.init()},e}(o.default);e.default=s},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=n(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.setDataset=function(){var t=this.chartjs,e=t.opts,n=e.grid.yTickLength,r=e.datas,i=[];o.each(r,function(t){i.push.apply(i,t)});var a,s,c=this.getBasicData([i]),h=c[0],u=c[1];e.range?(a=h,s=u-h):((s=u-h)||(s=1),s>2?s=4*Math.ceil(s/4):s*=1.2,(a=s>2?Math.floor(h):h)+s<u&&(a=h)),this.yaxis={min:a,max:a+s,range:s,unit:s/(n-1)};var f=this.yRate=(30-t._chart.height+e.chartTop)/this.yaxis.range,l=this.yBasic=5-this.yaxis.max*f+e.chartTop,d=r.length;d=d>1?d:2,this.xaxis={min:0,max:d-1,range:d,unit:1};var p=this.xBasic=e.chartLeft+10,v=this.xRate=(t._chart.width-e.chartLeft-e.chartRight-20)/(d-1),y=[];1===r.length&&(r[1]=r[0]),o.each(r,function(t,e){y.push({x:e*v+p,ymin:t[2]*f+l,ystart:t[0]*f+l,yend:t[1]*f+l,ymax:t[3]*f+l,value:t})}),t.dataset=y,e.barWidth||(e.barWidth=d<10?"20":~~(.6*this.xRate),e.barWidth<1&&(e.barWidth=1))},e.prototype.drawUnit=function(t,e,n,r,i){var o,s,c,h=!1;e.yend<e.ystart?(i&&(h=!0),o=n[0],s=e.ystart,c=e.yend):(o=n[4],s=e.yend,c=e.ystart),t.fillStyle=t.strokeStyle=o,a.drawLine(t,e.x,e.ymin,e.x,s),a.drawLine(t,e.x,e.ymax,e.x,c),t.beginPath(),t[h?"rect":"fillRect"](e.x-r/2,c,r,s-c),t.closePath(),t.stroke()},e.prototype.drawLine=function(t){void 0===t&&(t=1);var e=this.chartjs,n=e.opts,r=e.ctx,i=e.dataset;r.lineWidth=1;for(var o=0,a=t*i.length;o<a;o++){var s=i[o];this.drawUnit(r,s,n.colors,n.barWidth,n.upHollow)}r.save()},e.prototype.draw=function(t,e){var n=this,r=this.chartjs.opts;this.clearCtn(!t),this.drawDashs(),t&&(this.setDataset(),this.drawTexts()),e||!r.inBrowser&&!r.inWeapp?this.drawLine(1):this.setAnimation(function(t){n.clearCtn(!0),n.drawDashs(),n.drawLine(t),r.onAnimation&&r.onAnimation.call(n,t),r.inWeapp&&n.chartjs.ctx.draw(!0)})},e.prototype.drawHover=function(t,e){var n=this.chartjs,r=n.opts;this.draw(r.inWeapp||null,!0);var i=n.ctx;if(t>n._chart.width-r.chartRight||t<r.chartLeft||e<r.chartTop||e>n._chart.height-(30-r.chartTop))return!1;var o=Math.round((t-this.xBasic)/this.xRate);if(!n.dataset[o])return!1;var s=Math.round(n.dataset[o].x)+.3;return i.save(),i.strokeStyle=r.hoverLineColor,i.lineWidth=.5,a.drawLine(i,r.chartLeft+.3,e,n._chart.width-14.7,e),a.drawLine(i,s,6+r.chartTop,s,n._chart.height-25),r.hover&&r.hover(o,[r.datas[o]],r.xaxis[o],t,e),i.restore(),r.inWeapp&&n.canvas.draw(!0),o},e.prototype.init=function(){var t=this.chartjs.opts;this.draw(!0,t.noAnimation),this.setEvents(),t.inWeapp&&this.chartjs.canvas.draw()},e}(n(6).default);e.default=s}])});