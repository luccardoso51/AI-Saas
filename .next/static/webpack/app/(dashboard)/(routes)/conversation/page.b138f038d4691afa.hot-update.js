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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/heading */ \"(app-pages-browser)/./components/heading.tsx\");\n/* harmony import */ var _barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=MessageSquare!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-square.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"(app-pages-browser)/./app/(dashboard)/(routes)/conversation/constants.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction ConversationPage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__.zodResolver)(_constants__WEBPACK_IMPORTED_MODULE_2__.formSchema),\n        defaultValues: {\n            prompt: \"\"\n        }\n    });\n    const isLoading = form.formState.isSubmitting;\n    const onSubmit = async (values)=>{\n        try {\n            const userMessage = {\n                role: \"user\",\n                content: values.prompt\n            };\n            const newMessages = [\n                ...messages,\n                userMessage\n            ];\n            const response = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(\"/api/conversation\", {\n                messages: newMessages\n            });\n            setMessages((current)=>[\n                    ...current,\n                    userMessage,\n                    response.data\n                ]);\n            form.reset();\n        } catch (error) {\n            //TODO: OPEN PRO MODAL\n            console.log(error);\n        } finally{\n            router.refresh();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_heading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Conversation\",\n                description: \"Our most advanced convation model\",\n                icon: _barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n                iconColor: \"text-violet-500\",\n                bgColor: \"bg-violet-500/10\"\n            }, void 0, false, {\n                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4 lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                            ...form,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: form.handleSubmit(onSubmit),\n                                className: \" rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormField, {\n                                        name: \"prompt\",\n                                        render: (param)=>{\n                                            let { field } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormItem, {\n                                                className: \"col-span-12 lg:col-span-10\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                                                    className: \"m-0 p-0\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                                        className: \"border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent\",\n                                                        disabled: isLoading,\n                                                        placeholder: \"How do I calculate the radius of a circle?\",\n                                                        ...field\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 45\n                                                    }, void 0)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 41\n                                                }, void 0)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 37\n                                            }, void 0);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        className: \"col-span-12 lg:col-span-2 w-full\",\n                                        disabled: isLoading,\n                                        children: \"Generate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-4 mt-4\",\n                        children: [\n                            messages.length === 0 && !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"empty\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col-reverse gap-y-4\",\n                                children: messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: message.content\n                                    }, message.content, false, {\n                                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 33\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lucasrodrigues/AI-Saas/app/(dashboard)/(routes)/conversation/page.tsx\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(ConversationPage, \"dqWwWr15SsnKiXDcuv0nyIIdaug=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = ConversationPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConversationPage);\nvar _c;\n$RefreshReg$(_c, \"ConversationPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocm91dGVzKS9jb252ZXJzYXRpb24vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeUI7QUFDa0I7QUFDRTtBQUNIO0FBRUQ7QUFDYTtBQUN3QjtBQUNoQztBQUNFO0FBQ0o7QUFDWDtBQU1qQyxTQUFTYzs7SUFDTCxNQUFNQyxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUErQixFQUFFO0lBQ3pFLE1BQU1LLE9BQU9mLHdEQUFPQSxDQUE2QjtRQUM3Q2dCLFVBQVVkLG9FQUFXQSxDQUFDRCxrREFBVUE7UUFDaENnQixlQUFlO1lBQ1hDLFFBQU87UUFDWDtJQUNKO0lBRUEsTUFBTUMsWUFBWUosS0FBS0ssU0FBUyxDQUFDQyxZQUFZO0lBRTdDLE1BQU1DLFdBQVcsT0FBT0M7UUFDcEIsSUFBSTtZQUNBLE1BQU1DLGNBQXlDO2dCQUMzQ0MsTUFBTTtnQkFDTkMsU0FBU0gsT0FBT0wsTUFBTTtZQUUxQjtZQUNBLE1BQU1TLGNBQWM7bUJBQUlkO2dCQUFVVzthQUFZO1lBRTlDLE1BQU1JLFdBQVcsTUFBTS9CLDhDQUFLQSxDQUFDZ0MsSUFBSSxDQUFDLHFCQUFxQjtnQkFDbkRoQixVQUFVYztZQUNkO1lBRUFiLFlBQVksQ0FBQ2dCLFVBQVk7dUJBQUlBO29CQUFTTjtvQkFBYUksU0FBU0csSUFBSTtpQkFBQztZQUVqRWhCLEtBQUtpQixLQUFLO1FBRWQsRUFBRSxPQUFPQyxPQUFZO1lBQ2pCLHNCQUFzQjtZQUN0QkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQixTQUFVO1lBQ05yQixPQUFPd0IsT0FBTztRQUNsQjtJQUdKO0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ3ZDLDJEQUFPQTtnQkFDUndDLE9BQU87Z0JBQ1BDLGFBQVk7Z0JBQ1pDLE1BQU16QywwRkFBYUE7Z0JBQ25CMEMsV0FBVTtnQkFDVkMsU0FBUTs7Ozs7OzBCQUdSLDhEQUFDTDtnQkFBSU0sV0FBVTs7a0NBQ1gsOERBQUNOO2tDQUNHLDRFQUFDbEMscURBQUlBOzRCQUFFLEdBQUdZLElBQUk7c0NBQ1YsNEVBQUNBO2dDQUNETyxVQUFVUCxLQUFLNkIsWUFBWSxDQUFDdEI7Z0NBQzVCcUIsV0FBVTs7a0RBRU4sOERBQUN0QywwREFBU0E7d0NBQ053QyxNQUFLO3dDQUNMQyxRQUFRO2dEQUFDLEVBQUNDLEtBQUssRUFBQztpRUFDWiw4REFBQ3pDLHlEQUFRQTtnREFBQ3FDLFdBQVU7MERBQ2hCLDRFQUFDdkMsNERBQVdBO29EQUFDdUMsV0FBVTs4REFDbkIsNEVBQUNwQyx1REFBS0E7d0RBQ0ZvQyxXQUFVO3dEQUNWSyxVQUFVN0I7d0RBQ1Y4QixhQUFZO3dEQUNYLEdBQUdGLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBTTdCLDhEQUFDdkMseURBQU1BO3dDQUFDbUMsV0FBVTt3Q0FBbUNLLFVBQVU3QjtrREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNdEYsOERBQUNrQjt3QkFBSU0sV0FBVTs7NEJBQ1Y5QixTQUFTcUMsTUFBTSxLQUFLLEtBQUssQ0FBQy9CLDJCQUN2Qiw4REFBQ2tCOzBDQUFJOzs7Ozs7MENBS1QsOERBQUNBO2dDQUFJTSxXQUFVOzBDQUNOOUIsU0FBU3NDLEdBQUcsQ0FBQyxDQUFDQyx3QkFDWCw4REFBQ2Y7a0RBQ0llLFFBQVExQixPQUFPO3VDQURWMEIsUUFBUTFCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZekQ7R0FsR1NmOztRQUNVRixzREFBU0E7UUFFWFQsb0RBQU9BOzs7S0FIZlc7QUFvR1QsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGRhc2hib2FyZCkvKHJvdXRlcykvY29udmVyc2F0aW9uL3BhZ2UudHN4P2NjNTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRpbmdcIjtcbmltcG9ydCB7IE1lc3NhZ2VTcXVhcmUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0ICogYXMgeiBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyBmb3JtU2NoZW1hIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybUNvbnRyb2wsIEZvcm1GaWVsZCwgRm9ybUl0ZW0gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2Zvcm1cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGF0Q29tcGxldGlvbkFzc2lzdGFudE1lc3NhZ2VQYXJhbSwgQ2hhdENvbXBsZXRpb25NZXNzYWdlUGFyYW0sIENyZWF0ZUNoYXRDb21wbGV0aW9uUmVxdWVzdE1lc3NhZ2UgfSBmcm9tIFwib3BlbmFpL3Jlc291cmNlcy9pbmRleC5tanNcIjtcblxuXG5cblxuZnVuY3Rpb24gQ29udmVyc2F0aW9uUGFnZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPENoYXRDb21wbGV0aW9uTWVzc2FnZVBhcmFtW10+KFtdKVxuICAgIGNvbnN0IGZvcm0gPSB1c2VGb3JtPHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+Pih7XG4gICAgICAgIHJlc29sdmVyOiB6b2RSZXNvbHZlcihmb3JtU2NoZW1hKSxcbiAgICAgICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgICAgICAgcHJvbXB0OlwiXCJcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaXNMb2FkaW5nID0gZm9ybS5mb3JtU3RhdGUuaXNTdWJtaXR0aW5nXG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXM6IHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+KSA9PntcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJNZXNzYWdlOiBDaGF0Q29tcGxldGlvbk1lc3NhZ2VQYXJhbSA9e1xuICAgICAgICAgICAgICAgIHJvbGU6IFwidXNlclwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHZhbHVlcy5wcm9tcHQsXG5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlcyA9IFsuLi5tZXNzYWdlcywgdXNlck1lc3NhZ2VdO1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvbnZlcnNhdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IG5ld01lc3NhZ2VzLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChjdXJyZW50KSA9PiBbLi4uY3VycmVudCwgdXNlck1lc3NhZ2UsIHJlc3BvbnNlLmRhdGFdKTtcblxuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIC8vVE9ETzogT1BFTiBQUk8gTU9EQUxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICB0aXRsZSA9XCJDb252ZXJzYXRpb25cIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJPdXIgbW9zdCBhZHZhbmNlZCBjb252YXRpb24gbW9kZWxcIlxuICAgICAgICAgICAgaWNvbj17TWVzc2FnZVNxdWFyZX1cbiAgICAgICAgICAgIGljb25Db2xvcj1cInRleHQtdmlvbGV0LTUwMFwiXG4gICAgICAgICAgICBiZ0NvbG9yPVwiYmctdmlvbGV0LTUwMC8xMFwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIHsuLi5mb3JtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2Zvcm0uaGFuZGxlU3VibWl0KG9uU3VibWl0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLWxnIGJvcmRlciB3LWZ1bGwgcC00IHB4LTMgbWQ6cHgtNiBmb2N1cy13aXRoaW46c2hhZG93LXNtIGdyaWQgZ3JpZC1jb2xzLTEyIGdhcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvbXB0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoe2ZpZWxkfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtIGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMCBvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTAgZm9jdXMtdmlzaWJsZTpyaW5nLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdyBkbyBJIGNhbGN1bGF0ZSB0aGUgcmFkaXVzIG9mIGEgY2lyY2xlP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTIgdy1mdWxsXCIgZGlzYWJsZWQ9e2lzTG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5sZW5ndGggPT09IDAgJiYgIWlzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbC1yZXZlcnNlIGdhcC15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZXNzYWdlLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICAgICBcblxuXG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uUGFnZTsiXSwibmFtZXMiOlsiYXhpb3MiLCJIZWFkaW5nIiwiTWVzc2FnZVNxdWFyZSIsInVzZUZvcm0iLCJmb3JtU2NoZW1hIiwiem9kUmVzb2x2ZXIiLCJGb3JtIiwiRm9ybUNvbnRyb2wiLCJGb3JtRmllbGQiLCJGb3JtSXRlbSIsIklucHV0IiwiQnV0dG9uIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJDb252ZXJzYXRpb25QYWdlIiwicm91dGVyIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImZvcm0iLCJyZXNvbHZlciIsImRlZmF1bHRWYWx1ZXMiLCJwcm9tcHQiLCJpc0xvYWRpbmciLCJmb3JtU3RhdGUiLCJpc1N1Ym1pdHRpbmciLCJvblN1Ym1pdCIsInZhbHVlcyIsInVzZXJNZXNzYWdlIiwicm9sZSIsImNvbnRlbnQiLCJuZXdNZXNzYWdlcyIsInJlc3BvbnNlIiwicG9zdCIsImN1cnJlbnQiLCJkYXRhIiwicmVzZXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZWZyZXNoIiwiZGl2IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJpY29uQ29sb3IiLCJiZ0NvbG9yIiwiY2xhc3NOYW1lIiwiaGFuZGxlU3VibWl0IiwibmFtZSIsInJlbmRlciIsImZpZWxkIiwiZGlzYWJsZWQiLCJwbGFjZWhvbGRlciIsImxlbmd0aCIsIm1hcCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(routes)/conversation/page.tsx\n"));

/***/ })

});