(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_gams"],{

/***/ "./node_modules/highlight.js/lib/languages/gams.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/gams.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n Language: GAMS\n Author: Stefan Bechert <stefan.bechert@gmx.net>\n Contributors: Oleg Efimov <efimovov@gmail.com>, Mikko Kouhia <mikko.kouhia@iki.fi>\n Description: The General Algebraic Modeling System language\n Website: https://www.gams.com\n Category: scientific\n */\n\nfunction gams (hljs) {\n  var KEYWORDS = {\n    keyword:\n      'abort acronym acronyms alias all and assign binary card diag display ' +\n      'else eq file files for free ge gt if integer le loop lt maximizing ' +\n      'minimizing model models ne negative no not option options or ord ' +\n      'positive prod put putpage puttl repeat sameas semicont semiint smax ' +\n      'smin solve sos1 sos2 sum system table then until using while xor yes',\n    literal: 'eps inf na',\n    built_in:\n      'abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy ' +\n      'cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact ' +\n      'floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max ' +\n      'min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power ' +\n      'randBinomial randLinear randTriangle round rPower sigmoid sign ' +\n      'signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt ' +\n      'tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp ' +\n      'bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt ' +\n      'rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear ' +\n      'jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion ' +\n      'handleCollect handleDelete handleStatus handleSubmit heapFree ' +\n      'heapLimit heapSize jobHandle jobKill jobStatus jobTerminate ' +\n      'licenseLevel licenseStatus maxExecError sleep timeClose timeComp ' +\n      'timeElapsed timeExec timeStart'\n  };\n  var PARAMS = {\n    className: 'params',\n    begin: /\\(/, end: /\\)/,\n    excludeBegin: true,\n    excludeEnd: true,\n  };\n  var SYMBOLS = {\n    className: 'symbol',\n    variants: [\n      {begin: /\\=[lgenxc]=/},\n      {begin: /\\$/},\n    ]\n  };\n  var QSTR = { // One-line quoted comment string\n    className: 'comment',\n    variants: [\n      {begin: '\\'', end: '\\''},\n      {begin: '\"', end: '\"'},\n    ],\n    illegal: '\\\\n',\n    contains: [hljs.BACKSLASH_ESCAPE]\n  };\n  var ASSIGNMENT = {\n    begin: '/',\n    end: '/',\n    keywords: KEYWORDS,\n    contains: [\n      QSTR,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.APOS_STRING_MODE,\n      hljs.C_NUMBER_MODE,\n    ],\n  };\n  var DESCTEXT = { // Parameter/set/variable description text\n    begin: /[a-z][a-z0-9_]*(\\([a-z0-9_, ]*\\))?[ \\t]+/,\n    excludeBegin: true,\n    end: '$',\n    endsWithParent: true,\n    contains: [\n      QSTR,\n      ASSIGNMENT,\n      {\n        className: 'comment',\n        begin: /([ ]*[a-z0-9&#*=?@>\\\\<:\\-,()$\\[\\]_.{}!+%^]+)+/,\n        relevance: 0\n      },\n    ],\n  };\n\n  return {\n    name: 'GAMS',\n    aliases: ['gms'],\n    case_insensitive: true,\n    keywords: KEYWORDS,\n    contains: [\n      hljs.COMMENT(/^\\$ontext/, /^\\$offtext/),\n      {\n        className: 'meta',\n        begin: '^\\\\$[a-z0-9]+',\n        end: '$',\n        returnBegin: true,\n        contains: [\n          {\n            className: 'meta-keyword',\n            begin: '^\\\\$[a-z0-9]+',\n          }\n        ]\n      },\n      hljs.COMMENT('^\\\\*', '$'),\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.APOS_STRING_MODE,\n      // Declarations\n      {\n        beginKeywords:\n          'set sets parameter parameters variable variables ' +\n          'scalar scalars equation equations',\n        end: ';',\n        contains: [\n          hljs.COMMENT('^\\\\*', '$'),\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE,\n          hljs.QUOTE_STRING_MODE,\n          hljs.APOS_STRING_MODE,\n          ASSIGNMENT,\n          DESCTEXT,\n        ]\n      },\n      { // table environment\n        beginKeywords: 'table',\n        end: ';',\n        returnBegin: true,\n        contains: [\n          { // table header row\n            beginKeywords: 'table',\n            end: '$',\n            contains: [DESCTEXT],\n          },\n          hljs.COMMENT('^\\\\*', '$'),\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE,\n          hljs.QUOTE_STRING_MODE,\n          hljs.APOS_STRING_MODE,\n          hljs.C_NUMBER_MODE,\n          // Table does not contain DESCTEXT or ASSIGNMENT\n        ]\n      },\n      // Function definitions\n      {\n        className: 'function',\n        begin: /^[a-z][a-z0-9_,\\-+' ()$]+\\.{2}/,\n        returnBegin: true,\n        contains: [\n              { // Function title\n                className: 'title',\n                begin: /^[a-z0-9_]+/,\n              },\n              PARAMS,\n              SYMBOLS,\n            ],\n      },\n      hljs.C_NUMBER_MODE,\n      SYMBOLS,\n    ]\n  };\n}\n\nmodule.exports = gams;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2dhbXMuanM/N2Q5ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxZQUFZO0FBQ25CO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8scUJBQXFCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsRUFBRTtBQUM5QztBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZ2Ftcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gTGFuZ3VhZ2U6IEdBTVNcbiBBdXRob3I6IFN0ZWZhbiBCZWNoZXJ0IDxzdGVmYW4uYmVjaGVydEBnbXgubmV0PlxuIENvbnRyaWJ1dG9yczogT2xlZyBFZmltb3YgPGVmaW1vdm92QGdtYWlsLmNvbT4sIE1pa2tvIEtvdWhpYSA8bWlra28ua291aGlhQGlraS5maT5cbiBEZXNjcmlwdGlvbjogVGhlIEdlbmVyYWwgQWxnZWJyYWljIE1vZGVsaW5nIFN5c3RlbSBsYW5ndWFnZVxuIFdlYnNpdGU6IGh0dHBzOi8vd3d3LmdhbXMuY29tXG4gQ2F0ZWdvcnk6IHNjaWVudGlmaWNcbiAqL1xuXG5mdW5jdGlvbiBnYW1zIChobGpzKSB7XG4gIHZhciBLRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOlxuICAgICAgJ2Fib3J0IGFjcm9ueW0gYWNyb255bXMgYWxpYXMgYWxsIGFuZCBhc3NpZ24gYmluYXJ5IGNhcmQgZGlhZyBkaXNwbGF5ICcgK1xuICAgICAgJ2Vsc2UgZXEgZmlsZSBmaWxlcyBmb3IgZnJlZSBnZSBndCBpZiBpbnRlZ2VyIGxlIGxvb3AgbHQgbWF4aW1pemluZyAnICtcbiAgICAgICdtaW5pbWl6aW5nIG1vZGVsIG1vZGVscyBuZSBuZWdhdGl2ZSBubyBub3Qgb3B0aW9uIG9wdGlvbnMgb3Igb3JkICcgK1xuICAgICAgJ3Bvc2l0aXZlIHByb2QgcHV0IHB1dHBhZ2UgcHV0dGwgcmVwZWF0IHNhbWVhcyBzZW1pY29udCBzZW1paW50IHNtYXggJyArXG4gICAgICAnc21pbiBzb2x2ZSBzb3MxIHNvczIgc3VtIHN5c3RlbSB0YWJsZSB0aGVuIHVudGlsIHVzaW5nIHdoaWxlIHhvciB5ZXMnLFxuICAgIGxpdGVyYWw6ICdlcHMgaW5mIG5hJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdhYnMgYXJjY29zIGFyY3NpbiBhcmN0YW4gYXJjdGFuMiBCZXRhIGJldGFSZWcgYmlub21pYWwgY2VpbCBjZW50cm9weSAnICtcbiAgICAgICdjb3MgY29zaCBjdlBvd2VyIGRpdiBkaXYwIGVEaXN0IGVudHJvcHkgZXJyb3JmIGV4ZWNTZWVkIGV4cCBmYWN0ICcgK1xuICAgICAgJ2Zsb29yIGZyYWMgZ2FtbWEgZ2FtbWFSZWcgbG9nIGxvZ0JldGEgbG9nR2FtbWEgbG9nMTAgbG9nMiBtYXBWYWwgbWF4ICcgK1xuICAgICAgJ21pbiBtb2QgbmNwQ00gbmNwRiBuY3BWVXBvdyBuY3BWVXNpbiBub3JtYWwgcGkgcG9seSBwb3dlciAnICtcbiAgICAgICdyYW5kQmlub21pYWwgcmFuZExpbmVhciByYW5kVHJpYW5nbGUgcm91bmQgclBvd2VyIHNpZ21vaWQgc2lnbiAnICtcbiAgICAgICdzaWduUG93ZXIgc2luIHNpbmggc2xleHAgc2xsb2cxMCBzbHJlYyBzcWV4cCBzcWxvZzEwIHNxciBzcXJlYyBzcXJ0ICcgK1xuICAgICAgJ3RhbiB0YW5oIHRydW5jIHVuaWZvcm0gdW5pZm9ybUludCB2Y1Bvd2VyIGJvb2xfYW5kIGJvb2xfZXF2IGJvb2xfaW1wICcgK1xuICAgICAgJ2Jvb2xfbm90IGJvb2xfb3IgYm9vbF94b3IgaWZUaGVuIHJlbF9lcSByZWxfZ2UgcmVsX2d0IHJlbF9sZSByZWxfbHQgJyArXG4gICAgICAncmVsX25lIGdkYXkgZ2RvdyBnaG91ciBnbGVhcCBnbWlsbGlzZWMgZ21pbnV0ZSBnbW9udGggZ3NlY29uZCBneWVhciAnICtcbiAgICAgICdqZGF0ZSBqbm93IGpzdGFydCBqdGltZSBlcnJvckxldmVsIGV4ZWNFcnJvciBnYW1zUmVsZWFzZSBnYW1zVmVyc2lvbiAnICtcbiAgICAgICdoYW5kbGVDb2xsZWN0IGhhbmRsZURlbGV0ZSBoYW5kbGVTdGF0dXMgaGFuZGxlU3VibWl0IGhlYXBGcmVlICcgK1xuICAgICAgJ2hlYXBMaW1pdCBoZWFwU2l6ZSBqb2JIYW5kbGUgam9iS2lsbCBqb2JTdGF0dXMgam9iVGVybWluYXRlICcgK1xuICAgICAgJ2xpY2Vuc2VMZXZlbCBsaWNlbnNlU3RhdHVzIG1heEV4ZWNFcnJvciBzbGVlcCB0aW1lQ2xvc2UgdGltZUNvbXAgJyArXG4gICAgICAndGltZUVsYXBzZWQgdGltZUV4ZWMgdGltZVN0YXJ0J1xuICB9O1xuICB2YXIgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICBleGNsdWRlRW5kOiB0cnVlLFxuICB9O1xuICB2YXIgU1lNQk9MUyA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IC9cXD1bbGdlbnhjXT0vfSxcbiAgICAgIHtiZWdpbjogL1xcJC99LFxuICAgIF1cbiAgfTtcbiAgdmFyIFFTVFIgPSB7IC8vIE9uZS1saW5lIHF1b3RlZCBjb21tZW50IHN0cmluZ1xuICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46ICdcXCcnLCBlbmQ6ICdcXCcnfSxcbiAgICAgIHtiZWdpbjogJ1wiJywgZW5kOiAnXCInfSxcbiAgICBdLFxuICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gIH07XG4gIHZhciBBU1NJR05NRU5UID0ge1xuICAgIGJlZ2luOiAnLycsXG4gICAgZW5kOiAnLycsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBRU1RSLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgXSxcbiAgfTtcbiAgdmFyIERFU0NURVhUID0geyAvLyBQYXJhbWV0ZXIvc2V0L3ZhcmlhYmxlIGRlc2NyaXB0aW9uIHRleHRcbiAgICBiZWdpbjogL1thLXpdW2EtejAtOV9dKihcXChbYS16MC05XywgXSpcXCkpP1sgXFx0XSsvLFxuICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICBlbmQ6ICckJyxcbiAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgUVNUUixcbiAgICAgIEFTU0lHTk1FTlQsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgICBiZWdpbjogLyhbIF0qW2EtejAtOSYjKj0/QD5cXFxcPDpcXC0sKCkkXFxbXFxdXy57fSErJV5dKykrLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnR0FNUycsXG4gICAgYWxpYXNlczogWydnbXMnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKC9eXFwkb250ZXh0LywgL15cXCRvZmZ0ZXh0LyksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15cXFxcJFthLXowLTldKycsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLWtleXdvcmQnLFxuICAgICAgICAgICAgYmVnaW46ICdeXFxcXCRbYS16MC05XSsnLFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXlxcXFwqJywgJyQnKSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgLy8gRGVjbGFyYXRpb25zXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6XG4gICAgICAgICAgJ3NldCBzZXRzIHBhcmFtZXRlciBwYXJhbWV0ZXJzIHZhcmlhYmxlIHZhcmlhYmxlcyAnICtcbiAgICAgICAgICAnc2NhbGFyIHNjYWxhcnMgZXF1YXRpb24gZXF1YXRpb25zJyxcbiAgICAgICAgZW5kOiAnOycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5DT01NRU5UKCdeXFxcXConLCAnJCcpLFxuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgIEFTU0lHTk1FTlQsXG4gICAgICAgICAgREVTQ1RFWFQsXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7IC8vIHRhYmxlIGVudmlyb25tZW50XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICd0YWJsZScsXG4gICAgICAgIGVuZDogJzsnLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IC8vIHRhYmxlIGhlYWRlciByb3dcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICd0YWJsZScsXG4gICAgICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbREVTQ1RFWFRdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5DT01NRU5UKCdeXFxcXConLCAnJCcpLFxuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAgICAvLyBUYWJsZSBkb2VzIG5vdCBjb250YWluIERFU0NURVhUIG9yIEFTU0lHTk1FTlRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIEZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW46IC9eW2Etel1bYS16MC05XyxcXC0rJyAoKSRdK1xcLnsyfS8sXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7IC8vIEZ1bmN0aW9uIHRpdGxlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvXlthLXowLTlfXSsvLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBQQVJBTVMsXG4gICAgICAgICAgICAgIFNZTUJPTFMsXG4gICAgICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIFNZTUJPTFMsXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/gams.js\n");

/***/ })

}]);