"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwarehouse_inc"] = self["webpackChunkwarehouse_inc"] || []).push([["src_main_js"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// This script should only ever be modified to add initialization related tasks\r\ncolorLog(\"Starting Warehouse Inc.\", \"green\", \"30px\");\r\n\r\n// This should be using Semantic Versioning from https://semver.org/\r\n// You should use a to show alpha and b to show beta. Any other short terms should be stated after the dash.\r\nvar version = \"0.2.4-alpha\";\r\n\r\ncolorLog(\"Version \" + version);\r\n\r\ndocument.getElementById(\"versionNumber\").innerHTML =\r\n  version +\r\n  (isDev() === true ? \" <span style='color:yellow;'>(dev)</span>\" : \"\");\r\n\r\n// Everything you want to save should be in this object.\r\nvar game = { version: version };\r\naddProperty(game, \"settings\", {});\r\naddProperty(game, \"settingsMd\", {});\r\n\r\n//slightly unrelated but its cool.\r\ndocument.getElementById(\"coverDiv\").classList.add(\"coverDivAnimate\");\r\n\n\n//# sourceURL=webpack://warehouse-inc/./src/main.js?");

/***/ })

}]);