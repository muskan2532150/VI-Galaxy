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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/scss/main.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/scss/main.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: \\\"Ubuntu\\\", sans-serif;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding-inline: 5%;\\r\\n}\\r\\n\\r\\nnav a {\\r\\n  text-decoration: none;\\r\\n  text-shadow: 9px 8px 9px black;\\r\\n}\\r\\n\\r\\nnav a img {\\r\\n  font-size: 2.5vw;\\r\\n  transform: skewX(9deg);\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  justify-content: end;\\r\\n  align-items: center;\\r\\n  list-style: none;\\r\\n  gap: 10%;\\r\\n  font-size: 1.7vw;\\r\\n}\\r\\n\\r\\n.pop-up-overlay {\\r\\n  display: none;\\r\\n  justify-content: start;\\r\\n  align-items: center;\\r\\n  padding-top: 1rem;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: 10000;\\r\\n  overflow: auto;\\r\\n  background-color: hsla(0deg, 0%, 0%, 0.836);\\r\\n  transition: opacity 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.main-pop {\\r\\n  position: relative;\\r\\n  flex-direction: column;\\r\\n  display: none;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  min-height: auto;\\r\\n  min-width: 40vw;\\r\\n  width: 70vw;\\r\\n  border: none;\\r\\n  border-radius: 1rem;\\r\\n  box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.575);\\r\\n}\\r\\n\\r\\n.main-pop p {\\r\\n  padding: 0.4rem 1rem;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.main-pop h2,\\r\\n.main-pop h3 {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.timecont {\\r\\n  display: flex;\\r\\n  justify-content: start;\\r\\n  align-items: start;\\r\\n  flex-direction: column;\\r\\n  padding-left: 5%;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.fa-xmark {\\r\\n  position: absolute;\\r\\n  color: rgba(238, 110, 5, 0.87);\\r\\n  font-size: 2rem;\\r\\n  cursor: pointer;\\r\\n  align-self: end;\\r\\n  padding: 2rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.fa-xmark:hover {\\r\\n  color: rgba(238, 110, 5, 0.87);\\r\\n}\\r\\n\\r\\n.img-head {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.img-head img {\\r\\n  width: 100%;\\r\\n  height: -webkit-fit-content;\\r\\n  height: -moz-fit-content;\\r\\n  height: fit-content;\\r\\n  border-radius: 0.8rem 0.8rem 0 0;\\r\\n}\\r\\n\\r\\n.item_info {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: start;\\r\\n  flex-direction: row;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 600;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n.commentCount {\\r\\n  align-self: center;\\r\\n  font-size: 2rem;\\r\\n  font-weight: 700;\\r\\n  margin: 0;\\r\\n  padding: 1%;\\r\\n}\\r\\n\\r\\n.leave-cut {\\r\\n  align-self: center;\\r\\n  margin: 0;\\r\\n  padding: 1.5rem;\\r\\n}\\r\\n\\r\\n.comment-content {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 600;\\r\\n  gap: 0.3rem;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  margin: 0;\\r\\n  border: none;\\r\\n  text-align: start;\\r\\n  padding: 0.5rem 1rem;\\r\\n  border-radius: 0.2rem;\\r\\n  background-color: rgba(238, 110, 5, 0.651);\\r\\n  color: rgb(255, 255, 255);\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.comment:nth-child(odd) {\\r\\n  background-color: rgba(134, 133, 133, 0.37);\\r\\n  color: hsla(0deg, 0%, 0%, 0.836);\\r\\n}\\r\\n\\r\\n.commentFormsec {\\r\\n  display: flex;\\r\\n  justify-content: start;\\r\\n  align-items: start;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.commentFormsec form {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: start;\\r\\n  flex-direction: column;\\r\\n  width: 50%;\\r\\n  padding-inline: 12rem;\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n\\r\\n.commentFormsec form input {\\r\\n  padding-inline: 2%;\\r\\n  width: 25vw;\\r\\n  height: 5vh;\\r\\n  font-size: 1.2rem;\\r\\n  border: none;\\r\\n  box-shadow: 0 0 15px 0 rgba(160, 160, 160, 0.87);\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.commentFormsec form input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.commentFormsec form textarea {\\r\\n  padding: 2%;\\r\\n  width: 45vw;\\r\\n  height: 15vh;\\r\\n  font-size: 1.2rem;\\r\\n  border: none;\\r\\n  box-shadow: 0 0 15px 0 rgba(160, 160, 160, 0.87);\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.commentFormsec form textarea:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.commentFormsec form button {\\r\\n  width: 10vw;\\r\\n  height: 5vh;\\r\\n  font-size: 1.2rem;\\r\\n  margin-bottom: 15%;\\r\\n  border: none;\\r\\n  box-shadow: 0 0 15px 0 rgba(160, 160, 160, 0.87);\\r\\n  border-radius: 0.5rem;\\r\\n  background-color: rgba(238, 110, 5, 0.87);\\r\\n  color: rgb(255, 255, 255);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.sumpara {\\r\\n  align-self: center;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 600;\\r\\n  margin: 0;\\r\\n  padding: 1.2rem 3em;\\r\\n  margin-inline: 5rem;\\r\\n  border-radius: 1rem;\\r\\n  box-shadow: 0 0 15px 0 rgba(243, 100, 17, 0.733);\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.cards {\\r\\n  box-shadow: 0 0 19px 7px rgba(0, 0, 0, 0.1);\\r\\n  border: none;\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n\\r\\n.cards img {\\r\\n  width: 100%;\\r\\n  border-radius: 7% 7% 0 0;\\r\\n}\\r\\n\\r\\n.cards > div {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: flex-start;\\r\\n  margin: 5%;\\r\\n}\\r\\n\\r\\n.cards > div > div {\\r\\n  display: flex;\\r\\n  justify-content: end;\\r\\n  align-items: end;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.cards > div > div p {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  font-weight: 600;\\r\\n  color: rgba(238, 110, 5, 0.87);\\r\\n  width: -webkit-max-content;\\r\\n  width: -moz-max-content;\\r\\n  width: max-content;\\r\\n  font-size: 1.1vw;\\r\\n}\\r\\n\\r\\n.cards > div h3 {\\r\\n  font-size: 1.7vw;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.cards > div i {\\r\\n  font-size: 1.4vw;\\r\\n}\\r\\n\\r\\n.cards > div i:hover {\\r\\n  color: rgba(238, 110, 5, 0.87);\\r\\n}\\r\\n\\r\\n.btndiv {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.btncomment,\\r\\n.btnreserv {\\r\\n  background-color: rgba(238, 110, 5, 0.87);\\r\\n  color: hsl(0deg, 0%, 0%);\\r\\n  font-size: 1.2vw;\\r\\n  font-weight: 700;\\r\\n  width: 95%;\\r\\n  border: none;\\r\\n  border-radius: 2rem;\\r\\n  text-align: center;\\r\\n  height: -webkit-fit-content;\\r\\n  height: -moz-fit-content;\\r\\n  height: fit-content;\\r\\n  padding: 1rem 0;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n#home {\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n#home > div {\\r\\n  display: grid;\\r\\n  grid-template-columns: 30% 30% 30%;\\r\\n  margin: 30px;\\r\\n  gap: 1.5rem;\\r\\n  padding-inline: 15%;\\r\\n}\\r\\n\\r\\n#home i,\\r\\n#home button {\\r\\n  pointer-events: visible;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  padding: 2%;\\r\\n  text-align: center;\\r\\n  border-top: 2px solid;\\r\\n  font-size: 2vw;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vi-galaxy/./src/scss/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/main.css":
/*!***************************!*\
  !*** ./src/scss/main.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/scss/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://vi-galaxy/./src/scss/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.css */ \"./src/scss/main.css\");\n/* harmony import */ var _module_CardApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/CardApi.js */ \"./src/module/CardApi.js\");\n\r\n\r\n\r\n(0,_module_CardApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/index.js?");

/***/ }),

/***/ "./src/module/CardApi.js":
/*!*******************************!*\
  !*** ./src/module/CardApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ceateElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ceateElement.js */ \"./src/module/ceateElement.js\");\n/* harmony import */ var _Import_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Import.js */ \"./src/module/Import.js\");\n/* harmony import */ var _LikeApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LikeApi.js */ \"./src/module/LikeApi.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.js */ \"./src/module/popup.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter.js */ \"./src/module/counter.js\");\n/* harmony import */ var _structure_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./structure.js */ \"./src/module/structure.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst date = new Date();\r\nconst todayDate = date.toLocaleDateString('en-GB').split('/').join('-');\r\n\r\nconst url = 'https://api.tvmaze.com/shows/1/episodes?specials=1';\r\n\r\nconst createcard = (data) => {\r\n  const mainDiv = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', undefined, _Import_js__WEBPACK_IMPORTED_MODULE_1__.Home);\r\n  (0,_LikeApi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  [...data].forEach((el, index) => {\r\n    if (el.image?.medium) {\r\n      _Import_js__WEBPACK_IMPORTED_MODULE_1__.arr[index] = 0;\r\n      _counter_js__WEBPACK_IMPORTED_MODULE_4__.counter[index] = 0;\r\n      (0,_structure_js__WEBPACK_IMPORTED_MODULE_5__.homePage)(el, mainDiv, index);\r\n      const mainDivpop = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', ['main-pop'], _Import_js__WEBPACK_IMPORTED_MODULE_1__.pop);\r\n      mainDivpop.id = index + 90;\r\n      (0,_structure_js__WEBPACK_IMPORTED_MODULE_5__.popStruct)(el, index, mainDivpop);\r\n    }\r\n  });\r\n\r\n  const link = document.querySelectorAll('.link');\r\n  link[0].innerHTML = `Home(${(0,_counter_js__WEBPACK_IMPORTED_MODULE_4__.counterItem)(_Import_js__WEBPACK_IMPORTED_MODULE_1__.arr)})`;\r\n\r\n  const mainPop = document.querySelectorAll('.main-pop');\r\n\r\n  const btnComment = document.querySelectorAll('.btncomment');\r\n  [...btnComment].forEach((btn) => {\r\n    btn.addEventListener('click', (e) => {\r\n      _Import_js__WEBPACK_IMPORTED_MODULE_1__.overLay.style.display = 'flex';\r\n      const commentId = e.target.parentNode.parentNode.id;\r\n      mainPop[commentId].style.display = 'flex';\r\n      document.body.style.overflow = 'hidden';\r\n    });\r\n  });\r\n\r\n  const Form = document.querySelectorAll('.form');\r\n  [...Form].forEach((forms, index) => {\r\n    forms.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n      const formId = Number(e.target.id);\r\n      if (index === formId - 40) {\r\n        const names = document.querySelectorAll('.names');\r\n        const comm = document.querySelectorAll('.textarea');\r\n        (0,_popup_js__WEBPACK_IMPORTED_MODULE_3__.setComment)(formId - 40, names[index].value, comm[index].value);\r\n        commentShow(formId);\r\n        forms.reset();\r\n      }\r\n    });\r\n  });\r\n\r\n  const closeBtn = document.querySelectorAll('.fa-xmark');\r\n  [...closeBtn].forEach((close) => {\r\n    close.addEventListener('click', (e) => {\r\n      _Import_js__WEBPACK_IMPORTED_MODULE_1__.overLay.style.display = 'none';\r\n      mainPop[(e.target.parentNode.id) - 90].style.display = 'none';\r\n      document.body.style.overflow = 'visible';\r\n    });\r\n  });\r\n};\r\n\r\nconst getData = async () => {\r\n  await fetch(url)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      createcard(data);\r\n    });\r\n};\r\n\r\nconst commentShow = async (formId)=> {\r\n        const counterAll = document.querySelectorAll('.commentCount');\r\n        const commentAll = document.querySelectorAll('.comment-content');\r\n        commentAll[formId - 40].innerHTML = ' ';\r\n        counterAll[formId - 40].innerHTML = ' ';\r\n\r\n       await (0,_popup_js__WEBPACK_IMPORTED_MODULE_3__.getComment)(formId-40,counterAll[formId-40]);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/CardApi.js?");

/***/ }),

/***/ "./src/module/Import.js":
/*!******************************!*\
  !*** ./src/module/Import.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home),\n/* harmony export */   \"arr\": () => (/* binding */ arr),\n/* harmony export */   \"overLay\": () => (/* binding */ overLay),\n/* harmony export */   \"pop\": () => (/* binding */ pop),\n/* harmony export */   \"unquieId\": () => (/* binding */ unquieId),\n/* harmony export */   \"url\": () => (/* binding */ url)\n/* harmony export */ });\nconst Home = document.querySelector('#home');\r\nconst arr = [];\r\nconst pop = document.querySelector('.pop-up-overlay');\r\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\r\nconst unquieId = 'HXiyRBssDCt7xgEOUDxr';\r\nconst overLay = document.querySelector('.pop-up-overlay');\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/Import.js?");

/***/ }),

/***/ "./src/module/LikeApi.js":
/*!*******************************!*\
  !*** ./src/module/LikeApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Import_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Import.js */ \"./src/module/Import.js\");\n\r\n\r\nconst urlLike = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UUylOKb37iCx1pUBEwLt/likes';\r\n\r\nconst getLike = async () => {\r\n  await fetch(urlLike)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      const pText = document.querySelectorAll('.card-p');\r\n      [...data].forEach((el, index) => {\r\n        [...pText][index].innerHTML = `${el.likes} likes`;\r\n      });\r\n    });\r\n};\r\n\r\nconst setLike = async (id) => {\r\n  await fetch(urlLike, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: `${id}`,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n\r\n_Import_js__WEBPACK_IMPORTED_MODULE_0__.Home.addEventListener('click', (e) => {\r\n  if (e.target.className.toString() === 'fa-solid fa-heart'.toString()) {\r\n    const { id } = e.target.parentNode.parentNode.parentNode;\r\n    setLike(id);\r\n    const error = document.querySelectorAll('.cards p');\r\n    [...error].forEach((el, index) => {\r\n      el.innerHTML = '';\r\n      getLike();\r\n    });\r\n  }\r\n});\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLike);\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/LikeApi.js?");

/***/ }),

/***/ "./src/module/ceateElement.js":
/*!************************************!*\
  !*** ./src/module/ceateElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst create = (el, classes, parent) => {\r\n  const createEle = document.createElement(el);\r\n  if (classes !== undefined) {\r\n    classes.forEach((element) => createEle.classList.add(element));\r\n  }\r\n  parent.appendChild(createEle);\r\n\r\n  return createEle;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/ceateElement.js?");

/***/ }),

/***/ "./src/module/counter.js":
/*!*******************************!*\
  !*** ./src/module/counter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counter\": () => (/* binding */ counter),\n/* harmony export */   \"counterItem\": () => (/* binding */ counterItem),\n/* harmony export */   \"countercomment\": () => (/* binding */ countercomment)\n/* harmony export */ });\nconst counterItem = (arr) => arr.length;\r\n\r\nconst countercomment = (comm) => comm.length;\r\n\r\nconst counter = [];\r\n\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/counter.js?");

/***/ }),

/***/ "./src/module/popup.js":
/*!*****************************!*\
  !*** ./src/module/popup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComment\": () => (/* binding */ getComment),\n/* harmony export */   \"setComment\": () => (/* binding */ setComment),\n/* harmony export */   \"showComment\": () => (/* binding */ showComment)\n/* harmony export */ });\n/* harmony import */ var _ceateElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ceateElement.js */ \"./src/module/ceateElement.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ \"./src/module/counter.js\");\n\r\n\r\n\r\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UUylOKb37iCx1pUBEwLt/comments';\r\nconst setComment = async (id, name, comment) => {\r\n await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: `${id}`,\r\n      username: `${name}`,\r\n      comment: `${comment}`,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n\r\nconst showComment = async (data, id, h31) => {\r\n  const comment = document.querySelectorAll('.comment-content');\r\n  if ((0,_counter_js__WEBPACK_IMPORTED_MODULE_1__.countercomment)([...data])) {\r\n    [...data].forEach((el) => {\r\n      console.log(el);\r\n      const pText = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', ['comment'], comment[id]);\r\n      pText.append(`${el.creation_date}  ${el.username} : ${el.comment} `);\r\n    });\r\n    _counter_js__WEBPACK_IMPORTED_MODULE_1__.counter[id] = (0,_counter_js__WEBPACK_IMPORTED_MODULE_1__.countercomment)([...data]);\r\n    h31.append(`Comments(${_counter_js__WEBPACK_IMPORTED_MODULE_1__.counter[id]})`);\r\n  }\r\n};\r\n\r\nconst getComment = async (id, h31) => {\r\n  await fetch(`${url}?item_id=${id}`)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      if(!data.error)\r\n      showComment(data, id, h31);\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/popup.js?");

/***/ }),

/***/ "./src/module/structure.js":
/*!*********************************!*\
  !*** ./src/module/structure.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage),\n/* harmony export */   \"popStruct\": () => (/* binding */ popStruct)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/module/popup.js\");\n/* harmony import */ var _ceateElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceateElement.js */ \"./src/module/ceateElement.js\");\n\r\n\r\n\r\nconst homePage = (el, mainDiv, index) => {\r\n  const cards = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['cards'], mainDiv);\r\n  cards.id = index;\r\n  const img = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('img', ['card-img'], cards);\r\n  img.src = el.image.medium;\r\n  img.alt = el.name;\r\n  const cardBody = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', undefined, cards);\r\n  const h1Text = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h3', undefined, cardBody);\r\n  h1Text.append(el.name);\r\n  const likeDiv = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', undefined, cardBody);\r\n  (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('i', ['fa-solid', 'fa-heart'], likeDiv);\r\n  (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', ['card-p'], likeDiv);\r\n  const btnDiv = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['btndiv'], cards);\r\n  const buttonText = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', ['btncomment'], btnDiv);\r\n  buttonText.append('Comment');\r\n  buttonText.type = 'button';\r\n  const buttonText1 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', ['btnreserv'], btnDiv);\r\n  buttonText1.append('Reservation');\r\n  buttonText1.type = 'button';\r\n};\r\n\r\nconst popStruct = (el, index, mainDivpop) => {\r\n  (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('i', ['fa-solid', 'fa-xmark'], mainDivpop);\r\n  const imgDiv = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['img-head'], mainDivpop);\r\n  const img = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('img', undefined, imgDiv);\r\n  img.src = el.image.original;\r\n  img.alt = el.name;\r\n  const h3 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h3', ['popupHeader'], imgDiv);\r\n  h3.append(el.name);\r\n  const para = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['summary'], mainDivpop);\r\n  const pText = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', ['sumpara'], para);\r\n  pText.append(el.summary);\r\n  const itemDiv = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['item-info'], mainDivpop);\r\n  const span = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('span', ['timecont'], itemDiv);\r\n  const p1 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', undefined, span);\r\n  p1.append(`Season: ${el.season}`);\r\n  const p2 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', undefined, span);\r\n  p2.append(`Airdate: ${el.airdate}`);\r\n  const span1 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('span', ['timecont'], itemDiv);\r\n  const p3 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', undefined, span1);\r\n  const p4 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', undefined, span1);\r\n  p3.append(`Rating:  ${el.rating.average}`);\r\n  p4.append(`Runtime:  ${el.runtime}m`);\r\n  const h31 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h3', ['commentCount'], mainDivpop);\r\n  (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['comment-content'], mainDivpop);\r\n  const commentDiv = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['commentFormsec'], mainDivpop);\r\n  const h3Text = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h3', ['leave-cut'], commentDiv);\r\n  h3Text.append('Leave a comment');\r\n  const form = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('form', ['form'], commentDiv);\r\n  form.id = `${index + 40}`;\r\n  const text = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('input', ['names'], form);\r\n  text.type = 'text';\r\n  text.setAttribute('required', '');\r\n  text.placeholder = 'Your name please';\r\n  const input = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('textarea', ['textarea'], form);\r\n  input.name = 'comment';\r\n  input.setAttribute('required', '');\r\n  input.cols = 30; input.rows = 10;\r\n  input.placeholder = 'Your comment in here';\r\n  const button = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', undefined, form);\r\n  button.type = 'submit';\r\n  button.name = 'comment';\r\n  button.append('Comment');\r\n  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(index, h31);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/structure.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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