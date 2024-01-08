"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/conversation/route";
exports.ids = ["app/api/conversation/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "console":
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("console");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversation%2Froute&page=%2Fapi%2Fconversation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversation%2Froute.ts&appDir=%2FUsers%2Flucasrodrigues%2FAI-Saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flucasrodrigues%2FAI-Saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversation%2Froute&page=%2Fapi%2Fconversation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversation%2Froute.ts&appDir=%2FUsers%2Flucasrodrigues%2FAI-Saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flucasrodrigues%2FAI-Saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_lucasrodrigues_AI_Saas_app_api_conversation_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/conversation/route.ts */ \"(rsc)/./app/api/conversation/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/conversation/route\",\n        pathname: \"/api/conversation\",\n        filename: \"route\",\n        bundlePath: \"app/api/conversation/route\"\n    },\n    resolvedPagePath: \"/Users/lucasrodrigues/AI-Saas/app/api/conversation/route.ts\",\n    nextConfigOutput,\n    userland: _Users_lucasrodrigues_AI_Saas_app_api_conversation_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/conversation/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb252ZXJzYXRpb24lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNvbnZlcnNhdGlvbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNvbnZlcnNhdGlvbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmx1Y2Fzcm9kcmlndWVzJTJGQUktU2FhcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZsdWNhc3JvZHJpZ3VlcyUyRkFJLVNhYXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDVztBQUN4RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLXNhYXMvP2ZkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2x1Y2Fzcm9kcmlndWVzL0FJLVNhYXMvYXBwL2FwaS9jb252ZXJzYXRpb24vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NvbnZlcnNhdGlvbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NvbnZlcnNhdGlvblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY29udmVyc2F0aW9uL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2x1Y2Fzcm9kcmlndWVzL0FJLVNhYXMvYXBwL2FwaS9jb252ZXJzYXRpb24vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY29udmVyc2F0aW9uL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversation%2Froute&page=%2Fapi%2Fconversation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversation%2Froute.ts&appDir=%2FUsers%2Flucasrodrigues%2FAI-Saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flucasrodrigues%2FAI-Saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/conversation/route.ts":
/*!***************************************!*\
  !*** ./app/api/conversation/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_api_limit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/api-limit */ \"(rsc)/./lib/api-limit.ts\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! console */ \"console\");\n/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(console__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\n\n\n\n\n// const configuration = new OpenAI({\n//     )\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\nasync function POST(req) {\n    try {\n        const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.auth)();\n        const body = await req.json();\n        const { messages } = body;\n        if (!userId) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Unauthorized\", {\n                status: 401\n            });\n        }\n        if (!openai.apiKey) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Open API Key not configured\", {\n                status: 500\n            });\n        }\n        if (!messages) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Messages are required\", {\n                status: 400\n            });\n        }\n        const freeTrial = await (0,_lib_api_limit__WEBPACK_IMPORTED_MODULE_0__.checkApiLimit)();\n        if (!freeTrial) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Free trial has expired\", {\n                status: 403\n            });\n        }\n        const response = await openai.chat.completions.create({\n            model: \"gpt-3.5-turbo\",\n            messages\n        });\n        await (0,_lib_api_limit__WEBPACK_IMPORTED_MODULE_0__.increaseApiLimit)();\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json(response.choices[0].message);\n    } catch (error) {\n        (0,console__WEBPACK_IMPORTED_MODULE_1__.log)(\"[CONVERSARION ERROR]\", error);\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Internal Error\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbnZlcnNhdGlvbi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtFO0FBQzdCO0FBQ1A7QUFDYTtBQUNmO0FBRTVCLHFDQUFxQztBQUNyQyxRQUFRO0FBRVIsTUFBTU0sU0FBUyxJQUFJRCw4Q0FBTUEsQ0FBQztJQUN0QkUsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3RDO0FBRU8sZUFBZUMsS0FDbEJDLEdBQVk7SUFFWixJQUFHO1FBQ0MsTUFBTSxFQUFDQyxNQUFNLEVBQUMsR0FBRVgsbURBQUlBO1FBQ3BCLE1BQU1ZLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtRQUMzQixNQUFNLEVBQUNDLFFBQVEsRUFBQyxHQUFHRjtRQUVuQixJQUFHLENBQUNELFFBQU87WUFDUCxPQUFPLElBQUlULGtGQUFZQSxDQUFDLGdCQUFnQjtnQkFBQ2EsUUFBUTtZQUFHO1FBRXhEO1FBRUEsSUFBRyxDQUFDWCxPQUFPQyxNQUFNLEVBQUM7WUFDZCxPQUFPLElBQUlILGtGQUFZQSxDQUFDLCtCQUErQjtnQkFBQ2EsUUFBUTtZQUFHO1FBRXZFO1FBRUEsSUFBRyxDQUFDRCxVQUFTO1lBQ1QsT0FBTyxJQUFJWixrRkFBWUEsQ0FBQyx5QkFBeUI7Z0JBQUNhLFFBQVE7WUFBRztRQUVqRTtRQUVBLE1BQU1DLFlBQVksTUFBTWxCLDZEQUFhQTtRQUVyQyxJQUFHLENBQUNrQixXQUFVO1lBQ1YsT0FBTyxJQUFJZCxrRkFBWUEsQ0FBQywwQkFBMEI7Z0JBQUNhLFFBQVE7WUFBRztRQUNsRTtRQUVBLE1BQU1FLFdBQVcsTUFBTWIsT0FBT2MsSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQztZQUNsREMsT0FBUTtZQUNSUDtRQUVKO1FBRUEsTUFBTWYsZ0VBQWdCQTtRQUV0QixPQUFPRyxrRkFBWUEsQ0FBQ1csSUFBSSxDQUFDSSxTQUFTSyxPQUFPLENBQUMsRUFBRSxDQUFDQyxPQUFPO0lBQ3hELEVBQUUsT0FBTUMsT0FBTTtRQUNWdkIsNENBQUdBLENBQUMsd0JBQXdCdUI7UUFDNUIsT0FBTyxJQUFJdEIsa0ZBQVlBLENBQUMsa0JBQWtCO1lBQUNhLFFBQVE7UUFBRztJQUMxRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktc2Fhcy8uL2FwcC9hcGkvY29udmVyc2F0aW9uL3JvdXRlLnRzP2Y1YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hlY2tBcGlMaW1pdCwgaW5jcmVhc2VBcGlMaW1pdCB9IGZyb20gXCJAL2xpYi9hcGktbGltaXRcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqc1wiO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSBcImNvbnNvbGVcIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IE9wZW5BSSBmcm9tIFwib3BlbmFpXCI7XG5cbi8vIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgT3BlbkFJKHtcbi8vICAgICApXG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVlcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChcbiAgICByZXE6IFJlcXVlc3Rcbil7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCB7dXNlcklkfT0gYXV0aCgpO1xuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgICAgY29uc3Qge21lc3NhZ2VzfSA9IGJvZHk7XG5cbiAgICAgICAgaWYoIXVzZXJJZCl7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIlVuYXV0aG9yaXplZFwiLCB7c3RhdHVzOiA0MDF9KTtcbiBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFvcGVuYWkuYXBpS2V5KXtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiT3BlbiBBUEkgS2V5IG5vdCBjb25maWd1cmVkXCIsIHtzdGF0dXM6IDUwMH0pO1xuIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIW1lc3NhZ2VzKXtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiTWVzc2FnZXMgYXJlIHJlcXVpcmVkXCIsIHtzdGF0dXM6IDQwMH0pO1xuIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZnJlZVRyaWFsID0gYXdhaXQgY2hlY2tBcGlMaW1pdCgpO1xuXG4gICAgICAgIGlmKCFmcmVlVHJpYWwpe1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJGcmVlIHRyaWFsIGhhcyBleHBpcmVkXCIsIHtzdGF0dXM6IDQwM30pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5jaGF0LmNvbXBsZXRpb25zLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2RlbCA6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IGluY3JlYXNlQXBpTGltaXQoKTtcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocmVzcG9uc2UuY2hvaWNlc1swXS5tZXNzYWdlKVxuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICBsb2coXCJbQ09OVkVSU0FSSU9OIEVSUk9SXVwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiSW50ZXJuYWwgRXJyb3JcIiwge3N0YXR1czogNTAwfSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJjaGVja0FwaUxpbWl0IiwiaW5jcmVhc2VBcGlMaW1pdCIsImF1dGgiLCJsb2ciLCJOZXh0UmVzcG9uc2UiLCJPcGVuQUkiLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJQT1NUIiwicmVxIiwidXNlcklkIiwiYm9keSIsImpzb24iLCJtZXNzYWdlcyIsInN0YXR1cyIsImZyZWVUcmlhbCIsInJlc3BvbnNlIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibW9kZWwiLCJjaG9pY2VzIiwibWVzc2FnZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/conversation/route.ts\n");

/***/ }),

/***/ "(rsc)/./constants.ts":
/*!**********************!*\
  !*** ./constants.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MAX_FREE_COUNTS: () => (/* binding */ MAX_FREE_COUNTS)\n/* harmony export */ });\nconst MAX_FREE_COUNTS = 5;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25zdGFudHMudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGtCQUFrQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktc2Fhcy8uL2NvbnN0YW50cy50cz9kZDRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBNQVhfRlJFRV9DT1VOVFMgPSA1OyJdLCJuYW1lcyI6WyJNQVhfRlJFRV9DT1VOVFMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./constants.ts\n");

/***/ }),

/***/ "(rsc)/./lib/api-limit.ts":
/*!**************************!*\
  !*** ./lib/api-limit.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkApiLimit: () => (/* binding */ checkApiLimit),\n/* harmony export */   increaseApiLimit: () => (/* binding */ increaseApiLimit)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/nextjs */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n/* harmony import */ var _prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prismadb */ \"(rsc)/./lib/prismadb.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"(rsc)/./constants.ts\");\n\n\n\nconst increaseApiLimit = async ()=>{\n    const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.auth)();\n    if (!userId) {\n        return;\n    }\n    const userApiLimit = await _prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].userApiLimit.findUnique({\n        where: {\n            userId\n        }\n    });\n    if (userApiLimit) {\n        await _prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].userApiLimit.update({\n            where: {\n                userId: userId\n            },\n            data: {\n                count: userApiLimit.count + 1\n            }\n        });\n    } else {\n        await _prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].userApiLimit.create({\n            data: {\n                userId: userId,\n                count: 1\n            }\n        });\n    }\n};\nconst checkApiLimit = async ()=>{\n    const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.auth)();\n    if (!userId) {\n        return false;\n    }\n    const userApiLimit = await _prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].userApiLimit.findUnique({\n        where: {\n            userId: userId\n        }\n    });\n    if (!userApiLimit || userApiLimit.count < _constants__WEBPACK_IMPORTED_MODULE_1__.MAX_FREE_COUNTS) {\n        return true;\n    } else {\n        return false;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXBpLWxpbWl0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFDO0FBQ0g7QUFDWTtBQUV2QyxNQUFNRyxtQkFBbUI7SUFDNUIsTUFBTSxFQUFDQyxNQUFNLEVBQUMsR0FBR0osbURBQUlBO0lBRXJCLElBQUksQ0FBQ0ksUUFBTztRQUNSO0lBQ0o7SUFFQSxNQUFNQyxlQUFlLE1BQU1KLGlEQUFRQSxDQUFDSSxZQUFZLENBQUNDLFVBQVUsQ0FBQztRQUN4REMsT0FBTTtZQUNGSDtRQUNKO0lBQ0o7SUFFQSxJQUFHQyxjQUFhO1FBQ1osTUFBTUosaURBQVFBLENBQUNJLFlBQVksQ0FBQ0csTUFBTSxDQUFDO1lBQy9CRCxPQUFPO2dCQUFDSCxRQUFRQTtZQUFNO1lBQ3RCSyxNQUFNO2dCQUFDQyxPQUFPTCxhQUFhSyxLQUFLLEdBQUc7WUFBQztRQUN4QztJQUNKLE9BQU87UUFDSCxNQUFNVCxpREFBUUEsQ0FBQ0ksWUFBWSxDQUFDTSxNQUFNLENBQUM7WUFDL0JGLE1BQU07Z0JBQUNMLFFBQVFBO2dCQUFRTSxPQUFPO1lBQUM7UUFDbkM7SUFDSjtBQUNKLEVBQUU7QUFFSyxNQUFNRSxnQkFBZ0I7SUFDekIsTUFBTSxFQUFDUixNQUFNLEVBQUMsR0FBR0osbURBQUlBO0lBRXJCLElBQUcsQ0FBQ0ksUUFBUTtRQUNSLE9BQU87SUFDWDtJQUVBLE1BQU1DLGVBQWUsTUFBTUosaURBQVFBLENBQUNJLFlBQVksQ0FBQ0MsVUFBVSxDQUFDO1FBQ3hEQyxPQUFPO1lBQ0hILFFBQVFBO1FBQ1o7SUFDSjtJQUVBLElBQUcsQ0FBQ0MsZ0JBQWdCQSxhQUFhSyxLQUFLLEdBQUdSLHVEQUFlQSxFQUFDO1FBQ3JELE9BQU87SUFDWCxPQUFPO1FBQ0gsT0FBTztJQUNYO0FBRUosRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLXNhYXMvLi9saWIvYXBpLWxpbWl0LnRzP2UxM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XG5pbXBvcnQgcHJpc21hZGIgZnJvbSBcIi4vcHJpc21hZGJcIjtcbmltcG9ydCB7IE1BWF9GUkVFX0NPVU5UUyB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgaW5jcmVhc2VBcGlMaW1pdCA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHt1c2VySWR9ID0gYXV0aCgpO1xuXG4gICAgaWYgKCF1c2VySWQpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckFwaUxpbWl0ID0gYXdhaXQgcHJpc21hZGIudXNlckFwaUxpbWl0LmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTp7XG4gICAgICAgICAgICB1c2VySWRcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYodXNlckFwaUxpbWl0KXtcbiAgICAgICAgYXdhaXQgcHJpc21hZGIudXNlckFwaUxpbWl0LnVwZGF0ZSh7XG4gICAgICAgICAgICB3aGVyZToge3VzZXJJZDogdXNlcklkfSxcbiAgICAgICAgICAgIGRhdGE6IHtjb3VudDogdXNlckFwaUxpbWl0LmNvdW50ICsgMX0sXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHByaXNtYWRiLnVzZXJBcGlMaW1pdC5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge3VzZXJJZDogdXNlcklkLCBjb3VudDogMX1cbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2hlY2tBcGlMaW1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7dXNlcklkfSA9IGF1dGgoKTtcblxuICAgIGlmKCF1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgdXNlckFwaUxpbWl0ID0gYXdhaXQgcHJpc21hZGIudXNlckFwaUxpbWl0LmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcklkOiB1c2VySWRcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoIXVzZXJBcGlMaW1pdCB8fCB1c2VyQXBpTGltaXQuY291bnQgPCBNQVhfRlJFRV9DT1VOVFMpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJhdXRoIiwicHJpc21hZGIiLCJNQVhfRlJFRV9DT1VOVFMiLCJpbmNyZWFzZUFwaUxpbWl0IiwidXNlcklkIiwidXNlckFwaUxpbWl0IiwiZmluZFVuaXF1ZSIsIndoZXJlIiwidXBkYXRlIiwiZGF0YSIsImNvdW50IiwiY3JlYXRlIiwiY2hlY2tBcGlMaW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/api-limit.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismadb = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = prismadb;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prismadb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBTTNDLE1BQU1DLFdBQVdDLFdBQVdDLE1BQU0sSUFBSSxJQUFJSCx3REFBWUE7QUFDdEQsSUFBSUksSUFBcUMsRUFBRUYsV0FBV0MsTUFBTSxHQUFJRjtBQUVoRSxpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLXNhYXMvLi9saWIvcHJpc21hZGIudHM/MGUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ByaXNtYUNsaWVudH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IHByaXNtYWRiID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSAgcHJpc21hZGI7XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYWRiO1xuXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hZGIiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/prismadb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/node-fetch-native","vendor-chunks/@clerk","vendor-chunks/@peculiar","vendor-chunks/asn1js","vendor-chunks/webcrypto-core","vendor-chunks/tslib","vendor-chunks/path-to-regexp","vendor-chunks/pvtsutils","vendor-chunks/pvutils","vendor-chunks/ms","vendor-chunks/cookie","vendor-chunks/deepmerge","vendor-chunks/@swc","vendor-chunks/map-obj","vendor-chunks/no-case","vendor-chunks/lower-case","vendor-chunks/snakecase-keys","vendor-chunks/snake-case","vendor-chunks/dot-case","vendor-chunks/formdata-node","vendor-chunks/openai","vendor-chunks/form-data-encoder","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/tr46","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/web-streams-polyfill","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconversation%2Froute&page=%2Fapi%2Fconversation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconversation%2Froute.ts&appDir=%2FUsers%2Flucasrodrigues%2FAI-Saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flucasrodrigues%2FAI-Saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();