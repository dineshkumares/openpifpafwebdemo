!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.openpifpafwebdemo=t():e.openpifpafwebdemo=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=document.location.search&&"?"==document.location.search[0]?document.location.search.substr(1):"";o||"github"!=document.location.hostname||(o="https://vitapc11.epfl.ch");var i=document.getElementById("video"),r=document.getElementById("canvas-capture"),c=r.getContext("2d"),a=document.getElementById("canvas-out"),d=a.getContext("2d"),f=document.getElementById("fps"),u=0,l=0,s=null;navigator.mediaDevices.getUserMedia({audio:!1,video:{width:640,height:480}}).then(function(e){return i.srcObject=e});var p=[[16,14],[14,12],[17,15],[15,13],[12,13],[6,12],[7,13],[6,7],[6,8],[7,9],[8,10],[9,11],[2,3],[1,2],[1,3],[2,4],[3,5],[4,6],[5,7]],h=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"];function b(){c.drawImage(i,0,0,r.width,r.height);var e={image_id:u+=1,image:r.toDataURL()},t=new XMLHttpRequest;t.open("POST",o+"/process",!0),t.onload=function(){if(null!=s){var t=Date.now()-s;l=.5*l+1e3/t*.5,f.textContent=""+l.toFixed(1)}s=Date.now(),b();var n=JSON.parse(this.responseText),o=(n.map(function(e){return e.score}),Math.round(a.clientWidth*i.videoHeight/i.videoWidth));a.clientHeight!=o&&(a.height=o);var r=new Image;r.onload=function(){d.drawImage(r,0,0,a.width,a.height),n.forEach(function(e){return t=e.coordinates,n=e.detection_id,console.log({keypoints:t,detection_id:n}),p.forEach(function(e,n){var o=e[0],i=e[1],r=t[o-1],c=t[i-1],f=h[n%h.length];d.strokeStyle=f,d.lineWidth=5,0!=r[2]&&0!=c[2]&&(d.beginPath(),d.moveTo(r[0]*a.width,r[1]*a.height),d.lineTo(c[0]*a.width,c[1]*a.height),d.stroke())}),void t.forEach(function(e,t){0!=e[2]&&(d.beginPath(),d.fillStyle="#ffffff",d.arc(e[0]*a.width,e[1]*a.height,2,0,2*Math.PI),d.fill())});var t,n})},r.src=e.image},t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(e))}t.newImage=b,b()}])});
//# sourceMappingURL=analysis.js.map