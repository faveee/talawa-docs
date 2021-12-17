"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[9239],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2512:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"expectations",title:"Expectations"},c=void 0,s={unversionedId:"talawa-api/expectations",id:"talawa-api/expectations",isDocsHomePage:!1,title:"Expectations",description:"API Primary Expectations",source:"@site/docs/talawa-api/expectations.md",sourceDirName:"talawa-api",slug:"/talawa-api/expectations",permalink:"/talawa-docs/docs/talawa-api/expectations",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/talawa-api/expectations.md",tags:[],version:"current",frontMatter:{id:"expectations",title:"Expectations"},sidebar:"someSidebar",previous:{title:"Functionality",permalink:"/talawa-docs/docs/talawa-api/functionality"},next:{title:"Introduction",permalink:"/talawa-docs/docs/talawa-admin/talawa-admin-introduction"}},p=[{value:"API Primary Expectations",id:"api-primary-expectations",children:[],level:2},{value:"TypeScript Rewrite",id:"typescript-rewrite",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"api-primary-expectations"},"API Primary Expectations"),(0,i.kt)("p",null,"The API is expected to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Centralize all functionality, meaning all applications must see the api as the source of truth."),(0,i.kt)("li",{parentName:"ol"},"Allow a secure connection to both frontend interfaces ie: Admin console and Mobile application using industry standard API authorization."),(0,i.kt)("li",{parentName:"ol"},"Allow support for multiple file systems via centralized configuration eg: server storage, AWS s3 etc.."),(0,i.kt)("li",{parentName:"ol"},"Allow centralized configuration for all external service dependencies such as the email service and the database."),(0,i.kt)("li",{parentName:"ol"},"Support multi tenancy at its core")),(0,i.kt)("h2",{id:"typescript-rewrite"},"TypeScript Rewrite"),(0,i.kt)("p",null,"The current code base for talawa api uses Node.js. This poses several problems with scalability and stability. Firstly the codebase is written in javascript, thus adding new features will make it unstable and more prone to breaks. Moving to Typescript will bring a level of stability and better developer experience that\u2019s not currently in the API. We recommend using NestJS ",(0,i.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"https://nestjs.com/"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Nest (NestJS) is a framework for building efficient, scalable Node.js server side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).")))}d.isMDXComponent=!0}}]);