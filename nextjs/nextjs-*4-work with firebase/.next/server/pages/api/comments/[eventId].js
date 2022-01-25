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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectDatabase\", function() { return connectDatabase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertDocument\", function() { return insertDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllDocuments\", function() { return getAllDocuments; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDatabase() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(\"mongodb+srv://CHZ:aaaaaaaa@cluster0.0cynf.mongodb.net/newsletter?retryWrites=true&w=majority\");\n  return client;\n}\nasync function insertDocument(client, collection, document) {\n  const db = client.db();\n  const result = await db.collection(collection).insertOne(document);\n  return result;\n}\nasync function getAllDocuments(client, collection, sort) {\n  const db = client.db();\n  const documents = await db.collection(collection).find().sort(sort).toArray();\n  return documents;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2RiLXV0aWwuanM/N2M0NSJdLCJuYW1lcyI6WyJjb25uZWN0RGF0YWJhc2UiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJpbnNlcnREb2N1bWVudCIsImNvbGxlY3Rpb24iLCJkb2N1bWVudCIsImRiIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiZ2V0QWxsRG9jdW1lbnRzIiwic29ydCIsImRvY3VtZW50cyIsImZpbmQiLCJ0b0FycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLGVBQWVBLGVBQWYsR0FBaUM7QUFDdEMsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbkIsOEZBRG1CLENBQXJCO0FBSUEsU0FBT0YsTUFBUDtBQUNEO0FBRU0sZUFBZUcsY0FBZixDQUE4QkgsTUFBOUIsRUFBc0NJLFVBQXRDLEVBQWtEQyxRQUFsRCxFQUE0RDtBQUNqRSxRQUFNQyxFQUFFLEdBQUdOLE1BQU0sQ0FBQ00sRUFBUCxFQUFYO0FBRUEsUUFBTUMsTUFBTSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0YsVUFBSCxDQUFjQSxVQUFkLEVBQTBCSSxTQUExQixDQUFvQ0gsUUFBcEMsQ0FBckI7QUFFQSxTQUFPRSxNQUFQO0FBQ0Q7QUFFTSxlQUFlRSxlQUFmLENBQStCVCxNQUEvQixFQUF1Q0ksVUFBdkMsRUFBbURNLElBQW5ELEVBQXlEO0FBQzlELFFBQU1KLEVBQUUsR0FBR04sTUFBTSxDQUFDTSxFQUFQLEVBQVg7QUFFQSxRQUFNSyxTQUFTLEdBQUcsTUFBTUwsRUFBRSxDQUFDRixVQUFILENBQWNBLFVBQWQsRUFBMEJRLElBQTFCLEdBQWlDRixJQUFqQyxDQUFzQ0EsSUFBdEMsRUFBNENHLE9BQTVDLEVBQXhCO0FBRUEsU0FBT0YsU0FBUDtBQUNEIiwiZmlsZSI6Ii4vaGVscGVycy9kYi11dGlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdERhdGFiYXNlKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9DSFo6YWFhYWFhYWFAY2x1c3RlcjAuMGN5bmYubW9uZ29kYi5uZXQvbmV3c2xldHRlcj9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuXG4gIHJldHVybiBjbGllbnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnREb2N1bWVudChjbGllbnQsIGNvbGxlY3Rpb24sIGRvY3VtZW50KSB7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5pbnNlcnRPbmUoZG9jdW1lbnQpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEb2N1bWVudHMoY2xpZW50LCBjb2xsZWN0aW9uLCBzb3J0KSB7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgZG9jdW1lbnRzID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5maW5kKCkuc29ydChzb3J0KS50b0FycmF5KCk7XG5cbiAgcmV0dXJuIGRvY3VtZW50cztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/db-util.js\n");

/***/ }),

/***/ "./pages/api/comments/[eventId].js":
/*!*****************************************!*\
  !*** ./pages/api/comments/[eventId].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/db-util */ \"./helpers/db-util.js\");\n\n\nasync function handler(req, res) {\n  const eventId = req.query.eventId;\n  let client; // try {\n  //   client = await connectDatabase();\n  // } catch (error) {\n  //   res.status(500).json({ message: \"Connecting to the database failed!\" });\n  //   return;\n  // }\n\n  if (req.method === \"POST\") {\n    const {\n      email,\n      name,\n      text\n    } = req.body;\n\n    if (!email.includes(\"@\") || !name || name.trim() === \"\" || !text || text.trim() === \"\") {\n      res.status(422).json({\n        message: \"Invalid input.\"\n      }); // client.close();\n\n      return;\n    }\n\n    const newComment = {\n      email,\n      name,\n      text,\n      eventId\n    }; // console.log(newComment);\n\n    res.status(201).json({\n      message: \"Added Message.\",\n      comment: newComment\n    }); //   let result;\n    //   try {\n    //     result = await insertDocument(client, \"comments\", newComment);\n    //     newComment._id = result.insertedId;\n    //     res.status(201).json({ message: \"Added comment.\", comment: newComment });\n    //   } catch (error) {\n    //     res.status(500).json({ message: \"Inserting comment failed!\" });\n    //   }\n  }\n\n  if (req.method === \"GET\") {\n    const dummyList = [{\n      id: \"c1\",\n      name: \"Max\",\n      text: \"A first comment\"\n    }, {\n      id: \"c2\",\n      name: \"Manuel\",\n      text: \"A Second comment\"\n    }];\n    res.status(200).json({\n      comments: dummyList\n    }); // try {\n    //   const documents = await getAllDocuments(client, \"comments\", { _id: -1 });\n    //   res.status(200).json({ comments: documents });\n    // } catch (error) {\n    //   res.status(500).json({ message: \"Getting comments failed.\" });\n    // }\n  } // client.close();\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzPzNjNGEiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImV2ZW50SWQiLCJxdWVyeSIsImNsaWVudCIsIm1ldGhvZCIsImVtYWlsIiwibmFtZSIsInRleHQiLCJib2R5IiwiaW5jbHVkZXMiLCJ0cmltIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJuZXdDb21tZW50IiwiY29tbWVudCIsImR1bW15TGlzdCIsImlkIiwiY29tbWVudHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7QUFNQSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDL0IsUUFBTUMsT0FBTyxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVUQsT0FBMUI7QUFFQSxNQUFJRSxNQUFKLENBSCtCLENBSy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJSixHQUFHLENBQUNLLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNO0FBQUVDLFdBQUY7QUFBU0MsVUFBVDtBQUFlQztBQUFmLFFBQXdCUixHQUFHLENBQUNTLElBQWxDOztBQUVBLFFBQ0UsQ0FBQ0gsS0FBSyxDQUFDSSxRQUFOLENBQWUsR0FBZixDQUFELElBQ0EsQ0FBQ0gsSUFERCxJQUVBQSxJQUFJLENBQUNJLElBQUwsT0FBZ0IsRUFGaEIsSUFHQSxDQUFDSCxJQUhELElBSUFBLElBQUksQ0FBQ0csSUFBTCxPQUFnQixFQUxsQixFQU1FO0FBQ0FWLFNBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCLEVBREEsQ0FFQTs7QUFDQTtBQUNEOztBQUVELFVBQU1DLFVBQVUsR0FBRztBQUNqQlQsV0FEaUI7QUFFakJDLFVBRmlCO0FBR2pCQyxVQUhpQjtBQUlqQk47QUFKaUIsS0FBbkIsQ0FmeUIsQ0FxQnpCOztBQUNBRCxPQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUUsZ0JBQVg7QUFBNkJFLGFBQU8sRUFBRUQ7QUFBdEMsS0FBckIsRUF0QnlCLENBd0J6QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsTUFBSWYsR0FBRyxDQUFDSyxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsVUFBTVksU0FBUyxHQUFHLENBQ2hCO0FBQUVDLFFBQUUsRUFBRSxJQUFOO0FBQVlYLFVBQUksRUFBRSxLQUFsQjtBQUF5QkMsVUFBSSxFQUFFO0FBQS9CLEtBRGdCLEVBRWhCO0FBQUVVLFFBQUUsRUFBRSxJQUFOO0FBQVlYLFVBQUksRUFBRSxRQUFsQjtBQUE0QkMsVUFBSSxFQUFFO0FBQWxDLEtBRmdCLENBQWxCO0FBSUFQLE9BQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVNLGNBQVEsRUFBRUY7QUFBWixLQUFyQixFQUx3QixDQU94QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQTVEOEIsQ0E4RC9COztBQUNEOztBQUVjbEIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY29ubmVjdERhdGFiYXNlLFxuICBpbnNlcnREb2N1bWVudCxcbiAgZ2V0QWxsRG9jdW1lbnRzLFxufSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9kYi11dGlsXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgZXZlbnRJZCA9IHJlcS5xdWVyeS5ldmVudElkO1xuXG4gIGxldCBjbGllbnQ7XG5cbiAgLy8gdHJ5IHtcbiAgLy8gICBjbGllbnQgPSBhd2FpdCBjb25uZWN0RGF0YWJhc2UoKTtcbiAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiQ29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2UgZmFpbGVkIVwiIH0pO1xuICAvLyAgIHJldHVybjtcbiAgLy8gfVxuXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHsgZW1haWwsIG5hbWUsIHRleHQgfSA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKFxuICAgICAgIWVtYWlsLmluY2x1ZGVzKFwiQFwiKSB8fFxuICAgICAgIW5hbWUgfHxcbiAgICAgIG5hbWUudHJpbSgpID09PSBcIlwiIHx8XG4gICAgICAhdGV4dCB8fFxuICAgICAgdGV4dC50cmltKCkgPT09IFwiXCJcbiAgICApIHtcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIGlucHV0LlwiIH0pO1xuICAgICAgLy8gY2xpZW50LmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Q29tbWVudCA9IHtcbiAgICAgIGVtYWlsLFxuICAgICAgbmFtZSxcbiAgICAgIHRleHQsXG4gICAgICBldmVudElkLFxuICAgIH07XG4gICAgLy8gY29uc29sZS5sb2cobmV3Q29tbWVudCk7XG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIkFkZGVkIE1lc3NhZ2UuXCIsIGNvbW1lbnQ6IG5ld0NvbW1lbnQgfSk7XG5cbiAgICAvLyAgIGxldCByZXN1bHQ7XG5cbiAgICAvLyAgIHRyeSB7XG4gICAgLy8gICAgIHJlc3VsdCA9IGF3YWl0IGluc2VydERvY3VtZW50KGNsaWVudCwgXCJjb21tZW50c1wiLCBuZXdDb21tZW50KTtcbiAgICAvLyAgICAgbmV3Q29tbWVudC5faWQgPSByZXN1bHQuaW5zZXJ0ZWRJZDtcbiAgICAvLyAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIkFkZGVkIGNvbW1lbnQuXCIsIGNvbW1lbnQ6IG5ld0NvbW1lbnQgfSk7XG4gICAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW5zZXJ0aW5nIGNvbW1lbnQgZmFpbGVkIVwiIH0pO1xuICAgIC8vICAgfVxuICB9XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBjb25zdCBkdW1teUxpc3QgPSBbXG4gICAgICB7IGlkOiBcImMxXCIsIG5hbWU6IFwiTWF4XCIsIHRleHQ6IFwiQSBmaXJzdCBjb21tZW50XCIgfSxcbiAgICAgIHsgaWQ6IFwiYzJcIiwgbmFtZTogXCJNYW51ZWxcIiwgdGV4dDogXCJBIFNlY29uZCBjb21tZW50XCIgfSxcbiAgICBdO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY29tbWVudHM6IGR1bW15TGlzdCB9KTtcblxuICAgIC8vIHRyeSB7XG4gICAgLy8gICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBnZXRBbGxEb2N1bWVudHMoY2xpZW50LCBcImNvbW1lbnRzXCIsIHsgX2lkOiAtMSB9KTtcbiAgICAvLyAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY29tbWVudHM6IGRvY3VtZW50cyB9KTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkdldHRpbmcgY29tbWVudHMgZmFpbGVkLlwiIH0pO1xuICAgIC8vIH1cbiAgfVxuXG4gIC8vIGNsaWVudC5jbG9zZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/comments/[eventId].js\n");

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