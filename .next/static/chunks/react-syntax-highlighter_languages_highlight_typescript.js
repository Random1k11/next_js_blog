(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_typescript"],{

/***/ "./node_modules/highlight.js/lib/languages/typescript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/typescript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';\nconst KEYWORDS = [\n  \"as\", // for exports\n  \"in\",\n  \"of\",\n  \"if\",\n  \"for\",\n  \"while\",\n  \"finally\",\n  \"var\",\n  \"new\",\n  \"function\",\n  \"do\",\n  \"return\",\n  \"void\",\n  \"else\",\n  \"break\",\n  \"catch\",\n  \"instanceof\",\n  \"with\",\n  \"throw\",\n  \"case\",\n  \"default\",\n  \"try\",\n  \"switch\",\n  \"continue\",\n  \"typeof\",\n  \"delete\",\n  \"let\",\n  \"yield\",\n  \"const\",\n  \"class\",\n  // JS handles these with a special rule\n  // \"get\",\n  // \"set\",\n  \"debugger\",\n  \"async\",\n  \"await\",\n  \"static\",\n  \"import\",\n  \"from\",\n  \"export\",\n  \"extends\"\n];\nconst LITERALS = [\n  \"true\",\n  \"false\",\n  \"null\",\n  \"undefined\",\n  \"NaN\",\n  \"Infinity\"\n];\n\nconst TYPES = [\n  \"Intl\",\n  \"DataView\",\n  \"Number\",\n  \"Math\",\n  \"Date\",\n  \"String\",\n  \"RegExp\",\n  \"Object\",\n  \"Function\",\n  \"Boolean\",\n  \"Error\",\n  \"Symbol\",\n  \"Set\",\n  \"Map\",\n  \"WeakSet\",\n  \"WeakMap\",\n  \"Proxy\",\n  \"Reflect\",\n  \"JSON\",\n  \"Promise\",\n  \"Float64Array\",\n  \"Int16Array\",\n  \"Int32Array\",\n  \"Int8Array\",\n  \"Uint16Array\",\n  \"Uint32Array\",\n  \"Float32Array\",\n  \"Array\",\n  \"Uint8Array\",\n  \"Uint8ClampedArray\",\n  \"ArrayBuffer\"\n];\n\nconst ERROR_TYPES = [\n  \"EvalError\",\n  \"InternalError\",\n  \"RangeError\",\n  \"ReferenceError\",\n  \"SyntaxError\",\n  \"TypeError\",\n  \"URIError\"\n];\n\nconst BUILT_IN_GLOBALS = [\n  \"setInterval\",\n  \"setTimeout\",\n  \"clearInterval\",\n  \"clearTimeout\",\n\n  \"require\",\n  \"exports\",\n\n  \"eval\",\n  \"isFinite\",\n  \"isNaN\",\n  \"parseFloat\",\n  \"parseInt\",\n  \"decodeURI\",\n  \"decodeURIComponent\",\n  \"encodeURI\",\n  \"encodeURIComponent\",\n  \"escape\",\n  \"unescape\"\n];\n\nconst BUILT_IN_VARIABLES = [\n  \"arguments\",\n  \"this\",\n  \"super\",\n  \"console\",\n  \"window\",\n  \"document\",\n  \"localStorage\",\n  \"module\",\n  \"global\" // Node.js\n];\n\nconst BUILT_INS = [].concat(\n  BUILT_IN_GLOBALS,\n  BUILT_IN_VARIABLES,\n  TYPES,\n  ERROR_TYPES\n);\n\n/*\nLanguage: TypeScript\nAuthor: Panu Horsmalahti <panu.horsmalahti@iki.fi>\nContributors: Ike Ku <dempfi@yahoo.com>\nDescription: TypeScript is a strict superset of JavaScript\nWebsite: https://www.typescriptlang.org\nCategory: common, scripting\n*/\n\nfunction typescript(hljs) {\n  var IDENT_RE$1 = IDENT_RE;\n  var TYPES = [\n    \"any\",\n    \"void\",\n    \"number\",\n    \"boolean\",\n    \"string\",\n    \"object\",\n    \"never\",\n    \"enum\"\n  ];\n  var TS_SPECIFIC_KEYWORDS = [\n    \"type\",\n    \"namespace\",\n    \"typedef\",\n    \"interface\",\n    \"public\",\n    \"private\",\n    \"protected\",\n    \"implements\",\n    \"declare\",\n    \"abstract\",\n    \"readonly\"\n  ];\n  var KEYWORDS$1 = {\n    $pattern: IDENT_RE,\n    keyword: KEYWORDS.concat(TS_SPECIFIC_KEYWORDS).join(\" \"),\n    literal: LITERALS.join(\" \"),\n    built_in: BUILT_INS.concat(TYPES).join(\" \")\n  };\n  var DECORATOR = {\n    className: 'meta',\n    begin: '@' + IDENT_RE$1,\n  };\n  var NUMBER = {\n    className: 'number',\n    variants: [\n      { begin: '\\\\b(0[bB][01]+)n?' },\n      { begin: '\\\\b(0[oO][0-7]+)n?' },\n      { begin: hljs.C_NUMBER_RE + 'n?' }\n    ],\n    relevance: 0\n  };\n  var SUBST = {\n    className: 'subst',\n    begin: '\\\\$\\\\{', end: '\\\\}',\n    keywords: KEYWORDS$1,\n    contains: [] // defined later\n  };\n  var HTML_TEMPLATE = {\n    begin: 'html`', end: '',\n    starts: {\n      end: '`', returnEnd: false,\n      contains: [\n        hljs.BACKSLASH_ESCAPE,\n        SUBST\n      ],\n      subLanguage: 'xml',\n    }\n  };\n  var CSS_TEMPLATE = {\n    begin: 'css`', end: '',\n    starts: {\n      end: '`', returnEnd: false,\n      contains: [\n        hljs.BACKSLASH_ESCAPE,\n        SUBST\n      ],\n      subLanguage: 'css',\n    }\n  };\n  var TEMPLATE_STRING = {\n    className: 'string',\n    begin: '`', end: '`',\n    contains: [\n      hljs.BACKSLASH_ESCAPE,\n      SUBST\n    ]\n  };\n  SUBST.contains = [\n    hljs.APOS_STRING_MODE,\n    hljs.QUOTE_STRING_MODE,\n    HTML_TEMPLATE,\n    CSS_TEMPLATE,\n    TEMPLATE_STRING,\n    NUMBER,\n    hljs.REGEXP_MODE\n  ];\n  var ARGUMENTS =\n  {\n    begin: '\\\\(',\n    end: /\\)/,\n    keywords: KEYWORDS$1,\n    contains: [\n      'self',\n      hljs.QUOTE_STRING_MODE,\n      hljs.APOS_STRING_MODE,\n      hljs.NUMBER_MODE\n    ]\n  };\n  var PARAMS = {\n    className: 'params',\n    begin: /\\(/, end: /\\)/,\n    excludeBegin: true,\n    excludeEnd: true,\n    keywords: KEYWORDS$1,\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      DECORATOR,\n      ARGUMENTS\n    ]\n  };\n\n  return {\n    name: 'TypeScript',\n    aliases: ['ts'],\n    keywords: KEYWORDS$1,\n    contains: [\n      hljs.SHEBANG(),\n      {\n        className: 'meta',\n        begin: /^\\s*['\"]use strict['\"]/\n      },\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      HTML_TEMPLATE,\n      CSS_TEMPLATE,\n      TEMPLATE_STRING,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      NUMBER,\n      { // \"value\" container\n        begin: '(' + hljs.RE_STARTERS_RE + '|\\\\b(case|return|throw)\\\\b)\\\\s*',\n        keywords: 'return throw case',\n        contains: [\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE,\n          hljs.REGEXP_MODE,\n          {\n            className: 'function',\n            // we have to count the parens to make sure we actually have the\n            // correct bounding ( ) before the =>.  There could be any number of\n            // sub-expressions inside also surrounded by parens.\n            begin: '(\\\\([^(]*' +\n              '(\\\\([^(]*' +\n                '(\\\\([^(]*' +\n                '\\\\))?' +\n              '\\\\))?' +\n            '\\\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\\\s*=>', returnBegin: true,\n            end: '\\\\s*=>',\n            contains: [\n              {\n                className: 'params',\n                variants: [\n                  {\n                    begin: hljs.UNDERSCORE_IDENT_RE\n                  },\n                  {\n                    className: null,\n                    begin: /\\(\\s*\\)/,\n                    skip: true\n                  },\n                  {\n                    begin: /\\(/, end: /\\)/,\n                    excludeBegin: true, excludeEnd: true,\n                    keywords: KEYWORDS$1,\n                    contains: ARGUMENTS.contains\n                  }\n                ]\n              }\n            ]\n          }\n        ],\n        relevance: 0\n      },\n      {\n        className: 'function',\n        beginKeywords: 'function', end: /[\\{;]/, excludeEnd: true,\n        keywords: KEYWORDS$1,\n        contains: [\n          'self',\n          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),\n          PARAMS\n        ],\n        illegal: /%/,\n        relevance: 0 // () => {} is more typical in TypeScript\n      },\n      {\n        beginKeywords: 'constructor', end: /[\\{;]/, excludeEnd: true,\n        contains: [\n          'self',\n          PARAMS\n        ]\n      },\n      { // prevent references like module.id from being higlighted as module definitions\n        begin: /module\\./,\n        keywords: { built_in: 'module' },\n        relevance: 0\n      },\n      {\n        beginKeywords: 'module', end: /\\{/, excludeEnd: true\n      },\n      {\n        beginKeywords: 'interface', end: /\\{/, excludeEnd: true,\n        keywords: 'interface extends'\n      },\n      {\n        begin: /\\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`\n      },\n      {\n        begin: '\\\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots\n      },\n      DECORATOR,\n      ARGUMENTS\n    ]\n  };\n}\n\nmodule.exports = typescript;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R5cGVzY3JpcHQuanM/YWY0NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw2QkFBNkI7QUFDcEMsT0FBTyw4QkFBOEI7QUFDckMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG9CQUFvQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsT0FBTztBQUNQO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQSxPQUFPO0FBQ1A7QUFDQSx5Q0FBeUM7QUFDekMsT0FBTztBQUNQO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R5cGVzY3JpcHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJREVOVF9SRSA9ICdbQS1aYS16JF9dWzAtOUEtWmEteiRfXSonO1xuY29uc3QgS0VZV09SRFMgPSBbXG4gIFwiYXNcIiwgLy8gZm9yIGV4cG9ydHNcbiAgXCJpblwiLFxuICBcIm9mXCIsXG4gIFwiaWZcIixcbiAgXCJmb3JcIixcbiAgXCJ3aGlsZVwiLFxuICBcImZpbmFsbHlcIixcbiAgXCJ2YXJcIixcbiAgXCJuZXdcIixcbiAgXCJmdW5jdGlvblwiLFxuICBcImRvXCIsXG4gIFwicmV0dXJuXCIsXG4gIFwidm9pZFwiLFxuICBcImVsc2VcIixcbiAgXCJicmVha1wiLFxuICBcImNhdGNoXCIsXG4gIFwiaW5zdGFuY2VvZlwiLFxuICBcIndpdGhcIixcbiAgXCJ0aHJvd1wiLFxuICBcImNhc2VcIixcbiAgXCJkZWZhdWx0XCIsXG4gIFwidHJ5XCIsXG4gIFwic3dpdGNoXCIsXG4gIFwiY29udGludWVcIixcbiAgXCJ0eXBlb2ZcIixcbiAgXCJkZWxldGVcIixcbiAgXCJsZXRcIixcbiAgXCJ5aWVsZFwiLFxuICBcImNvbnN0XCIsXG4gIFwiY2xhc3NcIixcbiAgLy8gSlMgaGFuZGxlcyB0aGVzZSB3aXRoIGEgc3BlY2lhbCBydWxlXG4gIC8vIFwiZ2V0XCIsXG4gIC8vIFwic2V0XCIsXG4gIFwiZGVidWdnZXJcIixcbiAgXCJhc3luY1wiLFxuICBcImF3YWl0XCIsXG4gIFwic3RhdGljXCIsXG4gIFwiaW1wb3J0XCIsXG4gIFwiZnJvbVwiLFxuICBcImV4cG9ydFwiLFxuICBcImV4dGVuZHNcIlxuXTtcbmNvbnN0IExJVEVSQUxTID0gW1xuICBcInRydWVcIixcbiAgXCJmYWxzZVwiLFxuICBcIm51bGxcIixcbiAgXCJ1bmRlZmluZWRcIixcbiAgXCJOYU5cIixcbiAgXCJJbmZpbml0eVwiXG5dO1xuXG5jb25zdCBUWVBFUyA9IFtcbiAgXCJJbnRsXCIsXG4gIFwiRGF0YVZpZXdcIixcbiAgXCJOdW1iZXJcIixcbiAgXCJNYXRoXCIsXG4gIFwiRGF0ZVwiLFxuICBcIlN0cmluZ1wiLFxuICBcIlJlZ0V4cFwiLFxuICBcIk9iamVjdFwiLFxuICBcIkZ1bmN0aW9uXCIsXG4gIFwiQm9vbGVhblwiLFxuICBcIkVycm9yXCIsXG4gIFwiU3ltYm9sXCIsXG4gIFwiU2V0XCIsXG4gIFwiTWFwXCIsXG4gIFwiV2Vha1NldFwiLFxuICBcIldlYWtNYXBcIixcbiAgXCJQcm94eVwiLFxuICBcIlJlZmxlY3RcIixcbiAgXCJKU09OXCIsXG4gIFwiUHJvbWlzZVwiLFxuICBcIkZsb2F0NjRBcnJheVwiLFxuICBcIkludDE2QXJyYXlcIixcbiAgXCJJbnQzMkFycmF5XCIsXG4gIFwiSW50OEFycmF5XCIsXG4gIFwiVWludDE2QXJyYXlcIixcbiAgXCJVaW50MzJBcnJheVwiLFxuICBcIkZsb2F0MzJBcnJheVwiLFxuICBcIkFycmF5XCIsXG4gIFwiVWludDhBcnJheVwiLFxuICBcIlVpbnQ4Q2xhbXBlZEFycmF5XCIsXG4gIFwiQXJyYXlCdWZmZXJcIlxuXTtcblxuY29uc3QgRVJST1JfVFlQRVMgPSBbXG4gIFwiRXZhbEVycm9yXCIsXG4gIFwiSW50ZXJuYWxFcnJvclwiLFxuICBcIlJhbmdlRXJyb3JcIixcbiAgXCJSZWZlcmVuY2VFcnJvclwiLFxuICBcIlN5bnRheEVycm9yXCIsXG4gIFwiVHlwZUVycm9yXCIsXG4gIFwiVVJJRXJyb3JcIlxuXTtcblxuY29uc3QgQlVJTFRfSU5fR0xPQkFMUyA9IFtcbiAgXCJzZXRJbnRlcnZhbFwiLFxuICBcInNldFRpbWVvdXRcIixcbiAgXCJjbGVhckludGVydmFsXCIsXG4gIFwiY2xlYXJUaW1lb3V0XCIsXG5cbiAgXCJyZXF1aXJlXCIsXG4gIFwiZXhwb3J0c1wiLFxuXG4gIFwiZXZhbFwiLFxuICBcImlzRmluaXRlXCIsXG4gIFwiaXNOYU5cIixcbiAgXCJwYXJzZUZsb2F0XCIsXG4gIFwicGFyc2VJbnRcIixcbiAgXCJkZWNvZGVVUklcIixcbiAgXCJkZWNvZGVVUklDb21wb25lbnRcIixcbiAgXCJlbmNvZGVVUklcIixcbiAgXCJlbmNvZGVVUklDb21wb25lbnRcIixcbiAgXCJlc2NhcGVcIixcbiAgXCJ1bmVzY2FwZVwiXG5dO1xuXG5jb25zdCBCVUlMVF9JTl9WQVJJQUJMRVMgPSBbXG4gIFwiYXJndW1lbnRzXCIsXG4gIFwidGhpc1wiLFxuICBcInN1cGVyXCIsXG4gIFwiY29uc29sZVwiLFxuICBcIndpbmRvd1wiLFxuICBcImRvY3VtZW50XCIsXG4gIFwibG9jYWxTdG9yYWdlXCIsXG4gIFwibW9kdWxlXCIsXG4gIFwiZ2xvYmFsXCIgLy8gTm9kZS5qc1xuXTtcblxuY29uc3QgQlVJTFRfSU5TID0gW10uY29uY2F0KFxuICBCVUlMVF9JTl9HTE9CQUxTLFxuICBCVUlMVF9JTl9WQVJJQUJMRVMsXG4gIFRZUEVTLFxuICBFUlJPUl9UWVBFU1xuKTtcblxuLypcbkxhbmd1YWdlOiBUeXBlU2NyaXB0XG5BdXRob3I6IFBhbnUgSG9yc21hbGFodGkgPHBhbnUuaG9yc21hbGFodGlAaWtpLmZpPlxuQ29udHJpYnV0b3JzOiBJa2UgS3UgPGRlbXBmaUB5YWhvby5jb20+XG5EZXNjcmlwdGlvbjogVHlwZVNjcmlwdCBpcyBhIHN0cmljdCBzdXBlcnNldCBvZiBKYXZhU2NyaXB0XG5XZWJzaXRlOiBodHRwczovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmdcbkNhdGVnb3J5OiBjb21tb24sIHNjcmlwdGluZ1xuKi9cblxuZnVuY3Rpb24gdHlwZXNjcmlwdChobGpzKSB7XG4gIHZhciBJREVOVF9SRSQxID0gSURFTlRfUkU7XG4gIHZhciBUWVBFUyA9IFtcbiAgICBcImFueVwiLFxuICAgIFwidm9pZFwiLFxuICAgIFwibnVtYmVyXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAgXCJzdHJpbmdcIixcbiAgICBcIm9iamVjdFwiLFxuICAgIFwibmV2ZXJcIixcbiAgICBcImVudW1cIlxuICBdO1xuICB2YXIgVFNfU1BFQ0lGSUNfS0VZV09SRFMgPSBbXG4gICAgXCJ0eXBlXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwicHVibGljXCIsXG4gICAgXCJwcml2YXRlXCIsXG4gICAgXCJwcm90ZWN0ZWRcIixcbiAgICBcImltcGxlbWVudHNcIixcbiAgICBcImRlY2xhcmVcIixcbiAgICBcImFic3RyYWN0XCIsXG4gICAgXCJyZWFkb25seVwiXG4gIF07XG4gIHZhciBLRVlXT1JEUyQxID0ge1xuICAgICRwYXR0ZXJuOiBJREVOVF9SRSxcbiAgICBrZXl3b3JkOiBLRVlXT1JEUy5jb25jYXQoVFNfU1BFQ0lGSUNfS0VZV09SRFMpLmpvaW4oXCIgXCIpLFxuICAgIGxpdGVyYWw6IExJVEVSQUxTLmpvaW4oXCIgXCIpLFxuICAgIGJ1aWx0X2luOiBCVUlMVF9JTlMuY29uY2F0KFRZUEVTKS5qb2luKFwiIFwiKVxuICB9O1xuICB2YXIgREVDT1JBVE9SID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnQCcgKyBJREVOVF9SRSQxLFxuICB9O1xuICB2YXIgTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHsgYmVnaW46ICdcXFxcYigwW2JCXVswMV0rKW4/JyB9LFxuICAgICAgeyBiZWdpbjogJ1xcXFxiKDBbb09dWzAtN10rKW4/JyB9LFxuICAgICAgeyBiZWdpbjogaGxqcy5DX05VTUJFUl9SRSArICduPycgfVxuICAgIF0sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHZhciBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46ICdcXFxcJFxcXFx7JywgZW5kOiAnXFxcXH0nLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgIGNvbnRhaW5zOiBbXSAvLyBkZWZpbmVkIGxhdGVyXG4gIH07XG4gIHZhciBIVE1MX1RFTVBMQVRFID0ge1xuICAgIGJlZ2luOiAnaHRtbGAnLCBlbmQ6ICcnLFxuICAgIHN0YXJ0czoge1xuICAgICAgZW5kOiAnYCcsIHJldHVybkVuZDogZmFsc2UsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgIFNVQlNUXG4gICAgICBdLFxuICAgICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgIH1cbiAgfTtcbiAgdmFyIENTU19URU1QTEFURSA9IHtcbiAgICBiZWdpbjogJ2Nzc2AnLCBlbmQ6ICcnLFxuICAgIHN0YXJ0czoge1xuICAgICAgZW5kOiAnYCcsIHJldHVybkVuZDogZmFsc2UsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgIFNVQlNUXG4gICAgICBdLFxuICAgICAgc3ViTGFuZ3VhZ2U6ICdjc3MnLFxuICAgIH1cbiAgfTtcbiAgdmFyIFRFTVBMQVRFX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnYCcsIGVuZDogJ2AnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBTVUJTVFxuICAgIF1cbiAgfTtcbiAgU1VCU1QuY29udGFpbnMgPSBbXG4gICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgSFRNTF9URU1QTEFURSxcbiAgICBDU1NfVEVNUExBVEUsXG4gICAgVEVNUExBVEVfU1RSSU5HLFxuICAgIE5VTUJFUixcbiAgICBobGpzLlJFR0VYUF9NT0RFXG4gIF07XG4gIHZhciBBUkdVTUVOVFMgPVxuICB7XG4gICAgYmVnaW46ICdcXFxcKCcsXG4gICAgZW5kOiAvXFwpLyxcbiAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICBjb250YWluczogW1xuICAgICAgJ3NlbGYnLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG4gIHZhciBQQVJBTVMgPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICBiZWdpbjogL1xcKC8sIGVuZDogL1xcKS8sXG4gICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBERUNPUkFUT1IsXG4gICAgICBBUkdVTUVOVFNcbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnVHlwZVNjcmlwdCcsXG4gICAgYWxpYXNlczogWyd0cyddLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlNIRUJBTkcoKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAvXlxccypbJ1wiXXVzZSBzdHJpY3RbJ1wiXS9cbiAgICAgIH0sXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgSFRNTF9URU1QTEFURSxcbiAgICAgIENTU19URU1QTEFURSxcbiAgICAgIFRFTVBMQVRFX1NUUklORyxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBOVU1CRVIsXG4gICAgICB7IC8vIFwidmFsdWVcIiBjb250YWluZXJcbiAgICAgICAgYmVnaW46ICcoJyArIGhsanMuUkVfU1RBUlRFUlNfUkUgKyAnfFxcXFxiKGNhc2V8cmV0dXJufHRocm93KVxcXFxiKVxcXFxzKicsXG4gICAgICAgIGtleXdvcmRzOiAncmV0dXJuIHRocm93IGNhc2UnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuUkVHRVhQX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBjb3VudCB0aGUgcGFyZW5zIHRvIG1ha2Ugc3VyZSB3ZSBhY3R1YWxseSBoYXZlIHRoZVxuICAgICAgICAgICAgLy8gY29ycmVjdCBib3VuZGluZyAoICkgYmVmb3JlIHRoZSA9Pi4gIFRoZXJlIGNvdWxkIGJlIGFueSBudW1iZXIgb2ZcbiAgICAgICAgICAgIC8vIHN1Yi1leHByZXNzaW9ucyBpbnNpZGUgYWxzbyBzdXJyb3VuZGVkIGJ5IHBhcmVucy5cbiAgICAgICAgICAgIGJlZ2luOiAnKFxcXFwoW14oXSonICtcbiAgICAgICAgICAgICAgJyhcXFxcKFteKF0qJyArXG4gICAgICAgICAgICAgICAgJyhcXFxcKFteKF0qJyArXG4gICAgICAgICAgICAgICAgJ1xcXFwpKT8nICtcbiAgICAgICAgICAgICAgJ1xcXFwpKT8nICtcbiAgICAgICAgICAgICdcXFxcKXwnICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJylcXFxccyo9PicsIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgZW5kOiAnXFxcXHMqPT4nLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogL1xcKFxccypcXCkvLFxuICAgICAgICAgICAgICAgICAgICBza2lwOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSwgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBBUkdVTUVOVFMuY29udGFpbnNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLCBlbmQ6IC9bXFx7O10vLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwgeyBiZWdpbjogSURFTlRfUkUkMSB9KSxcbiAgICAgICAgICBQQVJBTVNcbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogLyUvLFxuICAgICAgICByZWxldmFuY2U6IDAgLy8gKCkgPT4ge30gaXMgbW9yZSB0eXBpY2FsIGluIFR5cGVTY3JpcHRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjb25zdHJ1Y3RvcicsIGVuZDogL1tcXHs7XS8sIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgIFBBUkFNU1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyAvLyBwcmV2ZW50IHJlZmVyZW5jZXMgbGlrZSBtb2R1bGUuaWQgZnJvbSBiZWluZyBoaWdsaWdodGVkIGFzIG1vZHVsZSBkZWZpbml0aW9uc1xuICAgICAgICBiZWdpbjogL21vZHVsZVxcLi8sXG4gICAgICAgIGtleXdvcmRzOiB7IGJ1aWx0X2luOiAnbW9kdWxlJyB9LFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdtb2R1bGUnLCBlbmQ6IC9cXHsvLCBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnaW50ZXJmYWNlJywgZW5kOiAvXFx7LywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAga2V5d29yZHM6ICdpbnRlcmZhY2UgZXh0ZW5kcydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwkWyguXS8gLy8gcmVsZXZhbmNlIGJvb3N0ZXIgZm9yIGEgcGF0dGVybiBjb21tb24gdG8gSlMgbGliczogYCQoc29tZXRoaW5nKWAgYW5kIGAkLnNvbWV0aGluZ2BcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXC4nICsgaGxqcy5JREVOVF9SRSwgcmVsZXZhbmNlOiAwIC8vIGhhY2s6IHByZXZlbnRzIGRldGVjdGlvbiBvZiBrZXl3b3JkcyBhZnRlciBkb3RzXG4gICAgICB9LFxuICAgICAgREVDT1JBVE9SLFxuICAgICAgQVJHVU1FTlRTXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVzY3JpcHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/typescript.js\n");

/***/ })

}]);