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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  right: 1rem;\\n  top: 1rem;\\n  cursor: pointer;\\n  .toggle {\\n    font-size: 36px;\\n    color: var(--bgcolor);\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst ThemeToggler = ()=>{\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"light-theme\");\n    const handleClick = ()=>{\n        theme === \"dark-theme\" ? setTheme(\"light-theme\") : setTheme(\"dark-theme\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        document.body.className = theme;\n    }, [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n            onClick: handleClick,\n            children: theme === \"light-theme\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsToggleOff, {\n                className: \"toggle off\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yadav\\\\Documents\\\\Web Dev\\\\New\\\\New folder\\\\components\\\\ThemeToggler.js\",\n                lineNumber: 20,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsToggleOn, {\n                className: \"toggle on\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yadav\\\\Documents\\\\Web Dev\\\\New\\\\New folder\\\\components\\\\ThemeToggler.js\",\n                lineNumber: 22,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yadav\\\\Documents\\\\Web Dev\\\\New\\\\New folder\\\\components\\\\ThemeToggler.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ThemeToggler, \"tQco+9YoJy8wugA0clqS2S3PKmo=\");\n_c = ThemeToggler;\nconst Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c1 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggler);\nvar _c, _c1;\n$RefreshReg$(_c, \"ThemeToggler\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lVG9nZ2xlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBcUM7QUFDYztBQUNNO0FBRXpELE1BQU1NLGVBQWUsSUFBTTs7SUFDekIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1PLGNBQWMsSUFBTTtRQUN4QkYsVUFBVSxlQUFlQyxTQUFTLGlCQUFpQkEsU0FBUyxhQUFhO0lBQzNFO0lBRUFMLGdEQUFTQSxDQUFDLElBQU07UUFDZE8sU0FBU0MsSUFBSSxDQUFDQyxTQUFTLEdBQUdMO0lBQzVCLEdBQUc7UUFBQ0E7S0FBTTtJQUVWLHFCQUNFO2tCQUNFLDRFQUFDTTtZQUFVQyxTQUFTTDtzQkFDakJGLFVBQVUsOEJBQ1QsOERBQUNGLHVEQUFXQTtnQkFBQ08sV0FBVTs7Ozs7MENBRXZCLDhEQUFDUixzREFBVUE7Z0JBQUNRLFdBQVU7Ozs7O3lCQUN2Qjs7Ozs7OztBQUlUO0dBdEJNTjtLQUFBQTtBQXdCTixNQUFNTyxZQUFZYiwyREFBVTtNQUF0QmE7QUFXTiwrREFBZVAsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RoZW1lVG9nZ2xlci5qcz8zNTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCc1RvZ2dsZU9uLCBCc1RvZ2dsZU9mZiB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5cclxuY29uc3QgVGhlbWVUb2dnbGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJsaWdodC10aGVtZVwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGVtZSA9PT0gXCJkYXJrLXRoZW1lXCIgPyBzZXRUaGVtZShcImxpZ2h0LXRoZW1lXCIpIDogc2V0VGhlbWUoXCJkYXJrLXRoZW1lXCIpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IHRoZW1lO1xyXG4gIH0sIFt0aGVtZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lciBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAge3RoZW1lID09PSBcImxpZ2h0LXRoZW1lXCIgPyAoXHJcbiAgICAgICAgICA8QnNUb2dnbGVPZmYgY2xhc3NOYW1lPVwidG9nZ2xlIG9mZlwiIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxCc1RvZ2dsZU9uIGNsYXNzTmFtZT1cInRvZ2dsZSBvblwiIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgdG9wOiAxcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAudG9nZ2xlIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGNvbG9yOiB2YXIoLS1iZ2NvbG9yKTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZXI7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnNUb2dnbGVPbiIsIkJzVG9nZ2xlT2ZmIiwiVGhlbWVUb2dnbGVyIiwidGhlbWUiLCJzZXRUaGVtZSIsImhhbmRsZUNsaWNrIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NOYW1lIiwiQ29udGFpbmVyIiwib25DbGljayIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ThemeToggler.js\n"));

/***/ })

});