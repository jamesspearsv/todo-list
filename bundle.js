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
  --task-input-size: 1rem;
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

  transition: margin-left 500ms ease-in-out;
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
}

.todo-list-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem;
}

#action-bar {
  position: fixed;
  bottom: 0;
  margin-bottom: 2rem;
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

/* --- Tag Styles --- */

select {
  padding: 5px;
}

input {
  padding: 5px;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,uBAAuB;EACvB,uBAAuB;EACvB,uCAAuC;EACvC,qBAAqB;EACrB,sBAAsB;EACtB,oDAAoD;EACpD,uBAAuB;EACvB,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,4BAA4B;EAC5B,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA,gBAAgB;;AAEhB;EACE,6BAA6B;EAC7B,2CAA2C;EAC3C,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,cAAc;;EAEd,yCAAyC;AAC3C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA,yBAAyB;;AAEzB;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,mBAAmB;AACrB;;AAEA,qBAAqB;;AAErB;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,qCAAqC;EACrC,eAAe;EACf,qCAAqC;EACrC,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,wCAAwC;EACxC,eAAe;EACf,wCAAwC;AAC1C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,8BAA8B;EAC9B,6BAA6B;EAC7B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qCAAqC;EACrC,qCAAqC;EACrC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,qCAAqC;EACrC,WAAW;EACX,WAAW;AACb;;AAEA,uBAAuB;;AAEvB;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap\");\n\n:root {\n  --color-primary: #233d4d;\n  --color-secondary: #fe7f2d;\n  --color-accent: #e1e1e1;\n  --color-danger: #ec0000;\n  --font-primary: \"Open Sans\", sans-serif;\n  --topbar-height: 50px;\n  --sidebar-width: 250px;\n  --content-height: calc(100vh - var(--topbar-height));\n  --task-input-size: 1rem;\n  font-size: 18px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#topbar {\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  height: var(--topbar-height);\n  background-color: var(--color-primary);\n  padding-left: 2rem;\n}\n\n#topbar > button {\n  padding: 5px;\n}\n\n#content-container {\n  display: flex;\n}\n\n/* --- Nav --- */\n\nnav {\n  height: var(--content-height);\n  border-right: var(--color-accent) solid 1px;\n  padding: 2rem;\n  width: var(--sidebar-width);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  flex-shrink: 0;\n\n  transition: margin-left 500ms ease-in-out;\n}\n\nnav > ul {\n  list-style: none;\n}\n\n.sidebar-closed {\n  margin-left: calc(-1 * var(--sidebar-width));\n}\n\n#new-list-button {\n  margin-top: auto;\n}\n\n.nav-item {\n  cursor: pointer;\n}\n\n.nav-item::before {\n  content: \"//\";\n  margin-right: 3px;\n}\n\n.nav-item:hover {\n  color: var(--color-secondary);\n}\n\n/* --- Main Content --- */\n\nmain {\n  padding: 2rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.todo-list {\n  list-style: none;\n}\n\n.todo-list-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0.5rem;\n}\n\n#action-bar {\n  position: fixed;\n  bottom: 0;\n  margin-bottom: 2rem;\n}\n\n/* Component Styles */\n\n.button {\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.button:hover {\n  background-color: #ffffff;\n}\n\n.button-circular {\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\n\n.button-danger {\n  background-color: var(--color-danger);\n  padding: 0.5rem;\n  border: 2px solid var(--color-danger);\n  color: #ffffff;\n}\n\n.button-danger:hover {\n  color: #000000;\n}\n\n.button-primary {\n  background-color: var(--color-secondary);\n  padding: 0.5rem;\n  border: 2px solid var(--color-secondary);\n}\n\n.button-rectangular {\n  border-radius: 50px;\n}\n\n.checkmark {\n  height: var(--task-input-size);\n  width: var(--task-input-size);\n  cursor: pointer;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: #929292;\n}\n\n.crossmark {\n  height: var(--task-input-size);\n  width: var(--task-input-size);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: solid 2px var(--color-danger);\n  background-color: var(--color-danger);\n  border-radius: 2px;\n  padding: 2px;\n}\n\n.crossmark::after {\n  content: \"\\D7\";\n  color: #ffffff;\n  font-size: 1rem;\n}\n\n.crossmark:hover {\n  background-color: white;\n  cursor: pointer;\n}\n\n.crossmark:hover::after {\n  color: var(--color-danger);\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.form-group {\n  display: flex;\n  gap: 1rem;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.modal {\n  margin: auto;\n  border: none;\n  border-radius: 5px;\n  padding: 1rem;\n}\n\n.modal::backdrop {\n  background-color: rgba(0, 0, 0, 0.434);\n}\n\n.divider {\n  background-color: var(--color-accent);\n  height: 1px;\n  width: 100%;\n}\n\n/* --- Tag Styles --- */\n\nselect {\n  padding: 5px;\n}\n\ninput {\n  padding: 5px;\n}\n"],"sourceRoot":""}]);
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

  const deleteList = (Notebook, listid) => {
    const confirmation = confirm("Are you sure you want to delete this list?");

    if (confirmation === false) {
      return 1;
    }

    const id = Number(listid);
    const listindex = _utilities__WEBPACK_IMPORTED_MODULE_2__.Utilities.findIndexFromID(Notebook, id);

    Notebook.splice(listindex, 1);
  };

  const makeTask = (title, description, dueDate, priority) => {
    return new _task__WEBPACK_IMPORTED_MODULE_1__.Task(title, description, dueDate, priority);
  };

  const addTask = (Notebook, listid, task) => {
    const id = Number(listid);
    const list = _utilities__WEBPACK_IMPORTED_MODULE_2__.Utilities.findObjectFromID(Notebook, id);
    list.tasks.push(task);
  };

  const checkOffTask = (Notebook, listid, taskid) => {
    const list = _utilities__WEBPACK_IMPORTED_MODULE_2__.Utilities.findObjectFromID(Notebook, listid);
    const task = _utilities__WEBPACK_IMPORTED_MODULE_2__.Utilities.findObjectFromID(list.tasks, taskid);
    task.completed = !task.completed;
  };

  const deleteTask = (Notebook, listid, taskid) => {
    const confirmation = confirm("Are you sure you want to delete this task?");

    if (confirmation === false) {
      return 1;
    }

    const list = _utilities__WEBPACK_IMPORTED_MODULE_2__.Utilities.findObjectFromID(Notebook, listid);
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
      nav_item.addEventListener("click", () => buildList(Notebook, list.id));
      nav_list.appendChild(nav_item);
    }
  };

  const buildList = (Notebook, listid) => {
    const id = Number(listid);

    // Set active list
    document.getElementById("action-bar").dataset.listid = id;

    // Find list in Notebook
    const list = _utilities__WEBPACK_IMPORTED_MODULE_1__.Utilities.findObjectFromID(Notebook, id);

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
        // Toggle task.completed and update ;localStorage
        _appController__WEBPACK_IMPORTED_MODULE_0__.AppController.checkOffTask(Notebook, list.id, task.id);
        _utilities__WEBPACK_IMPORTED_MODULE_1__.Utilities.writeToLocalStorage(Notebook);

        buildList(Notebook, list.id);
      });

      // Create cross mark and add event listener
      const crossmark = document.createElement("div");
      crossmark.classList.add("crossmark");
      crossmark.addEventListener("click", () => {
        // Delete task and update localStorage
        _appController__WEBPACK_IMPORTED_MODULE_0__.AppController.deleteTask(Notebook, list.id, task.id);
        _utilities__WEBPACK_IMPORTED_MODULE_1__.Utilities.writeToLocalStorage(Notebook);

        buildList(Notebook, list.id);
      });

      const content = document.createElement("p");
      content.textContent = task.title;

      // Render item with strikethrough if completed
      if (true === task.completed) {
        content.classList.add("completed");
        checkbox.setAttribute("checked", "true");
      }

      list_item.appendChild(checkbox);
      list_item.appendChild(crossmark);
      list_item.appendChild(content);

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

  return { buildNav, buildList, clearList, toggleModal, toggleSidebar };
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
// let Notebook = []; // Array of objects
let Notebook = _components_utilities__WEBPACK_IMPORTED_MODULE_3__.Utilities.readLocalStorage();

// Initalize app and add event listeners to DOM elements
document.addEventListener("DOMContentLoaded", () => {
  // Initialize app when page is loaded
  (() => {
    _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildNav(Notebook);
    if (Notebook.length > 0) {
      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildList(Notebook, Notebook[0].id);
    }
  })();

  // Shared DOM Elements
  const newListDialog = document.getElementById("new-list-dialog");
  const newTaskDialog = document.getElementById("new-task-dialog");
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
      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildList(Notebook, new_list.id);

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
      const listid = actionBar.dataset.listid;
      // Delete list and update localStorage
      _components_appController__WEBPACK_IMPORTED_MODULE_1__.AppController.deleteList(Notebook, listid);
      _components_utilities__WEBPACK_IMPORTED_MODULE_3__.Utilities.writeToLocalStorage(Notebook);

      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildNav(Notebook);

      // If Notebook is not empty, redraw first list
      if (Notebook.length != 0) {
        const id = Notebook[0].id;
        _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildList(Notebook, id);
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
      const listid = actionBar.dataset.listid;

      // Add task to current list and update localStorage
      _components_appController__WEBPACK_IMPORTED_MODULE_1__.AppController.addTask(Notebook, listid, task);
      _components_viewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.buildList(Notebook, listid);
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
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysa0hBQWtILGtCQUFrQjtBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZ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c3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy92aWV3Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tY29sb3ItcHJpbWFyeTogIzIzM2Q0ZDtcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNmZTdmMmQ7XG4gIC0tY29sb3ItYWNjZW50OiAjZTFlMWUxO1xuICAtLWNvbG9yLWRhbmdlcjogI2VjMDAwMDtcbiAgLS1mb250LXByaW1hcnk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tdG9wYmFyLWhlaWdodDogNTBweDtcbiAgLS1zaWRlYmFyLXdpZHRoOiAyNTBweDtcbiAgLS1jb250ZW50LWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLXRvcGJhci1oZWlnaHQpKTtcbiAgLS10YXNrLWlucHV0LXNpemU6IDFyZW07XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiN0b3BiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IHZhcigtLXRvcGJhci1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuXG4jdG9wYmFyID4gYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4jY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vKiAtLS0gTmF2IC0tLSAqL1xuXG5uYXYge1xuICBoZWlnaHQ6IHZhcigtLWNvbnRlbnQtaGVpZ2h0KTtcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1jb2xvci1hY2NlbnQpIHNvbGlkIDFweDtcbiAgcGFkZGluZzogMnJlbTtcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5uYXYgPiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWNsb3NlZCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc2lkZWJhci13aWR0aCkpO1xufVxuXG4jbmV3LWxpc3QtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLm5hdi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiLy9cIjtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5uYXYtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4vKiAtLS0gTWFpbiBDb250ZW50IC0tLSAqL1xuXG5tYWluIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xufVxuXG4udG9kby1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRvZG8tbGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbjogMC41cmVtO1xufVxuXG4jYWN0aW9uLWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5cbi5idXR0b24ge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idXR0b24tY2lyY3VsYXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5idXR0b24tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ1dHRvbi1kYW5nZXI6aG92ZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmJ1dHRvbi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uYnV0dG9uLXJlY3Rhbmd1bGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLmNoZWNrbWFyayB7XG4gIGhlaWdodDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcbiAgd2lkdGg6IHZhcigtLXRhc2staW5wdXQtc2l6ZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogIzkyOTI5Mjtcbn1cblxuLmNyb3NzbWFyayB7XG4gIGhlaWdodDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcbiAgd2lkdGg6IHZhcigtLXRhc2staW5wdXQtc2l6ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmNyb3NzbWFyazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcXFxEN1wiO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY3Jvc3NtYXJrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNyb3NzbWFyazpob3Zlcjo6YWZ0ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tb2RhbCB7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5tb2RhbDo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM0KTtcbn1cblxuLmRpdmlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIC0tLSBUYWcgU3R5bGVzIC0tLSAqL1xuXG5zZWxlY3Qge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixvREFBb0Q7RUFDcEQsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsNkJBQTZCO0VBQzdCLDJDQUEyQztFQUMzQyxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGNBQWM7O0VBRWQseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUEseUJBQXlCOztBQUV6QjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLHFDQUFxQztFQUNyQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjMjMzZDRkO1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNmZTdmMmQ7XFxuICAtLWNvbG9yLWFjY2VudDogI2UxZTFlMTtcXG4gIC0tY29sb3ItZGFuZ2VyOiAjZWMwMDAwO1xcbiAgLS1mb250LXByaW1hcnk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS10b3BiYXItaGVpZ2h0OiA1MHB4O1xcbiAgLS1zaWRlYmFyLXdpZHRoOiAyNTBweDtcXG4gIC0tY29udGVudC1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3BiYXItaGVpZ2h0KSk7XFxuICAtLXRhc2staW5wdXQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI3RvcGJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiB2YXIoLS10b3BiYXItaGVpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4jdG9wYmFyID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI2NvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIC0tLSBOYXYgLS0tICovXFxuXFxubmF2IHtcXG4gIGhlaWdodDogdmFyKC0tY29udGVudC1oZWlnaHQpO1xcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1jb2xvci1hY2NlbnQpIHNvbGlkIDFweDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcblxcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm5hdiA+IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLWNsb3NlZCB7XFxuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNpZGViYXItd2lkdGgpKTtcXG59XFxuXFxuI25ldy1saXN0LWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiLy9cXFwiO1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcblxcbi5uYXYtaXRlbTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLyogLS0tIE1haW4gQ29udGVudCAtLS0gKi9cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuI2FjdGlvbi1iYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xcblxcbi5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5idXR0b24tY2lyY3VsYXIge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5idXR0b24tZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1kYW5nZXIpO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5idXR0b24tZGFuZ2VyOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uYnV0dG9uLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxufVxcblxcbi5idXR0b24tcmVjdGFuZ3VsYXIge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmNoZWNrbWFyayB7XFxuICBoZWlnaHQ6IHZhcigtLXRhc2staW5wdXQtc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiAjOTI5MjkyO1xcbn1cXG5cXG4uY3Jvc3NtYXJrIHtcXG4gIGhlaWdodDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS10YXNrLWlucHV0LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLWRhbmdlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uY3Jvc3NtYXJrOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcXEQ3XFxcIjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY3Jvc3NtYXJrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3Jvc3NtYXJrOmhvdmVyOjphZnRlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JtLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm1vZGFsOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM0KTtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXG4gIGhlaWdodDogMXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIC0tLSBUYWcgU3R5bGVzIC0tLSAqL1xcblxcbnNlbGVjdCB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmlucHV0IHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmV4cG9ydCBjb25zdCBBcHBDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgbWFrZUxpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgICByZXR1cm4gbmV3IExpc3QobGlzdE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGFkZExpc3QgPSAoTm90ZWJvb2ssIG5ld0xpc3QpID0+IHtcbiAgICBOb3RlYm9vay5wdXNoKG5ld0xpc3QpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUxpc3QgPSAoTm90ZWJvb2ssIGxpc3RpZCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD9cIik7XG5cbiAgICBpZiAoY29uZmlybWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgY29uc3QgaWQgPSBOdW1iZXIobGlzdGlkKTtcbiAgICBjb25zdCBsaXN0aW5kZXggPSBVdGlsaXRpZXMuZmluZEluZGV4RnJvbUlEKE5vdGVib29rLCBpZCk7XG5cbiAgICBOb3RlYm9vay5zcGxpY2UobGlzdGluZGV4LCAxKTtcbiAgfTtcblxuICBjb25zdCBtYWtlVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAoTm90ZWJvb2ssIGxpc3RpZCwgdGFzaykgPT4ge1xuICAgIGNvbnN0IGlkID0gTnVtYmVyKGxpc3RpZCk7XG4gICAgY29uc3QgbGlzdCA9IFV0aWxpdGllcy5maW5kT2JqZWN0RnJvbUlEKE5vdGVib29rLCBpZCk7XG4gICAgbGlzdC50YXNrcy5wdXNoKHRhc2spO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrT2ZmVGFzayA9IChOb3RlYm9vaywgbGlzdGlkLCB0YXNraWQpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gVXRpbGl0aWVzLmZpbmRPYmplY3RGcm9tSUQoTm90ZWJvb2ssIGxpc3RpZCk7XG4gICAgY29uc3QgdGFzayA9IFV0aWxpdGllcy5maW5kT2JqZWN0RnJvbUlEKGxpc3QudGFza3MsIHRhc2tpZCk7XG4gICAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChOb3RlYm9vaywgbGlzdGlkLCB0YXNraWQpID0+IHtcbiAgICBjb25zdCBjb25maXJtYXRpb24gPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XCIpO1xuXG4gICAgaWYgKGNvbmZpcm1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3QgPSBVdGlsaXRpZXMuZmluZE9iamVjdEZyb21JRChOb3RlYm9vaywgbGlzdGlkKTtcbiAgICBjb25zdCBpbmRleCA9IFV0aWxpdGllcy5maW5kSW5kZXhGcm9tSUQobGlzdC50YXNrcywgdGFza2lkKTtcblxuICAgIGxpc3QudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1ha2VMaXN0LFxuICAgIGFkZExpc3QsXG4gICAgZGVsZXRlTGlzdCxcbiAgICBtYWtlVGFzayxcbiAgICBhZGRUYXNrLFxuICAgIGNoZWNrT2ZmVGFzayxcbiAgICBkZWxldGVUYXNrLFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG5leHBvcnQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmlkID0gVXRpbGl0aWVzLmdlbmVyYXRlSUQoKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMuaWQgPSBVdGlsaXRpZXMuZ2VuZXJhdGVJRCgpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IFV0aWxpdGllcyA9ICgoKSA9PiB7XG4gIGNvbnN0IGZpbmRPYmplY3RGcm9tSUQgPSAoQXJyYXksIGlkKSA9PiB7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gQXJyYXkpIHtcbiAgICAgIGlmIChBcnJheVtpbmRleF0uaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBBcnJheVtpbmRleF07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbmRJbmRleEZyb21JRCA9IChBcnJheSwgaWQpID0+IHtcbiAgICBmb3IgKGxldCBpbmRleCBpbiBBcnJheSkge1xuICAgICAgaWYgKEFycmF5W2luZGV4XS5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZUlEID0gKCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcbiAgfTtcblxuICBjb25zdCB3cml0ZVRvTG9jYWxTdG9yYWdlID0gKE5vdGVib29rKSA9PiB7XG4gICAgbGV0IG5vdGVib29rID0gSlNPTi5zdHJpbmdpZnkoTm90ZWJvb2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm90ZWJvb2tcIiwgbm90ZWJvb2spO1xuICB9O1xuXG4gIGNvbnN0IHJlYWRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibm90ZWJvb2tcIikgPT09IG51bGwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm90ZWJvb2tcIiwgXCJbXVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uubm90ZWJvb2spO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZmluZE9iamVjdEZyb21JRCxcbiAgICBmaW5kSW5kZXhGcm9tSUQsXG4gICAgZ2VuZXJhdGVJRCxcbiAgICB3cml0ZVRvTG9jYWxTdG9yYWdlLFxuICAgIHJlYWRMb2NhbFN0b3JhZ2UsXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gXCIuL2FwcENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG5leHBvcnQgY29uc3QgVmlld0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAvLyAqLS0tIFNIQVJFRCBET00gZWxlbWVudHMgLS0tKiAvL1xuICBjb25zdCB0b2RvX2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbGlzdFwiKTtcbiAgY29uc3QgbGlzdF9oZWFkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0LWhlYWRpbmdcIik7XG5cbiAgLy8gICBDb250cm9sIHZpZXcgYW5kIERPTSBpbnRlcmFjdGlvbnNcbiAgY29uc3QgYnVpbGROYXYgPSAoTm90ZWJvb2spID0+IHtcbiAgICBjb25zdCBuYXZfbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2X2xpc3RcIik7XG4gICAgLy8gUmVtb3ZlIGFsbCBuYXYgaXRlbXNcbiAgICBuYXZfbGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIC8vIENyZWF0ZSBET00gZWxlbWVudCBmb3IgZWFjaCBsaXN0IGluIE5vdGVib29rXG4gICAgZm9yIChsZXQgaW5kZXggaW4gTm90ZWJvb2spIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBOb3RlYm9va1tpbmRleF07XG4gICAgICAvLyBDcmVhdGUgRE9NIGVsZW1lbnRzXG4gICAgICBjb25zdCBuYXZfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIG5hdl9pdGVtLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICAgICAgbmF2X2l0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpO1xuICAgICAgbmF2X2l0ZW0uaWQgPSBsaXN0LmlkO1xuXG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBuYXYgaXRlbVxuICAgICAgbmF2X2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGJ1aWxkTGlzdChOb3RlYm9vaywgbGlzdC5pZCkpO1xuICAgICAgbmF2X2xpc3QuYXBwZW5kQ2hpbGQobmF2X2l0ZW0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBidWlsZExpc3QgPSAoTm90ZWJvb2ssIGxpc3RpZCkgPT4ge1xuICAgIGNvbnN0IGlkID0gTnVtYmVyKGxpc3RpZCk7XG5cbiAgICAvLyBTZXQgYWN0aXZlIGxpc3RcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbi1iYXJcIikuZGF0YXNldC5saXN0aWQgPSBpZDtcblxuICAgIC8vIEZpbmQgbGlzdCBpbiBOb3RlYm9va1xuICAgIGNvbnN0IGxpc3QgPSBVdGlsaXRpZXMuZmluZE9iamVjdEZyb21JRChOb3RlYm9vaywgaWQpO1xuXG4gICAgbGlzdF9oZWFkaW5nLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuXG4gICAgdG9kb19saXN0LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgLy8gQ3JlYXRlIGxpc3QgaXRlbSBlbGVtZW50IGZvciBlYWNoIHRhc2sgaW4gbGlzdC50YXNrc1xuICAgIGZvciAoY29uc3QgaW5kZXggaW4gbGlzdC50YXNrcykge1xuICAgICAgY29uc3QgdGFzayA9IGxpc3QudGFza3NbaW5kZXhdO1xuICAgICAgY29uc3QgbGlzdF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbGlzdF9pdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtaXRlbVwiKTtcblxuICAgICAgLy8gQ3JlYXRlIGNoZWNrYm94IGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrbWFya1wiKTtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAvLyBUb2dnbGUgdGFzay5jb21wbGV0ZWQgYW5kIHVwZGF0ZSA7bG9jYWxTdG9yYWdlXG4gICAgICAgIEFwcENvbnRyb2xsZXIuY2hlY2tPZmZUYXNrKE5vdGVib29rLCBsaXN0LmlkLCB0YXNrLmlkKTtcbiAgICAgICAgVXRpbGl0aWVzLndyaXRlVG9Mb2NhbFN0b3JhZ2UoTm90ZWJvb2spO1xuXG4gICAgICAgIGJ1aWxkTGlzdChOb3RlYm9vaywgbGlzdC5pZCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ3JlYXRlIGNyb3NzIG1hcmsgYW5kIGFkZCBldmVudCBsaXN0ZW5lclxuICAgICAgY29uc3QgY3Jvc3NtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNyb3NzbWFyay5jbGFzc0xpc3QuYWRkKFwiY3Jvc3NtYXJrXCIpO1xuICAgICAgY3Jvc3NtYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIERlbGV0ZSB0YXNrIGFuZCB1cGRhdGUgbG9jYWxTdG9yYWdlXG4gICAgICAgIEFwcENvbnRyb2xsZXIuZGVsZXRlVGFzayhOb3RlYm9vaywgbGlzdC5pZCwgdGFzay5pZCk7XG4gICAgICAgIFV0aWxpdGllcy53cml0ZVRvTG9jYWxTdG9yYWdlKE5vdGVib29rKTtcblxuICAgICAgICBidWlsZExpc3QoTm90ZWJvb2ssIGxpc3QuaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gICAgICAvLyBSZW5kZXIgaXRlbSB3aXRoIHN0cmlrZXRocm91Z2ggaWYgY29tcGxldGVkXG4gICAgICBpZiAodHJ1ZSA9PT0gdGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICAgIH1cblxuICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChjcm9zc21hcmspO1xuICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgICB0b2RvX2xpc3QuYXBwZW5kQ2hpbGQobGlzdF9pdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xlYXJMaXN0ID0gKCkgPT4ge1xuICAgIHRvZG9fbGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICBsaXN0X2hlYWRpbmcudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZU1vZGFsID0gKGRpYWxvZykgPT4ge1xuICAgIGlmIChkaWFsb2cuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlbmVkXCIpKSB7XG4gICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH1cblxuICAgIGRpYWxvZy5jbGFzc0xpc3QudG9nZ2xlKFwib3BlbmVkXCIpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlYmFyLWNsb3NlZFwiKTtcbiAgfTtcblxuICByZXR1cm4geyBidWlsZE5hdiwgYnVpbGRMaXN0LCBjbGVhckxpc3QsIHRvZ2dsZU1vZGFsLCB0b2dnbGVTaWRlYmFyIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBWaWV3Q29udHJvbGxlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmlld0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvdXRpbGl0aWVzXCI7XG5cbi8vIEFwcCBTdGF0ZVxuLy8gbGV0IE5vdGVib29rID0gW107IC8vIEFycmF5IG9mIG9iamVjdHNcbmxldCBOb3RlYm9vayA9IFV0aWxpdGllcy5yZWFkTG9jYWxTdG9yYWdlKCk7XG5cbi8vIEluaXRhbGl6ZSBhcHAgYW5kIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gRE9NIGVsZW1lbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vIEluaXRpYWxpemUgYXBwIHdoZW4gcGFnZSBpcyBsb2FkZWRcbiAgKCgpID0+IHtcbiAgICBWaWV3Q29udHJvbGxlci5idWlsZE5hdihOb3RlYm9vayk7XG4gICAgaWYgKE5vdGVib29rLmxlbmd0aCA+IDApIHtcbiAgICAgIFZpZXdDb250cm9sbGVyLmJ1aWxkTGlzdChOb3RlYm9vaywgTm90ZWJvb2tbMF0uaWQpO1xuICAgIH1cbiAgfSkoKTtcblxuICAvLyBTaGFyZWQgRE9NIEVsZW1lbnRzXG4gIGNvbnN0IG5ld0xpc3REaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1saXN0LWRpYWxvZ1wiKTtcbiAgY29uc3QgbmV3VGFza0RpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stZGlhbG9nXCIpO1xuICBjb25zdCBhY3Rpb25CYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbi1iYXJcIik7XG5cbiAgLy8gKi0tLSBFVkVOVCBMSVNURU5FUlMgLS0tKiAvL1xuICAvLyBPcGVuIG5ldyBsaXN0IG1vZGFsIHdpdGggbmV3IGxpc3QgYnV0dG9uXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWxpc3QtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgVmlld0NvbnRyb2xsZXIudG9nZ2xlTW9kYWwobmV3TGlzdERpYWxvZyk7XG4gIH0pO1xuXG4gIC8vIEhhbmRsZSBzdWJtaXR0ZWQgbmV3IGxpc3QgZm9ybVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm5ldy1saXN0LWZvcm1cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIEdhdGhlciBzdWJtaXR0ZWQgZm9ybSBkYXRhXG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc3QgaW5wdXQgPSBmb3JtLmVsZW1lbnRzLmxpc3RuYW1lLnZhbHVlO1xuXG4gICAgICAvLyBNYWtlIG5ldyBsaXN0IGZyb20gZGF0YVxuICAgICAgY29uc3QgbmV3X2xpc3QgPSBBcHBDb250cm9sbGVyLm1ha2VMaXN0KGlucHV0KTtcblxuICAgICAgLy8gQWRkIGxpc3QgdG8gTm90ZWJvb2sgYW5kIHVwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgICAgIEFwcENvbnRyb2xsZXIuYWRkTGlzdChOb3RlYm9vaywgbmV3X2xpc3QpO1xuICAgICAgVXRpbGl0aWVzLndyaXRlVG9Mb2NhbFN0b3JhZ2UoTm90ZWJvb2spO1xuXG4gICAgICAvLyBSZWRyYXcgc2NyZWVuXG4gICAgICBWaWV3Q29udHJvbGxlci5idWlsZE5hdihOb3RlYm9vayk7XG4gICAgICBWaWV3Q29udHJvbGxlci5idWlsZExpc3QoTm90ZWJvb2ssIG5ld19saXN0LmlkKTtcblxuICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgVmlld0NvbnRyb2xsZXIudG9nZ2xlTW9kYWwobmV3TGlzdERpYWxvZyk7XG4gICAgfSk7XG5cbiAgLy8gSGFuZGxlIGNhbmNlbGVkIG5ldyBsaXN0IGZvcm1cbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJuZXctbGlzdC1jYW5jZWxcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1saXN0LWZvcm1cIik7XG4gICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICBWaWV3Q29udHJvbGxlci50b2dnbGVNb2RhbChuZXdMaXN0RGlhbG9nKTtcbiAgICB9KTtcblxuICAvLyBEZWxldGUgbGlzdCB3aGVuIGRlbGV0ZSBsaXN0IGJ1dHRvbiBpcyBjbGlja2VkXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLWxpc3QtYnV0dG9uXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0aWQgPSBhY3Rpb25CYXIuZGF0YXNldC5saXN0aWQ7XG4gICAgICAvLyBEZWxldGUgbGlzdCBhbmQgdXBkYXRlIGxvY2FsU3RvcmFnZVxuICAgICAgQXBwQ29udHJvbGxlci5kZWxldGVMaXN0KE5vdGVib29rLCBsaXN0aWQpO1xuICAgICAgVXRpbGl0aWVzLndyaXRlVG9Mb2NhbFN0b3JhZ2UoTm90ZWJvb2spO1xuXG4gICAgICBWaWV3Q29udHJvbGxlci5idWlsZE5hdihOb3RlYm9vayk7XG5cbiAgICAgIC8vIElmIE5vdGVib29rIGlzIG5vdCBlbXB0eSwgcmVkcmF3IGZpcnN0IGxpc3RcbiAgICAgIGlmIChOb3RlYm9vay5sZW5ndGggIT0gMCkge1xuICAgICAgICBjb25zdCBpZCA9IE5vdGVib29rWzBdLmlkO1xuICAgICAgICBWaWV3Q29udHJvbGxlci5idWlsZExpc3QoTm90ZWJvb2ssIGlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVsc2UgY2xlYXIgbGlzdCBmcm9tIHNjcmVlblxuICAgICAgICBWaWV3Q29udHJvbGxlci5jbGVhckxpc3QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAvLyBPcGVuIG5ldyB0YXNrIG1vZGFsIHdoZW4gYnV0dG9uIGlzIGNsaWNrZWRcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBDaGVjayBpZiBOb3RlYm9vayBoYXMgYW55IGxpc3RzXG4gICAgaWYgKE5vdGVib29rLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gSWYgTm90ZWJvb2sgaGFzIG5vdCBsaXN0LCBwcm9tcHQgdXNlciB0byBtYWtlIGEgbGlzdFxuICAgICAgYWxlcnQoXCJQbGVhc2UgbWFrZSBhIGxpc3QgZmlyc3RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgVmlld0NvbnRyb2xsZXIudG9nZ2xlTW9kYWwobmV3VGFza0RpYWxvZyk7XG4gIH0pO1xuXG4gIC8vIEhhbmRsZSBzdWJtaXR0ZWQgbmV3IHRhc2sgZm9ybVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWZvcm1cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIEdhdGhlciBzdWJtaXR0ZWQgZm9ybSBkYXRhXG4gICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzLnRhc2t0aXRsZS52YWx1ZTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5lbGVtZW50cy50YXNrZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5lbGVtZW50cy50YXNrZHVlZGF0ZS52YWx1ZTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50cy50YXNrcHJpb3JpdHkudmFsdWU7XG5cbiAgICAgIC8vIE1ha2UgbmV3IHRhc2sgZnJvbSBkYXRhXG4gICAgICBjb25zdCB0YXNrID0gQXBwQ29udHJvbGxlci5tYWtlVGFzayhcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGxpc3RpZCA9IGFjdGlvbkJhci5kYXRhc2V0Lmxpc3RpZDtcblxuICAgICAgLy8gQWRkIHRhc2sgdG8gY3VycmVudCBsaXN0IGFuZCB1cGRhdGUgbG9jYWxTdG9yYWdlXG4gICAgICBBcHBDb250cm9sbGVyLmFkZFRhc2soTm90ZWJvb2ssIGxpc3RpZCwgdGFzayk7XG4gICAgICBWaWV3Q29udHJvbGxlci5idWlsZExpc3QoTm90ZWJvb2ssIGxpc3RpZCk7XG4gICAgICBVdGlsaXRpZXMud3JpdGVUb0xvY2FsU3RvcmFnZShOb3RlYm9vayk7XG5cbiAgICAgIC8vIFJlc2V0IGZvcm0gYW5kIGNsb3NlIG1vZGFsXG4gICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICBWaWV3Q29udHJvbGxlci50b2dnbGVNb2RhbChuZXdUYXNrRGlhbG9nKTtcbiAgICB9KTtcblxuICAvLyBIYW5kbGUgY2FuY2VsZWQgbmV3IHRhc2sgZm9ybVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWNhbmNlbFwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stZm9ybVwiKTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIFZpZXdDb250cm9sbGVyLnRvZ2dsZU1vZGFsKG5ld1Rhc2tEaWFsb2cpO1xuICAgIH0pO1xuXG4gIC8vIE1hbmFnZSBzaWRlYmFyIG9wZW4vY2xvc2VkIHN0YXR1c1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXNpZGViYXJcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFZpZXdDb250cm9sbGVyLnRvZ2dsZVNpZGViYXIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=