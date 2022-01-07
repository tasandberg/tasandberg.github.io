"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[624],{2623:function(e,r,t){var n=t(4942),c=t(5987),a=t(5900),o=t.n(a),s=t(7294),l=t(9541),i=t(5893),f=["bsPrefix","bg","pill","text","className","as"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var b=s.forwardRef((function(e,r){var t=e.bsPrefix,n=e.bg,a=e.pill,s=e.text,p=e.className,b=e.as,d=void 0===b?"span":b,O=(0,c.Z)(e,f),m=(0,l.vE)(t,"badge");return(0,i.jsx)(d,u(u({ref:r},O),{},{className:o()(p,m,a&&"rounded-pill",s&&"text-".concat(s),n&&"bg-".concat(n))}))}));b.displayName="Badge",b.defaultProps={bg:"primary",pill:!1},r.Z=b},1809:function(e,r,t){t.d(r,{Z:function(){return H}});var n=t(4942),c=t(5987),a=t(5900),o=t.n(a),s=t(7294),l=t(9541),i=t(8870),f=t(6132),p=t(5893),u=["bsPrefix","className","variant","as"];function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var d=s.forwardRef((function(e,r){var t=e.bsPrefix,a=e.className,s=e.variant,i=e.as,f=void 0===i?"img":i,d=(0,c.Z)(e,u),O=(0,l.vE)(t,"card-img");return(0,p.jsx)(f,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({ref:r,className:o()(s?"".concat(O,"-").concat(s):O,a)},d))}));d.displayName="CardImg";var O=d,m=t(8893),y=["bsPrefix","className","as"];function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=s.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,a=e.as,i=void 0===a?"div":a,f=(0,c.Z)(e,y),u=(0,l.vE)(t,"card-header"),b=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return(0,p.jsx)(m.Z.Provider,{value:b,children:(0,p.jsx)(i,j(j({ref:r},f),{},{className:o()(n,u)}))})}));g.displayName="CardHeader";var P=g,w=["bsPrefix","className","bg","text","border","body","children","as"];function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var E=(0,f.Z)("h5"),Z=(0,f.Z)("h6"),N=(0,i.Z)("card-body"),D=(0,i.Z)("card-title",{Component:E}),k=(0,i.Z)("card-subtitle",{Component:Z}),S=(0,i.Z)("card-link",{Component:"a"}),C=(0,i.Z)("card-text",{Component:"p"}),_=(0,i.Z)("card-footer"),R=(0,i.Z)("card-img-overlay"),B=s.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,a=e.bg,s=e.text,i=e.border,f=e.body,u=e.children,b=e.as,d=void 0===b?"div":b,O=(0,c.Z)(e,w),m=(0,l.vE)(t,"card");return(0,p.jsx)(d,x(x({ref:r},O),{},{className:o()(n,m,a&&"bg-".concat(a),s&&"text-".concat(s),i&&"border-".concat(i)),children:f?(0,p.jsx)(N,{children:u}):u}))}));B.displayName="Card",B.defaultProps={body:!1};var H=Object.assign(B,{Img:O,Title:D,Subtitle:k,Body:N,Link:S,Text:C,Header:P,Footer:_,ImgOverlay:R})},7408:function(e,r,t){var n=t(885),c=t(4942),a=t(5987),o=t(5900),s=t.n(o),l=t(7294),i=t(9541),f=t(5893),p=["as","bsPrefix","className"],u=["className"];function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var O=["xxl","xl","lg","md","sm","xs"];var m=l.forwardRef((function(e,r){var t=function(e){var r=e.as,t=e.bsPrefix,n=e.className,c=(0,a.Z)(e,p);t=(0,i.vE)(t,"col");var o=[],l=[];return O.forEach((function(e){var r,n,a,s=c[e];delete c[e],"object"==typeof s&&null!=s?(r=s.span,n=s.offset,a=s.order):r=s;var i="xs"!==e?"-".concat(e):"";r&&o.push(!0===r?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(r)),null!=a&&l.push("order".concat(i,"-").concat(a)),null!=n&&l.push("offset".concat(i,"-").concat(n))})),[d(d({},c),{},{className:s().apply(void 0,[n].concat(o,l))}),{as:r,bsPrefix:t,spans:o}]}(e),c=(0,n.Z)(t,2),o=c[0],l=o.className,b=(0,a.Z)(o,u),m=c[1],y=m.as,v=void 0===y?"div":y,j=m.bsPrefix,g=m.spans;return(0,f.jsx)(v,d(d({},b),{},{ref:r,className:s()(l,!g.length&&j)}))}));m.displayName="Col",r.Z=m},994:function(e,r,t){var n=t(4942),c=t(5987),a=t(5900),o=t.n(a),s=t(7294),l=t(9541),i=t(5893),f=["bsPrefix","className","as"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var b=["xxl","xl","lg","md","sm","xs"],d=s.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,a=e.as,s=void 0===a?"div":a,p=(0,c.Z)(e,f),d=(0,l.vE)(t,"row"),O="".concat(d,"-cols"),m=[];return b.forEach((function(e){var r,t=p[e];delete p[e],r=null!=t&&"object"==typeof t?t.cols:t;var n="xs"!==e?"-".concat(e):"";null!=r&&m.push("".concat(O).concat(n,"-").concat(r))})),(0,i.jsx)(s,u(u({ref:r},p),{},{className:o().apply(void 0,[n,d].concat(m))}))}));d.displayName="Row",r.Z=d},4545:function(e,r,t){t.r(r);var n=t(7294),c=t(307),a=t(1809),o=t(994),s=t(7408),l=t(2623),i=t(6125),f=function(e){var r=e.work,t=r.frontmatter,c=t.employer,f=t.employer_url,p=t.job_title,u=t.start_date,b=t.end_date,d=t.technologies,O=t.image;return n.createElement("div",null,n.createElement(a.Z,{className:"border-0 mb-3"},n.createElement(a.Z.Body,null,n.createElement(o.Z,null,n.createElement(s.Z,{xs:!0,className:"d-flex justify-content-end"},n.createElement("div",null,n.createElement(i.G,{objectFit:"cover",image:(0,i.d)(O)}))),n.createElement(s.Z,{xs:10},n.createElement("div",null,n.createElement("a",{className:"fs-5",href:f},c)),n.createElement("div",null,p),n.createElement("p",{className:"text-muted"},u," - ",b||"Present"),n.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}}),n.createElement("p",{className:"mb-0"},"Technologies used:"),d.map((function(e){return n.createElement(l.Z,{pill:!0,bg:"secondary me-2",key:c+e},e)})))))))};r.default=function(e){var r=e.data;return n.createElement(c.Z,{title:"Work"},r.allMarkdownRemark.nodes.map((function(e){return n.createElement(f,{work:e,key:e.frontmatter.name+"-project-card"})})))}}}]);
//# sourceMappingURL=component---src-pages-work-js-18d7ee4e4f18ca45e1ce.js.map