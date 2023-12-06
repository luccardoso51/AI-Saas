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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/heading */ \"(app-pages-browser)/./components/heading.tsx\");\n/* harmony import */ var _barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=MessageSquare!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-square.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"(app-pages-browser)/./app/(dashboard)/(routes)/conversation/constants.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_empty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/empty */ \"(app-pages-browser)/./components/empty.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ConversationPage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__.zodResolver)(_constants__WEBPACK_IMPORTED_MODULE_2__.formSchema),\n        defaultValues: {\n            prompt: \"\"\n        }\n    });\n    const isLoading = form.formState.isSubmitting;\n    const onSubmit = async (values)=>{\n        try {\n            const userMessage = {\n                role: \"user\",\n                content: values.prompt\n            };\n            const newMessages = [\n                ...messages,\n                userMessage\n            ];\n            const response = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].post(\"/api/conversation\", {\n                messages: newMessages\n            });\n            setMessages((current)=>[\n                    ...current,\n                    userMessage,\n                    response.data\n                ]);\n            form.reset();\n        } catch (error) {\n            //TODO: OPEN PRO MODAL\n            console.log(error);\n        } finally{\n            router.refresh();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_heading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Conversation\",\n                description: \"Our most advanced convation model\",\n                icon: _barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n                iconColor: \"text-violet-500\",\n                bgColor: \"bg-violet-500/10\"\n            }, void 0, false, {\n                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4 lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                            ...form,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: form.handleSubmit(onSubmit),\n                                className: \" rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormField, {\n                                        name: \"prompt\",\n                                        render: (param)=>{\n                                            let { field } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormItem, {\n                                                className: \"col-span-12 lg:col-span-10\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                                                    className: \"m-0 p-0\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                                        className: \"border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent\",\n                                                        disabled: isLoading,\n                                                        placeholder: \"How do I calculate the radius of a circle?\",\n                                                        ...field\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 45\n                                                    }, void 0)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 41\n                                                }, void 0)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 37\n                                            }, void 0);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        className: \"col-span-12 lg:col-span-2 w-full\",\n                                        disabled: isLoading,\n                                        children: \"Generate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-4 mt-4\",\n                        children: [\n                            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-8 rounded-lg w-full flex items-center justify-center bg-muted\",\n                                children: \"das\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 25\n                            }, this),\n                            messages.length === 0 && !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_empty__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    label: \"No conversation started\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col-reverse gap-y-4\",\n                                children: messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: message.content\n                                    }, message.content, false, {\n                                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 33\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_s(ConversationPage, \"dqWwWr15SsnKiXDcuv0nyIIdaug=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm\n    ];\n});\n_c = ConversationPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConversationPage);\nvar _c;\n$RefreshReg$(_c, \"ConversationPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS9jb252ZXJzYXRpb24vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXlCO0FBQ2tCO0FBQ0U7QUFDSDtBQUVEO0FBQ2E7QUFDd0I7QUFDaEM7QUFDRTtBQUNKO0FBQ1g7QUFFTTtBQUt2QyxTQUFTZTs7SUFDTCxNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUErQixFQUFFO0lBQ3pFLE1BQU1NLE9BQU9oQix5REFBT0EsQ0FBNkI7UUFDN0NpQixVQUFVZixvRUFBV0EsQ0FBQ0Qsa0RBQVVBO1FBQ2hDaUIsZUFBZTtZQUNYQyxRQUFPO1FBQ1g7SUFDSjtJQUVBLE1BQU1DLFlBQVlKLEtBQUtLLFNBQVMsQ0FBQ0MsWUFBWTtJQUU3QyxNQUFNQyxXQUFXLE9BQU9DO1FBQ3BCLElBQUk7WUFDQSxNQUFNQyxjQUF5QztnQkFDM0NDLE1BQU07Z0JBQ05DLFNBQVNILE9BQU9MLE1BQU07WUFFMUI7WUFDQSxNQUFNUyxjQUFjO21CQUFJZDtnQkFBVVc7YUFBWTtZQUU5QyxNQUFNSSxXQUFXLE1BQU1oQyw4Q0FBS0EsQ0FBQ2lDLElBQUksQ0FBQyxxQkFBcUI7Z0JBQ25EaEIsVUFBVWM7WUFDZDtZQUVBYixZQUFZLENBQUNnQixVQUFZO3VCQUFJQTtvQkFBU047b0JBQWFJLFNBQVNHLElBQUk7aUJBQUM7WUFFakVoQixLQUFLaUIsS0FBSztRQUVkLEVBQUUsT0FBT0MsT0FBWTtZQUNqQixzQkFBc0I7WUFDdEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEIsU0FBVTtZQUNOckIsT0FBT3dCLE9BQU87UUFDbEI7SUFHSjtJQUVBLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUN4QywyREFBT0E7Z0JBQ1J5QyxPQUFPO2dCQUNQQyxhQUFZO2dCQUNaQyxNQUFNMUMsMEZBQWFBO2dCQUNuQjJDLFdBQVU7Z0JBQ1ZDLFNBQVE7Ozs7OzswQkFHUiw4REFBQ0w7Z0JBQUlNLFdBQVU7O2tDQUNYLDhEQUFDTjtrQ0FDRyw0RUFBQ25DLHFEQUFJQTs0QkFBRSxHQUFHYSxJQUFJO3NDQUNWLDRFQUFDQTtnQ0FDRE8sVUFBVVAsS0FBSzZCLFlBQVksQ0FBQ3RCO2dDQUM1QnFCLFdBQVU7O2tEQUVOLDhEQUFDdkMsMERBQVNBO3dDQUNOeUMsTUFBSzt3Q0FDTEMsUUFBUTtnREFBQyxFQUFDQyxLQUFLLEVBQUM7aUVBQ1osOERBQUMxQyx5REFBUUE7Z0RBQUNzQyxXQUFVOzBEQUNoQiw0RUFBQ3hDLDREQUFXQTtvREFBQ3dDLFdBQVU7OERBQ25CLDRFQUFDckMsdURBQUtBO3dEQUNGcUMsV0FBVTt3REFDVkssVUFBVTdCO3dEQUNWOEIsYUFBWTt3REFDWCxHQUFHRixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQU03Qiw4REFBQ3hDLHlEQUFNQTt3Q0FBQ29DLFdBQVU7d0NBQW1DSyxVQUFVN0I7a0RBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTXRGLDhEQUFDa0I7d0JBQUlNLFdBQVU7OzRCQUNWeEIsMkJBQ0csOERBQUNrQjtnQ0FBSU0sV0FBVTswQ0FBa0U7Ozs7Ozs0QkFJcEY5QixTQUFTcUMsTUFBTSxLQUFLLEtBQUssQ0FBQy9CLDJCQUN2Qiw4REFBQ2tCOzBDQUNELDRFQUFDM0IseURBQUtBO29DQUFDeUMsT0FBTTs7Ozs7Ozs7Ozs7MENBSWpCLDhEQUFDZDtnQ0FBSU0sV0FBVTswQ0FDTjlCLFNBQVN1QyxHQUFHLENBQUMsQ0FBQ0Msd0JBQ1gsOERBQUNoQjtrREFDSWdCLFFBQVEzQixPQUFPO3VDQURWMkIsUUFBUTNCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZekQ7R0F2R1NmOztRQUNVSCxzREFBU0E7UUFFWFQscURBQU9BOzs7S0FIZlk7QUF5R1QsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGRhc2hib2FyZCkvKHJvdXRlcykvY29udmVyc2F0aW9uL3BhZ2UudHN4P2NjNTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRpbmdcIjtcbmltcG9ydCB7IE1lc3NhZ2VTcXVhcmUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0ICogYXMgeiBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyBmb3JtU2NoZW1hIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybUNvbnRyb2wsIEZvcm1GaWVsZCwgRm9ybUl0ZW0gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2Zvcm1cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGF0Q29tcGxldGlvbkFzc2lzdGFudE1lc3NhZ2VQYXJhbSwgQ2hhdENvbXBsZXRpb25NZXNzYWdlUGFyYW0sIENyZWF0ZUNoYXRDb21wbGV0aW9uUmVxdWVzdE1lc3NhZ2UgfSBmcm9tIFwib3BlbmFpL3Jlc291cmNlcy9pbmRleC5tanNcIjtcbmltcG9ydCBFbXB0eSBmcm9tIFwiQC9jb21wb25lbnRzL2VtcHR5XCI7XG5cblxuXG5cbmZ1bmN0aW9uIENvbnZlcnNhdGlvblBhZ2UoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxDaGF0Q29tcGxldGlvbk1lc3NhZ2VQYXJhbVtdPihbXSlcbiAgICBjb25zdCBmb3JtID0gdXNlRm9ybTx6LmluZmVyPHR5cGVvZiBmb3JtU2NoZW1hPj4oe1xuICAgICAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoZm9ybVNjaGVtYSksXG4gICAgICAgIGRlZmF1bHRWYWx1ZXM6IHtcbiAgICAgICAgICAgIHByb21wdDpcIlwiXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGlzTG9hZGluZyA9IGZvcm0uZm9ybVN0YXRlLmlzU3VibWl0dGluZ1xuXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAodmFsdWVzOiB6LmluZmVyPHR5cGVvZiBmb3JtU2NoZW1hPikgPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyTWVzc2FnZTogQ2hhdENvbXBsZXRpb25NZXNzYWdlUGFyYW0gPXtcbiAgICAgICAgICAgICAgICByb2xlOiBcInVzZXJcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiB2YWx1ZXMucHJvbXB0LFxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgbmV3TWVzc2FnZXMgPSBbLi4ubWVzc2FnZXMsIHVzZXJNZXNzYWdlXTtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9jb252ZXJzYXRpb25cIiwge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBuZXdNZXNzYWdlcyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRNZXNzYWdlcygoY3VycmVudCkgPT4gWy4uLmN1cnJlbnQsIHVzZXJNZXNzYWdlLCByZXNwb25zZS5kYXRhXSk7XG5cbiAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAvL1RPRE86IE9QRU4gUFJPIE1PREFMXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICByb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgdGl0bGUgPVwiQ29udmVyc2F0aW9uXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiT3VyIG1vc3QgYWR2YW5jZWQgY29udmF0aW9uIG1vZGVsXCJcbiAgICAgICAgICAgIGljb249e01lc3NhZ2VTcXVhcmV9XG4gICAgICAgICAgICBpY29uQ29sb3I9XCJ0ZXh0LXZpb2xldC01MDBcIlxuICAgICAgICAgICAgYmdDb2xvcj1cImJnLXZpb2xldC01MDAvMTBcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSB7Li4uZm9ybX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtmb3JtLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgcm91bmRlZC1sZyBib3JkZXIgdy1mdWxsIHAtNCBweC0zIG1kOnB4LTYgZm9jdXMtd2l0aGluOnNoYWRvdy1zbSBncmlkIGdyaWQtY29scy0xMiBnYXAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb21wdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHtmaWVsZH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbSBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTAgb3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0wIGZvY3VzLXZpc2libGU6cmluZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3cgZG8gSSBjYWxjdWxhdGUgdGhlIHJhZGl1cyBvZiBhIGNpcmNsZT9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi0yIHctZnVsbFwiIGRpc2FibGVkPXtpc0xvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IHJvdW5kZWQtbGcgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLW11dGVkXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5sZW5ndGggPT09IDAgJiYgIWlzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEVtcHR5IGxhYmVsPVwiTm8gY29udmVyc2F0aW9uIHN0YXJ0ZWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wtcmV2ZXJzZSBnYXAteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWVzc2FnZS5jb250ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gICAgICAgXG5cblxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnZlcnNhdGlvblBhZ2U7Il0sIm5hbWVzIjpbImF4aW9zIiwiSGVhZGluZyIsIk1lc3NhZ2VTcXVhcmUiLCJ1c2VGb3JtIiwiZm9ybVNjaGVtYSIsInpvZFJlc29sdmVyIiwiRm9ybSIsIkZvcm1Db250cm9sIiwiRm9ybUZpZWxkIiwiRm9ybUl0ZW0iLCJJbnB1dCIsIkJ1dHRvbiIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiRW1wdHkiLCJDb252ZXJzYXRpb25QYWdlIiwicm91dGVyIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImZvcm0iLCJyZXNvbHZlciIsImRlZmF1bHRWYWx1ZXMiLCJwcm9tcHQiLCJpc0xvYWRpbmciLCJmb3JtU3RhdGUiLCJpc1N1Ym1pdHRpbmciLCJvblN1Ym1pdCIsInZhbHVlcyIsInVzZXJNZXNzYWdlIiwicm9sZSIsImNvbnRlbnQiLCJuZXdNZXNzYWdlcyIsInJlc3BvbnNlIiwicG9zdCIsImN1cnJlbnQiLCJkYXRhIiwicmVzZXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZWZyZXNoIiwiZGl2IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJpY29uQ29sb3IiLCJiZ0NvbG9yIiwiY2xhc3NOYW1lIiwiaGFuZGxlU3VibWl0IiwibmFtZSIsInJlbmRlciIsImZpZWxkIiwiZGlzYWJsZWQiLCJwbGFjZWhvbGRlciIsImxlbmd0aCIsImxhYmVsIiwibWFwIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/conversation/page.tsx\n"));

/***/ })

});