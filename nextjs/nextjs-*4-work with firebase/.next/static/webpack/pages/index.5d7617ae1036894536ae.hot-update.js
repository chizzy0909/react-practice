webpackHotUpdate_N_E("pages/index",{

/***/ "./components/input/newsletter-registration.js":
/*!*****************************************************!*\
  !*** ./components/input/newsletter-registration.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsletter-registration.module.css */ \"./components/input/newsletter-registration.module.css\");\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/chenghongzhen/Desktop/nextjs-4*-work with firebase/components/input/newsletter-registration.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction NewsletterRegistration() {\n  _s();\n\n  var emailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var notificationCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  function registrationHandler(event) {\n    event.preventDefault();\n    var enteredEmail = emailInputRef.current.value;\n    notificationCtx.showNotification({\n      title: \"Signing up...\",\n      message: \"Registering for newsletter.\",\n      status: \"pending\"\n    });\n    fetch(\"/api/newsletter\", {\n      method: \"POST\",\n      body: JSON.stringify({\n        email: enteredEmail\n      }),\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }) // .then((response) => )\n    // .then((data) => console.log(data));\n    .then(function (response) {\n      if (response.ok) {\n        return response.json();\n      }\n\n      return response.json().then(function (data) {\n        throw new Error(data.message || \"Something went wrong!\");\n      });\n    }).then(function (data) {\n      notificationCtx.showNotification({\n        title: \"Success!\",\n        message: \"Successfully registered for newsletter!\",\n        status: \"success\"\n      });\n    })[\"catch\"](function (error) {\n      notificationCtx.showNotification({\n        title: \"Error!\",\n        message: error.message || \"Something went wrong!\",\n        status: \"error\"\n      });\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.newsletter,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Sign up to stay updated!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: registrationHandler,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          placeholder: \"Your email\",\n          \"aria-label\": \"Your email\",\n          ref: emailInputRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: \"Register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NewsletterRegistration, \"DPwtQQ/gldp2MEe6QW3mx9/oYa8=\");\n\n_c = NewsletterRegistration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsletterRegistration);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewsletterRegistration\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5qcz9hN2E0Il0sIm5hbWVzIjpbIk5ld3NsZXR0ZXJSZWdpc3RyYXRpb24iLCJlbWFpbElucHV0UmVmIiwidXNlUmVmIiwibm90aWZpY2F0aW9uQ3R4IiwidXNlQ29udGV4dCIsIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJyZWdpc3RyYXRpb25IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZGF0YSIsIkVycm9yIiwiZXJyb3IiLCJjbGFzc2VzIiwibmV3c2xldHRlciIsImNvbnRyb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0Esc0JBQVQsR0FBa0M7QUFBQTs7QUFDaEMsTUFBTUMsYUFBYSxHQUFHQyxvREFBTSxFQUE1QjtBQUNBLE1BQU1DLGVBQWUsR0FBR0Msd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FBbEM7O0FBRUEsV0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQ2xDQSxTQUFLLENBQUNDLGNBQU47QUFFQSxRQUFNQyxZQUFZLEdBQUdSLGFBQWEsQ0FBQ1MsT0FBZCxDQUFzQkMsS0FBM0M7QUFFQVIsbUJBQWUsQ0FBQ1MsZ0JBQWhCLENBQWlDO0FBQy9CQyxXQUFLLEVBQUUsZUFEd0I7QUFFL0JDLGFBQU8sRUFBRSw2QkFGc0I7QUFHL0JDLFlBQU0sRUFBRTtBQUh1QixLQUFqQztBQU1BQyxTQUFLLENBQUMsaUJBQUQsRUFBb0I7QUFDdkJDLFlBQU0sRUFBRSxNQURlO0FBRXZCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVDLGFBQUssRUFBRVo7QUFBVCxPQUFmLENBRmlCO0FBR3ZCYSxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUhjLEtBQXBCLENBQUwsQ0FPRTtBQUNBO0FBUkYsS0FTR0MsSUFUSCxDQVNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQixVQUFJQSxRQUFRLENBQUNDLEVBQWIsRUFBaUI7QUFDZixlQUFPRCxRQUFRLENBQUNFLElBQVQsRUFBUDtBQUNEOztBQUVELGFBQU9GLFFBQVEsQ0FBQ0UsSUFBVCxHQUFnQkgsSUFBaEIsQ0FBcUIsVUFBQ0ksSUFBRCxFQUFVO0FBQ3BDLGNBQU0sSUFBSUMsS0FBSixDQUFVRCxJQUFJLENBQUNiLE9BQUwsSUFBZ0IsdUJBQTFCLENBQU47QUFDRCxPQUZNLENBQVA7QUFHRCxLQWpCSCxFQWtCR1MsSUFsQkgsQ0FrQlEsVUFBQ0ksSUFBRCxFQUFVO0FBQ2R4QixxQkFBZSxDQUFDUyxnQkFBaEIsQ0FBaUM7QUFDL0JDLGFBQUssRUFBRSxVQUR3QjtBQUUvQkMsZUFBTyxFQUFFLHlDQUZzQjtBQUcvQkMsY0FBTSxFQUFFO0FBSHVCLE9BQWpDO0FBS0QsS0F4QkgsV0F5QlMsVUFBQ2MsS0FBRCxFQUFXO0FBQ2hCMUIscUJBQWUsQ0FBQ1MsZ0JBQWhCLENBQWlDO0FBQy9CQyxhQUFLLEVBQUUsUUFEd0I7QUFFL0JDLGVBQU8sRUFBRWUsS0FBSyxDQUFDZixPQUFOLElBQWlCLHVCQUZLO0FBRy9CQyxjQUFNLEVBQUU7QUFIdUIsT0FBakM7QUFLRCxLQS9CSDtBQWdDRDs7QUFFRCxzQkFDRTtBQUFTLGFBQVMsRUFBRWUsMEVBQU8sQ0FBQ0MsVUFBNUI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxjQUFRLEVBQUV6QixtQkFBaEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUV3QiwwRUFBTyxDQUFDRSxPQUF4QjtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxZQUFFLEVBQUMsT0FGTDtBQUdFLHFCQUFXLEVBQUMsWUFIZDtBQUlFLHdCQUFXLFlBSmI7QUFLRSxhQUFHLEVBQUUvQjtBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBbEVRRCxzQjs7S0FBQUEsc0I7QUFvRU1BLHFGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pbnB1dC9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRleHQgZnJvbSBcIi4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0XCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gTmV3c2xldHRlclJlZ2lzdHJhdGlvbigpIHtcbiAgY29uc3QgZW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBub3RpZmljYXRpb25DdHggPSB1c2VDb250ZXh0KE5vdGlmaWNhdGlvbkNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gZW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgdGl0bGU6IFwiU2lnbmluZyB1cC4uLlwiLFxuICAgICAgbWVzc2FnZTogXCJSZWdpc3RlcmluZyBmb3IgbmV3c2xldHRlci5cIixcbiAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgfSk7XG5cbiAgICBmZXRjaChcIi9hcGkvbmV3c2xldHRlclwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbDogZW50ZXJlZEVtYWlsIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC8vIC50aGVuKChyZXNwb25zZSkgPT4gKVxuICAgICAgLy8gLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBmb3IgbmV3c2xldHRlciFcIixcbiAgICAgICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogXCJFcnJvciFcIixcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIsXG4gICAgICAgICAgc3RhdHVzOiBcImVycm9yXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXdzbGV0dGVyfT5cbiAgICAgIDxoMj5TaWduIHVwIHRvIHN0YXkgdXBkYXRlZCE8L2gyPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3JlZ2lzdHJhdGlvbkhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiWW91ciBlbWFpbFwiXG4gICAgICAgICAgICByZWY9e2VtYWlsSW5wdXRSZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3c2xldHRlclJlZ2lzdHJhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/input/newsletter-registration.js\n");

/***/ })

})