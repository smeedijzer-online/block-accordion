!function(){"use strict";var e,t={150:function(){var e=window.wp.blocks,t=window.wp.element,a=window.wp.i18n,o=window.wp.blockEditor,r=window.wp.components,n=JSON.parse('{"apiVersion":2,"name":"smeedijzer/accordion-item","version":"0.1.0","title":"Accordion block","category":"widgets","icon":"<SVG viewBox=\\"0 0 24 24\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\"><Path d=\\"M16.93,8.93a1,1,0,0,1-.7-.29L12,4.41,7.9,8.51A1,1,0,0,1,6.49,7.1L12,1.59l5.64,5.64a1,1,0,0,1,0,1.41A1,1,0,0,1,16.93,8.93Z\\" /><Path d=\\"M12.07,22.35,6.42,16.71a1,1,0,0,1,1.42-1.42l4.23,4.23,4.09-4.1a1,1,0,0,1,1.42,1.42Z\\" /><Path d=\\"M17.93,13H5.82a1,1,0,0,1,0-2H17.93a1,1,0,0,1,0,2Z\\" /></SVG>","description":"accordion item","textdomain":"smeedijzer-block-accordion","keywords":["bootstrap","component"],"example":{},"supports":{"anchor":true,"align":false,"html":false},"parent":["wp-bootstrap-blocks/accordion"],"attributes":{"innerBlockId":{"type":"string"},"title":{"type":"string","source":"html","selector":"button.accordion-button","default":""}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');(0,e.registerBlockType)(n,{icon:function(){return(0,t.createElement)(r.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},(0,t.createElement)(r.Path,{d:"M16.93,8.93a1,1,0,0,1-.7-.29L12,4.41,7.9,8.51A1,1,0,0,1,6.49,7.1L12,1.59l5.64,5.64a1,1,0,0,1,0,1.41A1,1,0,0,1,16.93,8.93Z"}),(0,t.createElement)(r.Path,{d:"M12.07,22.35,6.42,16.71a1,1,0,0,1,1.42-1.42l4.23,4.23,4.09-4.1a1,1,0,0,1,1.42,1.42Z"}),(0,t.createElement)(r.Path,{d:"M17.93,13H5.82a1,1,0,0,1,0-2H17.93a1,1,0,0,1,0,2Z"}))},edit:function(e){const{attributes:{innerBlockId:r,title:n},clientId:c,setAttributes:l}=e;r||l({innerBlockId:c});const i="block-"+r,s="#block-"+r,d="heading-"+r,p="#block-"+wp.data.select("core/block-editor").getBlockParents(r)[0],u=(0,o.useBlockProps)({className:"accordion-item"});return(0,t.createElement)("div",u,(0,t.createElement)("h2",{className:"accordion-header",id:d},(0,t.createElement)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":s,"aria-expanded":"false","aria-pressed":"false","aria-controls":i},(0,t.createElement)(o.RichText,{value:n,allowedFormats:["core/bold","core/italic","core/link"],onChange:e=>l({title:e}),placeholder:(0,a.__)("Panel title...","gutenberg-faq")}))),(0,t.createElement)("div",{id:i,className:"accordion-collapse collapse show","aria-labelledby":d,"data-bs-parent":p},(0,t.createElement)("div",{className:"accordion-body"},(0,t.createElement)(o.InnerBlocks,{allowedBlocks:["core/paragraph","core/list","core/button","core/buttons"],templateLock:!1}))))},save:function(e){const{attributes:{innerBlockId:a,title:r}}=e,n="block-"+a,c="#block-"+a,l="heading-"+a,i="#block-"+wp.data.select("core/block-editor").getBlockParents(a)[0],s=o.useBlockProps.save({className:"accordion"});return(0,t.createElement)("div",s,(0,t.createElement)("h2",{className:"accordion-header",id:l},(0,t.createElement)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":c,"aria-expanded":"false","aria-pressed":"false","aria-controls":n},(0,t.createElement)(o.RichText.Content,{value:r}))),(0,t.createElement)("div",{id:n,className:"accordion-collapse collapse","aria-labelledby":l,"data-parent":i},(0,t.createElement)("div",{className:"accordion-body"},(0,t.createElement)(o.InnerBlocks.Content,null))))}})}},a={};function o(e){var r=a[e];if(void 0!==r)return r.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=function(t,a,r,n){if(!a){var c=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],n=e[d][2];for(var l=!0,i=0;i<a.length;i++)(!1&n||c>=n)&&Object.keys(o.O).every((function(e){return o.O[e](a[i])}))?a.splice(i--,1):(l=!1,n<c&&(c=n));if(l){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,r,n]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,n,c=a[0],l=a[1],i=a[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(i)var d=i(o)}for(t&&t(a);s<c.length;s++)n=c[s],o.o(e,n)&&e[n]&&e[n][0](),e[c[s]]=0;return o.O(d)},a=self.webpackChunksmeedijzer_block_accordion=self.webpackChunksmeedijzer_block_accordion||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var r=o.O(void 0,[46],(function(){return o(150)}));r=o.O(r)}();