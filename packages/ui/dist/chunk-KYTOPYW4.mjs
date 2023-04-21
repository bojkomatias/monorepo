import { b, a } from './chunk-IXFB4LWL.mjs';
import * as kr from 'react';
import * as T from '@radix-ui/react-tooltip';
import { jsx } from 'react/jsx-runtime';

function tr(r){var e,o,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(o=tr(r[e]))&&(t&&(t+=" "),t+=o);else for(e in r)r[e]&&(t&&(t+=" "),t+=e);return t}function or(){for(var r,e,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(e=tr(r))&&(t&&(t+=" "),t+=e);return t}function nr(){for(var r=0,e,o,t="";r<arguments.length;)(e=arguments[r++])&&(o=ir(e))&&(t&&(t+=" "),t+=o);return t}function ir(r){if(typeof r=="string")return r;for(var e,o="",t=0;t<r.length;t++)r[t]&&(e=ir(r[t]))&&(o&&(o+=" "),o+=e);return o}var B="-";function lr(r){var e=Rr(r),o=r.conflictingClassGroups,t=r.conflictingClassGroupModifiers,s=t===void 0?{}:t;function a(i){var l=i.split(B);return l[0]===""&&l.length!==1&&l.shift(),dr(l,e)||Pr(i)}function n(i,l){var c=o[i]||[];return l&&s[i]?[].concat(c,s[i]):c}return {getClassGroupId:a,getConflictingClassGroupIds:n}}function dr(r,e){var n;if(r.length===0)return e.classGroupId;var o=r[0],t=e.nextPart.get(o),s=t?dr(r.slice(1),t):void 0;if(s)return s;if(e.validators.length!==0){var a=r.join(B);return (n=e.validators.find(function(i){var l=i.validator;return l(a)}))==null?void 0:n.classGroupId}}var ar=/^\[(.+)\]$/;function Pr(r){if(ar.test(r)){var e=ar.exec(r)[1],o=e==null?void 0:e.substring(0,e.indexOf(":"));if(o)return "arbitrary.."+o}}function Rr(r){var e=r.theme,o=r.prefix,t={nextPart:new Map,validators:[]},s=Sr(Object.entries(r.classGroups),o);return s.forEach(function(a){var n=a[0],i=a[1];U(i,t,n,e);}),t}function U(r,e,o,t){r.forEach(function(s){if(typeof s=="string"){var a=s===""?e:sr(e,s);a.classGroupId=o;return}if(typeof s=="function"){if(zr(s)){U(s(t),e,o,t);return}e.validators.push({validator:s,classGroupId:o});return}Object.entries(s).forEach(function(n){var i=n[0],l=n[1];U(l,sr(e,i),o,t);});});}function sr(r,e){var o=r;return e.split(B).forEach(function(t){o.nextPart.has(t)||o.nextPart.set(t,{nextPart:new Map,validators:[]}),o=o.nextPart.get(t);}),o}function zr(r){return r.isThemeGetter}function Sr(r,e){return e?r.map(function(o){var t=o[0],s=o[1],a=s.map(function(n){return typeof n=="string"?e+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(function(i){var l=i[0],c=i[1];return [e+l,c]})):n});return [t,a]}):r}function cr(r){if(r<1)return {get:function(){},set:function(){}};var e=0,o=new Map,t=new Map;function s(a,n){o.set(a,n),e++,e>r&&(e=0,t=o,o=new Map);}return {get:function(n){var i=o.get(n);if(i!==void 0)return i;if((i=t.get(n))!==void 0)return s(n,i),i},set:function(n,i){o.has(n)?o.set(n,i):s(n,i);}}}var $="!";function ur(r){var e=r.separator||":",o=e.length===1,t=e[0],s=e.length;return function(n){for(var i=[],l=0,c=0,f,u=0;u<n.length;u++){var g=n[u];if(l===0){if(g===t&&(o||n.slice(u,u+s)===e)){i.push(n.slice(c,u)),c=u+s;continue}if(g==="/"){f=u;continue}}g==="["?l++:g==="]"&&l--;}var b=i.length===0?n:n.substring(c),x=b.startsWith($),m=x?b.substring(1):b,y=f&&f>c?f-c:void 0;return {modifiers:i,hasImportantModifier:x,baseClassName:m,maybePostfixModifierPosition:y}}}function pr(r){if(r.length<=1)return r;var e=[],o=[];return r.forEach(function(t){var s=t[0]==="[";s?(e.push.apply(e,o.sort().concat([t])),o=[]):o.push(t);}),e.push.apply(e,o.sort()),e}function fr(r){return a({cache:cr(r.cacheSize),splitModifiers:ur(r)},lr(r))}var Gr=/\s+/;function gr(r,e){var o=e.splitModifiers,t=e.getClassGroupId,s=e.getConflictingClassGroupIds,a=new Set;return r.trim().split(Gr).map(function(n){var i=o(n),l=i.modifiers,c=i.hasImportantModifier,f=i.baseClassName,u=i.maybePostfixModifierPosition,g=t(u?f.substring(0,u):f),b=!!u;if(!g){if(!u)return {isTailwindClass:!1,originalClassName:n};if(g=t(f),!g)return {isTailwindClass:!1,originalClassName:n};b=!1;}var x=pr(l).join(":"),m=c?x+$:x;return {isTailwindClass:!0,modifierId:m,classGroupId:g,originalClassName:n,hasPostfixModifier:b}}).reverse().filter(function(n){if(!n.isTailwindClass)return !0;var i=n.modifierId,l=n.classGroupId,c=n.hasPostfixModifier,f=i+l;return a.has(f)?!1:(a.add(f),s(l,c).forEach(function(u){return a.add(i+u)}),!0)}).reverse().map(function(n){return n.originalClassName}).join(" ")}function mr(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];var t,s,a,n=i;function i(c){var f=e[0],u=e.slice(1),g=u.reduce(function(b,x){return x(b)},f());return t=fr(g),s=t.cache.get,a=t.cache.set,n=l,l(c)}function l(c){var f=s(c);if(f)return f;var u=gr(c,t);return a(c,u),u}return function(){return n(nr.apply(null,arguments))}}function d(r){var e=function(t){return t[r]||[]};return e.isThemeGetter=!0,e}var vr=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ir=/^\d+\/\d+$/,Er=new Set(["px","full","screen"]),Lr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Nr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/,jr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function h(r){return k(r)||Er.has(r)||Ir.test(r)||C(r)}function C(r){return P(r,"length",Wr)}function hr(r){return P(r,"size",Mr)}function xr(r){return P(r,"position",Mr)}function yr(r){return P(r,"url",Or)}function I(r){return P(r,"number",k)}function k(r){return !Number.isNaN(Number(r))}function wr(r){return r.endsWith("%")&&k(r.slice(0,-1))}function R(r){return br(r)||P(r,"number",br)}function p(r){return vr.test(r)}function z(){return !0}function M(r){return Lr.test(r)}function Cr(r){return P(r,"",Vr)}function P(r,e,o){var t=vr.exec(r);return t?t[1]?t[1]===e:o(t[2]):!1}function Wr(r){return Nr.test(r)}function Mr(){return !1}function Or(r){return r.startsWith("url(")}function br(r){return Number.isInteger(Number(r))}function Vr(r){return jr.test(r)}function Tr(){var r=d("colors"),e=d("spacing"),o=d("blur"),t=d("brightness"),s=d("borderColor"),a=d("borderRadius"),n=d("borderSpacing"),i=d("borderWidth"),l=d("contrast"),c=d("grayscale"),f=d("hueRotate"),u=d("invert"),g=d("gap"),b=d("gradientColorStops"),x=d("gradientColorStopPositions"),m=d("inset"),y=d("margin"),A=d("opacity"),w=d("padding"),H=d("saturate"),W=d("scale"),q=d("sepia"),Z=d("skew"),X=d("space"),_=d("translate"),O=function(){return ["auto","contain","none"]},V=function(){return ["auto","hidden","clip","visible","scroll"]},K=function(){return ["auto",e]},Q=function(){return ["",h]},E=function(){return ["auto",k,p]},Y=function(){return ["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},L=function(){return ["solid","dashed","dotted","double","none"]},D=function(){return ["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},F=function(){return ["start","end","center","between","around","evenly","stretch"]},S=function(){return ["","0",p]},rr=function(){return ["auto","avoid","all","avoid-page","page","left","right","column"]},G=function(){return [k,I]},N=function(){return [k,p]};return {cacheSize:500,theme:{colors:[z],spacing:[h],blur:["none","",M,C],brightness:G(),borderColor:[r],borderRadius:["none","","full",M,C],borderSpacing:[e],borderWidth:Q(),contrast:G(),grayscale:S(),hueRotate:N(),invert:S(),gap:[e],gradientColorStops:[r],gradientColorStopPositions:[wr,C],inset:K(),margin:K(),opacity:G(),padding:[e],saturate:G(),scale:G(),sepia:S(),skew:N(),space:[e],translate:[e]},classGroups:{aspect:[{aspect:["auto","square","video",p]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":rr()}],"break-before":[{"break-before":rr()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Y(),[p])}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",R]}],basis:[{basis:[e]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",p]}],grow:[{grow:S()}],shrink:[{shrink:S()}],order:[{order:["first","last","none",R]}],"grid-cols":[{"grid-cols":[z]}],"col-start-end":[{col:["auto",{span:[R]},p]}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":[z]}],"row-start-end":[{row:["auto",{span:[R]},p]}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",p]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",p]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal"].concat(F())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(F(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(F(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[X]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[X]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",e]}],"min-w":[{"min-w":["min","max","fit",h]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[M]},M,C]}],h:[{h:[e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",h]}],"max-h":[{"max-h":[e,"min","max","fit"]}],"font-size":[{text:["base",M,C]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",I]}],"font-family":[{font:[z]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",C]}],"line-clamp":[{"line-clamp":["none",k,I]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",h]}],"list-image":[{"list-image":["none",p]}],"list-style-type":[{list:["none","disc","decimal",p]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(L(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",h]}],"underline-offset":[{"underline-offset":["auto",h]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[e]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",C]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",p]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Y(),[xr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",hr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},yr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[].concat(L(),["hidden"])}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:L()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:[""].concat(L())}],"outline-offset":[{"outline-offset":[h]}],"outline-w":[{outline:[h]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[h]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",M,Cr]}],"shadow-color":[{shadow:[z]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":D()}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",M,p]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[u]}],saturate:[{saturate:[H]}],sepia:[{sepia:[q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[H]}],"backdrop-sepia":[{"backdrop-sepia":[q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",p]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",p]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",p]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[W]}],"scale-x":[{"scale-x":[W]}],"scale-y":[{"scale-y":[W]}],rotate:[{rotate:[R,p]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[Z]}],"skew-y":[{"skew-y":[Z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",p]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",p]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[e]}],"scroll-mx":[{"scroll-mx":[e]}],"scroll-my":[{"scroll-my":[e]}],"scroll-ms":[{"scroll-ms":[e]}],"scroll-me":[{"scroll-me":[e]}],"scroll-mt":[{"scroll-mt":[e]}],"scroll-mr":[{"scroll-mr":[e]}],"scroll-mb":[{"scroll-mb":[e]}],"scroll-ml":[{"scroll-ml":[e]}],"scroll-p":[{"scroll-p":[e]}],"scroll-px":[{"scroll-px":[e]}],"scroll-py":[{"scroll-py":[e]}],"scroll-ps":[{"scroll-ps":[e]}],"scroll-pe":[{"scroll-pe":[e]}],"scroll-pt":[{"scroll-pt":[e]}],"scroll-pr":[{"scroll-pr":[e]}],"scroll-pb":[{"scroll-pb":[e]}],"scroll-pl":[{"scroll-pl":[e]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",p]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[h,I]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var J=mr(Tr);function Ar(...r){return J(or(r))}var he=T.Provider,xe=T.Root,ye=T.Trigger,Fr=kr.forwardRef((s,t)=>{var a$1=s,{className:r,sideOffset:e=4}=a$1,o=b(a$1,["className","sideOffset"]);return jsx(T.Content,a({ref:t,sideOffset:e,className:Ar("bg-popover text-popover-foreground animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",r)},o))});Fr.displayName=T.Content.displayName;

export { he as a, xe as b, ye as c, Fr as d };