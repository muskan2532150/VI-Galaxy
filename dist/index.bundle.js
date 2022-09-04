/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/scss/main.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/scss/main.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: \\\"Ubuntu\\\", sans-serif;\\n  font-weight: 700;\\n  scroll-behavior: smooth;\\n}\\n\\n/* utility */\\nhtml.sr #home {\\n  visibility: hidden;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  position: fixed;\\n  background-color: rgb(255, 255, 255);\\n  top: 0;\\n  width: 90%;\\n  padding-inline: 5%;\\n}\\nnav a {\\n  text-decoration: none;\\n  text-shadow: 9px 8px 9px black;\\n}\\nnav a img {\\n  font-size: 2.5vw;\\n  transform: skewX(9deg);\\n  text-decoration: none;\\n}\\nnav ul {\\n  display: flex;\\n  justify-content: end;\\n  align-items: center;\\n  list-style: none;\\n  gap: 10%;\\n  font-size: 1.7vw;\\n}\\n\\n.pop-up-overlay {\\n  display: none;\\n  justify-content: start;\\n  align-items: center;\\n  padding-top: 1rem;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100%;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: 10000;\\n  overflow: auto;\\n  background-color: hsla(0deg, 0%, 0%, 0.836);\\n  transition: opacity 0.5s ease-in-out;\\n}\\n\\n.main-pop {\\n  position: relative;\\n  flex-direction: column;\\n  display: none;\\n  background-color: rgb(255, 255, 255);\\n  min-height: auto;\\n  min-width: 40vw;\\n  width: 70vw;\\n  border: none;\\n  border-radius: 1rem;\\n  box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.575);\\n}\\n.main-pop p {\\n  padding: 0.4rem 1rem;\\n  margin: 0;\\n}\\n.main-pop h2,\\n.main-pop h3 {\\n  font-size: 2rem;\\n}\\n\\n.timecont {\\n  display: flex;\\n  justify-content: start;\\n  align-items: start;\\n  flex-direction: column;\\n  padding-left: 5%;\\n  font-size: 1.2rem;\\n}\\n\\n.fa-xmark {\\n  position: absolute;\\n  color: rgba(238, 110, 5, 0.87);\\n  font-size: 2rem;\\n  cursor: pointer;\\n  align-self: end;\\n  padding: 2rem;\\n  text-align: center;\\n}\\n.fa-xmark:hover {\\n  color: rgba(238, 110, 5, 0.87);\\n}\\n\\n.img-head {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100%;\\n}\\n.img-head img {\\n  width: 100%;\\n  height: -webkit-fit-content;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n  border-radius: 0.8rem 0.8rem 0 0;\\n}\\n\\n.item_info {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: start;\\n  flex-direction: row;\\n  width: 100%;\\n  height: 100%;\\n  font-size: 1.2rem;\\n  font-weight: 600;\\n  margin-bottom: 2rem;\\n}\\n\\n.commentCount {\\n  align-self: center;\\n  font-size: 2rem;\\n  font-weight: 700;\\n  margin: 0;\\n  padding: 1%;\\n}\\n\\n.leave-cut {\\n  align-self: center;\\n  margin: 0;\\n  padding: 1.5rem;\\n}\\n\\n.comment-content {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100%;\\n  font-size: 1.2rem;\\n  font-weight: 600;\\n  gap: 0.3rem;\\n}\\n\\n.comment {\\n  margin: 0;\\n  border: none;\\n  text-align: start;\\n  padding: 0.5rem 1rem;\\n  border-radius: 0.2rem;\\n  background-color: rgba(238, 110, 5, 0.651);\\n  color: rgb(255, 255, 255);\\n  width: 60%;\\n}\\n.comment:nth-child(odd) {\\n  background-color: rgba(134, 133, 133, 0.37);\\n  color: hsla(0deg, 0%, 0%, 0.836);\\n}\\n\\n.commentFormsec {\\n  display: flex;\\n  justify-content: start;\\n  align-items: start;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100%;\\n  font-size: 1.2rem;\\n  font-weight: 600;\\n}\\n.commentFormsec form {\\n  display: flex;\\n  justify-content: center;\\n  align-items: start;\\n  flex-direction: column;\\n  width: 50%;\\n  padding-inline: 12rem;\\n  gap: 0.5rem;\\n}\\n.commentFormsec form input {\\n  padding-inline: 2%;\\n  width: 25vw;\\n  height: 5vh;\\n  font-size: 1.2rem;\\n  border: none;\\n  box-shadow: 0 0 15px 0 rgba(160, 160, 160, 0.87);\\n  border-radius: 0.5rem;\\n}\\n.commentFormsec form input:focus {\\n  outline: none;\\n}\\n.commentFormsec form textarea {\\n  padding: 2%;\\n  width: 45vw;\\n  height: 15vh;\\n  font-size: 1.2rem;\\n  border: none;\\n  box-shadow: 0 0 15px 0 rgba(160, 160, 160, 0.87);\\n  border-radius: 0.5rem;\\n}\\n.commentFormsec form textarea:focus {\\n  outline: none;\\n}\\n.commentFormsec form button {\\n  width: 10vw;\\n  height: 5vh;\\n  font-size: 1.2rem;\\n  margin-bottom: 15%;\\n  border: none;\\n  box-shadow: 0 0 15px 0 rgba(160, 160, 160, 0.87);\\n  border-radius: 0.5rem;\\n  background-color: rgba(238, 110, 5, 0.87);\\n  color: rgb(255, 255, 255);\\n  cursor: pointer;\\n}\\n\\n.sumpara {\\n  align-self: center;\\n  font-size: 1.2rem;\\n  font-weight: 600;\\n  margin: 0;\\n  padding: 1.2rem 3em;\\n  margin-inline: 5rem;\\n  border-radius: 1rem;\\n  box-shadow: 0 0 15px 0 rgba(243, 100, 17, 0.733);\\n  border: none;\\n}\\n\\n.cards {\\n  box-shadow: 0 0 19px 7px rgba(0, 0, 0, 0.1);\\n  border: none;\\n  border-radius: 1rem;\\n}\\n.cards img {\\n  width: 100%;\\n  border-radius: 7% 7% 0 0;\\n}\\n.cards > div {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n  margin: 5%;\\n}\\n.cards > div > div {\\n  display: flex;\\n  justify-content: end;\\n  align-items: end;\\n  flex-direction: column;\\n}\\n.cards > div > div p {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-weight: 600;\\n  color: rgba(238, 110, 5, 0.87);\\n  width: -webkit-max-content;\\n  width: -moz-max-content;\\n  width: max-content;\\n  font-size: 1.1vw;\\n}\\n.cards > div h3 {\\n  font-size: 1.7vw;\\n  margin: 0;\\n}\\n.cards > div i {\\n  font-size: 1.4vw;\\n}\\n.cards > div i:hover {\\n  color: rgba(238, 110, 5, 0.87);\\n}\\n\\n.btndiv {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n\\n.btncomment,\\n.btnreserv {\\n  background-color: rgba(238, 110, 5, 0.87);\\n  color: hsl(0deg, 0%, 0%);\\n  font-size: 1.2vw;\\n  font-weight: 700;\\n  width: 95%;\\n  border: none;\\n  border-radius: 2rem;\\n  text-align: center;\\n  height: -webkit-fit-content;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n  padding: 1rem 0;\\n  margin-bottom: 1rem;\\n}\\n\\n#home {\\n  pointer-events: none;\\n  padding-top: 6%;\\n}\\n#home > div {\\n  display: grid;\\n  grid-template-columns: 30% 30% 30%;\\n  margin: 30px;\\n  gap: 1.5rem;\\n  padding-inline: 15%;\\n  margin-bottom: 0;\\n}\\n#home i,\\n#home button {\\n  pointer-events: visible;\\n}\\n\\nmain > div:last-child {\\n  margin-bottom: 7%;\\n}\\n\\n.scrollbtn {\\n  display: block;\\n  float: right;\\n  width: 6%;\\n  padding: 1%;\\n  border: 0;\\n  background-color: transparent;\\n  font-size: 1.5vw;\\n}\\n\\nfooter {\\n  padding: 1%;\\n  text-align: center;\\n  border-top: 2px solid;\\n  font-size: 2vw;\\n}\\n\\n@media (max-width: 900px) {\\n  .commentFormsec form {\\n    padding-inline: 3rem;\\n  }\\n  .commentFormsec form textarea {\\n    width: auto;\\n  }\\n  .commentFormsec form button {\\n    width: 30vw;\\n  }\\n  .sumpara {\\n    margin: 16px;\\n  }\\n  .commentCount {\\n    padding-bottom: 10px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vi-galaxy/./src/scss/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/main.css":
/*!***************************!*\
  !*** ./src/scss/main.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/scss/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://vi-galaxy/./src/scss/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://vi-galaxy/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.css */ \"./src/scss/main.css\");\n/* harmony import */ var _module_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/card.js */ \"./src/module/card.js\");\n/* harmony import */ var _module_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/scroll.js */ \"./src/module/scroll.js\");\n/* harmony import */ var _module_scroll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_module_scroll_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n(0,_module_card_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/index.js?");

/***/ }),

/***/ "./src/module/Import.js":
/*!******************************!*\
  !*** ./src/module/Import.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arr\": () => (/* binding */ arr),\n/* harmony export */   \"home\": () => (/* binding */ home),\n/* harmony export */   \"overLay\": () => (/* binding */ overLay),\n/* harmony export */   \"pop\": () => (/* binding */ pop)\n/* harmony export */ });\nconst home = document.querySelector('#home');\r\nconst arr = [];\r\nconst pop = document.querySelector('.pop-up-overlay');\r\nconst overLay = document.querySelector('.pop-up-overlay');\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/Import.js?");

/***/ }),

/***/ "./src/module/LikeApi.js":
/*!*******************************!*\
  !*** ./src/module/LikeApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Import_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Import.js */ \"./src/module/Import.js\");\n\r\n\r\nconst urlLike = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UUylOKb37iCx1pUBEwLt/likes';\r\n\r\nconst Like = class {\r\n  static getLike = async () => {\r\n    await fetch(urlLike)\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        const pText = document.querySelectorAll('.card-p');\r\n        [...data].forEach((el, index) => {\r\n          [...pText][index].innerHTML = `${el.likes} likes`;\r\n        });\r\n      });\r\n  };\r\n\r\n  static setLike = async (id) => {\r\n    await fetch(urlLike, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: `${id}`,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n  };\r\n};\r\n\r\n_Import_js__WEBPACK_IMPORTED_MODULE_0__.home.addEventListener('click',async (e) => {\r\n  if (e.target.className.toString() === 'fa-solid fa-heart'.toString()) {\r\n    const { id } = e.target.parentNode.parentNode.parentNode;\r\n   await Like.setLike(id);\r\n    const error = document.querySelectorAll('.cards p');\r\n    [...error].forEach(async (el) => {\r\n      el.innerHTML = '';\r\n     await Like.getLike();\r\n    });\r\n  }\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Like);\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/LikeApi.js?");

/***/ }),

/***/ "./src/module/card.js":
/*!****************************!*\
  !*** ./src/module/card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ceateElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ceateElement.js */ \"./src/module/ceateElement.js\");\n/* harmony import */ var _Import_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Import.js */ \"./src/module/Import.js\");\n/* harmony import */ var _LikeApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LikeApi.js */ \"./src/module/LikeApi.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.js */ \"./src/module/popup.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter.js */ \"./src/module/counter.js\");\n/* harmony import */ var _structure_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./structure.js */ \"./src/module/structure.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst url = 'https://api.tvmaze.com/shows/1/episodes?specials=1';\r\n\r\nconst createcard = (data) => {\r\n  const mainDiv = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', undefined, _Import_js__WEBPACK_IMPORTED_MODULE_1__.home);\r\n  _LikeApi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getLike();\r\n  [...data].forEach((el, index) => {\r\n    if (el.image?.medium) {\r\n      _Import_js__WEBPACK_IMPORTED_MODULE_1__.arr[index] = 0;\r\n      _structure_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].cardStruct(el, mainDiv, index);\r\n      const mainDivpop = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', ['main-pop'], _Import_js__WEBPACK_IMPORTED_MODULE_1__.pop);\r\n      mainDivpop.id = index + 90;\r\n      _structure_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].popStruct(el, index, mainDivpop);\r\n    }\r\n    // Scroll Js\r\n    ScrollReveal().reveal('.cards',{ delay: 500 });\r\n  });\r\n\r\n  // count no. of cards and display with Home\r\n  const link = document.querySelectorAll('.link');\r\n  link[0].innerHTML = `Home(${(0,_counter_js__WEBPACK_IMPORTED_MODULE_4__.counterItem)(_Import_js__WEBPACK_IMPORTED_MODULE_1__.arr)})`;\r\n\r\n  const mainPop = document.querySelectorAll('.main-pop');\r\n\r\n  // pop-up Display Event\r\n  const btnComment = document.querySelectorAll('.btncomment');\r\n  [...btnComment].forEach((btn) => {\r\n    btn.addEventListener('click', (e) => {\r\n      _Import_js__WEBPACK_IMPORTED_MODULE_1__.overLay.style.display = 'flex';\r\n      const commentId = e.target.parentNode.parentNode.id;\r\n      mainPop[commentId].style.display = 'flex';\r\n      document.body.style.overflow = 'hidden';\r\n    });\r\n  });\r\n\r\n  // Comment/Sumit btn in form event\r\n  const Form = document.querySelectorAll('.form');\r\n  [...Form].forEach((forms, index) => {\r\n    forms.addEventListener('submit', async (e) => {\r\n      e.preventDefault();\r\n      const formId = Number(e.target.id);\r\n      if (index === formId - 40) {\r\n        const names = document.querySelectorAll('.names');\r\n        const comm = document.querySelectorAll('.textarea');\r\n        await _popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].postComment(formId - 40, names[index].value, comm[index].value);\r\n        const counterAll = document.querySelectorAll('.commentCount');\r\n        const commentAll = document.querySelectorAll('.comment-content');\r\n        commentAll[formId - 40].innerHTML = ' ';\r\n        counterAll[formId - 40].innerHTML = ' ';\r\n        await _popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getComment(formId - 40, counterAll[formId - 40]);\r\n        forms.reset();\r\n      }\r\n    });\r\n  });\r\n\r\n  // Close pop-up event\r\n  const closeBtn = document.querySelectorAll('.fa-xmark');\r\n  [...closeBtn].forEach((close) => {\r\n    close.addEventListener('click', (e) => {\r\n      _Import_js__WEBPACK_IMPORTED_MODULE_1__.overLay.style.display = 'none';\r\n      mainPop[(e.target.parentNode.id) - 90].style.display = 'none';\r\n      document.body.style.overflow = 'visible';\r\n    });\r\n  });\r\n};\r\n\r\nconst getData = async () => {\r\n  await fetch(url)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      createcard(data);\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/card.js?");

/***/ }),

/***/ "./src/module/ceateElement.js":
/*!************************************!*\
  !*** ./src/module/ceateElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst create = (el, classes, parent) => {\r\n  const createEle = document.createElement(el);\r\n  if (classes !== undefined) {\r\n    classes.forEach((element) => createEle.classList.add(element));\r\n  }\r\n  parent.appendChild(createEle);\r\n\r\n  return createEle;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/ceateElement.js?");

/***/ }),

/***/ "./src/module/counter.js":
/*!*******************************!*\
  !*** ./src/module/counter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterComment\": () => (/* binding */ counterComment),\n/* harmony export */   \"counterItem\": () => (/* binding */ counterItem)\n/* harmony export */ });\nconst counterItem = (arr) => arr.length;\r\n\r\nconst counterComment = (comm) => comm.length;\r\n\r\n\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/counter.js?");

/***/ }),

/***/ "./src/module/popup.js":
/*!*****************************!*\
  !*** ./src/module/popup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ceateElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ceateElement.js */ \"./src/module/ceateElement.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ \"./src/module/counter.js\");\n\r\n\r\n\r\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UUylOKb37iCx1pUBEwLt/comments';\r\n\r\nconst Comment = class {\r\n  static postComment = async (id, name, comment) => {\r\n    await fetch(url, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: `${id}`,\r\n        username: `${name}`,\r\n        comment: `${comment}`,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n  };\r\n\r\n  static displayComment = async (data, id, h31) => {\r\n    const comment = document.querySelectorAll('.comment-content');\r\n    if ((0,_counter_js__WEBPACK_IMPORTED_MODULE_1__.counterComment)([...data])) {\r\n      [...data].forEach((el) => {\r\n        const pText = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', ['comment'], comment[id]);\r\n        pText.append(`${el.creation_date}  ${el.username} : ${el.comment} `);\r\n      });\r\n      h31.append(`Comments(${(0,_counter_js__WEBPACK_IMPORTED_MODULE_1__.counterComment)([...data])})`);\r\n    }\r\n  };\r\n\r\n  static getComment = async (id, h31) => {\r\n    await fetch(`${url}?item_id=${id}`)\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        if (!data.error)\r\n          Comment.displayComment(data, id, h31);\r\n      });\r\n  };\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/popup.js?");

/***/ }),

/***/ "./src/module/scroll.js":
/*!******************************!*\
  !*** ./src/module/scroll.js ***!
  \******************************/
/***/ (() => {

eval("const scrollBtn = document.querySelector('.scrollbtn');\r\n\r\nconst scrollbtn = () =>{\r\n    if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5)\r\n    scrollBtn.style.display = 'block';\r\n    else\r\n    scrollBtn.style.display = 'none';\r\n}\r\n\r\nwindow.onscroll = () => {\r\n    scrollbtn();\r\n}\r\n\r\nscrollBtn.addEventListener('click',()=>{\r\n    document.body.scrollTop = 0;\r\n    document.documentElement.scrollTop = 0;\r\n})\n\n//# sourceURL=webpack://vi-galaxy/./src/module/scroll.js?");

/***/ }),

/***/ "./src/module/structure.js":
/*!*********************************!*\
  !*** ./src/module/structure.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/module/popup.js\");\n/* harmony import */ var _ceateElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceateElement.js */ \"./src/module/ceateElement.js\");\n\r\n\r\n\r\nconst Structure = class{\r\n// Create structure for Cards in Home page\r\n static cardStruct = (el, mainDiv, index) => {\r\n  const cards = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['cards'], mainDiv);\r\n  cards.id = index;\r\n  const img = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('img', ['card-img'], cards);\r\n  img.src = el.image.medium;\r\n  img.alt = el.name;\r\n  const cardBody = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', undefined, cards);\r\n  const h1Text = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h3', undefined, cardBody);\r\n  h1Text.append(el.name);\r\n  const likeDiv = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', undefined, cardBody);\r\n  (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('i', ['fa-solid', 'fa-heart'], likeDiv);\r\n  (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', ['card-p'], likeDiv);\r\n  const btnDiv = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['btndiv'], cards);\r\n  const buttonText = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', ['btncomment'], btnDiv);\r\n  buttonText.append('Comment');\r\n  buttonText.type = 'button';\r\n  const buttonText1 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', ['btnreserv'], btnDiv);\r\n  buttonText1.append('Reservation');\r\n  buttonText1.type = 'button';\r\n};\r\n\r\n// Create structure for Pop up window\r\n static popStruct = (el, index, mainDivpop) => {\r\n  (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('i', ['fa-solid', 'fa-xmark'], mainDivpop);\r\n  const imgDiv = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['img-head'], mainDivpop);\r\n  const img = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('img', undefined, imgDiv);\r\n  img.src = el.image.original;\r\n  img.alt = el.name;\r\n  const h3 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h3', ['popupHeader'], imgDiv);\r\n  h3.append(el.name);\r\n  const para = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['summary'], mainDivpop);\r\n  const pText = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', ['sumpara'], para);\r\n  pText.append(el.summary);\r\n  const itemDiv = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['item-info'], mainDivpop);\r\n  const span = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('span', ['timecont'], itemDiv);\r\n  const p1 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', undefined, span);\r\n  p1.append(`Season: ${el.season}`);\r\n  const p2 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', undefined, span);\r\n  p2.append(`Airdate: ${el.airdate}`);\r\n  const span1 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('span', ['timecont'], itemDiv);\r\n  const p3 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', undefined, span1);\r\n  const p4 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', undefined, span1);\r\n  p3.append(`Rating:  ${el.rating.average}`);\r\n  p4.append(`Runtime:  ${el.runtime}m`);\r\n  const h31 = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h3', ['commentCount'], mainDivpop);\r\n  (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['comment-content'], mainDivpop);\r\n  const commentDiv = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', ['commentFormsec'], mainDivpop);\r\n  const h3Text = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h3', ['leave-cut'], commentDiv);\r\n  h3Text.append('Leave a comment');\r\n  const form = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('form', ['form'], commentDiv);\r\n  form.id = `${index + 40}`;\r\n  const text = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('input', ['names'], form);\r\n  text.type = 'text';\r\n  text.setAttribute('required', '');\r\n  text.placeholder = 'Your name please';\r\n  const input = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('textarea', ['textarea'], form);\r\n  input.name = 'comment';\r\n  input.setAttribute('required', '');\r\n  input.cols = 30; input.rows = 10;\r\n  input.placeholder = 'Your comment in here';\r\n  const button = (0,_ceateElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', undefined, form);\r\n  button.type = 'submit';\r\n  button.name = 'comment';\r\n  button.append('Comment');\r\n  _popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComment(index, h31);\r\n};\r\n\r\n};\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Structure);\r\n\n\n//# sourceURL=webpack://vi-galaxy/./src/module/structure.js?");

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