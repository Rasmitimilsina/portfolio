(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();var Df=Object.defineProperty,If=(i,e,t)=>e in i?Df(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Nr=(i,e,t)=>If(i,typeof e!="symbol"?e+"":e,t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Pc="162",Uf=0,pu=1,Nf=2,wd=1,Ad=2,gr=3,Kr=0,_i=1,xr=2,Vr=0,ga=1,jl=2,fu=3,mu=4,Of=5,xn=100,Ff=101,zf=102,gu=103,_u=104,Bf=200,kf=201,Hf=202,Gf=203,Yl=204,Kl=205,Vf=206,Wf=207,Xf=208,qf=209,jf=210,Yf=211,Kf=212,Zf=213,Jf=214,$f=0,Qf=1,em=2,Eo=3,tm=4,im=5,rm=6,nm=7,Rd=0,am=1,sm=2,Wr=0,om=1,lm=2,cm=3,um=4,hm=5,dm=6,pm=7,Cd=300,Ta=301,wa=302,Zl=303,Jl=304,Bo=306,$l=1e3,Qi=1001,Ql=1002,li=1003,vu=1004,ka=1005,mi=1006,$o=1007,yn=1008,Xr=1009,fm=1010,mm=1011,Dc=1012,Ld=1013,Fr=1014,Mr=1015,fs=1016,Pd=1017,Dd=1018,bn=1020,gm=1021,er=1023,_m=1024,vm=1025,Tn=1026,Aa=1027,xm=1028,Id=1029,Mm=1030,Ud=1031,Nd=1033,Qo=33776,el=33777,tl=33778,il=33779,xu=35840,Mu=35841,yu=35842,Su=35843,Od=36196,Eu=37492,bu=37496,Tu=37808,wu=37809,Au=37810,Ru=37811,Cu=37812,Lu=37813,Pu=37814,Du=37815,Iu=37816,Uu=37817,Nu=37818,Ou=37819,Fu=37820,zu=37821,rl=36492,Bu=36494,ku=36495,ym=36283,Hu=36284,Gu=36285,Vu=36286,Sm=3200,Em=3201,Fd=0,bm=1,Or="",$i="srgb",tn="srgb-linear",Ic="display-p3",ko="display-p3-linear",bo="linear",xt="srgb",To="rec709",wo="p3",kn=7680,Wu=519,Tm=512,wm=513,Am=514,zd=515,Rm=516,Cm=517,Lm=518,Pm=519,Xu=35044,qu="300 es",ec=1035,Sr=2e3,Ao=2001;class Oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nl=Math.PI/180,tc=180/Math.PI;function ws(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[r&255]+Kt[r>>8&255]+Kt[r>>16&255]+Kt[r>>24&255]).toLowerCase()}function ci(i,e,t){return Math.max(e,Math.min(t,i))}function Dm(i,e){return(i%e+e)%e}function al(i,e,t){return(1-t)*i+t*e}function ju(i){return(i&i-1)===0&&i!==0}function ic(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ha(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ci(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*n+e.x,this.y=a*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,r,n,a,s,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,l,c)}set(e,t,r,n,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],d=r[7],h=r[2],m=r[5],g=r[8],v=n[0],f=n[3],p=n[6],S=n[1],_=n[4],b=n[7],C=n[2],T=n[5],w=n[8];return a[0]=s*v+o*S+l*C,a[3]=s*f+o*_+l*T,a[6]=s*p+o*b+l*w,a[1]=c*v+u*S+d*C,a[4]=c*f+u*_+d*T,a[7]=c*p+u*b+d*w,a[2]=h*v+m*S+g*C,a[5]=h*f+m*_+g*T,a[8]=h*p+m*b+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-r*a*u+r*o*l+n*a*c-n*s*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,h=o*l-u*a,m=c*a-s*l,g=t*d+r*h+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(n*c-u*r)*v,e[2]=(o*r-n*s)*v,e[3]=h*v,e[4]=(u*t-n*l)*v,e[5]=(n*a-o*t)*v,e[6]=m*v,e[7]=(r*l-c*t)*v,e[8]=(s*t-r*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sl.makeScale(e,t)),this}rotate(e){return this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sl=new Ke;function Bd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Im(){const i=ms("canvas");return i.style.display="block",i}const Yu={};function Um(i){i in Yu||(Yu[i]=!0,console.warn(i))}const Ku=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zu=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[tn]:{transfer:bo,primaries:To,toReference:i=>i,fromReference:i=>i},[$i]:{transfer:xt,primaries:To,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ko]:{transfer:bo,primaries:wo,toReference:i=>i.applyMatrix3(Zu),fromReference:i=>i.applyMatrix3(Ku)},[Ic]:{transfer:xt,primaries:wo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Zu),fromReference:i=>i.applyMatrix3(Ku).convertLinearToSRGB()}},Nm=new Set([tn,ko]),pt={enabled:!0,_workingColorSpace:tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Nm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=Ls[e].toReference,n=Ls[t].fromReference;return n(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ls[i].primaries},getTransfer:function(i){return i===Or?bo:Ls[i].transfer}};function _a(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ol(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hn;class kd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hn===void 0&&(Hn=ms("canvas")),Hn.width=e.width,Hn.height=e.height;const r=Hn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=_a(a[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(_a(t[r]/255)*255):t[r]=_a(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Om=0;class Hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(ll(n[s].image)):a.push(ll(n[s]))}else a=ll(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function ll(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fm=0;class hi extends Oa{constructor(e=hi.DEFAULT_IMAGE,t=hi.DEFAULT_MAPPING,r=Qi,n=Qi,a=mi,s=yn,o=er,l=Xr,c=hi.DEFAULT_ANISOTROPY,u=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=ws(),this.name="",this.source=new Hd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $l:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $l:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Cd;hi.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,r=0,n=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const s=e.elements,o=s[0],l=s[4],c=s[8],u=s[1],d=s[5],h=s[9],m=s[2],g=s[6],v=s[10];if(Math.abs(l-u)<.01&&Math.abs(c-m)<.01&&Math.abs(h-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+m)<.1&&Math.abs(h+g)<.1&&Math.abs(o+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(o+1)/2,S=(d+1)/2,_=(v+1)/2,b=(l+u)/4,C=(c+m)/4,T=(h+g)/4;return p>S&&p>_?p<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(p),n=b/r,a=C/r):S>_?S<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(S),r=b/n,a=T/n):_<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(_),r=C/a,n=T/a),this.set(r,n,a,t),this}let f=Math.sqrt((g-h)*(g-h)+(c-m)*(c-m)+(u-l)*(u-l));return Math.abs(f)<.001&&(f=1),this.x=(g-h)/f,this.y=(c-m)/f,this.z=(u-l)/f,this.w=Math.acos((o+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zm extends Oa{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const a=new hi(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends zm{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Gd extends hi{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=li,this.minFilter=li,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bm extends hi{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=li,this.minFilter=li,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,s,o){let l=r[n+0],c=r[n+1],u=r[n+2],d=r[n+3];const h=a[s+0],m=a[s+1],g=a[s+2],v=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||c!==m||u!==g){let f=1-o;const p=l*h+c*m+u*g+d*v,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),T=Math.atan2(C,p*S);f=Math.sin(f*T)/C,o=Math.sin(o*T)/C}const b=o*S;if(l=l*f+h*b,c=c*f+m*b,u=u*f+g*b,d=d*f+v*b,f===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,n,a,s){const o=r[n],l=r[n+1],c=r[n+2],u=r[n+3],d=a[s],h=a[s+1],m=a[s+2],g=a[s+3];return e[t]=o*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-o*m,e[t+2]=c*g+u*m+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(n/2),d=o(a/2),h=l(r/2),m=l(n/2),g=l(a/2);switch(s){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=r+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(a-c)*m,this._z=(s-n)*m}else if(r>o&&r>d){const m=2*Math.sqrt(1+r-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(n+s)/m,this._z=(a+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-r-d);this._w=(a-c)/m,this._x=(n+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-r-o);this._w=(s-n)/m,this._x=(a+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ci(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*o+n*c-a*l,this._y=n*u+s*l+a*o-r*c,this._z=a*u+s*c+r*l-n*o,this._w=s*u-r*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*r+t*this._x,this._y=m*n+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*d+this._w*h,this._x=r*d+this._x*h,this._y=n*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*r),u=2*(o*t-a*n),d=2*(a*r-s*t);return this.x=t+l*c+s*d-o*u,this.y=r+l*u+o*c-a*d,this.z=n+l*d+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ci(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cl=new j,Ju=new As;class Rs{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Yi):Yi.fromBufferAttribute(a,s),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ps.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ps.copy(r.boundingBox)),Ps.applyMatrix4(e.matrixWorld),this.union(Ps)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),Ds.subVectors(this.max,Ga),Gn.subVectors(e.a,Ga),Vn.subVectors(e.b,Ga),Wn.subVectors(e.c,Ga),Rr.subVectors(Vn,Gn),Cr.subVectors(Wn,Vn),sn.subVectors(Gn,Wn);let t=[0,-Rr.z,Rr.y,0,-Cr.z,Cr.y,0,-sn.z,sn.y,Rr.z,0,-Rr.x,Cr.z,0,-Cr.x,sn.z,0,-sn.x,-Rr.y,Rr.x,0,-Cr.y,Cr.x,0,-sn.y,sn.x,0];return!ul(t,Gn,Vn,Wn,Ds)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,Gn,Vn,Wn,Ds))?!1:(Is.crossVectors(Rr,Cr),t=[Is.x,Is.y,Is.z],ul(t,Gn,Vn,Wn,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hr=[new j,new j,new j,new j,new j,new j,new j,new j],Yi=new j,Ps=new Rs,Gn=new j,Vn=new j,Wn=new j,Rr=new j,Cr=new j,sn=new j,Ga=new j,Ds=new j,Is=new j,on=new j;function ul(i,e,t,r,n){for(let a=0,s=i.length-3;a<=s;a+=3){on.fromArray(i,a);const o=n.x*Math.abs(on.x)+n.y*Math.abs(on.y)+n.z*Math.abs(on.z),l=e.dot(on),c=t.dot(on),u=r.dot(on);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const km=new Rs,Va=new j,hl=new j;class Ho{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):km.setFromPoints(e).getCenter(r);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const t=Va.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Va,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(hl)),this.expandByPoint(Va.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dr=new j,dl=new j,Us=new j,Lr=new j,pl=new j,Ns=new j,fl=new j;class Uc{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){dl.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(dl);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Us),o=Lr.dot(this.direction),l=-Lr.dot(Us),c=Lr.lengthSq(),u=Math.abs(1-s*s);let d,h,m,g;if(u>0)if(d=s*l-o,h=s*o-l,g=a*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,m=d*(d+s*h+2*o)+h*(s*d+h+2*l)+c}else h=a,d=Math.max(0,-(s*h+o)),m=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(s*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-s*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),m=h*(h+2*l)+c):(d=Math.max(0,-(s*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+h*(h+2*l)+c);else h=s>0?-a:a,d=Math.max(0,-(s*h+o)),m=-d*d+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(dl).addScaledVector(Us,h),m}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const r=dr.dot(this.direction),n=dr.dot(dr)-r*r,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),r>s||a>n||((a>r||isNaN(r))&&(r=a),(s<n||isNaN(n))&&(n=s),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,r,n,a){pl.subVectors(t,e),Ns.subVectors(r,e),fl.crossVectors(pl,Ns);let s=this.direction.dot(fl),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Lr.subVectors(this.origin,e);const l=o*this.direction.dot(Ns.crossVectors(Lr,Ns));if(l<0)return null;const c=o*this.direction.dot(pl.cross(Lr));if(c<0||l+c>s)return null;const u=-o*Lr.dot(fl);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,r,n,a,s,o,l,c,u,d,h,m,g,v,f){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,l,c,u,d,h,m,g,v,f)}set(e,t,r,n,a,s,o,l,c,u,d,h,m,g,v,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=g,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/Xn.setFromMatrixColumn(e,0).length(),a=1/Xn.setFromMatrixColumn(e,1).length(),s=1/Xn.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const h=s*u,m=s*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,v=c*d;t[0]=h+v*o,t[4]=g*o-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=m*o-g,t[6]=v+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,v=c*d;t[0]=h-v*o,t[4]=-s*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*u,t[9]=v-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,m=s*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+m,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=s*l,m=s*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=s*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hm,e,Gm)}lookAt(e,t,r){const n=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Pr.crossVectors(r,bi),Pr.lengthSq()===0&&(Math.abs(r.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Pr.crossVectors(r,bi)),Pr.normalize(),Os.crossVectors(bi,Pr),n[0]=Pr.x,n[4]=Os.x,n[8]=bi.x,n[1]=Pr.y,n[5]=Os.y,n[9]=bi.y,n[2]=Pr.z,n[6]=Os.z,n[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],d=r[5],h=r[9],m=r[13],g=r[2],v=r[6],f=r[10],p=r[14],S=r[3],_=r[7],b=r[11],C=r[15],T=n[0],w=n[4],P=n[8],U=n[12],x=n[1],y=n[5],K=n[9],q=n[13],L=n[2],V=n[6],F=n[10],k=n[14],X=n[3],A=n[7],$=n[11],ie=n[15];return a[0]=s*T+o*x+l*L+c*X,a[4]=s*w+o*y+l*V+c*A,a[8]=s*P+o*K+l*F+c*$,a[12]=s*U+o*q+l*k+c*ie,a[1]=u*T+d*x+h*L+m*X,a[5]=u*w+d*y+h*V+m*A,a[9]=u*P+d*K+h*F+m*$,a[13]=u*U+d*q+h*k+m*ie,a[2]=g*T+v*x+f*L+p*X,a[6]=g*w+v*y+f*V+p*A,a[10]=g*P+v*K+f*F+p*$,a[14]=g*U+v*q+f*k+p*ie,a[3]=S*T+_*x+b*L+C*X,a[7]=S*w+_*y+b*V+C*A,a[11]=S*P+_*K+b*F+C*$,a[15]=S*U+_*q+b*k+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],v=e[7],f=e[11],p=e[15];return g*(+a*l*d-n*c*d-a*o*h+r*c*h+n*o*m-r*l*m)+v*(+t*l*m-t*c*h+a*s*h-n*s*m+n*c*u-a*l*u)+f*(+t*c*d-t*o*m-a*s*d+r*s*m+a*o*u-r*c*u)+p*(-n*o*u-t*l*d+t*o*h+n*s*d-r*s*h+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],v=e[13],f=e[14],p=e[15],S=d*f*c-v*h*c+v*l*m-o*f*m-d*l*p+o*h*p,_=g*h*c-u*f*c-g*l*m+s*f*m+u*l*p-s*h*p,b=u*v*c-g*d*c+g*o*m-s*v*m-u*o*p+s*d*p,C=g*d*l-u*v*l-g*o*h+s*v*h+u*o*f-s*d*f,T=t*S+r*_+n*b+a*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=S*w,e[1]=(v*h*a-d*f*a-v*n*m+r*f*m+d*n*p-r*h*p)*w,e[2]=(o*f*a-v*l*a+v*n*c-r*f*c-o*n*p+r*l*p)*w,e[3]=(d*l*a-o*h*a-d*n*c+r*h*c+o*n*m-r*l*m)*w,e[4]=_*w,e[5]=(u*f*a-g*h*a+g*n*m-t*f*m-u*n*p+t*h*p)*w,e[6]=(g*l*a-s*f*a-g*n*c+t*f*c+s*n*p-t*l*p)*w,e[7]=(s*h*a-u*l*a+u*n*c-t*h*c-s*n*m+t*l*m)*w,e[8]=b*w,e[9]=(g*d*a-u*v*a-g*r*m+t*v*m+u*r*p-t*d*p)*w,e[10]=(s*v*a-g*o*a+g*r*c-t*v*c-s*r*p+t*o*p)*w,e[11]=(u*o*a-s*d*a-u*r*c+t*d*c+s*r*m-t*o*m)*w,e[12]=C*w,e[13]=(u*v*n-g*d*n+g*r*h-t*v*h-u*r*f+t*d*f)*w,e[14]=(g*o*n-s*v*n-g*r*l+t*v*l+s*r*f-t*o*f)*w,e[15]=(s*d*n-u*o*n+u*r*l-t*d*l-s*r*h+t*o*h)*w,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+r,u*l-n*s,0,c*l-n*o,u*l+n*s,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,s){return this.set(1,r,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,d=o+o,h=a*c,m=a*u,g=a*d,v=s*u,f=s*d,p=o*d,S=l*c,_=l*u,b=l*d,C=r.x,T=r.y,w=r.z;return n[0]=(1-(v+p))*C,n[1]=(m+b)*C,n[2]=(g-_)*C,n[3]=0,n[4]=(m-b)*T,n[5]=(1-(h+p))*T,n[6]=(f+S)*T,n[7]=0,n[8]=(g+_)*w,n[9]=(f-S)*w,n[10]=(1-(h+v))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let a=Xn.set(n[0],n[1],n[2]).length();const s=Xn.set(n[4],n[5],n[6]).length(),o=Xn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Ki.copy(this);const l=1/a,c=1/s,u=1/o;return Ki.elements[0]*=l,Ki.elements[1]*=l,Ki.elements[2]*=l,Ki.elements[4]*=c,Ki.elements[5]*=c,Ki.elements[6]*=c,Ki.elements[8]*=u,Ki.elements[9]*=u,Ki.elements[10]*=u,t.setFromRotationMatrix(Ki),r.x=a,r.y=s,r.z=o,this}makePerspective(e,t,r,n,a,s,o=Sr){const l=this.elements,c=2*a/(t-e),u=2*a/(r-n),d=(t+e)/(t-e),h=(r+n)/(r-n);let m,g;if(o===Sr)m=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===Ao)m=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,s,o=Sr){const l=this.elements,c=1/(t-e),u=1/(r-n),d=1/(s-a),h=(t+e)*c,m=(r+n)*u;let g,v;if(o===Sr)g=(s+a)*d,v=-2*d;else if(o===Ao)g=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Xn=new j,Ki=new Tt,Hm=new j(0,0,0),Gm=new j(1,1,1),Pr=new j,Os=new j,bi=new j,$u=new Tt,Qu=new As;class cr{constructor(e=0,t=0,r=0,n=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],d=n[2],h=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(ci(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ci(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ci(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ci(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ci(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ci(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return $u.makeRotationFromQuaternion(e),this.setFromRotationMatrix($u,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class Nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vm=0;const eh=new j,qn=new As,pr=new Tt,Fs=new j,Wa=new j,Wm=new j,Xm=new As,th=new j(1,0,0),ih=new j(0,1,0),rh=new j(0,0,1),qm={type:"added"},jm={type:"removed"},ml={type:"childadded",child:null},gl={type:"childremoved",child:null};class qt extends Oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new j,t=new cr,r=new As,n=new j(1,1,1);function a(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ke}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(rh,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Fs.copy(e):Fs.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Wa,Fs,this.up):pr.lookAt(Fs,Wa,this.up),this.quaternion.setFromRotationMatrix(pr),n&&(pr.extractRotation(n.matrixWorld),qn.setFromRotationMatrix(pr),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qm),ml.child=e,this.dispatchEvent(ml),ml.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,Wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++){const o=n[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),m.length>0&&(r.animations=m),g.length>0&&(r.nodes=g)}return r.object=n,r;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}qt.DEFAULT_UP=new j(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zi=new j,fr=new j,_l=new j,mr=new j,jn=new j,Yn=new j,nh=new j,vl=new j,xl=new j,Ml=new j;class nr{constructor(e=new j,t=new j,r=new j){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Zi.subVectors(e,t),n.cross(Zi);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){Zi.subVectors(n,t),fr.subVectors(r,t),_l.subVectors(e,t);const s=Zi.dot(Zi),o=Zi.dot(fr),l=Zi.dot(_l),c=fr.dot(fr),u=fr.dot(_l),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const h=1/d,m=(c*l-o*u)*h,g=(s*u-o*l)*h;return a.set(1-m-g,g,m)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,r,n,a,s,o,l){return this.getBarycoord(e,t,r,n,mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,mr.x),l.addScaledVector(s,mr.y),l.addScaledVector(o,mr.z),l)}static isFrontFacing(e,t,r,n){return Zi.subVectors(r,t),fr.subVectors(e,t),Zi.cross(fr).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Zi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,a){return nr.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return nr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let s,o;jn.subVectors(n,r),Yn.subVectors(a,r),vl.subVectors(e,r);const l=jn.dot(vl),c=Yn.dot(vl);if(l<=0&&c<=0)return t.copy(r);xl.subVectors(e,n);const u=jn.dot(xl),d=Yn.dot(xl);if(u>=0&&d<=u)return t.copy(n);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(jn,s);Ml.subVectors(e,a);const m=jn.dot(Ml),g=Yn.dot(Ml);if(g>=0&&m<=g)return t.copy(a);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(Yn,o);const f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return nh.subVectors(a,n),o=(d-u)/(d-u+(m-g)),t.copy(n).addScaledVector(nh,o);const p=1/(f+v+h);return s=v*p,o=h*p,t.copy(r).addScaledVector(jn,s).addScaledVector(Yn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},zs={h:0,s:0,l:0};function yl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,pt.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=pt.workingColorSpace){if(e=Dm(e,1),t=ci(t,0,1),r=ci(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,s=2*r-a;this.r=yl(s,a,e+1/3),this.g=yl(s,a,e),this.b=yl(s,a,e-1/3)}return pt.toWorkingColorSpace(this,n),this}setStyle(e,t=$i){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$i){const r=Vd[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=ol(e.r),this.g=ol(e.g),this.b=ol(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$i){return pt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(ci(Zt.r*255,0,255))*65536+Math.round(ci(Zt.g*255,0,255))*256+Math.round(ci(Zt.b*255,0,255))}getHexString(e=$i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Zt.copy(this),t);const r=Zt.r,n=Zt.g,a=Zt.b,s=Math.max(r,n,a),o=Math.min(r,n,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case r:l=(n-a)/d+(n<a?6:0);break;case n:l=(a-r)/d+2;break;case a:l=(r-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=$i){pt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,r=Zt.g,n=Zt.b;return e!==$i?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(zs);const r=al(Dr.h,zs.h,t),n=al(Dr.s,zs.s,t),a=al(Dr.l,zs.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ze;Ze.NAMES=Vd;let Ym=0;class Fa extends Oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=ga,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=Kl,this.blendEquation=xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ga&&(r.blending=this.blending),this.side!==Kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yl&&(r.blendSrc=this.blendSrc),this.blendDst!==Kl&&(r.blendDst=this.blendDst),this.blendEquation!==xn&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(r.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wd extends Fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new j,Bs=new rt;class qi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Xu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Um("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ha(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=pi(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),r=pi(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),r=pi(r,this.array),n=pi(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),r=pi(r,this.array),n=pi(n,this.array),a=pi(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xu&&(e.usage=this.usage),e}}class Xd extends qi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class qd extends qi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class wn extends qi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Km=0;const Bi=new Tt,Sl=new qt,Kn=new j,Ti=new Rs,Xa=new Rs,kt=new j;class Ar extends Oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bd(e)?qd:Xd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Ke().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,t,r){return Bi.makeTranslation(e,t,r),this.applyMatrix4(Bi),this}scale(e,t,r){return Bi.makeScale(e,t,r),this.applyMatrix4(Bi),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];Ti.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Xa.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(Ti.min,Xa.min),Ti.expandByPoint(kt),kt.addVectors(Ti.max,Xa.max),Ti.expandByPoint(kt)):(Ti.expandByPoint(Xa.min),Ti.expandByPoint(Xa.max))}Ti.getCenter(r);let n=0;for(let a=0,s=e.count;a<s;a++)kt.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(kt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)kt.fromBufferAttribute(o,c),l&&(Kn.fromBufferAttribute(e,c),kt.add(Kn)),n=Math.max(n,r.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<r.count;P++)o[P]=new j,l[P]=new j;const c=new j,u=new j,d=new j,h=new rt,m=new rt,g=new rt,v=new j,f=new j;function p(P,U,x){c.fromBufferAttribute(r,P),u.fromBufferAttribute(r,U),d.fromBufferAttribute(r,x),h.fromBufferAttribute(a,P),m.fromBufferAttribute(a,U),g.fromBufferAttribute(a,x),u.sub(c),d.sub(c),m.sub(h),g.sub(h);const y=1/(m.x*g.y-g.x*m.y);isFinite(y)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(y),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(y),o[P].add(v),o[U].add(v),o[x].add(v),l[P].add(f),l[U].add(f),l[x].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,U=S.length;P<U;++P){const x=S[P],y=x.start,K=x.count;for(let q=y,L=y+K;q<L;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const _=new j,b=new j,C=new j,T=new j;function w(P){C.fromBufferAttribute(n,P),T.copy(C);const U=o[P];_.copy(U),_.sub(C.multiplyScalar(C.dot(U))).normalize(),b.crossVectors(T,U);const x=b.dot(l[P])<0?-1:1;s.setXYZW(P,_.x,_.y,_.z,x)}for(let P=0,U=S.length;P<U;++P){const x=S[P],y=x.start,K=x.count;for(let q=y,L=y+K;q<L;q+=3)w(e.getX(q+0)),w(e.getX(q+1)),w(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new qi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,m=r.count;h<m;h++)r.setXYZ(h,0,0,0);const n=new j,a=new j,s=new j,o=new j,l=new j,c=new j,u=new j,d=new j;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),v=e.getX(h+1),f=e.getX(h+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,f),u.subVectors(s,a),d.subVectors(n,a),u.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,f),o.add(u),l.add(u),c.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)n.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,a),d.subVectors(n,a),u.cross(d),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[m++]}return new qi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ar,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,r);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(n[l]=u,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],d=a[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ah=new Tt,ln=new Uc,ks=new Ho,sh=new j,Zn=new j,Jn=new j,$n=new j,El=new j,Hs=new j,Gs=new rt,Vs=new rt,Ws=new rt,oh=new j,lh=new j,ch=new j,Xs=new j,qs=new j;class Di extends qt{constructor(e=new Ar,t=new Wd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){Hs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],d=a[l];u!==0&&(El.fromBufferAttribute(d,e),s?Hs.addScaledVector(El,u):Hs.addScaledVector(El.sub(t),u))}t.add(Hs)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ks.copy(r.boundingSphere),ks.applyMatrix4(a),ln.copy(e.ray).recast(e.near),!(ks.containsPoint(ln.origin)===!1&&(ln.intersectSphere(ks,sh)===null||ln.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ah.copy(a).invert(),ln.copy(e.ray).applyMatrix4(ah),!(r.boundingBox!==null&&ln.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ln)))}_computeIntersections(e,t,r){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const f=h[g],p=s[f.materialIndex],S=Math.max(f.start,m.start),_=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let b=S,C=_;b<C;b+=3){const T=o.getX(b),w=o.getX(b+1),P=o.getX(b+2);n=js(this,p,e,r,c,u,d,T,w,P),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){const S=o.getX(f),_=o.getX(f+1),b=o.getX(f+2);n=js(this,s,e,r,c,u,d,S,_,b),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const f=h[g],p=s[f.materialIndex],S=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=S,C=_;b<C;b+=3){const T=b,w=b+1,P=b+2;n=js(this,p,e,r,c,u,d,T,w,P),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){const S=f,_=f+1,b=f+2;n=js(this,s,e,r,c,u,d,S,_,b),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}}function Zm(i,e,t,r,n,a,s,o){let l;if(e.side===_i?l=r.intersectTriangle(s,a,n,!0,o):l=r.intersectTriangle(n,a,s,e.side===Kr,o),l===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:i}}function js(i,e,t,r,n,a,s,o,l,c){i.getVertexPosition(o,Zn),i.getVertexPosition(l,Jn),i.getVertexPosition(c,$n);const u=Zm(i,e,t,r,Zn,Jn,$n,Xs);if(u){n&&(Gs.fromBufferAttribute(n,o),Vs.fromBufferAttribute(n,l),Ws.fromBufferAttribute(n,c),u.uv=nr.getInterpolation(Xs,Zn,Jn,$n,Gs,Vs,Ws,new rt)),a&&(Gs.fromBufferAttribute(a,o),Vs.fromBufferAttribute(a,l),Ws.fromBufferAttribute(a,c),u.uv1=nr.getInterpolation(Xs,Zn,Jn,$n,Gs,Vs,Ws,new rt)),s&&(oh.fromBufferAttribute(s,o),lh.fromBufferAttribute(s,l),ch.fromBufferAttribute(s,c),u.normal=nr.getInterpolation(Xs,Zn,Jn,$n,oh,lh,ch,new j),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new j,materialIndex:0};nr.getNormal(Zn,Jn,$n,d.normal),u.face=d}return u}class Nn extends Ar{constructor(e=1,t=1,r=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,r,t,e,s,a,0),g("z","y","x",1,-1,r,t,-e,s,a,1),g("x","z","y",1,1,e,r,t,n,s,2),g("x","z","y",1,-1,e,r,-t,n,s,3),g("x","y","z",1,-1,e,t,r,n,a,4),g("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(u,3)),this.setAttribute("uv",new wn(d,2));function g(v,f,p,S,_,b,C,T,w,P,U){const x=b/w,y=C/P,K=b/2,q=C/2,L=T/2,V=w+1,F=P+1;let k=0,X=0;const A=new j;for(let $=0;$<F;$++){const ie=$*y-q;for(let pe=0;pe<V;pe++){const fe=pe*x-K;A[v]=fe*S,A[f]=ie*_,A[p]=L,c.push(A.x,A.y,A.z),A[v]=0,A[f]=0,A[p]=T>0?1:-1,u.push(A.x,A.y,A.z),d.push(pe/w),d.push(1-$/P),k+=1}}for(let $=0;$<P;$++)for(let ie=0;ie<w;ie++){const pe=h+ie+V*$,fe=h+ie+V*($+1),W=h+(ie+1)+V*($+1),ee=h+(ie+1)+V*$;l.push(pe,fe,ee),l.push(fe,W,ee),X+=6}o.addGroup(m,X,U),m+=X,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ra(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function ni(i){const e={};for(let t=0;t<i.length;t++){const r=Ra(i[t]);for(const n in r)e[n]=r[n]}return e}function Jm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jd(i){return i.getRenderTarget()===null?i.outputColorSpace:pt.workingColorSpace}const $m={clone:Ra,merge:ni};var Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zr extends Fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ra(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Yd extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new j,uh=new rt,hh=new rt;class Hi extends Yd{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tc*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,uh,hh),t.subVectors(hh,uh)}setViewOffset(e,t,r,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nl*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,t-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qn=-90,ea=1;class tg extends qt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Hi(Qn,ea,e,t);n.layers=this.layers,this.add(n);const a=new Hi(Qn,ea,e,t);a.layers=this.layers,this.add(a);const s=new Hi(Qn,ea,e,t);s.layers=this.layers,this.add(s);const o=new Hi(Qn,ea,e,t);o.layers=this.layers,this.add(o);const l=new Hi(Qn,ea,e,t);l.layers=this.layers,this.add(l);const c=new Hi(Qn,ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===Sr)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,a),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class Kd extends hi{constructor(e,t,r,n,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ta,super(e,t,r,n,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ig extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Kd(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Nn(5,5,5),a=new Zr({name:"CubemapFromEquirect",uniforms:Ra(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:_i,blending:Vr});a.uniforms.tEquirect.value=t;const s=new Di(n,a),o=t.minFilter;return t.minFilter===yn&&(t.minFilter=mi),new tg(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(a)}}const bl=new j,rg=new j,ng=new Ke;class fn{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=bl.subVectors(r,t).cross(rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(bl),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ng.getNormalMatrix(e),n=this.coplanarPoint(bl).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cn=new Ho,Ys=new j;class Oc{constructor(e=new fn,t=new fn,r=new fn,n=new fn,a=new fn,s=new fn){this.planes=[e,t,r,n,a,s]}set(e,t,r,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Sr){const r=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],c=n[4],u=n[5],d=n[6],h=n[7],m=n[8],g=n[9],v=n[10],f=n[11],p=n[12],S=n[13],_=n[14],b=n[15];if(r[0].setComponents(l-a,h-c,f-m,b-p).normalize(),r[1].setComponents(l+a,h+c,f+m,b+p).normalize(),r[2].setComponents(l+s,h+u,f+g,b+S).normalize(),r[3].setComponents(l-s,h-u,f-g,b-S).normalize(),r[4].setComponents(l-o,h-d,f-v,b-_).normalize(),t===Sr)r[5].setComponents(l+o,h+d,f+v,b+_).normalize();else if(t===Ao)r[5].setComponents(o,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cn)}intersectsSprite(e){return cn.center.set(0,0,0),cn.radius=.7071067811865476,cn.applyMatrix4(e.matrixWorld),this.intersectsSphere(cn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Ys.x=n.normal.x>0?e.max.x:e.min.x,Ys.y=n.normal.y>0?e.max.y:e.min.y,Ys.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zd(){let i=null,e=!1,t=null,r=null;function n(a,s){t(a,s),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function ag(i,e){const t=e.isWebGL2,r=new WeakMap;function n(c,u){const d=c.array,h=c.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,d,h),c.onUploadCallback();let v;if(d instanceof Float32Array)v=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=i.SHORT;else if(d instanceof Uint32Array)v=i.UNSIGNED_INT;else if(d instanceof Int32Array)v=i.INT;else if(d instanceof Int8Array)v=i.BYTE;else if(d instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,u,d){const h=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&g.length===0&&i.bufferSubData(d,0,h),g.length!==0){for(let v=0,f=g.length;v<f;v++){const p=g[v];t?i.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):i.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(i.deleteBuffer(u.buffer),r.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=r.get(c);(!h||h.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=r.get(c);if(d===void 0)r.set(c,n(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,c,u),d.version=c.version}}return{get:s,remove:o,update:l}}class Ca extends Ar{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,u=l+1,d=e/o,h=t/l,m=[],g=[],v=[],f=[];for(let p=0;p<u;p++){const S=p*h-s;for(let _=0;_<c;_++){const b=_*d-a;g.push(b,-S,0),v.push(0,0,1),f.push(_/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const _=S+c*p,b=S+c*(p+1),C=S+1+c*(p+1),T=S+1+c*p;m.push(_,b,T),m.push(b,C,T)}this.setIndex(m),this.setAttribute("position",new wn(g,3)),this.setAttribute("normal",new wn(v,3)),this.setAttribute("uv",new wn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.widthSegments,e.heightSegments)}}var sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,og=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,S_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ov=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ov=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:sg,alphahash_pars_fragment:og,alphamap_fragment:lg,alphamap_pars_fragment:cg,alphatest_fragment:ug,alphatest_pars_fragment:hg,aomap_fragment:dg,aomap_pars_fragment:pg,batching_pars_vertex:fg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:_g,bsdfs:vg,iridescence_fragment:xg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:yg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:Eg,clipping_planes_vertex:bg,color_fragment:Tg,color_pars_fragment:wg,color_pars_vertex:Ag,color_vertex:Rg,common:Cg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Pg,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ig,emissivemap_fragment:Ug,emissivemap_pars_fragment:Ng,colorspace_fragment:Og,colorspace_pars_fragment:Fg,envmap_fragment:zg,envmap_common_pars_fragment:Bg,envmap_pars_fragment:kg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:Qg,envmap_vertex:Gg,fog_vertex:Vg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:qg,gradientmap_pars_fragment:jg,lightmap_fragment:Yg,lightmap_pars_fragment:Kg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:$g,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:i_,lights_phong_pars_fragment:r_,lights_physical_fragment:n_,lights_physical_pars_fragment:a_,lights_fragment_begin:s_,lights_fragment_maps:o_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:u_,logdepthbuf_pars_vertex:h_,logdepthbuf_vertex:d_,map_fragment:p_,map_pars_fragment:f_,map_particle_fragment:m_,map_particle_pars_fragment:g_,metalnessmap_fragment:__,metalnessmap_pars_fragment:v_,morphinstance_vertex:x_,morphcolor_vertex:M_,morphnormal_vertex:y_,morphtarget_pars_vertex:S_,morphtarget_vertex:E_,normal_fragment_begin:b_,normal_fragment_maps:T_,normal_pars_fragment:w_,normal_pars_vertex:A_,normal_vertex:R_,normalmap_pars_fragment:C_,clearcoat_normal_fragment_begin:L_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:I_,opaque_fragment:U_,packing:N_,premultiplied_alpha_fragment:O_,project_vertex:F_,dithering_fragment:z_,dithering_pars_fragment:B_,roughnessmap_fragment:k_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:V_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:q_,skinning_pars_vertex:j_,skinning_vertex:Y_,skinnormal_vertex:K_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:$_,tonemapping_pars_fragment:Q_,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:iv,uv_pars_vertex:rv,uv_vertex:nv,worldpos_vertex:av,background_vert:sv,background_frag:ov,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:uv,cube_frag:hv,depth_vert:dv,depth_frag:pv,distanceRGBA_vert:fv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:xv,meshbasic_vert:Mv,meshbasic_frag:yv,meshlambert_vert:Sv,meshlambert_frag:Ev,meshmatcap_vert:bv,meshmatcap_frag:Tv,meshnormal_vert:wv,meshnormal_frag:Av,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Lv,meshphysical_frag:Pv,meshtoon_vert:Dv,meshtoon_frag:Iv,points_vert:Uv,points_frag:Nv,shadow_vert:Ov,shadow_frag:Fv,sprite_vert:zv,sprite_frag:Bv},de={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},rr={basic:{uniforms:ni([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:ni([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:ni([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:ni([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:ni([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:ni([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:ni([de.points,de.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:ni([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:ni([de.common,de.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:ni([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:ni([de.sprite,de.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:ni([de.common,de.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:ni([de.lights,de.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};rr.physical={uniforms:ni([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ks={r:0,b:0,g:0},un=new cr,kv=new Tt;function Hv(i,e,t,r,n,a,s){const o=new Ze(0);let l=a===!0?0:1,c,u,d=null,h=0,m=null;function g(f,p){let S=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),S=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?r.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Bo)?(u===void 0&&(u=new Di(new Nn(1,1,1),new Zr({name:"BackgroundCubeMaterial",uniforms:Ra(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),un.copy(p.backgroundRotation),un.x*=-1,un.y*=-1,un.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(un.y*=-1,un.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kv.makeRotationFromEuler(un)),u.material.toneMapped=pt.getTransfer(_.colorSpace)!==xt,(d!==_||h!==_.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Di(new Ca(2,2),new Zr({name:"BackgroundMaterial",uniforms:Ra(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=pt.getTransfer(_.colorSpace)!==xt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,p){f.getRGB(Ks,jd(i)),r.buffers.color.setClear(Ks.r,Ks.g,Ks.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(o,l)},render:g}}function Gv(i,e,t,r){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),s=r.isWebGL2||a!==null,o={},l=f(null);let c=l,u=!1;function d(L,V,F,k,X){let A=!1;if(s){const $=v(k,F,V);c!==$&&(c=$,m(c.object)),A=p(L,k,F,X),A&&S(L,k,F,X)}else{const $=V.wireframe===!0;(c.geometry!==k.id||c.program!==F.id||c.wireframe!==$)&&(c.geometry=k.id,c.program=F.id,c.wireframe=$,A=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(A||u)&&(u=!1,P(L,V,F,k),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function h(){return r.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function m(L){return r.isWebGL2?i.bindVertexArray(L):a.bindVertexArrayOES(L)}function g(L){return r.isWebGL2?i.deleteVertexArray(L):a.deleteVertexArrayOES(L)}function v(L,V,F){const k=F.wireframe===!0;let X=o[L.id];X===void 0&&(X={},o[L.id]=X);let A=X[V.id];A===void 0&&(A={},X[V.id]=A);let $=A[k];return $===void 0&&($=f(h()),A[k]=$),$}function f(L){const V=[],F=[],k=[];for(let X=0;X<n;X++)V[X]=0,F[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:F,attributeDivisors:k,object:L,attributes:{},index:null}}function p(L,V,F,k){const X=c.attributes,A=V.attributes;let $=0;const ie=F.getAttributes();for(const pe in ie)if(ie[pe].location>=0){const fe=X[pe];let W=A[pe];if(W===void 0&&(pe==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),pe==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),fe===void 0||fe.attribute!==W||W&&fe.data!==W.data)return!0;$++}return c.attributesNum!==$||c.index!==k}function S(L,V,F,k){const X={},A=V.attributes;let $=0;const ie=F.getAttributes();for(const pe in ie)if(ie[pe].location>=0){let fe=A[pe];fe===void 0&&(pe==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),pe==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor));const W={};W.attribute=fe,fe&&fe.data&&(W.data=fe.data),X[pe]=W,$++}c.attributes=X,c.attributesNum=$,c.index=k}function _(){const L=c.newAttributes;for(let V=0,F=L.length;V<F;V++)L[V]=0}function b(L){C(L,0)}function C(L,V){const F=c.newAttributes,k=c.enabledAttributes,X=c.attributeDivisors;F[L]=1,k[L]===0&&(i.enableVertexAttribArray(L),k[L]=1),X[L]!==V&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),X[L]=V)}function T(){const L=c.newAttributes,V=c.enabledAttributes;for(let F=0,k=V.length;F<k;F++)V[F]!==L[F]&&(i.disableVertexAttribArray(F),V[F]=0)}function w(L,V,F,k,X,A,$){$===!0?i.vertexAttribIPointer(L,V,F,X,A):i.vertexAttribPointer(L,V,F,k,X,A)}function P(L,V,F,k){if(r.isWebGL2===!1&&(L.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const X=k.attributes,A=F.getAttributes(),$=V.defaultAttributeValues;for(const ie in A){const pe=A[ie];if(pe.location>=0){let fe=X[ie];if(fe===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor)),fe!==void 0){const W=fe.normalized,ee=fe.itemSize,se=t.get(fe);if(se===void 0)continue;const we=se.buffer,ge=se.type,_e=se.bytesPerElement,ke=r.isWebGL2===!0&&(ge===i.INT||ge===i.UNSIGNED_INT||fe.gpuType===Ld);if(fe.isInterleavedBufferAttribute){const Ae=fe.data,I=Ae.stride,$e=fe.offset;if(Ae.isInstancedInterleavedBuffer){for(let ve=0;ve<pe.locationSize;ve++)C(pe.location+ve,Ae.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let ve=0;ve<pe.locationSize;ve++)b(pe.location+ve);i.bindBuffer(i.ARRAY_BUFFER,we);for(let ve=0;ve<pe.locationSize;ve++)w(pe.location+ve,ee/pe.locationSize,ge,W,I*_e,($e+ee/pe.locationSize*ve)*_e,ke)}else{if(fe.isInstancedBufferAttribute){for(let Ae=0;Ae<pe.locationSize;Ae++)C(pe.location+Ae,fe.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ae=0;Ae<pe.locationSize;Ae++)b(pe.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Ae=0;Ae<pe.locationSize;Ae++)w(pe.location+Ae,ee/pe.locationSize,ge,W,ee*_e,ee/pe.locationSize*Ae*_e,ke)}}else if($!==void 0){const W=$[ie];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(pe.location,W);break;case 3:i.vertexAttrib3fv(pe.location,W);break;case 4:i.vertexAttrib4fv(pe.location,W);break;default:i.vertexAttrib1fv(pe.location,W)}}}}T()}function U(){K();for(const L in o){const V=o[L];for(const F in V){const k=V[F];for(const X in k)g(k[X].object),delete k[X];delete V[F]}delete o[L]}}function x(L){if(o[L.id]===void 0)return;const V=o[L.id];for(const F in V){const k=V[F];for(const X in k)g(k[X].object),delete k[X];delete V[F]}delete o[L.id]}function y(L){for(const V in o){const F=o[V];if(F[L.id]===void 0)continue;const k=F[L.id];for(const X in k)g(k[X].object),delete k[X];delete F[L.id]}}function K(){q(),u=!0,c!==l&&(c=l,m(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:q,dispose:U,releaseStatesOfGeometry:x,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:b,disableUnusedAttributes:T}}function Vv(i,e,t,r){const n=r.isWebGL2;let a;function s(u){a=u}function o(u,d){i.drawArrays(a,u,d),t.update(d,a,1)}function l(u,d,h){if(h===0)return;let m,g;if(n)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,u,d,h),t.update(d,a,h)}function c(u,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(a,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v];t.update(g,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Wv(i,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,b=s||e.has("OES_texture_float"),C=_&&b,T=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:T}}function Xv(i){const e=this;let t=null,r=0,n=!1,a=!1;const s=new fn,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||r!==0||n;return n=h,r=d.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,p=i.get(d);if(!n||g===null||g.length===0||a&&!f)a?u(null):c();else{const S=a?0:r,_=S*4;let b=p.clippingState||null;l.value=b,b=u(g,h,_,m);for(let C=0;C!==_;++C)b[C]=t[C];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,h,m,g){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const p=m+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let _=0,b=m;_!==v;++_,b+=4)s.copy(d[_]).applyMatrix4(S,o),s.normal.toArray(f,b),f[b+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function qv(i){let e=new WeakMap;function t(s,o){return o===Zl?s.mapping=Ta:o===Jl&&(s.mapping=wa),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===Zl||o===Jl)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new ig(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Jd extends Yd{constructor(e=-1,t=1,r=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ca=4,dh=[.125,.215,.35,.446,.526,.582],Mn=20,Tl=new Jd,ph=new Ze;let wl=null,Al=0,Rl=0;const mn=(1+Math.sqrt(5))/2,ta=1/mn,fh=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,mn,ta),new j(0,mn,-ta),new j(ta,0,mn),new j(-ta,0,mn),new j(mn,ta,0),new j(-mn,ta,0)];class mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){wl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wl,Al,Rl),e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ta||e.mapping===wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:fs,format:er,colorSpace:tn,depthBuffer:!1},n=gh(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jv(a)),this._blurMaterial=Yv(a,e,t)}return n}_compileMaterial(e){const t=new Di(this._lodPlanes[0],e);this._renderer.compile(t,Tl)}_sceneToCubeUV(e,t,r,n){const a=new Hi(90,1,t,r),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(ph),l.toneMapping=Wr,l.autoClear=!1;const d=new Wd({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1}),h=new Di(new Nn,d);let m=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,m=!0):(d.color.copy(ph),m=!0);for(let v=0;v<6;v++){const f=v%3;f===0?(a.up.set(0,s[v],0),a.lookAt(o[v],0,0)):f===1?(a.up.set(0,0,s[v]),a.lookAt(0,o[v],0)):(a.up.set(0,s[v],0),a.lookAt(0,0,o[v]));const p=this._cubeSize;Zs(n,f*p,v>2?p:0,p,p),l.setRenderTarget(n),m&&l.render(h,a),l.render(e,a)}h.geometry.dispose(),h.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Ta||e.mapping===wa;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new Di(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,Tl)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=fh[(n-1)%fh.length];this._blur(e,n-1,n,a,s)}t.autoClear=r}_blur(e,t,r,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",a),this._halfBlur(s,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Di(this._lodPlanes[n],c),h=c.uniforms,m=this._sizeLods[r]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Mn-1),v=a/g,f=isFinite(a)?1+Math.floor(u*v):Mn;f>Mn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Mn}`);const p=[];let S=0;for(let w=0;w<Mn;++w){const P=w/v,U=Math.exp(-P*P/2);p.push(U),w===0?S+=U:w<f&&(S+=2*U)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=p,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-r;const b=this._sizeLods[n],C=3*b*(n>_-ca?n-_+ca:0),T=4*(this._cubeSize-b);Zs(t,C,T,3*b,2*b),l.setRenderTarget(t),l.render(d,Tl)}}function jv(i){const e=[],t=[],r=[];let n=i;const a=i-ca+1+dh.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>i-ca?l=dh[s-i+ca-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,f=2,p=1,S=new Float32Array(v*g*m),_=new Float32Array(f*g*m),b=new Float32Array(p*g*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,P=T>2?0:-1,U=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];S.set(U,v*g*T),_.set(h,f*g*T);const x=[T,T,T,T,T,T];b.set(x,p*g*T)}const C=new Ar;C.setAttribute("position",new qi(S,v)),C.setAttribute("uv",new qi(_,f)),C.setAttribute("faceIndex",new qi(b,p)),e.push(C),n>ca&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function gh(i,e,t){const r=new Un(i,e,t);return r.texture.mapping=Bo,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zs(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function Yv(i,e,t){const r=new Float32Array(Mn),n=new j(0,1,0);return new Zr({name:"SphericalGaussianBlur",defines:{n:Mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function _h(){return new Zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function vh(){return new Zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kv(i){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Zl||l===Jl,u=l===Ta||l===wa;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new mh(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&n(d)){t===null&&(t=new mh(i));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",a),h.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function Zv(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Jv(i,e,t,r){const n={},a=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let f=0,p=v.length;f<p;f++)e.remove(v[f])}h.removeEventListener("dispose",s),delete n[h.id];const m=a.get(h);m&&(e.remove(m),a.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const v=m[g];for(let f=0,p=v.length;f<p;f++)e.update(v[f],i.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const S=m.array;v=m.version;for(let _=0,b=S.length;_<b;_+=3){const C=S[_+0],T=S[_+1],w=S[_+2];h.push(C,T,T,w,w,C)}}else if(g!==void 0){const S=g.array;v=g.version;for(let _=0,b=S.length/3-1;_<b;_+=3){const C=_+0,T=_+1,w=_+2;h.push(C,T,T,w,w,C)}}else return;const f=new(Bd(h)?qd:Xd)(h,1);f.version=v;const p=a.get(d);p&&e.remove(p),a.set(d,f)}function u(d){const h=a.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function $v(i,e,t,r){const n=r.isWebGL2;let a;function s(m){a=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,g){i.drawElements(a,g,o,m*l),t.update(g,a,1)}function d(m,g,v){if(v===0)return;let f,p;if(n)f=i,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](a,g,o,m*l,v),t.update(g,a,v)}function h(m,g,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<v;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(a,g,0,o,m,0,v);let p=0;for(let S=0;S<v;S++)p+=g[S];t.update(p,a,1)}}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function Qv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function e0(i,e){return i[0]-e[0]}function t0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function i0(i,e,t){const r={},n=new Float32Array(8),a=new WeakMap,s=new Vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=a.get(u);if(v===void 0||v.count!==g){let f=function(){y.dispose(),a.delete(u),u.removeEventListener("dispose",f)};v!==void 0&&v.texture.dispose();const p=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let w=0;p===!0&&(w=1),S===!0&&(w=2),_===!0&&(w=3);let P=u.attributes.position.count*w,U=1;P>e.maxTextureSize&&(U=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const x=new Float32Array(P*U*4*g),y=new Gd(x,P,U,g);y.type=Mr,y.needsUpdate=!0;const K=w*4;for(let q=0;q<g;q++){const L=b[q],V=C[q],F=T[q],k=P*U*4*q;for(let X=0;X<L.count;X++){const A=X*K;p===!0&&(s.fromBufferAttribute(L,X),x[k+A+0]=s.x,x[k+A+1]=s.y,x[k+A+2]=s.z,x[k+A+3]=0),S===!0&&(s.fromBufferAttribute(V,X),x[k+A+4]=s.x,x[k+A+5]=s.y,x[k+A+6]=s.z,x[k+A+7]=0),_===!0&&(s.fromBufferAttribute(F,X),x[k+A+8]=s.x,x[k+A+9]=s.y,x[k+A+10]=s.z,x[k+A+11]=F.itemSize===4?s.w:1)}}v={count:g,texture:y,size:new rt(P,U)},a.set(u,v),u.addEventListener("dispose",f)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let f=0;for(let S=0;S<h.length;S++)f+=h[S];const p=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",p),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const m=h===void 0?0:h.length;let g=r[u.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];r[u.id]=g}for(let _=0;_<m;_++){const b=g[_];b[0]=_,b[1]=h[_]}g.sort(t0);for(let _=0;_<8;_++)_<m&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(e0);const v=u.morphAttributes.position,f=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const b=o[_],C=b[0],T=b[1];C!==Number.MAX_SAFE_INTEGER&&T?(v&&u.getAttribute("morphTarget"+_)!==v[C]&&u.setAttribute("morphTarget"+_,v[C]),f&&u.getAttribute("morphNormal"+_)!==f[C]&&u.setAttribute("morphNormal"+_,f[C]),n[_]=T,p+=T):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),f&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),n[_]=0)}const S=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",S),d.getUniforms().setValue(i,"morphTargetInfluences",n)}}return{update:l}}function r0(i,e,t,r){let n=new WeakMap;function a(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return d}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class $d extends hi{constructor(e,t,r,n,a,s,o,l,c,u){if(u=u!==void 0?u:Tn,u!==Tn&&u!==Aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Tn&&(r=Fr),r===void 0&&u===Aa&&(r=bn),super(null,n,a,s,o,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:li,this.minFilter=l!==void 0?l:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qd=new hi,ep=new $d(1,1);ep.compareFunction=zd;const tp=new Gd,ip=new Bm,rp=new Kd,xh=[],Mh=[],yh=new Float32Array(16),Sh=new Float32Array(9),Eh=new Float32Array(4);function za(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=xh[n];if(a===void 0&&(a=new Float32Array(n),xh[n]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Go(i,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function n0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function a0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function l0(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ft(t,r))return;Eh.set(r),i.uniformMatrix2fv(this.addr,!1,Eh),zt(t,r)}}function c0(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ft(t,r))return;Sh.set(r),i.uniformMatrix3fv(this.addr,!1,Sh),zt(t,r)}}function u0(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ft(t,r))return;yh.set(r),i.uniformMatrix4fv(this.addr,!1,yh),zt(t,r)}}function h0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function m0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function g0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function v0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function x0(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);const a=this.type===i.SAMPLER_2D_SHADOW?ep:Qd;t.setTexture2D(e||a,n)}function M0(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||ip,n)}function y0(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||rp,n)}function S0(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||tp,n)}function E0(i){switch(i){case 5126:return n0;case 35664:return a0;case 35665:return s0;case 35666:return o0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return h0;case 35667:case 35671:return d0;case 35668:case 35672:return p0;case 35669:case 35673:return f0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return S0}}function b0(i,e){i.uniform1fv(this.addr,e)}function T0(i,e){const t=za(e,this.size,2);i.uniform2fv(this.addr,t)}function w0(i,e){const t=za(e,this.size,3);i.uniform3fv(this.addr,t)}function A0(i,e){const t=za(e,this.size,4);i.uniform4fv(this.addr,t)}function R0(i,e){const t=za(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function C0(i,e){const t=za(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function L0(i,e){const t=za(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function P0(i,e){i.uniform1iv(this.addr,e)}function D0(i,e){i.uniform2iv(this.addr,e)}function I0(i,e){i.uniform3iv(this.addr,e)}function U0(i,e){i.uniform4iv(this.addr,e)}function N0(i,e){i.uniform1uiv(this.addr,e)}function O0(i,e){i.uniform2uiv(this.addr,e)}function F0(i,e){i.uniform3uiv(this.addr,e)}function z0(i,e){i.uniform4uiv(this.addr,e)}function B0(i,e,t){const r=this.cache,n=e.length,a=Go(t,n);Ft(r,a)||(i.uniform1iv(this.addr,a),zt(r,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Qd,a[s])}function k0(i,e,t){const r=this.cache,n=e.length,a=Go(t,n);Ft(r,a)||(i.uniform1iv(this.addr,a),zt(r,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||ip,a[s])}function H0(i,e,t){const r=this.cache,n=e.length,a=Go(t,n);Ft(r,a)||(i.uniform1iv(this.addr,a),zt(r,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||rp,a[s])}function G0(i,e,t){const r=this.cache,n=e.length,a=Go(t,n);Ft(r,a)||(i.uniform1iv(this.addr,a),zt(r,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||tp,a[s])}function V0(i){switch(i){case 5126:return b0;case 35664:return T0;case 35665:return w0;case 35666:return A0;case 35674:return R0;case 35675:return C0;case 35676:return L0;case 5124:case 35670:return P0;case 35667:case 35671:return D0;case 35668:case 35672:return I0;case 35669:case 35673:return U0;case 5125:return N0;case 36294:return O0;case 36295:return F0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return G0}}class W0{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=E0(t.type)}}class X0{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V0(t.type)}}class q0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],r)}}}const Cl=/(\w+)(\])?(\[|\.)?/g;function bh(i,e){i.seq.push(e),i.map[e.id]=e}function j0(i,e,t){const r=i.name,n=r.length;for(Cl.lastIndex=0;;){const a=Cl.exec(r),s=Cl.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){bh(t,c===void 0?new W0(o,i,e):new X0(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new q0(o),bh(t,u)),t=u}}}class po{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);j0(a,s,this)}}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function Th(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const Y0=37297;let K0=0;function Z0(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}function J0(i){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(i);let r;switch(e===t?r="":e===wo&&t===To?r="LinearDisplayP3ToLinearSRGB":e===To&&t===wo&&(r="LinearSRGBToLinearDisplayP3"),i){case tn:case ko:return[r,"LinearTransferOETF"];case $i:case Ic:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[r,"LinearTransferOETF"]}}function wh(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+Z0(i.getShaderSource(e),s)}else return n}function $0(i,e){const t=J0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Q0(i,e){let t;switch(e){case om:t="Linear";break;case lm:t="Reinhard";break;case cm:t="OptimizedCineon";break;case um:t="ACESFilmic";break;case dm:t="AgX";break;case pm:t="Neutral";break;case hm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ex(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ua).join(`
`)}function tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function ix(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function rx(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function ua(i){return i!==""}function Ah(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(nx,sx)}const ax=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sx(i,e){let t=Ye[e];if(t===void 0){const r=ax.get(e);if(r!==void 0)t=Ye[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rc(t)}const ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace(ox,lx)}function lx(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Lh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ad?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gr&&(e="SHADOWMAP_TYPE_VSM"),e}function ux(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ta:case wa:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wa:e="ENVMAP_MODE_REFRACTION";break}return e}function dx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rd:e="ENVMAP_BLENDING_MULTIPLY";break;case am:e="ENVMAP_BLENDING_MIX";break;case sm:e="ENVMAP_BLENDING_ADD";break}return e}function px(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function fx(i,e,t,r){const n=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=cx(t),c=ux(t),u=hx(t),d=dx(t),h=px(t),m=t.isWebGL2?"":ex(t),g=tx(t),v=ix(a),f=n.createProgram();let p,S,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ua).join(`
`),p.length>0&&(p+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ua).join(`
`),S.length>0&&(S+=`
`)):(p=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),S=[m,Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Wr?Q0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,$0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),s=rc(s),s=Ah(s,t),s=Rh(s,t),o=rc(o),o=Ah(o,t),o=Rh(o,t),s=Ch(s),o=Ch(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const b=_+p+s,C=_+S+o,T=Th(n,n.VERTEX_SHADER,b),w=Th(n,n.FRAGMENT_SHADER,C);n.attachShader(f,T),n.attachShader(f,w),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f);function P(K){if(i.debug.checkShaderErrors){const q=n.getProgramInfoLog(f).trim(),L=n.getShaderInfoLog(T).trim(),V=n.getShaderInfoLog(w).trim();let F=!0,k=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,f,T,w);else{const X=wh(n,T,"vertex"),A=wh(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+q+`
`+X+`
`+A)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||V==="")&&(k=!1);k&&(K.diagnostics={runnable:F,programLog:q,vertexShader:{log:L,prefix:p},fragmentShader:{log:V,prefix:S}})}n.deleteShader(T),n.deleteShader(w),U=new po(n,f),x=rx(n,f)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(f,Y0)),y},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=T,this.fragmentShader=w,this}let mx=0;class gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new _x(e),t.set(e,r)),r}}class _x{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}}function vx(i,e,t,r,n,a,s){const o=new Nc,l=new gx,c=new Set,u=[],d=n.isWebGL2,h=n.logarithmicDepthBuffer,m=n.vertexTextures;let g=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,y,K,q,L){const V=q.fog,F=L.geometry,k=x.isMeshStandardMaterial?q.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),A=X&&X.mapping===Bo?X.image.height:null,$=v[x.type];x.precision!==null&&(g=n.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,pe=ie!==void 0?ie.length:0;let fe=0;F.morphAttributes.position!==void 0&&(fe=1),F.morphAttributes.normal!==void 0&&(fe=2),F.morphAttributes.color!==void 0&&(fe=3);let W,ee,se,we;if($){const Q=rr[$];W=Q.vertexShader,ee=Q.fragmentShader}else W=x.vertexShader,ee=x.fragmentShader,l.update(x),se=l.getVertexShaderID(x),we=l.getFragmentShaderID(x);const ge=i.getRenderTarget(),_e=L.isInstancedMesh===!0,ke=L.isBatchedMesh===!0,Ae=!!x.map,I=!!x.matcap,$e=!!X,ve=!!x.aoMap,De=!!x.lightMap,N=!!x.bumpMap,Oe=!!x.normalMap,Ue=!!x.displacementMap,Be=!!x.emissiveMap,He=!!x.metalnessMap,R=!!x.roughnessMap,M=x.anisotropy>0,Y=x.clearcoat>0,Z=x.iridescence>0,te=x.sheen>0,J=x.transmission>0,Ie=M&&!!x.anisotropyMap,Re=Y&&!!x.clearcoatMap,ne=Y&&!!x.clearcoatNormalMap,he=Y&&!!x.clearcoatRoughnessMap,Te=Z&&!!x.iridescenceMap,oe=Z&&!!x.iridescenceThicknessMap,ot=te&&!!x.sheenColorMap,Ge=te&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,xe=!!x.specularColorMap,Ee=!!x.specularIntensityMap,me=J&&!!x.transmissionMap,Ne=J&&!!x.thicknessMap,it=!!x.gradientMap,D=!!x.alphaMap,le=x.alphaTest>0,G=!!x.alphaHash,ce=!!x.extensions;let ae=Wr;x.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ae=i.toneMapping);const nt={isWebGL2:d,shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:ee,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:we,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:ke,instancing:_e,instancingColor:_e&&L.instanceColor!==null,instancingMorph:_e&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:tn,alphaToCoverage:!!x.alphaToCoverage,map:Ae,matcap:I,envMap:$e,envMapMode:$e&&X.mapping,envMapCubeUVHeight:A,aoMap:ve,lightMap:De,bumpMap:N,normalMap:Oe,displacementMap:m&&Ue,emissiveMap:Be,normalMapObjectSpace:Oe&&x.normalMapType===bm,normalMapTangentSpace:Oe&&x.normalMapType===Fd,metalnessMap:He,roughnessMap:R,anisotropy:M,anisotropyMap:Ie,clearcoat:Y,clearcoatMap:Re,clearcoatNormalMap:ne,clearcoatRoughnessMap:he,iridescence:Z,iridescenceMap:Te,iridescenceThicknessMap:oe,sheen:te,sheenColorMap:ot,sheenRoughnessMap:Ge,specularMap:Ce,specularColorMap:xe,specularIntensityMap:Ee,transmission:J,transmissionMap:me,thicknessMap:Ne,gradientMap:it,opaque:x.transparent===!1&&x.blending===ga&&x.alphaToCoverage===!1,alphaMap:D,alphaTest:le,alphaHash:G,combine:x.combine,mapUv:Ae&&f(x.map.channel),aoMapUv:ve&&f(x.aoMap.channel),lightMapUv:De&&f(x.lightMap.channel),bumpMapUv:N&&f(x.bumpMap.channel),normalMapUv:Oe&&f(x.normalMap.channel),displacementMapUv:Ue&&f(x.displacementMap.channel),emissiveMapUv:Be&&f(x.emissiveMap.channel),metalnessMapUv:He&&f(x.metalnessMap.channel),roughnessMapUv:R&&f(x.roughnessMap.channel),anisotropyMapUv:Ie&&f(x.anisotropyMap.channel),clearcoatMapUv:Re&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&f(x.sheenRoughnessMap.channel),specularMapUv:Ce&&f(x.specularMap.channel),specularColorMapUv:xe&&f(x.specularColorMap.channel),specularIntensityMapUv:Ee&&f(x.specularIntensityMap.channel),transmissionMapUv:me&&f(x.transmissionMap.channel),thicknessMapUv:Ne&&f(x.thicknessMap.channel),alphaMapUv:D&&f(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Oe||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Ae||D),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ae&&x.map.isVideoTexture===!0&&pt.getTransfer(x.map.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xr,flipSided:x.side===_i,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ce&&x.extensions.derivatives===!0,extensionFragDepth:ce&&x.extensions.fragDepth===!0,extensionDrawBuffers:ce&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ce&&x.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function S(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const K in x.defines)y.push(K),y.push(x.defines[K]);return x.isRawShaderMaterial===!1&&(_(y,x),b(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function _(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function b(x,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.instancingMorph&&o.enable(4),y.matcap&&o.enable(5),y.envMap&&o.enable(6),y.normalMapObjectSpace&&o.enable(7),y.normalMapTangentSpace&&o.enable(8),y.clearcoat&&o.enable(9),y.iridescence&&o.enable(10),y.alphaTest&&o.enable(11),y.vertexColors&&o.enable(12),y.vertexAlphas&&o.enable(13),y.vertexUv1s&&o.enable(14),y.vertexUv2s&&o.enable(15),y.vertexUv3s&&o.enable(16),y.vertexTangents&&o.enable(17),y.anisotropy&&o.enable(18),y.alphaHash&&o.enable(19),y.batching&&o.enable(20),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),x.push(o.mask)}function C(x){const y=v[x.type];let K;if(y){const q=rr[y];K=$m.clone(q.uniforms)}else K=x.uniforms;return K}function T(x,y){let K;for(let q=0,L=u.length;q<L;q++){const V=u[q];if(V.cacheKey===y){K=V,++K.usedTimes;break}}return K===void 0&&(K=new fx(i,y,x,a),u.push(K)),K}function w(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function P(x){l.remove(x)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:C,acquireProgram:T,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:U}}function xx(){let i=new WeakMap;function e(a){let s=i.get(a);return s===void 0&&(s={},i.set(a,s)),s}function t(a){i.delete(a)}function r(a,s,o){i.get(a)[s]=o}function n(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function Mx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ph(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dh(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function s(d,h,m,g,v,f){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:f},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=m,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=f),e++,p}function o(d,h,m,g,v,f){const p=s(d,h,m,g,v,f);m.transmission>0?r.push(p):m.transparent===!0?n.push(p):t.push(p)}function l(d,h,m,g,v,f){const p=s(d,h,m,g,v,f);m.transmission>0?r.unshift(p):m.transparent===!0?n.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||Mx),r.length>1&&r.sort(h||Ph),n.length>1&&n.sort(h||Ph)}function u(){for(let d=e,h=i.length;d<h;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:o,unshift:l,finish:u,sort:c}}function yx(){let i=new WeakMap;function e(r,n){const a=i.get(r);let s;return a===void 0?(s=new Dh,i.set(r,[s])):n>=a.length?(s=new Dh,a.push(s)):s=a[n],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Ze};break;case"SpotLight":t={position:new j,direction:new j,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function Ex(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let bx=0;function Tx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wx(i,e){const t=new Sx,r=Ex(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new j);const a=new j,s=new Tt,o=new Tt;function l(u,d){let h=0,m=0,g=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let v=0,f=0,p=0,S=0,_=0,b=0,C=0,T=0,w=0,P=0,U=0;u.sort(Tx);const x=d===!0?Math.PI:1;for(let K=0,q=u.length;K<q;K++){const L=u[K],V=L.color,F=L.intensity,k=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*F*x,m+=V.g*F*x,g+=V.b*F*x;else if(L.isLightProbe){for(let A=0;A<9;A++)n.probe[A].addScaledVector(L.sh.coefficients[A],F);U++}else if(L.isDirectionalLight){const A=t.get(L);if(A.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const $=L.shadow,ie=r.get(L);ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,n.directionalShadow[v]=ie,n.directionalShadowMap[v]=X,n.directionalShadowMatrix[v]=L.shadow.matrix,b++}n.directional[v]=A,v++}else if(L.isSpotLight){const A=t.get(L);A.position.setFromMatrixPosition(L.matrixWorld),A.color.copy(V).multiplyScalar(F*x),A.distance=k,A.coneCos=Math.cos(L.angle),A.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),A.decay=L.decay,n.spot[p]=A;const $=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,$.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[p]=$.matrix,L.castShadow){const ie=r.get(L);ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,n.spotShadow[p]=ie,n.spotShadowMap[p]=X,T++}p++}else if(L.isRectAreaLight){const A=t.get(L);A.color.copy(V).multiplyScalar(F),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),n.rectArea[S]=A,S++}else if(L.isPointLight){const A=t.get(L);if(A.color.copy(L.color).multiplyScalar(L.intensity*x),A.distance=L.distance,A.decay=L.decay,L.castShadow){const $=L.shadow,ie=r.get(L);ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,ie.shadowCameraNear=$.camera.near,ie.shadowCameraFar=$.camera.far,n.pointShadow[f]=ie,n.pointShadowMap[f]=X,n.pointShadowMatrix[f]=L.shadow.matrix,C++}n.point[f]=A,f++}else if(L.isHemisphereLight){const A=t.get(L);A.skyColor.copy(L.color).multiplyScalar(F*x),A.groundColor.copy(L.groundColor).multiplyScalar(F*x),n.hemi[_]=A,_++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=g;const y=n.hash;(y.directionalLength!==v||y.pointLength!==f||y.spotLength!==p||y.rectAreaLength!==S||y.hemiLength!==_||y.numDirectionalShadows!==b||y.numPointShadows!==C||y.numSpotShadows!==T||y.numSpotMaps!==w||y.numLightProbes!==U)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=S,n.point.length=f,n.hemi.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=T+w-P,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=U,y.directionalLength=v,y.pointLength=f,y.spotLength=p,y.rectAreaLength=S,y.hemiLength=_,y.numDirectionalShadows=b,y.numPointShadows=C,y.numSpotShadows=T,y.numSpotMaps=w,y.numLightProbes=U,n.version=bx++)}function c(u,d){let h=0,m=0,g=0,v=0,f=0;const p=d.matrixWorldInverse;for(let S=0,_=u.length;S<_;S++){const b=u[S];if(b.isDirectionalLight){const C=n.directional[h];C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(p),h++}else if(b.isSpotLight){const C=n.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const C=n.rectArea[v];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const C=n.point[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),m++}else if(b.isHemisphereLight){const C=n.hemi[f];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:n}}function Ih(i,e){const t=new wx(i,e),r=[],n=[];function a(){r.length=0,n.length=0}function s(u){r.push(u)}function o(u){n.push(u)}function l(u){t.setup(r,u)}function c(u){t.setupView(r,u)}return{init:a,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Ax(i,e){let t=new WeakMap;function r(a,s=0){const o=t.get(a);let l;return o===void 0?(l=new Ih(i,e),t.set(a,[l])):s>=o.length?(l=new Ih(i,e),o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class Rx extends Fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cx extends Fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dx(i,e,t){let r=new Oc;const n=new rt,a=new rt,s=new Vt,o=new Rx({depthPacking:Em}),l=new Cx,c={},u=t.maxTextureSize,d={[Kr]:_i,[_i]:Kr,[xr]:xr},h=new Zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Lx,fragmentShader:Px}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ar;g.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Di(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wd;let p=this.type;this.render=function(T,w,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;const U=i.getRenderTarget(),x=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Vr),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const q=p!==gr&&this.type===gr,L=p===gr&&this.type!==gr;for(let V=0,F=T.length;V<F;V++){const k=T[V],X=k.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);const A=X.getFrameExtents();if(n.multiply(A),a.copy(X.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/A.x),n.x=a.x*A.x,X.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/A.y),n.y=a.y*A.y,X.mapSize.y=a.y)),X.map===null||q===!0||L===!0){const ie=this.type!==gr?{minFilter:li,magFilter:li}:{};X.map!==null&&X.map.dispose(),X.map=new Un(n.x,n.y,ie),X.map.texture.name=k.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const $=X.getViewportCount();for(let ie=0;ie<$;ie++){const pe=X.getViewport(ie);s.set(a.x*pe.x,a.y*pe.y,a.x*pe.z,a.y*pe.w),K.viewport(s),X.updateMatrices(k,ie),r=X.getFrustum(),b(w,P,X.camera,k,this.type)}X.isPointLightShadow!==!0&&this.type===gr&&S(X,P),X.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(U,x,y)};function S(T,w){const P=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Un(n.x,n.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,P,h,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,P,m,v,null)}function _(T,w,P,U){let x=null;const y=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(y!==void 0)x=y;else if(x=P.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const K=x.uuid,q=w.uuid;let L=c[K];L===void 0&&(L={},c[K]=L);let V=L[q];V===void 0&&(V=x.clone(),L[q]=V,w.addEventListener("dispose",C)),x=V}if(x.visible=w.visible,x.wireframe=w.wireframe,U===gr?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const K=i.properties.get(x);K.light=P}return x}function b(T,w,P,U,x){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===gr)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const K=e.update(T),q=T.material;if(Array.isArray(q)){const L=K.groups;for(let V=0,F=L.length;V<F;V++){const k=L[V],X=q[k.materialIndex];if(X&&X.visible){const A=_(T,X,U,x);T.onBeforeShadow(i,T,w,P,K,A,k),i.renderBufferDirect(P,null,K,A,T,k),T.onAfterShadow(i,T,w,P,K,A,k)}}}else if(q.visible){const L=_(T,q,U,x);T.onBeforeShadow(i,T,w,P,K,L,null),i.renderBufferDirect(P,null,K,L,T,null),T.onAfterShadow(i,T,w,P,K,L,null)}}const y=T.children;for(let K=0,q=y.length;K<q;K++)b(y[K],w,P,U,x)}function C(T){T.target.removeEventListener("dispose",C);for(const w in c){const P=c[w],U=T.target.uuid;U in P&&(P[U].dispose(),delete P[U])}}}function Ix(i,e,t){const r=t.isWebGL2;function n(){let D=!1;const le=new Vt;let G=null;const ce=new Vt(0,0,0,0);return{setMask:function(ae){G!==ae&&!D&&(i.colorMask(ae,ae,ae,ae),G=ae)},setLocked:function(ae){D=ae},setClear:function(ae,nt,Q,Fe,st){st===!0&&(ae*=Fe,nt*=Fe,Q*=Fe),le.set(ae,nt,Q,Fe),ce.equals(le)===!1&&(i.clearColor(ae,nt,Q,Fe),ce.copy(le))},reset:function(){D=!1,G=null,ce.set(-1,0,0,0)}}}function a(){let D=!1,le=null,G=null,ce=null;return{setTest:function(ae){ae?_e(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(ae){le!==ae&&!D&&(i.depthMask(ae),le=ae)},setFunc:function(ae){if(G!==ae){switch(ae){case $f:i.depthFunc(i.NEVER);break;case Qf:i.depthFunc(i.ALWAYS);break;case em:i.depthFunc(i.LESS);break;case Eo:i.depthFunc(i.LEQUAL);break;case tm:i.depthFunc(i.EQUAL);break;case im:i.depthFunc(i.GEQUAL);break;case rm:i.depthFunc(i.GREATER);break;case nm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}G=ae}},setLocked:function(ae){D=ae},setClear:function(ae){ce!==ae&&(i.clearDepth(ae),ce=ae)},reset:function(){D=!1,le=null,G=null,ce=null}}}function s(){let D=!1,le=null,G=null,ce=null,ae=null,nt=null,Q=null,Fe=null,st=null;return{setTest:function(re){D||(re?_e(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(re){le!==re&&!D&&(i.stencilMask(re),le=re)},setFunc:function(re,Pe,be){(G!==re||ce!==Pe||ae!==be)&&(i.stencilFunc(re,Pe,be),G=re,ce=Pe,ae=be)},setOp:function(re,Pe,be){(nt!==re||Q!==Pe||Fe!==be)&&(i.stencilOp(re,Pe,be),nt=re,Q=Pe,Fe=be)},setLocked:function(re){D=re},setClear:function(re){st!==re&&(i.clearStencil(re),st=re)},reset:function(){D=!1,le=null,G=null,ce=null,ae=null,nt=null,Q=null,Fe=null,st=null}}}const o=new n,l=new a,c=new s,u=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,v=[],f=null,p=!1,S=null,_=null,b=null,C=null,T=null,w=null,P=null,U=new Ze(0,0,0),x=0,y=!1,K=null,q=null,L=null,V=null,F=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,A=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(A=parseFloat(/^WebGL (\d)/.exec($)[1]),X=A>=1):$.indexOf("OpenGL ES")!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=A>=2);let ie=null,pe={};const fe=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),ee=new Vt().fromArray(fe),se=new Vt().fromArray(W);function we(D,le,G,ce){const ae=new Uint8Array(4),nt=i.createTexture();i.bindTexture(D,nt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Q=0;Q<G;Q++)r&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(le,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(le+Q,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return nt}const ge={};ge[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ge[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_e(i.DEPTH_TEST),l.setFunc(Eo),Ue(!1),Be(pu),_e(i.CULL_FACE),N(Vr);function _e(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function ke(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ae(D,le){return m[D]!==le?(i.bindFramebuffer(D,le),m[D]=le,r&&(D===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=le),D===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=le)),!0):!1}function I(D,le){let G=v,ce=!1;if(D){G=g.get(le),G===void 0&&(G=[],g.set(le,G));const ae=D.textures;if(G.length!==ae.length||G[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Q=ae.length;nt<Q;nt++)G[nt]=i.COLOR_ATTACHMENT0+nt;G.length=ae.length,ce=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,ce=!0);if(ce)if(t.isWebGL2)i.drawBuffers(G);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function $e(D){return f!==D?(i.useProgram(D),f=D,!0):!1}const ve={[xn]:i.FUNC_ADD,[Ff]:i.FUNC_SUBTRACT,[zf]:i.FUNC_REVERSE_SUBTRACT};if(r)ve[gu]=i.MIN,ve[_u]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ve[gu]=D.MIN_EXT,ve[_u]=D.MAX_EXT)}const De={[Bf]:i.ZERO,[kf]:i.ONE,[Hf]:i.SRC_COLOR,[Yl]:i.SRC_ALPHA,[jf]:i.SRC_ALPHA_SATURATE,[Xf]:i.DST_COLOR,[Vf]:i.DST_ALPHA,[Gf]:i.ONE_MINUS_SRC_COLOR,[Kl]:i.ONE_MINUS_SRC_ALPHA,[qf]:i.ONE_MINUS_DST_COLOR,[Wf]:i.ONE_MINUS_DST_ALPHA,[Yf]:i.CONSTANT_COLOR,[Kf]:i.ONE_MINUS_CONSTANT_COLOR,[Zf]:i.CONSTANT_ALPHA,[Jf]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,le,G,ce,ae,nt,Q,Fe,st,re){if(D===Vr){p===!0&&(ke(i.BLEND),p=!1);return}if(p===!1&&(_e(i.BLEND),p=!0),D!==Of){if(D!==S||re!==y){if((_!==xn||T!==xn)&&(i.blendEquation(i.FUNC_ADD),_=xn,T=xn),re)switch(D){case ga:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jl:i.blendFunc(i.ONE,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ga:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,C=null,w=null,P=null,U.set(0,0,0),x=0,S=D,y=re}return}ae=ae||le,nt=nt||G,Q=Q||ce,(le!==_||ae!==T)&&(i.blendEquationSeparate(ve[le],ve[ae]),_=le,T=ae),(G!==b||ce!==C||nt!==w||Q!==P)&&(i.blendFuncSeparate(De[G],De[ce],De[nt],De[Q]),b=G,C=ce,w=nt,P=Q),(Fe.equals(U)===!1||st!==x)&&(i.blendColor(Fe.r,Fe.g,Fe.b,st),U.copy(Fe),x=st),S=D,y=!1}function Oe(D,le){D.side===xr?ke(i.CULL_FACE):_e(i.CULL_FACE);let G=D.side===_i;le&&(G=!G),Ue(G),D.blending===ga&&D.transparent===!1?N(Vr):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const ce=D.stencilWrite;c.setTest(ce),ce&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),R(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(D){K!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),K=D)}function Be(D){D!==Uf?(_e(i.CULL_FACE),D!==q&&(D===pu?i.cullFace(i.BACK):D===Nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),q=D}function He(D){D!==L&&(X&&i.lineWidth(D),L=D)}function R(D,le,G){D?(_e(i.POLYGON_OFFSET_FILL),(V!==le||F!==G)&&(i.polygonOffset(le,G),V=le,F=G)):ke(i.POLYGON_OFFSET_FILL)}function M(D){D?_e(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function Y(D){D===void 0&&(D=i.TEXTURE0+k-1),ie!==D&&(i.activeTexture(D),ie=D)}function Z(D,le,G){G===void 0&&(ie===null?G=i.TEXTURE0+k-1:G=ie);let ce=pe[G];ce===void 0&&(ce={type:void 0,texture:void 0},pe[G]=ce),(ce.type!==D||ce.texture!==le)&&(ie!==G&&(i.activeTexture(G),ie=G),i.bindTexture(D,le||ge[D]),ce.type=D,ce.texture=le)}function te(){const D=pe[ie];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(D){ee.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function Ee(D){se.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),se.copy(D))}function me(D,le){let G=d.get(le);G===void 0&&(G=new WeakMap,d.set(le,G));let ce=G.get(D);ce===void 0&&(ce=i.getUniformBlockIndex(le,D.name),G.set(D,ce))}function Ne(D,le){const G=d.get(le).get(D);u.get(le)!==G&&(i.uniformBlockBinding(le,G,D.__bindingPointIndex),u.set(le,G))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),r===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ie=null,pe={},m={},g=new WeakMap,v=[],f=null,p=!1,S=null,_=null,b=null,C=null,T=null,w=null,P=null,U=new Ze(0,0,0),x=0,y=!1,K=null,q=null,L=null,V=null,F=null,ee.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:_e,disable:ke,bindFramebuffer:Ae,drawBuffers:I,useProgram:$e,setBlending:N,setMaterial:Oe,setFlipSided:Ue,setCullFace:Be,setLineWidth:He,setPolygonOffset:R,setScissorTest:M,activeTexture:Y,bindTexture:Z,unbindTexture:te,compressedTexImage2D:J,compressedTexImage3D:Ie,texImage2D:Ge,texImage3D:Ce,updateUBOMapping:me,uniformBlockBinding:Ne,texStorage2D:oe,texStorage3D:ot,texSubImage2D:Re,texSubImage3D:ne,compressedTexSubImage2D:he,compressedTexSubImage3D:Te,scissor:xe,viewport:Ee,reset:it}}function Ux(i,e,t,r,n,a,s){const o=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new rt,d=new WeakMap;let h;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return g?new OffscreenCanvas(R,M):ms("canvas")}function f(R,M,Y,Z){let te=1;const J=He(R);if((J.width>Z||J.height>Z)&&(te=Z/Math.max(J.width,J.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Ie=M?ic:Math.floor,Re=Ie(te*J.width),ne=Ie(te*J.height);h===void 0&&(h=v(Re,ne));const he=Y?v(Re,ne):h;return he.width=Re,he.height=ne,he.getContext("2d").drawImage(R,0,0,Re,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Re+"x"+ne+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){const M=He(R);return ju(M.width)&&ju(M.height)}function S(R){return o?!1:R.wrapS!==Qi||R.wrapT!==Qi||R.minFilter!==li&&R.minFilter!==mi}function _(R,M){return R.generateMipmaps&&M&&R.minFilter!==li&&R.minFilter!==mi}function b(R){i.generateMipmap(R)}function C(R,M,Y,Z,te=!1){if(o===!1)return M;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===i.RED&&(Y===i.FLOAT&&(J=i.R32F),Y===i.HALF_FLOAT&&(J=i.R16F),Y===i.UNSIGNED_BYTE&&(J=i.R8)),M===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(J=i.R8UI),Y===i.UNSIGNED_SHORT&&(J=i.R16UI),Y===i.UNSIGNED_INT&&(J=i.R32UI),Y===i.BYTE&&(J=i.R8I),Y===i.SHORT&&(J=i.R16I),Y===i.INT&&(J=i.R32I)),M===i.RG&&(Y===i.FLOAT&&(J=i.RG32F),Y===i.HALF_FLOAT&&(J=i.RG16F),Y===i.UNSIGNED_BYTE&&(J=i.RG8)),M===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(J=i.RG8UI),Y===i.UNSIGNED_SHORT&&(J=i.RG16UI),Y===i.UNSIGNED_INT&&(J=i.RG32UI),Y===i.BYTE&&(J=i.RG8I),Y===i.SHORT&&(J=i.RG16I),Y===i.INT&&(J=i.RG32I)),M===i.RGBA){const Ie=te?bo:pt.getTransfer(Z);Y===i.FLOAT&&(J=i.RGBA32F),Y===i.HALF_FLOAT&&(J=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(J=Ie===xt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(R,M,Y){return _(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==li&&R.minFilter!==mi?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){return R===li||R===vu||R===ka?i.NEAREST:i.LINEAR}function P(R){const M=R.target;M.removeEventListener("dispose",P),x(M),M.isVideoTexture&&d.delete(M)}function U(R){const M=R.target;M.removeEventListener("dispose",U),K(M)}function x(R){const M=r.get(R);if(M.__webglInit===void 0)return;const Y=R.source,Z=m.get(Y);if(Z){const te=Z[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&y(R),Object.keys(Z).length===0&&m.delete(Y)}r.remove(R)}function y(R){const M=r.get(R);i.deleteTexture(M.__webglTexture);const Y=R.source,Z=m.get(Y);delete Z[M.__cacheKey],s.memory.textures--}function K(R){const M=r.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let te=0;te<M.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(M.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=R.textures;for(let Z=0,te=Y.length;Z<te;Z++){const J=r.get(Y[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),s.memory.textures--),r.remove(Y[Z])}r.remove(R)}let q=0;function L(){q=0}function V(){const R=q;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),q+=1,R}function F(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function k(R,M){const Y=r.get(R);if(R.isVideoTexture&&Ue(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Y,R,M);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+M)}function X(R,M){const Y=r.get(R);if(R.version>0&&Y.__version!==R.version){se(Y,R,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+M)}function A(R,M){const Y=r.get(R);if(R.version>0&&Y.__version!==R.version){se(Y,R,M);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+M)}function $(R,M){const Y=r.get(R);if(R.version>0&&Y.__version!==R.version){we(Y,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+M)}const ie={[$l]:i.REPEAT,[Qi]:i.CLAMP_TO_EDGE,[Ql]:i.MIRRORED_REPEAT},pe={[li]:i.NEAREST,[vu]:i.NEAREST_MIPMAP_NEAREST,[ka]:i.NEAREST_MIPMAP_LINEAR,[mi]:i.LINEAR,[$o]:i.LINEAR_MIPMAP_NEAREST,[yn]:i.LINEAR_MIPMAP_LINEAR},fe={[Tm]:i.NEVER,[Pm]:i.ALWAYS,[wm]:i.LESS,[zd]:i.LEQUAL,[Am]:i.EQUAL,[Lm]:i.GEQUAL,[Rm]:i.GREATER,[Cm]:i.NOTEQUAL};function W(R,M,Y){if(M.type===Mr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===mi||M.magFilter===$o||M.magFilter===ka||M.magFilter===yn||M.minFilter===mi||M.minFilter===$o||M.minFilter===ka||M.minFilter===yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(i.texParameteri(R,i.TEXTURE_WRAP_S,ie[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ie[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ie[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,pe[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,pe[M.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Qi||M.wrapT!==Qi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,w(M.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==li&&M.minFilter!==mi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,fe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===li||M.minFilter!==ka&&M.minFilter!==yn||M.type===Mr&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===fs&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ee(R,M){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",P));const Z=M.source;let te=m.get(Z);te===void 0&&(te={},m.set(Z,te));const J=F(M);if(J!==R.__cacheKey){te[J]===void 0&&(te[J]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),te[J].usedTimes++;const Ie=te[R.__cacheKey];Ie!==void 0&&(te[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&y(M)),R.__cacheKey=J,R.__webglTexture=te[J].texture}return Y}function se(R,M,Y){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);const te=ee(R,M),J=M.source;t.bindTexture(Z,R.__webglTexture,i.TEXTURE0+Y);const Ie=r.get(J);if(J.version!==Ie.__version||te===!0){t.activeTexture(i.TEXTURE0+Y);const Re=pt.getPrimaries(pt.workingColorSpace),ne=M.colorSpace===Or?null:pt.getPrimaries(M.colorSpace),he=M.colorSpace===Or||Re===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Te=S(M)&&p(M.image)===!1;let oe=f(M.image,Te,!1,n.maxTextureSize);oe=Be(M,oe);const ot=p(oe)||o,Ge=a.convert(M.format,M.colorSpace);let Ce=a.convert(M.type),xe=C(M.internalFormat,Ge,Ce,M.colorSpace,M.isVideoTexture);W(Z,M,ot);let Ee;const me=M.mipmaps,Ne=o&&M.isVideoTexture!==!0&&xe!==Od,it=Ie.__version===void 0||te===!0,D=J.dataReady,le=T(M,oe,ot);if(M.isDepthTexture)xe=i.DEPTH_COMPONENT,o?M.type===Mr?xe=i.DEPTH_COMPONENT32F:M.type===Fr?xe=i.DEPTH_COMPONENT24:M.type===bn?xe=i.DEPTH24_STENCIL8:xe=i.DEPTH_COMPONENT16:M.type===Mr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Tn&&xe===i.DEPTH_COMPONENT&&M.type!==Dc&&M.type!==Fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Fr,Ce=a.convert(M.type)),M.format===Aa&&xe===i.DEPTH_COMPONENT&&(xe=i.DEPTH_STENCIL,M.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=bn,Ce=a.convert(M.type))),it&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,xe,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,xe,oe.width,oe.height,0,Ge,Ce,null));else if(M.isDataTexture)if(me.length>0&&ot){Ne&&it&&t.texStorage2D(i.TEXTURE_2D,le,xe,me[0].width,me[0].height);for(let G=0,ce=me.length;G<ce;G++)Ee=me[G],Ne?D&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Ee.width,Ee.height,Ge,Ce,Ee.data):t.texImage2D(i.TEXTURE_2D,G,xe,Ee.width,Ee.height,0,Ge,Ce,Ee.data);M.generateMipmaps=!1}else Ne?(it&&t.texStorage2D(i.TEXTURE_2D,le,xe,oe.width,oe.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Ge,Ce,oe.data)):t.texImage2D(i.TEXTURE_2D,0,xe,oe.width,oe.height,0,Ge,Ce,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,xe,me[0].width,me[0].height,oe.depth);for(let G=0,ce=me.length;G<ce;G++)Ee=me[G],M.format!==er?Ge!==null?Ne?D&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Ee.width,Ee.height,oe.depth,Ge,Ee.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,xe,Ee.width,Ee.height,oe.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Ee.width,Ee.height,oe.depth,Ge,Ce,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,xe,Ee.width,Ee.height,oe.depth,0,Ge,Ce,Ee.data)}else{Ne&&it&&t.texStorage2D(i.TEXTURE_2D,le,xe,me[0].width,me[0].height);for(let G=0,ce=me.length;G<ce;G++)Ee=me[G],M.format!==er?Ge!==null?Ne?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,Ee.width,Ee.height,Ge,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,G,xe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?D&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Ee.width,Ee.height,Ge,Ce,Ee.data):t.texImage2D(i.TEXTURE_2D,G,xe,Ee.width,Ee.height,0,Ge,Ce,Ee.data)}else if(M.isDataArrayTexture)Ne?(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,xe,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ge,Ce,oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,oe.width,oe.height,oe.depth,0,Ge,Ce,oe.data);else if(M.isData3DTexture)Ne?(it&&t.texStorage3D(i.TEXTURE_3D,le,xe,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ge,Ce,oe.data)):t.texImage3D(i.TEXTURE_3D,0,xe,oe.width,oe.height,oe.depth,0,Ge,Ce,oe.data);else if(M.isFramebufferTexture){if(it)if(Ne)t.texStorage2D(i.TEXTURE_2D,le,xe,oe.width,oe.height);else{let G=oe.width,ce=oe.height;for(let ae=0;ae<le;ae++)t.texImage2D(i.TEXTURE_2D,ae,xe,G,ce,0,Ge,Ce,null),G>>=1,ce>>=1}}else if(me.length>0&&ot){if(Ne&&it){const G=He(me[0]);t.texStorage2D(i.TEXTURE_2D,le,xe,G.width,G.height)}for(let G=0,ce=me.length;G<ce;G++)Ee=me[G],Ne?D&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Ge,Ce,Ee):t.texImage2D(i.TEXTURE_2D,G,xe,Ge,Ce,Ee);M.generateMipmaps=!1}else if(Ne){if(it){const G=He(oe);t.texStorage2D(i.TEXTURE_2D,le,xe,G.width,G.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,Ce,oe)}else t.texImage2D(i.TEXTURE_2D,0,xe,Ge,Ce,oe);_(M,ot)&&b(Z),Ie.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function we(R,M,Y){if(M.image.length!==6)return;const Z=ee(R,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Y);const J=r.get(te);if(te.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+Y);const Ie=pt.getPrimaries(pt.workingColorSpace),Re=M.colorSpace===Or?null:pt.getPrimaries(M.colorSpace),ne=M.colorSpace===Or||Ie===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const he=M.isCompressedTexture||M.image[0].isCompressedTexture,Te=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let G=0;G<6;G++)!he&&!Te?oe[G]=f(M.image[G],!1,!0,n.maxCubemapSize):oe[G]=Te?M.image[G].image:M.image[G],oe[G]=Be(M,oe[G]);const ot=oe[0],Ge=p(ot)||o,Ce=a.convert(M.format,M.colorSpace),xe=a.convert(M.type),Ee=C(M.internalFormat,Ce,xe,M.colorSpace),me=o&&M.isVideoTexture!==!0,Ne=J.__version===void 0||Z===!0,it=te.dataReady;let D=T(M,ot,Ge);W(i.TEXTURE_CUBE_MAP,M,Ge);let le;if(he){me&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,D,Ee,ot.width,ot.height);for(let G=0;G<6;G++){le=oe[G].mipmaps;for(let ce=0;ce<le.length;ce++){const ae=le[ce];M.format!==er?Ce!==null?me?it&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,0,0,ae.width,ae.height,Ce,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,Ee,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,0,0,ae.width,ae.height,Ce,xe,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,Ee,ae.width,ae.height,0,Ce,xe,ae.data)}}}else{if(le=M.mipmaps,me&&Ne){le.length>0&&D++;const G=He(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,D,Ee,G.width,G.height)}for(let G=0;G<6;G++)if(Te){me?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,oe[G].width,oe[G].height,Ce,xe,oe[G].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ee,oe[G].width,oe[G].height,0,Ce,xe,oe[G].data);for(let ce=0;ce<le.length;ce++){const ae=le[ce].image[G].image;me?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,0,0,ae.width,ae.height,Ce,xe,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,Ee,ae.width,ae.height,0,Ce,xe,ae.data)}}else{me?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ce,xe,oe[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ee,Ce,xe,oe[G]);for(let ce=0;ce<le.length;ce++){const ae=le[ce];me?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,0,0,Ce,xe,ae.image[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,Ee,Ce,xe,ae.image[G])}}}_(M,Ge)&&b(i.TEXTURE_CUBE_MAP),J.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ge(R,M,Y,Z,te,J){const Ie=a.convert(Y.format,Y.colorSpace),Re=a.convert(Y.type),ne=C(Y.internalFormat,Ie,Re,Y.colorSpace);if(!r.get(M).__hasExternalTextures){const he=Math.max(1,M.width>>J),Te=Math.max(1,M.height>>J);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,J,ne,he,Te,M.depth,0,Ie,Re,null):t.texImage2D(te,J,ne,he,Te,0,Ie,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Oe(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,te,r.get(Y).__webglTexture,0,N(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,te,r.get(Y).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(R,M,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let Z=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||Oe(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===Mr?Z=i.DEPTH_COMPONENT32F:te.type===Fr&&(Z=i.DEPTH_COMPONENT24));const J=N(M);Oe(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,Z,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Z,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const Z=N(M);Y&&Oe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,M.width,M.height):Oe(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const Z=M.textures;for(let te=0;te<Z.length;te++){const J=Z[te],Ie=a.convert(J.format,J.colorSpace),Re=a.convert(J.type),ne=C(J.internalFormat,Ie,Re,J.colorSpace),he=N(M);Y&&Oe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ne,M.width,M.height):Oe(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,ne,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ne,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const Y=r.get(M.depthTexture).__webglTexture,Z=N(M);if(M.depthTexture.format===Tn)Oe(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(M.depthTexture.format===Aa)Oe(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const M=r.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ke(M.__webglFramebuffer,R)}else if(Y){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=i.createRenderbuffer(),_e(M.__webglDepthbuffer[Z],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),_e(M.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function I(R,M,Y){const Z=r.get(R);M!==void 0&&ge(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Ae(R)}function $e(R){const M=R.texture,Y=r.get(R),Z=r.get(M);R.addEventListener("dispose",U);const te=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ie=te.length>1,Re=p(R)||o;if(Ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,s.memory.textures++),J){Y.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(o&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[ne]=[];for(let he=0;he<M.mipmaps.length;he++)Y.__webglFramebuffer[ne][he]=i.createFramebuffer()}else Y.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)Y.__webglFramebuffer[ne]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ie)if(n.drawBuffers)for(let ne=0,he=te.length;ne<he;ne++){const Te=r.get(te[ne]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),s.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Oe(R)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){const he=te[ne];Y.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ne]);const Te=a.convert(he.format,he.colorSpace),oe=a.convert(he.type),ot=C(he.internalFormat,Te,oe,he.colorSpace,R.isXRRenderTarget===!0),Ge=N(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,ot,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),W(i.TEXTURE_CUBE_MAP,M,Re);for(let ne=0;ne<6;ne++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)ge(Y.__webglFramebuffer[ne][he],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else ge(Y.__webglFramebuffer[ne],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);_(M,Re)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ne=0,he=te.length;ne<he;ne++){const Te=te[ne],oe=r.get(Te);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),W(i.TEXTURE_2D,Te,Re),ge(Y.__webglFramebuffer,R,Te,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,0),_(Te,Re)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ne=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ne,Z.__webglTexture),W(ne,M,Re),o&&M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)ge(Y.__webglFramebuffer[he],R,M,i.COLOR_ATTACHMENT0,ne,he);else ge(Y.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,ne,0);_(M,Re)&&b(ne),t.unbindTexture()}R.depthBuffer&&Ae(R)}function ve(R){const M=p(R)||o,Y=R.textures;for(let Z=0,te=Y.length;Z<te;Z++){const J=Y[Z];if(_(J,M)){const Ie=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Re=r.get(J).__webglTexture;t.bindTexture(Ie,Re),b(Ie),t.unbindTexture()}}}function De(R){if(o&&R.samples>0&&Oe(R)===!1){const M=R.textures,Y=R.width,Z=R.height;let te=i.COLOR_BUFFER_BIT;const J=[],Ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=r.get(R),ne=M.length>1;if(ne)for(let he=0;he<M.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let he=0;he<M.length;he++){J.push(i.COLOR_ATTACHMENT0+he),R.depthBuffer&&J.push(Ie);const Te=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(Te===!1&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ne&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[he]),Te===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ie]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ie])),ne){const oe=r.get(M[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,te,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<M.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,Re.__webglColorRenderbuffer[he]);const Te=r.get(M[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function N(R){return Math.min(n.maxSamples,R.samples)}function Oe(R){const M=r.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ue(R){const M=s.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function Be(R,M){const Y=R.colorSpace,Z=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===ec||Y!==tn&&Y!==Or&&(pt.getTransfer(Y)===xt?o===!1?e.has("EXT_sRGB")===!0&&Z===er?(R.format=ec,R.minFilter=mi,R.generateMipmaps=!1):M=kd.sRGBToLinear(M):(Z!==er||te!==Xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function He(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=X,this.setTexture3D=A,this.setTextureCube=$,this.rebindTextures=I,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Oe}function Nx(i,e,t){const r=t.isWebGL2;function n(a,s=Or){let o;const l=pt.getTransfer(s);if(a===Xr)return i.UNSIGNED_BYTE;if(a===Pd)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Dd)return i.UNSIGNED_SHORT_5_5_5_1;if(a===fm)return i.BYTE;if(a===mm)return i.SHORT;if(a===Dc)return i.UNSIGNED_SHORT;if(a===Ld)return i.INT;if(a===Fr)return i.UNSIGNED_INT;if(a===Mr)return i.FLOAT;if(a===fs)return r?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===gm)return i.ALPHA;if(a===er)return i.RGBA;if(a===_m)return i.LUMINANCE;if(a===vm)return i.LUMINANCE_ALPHA;if(a===Tn)return i.DEPTH_COMPONENT;if(a===Aa)return i.DEPTH_STENCIL;if(a===ec)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===xm)return i.RED;if(a===Id)return i.RED_INTEGER;if(a===Mm)return i.RG;if(a===Ud)return i.RG_INTEGER;if(a===Nd)return i.RGBA_INTEGER;if(a===Qo||a===el||a===tl||a===il)if(l===xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===el)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===il)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===el)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===tl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===il)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===xu||a===Mu||a===yu||a===Su)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===xu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Mu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===yu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Su)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Od)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Eu||a===bu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Eu)return l===xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===bu)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Tu||a===wu||a===Au||a===Ru||a===Cu||a===Lu||a===Pu||a===Du||a===Iu||a===Uu||a===Nu||a===Ou||a===Fu||a===zu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===Tu)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===wu)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Au)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ru)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Cu)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Lu)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Pu)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Du)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Iu)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Uu)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Nu)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ou)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Fu)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===zu)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===rl||a===Bu||a===ku)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===rl)return l===xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Bu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ku)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ym||a===Hu||a===Gu||a===Vu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===rl)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Hu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Gu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Vu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===bn?r?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:n}}class Ox extends Hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ha extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fx={type:"move"};class Ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,r),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fx)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ha;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new hi,a=e.properties.get(n);a.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,n=new Zr({extensions:{fragDepth:!0},vertexShader:zx,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Di(new Ca(20,20),n)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Hx extends Oa{constructor(e,t){super();const r=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const v=new kx,f=t.getContextAttributes();let p=null,S=null;const _=[],b=[],C=new rt;let T=null;const w=new Hi;w.layers.enable(1),w.viewport=new Vt;const P=new Hi;P.layers.enable(2),P.viewport=new Vt;const U=[w,P],x=new Ox;x.layers.enable(1),x.layers.enable(2);let y=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=_[W];return ee===void 0&&(ee=new Ll,_[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=_[W];return ee===void 0&&(ee=new Ll,_[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=_[W];return ee===void 0&&(ee=new Ll,_[W]=ee),ee.getHandSpace()};function q(W){const ee=b.indexOf(W.inputSource);if(ee===-1)return;const se=_[ee];se!==void 0&&(se.update(W.inputSource,W.frame,c||s),se.dispatchEvent({type:W.type,data:W.inputSource}))}function L(){n.removeEventListener("select",q),n.removeEventListener("selectstart",q),n.removeEventListener("selectend",q),n.removeEventListener("squeeze",q),n.removeEventListener("squeezestart",q),n.removeEventListener("squeezeend",q),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",V);for(let W=0;W<_.length;W++){const ee=b[W];ee!==null&&(b[W]=null,_[W].disconnect(ee))}y=null,K=null,v.reset(),e.setRenderTarget(p),m=null,h=null,d=null,n=null,S=null,fe.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",q),n.addEventListener("selectstart",q),n.addEventListener("selectend",q),n.addEventListener("squeeze",q),n.addEventListener("squeezestart",q),n.addEventListener("squeezeend",q),n.addEventListener("end",L),n.addEventListener("inputsourceschange",V),f.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:n.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,ee),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Un(m.framebufferWidth,m.framebufferHeight,{format:er,type:Xr,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let ee=null,se=null,we=null;f.depth&&(we=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=f.stencil?Aa:Tn,se=f.stencil?bn:Fr);const ge={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};d=new XRWebGLBinding(n,t),h=d.createProjectionLayer(ge),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Un(h.textureWidth,h.textureHeight,{format:er,type:Xr,depthTexture:new $d(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const _e=e.properties.get(S);_e.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),fe.setContext(n),fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function V(W){for(let ee=0;ee<W.removed.length;ee++){const se=W.removed[ee],we=b.indexOf(se);we>=0&&(b[we]=null,_[we].disconnect(se))}for(let ee=0;ee<W.added.length;ee++){const se=W.added[ee];let we=b.indexOf(se);if(we===-1){for(let _e=0;_e<_.length;_e++)if(_e>=b.length){b.push(se),we=_e;break}else if(b[_e]===null){b[_e]=se,we=_e;break}if(we===-1)break}const ge=_[we];ge&&ge.connect(se)}}const F=new j,k=new j;function X(W,ee,se){F.setFromMatrixPosition(ee.matrixWorld),k.setFromMatrixPosition(se.matrixWorld);const we=F.distanceTo(k),ge=ee.projectionMatrix.elements,_e=se.projectionMatrix.elements,ke=ge[14]/(ge[10]-1),Ae=ge[14]/(ge[10]+1),I=(ge[9]+1)/ge[5],$e=(ge[9]-1)/ge[5],ve=(ge[8]-1)/ge[0],De=(_e[8]+1)/_e[0],N=ke*ve,Oe=ke*De,Ue=we/(-ve+De),Be=Ue*-ve;ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Be),W.translateZ(Ue),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const He=ke+Ue,R=Ae+Ue,M=N-Be,Y=Oe+(we-Be),Z=I*Ae/R*He,te=$e*Ae/R*He;W.projectionMatrix.makePerspective(M,Y,Z,te,He,R),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function A(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;v.texture!==null&&(W.near=v.depthNear,W.far=v.depthFar),x.near=P.near=w.near=W.near,x.far=P.far=w.far=W.far,(y!==x.near||K!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,K=x.far,w.near=y,w.far=K,P.near=y,P.far=K,w.updateProjectionMatrix(),P.updateProjectionMatrix(),W.updateProjectionMatrix());const ee=W.parent,se=x.cameras;A(x,ee);for(let we=0;we<se.length;we++)A(se[we],ee);se.length===2?X(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),$(W,x,ee)};function $(W,ee,se){se===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(se.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=tc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null};let ie=null;function pe(W,ee){if(u=ee.getViewerPose(c||s),g=ee,u!==null){const se=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let we=!1;se.length!==x.cameras.length&&(x.cameras.length=0,we=!0);for(let _e=0;_e<se.length;_e++){const ke=se[_e];let Ae=null;if(m!==null)Ae=m.getViewport(ke);else{const $e=d.getViewSubImage(h,ke);Ae=$e.viewport,_e===0&&(e.setRenderTargetTextures(S,$e.colorTexture,h.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(S))}let I=U[_e];I===void 0&&(I=new Hi,I.layers.enable(_e),I.viewport=new Vt,U[_e]=I),I.matrix.fromArray(ke.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ke.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),_e===0&&(x.matrix.copy(I.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),we===!0&&x.cameras.push(I)}const ge=n.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const _e=d.getDepthInformation(se[0]);_e&&_e.isValid&&_e.texture&&v.init(e,_e,n.renderState)}}for(let se=0;se<_.length;se++){const we=b[se],ge=_[se];we!==null&&ge!==void 0&&ge.update(we,ee,c||s)}v.render(e,x),ie&&ie(W,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),g=null}const fe=new Zd;fe.setAnimationLoop(pe),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}}const hn=new cr,Gx=new Tt;function Vx(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function r(f,p){p.color.getRGB(f.fogColor.value,jd(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,S,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(f,p):p.isMeshToonMaterial?(a(f,p),d(f,p)):p.isMeshPhongMaterial?(a(f,p),u(f,p)):p.isMeshStandardMaterial?(a(f,p),h(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(a(f,p),g(f,p)):p.isMeshDepthMaterial?a(f,p):p.isMeshDistanceMaterial?(a(f,p),v(f,p)):p.isMeshNormalMaterial?a(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,S,_):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===_i&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===_i&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=e.get(p),_=S.envMap,b=S.envMapRotation;if(_&&(f.envMap.value=_,hn.copy(b),hn.x*=-1,hn.y*=-1,hn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(hn.y*=-1,hn.z*=-1),f.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(hn)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const C=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*C,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,_){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=_*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_i&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const S=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Wx(i,e,t,r){let n={},a={},s=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,_){const b=_.program;r.uniformBlockBinding(S,b)}function c(S,_){let b=n[S.id];b===void 0&&(g(S),b=u(S),n[S.id]=b,S.addEventListener("dispose",f));const C=_.program;r.updateUBOMapping(S,C);const T=e.render.frame;a[S.id]!==T&&(h(S),a[S.id]=T)}function u(S){const _=d();S.__bindingPointIndex=_;const b=i.createBuffer(),C=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function d(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const _=n[S.id],b=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,w=b.length;T<w;T++){const P=Array.isArray(b[T])?b[T]:[b[T]];for(let U=0,x=P.length;U<x;U++){const y=P[U];if(m(y,T,U,C)===!0){const K=y.__offset,q=Array.isArray(y.value)?y.value:[y.value];let L=0;for(let V=0;V<q.length;V++){const F=q[V],k=v(F);typeof F=="number"||typeof F=="boolean"?(y.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,K+L,y.__data)):F.isMatrix3?(y.__data[0]=F.elements[0],y.__data[1]=F.elements[1],y.__data[2]=F.elements[2],y.__data[3]=0,y.__data[4]=F.elements[3],y.__data[5]=F.elements[4],y.__data[6]=F.elements[5],y.__data[7]=0,y.__data[8]=F.elements[6],y.__data[9]=F.elements[7],y.__data[10]=F.elements[8],y.__data[11]=0):(F.toArray(y.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,_,b,C){const T=S.value,w=_+"_"+b;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{const P=C[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(S){const _=S.uniforms;let b=0;const C=16;for(let w=0,P=_.length;w<P;w++){const U=Array.isArray(_[w])?_[w]:[_[w]];for(let x=0,y=U.length;x<y;x++){const K=U[x],q=Array.isArray(K.value)?K.value:[K.value];for(let L=0,V=q.length;L<V;L++){const F=q[L],k=v(F),X=b%C;X!==0&&C-X<k.boundary&&(b+=C-X),K.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=b,b+=k.storage}}}const T=b%C;return T>0&&(b+=C-T),S.__size=b,S.__cache={},this}function v(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function f(S){const _=S.target;_.removeEventListener("dispose",f);const b=s.indexOf(_.__bindingPointIndex);s.splice(b,1),i.deleteBuffer(n[_.id]),delete n[_.id],delete a[_.id]}function p(){for(const S in n)i.deleteBuffer(n[S]);s=[],n={},a={}}return{bind:l,update:c,dispose:p}}class np{constructor(e={}){const{canvas:t=Im(),context:r=null,depth:n=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;r!==null?h=r.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$i,this._useLegacyLights=!1,this.toneMapping=Wr,this.toneMappingExposure=1;const _=this;let b=!1,C=0,T=0,w=null,P=-1,U=null;const x=new Vt,y=new Vt;let K=null;const q=new Ze(0);let L=0,V=t.width,F=t.height,k=1,X=null,A=null;const $=new Vt(0,0,V,F),ie=new Vt(0,0,V,F);let pe=!1;const fe=new Oc;let W=!1,ee=!1,se=null;const we=new Tt,ge=new rt,_e=new j,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return w===null?k:1}let I=r;function $e(E,O){for(let B=0;B<E.length;B++){const H=E[B],z=t.getContext(H,O);if(z!==null)return z}return null}try{const E={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pc}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",le,!1),I===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),I=$e(O,E),I===null)throw $e(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ve,De,N,Oe,Ue,Be,He,R,M,Y,Z,te,J,Ie,Re,ne,he,Te,oe,ot,Ge,Ce,xe,Ee;function me(){ve=new Zv(I),De=new Wv(I,ve,e),ve.init(De),Ce=new Nx(I,ve,De),N=new Ix(I,ve,De),Oe=new Qv(I),Ue=new xx,Be=new Ux(I,ve,N,Ue,De,Ce,Oe),He=new qv(_),R=new Kv(_),M=new ag(I,De),xe=new Gv(I,ve,M,De),Y=new Jv(I,M,Oe,xe),Z=new r0(I,Y,M,Oe),oe=new i0(I,De,Be),ne=new Xv(Ue),te=new vx(_,He,R,ve,De,xe,ne),J=new Vx(_,Ue),Ie=new yx,Re=new Ax(ve,De),Te=new Hv(_,He,R,N,Z,h,l),he=new Dx(_,Z,De),Ee=new Wx(I,Oe,De,N),ot=new Vv(I,ve,Oe,De),Ge=new $v(I,ve,Oe,De),Oe.programs=te.programs,_.capabilities=De,_.extensions=ve,_.properties=Ue,_.renderLists=Ie,_.shadowMap=he,_.state=N,_.info=Oe}me();const Ne=new Hx(_,I);this.xr=Ne,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(V,F,!1))},this.getSize=function(E){return E.set(V,F)},this.setSize=function(E,O,B=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,F=O,t.width=Math.floor(E*k),t.height=Math.floor(O*k),B===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(V*k,F*k).floor()},this.setDrawingBufferSize=function(E,O,B){V=E,F=O,k=B,t.width=Math.floor(E*B),t.height=Math.floor(O*B),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,O,B,H){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,O,B,H),N.viewport(x.copy($).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,O,B,H){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,O,B,H),N.scissor(y.copy(ie).multiplyScalar(k).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(E){N.setScissorTest(pe=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){A=E},this.getClearColor=function(E){return E.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(E=!0,O=!0,B=!0){let H=0;if(E){let z=!1;if(w!==null){const ue=w.texture.format;z=ue===Nd||ue===Ud||ue===Id}if(z){const ue=w.texture.type,Le=ue===Xr||ue===Fr||ue===Dc||ue===bn||ue===Pd||ue===Dd,Me=Te.getClearColor(),Se=Te.getClearAlpha(),ze=Me.r,Ve=Me.g,Xe=Me.b;Le?(m[0]=ze,m[1]=Ve,m[2]=Xe,m[3]=Se,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=ze,g[1]=Ve,g[2]=Xe,g[3]=Se,I.clearBufferiv(I.COLOR,0,g))}else H|=I.COLOR_BUFFER_BIT}O&&(H|=I.DEPTH_BUFFER_BIT),B&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ie.dispose(),Re.dispose(),Ue.dispose(),He.dispose(),R.dispose(),Z.dispose(),xe.dispose(),Ee.dispose(),te.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",st),Ne.removeEventListener("sessionend",re),se&&(se.dispose(),se=null),Pe.stop()};function it(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=Oe.autoReset,O=he.enabled,B=he.autoUpdate,H=he.needsUpdate,z=he.type;me(),Oe.autoReset=E,he.enabled=O,he.autoUpdate=B,he.needsUpdate=H,he.type=z}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function G(E){const O=E.target;O.removeEventListener("dispose",G),ce(O)}function ce(E){ae(E),Ue.remove(E)}function ae(E){const O=Ue.get(E).programs;O!==void 0&&(O.forEach(function(B){te.releaseProgram(B)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,B,H,z,ue){O===null&&(O=ke);const Le=z.isMesh&&z.matrixWorld.determinant()<0,Me=ht(E,O,B,H,z);N.setMaterial(H,Le);let Se=B.index,ze=1;if(H.wireframe===!0){if(Se=Y.getWireframeAttribute(B),Se===void 0)return;ze=2}const Ve=B.drawRange,Xe=B.attributes.position;let wt=Ve.start*ze,lt=(Ve.start+Ve.count)*ze;ue!==null&&(wt=Math.max(wt,ue.start*ze),lt=Math.min(lt,(ue.start+ue.count)*ze)),Se!==null?(wt=Math.max(wt,0),lt=Math.min(lt,Se.count)):Xe!=null&&(wt=Math.max(wt,0),lt=Math.min(lt,Xe.count));const Bt=lt-wt;if(Bt<0||Bt===1/0)return;xe.setup(z,H,Me,B,Se);let di,ct=ot;if(Se!==null&&(di=M.get(Se),ct=Ge,ct.setIndex(di)),z.isMesh)H.wireframe===!0?(N.setLineWidth(H.wireframeLinewidth*Ae()),ct.setMode(I.LINES)):ct.setMode(I.TRIANGLES);else if(z.isLine){let je=H.linewidth;je===void 0&&(je=1),N.setLineWidth(je*Ae()),z.isLineSegments?ct.setMode(I.LINES):z.isLineLoop?ct.setMode(I.LINE_LOOP):ct.setMode(I.LINE_STRIP)}else z.isPoints?ct.setMode(I.POINTS):z.isSprite&&ct.setMode(I.TRIANGLES);if(z.isBatchedMesh)ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ct.renderInstances(wt,Bt,z.count);else if(B.isInstancedBufferGeometry){const je=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,jo=Math.min(B.instanceCount,je);ct.renderInstances(wt,Bt,jo)}else ct.render(wt,Bt)};function nt(E,O,B){E.transparent===!0&&E.side===xr&&E.forceSinglePass===!1?(E.side=_i,E.needsUpdate=!0,Rt(E,O,B),E.side=Kr,E.needsUpdate=!0,Rt(E,O,B),E.side=xr):Rt(E,O,B)}this.compile=function(E,O,B=null){B===null&&(B=E),f=Re.get(B),f.init(),S.push(f),B.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),E!==B&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(_._useLegacyLights);const H=new Set;return E.traverse(function(z){const ue=z.material;if(ue)if(Array.isArray(ue))for(let Le=0;Le<ue.length;Le++){const Me=ue[Le];nt(Me,B,z),H.add(Me)}else nt(ue,B,z),H.add(ue)}),S.pop(),f=null,H},this.compileAsync=function(E,O,B=null){const H=this.compile(E,O,B);return new Promise(z=>{function ue(){if(H.forEach(function(Le){Ue.get(Le).currentProgram.isReady()&&H.delete(Le)}),H.size===0){z(E);return}setTimeout(ue,10)}ve.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Q=null;function Fe(E){Q&&Q(E)}function st(){Pe.stop()}function re(){Pe.start()}const Pe=new Zd;Pe.setAnimationLoop(Fe),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(E){Q=E,Ne.setAnimationLoop(E),E===null?Pe.stop():Pe.start()},Ne.addEventListener("sessionstart",st),Ne.addEventListener("sessionend",re),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(O),O=Ne.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,O,w),f=Re.get(E,S.length),f.init(),S.push(f),we.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),fe.setFromProjectionMatrix(we),ee=this.localClippingEnabled,W=ne.init(this.clippingPlanes,ee),v=Ie.get(E,p.length),v.init(),p.push(v),be(E,O,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(X,A),this.info.render.frame++,W===!0&&ne.beginShadows();const B=f.state.shadowsArray;if(he.render(B,E,O),W===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1)&&Te.render(v,E),f.setupLights(_._useLegacyLights),O.isArrayCamera){const H=O.cameras;for(let z=0,ue=H.length;z<ue;z++){const Le=H[z];We(v,E,Le,Le.viewport)}}else We(v,E,O);w!==null&&(Be.updateMultisampleRenderTarget(w),Be.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(_,E,O),xe.resetDefaultState(),P=-1,U=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function be(E,O,B,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||fe.intersectsSprite(E)){H&&_e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);const ue=Z.update(E),Le=E.material;Le.visible&&v.push(E,ue,Le,B,_e.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||fe.intersectsObject(E))){const ue=Z.update(E),Le=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),_e.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),_e.copy(ue.boundingSphere.center)),_e.applyMatrix4(E.matrixWorld).applyMatrix4(we)),Array.isArray(Le)){const Me=ue.groups;for(let Se=0,ze=Me.length;Se<ze;Se++){const Ve=Me[Se],Xe=Le[Ve.materialIndex];Xe&&Xe.visible&&v.push(E,ue,Xe,B,_e.z,Ve)}}else Le.visible&&v.push(E,ue,Le,B,_e.z,null)}}const z=E.children;for(let ue=0,Le=z.length;ue<Le;ue++)be(z[ue],O,B,H)}function We(E,O,B,H){const z=E.opaque,ue=E.transmissive,Le=E.transparent;f.setupLightsView(B),W===!0&&ne.setGlobalState(_.clippingPlanes,B),ue.length>0&&Pt(z,ue,O,B),H&&N.viewport(x.copy(H)),z.length>0&&qe(z,O,B),ue.length>0&&qe(ue,O,B),Le.length>0&&qe(Le,O,B),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Pt(E,O,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const z=De.isWebGL2;se===null&&(se=new Un(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?fs:Xr,minFilter:yn,samples:z?4:0})),_.getDrawingBufferSize(ge),z?se.setSize(ge.x,ge.y):se.setSize(ic(ge.x),ic(ge.y));const ue=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(q),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const Le=_.toneMapping;_.toneMapping=Wr,qe(E,B,H),Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se);let Me=!1;for(let Se=0,ze=O.length;Se<ze;Se++){const Ve=O[Se],Xe=Ve.object,wt=Ve.geometry,lt=Ve.material,Bt=Ve.group;if(lt.side===xr&&Xe.layers.test(H.layers)){const di=lt.side;lt.side=_i,lt.needsUpdate=!0,Mt(Xe,B,H,wt,lt,Bt),lt.side=di,lt.needsUpdate=!0,Me=!0}}Me===!0&&(Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se)),_.setRenderTarget(ue),_.setClearColor(q,L),_.toneMapping=Le}function qe(E,O,B){const H=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ue=E.length;z<ue;z++){const Le=E[z],Me=Le.object,Se=Le.geometry,ze=H===null?Le.material:H,Ve=Le.group;Me.layers.test(B.layers)&&Mt(Me,O,B,Se,ze,Ve)}}function Mt(E,O,B,H,z,ue){E.onBeforeRender(_,O,B,H,z,ue),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(_,O,B,H,E,ue),z.transparent===!0&&z.side===xr&&z.forceSinglePass===!1?(z.side=_i,z.needsUpdate=!0,_.renderBufferDirect(B,O,H,z,E,ue),z.side=Kr,z.needsUpdate=!0,_.renderBufferDirect(B,O,H,z,E,ue),z.side=xr):_.renderBufferDirect(B,O,H,z,E,ue),E.onAfterRender(_,O,B,H,z,ue)}function Rt(E,O,B){O.isScene!==!0&&(O=ke);const H=Ue.get(E),z=f.state.lights,ue=f.state.shadowsArray,Le=z.state.version,Me=te.getParameters(E,z.state,ue,O,B),Se=te.getProgramCacheKey(Me);let ze=H.programs;H.environment=E.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(E.isMeshStandardMaterial?R:He).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",G),ze=new Map,H.programs=ze);let Ve=ze.get(Se);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===Le)return ft(E,Me),Ve}else Me.uniforms=te.getUniforms(E),E.onBuild(B,Me,_),E.onBeforeCompile(Me,_),Ve=te.acquireProgram(Me,Se),ze.set(Se,Ve),H.uniforms=Me.uniforms;const Xe=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Xe.clippingPlanes=ne.uniform),ft(E,Me),H.needsLights=vt(E),H.lightsStateVersion=Le,H.needsLights&&(Xe.ambientLightColor.value=z.state.ambient,Xe.lightProbe.value=z.state.probe,Xe.directionalLights.value=z.state.directional,Xe.directionalLightShadows.value=z.state.directionalShadow,Xe.spotLights.value=z.state.spot,Xe.spotLightShadows.value=z.state.spotShadow,Xe.rectAreaLights.value=z.state.rectArea,Xe.ltc_1.value=z.state.rectAreaLTC1,Xe.ltc_2.value=z.state.rectAreaLTC2,Xe.pointLights.value=z.state.point,Xe.pointLightShadows.value=z.state.pointShadow,Xe.hemisphereLights.value=z.state.hemi,Xe.directionalShadowMap.value=z.state.directionalShadowMap,Xe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Xe.spotShadowMap.value=z.state.spotShadowMap,Xe.spotLightMatrix.value=z.state.spotLightMatrix,Xe.spotLightMap.value=z.state.spotLightMap,Xe.pointShadowMap.value=z.state.pointShadowMap,Xe.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=Ve,H.uniformsList=null,Ve}function _t(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=po.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function ft(E,O){const B=Ue.get(E);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function ht(E,O,B,H,z){O.isScene!==!0&&(O=ke),Be.resetTextureUnits();const ue=O.fog,Le=H.isMeshStandardMaterial?O.environment:null,Me=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:tn,Se=(H.isMeshStandardMaterial?R:He).get(H.envMap||Le),ze=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ve=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Xe=!!B.morphAttributes.position,wt=!!B.morphAttributes.normal,lt=!!B.morphAttributes.color;let Bt=Wr;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Bt=_.toneMapping);const di=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ct=di!==void 0?di.length:0,je=Ue.get(H),jo=f.state.lights;if(W===!0&&(ee===!0||E!==U)){const zi=E===U&&H.id===P;ne.setState(H,E,zi)}let Yo=!1;H.version===je.__version?(je.needsLights&&je.lightsStateVersion!==jo.state.version||je.outputColorSpace!==Me||z.isBatchedMesh&&je.batching===!1||!z.isBatchedMesh&&je.batching===!0||z.isInstancedMesh&&je.instancing===!1||!z.isInstancedMesh&&je.instancing===!0||z.isSkinnedMesh&&je.skinning===!1||!z.isSkinnedMesh&&je.skinning===!0||z.isInstancedMesh&&je.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&je.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&je.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&je.instancingMorph===!1&&z.morphTexture!==null||je.envMap!==Se||H.fog===!0&&je.fog!==ue||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ne.numPlanes||je.numIntersection!==ne.numIntersection)||je.vertexAlphas!==ze||je.vertexTangents!==Ve||je.morphTargets!==Xe||je.morphNormals!==wt||je.morphColors!==lt||je.toneMapping!==Bt||De.isWebGL2===!0&&je.morphTargetsCount!==ct)&&(Yo=!0):(Yo=!0,je.__version=H.version);let nn=je.currentProgram;Yo===!0&&(nn=Rt(H,O,z));let hu=!1,Ba=!1,Ko=!1;const Yt=nn.getUniforms(),an=je.uniforms;if(N.useProgram(nn.program)&&(hu=!0,Ba=!0,Ko=!0),H.id!==P&&(P=H.id,Ba=!0),hu||U!==E){Yt.setValue(I,"projectionMatrix",E.projectionMatrix),Yt.setValue(I,"viewMatrix",E.matrixWorldInverse);const zi=Yt.map.cameraPosition;zi!==void 0&&zi.setValue(I,_e.setFromMatrixPosition(E.matrixWorld)),De.logarithmicDepthBuffer&&Yt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Yt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),U!==E&&(U=E,Ba=!0,Ko=!0)}if(z.isSkinnedMesh){Yt.setOptional(I,z,"bindMatrix"),Yt.setOptional(I,z,"bindMatrixInverse");const zi=z.skeleton;zi&&(De.floatVertexTextures?(zi.boneTexture===null&&zi.computeBoneTexture(),Yt.setValue(I,"boneTexture",zi.boneTexture,Be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Yt.setOptional(I,z,"batchingTexture"),Yt.setValue(I,"batchingTexture",z._matricesTexture,Be));const Zo=B.morphAttributes;if((Zo.position!==void 0||Zo.normal!==void 0||Zo.color!==void 0&&De.isWebGL2===!0)&&oe.update(z,B,nn),(Ba||je.receiveShadow!==z.receiveShadow)&&(je.receiveShadow=z.receiveShadow,Yt.setValue(I,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(an.envMap.value=Se,an.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Ba&&(Yt.setValue(I,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&Ei(an,Ko),ue&&H.fog===!0&&J.refreshFogUniforms(an,ue),J.refreshMaterialUniforms(an,H,k,F,se),po.upload(I,_t(je),an,Be)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(po.upload(I,_t(je),an,Be),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Yt.setValue(I,"center",z.center),Yt.setValue(I,"modelViewMatrix",z.modelViewMatrix),Yt.setValue(I,"normalMatrix",z.normalMatrix),Yt.setValue(I,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const zi=H.uniformsGroups;for(let Jo=0,Pf=zi.length;Jo<Pf;Jo++)if(De.isWebGL2){const du=zi[Jo];Ee.update(du,nn),Ee.bind(du,nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nn}function Ei(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function vt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,O,B){Ue.get(E.texture).__webglTexture=O,Ue.get(E.depthTexture).__webglTexture=B;const H=Ue.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const B=Ue.get(E);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,B=0){w=E,C=O,T=B;let H=!0,z=null,ue=!1,Le=!1;if(E){const Me=Ue.get(E);Me.__useDefaultFramebuffer!==void 0?(N.bindFramebuffer(I.FRAMEBUFFER,null),H=!1):Me.__webglFramebuffer===void 0?Be.setupRenderTarget(E):Me.__hasExternalTextures&&Be.rebindTextures(E,Ue.get(E.texture).__webglTexture,Ue.get(E.depthTexture).__webglTexture);const Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(Le=!0);const ze=Ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?z=ze[O][B]:z=ze[O],ue=!0):De.isWebGL2&&E.samples>0&&Be.useMultisampledRTT(E)===!1?z=Ue.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[B]:z=ze,x.copy(E.viewport),y.copy(E.scissor),K=E.scissorTest}else x.copy($).multiplyScalar(k).floor(),y.copy(ie).multiplyScalar(k).floor(),K=pe;if(N.bindFramebuffer(I.FRAMEBUFFER,z)&&De.drawBuffers&&H&&N.drawBuffers(E,z),N.viewport(x),N.scissor(y),N.setScissorTest(K),ue){const Me=Ue.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,B)}else if(Le){const Me=Ue.get(E.texture),Se=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.__webglTexture,B||0,Se)}P=-1},this.readRenderTargetPixels=function(E,O,B,H,z,ue,Le){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Me=Me[Le]),Me){N.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Se=E.texture,ze=Se.format,Ve=Se.type;if(ze!==er&&Ce.convert(ze)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Ve===fs&&(ve.has("EXT_color_buffer_half_float")||De.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ve!==Xr&&Ce.convert(Ve)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Mr&&(De.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&B>=0&&B<=E.height-z&&I.readPixels(O,B,H,z,Ce.convert(ze),Ce.convert(Ve),ue)}finally{const Se=w!==null?Ue.get(w).__webglFramebuffer:null;N.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(E,O,B=0){const H=Math.pow(2,-B),z=Math.floor(O.image.width*H),ue=Math.floor(O.image.height*H);Be.setTexture2D(O,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,E.x,E.y,z,ue),N.unbindTexture()},this.copyTextureToTexture=function(E,O,B,H=0){const z=O.image.width,ue=O.image.height,Le=Ce.convert(B.format),Me=Ce.convert(B.type);Be.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment),O.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,E.x,E.y,z,ue,Le,Me,O.image.data):O.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Le,O.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,H,E.x,E.y,Le,Me,O.image),H===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(E,O,B,H,z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=Math.round(E.max.x-E.min.x),Le=Math.round(E.max.y-E.min.y),Me=E.max.z-E.min.z+1,Se=Ce.convert(H.format),ze=Ce.convert(H.type);let Ve;if(H.isData3DTexture)Be.setTexture3D(H,0),Ve=I.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)Be.setTexture2DArray(H,0),Ve=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const Xe=I.getParameter(I.UNPACK_ROW_LENGTH),wt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),lt=I.getParameter(I.UNPACK_SKIP_PIXELS),Bt=I.getParameter(I.UNPACK_SKIP_ROWS),di=I.getParameter(I.UNPACK_SKIP_IMAGES),ct=B.isCompressedTexture?B.mipmaps[z]:B.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),B.isDataTexture||B.isData3DTexture?I.texSubImage3D(Ve,z,O.x,O.y,O.z,ue,Le,Me,Se,ze,ct.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(Ve,z,O.x,O.y,O.z,ue,Le,Me,Se,ct.data):I.texSubImage3D(Ve,z,O.x,O.y,O.z,ue,Le,Me,Se,ze,ct),I.pixelStorei(I.UNPACK_ROW_LENGTH,Xe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,di),z===0&&H.generateMipmaps&&I.generateMipmap(Ve),N.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Be.setTextureCube(E,0):E.isData3DTexture?Be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Be.setTexture2DArray(E,0):Be.setTexture2D(E,0),N.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,N.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ic?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===ko?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Xx extends np{}Xx.prototype.isWebGL1Renderer=!0;class qx extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ap extends Fa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uh=new Tt,nc=new Uc,Js=new Ho,$s=new j;class jx extends qt{constructor(e=new Ar,t=new ap){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Js.copy(r.boundingSphere),Js.applyMatrix4(n),Js.radius+=a,e.ray.intersectsSphere(Js)===!1)return;Uh.copy(n).invert(),nc.copy(e.ray).applyMatrix4(Uh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=r.index,u=r.attributes.position;if(c!==null){const d=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let m=d,g=h;m<g;m++){const v=c.getX(m);$s.fromBufferAttribute(u,v),Nh($s,v,l,n,e,t,this)}}else{const d=Math.max(0,s.start),h=Math.min(u.count,s.start+s.count);for(let m=d,g=h;m<g;m++)$s.fromBufferAttribute(u,m),Nh($s,m,l,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Nh(i,e,t,r,n,a,s){const o=nc.distanceSqToPoint(i);if(o<t){const l=new j;nc.closestPointToPoint(i,l),l.applyMatrix4(r);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class ac extends Fa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oh extends ac{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ci(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Fh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Yx{constructor(e,t,r){const n=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){o++,a===!1&&n.onStart!==void 0&&n.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,o),s===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Kx=new Yx;class zc{constructor(e){this.manager=e!==void 0?e:Kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,a){r.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Zx extends zc{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Fh.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=ms("img");function l(){u(),Fh.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(d){u(),n&&n(d),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class Jx extends zc{constructor(e){super(e)}load(e,t,r,n){const a=new hi,s=new Zx(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},r,n),a}}class sp extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Pl=new Tt,zh=new j,Bh=new j;class $x{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(zh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),Pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qx extends $x{constructor(){super(new Jd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dl extends sp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Qx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eM extends sp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kh(){return(typeof performance>"u"?Date:performance).now()}const Hh=new Tt;class iM{constructor(e,t,r=0,n=1/0){this.ray=new Uc(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new Nc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(e,t=!0,r=[]){return sc(e,this,r,t),r.sort(Gh),r}intersectObjects(e,t=!0,r=[]){for(let n=0,a=e.length;n<a;n++)sc(e[n],this,r,t);return r.sort(Gh),r}}function Gh(i,e){return i.distance-e.distance}function sc(i,e,t,r){if(i.layers.test(e.layers)&&i.raycast(e,t),r===!0){const n=i.children;for(let a=0,s=n.length;a<s;a++)sc(n[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);class rM{constructor(e){this.canvas=e,this.container=e.parentElement,this.mouse={x:0,y:0,targetX:0,targetY:0},this.clock=new tM,this.scrollState={imageRotX:.08,imageRotY:-.28,imageRotZ:0,imagePosX:1.4,imagePosY:.08,basePosY:.08,imageScale:1.1,glowColor:16777215,destruction:0,hidden:!1,isFlipped:!1,hovered:!1},this.onPictureClick=null,this.targetRotY=-.28,this.init()}init(){this.scene=new qx,this.setupRenderer(),this.setupCamera(),this.createCoaster(),this.createParticleDestructionSystem(),this.createLighting(),this.setupRaycaster(),this.addEventListeners(),this.animate()}setupRenderer(){this.renderer=new np({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ad}setupCamera(){this.camera=new Hi(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,0,7)}createCoaster(){this.rootGroup=new ha,this.scene.add(this.rootGroup),this.imageGroup&&this.rootGroup.remove(this.imageGroup),this.imageGroup=new ha,this.rootGroup.add(this.imageGroup);const e=new Jx().load("/user-avatar.jpg",()=>{this.renderer.render(this.scene,this.camera)});e.colorSpace=$i;const t=2.3,r=2.9,n=.08,a=new Nn(t,r,n),s=new ac({color:1184274,metalness:.8,roughness:.2,transparent:!0,opacity:1});this.frameMesh=new Di(a,s),this.frameMesh.castShadow=!0,this.frameMesh.receiveShadow=!0,this.imageGroup.add(this.frameMesh);const o=new Ca(t-.1,r-.1);this.frontMat=new Oh({map:e,roughness:.15,metalness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:1}),this.frontMesh=new Di(o,this.frontMat),this.frontMesh.position.z=n/2+.005,this.imageGroup.add(this.frontMesh);const l=new Ca(t-.1,r-.1);this.backMat=new Oh({map:e,roughness:.15,metalness:.05,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:1}),this.backMesh=new Di(l,this.backMat),this.backMesh.position.z=-n/2-.005,this.backMesh.rotation.y=Math.PI,this.imageGroup.add(this.backMesh);const c=new Nn(t+.04,r+.04,.02);this.glowMaterial=new ac({color:16777215,emissive:16777215,emissiveIntensity:1.8,transparent:!0,opacity:.85}),this.glowMesh=new Di(c,this.glowMaterial),this.glowMesh.position.z=0,this.imageGroup.add(this.glowMesh)}createParticleDestructionSystem(){const e=new Ar,t=new Float32Array(350*3),r=new Float32Array(350*3),n=new Float32Array(350*3),a=new Ze(16777215),s=new Ze(15000807),o=new Ze(10592682);for(let c=0;c<350;c++){const u=(Math.random()-.5)*2.5,d=(Math.random()-.5)*3,h=(Math.random()-.5)*.3;t[c*3]=u,t[c*3+1]=d,t[c*3+2]=h,r[c*3]=(Math.random()-.5)*4.5,r[c*3+1]=(Math.random()-.5)*4.5+1.2,r[c*3+2]=(Math.random()-.5)*3.5;const m=Math.random(),g=m<.5?a:m<.8?s:o;n[c*3]=g.r,n[c*3+1]=g.g,n[c*3+2]=g.b}e.setAttribute("position",new qi(t,3)),e.setAttribute("color",new qi(n,3));const l=new ap({size:.065,vertexColors:!0,transparent:!0,opacity:0,blending:jl,depthWrite:!1});this.particles=new jx(e,l),this.particleVelocities=r,this.baseParticlePositions=t.slice(),this.rootGroup.add(this.particles)}setupRaycaster(){this.raycaster=new iM,this.pointer=new rt,this.lastFlipTime=0;const e=t=>{let r=t.clientX,n=t.clientY;t.touches&&t.touches.length>0?(r=t.touches[0].clientX,n=t.touches[0].clientY):t.changedTouches&&t.changedTouches.length>0&&(r=t.changedTouches[0].clientX,n=t.changedTouches[0].clientY),!(r===void 0||n===void 0||(this.pointer.x=r/window.innerWidth*2-1,this.pointer.y=-(n/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),!this.imageGroup))&&(this.raycaster.intersectObjects([this.frontMesh,this.backMesh,this.frameMesh]).length>0?(this.scrollState.hovered=!0,document.body.style.cursor="pointer",(t.type==="click"||t.type==="touchend")&&this.toggleCardFlip()):(this.scrollState.hovered=!1,document.body.style.cursor="default"))};window.addEventListener("mousemove",e),window.addEventListener("click",e),window.addEventListener("touchstart",e,{passive:!0}),window.addEventListener("touchend",e)}toggleCardFlip(){const e=Date.now();this.lastFlipTime&&e-this.lastFlipTime<450||(this.lastFlipTime=e,this.scrollState.isFlipped=!this.scrollState.isFlipped,this.targetRotY+=Math.PI,this.scrollState.glowColor=16777215,this.onPictureClick&&this.onPictureClick(this.scrollState.isFlipped))}createLighting(){const e=new eM(16777215,1.2);this.scene.add(e),this.keyLight=new Dl(16777215,2.5),this.keyLight.position.set(5,8,5),this.scene.add(this.keyLight);const t=new Dl(16777215,1.2);t.position.set(-6,-2,-4),this.scene.add(t);const r=new Dl(16777215,1.5);r.position.set(0,5,-8),this.scene.add(r)}addEventListeners(){window.addEventListener("mousemove",e=>{this.mouse.targetX=(e.clientX/window.innerWidth-.5)*2,this.mouse.targetY=(e.clientY/window.innerHeight-.5)*2}),window.addEventListener("touchmove",e=>{e.touches&&e.touches.length>0&&(this.mouse.targetX=(e.touches[0].clientX/window.innerWidth-.5)*2,this.mouse.targetY=(e.touches[0].clientY/window.innerHeight-.5)*2)},{passive:!0}),window.addEventListener("resize",()=>{this.onResize()})}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),e<768?(this.scrollState.imagePosX=0,this.scrollState.basePosY=-.25,this.scrollState.imageScale=.72,this.camera.position.z=8.8):e<1024?(this.scrollState.imagePosX=1.1,this.scrollState.basePosY=.05,this.scrollState.imageScale=.92,this.camera.position.z=8):e<1280?(this.scrollState.imagePosX=1.35,this.scrollState.basePosY=.05,this.scrollState.imageScale=1.05,this.camera.position.z=7.8):(this.scrollState.imagePosX=1.65,this.scrollState.basePosY=.08,this.scrollState.imageScale=1.15,this.camera.position.z=7.5),this.scrollState.imagePosY=this.scrollState.basePosY}setScrollOffset(e){const t=window.innerHeight,r=e/t;this.scrollState.imagePosY=this.scrollState.basePosY+r*4.5;const n=Math.max(0,1-r*1.6);this.frontMat&&(this.frontMat.opacity=n),this.backMat&&(this.backMat.opacity=n),this.frameMesh&&(this.frameMesh.material.opacity=n),this.glowMaterial&&(this.glowMaterial.opacity=n*.85),r>=.75?this.scrollState.hidden=!0:this.scrollState.hidden=!1}animate(){if(requestAnimationFrame(()=>this.animate()),!this.imageGroup)return;const e=this.clock.getElapsedTime();this.mouse.x+=(this.mouse.targetX-this.mouse.x)*.05,this.mouse.y+=(this.mouse.targetY-this.mouse.y)*.05,this.rootGroup.rotation.y=this.mouse.x*.22,this.rootGroup.rotation.x=this.mouse.y*.18;const t=Math.sin(e*2.2)*.12,r=Math.sin(e*1.6)*.05;this.imageGroup.position.x+=(this.scrollState.imagePosX-this.imageGroup.position.x)*.08,this.imageGroup.position.y+=(this.scrollState.imagePosY+t-this.imageGroup.position.y)*.08,this.scrollState.imageRotY+=(this.targetRotY-this.scrollState.imageRotY)*.09,this.imageGroup.rotation.y=this.scrollState.imageRotY,this.imageGroup.rotation.z=r;const n=this.scrollState.hovered?.06:0,a=this.scrollState.imageScale+n;this.imageGroup.scale.set(a,a,a);const s=this.scrollState.destruction||0;if(s>.01){this.particles.material.opacity=Math.sin(Math.min(s,1)*Math.PI)*.95;const o=Math.max(0,1-s*1.15);this.frameMesh.scale.set(o,o,o),this.frontMesh&&this.frontMesh.scale.set(o,o,o),this.backMesh&&this.backMesh.scale.set(o,o,o),this.glowMesh.scale.set(o,o,o);const l=this.particles.geometry.attributes.position.array;for(let c=0;c<this.particleVelocities.length/3;c++){const u=this.particleVelocities[c*3],d=this.particleVelocities[c*3+1],h=this.particleVelocities[c*3+2];l[c*3]=this.baseParticlePositions[c*3]+u*s*1.8,l[c*3+1]=this.baseParticlePositions[c*3+1]+d*s*1.8,l[c*3+2]=this.baseParticlePositions[c*3+2]+h*s*1.8}this.particles.geometry.attributes.position.needsUpdate=!0}else this.particles.material.opacity=0,this.frameMesh.scale.set(1,1,1),this.frontMesh&&this.frontMesh.scale.set(1,1,1),this.backMesh&&this.backMesh.scale.set(1,1,1),this.glowMesh.scale.set(1,1,1);s>=.95||this.scrollState.hidden?this.imageGroup.visible=!1:this.imageGroup.visible=!0,this.glowMaterial&&(this.glowMaterial.color.lerp(new Ze(this.scrollState.glowColor),.1),this.glowMaterial.emissive.lerp(new Ze(this.scrollState.glowColor),.1)),this.renderer.render(this.scene,this.camera)}}function _r(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function op(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gs={duration:.5,overwrite:!1,delay:0},Bc,jt,yt,Wi=1e8,gt=1/Wi,oc=Math.PI*2,nM=oc/4,aM=0,lp=Math.sqrt,sM=Math.cos,oM=Math.sin,Wt=function(i){return typeof i=="string"},At=function(i){return typeof i=="function"},Tr=function(i){return typeof i=="number"},kc=function(i){return typeof i>"u"},ur=function(i){return typeof i=="object"},vi=function(i){return i!==!1},Hc=function(){return typeof window<"u"},Qs=function(i){return At(i)||Wt(i)},cp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ti=Array.isArray,lM=/random\([^)]+\)/g,cM=/,\s*/g,Vh=/(?:-?\.?\d|\.)+/gi,up=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,da=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Il=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hp=/[+-]=-?[.\d]+/,uM=/[^,'"\[\]\s]+/gi,hM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Et,tr,lc,Gc,Oi={},Ro={},dp,pp=function(i){return(Ro=La(i,Oi))&&Si},Vc=function(i,e){return console.warn("Invalid property",i,"set to",e,"Missing plugin? gsap.registerPlugin()")},_s=function(i,e){return!e&&console.warn(i)},fp=function(i,e){return i&&(Oi[i]=e)&&Ro&&(Ro[i]=e)||Oi},vs=function(){return 0},dM={suppressEvents:!0,isStart:!0,kill:!1},fo={suppressEvents:!0,kill:!1},pM={suppressEvents:!0},Wc={},qr=[],cc={},mp,Ri={},Ul={},Wh=30,mo=[],Xc="",qc=function(i){var e=i[0],t,r;if(ur(e)||At(e)||(i=[i]),!(t=(e._gsap||{}).harness)){for(r=mo.length;r--&&!mo[r].targetTest(e););t=mo[r]}for(r=i.length;r--;)i[r]&&(i[r]._gsap||(i[r]._gsap=new Fp(i[r],t)))||i.splice(r,1);return i},An=function(i){return i._gsap||qc(Xi(i))[0]._gsap},gp=function(i,e,t){return(t=i[e])&&At(t)?i[e]():kc(t)&&i.getAttribute&&i.getAttribute(e)||t},xi=function(i,e){return(i=i.split(",")).forEach(e)||i},Ct=function(i){return Math.round(i*1e5)/1e5||0},St=function(i){return Math.round(i*1e7)/1e7||0},va=function(i,e){var t=e.charAt(0),r=parseFloat(e.substr(2));return i=parseFloat(i),t==="+"?i+r:t==="-"?i-r:t==="*"?i*r:i/r},fM=function(i,e){for(var t=e.length,r=0;i.indexOf(e[r])<0&&++r<t;);return r<t},Co=function(){var i=qr.length,e=qr.slice(0),t,r;for(cc={},qr.length=0,t=0;t<i;t++)r=e[t],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},jc=function(i){return!!(i._initted||i._startAt||i.add)},_p=function(i,e,t,r){qr.length&&!jt&&Co(),i.render(e,t,!!(jt&&e<0&&jc(i))),qr.length&&!jt&&Co()},vp=function(i){var e=parseFloat(i);return(e||e===0)&&(i+"").match(uM).length<2?e:Wt(i)?i.trim():i},xp=function(i){return i},Fi=function(i,e){for(var t in e)t in i||(i[t]=e[t]);return i},mM=function(i){return function(e,t){for(var r in t)r in e||r==="duration"&&i||r==="ease"||(e[r]=t[r])}},La=function(i,e){for(var t in e)i[t]=e[t];return i},Xh=function i(e,t){for(var r in t)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=ur(t[r])?i(e[r]||(e[r]={}),t[r]):t[r]);return e},Lo=function(i,e){var t={},r;for(r in i)r in e||(t[r]=i[r]);return t},is=function(i){var e=i.parent||Et,t=i.keyframes?mM(ti(i.keyframes)):Fi;if(vi(i.inherit))for(;e;)t(i,e.vars.defaults),e=e.parent||e._dp;return i},gM=function(i,e){for(var t=i.length,r=t===e.length;r&&t--&&i[t]===e[t];);return t<0},Mp=function(i,e,t,r,n){var a=i[r],s;if(n)for(s=e[n];a&&a[n]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=i[t],i[t]=e),e._next?e._next._prev=e:i[r]=e,e._prev=a,e.parent=e._dp=i,e},Vo=function(i,e,t,r){t===void 0&&(t="_first"),r===void 0&&(r="_last");var n=e._prev,a=e._next;n?n._next=a:i[t]===e&&(i[t]=a),a?a._prev=n:i[r]===e&&(i[r]=n),e._next=e._prev=e.parent=null},Jr=function(i,e){i.parent&&(!e||i.parent.autoRemoveChildren)&&i.parent.remove&&i.parent.remove(i),i._act=0},Rn=function(i,e){if(i&&(!e||e._end>i._dur||e._start<0))for(var t=i;t;)t._dirty=1,t=t.parent;return i},_M=function(i){for(var e=i.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return i},uc=function(i,e,t,r){return i._startAt&&(jt?i._startAt.revert(fo):i.vars.immediateRender&&!i.vars.autoRevert||i._startAt.render(e,!0,r))},vM=function i(e){return!e||e._ts&&i(e.parent)},qh=function(i){return i._repeat?Pa(i._tTime,i=i.duration()+i._rDelay)*i:0},Pa=function(i,e){var t=Math.floor(i=St(i/e));return i&&t===i?t-1:t},Po=function(i,e){return(i-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Wo=function(i){return i._end=St(i._start+(i._tDur/Math.abs(i._ts||i._rts||gt)||0))},Xo=function(i,e){var t=i._dp;return t&&t.smoothChildTiming&&i._ts&&(i._start=St(t._time-(i._ts>0?e/i._ts:((i._dirty?i.totalDuration():i._tDur)-e)/-i._ts)),Wo(i),t._dirty||Rn(t,i)),i},yp=function(i,e){var t;if((e._time||!e._dur&&e._initted||e._start<i._time&&(e._dur||!e.add))&&(t=Po(i.rawTime(),e),(!e._dur||Cs(0,e.totalDuration(),t)-e._tTime>gt)&&e.render(t,!0)),Rn(i,e)._dp&&i._initted&&i._time>=i._dur&&i._ts){if(i._dur<i.duration())for(t=i;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;i._zTime=-gt}},ar=function(i,e,t,r){return e.parent&&Jr(e),e._start=St((Tr(t)?t:t||i!==Et?ki(i,t,e):i._time)+e._delay),e._end=St(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Mp(i,e,"_first","_last",i._sort?"_start":0),hc(e)||(i._recent=e),r||yp(i,e),i._ts<0&&Xo(i,i._tTime),i},Sp=function(i,e){return(Oi.ScrollTrigger||Vc("scrollTrigger",e))&&Oi.ScrollTrigger.create(e,i)},Ep=function(i,e,t,r,n){if(Kc(i,e,n),!i._initted)return 1;if(!t&&i._pt&&!jt&&(i._dur&&i.vars.lazy!==!1||!i._dur&&i.vars.lazy)&&mp!==Li.frame)return qr.push(i),i._lazy=[n,r],1},xM=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},hc=function(i){var e=i.data;return e==="isFromStart"||e==="isStart"},MM=function(i,e,t,r){var n=i.ratio,a=e<0||!e&&(!i._start&&xM(i)&&!(!i._initted&&hc(i))||(i._ts<0||i._dp._ts<0)&&!hc(i))?0:1,s=i._rDelay,o=0,l,c,u;if(s&&i._repeat&&(o=Cs(0,i._tDur,e),c=Pa(o,s),i._yoyo&&c&1&&(a=1-a),c!==Pa(i._tTime,s)&&(n=1-a,i.vars.repeatRefresh&&i._initted&&i.invalidate())),a!==n||jt||r||i._zTime===gt||!e&&i._zTime){if(!i._initted&&Ep(i,e,r,t,o))return;for(u=i._zTime,i._zTime=e||(t?gt:0),t||(t=e&&!u),i.ratio=a,i._from&&(a=1-a),i._time=0,i._tTime=o,l=i._pt;l;)l.r(a,l.d),l=l._next;e<0&&uc(i,e,t,!0),i._onUpdate&&!t&&Ii(i,"onUpdate"),o&&i._repeat&&!t&&i.parent&&Ii(i,"onRepeat"),(e>=i._tDur||e<0)&&i.ratio===a&&(a&&Jr(i,1),!t&&!jt&&(Ii(i,a?"onComplete":"onReverseComplete",!0),i._prom&&i._prom()))}else i._zTime||(i._zTime=e)},yM=function(i,e,t){var r;if(t>e)for(r=i._first;r&&r._start<=t;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=i._last;r&&r._start>=t;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Da=function(i,e,t,r){var n=i._repeat,a=St(e)||0,s=i._tTime/i._tDur;return s&&!r&&(i._time*=a/i._dur),i._dur=a,i._tDur=n?n<0?1e10:St(a*(n+1)+i._rDelay*n):a,s>0&&!r&&Xo(i,i._tTime=i._tDur*s),i.parent&&Wo(i),t||Rn(i.parent,i),i},jh=function(i){return i instanceof gi?Rn(i):Da(i,i._dur)},SM={_start:0,endTime:vs,totalDuration:vs},ki=function i(e,t,r){var n=e.labels,a=e._recent||SM,s=e.duration()>=Wi?a.endTime(!1):e._dur,o,l,c;return Wt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?a:r).totalDuration()/100:1)):o<0?(t in n||(n[t]=s),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&r&&(l=l/100*(ti(r)?r[0]:r).totalDuration()),o>1?i(e,t.substr(0,o-1),r)+l:s+l)):t==null?s:+t},rs=function(i,e,t){var r=Tr(e[1]),n=(r?2:1)+(i<2?0:1),a=e[n],s,o;if(r&&(a.duration=e[1]),a.parent=t,i){for(s=a,o=t;o&&!("immediateRender"in s);)s=o.vars.defaults||{},o=vi(o.vars.inherit)&&o.parent;a.immediateRender=vi(s.immediateRender),i<2?a.runBackwards=1:a.startAt=e[n-1]}return new Ut(e[0],a,e[n+1])},rn=function(i,e){return i||i===0?e(i):e},Cs=function(i,e,t){return t<i?i:t>e?e:t},Qt=function(i,e){return!Wt(i)||!(e=hM.exec(i))?"":e[1]},EM=function(i,e,t){return rn(t,function(r){return Cs(i,e,r)})},dc=[].slice,bp=function(i,e){return i&&ur(i)&&"length"in i&&(!e&&!i.length||i.length-1 in i&&ur(i[0]))&&!i.nodeType&&i!==tr},bM=function(i,e,t){return t===void 0&&(t=[]),i.forEach(function(r){var n;return Wt(r)&&!e||bp(r,1)?(n=t).push.apply(n,Xi(r)):t.push(r)})||t},Xi=function(i,e,t){return yt&&!e&&yt.selector?yt.selector(i):Wt(i)&&!t&&(lc||!Ia())?dc.call((e||Gc).querySelectorAll(i),0):ti(i)?bM(i,t):bp(i)?dc.call(i,0):i?[i]:[]},pc=function(i){return i=Xi(i)[0]||_s("Invalid scope")||{},function(e){var t=i.current||i.nativeElement||i;return Xi(e,t.querySelectorAll?t:t===i?_s("Invalid scope")||Gc.createElement("div"):i)}},Tp=function(i){return i.sort(function(){return .5-Math.random()})},wp=function(i){if(At(i))return i;var e=ur(i)?i:{each:i},t=Cn(e.ease),r=e.from||0,n=parseFloat(e.base)||0,a={},s=r>0&&r<1,o=isNaN(r)||s,l=e.axis,c=r,u=r;return Wt(r)?c=u={center:.5,edges:.5,end:1}[r]||0:!s&&o&&(c=r[0],u=r[1]),function(d,h,m){var g=(m||e).length,v=a[g],f,p,S,_,b,C,T,w,P;if(!v){if(P=e.grid==="auto"?0:(e.grid||[1,Wi])[1],!P){for(T=-Wi;T<(T=m[P++].getBoundingClientRect().left)&&P<g;);P<g&&P--}for(v=a[g]=[],f=o?Math.min(P,g)*c-.5:r%P,p=P===Wi?0:o?g*u/P-.5:r/P|0,T=0,w=Wi,C=0;C<g;C++)S=C%P-f,_=p-(C/P|0),v[C]=b=l?Math.abs(l==="y"?_:S):lp(S*S+_*_),b>T&&(T=b),b<w&&(w=b);r==="random"&&Tp(v),v.max=T-w,v.min=w,v.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(P>g?g-1:l?l==="y"?g/P:P:Math.max(P,g/P))||0)*(r==="edges"?-1:1),v.b=g<0?n-g:n,v.u=Qt(e.amount||e.each)||0,t=t&&g<0?FM(t):t}return g=(v[d]-v.min)/v.max||0,St(v.b+(t?t(g):g)*v.v)+v.u}},fc=function(i){var e=Math.pow(10,((i+"").split(".")[1]||"").length);return function(t){var r=St(Math.round(parseFloat(t)/i)*i*e);return(r-r%1)/e+(Tr(t)?0:Qt(t))}},Ap=function(i,e){var t=ti(i),r,n;return!t&&ur(i)&&(r=t=i.radius||Wi,i.values?(i=Xi(i.values),(n=!Tr(i[0]))&&(r*=r)):i=fc(i.increment)),rn(e,t?At(i)?function(a){return n=i(a),Math.abs(n-a)<=r?n:a}:function(a){for(var s=parseFloat(n?a.x:a),o=parseFloat(n?a.y:0),l=Wi,c=0,u=i.length,d,h;u--;)n?(d=i[u].x-s,h=i[u].y-o,d=d*d+h*h):d=Math.abs(i[u]-s),d<l&&(l=d,c=u);return c=!r||l<=r?i[c]:a,n||c===a||Tr(a)?c:c+Qt(a)}:fc(i))},Rp=function(i,e,t,r){return rn(ti(i)?!e:t===!0?!!(t=0):!r,function(){return ti(i)?i[~~(Math.random()*i.length)]:(t=t||1e-5)&&(r=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((i-t/2+Math.random()*(e-i+t*.99))/t)*t*r)/r})},TM=function(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];return function(r){return e.reduce(function(n,a){return a(n)},r)}},wM=function(i,e){return function(t){return i(parseFloat(t))+(e||Qt(t))}},AM=function(i,e,t){return Lp(i,e,0,1,t)},Cp=function(i,e,t){return rn(t,function(r){return i[~~e(r)]})},RM=function i(e,t,r){var n=t-e;return ti(e)?Cp(e,i(0,e.length),t):rn(r,function(a){return(n+(a-e)%n)%n+e})},CM=function i(e,t,r){var n=t-e,a=n*2;return ti(e)?Cp(e,i(0,e.length-1),t):rn(r,function(s){return s=(a+(s-e)%a)%a||0,e+(s>n?a-s:s)})},xs=function(i){return i.replace(lM,function(e){var t=e.indexOf("[")+1,r=e.substring(t||7,t?e.indexOf("]"):e.length-1).split(cM);return Rp(t?r:+r[0],t?0:+r[1],+r[2]||1e-5)})},Lp=function(i,e,t,r,n){var a=e-i,s=r-t;return rn(n,function(o){return t+((o-i)/a*s||0)})},LM=function i(e,t,r,n){var a=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!a){var s=Wt(e),o={},l,c,u,d,h;if(r===!0&&(n=1)&&(r=null),s)e={p:e},t={p:t};else if(ti(e)&&!ti(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,a=function(m){m*=d;var g=Math.min(h,~~m);return u[g](m-g)},r=t}else n||(e=La(ti(e)?[]:{},e));if(!u){for(l in t)Yc.call(o,e,l,"get",t[l]);a=function(m){return $c(m,o)||(s?e.p:e)}}}return rn(r,a)},Yh=function(i,e,t){var r=i.labels,n=Wi,a,s,o;for(a in r)s=r[a]-e,s<0==!!t&&s&&n>(s=Math.abs(s))&&(o=a,n=s);return o},Ii=function(i,e,t){var r=i.vars,n=r[e],a=yt,s=i._ctx,o,l,c;if(n)return o=r[e+"Params"],l=r.callbackScope||i,t&&qr.length&&Co(),s&&(yt=s),c=o?n.apply(l,o):n.call(l),yt=a,c},Ka=function(i){return Jr(i),i.scrollTrigger&&i.scrollTrigger.kill(!!jt),i.progress()<1&&Ii(i,"onInterrupt"),i},pa,Pp=[],Dp=function(i){if(i)if(i=!i.name&&i.default||i,Hc()||i.headless){var e=i.name,t=At(i),r=e&&!t&&i.init?function(){this._props=[]}:i,n={init:vs,render:$c,add:Yc,kill:jM,modifier:qM,rawVars:0},a={targetTest:0,get:0,getSetter:Jc,aliases:{},register:0};if(Ia(),i!==r){if(Ri[e])return;Fi(r,Fi(Lo(i,n),a)),La(r.prototype,La(n,Lo(i,a))),Ri[r.prop=e]=r,i.targetTest&&(mo.push(r),Wc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}fp(e,r),i.register&&i.register(Si,r,Mi)}else Pp.push(i)},mt=255,Za={aqua:[0,mt,mt],lime:[0,mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,mt],navy:[0,0,128],white:[mt,mt,mt],olive:[128,128,0],yellow:[mt,mt,0],orange:[mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[mt,0,0],pink:[mt,192,203],cyan:[0,mt,mt],transparent:[mt,mt,mt,0]},Nl=function(i,e,t){return i+=i<0?1:i>1?-1:0,(i*6<1?e+(t-e)*i*6:i<.5?t:i*3<2?e+(t-e)*(2/3-i)*6:e)*mt+.5|0},Ip=function(i,e,t){var r=i?Tr(i)?[i>>16,i>>8&mt,i&mt]:0:Za.black,n,a,s,o,l,c,u,d,h,m;if(!r){if(i.substr(-1)===","&&(i=i.substr(0,i.length-1)),Za[i])r=Za[i];else if(i.charAt(0)==="#"){if(i.length<6&&(n=i.charAt(1),a=i.charAt(2),s=i.charAt(3),i="#"+n+n+a+a+s+s+(i.length===5?i.charAt(4)+i.charAt(4):"")),i.length===9)return r=parseInt(i.substr(1,6),16),[r>>16,r>>8&mt,r&mt,parseInt(i.substr(7),16)/255];i=parseInt(i.substr(1),16),r=[i>>16,i>>8&mt,i&mt]}else if(i.substr(0,3)==="hsl"){if(r=m=i.match(Vh),!e)o=+r[0]%360/360,l=+r[1]/100,c=+r[2]/100,a=c<=.5?c*(l+1):c+l-c*l,n=c*2-a,r.length>3&&(r[3]*=1),r[0]=Nl(o+1/3,n,a),r[1]=Nl(o,n,a),r[2]=Nl(o-1/3,n,a);else if(~i.indexOf("="))return r=i.match(up),t&&r.length<4&&(r[3]=1),r}else r=i.match(Vh)||Za.transparent;r=r.map(Number)}return e&&!m&&(n=r[0]/mt,a=r[1]/mt,s=r[2]/mt,u=Math.max(n,a,s),d=Math.min(n,a,s),c=(u+d)/2,u===d?o=l=0:(h=u-d,l=c>.5?h/(2-u-d):h/(u+d),o=u===n?(a-s)/h+(a<s?6:0):u===a?(s-n)/h+2:(n-a)/h+4,o*=60),r[0]=~~(o+.5),r[1]=~~(l*100+.5),r[2]=~~(c*100+.5)),t&&r.length<4&&(r[3]=1),r},Up=function(i){var e=[],t=[],r=-1;return i.split(jr).forEach(function(n){var a=n.match(da)||[];e.push.apply(e,a),t.push(r+=a.length+1)}),e.c=t,e},Kh=function(i,e,t){var r="",n=(i+r).match(jr),a=e?"hsla(":"rgba(",s=0,o,l,c,u;if(!n)return i;if(n=n.map(function(d){return(d=Ip(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),t&&(c=Up(i),o=t.c,o.join(r)!==c.c.join(r)))for(l=i.replace(jr,"1").split(da),u=l.length-1;s<u;s++)r+=l[s]+(~o.indexOf(s)?n.shift()||a+"0,0,0,0)":(c.length?c:n.length?n:t).shift());if(!l)for(l=i.split(jr),u=l.length-1;s<u;s++)r+=l[s]+n[s];return r+l[u]},jr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Za)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),PM=/hsl[a]?\(/,Np=function(i){var e=i.join(" "),t;if(jr.lastIndex=0,jr.test(e))return t=PM.test(e),i[1]=Kh(i[1],t),i[0]=Kh(i[0],t,Up(i[1])),!0},Ms,Li=function(){var i=Date.now,e=500,t=33,r=i(),n=r,a=1e3/240,s=a,o=[],l,c,u,d,h,m,g=function v(f){var p=i()-n,S=f===!0,_,b,C,T;if((p>e||p<0)&&(r+=p-t),n+=p,C=n-r,_=C-s,(_>0||S)&&(T=++d.frame,h=C-d.time*1e3,d.time=C=C/1e3,s+=_+(_>=a?4:a-_),b=1),S||(l=c(v)),b)for(m=0;m<o.length;m++)o[m](C,h,T,f)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(v){return h/(1e3/(v||60))},wake:function(){dp&&(!lc&&Hc()&&(tr=lc=window,Gc=tr.document||{},Oi.gsap=Si,(tr.gsapVersions||(tr.gsapVersions=[])).push(Si.version),pp(Ro||tr.GreenSockGlobals||!tr.gsap&&tr||{}),Pp.forEach(Dp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(v){return setTimeout(v,s-d.time*1e3+1|0)},Ms=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ms=0,c=vs},lagSmoothing:function(v,f){e=v||1/0,t=Math.min(f||33,e)},fps:function(v){a=1e3/(v||240),s=d.time*1e3+a},add:function(v,f,p){var S=f?function(_,b,C,T){v(_,b,C,T),d.remove(S)}:v;return d.remove(v),o[p?"unshift":"push"](S),Ia(),S},remove:function(v,f){~(f=o.indexOf(v))&&o.splice(f,1)&&m>=f&&m--},_listeners:o},d}(),Ia=function(){return!Ms&&Li.wake()},at={},DM=/^[\d.\-M][\d.\-,\s]/,IM=/["']/g,UM=function(i){for(var e={},t=i.substr(1,i.length-3).split(":"),r=t[0],n=1,a=t.length,s,o,l;n<a;n++)o=t[n],s=n!==a-1?o.lastIndexOf(","):o.length,l=o.substr(0,s),e[r]=isNaN(l)?l.replace(IM,"").trim():+l,r=o.substr(s+1).trim();return e},NM=function(i){var e=i.indexOf("(")+1,t=i.indexOf(")"),r=i.indexOf("(",e);return i.substring(e,~r&&r<t?i.indexOf(")",t+1):t)},OM=function(i){var e=(i+"").split("("),t=at[e[0]];return t&&e.length>1&&t.config?t.config.apply(null,~i.indexOf("{")?[UM(e[1])]:NM(i).split(",").map(vp)):at._CE&&DM.test(i)?at._CE("",i):t},FM=function(i){return function(e){return 1-i(1-e)}},Cn=function(i,e){return i&&(At(i)?i:at[i]||OM(i))||e},Bn=function(i,e,t,r){t===void 0&&(t=function(s){return 1-e(1-s)}),r===void 0&&(r=function(s){return s<.5?e(s*2)/2:1-e((1-s)*2)/2});var n={easeIn:e,easeOut:t,easeInOut:r},a;return xi(i,function(s){at[s]=Oi[s]=n,at[a=s.toLowerCase()]=t;for(var o in n)at[a+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=at[s+"."+o]=n[o]}),n},Op=function(i){return function(e){return e<.5?(1-i(1-e*2))/2:.5+i((e-.5)*2)/2}},Ol=function i(e,t,r){var n=t>=1?t:1,a=(r||(e?.3:.45))/(t<1?t:1),s=a/oc*(Math.asin(1/n)||0),o=function(c){return c===1?1:n*Math.pow(2,-10*c)*oM((c-s)*a)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Op(o);return a=oc/a,l.config=function(c,u){return i(e,c,u)},l},Fl=function i(e,t){t===void 0&&(t=1.70158);var r=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?r:e==="in"?function(a){return 1-r(1-a)}:Op(r);return n.config=function(a){return i(e,a)},n};xi("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Bn(i+",Power"+(t-1),e?function(r){return Math.pow(r,t)}:function(r){return r},function(r){return 1-Math.pow(1-r,t)},function(r){return r<.5?Math.pow(r*2,t)/2:1-Math.pow((1-r)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;Bn("Elastic",Ol("in"),Ol("out"),Ol());(function(i,e){var t=1/e,r=2*t,n=2.5*t,a=function(s){return s<t?i*s*s:s<r?i*Math.pow(s-1.5/e,2)+.75:s<n?i*(s-=2.25/e)*s+.9375:i*Math.pow(s-2.625/e,2)+.984375};Bn("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);Bn("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Bn("Circ",function(i){return-(lp(1-i*i)-1)});Bn("Sine",function(i){return i===1?1:-sM(i*nM)+1});Bn("Back",Fl("in"),Fl("out"),Fl());at.SteppedEase=at.steps=Oi.SteppedEase={config:function(i,e){i===void 0&&(i=1);var t=1/i,r=i+(e?0:1),n=e?1:0,a=1-gt;return function(s){return((r*Cs(0,a,s)|0)+n)*t}}};gs.ease=at["quad.out"];xi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Xc+=i+","+i+"Params,"});var Fp=function(i,e){this.id=aM++,i._gsap=this,this.target=i,this.harness=e,this.get=e?e.get:gp,this.set=e?e.getSetter:Jc},ys=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Da(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),Ms||Li.wake()}var e=i.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,Da(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,r){if(Ia(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Xo(this,t),!n._dp||n.parent||yp(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&ar(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===gt||!this._initted&&this._dur&&t||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),_p(this,t,r)),this},e.time=function(t,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+qh(this))%(this._dur+this._rDelay)||(t?this._dur:0),r):this._time},e.totalProgress=function(t,r){return arguments.length?this.totalTime(this.totalDuration()*t,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+qh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*n,r):this._repeat?Pa(this._tTime,n)+1:1},e.timeScale=function(t,r){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===t)return this;var n=this.parent&&this._ts?Po(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-gt?0:this._rts,this.totalTime(Cs(-Math.abs(this._delay),this.totalDuration(),n),r!==!1),Wo(this),_M(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ia(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==gt&&(this._tTime-=gt)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=St(t);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ar(r,this,this._start-this._delay),this}return this._start},e.endTime=function(t){return this._start+(vi(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var r=this.parent||this._dp;return r?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Po(r.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=pM);var r=jt;return jt=t,jc(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),jt=r,this},e.globalTime=function(t){for(var r=this,n=arguments.length?t:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(t):n},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,jh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var r=this._time;return this._rDelay=t,jh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,r){return this.totalTime(ki(this,t),vi(r))},e.restart=function(t,r){return this.play().totalTime(t?-this._delay:0,vi(r)),this._dur||(this._zTime=-gt),this},e.play=function(t,r){return t!=null&&this.seek(t,r),this.reversed(!1).paused(!1)},e.reverse=function(t,r){return t!=null&&this.seek(t||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(t,r){return t!=null&&this.seek(t,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var t=this.parent||this._dp,r=this._start,n;return!!(!t||this._ts&&this._initted&&t.isActive()&&(n=t.rawTime(!0))>=r&&n<this.endTime(!0)-gt)},e.eventCallback=function(t,r,n){var a=this.vars;return arguments.length>1?(r?(a[t]=r,n&&(a[t+"Params"]=n),t==="onUpdate"&&(this._onUpdate=r)):delete a[t],this):a[t]},e.then=function(t){var r=this,n=r._prom;return new Promise(function(a){var s=At(t)?t:xp,o=function(){var l=r.then;r.then=null,n&&n(),At(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=l),a(s),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Ka(this)},i}();Fi(ys.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var gi=function(i){op(e,i);function e(r,n){var a;return r===void 0&&(r={}),a=i.call(this,r)||this,a.labels={},a.smoothChildTiming=!!r.smoothChildTiming,a.autoRemoveChildren=!!r.autoRemoveChildren,a._sort=vi(r.sortChildren),Et&&ar(r.parent||Et,_r(a),n),r.reversed&&a.reverse(),r.paused&&a.paused(!0),r.scrollTrigger&&Sp(_r(a),r.scrollTrigger),a}var t=e.prototype;return t.to=function(r,n,a){return rs(0,arguments,this),this},t.from=function(r,n,a){return rs(1,arguments,this),this},t.fromTo=function(r,n,a,s){return rs(2,arguments,this),this},t.set=function(r,n,a){return n.duration=0,n.parent=this,is(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new Ut(r,n,ki(this,a),1),this},t.call=function(r,n,a){return ar(this,Ut.delayedCall(0,r,n),a)},t.staggerTo=function(r,n,a,s,o,l,c){return a.duration=n,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=c,a.parent=this,new Ut(r,a,ki(this,o)),this},t.staggerFrom=function(r,n,a,s,o,l,c){return a.runBackwards=1,is(a).immediateRender=vi(a.immediateRender),this.staggerTo(r,n,a,s,o,l,c)},t.staggerFromTo=function(r,n,a,s,o,l,c,u){return s.startAt=a,is(s).immediateRender=vi(s.immediateRender),this.staggerTo(r,n,s,o,l,c,u)},t.render=function(r,n,a){var s=this._time,o=this._dirty?this.totalDuration():this._tDur,l=this._dur,c=r<=0?0:St(r),u=this._zTime<0!=r<0&&(this._initted||!l),d,h,m,g,v,f,p,S,_,b,C,T;if(this!==Et&&c>o&&r>=0&&(c=o),c!==this._tTime||a||u){if(s!==this._time&&l&&(c+=this._time-s,r+=this._time-s),d=c,_=this._start,S=this._ts,f=!S,u&&(l||(s=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,v=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(v*100+r,n,a);if(d=St(c%v),c===o?(g=this._repeat,d=l):(b=St(c/v),g=~~b,g&&g===b&&(d=l,g--),d>l&&(d=l)),b=Pa(this._tTime,v),!s&&this._tTime&&b!==g&&this._tTime-b*v-this._dur<=0&&(b=g),C&&g&1&&(d=l-d,T=1),g!==b&&!this._lock){var w=C&&b&1,P=w===(C&&g&1);if(g<b&&(w=!w),s=w?0:c%l?l:c,this._lock=1,this.render(s||(T?0:St(g*v)),n,!l)._lock=0,this._tTime=c,!n&&this.parent&&Ii(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,b=g),s&&s!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,o=this._tDur,P&&(this._lock=2,s=w?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(p=yM(this,St(s),St(d)),p&&(c-=d-(d=p._start))),this._tTime=c,this._time=d,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,s=0),!s&&c&&l&&!n&&!b&&(Ii(this,"onStart"),this._tTime!==c))return this;if(d>=s&&r>=0)for(h=this._first;h;){if(m=h._next,(h._act||d>=h._start)&&h._ts&&p!==h){if(h.parent!==this)return this.render(r,n,a);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,n,a),d!==this._time||!this._ts&&!f){p=0,m&&(c+=this._zTime=-gt);break}}h=m}else{h=this._last;for(var U=r<0?r:d;h;){if(m=h._prev,(h._act||U<=h._end)&&h._ts&&p!==h){if(h.parent!==this)return this.render(r,n,a);if(h.render(h._ts>0?(U-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(U-h._start)*h._ts,n,a||jt&&jc(h)),d!==this._time||!this._ts&&!f){p=0,m&&(c+=this._zTime=U?-gt:gt);break}}h=m}}if(p&&!n&&(this.pause(),p.render(d>=s?0:-gt)._zTime=d>=s?1:-1,this._ts))return this._start=_,Wo(this),this.render(r,n,a);this._onUpdate&&!n&&Ii(this,"onUpdate",!0),(c===o&&this._tTime>=this.totalDuration()||!c&&s)&&(_===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(c===o&&this._ts>0||!c&&this._ts<0)&&Jr(this,1),!n&&!(r<0&&!s)&&(c||s||!o)&&(Ii(this,c===o&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<o&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,n){var a=this;if(Tr(n)||(n=ki(this,n,r)),!(r instanceof ys)){if(ti(r))return r.forEach(function(s){return a.add(s,n)}),this;if(Wt(r))return this.addLabel(r,n);if(At(r))r=Ut.delayedCall(0,r);else return this}return this!==r?ar(this,r,n):this},t.getChildren=function(r,n,a,s){r===void 0&&(r=!0),n===void 0&&(n=!0),a===void 0&&(a=!0),s===void 0&&(s=-Wi);for(var o=[],l=this._first;l;)l._start>=s&&(l instanceof Ut?n&&o.push(l):(a&&o.push(l),r&&o.push.apply(o,l.getChildren(!0,n,a)))),l=l._next;return o},t.getById=function(r){for(var n=this.getChildren(1,1,1),a=n.length;a--;)if(n[a].vars.id===r)return n[a]},t.remove=function(r){return Wt(r)?this.removeLabel(r):At(r)?this.killTweensOf(r):(r.parent===this&&Vo(this,r),r===this._recent&&(this._recent=this._last),Rn(this))},t.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(Li.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},t.addLabel=function(r,n){return this.labels[r]=ki(this,n),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,n,a){var s=Ut.delayedCall(0,n||vs,a);return s.data="isPause",this._hasPause=1,ar(this,s,ki(this,r))},t.removePause=function(r){var n=this._first;for(r=ki(this,r);n;)n._start===r&&n.data==="isPause"&&Jr(n),n=n._next},t.killTweensOf=function(r,n,a){for(var s=this.getTweensOf(r,a),o=s.length;o--;)zr!==s[o]&&s[o].kill(r,n);return this},t.getTweensOf=function(r,n){for(var a=[],s=Xi(r),o=this._first,l=Tr(n),c;o;)o instanceof Ut?fM(o._targets,s)&&(l?(!zr||o._initted&&o._ts)&&o.globalTime(0)<=n&&o.globalTime(o.totalDuration())>n:!n||o.isActive())&&a.push(o):(c=o.getTweensOf(s,n)).length&&a.push.apply(a,c),o=o._next;return a},t.tweenTo=function(r,n){n=n||{};var a=this,s=ki(a,r),o=n,l=o.startAt,c=o.onStart,u=o.onStartParams,d=o.immediateRender,h,m=Ut.to(a,Fi({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:n.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||gt,onStart:function(){if(a.pause(),!h){var g=n.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());m._dur!==g&&Da(m,g,0,1).render(m._time,!0,!0),h=1}c&&c.apply(m,u||[])}},n));return d?m.render(0):m},t.tweenFromTo=function(r,n,a){return this.tweenTo(n,Fi({startAt:{time:ki(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Yh(this,ki(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Yh(this,ki(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(r,n,a){a===void 0&&(a=0);var s=this._first,o=this.labels,l;for(r=St(r);s;)s._start>=a&&(s._start+=r,s._end+=r),s=s._next;if(n)for(l in o)o[l]>=a&&(o[l]+=r);return Rn(this)},t.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,a;n;)a=n._next,this.remove(n),n=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Rn(this)},t.totalDuration=function(r){var n=0,a=this,s=a._last,o=Wi,l,c,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(u=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>o&&a._sort&&s._ts&&!a._lock?(a._lock=1,ar(a,s,c-s._delay,1)._lock=0):o=c,c<0&&s._ts&&(n-=c,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=St(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),o=0),s._end>n&&s._ts&&(n=s._end),s=l;Da(a,a===Et&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Et._ts&&(_p(Et,Po(r,Et)),mp=Li.frame),Li.frame>=Wh){Wh+=Ni.autoSleep||120;var n=Et._first;if((!n||!n._ts)&&Ni.autoSleep&&Li._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||Li.sleep()}}},e}(ys);Fi(gi.prototype,{_lock:0,_hasPause:0,_forcing:0});var zM=function(i,e,t,r,n,a,s){var o=new Mi(this._pt,i,e,0,1,Vp,null,n),l=0,c=0,u,d,h,m,g,v,f,p;for(o.b=t,o.e=r,t+="",r+="",(f=~r.indexOf("random("))&&(r=xs(r)),a&&(p=[t,r],a(p,i,e),t=p[0],r=p[1]),d=t.match(Il)||[];u=Il.exec(r);)m=u[0],g=r.substring(l,u.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),m!==d[c++]&&(v=parseFloat(d[c-1])||0,o._pt={_next:o._pt,p:g||c===1?g:",",s:v,c:m.charAt(1)==="="?va(v,m)-v:parseFloat(m)-v,m:h&&h<4?Math.round:0},l=Il.lastIndex);return o.c=l<r.length?r.substring(l,r.length):"",o.fp=s,(hp.test(r)||f)&&(o.e=0),this._pt=o,o},Yc=function(i,e,t,r,n,a,s,o,l,c){At(r)&&(r=r(n||0,i,a));var u=i[e],d=t!=="get"?t:At(u)?l?i[e.indexOf("set")||!At(i["get"+e.substr(3)])?e:"get"+e.substr(3)](l):i[e]():u,h=At(u)?l?VM:Hp:Zc,m;if(Wt(r)&&(~r.indexOf("random(")&&(r=xs(r)),r.charAt(1)==="="&&(m=va(d,r)+(Qt(d)||0),(m||m===0)&&(r=m))),!c||d!==r||mc)return!isNaN(d*r)&&r!==""?(m=new Mi(this._pt,i,e,+d||0,r-(d||0),typeof u=="boolean"?XM:Gp,0,h),l&&(m.fp=l),s&&m.modifier(s,this,i),this._pt=m):(!u&&!(e in i)&&Vc(e,r),zM.call(this,i,e,d,r,h,o||Ni.stringFilter,l))},BM=function(i,e,t,r,n){if(At(i)&&(i=ns(i,n,e,t,r)),!ur(i)||i.style&&i.nodeType||ti(i)||cp(i))return Wt(i)?ns(i,n,e,t,r):i;var a={},s;for(s in i)a[s]=ns(i[s],n,e,t,r);return a},zp=function(i,e,t,r,n,a){var s,o,l,c;if(Ri[i]&&(s=new Ri[i]).init(n,s.rawVars?e[i]:BM(e[i],r,n,a,t),t,r,a)!==!1&&(t._pt=o=new Mi(t._pt,n,i,0,1,s.render,s,0,s.priority),t!==pa))for(l=t._ptLookup[t._targets.indexOf(n)],c=s._props.length;c--;)l[s._props[c]]=o;return s},zr,mc,Kc=function i(e,t,r){var n=e.vars,a=n.ease,s=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,d=n.yoyoEase,h=n.keyframes,m=n.autoRevert,g=e._dur,v=e._startAt,f=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:f,_=e._overwrite==="auto"&&!Bc,b=e.timeline,C=n.easeReverse||d,T,w,P,U,x,y,K,q,L,V,F,k,X;if(b&&(!h||!a)&&(a="none"),e._ease=Cn(a,gs.ease),e._rEase=C&&(Cn(C)||e._ease),e._from=!b&&!!n.runBackwards,e._from&&(e.ratio=1),!b||h&&!n.stagger){if(q=f[0]?An(f[0]).harness:0,k=q&&n[q.prop],T=Lo(n,Wc),v&&(v._zTime<0&&v.progress(1),t<0&&u&&o&&!m?v.render(-1,!0):v.revert(u&&g?fo:dM),v._lazy=0),s){if(Jr(e._startAt=Ut.set(f,Fi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!v&&vi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ii(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt||!o&&!m)&&e._startAt.revert(fo),o&&g&&t<=0&&r<=0){t&&(e._zTime=t);return}}else if(u&&g&&!v){if(t&&(o=!1),P=Fi({overwrite:!1,data:"isFromStart",lazy:o&&!v&&vi(l),immediateRender:o,stagger:0,parent:p},T),k&&(P[q.prop]=k),Jr(e._startAt=Ut.set(f,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt?e._startAt.revert(fo):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&vi(l)||l&&!g,w=0;w<f.length;w++){if(x=f[w],K=x._gsap||qc(f)[w]._gsap,e._ptLookup[w]=V={},cc[K.id]&&qr.length&&Co(),F=S===f?w:S.indexOf(x),q&&(L=new q).init(x,k||T,e,F,S)!==!1&&(e._pt=U=new Mi(e._pt,x,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(A){V[A]=U}),L.priority&&(y=1)),!q||k)for(P in T)Ri[P]&&(L=zp(P,T,e,F,x,S))?L.priority&&(y=1):V[P]=U=Yc.call(e,x,P,"get",T[P],F,S,0,n.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),_&&e._pt&&(zr=e,Et.killTweensOf(x,V,e.globalTime(t)),X=!e.parent,zr=0),e._pt&&l&&(cc[K.id]=1)}y&&Wp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,h&&t<=0&&b.render(Wi,!0,!0)},kM=function(i,e,t,r,n,a,s,o){var l=(i._pt&&i._ptCache||(i._ptCache={}))[e],c,u,d,h;if(!l)for(l=i._ptCache[e]=[],d=i._ptLookup,h=i._targets.length;h--;){if(c=d[h][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return mc=1,i.vars[e]="+=0",Kc(i,s),mc=0,o?_s(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(r||r===0)&&!n?r:c.s+(r||0)+a*c.c,c.c=t-c.s,u.e&&(u.e=Ct(t)+Qt(u.e)),u.b&&(u.b=c.s+Qt(u.b))},HM=function(i,e){var t=i[0]?An(i[0]).harness:0,r=t&&t.aliases,n,a,s,o;if(!r)return e;n=La({},e);for(a in r)if(a in n)for(o=r[a].split(","),s=o.length;s--;)n[o[s]]=n[a];return n},GM=function(i,e,t,r){var n=e.ease||r||"power1.inOut",a,s;if(ti(e))s=t[i]||(t[i]=[]),e.forEach(function(o,l){return s.push({t:l/(e.length-1)*100,v:o,e:n})});else for(a in e)s=t[a]||(t[a]=[]),a==="ease"||s.push({t:parseFloat(i),v:e[a],e:n})},ns=function(i,e,t,r,n){return At(i)?i.call(e,t,r,n):Wt(i)&&~i.indexOf("random(")?xs(i):i},Bp=Xc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",kp={};xi(Bp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return kp[i]=1});var Ut=function(i){op(e,i);function e(r,n,a,s){var o;typeof n=="number"&&(a.duration=n,n=a,a=null),o=i.call(this,s?n:is(n))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,v=l.defaults,f=l.scrollTrigger,p=n.parent||Et,S=(ti(r)||cp(r)?Tr(r[0]):"length"in n)?[r]:Xi(r),_,b,C,T,w,P,U,x;if(o._targets=S.length?qc(S):_s("GSAP target "+r+" not found. https://gsap.com",!Ni.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||h||Qs(c)||Qs(u)){n=o.vars;var y=n.easeReverse||n.yoyoEase;if(_=o.timeline=new gi({data:"nested",defaults:v||{},targets:p&&p.data==="nested"?p.vars.targets:S}),_.kill(),_.parent=_._dp=_r(o),_._start=0,h||Qs(c)||Qs(u)){if(T=S.length,U=h&&wp(h),ur(h))for(w in h)~Bp.indexOf(w)&&(x||(x={}),x[w]=h[w]);for(b=0;b<T;b++)C=Lo(n,kp),C.stagger=0,y&&(C.easeReverse=y),x&&La(C,x),P=S[b],C.duration=+ns(c,_r(o),b,P,S),C.delay=(+ns(u,_r(o),b,P,S)||0)-o._delay,!h&&T===1&&C.delay&&(o._delay=u=C.delay,o._start+=u,C.delay=0),_.to(P,C,U?U(b,P,S):0),_._ease=at.none;_.duration()?c=u=0:o.timeline=0}else if(g){is(Fi(_.vars.defaults,{ease:"none"})),_._ease=Cn(g.ease||n.ease||"none");var K=0,q,L,V;if(ti(g))g.forEach(function(F){return _.to(S,F,">")}),_.duration();else{C={};for(w in g)w==="ease"||w==="easeEach"||GM(w,g[w],C,g.easeEach);for(w in C)for(q=C[w].sort(function(F,k){return F.t-k.t}),K=0,b=0;b<q.length;b++)L=q[b],V={ease:L.e,duration:(L.t-(b?q[b-1].t:0))/100*c},V[w]=L.v,_.to(S,V,K),K+=V.duration;_.duration()<c&&_.to({},{duration:c-_.duration()})}}c||o.duration(c=_.duration())}else o.timeline=0;return m===!0&&!Bc&&(zr=_r(o),Et.killTweensOf(S),zr=0),ar(p,_r(o),a),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(d||!c&&!g&&o._start===St(p._time)&&vi(d)&&vM(_r(o))&&p.data!=="nested")&&(o._tTime=-gt,o.render(Math.max(0,-u)||0)),f&&Sp(_r(o),f),o}var t=e.prototype;return t.render=function(r,n,a){var s=this._time,o=this._tDur,l=this._dur,c=r<0,u=r>o-gt&&!c?o:r<gt?0:r,d,h,m,g,v,f,p,S;if(!l)MM(this,r,n,a);else if(u!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=u,S=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,n,a);if(d=St(u%g),u===o?(m=this._repeat,d=l):(v=St(u/g),m=~~v,m&&m===v?(d=l,m--):d>l&&(d=l)),f=this._yoyo&&m&1,f&&(d=l-d),v=Pa(this._tTime,g),d===s&&!a&&this._initted&&m===v)return this._tTime=u,this;m!==v&&this.vars.repeatRefresh&&!f&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(St(g*m),!0).invalidate()._lock=0)}if(!this._initted){if(Ep(this,c?r:d,a,n,u))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&m!==v))return this;if(l!==this._dur)return this.render(r,n,a)}if(this._rEase){var _=d<s;if(_!==this._inv){var b=_?s:l-s;this._inv=_,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=b?(_?-1:1)/b:0,this._invScale=_?-this.ratio:1-this.ratio,this._invEase=_?this._rEase:this._ease}this.ratio=p=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=p=this._ease(d/l);if(this._from&&(this.ratio=p=1-p),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&u&&!n&&!v&&(Ii(this,"onStart"),this._tTime!==u))return this;for(h=this._pt;h;)h.r(p,h.d),h=h._next;S&&S.render(r<0?r:S._dur*S._ease(d/this._dur),n,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(c&&uc(this,r,n,a),Ii(this,"onUpdate")),this._repeat&&m!==v&&this.vars.onRepeat&&!n&&this.parent&&Ii(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(c&&!this._onUpdate&&uc(this,r,!0,!0),(r||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Jr(this,1),!n&&!(c&&!s)&&(u||s||f)&&(Ii(this,u===o?"onComplete":"onReverseComplete",!0),this._prom&&!(u<o&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,n,a,s,o){Ms||Li.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Kc(this,l),c=this._ease(l/this._dur),kM(this,r,n,a,s,c,l,o)?this.resetTo(r,n,a,s,1):(Xo(this,0),this.parent||Mp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?Ka(this):this.scrollTrigger&&this.scrollTrigger.kill(!!jt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,zr&&zr.vars.overwrite!==!0)._first||Ka(this),this.parent&&a!==this.timeline.totalDuration()&&Da(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,o=r?Xi(r):s,l=this._ptLookup,c=this._pt,u,d,h,m,g,v,f;if((!n||n==="all")&&gM(s,o))return n==="all"&&(this._pt=0),Ka(this);for(u=this._op=this._op||[],n!=="all"&&(Wt(n)&&(g={},xi(n,function(p){return g[p]=1}),n=g),n=HM(s,n)),f=s.length;f--;)if(~o.indexOf(s[f])){d=l[f],n==="all"?(u[f]=n,m=d,h={}):(h=u[f]=u[f]||{},m=n);for(g in m)v=d&&d[g],v&&((!("kill"in v.d)||v.d.kill(g)===!0)&&Vo(this,v,"_pt"),delete d[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&c&&Ka(this),this},e.to=function(r,n){return new e(r,n,arguments[2])},e.from=function(r,n){return rs(1,arguments)},e.delayedCall=function(r,n,a,s){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(r,n,a){return rs(2,arguments)},e.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(r,n)},e.killTweensOf=function(r,n,a){return Et.killTweensOf(r,n,a)},e}(ys);Fi(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xi("staggerTo,staggerFrom,staggerFromTo",function(i){Ut[i]=function(){var e=new gi,t=dc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Zc=function(i,e,t){return i[e]=t},Hp=function(i,e,t){return i[e](t)},VM=function(i,e,t,r){return i[e](r.fp,t)},WM=function(i,e,t){return i.setAttribute(e,t)},Jc=function(i,e){return At(i[e])?Hp:kc(i[e])&&i.setAttribute?WM:Zc},Gp=function(i,e){return e.set(e.t,e.p,Math.round((e.s+e.c*i)*1e6)/1e6,e)},XM=function(i,e){return e.set(e.t,e.p,!!(e.s+e.c*i),e)},Vp=function(i,e){var t=e._pt,r="";if(!i&&e.b)r=e.b;else if(i===1&&e.e)r=e.e;else{for(;t;)r=t.p+(t.m?t.m(t.s+t.c*i):Math.round((t.s+t.c*i)*1e4)/1e4)+r,t=t._next;r+=e.c}e.set(e.t,e.p,r,e)},$c=function(i,e){for(var t=e._pt;t;)t.r(i,t.d),t=t._next},qM=function(i,e,t,r){for(var n=this._pt,a;n;)a=n._next,n.p===r&&n.modifier(i,e,t),n=a},jM=function(i){for(var e=this._pt,t,r;e;)r=e._next,e.p===i&&!e.op||e.op===i?Vo(this,e,"_pt"):e.dep||(t=1),e=r;return!t},YM=function(i,e,t,r){r.mSet(i,e,r.m.call(r.tween,t,r.mt),r)},Wp=function(i){for(var e=i._pt,t,r,n,a;e;){for(t=e._next,r=n;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:n=e,(e._next=r)?r._prev=e:a=e,e=t}i._pt=n},Mi=function(){function i(t,r,n,a,s,o,l,c,u){this.t=r,this.s=a,this.c=s,this.p=n,this.r=o||Gp,this.d=l||this,this.set=c||Zc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(t,r,n){this.mSet=this.mSet||this.set,this.set=YM,this.m=t,this.mt=n,this.tween=r},i}();xi(Xc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Wc[i]=1});Oi.TweenMax=Oi.TweenLite=Ut;Oi.TimelineLite=Oi.TimelineMax=gi;Et=new gi({sortChildren:!1,defaults:gs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ni.stringFilter=Np;var Ln=[],go={},KM=[],Zh=0,ZM=0,zl=function(i){return(go[i]||KM).map(function(e){return e()})},gc=function(){var i=Date.now(),e=[];i-Zh>2&&(zl("matchMediaInit"),Ln.forEach(function(t){var r=t.queries,n=t.conditions,a,s,o,l;for(s in r)a=tr.matchMedia(r[s]).matches,a&&(o=1),a!==n[s]&&(n[s]=a,l=1);l&&(t.revert(),o&&e.push(t))}),zl("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t,function(r){return t.add(null,r)})}),Zh=i,zl("matchMedia"))},Xp=function(){function i(t,r){this.selector=r&&pc(r),this.data=[],this._r=[],this.isReverted=!1,this.id=ZM++,t&&this.add(t)}var e=i.prototype;return e.add=function(t,r,n){At(t)&&(n=r,r=t,t=At);var a=this,s=function(){var o=yt,l=a.selector,c;return o&&o!==a&&o.data.push(a),n&&(a.selector=pc(n)),yt=a,c=r.apply(a,arguments),At(c)&&a._r.push(c),yt=o,a.selector=l,a.isReverted=!1,c};return a.last=s,t===At?s(a,function(o){return a.add(null,o)}):t?a[t]=s:s},e.ignore=function(t){var r=yt;yt=null,t(this),yt=r},e.getTweens=function(){var t=[];return this.data.forEach(function(r){return r instanceof i?t.push.apply(t,r.getTweens()):r instanceof Ut&&!(r.parent&&r.parent.data==="nested")&&t.push(r)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,r){var n=this;if(t?function(){for(var s=n.getTweens(),o=n.data.length,l;o--;)l=n.data[o],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,u){return u.g-c.g||-1/0}).forEach(function(c){return c.t.revert(t)}),o=n.data.length;o--;)l=n.data[o],l instanceof gi?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ut)&&l.revert&&l.revert(t);n._r.forEach(function(c){return c(t,n)}),n.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),r)for(var a=Ln.length;a--;)Ln[a].id===this.id&&Ln.splice(a,1)},e.revert=function(t){this.kill(t||{})},i}(),JM=function(){function i(t){this.contexts=[],this.scope=t,yt&&yt.data.push(this)}var e=i.prototype;return e.add=function(t,r,n){ur(t)||(t={matches:t});var a=new Xp(0,n||this.scope),s=a.conditions={},o,l,c;yt&&!a.selector&&(a.selector=yt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=t;for(l in t)l==="all"?c=1:(o=tr.matchMedia(t[l]),o&&(Ln.indexOf(a)<0&&Ln.push(a),(s[l]=o.matches)&&(c=1),o.addListener?o.addListener(gc):o.addEventListener("change",gc)));return c&&r(a,function(u){return a.add(null,u)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(r){return r.kill(t,!0)})},i}(),Do={registerPlugin:function(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];e.forEach(function(r){return Dp(r)})},timeline:function(i){return new gi(i)},getTweensOf:function(i,e){return Et.getTweensOf(i,e)},getProperty:function(i,e,t,r){Wt(i)&&(i=Xi(i)[0]);var n=An(i||{}).get,a=t?xp:vp;return t==="native"&&(t=""),i&&(e?a((Ri[e]&&Ri[e].get||n)(i,e,t,r)):function(s,o,l){return a((Ri[s]&&Ri[s].get||n)(i,s,o,l))})},quickSetter:function(i,e,t){if(i=Xi(i),i.length>1){var r=i.map(function(c){return Si.quickSetter(c,e,t)}),n=r.length;return function(c){for(var u=n;u--;)r[u](c)}}i=i[0]||{};var a=Ri[e],s=An(i),o=s.harness&&(s.harness.aliases||{})[e]||e,l=a?function(c){var u=new a;pa._pt=0,u.init(i,t?c+t:c,pa,0,[i]),u.render(1,u),pa._pt&&$c(1,pa)}:s.set(i,o);return a?l:function(c){return l(i,o,t?c+t:c,s,1)}},quickTo:function(i,e,t){var r,n=Si.to(i,Fi((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),t||{})),a=function(s,o,l){return n.resetTo(e,s,o,l)};return a.tween=n,a},isTweening:function(i){return Et.getTweensOf(i,!0).length>0},defaults:function(i){return i&&i.ease&&(i.ease=Cn(i.ease,gs.ease)),Xh(gs,i||{})},config:function(i){return Xh(Ni,i||{})},registerEffect:function(i){var e=i.name,t=i.effect,r=i.plugins,n=i.defaults,a=i.extendTimeline;(r||"").split(",").forEach(function(s){return s&&!Ri[s]&&!Oi[s]&&_s(e+" effect requires "+s+" plugin.")}),Ul[e]=function(s,o,l){return t(Xi(s),Fi(o||{},n),l)},a&&(gi.prototype[e]=function(s,o,l){return this.add(Ul[e](s,ur(o)?o:(l=o)&&{},this),l)})},registerEase:function(i,e){at[i]=Cn(e)},parseEase:function(i,e){return arguments.length?Cn(i,e):at},getById:function(i){return Et.getById(i)},exportRoot:function(i,e){i===void 0&&(i={});var t=new gi(i),r,n;for(t.smoothChildTiming=vi(i.smoothChildTiming),Et.remove(t),t._dp=0,t._time=t._tTime=Et._time,r=Et._first;r;)n=r._next,(e||!(!r._dur&&r instanceof Ut&&r.vars.onComplete===r._targets[0]))&&ar(t,r,r._start-r._delay),r=n;return ar(Et,t,0),t},context:function(i,e){return i?new Xp(i,e):yt},matchMedia:function(i){return new JM(i)},matchMediaRefresh:function(){return Ln.forEach(function(i){var e=i.conditions,t,r;for(r in e)e[r]&&(e[r]=!1,t=1);t&&i.revert()})||gc()},addEventListener:function(i,e){var t=go[i]||(go[i]=[]);~t.indexOf(e)||t.push(e)},removeEventListener:function(i,e){var t=go[i],r=t&&t.indexOf(e);r>=0&&t.splice(r,1)},utils:{wrap:RM,wrapYoyo:CM,distribute:wp,random:Rp,snap:Ap,normalize:AM,getUnit:Qt,clamp:EM,splitColor:Ip,toArray:Xi,selector:pc,mapRange:Lp,pipe:TM,unitize:wM,interpolate:LM,shuffle:Tp},install:pp,effects:Ul,ticker:Li,updateRoot:gi.updateRoot,plugins:Ri,globalTimeline:Et,core:{PropTween:Mi,globals:fp,Tween:Ut,Timeline:gi,Animation:ys,getCache:An,_removeLinkedListItem:Vo,reverting:function(){return jt},context:function(i){return i&&yt&&(yt.data.push(i),i._ctx=yt),yt},suppressOverwrites:function(i){return Bc=i}}};xi("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Do[i]=Ut[i]});Li.add(gi.updateRoot);pa=Do.to({},{duration:0});var $M=function(i,e){for(var t=i._pt;t&&t.p!==e&&t.op!==e&&t.fp!==e;)t=t._next;return t},QM=function(i,e){var t=i._targets,r,n,a;for(r in e)for(n=t.length;n--;)a=i._ptLookup[n][r],a&&(a=a.d)&&(a._pt&&(a=$M(a,r)),a&&a.modifier&&a.modifier(e[r],i,t[n],r))},Bl=function(i,e){return{name:i,headless:1,rawVars:1,init:function(t,r,n){n._onInit=function(a){var s,o;if(Wt(r)&&(s={},xi(r,function(l){return s[l]=1}),r=s),e){s={};for(o in r)s[o]=e(r[o]);r=s}QM(a,r)}}}},Si=Do.registerPlugin({name:"attr",init:function(i,e,t,r,n){var a,s,o;this.tween=t;for(a in e)o=i.getAttribute(a)||"",s=this.add(i,"setAttribute",(o||0)+"",e[a],r,n,0,0,a),s.op=a,s.b=o,this._props.push(a)},render:function(i,e){for(var t=e._pt;t;)jt?t.set(t.t,t.p,t.b,t):t.r(i,t.d),t=t._next}},{name:"endArray",headless:1,init:function(i,e){for(var t=e.length;t--;)this.add(i,t,i[t]||0,e[t],0,0,0,0,0,1)}},Bl("roundProps",fc),Bl("modifiers"),Bl("snap",Ap))||Do;Ut.version=gi.version=Si.version="3.15.0";dp=1;Hc()&&Ia();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jh,Br,xa,Qc,Sn,$h,eu,ey=function(){return typeof window<"u"},wr={},gn=180/Math.PI,Ma=Math.PI/180,ia=Math.atan2,Qh=1e8,tu=/([A-Z])/g,ty=/(left|right|width|margin|padding|x)/i,iy=/[\s,\(]\S/,sr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_c=function(i,e){return e.set(e.t,e.p,Math.round((e.s+e.c*i)*1e4)/1e4+e.u,e)},ry=function(i,e){return e.set(e.t,e.p,i===1?e.e:Math.round((e.s+e.c*i)*1e4)/1e4+e.u,e)},ny=function(i,e){return e.set(e.t,e.p,i?Math.round((e.s+e.c*i)*1e4)/1e4+e.u:e.b,e)},ay=function(i,e){return e.set(e.t,e.p,i===1?e.e:i?Math.round((e.s+e.c*i)*1e4)/1e4+e.u:e.b,e)},sy=function(i,e){var t=e.s+e.c*i;e.set(e.t,e.p,~~(t+(t<0?-.5:.5))+e.u,e)},qp=function(i,e){return e.set(e.t,e.p,i?e.e:e.b,e)},jp=function(i,e){return e.set(e.t,e.p,i!==1?e.b:e.e,e)},oy=function(i,e,t){return i.style[e]=t},ly=function(i,e,t){return i.style.setProperty(e,t)},cy=function(i,e,t){return i._gsap[e]=t},uy=function(i,e,t){return i._gsap.scaleX=i._gsap.scaleY=t},hy=function(i,e,t,r,n){var a=i._gsap;a.scaleX=a.scaleY=t,a.renderTransform(n,a)},dy=function(i,e,t,r,n){var a=i._gsap;a[e]=t,a.renderTransform(n,a)},bt="transform",yi=bt+"Origin",py=function i(e,t){var r=this,n=this.target,a=n.style,s=n._gsap;if(e in wr&&a){if(this.tfm=this.tfm||{},e!=="transform")e=sr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return r.tfm[o]=vr(n,o)}):this.tfm[e]=s.x?s[e]:vr(n,e),e===yi&&(this.tfm.zOrigin=s.zOrigin);else return sr.transform.split(",").forEach(function(o){return i.call(r,o,t)});if(this.props.indexOf(bt)>=0)return;s.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(yi,t,"")),e=bt}(a||t)&&this.props.push(e,t,a[e])},Yp=function(i){i.translate&&(i.removeProperty("translate"),i.removeProperty("scale"),i.removeProperty("rotate"))},fy=function(){var i=this.props,e=this.target,t=e.style,r=e._gsap,n,a;for(n=0;n<i.length;n+=3)i[n+1]?i[n+1]===2?e[i[n]](i[n+2]):e[i[n]]=i[n+2]:i[n+2]?t[i[n]]=i[n+2]:t.removeProperty(i[n].substr(0,2)==="--"?i[n]:i[n].replace(tu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),n=eu(),(!n||!n.isStart)&&!t[bt]&&(Yp(t),r.zOrigin&&t[yi]&&(t[yi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Kp=function(i,e){var t={target:i,props:[],revert:fy,save:py};return i._gsap||Si.core.getCache(i),e&&i.style&&i.nodeType&&e.split(",").forEach(function(r){return t.save(r)}),t},Zp,vc=function(i,e){var t=Br.createElementNS?Br.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),i):Br.createElement(i);return t&&t.style?t:Br.createElement(i)},Ui=function i(e,t,r){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(tu,"-$1").toLowerCase())||n.getPropertyValue(t)||!r&&i(e,Ua(t)||t,1)||""},ed="O,Moz,ms,Ms,Webkit".split(","),Ua=function(i,e,t){var r=e||Sn,n=r.style,a=5;if(i in n&&!t)return i;for(i=i.charAt(0).toUpperCase()+i.substr(1);a--&&!(ed[a]+i in n););return a<0?null:(a===3?"ms":a>=0?ed[a]:"")+i},xc=function(){ey()&&window.document&&(Jh=window,Br=Jh.document,xa=Br.documentElement,Sn=vc("div")||{style:{}},vc("div"),bt=Ua(bt),yi=bt+"Origin",Sn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zp=!!Ua("perspective"),eu=Si.core.reverting,Qc=1)},td=function(i){var e=i.ownerSVGElement,t=vc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=i.cloneNode(!0),n;r.style.display="block",t.appendChild(r),xa.appendChild(t);try{n=r.getBBox()}catch{}return t.removeChild(r),xa.removeChild(t),n},id=function(i,e){for(var t=e.length;t--;)if(i.hasAttribute(e[t]))return i.getAttribute(e[t])},Jp=function(i){var e,t;try{e=i.getBBox()}catch{e=td(i),t=1}return e&&(e.width||e.height)||t||(e=td(i)),e&&!e.width&&!e.x&&!e.y?{x:+id(i,["x","cx","x1"])||0,y:+id(i,["y","cy","y1"])||0,width:0,height:0}:e},$p=function(i){return!!(i.getCTM&&(!i.parentNode||i.ownerSVGElement)&&Jp(i))},$r=function(i,e){if(e){var t=i.style,r;e in wr&&e!==yi&&(e=bt),t.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),t.removeProperty(r==="--"?e:e.replace(tu,"-$1").toLowerCase())):t.removeAttribute(e)}},kr=function(i,e,t,r,n,a){var s=new Mi(i._pt,e,t,0,1,a?jp:qp);return i._pt=s,s.b=r,s.e=n,i._props.push(t),s},rd={deg:1,rad:1,turn:1},my={grid:1,flex:1},Qr=function i(e,t,r,n){var a=parseFloat(r)||0,s=(r+"").trim().substr((a+"").length)||"px",o=Sn.style,l=ty.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=n==="px",m=n==="%",g,v,f,p;if(n===s||!a||rd[n]||rd[s])return a;if(s!=="px"&&!h&&(a=i(e,t,r,"px")),p=e.getCTM&&$p(e),(m||s==="%")&&(wr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Ct(m?a/g*d:a/100*g);if(o[l?"width":"height"]=d+(h?s:n),v=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Br||!v.appendChild)&&(v=Br.body),f=v._gsap,f&&m&&f.width&&l&&f.time===Li.time&&!f.uncache)return Ct(a/f.width*d);if(m&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=d+n,g=e[u],S?e.style[t]=S:$r(e,t)}else(m||s==="%")&&!my[Ui(v,"display")]&&(o.position=Ui(e,"position")),v===e&&(o.position="static"),v.appendChild(Sn),g=Sn[u],v.removeChild(Sn),o.position="absolute";return l&&m&&(f=An(v),f.time=Li.time,f.width=v[u]),Ct(h?g*a/d:g&&a?d/g*a:0)},vr=function(i,e,t,r){var n;return Qc||xc(),e in sr&&e!=="transform"&&(e=sr[e],~e.indexOf(",")&&(e=e.split(",")[0])),wr[e]&&e!=="transform"?(n=Es(i,r),n=e!=="transformOrigin"?n[e]:n.svg?n.origin:Uo(Ui(i,yi))+" "+n.zOrigin+"px"):(n=i.style[e],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=Io[e]&&Io[e](i,e,t)||Ui(i,e)||gp(i,e)||(e==="opacity"?1:0))),t&&!~(n+"").trim().indexOf(" ")?Qr(i,e,n,t)+t:n},gy=function(i,e,t,r){if(!t||t==="none"){var n=Ua(e,i,1),a=n&&Ui(i,n,1);a&&a!==t?(e=n,t=a):e==="borderColor"&&(t=Ui(i,"borderTopColor"))}var s=new Mi(this._pt,i.style,e,0,1,Vp),o=0,l=0,c,u,d,h,m,g,v,f,p,S,_,b;if(s.b=t,s.e=r,t+="",r+="",r.substring(0,6)==="var(--"&&(r=Ui(i,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=i.style[e],i.style[e]=r,r=Ui(i,e)||r,g?i.style[e]=g:$r(i,e)),c=[t,r],Np(c),t=c[0],r=c[1],d=t.match(da)||[],b=r.match(da)||[],b.length){for(;u=da.exec(r);)v=u[0],p=r.substring(o,u.index),m?m=(m+1)%5:(p.substr(-5)==="rgba("||p.substr(-5)==="hsla(")&&(m=1),v!==(g=d[l++]||"")&&(h=parseFloat(g)||0,_=g.substr((h+"").length),v.charAt(1)==="="&&(v=va(h,v)+_),f=parseFloat(v),S=v.substr((f+"").length),o=da.lastIndex-S.length,S||(S=S||Ni.units[e]||_,o===r.length&&(r+=S,s.e+=S)),_!==S&&(h=Qr(i,e,g,S)||0),s._pt={_next:s._pt,p:p||l===1?p:",",s:h,c:f-h,m:m&&m<4||e==="zIndex"?Math.round:0});s.c=o<r.length?r.substring(o,r.length):""}else s.r=e==="display"&&r==="none"?jp:qp;return hp.test(r)&&(s.e=0),this._pt=s,s},nd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_y=function(i){var e=i.split(" "),t=e[0],r=e[1]||"50%";return(t==="top"||t==="bottom"||r==="left"||r==="right")&&(i=t,t=r,r=i),e[0]=nd[t]||t,e[1]=nd[r]||r,e.join(" ")},vy=function(i,e){if(e.tween&&e.tween._time===e.tween._dur){var t=e.t,r=t.style,n=e.u,a=t._gsap,s,o,l;if(n==="all"||n===!0)r.cssText="",o=1;else for(n=n.split(","),l=n.length;--l>-1;)s=n[l],wr[s]&&(o=1,s=s==="transformOrigin"?yi:bt),$r(t,s);o&&($r(t,bt),a&&(a.svg&&t.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Es(t,1),a.uncache=1,Yp(r)))}},Io={clearProps:function(i,e,t,r,n){if(n.data!=="isFromStart"){var a=i._pt=new Mi(i._pt,e,t,0,0,vy);return a.u=r,a.pr=-10,a.tween=n,i._props.push(t),1}}},Ss=[1,0,0,1,0,0],Qp={},ef=function(i){return i==="matrix(1, 0, 0, 1, 0, 0)"||i==="none"||!i},ad=function(i){var e=Ui(i,bt);return ef(e)?Ss:e.substr(7).match(up).map(Ct)},iu=function(i,e){var t=i._gsap||An(i),r=i.style,n=ad(i),a,s,o,l;return t.svg&&i.getAttribute("transform")?(o=i.transform.baseVal.consolidate().matrix,n=[o.a,o.b,o.c,o.d,o.e,o.f],n.join(",")==="1,0,0,1,0,0"?Ss:n):(n===Ss&&!i.offsetParent&&i!==xa&&!t.svg&&(o=r.display,r.display="block",a=i.parentNode,(!a||!i.offsetParent&&!i.getBoundingClientRect().width)&&(l=1,s=i.nextElementSibling,xa.appendChild(i)),n=ad(i),o?r.display=o:$r(i,"display"),l&&(s?a.insertBefore(i,s):a?a.appendChild(i):xa.removeChild(i))),e&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},Mc=function(i,e,t,r,n,a){var s=i._gsap,o=n||iu(i,!0),l=s.xOrigin||0,c=s.yOrigin||0,u=s.xOffset||0,d=s.yOffset||0,h=o[0],m=o[1],g=o[2],v=o[3],f=o[4],p=o[5],S=e.split(" "),_=parseFloat(S[0])||0,b=parseFloat(S[1])||0,C,T,w,P;t?o!==Ss&&(T=h*v-m*g)&&(w=_*(v/T)+b*(-g/T)+(g*p-v*f)/T,P=_*(-m/T)+b*(h/T)-(h*p-m*f)/T,_=w,b=P):(C=Jp(i),_=C.x+(~S[0].indexOf("%")?_/100*C.width:_),b=C.y+(~(S[1]||S[0]).indexOf("%")?b/100*C.height:b)),r||r!==!1&&s.smooth?(f=_-l,p=b-c,s.xOffset=u+(f*h+p*g)-f,s.yOffset=d+(f*m+p*v)-p):s.xOffset=s.yOffset=0,s.xOrigin=_,s.yOrigin=b,s.smooth=!!r,s.origin=e,s.originIsAbsolute=!!t,i.style[yi]="0px 0px",a&&(kr(a,s,"xOrigin",l,_),kr(a,s,"yOrigin",c,b),kr(a,s,"xOffset",u,s.xOffset),kr(a,s,"yOffset",d,s.yOffset)),i.setAttribute("data-svg-origin",_+" "+b)},Es=function(i,e){var t=i._gsap||new Fp(i);if("x"in t&&!e&&!t.uncache)return t;var r=i.style,n=t.scaleX<0,a="px",s="deg",o=getComputedStyle(i),l=Ui(i,yi)||"0",c,u,d,h,m,g,v,f,p,S,_,b,C,T,w,P,U,x,y,K,q,L,V,F,k,X,A,$,ie,pe,fe,W;return c=u=d=g=v=f=p=S=_=0,h=m=1,t.svg=!!(i.getCTM&&$p(i)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(r[bt]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[bt]!=="none"?o[bt]:"")),r.scale=r.rotate=r.translate="none"),T=iu(i,t.svg),t.svg&&(t.uncache?(k=i.getBBox(),l=t.xOrigin-k.x+"px "+(t.yOrigin-k.y)+"px",F=""):F=!e&&i.getAttribute("data-svg-origin"),Mc(i,F||l,!!F||t.originIsAbsolute,t.smooth!==!1,T)),b=t.xOrigin||0,C=t.yOrigin||0,T!==Ss&&(x=T[0],y=T[1],K=T[2],q=T[3],c=L=T[4],u=V=T[5],T.length===6?(h=Math.sqrt(x*x+y*y),m=Math.sqrt(q*q+K*K),g=x||y?ia(y,x)*gn:0,p=K||q?ia(K,q)*gn+g:0,p&&(m*=Math.abs(Math.cos(p*Ma))),t.svg&&(c-=b-(b*x+C*K),u-=C-(b*y+C*q))):(W=T[6],pe=T[7],A=T[8],$=T[9],ie=T[10],fe=T[11],c=T[12],u=T[13],d=T[14],w=ia(W,ie),v=w*gn,w&&(P=Math.cos(-w),U=Math.sin(-w),F=L*P+A*U,k=V*P+$*U,X=W*P+ie*U,A=L*-U+A*P,$=V*-U+$*P,ie=W*-U+ie*P,fe=pe*-U+fe*P,L=F,V=k,W=X),w=ia(-K,ie),f=w*gn,w&&(P=Math.cos(-w),U=Math.sin(-w),F=x*P-A*U,k=y*P-$*U,X=K*P-ie*U,fe=q*U+fe*P,x=F,y=k,K=X),w=ia(y,x),g=w*gn,w&&(P=Math.cos(w),U=Math.sin(w),F=x*P+y*U,k=L*P+V*U,y=y*P-x*U,V=V*P-L*U,x=F,L=k),v&&Math.abs(v)+Math.abs(g)>359.9&&(v=g=0,f=180-f),h=Ct(Math.sqrt(x*x+y*y+K*K)),m=Ct(Math.sqrt(V*V+W*W)),w=ia(L,V),p=Math.abs(w)>2e-4?w*gn:0,_=fe?1/(fe<0?-fe:fe):0),t.svg&&(F=i.getAttribute("transform"),t.forceCSS=i.setAttribute("transform","")||!ef(Ui(i,bt)),F&&i.setAttribute("transform",F))),Math.abs(p)>90&&Math.abs(p)<270&&(n?(h*=-1,p+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,p+=p<=0?180:-180)),e=e||t.uncache,t.x=c-((t.xPercent=c&&(!e&&t.xPercent||(Math.round(i.offsetWidth/2)===Math.round(-c)?-50:0)))?i.offsetWidth*t.xPercent/100:0)+a,t.y=u-((t.yPercent=u&&(!e&&t.yPercent||(Math.round(i.offsetHeight/2)===Math.round(-u)?-50:0)))?i.offsetHeight*t.yPercent/100:0)+a,t.z=d+a,t.scaleX=Ct(h),t.scaleY=Ct(m),t.rotation=Ct(g)+s,t.rotationX=Ct(v)+s,t.rotationY=Ct(f)+s,t.skewX=p+s,t.skewY=S+s,t.transformPerspective=_+a,(t.zOrigin=parseFloat(l.split(" ")[2])||!e&&t.zOrigin||0)&&(r[yi]=Uo(l)),t.xOffset=t.yOffset=0,t.force3D=Ni.force3D,t.renderTransform=t.svg?My:Zp?tf:xy,t.uncache=0,t},Uo=function(i){return(i=i.split(" "))[0]+" "+i[1]},kl=function(i,e,t){var r=Qt(e);return Ct(parseFloat(e)+parseFloat(Qr(i,"x",t+"px",r)))+r},xy=function(i,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tf(i,e)},dn="0deg",qa="0px",pn=") ",tf=function(i,e){var t=e||this,r=t.xPercent,n=t.yPercent,a=t.x,s=t.y,o=t.z,l=t.rotation,c=t.rotationY,u=t.rotationX,d=t.skewX,h=t.skewY,m=t.scaleX,g=t.scaleY,v=t.transformPerspective,f=t.force3D,p=t.target,S=t.zOrigin,_="",b=f==="auto"&&i&&i!==1||f===!0;if(S&&(u!==dn||c!==dn)){var C=parseFloat(c)*Ma,T=Math.sin(C),w=Math.cos(C),P;C=parseFloat(u)*Ma,P=Math.cos(C),a=kl(p,a,T*P*-S),s=kl(p,s,-Math.sin(C)*-S),o=kl(p,o,w*P*-S+S)}v!==qa&&(_+="perspective("+v+pn),(r||n)&&(_+="translate("+r+"%, "+n+"%) "),(b||a!==qa||s!==qa||o!==qa)&&(_+=o!==qa||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+pn),l!==dn&&(_+="rotate("+l+pn),c!==dn&&(_+="rotateY("+c+pn),u!==dn&&(_+="rotateX("+u+pn),(d!==dn||h!==dn)&&(_+="skew("+d+", "+h+pn),(m!==1||g!==1)&&(_+="scale("+m+", "+g+pn),p.style[bt]=_||"translate(0, 0)"},My=function(i,e){var t=e||this,r=t.xPercent,n=t.yPercent,a=t.x,s=t.y,o=t.rotation,l=t.skewX,c=t.skewY,u=t.scaleX,d=t.scaleY,h=t.target,m=t.xOrigin,g=t.yOrigin,v=t.xOffset,f=t.yOffset,p=t.forceCSS,S=parseFloat(a),_=parseFloat(s),b,C,T,w,P;o=parseFloat(o),l=parseFloat(l),c=parseFloat(c),c&&(c=parseFloat(c),l+=c,o+=c),o||l?(o*=Ma,l*=Ma,b=Math.cos(o)*u,C=Math.sin(o)*u,T=Math.sin(o-l)*-d,w=Math.cos(o-l)*d,l&&(c*=Ma,P=Math.tan(l-c),P=Math.sqrt(1+P*P),T*=P,w*=P,c&&(P=Math.tan(c),P=Math.sqrt(1+P*P),b*=P,C*=P)),b=Ct(b),C=Ct(C),T=Ct(T),w=Ct(w)):(b=u,w=d,C=T=0),(S&&!~(a+"").indexOf("px")||_&&!~(s+"").indexOf("px"))&&(S=Qr(h,"x",a,"px"),_=Qr(h,"y",s,"px")),(m||g||v||f)&&(S=Ct(S+m-(m*b+g*T)+v),_=Ct(_+g-(m*C+g*w)+f)),(r||n)&&(P=h.getBBox(),S=Ct(S+r/100*P.width),_=Ct(_+n/100*P.height)),P="matrix("+b+","+C+","+T+","+w+","+S+","+_+")",h.setAttribute("transform",P),p&&(h.style[bt]=P)},yy=function(i,e,t,r,n){var a=360,s=Wt(n),o=parseFloat(n)*(s&&~n.indexOf("rad")?gn:1),l=o-r,c=r+l+"deg",u,d;return s&&(u=n.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Qh)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Qh)%a-~~(l/a)*a)),i._pt=d=new Mi(i._pt,e,t,r,l,ry),d.e=c,d.u="deg",i._props.push(t),d},sd=function(i,e){for(var t in e)i[t]=e[t];return i},Sy=function(i,e,t){var r=sd({},t._gsap),n="perspective,force3D,transformOrigin,svgOrigin",a=t.style,s,o,l,c,u,d,h,m;r.svg?(l=t.getAttribute("transform"),t.setAttribute("transform",""),a[bt]=e,s=Es(t,1),$r(t,bt),t.setAttribute("transform",l)):(l=getComputedStyle(t)[bt],a[bt]=e,s=Es(t,1),a[bt]=l);for(o in wr)l=r[o],c=s[o],l!==c&&n.indexOf(o)<0&&(h=Qt(l),m=Qt(c),u=h!==m?Qr(t,o,l,m):parseFloat(l),d=parseFloat(c),i._pt=new Mi(i._pt,s,o,u,d-u,_c),i._pt.u=m||0,i._props.push(o));sd(s,r)};xi("padding,margin,Width,Radius",function(i,e){var t="Top",r="Right",n="Bottom",a="Left",s=(e<3?[t,r,n,a]:[t+a,t+r,n+r,n+a]).map(function(o){return e<2?i+o:"border"+o+i});Io[e>1?"border"+i:i]=function(o,l,c,u,d){var h,m;if(arguments.length<4)return h=s.map(function(g){return vr(o,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},s.forEach(function(g,v){return m[g]=h[v]=h[v]||h[(v-1)/2|0]}),o.init(l,m,d)}});var rf={name:"css",register:xc,targetTest:function(i){return i.style&&i.nodeType},init:function(i,e,t,r,n){var a=this._props,s=i.style,o=t.vars.startAt,l,c,u,d,h,m,g,v,f,p,S,_,b,C,T,w,P;Qc||xc(),this.styles=this.styles||Kp(i),w=this.styles.props,this.tween=t;for(g in e)if(g!=="autoRound"&&(c=e[g],!(Ri[g]&&zp(g,e,t,r,i,n)))){if(h=typeof c,m=Io[g],h==="function"&&(c=c.call(t,r,i,n),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=xs(c)),m)m(this,i,g,c,t)&&(T=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(i).getPropertyValue(g)+"").trim(),c+="",jr.lastIndex=0,jr.test(l)||(v=Qt(l),f=Qt(c),f?v!==f&&(l=Qr(i,g,l,f)+f):v&&(c+=v)),this.add(s,"setProperty",l,c,r,n,0,0,g),a.push(g),w.push(g,0,s[g]);else if(h!=="undefined"){if(o&&g in o?(l=typeof o[g]=="function"?o[g].call(t,r,i,n):o[g],Wt(l)&&~l.indexOf("random(")&&(l=xs(l)),Qt(l+"")||l==="auto"||(l+=Ni.units[g]||Qt(vr(i,g))||""),(l+"").charAt(1)==="="&&(l=vr(i,g))):l=vr(i,g),d=parseFloat(l),p=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),p&&(c=c.substr(2)),u=parseFloat(c),g in sr&&(g==="autoAlpha"&&(d===1&&vr(i,"visibility")==="hidden"&&u&&(d=0),w.push("visibility",0,s.visibility),kr(this,s,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=sr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in wr,S){if(this.styles.save(g),P=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=Ui(i,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var U=i.style.perspective;i.style.perspective=c,c=Ui(i,"perspective"),U?i.style.perspective=U:$r(i,"perspective")}u=parseFloat(c)}if(_||(b=i._gsap,b.renderTransform&&!e.parseTransform||Es(i,e.parseTransform),C=e.smoothOrigin!==!1&&b.smooth,_=this._pt=new Mi(this._pt,s,bt,0,1,b.renderTransform,b,0,-1),_.dep=1),g==="scale")this._pt=new Mi(this._pt,b,"scaleY",b.scaleY,(p?va(b.scaleY,p+u):u)-b.scaleY||0,_c),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){w.push(yi,0,s[yi]),c=_y(c),b.svg?Mc(i,c,0,C,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==b.zOrigin&&kr(this,b,"zOrigin",b.zOrigin,f),kr(this,s,g,Uo(l),Uo(c)));continue}else if(g==="svgOrigin"){Mc(i,c,1,C,0,this);continue}else if(g in Qp){yy(this,b,g,d,p?va(d,p+c):c);continue}else if(g==="smoothOrigin"){kr(this,b,"smooth",b.smooth,c);continue}else if(g==="force3D"){b[g]=c;continue}else if(g==="transform"){Sy(this,c,i);continue}}else g in s||(g=Ua(g)||g);if(S||(u||u===0)&&(d||d===0)&&!iy.test(c)&&g in s)v=(l+"").substr((d+"").length),u||(u=0),f=Qt(c)||(g in Ni.units?Ni.units[g]:v),v!==f&&(d=Qr(i,g,l,f)),this._pt=new Mi(this._pt,S?b:s,g,d,(p?va(d,p+u):u)-d,!S&&(f==="px"||g==="zIndex")&&e.autoRound!==!1?sy:_c),this._pt.u=f||0,S&&P!==c?(this._pt.b=l,this._pt.e=P,this._pt.r=ay):v!==f&&f!=="%"&&(this._pt.b=l,this._pt.r=ny);else if(g in s)gy.call(this,i,g,l,p?p+c:c);else if(g in i)this.add(i,g,l||i[g],p?p+c:c,r,n);else if(g!=="parseTransform"){Vc(g,c);continue}S||(g in s?w.push(g,0,s[g]):typeof i[g]=="function"?w.push(g,2,i[g]()):w.push(g,1,l||i[g])),a.push(g)}}T&&Wp(this)},render:function(i,e){if(e.tween._time||!eu())for(var t=e._pt;t;)t.r(i,t.d),t=t._next;else e.styles.revert()},get:vr,aliases:sr,getSetter:function(i,e,t){var r=sr[e];return r&&r.indexOf(",")<0&&(e=r),e in wr&&e!==yi&&(i._gsap.x||vr(i,"x"))?t&&$h===t?e==="scale"?uy:cy:($h=t||{})&&(e==="scale"?hy:dy):i.style&&!kc(i.style[e])?oy:~e.indexOf("-")?ly:Jc(i,e)},core:{_removeProperty:$r,_getMatrix:iu}};Si.utils.checkPrefix=Ua;Si.core.getStyleSaver=Kp;(function(i,e,t,r){var n=xi(i+","+e+","+t,function(a){wr[a]=1});xi(e,function(a){Ni.units[a]="deg",Qp[a]=1}),sr[n[13]]=i+","+e,xi(r,function(a){var s=a.split(":");sr[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Ni.units[i]="px"});Si.registerPlugin(rf);var fa=Si.registerPlugin(rf)||Si;fa.core.Tween;function Ey(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function by(i,e,t){return e&&Ey(i.prototype,e),i}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xt,_o,Pi,Hr,Gr,ya,nf,_n,Sa,af,Er,Ji,sf,of=function(){return Xt||typeof window<"u"&&(Xt=window.gsap)&&Xt.registerPlugin&&Xt},lf=1,ma=[],tt=[],lr=[],as=Date.now,yc=function(i,e){return e},Ty=function(){var i=Sa.core,e=i.bridge||{},t=i._scrollers,r=i._proxies;t.push.apply(t,tt),r.push.apply(r,lr),tt=t,lr=r,yc=function(n,a){return e[n](a)}},Yr=function(i,e){return~lr.indexOf(i)&&lr[lr.indexOf(i)+1][e]},ss=function(i){return!!~af.indexOf(i)},ri=function(i,e,t,r,n){return i.addEventListener(e,t,{passive:r!==!1,capture:!!n})},ii=function(i,e,t,r){return i.removeEventListener(e,t,!!r)},eo="scrollLeft",to="scrollTop",Sc=function(){return Er&&Er.isPressed||tt.cache++},No=function(i,e){var t=function r(n){if(n||n===0){lf&&(Pi.history.scrollRestoration="manual");var a=Er&&Er.isPressed;n=r.v=Math.round(n)||(Er&&Er.iOS?1:0),i(n),r.cacheID=tt.cache,a&&yc("ss",n)}else(e||tt.cache!==r.cacheID||yc("ref"))&&(r.cacheID=tt.cache,r.v=i());return r.v+r.offset};return t.offset=0,i&&t},ui={s:eo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:No(function(i){return arguments.length?Pi.scrollTo(i,Ot.sc()):Pi.pageXOffset||Hr[eo]||Gr[eo]||ya[eo]||0})},Ot={s:to,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ui,sc:No(function(i){return arguments.length?Pi.scrollTo(ui.sc(),i):Pi.pageYOffset||Hr[to]||Gr[to]||ya[to]||0})},fi=function(i,e){return(e&&e._ctx&&e._ctx.selector||Xt.utils.toArray)(i)[0]||(typeof i=="string"&&Xt.config().nullTargetWarn!==!1?console.warn("Element not found:",i):null)},wy=function(i,e){for(var t=e.length;t--;)if(e[t]===i||e[t].contains(i))return!0;return!1},en=function(i,e){var t=e.s,r=e.sc;ss(i)&&(i=Hr.scrollingElement||Gr);var n=tt.indexOf(i),a=r===Ot.sc?1:2;!~n&&(n=tt.push(i)-1),tt[n+a]||ri(i,"scroll",Sc);var s=tt[n+a],o=s||(tt[n+a]=No(Yr(i,t),!0)||(ss(i)?r:No(function(l){return arguments.length?i[t]=l:i[t]})));return o.target=i,s||(o.smooth=Xt.getProperty(i,"scrollBehavior")==="smooth"),o},Ec=function(i,e,t){var r=i,n=i,a=as(),s=a,o=e||50,l=Math.max(500,o*3),c=function(h,m){var g=as();m||g-a>o?(n=r,r=h,s=a,a=g):t?r+=h:r=n+(h-n)/(g-s)*(a-s)},u=function(){n=r=t?0:r,s=a=0},d=function(h){var m=s,g=n,v=as();return(h||h===0)&&h!==r&&c(h),a===s||v-s>l?0:(r+(t?g:-g))/((t?v:a)-m)*1e3};return{update:c,reset:u,getVelocity:d}},ja=function(i,e){return e&&!i._gsapAllow&&i.cancelable!==!1&&i.preventDefault(),i.changedTouches?i.changedTouches[0]:i},od=function(i){var e=Math.max.apply(Math,i),t=Math.min.apply(Math,i);return Math.abs(e)>=Math.abs(t)?e:t},cf=function(){Sa=Xt.core.globals().ScrollTrigger,Sa&&Sa.core&&Ty()},uf=function(i){return Xt=i||of(),!_o&&Xt&&typeof document<"u"&&document.body&&(Pi=window,Hr=document,Gr=Hr.documentElement,ya=Hr.body,af=[Pi,Hr,Gr,ya],Xt.utils.clamp,sf=Xt.core.context||function(){},_n="onpointerenter"in ya?"pointer":"mouse",nf=Lt.isTouch=Pi.matchMedia&&Pi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Pi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ji=Lt.eventTypes=("ontouchstart"in Gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return lf=0},500),_o=1),Sa||cf(),_o};ui.op=Ot;tt.cache=0;var Lt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(t){_o||uf(Xt)||console.warn("Please gsap.registerPlugin(Observer)"),Sa||cf();var r=t.tolerance,n=t.dragMinimum,a=t.type,s=t.target,o=t.lineHeight,l=t.debounce,c=t.preventDefault,u=t.onStop,d=t.onStopDelay,h=t.ignore,m=t.wheelSpeed,g=t.event,v=t.onDragStart,f=t.onDragEnd,p=t.onDrag,S=t.onPress,_=t.onRelease,b=t.onRight,C=t.onLeft,T=t.onUp,w=t.onDown,P=t.onChangeX,U=t.onChangeY,x=t.onChange,y=t.onToggleX,K=t.onToggleY,q=t.onHover,L=t.onHoverEnd,V=t.onMove,F=t.ignoreCheck,k=t.isNormalizer,X=t.onGestureStart,A=t.onGestureEnd,$=t.onWheel,ie=t.onEnable,pe=t.onDisable,fe=t.onClick,W=t.scrollSpeed,ee=t.capture,se=t.allowClicks,we=t.lockAxis,ge=t.onLockAxis;this.target=s=fi(s)||Gr,this.vars=t,h&&(h=Xt.utils.toArray(h)),r=r||1e-9,n=n||0,m=m||1,W=W||1,a=a||"wheel,touch,pointer",l=l!==!1,o||(o=parseFloat(Pi.getComputedStyle(ya).lineHeight)||22);var _e,ke,Ae,I,$e,ve,De,N=this,Oe=0,Ue=0,Be=t.passive||!c&&t.passive!==!1,He=en(s,ui),R=en(s,Ot),M=He(),Y=R(),Z=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ji[0]==="pointerdown",te=ss(s),J=s.ownerDocument||Hr,Ie=[0,0,0],Re=[0,0,0],ne=0,he=function(){return ne=as()},Te=function(Q,Fe){return(N.event=Q)&&h&&wy(Q.target,h)||Fe&&Z&&Q.pointerType!=="touch"||F&&F(Q,Fe)},oe=function(){N._vx.reset(),N._vy.reset(),ke.pause(),u&&u(N)},ot=function(){var Q=N.deltaX=od(Ie),Fe=N.deltaY=od(Re),st=Math.abs(Q)>=r,re=Math.abs(Fe)>=r;x&&(st||re)&&x(N,Q,Fe,Ie,Re),st&&(b&&N.deltaX>0&&b(N),C&&N.deltaX<0&&C(N),P&&P(N),y&&N.deltaX<0!=Oe<0&&y(N),Oe=N.deltaX,Ie[0]=Ie[1]=Ie[2]=0),re&&(w&&N.deltaY>0&&w(N),T&&N.deltaY<0&&T(N),U&&U(N),K&&N.deltaY<0!=Ue<0&&K(N),Ue=N.deltaY,Re[0]=Re[1]=Re[2]=0),(I||Ae)&&(V&&V(N),Ae&&(v&&Ae===1&&v(N),p&&p(N),Ae=0),I=!1),ve&&!(ve=!1)&&ge&&ge(N),$e&&($(N),$e=!1),_e=0},Ge=function(Q,Fe,st){Ie[st]+=Q,Re[st]+=Fe,N._vx.update(Q),N._vy.update(Fe),l?_e||(_e=requestAnimationFrame(ot)):ot()},Ce=function(Q,Fe){we&&!De&&(N.axis=De=Math.abs(Q)>Math.abs(Fe)?"x":"y",ve=!0),De!=="y"&&(Ie[2]+=Q,N._vx.update(Q,!0)),De!=="x"&&(Re[2]+=Fe,N._vy.update(Fe,!0)),l?_e||(_e=requestAnimationFrame(ot)):ot()},xe=function(Q){if(!Te(Q,1)){Q=ja(Q,c);var Fe=Q.clientX,st=Q.clientY,re=Fe-N.x,Pe=st-N.y,be=N.isDragging;N.x=Fe,N.y=st,(be||(re||Pe)&&(Math.abs(N.startX-Fe)>=n||Math.abs(N.startY-st)>=n))&&(Ae||(Ae=be?2:1),be||(N.isDragging=!0),Ce(re,Pe))}},Ee=N.onPress=function(Q){Te(Q,1)||Q&&Q.button||(N.axis=De=null,ke.pause(),N.isPressed=!0,Q=ja(Q),Oe=Ue=0,N.startX=N.x=Q.clientX,N.startY=N.y=Q.clientY,N._vx.reset(),N._vy.reset(),ri(k?s:J,Ji[1],xe,Be,!0),N.deltaX=N.deltaY=0,S&&S(N))},me=N.onRelease=function(Q){if(!Te(Q,1)){ii(k?s:J,Ji[1],xe,!0);var Fe=!isNaN(N.y-N.startY),st=N.isDragging,re=st&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),Pe=ja(Q);!re&&Fe&&(N._vx.reset(),N._vy.reset(),c&&se&&Xt.delayedCall(.08,function(){if(as()-ne>300&&!Q.defaultPrevented){if(Q.target.click)Q.target.click();else if(J.createEvent){var be=J.createEvent("MouseEvents");be.initMouseEvent("click",!0,!0,Pi,1,Pe.screenX,Pe.screenY,Pe.clientX,Pe.clientY,!1,!1,!1,!1,0,null),Q.target.dispatchEvent(be)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,u&&st&&!k&&ke.restart(!0),Ae&&ot(),f&&st&&f(N),_&&_(N,re)}},Ne=function(Q){return Q.touches&&Q.touches.length>1&&(N.isGesturing=!0)&&X(Q,N.isDragging)},it=function(){return(N.isGesturing=!1)||A(N)},D=function(Q){if(!Te(Q)){var Fe=He(),st=R();Ge((Fe-M)*W,(st-Y)*W,1),M=Fe,Y=st,u&&ke.restart(!0)}},le=function(Q){if(!Te(Q)){Q=ja(Q,c),$&&($e=!0);var Fe=(Q.deltaMode===1?o:Q.deltaMode===2?Pi.innerHeight:1)*m;Ge(Q.deltaX*Fe,Q.deltaY*Fe,0),u&&!k&&ke.restart(!0)}},G=function(Q){if(!Te(Q)){var Fe=Q.clientX,st=Q.clientY,re=Fe-N.x,Pe=st-N.y;N.x=Fe,N.y=st,I=!0,u&&ke.restart(!0),(re||Pe)&&Ce(re,Pe)}},ce=function(Q){N.event=Q,q(N)},ae=function(Q){N.event=Q,L(N)},nt=function(Q){return Te(Q)||ja(Q,c)&&fe(N)};ke=N._dc=Xt.delayedCall(d||.25,oe).pause(),N.deltaX=N.deltaY=0,N._vx=Ec(0,50,!0),N._vy=Ec(0,50,!0),N.scrollX=He,N.scrollY=R,N.isDragging=N.isGesturing=N.isPressed=!1,sf(this),N.enable=function(Q){return N.isEnabled||(ri(te?J:s,"scroll",Sc),a.indexOf("scroll")>=0&&ri(te?J:s,"scroll",D,Be,ee),a.indexOf("wheel")>=0&&ri(s,"wheel",le,Be,ee),(a.indexOf("touch")>=0&&nf||a.indexOf("pointer")>=0)&&(ri(s,Ji[0],Ee,Be,ee),ri(J,Ji[2],me),ri(J,Ji[3],me),se&&ri(s,"click",he,!0,!0),fe&&ri(s,"click",nt),X&&ri(J,"gesturestart",Ne),A&&ri(J,"gestureend",it),q&&ri(s,_n+"enter",ce),L&&ri(s,_n+"leave",ae),V&&ri(s,_n+"move",G)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=I=Ae=!1,N._vx.reset(),N._vy.reset(),M=He(),Y=R(),Q&&Q.type&&Ee(Q),ie&&ie(N)),N},N.disable=function(){N.isEnabled&&(ma.filter(function(Q){return Q!==N&&ss(Q.target)}).length||ii(te?J:s,"scroll",Sc),N.isPressed&&(N._vx.reset(),N._vy.reset(),ii(k?s:J,Ji[1],xe,!0)),ii(te?J:s,"scroll",D,ee),ii(s,"wheel",le,ee),ii(s,Ji[0],Ee,ee),ii(J,Ji[2],me),ii(J,Ji[3],me),ii(s,"click",he,!0),ii(s,"click",nt),ii(J,"gesturestart",Ne),ii(J,"gestureend",it),ii(s,_n+"enter",ce),ii(s,_n+"leave",ae),ii(s,_n+"move",G),N.isEnabled=N.isPressed=N.isDragging=!1,pe&&pe(N))},N.kill=N.revert=function(){N.disable();var Q=ma.indexOf(N);Q>=0&&ma.splice(Q,1),Er===N&&(Er=0)},ma.push(N),k&&ss(s)&&(Er=N),N.enable(g)},by(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Lt.version="3.15.0";Lt.create=function(i){return new Lt(i)};Lt.register=uf;Lt.getAll=function(){return ma.slice()};Lt.getById=function(i){return ma.filter(function(e){return e.vars.id===i})[0]};of()&&Xt.registerPlugin(Lt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ye,oa,et,dt,Ci,ut,ru,Oo,bs,os,Ja,io,Jt,qo,bc,si,ld,cd,la,hf,Hl,df,ai,Tc,pf,ff,Ur,wc,nu,Ea,au,ls,Ac,Gl,ro=1,$t=Date.now,Vl=$t(),ji=0,$a=0,ud=function(i,e,t){var r=Ai(i)&&(i.substr(0,6)==="clamp("||i.indexOf("max")>-1);return t["_"+e+"Clamp"]=r,r?i.substr(6,i.length-7):i},hd=function(i,e){return e&&(!Ai(i)||i.substr(0,6)!=="clamp(")?"clamp("+i+")":i},Ay=function i(){return $a&&requestAnimationFrame(i)},dd=function(){return qo=1},pd=function(){return qo=0},ir=function(i){return i},Qa=function(i){return Math.round(i*1e5)/1e5||0},mf=function(){return typeof window<"u"},gf=function(){return ye||mf()&&(ye=window.gsap)&&ye.registerPlugin&&ye},On=function(i){return!!~ru.indexOf(i)},_f=function(i){return(i==="Height"?au:et["inner"+i])||Ci["client"+i]||ut["client"+i]},vf=function(i){return Yr(i,"getBoundingClientRect")||(On(i)?function(){return So.width=et.innerWidth,So.height=au,So}:function(){return yr(i)})},Ry=function(i,e,t){var r=t.d,n=t.d2,a=t.a;return(a=Yr(i,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(e?_f(n):i["client"+n])||0}},Cy=function(i,e){return!e||~lr.indexOf(i)?vf(i):function(){return So}},or=function(i,e){var t=e.s,r=e.d2,n=e.d,a=e.a;return Math.max(0,(t="scroll"+r)&&(a=Yr(i,t))?a()-vf(i)()[n]:On(i)?(Ci[t]||ut[t])-_f(r):i[t]-i["offset"+r])},no=function(i,e){for(var t=0;t<la.length;t+=3)(!e||~e.indexOf(la[t+1]))&&i(la[t],la[t+1],la[t+2])},Ai=function(i){return typeof i=="string"},ei=function(i){return typeof i=="function"},es=function(i){return typeof i=="number"},vn=function(i){return typeof i=="object"},Ya=function(i,e,t){return i&&i.progress(e?0:1)&&t&&i.pause()},ra=function(i,e,t){if(i.enabled){var r=i._ctx?i._ctx.add(function(){return e(i,t)}):e(i,t);r&&r.totalTime&&(i.callbackAnimation=r)}},na=Math.abs,xf="left",Mf="top",su="right",ou="bottom",Pn="width",Dn="height",cs="Right",us="Left",hs="Top",ds="Bottom",It="padding",Gi="margin",Na="Width",lu="Height",Nt="px",Vi=function(i){return et.getComputedStyle(i.nodeType===Node.DOCUMENT_NODE?i.scrollingElement:i)},Ly=function(i){var e=Vi(i).position;i.style.position=e==="absolute"||e==="fixed"?e:"relative"},fd=function(i,e){for(var t in e)t in i||(i[t]=e[t]);return i},yr=function(i,e){var t=e&&Vi(i)[bc]!=="matrix(1, 0, 0, 1, 0, 0)"&&ye.to(i,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=i.getBoundingClientRect?i.getBoundingClientRect():i.scrollingElement.getBoundingClientRect();return t&&t.progress(0).kill(),r},Fo=function(i,e){var t=e.d2;return i["offset"+t]||i["client"+t]||0},yf=function(i){var e=[],t=i.labels,r=i.duration(),n;for(n in t)e.push(t[n]/r);return e},Py=function(i){return function(e){return ye.utils.snap(yf(i),e)}},cu=function(i){var e=ye.utils.snap(i),t=Array.isArray(i)&&i.slice(0).sort(function(r,n){return r-n});return t?function(r,n,a){a===void 0&&(a=.001);var s;if(!n)return e(r);if(n>0){for(r-=a,s=0;s<t.length;s++)if(t[s]>=r)return t[s];return t[s-1]}else for(s=t.length,r+=a;s--;)if(t[s]<=r)return t[s];return t[0]}:function(r,n,a){a===void 0&&(a=.001);var s=e(r);return!n||Math.abs(s-r)<a||s-r<0==n<0?s:e(n<0?r-i:r+i)}},Dy=function(i){return function(e,t){return cu(yf(i))(e,t.direction)}},ao=function(i,e,t,r){return t.split(",").forEach(function(n){return i(e,n,r)})},Gt=function(i,e,t,r,n){return i.addEventListener(e,t,{passive:!r,capture:!!n})},Ht=function(i,e,t,r){return i.removeEventListener(e,t,!!r)},so=function(i,e,t){t=t&&t.wheelHandler,t&&(i(e,"wheel",t),i(e,"touchmove",t))},md={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},oo={toggleActions:"play",anticipatePin:0},zo={top:0,left:0,center:.5,bottom:1,right:1},vo=function(i,e){if(Ai(i)){var t=i.indexOf("="),r=~t?+(i.charAt(t-1)+1)*parseFloat(i.substr(t+1)):0;~t&&(i.indexOf("%")>t&&(r*=e/100),i=i.substr(0,t-1)),i=r+(i in zo?zo[i]*e:~i.indexOf("%")?parseFloat(i)*e/100:parseFloat(i)||0)}return i},lo=function(i,e,t,r,n,a,s,o){var l=n.startColor,c=n.endColor,u=n.fontSize,d=n.indent,h=n.fontWeight,m=dt.createElement("div"),g=On(t)||Yr(t,"pinType")==="fixed",v=i.indexOf("scroller")!==-1,f=g?ut:t.tagName==="IFRAME"?t.contentDocument.body:t,p=i.indexOf("start")!==-1,S=p?l:c,_="border-color:"+S+";font-size:"+u+";color:"+S+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return _+="position:"+((v||o)&&g?"fixed;":"absolute;"),(v||o||!g)&&(_+=(r===Ot?su:ou)+":"+(a+parseFloat(d))+"px;"),s&&(_+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),m._isStart=p,m.setAttribute("class","gsap-marker-"+i+(e?" marker-"+e:"")),m.style.cssText=_,m.innerText=e||e===0?i+"-"+e:i,f.children[0]?f.insertBefore(m,f.children[0]):f.appendChild(m),m._offset=m["offset"+r.op.d2],xo(m,0,r,p),m},xo=function(i,e,t,r){var n={display:"block"},a=t[r?"os2":"p2"],s=t[r?"p2":"os2"];i._isFlipped=r,n[t.a+"Percent"]=r?-100:0,n[t.a]=r?"1px":0,n["border"+a+Na]=1,n["border"+s+Na]=0,n[t.p]=e+"px",ye.set(i,n)},Qe=[],Rc={},Ts,gd=function(){return $t()-ji>34&&(Ts||(Ts=requestAnimationFrame(br)))},aa=function(){(!ai||!ai.isPressed||ai.startX>ut.clientWidth)&&(tt.cache++,ai?Ts||(Ts=requestAnimationFrame(br)):br(),ji||zn("scrollStart"),ji=$t())},Wl=function(){ff=et.innerWidth,pf=et.innerHeight},ts=function(i){tt.cache++,(i===!0||!Jt&&!df&&!dt.fullscreenElement&&!dt.webkitFullscreenElement&&(!Tc||ff!==et.innerWidth||Math.abs(et.innerHeight-pf)>et.innerHeight*.25))&&Oo.restart(!0)},Fn={},Iy=[],Sf=function i(){return Ht(Je,"scrollEnd",i)||En(!0)},zn=function(i){return Fn[i]&&Fn[i].map(function(e){return e()})||Iy},wi=[],Ef=function(i){for(var e=0;e<wi.length;e+=5)(!i||wi[e+4]&&wi[e+4].query===i)&&(wi[e].style.cssText=wi[e+1],wi[e].getBBox&&wi[e].setAttribute("transform",wi[e+2]||""),wi[e+3].uncache=1)},bf=function(){return tt.forEach(function(i){return ei(i)&&++i.cacheID&&(i.rec=i())})},uu=function(i,e){var t;for(si=0;si<Qe.length;si++)t=Qe[si],t&&(!e||t._ctx===e)&&(i?t.kill(1):t.revert(!0,!0));ls=!0,e&&Ef(e),e||zn("revert")},Tf=function(i,e){tt.cache++,(e||!oi)&&tt.forEach(function(t){return ei(t)&&t.cacheID++&&(t.rec=0)}),Ai(i)&&(et.history.scrollRestoration=nu=i)},oi,In=0,_d,Uy=function(){if(_d!==In){var i=_d=In;requestAnimationFrame(function(){return i===In&&En(!0)})}},wf=function(){ut.appendChild(Ea),au=!ai&&Ea.offsetHeight||et.innerHeight,ut.removeChild(Ea)},vd=function(i){return bs(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=i?"none":"block"})},En=function(i,e){if(Ci=dt.documentElement,ut=dt.body,ru=[et,dt,Ci,ut],ji&&!i&&!ls){Gt(Je,"scrollEnd",Sf);return}wf(),oi=Je.isRefreshing=!0,ls||bf();var t=zn("refreshInit");hf&&Je.sort(),e||uu(),tt.forEach(function(r){ei(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Qe.slice(0).forEach(function(r){return r.refresh()}),ls=!1,Qe.forEach(function(r){if(r._subPinOffset&&r.pin){var n=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[n];r.revert(!0,1),r.adjustPinSpacing(r.pin[n]-a),r.refresh()}}),Ac=1,vd(!0),Qe.forEach(function(r){var n=or(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>n,s=r._startClamp&&r.start>=n;(a||s)&&r.setPositions(s?n-1:r.start,a?Math.max(s?n:r.start+1,n):r.end,!0)}),vd(!1),Ac=0,t.forEach(function(r){return r&&r.render&&r.render(-1)}),tt.forEach(function(r){ei(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Tf(nu,1),Oo.pause(),In++,oi=2,br(2),Qe.forEach(function(r){return ei(r.vars.onRefresh)&&r.vars.onRefresh(r)}),oi=Je.isRefreshing=!1,zn("refresh")},Cc=0,Mo=1,ps,br=function(i){if(i===2||!oi&&!ls){Je.isUpdating=!0,ps&&ps.update(0);var e=Qe.length,t=$t(),r=t-Vl>=50,n=e&&Qe[0].scroll();if(Mo=Cc>n?-1:1,oi||(Cc=n),r&&(ji&&!qo&&t-ji>200&&(ji=0,zn("scrollEnd")),Ja=Vl,Vl=t),Mo<0){for(si=e;si-- >0;)Qe[si]&&Qe[si].update(0,r);Mo=1}else for(si=0;si<e;si++)Qe[si]&&Qe[si].update(0,r);Je.isUpdating=!1}Ts=0},Lc=[xf,Mf,ou,su,Gi+ds,Gi+cs,Gi+hs,Gi+us,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yo=Lc.concat([Pn,Dn,"boxSizing","max"+Na,"max"+lu,"position",Gi,It,It+hs,It+cs,It+ds,It+us]),Ny=function(i,e,t){ba(t);var r=i._gsap;if(r.spacerIsNative)ba(r.spacerState);else if(i._gsap.swappedIn){var n=e.parentNode;n&&(n.insertBefore(i,e),n.removeChild(e))}i._gsap.swappedIn=!1},Xl=function(i,e,t,r){if(!i._gsap.swappedIn){for(var n=Lc.length,a=e.style,s=i.style,o;n--;)o=Lc[n],a[o]=t[o];a.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(a.display="inline-block"),s[ou]=s[su]="auto",a.flexBasis=t.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Pn]=Fo(i,ui)+Nt,a[Dn]=Fo(i,Ot)+Nt,a[It]=s[Gi]=s[Mf]=s[xf]="0",ba(r),s[Pn]=s["max"+Na]=t[Pn],s[Dn]=s["max"+lu]=t[Dn],s[It]=t[It],i.parentNode!==e&&(i.parentNode.insertBefore(e,i),e.appendChild(i)),i._gsap.swappedIn=!0}},Oy=/([A-Z])/g,ba=function(i){if(i){var e=i.t.style,t=i.length,r=0,n,a;for((i.t._gsap||ye.core.getCache(i.t)).uncache=1;r<t;r+=2)a=i[r+1],n=i[r],a?e[n]=a:e[n]&&e.removeProperty(n.replace(Oy,"-$1").toLowerCase())}},co=function(i){for(var e=yo.length,t=i.style,r=[],n=0;n<e;n++)r.push(yo[n],t[yo[n]]);return r.t=i,r},Fy=function(i,e,t){for(var r=[],n=i.length,a=t?8:0,s;a<n;a+=2)s=i[a],r.push(s,s in e?e[s]:i[a+1]);return r.t=i.t,r},So={left:0,top:0},xd=function(i,e,t,r,n,a,s,o,l,c,u,d,h,m){ei(i)&&(i=i(o)),Ai(i)&&i.substr(0,3)==="max"&&(i=d+(i.charAt(4)==="="?vo("0"+i.substr(3),t):0));var g=h?h.time():0,v,f,p;if(h&&h.seek(0),isNaN(i)||(i=+i),es(i))h&&(i=ye.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,i)),s&&xo(s,t,r,!0);else{ei(e)&&(e=e(o));var S=(i||"0").split(" "),_,b,C,T;p=fi(e,o)||ut,_=yr(p)||{},(!_||!_.left&&!_.top)&&Vi(p).display==="none"&&(T=p.style.display,p.style.display="block",_=yr(p),T?p.style.display=T:p.style.removeProperty("display")),b=vo(S[0],_[r.d]),C=vo(S[1]||"0",t),i=_[r.p]-l[r.p]-c+b+n-C,s&&xo(s,C,r,t-C<20||s._isStart&&C>20),t-=t-C}if(m&&(o[m]=i||-.001,i<0&&(i=0)),a){var w=i+t,P=a._isStart;v="scroll"+r.d2,xo(a,w,r,P&&w>20||!P&&(u?Math.max(ut[v],Ci[v]):a.parentNode[v])<=w+1),u&&(l=yr(s),u&&(a.style[r.op.p]=l[r.op.p]-r.op.m-a._offset+Nt))}return h&&p&&(v=yr(p),h.seek(d),f=yr(p),h._caScrollDist=v[r.p]-f[r.p],i=i/h._caScrollDist*d),h&&h.seek(g),h?i:Math.round(i)},zy=/(webkit|moz|length|cssText|inset)/i,Md=function(i,e,t,r){if(i.parentNode!==e){var n=i.style,a,s;if(e===ut){i._stOrig=n.cssText,s=Vi(i);for(a in s)!+a&&!zy.test(a)&&s[a]&&typeof n[a]=="string"&&a!=="0"&&(n[a]=s[a]);n.top=t,n.left=r}else n.cssText=i._stOrig;ye.core.getCache(i).uncache=1,e.appendChild(i)}},Af=function(i,e,t){var r=e,n=r;return function(a){var s=Math.round(i());return s!==r&&s!==n&&Math.abs(s-r)>3&&Math.abs(s-n)>3&&(a=s,t&&t()),n=r,r=Math.round(a),r}},uo=function(i,e,t){var r={};r[e.p]="+="+t,ye.set(i,r)},yd=function(i,e){var t=en(i,e),r="_scroll"+e.p2,n=function a(s,o,l,c,u){var d=a.tween,h=o.onComplete,m={};l=l||t();var g=Af(t,l,function(){d.kill(),a.tween=0});return u=c&&u||0,c=c||s-l,d&&d.kill(),o[r]=s,o.inherit=!1,o.modifiers=m,m[r]=function(){return g(l+c*d.ratio+u*d.ratio*d.ratio)},o.onUpdate=function(){tt.cache++,a.tween&&br()},o.onComplete=function(){a.tween=0,h&&h.call(d)},d=a.tween=ye.to(i,o),d};return i[r]=t,t.wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},Gt(i,"wheel",t.wheelHandler),Je.isTouch&&Gt(i,"touchmove",t.wheelHandler),n},Je=function(){function i(t,r){oa||i.register(ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),wc(this),this.init(t,r)}var e=i.prototype;return e.init=function(t,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$a){this.update=this.refresh=this.kill=ir;return}t=fd(Ai(t)||es(t)||t.nodeType?{trigger:t}:t,oo);var n=t,a=n.onUpdate,s=n.toggleClass,o=n.id,l=n.onToggle,c=n.onRefresh,u=n.scrub,d=n.trigger,h=n.pin,m=n.pinSpacing,g=n.invalidateOnRefresh,v=n.anticipatePin,f=n.onScrubComplete,p=n.onSnapComplete,S=n.once,_=n.snap,b=n.pinReparent,C=n.pinSpacer,T=n.containerAnimation,w=n.fastScrollEnd,P=n.preventOverlaps,U=t.horizontal||t.containerAnimation&&t.horizontal!==!1?ui:Ot,x=!u&&u!==0,y=fi(t.scroller||et),K=ye.core.getCache(y),q=On(y),L=("pinType"in t?t.pinType:Yr(y,"pinType")||q&&"fixed")==="fixed",V=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],F=x&&t.toggleActions.split(" "),k="markers"in t?t.markers:oo.markers,X=q?0:parseFloat(Vi(y)["border"+U.p2+Na])||0,A=this,$=t.onRefreshInit&&function(){return t.onRefreshInit(A)},ie=Ry(y,q,U),pe=Cy(y,q),fe=0,W=0,ee=0,se=en(y,U),we,ge,_e,ke,Ae,I,$e,ve,De,N,Oe,Ue,Be,He,R,M,Y,Z,te,J,Ie,Re,ne,he,Te,oe,ot,Ge,Ce,xe,Ee,me,Ne,it,D,le,G,ce,ae;if(A._startClamp=A._endClamp=!1,A._dir=U,v*=45,A.scroller=y,A.scroll=T?T.time.bind(T):se,ke=se(),A.vars=t,r=r||t.animation,"refreshPriority"in t&&(hf=1,t.refreshPriority===-9999&&(ps=A)),K.tweenScroll=K.tweenScroll||{top:yd(y,Ot),left:yd(y,ui)},A.tweenTo=we=K.tweenScroll[U.p],A.scrubDuration=function(re){Ne=es(re)&&re,Ne?me?me.duration(re):me=ye.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ne,paused:!0,onComplete:function(){return f&&f(A)}}):(me&&me.progress(1).kill(),me=0)},r&&(r.vars.lazy=!1,r._initted&&!A.isReverted||r.vars.immediateRender!==!1&&t.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),A.animation=r.pause(),r.scrollTrigger=A,A.scrubDuration(u),xe=0,o||(o=r.vars.id)),_&&((!vn(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in ut.style&&ye.set(q?[ut,Ci]:y,{scrollBehavior:"auto"}),tt.forEach(function(re){return ei(re)&&re.target===(q?dt.scrollingElement||Ci:y)&&(re.smooth=!1)}),_e=ei(_.snapTo)?_.snapTo:_.snapTo==="labels"?Py(r):_.snapTo==="labelsDirectional"?Dy(r):_.directional!==!1?function(re,Pe){return cu(_.snapTo)(re,$t()-W<500?0:Pe.direction)}:ye.utils.snap(_.snapTo),it=_.duration||{min:.1,max:2},it=vn(it)?os(it.min,it.max):os(it,it),D=ye.delayedCall(_.delay||Ne/2||.1,function(){var re=se(),Pe=$t()-W<500,be=we.tween;if((Pe||Math.abs(A.getVelocity())<10)&&!be&&!qo&&fe!==re){var We=(re-I)/He,Pt=r&&!x?r.totalProgress():We,qe=Pe?0:(Pt-Ee)/($t()-Ja)*1e3||0,Mt=ye.utils.clamp(-We,1-We,na(qe/2)*qe/.185),Rt=We+(_.inertia===!1?0:Mt),_t,ft,ht=_,Ei=ht.onStart,vt=ht.onInterrupt,E=ht.onComplete;if(_t=_e(Rt,A),es(_t)||(_t=Rt),ft=Math.max(0,Math.round(I+_t*He)),re<=$e&&re>=I&&ft!==re){if(be&&!be._initted&&be.data<=na(ft-re))return;_.inertia===!1&&(Mt=_t-We),we(ft,{duration:it(na(Math.max(na(Rt-Pt),na(_t-Pt))*.185/qe/.05||0)),ease:_.ease||"power3",data:na(ft-re),onInterrupt:function(){return D.restart(!0)&&vt&&ra(A,vt)},onComplete:function(){A.update(),fe=se(),r&&!x&&(me?me.resetTo("totalProgress",_t,r._tTime/r._tDur):r.progress(_t)),xe=Ee=r&&!x?r.totalProgress():A.progress,p&&p(A),E&&ra(A,E)}},re,Mt*He,ft-re-Mt*He),Ei&&ra(A,Ei,we.tween)}}else A.isActive&&fe!==re&&D.restart(!0)}).pause()),o&&(Rc[o]=A),d=A.trigger=fi(d||h!==!0&&h),ae=d&&d._gsap&&d._gsap.stRevert,ae&&(ae=ae(A)),h=h===!0?d:fi(h),Ai(s)&&(s={targets:d,className:s}),h&&(m===!1||m===Gi||(m=!m&&h.parentNode&&h.parentNode.style&&Vi(h.parentNode).display==="flex"?!1:It),A.pin=h,ge=ye.core.getCache(h),ge.spacer?R=ge.pinState:(C&&(C=fi(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),ge.spacerIsNative=!!C,C&&(ge.spacerState=co(C))),ge.spacer=Z=C||dt.createElement("div"),Z.classList.add("pin-spacer"),o&&Z.classList.add("pin-spacer-"+o),ge.pinState=R=co(h)),t.force3D!==!1&&ye.set(h,{force3D:!0}),A.spacer=Z=ge.spacer,Ce=Vi(h),he=Ce[m+U.os2],J=ye.getProperty(h),Ie=ye.quickSetter(h,U.a,Nt),Xl(h,Z,Ce),Y=co(h)),k){Ue=vn(k)?fd(k,md):md,N=lo("scroller-start",o,y,U,Ue,0),Oe=lo("scroller-end",o,y,U,Ue,0,N),te=N["offset"+U.op.d2];var nt=fi(Yr(y,"content")||y);ve=this.markerStart=lo("start",o,nt,U,Ue,te,0,T),De=this.markerEnd=lo("end",o,nt,U,Ue,te,0,T),T&&(ce=ye.quickSetter([ve,De],U.a,Nt)),!L&&!(lr.length&&Yr(y,"fixedMarkers")===!0)&&(Ly(q?ut:y),ye.set([N,Oe],{force3D:!0}),oe=ye.quickSetter(N,U.a,Nt),Ge=ye.quickSetter(Oe,U.a,Nt))}if(T){var Q=T.vars.onUpdate,Fe=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){A.update(0,0,1),Q&&Q.apply(T,Fe||[])})}if(A.previous=function(){return Qe[Qe.indexOf(A)-1]},A.next=function(){return Qe[Qe.indexOf(A)+1]},A.revert=function(re,Pe){if(!Pe)return A.kill(!0);var be=re!==!1||!A.enabled,We=Jt;be!==A.isReverted&&(be&&(le=Math.max(se(),A.scroll.rec||0),ee=A.progress,G=r&&r.progress()),ve&&[ve,De,N,Oe].forEach(function(Pt){return Pt.style.display=be?"none":"block"}),be&&(Jt=A,A.update(be)),h&&(!b||!A.isActive)&&(be?Ny(h,Z,R):Xl(h,Z,Vi(h),Te)),be||A.update(be),Jt=We,A.isReverted=be)},A.refresh=function(re,Pe,be,We){if(!((Jt||!A.enabled)&&!Pe)){if(h&&re&&ji){Gt(i,"scrollEnd",Sf);return}!oi&&$&&$(A),Jt=A,we.tween&&!be&&(we.tween.kill(),we.tween=0),me&&me.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(ct){return ct.vars.immediateRender&&ct.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),A.isReverted||A.revert(!0,!0),A._subPinOffset=!1;var Pt=ie(),qe=pe(),Mt=T?T.duration():or(y,U),Rt=He<=.01||!He,_t=0,ft=We||0,ht=vn(be)?be.end:t.end,Ei=t.endTrigger||d,vt=vn(be)?be.start:t.start||(t.start===0||!d?0:h?"0 0":"0 100%"),E=A.pinnedContainer=t.pinnedContainer&&fi(t.pinnedContainer,A),O=d&&Math.max(0,Qe.indexOf(A))||0,B=O,H,z,ue,Le,Me,Se,ze,Ve,Xe,wt,lt,Bt,di;for(k&&vn(be)&&(Bt=ye.getProperty(N,U.p),di=ye.getProperty(Oe,U.p));B-- >0;)Se=Qe[B],Se.end||Se.refresh(0,1)||(Jt=A),ze=Se.pin,ze&&(ze===d||ze===h||ze===E)&&!Se.isReverted&&(wt||(wt=[]),wt.unshift(Se),Se.revert(!0,!0)),Se!==Qe[B]&&(O--,B--);for(ei(vt)&&(vt=vt(A)),vt=ud(vt,"start",A),I=xd(vt,d,Pt,U,se(),ve,N,A,qe,X,L,Mt,T,A._startClamp&&"_startClamp")||(h?-.001:0),ei(ht)&&(ht=ht(A)),Ai(ht)&&!ht.indexOf("+=")&&(~ht.indexOf(" ")?ht=(Ai(vt)?vt.split(" ")[0]:"")+ht:(_t=vo(ht.substr(2),Pt),ht=Ai(vt)?vt:(T?ye.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,I):I)+_t,Ei=d)),ht=ud(ht,"end",A),$e=Math.max(I,xd(ht||(Ei?"100% 0":Mt),Ei,Pt,U,se()+_t,De,Oe,A,qe,X,L,Mt,T,A._endClamp&&"_endClamp"))||-.001,_t=0,B=O;B--;)Se=Qe[B]||{},ze=Se.pin,ze&&Se.start-Se._pinPush<=I&&!T&&Se.end>0&&(H=Se.end-(A._startClamp?Math.max(0,Se.start):Se.start),(ze===d&&Se.start-Se._pinPush<I||ze===E)&&isNaN(vt)&&(_t+=H*(1-Se.progress)),ze===h&&(ft+=H));if(I+=_t,$e+=_t,A._startClamp&&(A._startClamp+=_t),A._endClamp&&!oi&&(A._endClamp=$e||-.001,$e=Math.min($e,or(y,U))),He=$e-I||(I-=.01)&&.001,Rt&&(ee=ye.utils.clamp(0,1,ye.utils.normalize(I,$e,le))),A._pinPush=ft,ve&&_t&&(H={},H[U.a]="+="+_t,E&&(H[U.p]="-="+se()),ye.set([ve,De],H)),h&&!(Ac&&A.end>=or(y,U)))H=Vi(h),Le=U===Ot,ue=se(),Re=parseFloat(J(U.a))+ft,!Mt&&$e>1&&(lt=(q?dt.scrollingElement||Ci:y).style,lt={style:lt,value:lt["overflow"+U.a.toUpperCase()]},q&&Vi(ut)["overflow"+U.a.toUpperCase()]!=="scroll"&&(lt.style["overflow"+U.a.toUpperCase()]="scroll")),Xl(h,Z,H),Y=co(h),z=yr(h,!0),Ve=L&&en(y,Le?ui:Ot)(),m?(Te=[m+U.os2,He+ft+Nt],Te.t=Z,B=m===It?Fo(h,U)+He+ft:0,B&&(Te.push(U.d,B+Nt),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=B+Nt)),ba(Te),E&&Qe.forEach(function(ct){ct.pin===E&&ct.vars.pinSpacing!==!1&&(ct._subPinOffset=!0)}),L&&se(le)):(B=Fo(h,U),B&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=B+Nt)),L&&(Me={top:z.top+(Le?ue-I:Ve)+Nt,left:z.left+(Le?Ve:ue-I)+Nt,boxSizing:"border-box",position:"fixed"},Me[Pn]=Me["max"+Na]=Math.ceil(z.width)+Nt,Me[Dn]=Me["max"+lu]=Math.ceil(z.height)+Nt,Me[Gi]=Me[Gi+hs]=Me[Gi+cs]=Me[Gi+ds]=Me[Gi+us]="0",Me[It]=H[It],Me[It+hs]=H[It+hs],Me[It+cs]=H[It+cs],Me[It+ds]=H[It+ds],Me[It+us]=H[It+us],M=Fy(R,Me,b),oi&&se(0)),r?(Xe=r._initted,Hl(1),r.render(r.duration(),!0,!0),ne=J(U.a)-Re+He+ft,ot=Math.abs(He-ne)>1,L&&ot&&M.splice(M.length-2,2),r.render(0,!0,!0),Xe||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Hl(0)):ne=He,lt&&(lt.value?lt.style["overflow"+U.a.toUpperCase()]=lt.value:lt.style.removeProperty("overflow-"+U.a));else if(d&&se()&&!T)for(z=d.parentNode;z&&z!==ut;)z._pinOffset&&(I-=z._pinOffset,$e-=z._pinOffset),z=z.parentNode;wt&&wt.forEach(function(ct){return ct.revert(!1,!0)}),A.start=I,A.end=$e,ke=Ae=oi?le:se(),!T&&!oi&&(ke<le&&se(le),A.scroll.rec=0),A.revert(!1,!0),W=$t(),D&&(fe=-1,D.restart(!0)),Jt=0,r&&x&&(r._initted||G)&&r.progress()!==G&&r.progress(G||0,!0).render(r.time(),!0,!0),(Rt||ee!==A.progress||T||g||r&&!r._initted)&&(r&&!x&&(r._initted||ee||r.vars.immediateRender!==!1)&&r.totalProgress(T&&I<-.001&&!ee?ye.utils.normalize(I,$e,0):ee,!0),A.progress=Rt||(ke-I)/He===ee?0:ee),h&&m&&(Z._pinOffset=Math.round(A.progress*ne)),me&&me.invalidate(),isNaN(Bt)||(Bt-=ye.getProperty(N,U.p),di-=ye.getProperty(Oe,U.p),uo(N,U,Bt),uo(ve,U,Bt-(We||0)),uo(Oe,U,di),uo(De,U,di-(We||0))),Rt&&!oi&&A.update(),c&&!oi&&!Be&&(Be=!0,c(A),Be=!1)}},A.getVelocity=function(){return(se()-Ae)/($t()-Ja)*1e3||0},A.endAnimation=function(){Ya(A.callbackAnimation),r&&(me?me.progress(1):r.paused()?x||Ya(r,A.direction<0,1):Ya(r,r.reversed()))},A.labelToScroll=function(re){return r&&r.labels&&(I||A.refresh()||I)+r.labels[re]/r.duration()*He||0},A.getTrailing=function(re){var Pe=Qe.indexOf(A),be=A.direction>0?Qe.slice(0,Pe).reverse():Qe.slice(Pe+1);return(Ai(re)?be.filter(function(We){return We.vars.preventOverlaps===re}):be).filter(function(We){return A.direction>0?We.end<=I:We.start>=$e})},A.update=function(re,Pe,be){if(!(T&&!be&&!re)){var We=oi===!0?le:A.scroll(),Pt=re?0:(We-I)/He,qe=Pt<0?0:Pt>1?1:Pt||0,Mt=A.progress,Rt,_t,ft,ht,Ei,vt,E,O;if(Pe&&(Ae=ke,ke=T?se():We,_&&(Ee=xe,xe=r&&!x?r.totalProgress():qe)),v&&h&&!Jt&&!ro&&ji&&(!qe&&I<We+(We-Ae)/($t()-Ja)*v?qe=1e-4:qe===1&&$e>We+(We-Ae)/($t()-Ja)*v&&(qe=.9999)),qe!==Mt&&A.enabled){if(Rt=A.isActive=!!qe&&qe<1,_t=!!Mt&&Mt<1,vt=Rt!==_t,Ei=vt||!!qe!=!!Mt,A.direction=qe>Mt?1:-1,A.progress=qe,Ei&&!Jt&&(ft=qe&&!Mt?0:qe===1?1:Mt===1?2:3,x&&(ht=!vt&&F[ft+1]!=="none"&&F[ft+1]||F[ft],O=r&&(ht==="complete"||ht==="reset"||ht in r))),P&&(vt||O)&&(O||u||!r)&&(ei(P)?P(A):A.getTrailing(P).forEach(function(ue){return ue.endAnimation()})),x||(me&&!Jt&&!ro?(me._dp._time-me._start!==me._time&&me.render(me._dp._time-me._start),me.resetTo?me.resetTo("totalProgress",qe,r._tTime/r._tDur):(me.vars.totalProgress=qe,me.invalidate().restart())):r&&r.totalProgress(qe,!!(Jt&&(W||re)))),h){if(re&&m&&(Z.style[m+U.os2]=he),!L)Ie(Qa(Re+ne*qe));else if(Ei){if(E=!re&&qe>Mt&&$e+1>We&&We+1>=or(y,U),b)if(!re&&(Rt||E)){var B=yr(h,!0),H=We-I;Md(h,ut,B.top+(U===Ot?H:0)+Nt,B.left+(U===Ot?0:H)+Nt)}else Md(h,Z);ba(Rt||E?M:Y),ot&&qe<1&&Rt||Ie(Re+(qe===1&&!E?ne:0))}}_&&!we.tween&&!Jt&&!ro&&D.restart(!0),s&&(vt||S&&qe&&(qe<1||!Gl))&&bs(s.targets).forEach(function(ue){return ue.classList[Rt||S?"add":"remove"](s.className)}),a&&!x&&!re&&a(A),Ei&&!Jt?(x&&(O&&(ht==="complete"?r.pause().totalProgress(1):ht==="reset"?r.restart(!0).pause():ht==="restart"?r.restart(!0):r[ht]()),a&&a(A)),(vt||!Gl)&&(l&&vt&&ra(A,l),V[ft]&&ra(A,V[ft]),S&&(qe===1?A.kill(!1,1):V[ft]=0),vt||(ft=qe===1?1:3,V[ft]&&ra(A,V[ft]))),w&&!Rt&&Math.abs(A.getVelocity())>(es(w)?w:2500)&&(Ya(A.callbackAnimation),me?me.progress(1):Ya(r,ht==="reverse"?1:!qe,1))):x&&a&&!Jt&&a(A)}if(Ge){var z=T?We/T.duration()*(T._caScrollDist||0):We;oe(z+(N._isFlipped?1:0)),Ge(z)}ce&&ce(-We/T.duration()*(T._caScrollDist||0))}},A.enable=function(re,Pe){A.enabled||(A.enabled=!0,Gt(y,"resize",ts),q||Gt(y,"scroll",aa),$&&Gt(i,"refreshInit",$),re!==!1&&(A.progress=ee=0,ke=Ae=fe=se()),Pe!==!1&&A.refresh())},A.getTween=function(re){return re&&we?we.tween:me},A.setPositions=function(re,Pe,be,We){if(T){var Pt=T.scrollTrigger,qe=T.duration(),Mt=Pt.end-Pt.start;re=Pt.start+Mt*re/qe,Pe=Pt.start+Mt*Pe/qe}A.refresh(!1,!1,{start:hd(re,be&&!!A._startClamp),end:hd(Pe,be&&!!A._endClamp)},We),A.update()},A.adjustPinSpacing=function(re){if(Te&&re){var Pe=Te.indexOf(U.d)+1;Te[Pe]=parseFloat(Te[Pe])+re+Nt,Te[1]=parseFloat(Te[1])+re+Nt,ba(Te)}},A.disable=function(re,Pe){if(re!==!1&&A.revert(!0,!0),A.enabled&&(A.enabled=A.isActive=!1,Pe||me&&me.pause(),le=0,ge&&(ge.uncache=1),$&&Ht(i,"refreshInit",$),D&&(D.pause(),we.tween&&we.tween.kill()&&(we.tween=0)),!q)){for(var be=Qe.length;be--;)if(Qe[be].scroller===y&&Qe[be]!==A)return;Ht(y,"resize",ts),q||Ht(y,"scroll",aa)}},A.kill=function(re,Pe){A.disable(re,Pe),me&&!Pe&&me.kill(),o&&delete Rc[o];var be=Qe.indexOf(A);be>=0&&Qe.splice(be,1),be===si&&Mo>0&&si--,be=0,Qe.forEach(function(We){return We.scroller===A.scroller&&(be=1)}),be||oi||(A.scroll.rec=0),r&&(r.scrollTrigger=null,re&&r.revert({kill:!1}),Pe||r.kill()),ve&&[ve,De,N,Oe].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),ps===A&&(ps=0),h&&(ge&&(ge.uncache=1),be=0,Qe.forEach(function(We){return We.pin===h&&be++}),be||(ge.spacer=0)),t.onKill&&t.onKill(A)},Qe.push(A),A.enable(!1,!1),ae&&ae(A),r&&r.add&&!He){var st=A.update;A.update=function(){A.update=st,tt.cache++,I||$e||A.refresh()},ye.delayedCall(.01,A.update),He=.01,I=$e=0}else A.refresh();h&&Uy()},i.register=function(t){return oa||(ye=t||gf(),mf()&&window.document&&i.enable(),oa=$a),oa},i.defaults=function(t){if(t)for(var r in t)oo[r]=t[r];return oo},i.disable=function(t,r){$a=0,Qe.forEach(function(a){return a[r?"kill":"disable"](t)}),Ht(et,"wheel",aa),Ht(dt,"scroll",aa),clearInterval(io),Ht(dt,"touchcancel",ir),Ht(ut,"touchstart",ir),ao(Ht,dt,"pointerdown,touchstart,mousedown",dd),ao(Ht,dt,"pointerup,touchend,mouseup",pd),Oo.kill(),no(Ht);for(var n=0;n<tt.length;n+=3)so(Ht,tt[n],tt[n+1]),so(Ht,tt[n],tt[n+2])},i.enable=function(){if(et=window,dt=document,Ci=dt.documentElement,ut=dt.body,ye){if(bs=ye.utils.toArray,os=ye.utils.clamp,wc=ye.core.context||ir,Hl=ye.core.suppressOverwrites||ir,nu=et.history.scrollRestoration||"auto",Cc=et.pageYOffset||0,ye.core.globals("ScrollTrigger",i),ut){$a=1,Ea=document.createElement("div"),Ea.style.height="100vh",Ea.style.position="absolute",wf(),Ay(),Lt.register(ye),i.isTouch=Lt.isTouch,Ur=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Tc=Lt.isTouch===1,Gt(et,"wheel",aa),ru=[et,dt,Ci,ut],ye.matchMedia?(i.matchMedia=function(c){var u=ye.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},ye.addEventListener("matchMediaInit",function(){bf(),uu()}),ye.addEventListener("matchMediaRevert",function(){return Ef()}),ye.addEventListener("matchMedia",function(){En(0,1),zn("matchMedia")}),ye.matchMedia().add("(orientation: portrait)",function(){return Wl(),Wl})):console.warn("Requires GSAP 3.11.0 or later"),Wl(),Gt(dt,"scroll",aa);var t=ut.hasAttribute("style"),r=ut.style,n=r.borderTopStyle,a=ye.core.Animation.prototype,s,o;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",s=yr(ut),Ot.m=Math.round(s.top+Ot.sc())||0,ui.m=Math.round(s.left+ui.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),t||(ut.setAttribute("style",""),ut.removeAttribute("style")),io=setInterval(gd,250),ye.delayedCall(.5,function(){return ro=0}),Gt(dt,"touchcancel",ir),Gt(ut,"touchstart",ir),ao(Gt,dt,"pointerdown,touchstart,mousedown",dd),ao(Gt,dt,"pointerup,touchend,mouseup",pd),bc=ye.utils.checkPrefix("transform"),yo.push(bc),oa=$t(),Oo=ye.delayedCall(.2,En).pause(),la=[dt,"visibilitychange",function(){var c=et.innerWidth,u=et.innerHeight;dt.hidden?(ld=c,cd=u):(ld!==c||cd!==u)&&ts()},dt,"DOMContentLoaded",En,et,"load",En,et,"resize",ts],no(Gt),Qe.forEach(function(c){return c.enable(0,1)}),o=0;o<tt.length;o+=3)so(Ht,tt[o],tt[o+1]),so(Ht,tt[o],tt[o+2])}else if(dt){var l=function c(){i.enable(),dt.removeEventListener("DOMContentLoaded",c)};dt.addEventListener("DOMContentLoaded",l)}}},i.config=function(t){"limitCallbacks"in t&&(Gl=!!t.limitCallbacks);var r=t.syncInterval;r&&clearInterval(io)||(io=r)&&setInterval(gd,r),"ignoreMobileResize"in t&&(Tc=i.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(no(Ht)||no(Gt,t.autoRefreshEvents||"none"),df=(t.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(t,r){var n=fi(t),a=tt.indexOf(n),s=On(n);~a&&tt.splice(a,s?6:2),r&&(s?lr.unshift(et,r,ut,r,Ci,r):lr.unshift(n,r))},i.clearMatchMedia=function(t){Qe.forEach(function(r){return r._ctx&&r._ctx.query===t&&r._ctx.kill(!0,!0)})},i.isInViewport=function(t,r,n){var a=(Ai(t)?fi(t):t).getBoundingClientRect(),s=a[n?Pn:Dn]*r||0;return n?a.right-s>0&&a.left+s<et.innerWidth:a.bottom-s>0&&a.top+s<et.innerHeight},i.positionInViewport=function(t,r,n){Ai(t)&&(t=fi(t));var a=t.getBoundingClientRect(),s=a[n?Pn:Dn],o=r==null?s/2:r in zo?zo[r]*s:~r.indexOf("%")?parseFloat(r)*s/100:parseFloat(r)||0;return n?(a.left+o)/et.innerWidth:(a.top+o)/et.innerHeight},i.killAll=function(t){if(Qe.slice(0).forEach(function(n){return n.vars.id!=="ScrollSmoother"&&n.kill()}),t!==!0){var r=Fn.killAll||[];Fn={},r.forEach(function(n){return n()})}},i}();Je.version="3.15.0";Je.saveStyles=function(i){return i?bs(i).forEach(function(e){if(e&&e.style){var t=wi.indexOf(e);t>=0&&wi.splice(t,5),wi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ye.core.getCache(e),wc())}}):wi};Je.revert=function(i,e){return uu(!i,e)};Je.create=function(i,e){return new Je(i,e)};Je.refresh=function(i){return i?ts(!0):(oa||Je.register())&&En(!0)};Je.update=function(i){return++tt.cache&&br(i===!0?2:0)};Je.clearScrollMemory=Tf;Je.maxScroll=function(i,e){return or(i,e?ui:Ot)};Je.getScrollFunc=function(i,e){return en(fi(i),e?ui:Ot)};Je.getById=function(i){return Rc[i]};Je.getAll=function(){return Qe.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!ji};Je.snapDirectional=cu;Je.addEventListener=function(i,e){var t=Fn[i]||(Fn[i]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(i,e){var t=Fn[i],r=t&&t.indexOf(e);r>=0&&t.splice(r,1)};Je.batch=function(i,e){var t=[],r={},n=e.interval||.016,a=e.batchMax||1e9,s=function(l,c){var u=[],d=[],h=ye.delayedCall(n,function(){c(u,d),u=[],d=[]}).pause();return function(m){u.length||h.restart(!0),u.push(m.trigger),d.push(m),a<=u.length&&h.progress(1)}},o;for(o in e)r[o]=o.substr(0,2)==="on"&&ei(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return ei(a)&&(a=a(),Gt(Je,"refresh",function(){return a=e.batchMax()})),bs(i).forEach(function(l){var c={};for(o in r)c[o]=r[o];c.trigger=l,t.push(Je.create(c))}),t};var Sd=function(i,e,t,r){return e>r?i(r):e<0&&i(0),t>r?(r-e)/(t-e):t<0?e/(e-t):1},ql=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Lt.isTouch?" pinch-zoom":""):"none",e===Ci&&i(ut,t)},ho={auto:1,scroll:1},By=function(i){var e=i.event,t=i.target,r=i.axis,n=(e.changedTouches?e.changedTouches[0]:e).target,a=n._gsap||ye.core.getCache(n),s=$t(),o;if(!a._isScrollT||s-a._isScrollT>2e3){for(;n&&n!==ut&&(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth||!(ho[(o=Vi(n)).overflowY]||ho[o.overflowX]));)n=n.parentNode;a._isScroll=n&&n!==t&&!On(n)&&(ho[(o=Vi(n)).overflowY]||ho[o.overflowX]),a._isScrollT=s}(a._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Rf=function(i,e,t,r){return Lt.create({target:i,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&By,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return t&&Gt(dt,Lt.eventTypes[0],bd,!1,!0)},onDisable:function(){return Ht(dt,Lt.eventTypes[0],bd,!0)}})},ky=/(input|label|select|textarea)/i,Ed,bd=function(i){var e=ky.test(i.target.tagName);(e||Ed)&&(i._gsapAllow=!0,Ed=e)},Hy=function(i){vn(i)||(i={}),i.preventDefault=i.isNormalizer=i.allowClicks=!0,i.type||(i.type="wheel,touch"),i.debounce=!!i.debounce,i.id=i.id||"normalizer";var e=i,t=e.normalizeScrollX,r=e.momentum,n=e.allowNestedScroll,a=e.onRelease,s,o,l=fi(i.target)||Ci,c=ye.core.globals().ScrollSmoother,u=c&&c.get(),d=Ur&&(i.content&&fi(i.content)||u&&i.content!==!1&&!u.smooth()&&u.content()),h=en(l,Ot),m=en(l,ui),g=1,v=(Lt.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,f=0,p=ei(r)?function(){return r(s)}:function(){return r||2.8},S,_,b=Rf(l,i.type,!0,n),C=function(){return _=!1},T=ir,w=ir,P=function(){o=or(l,Ot),w=os(Ur?1:0,o),t&&(T=os(0,or(l,ui))),S=In},U=function(){d._gsap.y=Qa(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},x=function(){if(_){requestAnimationFrame(C);var F=Qa(s.deltaY/2),k=w(h.v-F);if(d&&k!==h.v+h.offset){h.offset=k-h.v;var X=Qa((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+X+", 0, 1)",d._gsap.y=X+"px",h.cacheID=tt.cache,br()}return!0}h.offset&&U(),_=!0},y,K,q,L,V=function(){P(),y.isActive()&&y.vars.scrollY>o&&(h()>o?y.progress(1)&&h(o):y.resetTo("scrollY",o))};return d&&ye.set(d,{y:"+=0"}),i.ignoreCheck=function(F){return Ur&&F.type==="touchmove"&&x()||g>1.05&&F.type!=="touchstart"||s.isGesturing||F.touches&&F.touches.length>1},i.onPress=function(){_=!1;var F=g;g=Qa((et.visualViewport&&et.visualViewport.scale||1)/v),y.pause(),F!==g&&ql(l,g>1.01?!0:t?!1:"x"),K=m(),q=h(),P(),S=In},i.onRelease=i.onGestureStart=function(F,k){if(h.offset&&U(),!k)L.restart(!0);else{tt.cache++;var X=p(),A,$;t&&(A=m(),$=A+X*.05*-F.velocityX/.227,X*=Sd(m,A,$,or(l,ui)),y.vars.scrollX=T($)),A=h(),$=A+X*.05*-F.velocityY/.227,X*=Sd(h,A,$,or(l,Ot)),y.vars.scrollY=w($),y.invalidate().duration(X).play(.01),(Ur&&y.vars.scrollY>=o||A>=o-1)&&ye.to({},{onUpdate:V,duration:X})}a&&a(F)},i.onWheel=function(){y._ts&&y.pause(),$t()-f>1e3&&(S=0,f=$t())},i.onChange=function(F,k,X,A,$){if(In!==S&&P(),k&&t&&m(T(A[2]===k?K+(F.startX-F.x):m()+k-A[1])),X){h.offset&&U();var ie=$[2]===X,pe=ie?q+F.startY-F.y:h()+X-$[1],fe=w(pe);ie&&pe!==fe&&(q+=fe-pe),h(fe)}(X||k)&&br()},i.onEnable=function(){ql(l,t?!1:"x"),Je.addEventListener("refresh",V),Gt(et,"resize",V),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=m.smooth=!1),b.enable()},i.onDisable=function(){ql(l,!0),Ht(et,"resize",V),Je.removeEventListener("refresh",V),b.kill()},i.lockAxis=i.lockAxis!==!1,s=new Lt(i),s.iOS=Ur,Ur&&!h()&&h(1),Ur&&ye.ticker.add(ir),L=s._dc,y=ye.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Af(h,h(),function(){return y.pause()})},onUpdate:br,onComplete:L.vars.onComplete}),s};Je.sort=function(i){if(ei(i))return Qe.sort(i);var e=et.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+et.innerHeight}),Qe.sort(i||function(t,r){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((r.vars.containerAnimation?1e6:r._sortY)+(r.vars.refreshPriority||0)*-1e6)})};Je.observe=function(i){return new Lt(i)};Je.normalizeScroll=function(i){if(typeof i>"u")return ai;if(i===!0&&ai)return ai.enable();if(i===!1){ai&&ai.kill(),ai=i;return}var e=i instanceof Lt?i:Hy(i);return ai&&ai.target===e.target&&ai.kill(),On(e.target)&&(ai=e),e};Je.core={_getVelocityProp:Ec,_inputObserver:Rf,_scrollers:tt,_proxies:lr,bridge:{ss:function(){ji||zn("scrollStart"),ji=$t()},ref:function(){return Jt}}};gf()&&ye.registerPlugin(Je);function Cf(i,e,t){return Math.max(i,Math.min(e,t))}class Gy{advance(e){var t;if(!this.isRunning)return;let r=!1;if(this.lerp)this.value=(n=this.value,a=this.to,s=60*this.lerp,o=e,function(l,c,u){return(1-u)*l+u*c}(n,a,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,r=!0);else{this.currentTime+=e;const l=Cf(0,this.currentTime/this.duration,1);r=l>=1;const c=r?1:this.easing(l);this.value=this.from+(this.to-this.from)*c}var n,a,s,o;(t=this.onUpdate)==null||t.call(this,this.value,r),r&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:r=.1,duration:n=1,easing:a=l=>l,onStart:s,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=r,this.duration=n,this.easing=a,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}}class Vy{constructor({wrapper:e,content:t,autoResize:r=!0,debounce:n=250}={}){Nr(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()}),Nr(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)}),Nr(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)}),this.wrapper=e,this.content=t,r&&(this.debouncedResize=function(a,s){let o;return function(){let l=arguments,c=this;clearTimeout(o),o=setTimeout(function(){a.apply(c,l)},s)}}(this.resize,n),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class Lf{constructor(){this.events={}}emit(e,...t){let r=this.events[e]||[];for(let n=0,a=r.length;n<a;n++)r[n](...t)}on(e,t){var r;return(r=this.events[e])!=null&&r.push(t)||(this.events[e]=[t]),()=>{var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(a=>t!==a)}}off(e,t){var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(n=>t!==n)}destroy(){this.events={}}}const Td=100/6;class Wy{constructor(e,{wheelMultiplier:t=1,touchMultiplier:r=1}){Nr(this,"onTouchStart",n=>{const{clientX:a,clientY:s}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=a,this.touchStart.y=s,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})}),Nr(this,"onTouchMove",n=>{const{clientX:a,clientY:s}=n.targetTouches?n.targetTouches[0]:n,o=-(a-this.touchStart.x)*this.touchMultiplier,l=-(s-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=a,this.touchStart.y=s,this.lastDelta={x:o,y:l},this.emitter.emit("scroll",{deltaX:o,deltaY:l,event:n})}),Nr(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})}),Nr(this,"onWheel",n=>{let{deltaX:a,deltaY:s,deltaMode:o}=n;a*=o===1?Td:o===2?this.windowWidth:1,s*=o===1?Td:o===2?this.windowHeight:1,a*=this.wheelMultiplier,s*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:a,deltaY:s,event:n})}),Nr(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}),this.element=e,this.wheelMultiplier=t,this.touchMultiplier=r,this.touchStart={x:null,y:null},this.emitter=new Lf,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class Xy{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:r=e,eventsTarget:n=r,smoothWheel:a=!0,syncTouch:s=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:l=35,duration:c,easing:u=_=>Math.min(1,1.001-Math.pow(2,-10*_)),lerp:d=!c&&.1,infinite:h=!1,orientation:m="vertical",gestureOrientation:g="vertical",touchMultiplier:v=1,wheelMultiplier:f=1,autoResize:p=!0,__experimental__naiveDimensions:S=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:_,deltaY:b,event:C})=>{if(C.ctrlKey)return;const T=C.type.includes("touch"),w=C.type.includes("wheel");if(this.options.syncTouch&&T&&C.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const P=_===0&&b===0,U=this.options.gestureOrientation==="vertical"&&b===0||this.options.gestureOrientation==="horizontal"&&_===0;if(P||U)return;let x=C.composedPath();if(x=x.slice(0,x.indexOf(this.rootElement)),x.find(L=>{var V,F,k,X,A;return((V=L.hasAttribute)===null||V===void 0?void 0:V.call(L,"data-lenis-prevent"))||T&&((F=L.hasAttribute)===null||F===void 0?void 0:F.call(L,"data-lenis-prevent-touch"))||w&&((k=L.hasAttribute)===null||k===void 0?void 0:k.call(L,"data-lenis-prevent-wheel"))||((X=L.classList)===null||X===void 0?void 0:X.contains("lenis"))&&!(!((A=L.classList)===null||A===void 0)&&A.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void C.preventDefault();if(this.isSmooth=this.options.syncTouch&&T||this.options.smoothWheel&&w,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();C.preventDefault();let y=b;this.options.gestureOrientation==="both"?y=Math.abs(b)>Math.abs(_)?b:_:this.options.gestureOrientation==="horizontal"&&(y=_);const K=T&&this.options.syncTouch,q=T&&C.type==="touchend"&&Math.abs(y)>5;q&&(y=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+y,Object.assign({programmatic:!1},K?{lerp:q?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const _=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-_),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:r,eventsTarget:n,smoothWheel:a,syncTouch:s,syncTouchLerp:o,touchInertiaMultiplier:l,duration:c,easing:u,lerp:d,infinite:h,gestureOrientation:g,orientation:m,touchMultiplier:v,wheelMultiplier:f,autoResize:p,__experimental__naiveDimensions:S},this.animate=new Gy,this.emitter=new Lf,this.dimensions=new Vy({wrapper:e,content:t,autoResize:p}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=s||a,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new Wy(n,{touchMultiplier:v,wheelMultiplier:f}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:r=!1,lock:n=!1,duration:a=this.options.duration,easing:s=this.options.easing,lerp:o=!a&&this.options.lerp,onComplete:l,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let d;if(typeof e=="string"?d=document.querySelector(e):e!=null&&e.nodeType&&(d=e),d){if(this.options.wrapper!==window){const m=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?m.left:m.top}const h=d.getBoundingClientRect();e=(this.isHorizontal?h.left:h.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=Cf(0,e,this.limit),r)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:a,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(d,h)=>{this.isScrolling=!0,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),h||this.emit(),h&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}fa.registerPlugin(Je);function qy(i){const e=new Xy({duration:1.2,easing:n=>Math.min(1,1.001-Math.pow(2,-10*n)),direction:"vertical",gestureDirection:"vertical",smoothTouch:!1,touchMultiplier:2});e.on("scroll",n=>{if(Je.update(),i&&typeof i.setScrollOffset=="function"){const a=n.scroll||window.scrollY||0;i.setScrollOffset(a)}}),fa.ticker.add(n=>{e.raf(n*1e3)}),fa.ticker.lagSmoothing(0);const t=()=>{i&&typeof i.setScrollOffset=="function"&&i.setScrollOffset(window.scrollY||0)};window.addEventListener("scroll",t,{passive:!0}),Je.create({trigger:"#home",start:"top top",end:"bottom 20%",onLeave:()=>{i&&(i.scrollState.hidden=!0)},onEnterBack:()=>{i&&(i.scrollState.hidden=!1,i.scrollState.destruction=0)}});const r=(n,a)=>{const s=document.querySelectorAll(n);s.length>0&&fa.from(s,{scrollTrigger:{trigger:a,start:"top 85%",toggleActions:"play none none reverse",onEnter:()=>fa.to(s,{opacity:1,y:0,duration:.6,stagger:.1,ease:"power2.out"})},y:30,opacity:0,duration:.6,stagger:.1,ease:"power2.out",clearProps:"transform"})};return r("#certificates .group","#certificates"),r("#experiences .group","#experiences"),r("#education .group","#education"),r("#skills .group","#skills"),setTimeout(()=>{Je.refresh()},100),{lenis:e}}const sa=[{id:1,title:"CityPulse",tag:"CIVIC WEB APP",description:"A map-based civic reporting platform that empowers citizens to report issues, track city problems, and stay informed through automated local news insights.",github:"https://github.com/Rasmitimilsina/CityPulse",demo:"https://city-pulse-pink.vercel.app",techLeft:"TypeScript · React",techRight:"Mapbox / Maps",theme:"cyan",icon:"🗺️"},{id:2,title:"Jarvis Voice Assistant",tag:"VOICE AI AUTOMATION",description:'Python-based voice-controlled assistant inspired by Jarvis from Iron Man. Recognizes wake word ("Jarvis"), processes voice commands, and automates web and desktop tasks.',github:"https://github.com/Rasmitimilsina/Jarvis-voice-assistant",demo:null,techLeft:"Python",techRight:"speech_recog · pyttsx3",theme:"cyan",icon:"🎙️"},{id:3,title:"Gym Membership System",tag:"DESKTOP OOP APP",description:"A Java-based application that manages gym members, memberships, attendance, and payments using OOP principles and a GUI (AWT & Swing) with file-based data storage.",github:"https://github.com/Rasmitimilsina/Gym-Membership-System",demo:null,techLeft:"Java",techRight:"AWT / Swing · File Storage",theme:"purple",icon:"🏋️"},{id:4,title:"WeCare Skincare System",tag:"RETAIL & INVENTORY",description:"Python inventory and sales system for skincare products with automated sales processing ('Buy 3 Get 1 Free'), invoice generation, and transaction file handling.",github:"https://github.com/Rasmitimilsina/WeCare-Skin-Care-Product-Sale-System",demo:null,techLeft:"Python",techRight:"File Handling · Retail",theme:"pink",icon:"🛍️"},{id:5,title:"Nepal Trek Live",tag:"TRAVEL PLATFORM",description:"Interactive web application discovering trekking routes across Nepal with route mapping, elevation insights, and trekking recommendations.",github:"https://github.com/Rasmitimilsina/nepal-Trek-live",demo:null,techLeft:"TypeScript",techRight:"Vite · Trekking Maps",theme:"cyan",icon:"🏔️"},{id:6,title:"Lumo Mental Health",tag:"DIGITAL WELLNESS",description:"Digital mental health companion platform designed for mood tracking, guided self-care reflections, mindfulness tracking, and supportive AI interactions.",github:"https://github.com/Rasmitimilsina/Lumo-mental-health",demo:null,techLeft:"TypeScript · React",techRight:"Digital Health",theme:"purple",icon:"🧘"},{id:7,title:"AI Playground & Code Tutor",tag:"AI & MACHINE LEARNING",description:"TypeScript & React AI experiment hub for smart code explanations, prompt engineering exploration, debugging assistance, and AI interactions.",github:"https://github.com/Rasmitimilsina/AI-",demo:null,techLeft:"TypeScript · React",techRight:"AI Model Integration",theme:"purple",icon:"🤖"}];function jy(){if(!document.getElementById("flashcard-container"))return;let i=0;const e=document.getElementById("fc-counter"),t=document.getElementById("fc-progress"),r=document.getElementById("fc-card-slot"),n=()=>({glass:"glass-card",tagText:"text-zinc-300",titleHover:"group-hover:text-white",footerText:"text-zinc-400",githubBg:"bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black"}),a=(o=1)=>{if(!r)return;const l=sa[i],c=n(l.theme);if(e&&(e.textContent=`CARD ${String(i+1).padStart(2,"0")} / ${String(sa.length).padStart(2,"0")}`),t){const u=(i+1)/sa.length*100;t.style.width=`${u}%`}r.style.opacity="0",r.style.transform="translateY(15px) scale(0.98)",setTimeout(()=>{r.innerHTML=`
        <div class="group p-8 sm:p-12 rounded-3xl ${c.glass} relative overflow-hidden transition-all duration-500 border border-white/15 shadow-2xl flex flex-col justify-between min-h-[380px] max-w-3xl mx-auto select-none hover:border-white/40">
          <!-- Background Ambient Glow -->
          <div class="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-white/5 blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-500"></div>

          <div>
            <!-- Header Row -->
            <div class="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div class="flex items-center gap-3">
                <span class="text-2xl">${l.icon}</span>
                <span class="text-xs font-mono ${c.tagText} font-bold tracking-wider">[ ${l.tag} ]</span>
              </div>

              <div class="flex items-center gap-2">
                ${l.demo?`
                  <a href="${l.demo}" target="_blank" onclick="event.stopPropagation()" class="px-3 py-1.5 rounded-full text-xs font-mono bg-white text-black font-bold uppercase hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center gap-1.5 cursor-hover">
                    <span>Live Demo</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                `:""}

                <a href="${l.github}" target="_blank" onclick="event.stopPropagation()" class="px-4 py-1.5 rounded-full text-xs font-mono ${c.githubBg} uppercase transition-all duration-300 font-bold flex items-center gap-1.5 cursor-hover">
                  <span>GitHub Repo</span>
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            <!-- Title & Description -->
            <h3 class="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4 ${c.titleHover} transition-colors tracking-tight">
              ${l.title}
            </h3>
            <p class="text-sm sm:text-base text-zinc-200 leading-relaxed font-light mb-8">
              ${l.description}
            </p>
          </div>

          <!-- Footer Metadata -->
          <div class="pt-6 border-t border-white/10 flex justify-between items-center text-xs font-mono ${c.footerText}">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>${l.techLeft}</span>
            </div>
            <span class="bg-white/5 px-3 py-1 rounded-full border border-white/10 text-zinc-300">${l.techRight}</span>
          </div>
        </div>
      `,r.style.opacity="1",r.style.transform="translateY(0) scale(1)"},150)},s=()=>{i=(i+1)%sa.length,a(1)};r&&(r.addEventListener("dblclick",o=>{o.target.closest("a")||s()}),r.addEventListener("click",o=>{o.target.closest("a")||s()})),document.addEventListener("keydown",o=>{const l=document.getElementById("projects");if(!l)return;const c=l.getBoundingClientRect();c.top<window.innerHeight&&c.bottom>0&&(o.key==="ArrowRight"||o.key==="Space"?s():o.key==="ArrowLeft"&&(i=(i-1+sa.length)%sa.length,a(-1)))}),a(1)}document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("webgl-canvas"),e=new rM(i);qy(e),jy();const t=document.getElementById("hero-badge-text"),r=document.getElementById("hero-title"),n=document.getElementById("hero-desc");let a=!1;const s=y=>{a=y!==void 0?y:e.scrollState.isFlipped,r&&n&&t&&(r.style.opacity="0",n.style.opacity="0",t.parentElement.style.opacity="0",setTimeout(()=>{a?(t.innerText="ABOUT RASMI TIMILSINA",r.innerHTML="ABOUT<br/>ME.",n.innerHTML='<span class="block mb-2">I’m a Computing student with a strong interest in <strong class="text-white font-bold">Data Analytics and Artificial Intelligence</strong>. I enjoy working with data, discovering meaningful insights, and using technology to solve real-world problems.</span><span class="block mb-2">I’m continuously developing my skills in <strong class="text-white font-bold">Python, SQL, Power BI, data visualization, and AI</strong>, while working on projects that allow me to turn ideas and data into practical solutions.</span><span class="block">I’m curious, eager to learn, and passionate about growing as a <strong class="text-white font-bold">Data Analyst and AI enthusiast</strong>.</span>'):(t.innerText="Data Analyst & AI Learner",r.innerHTML="RASMI<br/>TIMILSINA.",n.innerText="Aspiring Data Analyst passionate about AI, data-driven insights, and solving real-world problems."),r.style.opacity="1",n.style.opacity="1",t.parentElement.style.opacity="1"},250))};e.onPictureClick=y=>{s(y)};const o=document.querySelectorAll(".nav-item"),l=document.querySelectorAll("section[id]"),c=()=>{let y="home";const K=window.scrollY+250;l.forEach(q=>{const L=q.offsetTop,V=q.offsetHeight;K>=L&&K<L+V&&(y=q.getAttribute("id"))}),o.forEach(q=>{q.classList.remove("text-white","font-extrabold","border-b","border-white"),q.classList.add("text-zinc-400"),q.getAttribute("href")===`#${y}`&&(q.classList.remove("text-zinc-400"),q.classList.add("text-white","font-extrabold","border-b","border-white"))})};window.addEventListener("scroll",c,{passive:!0}),c();const u=document.getElementById("mobile-menu-btn"),d=document.getElementById("close-mobile-menu"),h=document.getElementById("mobile-menu"),m=document.querySelectorAll(".mobile-nav-link"),g=y=>{y&&y.stopPropagation(),h&&(h.classList.remove("opacity-0","pointer-events-none"),h.classList.add("opacity-100","pointer-events-auto"))},v=y=>{y&&y.stopPropagation(),h&&(h.classList.remove("opacity-100","pointer-events-auto"),h.classList.add("opacity-0","pointer-events-none"))},f=y=>{y&&y.stopPropagation(),h&&(h.classList.contains("opacity-100")?v(y):g(y))};u&&u.addEventListener("click",f),d&&d.addEventListener("click",v),m.forEach(y=>{y.addEventListener("click",v)});const p=document.getElementById("welcome-screen"),S=document.getElementById("page-content"),_=document.getElementById("main-header");let b=!1;const C=()=>{b||(b=!0,p&&(p.classList.add("opacity-0","pointer-events-none","scale-105"),setTimeout(()=>p.remove(),1e3)),S&&(S.classList.remove("opacity-0","blur-md","scale-95"),S.classList.add("opacity-100","scale-100")),_&&(_.classList.remove("opacity-0","pointer-events-none"),_.classList.add("opacity-100","pointer-events-auto")))};p&&(p.addEventListener("click",C),setTimeout(C,1800));const T=document.getElementById("portfolio-contact-form"),w=document.getElementById("thank-you-modal"),P=document.getElementById("close-thank-you-modal"),U=document.getElementById("contact-submit-btn");T&&T.addEventListener("submit",async y=>{y.preventDefault(),U&&(U.disabled=!0,U.innerText="SENDING MESSAGE... ⏳");const K=new FormData(T),q=()=>{if(T.reset(),w){w.classList.remove("opacity-0","pointer-events-none"),w.classList.add("opacity-100","pointer-events-auto");const L=w.querySelector("div");L&&(L.classList.remove("scale-95"),L.classList.add("scale-100"))}};try{(await fetch("https://formsubmit.co/ajax/timilsinarasmi0@gmail.com",{method:"POST",body:K,headers:{Accept:"application/json"}})).ok,q()}catch(L){console.log("Contact Form Submit Notification:",L),q()}finally{U&&(U.disabled=!1,U.innerText="SEND MESSAGE DIRECTLY TO RASMI 🚀")}});const x=()=>{w&&(w.classList.remove("opacity-100","pointer-events-auto"),w.classList.add("opacity-0","pointer-events-none"))};P&&P.addEventListener("click",x),w&&w.addEventListener("click",y=>{y.target===w&&x()}),console.log("Rasmi Timilsina 3D Portfolio Initialized Successfully.")});
