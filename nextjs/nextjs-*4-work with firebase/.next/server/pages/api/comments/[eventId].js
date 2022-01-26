module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/comments/[eventId].js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectDatabase\", function() { return connectDatabase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertDocument\", function() { return insertDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllDocuments\", function() { return getAllDocuments; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDatabase() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(\"mongodb://CHZ:aaaaaaaa@cluster0-shard-00-00.0cynf.mongodb.net:27017,cluster0-shard-00-01.0cynf.mongodb.net:27017,cluster0-shard-00-02.0cynf.mongodb.net:27017/nextEvents?ssl=true&replicaSet=atlas-ve3qm2-shard-0&authSource=admin&retryWrites=true&w=majority\");\n  return client;\n}\nasync function insertDocument(client, collection, document) {\n  const db = client.db();\n  const result = await db.collection(collection).insertOne(document);\n  return result;\n}\nasync function getAllDocuments(client, collection, sort) {\n  const db = client.db();\n  const documents = await db.collection(collection).find().sort(sort).toArray();\n  return documents;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2RiLXV0aWwuanM/N2M0NSJdLCJuYW1lcyI6WyJjb25uZWN0RGF0YWJhc2UiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJpbnNlcnREb2N1bWVudCIsImNvbGxlY3Rpb24iLCJkb2N1bWVudCIsImRiIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiZ2V0QWxsRG9jdW1lbnRzIiwic29ydCIsImRvY3VtZW50cyIsImZpbmQiLCJ0b0FycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLGVBQWVBLGVBQWYsR0FBaUM7QUFDdEMsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbkIsZ1FBRG1CLENBQXJCO0FBSUEsU0FBT0YsTUFBUDtBQUNEO0FBRU0sZUFBZUcsY0FBZixDQUE4QkgsTUFBOUIsRUFBc0NJLFVBQXRDLEVBQWtEQyxRQUFsRCxFQUE0RDtBQUNqRSxRQUFNQyxFQUFFLEdBQUdOLE1BQU0sQ0FBQ00sRUFBUCxFQUFYO0FBRUEsUUFBTUMsTUFBTSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0YsVUFBSCxDQUFjQSxVQUFkLEVBQTBCSSxTQUExQixDQUFvQ0gsUUFBcEMsQ0FBckI7QUFFQSxTQUFPRSxNQUFQO0FBQ0Q7QUFFTSxlQUFlRSxlQUFmLENBQStCVCxNQUEvQixFQUF1Q0ksVUFBdkMsRUFBbURNLElBQW5ELEVBQXlEO0FBQzlELFFBQU1KLEVBQUUsR0FBR04sTUFBTSxDQUFDTSxFQUFQLEVBQVg7QUFFQSxRQUFNSyxTQUFTLEdBQUcsTUFBTUwsRUFBRSxDQUFDRixVQUFILENBQWNBLFVBQWQsRUFBMEJRLElBQTFCLEdBQWlDRixJQUFqQyxDQUFzQ0EsSUFBdEMsRUFBNENHLE9BQTVDLEVBQXhCO0FBRUEsU0FBT0YsU0FBUDtBQUNEIiwiZmlsZSI6Ii4vaGVscGVycy9kYi11dGlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdERhdGFiYXNlKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYjovL0NIWjphYWFhYWFhYUBjbHVzdGVyMC1zaGFyZC0wMC0wMC4wY3luZi5tb25nb2RiLm5ldDoyNzAxNyxjbHVzdGVyMC1zaGFyZC0wMC0wMS4wY3luZi5tb25nb2RiLm5ldDoyNzAxNyxjbHVzdGVyMC1zaGFyZC0wMC0wMi4wY3luZi5tb25nb2RiLm5ldDoyNzAxNy9uZXh0RXZlbnRzP3NzbD10cnVlJnJlcGxpY2FTZXQ9YXRsYXMtdmUzcW0yLXNoYXJkLTAmYXV0aFNvdXJjZT1hZG1pbiZyZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuXG4gIHJldHVybiBjbGllbnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnREb2N1bWVudChjbGllbnQsIGNvbGxlY3Rpb24sIGRvY3VtZW50KSB7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5pbnNlcnRPbmUoZG9jdW1lbnQpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEb2N1bWVudHMoY2xpZW50LCBjb2xsZWN0aW9uLCBzb3J0KSB7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgZG9jdW1lbnRzID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5maW5kKCkuc29ydChzb3J0KS50b0FycmF5KCk7XG5cbiAgcmV0dXJuIGRvY3VtZW50cztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/db-util.js\n");

/***/ }),

/***/ "./pages/api/comments/[eventId].js":
/*!*****************************************!*\
  !*** ./pages/api/comments/[eventId].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/db-util */ \"./helpers/db-util.js\");\n\n\nasync function handler(req, res) {\n  const eventId = req.query.eventId;\n  let client;\n\n  try {\n    client = await Object(_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__[\"connectDatabase\"])();\n  } catch (error) {\n    res.status(500).json({\n      message: \"Connecting to the database failed!\"\n    });\n    return;\n  }\n\n  if (req.method === \"POST\") {\n    const {\n      email,\n      name,\n      text\n    } = req.body;\n\n    if (!email.includes(\"@\") || !name || name.trim() === \"\" || !text || text.trim() === \"\") {\n      res.status(422).json({\n        message: \"Invalid input.\"\n      });\n      client.close();\n      return;\n    }\n\n    const newComment = {\n      email,\n      name,\n      text,\n      eventId\n    }; // console.log(newComment);\n\n    res.status(201).json({\n      message: \"Added Message.\",\n      comment: newComment\n    });\n    let result;\n\n    try {\n      result = await Object(_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__[\"insertDocument\"])(client, \"comments\", newComment);\n      newComment._id = result.insertedId;\n      res.status(201).json({\n        message: \"Added comment.\",\n        comment: newComment\n      });\n    } catch (error) {\n      res.status(500).json({\n        message: \"Inserting comment failed!\"\n      });\n    }\n  }\n\n  if (req.method === \"GET\") {\n    // const dummyList = [\n    //   { id: \"c1\", name: \"Max\", text: \"A first comment\" },\n    //   { id: \"c2\", name: \"Manuel\", text: \"A Second comment\" },\n    // ];\n    // res.status(200).json({ comments: dummyList });\n    try {\n      const documents = await Object(_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__[\"getAllDocuments\"])(client, \"comments\", {\n        _id: -1\n      });\n      res.status(200).json({\n        comments: documents\n      });\n    } catch (error) {\n      res.status(500).json({\n        message: \"Getting comments failed.\"\n      });\n    }\n  }\n\n  client.close();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzPzNjNGEiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImV2ZW50SWQiLCJxdWVyeSIsImNsaWVudCIsImNvbm5lY3REYXRhYmFzZSIsImVycm9yIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJtZXRob2QiLCJlbWFpbCIsIm5hbWUiLCJ0ZXh0IiwiYm9keSIsImluY2x1ZGVzIiwidHJpbSIsImNsb3NlIiwibmV3Q29tbWVudCIsImNvbW1lbnQiLCJyZXN1bHQiLCJpbnNlcnREb2N1bWVudCIsIl9pZCIsImluc2VydGVkSWQiLCJkb2N1bWVudHMiLCJnZXRBbGxEb2N1bWVudHMiLCJjb21tZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQU1BLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQixRQUFNQyxPQUFPLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSixDQUFVRCxPQUExQjtBQUVBLE1BQUlFLE1BQUo7O0FBRUEsTUFBSTtBQUNGQSxVQUFNLEdBQUcsTUFBTUMsd0VBQWUsRUFBOUI7QUFDRCxHQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RMLE9BQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0E7QUFDRDs7QUFFRCxNQUFJVCxHQUFHLENBQUNVLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNO0FBQUVDLFdBQUY7QUFBU0MsVUFBVDtBQUFlQztBQUFmLFFBQXdCYixHQUFHLENBQUNjLElBQWxDOztBQUVBLFFBQ0UsQ0FBQ0gsS0FBSyxDQUFDSSxRQUFOLENBQWUsR0FBZixDQUFELElBQ0EsQ0FBQ0gsSUFERCxJQUVBQSxJQUFJLENBQUNJLElBQUwsT0FBZ0IsRUFGaEIsSUFHQSxDQUFDSCxJQUhELElBSUFBLElBQUksQ0FBQ0csSUFBTCxPQUFnQixFQUxsQixFQU1FO0FBQ0FmLFNBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0FMLFlBQU0sQ0FBQ2EsS0FBUDtBQUNBO0FBQ0Q7O0FBRUQsVUFBTUMsVUFBVSxHQUFHO0FBQ2pCUCxXQURpQjtBQUVqQkMsVUFGaUI7QUFHakJDLFVBSGlCO0FBSWpCWDtBQUppQixLQUFuQixDQWZ5QixDQXFCekI7O0FBQ0FELE9BQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRSxnQkFBWDtBQUE2QlUsYUFBTyxFQUFFRDtBQUF0QyxLQUFyQjtBQUVBLFFBQUlFLE1BQUo7O0FBRUEsUUFBSTtBQUNGQSxZQUFNLEdBQUcsTUFBTUMsdUVBQWMsQ0FBQ2pCLE1BQUQsRUFBUyxVQUFULEVBQXFCYyxVQUFyQixDQUE3QjtBQUNBQSxnQkFBVSxDQUFDSSxHQUFYLEdBQWlCRixNQUFNLENBQUNHLFVBQXhCO0FBQ0F0QixTQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUUsZ0JBQVg7QUFBNkJVLGVBQU8sRUFBRUQ7QUFBdEMsT0FBckI7QUFDRCxLQUpELENBSUUsT0FBT1osS0FBUCxFQUFjO0FBQ2RMLFNBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJVCxHQUFHLENBQUNVLE1BQUosS0FBZSxLQUFuQixFQUEwQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsUUFBSTtBQUNGLFlBQU1jLFNBQVMsR0FBRyxNQUFNQyx3RUFBZSxDQUFDckIsTUFBRCxFQUFTLFVBQVQsRUFBcUI7QUFBRWtCLFdBQUcsRUFBRSxDQUFDO0FBQVIsT0FBckIsQ0FBdkM7QUFDQXJCLFNBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVrQixnQkFBUSxFQUFFRjtBQUFaLE9BQXJCO0FBQ0QsS0FIRCxDQUdFLE9BQU9sQixLQUFQLEVBQWM7QUFDZEwsU0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDRDtBQUNGOztBQUVETCxRQUFNLENBQUNhLEtBQVA7QUFDRDs7QUFFY2xCLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NvbW1lbnRzL1tldmVudElkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNvbm5lY3REYXRhYmFzZSxcbiAgaW5zZXJ0RG9jdW1lbnQsXG4gIGdldEFsbERvY3VtZW50cyxcbn0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvZGItdXRpbFwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGV2ZW50SWQgPSByZXEucXVlcnkuZXZlbnRJZDtcblxuICBsZXQgY2xpZW50O1xuXG4gIHRyeSB7XG4gICAgY2xpZW50ID0gYXdhaXQgY29ubmVjdERhdGFiYXNlKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlIGZhaWxlZCFcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBuYW1lLCB0ZXh0IH0gPSByZXEuYm9keTtcblxuICAgIGlmIChcbiAgICAgICFlbWFpbC5pbmNsdWRlcyhcIkBcIikgfHxcbiAgICAgICFuYW1lIHx8XG4gICAgICBuYW1lLnRyaW0oKSA9PT0gXCJcIiB8fFxuICAgICAgIXRleHQgfHxcbiAgICAgIHRleHQudHJpbSgpID09PSBcIlwiXG4gICAgKSB7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6IFwiSW52YWxpZCBpbnB1dC5cIiB9KTtcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XG4gICAgICBlbWFpbCxcbiAgICAgIG5hbWUsXG4gICAgICB0ZXh0LFxuICAgICAgZXZlbnRJZCxcbiAgICB9O1xuICAgIC8vIGNvbnNvbGUubG9nKG5ld0NvbW1lbnQpO1xuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJBZGRlZCBNZXNzYWdlLlwiLCBjb21tZW50OiBuZXdDb21tZW50IH0pO1xuXG4gICAgbGV0IHJlc3VsdDtcblxuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBpbnNlcnREb2N1bWVudChjbGllbnQsIFwiY29tbWVudHNcIiwgbmV3Q29tbWVudCk7XG4gICAgICBuZXdDb21tZW50Ll9pZCA9IHJlc3VsdC5pbnNlcnRlZElkO1xuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIkFkZGVkIGNvbW1lbnQuXCIsIGNvbW1lbnQ6IG5ld0NvbW1lbnQgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJJbnNlcnRpbmcgY29tbWVudCBmYWlsZWQhXCIgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAvLyBjb25zdCBkdW1teUxpc3QgPSBbXG4gICAgLy8gICB7IGlkOiBcImMxXCIsIG5hbWU6IFwiTWF4XCIsIHRleHQ6IFwiQSBmaXJzdCBjb21tZW50XCIgfSxcbiAgICAvLyAgIHsgaWQ6IFwiYzJcIiwgbmFtZTogXCJNYW51ZWxcIiwgdGV4dDogXCJBIFNlY29uZCBjb21tZW50XCIgfSxcbiAgICAvLyBdO1xuICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY29tbWVudHM6IGR1bW15TGlzdCB9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBnZXRBbGxEb2N1bWVudHMoY2xpZW50LCBcImNvbW1lbnRzXCIsIHsgX2lkOiAtMSB9KTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY29tbWVudHM6IGRvY3VtZW50cyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkdldHRpbmcgY29tbWVudHMgZmFpbGVkLlwiIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsaWVudC5jbG9zZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/comments/[eventId].js\n");

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