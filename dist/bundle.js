/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --color-primary: #233d4d;
  --color-secondary: #fe7f2d;
  --color-accent: #e1e1e1;
  --color-danger: #ec0000;
  --font-primary: "Open Sans", sans-serif;
  --topbar-height: 50px;
  --sidebar-width: 250px;
  --content-height: calc(100vh - var(--topbar-height));
  --task-input-size: 1.1rem;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#topbar {
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  height: var(--topbar-height);
  background-color: var(--color-primary);
  padding-left: 2rem;
}

#topbar > button {
  padding: 5px;
}

#content-container {
  display: flex;
}

/* -- Top Bar -- */
#close-sidebar {
  border-radius: 3px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 40px;
  height: 40px;

  cursor: pointer;
}

#close-sidebar > div {
  height: 1px;
  width: 100%;
  background-color: white;
}

#close-sidebar:hover {
  background-color: #1d3442;
}

/* --- Nav --- */

nav {
  height: var(--content-height);
  border-right: var(--color-accent) solid 1px;
  padding: 2rem;
  width: var(--sidebar-width);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-shrink: 0;

  transition: margin-left 400ms ease-in-out;
}

nav > ul {
  list-style: none;
}

.sidebar-closed {
  margin-left: calc(-1 * var(--sidebar-width));
}

#new-list-button {
  margin-top: auto;
}

.nav-item {
  cursor: pointer;
}

.nav-item::before {
  content: "//";
  margin-right: 3px;
}

.nav-item:hover {
  color: var(--color-secondary);
}

/* --- Main Content --- */

main {
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.todo-list {
  list-style: none;
  width: min(100%, 500px);
}

.todo-list-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem;
  padding: 5px;
  background-color: #f0f0f0;
  transition: background-color 500ms;
}

.todo-list-item:hover {
  background-color: #dcdada;
}

.todo-list-item > p {
  cursor: pointer;
  margin-right: auto;
}

#action-bar {
  position: fixed;
  bottom: 0;
  margin-bottom: 2rem;
}

/* Dialog Menus */
#task-detail-dialog:focus {
  outline: none;
}

#task-detail-container {
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#task-detail-container > div {
  display: flex;
  gap: 3px;
  align-items: center;
}

#task-detail-header > .crossmark {
  margin-left: auto;
  width: 25px;
  height: 25px;
}

/* Component Styles */

.button {
  padding: 0.5rem;
  cursor: pointer;
}

.button:hover {
  background-color: #ffffff;
}

.button-circular {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.button-danger {
  background-color: var(--color-danger);
  padding: 0.5rem;
  border: 2px solid var(--color-danger);
  color: #ffffff;
}

.button-danger:hover {
  color: #000000;
}

.button-primary {
  background-color: var(--color-secondary);
  padding: 0.5rem;
  border: 2px solid var(--color-secondary);
}

.button-rectangular {
  border-radius: 50px;
}

.checkmark {
  height: var(--task-input-size);
  width: var(--task-input-size);
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #929292;
}

.crossmark {
  height: var(--task-input-size);
  width: var(--task-input-size);
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px var(--color-danger);
  background-color: var(--color-danger);
  border-radius: 2px;
  padding: 2px;
}

.crossmark::after {
  content: "\\D7";
  color: #ffffff;
  font-size: 1rem;
}

.crossmark:hover {
  background-color: white;
  cursor: pointer;
}

.crossmark:hover::after {
  color: var(--color-danger);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  gap: 1rem;
  flex-direction: row;
  justify-content: space-between;
}

.modal {
  margin: auto;
  border: none;
  border-radius: 5px;
  padding: 1rem;
}

.modal::backdrop {
  background-color: rgba(0, 0, 0, 0.434);
}

.divider {
  background-color: var(--color-accent);
  height: 1px;
  width: 100%;
}

.priority-indicator {
  height: 25px;
  width: 5px;
}

.priority-default {
  background-color: var(--color-primary);
}

.priority-high {
  background-color: var(--color-danger);
}

.priority-medium {
  background-color: var(--color-secondary);
}

.priority-low {
  background-color: green;
}

/* --- Tag Styles --- */

select {
  padding: 5px;
}

input {
  padding: 5px;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap\");\n\n:root {\n  --color-primary: #233d4d;\n  --color-secondary: #fe7f2d;\n  --color-accent: #e1e1e1;\n  --color-danger: #ec0000;\n  --font-primary: \"Open Sans\", sans-serif;\n  --topbar-height: 50px;\n  --sidebar-width: 250px;\n  --content-height: calc(100vh - var(--topbar-height));\n  --task-input-size: 1.1rem;\n  font-size: 18px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#topbar {\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  height: var(--topbar-height);\n  background-color: var(--color-primary);\n  padding-left: 2rem;\n}\n\n#topbar > button {\n  padding: 5px;\n}\n\n#content-container {\n  display: flex;\n}\n\n/* -- Top Bar -- */\n#close-sidebar {\n  border-radius: 3px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n\n  width: 40px;\n  height: 40px;\n\n  cursor: pointer;\n}\n\n#close-sidebar > div {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n}\n\n#close-sidebar:hover {\n  background-color: #1d3442;\n}\n\n/* --- Nav --- */\n\nnav {\n  height: var(--content-height);\n  border-right: var(--color-accent) solid 1px;\n  padding: 2rem;\n  width: var(--sidebar-width);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  flex-shrink: 0;\n\n  transition: margin-left 400ms ease-in-out;\n}\n\nnav > ul {\n  list-style: none;\n}\n\n.sidebar-closed {\n  margin-left: calc(-1 * var(--sidebar-width));\n}\n\n#new-list-button {\n  margin-top: auto;\n}\n\n.nav-item {\n  cursor: pointer;\n}\n\n.nav-item::before {\n  content: \"//\";\n  margin-right: 3px;\n}\n\n.nav-item:hover {\n  color: var(--color-secondary);\n}\n\n/* --- Main Content --- */\n\nmain {\n  padding: 2rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.todo-list {\n  list-style: none;\n  width: min(100%, 500px);\n}\n\n.todo-list-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0.5rem;\n  padding: 5px;\n  background-color: #f0f0f0;\n  transition: background-color 500ms;\n}\n\n.todo-list-item:hover {\n  background-color: #dcdada;\n}\n\n.todo-list-item > p {\n  cursor: pointer;\n  margin-right: auto;\n}\n\n#action-bar {\n  position: fixed;\n  bottom: 0;\n  margin-bottom: 2rem;\n}\n\n/* Dialog Menus */\n#task-detail-dialog:focus {\n  outline: none;\n}\n\n#task-detail-container {\n  width: 30vw;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#task-detail-container > div {\n  display: flex;\n  gap: 3px;\n  align-items: center;\n}\n\n#task-detail-header > .crossmark {\n  margin-left: auto;\n  width: 25px;\n  height: 25px;\n}\n\n/* Component Styles */\n\n.button {\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.button:hover {\n  background-color: #ffffff;\n}\n\n.button-circular {\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\n\n.button-danger {\n  background-color: var(--color-danger);\n  padding: 0.5rem;\n  border: 2px solid var(--color-danger);\n  color: #ffffff;\n}\n\n.button-danger:hover {\n  color: #000000;\n}\n\n.button-primary {\n  background-color: var(--color-secondary);\n  padding: 0.5rem;\n  border: 2px solid var(--color-secondary);\n}\n\n.button-rectangular {\n  border-radius: 50px;\n}\n\n.checkmark {\n  height: var(--task-input-size);\n  width: var(--task-input-size);\n  cursor: pointer;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: #929292;\n}\n\n.crossmark {\n  height: var(--task-input-size);\n  width: var(--task-input-size);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: solid 2px var(--color-danger);\n  background-color: var(--color-danger);\n  border-radius: 2px;\n  padding: 2px;\n}\n\n.crossmark::after {\n  content: \"\\D7\";\n  color: #ffffff;\n  font-size: 1rem;\n}\n\n.crossmark:hover {\n  background-color: white;\n  cursor: pointer;\n}\n\n.crossmark:hover::after {\n  color: var(--color-danger);\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.form-group {\n  display: flex;\n  gap: 1rem;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.modal {\n  margin: auto;\n  border: none;\n  border-radius: 5px;\n  padding: 1rem;\n}\n\n.modal::backdrop {\n  background-color: rgba(0, 0, 0, 0.434);\n}\n\n.divider {\n  background-color: var(--color-accent);\n  height: 1px;\n  width: 100%;\n}\n\n.priority-indicator {\n  height: 25px;\n  width: 5px;\n}\n\n.priority-default {\n  background-color: var(--color-primary);\n}\n\n.priority-high {\n  background-color: var(--color-danger);\n}\n\n.priority-medium {\n  background-color: var(--color-secondary);\n}\n\n.priority-low {\n  background-color: green;\n}\n\n/* --- Tag Styles --- */\n\nselect {\n  padding: 5px;\n}\n\ninput {\n  padding: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/appController.js":
/*!*****************************************!*\
  !*** ./src/components/appController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppController: () => (/* binding */ AppController)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/components/list.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/components/task.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/components/utilities.js");




const AppController = (() => {
  const makeList = (listName) => {
    return new _list__WEBPACK_IMPORTED_MODULE_0__.List(listName);
  };

  const addList = (Notebook, newList) => {
    Notebook.push(newList);
  };

  const deleteList = (Notebook, list) => {
    const confirmation = confirm("Are you sure you want to delete this list?");

    if (confirmation === false) {
      return 1;
    }

    const index = _utilities__WEBPACK_IMPORTED_MODULE_2__.Utilities.findIndexFromID(Notebook, list.id);

    Notebook.splice(index, 1);
  };

  const makeTask = (title, description, dueDate, priority) => {
    return new _task__WEBPACK_IMPORTED_MODULE_1__.Task(title, description, dueDate, priority);
  };

  const addTask = (Notebook, list, task) => {
    // const id = Number(listid);
    // const list = Utilities.findObjectFromID(Notebook, id);
    list.tasks.push(task);
  };

  const checkOffTask = (task) => {
    task.completed = !task.completed;
  };

  const deleteTask = (list, taskid) => {
    const confirmation = confirm("Are you sure you want to delete this task?");

    if (confirmation === false) {
      return 1;
    }

    const index = _utilities__WEBPACK_IMPORTED_MODULE_2__.Utilities.findIndexFromID(list.tasks, taskid);

    list.tasks.splice(index, 1);
  };

  return {
    makeList,
    addList,
    deleteList,
    makeTask,
    addTask,
    checkOffTask,
    deleteTask,
  };
})();


/***/ }),

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/components/utilities.js");


class List {
  constructor(name) {
    this.id = _utilities__WEBPACK_IMPORTED_MODULE_0__.Utilities.generateID();
    this.name = name;
    this.tasks = [];
  }
}


/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/components/utilities.js");


class Task {
  constructor(title, description, dueDate, priority) {
    this.id = _utilities__WEBPACK_IMPORTED_MODULE_0__.Utilities.generateID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}


/***/ }),

/***/ "./src/components/utilities.js":
/*!*************************************!*\
  !*** ./src/components/utilities.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Utilities: () => (/* binding */ Utilities)
/* harmony export */ });
const Utilities = (() => {
  const findObjectFromID = (Array, id) => {
    for (let index in Array) {
      if (Array[index].id === id) {
        return Array[index];
      }
    }
  };

  const findIndexFromID = (Array, id) => {
    for (let index in Array) {
      if (Array[index].id === id) {
        return index;
      }
    }
  };

  const generateID = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const writeToLocalStorage = (Notebook) => {
    let notebook = JSON.stringify(Notebook);
    localStorage.setItem("notebook", notebook);
  };

  const readLocalStorage = () => {
    if (localStorage.getItem("notebook") === null) {
      localStorage.setItem("notebook", "[]");
    }

    return JSON.parse(localStorage.notebook);
  };

  return {
    findObjectFromID,
    findIndexFromID,
    generateID,
    writeToLocalStorage,
    readLocalStorage,
  };
})();


/***/ }),

/***/ "./src/components/viewController.js":
/*!******************************************!*\
  !*** ./src/components/viewController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewController: () => (/* binding */ ViewController)
/* harmony export */ });
/* harmony import */ var _appController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appController */ "./src/components/appController.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/components/utilities.js");



const ViewController = (() => {
  // *--- SHARED DOM elements ---* //
  const todo_list = document.getElementById("todo-list");
  const list_heading = document.getElementById("list-heading");
  const taskDetailDialog = document.getElementById("task-detail-dialog");

  //   Control view and DOM interactions
  const buildNav = (Notebook) => {
    const nav_list = document.getElementById("nav_list");
    // Remove all nav items
    nav_list.replaceChildren();

    // Create DOM element for each list in Notebook
    for (let index in Notebook) {
      const list = Notebook[index];
      // Create DOM elements
      const nav_item = document.createElement("li");
      nav_item.textContent = list.name;
      nav_item.classList.add("nav-item");
      nav_item.id = list.id;

      // Add event listener to each nav item
      nav_item.addEventListener("click", () => buildList(Notebook, list));
      nav_list.appendChild(nav_item);
    }
  };

  const buildList = (Notebook, list) => {
    const id = list.id;

    // Set active list
    document.getElementById("action-bar").dataset.listid = id;

    list_heading.textContent = list.name;

    todo_list.replaceChildren();

    // Create list item element for each task in list.tasks
    for (const index in list.tasks) {
      const task = list.tasks[index];

      const list_item = document.createElement("li");
      list_item.classList.add("todo-list-item");

      // Create checkbox and add event listener
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.classList.add("checkmark");
      checkbox.addEventListener("change", () => {
        // Toggle task.completed and update localStorage
        _appController__WEBPACK_IMPORTED_MODULE_0__.AppController.checkOffTask(task);
        _utilities__WEBPACK_IMPORTED_MODULE_1__.Utilities.writeToLocalStorage(Notebook);

        buildList(Notebook, list);
      });

      // Create cross mark and add event listener
      const crossmark = document.createElement("div");
      crossmark.classList.add("crossmark");
      crossmark.addEventListener("click", () => {
        // Delete task and update localStorage
        _appController__WEBPACK_IMPORTED_MODULE_0__.AppController.deleteTask(list, task.id);
        _utilities__WEBPACK_IMPORTED_MODULE_1__.Utilities.writeToLocalStorage(Notebook);

        buildList(Notebook, list);
      });

      const content = document.createElement("p");
      content.textContent = task.title;
      content.addEventListener("click", () => {
        buildDetailedView(task);
      });

      // Render item with strikethrough if completed
      if (true === task.completed) {
        content.classList.add("completed");
        checkbox.setAttribute("checked", "true");
      }

      const priority = document.createElement("div");
      priority.classList.add("priority-indicator");

      if ("high" === task.priority.toLowerCase()) {
        priority.classList.add("priority-high");
      } else if ("medium" === task.priority.toLowerCase()) {
        priority.classList.add("priority-medium");
      } else if ("low" === task.priority.toLowerCase()) {
        priority.classList.add("priority-low");
      } else {
        priority.classList.add("priority-default");
      }

      list_item.appendChild(priority);
      list_item.appendChild(checkbox);
      list_item.appendChild(content);
      list_item.appendChild(crossmark);

      todo_list.appendChild(list_item);
    }
  };

  const clearList = () => {
    todo_list.replaceChildren();
    list_heading.textContent = "";
  };

  const toggleModal = (dialog) => {
    if (dialog.classList.contains("opened")) {
      dialog.close();
    } else {
      dialog.showModal();
    }

    dialog.classList.toggle("opened");
  };

  const toggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("sidebar-closed");
  };

  const buildDetailedView = (task) => {
    // do stuff
    console.log(task);

    const title = document.getElementById("task-detail-title");
    title.textContent = task.title;

    const description = document.getElementById("task-detail-description");
    description.textContent = task.description;

    const duedate = document.getElementById("task-detail-duedate");
    duedate.textContent = task.dueDate;

    const priority = document.getElementById("task-detail-priority");
    priority.textContent = task.priority;

    toggleModal(taskDetailDialog);
  };

  const clearDetailedView = () => {
    const title = document.getElementById("task-detail-title");
    title.textContent = "";

    const description = document.getElementById("task-detail-description");
    description.textContent = "";

    const duedate = document.getElementById("task-detail-duedate");
    duedate.textContent = "";

    const priority = document.getElementById("task-detail-priority");
    priority.textContent = "";
  };

  return {
    buildNav,
    buildList,
    clearList,
    toggleModal,
    toggleSidebar,
    buildDetailedView,
    clearDetailedView,
  };
})();


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _components_appController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/appController */ "./src/components/appController.js");
/* harmony import */ var _components_viewController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/viewController */ "./src/components/viewController.js");
/* harmony import */ var _components_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/utilities */ "./src/components/utilities.js");





// App State
let Notebook = _components_utilities__WEBPACK_IMPORTED_MODULE_3__.Utilities.readLocalStorage();

// Initalize app and add event listeners to DOM elements
document.addEventListener("DOMContentLoaded", () => {
  // Initialize app when page is loaded
  (() => {
    _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildNav(Notebook);
    if (Notebook.length > 0) {
      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildList(Notebook, Notebook[0]);
    }
  })();

  // Shared DOM Elements
  const newListDialog = document.getElementById("new-list-dialog");
  const newTaskDialog = document.getElementById("new-task-dialog");
  const taskDetailDialog = document.getElementById("task-detail-dialog");
  const actionBar = document.getElementById("action-bar");

  // *--- EVENT LISTENERS ---* //
  // Open new list modal with new list button
  document.getElementById("new-list-button").addEventListener("click", () => {
    _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.toggleModal(newListDialog);
  });

  // Handle submitted new list form
  document
    .getElementById("new-list-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      // Gather submitted form data
      const form = event.target;
      const input = form.elements.listname.value;

      // Make new list from data
      const new_list = _components_appController__WEBPACK_IMPORTED_MODULE_1__.AppController.makeList(input);

      // Add list to Notebook and update localStorage
      _components_appController__WEBPACK_IMPORTED_MODULE_1__.AppController.addList(Notebook, new_list);
      _components_utilities__WEBPACK_IMPORTED_MODULE_3__.Utilities.writeToLocalStorage(Notebook);

      // Redraw screen
      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildNav(Notebook);
      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildList(Notebook, new_list);

      form.reset();
      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.toggleModal(newListDialog);
    });

  // Handle canceled new list form
  document
    .getElementById("new-list-cancel")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const form = document.getElementById("new-list-form");
      form.reset();
      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.toggleModal(newListDialog);
    });

  // Delete list when delete list button is clicked
  document
    .getElementById("delete-list-button")
    .addEventListener("click", () => {
      // Find list from active actionBar id
      const id = Number(actionBar.dataset.listid);
      const list = _components_utilities__WEBPACK_IMPORTED_MODULE_3__.Utilities.findObjectFromID(Notebook, id);

      // Delete list and update localStorage
      _components_appController__WEBPACK_IMPORTED_MODULE_1__.AppController.deleteList(Notebook, list);
      _components_utilities__WEBPACK_IMPORTED_MODULE_3__.Utilities.writeToLocalStorage(Notebook);

      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildNav(Notebook);

      // If Notebook is not empty, redraw first list
      if (Notebook.length != 0) {
        _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildList(Notebook, Notebook[0]);
      } else {
        // else clear list from screen
        _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.clearList();
      }
    });

  // Open new task modal when button is clicked
  document.getElementById("new-task-button").addEventListener("click", () => {
    // Check if Notebook has any lists
    if (Notebook.length === 0) {
      // If Notebook has not list, prompt user to make a list
      alert("Please make a list first");
      return;
    }

    _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.toggleModal(newTaskDialog);
  });

  // Handle submitted new task form
  document
    .getElementById("new-task-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      // Gather submitted form data
      const form = event.target;
      const title = form.elements.tasktitle.value;
      const description = form.elements.taskdescription.value;
      const dueDate = form.elements.taskduedate.value;
      const priority = form.elements.taskpriority.value;

      // Make new task from data
      const task = _components_appController__WEBPACK_IMPORTED_MODULE_1__.AppController.makeTask(
        title,
        description,
        dueDate,
        priority
      );
      const id = Number(actionBar.dataset.listid);
      const list = _components_utilities__WEBPACK_IMPORTED_MODULE_3__.Utilities.findObjectFromID(Notebook, id);

      // Add task to current list and update localStorage
      _components_appController__WEBPACK_IMPORTED_MODULE_1__.AppController.addTask(Notebook, list, task);
      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildList(Notebook, list);
      _components_utilities__WEBPACK_IMPORTED_MODULE_3__.Utilities.writeToLocalStorage(Notebook);

      // Reset form and close modal
      form.reset();
      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.toggleModal(newTaskDialog);
    });

  // Handle canceled new task form
  document
    .getElementById("new-task-cancel")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const form = document.getElementById("new-task-form");
      form.reset();
      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.toggleModal(newTaskDialog);
    });

  // Manage sidebar open/closed status
  document
    .getElementById("close-sidebar")
    .addEventListener("click", _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.toggleSidebar);

  document.getElementById("task-detail-close").addEventListener("click", () => {
    _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.clearDetailedView();
    _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.toggleModal(taskDetailDialog);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysa0hBQWtILGtCQUFrQjtBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxtR0FBbUcsb0JBQW9CLFdBQVcsNkJBQTZCLCtCQUErQiw0QkFBNEIs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SDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixvRUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNERBQVM7O0FBRTVCO0FBQ0EsTUFBTSxvRUFBYTtBQUNuQixNQUFNLHNFQUFjO0FBQ3BCLE1BQU0sNERBQVM7O0FBRWY7QUFDQTtBQUNBLE1BQU0sc0VBQWM7QUFDcEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0VBQWM7QUFDcEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0VBQWM7O0FBRTdDO0FBQ0EsSUFBSSxzRUFBYztBQUNsQixJQUFJLHNFQUFjO0FBQ2xCLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXBwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3ZpZXdDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1jb2xvci1wcmltYXJ5OiAjMjMzZDRkO1xuICAtLWNvbG9yLXNlY29uZGFyeTogI2ZlN2YyZDtcbiAgLS1jb2xvci1hY2NlbnQ6ICNlMWUxZTE7XG4gIC0tY29sb3ItZGFuZ2VyOiAjZWMwMDAwO1xuICAtLWZvbnQtcHJpbWFyeTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgLS10b3BiYXItaGVpZ2h0OiA1MHB4O1xuICAtLXNpZGViYXItd2lkdGg6IDI1MHB4O1xuICAtLWNvbnRlbnQtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wYmFyLWhlaWdodCkpO1xuICAtLXRhc2staW5wdXQtc2l6ZTogMS4xcmVtO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jdG9wYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiB2YXIoLS10b3BiYXItaGVpZ2h0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cblxuI3RvcGJhciA+IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuI2NvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLyogLS0gVG9wIEJhciAtLSAqL1xuI2Nsb3NlLXNpZGViYXIge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY2xvc2Utc2lkZWJhciA+IGRpdiB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiNjbG9zZS1zaWRlYmFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMzQ0Mjtcbn1cblxuLyogLS0tIE5hdiAtLS0gKi9cblxubmF2IHtcbiAgaGVpZ2h0OiB2YXIoLS1jb250ZW50LWhlaWdodCk7XG4gIGJvcmRlci1yaWdodDogdmFyKC0tY29sb3ItYWNjZW50KSBzb2xpZCAxcHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LXNocmluazogMDtcblxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCA0MDBtcyBlYXNlLWluLW91dDtcbn1cblxubmF2ID4gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uc2lkZWJhci1jbG9zZWQge1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNpZGViYXItd2lkdGgpKTtcbn1cblxuI25ldy1saXN0LWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi5uYXYtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIi8vXCI7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4ubmF2LWl0ZW06aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLyogLS0tIE1haW4gQ29udGVudCAtLS0gKi9cblxubWFpbiB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLnRvZG8tbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiBtaW4oMTAwJSwgNTAwcHgpO1xufVxuXG4udG9kby1saXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcztcbn1cblxuLnRvZG8tbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGFkYTtcbn1cblxuLnRvZG8tbGlzdC1pdGVtID4gcCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4jYWN0aW9uLWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4vKiBEaWFsb2cgTWVudXMgKi9cbiN0YXNrLWRldGFpbC1kaWFsb2c6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jdGFzay1kZXRhaWwtY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuI3Rhc2stZGV0YWlsLWNvbnRhaW5lciA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jdGFzay1kZXRhaWwtaGVhZGVyID4gLmNyb3NzbWFyayB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5cbi5idXR0b24ge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idXR0b24tY2lyY3VsYXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5idXR0b24tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ1dHRvbi1kYW5nZXI6aG92ZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmJ1dHRvbi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uYnV0dG9uLXJlY3Rhbmd1bGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLmNoZWNrbWFyayB7XG4gIGhlaWdodDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcbiAgd2lkdGg6IHZhcigtLXRhc2staW5wdXQtc2l6ZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogIzkyOTI5Mjtcbn1cblxuLmNyb3NzbWFyayB7XG4gIGhlaWdodDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcbiAgd2lkdGg6IHZhcigtLXRhc2staW5wdXQtc2l6ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmNyb3NzbWFyazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcXFxEN1wiO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY3Jvc3NtYXJrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNyb3NzbWFyazpob3Zlcjo6YWZ0ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tb2RhbCB7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5tb2RhbDo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM0KTtcbn1cblxuLmRpdmlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcmlvcml0eS1pbmRpY2F0b3Ige1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi5wcmlvcml0eS1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5wcmlvcml0eS1oaWdoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbn1cblxuLnByaW9yaXR5LW1lZGl1bSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5wcmlvcml0eS1sb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLyogLS0tIFRhZyBTdHlsZXMgLS0tICovXG5cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVB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QUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsdUJBQXVCOztBQUV2QjtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC0tY29sb3ItcHJpbWFyeTogIzIzM2Q0ZDtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjZmU3ZjJkO1xcbiAgLS1jb2xvci1hY2NlbnQ6ICNlMWUxZTE7XFxuICAtLWNvbG9yLWRhbmdlcjogI2VjMDAwMDtcXG4gIC0tZm9udC1wcmltYXJ5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tdG9wYmFyLWhlaWdodDogNTBweDtcXG4gIC0tc2lkZWJhci13aWR0aDogMjUwcHg7XFxuICAtLWNvbnRlbnQtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wYmFyLWhlaWdodCkpO1xcbiAgLS10YXNrLWlucHV0LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI3RvcGJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiB2YXIoLS10b3BiYXItaGVpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4jdG9wYmFyID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI2NvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIC0tIFRvcCBCYXIgLS0gKi9cXG4jY2xvc2Utc2lkZWJhciB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY2xvc2Utc2lkZWJhciA+IGRpdiB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNjbG9zZS1zaWRlYmFyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDM0NDI7XFxufVxcblxcbi8qIC0tLSBOYXYgLS0tICovXFxuXFxubmF2IHtcXG4gIGhlaWdodDogdmFyKC0tY29udGVudC1oZWlnaHQpO1xcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1jb2xvci1hY2NlbnQpIHNvbGlkIDFweDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcblxcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgNDAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm5hdiA+IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLWNsb3NlZCB7XFxuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNpZGViYXItd2lkdGgpKTtcXG59XFxuXFxuI25ldy1saXN0LWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiLy9cXFwiO1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcblxcbi5uYXYtaXRlbTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLyogLS0tIE1haW4gQ29udGVudCAtLS0gKi9cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgNTAwcHgpO1xcbn1cXG5cXG4udG9kby1saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXM7XFxufVxcblxcbi50b2RvLWxpc3QtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkYWRhO1xcbn1cXG5cXG4udG9kby1saXN0LWl0ZW0gPiBwIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuI2FjdGlvbi1iYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLyogRGlhbG9nIE1lbnVzICovXFxuI3Rhc2stZGV0YWlsLWRpYWxvZzpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdGFzay1kZXRhaWwtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiN0YXNrLWRldGFpbC1jb250YWluZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3B4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2stZGV0YWlsLWhlYWRlciA+IC5jcm9zc21hcmsge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xcblxcbi5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5idXR0b24tY2lyY3VsYXIge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5idXR0b24tZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1kYW5nZXIpO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5idXR0b24tZGFuZ2VyOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uYnV0dG9uLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxufVxcblxcbi5idXR0b24tcmVjdGFuZ3VsYXIge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmNoZWNrbWFyayB7XFxuICBoZWlnaHQ6IHZhcigtLXRhc2staW5wdXQtc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiAjOTI5MjkyO1xcbn1cXG5cXG4uY3Jvc3NtYXJrIHtcXG4gIGhlaWdodDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS10YXNrLWlucHV0LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLWRhbmdlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uY3Jvc3NtYXJrOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcXEQ3XFxcIjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY3Jvc3NtYXJrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3Jvc3NtYXJrOmhvdmVyOjphZnRlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JtLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm1vZGFsOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM0KTtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXG4gIGhlaWdodDogMXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcmlvcml0eS1pbmRpY2F0b3Ige1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDVweDtcXG59XFxuXFxuLnByaW9yaXR5LWRlZmF1bHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLyogLS0tIFRhZyBTdHlsZXMgLS0tICovXFxuXFxuc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuZXhwb3J0IGNvbnN0IEFwcENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBtYWtlTGlzdCA9IChsaXN0TmFtZSkgPT4ge1xuICAgIHJldHVybiBuZXcgTGlzdChsaXN0TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTGlzdCA9IChOb3RlYm9vaywgbmV3TGlzdCkgPT4ge1xuICAgIE5vdGVib29rLnB1c2gobmV3TGlzdCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlTGlzdCA9IChOb3RlYm9vaywgbGlzdCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD9cIik7XG5cbiAgICBpZiAoY29uZmlybWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBVdGlsaXRpZXMuZmluZEluZGV4RnJvbUlEKE5vdGVib29rLCBsaXN0LmlkKTtcblxuICAgIE5vdGVib29rLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgY29uc3QgbWFrZVRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKE5vdGVib29rLCBsaXN0LCB0YXNrKSA9PiB7XG4gICAgLy8gY29uc3QgaWQgPSBOdW1iZXIobGlzdGlkKTtcbiAgICAvLyBjb25zdCBsaXN0ID0gVXRpbGl0aWVzLmZpbmRPYmplY3RGcm9tSUQoTm90ZWJvb2ssIGlkKTtcbiAgICBsaXN0LnRhc2tzLnB1c2godGFzayk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tPZmZUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKGxpc3QsIHRhc2tpZCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz9cIik7XG5cbiAgICBpZiAoY29uZmlybWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBVdGlsaXRpZXMuZmluZEluZGV4RnJvbUlEKGxpc3QudGFza3MsIHRhc2tpZCk7XG5cbiAgICBsaXN0LnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtYWtlTGlzdCxcbiAgICBhZGRMaXN0LFxuICAgIGRlbGV0ZUxpc3QsXG4gICAgbWFrZVRhc2ssXG4gICAgYWRkVGFzayxcbiAgICBjaGVja09mZlRhc2ssXG4gICAgZGVsZXRlVGFzayxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5pZCA9IFV0aWxpdGllcy5nZW5lcmF0ZUlEKCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbn1cbiIsImltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLmlkID0gVXRpbGl0aWVzLmdlbmVyYXRlSUQoKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBVdGlsaXRpZXMgPSAoKCkgPT4ge1xuICBjb25zdCBmaW5kT2JqZWN0RnJvbUlEID0gKEFycmF5LCBpZCkgPT4ge1xuICAgIGZvciAobGV0IGluZGV4IGluIEFycmF5KSB7XG4gICAgICBpZiAoQXJyYXlbaW5kZXhdLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gQXJyYXlbaW5kZXhdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaW5kSW5kZXhGcm9tSUQgPSAoQXJyYXksIGlkKSA9PiB7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gQXJyYXkpIHtcbiAgICAgIGlmIChBcnJheVtpbmRleF0uaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVJRCA9ICgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gIH07XG5cbiAgY29uc3Qgd3JpdGVUb0xvY2FsU3RvcmFnZSA9IChOb3RlYm9vaykgPT4ge1xuICAgIGxldCBub3RlYm9vayA9IEpTT04uc3RyaW5naWZ5KE5vdGVib29rKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vdGVib29rXCIsIG5vdGVib29rKTtcbiAgfTtcblxuICBjb25zdCByZWFkTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVib29rXCIpID09PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vdGVib29rXCIsIFwiW11cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm5vdGVib29rKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGZpbmRPYmplY3RGcm9tSUQsXG4gICAgZmluZEluZGV4RnJvbUlELFxuICAgIGdlbmVyYXRlSUQsXG4gICAgd3JpdGVUb0xvY2FsU3RvcmFnZSxcbiAgICByZWFkTG9jYWxTdG9yYWdlLFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tIFwiLi9hcHBDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuZXhwb3J0IGNvbnN0IFZpZXdDb250cm9sbGVyID0gKCgpID0+IHtcbiAgLy8gKi0tLSBTSEFSRUQgRE9NIGVsZW1lbnRzIC0tLSogLy9cbiAgY29uc3QgdG9kb19saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3RcIik7XG4gIGNvbnN0IGxpc3RfaGVhZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC1oZWFkaW5nXCIpO1xuICBjb25zdCB0YXNrRGV0YWlsRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC1kaWFsb2dcIik7XG5cbiAgLy8gICBDb250cm9sIHZpZXcgYW5kIERPTSBpbnRlcmFjdGlvbnNcbiAgY29uc3QgYnVpbGROYXYgPSAoTm90ZWJvb2spID0+IHtcbiAgICBjb25zdCBuYXZfbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2X2xpc3RcIik7XG4gICAgLy8gUmVtb3ZlIGFsbCBuYXYgaXRlbXNcbiAgICBuYXZfbGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIC8vIENyZWF0ZSBET00gZWxlbWVudCBmb3IgZWFjaCBsaXN0IGluIE5vdGVib29rXG4gICAgZm9yIChsZXQgaW5kZXggaW4gTm90ZWJvb2spIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBOb3RlYm9va1tpbmRleF07XG4gICAgICAvLyBDcmVhdGUgRE9NIGVsZW1lbnRzXG4gICAgICBjb25zdCBuYXZfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIG5hdl9pdGVtLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICAgICAgbmF2X2l0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpO1xuICAgICAgbmF2X2l0ZW0uaWQgPSBsaXN0LmlkO1xuXG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBuYXYgaXRlbVxuICAgICAgbmF2X2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGJ1aWxkTGlzdChOb3RlYm9vaywgbGlzdCkpO1xuICAgICAgbmF2X2xpc3QuYXBwZW5kQ2hpbGQobmF2X2l0ZW0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBidWlsZExpc3QgPSAoTm90ZWJvb2ssIGxpc3QpID0+IHtcbiAgICBjb25zdCBpZCA9IGxpc3QuaWQ7XG5cbiAgICAvLyBTZXQgYWN0aXZlIGxpc3RcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbi1iYXJcIikuZGF0YXNldC5saXN0aWQgPSBpZDtcblxuICAgIGxpc3RfaGVhZGluZy50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcblxuICAgIHRvZG9fbGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIC8vIENyZWF0ZSBsaXN0IGl0ZW0gZWxlbWVudCBmb3IgZWFjaCB0YXNrIGluIGxpc3QudGFza3NcbiAgICBmb3IgKGNvbnN0IGluZGV4IGluIGxpc3QudGFza3MpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBsaXN0LnRhc2tzW2luZGV4XTtcblxuICAgICAgY29uc3QgbGlzdF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbGlzdF9pdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtaXRlbVwiKTtcblxuICAgICAgLy8gQ3JlYXRlIGNoZWNrYm94IGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrbWFya1wiKTtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAvLyBUb2dnbGUgdGFzay5jb21wbGV0ZWQgYW5kIHVwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgQXBwQ29udHJvbGxlci5jaGVja09mZlRhc2sodGFzayk7XG4gICAgICAgIFV0aWxpdGllcy53cml0ZVRvTG9jYWxTdG9yYWdlKE5vdGVib29rKTtcblxuICAgICAgICBidWlsZExpc3QoTm90ZWJvb2ssIGxpc3QpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBjcm9zcyBtYXJrIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgICAgIGNvbnN0IGNyb3NzbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjcm9zc21hcmsuY2xhc3NMaXN0LmFkZChcImNyb3NzbWFya1wiKTtcbiAgICAgIGNyb3NzbWFyay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvLyBEZWxldGUgdGFzayBhbmQgdXBkYXRlIGxvY2FsU3RvcmFnZVxuICAgICAgICBBcHBDb250cm9sbGVyLmRlbGV0ZVRhc2sobGlzdCwgdGFzay5pZCk7XG4gICAgICAgIFV0aWxpdGllcy53cml0ZVRvTG9jYWxTdG9yYWdlKE5vdGVib29rKTtcblxuICAgICAgICBidWlsZExpc3QoTm90ZWJvb2ssIGxpc3QpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBidWlsZERldGFpbGVkVmlldyh0YXNrKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW5kZXIgaXRlbSB3aXRoIHN0cmlrZXRocm91Z2ggaWYgY29tcGxldGVkXG4gICAgICBpZiAodHJ1ZSA9PT0gdGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWluZGljYXRvclwiKTtcblxuICAgICAgaWYgKFwiaGlnaFwiID09PSB0YXNrLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWhpZ2hcIik7XG4gICAgICB9IGVsc2UgaWYgKFwibWVkaXVtXCIgPT09IHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbWVkaXVtXCIpO1xuICAgICAgfSBlbHNlIGlmIChcImxvd1wiID09PSB0YXNrLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxvd1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1kZWZhdWx0XCIpO1xuICAgICAgfVxuXG4gICAgICBsaXN0X2l0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChjcm9zc21hcmspO1xuXG4gICAgICB0b2RvX2xpc3QuYXBwZW5kQ2hpbGQobGlzdF9pdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xlYXJMaXN0ID0gKCkgPT4ge1xuICAgIHRvZG9fbGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICBsaXN0X2hlYWRpbmcudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZU1vZGFsID0gKGRpYWxvZykgPT4ge1xuICAgIGlmIChkaWFsb2cuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlbmVkXCIpKSB7XG4gICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH1cblxuICAgIGRpYWxvZy5jbGFzc0xpc3QudG9nZ2xlKFwib3BlbmVkXCIpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlYmFyLWNsb3NlZFwiKTtcbiAgfTtcblxuICBjb25zdCBidWlsZERldGFpbGVkVmlldyA9ICh0YXNrKSA9PiB7XG4gICAgLy8gZG8gc3R1ZmZcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWwtZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWwtZHVlZGF0ZVwiKTtcbiAgICBkdWVkYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsLXByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICAgIHRvZ2dsZU1vZGFsKHRhc2tEZXRhaWxEaWFsb2cpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRGV0YWlsZWRWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWwtZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWwtZHVlZGF0ZVwiKTtcbiAgICBkdWVkYXRlLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC1wcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBidWlsZE5hdixcbiAgICBidWlsZExpc3QsXG4gICAgY2xlYXJMaXN0LFxuICAgIHRvZ2dsZU1vZGFsLFxuICAgIHRvZ2dsZVNpZGViYXIsXG4gICAgYnVpbGREZXRhaWxlZFZpZXcsXG4gICAgY2xlYXJEZXRhaWxlZFZpZXcsXG4gIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBWaWV3Q29udHJvbGxlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmlld0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvdXRpbGl0aWVzXCI7XG5cbi8vIEFwcCBTdGF0ZVxubGV0IE5vdGVib29rID0gVXRpbGl0aWVzLnJlYWRMb2NhbFN0b3JhZ2UoKTtcblxuLy8gSW5pdGFsaXplIGFwcCBhbmQgYWRkIGV2ZW50IGxpc3RlbmVycyB0byBET00gZWxlbWVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy8gSW5pdGlhbGl6ZSBhcHAgd2hlbiBwYWdlIGlzIGxvYWRlZFxuICAoKCkgPT4ge1xuICAgIFZpZXdDb250cm9sbGVyLmJ1aWxkTmF2KE5vdGVib29rKTtcbiAgICBpZiAoTm90ZWJvb2subGVuZ3RoID4gMCkge1xuICAgICAgVmlld0NvbnRyb2xsZXIuYnVpbGRMaXN0KE5vdGVib29rLCBOb3RlYm9va1swXSk7XG4gICAgfVxuICB9KSgpO1xuXG4gIC8vIFNoYXJlZCBET00gRWxlbWVudHNcbiAgY29uc3QgbmV3TGlzdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWxpc3QtZGlhbG9nXCIpO1xuICBjb25zdCBuZXdUYXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1kaWFsb2dcIik7XG4gIGNvbnN0IHRhc2tEZXRhaWxEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsLWRpYWxvZ1wiKTtcbiAgY29uc3QgYWN0aW9uQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpb24tYmFyXCIpO1xuXG4gIC8vICotLS0gRVZFTlQgTElTVEVORVJTIC0tLSogLy9cbiAgLy8gT3BlbiBuZXcgbGlzdCBtb2RhbCB3aXRoIG5ldyBsaXN0IGJ1dHRvblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1saXN0LWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIFZpZXdDb250cm9sbGVyLnRvZ2dsZU1vZGFsKG5ld0xpc3REaWFsb2cpO1xuICB9KTtcblxuICAvLyBIYW5kbGUgc3VibWl0dGVkIG5ldyBsaXN0IGZvcm1cbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJuZXctbGlzdC1mb3JtXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBHYXRoZXIgc3VibWl0dGVkIGZvcm0gZGF0YVxuICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnN0IGlucHV0ID0gZm9ybS5lbGVtZW50cy5saXN0bmFtZS52YWx1ZTtcblxuICAgICAgLy8gTWFrZSBuZXcgbGlzdCBmcm9tIGRhdGFcbiAgICAgIGNvbnN0IG5ld19saXN0ID0gQXBwQ29udHJvbGxlci5tYWtlTGlzdChpbnB1dCk7XG5cbiAgICAgIC8vIEFkZCBsaXN0IHRvIE5vdGVib29rIGFuZCB1cGRhdGUgbG9jYWxTdG9yYWdlXG4gICAgICBBcHBDb250cm9sbGVyLmFkZExpc3QoTm90ZWJvb2ssIG5ld19saXN0KTtcbiAgICAgIFV0aWxpdGllcy53cml0ZVRvTG9jYWxTdG9yYWdlKE5vdGVib29rKTtcblxuICAgICAgLy8gUmVkcmF3IHNjcmVlblxuICAgICAgVmlld0NvbnRyb2xsZXIuYnVpbGROYXYoTm90ZWJvb2spO1xuICAgICAgVmlld0NvbnRyb2xsZXIuYnVpbGRMaXN0KE5vdGVib29rLCBuZXdfbGlzdCk7XG5cbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIFZpZXdDb250cm9sbGVyLnRvZ2dsZU1vZGFsKG5ld0xpc3REaWFsb2cpO1xuICAgIH0pO1xuXG4gIC8vIEhhbmRsZSBjYW5jZWxlZCBuZXcgbGlzdCBmb3JtXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibmV3LWxpc3QtY2FuY2VsXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctbGlzdC1mb3JtXCIpO1xuICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgVmlld0NvbnRyb2xsZXIudG9nZ2xlTW9kYWwobmV3TGlzdERpYWxvZyk7XG4gICAgfSk7XG5cbiAgLy8gRGVsZXRlIGxpc3Qgd2hlbiBkZWxldGUgbGlzdCBidXR0b24gaXMgY2xpY2tlZFxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS1saXN0LWJ1dHRvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gRmluZCBsaXN0IGZyb20gYWN0aXZlIGFjdGlvbkJhciBpZFxuICAgICAgY29uc3QgaWQgPSBOdW1iZXIoYWN0aW9uQmFyLmRhdGFzZXQubGlzdGlkKTtcbiAgICAgIGNvbnN0IGxpc3QgPSBVdGlsaXRpZXMuZmluZE9iamVjdEZyb21JRChOb3RlYm9vaywgaWQpO1xuXG4gICAgICAvLyBEZWxldGUgbGlzdCBhbmQgdXBkYXRlIGxvY2FsU3RvcmFnZVxuICAgICAgQXBwQ29udHJvbGxlci5kZWxldGVMaXN0KE5vdGVib29rLCBsaXN0KTtcbiAgICAgIFV0aWxpdGllcy53cml0ZVRvTG9jYWxTdG9yYWdlKE5vdGVib29rKTtcblxuICAgICAgVmlld0NvbnRyb2xsZXIuYnVpbGROYXYoTm90ZWJvb2spO1xuXG4gICAgICAvLyBJZiBOb3RlYm9vayBpcyBub3QgZW1wdHksIHJlZHJhdyBmaXJzdCBsaXN0XG4gICAgICBpZiAoTm90ZWJvb2subGVuZ3RoICE9IDApIHtcbiAgICAgICAgVmlld0NvbnRyb2xsZXIuYnVpbGRMaXN0KE5vdGVib29rLCBOb3RlYm9va1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbHNlIGNsZWFyIGxpc3QgZnJvbSBzY3JlZW5cbiAgICAgICAgVmlld0NvbnRyb2xsZXIuY2xlYXJMaXN0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgLy8gT3BlbiBuZXcgdGFzayBtb2RhbCB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgTm90ZWJvb2sgaGFzIGFueSBsaXN0c1xuICAgIGlmIChOb3RlYm9vay5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIElmIE5vdGVib29rIGhhcyBub3QgbGlzdCwgcHJvbXB0IHVzZXIgdG8gbWFrZSBhIGxpc3RcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIG1ha2UgYSBsaXN0IGZpcnN0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFZpZXdDb250cm9sbGVyLnRvZ2dsZU1vZGFsKG5ld1Rhc2tEaWFsb2cpO1xuICB9KTtcblxuICAvLyBIYW5kbGUgc3VibWl0dGVkIG5ldyB0YXNrIGZvcm1cbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1mb3JtXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBHYXRoZXIgc3VibWl0dGVkIGZvcm0gZGF0YVxuICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50cy50YXNrdGl0bGUudmFsdWU7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0uZWxlbWVudHMudGFza2Rlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IGZvcm0uZWxlbWVudHMudGFza2R1ZWRhdGUudmFsdWU7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHMudGFza3ByaW9yaXR5LnZhbHVlO1xuXG4gICAgICAvLyBNYWtlIG5ldyB0YXNrIGZyb20gZGF0YVxuICAgICAgY29uc3QgdGFzayA9IEFwcENvbnRyb2xsZXIubWFrZVRhc2soXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHlcbiAgICAgICk7XG4gICAgICBjb25zdCBpZCA9IE51bWJlcihhY3Rpb25CYXIuZGF0YXNldC5saXN0aWQpO1xuICAgICAgY29uc3QgbGlzdCA9IFV0aWxpdGllcy5maW5kT2JqZWN0RnJvbUlEKE5vdGVib29rLCBpZCk7XG5cbiAgICAgIC8vIEFkZCB0YXNrIHRvIGN1cnJlbnQgbGlzdCBhbmQgdXBkYXRlIGxvY2FsU3RvcmFnZVxuICAgICAgQXBwQ29udHJvbGxlci5hZGRUYXNrKE5vdGVib29rLCBsaXN0LCB0YXNrKTtcbiAgICAgIFZpZXdDb250cm9sbGVyLmJ1aWxkTGlzdChOb3RlYm9vaywgbGlzdCk7XG4gICAgICBVdGlsaXRpZXMud3JpdGVUb0xvY2FsU3RvcmFnZShOb3RlYm9vayk7XG5cbiAgICAgIC8vIFJlc2V0IGZvcm0gYW5kIGNsb3NlIG1vZGFsXG4gICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICBWaWV3Q29udHJvbGxlci50b2dnbGVNb2RhbChuZXdUYXNrRGlhbG9nKTtcbiAgICB9KTtcblxuICAvLyBIYW5kbGUgY2FuY2VsZWQgbmV3IHRhc2sgZm9ybVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWNhbmNlbFwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stZm9ybVwiKTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIFZpZXdDb250cm9sbGVyLnRvZ2dsZU1vZGFsKG5ld1Rhc2tEaWFsb2cpO1xuICAgIH0pO1xuXG4gIC8vIE1hbmFnZSBzaWRlYmFyIG9wZW4vY2xvc2VkIHN0YXR1c1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXNpZGViYXJcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFZpZXdDb250cm9sbGVyLnRvZ2dsZVNpZGViYXIpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWwtY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBWaWV3Q29udHJvbGxlci5jbGVhckRldGFpbGVkVmlldygpO1xuICAgIFZpZXdDb250cm9sbGVyLnRvZ2dsZU1vZGFsKHRhc2tEZXRhaWxEaWFsb2cpO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9