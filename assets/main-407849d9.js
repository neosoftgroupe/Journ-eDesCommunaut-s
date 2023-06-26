class E{constructor(e){this.properties=e??[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const I="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class te{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new E(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function U(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(I+"/configuration.html"+e)}async function ne(t,e){const n=await WA.room.getTiledMap(),r=new Map;return H(n.layers,r,t,e),r}function H(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(n&&o.name!==n||r&&!r.includes(s.name))continue;e.set(s.name,new te(s))}}else o.type==="group"&&H(o.layers,e,n,r)}let x;async function T(){return x===void 0&&(x=re()),x}async function re(){return oe(await WA.room.getTiledMap())}function oe(t){const e=new Map;return Y(t.layers,"",e),e}function Y(t,e,n){for(const r of t)r.type==="group"?Y(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}async function se(){const t=await T(),e=[];for(const n of t.values())if(n.type==="objectgroup")for(const r of n.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function ae(t){let e=1/0,n=1/0,r=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<t.height;a++)for(let i=0;i<t.width;i++)s[i+a*t.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),n=Math.min(n,a),r=Math.max(r,a));return{top:n,left:e,right:o+1,bottom:r+1}}function X(t){let e=1/0,n=1/0,r=0,o=0;for(const s of t){const a=ae(s);a.left<e&&(e=a.left),a.top<n&&(n=a.top),a.right>o&&(o=a.right),a.bottom>r&&(r=a.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ie=Object.prototype.toString,P=Array.isArray||function(e){return ie.call(e)==="[object Array]"};function q(t){return typeof t=="function"}function ce(t){return P(t)?"array":typeof t}function j(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function D(t,e){return t!=null&&typeof t=="object"&&e in t}function ue(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var le=RegExp.prototype.test;function pe(t,e){return le.call(t,e)}var fe=/\S/;function de(t){return!pe(fe,t)}var he={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function ge(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return he[n]})}var ye=/\s*/,me=/\s+/,_=/\s*=/,be=/\s*\}/,ve=/#|\^|\/|>|\{|&|=|!/;function Ae(t,e){if(!t)return[];var n=!1,r=[],o=[],s=[],a=!1,i=!1,c="",l=0;function p(){if(a&&!i)for(;s.length;)delete o[s.pop()];else s=[];a=!1,i=!1}var y,b,B;function C(W){if(typeof W=="string"&&(W=W.split(me,2)),!P(W)||W.length!==2)throw new Error("Invalid tags: "+W);y=new RegExp(j(W[0])+"\\s*"),b=new RegExp("\\s*"+j(W[1])),B=new RegExp("\\s*"+j("}"+W[1]))}C(e||g.tags);for(var u=new k(t),v,d,m,L,R,w;!u.eos();){if(v=u.pos,m=u.scanUntil(y),m)for(var V=0,ee=m.length;V<ee;++V)L=m.charAt(V),de(L)?(s.push(o.length),c+=L):(i=!0,n=!0,c+=" "),o.push(["text",L,v,v+1]),v+=1,L===`
`&&(p(),c="",l=0,n=!1);if(!u.scan(y))break;if(a=!0,d=u.scan(ve)||"name",u.scan(ye),d==="="?(m=u.scanUntil(_),u.scan(_),u.scanUntil(b)):d==="{"?(m=u.scanUntil(B),u.scan(be),u.scanUntil(b),d="&"):m=u.scanUntil(b),!u.scan(b))throw new Error("Unclosed tag at "+u.pos);if(d==">"?R=[d,m,v,u.pos,c,l,n]:R=[d,m,v,u.pos],l++,o.push(R),d==="#"||d==="^")r.push(R);else if(d==="/"){if(w=r.pop(),!w)throw new Error('Unopened section "'+m+'" at '+v);if(w[1]!==m)throw new Error('Unclosed section "'+w[1]+'" at '+v)}else d==="name"||d==="{"||d==="&"?i=!0:d==="="&&C(m)}if(p(),w=r.pop(),w)throw new Error('Unclosed section "'+w[1]+'" at '+u.pos);return we(We(o))}function We(t){for(var e=[],n,r,o=0,s=t.length;o<s;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function we(t){for(var e=[],n=e,r=[],o,s,a=0,i=t.length;a<i;++a)switch(o=t[a],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function k(t){this.string=t,this.tail=t,this.pos=0}k.prototype.eos=function(){return this.tail===""};k.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};k.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function S(t,e){this.view=t,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,s,a,i,c=!1;o;){if(e.indexOf(".")>0)for(s=o.view,a=e.split("."),i=0;s!=null&&i<a.length;)i===a.length-1&&(c=D(s,a[i])||ue(s,a[i])),s=s[a[i++]];else s=o.view[e],c=D(o.view,e);if(c){r=s;break}o=o.parent}n[e]=r}return q(r)&&(r=r.call(this.view)),r};function f(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}f.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};f.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||g.tags).join(":"),s=typeof r<"u",a=s?r.get(o):void 0;return a==null&&(a=Ae(e,n),s&&r.set(o,a)),a};f.prototype.render=function(e,n,r,o){var s=this.getConfigTags(o),a=this.parse(e,s),i=n instanceof S?n:new S(n,void 0);return this.renderTokens(a,i,r,e,o)};f.prototype.renderTokens=function(e,n,r,o,s){for(var a="",i,c,l,p=0,y=e.length;p<y;++p)l=void 0,i=e[p],c=i[0],c==="#"?l=this.renderSection(i,n,r,o,s):c==="^"?l=this.renderInverted(i,n,r,o,s):c===">"?l=this.renderPartial(i,n,r,s):c==="&"?l=this.unescapedValue(i,n):c==="name"?l=this.escapedValue(i,n,s):c==="text"&&(l=this.rawValue(i)),l!==void 0&&(a+=l);return a};f.prototype.renderSection=function(e,n,r,o,s){var a=this,i="",c=n.lookup(e[1]);function l(b){return a.render(b,n,r,s)}if(c){if(P(c))for(var p=0,y=c.length;p<y;++p)i+=this.renderTokens(e[4],n.push(c[p]),r,o,s);else if(typeof c=="object"||typeof c=="string"||typeof c=="number")i+=this.renderTokens(e[4],n.push(c),r,o,s);else if(q(c)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(n.view,o.slice(e[3],e[5]),l),c!=null&&(i+=c)}else i+=this.renderTokens(e[4],n,r,o,s);return i}};f.prototype.renderInverted=function(e,n,r,o,s){var a=n.lookup(e[1]);if(!a||P(a)&&a.length===0)return this.renderTokens(e[4],n,r,o,s)};f.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),s=e.split(`
`),a=0;a<s.length;a++)s[a].length&&(a>0||!r)&&(s[a]=o+s[a]);return s.join(`
`)};f.prototype.renderPartial=function(e,n,r,o){if(r){var s=this.getConfigTags(o),a=q(r)?r(e[1]):r[e[1]];if(a!=null){var i=e[6],c=e[5],l=e[4],p=a;c==0&&l&&(p=this.indentPartial(a,l,i));var y=this.parse(p,s);return this.renderTokens(y,n,r,p,o)}}};f.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};f.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||g.escape,s=n.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===g.escape?String(s):o(s)};f.prototype.rawValue=function(e){return e[1]};f.prototype.getConfigTags=function(e){return P(e)?e:e&&typeof e=="object"?e.tags:void 0};f.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!P(e))return e.escape};var g={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){M.templateCache=t},get templateCache(){return M.templateCache}},M=new f;g.clearCache=function(){return M.clearCache()};g.parse=function(e,n){return M.parse(e,n)};g.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ce(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,n,r,o)};g.escape=ge;g.Scanner=k;g.Context=S;g.Writer=f;class Z{constructor(e,n){this.template=e,this.state=n,this.ast=g.parse(e)}getValue(){return this.value===void 0&&(this.value=g.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=g.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],s=r[1],a=r[4];["name","&","#","^"].includes(o)&&n.add(s),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,n)}}}async function Se(){var t;const e=await se();for(const n of e){const r=(t=n.properties)!==null&&t!==void 0?t:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new Z(o.value,WA.state);if(s.isPureString())continue;const a=s.getValue();await J(n.name,o.name,a),s.onChange(async i=>{await J(n.name,o.name,i)})}}}async function Pe(){var t;const e=await T();for(const[n,r]of e.entries())if(r.type!=="objectgroup"){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const a=new Z(s.value,WA.state);if(a.isPureString())continue;const i=a.getValue();K(n,s.name,i),a.onChange(c=>{K(n,s.name,c)})}}}async function J(t,e,n){console.log(t),(await WA.room.area.get(t)).setProperty(e,n)}function K(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}let G,N=0,O=0;function $(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Ce(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=F(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Le(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=F(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Q(t){return t.map(e=>G.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function F(t){const e=Q(t),n=X(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(N-r,2)+Math.pow(O-o,2))}function Ee(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Ce(t):Le(t),$(t)}),$(t)}function Me(t,e,n,r){const o=t.name;let s,a,i=!1;const c=n.getString("tag");let l=!0;c&&!WA.player.tags.includes(c)&&(l=!1);const p=!!c;function y(){var u;s&&s.remove(),s=WA.ui.displayActionMessage({message:(u=n.getString("closeTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,b()}})}function b(){var u;s&&s.remove(),s=WA.ui.displayActionMessage({message:(u=n.getString("openTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,y()}})}function B(u){const v=X(Q(e.properties.mustGetString("closeLayer").split(`
`)));a=WA.room.website.create({name:"doorKeypad"+u,url:r+"/keypad.html#"+encodeURIComponent(u),position:{x:v.right*32,y:v.top*32,width:32*3,height:32*4},allowApi:!0})}function C(){a&&(WA.room.website.delete(a.name),a=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(i=!0,n.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!l||!p)&&(n.getString("code")||n.getString("codeVariable"))){B(o);return}l&&(WA.state[e.name]?y():b())}),WA.room.onLeaveLayer(o).subscribe(()=>{i=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),C()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&y(),a&&WA.state[e.name]===!0&&C(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&b())})}function Te(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-N,2)+Math.pow(t.y-O,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function ke(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Te(t)})}function Be(t,e,n){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Re(t){t=t??I;const e=await ne();G=await T();for(const n of e.values())n.properties.get("door")&&Ee(n),n.properties.get("bell")&&ke(n);for(const n of G.values()){const r=new E(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');Me(n,a,r,t)}const s=r.getString("bellVariable");s&&Be(s,r,n.name)}WA.player.onPlayerMove(n=>{N=n.x,O=n.y})}function Ve(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),a=t.getString("tag");xe(n,e,r,o,s,a)}}function xe(t,e,n,r,o,s){s&&!WA.player.tags.includes(s)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function je(){const t=await T();for(const e of t.values()){const n=new E(e.properties);Ve(n,e.name)}}let z;async function Ge(t){const e=await WA.room.getTiledMap();t=t??I,z=await T();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new E(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of z.values()){const a=new E(s.properties),i=a.getString("openConfig");i&&s.type==="tilelayer"&&Ie(i.split(","),s.name,a)}}}function Ie(t,e,n){let r;const o=n.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function a(){var c;r&&r.remove(),r=WA.ui.displayActionMessage({message:(c=n.getString("openConfigTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE or touch here to configure",callback:()=>U(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const c=n.getString("openConfigTrigger");s&&(c&&c==="onaction"?a():U(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function qe(){return WA.onInit().then(()=>{Re().catch(t=>console.error(t)),je().catch(t=>console.error(t)),Ge().catch(t=>console.error(t)),Pe().catch(t=>console.error(t)),Se().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");let h;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("indice1").subscribe(()=>{h=WA.ui.openPopup("indice1Popup","Bonjour ! Voici mon indice : Je suis le Practice leader de la Practice DEVOPS, la lettre que tu recherches est la première de mon prénom !",[{label:"OK !",className:"primary",callback:t=>{t.close()}}])}),WA.room.area.onLeave("indice1").subscribe(A),WA.room.area.onEnter("indice2").subscribe(()=>{h=WA.ui.openPopup("indice2Popup","Voici un nouvel indice : J'ai ouvert le forum des communauté et je suis le PDG, la lettre que tu recherches est la première de mon prenom !",[{label:"Merci !",className:"primary",callback:t=>{t.close()}}])}),WA.room.area.onLeave("indice2").subscribe(A),WA.room.area.onEnter("indice3").subscribe(()=>{h=WA.ui.openPopup("indice3Popup","Un nouvel indice, ici tu trouveras : Je suis le Practice leader de la Practice INFRA / CLOUD, la lettre que tu recherches est la quatrième de mon prénom !",[{label:"Merci !",className:"primary",callback:t=>{t.close()}}])}),WA.room.area.onLeave("indice3").subscribe(A),WA.room.area.onEnter("indice4").subscribe(()=>{h=WA.ui.openPopup("indice4Popup","Bonjour, voici mon indice : Je suis un des Practice leader de la Practice CYBER mais pas Sylvain, la lettre que tu recherches est la septième de mon prénom !",[{label:"OK, merci !",className:"primary",callback:t=>{t.close()}}])}),WA.room.area.onLeave("indice4").subscribe(A),WA.room.area.onEnter("indice5").subscribe(()=>{h=WA.ui.openPopup("indice5Popup","Salut ! Allez, voici un petit indice : Je suis le Practice leader de la Practice AGILITE, la lettre que tu recherches est la quatrième de mon prénom !",[{label:"Merci !",className:"primary",callback:t=>{t.close()}}])}),WA.room.area.onLeave("indice5").subscribe(A),WA.room.area.onEnter("indice6").subscribe(()=>{h=WA.ui.openPopup("indice6Popup","Bonjour ! Voici mon indice : Je suis le Social Media Manager de Néosoft, la lettre de que tu recherches est la dernière de mon prénom !",[{label:"OK, merci !",className:"primary",callback:t=>{t.close()}}])}),WA.room.area.onLeave("indice6").subscribe(A),WA.room.area.onEnter("indice7").subscribe(()=>{h=WA.ui.openPopup("indice7Popup","Hello ! Indice : Je suis la Responsable formation Néosoft Training, la lettre que tu recherches est la première de mon prénom !",[{label:"OK, merci !",className:"primary",callback:t=>{t.close()}}])}),WA.room.area.onLeave("indice7").subscribe(A),WA.room.area.onEnter("indice8").subscribe(()=>{h=WA.ui.openPopup("indice8Popup","Indice : Je suis le Practice leader de la Practice Software Engineering, la lettre que tu recherches est la deuxième de mon prénom !",[{label:"OK, merci !",className:"primary",callback:t=>{t.close()}}])}),WA.room.area.onLeave("indice8").subscribe(A),WA.room.area.onEnter("indice9").subscribe(()=>{h=WA.ui.openPopup("indice9Popup","Mon tout est l'anagramme d'une plante connues pour ses jolies fleurs bleues !",[{label:"Rendez-vous dans l'enquete de satisfaction pour répondre !",className:"primary",callback:t=>{t.close()}}])}),WA.room.area.onLeave("indice9").subscribe(A),WA.room.area.onEnter("rs").subscribe(()=>{h=WA.ui.openPopup("rsPopup","Tu veux nous suivre sur les réseaux sociaux ?",[{label:"Linkedin",className:"primary",callback:t=>{WA.openTab("https://www.linkedin.com/company/neosoft_"),t.close()}},{label:"Twitter",className:"primary",callback:t=>{WA.openTab("https://twitter.com/neosoft_"),t.close()}}])}),WA.room.area.onLeave("rs").subscribe(A),WA.room.area.onEnter("fdn").subscribe(()=>{h=WA.ui.openPopup("fdnPopup","Viens te sensibiliser aux enjeux du numérique !",[{label:"Je m'inscris à une fresque",className:"primary",callback:t=>{WA.openTab("https://landing.neosoft.fr/numerique-responsable"),t.close()}}])}),WA.room.area.onLeave("fdn").subscribe(A),qe().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));function A(){h!==void 0&&(h.close(),h=void 0)}