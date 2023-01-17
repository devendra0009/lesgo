"use strict";
(() => {
var exports = {};
exports.id = 390;
exports.ids = [390];
exports.modules = {

/***/ 9299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_SheetList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5658);

function handler(req, res) {
    if (req.method === "GET") {
        let num = Number(req.query.id);
        res.status(200).json(_data_SheetList__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[num - 1]);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [158], () => (__webpack_exec__(9299)));
module.exports = __webpack_exports__;

})();