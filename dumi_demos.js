(self.webpackChunkantd_packages=self.webpackChunkantd_packages||[]).push([[8336],{81125:function(O,a,u){"use strict";u.r(a);var i=u(46327),c=u(10170),_=u(50959);a.default=d=>{var f=d.children,s=(0,i.Z)(d,["children"]);return _.createElement(c.Z,s,_.createElement("div",{style:{contentVisibility:"auto",contain:"style layout paint"}},f))}},19982:function(O,a,u){"use strict";u.d(a,{m:function(){return i.m}});var i=u(78683),c=u(53587)},4276:function(O,a,u){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;function i(){var e=_(u(50959));return i=function(){return e},e}function c(){var e=u(84e3);return c=function(){return e},e}function _(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(r){s(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(t){return t.render()},h=function(t,n){var r=[],m=t.match.params.uuid,v=t.location.query.wrapper===void 0,l=n[m];if(l){var o=f(f({},l.previewerProps),{},{hideActions:(l.previewerProps.hideActions||[]).concat(["EXTERNAL"])});t.location.query.capture!==void 0&&(o.motions=(o.motions||[]).slice(),o.motions.unshift("autoplay"),o.motions.every(function(E){return!E.startsWith("capture")})&&o.motions.push("capture:[id|=root]")),v?r=[i().default.createElement(p,{render:function(){return(0,c().useMotions)(o.motions||[],typeof window!="undefined"?document.documentElement:null),i().default.createElement("div",{},i().default.createElement(l.component))}})]:r=[o,i().default.createElement(l.component)]}return r};a.default=h}}]);
