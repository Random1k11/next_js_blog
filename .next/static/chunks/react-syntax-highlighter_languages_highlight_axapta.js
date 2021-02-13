(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_axapta"],{

/***/ "./node_modules/highlight.js/lib/languages/axapta.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/axapta.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Microsoft Axapta (now Dynamics 365)\nAuthor: Dmitri Roudakov <dmitri@roudakov.ru>\nWebsite: https://dynamics.microsoft.com/en-us/ax-overview/\nCategory: enterprise\n*/\n\n/** @type LanguageFn */\nfunction axapta(hljs) {\n  return {\n    name: 'Dynamics 365',\n    keywords: 'false int abstract private char boolean static null if for true ' +\n      'while long throw finally protected final return void enum else ' +\n      'break new catch byte super case short default double public try this switch ' +\n      'continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count ' +\n      'order group by asc desc index hint like dispaly edit client server ttsbegin ' +\n      'ttscommit str real date container anytype common div mod',\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.C_NUMBER_MODE,\n      {\n        className: 'meta',\n        begin: '#', end: '$'\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class interface', end: '{', excludeEnd: true,\n        illegal: ':',\n        contains: [\n          {beginKeywords: 'extends implements'},\n          hljs.UNDERSCORE_TITLE_MODE\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = axapta;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2F4YXB0YS5qcz9hODg1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxXQUFXLG9DQUFvQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXhhcHRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNaWNyb3NvZnQgQXhhcHRhIChub3cgRHluYW1pY3MgMzY1KVxuQXV0aG9yOiBEbWl0cmkgUm91ZGFrb3YgPGRtaXRyaUByb3VkYWtvdi5ydT5cbldlYnNpdGU6IGh0dHBzOi8vZHluYW1pY3MubWljcm9zb2Z0LmNvbS9lbi11cy9heC1vdmVydmlldy9cbkNhdGVnb3J5OiBlbnRlcnByaXNlXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYXhhcHRhKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRHluYW1pY3MgMzY1JyxcbiAgICBrZXl3b3JkczogJ2ZhbHNlIGludCBhYnN0cmFjdCBwcml2YXRlIGNoYXIgYm9vbGVhbiBzdGF0aWMgbnVsbCBpZiBmb3IgdHJ1ZSAnICtcbiAgICAgICd3aGlsZSBsb25nIHRocm93IGZpbmFsbHkgcHJvdGVjdGVkIGZpbmFsIHJldHVybiB2b2lkIGVudW0gZWxzZSAnICtcbiAgICAgICdicmVhayBuZXcgY2F0Y2ggYnl0ZSBzdXBlciBjYXNlIHNob3J0IGRlZmF1bHQgZG91YmxlIHB1YmxpYyB0cnkgdGhpcyBzd2l0Y2ggJyArXG4gICAgICAnY29udGludWUgcmV2ZXJzZSBmaXJzdGZhc3QgZmlyc3Rvbmx5IGZvcnVwZGF0ZSBub2ZldGNoIHN1bSBhdmcgbWlub2YgbWF4b2YgY291bnQgJyArXG4gICAgICAnb3JkZXIgZ3JvdXAgYnkgYXNjIGRlc2MgaW5kZXggaGludCBsaWtlIGRpc3BhbHkgZWRpdCBjbGllbnQgc2VydmVyIHR0c2JlZ2luICcgK1xuICAgICAgJ3R0c2NvbW1pdCBzdHIgcmVhbCBkYXRlIGNvbnRhaW5lciBhbnl0eXBlIGNvbW1vbiBkaXYgbW9kJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJyMnLCBlbmQ6ICckJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlJywgZW5kOiAneycsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6ICc6JyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7YmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cyd9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXhhcHRhO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/axapta.js\n");

/***/ })

}]);