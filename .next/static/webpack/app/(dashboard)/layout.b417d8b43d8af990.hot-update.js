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

/***/ "(app-pages-browser)/./components/free-counter.tsx":
/*!*************************************!*\
  !*** ./components/free-counter.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FreeCounter: function() { return /* binding */ FreeCounter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants.ts\");\n/* harmony import */ var _ui_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/progress */ \"(app-pages-browser)/./components/ui/progress.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Zap!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/zap.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FreeCounter = (param)=>{\n    let { apiLimitCount = 0 } = param;\n    _s();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    if (!mounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            className: \"bg-white/10 border-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-sm text-white mb-4 space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    apiLimitCount,\n                                    \"/ \",\n                                    _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_FREE_COUNTS,\n                                    \" Free Generations\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_progress__WEBPACK_IMPORTED_MODULE_4__.Progress, {\n                                className: \"h-3\",\n                                value: apiLimitCount / _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_FREE_COUNTS * 100\n                            }, void 0, false, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        className: \"w-full\",\n                        children: [\n                            \"Upgrade\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"w-4 h-4 ml-2 fill-white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lucasrodrigues/AI-Saas/components/free-counter.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FreeCounter, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n_c = FreeCounter;\nvar _c;\n$RefreshReg$(_c, \"FreeCounter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZnJlZS1jb3VudGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNFO0FBQ0E7QUFDTDtBQUNKO0FBQ0Y7QUFNNUIsTUFBTVEsY0FBYztRQUFDLEVBQ3hCQyxnQkFBZ0IsQ0FBQyxFQUNGOztJQUNmLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDTlcsV0FBVztJQUNmLEdBQUcsRUFBRTtJQUVMLElBQUcsQ0FBQ0QsU0FBUTtRQUNSLE9BQU87SUFDWDtJQUlBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDWCwwQ0FBSUE7WUFBQ1csV0FBVTtzQkFDWiw0RUFBQ1YsaURBQVdBO2dCQUFDVSxXQUFVOztrQ0FDbkIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7O29DQUNJTDtvQ0FBYztvQ0FBR0wsdURBQWVBO29DQUFDOzs7Ozs7OzBDQUV0Qyw4REFBQ0Msa0RBQVFBO2dDQUNMUSxXQUFVO2dDQUNWRSxPQUFPLGdCQUFlWCx1REFBZUEsR0FBRTs7Ozs7Ozs7Ozs7O2tDQUcvQyw4REFBQ0UsOENBQU1BO3dCQUFDTyxXQUFVOzs0QkFBUzswQ0FFdkIsOERBQUNOLCtFQUFHQTtnQ0FBQ00sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QyxFQUFDO0dBcENZTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ZyZWUtY291bnRlci50c3g/NTMyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCIuL3VpL2NhcmRcIjtcbmltcG9ydCB7IE1BWF9GUkVFX0NPVU5UUyB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwiLi91aS9wcm9ncmVzc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBaYXAgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmludGVyZmFjZSBGcmVlQ291bnRlclByb3Bze1xuICAgIGFwaUxpbWl0Q291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IEZyZWVDb3VudGVyID0gKHtcbiAgICBhcGlMaW1pdENvdW50ID0gMFxufTogRnJlZUNvdW50ZXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBzZXRNb3VudGVkKHRydWUpXG4gICAgfSwgW10pO1xuXG4gICAgaWYoIW1vdW50ZWQpe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zXCI+XG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJiZy13aGl0ZS8xMCBib3JkZXItMFwiPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJweS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LXdoaXRlIG1iLTQgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXBpTGltaXRDb3VudH0vIHtNQVhfRlJFRV9DT1VOVFN9IEZyZWUgR2VuZXJhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyhhcGlMaW1pdENvdW50L01BWF9GUkVFX0NPVU5UUykqMTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZ3JhZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDxaYXAgY2xhc3NOYW1lPVwidy00IGgtNCBtbC0yIGZpbGwtd2hpdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiTUFYX0ZSRUVfQ09VTlRTIiwiUHJvZ3Jlc3MiLCJCdXR0b24iLCJaYXAiLCJGcmVlQ291bnRlciIsImFwaUxpbWl0Q291bnQiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/free-counter.tsx\n"));

/***/ })

});