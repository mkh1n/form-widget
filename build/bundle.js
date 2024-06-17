/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.js */ \"./src/style.js\");\n\nconst injectStyles = () => {\n  const styleTag = document.createElement(\"style\");\n  styleTag.innerHTML = _style_js__WEBPACK_IMPORTED_MODULE_0__.styles.replace(/^\\s+|\\n/gm, \"\");\n  document.head.appendChild(styleTag);\n}\n\nconst createWidgetContent = () => {\n  document.querySelector('#widget').innerHTML = `\n    <div class=\"header\">Where does it come from? Why do we use it?</div>\n    <div class=\"contentHolder\">\n      <div class=\"desc\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>\n      <div id=\"dateHolder\">\n        <input placeholder=\"Depart date\" type=\"text\" class=\"block\" onfocus=\"this.type='date'\" onblur=\"if(this.value==''){this.type='text'}\">\n        <input placeholder=\"Return date\" type=\"text\" class=\"block\" onfocus=\"this.type='date'\" onblur=\"if(this.value==''){this.type='text'}\">\n        <button class=\"block btn\">SEARCH</button>\n      </div>\n    </div>`;\n}\ninjectStyles();\ncreateWidgetContent();\n\n\n//# sourceURL=webpack://form-widget/./src/index.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styles: () => (/* binding */ styles)\n/* harmony export */ });\nconst styles = `body {\n  margin: 0;\n  padding: 0;\n}\n\n#widget {\n  display: inline-flex;\n  flex-direction: column;\n  background-color: #468ee5;\n  padding: 5px 20px 15px 20px;\n  box-sizing: border-box;\n  min-width: 200px;\n  max-width: 1024px;\n  width: 100%;\n}\n\n#dateHolder {\n  height: min-content;\n  width: fit-content;\n  display: flex;\n  gap: 20px;\n  align-items: end;\n  flex-wrap: wrap;\n}\n\ninput {\n  position: relative;\n  height: 40px;\n  width: 201px;\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 0;\n  color: #898989;\n  font-family: \"Open Sans\", sans-serif;\n  padding: 11px 11px 14px 14px;\n}\n\ninput[type=\"date\"]::-webkit-inner-spin-button,\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\ninput::after {\n  position: absolute;\n  content: url('./calendar.svg');\n  inset-block-start: 50%;\n  transform: translateY(-50%);\n  right: 10px;\n}\n\n.btn {\n  background-color: #f7a700;\n  height: 40px;\n  box-sizing: border-box;\n  border: none;\n  border-radius: 2px;\n  padding: 9px 80px 13px 80px;\n  font-size: 20px;\n  color: white;\n  cursor: pointer;\n}\n\n.header,\n.desc {\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 24px;\n}\n\n.contentHolder {\n  display: inline-flex;\n  gap: 15px;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  justify-content: space-between;\n  margin-top: 15px;\n}\n\n.desc {\n  font-size: 10px;\n  width: 242px;\n}\n\n@media (max-width: 990px) {\n  .desc {\n    width: 100%;\n  }\n}\n\n@media (max-width: 769px) {\n  .block {\n    flex: 1 0 201px;\n    box-sizing: border-box;\n  }\n\n  .block:nth-child(-n+2) {\n    order: 0;\n  }\n\n  button {\n    flex: 1 0 240px;\n  }\n\n  .contentHolder {\n    flex-wrap: wrap;\n  }\n\n  #dateHolder {\n    flex-wrap: wrap;\n  }\n\n  .block:nth-child(3) {\n    flex: 1 0 100%;\n  }\n}\n\n@media (max-width: 440px) {\n  .header {\n    font-size: 18px;\n  }\n\n  .block {\n    flex: 1 0 110px;\n  }\n}\n\n@media (max-width: 287px) {\n  #widget {\n    padding: 5px 10px 15px 10px;\n  }\n\n  input,\n  .btn {\n    width: 100%;\n  }\n\n  .desc {\n    width: 100%;\n    order: 2\n  }\n\n  #dateHolder {\n    gap: 10px;\n    order:1 ;\n  }\n\n  .btn {\n    padding: 9px 20px 13px 20px;\n  }\n}`\n\n\n//# sourceURL=webpack://form-widget/./src/style.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;