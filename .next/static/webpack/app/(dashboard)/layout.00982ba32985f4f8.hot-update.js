"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/layout",{

/***/ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/zap.js":
/*!*********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/zap.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Zap; }\n/* harmony export */ });\n/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/createLucideIcon.js\");\n/**\n * lucide-react v0.292.0 - ISC\n */\n\n\n\nconst Zap = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Zap\", [\n  [\n    \"polygon\",\n    { points: \"13 2 3 14 12 14 11 22 21 10 12 10 13 2\", key: \"45s27k\" }\n  ]\n]);\n\n\n//# sourceMappingURL=zap.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvemFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVzRDs7QUFFdEQsWUFBWSxnRUFBZ0I7QUFDNUI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUUwQjtBQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL3phcC5qcz83MDljIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogbHVjaWRlLXJlYWN0IHYwLjI5Mi4wIC0gSVNDXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5qcyc7XG5cbmNvbnN0IFphcCA9IGNyZWF0ZUx1Y2lkZUljb24oXCJaYXBcIiwgW1xuICBbXG4gICAgXCJwb2x5Z29uXCIsXG4gICAgeyBwb2ludHM6IFwiMTMgMiAzIDE0IDEyIDE0IDExIDIyIDIxIDEwIDEyIDEwIDEzIDJcIiwga2V5OiBcIjQ1czI3a1wiIH1cbiAgXVxuXSk7XG5cbmV4cG9ydCB7IFphcCBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD16YXAuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/zap.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/free-counter.tsx":
/*!*************************************!*\
  !*** ./components/free-counter.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FreeCounter: function() { return /* binding */ FreeCounter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants.ts\");\n/* harmony import */ var _ui_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/progress */ \"(app-pages-browser)/./components/ui/progress.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Zap!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/zap.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FreeCounter = (param)=>{\n    let { apiLimitCount = 0 } = param;\n    _s();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    if (!mounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            className: \"bg-white/10 border-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-sm text-white mb-4 space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    apiLimitCount,\n                                    \"/ \",\n                                    _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_FREE_COUNTS,\n                                    \" Free Generations\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_progress__WEBPACK_IMPORTED_MODULE_4__.Progress, {\n                                className: \"h-3\",\n                                value: apiLimitCount / _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_FREE_COUNTS * 100\n                            }, void 0, false, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        children: [\n                            \"Upgrade\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FreeCounter, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n_c = FreeCounter;\nvar _c;\n$RefreshReg$(_c, \"FreeCounter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZnJlZS1jb3VudGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNFO0FBQ0E7QUFDTDtBQUNKO0FBQ0Y7QUFNNUIsTUFBTVEsY0FBYztRQUFDLEVBQ3hCQyxnQkFBZ0IsQ0FBQyxFQUNGOztJQUNmLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDTlcsV0FBVztJQUNmLEdBQUcsRUFBRTtJQUVMLElBQUcsQ0FBQ0QsU0FBUTtRQUNSLE9BQU87SUFDWDtJQUlBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDWCwwQ0FBSUE7WUFBQ1csV0FBVTtzQkFDWiw0RUFBQ1YsaURBQVdBO2dCQUFDVSxXQUFVOztrQ0FDbkIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7O29DQUNJTDtvQ0FBYztvQ0FBR0wsdURBQWVBO29DQUFDOzs7Ozs7OzBDQUV0Qyw4REFBQ0Msa0RBQVFBO2dDQUNMUSxXQUFVO2dDQUNWRSxPQUFPLGdCQUFlWCx1REFBZUEsR0FBRTs7Ozs7Ozs7Ozs7O2tDQUcvQyw4REFBQ0UsOENBQU1BOzs0QkFBQzswQ0FFSiw4REFBQ0MsK0VBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUIsRUFBQztHQXBDWUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mcmVlLWNvdW50ZXIudHN4PzUzMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiLi91aS9jYXJkXCI7XG5pbXBvcnQgeyBNQVhfRlJFRV9DT1VOVFMgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcIi4vdWkvcHJvZ3Jlc3NcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgWmFwIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbnRlcmZhY2UgRnJlZUNvdW50ZXJQcm9wc3tcbiAgICBhcGlMaW1pdENvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBGcmVlQ291bnRlciA9ICh7XG4gICAgYXBpTGltaXRDb3VudCA9IDBcbn06IEZyZWVDb3VudGVyUHJvcHMpID0+IHtcbiAgICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgc2V0TW91bnRlZCh0cnVlKVxuICAgIH0sIFtdKTtcblxuICAgIGlmKCFtb3VudGVkKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtM1wiPlxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYmctd2hpdGUvMTAgYm9yZGVyLTBcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicHktNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC13aGl0ZSBtYi00IHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FwaUxpbWl0Q291bnR9LyB7TUFYX0ZSRUVfQ09VTlRTfSBGcmVlIEdlbmVyYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsoYXBpTGltaXRDb3VudC9NQVhfRlJFRV9DT1VOVFMpKjEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICBVcGdyYWRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8WmFwLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJNQVhfRlJFRV9DT1VOVFMiLCJQcm9ncmVzcyIsIkJ1dHRvbiIsIlphcCIsIkZyZWVDb3VudGVyIiwiYXBpTGltaXRDb3VudCIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/free-counter.tsx\n"));

/***/ })

});