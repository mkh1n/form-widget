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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.js */ \"./src/style.js\");\n\nconst injectStyles = () => {\n  const styleTag = document.createElement(\"style\");\n  styleTag.innerHTML = _style_js__WEBPACK_IMPORTED_MODULE_0__.styles.replace(/^\\s+|\\n/gm, \"\");\n  document.head.appendChild(styleTag);\n}\n\nconst createWidgetContent = () => {\n  document.querySelector('#widget').innerHTML = `\n    <div class=\"header\">Where does it come from? Why do we use it?</div>\n    <div class=\"contentHolder\">\n      <div class=\"desc\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>\n      <div id=\"dateHolder\">\n        <div class='inputHolder block'>\n          <input type=\"text\" id=\"departDate\" placeholder=\"Depat date\" onfocus=\"(this.type='date')\" onblur=\"if(this.value==''){this.type='text'}\">\n        </div>\n        <div class='inputHolder block'>\n          <input type=\"text\" id=\"returnDate\" placeholder=\"Return date\" onfocus=\"(this.type='date')\" onblur=\"if(this.value==''){this.type='text'}\">\n        </div>\n        <button class=\"block btn\">SEARCH</button>\n      </div>\n    </div>`;\n}\ninjectStyles();\ncreateWidgetContent();\n\n\n//# sourceURL=webpack://form-widget/./src/index.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styles: () => (/* binding */ styles)\n/* harmony export */ });\n\nconst icon = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"15px\" height=\"17px\" viewBox=\"0 0 15 17\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 43 (38999) - http://www.bohemiancoding.com/sketch -->\n    <title>Calendar</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"TP-test-form\" transform=\"translate(-505.000000, -287.000000)\" fill=\"#4990E2\">\n            <g id=\"Wide-form\" transform=\"translate(50.000000, 200.000000)\">\n                <g id=\"Input2\" transform=\"translate(260.000000, 75.000000)\">\n                    <path d=\"M197,19.9977418 C197,19.9977418 197.001596,27.2488688 197,27 L208.002502,26.9989014 C208.000907,26.9989014 207.997314,19.9994507 207.997314,19.9994507 L197,19.9977418 L197,19.9977418 L197,19.9977418 Z M203,23 L207,23 L207,26 L203,26 L203,23 L203,23 L203,23 Z M210,18 L210,27 C210,28.105 209.105,29 208,29 L197,29 C195.895,29 195,28.105 195,27 L195,18 L210,18 L210,18 L210,18 Z M207,13.9994999 L207,13.0002501 C207,12.448112 206.552,12 206,12 L205,12 C204.448,12 204,12.448112 204,13.0002501 L204,13.9994999 L201,13.9994999 L201,13.0002501 C201,12.448112 200.552,12 200,12 L199,12 C198.448,12 198,12.448112 198,13.0002501 L198,13.9994999 L197,13.9994999 C195.895,13.9994999 195,14.8947237 195,16 L210,16 C210,14.8947237 209.105,13.9994999 208,13.9994999 L207,13.9994999 L207,13.9994999 L207,13.9994999 Z\" id=\"Calendar\"></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>`\n\nconst styles = `body {\n  margin: 0;\n  padding: 0;\n}\n\n#widget {\n  display: inline-flex;\n  flex-direction: column;\n  background-color: #468ee5;\n  padding: 5px 20px 15px 20px;\n  box-sizing: border-box;\n  min-width: 200px;\n  max-width: 1024px;\n  width: 100%;\n}\n\n#dateHolder {\n  height: min-content;\n  width: fit-content;\n  display: flex;\n  gap: 20px;\n  align-items: end;\n  flex-wrap: wrap;\n}\n.inputHolder{\n  width: 201px;\n\n}\ninput {\n  position: relative;\n  height: 40px;\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 0;\n  font-family: \"Open Sans\", sans-serif;\n  padding: 11px 11px 14px 14px;\n  font-size: 14px;\n    color: #898989\n}\ninput[type=\"date\"]::-webkit-inner-spin-button,\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n}\n.inputHolder{\n  position:relative\n}\n.inputHolder::after {\n  content: '';\n  position: absolute;\n  inset-block-start: 50%;\n  transform: translateY(-50%);\n  right: 10px;\n  height: 18px;\n  width: 15px;\n  pointer-events: none;\n  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxN3B4IiB2aWV3Qm94PSIwIDAgMTUgMTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzICgzODk5OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Q2FsZW5kYXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iVFAtdGVzdC1mb3JtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTA1LjAwMDAwMCwgLTI4Ny4wMDAwMDApIiBmaWxsPSIjNDk5MEUyIj4KICAgICAgICAgICAgPGcgaWQ9IldpZGUtZm9ybSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAyMDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iSW5wdXQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjAuMDAwMDAwLCA3NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTk3LDE5Ljk5Nzc0MTggQzE5NywxOS45OTc3NDE4IDE5Ny4wMDE1OTYsMjcuMjQ4ODY4OCAxOTcsMjcgTDIwOC4wMDI1MDIsMjYuOTk4OTAxNCBDMjA4LjAwMDkwNywyNi45OTg5MDE0IDIwNy45OTczMTQsMTkuOTk5NDUwNyAyMDcuOTk3MzE0LDE5Ljk5OTQ1MDcgTDE5NywxOS45OTc3NDE4IEwxOTcsMTkuOTk3NzQxOCBMMTk3LDE5Ljk5Nzc0MTggWiBNMjAzLDIzIEwyMDcsMjMgTDIwNywyNiBMMjAzLDI2IEwyMDMsMjMgTDIwMywyMyBMMjAzLDIzIFogTTIxMCwxOCBMMjEwLDI3IEMyMTAsMjguMTA1IDIwOS4xMDUsMjkgMjA4LDI5IEwxOTcsMjkgQzE5NS44OTUsMjkgMTk1LDI4LjEwNSAxOTUsMjcgTDE5NSwxOCBMMjEwLDE4IEwyMTAsMTggTDIxMCwxOCBaIE0yMDcsMTMuOTk5NDk5OSBMMjA3LDEzLjAwMDI1MDEgQzIwNywxMi40NDgxMTIgMjA2LjU1MiwxMiAyMDYsMTIgTDIwNSwxMiBDMjA0LjQ0OCwxMiAyMDQsMTIuNDQ4MTEyIDIwNCwxMy4wMDAyNTAxIEwyMDQsMTMuOTk5NDk5OSBMMjAxLDEzLjk5OTQ5OTkgTDIwMSwxMy4wMDAyNTAxIEMyMDEsMTIuNDQ4MTEyIDIwMC41NTIsMTIgMjAwLDEyIEwxOTksMTIgQzE5OC40NDgsMTIgMTk4LDEyLjQ0ODExMiAxOTgsMTMuMDAwMjUwMSBMMTk4LDEzLjk5OTQ5OTkgTDE5NywxMy45OTk0OTk5IEMxOTUuODk1LDEzLjk5OTQ5OTkgMTk1LDE0Ljg5NDcyMzcgMTk1LDE2IEwyMTAsMTYgQzIxMCwxNC44OTQ3MjM3IDIwOS4xMDUsMTMuOTk5NDk5OSAyMDgsMTMuOTk5NDk5OSBMMjA3LDEzLjk5OTQ5OTkgTDIwNywxMy45OTk0OTk5IEwyMDcsMTMuOTk5NDk5OSBaIiBpZD0iQ2FsZW5kYXIiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');\n  background-repeat: no-repeat;\n  }\n.btn {\n  background-color: #f7a700;\n  height: 40px;\n  box-sizing: border-box;\n  border: none;\n  border-radius: 2px;\n  padding: 9px 80px 13px 80px;\n  font-size: 20px;\n  color: white;\n  cursor: pointer;\n}\n\n.header,\n.desc {\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 24px;\n}\n\n.contentHolder {\n  display: inline-flex;\n  gap: 15px;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  justify-content: space-between;\n  margin-top: 15px;\n}\n\n.desc {\n  font-size: 10px;\n  width: 242px;\n}\n\n@media (max-width: 990px) {\n  .desc {\n    width: 100%;\n  }\n  .inputHolder{\n    width: 220px;\n  }\n}\n\n@media (max-width: 769px) {\n  .block {\n    flex: 1 0 201px;\n    box-sizing: border-box;\n  }\n\n  .block:nth-child(-n+2) {\n    order: 0;\n  }\n\n  button {\n    flex: 1 0 240px;\n  }\n\n  \n  #dateHolder {\n    flex-wrap: wrap;\n  }\n\n  .block:nth-child(3) {\n    flex: 1 0 100%;\n  }\n}\n\n@media (max-width: 462px) {\n  .header {\n    font-size: 18px;\n  }\n\n  .block {\n    flex: 1 0 110px;\n  }\n    \n  .contentHolder {\n    flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 340px) {\n  #widget {\n    padding: 5px 10px 15px 10px;\n  }\n  .block{\n  flex: unset;\n  }\n  .inputHolder,\n  .btn {\n    width: 100%;\n  }\n\n  .desc {\n    width: 100%;\n    order: 2\n  }\n\n  #dateHolder {\n    gap: 10px;\n    order:1 ;\n  }\n\n  .btn {\n    padding: 9px 20px 13px 20px;\n  }\n}`\n\n\n//# sourceURL=webpack://form-widget/./src/style.js?");

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