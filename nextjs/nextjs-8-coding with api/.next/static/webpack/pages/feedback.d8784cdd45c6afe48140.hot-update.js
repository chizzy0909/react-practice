webpackHotUpdate_N_E("pages/feedback",{

/***/ "./pages/feedback/index.js":
/*!*********************************!*\
  !*** ./pages/feedback/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FeedbackPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/chenghongzhen/Desktop/nextjs-8-coding with api/pages/feedback/index.js\";\nvar __N_SSG = true;\nfunction FeedbackPage(props) {\n  var _this = this;\n\n  function loadFeedbackHandler(id) {\n    fetch(\"/api/feedback/\".concat(id)).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setFeedbackData(data.feedback);\n    }); // /api/some-feedback-id\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: props.feedbackItems.map(function (item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [item.text, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return loadFeedbackHandler(item.id);\n          },\n          children: \"Show Details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, _this)]\n      }, item.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n_c = FeedbackPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"FeedbackPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVlZGJhY2svaW5kZXguanM/YjljZCJdLCJuYW1lcyI6WyJGZWVkYmFja1BhZ2UiLCJwcm9wcyIsImxvYWRGZWVkYmFja0hhbmRsZXIiLCJpZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzZXRGZWVkYmFja0RhdGEiLCJmZWVkYmFjayIsImZlZWRiYWNrSXRlbXMiLCJtYXAiLCJpdGVtIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUMxQyxXQUFTQyxtQkFBVCxDQUE2QkMsRUFBN0IsRUFBaUM7QUFDL0JDLFNBQUsseUJBQWtCRCxFQUFsQixFQUFMLENBQ0dFLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZEMscUJBQWUsQ0FBQ0QsSUFBSSxDQUFDRSxRQUFOLENBQWY7QUFDRCxLQUpILEVBRCtCLENBS3pCO0FBQ1A7O0FBQ0Qsc0JBQ0U7QUFBQSxjQUNHVCxLQUFLLENBQUNVLGFBQU4sQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLElBQUQ7QUFBQSwwQkFDdkI7QUFBQSxtQkFDR0EsSUFBSSxDQUFDQyxJQURSLEVBQ2MsR0FEZCxlQUVFO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFNWixtQkFBbUIsQ0FBQ1csSUFBSSxDQUFDVixFQUFOLENBQXpCO0FBQUEsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxTQUFTVSxJQUFJLENBQUNWLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR1QjtBQUFBLEtBQXhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7S0FwQnVCSCxZIiwiZmlsZSI6Ii4vcGFnZXMvZmVlZGJhY2svaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBidWlsZEZlZWRiYWNrUGF0aCwgZXh0cmFjdEZlZWRiYWNrIH0gZnJvbSBcIi4uL2FwaS9mZWVkYmFja1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWVkYmFja1BhZ2UocHJvcHMpIHtcbiAgZnVuY3Rpb24gbG9hZEZlZWRiYWNrSGFuZGxlcihpZCkge1xuICAgIGZldGNoKGAvYXBpL2ZlZWRiYWNrLyR7aWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0RmVlZGJhY2tEYXRhKGRhdGEuZmVlZGJhY2spO1xuICAgICAgfSk7IC8vIC9hcGkvc29tZS1mZWVkYmFjay1pZFxuICB9XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3Byb3BzLmZlZWRiYWNrSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgIHtpdGVtLnRleHR9e1wiIFwifVxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZEZlZWRiYWNrSGFuZGxlcihpdGVtLmlkKX0+XG4gICAgICAgICAgICBTaG93IERldGFpbHNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpO1xuICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZmVlZGJhY2tJdGVtczogZGF0YSxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/feedback/index.js\n");

/***/ })

})