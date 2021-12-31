"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[7],{2623:function(e,t,r){var n=r(4942),a=r(5987),c=r(5900),o=r.n(c),s=r(7294),i=r(9541),l=r(5893),f=["bsPrefix","bg","pill","text","className","as"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=s.forwardRef((function(e,t){var r=e.bsPrefix,n=e.bg,c=e.pill,s=e.text,b=e.className,p=e.as,d=void 0===p?"span":p,O=(0,a.Z)(e,f),m=(0,i.vE)(r,"badge");return(0,l.jsx)(d,u(u({ref:t},O),{},{className:o()(b,m,c&&"rounded-pill",s&&"text-".concat(s),n&&"bg-".concat(n))}))}));p.displayName="Badge",p.defaultProps={bg:"primary",pill:!1},t.Z=p},1809:function(e,t,r){r.d(t,{Z:function(){return _}});var n=r(4942),a=r(5987),c=r(5900),o=r.n(c),s=r(7294),i=r(9541),l=r(8870),f=r(6132),b=r(5893),u=["bsPrefix","className","variant","as"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var d=s.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,s=e.variant,l=e.as,f=void 0===l?"img":l,d=(0,a.Z)(e,u),O=(0,i.vE)(r,"card-img");return(0,b.jsx)(f,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:o()(s?"".concat(O,"-").concat(s):O,c)},d))}));d.displayName="CardImg";var O=d,m=r(8893),y=["bsPrefix","className","as"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=s.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.as,l=void 0===c?"div":c,f=(0,a.Z)(e,y),u=(0,i.vE)(r,"card-header"),p=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return(0,b.jsx)(m.Z.Provider,{value:p,children:(0,b.jsx)(l,j(j({ref:t},f),{},{className:o()(n,u)}))})}));v.displayName="CardHeader";var P=v,w=["bsPrefix","className","bg","text","border","body","children","as"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=(0,f.Z)("h5"),E=(0,f.Z)("h6"),N=(0,l.Z)("card-body"),D=(0,l.Z)("card-title",{Component:x}),k=(0,l.Z)("card-subtitle",{Component:E}),S=(0,l.Z)("card-link",{Component:"a"}),C=(0,l.Z)("card-text",{Component:"p"}),R=(0,l.Z)("card-footer"),B=(0,l.Z)("card-img-overlay"),T=s.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.bg,s=e.text,l=e.border,f=e.body,u=e.children,p=e.as,d=void 0===p?"div":p,O=(0,a.Z)(e,w),m=(0,i.vE)(r,"card");return(0,b.jsx)(d,Z(Z({ref:t},O),{},{className:o()(n,m,c&&"bg-".concat(c),s&&"text-".concat(s),l&&"border-".concat(l)),children:f?(0,b.jsx)(N,{children:u}):u}))}));T.displayName="Card",T.defaultProps={body:!1};var _=Object.assign(T,{Img:O,Title:D,Subtitle:k,Body:N,Link:S,Text:C,Header:P,Footer:R,ImgOverlay:B})},223:function(e,t,r){r.r(t);var n=r(7294),a=r(5444),c=r(307),o=r(1809),s=r(2623);t.default=function(e){var t=e.data;return n.createElement(c.Z,{title:"Blog"},t.allMarkdownRemark.nodes.map((function(e){return n.createElement(o.Z,{bg:"light border-0"},n.createElement(o.Z.Body,{className:""},n.createElement(o.Z.Title,null,n.createElement(a.rU,{style:{textDecoration:"none"},to:"/"+e.fields.slug},n.createElement("h3",null,e.frontmatter.title))),n.createElement(o.Z.Subtitle,{className:"mb-2 small text-muted"},e.frontmatter.date),n.createElement(o.Z.Subtitle,{className:"mb-2"},e.frontmatter.tags.map((function(t){return n.createElement(s.Z,{pill:!0,bg:"secondary me-2",key:e.frontmatter.title+t},t)}))),n.createElement(o.Z.Text,null,e.excerpt),n.createElement(o.Z.Link,{className:"text-muted",to:"/"+e.fields.slug,as:a.rU},"Read more...")))})))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-cbf6d81365e9ee1e8625.js.map