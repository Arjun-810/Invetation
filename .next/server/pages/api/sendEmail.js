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
exports.id = "pages/api/sendEmail";
exports.ids = ["pages/api/sendEmail"];
exports.modules = {

/***/ "./pages/api/sendEmail.js":
/*!********************************!*\
  !*** ./pages/api/sendEmail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n// import type {NextApiRequest, NextApiResponse} from 'next'\n\nconst fromEmail = 'arjunkaushik039@gmail.com';\nconst toEmail = 'arjunkaushik039@gmail.com';\nconst password = 'joasfebrdlrgacqm';\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n  host: 'smtp.gmail.com',\n  port: 465,\n  secure: true,\n  auth: {\n    user: fromEmail,\n    pass: password\n  }\n});\nasync function handler(req, res) {\n  console.log(\"body = \", req.body);\n  const {\n    name,\n    email,\n    contact_no,\n    adults,\n    child2_10,\n    childAbv10\n  } = req.body;\n  const mailOptions = {\n    from: fromEmail,\n    to: email,\n    subject: `Diwali Ticket Confirmation`,\n    html: `\n    <div>Dear ${name},<br>\n\n    Confirmation of your booking for Diwali Celibration on 4th NOV 2023 AT 7:00 PM.<br/>\n    Details: ${adults} adult, ${child2_10} children (2-10), ${childAbv10} children (above 10). See you there!<br/>\n    \n    Best,<br/>\n    Priya Sharma\n\t\t`\n  };\n  const mailOptions2 = {\n    from: fromEmail,\n    to: fromEmail,\n    subject: `${name} Diwali Ticket Confirmation`,\n    html: `\n    <div>Dear Priya Sharma,<br>\n\n    System generated mail for recent ticket reservation:<br/>\n\n    Name : ${name} <br/>\n    email: ${email}<br/>\n    contact no: ${contact_no}<br/> \n\n    Reservation Details:<br/>\n\n    Adult Tickets: ${adults}<br/>\n    Child Tickets (2-10): ${child2_10}<br/>\n    Child Tickets (above 10): ${childAbv10}<br/>\n    Thankyou\n    `\n  };\n  return new Promise(resolve => {\n    transporter.sendMail(mailOptions, function (error, info) {\n      if (error) {\n        console.log(\"error = \", error);\n        res.status(405).end();\n        resolve('');\n      }\n\n      console.log('Mail Sent', info);\n      res.status(200).end();\n      resolve('');\n    });\n    transporter.sendMail(mailOptions2, function (error, info) {\n      if (error) {\n        console.log(\"error = \", error);\n        res.status(405).end();\n        resolve('');\n      }\n\n      console.log('Mail Sent', info);\n      res.status(200).end();\n      resolve('');\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0FMLFFBQUFBLE9BQU8sQ0FBQyxFQUFELENBQVA7QUFDRDs7QUFDRGhCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJrQixJQUF6QjtBQUNBcEIsTUFBQUEsR0FBRyxDQUFDcUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0FMLE1BQUFBLE9BQU8sQ0FBQyxFQUFELENBQVA7QUFDRCxLQVREO0FBVUQsR0F0Qk0sQ0FBUDtBQXVCRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2FwaS9zZW5kRW1haWwuanM/OTk5NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgdHlwZSB7TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZX0gZnJvbSAnbmV4dCdcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInXG5cbmNvbnN0IGZyb21FbWFpbCA9ICdhcmp1bmthdXNoaWswMzlAZ21haWwuY29tJ1xuY29uc3QgdG9FbWFpbCA9ICdhcmp1bmthdXNoaWswMzlAZ21haWwuY29tJ1xuY29uc3QgcGFzc3dvcmQgPSAnam9hc2ZlYnJkbHJnYWNxbSdcblxuY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXG4gIHBvcnQ6IDQ2NSxcbiAgc2VjdXJlOiB0cnVlLFxuICBhdXRoOiB7XG4gICAgdXNlcjogZnJvbUVtYWlsLFxuICAgIHBhc3M6IHBhc3N3b3JkLFxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykgIHtcbiAgY29uc29sZS5sb2coXCJib2R5ID0gXCIscmVxLmJvZHkpXG4gIGNvbnN0IHtuYW1lLCBlbWFpbCwgY29udGFjdF9ubywgYWR1bHRzLGNoaWxkMl8xMCwgY2hpbGRBYnYxMH0gPSByZXEuYm9keVxuXG4gIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgIGZyb206IGZyb21FbWFpbCxcbiAgICB0bzogZW1haWwsXG4gICAgc3ViamVjdDogYERpd2FsaSBUaWNrZXQgQ29uZmlybWF0aW9uYCxcbiAgICBodG1sOiBgXG4gICAgPGRpdj5EZWFyICR7bmFtZX0sPGJyPlxuXG4gICAgQ29uZmlybWF0aW9uIG9mIHlvdXIgYm9va2luZyBmb3IgRGl3YWxpIENlbGlicmF0aW9uIG9uIDR0aCBOT1YgMjAyMyBBVCA3OjAwIFBNLjxici8+XG4gICAgRGV0YWlsczogJHthZHVsdHN9IGFkdWx0LCAke2NoaWxkMl8xMH0gY2hpbGRyZW4gKDItMTApLCAke2NoaWxkQWJ2MTB9IGNoaWxkcmVuIChhYm92ZSAxMCkuIFNlZSB5b3UgdGhlcmUhPGJyLz5cbiAgICBcbiAgICBCZXN0LDxici8+XG4gICAgUHJpeWEgU2hhcm1hXG5cdFx0YCxcbiAgfVxuXG4gIGNvbnN0IG1haWxPcHRpb25zMiA9IHtcbiAgICBmcm9tOiBmcm9tRW1haWwsXG4gICAgdG86IGZyb21FbWFpbCxcbiAgICBzdWJqZWN0OiBgJHtuYW1lfSBEaXdhbGkgVGlja2V0IENvbmZpcm1hdGlvbmAsXG4gICAgaHRtbDogYFxuICAgIDxkaXY+RGVhciBQcml5YSBTaGFybWEsPGJyPlxuXG4gICAgU3lzdGVtIGdlbmVyYXRlZCBtYWlsIGZvciByZWNlbnQgdGlja2V0IHJlc2VydmF0aW9uOjxici8+XG5cbiAgICBOYW1lIDogJHtuYW1lfSA8YnIvPlxuICAgIGVtYWlsOiAke2VtYWlsfTxici8+XG4gICAgY29udGFjdCBubzogJHtjb250YWN0X25vfTxici8+IFxuXG4gICAgUmVzZXJ2YXRpb24gRGV0YWlsczo8YnIvPlxuXG4gICAgQWR1bHQgVGlja2V0czogJHthZHVsdHN9PGJyLz5cbiAgICBDaGlsZCBUaWNrZXRzICgyLTEwKTogJHtjaGlsZDJfMTB9PGJyLz5cbiAgICBDaGlsZCBUaWNrZXRzIChhYm92ZSAxMCk6ICR7Y2hpbGRBYnYxMH08YnIvPlxuICAgIFRoYW5reW91XG4gICAgYCxcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zLCBmdW5jdGlvbiAoZXJyb3IsIGluZm8pIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yID0gXCIsZXJyb3IpXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoKVxuICAgICAgICByZXNvbHZlKCcnKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ01haWwgU2VudCcsIGluZm8pXG4gICAgICByZXMuc3RhdHVzKDIwMCkuZW5kKClcbiAgICAgIHJlc29sdmUoJycpXG4gICAgfSlcblxuICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zMiwgZnVuY3Rpb24gKGVycm9yLCBpbmZvKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciA9IFwiLGVycm9yKVxuICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKClcbiAgICAgICAgcmVzb2x2ZSgnJylcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdNYWlsIFNlbnQnLCBpbmZvKVxuICAgICAgcmVzLnN0YXR1cygyMDApLmVuZCgpXG4gICAgICByZXNvbHZlKCcnKVxuICAgIH0pXG4gIH0pXG59XG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsImZyb21FbWFpbCIsInRvRW1haWwiLCJwYXNzd29yZCIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwidXNlciIsInBhc3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJuYW1lIiwiZW1haWwiLCJjb250YWN0X25vIiwiYWR1bHRzIiwiY2hpbGQyXzEwIiwiY2hpbGRBYnYxMCIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJtYWlsT3B0aW9uczIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlbmRNYWlsIiwiZXJyb3IiLCJpbmZvIiwic3RhdHVzIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/sendEmail.js\n");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/sendEmail.js"));
module.exports = __webpack_exports__;

})();