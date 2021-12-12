/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/graphql-data";
exports.ids = ["pages/api/graphql-data"];
exports.modules = {

/***/ "./pages/api/graphql-data.js":
/*!***********************************!*\
  !*** ./pages/api/graphql-data.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n\nlet books = [{\n  id: 1,\n  name: 'In the End',\n  author: 'Just Smith'\n}, {\n  id: 2,\n  name: 'Something Different',\n  author: 'Ben Brown'\n}];\nconst typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`\n  type Book {\n    id: Int\n    name: String\n    author: String\n  }\n\n  type Query {\n    books: [Book]\n  }\n\n  type Mutation {\n    addBook(id: Int, name: String, author: String): Book\n    deleteBook(id: Int): Book\n  }\n`;\nconst resolvers = {\n  Query: {\n    books: () => books\n  },\n  Mutation: {\n    addBook: (_root, args) => {\n      books = [...books, args];\n      console.log(books);\n      return books;\n    },\n    deleteBook: (_root, args) => {\n      const newBooks = books.filter(book => book.id !== args.id);\n      books = newBooks;\n      console.log(books);\n      return books;\n    }\n  }\n};\nconst server = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  typeDefs,\n  resolvers\n});\nconst handler = server.createHandler({\n  path: '/api/graphql-data'\n});\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXBvbGxvLWFwcC8uL3BhZ2VzL2FwaS9ncmFwaHFsLWRhdGEuanM/OTk0YyJdLCJuYW1lcyI6WyJib29rcyIsImlkIiwibmFtZSIsImF1dGhvciIsInR5cGVEZWZzIiwiZ3FsIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJNdXRhdGlvbiIsImFkZEJvb2siLCJfcm9vdCIsImFyZ3MiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlQm9vayIsIm5ld0Jvb2tzIiwiZmlsdGVyIiwiYm9vayIsInNlcnZlciIsIkFwb2xsb1NlcnZlciIsImhhbmRsZXIiLCJjcmVhdGVIYW5kbGVyIiwicGF0aCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLENBQ1Y7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLFlBRlI7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0FEVSxFQU1WO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxxQkFGUjtBQUdFQyxRQUFNLEVBQUU7QUFIVixDQU5VLENBQVo7QUFhQSxNQUFNQyxRQUFRLEdBQUdDLG9EQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZBO0FBaUJBLE1BQU1DLFNBQVMsR0FBRztBQUNoQkMsT0FBSyxFQUFFO0FBQ0xQLFNBQUssRUFBRSxNQUFNQTtBQURSLEdBRFM7QUFLaEJRLFVBQVEsRUFBRTtBQUNSQyxXQUFPLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSLEtBQWlCO0FBQ3hCWCxXQUFLLEdBQUcsQ0FBQyxHQUFHQSxLQUFKLEVBQVdXLElBQVgsQ0FBUjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWWIsS0FBWjtBQUNBLGFBQU9BLEtBQVA7QUFDRCxLQUxPO0FBTVJjLGNBQVUsRUFBRSxDQUFDSixLQUFELEVBQVFDLElBQVIsS0FBaUI7QUFDM0IsWUFBTUksUUFBUSxHQUFHZixLQUFLLENBQUNnQixNQUFOLENBQWNDLElBQUQsSUFBVUEsSUFBSSxDQUFDaEIsRUFBTCxLQUFZVSxJQUFJLENBQUNWLEVBQXhDLENBQWpCO0FBQ0FELFdBQUssR0FBR2UsUUFBUjtBQUNBSCxhQUFPLENBQUNDLEdBQVIsQ0FBWWIsS0FBWjtBQUNBLGFBQU9BLEtBQVA7QUFDRDtBQVhPO0FBTE0sQ0FBbEI7QUFvQkEsTUFBTWtCLE1BQU0sR0FBRyxJQUFJQyw2REFBSixDQUFpQjtBQUFFZixVQUFGO0FBQVlFO0FBQVosQ0FBakIsQ0FBZjtBQUVBLE1BQU1jLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxhQUFQLENBQXFCO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQXJCLENBQWhCO0FBRU8sTUFBTUMsTUFBTSxHQUFHO0FBQ3BCQyxLQUFHLEVBQUU7QUFDSEMsY0FBVSxFQUFFO0FBRFQ7QUFEZSxDQUFmO0FBTVAsK0RBQWVMLE9BQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ3JhcGhxbC1kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvU2VydmVyLCBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLW1pY3JvJztcblxubGV0IGJvb2tzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ0luIHRoZSBFbmQnLFxuICAgIGF1dGhvcjogJ0p1c3QgU21pdGgnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ1NvbWV0aGluZyBEaWZmZXJlbnQnLFxuICAgIGF1dGhvcjogJ0JlbiBCcm93bicsXG4gIH0sXG5dO1xuXG5jb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgdHlwZSBCb29rIHtcbiAgICBpZDogSW50XG4gICAgbmFtZTogU3RyaW5nXG4gICAgYXV0aG9yOiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGJvb2tzOiBbQm9va11cbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIGFkZEJvb2soaWQ6IEludCwgbmFtZTogU3RyaW5nLCBhdXRob3I6IFN0cmluZyk6IEJvb2tcbiAgICBkZWxldGVCb29rKGlkOiBJbnQpOiBCb29rXG4gIH1cbmA7XG5cbmNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICBib29rczogKCkgPT4gYm9va3MsXG4gIH0sXG5cbiAgTXV0YXRpb246IHtcbiAgICBhZGRCb29rOiAoX3Jvb3QsIGFyZ3MpID0+IHtcbiAgICAgIGJvb2tzID0gWy4uLmJvb2tzLCBhcmdzXTtcbiAgICAgIGNvbnNvbGUubG9nKGJvb2tzKTtcbiAgICAgIHJldHVybiBib29rcztcbiAgICB9LFxuICAgIGRlbGV0ZUJvb2s6IChfcm9vdCwgYXJncykgPT4ge1xuICAgICAgY29uc3QgbmV3Qm9va3MgPSBib29rcy5maWx0ZXIoKGJvb2spID0+IGJvb2suaWQgIT09IGFyZ3MuaWQpO1xuICAgICAgYm9va3MgPSBuZXdCb29rcztcbiAgICAgIGNvbnNvbGUubG9nKGJvb2tzKTtcbiAgICAgIHJldHVybiBib29rcztcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSk7XG5cbmNvbnN0IGhhbmRsZXIgPSBzZXJ2ZXIuY3JlYXRlSGFuZGxlcih7IHBhdGg6ICcvYXBpL2dyYXBocWwtZGF0YScgfSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/graphql-data.js\n");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-server-micro");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql-data.js"));
module.exports = __webpack_exports__;

})();