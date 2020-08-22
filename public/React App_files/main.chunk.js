(this["webpackJsonpdocshare"] = this["webpackJsonpdocshare"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: #f5f5f5;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);


/***/ }),

/***/ "./src/api-core/docs/all-by-user.js":
/*!******************************************!*\
  !*** ./src/api-core/docs/all-by-user.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const allByUser = async id => {
  const headers = {
    "Content-Type": "application/json"
  };
  const doc = await fetch(`${"http://localhost:8000"}/docs/user/${id}`, headers);
  return await doc.json();
};

/* harmony default export */ __webpack_exports__["default"] = (allByUser);

/***/ }),

/***/ "./src/api-core/docs/approve.js":
/*!**************************************!*\
  !*** ./src/api-core/docs/approve.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const approve = async ({
  userId,
  docId
}) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(`${"http://localhost:8000"}/docs/${docId}/approve/${userId}`, request);
  const approvedDoc = await response.json();
  return approvedDoc;
};

/* harmony default export */ __webpack_exports__["default"] = (approve);

/***/ }),

/***/ "./src/api-core/docs/download.js":
/*!***************************************!*\
  !*** ./src/api-core/docs/download.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const download = async id => {
  const headers = {
    "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  };
  const doc = await fetch(`${"http://localhost:8000"}/docs/${id}/download`, headers);
  return await doc;
};

/* harmony default export */ __webpack_exports__["default"] = (download);

/***/ }),

/***/ "./src/api-core/docs/fetch-doc-info.js":
/*!*********************************************!*\
  !*** ./src/api-core/docs/fetch-doc-info.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchDocInfo = async id => {
  try {
    const headers = {
      "Content-Type": "application/json"
    };
    const docInfo = await fetch(`${"http://localhost:8000"}/docs/${id}/info`, headers);
    const json = await docInfo.json();
    return JSON.parse(json);
  } catch (e) {
    return {};
  }
};

/* harmony default export */ __webpack_exports__["default"] = (fetchDocInfo);

/***/ }),

/***/ "./src/api-core/docs/fetch-doc.js":
/*!****************************************!*\
  !*** ./src/api-core/docs/fetch-doc.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchDoc = async id => {
  const headers = {
    "Content-Type": "application/json"
  };
  const doc = await fetch(`${"http://localhost:8000"}/docs/${id}`, headers);
  const json = await doc.json();
  return json;
};

/* harmony default export */ __webpack_exports__["default"] = (fetchDoc);

/***/ }),

/***/ "./src/api-core/docs/index.js":
/*!************************************!*\
  !*** ./src/api-core/docs/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _approve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approve */ "./src/api-core/docs/approve.js");
/* harmony import */ var _all_by_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-by-user */ "./src/api-core/docs/all-by-user.js");
/* harmony import */ var _fetch_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-doc */ "./src/api-core/docs/fetch-doc.js");
/* harmony import */ var _fetch_doc_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch-doc-info */ "./src/api-core/docs/fetch-doc-info.js");
/* harmony import */ var _submit_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submit-doc */ "./src/api-core/docs/submit-doc.js");
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./download */ "./src/api-core/docs/download.js");
/* harmony import */ var _upload_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-file */ "./src/api-core/docs/upload-file.js");
/* harmony import */ var _patch_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patch-file */ "./src/api-core/docs/patch-file.js");








/* harmony default export */ __webpack_exports__["default"] = ({
  approve: _approve__WEBPACK_IMPORTED_MODULE_0__["default"],
  allByUser: _all_by_user__WEBPACK_IMPORTED_MODULE_1__["default"],
  fetchDoc: _fetch_doc__WEBPACK_IMPORTED_MODULE_2__["default"],
  fetchDocInfo: _fetch_doc_info__WEBPACK_IMPORTED_MODULE_3__["default"],
  submitDoc: _submit_doc__WEBPACK_IMPORTED_MODULE_4__["default"],
  download: _download__WEBPACK_IMPORTED_MODULE_5__["default"],
  upload: _upload_file__WEBPACK_IMPORTED_MODULE_6__["default"],
  patch: _patch_file__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./src/api-core/docs/patch-file.js":
/*!*****************************************!*\
  !*** ./src/api-core/docs/patch-file.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {const patch = async ({
  buffer,
  id
}) => {
  const buf = Buffer.from(buffer);
  const request = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/octet-stream"
    },
    body: buf
  };
  const response = await fetch(`${"http://localhost:8000"}/docs/${id}/patch-file`, request);
  return response;
};

/* harmony default export */ __webpack_exports__["default"] = (patch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/api-core/docs/submit-doc.js":
/*!*****************************************!*\
  !*** ./src/api-core/docs/submit-doc.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const submitDoc = async document => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(document)
  };
  const response = await fetch(`${"http://localhost:8000"}/docs/`, request);
  const doc = await response.json();
  return doc;
};

/* harmony default export */ __webpack_exports__["default"] = (submitDoc);

/***/ }),

/***/ "./src/api-core/docs/upload-file.js":
/*!******************************************!*\
  !*** ./src/api-core/docs/upload-file.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {const upload = async ({
  buffer,
  id
}) => {
  const buf = Buffer.from(buffer);
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream"
    },
    body: buf
  };
  const response = await fetch(`${"http://localhost:8000"}/docs/${id}/upload`, request);
  return response;
};

/* harmony default export */ __webpack_exports__["default"] = (upload);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/api-core/index.js":
/*!*******************************!*\
  !*** ./src/api-core/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/api-core/user/index.js");
/* harmony import */ var _docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs */ "./src/api-core/docs/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  user: _user__WEBPACK_IMPORTED_MODULE_0__["default"],
  docs: _docs__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/api-core/user/all.js":
/*!**********************************!*\
  !*** ./src/api-core/user/all.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchAllUsers = async () => {
  const headers = {
    "Content-Type": "application/json"
  };
  const users = await fetch(`${"http://localhost:8000"}/users/`, headers);
  return await users.json();
};

/* harmony default export */ __webpack_exports__["default"] = (fetchAllUsers);

/***/ }),

/***/ "./src/api-core/user/fetch-user-by-username.js":
/*!*****************************************************!*\
  !*** ./src/api-core/user/fetch-user-by-username.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchUserByUsername = async username => {
  const headers = {
    "Content-Type": "application/json"
  };
  const user = await fetch(`${"http://localhost:8000"}/users/username/${username}`, headers);
  return await user.json();
};

/* harmony default export */ __webpack_exports__["default"] = (fetchUserByUsername);

/***/ }),

/***/ "./src/api-core/user/fetch-user.js":
/*!*****************************************!*\
  !*** ./src/api-core/user/fetch-user.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchUser = async id => {
  const headers = {
    "Content-Type": "application/json"
  };
  const user = await fetch(`${"http://localhost:8000"}/users/${id}`, headers);
  return await user.json();
};

/* harmony default export */ __webpack_exports__["default"] = (fetchUser);

/***/ }),

/***/ "./src/api-core/user/index.js":
/*!************************************!*\
  !*** ./src/api-core/user/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all */ "./src/api-core/user/all.js");
/* harmony import */ var _fetch_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-user */ "./src/api-core/user/fetch-user.js");
/* harmony import */ var _fetch_user_by_username__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-user-by-username */ "./src/api-core/user/fetch-user-by-username.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  all: _all__WEBPACK_IMPORTED_MODULE_0__["default"],
  fetchUser: _fetch_user__WEBPACK_IMPORTED_MODULE_1__["default"],
  fetchUserByUsername: _fetch_user_by_username__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/auth/LoadUser.js":
/*!******************************!*\
  !*** ./src/auth/LoadUser.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _web_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web-core */ "./src/web-core/index.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/auth/LoadUser.js";



/* harmony default export */ __webpack_exports__["default"] = (({
  confirmation,
  children
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(_web_core__WEBPACK_IMPORTED_MODULE_2__["default"].auth.actions.setConfirmation(confirmation));
  }, [confirmation, dispatch]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, children);
});

/***/ }),

/***/ "./src/auth/authHelpers.js":
/*!*********************************!*\
  !*** ./src/auth/authHelpers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthHelperMethods; });
/* harmony import */ var _Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);


class AuthHelperMethods {
  constructor(domain) {
    this.login = (username, password) => {
      return this.fetch(`${this.domain}/login`, {
        method: "POST",
        body: JSON.stringify({
          username,
          password
        })
      }).then(res => {
        this.setToken(res.token);
        return Promise.resolve(res);
      });
    };

    this.loggedIn = () => {
      const token = this.getToken();
      return !!token && !this.isTokenExpired(token);
    };

    this.isTokenExpired = token => {
      try {
        const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);

        if (decoded.exp < Date.now() / 1000) {
          return true;
        } else return false;
      } catch (err) {
        console.error("expired token check failed!");
        return false;
      }
    };

    this.setToken = token => {
      localStorage.setItem("token", token);
    };

    this.getToken = () => {
      return localStorage.getItem("token");
    };

    this.logout = () => {
      localStorage.removeItem("token");
    };

    this.getConfirm = () => {
      let answer = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(this.getToken());
      return answer;
    };

    this.fetch = (url, options) => {
      // performs api calls sending the required authentication headers
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      }; // Setting Authorization header
      // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx

      if (this.loggedIn()) {
        headers["Authorization"] = "Bearer " + this.getToken();
      }

      return fetch(url, Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        headers
      }, options)).then(this._checkStatus).then(async response => {
        if (response.ok) {
          const json = await response.json();
          return json;
        }

        return response;
      });
    };

    this._checkStatus = response => {
      // raises an error in case response status is not a success
      if (response.status >= 200 && response.status < 300) {
        // Success status lies between 200 to 300
        return response;
      } else {
        return {
          ok: false,
          status: 401
        };
      }
    };

    this.domain = `${"http://localhost:8000"}`;
  }

}

/***/ }),

/***/ "./src/auth/index.js":
/*!***************************!*\
  !*** ./src/auth/index.js ***!
  \***************************/
/*! exports provided: default, AuthHelperMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withAuth */ "./src/auth/withAuth.js");
/* harmony import */ var _authHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authHelpers */ "./src/auth/authHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthHelperMethods", function() { return _authHelpers__WEBPACK_IMPORTED_MODULE_1__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_withAuth__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/auth/withAuth.js":
/*!******************************!*\
  !*** ./src/auth/withAuth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authHelpers */ "./src/auth/authHelpers.js");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features */ "./src/features/index.js");
/* harmony import */ var _web_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web-core */ "./src/web-core/index.js");
/* harmony import */ var _LoadUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadUser */ "./src/auth/LoadUser.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/auth/withAuth.js";





/* harmony default export */ __webpack_exports__["default"] = (ChildComponent => {
  var _temp;

  const Auth = new _authHelpers__WEBPACK_IMPORTED_MODULE_1__["default"]();
  return _temp = class AuthWrapped extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(...args) {
      super(...args);
      this.state = {
        confirm: null,
        loaded: false,
        logged: false
      };

      this.handleLogin = async (username, password, dispatch) => {
        const logged = await Auth.login(username, password);

        if (logged.success) {
          const confirm = Auth.getConfirm();
          this.setState({
            confirm
          });
          dispatch(_web_core__WEBPACK_IMPORTED_MODULE_3__["default"].auth.actions.setConfirmation(confirm));
          this.props.history.push("/");
          this.setState({
            logged: true
          });
          setTimeout(() => window.location.reload(), 500);
        }
      };

      this.handleLogout = () => {
        this.setState({
          confirm: null
        });
        Auth.logout();
        this.props.history.replace("/login");
      };
    }

    componentDidMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace("/login");
      } else {
        try {
          const confirm = Auth.getConfirm();
          this.setState({
            confirm: confirm,
            loaded: true
          });
        } catch (err) {
          console.error(err);
          Auth.logout();
          this.props.history.replace("/login");
        }
      }
    }

    render() {
      console.log("confirm", this.state.confirm);

      if (this.state.loaded === true) {
        if (this.state.confirm) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadUser__WEBPACK_IMPORTED_MODULE_4__["default"], {
            confirmation: this.state.confirm,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChildComponent, {
            history: this.props.history,
            confirm: this.state.confirm,
            handleLogout: this.handleLogout,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features__WEBPACK_IMPORTED_MODULE_2__["LogIn"], {
            history: this.props.history,
            handleLogin: this.handleLogin,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          });
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features__WEBPACK_IMPORTED_MODULE_2__["LogIn"], {
          history: this.props.history,
          handleLogin: this.handleLogin,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        });
      }
    }

  }, _temp;
});

/***/ }),

/***/ "./src/components/app-frame/index.js":
/*!*******************************************!*\
  !*** ./src/components/app-frame/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/components/app-frame/index.js";


const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({
  appframe: {
    backgroundColor: "#f5f5f5",
    minHeight: "100vh"
  }
}));

const AppFrame = ({
  children
}) => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.appframe,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AppFrame);

/***/ }),

/***/ "./src/components/avatar/index.js":
/*!****************************************!*\
  !*** ./src/components/avatar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_QueryBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/QueryBuilder */ "./node_modules/@material-ui/icons/QueryBuilder.js");
/* harmony import */ var _material_ui_icons_QueryBuilder__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_QueryBuilder__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/components/avatar/index.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({
  avatarRoot: {
    height: "40px",
    width: "40px",
    margin: "15px"
  },
  avatar: {
    height: "40px",
    width: "40px",
    position: "relative",
    zIndex: 1
  },
  check: {
    position: "absolute",
    marginTop: "-11px",
    marginLeft: "-10px",
    height: "20px",
    width: "20px" //    color: "#16B900"

  },
  waiting: {
    position: "absolute",
    marginTop: "-11px",
    marginLeft: "-10px",
    height: "20px",
    width: "20px"
  },
  line: {
    borderRadius: "8px",
    width: "150%",
    height: "0px",
    border: "2px solid #040404",
    position: "relative",
    bottom: "50%",
    zIndex: 0,
    right: "150%"
  },
  info: {
    padding: "6px"
  },
  name: {
    fontSize: "16px"
  },
  dashedLine: {
    borderRadius: "8px",
    width: "150%",
    height: "0px",
    border: "2px dashed #040404",
    position: "relative",
    bottom: "50%",
    zIndex: 0,
    right: "150%"
  },
  dummyLine: {
    borderRadius: "8px",
    height: "1%",
    border: "2px dashed #040404",
    position: "relative",
    bottom: "50%",
    zIndex: 0
  },
  popover: {
    position: "fixed !important",
    top: "40px !important"
  },
  title: {
    fontSize: "12px"
  }
}));

const showLine = (first, fillLine, classes) => {
  if (!first && fillLine) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.line,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    });
  } else if (!first && !fillLine) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.dashedLine,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.dummyLine,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  });
};

const Component = ({
  avatar,
  check = false,
  fillLine = false,
  first = false,
  fullName = "Joel Ovoi",
  title,
  children
}) => {
  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
        _useState2 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        anchorEl = _useState2[0],
        setAnchorEl = _useState2[1];

  const open = Boolean(anchorEl);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.avatarRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, check ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.check,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_QueryBuilder__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.waiting,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.avatar,
    src: avatar,
    children: children,
    onClick: e => setAnchorEl(e.currentTarget),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: open,
    anchorEl: anchorEl,
    onClose: () => setAnchorEl(null),
    className: classes.popover,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, fullName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, title))), showLine(first, fillLine, classes));
};

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/components/bubble/index.js":
/*!****************************************!*\
  !*** ./src/components/bubble/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/components/bubble/index.js";


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  bubbleRoot: {
    padding: "18px",
    display: "flex",
    flexDirection: "row"
  },
  bubble: {
    borderRadius: "12px",
    borderBottomLeftRadius: "0px",
    width: "200px",
    padding: "12px",
    backgroundColor: "#d7d7d7"
  },
  extend: {
    height: "12px",
    width: "11px",
    background: "radial-gradient(circle at top left,transparent 11px,#d7d7d7 0) top left"
  },
  leftBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  }
}));

const Bubble = ({
  title,
  subTitle,
  content
}) => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.bubbleRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.leftBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.extend,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.bubble,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "title"));
};

/* harmony default export */ __webpack_exports__["default"] = (Bubble);

/***/ }),

/***/ "./src/components/check-group/index.js":
/*!*********************************************!*\
  !*** ./src/components/check-group/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/components/check-group/index.js";





const showChecks = (group, checked, onChange) => group.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
  key: item.value,
  control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: item.value,
    checked: checked.includes(item.value),
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }),
  label: item.label,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}));

const CheckGroup = ({
  group,
  checked,
  onChange
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, showChecks(group, checked, onChange));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckGroup);

/***/ }),

/***/ "./src/components/expand-card/index.js":
/*!*********************************************!*\
  !*** ./src/components/expand-card/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/components/expand-card/index.js";







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(() => ({
  expandCard: {
    height: "100%",
    width: "200px",
    marginLeft: "20px",
    marginRight: "20px"
  },
  button: {
    width: "100%"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "20px",
    padding: "0px !important"
  }
}));

const handleExpandClick = (expanded, setExpanded) => () => {
  setExpanded(!expanded);
};

const Component = () => {
  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        expanded = _useState2[0],
        setExpanded = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.expandCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.button,
    onClick: handleExpandClick(expanded, setExpanded),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_5__["default"], {
    in: expanded,
    timeout: "auto",
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Content")));
};

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: AppFrame, Avatar, Bubble, CheckGroup, ExpandCard, Step, UploadModal, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-frame */ "./src/components/app-frame/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppFrame", function() { return _app_frame__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar */ "./src/components/avatar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return _avatar__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubble */ "./src/components/bubble/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bubble", function() { return _bubble__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _check_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-group */ "./src/components/check-group/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckGroup", function() { return _check_group__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _expand_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expand-card */ "./src/components/expand-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandCard", function() { return _expand_card__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step */ "./src/components/step/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return _step__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _upload_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-modal */ "./src/components/upload-modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadModal", function() { return _upload_modal__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user */ "./src/components/user/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./src/components/step/index.js":
/*!**************************************!*\
  !*** ./src/components/step/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/components/step/index.js";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  button: {
    backgroundColor: "darkseagreen",
    textTransform: "none",
    marginTop: "32px"
  },
  description: {
    fontSize: "14px"
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center"
  },
  stepBox: {
    minWidth: "400px",
    marginTop: "24px",
    width: "100%",
    padding: "24px 0px 24px 0px",
    borderRadius: "8px"
  },
  step: {
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "underline"
  },
  flex: {
    display: "flex",
    flexDirection: "row"
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  marginLeft: {
    marginLeft: "auto"
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (({
  step,
  description,
  content,
  error,
  subContent,
  onClose,
  onAccept,
  disabled
}) => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.stepBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.step,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, `Step ${step}`), onClose && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.marginLeft,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, description), content, error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, error), subContent, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, onAccept && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.button,
    disabled: disabled,
    onClick: onAccept(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Accept File")));
});

/***/ }),

/***/ "./src/components/upload-modal/index.js":
/*!**********************************************!*\
  !*** ./src/components/upload-modal/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Description */ "./node_modules/@material-ui/icons/Description.js");
/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/components/upload-modal/index.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  modal: {
    height: "100vh",
    width: "100vw",
    position: "fixed",
    backgroundColor: "rgba(46, 49, 49, .7)",
    top: 0,
    left: 0,
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const dropzone = (getRootProps, getInputProps, isDragActive) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
  style: {
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, getRootProps(), {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", Object.assign({}, getInputProps(), {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
})), isDragActive ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "Drop the files here ...") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "Drag-n-drop a file here, or click to select a file"));

const showFiles = (files, onCancel, classes) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.files,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, files.map(f => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.fileContainer,
    key: `div-${f.name}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.file,
    key: f.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.cancel,
    onClick: () => onCancel(f.name),
    key: `cancel-${f.name}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.fileName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, f.name))));
};

/* harmony default export */ __webpack_exports__["default"] = (({
  files,
  setFiles,
  onCancel,
  onClose,
  onAccept
}) => {
  const classes = useStyles();

  const onDrop = droppedFiles => {
    setFiles(droppedFiles);
  };

  const _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    onDrop
  }),
        getRootProps = _useDropzone.getRootProps,
        getInputProps = _useDropzone.getInputProps,
        isDragActive = _useDropzone.isDragActive;

  const notDocx = files && !files.every(f => f.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  const disabled = !files || files.length > 1 || notDocx;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.modal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      minWidth: "500px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Step"], {
    step: 2,
    description: "Upload a file",
    content: files ? showFiles(files, onCancel, classes) : dropzone(getRootProps, getInputProps, isDragActive),
    error: notDocx && "Only .docx files are supported!",
    onClose: onClose,
    disabled: disabled,
    onAccept: onAccept,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./src/components/user/index.js":
/*!**************************************!*\
  !*** ./src/components/user/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");

var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/components/user/index.js";



 // import SampleAvatar from "./avatar.jpg";

const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({
  user: {
    height: "60px",
    width: "400px",
    display: "flex",
    flexDirection: "row",
    "& > *": {
      margin: "12px",
      marginTop: "0px"
    }
  },
  avatar: {
    height: "60px",
    width: "60px"
  },
  name: {
    color: "#ffffff",
    flex: 2,
    fontSize: "18px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    textAlign: "right",
    marginTop: "12px",
    position: "relative",
    left: "18px"
  },
  popover: {
    position: "absolute !important",
    left: "200px !important",
    top: "70px !important"
  },
  popoverContent: {
    width: "190px",
    backgroundColor: "#D9D2D1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    fontSize: "12px"
  }
}));

const handleClick = (anchorEl, setAnchorEl) => event => {
  if (!anchorEl) setAnchorEl(event.currentTarget);else setAnchorEl(null);
};

const User = ({
  name,
  title,
  popoverContent
}) => {
  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
        _useState2 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        anchorEl = _useState2[0],
        setAnchorEl = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.user,
    onClick: handleClick(anchorEl, setAnchorEl),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, name, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.popover,
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.popoverContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, popoverContent))));
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initApplication = "INIT";
/* harmony default export */ __webpack_exports__["default"] = (initApplication);

/***/ }),

/***/ "./src/features/app/App.js":
/*!*********************************!*\
  !*** ./src/features/app/App.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/features/index.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth */ "./src/auth/index.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/app/App.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  appFlex: {
    display: "flex",
    flexDirection: "row"
  },
  sideBar: {
    flex: 1
  },
  appContent: {
    position: "relative",
    paddingTop: "120px",
    paddingBottom: "24px",
    flex: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const App = ({
  history,
  handleLogout
}) => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AppFrame"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Router"], {
    history: history,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    handleLogout: handleLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.appFlex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sideBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_4__["SideBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.appContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/docs",
    component: _index__WEBPACK_IMPORTED_MODULE_4__["Workflow"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/upload",
    component: _index__WEBPACK_IMPORTED_MODULE_4__["Upload"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _index__WEBPACK_IMPORTED_MODULE_4__["Home"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth__WEBPACK_IMPORTED_MODULE_5__["default"])(App));

/***/ }),

/***/ "./src/features/app/index.js":
/*!***********************************!*\
  !*** ./src/features/app/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/features/app/App.js");

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/features/header/container/index.js":
/*!************************************************!*\
  !*** ./src/features/header/container/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "./src/features/header/view/index.js");
/* harmony import */ var _web_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../web-core */ "./src/web-core/index.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/header/container/index.js";




const _Core$user$selectors = _web_core__WEBPACK_IMPORTED_MODULE_3__["default"].user.selectors,
      getFullName = _Core$user$selectors.getFullName,
      getTitle = _Core$user$selectors.getTitle;
const getNextApprover = _web_core__WEBPACK_IMPORTED_MODULE_3__["default"].doc.selectors.getNextApprover;

const Container = ({
  name,
  title,
  nextApprover,
  handleLogout
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: name,
    title: title,
    nextApprover: nextApprover,
    handleLogout: handleLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  });
};

const mapStateToProps = state => ({
  name: getFullName(state),
  title: getTitle(state),
  nextApprover: getNextApprover(state)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Container));

/***/ }),

/***/ "./src/features/header/index.js":
/*!**************************************!*\
  !*** ./src/features/header/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/features/header/container/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/features/header/view/index.js":
/*!*******************************************!*\
  !*** ./src/features/header/view/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components */ "./src/components/index.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/header/view/index.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({
  button: {
    width: "100%",
    height: "30px",
    textTransform: "none"
  },
  header: {
    height: "32px",
    padding: "12px",
    display: "flex",
    flexDirection: "row"
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#ffffff"
  },
  subTitle: {
    fontSize: "14px",
    color: "#ffffff"
  },
  flex: {
    backgroundColor: "#013e70",
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
    borderBottom: "2px solid #f1eee4",
    position: "fixed"
  },
  divider: {
    borderWidth: "1px",
    borderRadius: "8px",
    height: "150%",
    borderColor: "grey",
    borderStyle: "solid",
    marginLeft: "14px"
  },
  noFlex: {
    display: "initial"
  }
}));

const buttons = (history, handleLogout, classes) => [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  key: "home-nav",
  className: classes.button,
  onClick: () => history.push("/"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "Your Documents"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  key: "new-doc-nav",
  className: classes.button,
  onClick: () => history.push("/upload"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, "New Document"), // <Button className={classes.button}>Documents</Button>,
// <Button className={classes.button}>Notifications</Button>,
// <Button className={classes.button}>Settings</Button>,
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  key: "log-out-nav",
  onClick: handleLogout,
  className: classes.button,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, "Log Out")];

const Component = ({
  name,
  title,
  nextApprover,
  handleLogout
}) => {
  const classes = useStyles();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.noFlex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, nextApprover.firstName && "Review Status" || "DocShare"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.subTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, nextApprover.firstName && `Awaiting Review from ${nextApprover.firstName + " " + nextApprover.lastName}`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["User"], {
    name: name,
    title: title,
    popoverContent: buttons(history, handleLogout, classes),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/features/home/container/index.js":
/*!**********************************************!*\
  !*** ./src/features/home/container/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _web_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../web-core */ "./src/web-core/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view */ "./src/features/home/view/index.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/home/container/index.js";





const Container = props => {
  const userId = props.userId,
        fetchUserDocs = props.fetchUserDocs;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchUserDocs(userId);
  }, [userId, fetchUserDocs]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

const mapStateToProps = state => ({
  userDocs: _web_core__WEBPACK_IMPORTED_MODULE_2__["default"].doc.selectors.getUsersDocs(state),
  userId: _web_core__WEBPACK_IMPORTED_MODULE_2__["default"].user.selectors.getUserId(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUserDocs: id => dispatch(_web_core__WEBPACK_IMPORTED_MODULE_2__["default"].doc.actions.fetchUsersDocsInit(id))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Container));

/***/ }),

/***/ "./src/features/home/index.js":
/*!************************************!*\
  !*** ./src/features/home/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/features/home/container/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/features/home/view/index.js":
/*!*****************************************!*\
  !*** ./src/features/home/view/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/home/view/index.js";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignContent: "flex-start",
    justifyContent: "center"
  },
  documentContent: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    padding: "16px"
  },
  doc: {
    marginTop: "18px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "24px",
    paddingRight: "24px",
    borderTop: "1px solid #a9a9a9",
    paddingTop: "20px"
  },
  download: {
    backgroundColor: "#11c178",
    color: "#ffffff"
  },
  header: {
    fontSize: "32px"
  },
  text: {
    margin: "24px",
    alignText: "center"
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (({
  userDocs
}) => {
  const classes = useStyles();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.documentContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Your Documents"), userDocs.map(doc => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: doc._id,
    className: classes.doc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      flex: 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, doc.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      flex: 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.download,
    onClick: () => history.push(`docs/${doc._id}`),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "View Document")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.download,
    onClick: () => window.open(`${"http://localhost:8000"}/docs/${doc._id}/download`),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Download")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, !userDocs.length && "It seems you're not an approver of any documents... Go create one!")));
});

/***/ }),

/***/ "./src/features/index.js":
/*!*******************************!*\
  !*** ./src/features/index.js ***!
  \*******************************/
/*! exports provided: Header, Home, LogIn, SideBar, Upload, Workflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/features/header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/features/home/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _home__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/features/login/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogIn", function() { return _login__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./src/features/sidebar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideBar", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload */ "./src/features/upload/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return _upload__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _workflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workflow */ "./src/features/workflow/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Workflow", function() { return _workflow__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./src/features/login/index.js":
/*!*************************************!*\
  !*** ./src/features/login/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");

var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/login/index.js";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1eee4"
  },
  box: {
    width: "60%",
    padding: "48px",
    borderRadius: "8px",
    backgroundColor: "#d7d7d7",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  group: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "18px"
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "500px"
  },
  divider: {
    border: ".5px solid black",
    height: "0px",
    width: "200px"
  },
  small: {
    fontSize: "10px"
  },
  input: {
    width: "50%",
    margin: "9px"
  },
  login: {
    backgroundColor: "darkseagreen",
    width: "95px",
    margin: "24px"
  },
  register: {
    backgroundColor: "dodgerblue",
    width: "95px",
    margin: "24px"
  }
}));

const register = (username, password, firstName, lastName, email, title, setRegistered, setRegistering, setError) => {
  fetch(`${"http://localhost:8000"}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password,
      firstName,
      lastName,
      email,
      title
    })
  }).then(res => {
    if (res.ok) {
      setRegistered(true);
      setRegistering(false);
      setError(false);
    } else {
      setError(true);
      setRegistered(false);
    }

    return res;
  });
};

const LogIn = ({
  history,
  handleLogin
}) => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        error = _useState2[0],
        setError = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState4 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        registering = _useState4[0],
        setRegistering = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState6 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        registered = _useState6[0],
        setRegistered = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState8 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        userName = _useState8[0],
        setUserName = _useState8[1];

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState10 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
        password = _useState10[0],
        setPassword = _useState10[1];

  const _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState12 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
        email = _useState12[0],
        setEmail = _useState12[1];

  const _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState14 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState13, 2),
        title = _useState14[0],
        setTitle = _useState14[1];

  const _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState16 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState15, 2),
        firstName = _useState16[0],
        setFirstName = _useState16[1];

  const _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState18 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState17, 2),
        lastName = _useState18[0],
        setLastName = _useState18[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetch(`${"http://localhost:8000"}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }, []);
  const loginDisabled = !userName || !password || password.length < 6;
  const regDisabled = loginDisabled || !email || !title || !firstName || !lastName;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, registering ? "Register" : "Log In", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.input,
    value: userName,
    label: "User Name",
    onChange: e => setUserName(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.input,
    type: "password",
    value: password,
    label: "Password",
    onChange: e => setPassword(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }), registering && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.inputGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.input,
    value: firstName,
    label: "First Name",
    onChange: e => setFirstName(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.input,
    value: lastName,
    label: "Last Name",
    onChange: e => setLastName(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.inputGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.input,
    value: email,
    label: "Email",
    onChange: e => setEmail(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.input,
    value: title,
    label: "Title / Company Role",
    onChange: e => setTitle(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.register,
    onClick: () => register(userName, password, firstName, lastName, email, title, setRegistered, setRegistering, setError),
    disabled: regDisabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, "Register"))), !registering && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.buttonGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.login,
    onClick: () => {
      handleLogin(userName, password, dispatch);
    },
    disabled: loginDisabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, "Log In")), !registering && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.group,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.small,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }, "OR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.group,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.register,
    onClick: () => setRegistering(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: undefined
  }, "Register"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.buttonGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }, registered && "Successfully Registered! Now click Log In!", error && "Could not register that username, please try another")));
};

/* harmony default export */ __webpack_exports__["default"] = (LogIn);

/***/ }),

/***/ "./src/features/sidebar/index.js":
/*!***************************************!*\
  !*** ./src/features/sidebar/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/features/sidebar/view/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_view__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/features/sidebar/view/index.js":
/*!********************************************!*\
  !*** ./src/features/sidebar/view/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/AddBox */ "./node_modules/@material-ui/icons/AddBox.js");
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/sidebar/view/index.js";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  button: {
    width: "100%",
    height: "50px",
    textTransform: "none",
    fontSize: "20px",
    display: "flex",
    flexDirection: "row"
  },
  buttonText: {
    marginLeft: "8px"
  },
  sidebarRoot: {
    backgroundColor: "#ededed",
    height: "90vh",
    position: "fixed",
    width: "20%",
    maxWidth: "250px",
    top: "100px"
  }
}));

const buttons = (history, classes) => [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
  key: "new-doc-nav",
  className: classes.button,
  onClick: () => history.push("/upload"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: classes.buttonText,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "New Document")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
  key: "home-nav",
  className: classes.button,
  onClick: () => history.push("/"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "Your Documents") // <Button className={classes.button}>Documents</Button>,
// <Button className={classes.button}>Notifications</Button>,
// <Button className={classes.button}>Settings</Button>,
// <Button key="log-out-nav" onClick={handleLogout} className={classes.button}>
//   Log Out
// </Button>
];

const SideBar = () => {
  const classes = useStyles();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sidebarRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, buttons(history, classes));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

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

/***/ }),

/***/ "./src/features/upload/index.js":
/*!**************************************!*\
  !*** ./src/features/upload/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/features/upload/container/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/features/upload/view/approver.js":
/*!**********************************************!*\
  !*** ./src/features/upload/view/approver.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowDropUp */ "./node_modules/@material-ui/icons/ArrowDropUp.js");
/* harmony import */ var _material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ "./node_modules/@material-ui/icons/ArrowDropDown.js");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/upload/view/approver.js";








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  approverRoot: {
    border: "2px solid gray",
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    flexDirection: "row",
    minWidth: "600px",
    width: "60%",
    alignSelf: "self-start",
    margin: "12px",
    position: "relative"
  },
  approverType: {
    display: "flex",
    flexDirection: "column",
    flex: 5,
    justifyContent: "center",
    marginRight: "48px"
  },
  arrowButton: {
    width: "12px"
  },
  button: {
    backgroundColor: "#bdbdbd",
    textTransform: "none",
    margin: "6px"
  },
  deleteButton: {
    position: "absolute",
    bottom: "0px",
    right: "0px"
  },
  reorder: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  selectedButton: {
    backgroundColor: "#008cff",
    textTransform: "none",
    margin: "6px"
  },
  textField: {
    width: "80%",
    margin: "12px"
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    flex: 10
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (({
  name,
  email,
  index,
  length,
  move,
  onDelete,
  type,
  setter
}) => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.approverRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.reorder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.arrowButton,
    disabled: index === 0,
    onClick: () => move(index, index - 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })), index + 1, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.arrowButton,
    disabled: index + 1 === length,
    onClick: () => move(index, index + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.userInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.textField,
    value: name,
    label: "Name",
    onChange: e => setter("name", e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.textField,
    value: email,
    label: "Email",
    onChange: e => setter("email", e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.approverType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "This person is an..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: () => setter("type", "editor"),
    className: type === "editor" ? classes.selectedButton : classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Editor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: () => setter("type", "approver"),
    className: type === "approver" ? classes.selectedButton : classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "Approver")), " ", index !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.deleteButton,
    onClick: onDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./src/features/upload/view/index.js":
/*!*******************************************!*\
  !*** ./src/features/upload/view/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/features/upload/view/utils.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components */ "./src/components/index.js");
/* harmony import */ var _approver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./approver */ "./src/features/upload/view/approver.js");

var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/upload/view/index.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  arrow: {
    alignSelf: "center",
    margin: "8px"
  },
  addButton: {
    height: "40px",
    width: "200px",
    fontSize: "14px",
    backgroundColor: "#dfdfdf",
    textTransform: "none",
    margin: "12px",
    alignSelf: "self-start"
  },
  button: {
    height: "40px",
    width: "100px",
    fontSize: "18px",
    backgroundColor: "#8ae38c",
    textTransform: "none",
    margin: "32px"
  },
  navButton: {
    height: "40px",
    width: "100px",
    fontSize: "18px",
    backgroundColor: "#008cff",
    textTransform: "none",
    margin: "32px"
  },
  header: {
    fontSize: "32px",
    alignSelf: "flex-start",
    position: "relative",
    right: "16px",
    top: "32px",
    fontWeight: "bold"
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row"
  },
  cancel: {
    fontSize: "16px"
  },
  dropZone: {
    height: "50px"
  },
  file: {
    fontSize: "64px"
  },
  files: {
    height: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  fileContainer: {
    display: "flex",
    flexDirection: "column",
    width: "64px",
    margin: "20px"
  },
  fileName: {
    fontSize: "10px",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "center"
  },
  flex: {
    display: "flex"
  },
  input: {
    width: "100%",
    textAlignLast: "center"
  },
  step1: {
    width: "30%",
    alignSelf: "flex-start"
  },
  uploadRoot: {
    height: "100%",
    width: "100%",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (({
  users,
  submitDoc,
  userId
}) => {
  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        next = _useState2[0],
        setNext = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState4 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        docName = _useState4[0],
        setDocName = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
        _useState6 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        files = _useState6[0],
        setFiles = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    name: "",
    email: "",
    type: "approver"
  }]),
        _useState8 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        selectedUsers = _useState8[0],
        setSelectedUsers = _useState8[1];

  const onDrop = droppedFiles => {
    setFiles(droppedFiles);
  };

  const _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_4__["useDropzone"])({
    onDrop
  }),
        getRootProps = _useDropzone.getRootProps,
        getInputProps = _useDropzone.getInputProps,
        isDragActive = _useDropzone.isDragActive;

  const notDocx = files && !files.every(f => f.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  const disabled = !files || files.length > 1 || notDocx || !selectedUsers.length || !docName;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.uploadRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, next ? "Add and Order Approvers" : "New Document"), next ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.uploadRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, selectedUsers.map((user, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_approver__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({
    key: `approver-${index}`
  }, user, {
    index: index,
    length: selectedUsers.length,
    setter: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["makeSetter"])(selectedUsers, setSelectedUsers, index),
    onDelete: () => setSelectedUsers(selectedUsers.filter((_, i) => i !== index)),
    move: (from, to) => {
      const newOrder = [...selectedUsers];
      newOrder.splice(to, 0, newOrder.splice(from, 1)[0]);
      setSelectedUsers(newOrder);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.addButton,
    onClick: () => setSelectedUsers([...selectedUsers, {
      name: "",
      email: "",
      type: "approver"
    }]),
    disabled: selectedUsers.some(user => !user.name || !user.email),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, "Add Recipient")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.uploadRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.step1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Step"], {
    step: 1,
    description: "Name your new document",
    content: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["nameDocument"])(docName, setDocName, classes),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Step"], {
    step: 2,
    description: "Upload a file",
    content: files ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["showFiles"])(files, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["onCancel"])(files, setFiles), classes) : Object(_utils__WEBPACK_IMPORTED_MODULE_5__["dropzone"])(getRootProps, getInputProps, isDragActive),
    error: notDocx && "Only .docx files are supported!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.buttonGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.navButton,
    onClick: () => setNext(!next),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, next ? "Back" : "Continue"), next && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.button,
    disabled: disabled,
    onClick: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["onSubmit"])(files, docName, userId, selectedUsers, submitDoc),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, "Submit")));
});

/***/ }),

/***/ "./src/features/upload/view/utils.js":
/*!*******************************************!*\
  !*** ./src/features/upload/view/utils.js ***!
  \*******************************************/
/*! exports provided: onCancel, nameDocument, showFiles, dropzone, onSubmit, makeSetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCancel", function() { return onCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameDocument", function() { return nameDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFiles", function() { return showFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropzone", function() { return dropzone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSubmit", function() { return onSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSetter", function() { return makeSetter; });
/* harmony import */ var _Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Description */ "./node_modules/@material-ui/icons/Description.js");
/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/upload/view/utils.js";

 // import ArrowIcon from "@material-ui/icons/ArrowForward";


 // import UserIcon from "@material-ui/icons/AccountCircle";

const onCancel = (files, setFiles) => name => {
  if (files.length === 1) {
    setFiles(null);
  } else {
    setFiles(files.filter(f => f.name !== name));
  }
};
const nameDocument = (docName, setDocName, classes) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: classes.files,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: classes.input,
  value: docName,
  type: "text",
  onChange: e => setDocName(e.target.value),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}));
const showFiles = (files, onCancel, classes) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.files,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, files.map(f => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.fileContainer,
    key: `div-${f.name}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.file,
    key: f.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.cancel,
    onClick: () => onCancel(f.name),
    key: `cancel-${f.name}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.fileName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, f.name))));
};
const dropzone = (getRootProps, getInputProps, isDragActive) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({
  style: {
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    border: "2px dashed black",
    margin: "0px 150px 0px 150px"
  }
}, getRootProps(), {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", Object.assign({}, getInputProps(), {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
})), isDragActive ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "Drop the files here ...") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, "Drag-n-drop a file here, or click to select a file"));
const onSubmit = (droppedFiles, docName, userId, selectedUsers, submitDoc) => () => {
  droppedFiles.forEach(file => {
    const reader = new FileReader();

    reader.onabort = (r, e) => console.error("Reader aborted!", e);

    reader.onerror = (r, e) => console.error("Reader error!", e);

    reader.onload = (r, e) => {
      const doc = {
        name: docName,
        users: selectedUsers,
        latestApproval: null,
        createdBy: userId,
        content: reader.result
      };
      submitDoc(doc);
    };

    reader.readAsArrayBuffer(file);
  });
};
const makeSetter = (sampleUsers, setSampleUsers, index) => (key, val) => {
  const copy = [...sampleUsers];
  copy.splice(index, 1, Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sampleUsers[index], {
    [key]: val
  }));
  setSampleUsers(copy);
};

/***/ }),

/***/ "./src/features/workflow/container/index.js":
/*!**************************************************!*\
  !*** ./src/features/workflow/container/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view */ "./src/features/workflow/view/index.js");
/* harmony import */ var _web_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../web-core */ "./src/web-core/index.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/workflow/container/index.js";






const Container = ({
  document = {},
  users = [],
  docInfo = {},
  insertsInfo = {},
  deletesInfo = {},
  approveDocument = () => {},
  userId = "",
  patchFile = () => {}
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  const docId = location.pathname.substring(6);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(_web_core__WEBPACK_IMPORTED_MODULE_4__["default"].doc.actions.fetchDocInfo(docId));
    dispatch(_web_core__WEBPACK_IMPORTED_MODULE_4__["default"].doc.actions.fetchDoc(docId));
  }, [docId, dispatch]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view__WEBPACK_IMPORTED_MODULE_3__["default"], {
    document: document,
    users: users,
    docInfo: docInfo,
    insertsInfo: insertsInfo,
    deletesInfo: deletesInfo,
    approveDocument: approveDocument,
    userId: userId,
    patchFile: patchFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  });
};

const mapStateToProps = state => ({
  document: _web_core__WEBPACK_IMPORTED_MODULE_4__["default"].doc.selectors.getDocument(state),
  userId: _web_core__WEBPACK_IMPORTED_MODULE_4__["default"].user.selectors.getUserId(state),
  users: _web_core__WEBPACK_IMPORTED_MODULE_4__["default"].doc.selectors.getDocUsers(state),
  docInfo: _web_core__WEBPACK_IMPORTED_MODULE_4__["default"].doc.selectors.getDocInfo(state),
  insertsInfo: _web_core__WEBPACK_IMPORTED_MODULE_4__["default"].doc.selectors.getInsertsInfo(state),
  deletesInfo: _web_core__WEBPACK_IMPORTED_MODULE_4__["default"].doc.selectors.getDeletesInfo(state)
});

const mapDispatchToProps = dispatch => ({
  approveDocument: id => dispatch(_web_core__WEBPACK_IMPORTED_MODULE_4__["default"].doc.actions.approveDoc(id)),
  patchFile: doc => dispatch(_web_core__WEBPACK_IMPORTED_MODULE_4__["default"].doc.actions.patchFileInit(doc))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Container));

/***/ }),

/***/ "./src/features/workflow/index.js":
/*!****************************************!*\
  !*** ./src/features/workflow/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/features/workflow/container/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/features/workflow/view/approval-order.js":
/*!******************************************************!*\
  !*** ./src/features/workflow/view/approval-order.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ "./src/components/index.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/workflow/view/approval-order.js";



const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({
  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginLeft: "auto"
  }
}));

const ApprovalOrder = ({
  users,
  currentStage
}) => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.group,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, users.map((user, index) => {
    if (user) {
      const firstName = user.firstName;
      const lastName = user.lastName;
      const displayName = firstName && lastName ? firstName + " " + lastName : user.email;
      const letters = firstName && lastName ? firstName[0] + lastName[0] : user.email[0] + user.email[1];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
        key: index // avatar={avatars[index]}
        ,
        children: letters || null,
        check: index <= currentStage,
        fillLine: index <= currentStage + 1,
        first: index === 0,
        fullName: displayName,
        title: user.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: undefined
      });
    } else {
      return null;
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ApprovalOrder);

/***/ }),

/***/ "./src/features/workflow/view/content-popover.js":
/*!*******************************************************!*\
  !*** ./src/features/workflow/view/content-popover.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");

var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/workflow/view/content-popover.js";




const useStyles = type => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  text: {
    color: type === "delete" ? "red" : "green",
    fontWeight: "bold",
    textDecoration: "underline"
  },
  popover: {//
  },
  popoverContent: {
    padding: "12px"
  }
}));

const getLabel = type => {
  switch (type) {
    case "delete":
      return "Deleted";

    case "insert":
      return "Inserted";

    default:
      return "Created";
  }
};

const handleClick = setAnchorEl => e => setAnchorEl(e.currentTarget);

const handleClose = setAnchorEl => () => setAnchorEl(null);

const ContentPopover = ({
  content,
  type
}) => {
  const classes = useStyles(type)();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
        _useState2 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        anchorEl = _useState2[0],
        setAnchorEl = _useState2[1];

  const open = Boolean(anchorEl);
  const label = getLabel(type);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.text,
    onClick: handleClick(setAnchorEl),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, ` ${content.content}`), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose(setAnchorEl),
    className: classes.popover,
    anchorOrigin: {
      horizontal: "right",
      vertical: "bottom"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.popoverContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, `${label} by ${content.author[0]}`, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), `on ${new Date(content.date[0]).toDateString()}`)));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentPopover);

/***/ }),

/***/ "./src/features/workflow/view/doc-info.js":
/*!************************************************!*\
  !*** ./src/features/workflow/view/doc-info.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _content_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-popover */ "./src/features/workflow/view/content-popover.js");
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/workflow/view/doc-info.js";



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  line: {
    marginBottom: "4px"
  },
  margin: {
    marginLeft: "3px"
  },
  workflow: {
    height: "80vh",
    width: "70vw",
    left: "25%",
    paddingTop: "2.5%"
  }
}));

const showLines = (lines, inserts, deletes, classes) => lines.map((line, index) => {
  if (inserts[line]) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.line,
      key: `line-${index}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.flex,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, inserts[line].map((ins, i) => {
      if (ins.author && ins.author.length) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content_popover__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: `pop-${index}-${i}`,
          content: ins,
          type: "insert",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: undefined
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.margin,
        key: `ins-${index}-${i}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: undefined
      }, ins.content);
    })));
  }

  if (deletes[line]) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.line,
      key: `line-${index}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.flex,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, deletes[line].map((del, i) => {
      if (del.author && del.author.length) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content_popover__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: `pop-${index}-${i}`,
          content: del,
          type: "delete",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: undefined
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.margin,
        key: `ins-${index}-${i}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: undefined
      }, del.content);
    })));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.line,
    key: `inline-${index}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.margin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, line));
});

const DocInfo = ({
  docInfo,
  insertsInfo,
  deletesInfo
}) => {
  const classes = useStyles();
  const lines = docInfo.lines || [];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.workflow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, showLines(lines, insertsInfo, deletesInfo, classes));
};

/* harmony default export */ __webpack_exports__["default"] = (DocInfo);

/***/ }),

/***/ "./src/features/workflow/view/index.js":
/*!*********************************************!*\
  !*** ./src/features/workflow/view/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _approval_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approval-order */ "./src/features/workflow/view/approval-order.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components */ "./src/components/index.js");
/* harmony import */ var _doc_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doc-info */ "./src/features/workflow/view/doc-info.js");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/GetApp */ "./node_modules/@material-ui/icons/GetApp.js");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/RemoveCircle */ "./node_modules/@material-ui/icons/RemoveCircle.js");
/* harmony import */ var _material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/features/workflow/view/index.js";









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({
  add: {
    color: "forestgreen",
    marginRight: "8px"
  },
  approve: {
    position: "sticky",
    bottom: "2%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  approveButton: {
    backgroundColor: "darkseagreen",
    margin: "5px"
  },
  documentName: {
    fontSize: "24px",
    fontWeight: "bold"
  },
  downloadButton: {
    backgroundColor: "darkgrey",
    margin: "5px"
  },
  uploadButton: {
    backgroundColor: "lightsteelblue",
    margin: "5px"
  },
  progress: {
    position: "relative",
    top: "40%"
  },
  remove: {
    color: "crimson",
    marginRight: "8px",
    marginLeft: "36px"
  },
  stats: {
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  workflowRoot: {
    overflowY: "auto",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "baseline",
    height: "80vh"
  }
}));

const onCancel = (files, setFiles) => name => {
  if (files.length === 1) {
    setFiles(null);
  } else {
    setFiles(files.filter(f => f.name !== name));
  }
};

const onPatchFile = (droppedFiles, id, patchFile) => () => {
  droppedFiles.forEach(file => {
    const reader = new FileReader();

    reader.onabort = (r, e) => console.error("Reader aborted!", e);

    reader.onerror = (r, e) => console.error("Reader error!", e);

    reader.onload = (r, e) => {
      const doc = {
        content: reader.result,
        id
      };
      patchFile(doc);
    };

    reader.readAsArrayBuffer(file);
  });
};

const Workflow = ({
  approveDocument,
  document,
  docInfo,
  insertsInfo,
  deletesInfo,
  userId,
  patchFile
}) => {
  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
        _useState2 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        files = _useState2[0],
        setFiles = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState4 = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        openModal = _useState4[0],
        setOpenModal = _useState4[1];

  const users = document.users || [{
    firstName: "",
    lastName: "",
    email: ""
  }];
  const currentStage = users.findIndex(user => {
    return document.latestApproval && document.latestApproval === user._id;
  });
  const isApproving = currentStage >= 0 ? userId === users[currentStage + 1]._id : userId === users[0]._id;
  const documentName = document.name || "";
  const additions = Object.keys(insertsInfo).length;
  const removals = Object.keys(deletesInfo).length;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.workflowRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.documentName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, documentName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.stats,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.add,
    style: {
      fontSize: "200%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }), `${additions} Addition${additions === 1 ? "" : "s"}`, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_RemoveCircle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.remove,
    style: {
      fontSize: "200%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), `${removals} Removal${removals === 1 ? "" : "s"}`, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_approval_order__WEBPACK_IMPORTED_MODULE_4__["default"], {
    users: users,
    currentStage: currentStage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_doc_info__WEBPACK_IMPORTED_MODULE_6__["default"], {
    docInfo: docInfo,
    insertsInfo: insertsInfo,
    deletesInfo: deletesInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.approve,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.uploadButton,
    onClick: () => {
      setOpenModal(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, "Upload New Version"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disabled: !isApproving,
    className: classes.approveButton,
    onClick: () => approveDocument(document._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, "Approve"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.downloadButton,
    onClick: () => window.open(`${"http://localhost:8000"}/docs/${document._id}/download`),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }))), openModal && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["UploadModal"], {
    files: files,
    setFiles: setFiles,
    onCancel: onCancel(files, setFiles),
    onClose: () => {
      setOpenModal(false);
      setFiles(null);
    },
    onAccept: () => onPatchFile(files, document._id, patchFile),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Workflow);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _features_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/app */ "./src/features/app/index.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _web_core_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web-core/reducers */ "./src/web-core/reducers.js");
/* harmony import */ var _web_core_sagas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web-core/sagas */ "./src/web-core/sagas.js");
/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./initialize */ "./src/initialize.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/jlovoi/docshare/docshare/src/index.js";













const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_5__["default"])();
const store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_web_core_reducers__WEBPACK_IMPORTED_MODULE_9__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"])(sagaMiddleware)));
_web_core_sagas__WEBPACK_IMPORTED_MODULE_10__["default"].map(saga => sagaMiddleware.run(saga));
sagaMiddleware.run(_initialize__WEBPACK_IMPORTED_MODULE_11__["default"]);
store.dispatch({
  type: "INIT"
});
const history = Object(history__WEBPACK_IMPORTED_MODULE_2__["createBrowserHistory"])();
const rootElement = document.getElementById("root");
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_app__WEBPACK_IMPORTED_MODULE_7__["default"], {
  history: history,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
})), rootElement); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_8__["unregister"]();

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _web_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-core */ "./src/web-core/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



const fetchUsers = _web_core__WEBPACK_IMPORTED_MODULE_1__["default"].users.actions.fetchUsers;

function* init() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(fetchUsers());
}

function* initializeApp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants__WEBPACK_IMPORTED_MODULE_2__["default"], init);
}

/* harmony default export */ __webpack_exports__["default"] = (initializeApp);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/web-core/auth/index.js":
/*!************************************!*\
  !*** ./src/web-core/auth/index.js ***!
  \************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/web-core/auth/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["actions"]; });




/***/ }),

/***/ "./src/web-core/auth/reducer.js":
/*!**************************************!*\
  !*** ./src/web-core/auth/reducer.js ***!
  \**************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialState = {
  confirmation: []
};
const auth = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "auth",
  initialState: initialState,
  reducers: {
    setConfirmation: (state, {
      payload
    }) => {
      state.confirmation = payload;
    }
  }
});
const reducer = auth.reducer;
const actions = auth.actions;


/***/ }),

/***/ "./src/web-core/doc/index.js":
/*!***********************************!*\
  !*** ./src/web-core/doc/index.js ***!
  \***********************************/
/*! exports provided: reducer, actions, selectors, sagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/web-core/doc/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["actions"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./src/web-core/doc/selectors/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sagas */ "./src/web-core/doc/sagas/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sagas", function() { return _sagas__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/web-core/doc/reducer.js":
/*!*************************************!*\
  !*** ./src/web-core/doc/reducer.js ***!
  \*************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialState = {
  usersDocs: [],
  docInfo: {// comments: [
    //   {
    //     authors: ["Brett H Fene"],
    //     date: ["2020-01-08T00:09:00Z"],
    //     content:
    //       "Joe- Listen, are you gonna have those TPS reports for us this afternoon?"
    //   },
    //   {
    //     authors: ["Lovoi, Joseph W."],
    //     date: ["2020-01-18T17:43:00Z"],
    //     content: "Here is a comment!"
    //   }
    // ],
    // inserts: [
    //   {
    //     line:
    //       "Programming Languages:_______________Number of Error Messages:______________________",
    //     inserted: [
    //       { author: [], date: [], content: "Program" },
    //       {
    //         author: ["Lovoi, Joseph W."],
    //         date: ["2020-01-18T14:06:00Z"],
    //         content: "ming"
    //       },
    //       { author: [], date: [], content: " " },
    //       { author: [], date: [], content: "Language" },
    //       {
    //         author: ["Lovoi, Joseph W."],
    //         date: ["2020-01-18T14:06:00Z"],
    //         content: "s"
    //       },
    //       { author: [], date: [], content: ":_" },
    //       { author: [], date: [], content: "______________Number" },
    //       {
    //         author: [],
    //         date: [],
    //         content: " of Error Messages:______________________"
    //       }
    //     ]
    //   },
    //   {
    //     line:
    //       "Where\u2019s my red stapler? Did you take it? ___________________________________________________________________________",
    //     inserted: [
    //       {
    //         author: ["Brett H Fene"],
    //         date: ["2020-01-08T00:11:00Z"],
    //         content: "Where\u2019s my red stapler? Did you take it? "
    //       },
    //       {
    //         author: [],
    //         date: [],
    //         content:
    //           "___________________________________________________________________________"
    //       }
    //     ]
    //   }
    // ],
    // lines: [
    //   "T.P.S. REPORT",
    //   "COVER SHEET",
    //   "Prepared By:_______________________________________________Date:_____________",
    //   "Device/Program Type:_________________________________________________________",
    //   "Product Code:______________Customer:_________________________________________",
    //   "Vendor:_____________________________________________________________________",
    //   "Due Date:_______________________Data Loss:___________________________________",
    //   "Test Date:_______________________Target Run Date:______________________________",
    //   "Program Run Time:_______________Reference Guide:______________________________",
    //   "Programming Languages:_______________Number of Error Messages:______________________",
    //   "Comments:__________________________________________________________________",
    //   "Where\u2019s my red stapler? Did you take it? ___________________________________________________________________________",
    //   "___________________________________________________________________________",
    //   "___________________________________________________________________________",
    //   "CONFIDENTIAL"
    // ]
  }
};
const doc = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "doc",
  initialState,
  reducers: {
    approveDoc: () => {// saga
    },
    approveDocSuccess: (state, {
      payload: id
    }) => {
      state.document.latestApproval = id;
    },
    downloadFile: () => {// saga
    },
    fetchUsersDocsInit: () => {// saga
    },
    fetchUsersDocsSuccess: (state, {
      payload
    }) => {
      state.usersDocs = payload;
    },
    fetchDoc: () => {// saga
    },
    patchFileInit: () => {//saga
    },
    setDoc: (state, action) => {
      state.document = action.payload;
    },
    fetchDocInfo: () => {// saga
    },
    setDocInfo: (state, action) => {
      state.docInfo = action.payload;
    },
    submitDocInit: () => {// saga
    },
    submitDocSuccess: () => {}
  }
});
const reducer = doc.reducer;
const actions = doc.actions;


/***/ }),

/***/ "./src/web-core/doc/sagas/approve.js":
/*!*******************************************!*\
  !*** ./src/web-core/doc/sagas/approve.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer */ "./src/web-core/doc/reducer.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user */ "./src/web-core/user/index.js");
/* harmony import */ var _api_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api-core */ "./src/api-core/index.js");




const approveDoc = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].approveDoc,
      approveDocSuccess = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].approveDocSuccess;
const getUserId = _user__WEBPACK_IMPORTED_MODULE_2__["selectors"].getUserId;

function* saga({
  payload: docId
}) {
  try {
    const userId = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(getUserId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api_core__WEBPACK_IMPORTED_MODULE_3__["default"].docs.approve, {
      userId,
      docId
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(approveDocSuccess(userId));
  } catch (error) {
    console.error("ERROR FETCHING DOC INFO: ", error);
  }
}

function* approveDocSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(approveDoc, saga);
}

/* harmony default export */ __webpack_exports__["default"] = (approveDocSaga);

/***/ }),

/***/ "./src/web-core/doc/sagas/download.js":
/*!********************************************!*\
  !*** ./src/web-core/doc/sagas/download.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer */ "./src/web-core/doc/reducer.js");
/* harmony import */ var _api_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api-core */ "./src/api-core/index.js");



const download = _api_core__WEBPACK_IMPORTED_MODULE_2__["default"].docs.download;
const downloadFile = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].downloadFile;

function* downloadDocx({
  payload: id
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(download, id);
  } catch (error) {
    console.error("ERROR DOWNLOADING DOCX FILE: ", error);
  }
}

function* watchDownload() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(downloadFile, downloadDocx);
}

/* harmony default export */ __webpack_exports__["default"] = (watchDownload);

/***/ }),

/***/ "./src/web-core/doc/sagas/fetch-doc-info.js":
/*!**************************************************!*\
  !*** ./src/web-core/doc/sagas/fetch-doc-info.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer */ "./src/web-core/doc/reducer.js");
/* harmony import */ var _api_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api-core */ "./src/api-core/index.js");



const fetchDocInfo = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].fetchDocInfo,
      setDocInfo = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].setDocInfo;

function* saga({
  payload: id
}) {
  try {
    const docInfo = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api_core__WEBPACK_IMPORTED_MODULE_2__["default"].docs.fetchDocInfo, id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(setDocInfo(docInfo));
  } catch (error) {
    console.error("ERROR FETCHING DOC INFO: ", error);
  }
}

function* fetchDocInfoSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(fetchDocInfo, saga);
}

/* harmony default export */ __webpack_exports__["default"] = (fetchDocInfoSaga);

/***/ }),

/***/ "./src/web-core/doc/sagas/fetch-doc.js":
/*!*********************************************!*\
  !*** ./src/web-core/doc/sagas/fetch-doc.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer */ "./src/web-core/doc/reducer.js");
/* harmony import */ var _api_core_docs_fetch_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api-core/docs/fetch-doc */ "./src/api-core/docs/fetch-doc.js");



const fetchDoc = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].fetchDoc,
      setDoc = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].setDoc;

function* saga({
  payload: id
}) {
  try {
    const doc = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api_core_docs_fetch_doc__WEBPACK_IMPORTED_MODULE_2__["default"], id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(setDoc(doc));
  } catch (error) {
    console.error("ERROR FETCHING DOC: ", error);
  }
}

function* fetchDocSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(fetchDoc, saga);
}

/* harmony default export */ __webpack_exports__["default"] = (fetchDocSaga);

/***/ }),

/***/ "./src/web-core/doc/sagas/fetch-users-docs.js":
/*!****************************************************!*\
  !*** ./src/web-core/doc/sagas/fetch-users-docs.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer */ "./src/web-core/doc/reducer.js");
/* harmony import */ var _api_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api-core */ "./src/api-core/index.js");



const fetchUsersDocsInit = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].fetchUsersDocsInit,
      fetchUsersDocsSuccess = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].fetchUsersDocsSuccess;

function* saga({
  payload: id
}) {
  try {
    if (id) {
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api_core__WEBPACK_IMPORTED_MODULE_2__["default"].docs.allByUser, id);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(fetchUsersDocsSuccess(response));
    }
  } catch (error) {
    console.error("ERROR FETCHING USER DOCS: ", error);
  }
}

function* fetchDocSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(fetchUsersDocsInit, saga);
}

/* harmony default export */ __webpack_exports__["default"] = (fetchDocSaga);

/***/ }),

/***/ "./src/web-core/doc/sagas/index.js":
/*!*****************************************!*\
  !*** ./src/web-core/doc/sagas/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _approve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approve */ "./src/web-core/doc/sagas/approve.js");
/* harmony import */ var _fetch_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-doc */ "./src/web-core/doc/sagas/fetch-doc.js");
/* harmony import */ var _fetch_doc_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-doc-info */ "./src/web-core/doc/sagas/fetch-doc-info.js");
/* harmony import */ var _submit_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submit-doc */ "./src/web-core/doc/sagas/submit-doc.js");
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./download */ "./src/web-core/doc/sagas/download.js");
/* harmony import */ var _fetch_users_docs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch-users-docs */ "./src/web-core/doc/sagas/fetch-users-docs.js");
/* harmony import */ var _patch_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patch-file */ "./src/web-core/doc/sagas/patch-file.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  approve: _approve__WEBPACK_IMPORTED_MODULE_0__["default"],
  fetchDoc: _fetch_doc__WEBPACK_IMPORTED_MODULE_1__["default"],
  fetchDocInfo: _fetch_doc_info__WEBPACK_IMPORTED_MODULE_2__["default"],
  fetchUsersDocs: _fetch_users_docs__WEBPACK_IMPORTED_MODULE_5__["default"],
  submitDoc: _submit_doc__WEBPACK_IMPORTED_MODULE_3__["default"],
  download: _download__WEBPACK_IMPORTED_MODULE_4__["default"],
  patchFile: _patch_file__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/web-core/doc/sagas/patch-file.js":
/*!**********************************************!*\
  !*** ./src/web-core/doc/sagas/patch-file.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer */ "./src/web-core/doc/reducer.js");
/* harmony import */ var _api_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api-core */ "./src/api-core/index.js");



const patch = _api_core__WEBPACK_IMPORTED_MODULE_2__["default"].docs.patch;
const patchFileInit = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].patchFileInit;

function* saga({
  payload
}) {
  try {
    const uploadBody = {
      buffer: payload.content,
      id: payload.id
    };
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(patch, uploadBody);
    window.location.reload();
  } catch (error) {
    console.error("ERROR PATCHING FILE: ", error);
  }
}

function* watchPatchFile() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(patchFileInit, saga);
}

/* harmony default export */ __webpack_exports__["default"] = (watchPatchFile);

/***/ }),

/***/ "./src/web-core/doc/sagas/submit-doc.js":
/*!**********************************************!*\
  !*** ./src/web-core/doc/sagas/submit-doc.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../index */ "./src/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducer */ "./src/web-core/doc/reducer.js");
/* harmony import */ var _api_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api-core */ "./src/api-core/index.js");





const _API$docs = _api_core__WEBPACK_IMPORTED_MODULE_4__["default"].docs,
      submitDoc = _API$docs.submitDoc,
      upload = _API$docs.upload;
const submitDocInit = _reducer__WEBPACK_IMPORTED_MODULE_3__["actions"].submitDocInit,
      submitDocSuccess = _reducer__WEBPACK_IMPORTED_MODULE_3__["actions"].submitDocSuccess;

function* saga({
  payload
}) {
  try {
    const postBody = Object(_Users_jlovoi_docshare_docshare_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, payload);

    delete postBody.content;
    const postResponse = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(submitDoc, postBody);
    const data = postResponse.data;

    if (data) {
      const uploadBody = {
        buffer: payload.content,
        id: data._id
      };
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(upload, uploadBody);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(submitDocSuccess(data));
      _index__WEBPACK_IMPORTED_MODULE_2__["history"].push("/");
    }
  } catch (error) {
    console.error("ERROR SUBMITTING DOC: ", error);
  }
}

function* submitDocSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(submitDocInit, saga);
}

/* harmony default export */ __webpack_exports__["default"] = (submitDocSaga);

/***/ }),

/***/ "./src/web-core/doc/selectors/base-funcs.js":
/*!**************************************************!*\
  !*** ./src/web-core/doc/selectors/base-funcs.js ***!
  \**************************************************/
/*! exports provided: getDocument, getDocInfo, getUsersDocs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return getDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocInfo", function() { return getDocInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersDocs", function() { return getUsersDocs; });
const getDocument = state => state.doc.document;

const getDocInfo = state => state.doc.docInfo;

const getUsersDocs = state => state.doc.usersDocs;



/***/ }),

/***/ "./src/web-core/doc/selectors/get-deletes-info.js":
/*!********************************************************!*\
  !*** ./src/web-core/doc/selectors/get-deletes-info.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _base_funcs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-funcs */ "./src/web-core/doc/selectors/base-funcs.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_base_funcs__WEBPACK_IMPORTED_MODULE_1__["getDocInfo"], docInfo => {
  const deletesInfo = {};
  docInfo && docInfo.deletes && docInfo.deletes.forEach(del => {
    deletesInfo[del.line] = del.deleted;
  });
  return deletesInfo;
}));

/***/ }),

/***/ "./src/web-core/doc/selectors/get-doc-users.js":
/*!*****************************************************!*\
  !*** ./src/web-core/doc/selectors/get-doc-users.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _base_funcs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-funcs */ "./src/web-core/doc/selectors/base-funcs.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_base_funcs__WEBPACK_IMPORTED_MODULE_1__["getDocument"], document => document && document.users || []));

/***/ }),

/***/ "./src/web-core/doc/selectors/get-inserts-info.js":
/*!********************************************************!*\
  !*** ./src/web-core/doc/selectors/get-inserts-info.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _base_funcs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-funcs */ "./src/web-core/doc/selectors/base-funcs.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_base_funcs__WEBPACK_IMPORTED_MODULE_1__["getDocInfo"], docInfo => {
  const insertsInfo = {};
  docInfo && docInfo.inserts && docInfo.inserts.forEach(ins => {
    insertsInfo[ins.line] = ins.inserted;
  });
  return insertsInfo;
}));

/***/ }),

/***/ "./src/web-core/doc/selectors/get-next-approver.js":
/*!*********************************************************!*\
  !*** ./src/web-core/doc/selectors/get-next-approver.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _base_funcs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-funcs */ "./src/web-core/doc/selectors/base-funcs.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_base_funcs__WEBPACK_IMPORTED_MODULE_1__["getDocument"], document => {
  const currentIndex = document && document.users && document.users.findIndex(user => user && user._id === document.latestApproval);

  if (currentIndex > -1 && currentIndex + 1 < document.users.length) {
    return document.users[currentIndex + 1];
  }

  return {};
}));

/***/ }),

/***/ "./src/web-core/doc/selectors/index.js":
/*!*********************************************!*\
  !*** ./src/web-core/doc/selectors/index.js ***!
  \*********************************************/
/*! exports provided: getDocument, getDocInfo, getUsersDocs, getDocUsers, getInsertsInfo, getDeletesInfo, getNextApprover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_funcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-funcs */ "./src/web-core/doc/selectors/base-funcs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return _base_funcs__WEBPACK_IMPORTED_MODULE_0__["getDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocInfo", function() { return _base_funcs__WEBPACK_IMPORTED_MODULE_0__["getDocInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUsersDocs", function() { return _base_funcs__WEBPACK_IMPORTED_MODULE_0__["getUsersDocs"]; });

/* harmony import */ var _get_doc_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-doc-users */ "./src/web-core/doc/selectors/get-doc-users.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocUsers", function() { return _get_doc_users__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _get_inserts_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-inserts-info */ "./src/web-core/doc/selectors/get-inserts-info.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInsertsInfo", function() { return _get_inserts_info__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _get_deletes_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-deletes-info */ "./src/web-core/doc/selectors/get-deletes-info.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDeletesInfo", function() { return _get_deletes_info__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _get_next_approver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-next-approver */ "./src/web-core/doc/selectors/get-next-approver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextApprover", function() { return _get_next_approver__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./src/web-core/index.js":
/*!*******************************!*\
  !*** ./src/web-core/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/web-core/user/index.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users */ "./src/web-core/users/index.js");
/* harmony import */ var _doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc */ "./src/web-core/doc/index.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./src/web-core/auth/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  auth: _auth__WEBPACK_IMPORTED_MODULE_3__,
  user: _user__WEBPACK_IMPORTED_MODULE_0__,
  users: _users__WEBPACK_IMPORTED_MODULE_1__,
  doc: _doc__WEBPACK_IMPORTED_MODULE_2__
});

/***/ }),

/***/ "./src/web-core/reducers.js":
/*!**********************************!*\
  !*** ./src/web-core/reducers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/web-core/auth/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/web-core/user/index.js");
/* harmony import */ var _doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc */ "./src/web-core/doc/index.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users */ "./src/web-core/users/index.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["reducer"],
  user: _user__WEBPACK_IMPORTED_MODULE_2__["reducer"],
  doc: _doc__WEBPACK_IMPORTED_MODULE_3__["reducer"],
  users: _users__WEBPACK_IMPORTED_MODULE_4__["reducer"]
}));

/***/ }),

/***/ "./src/web-core/sagas.js":
/*!*******************************!*\
  !*** ./src/web-core/sagas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doc */ "./src/web-core/doc/index.js");
/* harmony import */ var _users___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/ */ "./src/web-core/users/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/web-core/user/index.js");



const approve = _doc__WEBPACK_IMPORTED_MODULE_0__["sagas"].approve,
      fetchDoc = _doc__WEBPACK_IMPORTED_MODULE_0__["sagas"].fetchDoc,
      fetchDocInfo = _doc__WEBPACK_IMPORTED_MODULE_0__["sagas"].fetchDocInfo,
      submitDoc = _doc__WEBPACK_IMPORTED_MODULE_0__["sagas"].submitDoc,
      download = _doc__WEBPACK_IMPORTED_MODULE_0__["sagas"].download,
      fetchUsersDocs = _doc__WEBPACK_IMPORTED_MODULE_0__["sagas"].fetchUsersDocs,
      patchFile = _doc__WEBPACK_IMPORTED_MODULE_0__["sagas"].patchFile;
const fetchUser = _user__WEBPACK_IMPORTED_MODULE_2__["sagas"].fetchUser,
      fetchUserByUsername = _user__WEBPACK_IMPORTED_MODULE_2__["sagas"].fetchUserByUsername;
const fetchAllUsers = _users___WEBPACK_IMPORTED_MODULE_1__["sagas"].fetchAllUsers;
/* harmony default export */ __webpack_exports__["default"] = ([approve, fetchUser, fetchUserByUsername, fetchDoc, fetchDocInfo, download, submitDoc, fetchAllUsers, fetchUsersDocs, patchFile]);

/***/ }),

/***/ "./src/web-core/user/index.js":
/*!************************************!*\
  !*** ./src/web-core/user/index.js ***!
  \************************************/
/*! exports provided: reducer, actions, selectors, sagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/web-core/user/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["actions"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./src/web-core/user/selectors/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sagas */ "./src/web-core/user/sagas/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "sagas", function() { return _sagas__WEBPACK_IMPORTED_MODULE_2__; });





/***/ }),

/***/ "./src/web-core/user/reducer.js":
/*!**************************************!*\
  !*** ./src/web-core/user/reducer.js ***!
  \**************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialState = {
  user: {} // firstName: "Joel",
  // lastName: "Ovoi",
  // id: "AAAA-BBBB-CCCC-DDDD",
  // title: "Software Developer"

};
const user = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "user",
  initialState: initialState,
  reducers: {
    fetchUser: () => {// saga
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    }
  }
});
const reducer = user.reducer;
const actions = user.actions;


/***/ }),

/***/ "./src/web-core/user/sagas/fetch-user-by-username.js":
/*!***********************************************************!*\
  !*** ./src/web-core/user/sagas/fetch-user-by-username.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer */ "./src/web-core/user/reducer.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth */ "./src/web-core/auth/index.js");
/* harmony import */ var _api_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api-core */ "./src/api-core/index.js");




const fetchUserByUsername = _api_core__WEBPACK_IMPORTED_MODULE_3__["default"].user.fetchUserByUsername;
const setUser = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].setUser;

function* saga({
  payload
}) {
  try {
    const username = payload.username;
    const user = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(fetchUserByUsername, username);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(setUser(user));
  } catch (error) {
    console.error("ERROR FETCHING USER: ", error);
  }
}

function* fetchUserByUsernameSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_auth__WEBPACK_IMPORTED_MODULE_2__["actions"].setConfirmation, saga);
}

/* harmony default export */ __webpack_exports__["default"] = (fetchUserByUsernameSaga);

/***/ }),

/***/ "./src/web-core/user/sagas/fetch-user.js":
/*!***********************************************!*\
  !*** ./src/web-core/user/sagas/fetch-user.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer */ "./src/web-core/user/reducer.js");
/* harmony import */ var _api_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api-core */ "./src/api-core/index.js");



const apiFetch = _api_core__WEBPACK_IMPORTED_MODULE_2__["default"].user.fetchUser;
const fetchUser = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].fetchUser,
      setUser = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].setUser;

function* saga({
  payload
}) {
  try {
    const id = payload.id;
    const user = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(apiFetch, {
      id
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(setUser(user));
  } catch (error) {
    console.error("ERROR FETCHING USER: ", error);
  }
}

function* fetchUserSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(fetchUser, saga);
}

/* harmony default export */ __webpack_exports__["default"] = (fetchUserSaga);

/***/ }),

/***/ "./src/web-core/user/sagas/index.js":
/*!******************************************!*\
  !*** ./src/web-core/user/sagas/index.js ***!
  \******************************************/
/*! exports provided: fetchUser, fetchUserByUsername */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-user */ "./src/web-core/user/sagas/fetch-user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return _fetch_user__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _fetch_user_by_username__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-user-by-username */ "./src/web-core/user/sagas/fetch-user-by-username.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchUserByUsername", function() { return _fetch_user_by_username__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/web-core/user/selectors/base-funcs.js":
/*!***************************************************!*\
  !*** ./src/web-core/user/selectors/base-funcs.js ***!
  \***************************************************/
/*! exports provided: getUser, getFirstName, getLastName, getFullName, getUserId, getTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstName", function() { return getFirstName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastName", function() { return getLastName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullName", function() { return getFullName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserId", function() { return getUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return getTitle; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

const getUser = state => state.user.user;
const getFirstName = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUser, user => user.firstName);
const getLastName = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUser, user => user.lastName);
const getFullName = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUser, user => user.firstName + " " + user.lastName);
const getUserId = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUser, user => user._id);
const getTitle = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUser, user => user.title);

/***/ }),

/***/ "./src/web-core/user/selectors/index.js":
/*!**********************************************!*\
  !*** ./src/web-core/user/selectors/index.js ***!
  \**********************************************/
/*! exports provided: getFirstName, getLastName, getFullName, getUserId, getTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_funcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-funcs */ "./src/web-core/user/selectors/base-funcs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstName", function() { return _base_funcs__WEBPACK_IMPORTED_MODULE_0__["getFirstName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastName", function() { return _base_funcs__WEBPACK_IMPORTED_MODULE_0__["getLastName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFullName", function() { return _base_funcs__WEBPACK_IMPORTED_MODULE_0__["getFullName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserId", function() { return _base_funcs__WEBPACK_IMPORTED_MODULE_0__["getUserId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return _base_funcs__WEBPACK_IMPORTED_MODULE_0__["getTitle"]; });




/***/ }),

/***/ "./src/web-core/users/index.js":
/*!*************************************!*\
  !*** ./src/web-core/users/index.js ***!
  \*************************************/
/*! exports provided: reducer, actions, selectors, sagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/web-core/users/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["actions"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./src/web-core/users/selectors/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sagas */ "./src/web-core/users/sagas/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "sagas", function() { return _sagas__WEBPACK_IMPORTED_MODULE_2__; });





/***/ }),

/***/ "./src/web-core/users/reducer.js":
/*!***************************************!*\
  !*** ./src/web-core/users/reducer.js ***!
  \***************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialState = {
  users: []
};
const users = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "users",
  initialState: initialState,
  reducers: {
    fetchUsers: () => {// saga
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  }
});
const reducer = users.reducer;
const actions = users.actions;


/***/ }),

/***/ "./src/web-core/users/sagas/fetch-all.js":
/*!***********************************************!*\
  !*** ./src/web-core/users/sagas/fetch-all.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer */ "./src/web-core/users/reducer.js");
/* harmony import */ var _api_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api-core */ "./src/api-core/index.js");



const all = _api_core__WEBPACK_IMPORTED_MODULE_2__["default"].user.all;
const fetchUsers = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].fetchUsers,
      setUsers = _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].setUsers;

function* saga() {
  try {
    const users = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(all);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(setUsers(users));
  } catch (error) {
    console.error("ERROR FETCHING USERS: ", error);
  }
}

function* fetchUserSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(fetchUsers, saga);
}

/* harmony default export */ __webpack_exports__["default"] = (fetchUserSaga);

/***/ }),

/***/ "./src/web-core/users/sagas/index.js":
/*!*******************************************!*\
  !*** ./src/web-core/users/sagas/index.js ***!
  \*******************************************/
/*! exports provided: fetchAllUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-all */ "./src/web-core/users/sagas/fetch-all.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchAllUsers", function() { return _fetch_all__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/web-core/users/selectors/base-funcs.js":
/*!****************************************************!*\
  !*** ./src/web-core/users/selectors/base-funcs.js ***!
  \****************************************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
const users = state => state.users.users;

/***/ }),

/***/ "./src/web-core/users/selectors/index.js":
/*!***********************************************!*\
  !*** ./src/web-core/users/selectors/index.js ***!
  \***********************************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_funcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-funcs */ "./src/web-core/users/selectors/base-funcs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "users", function() { return _base_funcs__WEBPACK_IMPORTED_MODULE_0__["users"]; });




/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jlovoi/docshare/docshare/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/jlovoi/docshare/docshare/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/jlovoi/docshare/docshare/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map