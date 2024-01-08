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
exports.id = "app/api/image/route";
exports.ids = ["app/api/image/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fimage%2Froute&page=%2Fapi%2Fimage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fimage%2Froute.ts&appDir=%2FUsers%2Flucasrodrigues%2FAI-Saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flucasrodrigues%2FAI-Saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fimage%2Froute&page=%2Fapi%2Fimage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fimage%2Froute.ts&appDir=%2FUsers%2Flucasrodrigues%2FAI-Saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flucasrodrigues%2FAI-Saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_lucasrodrigues_AI_Saas_app_api_image_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/image/route.ts */ \"(rsc)/./app/api/image/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/image/route\",\n        pathname: \"/api/image\",\n        filename: \"route\",\n        bundlePath: \"app/api/image/route\"\n    },\n    resolvedPagePath: \"/Users/lucasrodrigues/AI-Saas/app/api/image/route.ts\",\n    nextConfigOutput,\n    userland: _Users_lucasrodrigues_AI_Saas_app_api_image_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/image/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZpbWFnZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGaW1hZ2UlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZpbWFnZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmx1Y2Fzcm9kcmlndWVzJTJGQUktU2FhcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZsdWNhc3JvZHJpZ3VlcyUyRkFJLVNhYXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLXNhYXMvPzhmNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2x1Y2Fzcm9kcmlndWVzL0FJLVNhYXMvYXBwL2FwaS9pbWFnZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvaW1hZ2Uvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9pbWFnZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvaW1hZ2Uvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbHVjYXNyb2RyaWd1ZXMvQUktU2Fhcy9hcHAvYXBpL2ltYWdlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2ltYWdlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fimage%2Froute&page=%2Fapi%2Fimage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fimage%2Froute.ts&appDir=%2FUsers%2Flucasrodrigues%2FAI-Saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flucasrodrigues%2FAI-Saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/image/route.ts":
/*!********************************!*\
  !*** ./app/api/image/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! console */ \"console\");\n/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(console__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n/* harmony import */ var _lib_api_limit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/api-limit */ \"(rsc)/./lib/api-limit.ts\");\n\n\n\n\n\n// const configuration = new OpenAI({\n//     )\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\nasync function POST(req) {\n    try {\n        const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.auth)();\n        const body = await req.json();\n        const { prompt, amount = 1, resolution = \"512x512\" } = body;\n        if (!userId) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Unauthorized\", {\n                status: 401\n            });\n        }\n        if (!openai.apiKey) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Open API Key not configured\", {\n                status: 500\n            });\n        }\n        if (!prompt) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"prompt are required\", {\n                status: 400\n            });\n        }\n        if (!amount) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"amount are required\", {\n                status: 400\n            });\n        }\n        if (!resolution) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"resolution are required\", {\n                status: 400\n            });\n        }\n        const freeTrial = await (0,_lib_api_limit__WEBPACK_IMPORTED_MODULE_2__.checkApiLimit)();\n        if (!freeTrial) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Free trial has expired\", {\n                status: 403\n            });\n        }\n        const response = await openai.images.generate({\n            prompt,\n            n: parseInt(amount, 10),\n            size: resolution\n        });\n        await (0,_lib_api_limit__WEBPACK_IMPORTED_MODULE_2__.increaseApiLimit)();\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json(response.data);\n    } catch (error) {\n        (0,console__WEBPACK_IMPORTED_MODULE_0__.log)(\"[IMAGE ERROR]\", error);\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Internal Error\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2ltYWdlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFDUDtBQUNhO0FBQ2Y7QUFDc0M7QUFFbEUscUNBQXFDO0FBQ3JDLFFBQVE7QUFDUixNQUFNTSxTQUFTLElBQUlILDhDQUFNQSxDQUFDO0lBQ3RCSSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDdEM7QUFFTyxlQUFlQyxLQUNsQkMsR0FBWTtJQUVaLElBQUc7UUFDQyxNQUFNLEVBQUNDLE1BQU0sRUFBQyxHQUFFYixtREFBSUE7UUFDcEIsTUFBTWMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO1FBQzNCLE1BQU0sRUFBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsRUFBRUMsYUFBYSxTQUFTLEVBQUMsR0FBR0o7UUFFckQsSUFBRyxDQUFDRCxRQUFPO1lBQ1AsT0FBTyxJQUFJWCxrRkFBWUEsQ0FBQyxnQkFBZ0I7Z0JBQUNpQixRQUFRO1lBQUc7UUFFeEQ7UUFFQSxJQUFHLENBQUNiLE9BQU9DLE1BQU0sRUFBQztZQUNkLE9BQU8sSUFBSUwsa0ZBQVlBLENBQUMsK0JBQStCO2dCQUFDaUIsUUFBUTtZQUFHO1FBRXZFO1FBRUEsSUFBRyxDQUFDSCxRQUFPO1lBQ1AsT0FBTyxJQUFJZCxrRkFBWUEsQ0FBQyx1QkFBdUI7Z0JBQUNpQixRQUFRO1lBQUc7UUFFL0Q7UUFDQSxJQUFHLENBQUNGLFFBQU87WUFDUCxPQUFPLElBQUlmLGtGQUFZQSxDQUFDLHVCQUF1QjtnQkFBQ2lCLFFBQVE7WUFBRztRQUUvRDtRQUNBLElBQUcsQ0FBQ0QsWUFBVztZQUNYLE9BQU8sSUFBSWhCLGtGQUFZQSxDQUFDLDJCQUEyQjtnQkFBQ2lCLFFBQVE7WUFBRztRQUVuRTtRQUVBLE1BQU1DLFlBQVksTUFBTWhCLDZEQUFhQTtRQUVyQyxJQUFHLENBQUNnQixXQUFVO1lBQ1YsT0FBTyxJQUFJbEIsa0ZBQVlBLENBQUMsMEJBQTBCO2dCQUFDaUIsUUFBUTtZQUFHO1FBQ2xFO1FBQ0EsTUFBTUUsV0FBVyxNQUFNZixPQUFPZ0IsTUFBTSxDQUFDQyxRQUFRLENBQUM7WUFDMUNQO1lBQ0FRLEdBQUdDLFNBQVNSLFFBQVE7WUFDcEJTLE1BQU1SO1FBRVY7UUFFQSxNQUFNYixnRUFBZ0JBO1FBRXRCLE9BQU9ILGtGQUFZQSxDQUFDYSxJQUFJLENBQUNNLFNBQVNNLElBQUk7SUFDMUMsRUFBRSxPQUFNQyxPQUFNO1FBQ1YzQiw0Q0FBR0EsQ0FBQyxpQkFBaUIyQjtRQUNyQixPQUFPLElBQUkxQixrRkFBWUEsQ0FBQyxrQkFBa0I7WUFBQ2lCLFFBQVE7UUFBRztJQUMxRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktc2Fhcy8uL2FwcC9hcGkvaW1hZ2Uvcm91dGUudHM/NjNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkBjbGVyay9uZXh0anNcIjtcbmltcG9ydCB7IGxvZyB9IGZyb20gXCJjb25zb2xlXCI7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBPcGVuQUkgZnJvbSBcIm9wZW5haVwiO1xuaW1wb3J0IHsgY2hlY2tBcGlMaW1pdCwgaW5jcmVhc2VBcGlMaW1pdCB9IGZyb20gXCJAL2xpYi9hcGktbGltaXRcIjtcblxuLy8gY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBPcGVuQUkoe1xuLy8gICAgIClcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVlcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChcbiAgICByZXE6IFJlcXVlc3Rcbil7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCB7dXNlcklkfT0gYXV0aCgpO1xuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgICAgY29uc3Qge3Byb21wdCwgYW1vdW50ID0gMSwgcmVzb2x1dGlvbiA9IFwiNTEyeDUxMlwifSA9IGJvZHk7XG5cbiAgICAgICAgaWYoIXVzZXJJZCl7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIlVuYXV0aG9yaXplZFwiLCB7c3RhdHVzOiA0MDF9KTtcbiBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFvcGVuYWkuYXBpS2V5KXtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiT3BlbiBBUEkgS2V5IG5vdCBjb25maWd1cmVkXCIsIHtzdGF0dXM6IDUwMH0pO1xuIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXByb21wdCl7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcInByb21wdCBhcmUgcmVxdWlyZWRcIiwge3N0YXR1czogNDAwfSk7XG4gXG4gICAgICAgIH1cbiAgICAgICAgaWYoIWFtb3VudCl7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcImFtb3VudCBhcmUgcmVxdWlyZWRcIiwge3N0YXR1czogNDAwfSk7XG4gXG4gICAgICAgIH1cbiAgICAgICAgaWYoIXJlc29sdXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJyZXNvbHV0aW9uIGFyZSByZXF1aXJlZFwiLCB7c3RhdHVzOiA0MDB9KTtcbiBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZyZWVUcmlhbCA9IGF3YWl0IGNoZWNrQXBpTGltaXQoKTtcblxuICAgICAgICBpZighZnJlZVRyaWFsKXtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiRnJlZSB0cmlhbCBoYXMgZXhwaXJlZFwiLCB7c3RhdHVzOiA0MDN9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLmltYWdlcy5nZW5lcmF0ZSh7XG4gICAgICAgICAgICBwcm9tcHQsXG4gICAgICAgICAgICBuOiBwYXJzZUludChhbW91bnQsIDEwKSxcbiAgICAgICAgICAgIHNpemU6IHJlc29sdXRpb24sXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCBpbmNyZWFzZUFwaUxpbWl0KCk7XG5cbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJlc3BvbnNlLmRhdGEpXG4gICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIGxvZyhcIltJTUFHRSBFUlJPUl1cIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIkludGVybmFsIEVycm9yXCIsIHtzdGF0dXM6IDUwMH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiYXV0aCIsImxvZyIsIk5leHRSZXNwb25zZSIsIk9wZW5BSSIsImNoZWNrQXBpTGltaXQiLCJpbmNyZWFzZUFwaUxpbWl0Iiwib3BlbmFpIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwiUE9TVCIsInJlcSIsInVzZXJJZCIsImJvZHkiLCJqc29uIiwicHJvbXB0IiwiYW1vdW50IiwicmVzb2x1dGlvbiIsInN0YXR1cyIsImZyZWVUcmlhbCIsInJlc3BvbnNlIiwiaW1hZ2VzIiwiZ2VuZXJhdGUiLCJuIiwicGFyc2VJbnQiLCJzaXplIiwiZGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/image/route.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkApiLimit: () => (/* binding */ checkApiLimit),\n/* harmony export */   getApiLimitCount: () => (/* binding */ getApiLimitCount),\n/* harmony export */   increaseApiLimit: () => (/* binding */ increaseApiLimit)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/nextjs */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n/* harmony import */ var _prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prismadb */ \"(rsc)/./lib/prismadb.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"(rsc)/./constants.ts\");\n\n\n\nconst increaseApiLimit = async ()=>{\n    const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.auth)();\n    if (!userId) {\n        return;\n    }\n    const userApiLimit = await _prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].userApiLimit.findUnique({\n        where: {\n            userId\n        }\n    });\n    if (userApiLimit) {\n        await _prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].userApiLimit.update({\n            where: {\n                userId: userId\n            },\n            data: {\n                count: userApiLimit.count + 1\n            }\n        });\n    } else {\n        await _prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].userApiLimit.create({\n            data: {\n                userId: userId,\n                count: 1\n            }\n        });\n    }\n};\nconst checkApiLimit = async ()=>{\n    const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.auth)();\n    if (!userId) {\n        return false;\n    }\n    const userApiLimit = await _prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].userApiLimit.findUnique({\n        where: {\n            userId: userId\n        }\n    });\n    if (!userApiLimit || userApiLimit.count < _constants__WEBPACK_IMPORTED_MODULE_1__.MAX_FREE_COUNTS) {\n        return true;\n    } else {\n        return false;\n    }\n};\nconst getApiLimitCount = async ()=>{\n    const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.auth)();\n    if (!userId) {\n        return 0;\n    }\n    const userApiLimit = await _prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].userApiLimit.findUnique({\n        where: {\n            userId\n        }\n    });\n    if (!userApiLimit) {\n        return 0;\n    }\n    return userApiLimit.count;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXBpLWxpbWl0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQztBQUNIO0FBQ1k7QUFFdkMsTUFBTUcsbUJBQW1CO0lBQzVCLE1BQU0sRUFBQ0MsTUFBTSxFQUFDLEdBQUdKLG1EQUFJQTtJQUVyQixJQUFJLENBQUNJLFFBQU87UUFDUjtJQUNKO0lBRUEsTUFBTUMsZUFBZSxNQUFNSixpREFBUUEsQ0FBQ0ksWUFBWSxDQUFDQyxVQUFVLENBQUM7UUFDeERDLE9BQU07WUFDRkg7UUFDSjtJQUNKO0lBRUEsSUFBR0MsY0FBYTtRQUNaLE1BQU1KLGlEQUFRQSxDQUFDSSxZQUFZLENBQUNHLE1BQU0sQ0FBQztZQUMvQkQsT0FBTztnQkFBQ0gsUUFBUUE7WUFBTTtZQUN0QkssTUFBTTtnQkFBQ0MsT0FBT0wsYUFBYUssS0FBSyxHQUFHO1lBQUM7UUFDeEM7SUFDSixPQUFPO1FBQ0gsTUFBTVQsaURBQVFBLENBQUNJLFlBQVksQ0FBQ00sTUFBTSxDQUFDO1lBQy9CRixNQUFNO2dCQUFDTCxRQUFRQTtnQkFBUU0sT0FBTztZQUFDO1FBQ25DO0lBQ0o7QUFDSixFQUFFO0FBRUssTUFBTUUsZ0JBQWdCO0lBQ3pCLE1BQU0sRUFBQ1IsTUFBTSxFQUFDLEdBQUdKLG1EQUFJQTtJQUVyQixJQUFHLENBQUNJLFFBQVE7UUFDUixPQUFPO0lBQ1g7SUFFQSxNQUFNQyxlQUFlLE1BQU1KLGlEQUFRQSxDQUFDSSxZQUFZLENBQUNDLFVBQVUsQ0FBQztRQUN4REMsT0FBTztZQUNISCxRQUFRQTtRQUNaO0lBQ0o7SUFFQSxJQUFHLENBQUNDLGdCQUFnQkEsYUFBYUssS0FBSyxHQUFHUix1REFBZUEsRUFBQztRQUNyRCxPQUFPO0lBQ1gsT0FBTztRQUNILE9BQU87SUFDWDtBQUVKLEVBQUU7QUFFSyxNQUFNVyxtQkFBbUI7SUFDNUIsTUFBTSxFQUFDVCxNQUFNLEVBQUMsR0FBR0osbURBQUlBO0lBRXJCLElBQUcsQ0FBQ0ksUUFBTztRQUNQLE9BQU87SUFDWDtJQUVBLE1BQU1DLGVBQWUsTUFBTUosaURBQVFBLENBQUNJLFlBQVksQ0FBQ0MsVUFBVSxDQUFDO1FBQ3hEQyxPQUFNO1lBQ0ZIO1FBQ0o7SUFDSjtJQUVBLElBQUcsQ0FBQ0MsY0FBYTtRQUNiLE9BQU87SUFDWDtJQUVBLE9BQU9BLGFBQWFLLEtBQUs7QUFHN0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLXNhYXMvLi9saWIvYXBpLWxpbWl0LnRzP2UxM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XG5pbXBvcnQgcHJpc21hZGIgZnJvbSBcIi4vcHJpc21hZGJcIjtcbmltcG9ydCB7IE1BWF9GUkVFX0NPVU5UUyB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgaW5jcmVhc2VBcGlMaW1pdCA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHt1c2VySWR9ID0gYXV0aCgpO1xuXG4gICAgaWYgKCF1c2VySWQpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckFwaUxpbWl0ID0gYXdhaXQgcHJpc21hZGIudXNlckFwaUxpbWl0LmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTp7XG4gICAgICAgICAgICB1c2VySWRcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYodXNlckFwaUxpbWl0KXtcbiAgICAgICAgYXdhaXQgcHJpc21hZGIudXNlckFwaUxpbWl0LnVwZGF0ZSh7XG4gICAgICAgICAgICB3aGVyZToge3VzZXJJZDogdXNlcklkfSxcbiAgICAgICAgICAgIGRhdGE6IHtjb3VudDogdXNlckFwaUxpbWl0LmNvdW50ICsgMX0sXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHByaXNtYWRiLnVzZXJBcGlMaW1pdC5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge3VzZXJJZDogdXNlcklkLCBjb3VudDogMX1cbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2hlY2tBcGlMaW1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7dXNlcklkfSA9IGF1dGgoKTtcblxuICAgIGlmKCF1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgdXNlckFwaUxpbWl0ID0gYXdhaXQgcHJpc21hZGIudXNlckFwaUxpbWl0LmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcklkOiB1c2VySWRcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoIXVzZXJBcGlMaW1pdCB8fCB1c2VyQXBpTGltaXQuY291bnQgPCBNQVhfRlJFRV9DT1VOVFMpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxufTtcblxuZXhwb3J0IGNvbnN0IGdldEFwaUxpbWl0Q291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qge3VzZXJJZH0gPSBhdXRoKCk7XG5cbiAgICBpZighdXNlcklkKXtcbiAgICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXNlckFwaUxpbWl0ID0gYXdhaXQgcHJpc21hZGIudXNlckFwaUxpbWl0LmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTp7XG4gICAgICAgICAgICB1c2VySWRcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoIXVzZXJBcGlMaW1pdCl7XG4gICAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgcmV0dXJuIHVzZXJBcGlMaW1pdC5jb3VudDtcblxuXG59Il0sIm5hbWVzIjpbImF1dGgiLCJwcmlzbWFkYiIsIk1BWF9GUkVFX0NPVU5UUyIsImluY3JlYXNlQXBpTGltaXQiLCJ1c2VySWQiLCJ1c2VyQXBpTGltaXQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJ1cGRhdGUiLCJkYXRhIiwiY291bnQiLCJjcmVhdGUiLCJjaGVja0FwaUxpbWl0IiwiZ2V0QXBpTGltaXRDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/api-limit.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/node-fetch-native","vendor-chunks/@clerk","vendor-chunks/@peculiar","vendor-chunks/asn1js","vendor-chunks/webcrypto-core","vendor-chunks/tslib","vendor-chunks/path-to-regexp","vendor-chunks/pvtsutils","vendor-chunks/pvutils","vendor-chunks/cookie","vendor-chunks/deepmerge","vendor-chunks/@swc","vendor-chunks/map-obj","vendor-chunks/no-case","vendor-chunks/lower-case","vendor-chunks/snakecase-keys","vendor-chunks/snake-case","vendor-chunks/dot-case","vendor-chunks/ms","vendor-chunks/formdata-node","vendor-chunks/event-target-shim","vendor-chunks/abort-controller","vendor-chunks/tr46","vendor-chunks/web-streams-polyfill","vendor-chunks/openai","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/form-data-encoder","vendor-chunks/webidl-conversions","vendor-chunks/humanize-ms"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fimage%2Froute&page=%2Fapi%2Fimage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fimage%2Froute.ts&appDir=%2FUsers%2Flucasrodrigues%2FAI-Saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flucasrodrigues%2FAI-Saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();