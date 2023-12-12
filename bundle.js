/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/_mobile.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/_mobile.css ***!
  \**********************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (max-width: 600px) {
  /* -- Mobile Menu Styles -- */
  :root {
    font-size: 16px;
  }

  #content-container {
    display: block;
  }

  nav {
    position: fixed;
    left: 0;
    top: var(--topbar-height);
    background-color: #ffffff;

    z-index: 1000;

    width: 100dvw;
    height: calc(100% - var(--topbar-height));
    margin-left: -100dvw;
  }

  .sidebar-closed {
    margin-left: 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/_mobile.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B;IACE,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,eAAe;IACf,OAAO;IACP,yBAAyB;IACzB,yBAAyB;;IAEzB,aAAa;;IAEb,aAAa;IACb,yCAAyC;IACzC,oBAAoB;EACtB;;EAEA;IACE,cAAc;EAChB;AACF","sourcesContent":["@media screen and (max-width: 600px) {\n  /* -- Mobile Menu Styles -- */\n  :root {\n    font-size: 16px;\n  }\n\n  #content-container {\n    display: block;\n  }\n\n  nav {\n    position: fixed;\n    left: 0;\n    top: var(--topbar-height);\n    background-color: #ffffff;\n\n    z-index: 1000;\n\n    width: 100dvw;\n    height: calc(100% - var(--topbar-height));\n    margin-left: -100dvw;\n  }\n\n  .sidebar-closed {\n    margin-left: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
  position: fixed;
  top: var(--topbar-height);
  left: 0;
  right: 0;
  bottom: 0;
}

#content-container > nav,
#content-container > main {
  padding: 2rem;
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
  height: 100%;
  border-right: var(--color-accent) solid 1px;
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
  height: 100%;
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
  margin-top: auto;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap\");\n\n:root {\n  --color-primary: #233d4d;\n  --color-secondary: #fe7f2d;\n  --color-accent: #e1e1e1;\n  --color-danger: #ec0000;\n  --font-primary: \"Open Sans\", sans-serif;\n  --topbar-height: 50px;\n  --sidebar-width: 250px;\n  --content-height: calc(100vh - var(--topbar-height));\n  --task-input-size: 1.1rem;\n  font-size: 18px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#topbar {\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  height: var(--topbar-height);\n  background-color: var(--color-primary);\n  padding-left: 2rem;\n}\n\n#topbar > button {\n  padding: 5px;\n}\n\n#content-container {\n  display: flex;\n  position: fixed;\n  top: var(--topbar-height);\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#content-container > nav,\n#content-container > main {\n  padding: 2rem;\n}\n\n/* -- Top Bar -- */\n#close-sidebar {\n  border-radius: 3px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n\n  width: 40px;\n  height: 40px;\n\n  cursor: pointer;\n}\n\n#close-sidebar > div {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n}\n\n#close-sidebar:hover {\n  background-color: #1d3442;\n}\n\n/* --- Nav --- */\n\nnav {\n  height: 100%;\n  border-right: var(--color-accent) solid 1px;\n  width: var(--sidebar-width);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  flex-shrink: 0;\n\n  transition: margin-left 400ms ease-in-out;\n}\n\nnav > ul {\n  list-style: none;\n}\n\n.sidebar-closed {\n  margin-left: calc(-1 * var(--sidebar-width));\n}\n\n#new-list-button {\n  margin-top: auto;\n}\n\n.nav-item {\n  cursor: pointer;\n}\n\n.nav-item::before {\n  content: \"//\";\n  margin-right: 3px;\n}\n\n.nav-item:hover {\n  color: var(--color-secondary);\n}\n\n/* --- Main Content --- */\n\nmain {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.todo-list {\n  list-style: none;\n  width: min(100%, 500px);\n}\n\n.todo-list-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 5px;\n  background-color: #f0f0f0;\n  transition: background-color 500ms;\n}\n\n.todo-list-item:hover {\n  background-color: #dcdada;\n}\n\n.todo-list-item > p {\n  cursor: pointer;\n  margin-right: auto;\n}\n\n#action-bar {\n  margin-top: auto;\n}\n\n/* Dialog Menus */\n#task-detail-dialog:focus {\n  outline: none;\n}\n\n#task-detail-container {\n  width: 30vw;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#task-detail-container > div {\n  display: flex;\n  gap: 3px;\n  align-items: center;\n}\n\n#task-detail-header > .crossmark {\n  margin-left: auto;\n  width: 25px;\n  height: 25px;\n}\n\n/* Component Styles */\n\n.button {\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.button:hover {\n  background-color: #ffffff;\n}\n\n.button-circular {\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\n\n.button-danger {\n  background-color: var(--color-danger);\n  padding: 0.5rem;\n  border: 2px solid var(--color-danger);\n  color: #ffffff;\n}\n\n.button-danger:hover {\n  color: #000000;\n}\n\n.button-primary {\n  background-color: var(--color-secondary);\n  padding: 0.5rem;\n  border: 2px solid var(--color-secondary);\n}\n\n.button-rectangular {\n  border-radius: 50px;\n}\n\n.checkmark {\n  height: var(--task-input-size);\n  width: var(--task-input-size);\n  cursor: pointer;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: #929292;\n}\n\n.crossmark {\n  height: var(--task-input-size);\n  width: var(--task-input-size);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: solid 2px var(--color-danger);\n  background-color: var(--color-danger);\n  border-radius: 2px;\n  padding: 2px;\n}\n\n.crossmark::after {\n  content: \"\\D7\";\n  color: #ffffff;\n  font-size: 1rem;\n}\n\n.crossmark:hover {\n  background-color: white;\n  cursor: pointer;\n}\n\n.crossmark:hover::after {\n  color: var(--color-danger);\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.form-group {\n  display: flex;\n  gap: 1rem;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.modal {\n  margin: auto;\n  border: none;\n  border-radius: 5px;\n  padding: 1rem;\n}\n\n.modal::backdrop {\n  background-color: rgba(0, 0, 0, 0.434);\n}\n\n.divider {\n  background-color: var(--color-accent);\n  height: 1px;\n  width: 100%;\n}\n\n.priority-indicator {\n  height: 25px;\n  width: 5px;\n}\n\n.priority-default {\n  background-color: var(--color-primary);\n}\n\n.priority-high {\n  background-color: var(--color-danger);\n}\n\n.priority-medium {\n  background-color: var(--color-secondary);\n}\n\n.priority-low {\n  background-color: green;\n}\n\n/* --- Tag Styles --- */\n\nselect {\n  padding: 5px;\n}\n\ninput {\n  padding: 5px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/_mobile.css":
/*!********************************!*\
  !*** ./src/styles/_mobile.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mobile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./_mobile.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/_mobile.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
  const nav = document.querySelector("nav");

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
      nav_item.addEventListener("click", () => {
        buildList(Notebook, list);
        nav.classList.remove("sidebar-closed");
      });

      // Append nav item to nav
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
/* harmony import */ var _styles_mobile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/_mobile.css */ "./src/styles/_mobile.css");
/* harmony import */ var _components_appController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/appController */ "./src/components/appController.js");
/* harmony import */ var _components_viewController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/viewController */ "./src/components/viewController.js");
/* harmony import */ var _components_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/utilities */ "./src/components/utilities.js");






// App State
let Notebook = _components_utilities__WEBPACK_IMPORTED_MODULE_4__.Utilities.readLocalStorage();

// Initalize app and add event listeners to DOM elements
document.addEventListener("DOMContentLoaded", () => {
  // Initialize app when page is loaded
  (() => {
    _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.buildNav(Notebook);
    if (Notebook.length > 0) {
      _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.buildList(Notebook, Notebook[0]);
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
    _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.toggleModal(newListDialog);
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
      const new_list = _components_appController__WEBPACK_IMPORTED_MODULE_2__.AppController.makeList(input);

      // Add list to Notebook and update localStorage
      _components_appController__WEBPACK_IMPORTED_MODULE_2__.AppController.addList(Notebook, new_list);
      _components_utilities__WEBPACK_IMPORTED_MODULE_4__.Utilities.writeToLocalStorage(Notebook);

      // Redraw screen
      _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.buildNav(Notebook);
      _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.buildList(Notebook, new_list);

      form.reset();
      _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.toggleModal(newListDialog);
    });

  // Handle canceled new list form
  document
    .getElementById("new-list-cancel")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const form = document.getElementById("new-list-form");
      form.reset();
      _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.toggleModal(newListDialog);
    });

  // Delete list when delete list button is clicked
  document
    .getElementById("delete-list-button")
    .addEventListener("click", () => {
      // Find list from active actionBar id
      const id = Number(actionBar.dataset.listid);
      const list = _components_utilities__WEBPACK_IMPORTED_MODULE_4__.Utilities.findObjectFromID(Notebook, id);

      // Delete list and update localStorage
      _components_appController__WEBPACK_IMPORTED_MODULE_2__.AppController.deleteList(Notebook, list);
      _components_utilities__WEBPACK_IMPORTED_MODULE_4__.Utilities.writeToLocalStorage(Notebook);

      _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.buildNav(Notebook);

      // If Notebook is not empty, redraw first list
      if (Notebook.length != 0) {
        _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.buildList(Notebook, Notebook[0]);
      } else {
        // else clear list from screen
        _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.clearList();
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

    _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.toggleModal(newTaskDialog);
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
      const task = _components_appController__WEBPACK_IMPORTED_MODULE_2__.AppController.makeTask(
        title,
        description,
        dueDate,
        priority
      );
      const id = Number(actionBar.dataset.listid);
      const list = _components_utilities__WEBPACK_IMPORTED_MODULE_4__.Utilities.findObjectFromID(Notebook, id);

      // Add task to current list and update localStorage
      _components_appController__WEBPACK_IMPORTED_MODULE_2__.AppController.addTask(Notebook, list, task);
      _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.buildList(Notebook, list);
      _components_utilities__WEBPACK_IMPORTED_MODULE_4__.Utilities.writeToLocalStorage(Notebook);

      // Reset form and close modal
      form.reset();
      _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.toggleModal(newTaskDialog);
    });

  // Handle canceled new task form
  document
    .getElementById("new-task-cancel")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const form = document.getElementById("new-task-form");
      form.reset();
      _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.toggleModal(newTaskDialog);
    });

  // Manage sidebar open/closed status
  document
    .getElementById("close-sidebar")
    .addEventListener("click", _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.toggleSidebar);

  document.getElementById("task-detail-close").addEventListener("click", () => {
    _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.clearDetailedView();
    _components_viewController__WEBPACK_IMPORTED_MODULE_3__.ViewController.toggleModal(taskDetailDialog);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RkFBeUYsWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLCtEQUErRCw2Q0FBNkMsc0JBQXNCLEtBQUssMEJBQTBCLHFCQUFxQixLQUFLLFdBQVcsc0JBQXNCLGNBQWMsZ0NBQWdDLGdDQUFnQyxzQkFBc0Isc0JBQXNCLGdEQUFnRCwyQkFBMkIsS0FBSyx1QkFBdUIscUJBQXFCLEtBQUssR0FBRyxxQkFBcUI7QUFDdHdCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3ZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysa0hBQWtILGtCQUFrQjtBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1B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LEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsb0VBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDREQUFTOztBQUU1QjtBQUNBLE1BQU0sb0VBQWE7QUFDbkIsTUFBTSxzRUFBYztBQUNwQixNQUFNLDREQUFTOztBQUVmO0FBQ0E7QUFDQSxNQUFNLHNFQUFjO0FBQ3BCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNFQUFjO0FBQ3BCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNFQUFjOztBQUU3QztBQUNBLElBQUksc0VBQWM7QUFDbEIsSUFBSSxzRUFBYztBQUNsQixHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvX21vYmlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL19tb2JpbGUuY3NzPzNhMDQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy92aWV3Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLyogLS0gTW9iaWxlIE1lbnUgU3R5bGVzIC0tICovXG4gIDpyb290IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAjY29udGVudC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgbmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IHZhcigtLXRvcGJhci1oZWlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cbiAgICB6LWluZGV4OiAxMDAwO1xuXG4gICAgd2lkdGg6IDEwMGR2dztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvcGJhci1oZWlnaHQpKTtcbiAgICBtYXJnaW4tbGVmdDogLTEwMGR2dztcbiAgfVxuXG4gIC5zaWRlYmFyLWNsb3NlZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9fbW9iaWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDZCQUE2QjtFQUM3QjtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLE9BQU87SUFDUCx5QkFBeUI7SUFDekIseUJBQXlCOztJQUV6QixhQUFhOztJQUViLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAvKiAtLSBNb2JpbGUgTWVudSBTdHlsZXMgLS0gKi9cXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgI2NvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogdmFyKC0tdG9wYmFyLWhlaWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFxuICAgIHotaW5kZXg6IDEwMDA7XFxuXFxuICAgIHdpZHRoOiAxMDBkdnc7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9wYmFyLWhlaWdodCkpO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwMGR2dztcXG4gIH1cXG5cXG4gIC5zaWRlYmFyLWNsb3NlZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWNvbG9yLXByaW1hcnk6ICMyMzNkNGQ7XG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjZmU3ZjJkO1xuICAtLWNvbG9yLWFjY2VudDogI2UxZTFlMTtcbiAgLS1jb2xvci1kYW5nZXI6ICNlYzAwMDA7XG4gIC0tZm9udC1wcmltYXJ5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAtLXRvcGJhci1oZWlnaHQ6IDUwcHg7XG4gIC0tc2lkZWJhci13aWR0aDogMjUwcHg7XG4gIC0tY29udGVudC1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3BiYXItaGVpZ2h0KSk7XG4gIC0tdGFzay1pbnB1dC1zaXplOiAxLjFyZW07XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiN0b3BiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IHZhcigtLXRvcGJhci1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuXG4jdG9wYmFyID4gYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4jY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogdmFyKC0tdG9wYmFyLWhlaWdodCk7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbiNjb250ZW50LWNvbnRhaW5lciA+IG5hdixcbiNjb250ZW50LWNvbnRhaW5lciA+IG1haW4ge1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4vKiAtLSBUb3AgQmFyIC0tICovXG4jY2xvc2Utc2lkZWJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjbG9zZS1zaWRlYmFyID4gZGl2IHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI2Nsb3NlLXNpZGViYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQzNDQyO1xufVxuXG4vKiAtLS0gTmF2IC0tLSAqL1xuXG5uYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogdmFyKC0tY29sb3ItYWNjZW50KSBzb2xpZCAxcHg7XG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LXNocmluazogMDtcblxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCA0MDBtcyBlYXNlLWluLW91dDtcbn1cblxubmF2ID4gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uc2lkZWJhci1jbG9zZWQge1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNpZGViYXItd2lkdGgpKTtcbn1cblxuI25ldy1saXN0LWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi5uYXYtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIi8vXCI7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4ubmF2LWl0ZW06aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLyogLS0tIE1haW4gQ29udGVudCAtLS0gKi9cblxubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xufVxuXG4udG9kby1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IG1pbigxMDAlLCA1MDBweCk7XG59XG5cbi50b2RvLWxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXM7XG59XG5cbi50b2RvLWxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RhZGE7XG59XG5cbi50b2RvLWxpc3QtaXRlbSA+IHAge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuI2FjdGlvbi1iYXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4vKiBEaWFsb2cgTWVudXMgKi9cbiN0YXNrLWRldGFpbC1kaWFsb2c6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jdGFzay1kZXRhaWwtY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuI3Rhc2stZGV0YWlsLWNvbnRhaW5lciA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jdGFzay1kZXRhaWwtaGVhZGVyID4gLmNyb3NzbWFyayB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5cbi5idXR0b24ge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idXR0b24tY2lyY3VsYXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5idXR0b24tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ1dHRvbi1kYW5nZXI6aG92ZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmJ1dHRvbi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uYnV0dG9uLXJlY3Rhbmd1bGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLmNoZWNrbWFyayB7XG4gIGhlaWdodDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcbiAgd2lkdGg6IHZhcigtLXRhc2staW5wdXQtc2l6ZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogIzkyOTI5Mjtcbn1cblxuLmNyb3NzbWFyayB7XG4gIGhlaWdodDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcbiAgd2lkdGg6IHZhcigtLXRhc2staW5wdXQtc2l6ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmNyb3NzbWFyazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcXFxEN1wiO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY3Jvc3NtYXJrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNyb3NzbWFyazpob3Zlcjo6YWZ0ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tb2RhbCB7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5tb2RhbDo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM0KTtcbn1cblxuLmRpdmlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcmlvcml0eS1pbmRpY2F0b3Ige1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi5wcmlvcml0eS1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5wcmlvcml0eS1oaWdoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbn1cblxuLnByaW9yaXR5LW1lZGl1bSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5wcmlvcml0eS1sb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLyogLS0tIFRhZyBTdHlsZXMgLS0tICovXG5cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2QyxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG9EQUFvRDtFQUNwRCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7O0VBRTdCLFdBQVc7RUFDWCxZQUFZOztFQUVaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsWUFBWTtFQUNaLDJDQUEyQztFQUMzQywyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsY0FBYzs7RUFFZCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjMjMzZDRkO1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNmZTdmMmQ7XFxuICAtLWNvbG9yLWFjY2VudDogI2UxZTFlMTtcXG4gIC0tY29sb3ItZGFuZ2VyOiAjZWMwMDAwO1xcbiAgLS1mb250LXByaW1hcnk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS10b3BiYXItaGVpZ2h0OiA1MHB4O1xcbiAgLS1zaWRlYmFyLXdpZHRoOiAyNTBweDtcXG4gIC0tY29udGVudC1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3BiYXItaGVpZ2h0KSk7XFxuICAtLXRhc2staW5wdXQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jdG9wYmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IHZhcigtLXRvcGJhci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbiN0b3BiYXIgPiBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogdmFyKC0tdG9wYmFyLWhlaWdodCk7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbiNjb250ZW50LWNvbnRhaW5lciA+IG5hdixcXG4jY29udGVudC1jb250YWluZXIgPiBtYWluIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi8qIC0tIFRvcCBCYXIgLS0gKi9cXG4jY2xvc2Utc2lkZWJhciB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY2xvc2Utc2lkZWJhciA+IGRpdiB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNjbG9zZS1zaWRlYmFyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDM0NDI7XFxufVxcblxcbi8qIC0tLSBOYXYgLS0tICovXFxuXFxubmF2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yaWdodDogdmFyKC0tY29sb3ItYWNjZW50KSBzb2xpZCAxcHg7XFxuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcblxcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgNDAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm5hdiA+IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLWNsb3NlZCB7XFxuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNpZGViYXItd2lkdGgpKTtcXG59XFxuXFxuI25ldy1saXN0LWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWl0ZW06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiLy9cXFwiO1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcblxcbi5uYXYtaXRlbTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLyogLS0tIE1haW4gQ29udGVudCAtLS0gKi9cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgd2lkdGg6IG1pbigxMDAlLCA1MDBweCk7XFxufVxcblxcbi50b2RvLWxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXM7XFxufVxcblxcbi50b2RvLWxpc3QtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkYWRhO1xcbn1cXG5cXG4udG9kby1saXN0LWl0ZW0gPiBwIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuI2FjdGlvbi1iYXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLyogRGlhbG9nIE1lbnVzICovXFxuI3Rhc2stZGV0YWlsLWRpYWxvZzpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdGFzay1kZXRhaWwtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiN0YXNrLWRldGFpbC1jb250YWluZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3B4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2stZGV0YWlsLWhlYWRlciA+IC5jcm9zc21hcmsge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xcblxcbi5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5idXR0b24tY2lyY3VsYXIge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5idXR0b24tZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1kYW5nZXIpO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5idXR0b24tZGFuZ2VyOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uYnV0dG9uLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxufVxcblxcbi5idXR0b24tcmVjdGFuZ3VsYXIge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmNoZWNrbWFyayB7XFxuICBoZWlnaHQ6IHZhcigtLXRhc2staW5wdXQtc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiAjOTI5MjkyO1xcbn1cXG5cXG4uY3Jvc3NtYXJrIHtcXG4gIGhlaWdodDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS10YXNrLWlucHV0LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLWRhbmdlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uY3Jvc3NtYXJrOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcXEQ3XFxcIjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY3Jvc3NtYXJrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3Jvc3NtYXJrOmhvdmVyOjphZnRlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JtLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm1vZGFsOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM0KTtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXG4gIGhlaWdodDogMXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcmlvcml0eS1pbmRpY2F0b3Ige1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDVweDtcXG59XFxuXFxuLnByaW9yaXR5LWRlZmF1bHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLyogLS0tIFRhZyBTdHlsZXMgLS0tICovXFxuXFxuc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fbW9iaWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vX21vYmlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmV4cG9ydCBjb25zdCBBcHBDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgbWFrZUxpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgICByZXR1cm4gbmV3IExpc3QobGlzdE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGFkZExpc3QgPSAoTm90ZWJvb2ssIG5ld0xpc3QpID0+IHtcbiAgICBOb3RlYm9vay5wdXNoKG5ld0xpc3QpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUxpc3QgPSAoTm90ZWJvb2ssIGxpc3QpID0+IHtcbiAgICBjb25zdCBjb25maXJtYXRpb24gPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGxpc3Q/XCIpO1xuXG4gICAgaWYgKGNvbmZpcm1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gVXRpbGl0aWVzLmZpbmRJbmRleEZyb21JRChOb3RlYm9vaywgbGlzdC5pZCk7XG5cbiAgICBOb3RlYm9vay5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9IChOb3RlYm9vaywgbGlzdCwgdGFzaykgPT4ge1xuICAgIC8vIGNvbnN0IGlkID0gTnVtYmVyKGxpc3RpZCk7XG4gICAgLy8gY29uc3QgbGlzdCA9IFV0aWxpdGllcy5maW5kT2JqZWN0RnJvbUlEKE5vdGVib29rLCBpZCk7XG4gICAgbGlzdC50YXNrcy5wdXNoKHRhc2spO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrT2ZmVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChsaXN0LCB0YXNraWQpID0+IHtcbiAgICBjb25zdCBjb25maXJtYXRpb24gPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XCIpO1xuXG4gICAgaWYgKGNvbmZpcm1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gVXRpbGl0aWVzLmZpbmRJbmRleEZyb21JRChsaXN0LnRhc2tzLCB0YXNraWQpO1xuXG4gICAgbGlzdC50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbWFrZUxpc3QsXG4gICAgYWRkTGlzdCxcbiAgICBkZWxldGVMaXN0LFxuICAgIG1ha2VUYXNrLFxuICAgIGFkZFRhc2ssXG4gICAgY2hlY2tPZmZUYXNrLFxuICAgIGRlbGV0ZVRhc2ssXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmV4cG9ydCBjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuaWQgPSBVdGlsaXRpZXMuZ2VuZXJhdGVJRCgpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5pZCA9IFV0aWxpdGllcy5nZW5lcmF0ZUlEKCk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgVXRpbGl0aWVzID0gKCgpID0+IHtcbiAgY29uc3QgZmluZE9iamVjdEZyb21JRCA9IChBcnJheSwgaWQpID0+IHtcbiAgICBmb3IgKGxldCBpbmRleCBpbiBBcnJheSkge1xuICAgICAgaWYgKEFycmF5W2luZGV4XS5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5W2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmluZEluZGV4RnJvbUlEID0gKEFycmF5LCBpZCkgPT4ge1xuICAgIGZvciAobGV0IGluZGV4IGluIEFycmF5KSB7XG4gICAgICBpZiAoQXJyYXlbaW5kZXhdLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlSUQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xuICB9O1xuXG4gIGNvbnN0IHdyaXRlVG9Mb2NhbFN0b3JhZ2UgPSAoTm90ZWJvb2spID0+IHtcbiAgICBsZXQgbm90ZWJvb2sgPSBKU09OLnN0cmluZ2lmeShOb3RlYm9vayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJub3RlYm9va1wiLCBub3RlYm9vayk7XG4gIH07XG5cbiAgY29uc3QgcmVhZExvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJub3RlYm9va1wiKSA9PT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJub3RlYm9va1wiLCBcIltdXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5ub3RlYm9vayk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBmaW5kT2JqZWN0RnJvbUlELFxuICAgIGZpbmRJbmRleEZyb21JRCxcbiAgICBnZW5lcmF0ZUlELFxuICAgIHdyaXRlVG9Mb2NhbFN0b3JhZ2UsXG4gICAgcmVhZExvY2FsU3RvcmFnZSxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSBcIi4vYXBwQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmV4cG9ydCBjb25zdCBWaWV3Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIC8vICotLS0gU0hBUkVEIERPTSBlbGVtZW50cyAtLS0qIC8vXG4gIGNvbnN0IHRvZG9fbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1saXN0XCIpO1xuICBjb25zdCBsaXN0X2hlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtaGVhZGluZ1wiKTtcbiAgY29uc3QgdGFza0RldGFpbERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWwtZGlhbG9nXCIpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuXG4gIC8vICAgQ29udHJvbCB2aWV3IGFuZCBET00gaW50ZXJhY3Rpb25zXG4gIGNvbnN0IGJ1aWxkTmF2ID0gKE5vdGVib29rKSA9PiB7XG4gICAgY29uc3QgbmF2X2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdl9saXN0XCIpO1xuICAgIC8vIFJlbW92ZSBhbGwgbmF2IGl0ZW1zXG4gICAgbmF2X2xpc3QucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICAvLyBDcmVhdGUgRE9NIGVsZW1lbnQgZm9yIGVhY2ggbGlzdCBpbiBOb3RlYm9va1xuICAgIGZvciAobGV0IGluZGV4IGluIE5vdGVib29rKSB7XG4gICAgICBjb25zdCBsaXN0ID0gTm90ZWJvb2tbaW5kZXhdO1xuICAgICAgLy8gQ3JlYXRlIERPTSBlbGVtZW50c1xuICAgICAgY29uc3QgbmF2X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBuYXZfaXRlbS50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgICAgIG5hdl9pdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiKTtcbiAgICAgIG5hdl9pdGVtLmlkID0gbGlzdC5pZDtcblxuICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggbmF2IGl0ZW1cbiAgICAgIG5hdl9pdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGJ1aWxkTGlzdChOb3RlYm9vaywgbGlzdCk7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWJhci1jbG9zZWRcIik7XG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwZW5kIG5hdiBpdGVtIHRvIG5hdlxuICAgICAgbmF2X2xpc3QuYXBwZW5kQ2hpbGQobmF2X2l0ZW0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBidWlsZExpc3QgPSAoTm90ZWJvb2ssIGxpc3QpID0+IHtcbiAgICBjb25zdCBpZCA9IGxpc3QuaWQ7XG5cbiAgICAvLyBTZXQgYWN0aXZlIGxpc3RcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbi1iYXJcIikuZGF0YXNldC5saXN0aWQgPSBpZDtcblxuICAgIGxpc3RfaGVhZGluZy50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcblxuICAgIHRvZG9fbGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIC8vIENyZWF0ZSBsaXN0IGl0ZW0gZWxlbWVudCBmb3IgZWFjaCB0YXNrIGluIGxpc3QudGFza3NcbiAgICBmb3IgKGNvbnN0IGluZGV4IGluIGxpc3QudGFza3MpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBsaXN0LnRhc2tzW2luZGV4XTtcblxuICAgICAgY29uc3QgbGlzdF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbGlzdF9pdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtaXRlbVwiKTtcblxuICAgICAgLy8gQ3JlYXRlIGNoZWNrYm94IGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrbWFya1wiKTtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAvLyBUb2dnbGUgdGFzay5jb21wbGV0ZWQgYW5kIHVwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgQXBwQ29udHJvbGxlci5jaGVja09mZlRhc2sodGFzayk7XG4gICAgICAgIFV0aWxpdGllcy53cml0ZVRvTG9jYWxTdG9yYWdlKE5vdGVib29rKTtcblxuICAgICAgICBidWlsZExpc3QoTm90ZWJvb2ssIGxpc3QpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBjcm9zcyBtYXJrIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgICAgIGNvbnN0IGNyb3NzbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjcm9zc21hcmsuY2xhc3NMaXN0LmFkZChcImNyb3NzbWFya1wiKTtcbiAgICAgIGNyb3NzbWFyay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvLyBEZWxldGUgdGFzayBhbmQgdXBkYXRlIGxvY2FsU3RvcmFnZVxuICAgICAgICBBcHBDb250cm9sbGVyLmRlbGV0ZVRhc2sobGlzdCwgdGFzay5pZCk7XG4gICAgICAgIFV0aWxpdGllcy53cml0ZVRvTG9jYWxTdG9yYWdlKE5vdGVib29rKTtcblxuICAgICAgICBidWlsZExpc3QoTm90ZWJvb2ssIGxpc3QpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBidWlsZERldGFpbGVkVmlldyh0YXNrKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW5kZXIgaXRlbSB3aXRoIHN0cmlrZXRocm91Z2ggaWYgY29tcGxldGVkXG4gICAgICBpZiAodHJ1ZSA9PT0gdGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWluZGljYXRvclwiKTtcblxuICAgICAgaWYgKFwiaGlnaFwiID09PSB0YXNrLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWhpZ2hcIik7XG4gICAgICB9IGVsc2UgaWYgKFwibWVkaXVtXCIgPT09IHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbWVkaXVtXCIpO1xuICAgICAgfSBlbHNlIGlmIChcImxvd1wiID09PSB0YXNrLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxvd1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1kZWZhdWx0XCIpO1xuICAgICAgfVxuXG4gICAgICBsaXN0X2l0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChjcm9zc21hcmspO1xuXG4gICAgICB0b2RvX2xpc3QuYXBwZW5kQ2hpbGQobGlzdF9pdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xlYXJMaXN0ID0gKCkgPT4ge1xuICAgIHRvZG9fbGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICBsaXN0X2hlYWRpbmcudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZU1vZGFsID0gKGRpYWxvZykgPT4ge1xuICAgIGlmIChkaWFsb2cuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlbmVkXCIpKSB7XG4gICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH1cblxuICAgIGRpYWxvZy5jbGFzc0xpc3QudG9nZ2xlKFwib3BlbmVkXCIpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlYmFyLWNsb3NlZFwiKTtcbiAgfTtcblxuICBjb25zdCBidWlsZERldGFpbGVkVmlldyA9ICh0YXNrKSA9PiB7XG4gICAgLy8gZG8gc3R1ZmZcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWwtZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWwtZHVlZGF0ZVwiKTtcbiAgICBkdWVkYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsLXByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICAgIHRvZ2dsZU1vZGFsKHRhc2tEZXRhaWxEaWFsb2cpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRGV0YWlsZWRWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWwtZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWwtZHVlZGF0ZVwiKTtcbiAgICBkdWVkYXRlLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC1wcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBidWlsZE5hdixcbiAgICBidWlsZExpc3QsXG4gICAgY2xlYXJMaXN0LFxuICAgIHRvZ2dsZU1vZGFsLFxuICAgIHRvZ2dsZVNpZGViYXIsXG4gICAgYnVpbGREZXRhaWxlZFZpZXcsXG4gICAgY2xlYXJEZXRhaWxlZFZpZXcsXG4gIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9fbW9iaWxlLmNzc1wiO1xuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgVmlld0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ZpZXdDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tIFwiLi9jb21wb25lbnRzL3V0aWxpdGllc1wiO1xuXG4vLyBBcHAgU3RhdGVcbmxldCBOb3RlYm9vayA9IFV0aWxpdGllcy5yZWFkTG9jYWxTdG9yYWdlKCk7XG5cbi8vIEluaXRhbGl6ZSBhcHAgYW5kIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gRE9NIGVsZW1lbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vIEluaXRpYWxpemUgYXBwIHdoZW4gcGFnZSBpcyBsb2FkZWRcbiAgKCgpID0+IHtcbiAgICBWaWV3Q29udHJvbGxlci5idWlsZE5hdihOb3RlYm9vayk7XG4gICAgaWYgKE5vdGVib29rLmxlbmd0aCA+IDApIHtcbiAgICAgIFZpZXdDb250cm9sbGVyLmJ1aWxkTGlzdChOb3RlYm9vaywgTm90ZWJvb2tbMF0pO1xuICAgIH1cbiAgfSkoKTtcblxuICAvLyBTaGFyZWQgRE9NIEVsZW1lbnRzXG4gIGNvbnN0IG5ld0xpc3REaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1saXN0LWRpYWxvZ1wiKTtcbiAgY29uc3QgbmV3VGFza0RpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stZGlhbG9nXCIpO1xuICBjb25zdCB0YXNrRGV0YWlsRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC1kaWFsb2dcIik7XG4gIGNvbnN0IGFjdGlvbkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uLWJhclwiKTtcblxuICAvLyAqLS0tIEVWRU5UIExJU1RFTkVSUyAtLS0qIC8vXG4gIC8vIE9wZW4gbmV3IGxpc3QgbW9kYWwgd2l0aCBuZXcgbGlzdCBidXR0b25cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctbGlzdC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBWaWV3Q29udHJvbGxlci50b2dnbGVNb2RhbChuZXdMaXN0RGlhbG9nKTtcbiAgfSk7XG5cbiAgLy8gSGFuZGxlIHN1Ym1pdHRlZCBuZXcgbGlzdCBmb3JtXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibmV3LWxpc3QtZm9ybVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gR2F0aGVyIHN1Ym1pdHRlZCBmb3JtIGRhdGFcbiAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zdCBpbnB1dCA9IGZvcm0uZWxlbWVudHMubGlzdG5hbWUudmFsdWU7XG5cbiAgICAgIC8vIE1ha2UgbmV3IGxpc3QgZnJvbSBkYXRhXG4gICAgICBjb25zdCBuZXdfbGlzdCA9IEFwcENvbnRyb2xsZXIubWFrZUxpc3QoaW5wdXQpO1xuXG4gICAgICAvLyBBZGQgbGlzdCB0byBOb3RlYm9vayBhbmQgdXBkYXRlIGxvY2FsU3RvcmFnZVxuICAgICAgQXBwQ29udHJvbGxlci5hZGRMaXN0KE5vdGVib29rLCBuZXdfbGlzdCk7XG4gICAgICBVdGlsaXRpZXMud3JpdGVUb0xvY2FsU3RvcmFnZShOb3RlYm9vayk7XG5cbiAgICAgIC8vIFJlZHJhdyBzY3JlZW5cbiAgICAgIFZpZXdDb250cm9sbGVyLmJ1aWxkTmF2KE5vdGVib29rKTtcbiAgICAgIFZpZXdDb250cm9sbGVyLmJ1aWxkTGlzdChOb3RlYm9vaywgbmV3X2xpc3QpO1xuXG4gICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICBWaWV3Q29udHJvbGxlci50b2dnbGVNb2RhbChuZXdMaXN0RGlhbG9nKTtcbiAgICB9KTtcblxuICAvLyBIYW5kbGUgY2FuY2VsZWQgbmV3IGxpc3QgZm9ybVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm5ldy1saXN0LWNhbmNlbFwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWxpc3QtZm9ybVwiKTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIFZpZXdDb250cm9sbGVyLnRvZ2dsZU1vZGFsKG5ld0xpc3REaWFsb2cpO1xuICAgIH0pO1xuXG4gIC8vIERlbGV0ZSBsaXN0IHdoZW4gZGVsZXRlIGxpc3QgYnV0dG9uIGlzIGNsaWNrZWRcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGUtbGlzdC1idXR0b25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIEZpbmQgbGlzdCBmcm9tIGFjdGl2ZSBhY3Rpb25CYXIgaWRcbiAgICAgIGNvbnN0IGlkID0gTnVtYmVyKGFjdGlvbkJhci5kYXRhc2V0Lmxpc3RpZCk7XG4gICAgICBjb25zdCBsaXN0ID0gVXRpbGl0aWVzLmZpbmRPYmplY3RGcm9tSUQoTm90ZWJvb2ssIGlkKTtcblxuICAgICAgLy8gRGVsZXRlIGxpc3QgYW5kIHVwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgICAgIEFwcENvbnRyb2xsZXIuZGVsZXRlTGlzdChOb3RlYm9vaywgbGlzdCk7XG4gICAgICBVdGlsaXRpZXMud3JpdGVUb0xvY2FsU3RvcmFnZShOb3RlYm9vayk7XG5cbiAgICAgIFZpZXdDb250cm9sbGVyLmJ1aWxkTmF2KE5vdGVib29rKTtcblxuICAgICAgLy8gSWYgTm90ZWJvb2sgaXMgbm90IGVtcHR5LCByZWRyYXcgZmlyc3QgbGlzdFxuICAgICAgaWYgKE5vdGVib29rLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIFZpZXdDb250cm9sbGVyLmJ1aWxkTGlzdChOb3RlYm9vaywgTm90ZWJvb2tbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZWxzZSBjbGVhciBsaXN0IGZyb20gc2NyZWVuXG4gICAgICAgIFZpZXdDb250cm9sbGVyLmNsZWFyTGlzdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIC8vIE9wZW4gbmV3IHRhc2sgbW9kYWwgd2hlbiBidXR0b24gaXMgY2xpY2tlZFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIE5vdGVib29rIGhhcyBhbnkgbGlzdHNcbiAgICBpZiAoTm90ZWJvb2subGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBJZiBOb3RlYm9vayBoYXMgbm90IGxpc3QsIHByb21wdCB1c2VyIHRvIG1ha2UgYSBsaXN0XG4gICAgICBhbGVydChcIlBsZWFzZSBtYWtlIGEgbGlzdCBmaXJzdFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBWaWV3Q29udHJvbGxlci50b2dnbGVNb2RhbChuZXdUYXNrRGlhbG9nKTtcbiAgfSk7XG5cbiAgLy8gSGFuZGxlIHN1Ym1pdHRlZCBuZXcgdGFzayBmb3JtXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stZm9ybVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gR2F0aGVyIHN1Ym1pdHRlZCBmb3JtIGRhdGFcbiAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zdCB0aXRsZSA9IGZvcm0uZWxlbWVudHMudGFza3RpdGxlLnZhbHVlO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLmVsZW1lbnRzLnRhc2tkZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzLnRhc2tkdWVkYXRlLnZhbHVlO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzLnRhc2twcmlvcml0eS52YWx1ZTtcblxuICAgICAgLy8gTWFrZSBuZXcgdGFzayBmcm9tIGRhdGFcbiAgICAgIGNvbnN0IHRhc2sgPSBBcHBDb250cm9sbGVyLm1ha2VUYXNrKFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5XG4gICAgICApO1xuICAgICAgY29uc3QgaWQgPSBOdW1iZXIoYWN0aW9uQmFyLmRhdGFzZXQubGlzdGlkKTtcbiAgICAgIGNvbnN0IGxpc3QgPSBVdGlsaXRpZXMuZmluZE9iamVjdEZyb21JRChOb3RlYm9vaywgaWQpO1xuXG4gICAgICAvLyBBZGQgdGFzayB0byBjdXJyZW50IGxpc3QgYW5kIHVwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgICAgIEFwcENvbnRyb2xsZXIuYWRkVGFzayhOb3RlYm9vaywgbGlzdCwgdGFzayk7XG4gICAgICBWaWV3Q29udHJvbGxlci5idWlsZExpc3QoTm90ZWJvb2ssIGxpc3QpO1xuICAgICAgVXRpbGl0aWVzLndyaXRlVG9Mb2NhbFN0b3JhZ2UoTm90ZWJvb2spO1xuXG4gICAgICAvLyBSZXNldCBmb3JtIGFuZCBjbG9zZSBtb2RhbFxuICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgVmlld0NvbnRyb2xsZXIudG9nZ2xlTW9kYWwobmV3VGFza0RpYWxvZyk7XG4gICAgfSk7XG5cbiAgLy8gSGFuZGxlIGNhbmNlbGVkIG5ldyB0YXNrIGZvcm1cbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1jYW5jZWxcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWZvcm1cIik7XG4gICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICBWaWV3Q29udHJvbGxlci50b2dnbGVNb2RhbChuZXdUYXNrRGlhbG9nKTtcbiAgICB9KTtcblxuICAvLyBNYW5hZ2Ugc2lkZWJhciBvcGVuL2Nsb3NlZCBzdGF0dXNcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1zaWRlYmFyXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBWaWV3Q29udHJvbGxlci50b2dnbGVTaWRlYmFyKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsLWNsb3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgVmlld0NvbnRyb2xsZXIuY2xlYXJEZXRhaWxlZFZpZXcoKTtcbiAgICBWaWV3Q29udHJvbGxlci50b2dnbGVNb2RhbCh0YXNrRGV0YWlsRGlhbG9nKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==