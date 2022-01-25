module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/feedback/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/feedback/index.js":
/*!*************************************!*\
  !*** ./pages/api/feedback/index.js ***!
  \*************************************/
/*! exports provided: buildFeedbackPath, extractFeedback, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildFeedbackPath\", function() { return buildFeedbackPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extractFeedback\", function() { return extractFeedback; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction buildFeedbackPath() {\n  return path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), \"data\", \"feedback.json\");\n}\nfunction extractFeedback(filePath) {\n  const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filePath);\n  const data = JSON.parse(fileData);\n  return data;\n}\n\nfunction handler(req, res) {\n  if (req.method === \"POST\") {\n    const email = req.body.email;\n    const feedbackText = req.body.text;\n    const newFeedback = {\n      id: new Date().toISOString(),\n      email: email,\n      text: feedbackText\n    }; // store that in a database or in a file\n\n    const filePath = buildFeedbackPath();\n    const data = extractFeedback(filePath);\n    data.push(newFeedback);\n    fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(filePath, JSON.stringify(data));\n    res.status(201).json({\n      message: \"Success!\",\n      feedback: newFeedback\n    });\n  } else {\n    const filePath = buildFeedbackPath();\n    const data = extractFeedback(filePath);\n    res.status(200).json({\n      feedback: data\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmVlZGJhY2suanM/ZGZjNSJdLCJuYW1lcyI6WyJidWlsZEZlZWRiYWNrUGF0aCIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImV4dHJhY3RGZWVkYmFjayIsImZpbGVQYXRoIiwiZmlsZURhdGEiLCJmcyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJib2R5IiwiZmVlZGJhY2tUZXh0IiwidGV4dCIsIm5ld0ZlZWRiYWNrIiwiaWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJwdXNoIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZmVlZGJhY2siXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLFNBQVNBLGlCQUFULEdBQTZCO0FBQ2xDLFNBQU9DLDJDQUFJLENBQUNDLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsRUFBaUMsZUFBakMsQ0FBUDtBQUNEO0FBRU0sU0FBU0MsZUFBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDeEMsUUFBTUMsUUFBUSxHQUFHQyx5Q0FBRSxDQUFDQyxZQUFILENBQWdCSCxRQUFoQixDQUFqQjtBQUNBLFFBQU1JLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFFBQVgsQ0FBYjtBQUNBLFNBQU9HLElBQVA7QUFDRDs7QUFFRCxTQUFTRyxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDekIsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTUMsS0FBSyxHQUFHSCxHQUFHLENBQUNJLElBQUosQ0FBU0QsS0FBdkI7QUFDQSxVQUFNRSxZQUFZLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSixDQUFTRSxJQUE5QjtBQUVBLFVBQU1DLFdBQVcsR0FBRztBQUNsQkMsUUFBRSxFQUFFLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQURjO0FBRWxCUCxXQUFLLEVBQUVBLEtBRlc7QUFHbEJHLFVBQUksRUFBRUQ7QUFIWSxLQUFwQixDQUp5QixDQVV6Qjs7QUFDQSxVQUFNYixRQUFRLEdBQUdOLGlCQUFpQixFQUFsQztBQUNBLFVBQU1VLElBQUksR0FBR0wsZUFBZSxDQUFDQyxRQUFELENBQTVCO0FBQ0FJLFFBQUksQ0FBQ2UsSUFBTCxDQUFVSixXQUFWO0FBQ0FiLDZDQUFFLENBQUNrQixhQUFILENBQWlCcEIsUUFBakIsRUFBMkJLLElBQUksQ0FBQ2dCLFNBQUwsQ0FBZWpCLElBQWYsQ0FBM0I7QUFDQUssT0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFLFVBQVg7QUFBdUJDLGNBQVEsRUFBRVY7QUFBakMsS0FBckI7QUFDRCxHQWhCRCxNQWdCTztBQUNMLFVBQU1mLFFBQVEsR0FBR04saUJBQWlCLEVBQWxDO0FBQ0EsVUFBTVUsSUFBSSxHQUFHTCxlQUFlLENBQUNDLFFBQUQsQ0FBNUI7QUFDQVMsT0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUUsY0FBUSxFQUFFckI7QUFBWixLQUFyQjtBQUNEO0FBQ0Y7O0FBRWNHLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2ZlZWRiYWNrL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRmVlZGJhY2tQYXRoKCkge1xuICByZXR1cm4gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiZGF0YVwiLCBcImZlZWRiYWNrLmpzb25cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpIHtcbiAgY29uc3QgZmlsZURhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmaWxlRGF0YSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IGVtYWlsID0gcmVxLmJvZHkuZW1haWw7XG4gICAgY29uc3QgZmVlZGJhY2tUZXh0ID0gcmVxLmJvZHkudGV4dDtcblxuICAgIGNvbnN0IG5ld0ZlZWRiYWNrID0ge1xuICAgICAgaWQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHRleHQ6IGZlZWRiYWNrVGV4dCxcbiAgICB9O1xuXG4gICAgLy8gc3RvcmUgdGhhdCBpbiBhIGRhdGFiYXNlIG9yIGluIGEgZmlsZVxuICAgIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKTtcbiAgICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKTtcbiAgICBkYXRhLnB1c2gobmV3RmVlZGJhY2spO1xuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiU3VjY2VzcyFcIiwgZmVlZGJhY2s6IG5ld0ZlZWRiYWNrIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKTtcbiAgICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGZlZWRiYWNrOiBkYXRhIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/feedback/index.js\n");

/***/ }),

/***/ "./pages/feedback/index.js":
/*!*********************************!*\
  !*** ./pages/feedback/index.js ***!
  \*********************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_feedback_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/feedback/index */ \"./pages/api/feedback/index.js\");\n\nvar _jsxFileName = \"/Users/chenghongzhen/Desktop/nextjs-8-coding with api/pages/feedback/index.js\";\n\n\n\nfunction FeedbackPage(props) {\n  const {\n    0: feedbackData,\n    1: setFeedbackData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n\n  function loadFeedbackHandler(id) {\n    fetch(`/api/feedback/${id}`).then(response => response.json()).then(data => {\n      setFeedbackData(data.feedback);\n    }); // /api/some-feedback-id\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [feedbackData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: feedbackData.email\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 24\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: props.feedbackItems.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [item.text, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: loadFeedbackHandler.bind(null, item.id),\n          children: \"Show Details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, this)]\n      }, item.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\nasync function getStaticProps() {\n  const filePath = Object(_api_feedback_index__WEBPACK_IMPORTED_MODULE_2__[\"buildFeedbackPath\"])();\n  const data = Object(_api_feedback_index__WEBPACK_IMPORTED_MODULE_2__[\"extractFeedback\"])(filePath);\n  return {\n    props: {\n      feedbackItems: data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeedbackPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mZWVkYmFjay9pbmRleC5qcz9iOWNkIl0sIm5hbWVzIjpbIkZlZWRiYWNrUGFnZSIsInByb3BzIiwiZmVlZGJhY2tEYXRhIiwic2V0RmVlZGJhY2tEYXRhIiwidXNlU3RhdGUiLCJsb2FkRmVlZGJhY2tIYW5kbGVyIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZmVlZGJhY2siLCJlbWFpbCIsImZlZWRiYWNrSXRlbXMiLCJtYXAiLCJpdGVtIiwidGV4dCIsImJpbmQiLCJnZXRTdGF0aWNQcm9wcyIsImZpbGVQYXRoIiwiYnVpbGRGZWVkYmFja1BhdGgiLCJleHRyYWN0RmVlZGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0IsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDQyxzREFBUSxFQUFoRDs7QUFFQSxXQUFTQyxtQkFBVCxDQUE2QkMsRUFBN0IsRUFBaUM7QUFDL0JDLFNBQUssQ0FBRSxpQkFBZ0JELEVBQUcsRUFBckIsQ0FBTCxDQUNHRSxJQURILENBQ1NDLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBRHRCLEVBRUdGLElBRkgsQ0FFU0csSUFBRCxJQUFVO0FBQ2RSLHFCQUFlLENBQUNRLElBQUksQ0FBQ0MsUUFBTixDQUFmO0FBQ0QsS0FKSCxFQUQrQixDQUt6QjtBQUNQOztBQUVELHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsZUFDR1YsWUFBWSxpQkFBSTtBQUFBLGdCQUFJQSxZQUFZLENBQUNXO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEbkIsZUFFRTtBQUFBLGdCQUNHWixLQUFLLENBQUNhLGFBQU4sQ0FBb0JDLEdBQXBCLENBQXlCQyxJQUFELGlCQUN2QjtBQUFBLG1CQUNHQSxJQUFJLENBQUNDLElBRFIsRUFDYyxHQURkLGVBRUU7QUFBUSxpQkFBTyxFQUFFWixtQkFBbUIsQ0FBQ2EsSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0JGLElBQUksQ0FBQ1YsRUFBcEMsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQSxTQUFTVSxJQUFJLENBQUNWLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0FBRU0sZUFBZWEsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxRQUFRLEdBQUdDLDZFQUFpQixFQUFsQztBQUNBLFFBQU1WLElBQUksR0FBR1csMkVBQWUsQ0FBQ0YsUUFBRCxDQUE1QjtBQUNBLFNBQU87QUFDTG5CLFNBQUssRUFBRTtBQUNMYSxtQkFBYSxFQUFFSDtBQURWO0FBREYsR0FBUDtBQUtEO0FBRWNYLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZmVlZGJhY2svaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgYnVpbGRGZWVkYmFja1BhdGgsIGV4dHJhY3RGZWVkYmFjayB9IGZyb20gXCIuLi9hcGkvZmVlZGJhY2svaW5kZXhcIjtcblxuZnVuY3Rpb24gRmVlZGJhY2tQYWdlKHByb3BzKSB7XG4gIGNvbnN0IFtmZWVkYmFja0RhdGEsIHNldEZlZWRiYWNrRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGZ1bmN0aW9uIGxvYWRGZWVkYmFja0hhbmRsZXIoaWQpIHtcbiAgICBmZXRjaChgL2FwaS9mZWVkYmFjay8ke2lkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldEZlZWRiYWNrRGF0YShkYXRhLmZlZWRiYWNrKTtcbiAgICAgIH0pOyAvLyAvYXBpL3NvbWUtZmVlZGJhY2staWRcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2ZlZWRiYWNrRGF0YSAmJiA8cD57ZmVlZGJhY2tEYXRhLmVtYWlsfTwvcD59XG4gICAgICA8dWw+XG4gICAgICAgIHtwcm9wcy5mZWVkYmFja0l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAge2l0ZW0udGV4dH17XCIgXCJ9XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvYWRGZWVkYmFja0hhbmRsZXIuYmluZChudWxsLCBpdGVtLmlkKX0+XG4gICAgICAgICAgICAgIFNob3cgRGV0YWlsc1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpO1xuICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZmVlZGJhY2tJdGVtczogZGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFja1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/feedback/index.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });