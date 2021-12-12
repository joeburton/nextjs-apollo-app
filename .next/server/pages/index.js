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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/AuthorInfo/AuthorInfo.tsx":
/*!**********************************************!*\
  !*** ./components/AuthorInfo/AuthorInfo.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/joeburto1/Documents/Sites/nextjs-apollo-app/components/AuthorInfo/AuthorInfo.tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\nconst GET_BOOK_DETAILS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query {\n    books {\n      id\n      name\n      author\n    }\n  }\n`;\n\nconst AuthorInfo = () => {\n  const {\n    loading,\n    error,\n    data\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(GET_BOOK_DETAILS);\n  if (loading) return __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  if (error) return __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 21\n    }\n  }, \"Error :(\");\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 10\n    }\n  }, __jsx(\"pre\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 16\n    }\n  }, JSON.stringify(data, null, 2)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthorInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXBvbGxvLWFwcC8uL2NvbXBvbmVudHMvQXV0aG9ySW5mby9BdXRob3JJbmZvLnRzeD82ZTkxIl0sIm5hbWVzIjpbIkdFVF9CT09LX0RFVEFJTFMiLCJncWwiLCJBdXRob3JJbmZvIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLGdCQUFnQixHQUFHQywrQ0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkE7O0FBVUEsTUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDdkIsUUFBTTtBQUFFQyxXQUFGO0FBQVdDLFNBQVg7QUFBa0JDO0FBQWxCLE1BQTJCQyx3REFBUSxDQUFDTixnQkFBRCxDQUF6QztBQUVBLE1BQUlHLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBRVgsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNRyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUFOLENBQU4sQ0FBUDtBQUNELENBUEQ7O0FBU0EsK0RBQWVILFVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhvckluZm8vQXV0aG9ySW5mby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5jb25zdCBHRVRfQk9PS19ERVRBSUxTID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgYm9va3Mge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGF1dGhvclxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQXV0aG9ySW5mbyA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0JPT0tfREVUQUlMUyk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3IgOig8L3A+O1xuXG4gIHJldHVybiA8ZGl2Pns8cHJlPntKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKX08L3ByZT59PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aG9ySW5mbztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AuthorInfo/AuthorInfo.tsx\n");

/***/ }),

/***/ "./components/AuthorInfo/index.js":
/*!****************************************!*\
  !*** ./components/AuthorInfo/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorInfo": function() { return /* reexport safe */ _AuthorInfo__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _AuthorInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthorInfo */ "./components/AuthorInfo/AuthorInfo.tsx");


/***/ }),

/***/ "./components/BookInfo/BookInfo.tsx":
/*!******************************************!*\
  !*** ./components/BookInfo/BookInfo.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/joeburto1/Documents/Sites/nextjs-apollo-app/components/BookInfo/BookInfo.tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\nconst GET_BOOKS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query {\n    books {\n      id\n      name\n      author\n    }\n  }\n`;\nconst ADD_BOOK = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  mutation addBook($id: Int, $name: String, $author: String) {\n    addBook(id: $id, name: $name, author: $author) {\n      id\n      name\n      author\n    }\n  }\n`;\nconst DELETE_BOOK = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  mutation($id: Int) {\n    deleteBook(id: $id) {\n      id\n      name\n      author\n    }\n  }\n`;\n\nconst BookInfo = () => {\n  const {\n    loading,\n    error,\n    data\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(GET_BOOKS);\n  const [addTodo] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(ADD_BOOK);\n  const [deleteBook] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(DELETE_BOOK);\n  if (loading) return __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  if (error) return __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }, \"Error :(\");\n  const newBook = {\n    id: 3,\n    name: 'Never ending story',\n    author: 'Joe Burton'\n  };\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(\"pre\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, JSON.stringify(data, null, 2)), __jsx(\"button\", {\n    onClick: () => addTodo({\n      variables: newBook,\n      update: cache => {\n        let {\n          books\n        } = cache.readQuery({\n          query: GET_BOOKS\n        });\n        cache.writeQuery({\n          query: GET_BOOKS,\n          data: {\n            books: [...books, newBook]\n          }\n        });\n      }\n    }),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, \"Add Book\"), __jsx(\"button\", {\n    onClick: () => deleteBook({\n      variables: newBook,\n      update: cache => {\n        let {\n          books\n        } = cache.readQuery({\n          query: GET_BOOKS\n        });\n        const newBooks = books.filter(book => book.id !== 3);\n        cache.writeQuery({\n          query: GET_BOOKS,\n          data: {\n            books: newBooks\n          }\n        });\n      }\n    }),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, \"Delete Book 3\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXBvbGxvLWFwcC8uL2NvbXBvbmVudHMvQm9va0luZm8vQm9va0luZm8udHN4PzRjY2EiXSwibmFtZXMiOlsiR0VUX0JPT0tTIiwiZ3FsIiwiQUREX0JPT0siLCJERUxFVEVfQk9PSyIsIkJvb2tJbmZvIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwiYWRkVG9kbyIsInVzZU11dGF0aW9uIiwiZGVsZXRlQm9vayIsIm5ld0Jvb2siLCJpZCIsIm5hbWUiLCJhdXRob3IiLCJKU09OIiwic3RyaW5naWZ5IiwidmFyaWFibGVzIiwidXBkYXRlIiwiY2FjaGUiLCJib29rcyIsInJlYWRRdWVyeSIsInF1ZXJ5Iiwid3JpdGVRdWVyeSIsIm5ld0Jvb2tzIiwiZmlsdGVyIiwiYm9vayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsK0NBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJBO0FBVUEsTUFBTUMsUUFBUSxHQUFHRCwrQ0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkE7QUFVQSxNQUFNRSxXQUFXLEdBQUdGLCtDQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSQTs7QUFVQSxNQUFNRyxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNO0FBQUVDLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkM7QUFBbEIsTUFBMkJDLHdEQUFRLENBQUNSLFNBQUQsQ0FBekM7QUFFQSxRQUFNLENBQUNTLE9BQUQsSUFBWUMsMkRBQVcsQ0FBQ1IsUUFBRCxDQUE3QjtBQUNBLFFBQU0sQ0FBQ1MsVUFBRCxJQUFlRCwyREFBVyxDQUFDUCxXQUFELENBQWhDO0FBRUEsTUFBSUUsT0FBSixFQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFFWCxRQUFNTSxPQUFPLEdBQUc7QUFDZEMsTUFBRSxFQUFFLENBRFU7QUFFZEMsUUFBSSxFQUFFLG9CQUZRO0FBR2RDLFVBQU0sRUFBRTtBQUhNLEdBQWhCO0FBTUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVYsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUFOLENBREYsRUFFRTtBQUNFLFdBQU8sRUFBRSxNQUNQRSxPQUFPLENBQUM7QUFDTlMsZUFBUyxFQUFFTixPQURMO0FBRU5PLFlBQU0sRUFBR0MsS0FBRCxJQUFXO0FBQ2pCLFlBQUk7QUFBRUM7QUFBRixZQUFZRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0I7QUFBRUMsZUFBSyxFQUFFdkI7QUFBVCxTQUFoQixDQUFoQjtBQUNBb0IsYUFBSyxDQUFDSSxVQUFOLENBQWlCO0FBQ2ZELGVBQUssRUFBRXZCLFNBRFE7QUFFZk8sY0FBSSxFQUFFO0FBQ0pjLGlCQUFLLEVBQUUsQ0FBQyxHQUFHQSxLQUFKLEVBQVdULE9BQVg7QUFESDtBQUZTLFNBQWpCO0FBTUQ7QUFWSyxLQUFELENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQW9CRTtBQUNFLFdBQU8sRUFBRSxNQUNQRCxVQUFVLENBQUM7QUFDVE8sZUFBUyxFQUFFTixPQURGO0FBRVRPLFlBQU0sRUFBR0MsS0FBRCxJQUFXO0FBQ2pCLFlBQUk7QUFBRUM7QUFBRixZQUFZRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0I7QUFBRUMsZUFBSyxFQUFFdkI7QUFBVCxTQUFoQixDQUFoQjtBQUNBLGNBQU15QixRQUFRLEdBQUdKLEtBQUssQ0FBQ0ssTUFBTixDQUFjQyxJQUFELElBQVVBLElBQUksQ0FBQ2QsRUFBTCxLQUFZLENBQW5DLENBQWpCO0FBQ0FPLGFBQUssQ0FBQ0ksVUFBTixDQUFpQjtBQUNmRCxlQUFLLEVBQUV2QixTQURRO0FBRWZPLGNBQUksRUFBRTtBQUNKYyxpQkFBSyxFQUFFSTtBQURIO0FBRlMsU0FBakI7QUFNRDtBQVhRLEtBQUQsQ0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBCRixDQURGO0FBMENELENBekREOztBQTJEQSwrREFBZXJCLFFBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tJbmZvL0Jvb2tJbmZvLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5jb25zdCBHRVRfQk9PS1MgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBib29rcyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgYXV0aG9yXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBBRERfQk9PSyA9IGdxbGBcbiAgbXV0YXRpb24gYWRkQm9vaygkaWQ6IEludCwgJG5hbWU6IFN0cmluZywgJGF1dGhvcjogU3RyaW5nKSB7XG4gICAgYWRkQm9vayhpZDogJGlkLCBuYW1lOiAkbmFtZSwgYXV0aG9yOiAkYXV0aG9yKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgYXV0aG9yXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBERUxFVEVfQk9PSyA9IGdxbGBcbiAgbXV0YXRpb24oJGlkOiBJbnQpIHtcbiAgICBkZWxldGVCb29rKGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBhdXRob3JcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEJvb2tJbmZvID0gKCkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfQk9PS1MpO1xuXG4gIGNvbnN0IFthZGRUb2RvXSA9IHVzZU11dGF0aW9uKEFERF9CT09LKTtcbiAgY29uc3QgW2RlbGV0ZUJvb2tdID0gdXNlTXV0YXRpb24oREVMRVRFX0JPT0spO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yIDooPC9wPjtcblxuICBjb25zdCBuZXdCb29rID0ge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6ICdOZXZlciBlbmRpbmcgc3RvcnknLFxuICAgIGF1dGhvcjogJ0pvZSBCdXJ0b24nLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIGFkZFRvZG8oe1xuICAgICAgICAgICAgdmFyaWFibGVzOiBuZXdCb29rLFxuICAgICAgICAgICAgdXBkYXRlOiAoY2FjaGUpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHsgYm9va3MgfSA9IGNhY2hlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBHRVRfQk9PS1MgfSk7XG4gICAgICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBHRVRfQk9PS1MsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgYm9va3M6IFsuLi5ib29rcywgbmV3Qm9va10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgQWRkIEJvb2tcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIGRlbGV0ZUJvb2soe1xuICAgICAgICAgICAgdmFyaWFibGVzOiBuZXdCb29rLFxuICAgICAgICAgICAgdXBkYXRlOiAoY2FjaGUpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHsgYm9va3MgfSA9IGNhY2hlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBHRVRfQk9PS1MgfSk7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0Jvb2tzID0gYm9va3MuZmlsdGVyKChib29rKSA9PiBib29rLmlkICE9PSAzKTtcbiAgICAgICAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IEdFVF9CT09LUyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICBib29rczogbmV3Qm9va3MsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgRGVsZXRlIEJvb2sgM1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb29rSW5mbztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BookInfo/BookInfo.tsx\n");

/***/ }),

/***/ "./components/BookInfo/index.js":
/*!**************************************!*\
  !*** ./components/BookInfo/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookInfo": function() { return /* reexport safe */ _BookInfo__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _BookInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookInfo */ "./components/BookInfo/BookInfo.tsx");


/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthorInfo\": function() { return /* reexport safe */ _AuthorInfo__WEBPACK_IMPORTED_MODULE_0__.AuthorInfo; },\n/* harmony export */   \"BookInfo\": function() { return /* reexport safe */ _BookInfo__WEBPACK_IMPORTED_MODULE_1__.BookInfo; }\n/* harmony export */ });\n/* harmony import */ var _AuthorInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthorInfo */ \"./components/AuthorInfo/index.js\");\n/* harmony import */ var _BookInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookInfo */ \"./components/BookInfo/index.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXBvbGxvLWFwcC8uL2NvbXBvbmVudHMvaW5kZXguanM/N2JlNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgQXV0aG9ySW5mbyB9IGZyb20gXCIuL0F1dGhvckluZm9cIjtcbmV4cG9ydCB7IEJvb2tJbmZvIH0gZnJvbSBcIi4vQm9va0luZm9cIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/index.js\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\nvar _jsxFileName = \"/Users/joeburto1/Documents/Sites/nextjs-apollo-app/pages/index.tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\nconst Home = () => {\n  const cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({\n    addTypename: false,\n    typePolicies: {\n      Query: {\n        fields: {\n          books: {\n            merge(_existing, incoming) {\n              return incoming;\n            }\n\n          }\n        }\n      }\n    }\n  });\n  const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    uri: 'http://localhost:3000/api/graphql-data',\n    cache: cache\n  });\n  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n    client: client,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"NextJS GraphQL Apollo App\"), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__.BookInfo, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__.AuthorInfo, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXBvbGxvLWFwcC8uL3BhZ2VzL2luZGV4LnRzeD9kYjc2Il0sIm5hbWVzIjpbIkhvbWUiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJhZGRUeXBlbmFtZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwiYm9va3MiLCJtZXJnZSIsIl9leGlzdGluZyIsImluY29taW5nIiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwidXJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2pCLFFBQU1DLEtBQUssR0FBRyxJQUFJQyx5REFBSixDQUFrQjtBQUM5QkMsZUFBVyxFQUFFLEtBRGlCO0FBRTlCQyxnQkFBWSxFQUFFO0FBQ1pDLFdBQUssRUFBRTtBQUNMQyxjQUFNLEVBQUU7QUFDTkMsZUFBSyxFQUFFO0FBQ0xDLGlCQUFLLENBQUNDLFNBQUQsRUFBWUMsUUFBWixFQUFzQjtBQUN6QixxQkFBT0EsUUFBUDtBQUNEOztBQUhJO0FBREQ7QUFESDtBQURLO0FBRmdCLEdBQWxCLENBQWQ7QUFjQSxRQUFNQyxNQUFNLEdBQUcsSUFBSUMsd0RBQUosQ0FBaUI7QUFDOUJDLE9BQUcsRUFBRSx3Q0FEeUI7QUFFOUJaLFNBQUssRUFBRUE7QUFGdUIsR0FBakIsQ0FBZjtBQUtBLFNBQ0UsTUFBQywwREFBRDtBQUFnQixVQUFNLEVBQUVVLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixFQUVFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixDQURGO0FBU0QsQ0E3QkQ7O0FBK0JBLCtEQUFlWCxJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9Qcm92aWRlciwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuaW1wb3J0IHsgQm9va0luZm8sIEF1dGhvckluZm8gfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgY2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgYWRkVHlwZW5hbWU6IGZhbHNlLFxuICAgIHR5cGVQb2xpY2llczoge1xuICAgICAgUXVlcnk6IHtcbiAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgYm9va3M6IHtcbiAgICAgICAgICAgIG1lcmdlKF9leGlzdGluZywgaW5jb21pbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsLWRhdGEnLFxuICAgIGNhY2hlOiBjYWNoZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPk5leHRKUyBHcmFwaFFMIEFwb2xsbyBBcHA8L2gxPlxuICAgICAgICA8Qm9va0luZm8gLz5cbiAgICAgICAgPEF1dGhvckluZm8gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();