(function(g,d){var t,s,x,u,w,B,y,A,C;t=function(z){z.a={r:"edge-test.aws.simplereach.com",oa:"d8rk54i4mohrb.cloudfront.net/staging",Ia:"/n",lb:"/t",wa:"/event",ma:"/pixel?bad=true&error=",Fa:"/iframe.html",pa:"/x",ia:"000000000000000000000000",ha:"SPR-ERROR: ",va:"100 - Missing url",eb:"__reach_config",Cb:"no_slide",Fb:"slide_active",A:"ref_url",ba:"page_url",Gb:"user_id",Ga:"ignore_errors",T:"cache_buster",fa:"__srret",ja:"__srui",D:"0",aa:"1",Ha:"img",Ua:"1px",width:"width",Za:d.location.protocol,d:"undefined",error:"error",info:"info",
u:"SPR_DEBUG",Q:"//",R:"string",referrer:"referrer",uid:"uid",b:"callback",k:"jsonp",url:"url",t:"pid",ga:"s",$a:"r",kb:"t",W:"e",x:"x",Ra:"n",g:"authors",h:"channels",m:"tags",v:"date",J:"inframe",s:"iframe",ab:"rd",Y:"fb",qa:"de",Na:"li",ob:"tw",Va:"pi",Ib:"ve",Kb:"vp",Hb:"vc",Jb:"vf",Mb:"vu",Lb:"vt",xa:"graph.facebook.com",ra:"feeds.delicious.com",pb:"urls.api.twitter.com",Oa:"www.linkedin.com",Wa:"partners-api.pinterest.com",bb:"www.reddit.com",ya:"/fql",cb:"/api/info.json",sa:"/v2/json/urlinfo/data",
qb:"/1/urls/count.json",Pa:"/countserv/count/share",Xa:"/v1/urls/count.json",za:"SELECT url,total_count,share_count,comment_count,like_count,",Aa:'click_count,commentsbox_count FROM link_stat WHERE url in ("',Ba:'")',zb:"mediaComplete",sb:"brightcove",hidden:"hidden",Nb:"visibilitychange",mozHidden:"mozHidden",Ab:"mozvisibilitychange",msHidden:"msHidden",Bb:"msvisibilitychange",webkitHidden:"webkitHidden",Ob:"webkitvisibilitychange"};return z}({});s=function(d,p){var l=d.a;p.a={gb:function(){return Math.floor(8675309*
Math.random())},N:function(b){return Array.isArray?Array.isArray(b):"[object Array]"===Object.prototype.toString.call(b)},log:function(b){g.console&&console.log(b)},yb:function(b){return"[object String]"===Object.prototype.toString.call(b)},P:function(b){var h={},a;for(a in b)b.hasOwnProperty(a)&&(h[a]=b[a]);return h},Qa:function(b,h){for(var a in h)h.hasOwnProperty(a)&&(b[a]=h[a])},F:function(b){typeof b===l.R&&(b=b.split(","));if(this.N(b)){for(var h=0;h<b.length;h+=1)typeof b[h]===l.R&&(b[h]=b[h].replace(/^\s*/,
"").replace(/\s*$/,"").replace(/\|/,""));return b.join("|")}},w:function(){}};return p}(t,{});x=function(d,p,l){var b=d.a,h=p.a;l.a={I:!1,info:h.w,error:h.w,c:function(){g[b.u]&&(this.I=!0,g[b.u][b.info]&&(this[b.info]=g[b.u][b.info]),g[b.u][b.error]&&(this[b.error]=g[b.u][b.error]))},reset:function(){this.I=!1;this[b.info]=h.w;this[b.error]=h.w}};return l}(t,s,{});u=function(z,p,l){var b=z.a,h=p.a;l.a={D:0,p:{x:0,y:0},M:!0,c:function(){function a(){e.M=d[k]?!1:!0}function q(){e.flush();g.removeEventListener("DOMContentLoaded",
q,!1)}function f(){/loaded|interactive|complete/.test(d.readyState)&&(d.detachEvent("onreadystatechange",f),l&&(l=!1,e.flush()))}var e=this,k,h;this.Ta(g,"mousemove",function(a){e.p={x:a.clientX,y:a.clientY}});typeof d.hidden!==b.d?(k="hidden",h="visibilitychange"):typeof d.mozHidden!==b.d?(k="mozHidden",h="mozvisibilitychange"):typeof d.msHidden!==b.d?(k="msHidden",h="msvisibilitychange"):typeof d.webkitHidden!==b.d&&(k="webkitHidden",h="webkitvisibilitychange");typeof d.addEventListener!==b.d&&
typeof k!==b.d&&d.addEventListener(h,a,!1);var l=!0;g.addEventListener&&g.addEventListener("DOMContentLoaded",q,!1);d.attachEvent&&d.attachEvent("onreadystatechange",f)},S:function(a,q){var f=d.createElement("iframe"),e=d.body;f.setAttribute("name","spr");f.src=a;f.setAttribute("height","1");f.setAttribute("width","1");f.setAttribute("visible","false");f.setAttribute("id","spr-iframe-"+q);f.style.display="none";h[b.info](a);e||(e=this.o("BODY")[0]);e||(e=this.o("HEAD")[0]);e.appendChild(f);return f},
ea:function(a){var b=d.body,f=this.o("BODY")[0],e=this.o("HEAD")[0];b&&b.contains(a)?b.removeChild(a):f&&f.contains(a)?f.removeChild(a):e&&e.contains(a)&&e.removeChild(a)},la:function(a){var q=this,f=d.createElement("script");f.type="text/javascript";f.setAttribute("async",!0);f.setAttribute("name","spr");f.setAttribute("id","spr-script");f.src=a;h[b.info](a);this.$(function(){setTimeout(function(){q.o("HEAD")[0].appendChild(f)},1)});return f},l:[],ready:/loaded|interactive|complete/.test(d.readyState),
flush:function(){var a=this.l.shift();for(this.ready=!0;a;)a(),a=this.l.shift()},$:function(a){this.ready?(this.l.push(a),this.flush()):d.documentElement.doScroll?g.self===g.top?function(){if(!d.uniqueID&&d.expando)return this.l.push(a);try{d.documentElement.doScroll("left"),a()}catch(b){setTimeout(arguments.callee,0)}}():this.l.push(a):this.l.push(a)},Ta:function(a,b,f){a.addEventListener?a.addEventListener(b,f,!1):a.attachEvent("on"+b,f);return a},Db:function(a,b,f){a.addEventListener?a.removeEventListener(b,
f,!1):a.detachEvent("on"+b,f);return a},B:function(){var a=0,a=g.pageYOffset?g.pageYOffset:d.documentElement?d.documentElement.scrollTop:0;return a-this.D},o:function(a){var b=[],f,e=0,k;if(!a)return[];if("string"!==typeof a)return[a];switch(a.charAt(0)){case "#":b.push(d.getElementById(a.substring(1)));break;case ".":f=d.getElementsByTagName("*");for(k=" "+a.substring(1)+" ";e<f.length;e+=1)a=(" "+f[e].className+" ").replace(/[\n\t\r]/g," "),-1<a.indexOf(k)&&b.push(f[e]);break;default:b=d.getElementsByTagName(a)}return b}};
return l}(t,x,{});w=function(d,g,l){var b=d.a,h=g.a;l.a={j:function(a,h){var f=[];if(b.N(a))for(var e=0,k;e<a.length;e+=1)k=a[e],/\[\]$/.test(h)?f.push(encodeURIComponent(h)+"="+encodeURIComponent(k)):f.push(this.j(k,h+"["+("object"===typeof k?e:"")+"]"));else if("object"!==typeof a||null===a||"nodeType"in a)f.push(encodeURIComponent(h)+"="+encodeURIComponent(a));else for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(h?f.push(this.j(a[e],h+"["+e+"]")):f.push(this.j(a[e],e)));return f.join("&")},
G:function(a){var d={},f=0,e={"true":!0,"false":!1,"null":null};for(a=a.replace(/\+/g," ").split("&");f<a.length;f+=1){var k=a[f].split("="),r=decodeURIComponent(k[0]),l=d,n=0,g=r.split("]["),m=g.length-1;/\[/.test(g[0])&&/\]$/.test(g[m])?(g[m]=g[m].replace(/\]$/,""),g=g.shift().split("[").concat(g),m=g.length-1):m=0;if(2===k.length)if(k=(k=decodeURIComponent(k[1]))&&!isNaN(k)?+k:k===h.d?void 0:void 0!==e[k]?e[k]:k,m)for(;n<=m;n+=1)r=""===g[n]?l.length:g[n],l=l[r]=n<m?l[r]||(g[n+1]&&isNaN(g[n+1])?
{}:[]):k;else b.N(d[r])?d[r].push(k):d[r]=void 0!==d[r]?[d[r],k]:k;else r&&(d[r]=void 0)}return d}};return l}(s,t,{});B=function(g,p){p.a={ca:{},Z:function(g){var b=d.cookie||"",h=this.ca[g];h||(h=g.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g,"\\$1"),h=new RegExp("(?:^|;)\\s?"+h+"=(.*?)(?:;|$)","i"),this.ca[g]=h);return(g=b.match(h))&&decodeURIComponent(g[1])},O:function(g,b,h){var a="";h&&(a="; expires="+h.toGMTString());d.cookie=g+"="+b+a+"; path=/"},vb:function(d){this.O(d,"",new Date(1982,5,13))}};
return p}(w,{});y=function(d,p,l,b){var h=d.a,a=p.a,q=l.a;b.a={callbacks:{},k:function(b,e,k,d,l){d=d||function(){};l||(l="cb");var n="cb"+q.gb(),p=this;k[l]="SPR.API.callbacks."+n;l=g.location.protocol+"//";"file://"===l&&(l="http://");k=h.j(k);var m=a.la(l+b+e+"?"+k);p.callbacks[n]=function(a){setTimeout(function(){m.parentNode.removeChild(m)},0);d(a);try{delete p.callbacks[n]}catch(b){p.callbacks[n]=null}}}};return b}(w,u,s,{});A=function(z,p,l,b){function h(a,b){this.element=a;this.Ya=b;this.count=
0}var a=z.a;b.a={X:!1,xb:!1,url:null,da:null,ka:[],c:function(){},L:function(){return!1},ub:function(){function a(){return!(this.element.paused||this.element.ended)}var b,e=d.getElementsByTagName("video");if(e.length)for(this.X=!0,b=0;b<e.length;b+=1){var k=e[b];v=new h(k,k);v.da="HTML5";v.url=k.currentSrc;v.L=a;this.ka.push(v)}},tb:function(){if(typeof g.brightcove!==a.d){var b,f,e,k,l,p=d.getElementsByTagName("object"),n=function(){return this.Ya.isPlaying()};for(k=0;k<p.length;k+=1)l=p[k],l.data&&
l.data.match(/brightcove/)&&l.id&&(b=l.id,(e=g.brightcove.getExperience(b))?f=e.getModule("videoPlayer"):(e=g.brightcove.api.getExperience(b))&&(f=e.getModule("videoPlayer")),f&&(e=new h(l,f),e.da="Brightcove",b=f.getCurrentVideo(),e.url=b.FLVFullLengthURL,e.L=n,this.X=!0,this.ka.push(e)))}}};return b}(t,s,u,{});C=function(d,g,l,b){var h=d.a,a=g.a,q=l.a;b.a={Sa:[{name:a.Y,e:a.xa,f:a.ya,b:a.b},{name:a.qa,e:a.ra,f:a.sa,b:a.b},{name:a.Na,e:a.Oa,f:a.Pa,b:a.b},{name:a.Va,e:a.Wa,f:a.Xa,b:a.b},{name:a.ob,
e:a.pb,f:a.qb,b:a.b},{name:a.ab,e:a.bb,f:a.cb,b:a.k}],fb:function(b,e){return b===a.Y?{q:a.za+a.Aa+e+a.Ba}:{url:e}},jb:function(b,e){return function(d){d={event:a.ga,url:b.url,cid:b.id,pid:b.pid,sn:b.name,data:d};q.Qa(d,e);h.k(a.r,a.wa,d)}},i:function(a,b){for(var d=this.Sa,g=null,l=0;l<d.length;l+=1){var g=d[l],n=q.P(a);n.name=g.name;a[g.name]&&h.k(g.e,g.f,this.fb(g.name,n.url),this.jb(n,b),g.b)}}};return b}(y,t,s,{});t=function(d,g,l,b,h,a,q){var f=d.a;d=g.a;q.a={Reach:{collect:function(a){f.i(a)}},
QS:{decode:d.G},debug:a.a,API:b.a,collect:function(a){f.i(a)},decode:d.G,c:function(){f.c()},iframeCollect:function(a){f.Ea(a)}};return q}(function(t,p,l,b,h,a,q,f,e,k){var r=t.a,s=p.a,n=l.a,u=b.a,m=h.a,w=a.a,x=q.a,c=f.a,y=e.a;k.a={wb:{},U:{},Eb:!1,H:!0,n:0,C:5E3,mb:12E5,c:function(){try{m.c(),s.c(),this.K=(this.K=r.Z(c.fa))||c.D,r.O(c.fa,c.aa,new Date(2042,5,13)),this.U=g[c.eb],this.i(this.U)}catch(a){m.$(function(){var b=d.createElement(c.Ha);b.src=c.Za+c.Q+c.r+c.ma+a.message;b.setAttribute(c.width,
c.Ua);d.body.appendChild(b)})}},na:function(a){var b;options=n.P(a);options[c.g]&&(options[c.g]=n.F(options[c.g]));options[c.h]&&(options[c.h]=n.F(options[c.h]));options[c.m]&&(options[c.m]=n.F(options[c.m]));options[c.v]&&typeof options[c.v]!==c.R&&(options[c.v]=options[c.v].toString());options[c.referrer]=a[c.J]?options[c.referrer]:options[c.referrer]||d.referrer;options[c.ba]=options[c.ba]||g.location.toString();options[c.uid]?options[c.uid]=options[c.uid]:(b=this.Da())&&(options[c.uid]=b);options[c.url]&&
0===options[c.url].indexOf("http%3")&&(options[c.url]=decodeURIComponent(options[c.url]),a[c.url]=options[c.url]);return options},Ea:function(a){a=u.G(a);a[c.g]&&(a[c.g]=a[c.g].split("|"));a.h&&(a[c.h]=a[c.h].split("|"));a[c.m]&&(a[c.m]=a[c.m].split("|"));a[c.s]=!1;a[c.J]=!0;this.i(a)},i:function(a){var b={};a[c.Ga]||s.I||(s[c.error]=n.log);if(a[c.url])this.rb(),b=this.na(a),a[c.s]?this.ua(b):this.hb(b),a[c.J]||(this.ta(b),this.nb(b));else s[c.error](c.ha+c.va)},ua:function(a){a[c.A]=a[c.A]||d.referrer;
a[c.T]=(new Date).getTime();a=u.j(a);this.s&&m.ea(this.s);this.s=m.S(c.Q+c.oa+c.Fa+"?"+a,c.Ra)},ta:function(a){a[c.A]=a[c.A]||d.referrer;a[c.T]=(new Date).getTime();a=u.j(a);this.V&&m.ea(this.V);this.V=m.S(c.Q+c.r+c.pa+"?"+a,c.x)},hb:function(a){var b=this;0===a[c.t]&&(a[c.t]=c.ia);w.k(c.r,c.Ia,a,function(d){if(d.error)s[c.error](c.ha+d.error.code+" - "+d.error.message);else d.uid&&b.ib(d.uid),x.i(d,a)})},Ja:function(a){return a.L()?!0:!0!==this.Ca?this.Ca=!0:this.La!==m.p.x||this.Ma!==m.p.y||this.Ka!==
m.B()?!0:!1},rb:function(){m.D=m.B();clearInterval(this.interval)},nb:function(a){var b=this,d=0,f=!1,g=0,e;b.interval=setInterval(function(){b.Ja(y)?(b.H=!0,g=d=0,f=!1):(b.H=!1,d+=b.C);b.n+=b.C;d>=b.mb||!m.M?(f=!0,b.n=0):m.M&&(f=!1);e=n.P(a);e[c.$a]=b.K===c.aa;e[c.kb]=b.n;e[c.W]=b.H?5E3:0;e[c.ga]=m.B();0===e[c.t]&&(e[c.t]=c.ia);!f&&e[c.url]&&e[c.t]&&g<=d&&(g=0===e[c.W]?d+b.n+b.C:0,b.n=0,w.k(c.r,c.lb,e));b.La=m.p.x;b.Ma=m.p.y;b.Ka=m.B()},b.C)},Da:function(){return r.Z(c.ja)},ib:function(a){r.O(c.ja,
a,new Date(2042,5,13))}};return k}(B,x,s,w,u,y,C,t,A,{}),w,u,y,A,x,{});g.SPR=t.a;g.SPR.c()})(window,document);
