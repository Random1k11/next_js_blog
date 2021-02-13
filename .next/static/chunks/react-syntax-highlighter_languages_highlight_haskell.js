(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_haskell"],{

/***/ "./node_modules/highlight.js/lib/languages/haskell.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/haskell.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Haskell\nAuthor: Jeremy Hull <sourdrums@gmail.com>\nContributors: Zena Treep <zena.treep@gmail.com>\nWebsite: https://www.haskell.org\nCategory: functional\n*/\n\nfunction haskell(hljs) {\n  var COMMENT = {\n    variants: [\n      hljs.COMMENT('--', '$'),\n      hljs.COMMENT(\n        '{-',\n        '-}',\n        {\n          contains: ['self']\n        }\n      )\n    ]\n  };\n\n  var PRAGMA = {\n    className: 'meta',\n    begin: '{-#', end: '#-}'\n  };\n\n  var PREPROCESSOR = {\n    className: 'meta',\n    begin: '^#', end: '$'\n  };\n\n  var CONSTRUCTOR = {\n    className: 'type',\n    begin: '\\\\b[A-Z][\\\\w\\']*', // TODO: other constructors (build-in, infix).\n    relevance: 0\n  };\n\n  var LIST = {\n    begin: '\\\\(', end: '\\\\)',\n    illegal: '\"',\n    contains: [\n      PRAGMA,\n      PREPROCESSOR,\n      {className: 'type', begin: '\\\\b[A-Z][\\\\w]*(\\\\((\\\\.\\\\.|,|\\\\w+)\\\\))?'},\n      hljs.inherit(hljs.TITLE_MODE, {begin: '[_a-z][\\\\w\\']*'}),\n      COMMENT\n    ]\n  };\n\n  var RECORD = {\n    begin: '{', end: '}',\n    contains: LIST.contains\n  };\n\n  return {\n    name: 'Haskell',\n    aliases: ['hs'],\n    keywords:\n      'let in if then else case of where do module import hiding ' +\n      'qualified type data newtype deriving class instance as default ' +\n      'infix infixl infixr foreign export ccall stdcall cplusplus ' +\n      'jvm dotnet safe unsafe family forall mdo proc rec',\n    contains: [\n\n      // Top-level constructions.\n\n      {\n        beginKeywords: 'module', end: 'where',\n        keywords: 'module where',\n        contains: [LIST, COMMENT],\n        illegal: '\\\\W\\\\.|;'\n      },\n      {\n        begin: '\\\\bimport\\\\b', end: '$',\n        keywords: 'import qualified as hiding',\n        contains: [LIST, COMMENT],\n        illegal: '\\\\W\\\\.|;'\n      },\n\n      {\n        className: 'class',\n        begin: '^(\\\\s*)?(class|instance)\\\\b', end: 'where',\n        keywords: 'class family instance where',\n        contains: [CONSTRUCTOR, LIST, COMMENT]\n      },\n      {\n        className: 'class',\n        begin: '\\\\b(data|(new)?type)\\\\b', end: '$',\n        keywords: 'data family type newtype deriving',\n        contains: [PRAGMA, CONSTRUCTOR, LIST, RECORD, COMMENT]\n      },\n      {\n        beginKeywords: 'default', end: '$',\n        contains: [CONSTRUCTOR, LIST, COMMENT]\n      },\n      {\n        beginKeywords: 'infix infixl infixr', end: '$',\n        contains: [hljs.C_NUMBER_MODE, COMMENT]\n      },\n      {\n        begin: '\\\\bforeign\\\\b', end: '$',\n        keywords: 'foreign import export ccall stdcall cplusplus jvm ' +\n                  'dotnet safe unsafe',\n        contains: [CONSTRUCTOR, hljs.QUOTE_STRING_MODE, COMMENT]\n      },\n      {\n        className: 'meta',\n        begin: '#!\\\\/usr\\\\/bin\\\\/env\\ runhaskell', end: '$'\n      },\n\n      // \"Whitespaces\".\n\n      PRAGMA,\n      PREPROCESSOR,\n\n      // Literals and names.\n\n      // TODO: characters.\n      hljs.QUOTE_STRING_MODE,\n      hljs.C_NUMBER_MODE,\n      CONSTRUCTOR,\n      hljs.inherit(hljs.TITLE_MODE, {begin: '^[_a-z][\\\\w\\']*'}),\n\n      COMMENT,\n\n      {begin: '->|<-'} // No markup, relevance booster\n    ]\n  };\n}\n\nmodule.exports = haskell;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2hhc2tlbGwuanM/M2YzOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUVBQW1FO0FBQzFFLHFDQUFxQyx3QkFBd0I7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHlCQUF5Qjs7QUFFOUQ7O0FBRUEsT0FBTyxlQUFlO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9oYXNrZWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBIYXNrZWxsXG5BdXRob3I6IEplcmVteSBIdWxsIDxzb3VyZHJ1bXNAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBaZW5hIFRyZWVwIDx6ZW5hLnRyZWVwQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3Lmhhc2tlbGwub3JnXG5DYXRlZ29yeTogZnVuY3Rpb25hbFxuKi9cblxuZnVuY3Rpb24gaGFza2VsbChobGpzKSB7XG4gIHZhciBDT01NRU5UID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJy0tJywgJyQnKSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJ3stJyxcbiAgICAgICAgJy19JyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXVxuICAgICAgICB9XG4gICAgICApXG4gICAgXVxuICB9O1xuXG4gIHZhciBQUkFHTUEgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICd7LSMnLCBlbmQ6ICcjLX0nXG4gIH07XG5cbiAgdmFyIFBSRVBST0NFU1NPUiA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogJ14jJywgZW5kOiAnJCdcbiAgfTtcblxuICB2YXIgQ09OU1RSVUNUT1IgPSB7XG4gICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgYmVnaW46ICdcXFxcYltBLVpdW1xcXFx3XFwnXSonLCAvLyBUT0RPOiBvdGhlciBjb25zdHJ1Y3RvcnMgKGJ1aWxkLWluLCBpbmZpeCkuXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIExJU1QgPSB7XG4gICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICBpbGxlZ2FsOiAnXCInLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBQUkFHTUEsXG4gICAgICBQUkVQUk9DRVNTT1IsXG4gICAgICB7Y2xhc3NOYW1lOiAndHlwZScsIGJlZ2luOiAnXFxcXGJbQS1aXVtcXFxcd10qKFxcXFwoKFxcXFwuXFxcXC58LHxcXFxcdyspXFxcXCkpPyd9LFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge2JlZ2luOiAnW19hLXpdW1xcXFx3XFwnXSonfSksXG4gICAgICBDT01NRU5UXG4gICAgXVxuICB9O1xuXG4gIHZhciBSRUNPUkQgPSB7XG4gICAgYmVnaW46ICd7JywgZW5kOiAnfScsXG4gICAgY29udGFpbnM6IExJU1QuY29udGFpbnNcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdIYXNrZWxsJyxcbiAgICBhbGlhc2VzOiBbJ2hzJ10sXG4gICAga2V5d29yZHM6XG4gICAgICAnbGV0IGluIGlmIHRoZW4gZWxzZSBjYXNlIG9mIHdoZXJlIGRvIG1vZHVsZSBpbXBvcnQgaGlkaW5nICcgK1xuICAgICAgJ3F1YWxpZmllZCB0eXBlIGRhdGEgbmV3dHlwZSBkZXJpdmluZyBjbGFzcyBpbnN0YW5jZSBhcyBkZWZhdWx0ICcgK1xuICAgICAgJ2luZml4IGluZml4bCBpbmZpeHIgZm9yZWlnbiBleHBvcnQgY2NhbGwgc3RkY2FsbCBjcGx1c3BsdXMgJyArXG4gICAgICAnanZtIGRvdG5ldCBzYWZlIHVuc2FmZSBmYW1pbHkgZm9yYWxsIG1kbyBwcm9jIHJlYycsXG4gICAgY29udGFpbnM6IFtcblxuICAgICAgLy8gVG9wLWxldmVsIGNvbnN0cnVjdGlvbnMuXG5cbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ21vZHVsZScsIGVuZDogJ3doZXJlJyxcbiAgICAgICAga2V5d29yZHM6ICdtb2R1bGUgd2hlcmUnLFxuICAgICAgICBjb250YWluczogW0xJU1QsIENPTU1FTlRdLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXFdcXFxcLnw7J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcYmltcG9ydFxcXFxiJywgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiAnaW1wb3J0IHF1YWxpZmllZCBhcyBoaWRpbmcnLFxuICAgICAgICBjb250YWluczogW0xJU1QsIENPTU1FTlRdLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXFdcXFxcLnw7J1xuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luOiAnXihcXFxccyopPyhjbGFzc3xpbnN0YW5jZSlcXFxcYicsIGVuZDogJ3doZXJlJyxcbiAgICAgICAga2V5d29yZHM6ICdjbGFzcyBmYW1pbHkgaW5zdGFuY2Ugd2hlcmUnLFxuICAgICAgICBjb250YWluczogW0NPTlNUUlVDVE9SLCBMSVNULCBDT01NRU5UXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKGRhdGF8KG5ldyk/dHlwZSlcXFxcYicsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ2RhdGEgZmFtaWx5IHR5cGUgbmV3dHlwZSBkZXJpdmluZycsXG4gICAgICAgIGNvbnRhaW5zOiBbUFJBR01BLCBDT05TVFJVQ1RPUiwgTElTVCwgUkVDT1JELCBDT01NRU5UXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2RlZmF1bHQnLCBlbmQ6ICckJyxcbiAgICAgICAgY29udGFpbnM6IFtDT05TVFJVQ1RPUiwgTElTVCwgQ09NTUVOVF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdpbmZpeCBpbmZpeGwgaW5maXhyJywgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5DX05VTUJFUl9NT0RFLCBDT01NRU5UXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcYmZvcmVpZ25cXFxcYicsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ2ZvcmVpZ24gaW1wb3J0IGV4cG9ydCBjY2FsbCBzdGRjYWxsIGNwbHVzcGx1cyBqdm0gJyArXG4gICAgICAgICAgICAgICAgICAnZG90bmV0IHNhZmUgdW5zYWZlJyxcbiAgICAgICAgY29udGFpbnM6IFtDT05TVFJVQ1RPUiwgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwgQ09NTUVOVF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJyMhXFxcXC91c3JcXFxcL2JpblxcXFwvZW52XFwgcnVuaGFza2VsbCcsIGVuZDogJyQnXG4gICAgICB9LFxuXG4gICAgICAvLyBcIldoaXRlc3BhY2VzXCIuXG5cbiAgICAgIFBSQUdNQSxcbiAgICAgIFBSRVBST0NFU1NPUixcblxuICAgICAgLy8gTGl0ZXJhbHMgYW5kIG5hbWVzLlxuXG4gICAgICAvLyBUT0RPOiBjaGFyYWN0ZXJzLlxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIENPTlNUUlVDVE9SLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge2JlZ2luOiAnXltfYS16XVtcXFxcd1xcJ10qJ30pLFxuXG4gICAgICBDT01NRU5ULFxuXG4gICAgICB7YmVnaW46ICctPnw8LSd9IC8vIE5vIG1hcmt1cCwgcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFza2VsbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/haskell.js\n");

/***/ })

}]);