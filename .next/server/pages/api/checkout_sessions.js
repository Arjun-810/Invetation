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
exports.id = "pages/api/checkout_sessions";
exports.ids = ["pages/api/checkout_sessions"];
exports.modules = {

/***/ "./pages/api/checkout_sessions.js":
/*!****************************************!*\
  !*** ./pages/api/checkout_sessions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(\"sk_test_51Niz44SGHVtRwH6GhZGkAsz6VIy9Z1mIATko4ttmBoEtbaBjXGZweVSHNPyuYJn4IPmD4q95ht8gg9HeL2E69UIe00Ix2yHsDG\");\nasync function handler(req, res) {\n  if (req.method === \"POST\") {\n    try {\n      const session = await stripe.checkout.sessions.create({\n        payment_method_types: [\"card\"],\n        line_items: [{\n          price_data: {\n            currency: \"inr\",\n            product_data: {\n              name: \"Sample Product\"\n            },\n            unit_amount: 5000\n          },\n          quantity: 1\n        }],\n        mode: \"payment\",\n        success_url: `http://localhost:3000//success`,\n        cancel_url: `http://localhost:3000//`\n      });\n      res.status(200).json({\n        sessionId: session.id\n      });\n    } catch (err) {\n      res.status(500).json({\n        error: \"Error creating checkout session\"\n      });\n    }\n  } else {\n    res.setHeader(\"Allow\", \"POST\");\n    res.status(405).end(\"Method Not Allowed\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsK0NBQUosQ0FBVyw2R0FBWCxDQUFmO0FBRWUsZUFBZUUsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUk7QUFDRixZQUFNQyxPQUFPLEdBQUcsTUFBTUwsTUFBTSxDQUFDTSxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsTUFBekIsQ0FBZ0M7QUFDcERDLFFBQUFBLG9CQUFvQixFQUFFLENBQUMsTUFBRCxDQUQ4QjtBQUVwREMsUUFBQUEsVUFBVSxFQUFFLENBQ1Y7QUFDRUMsVUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLFlBQUFBLFFBQVEsRUFBRSxLQURBO0FBRVZDLFlBQUFBLFlBQVksRUFBRTtBQUNaQyxjQUFBQSxJQUFJLEVBQUU7QUFETSxhQUZKO0FBS1ZDLFlBQUFBLFdBQVcsRUFBRTtBQUxILFdBRGQ7QUFRRUMsVUFBQUEsUUFBUSxFQUFFO0FBUlosU0FEVSxDQUZ3QztBQWNwREMsUUFBQUEsSUFBSSxFQUFFLFNBZDhDO0FBZXBEQyxRQUFBQSxXQUFXLEVBQUcsZ0NBZnNDO0FBZ0JwREMsUUFBQUEsVUFBVSxFQUFHO0FBaEJ1QyxPQUFoQyxDQUF0QjtBQW1CQWhCLE1BQUFBLEdBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxRQUFBQSxTQUFTLEVBQUVqQixPQUFPLENBQUNrQjtBQUFyQixPQUFyQjtBQUVELEtBdEJELENBc0JFLE9BQU9DLEdBQVAsRUFBWTtBQUNackIsTUFBQUEsR0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVJLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BQXJCO0FBQ0Q7QUFDRixHQTFCRCxNQTBCTztBQUNMdEIsSUFBQUEsR0FBRyxDQUFDdUIsU0FBSixDQUFjLE9BQWQsRUFBdUIsTUFBdkI7QUFDQXZCLElBQUFBLEdBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxHQUFoQixDQUFvQixvQkFBcEI7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvYXBpL2NoZWNrb3V0X3Nlc3Npb25zLmpzPzMyZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XG5cbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXCJza190ZXN0XzUxTml6NDRTR0hWdFJ3SDZHaFpHa0FzejZWSXk5WjFtSUFUa280dHRtQm9FdGJhQmpYR1p3ZVZTSE5QeXVZSm40SVBtRDRxOTVodDhnZzlIZUwyRTY5VUllMDBJeDJ5SHNER1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczogW1wiY2FyZFwiXSxcbiAgICAgICAgbGluZV9pdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByaWNlX2RhdGE6IHtcbiAgICAgICAgICAgICAgY3VycmVuY3k6IFwiaW5yXCIsXG4gICAgICAgICAgICAgIHByb2R1Y3RfZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiU2FtcGxlIFByb2R1Y3RcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdW5pdF9hbW91bnQ6IDUwMDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbW9kZTogXCJwYXltZW50XCIsXG4gICAgICAgIHN1Y2Nlc3NfdXJsOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwLy9zdWNjZXNzYCxcbiAgICAgICAgY2FuY2VsX3VybDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8vYCxcbiAgICAgIH0pO1xuXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHNlc3Npb25JZDogc2Vzc2lvbi5pZCB9KTtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJFcnJvciBjcmVhdGluZyBjaGVja291dCBzZXNzaW9uXCIgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBcIlBPU1RcIik7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZChcIk1ldGhvZCBOb3QgQWxsb3dlZFwiKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJTdHJpcGUiLCJzdHJpcGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImxpbmVfaXRlbXMiLCJwcmljZV9kYXRhIiwiY3VycmVuY3kiLCJwcm9kdWN0X2RhdGEiLCJuYW1lIiwidW5pdF9hbW91bnQiLCJxdWFudGl0eSIsIm1vZGUiLCJzdWNjZXNzX3VybCIsImNhbmNlbF91cmwiLCJzdGF0dXMiLCJqc29uIiwic2Vzc2lvbklkIiwiaWQiLCJlcnIiLCJlcnJvciIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/checkout_sessions.js\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/checkout_sessions.js"));
module.exports = __webpack_exports__;

})();