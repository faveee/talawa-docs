(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(177)),i={id:"donation-fees",title:"Donations & Fees"},s={unversionedId:"features/donations/donation-fees",id:"features/donations/donation-fees",isDocsHomePage:!1,title:"Donations & Fees",description:"This section is a work in progress.",source:"@site/docs/features/donations/donation-fees.md",slug:"/features/donations/donation-fees",permalink:"/talawa-docs/docs/features/donations/donation-fees",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/features/donations/donation-fees.md",version:"current",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/talawa-docs/docs/features/donations/donations-overview"},next:{title:"Overview",permalink:"/talawa-docs/docs/features/news feed/news-feed-overview"}},c=[{value:"Code: DON-005",id:"code-don-005",children:[]},{value:"Overview",id:"overview",children:[{value:"Problem",id:"problem",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Out of Scope",id:"out-of-scope",children:[]},{value:"People and Roles",id:"people-and-roles",children:[]}]},{value:"Context",id:"context",children:[{value:"Use Cases",id:"use-cases",children:[]}]},{value:"Proposal/Solution",id:"proposalsolution",children:[{value:"User Experience",id:"user-experience",children:[]},{value:"Important Details To Capture",id:"important-details-to-capture",children:[]},{value:"Future Work",id:"future-work",children:[]}]},{value:"Tasks and Timeline",id:"tasks-and-timeline",children:[]}],l={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This section is a work in progress."))),Object(o.b)("h2",{id:"code-don-005"},"Code: DON-005"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Authored by")," ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"},"Xavier Bryson")," ")," ",Object(o.b)("em",{parentName:"p"},". Last updated on")," ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"},"4/04/21")," ")),Object(o.b)("p",null,"This feature aims to ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"},"manage privileged access")," ")," by ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"},"use of fees associated with certain features/terms of use")," "),"."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("h3",{id:"problem"},"Problem"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Some organization","'","s require a means of generating revenue to fund their operations :"),"\nSince the target audience of the application would be those similar to non-profits if not non-profits themselves, a crucial part of their revenue would be from their members/participants. Therefore, a means to manage member contributions would need to be established and should be easy to configure.")),Object(o.b)("h3",{id:"goals"},"Goals"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Allow for a secure method of receiving dontations online")," :\nThrough the use of a payment gateway for ease of managment and integrations, we can allow members to offer secure payments on fees to access exclusive events/features."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Differentiate the various fees associated with features/terms of use")," :\nCurrently, there are three main categories for fees within the application, namely: Donations and Membership Fees. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Donations: These are fees that can be contributed at any time by members/participants of an organization."),Object(o.b)("li",{parentName:"ul"},"Membership Fees: Similar to donations, membership fees can be contributed at any time or can be associated with a certain event. These fees can also be one-time or reccuring."),Object(o.b)("li",{parentName:"ul"},"Plugin Fees: These are payments made to grant access to certain features of the application.")))),Object(o.b)("h3",{id:"out-of-scope"},"Out of Scope"),Object(o.b)("p",null,"N/A"),Object(o.b)("h3",{id:"people-and-roles"},"People and Roles"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Xavier Bryson (Feature Lead)"),": clarify feature changes and assumptions.")),Object(o.b)("h2",{id:"context"},"Context"),Object(o.b)("h3",{id:"use-cases"},"Use Cases"),Object(o.b)("p",null,"N/A"),Object(o.b)("h2",{id:"proposalsolution"},"Proposal/Solution"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For ease of managing transactions, external Billing Systems would need to be employed. Two recommendations are as follows:"),Object(o.b)("p",{parentName:"li"},"\u25cb Stripe"),Object(o.b)("p",{parentName:"li"},"\u25cb Paypal")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For ease of incorporation into the various endpoints a node/express middleware could be used to pre-validate requests."))),Object(o.b)("h3",{id:"user-experience"},"User Experience"),Object(o.b)("p",null,"N/A"),Object(o.b)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),Object(o.b)("p",null,"Payments would be made online via credit/debit cards or contributions."),Object(o.b)("h3",{id:"future-work"},"Future Work"),Object(o.b)("p",null,"N/A"),Object(o.b)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),Object(o.b)("p",null,"N/A"))}b.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);