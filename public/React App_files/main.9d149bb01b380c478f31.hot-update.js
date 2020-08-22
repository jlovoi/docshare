webpackHotUpdate("main",{

/***/ "./src/features/upload/container/index.js":
/*!************************************************!*\
  !*** ./src/features/upload/container/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _web_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../web-core */ "./src/web-core/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "./src/features/upload/view/index.js");



const submitDocInit = _web_core__WEBPACK_IMPORTED_MODULE_1__["default"].doc.actions.submitDocInit;

const mapStateToProps = state => ({
  user: _web_core__WEBPACK_IMPORTED_MODULE_1__["default"].user.selectors.getUser(state),
  userId: _web_core__WEBPACK_IMPORTED_MODULE_1__["default"].user.selectors.getUserId(state)
});

const mapDispatchToProps = dispatch => ({
  submitDoc: doc => dispatch(submitDocInit(doc))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_view__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

})
//# sourceMappingURL=main.9d149bb01b380c478f31.hot-update.js.map