module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/newsletter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/db-util.js":
/*!****************************!*\
  !*** ./helpers/db-util.js ***!
  \****************************/
/*! exports provided: connectDatabase, insertDocument, getAllDocuments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectDatabase\", function() { return connectDatabase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertDocument\", function() { return insertDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllDocuments\", function() { return getAllDocuments; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDatabase() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(\"mongodb+srv://CHZ:aaaaaaaa@cluster0.0cynf.mongodb.net/newsletter?retryWrites=true&w=majority\");\n  return client;\n}\nasync function insertDocument(client, collection, document) {\n  const db = client.db();\n  const result = await db.collection(collection).insertOne(document);\n  return result;\n}\nasync function getAllDocuments(client, collection, sort) {\n  const db = client.db();\n  const documents = await db.collection(collection).find().sort(sort).toArray();\n  return documents;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2RiLXV0aWwuanM/N2M0NSJdLCJuYW1lcyI6WyJjb25uZWN0RGF0YWJhc2UiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJpbnNlcnREb2N1bWVudCIsImNvbGxlY3Rpb24iLCJkb2N1bWVudCIsImRiIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiZ2V0QWxsRG9jdW1lbnRzIiwic29ydCIsImRvY3VtZW50cyIsImZpbmQiLCJ0b0FycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLGVBQWVBLGVBQWYsR0FBaUM7QUFDdEMsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbkIsOEZBRG1CLENBQXJCO0FBSUEsU0FBT0YsTUFBUDtBQUNEO0FBRU0sZUFBZUcsY0FBZixDQUE4QkgsTUFBOUIsRUFBc0NJLFVBQXRDLEVBQWtEQyxRQUFsRCxFQUE0RDtBQUNqRSxRQUFNQyxFQUFFLEdBQUdOLE1BQU0sQ0FBQ00sRUFBUCxFQUFYO0FBRUEsUUFBTUMsTUFBTSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0YsVUFBSCxDQUFjQSxVQUFkLEVBQTBCSSxTQUExQixDQUFvQ0gsUUFBcEMsQ0FBckI7QUFFQSxTQUFPRSxNQUFQO0FBQ0Q7QUFFTSxlQUFlRSxlQUFmLENBQStCVCxNQUEvQixFQUF1Q0ksVUFBdkMsRUFBbURNLElBQW5ELEVBQXlEO0FBQzlELFFBQU1KLEVBQUUsR0FBR04sTUFBTSxDQUFDTSxFQUFQLEVBQVg7QUFFQSxRQUFNSyxTQUFTLEdBQUcsTUFBTUwsRUFBRSxDQUFDRixVQUFILENBQWNBLFVBQWQsRUFBMEJRLElBQTFCLEdBQWlDRixJQUFqQyxDQUFzQ0EsSUFBdEMsRUFBNENHLE9BQTVDLEVBQXhCO0FBRUEsU0FBT0YsU0FBUDtBQUNEIiwiZmlsZSI6Ii4vaGVscGVycy9kYi11dGlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdERhdGFiYXNlKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9DSFo6YWFhYWFhYWFAY2x1c3RlcjAuMGN5bmYubW9uZ29kYi5uZXQvbmV3c2xldHRlcj9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuXG4gIHJldHVybiBjbGllbnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnREb2N1bWVudChjbGllbnQsIGNvbGxlY3Rpb24sIGRvY3VtZW50KSB7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5pbnNlcnRPbmUoZG9jdW1lbnQpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEb2N1bWVudHMoY2xpZW50LCBjb2xsZWN0aW9uLCBzb3J0KSB7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgZG9jdW1lbnRzID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5maW5kKCkuc29ydChzb3J0KS50b0FycmF5KCk7XG5cbiAgcmV0dXJuIGRvY3VtZW50cztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/db-util.js\n");

/***/ }),

/***/ "./pages/api/newsletter.js":
/*!*********************************!*\
  !*** ./pages/api/newsletter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/db-util */ \"./helpers/db-util.js\");\n // import { MongoClient } from \"mongodb\";\n\nasync function handler(req, res) {\n  if (req.method === \"POST\") {\n    const userEmail = req.body.email;\n\n    if (!userEmail || !userEmail.includes(\"@\")) {\n      res.status(422).json({\n        message: \"Invalid email address.\"\n      });\n      return;\n    } // const client = await MongoClient.connect(\n    //   \"mongodb+srv://CHZ:aaaaaaaa@cluster0.0cynf.mongodb.net/newsletter?retryWrites=true&w=majority\"\n    // );\n    // const db = client.db();\n    // await db.collection(\"emails\").insertOne({ email: userEmail });\n    // client.close();\n\n\n    let client;\n\n    try {\n      client = await Object(_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__[\"connectDatabase\"])();\n    } catch (error) {\n      res.status(500).json({\n        message: \"Connecting to the database failed!\"\n      });\n      return;\n    }\n\n    try {\n      await Object(_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__[\"insertDocument\"])(client, \"newsletter\", {\n        email: userEmail\n      });\n      client.close();\n    } catch (error) {\n      res.status(500).json({\n        message: \"Inserting data failed!\"\n      });\n      return;\n    }\n\n    res.status(201).json({\n      message: \"Signed up!\",\n      email: userEmail\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcz81NTljIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VyRW1haWwiLCJib2R5IiwiZW1haWwiLCJpbmNsdWRlcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY2xpZW50IiwiY29ubmVjdERhdGFiYXNlIiwiZXJyb3IiLCJpbnNlcnREb2N1bWVudCIsImNsb3NlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0NBQ0E7O0FBRUEsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQy9CLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU1DLFNBQVMsR0FBR0gsR0FBRyxDQUFDSSxJQUFKLENBQVNDLEtBQTNCOztBQUVBLFFBQUksQ0FBQ0YsU0FBRCxJQUFjLENBQUNBLFNBQVMsQ0FBQ0csUUFBVixDQUFtQixHQUFuQixDQUFuQixFQUE0QztBQUMxQ0wsU0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDQTtBQUNELEtBTndCLENBUXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsUUFBSUMsTUFBSjs7QUFFQSxRQUFJO0FBQ0ZBLFlBQU0sR0FBRyxNQUFNQyx3RUFBZSxFQUE5QjtBQUNELEtBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7QUFDZFgsU0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDQTtBQUNEOztBQUVELFFBQUk7QUFDRixZQUFNSSx1RUFBYyxDQUFDSCxNQUFELEVBQVMsWUFBVCxFQUF1QjtBQUFFTCxhQUFLLEVBQUVGO0FBQVQsT0FBdkIsQ0FBcEI7QUFDQU8sWUFBTSxDQUFDSSxLQUFQO0FBQ0QsS0FIRCxDQUdFLE9BQU9GLEtBQVAsRUFBYztBQUNkWCxTQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0Q7O0FBRURSLE9BQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRSxZQUFYO0FBQXlCSixXQUFLLEVBQUVGO0FBQWhDLEtBQXJCO0FBQ0Q7QUFDRjs7QUFFY0osc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3REYXRhYmFzZSwgaW5zZXJ0RG9jdW1lbnQgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9kYi11dGlsXCI7XG4vLyBpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgdXNlckVtYWlsID0gcmVxLmJvZHkuZW1haWw7XG5cbiAgICBpZiAoIXVzZXJFbWFpbCB8fCAhdXNlckVtYWlsLmluY2x1ZGVzKFwiQFwiKSkge1xuICAgICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiBcIkludmFsaWQgZW1haWwgYWRkcmVzcy5cIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIC8vICAgXCJtb25nb2RiK3NydjovL0NIWjphYWFhYWFhYUBjbHVzdGVyMC4wY3luZi5tb25nb2RiLm5ldC9uZXdzbGV0dGVyP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXG4gICAgLy8gKTtcbiAgICAvLyBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICAgIC8vIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJlbWFpbHNcIikuaW5zZXJ0T25lKHsgZW1haWw6IHVzZXJFbWFpbCB9KTtcbiAgICAvLyBjbGllbnQuY2xvc2UoKTtcblxuICAgIGxldCBjbGllbnQ7XG5cbiAgICB0cnkge1xuICAgICAgY2xpZW50ID0gYXdhaXQgY29ubmVjdERhdGFiYXNlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJDb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZSBmYWlsZWQhXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGluc2VydERvY3VtZW50KGNsaWVudCwgXCJuZXdzbGV0dGVyXCIsIHsgZW1haWw6IHVzZXJFbWFpbCB9KTtcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW5zZXJ0aW5nIGRhdGEgZmFpbGVkIVwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJTaWduZWQgdXAhXCIsIGVtYWlsOiB1c2VyRW1haWwgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/newsletter.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });