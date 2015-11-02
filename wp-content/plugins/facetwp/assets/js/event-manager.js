/**
 * Module: WP-JS-Hooks
 * Props: Carl Danley & 10up
 */
!function(a){"use strict";var b=function(){function a(a,b,c,d){return"string"==typeof a&&"function"==typeof b&&(c=parseInt(c||10,10),h("actions",a,b,c,d)),k}function b(){var a=Array.prototype.slice.call(arguments),b=a.shift();return"string"==typeof b&&j("actions",b,a),k}function c(a,b){return"string"==typeof a&&g("actions",a,b),k}function d(a,b,c,d){return"string"==typeof a&&"function"==typeof b&&(c=parseInt(c||10,10),h("filters",a,b,c,d)),k}function e(){var a=Array.prototype.slice.call(arguments),b=a.shift();return"string"==typeof b?j("filters",b,a):k}function f(a,b){return"string"==typeof a&&g("filters",a,b),k}function g(a,b,c,d){if(l[a][b])if(c){var e,f=l[a][b];if(d)for(e=f.length;e--;){var g=f[e];g.callback===c&&g.context===d&&f.splice(e,1)}else for(e=f.length;e--;)f[e].callback===c&&f.splice(e,1)}else l[a][b]=[]}function h(a,b,c,d,e){var f={callback:c,priority:d,context:e},g=l[a][b];g?(g.push(f),g=i(g)):g=[f],l[a][b]=g}function i(a){for(var b,c,d,e=1,f=a.length;f>e;e++){for(b=a[e],c=e;(d=a[c-1])&&d.priority>b.priority;)a[c]=a[c-1],--c;a[c]=b}return a}function j(a,b,c){var d=l[a][b];if(!d)return"filters"===a?c[0]:!1;var e=0,f=d.length;if("filters"===a)for(;f>e;e++)c[0]=d[e].callback.apply(d[e].context,c);else for(;f>e;e++)d[e].callback.apply(d[e].context,c);return"filters"===a?c[0]:!0}var k={removeFilter:f,applyFilters:e,addFilter:d,removeAction:c,doAction:b,addAction:a},l={actions:{},filters:{}};return k};a.wp=a.wp||{},a.wp.hooks=new b}(window);