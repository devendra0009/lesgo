"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ThemeToggler.js":
/*!************************************!*\
  !*** ./components/ThemeToggler.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  right: 1rem;\\n  top: 1rem;\\n  cursor: pointer;\\n  .toggle {\\n    font-size: 36px;\\n    color: #fff;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst ThemeToggler = ()=>{\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"light-theme\");\n    const handleClick = ()=>{\n        theme === \"dark-theme\" ? setTheme(\"light-theme\") : setTheme(\"dark-theme\");\n    };\n    useEffect(()=>{\n        document.body.className = theme;\n    }, [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n            onClick: handleClick,\n            children: theme === \"light-theme\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsToggleOff, {\n                className: \"toggle off\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yadav\\\\Documents\\\\Web Dev\\\\New\\\\New folder\\\\components\\\\ThemeToggler.js\",\n                lineNumber: 20,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsToggleOn, {\n                className: \"toggle on\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yadav\\\\Documents\\\\Web Dev\\\\New\\\\New folder\\\\components\\\\ThemeToggler.js\",\n                lineNumber: 22,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yadav\\\\Documents\\\\Web Dev\\\\New\\\\New folder\\\\components\\\\ThemeToggler.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ThemeToggler, \"tQco+9YoJy8wugA0clqS2S3PKmo=\");\n_c = ThemeToggler;\nconst Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c1 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggler);\nvar _c, _c1;\n$RefreshReg$(_c, \"ThemeToggler\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lVG9nZ2xlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBcUM7QUFDRztBQUNpQjtBQUV6RCxNQUFNSyxlQUFlLElBQU07O0lBQ3pCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNTSxjQUFjLElBQU07UUFDeEJGLFVBQVUsZUFBZUMsU0FBUyxpQkFBaUJBLFNBQVMsYUFBYTtJQUMzRTtJQUVBRSxVQUFVLElBQU07UUFDZEMsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLEdBQUdOO0lBQzVCLEdBQUc7UUFBQ0E7S0FBTTtJQUVWLHFCQUNFO2tCQUNFLDRFQUFDTztZQUFVQyxTQUFTTjtzQkFDakJGLFVBQVUsOEJBQ1QsOERBQUNGLHVEQUFXQTtnQkFBQ1EsV0FBVTs7Ozs7MENBRXZCLDhEQUFDVCxzREFBVUE7Z0JBQUNTLFdBQVU7Ozs7O3lCQUN2Qjs7Ozs7OztBQUlUO0dBdEJNUDtLQUFBQTtBQXdCTixNQUFNUSxZQUFZYiwyREFBVTtNQUF0QmE7QUFXTiwrREFBZVIsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RoZW1lVG9nZ2xlci5qcz8zNTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnNUb2dnbGVPbiwgQnNUb2dnbGVPZmYgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbmNvbnN0IFRoZW1lVG9nZ2xlciA9ICgpID0+IHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwibGlnaHQtdGhlbWVcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhlbWUgPT09IFwiZGFyay10aGVtZVwiID8gc2V0VGhlbWUoXCJsaWdodC10aGVtZVwiKSA6IHNldFRoZW1lKFwiZGFyay10aGVtZVwiKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSB0aGVtZTtcclxuICB9LCBbdGhlbWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIHt0aGVtZSA9PT0gXCJsaWdodC10aGVtZVwiID8gKFxyXG4gICAgICAgICAgPEJzVG9nZ2xlT2ZmIGNsYXNzTmFtZT1cInRvZ2dsZSBvZmZcIiAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QnNUb2dnbGVPbiBjbGFzc05hbWU9XCJ0b2dnbGUgb25cIiAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG4gIHRvcDogMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLnRvZ2dsZSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZXI7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwiQnNUb2dnbGVPbiIsIkJzVG9nZ2xlT2ZmIiwiVGhlbWVUb2dnbGVyIiwidGhlbWUiLCJzZXRUaGVtZSIsImhhbmRsZUNsaWNrIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NOYW1lIiwiQ29udGFpbmVyIiwib25DbGljayIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ThemeToggler.js\n"));

/***/ })

});