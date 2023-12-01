"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/(routes)/conversation/page",{

/***/ "(app-pages-browser)/./app/(dashboard)/(routes)/conversation/page.tsx":
/*!********************************************************!*\
  !*** ./app/(dashboard)/(routes)/conversation/page.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/heading */ \"(app-pages-browser)/./components/heading.tsx\");\n/* harmony import */ var _barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=MessageSquare!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-square.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"(app-pages-browser)/./app/(dashboard)/(routes)/conversation/constants.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ConversationPage() {\n    _s();\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__.zodResolver)(_constants__WEBPACK_IMPORTED_MODULE_2__.formSchema),\n        defaultValues: {\n            prompt: \"\"\n        }\n    });\n    const isLoading = form.formState.isSubmitting;\n    const onSubmit = async (values)=>{\n        console.log(values);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_heading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Conversation\",\n                description: \"Our most advanced convation model\",\n                icon: _barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                iconColor: \"text-violet-500\",\n                bgColor: \"bg-violet-500/10\"\n            }, void 0, false, {\n                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4 lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                            ...form,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: form.handleSubmit(onSubmit),\n                                className: \" rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormField, {\n                                        name: \"prompt\",\n                                        render: (param)=>{\n                                            let { field } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormItem, {\n                                                className: \"col-span-12 lg:col-span-10\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                                                    className: \"m-0 p-0\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                                        className: \"border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent\",\n                                                        disabled: isLoading,\n                                                        placeholder: \"How do I calculate the radius of a circle?\",\n                                                        ...field\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 45\n                                                    }, void 0)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 41\n                                                }, void 0)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 37\n                                            }, void 0);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        className: \"col-span-12 lg:col-span-2 w-full\",\n                                        disabled: isLoading,\n                                        children: \"Generate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-4 mt-4\",\n                        children: \"Message\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(ConversationPage, \"woqMTX6igxsX6/9vX4dQZlxR7yY=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = ConversationPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConversationPage);\nvar _c;\n$RefreshReg$(_c, \"ConversationPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS9jb252ZXJzYXRpb24vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTJDO0FBQ0U7QUFDSDtBQUVEO0FBQ2E7QUFDd0I7QUFDaEM7QUFDRTtBQUloRCxTQUFTVzs7SUFDTCxNQUFNQyxPQUFPVix3REFBT0EsQ0FBNkI7UUFDN0NXLFVBQVVULG9FQUFXQSxDQUFDRCxrREFBVUE7UUFDaENXLGVBQWU7WUFDWEMsUUFBTztRQUNYO0lBQ0o7SUFFQSxNQUFNQyxZQUFZSixLQUFLSyxTQUFTLENBQUNDLFlBQVk7SUFFN0MsTUFBTUMsV0FBVyxPQUFPQztRQUNwQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNoQjtJQUVBLHFCQUNJLDhEQUFDRzs7MEJBQ0csOERBQUN2QiwyREFBT0E7Z0JBQ1J3QixPQUFPO2dCQUNQQyxhQUFZO2dCQUNaQyxNQUFNekIseUZBQWFBO2dCQUNuQjBCLFdBQVU7Z0JBQ1ZDLFNBQVE7Ozs7OzswQkFHUiw4REFBQ0w7Z0JBQUlNLFdBQVU7O2tDQUNYLDhEQUFDTjtrQ0FDRyw0RUFBQ2xCLHFEQUFJQTs0QkFBRSxHQUFHTyxJQUFJO3NDQUNWLDRFQUFDQTtnQ0FDRE8sVUFBVVAsS0FBS2tCLFlBQVksQ0FBQ1g7Z0NBQzVCVSxXQUFVOztrREFFTiw4REFBQ3RCLDBEQUFTQTt3Q0FDTndCLE1BQUs7d0NBQ0xDLFFBQVE7Z0RBQUMsRUFBQ0MsS0FBSyxFQUFDO2lFQUNaLDhEQUFDekIseURBQVFBO2dEQUFDcUIsV0FBVTswREFDaEIsNEVBQUN2Qiw0REFBV0E7b0RBQUN1QixXQUFVOzhEQUNuQiw0RUFBQ3BCLHVEQUFLQTt3REFDRm9CLFdBQVU7d0RBQ1ZLLFVBQVVsQjt3REFDVm1CLGFBQVk7d0RBQ1gsR0FBR0YsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFNN0IsOERBQUN2Qix5REFBTUE7d0NBQUNtQixXQUFVO3dDQUFtQ0ssVUFBVWxCO2tEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU10Riw4REFBQ087d0JBQUlNLFdBQVU7a0NBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEQ7R0E1RFNsQjs7UUFDUVQsb0RBQU9BOzs7S0FEZlM7QUE4RFQsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGRhc2hib2FyZCkvKHJvdXRlcykvY29udmVyc2F0aW9uL3BhZ2UudHN4P2NjNTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9oZWFkaW5nXCI7XG5pbXBvcnQgeyBNZXNzYWdlU3F1YXJlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCAqIGFzIHogZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgZm9ybVNjaGVtYSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVycy96b2RcIjtcbmltcG9ydCB7IEZvcm0sIEZvcm1Db250cm9sLCBGb3JtRmllbGQsIEZvcm1JdGVtIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9mb3JtXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5cblxuXG5mdW5jdGlvbiBDb252ZXJzYXRpb25QYWdlKCkge1xuICAgIGNvbnN0IGZvcm0gPSB1c2VGb3JtPHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+Pih7XG4gICAgICAgIHJlc29sdmVyOiB6b2RSZXNvbHZlcihmb3JtU2NoZW1hKSxcbiAgICAgICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgICAgICAgcHJvbXB0OlwiXCJcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaXNMb2FkaW5nID0gZm9ybS5mb3JtU3RhdGUuaXNTdWJtaXR0aW5nXG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXM6IHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+KSA9PntcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgIHRpdGxlID1cIkNvbnZlcnNhdGlvblwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk91ciBtb3N0IGFkdmFuY2VkIGNvbnZhdGlvbiBtb2RlbFwiXG4gICAgICAgICAgICBpY29uPXtNZXNzYWdlU3F1YXJlfVxuICAgICAgICAgICAgaWNvbkNvbG9yPVwidGV4dC12aW9sZXQtNTAwXCJcbiAgICAgICAgICAgIGJnQ29sb3I9XCJiZy12aW9sZXQtNTAwLzEwXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gey4uLmZvcm19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17Zm9ybS5oYW5kbGVTdWJtaXQob25TdWJtaXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtbGcgYm9yZGVyIHctZnVsbCBwLTQgcHgtMyBtZDpweC02IGZvY3VzLXdpdGhpbjpzaGFkb3ctc20gZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9tcHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7ZmllbGR9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0gY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPVwibS0wIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0wIG91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMCBmb2N1cy12aXNpYmxlOnJpbmctdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IGRvIEkgY2FsY3VsYXRlIHRoZSByYWRpdXMgb2YgYSBjaXJjbGU/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tMiB3LWZ1bGxcIiBkaXNhYmxlZD17aXNMb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICAgICBcblxuXG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uUGFnZTsiXSwibmFtZXMiOlsiSGVhZGluZyIsIk1lc3NhZ2VTcXVhcmUiLCJ1c2VGb3JtIiwiZm9ybVNjaGVtYSIsInpvZFJlc29sdmVyIiwiRm9ybSIsIkZvcm1Db250cm9sIiwiRm9ybUZpZWxkIiwiRm9ybUl0ZW0iLCJJbnB1dCIsIkJ1dHRvbiIsIkNvbnZlcnNhdGlvblBhZ2UiLCJmb3JtIiwicmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwicHJvbXB0IiwiaXNMb2FkaW5nIiwiZm9ybVN0YXRlIiwiaXNTdWJtaXR0aW5nIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJpY29uQ29sb3IiLCJiZ0NvbG9yIiwiY2xhc3NOYW1lIiwiaGFuZGxlU3VibWl0IiwibmFtZSIsInJlbmRlciIsImZpZWxkIiwiZGlzYWJsZWQiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/conversation/page.tsx\n"));

/***/ })

});