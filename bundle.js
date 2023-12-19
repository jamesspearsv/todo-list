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

  #task-detail-container {
    width: 80vw;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/_mobile.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;;EAE7B;IACE,cAAc;EAChB;;EAEA;IACE,eAAe;IACf,OAAO;IACP,yBAAyB;IACzB,yBAAyB;;IAEzB,aAAa;;IAEb,aAAa;IACb,yCAAyC;IACzC,oBAAoB;EACtB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":["@media screen and (max-width: 600px) {\n  /* -- Mobile Menu Styles -- */\n\n  #content-container {\n    display: block;\n  }\n\n  nav {\n    position: fixed;\n    left: 0;\n    top: var(--topbar-height);\n    background-color: #ffffff;\n\n    z-index: 1000;\n\n    width: 100dvw;\n    height: calc(100% - var(--topbar-height));\n    margin-left: -100dvw;\n  }\n\n  .sidebar-closed {\n    margin-left: 0;\n  }\n\n  #task-detail-container {\n    width: 80vw;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUZBQXlGLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSywrREFBK0QsNERBQTRELHFCQUFxQixLQUFLLFdBQVcsc0JBQXNCLGNBQWMsZ0NBQWdDLGdDQUFnQyxzQkFBc0Isc0JBQXNCLGdEQUFnRCwyQkFBMkIsS0FBSyx1QkFBdUIscUJBQXFCLEtBQUssOEJBQThCLGtCQUFrQixLQUFLLEdBQUcscUJBQXFCO0FBQ3J4QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkN2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtIQUFrSCxrQkFBa0I7QUFDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLFdBQVcsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxN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QixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLG9FQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0REFBUzs7QUFFNUI7QUFDQSxNQUFNLG9FQUFhO0FBQ25CLE1BQU0sc0VBQWM7QUFDcEIsTUFBTSw0REFBUzs7QUFFZjtBQUNBO0FBQ0EsTUFBTSxzRUFBYztBQUNwQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzRUFBYztBQUNwQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzRUFBYzs7QUFFN0M7QUFDQSxJQUFJLHNFQUFjO0FBQ2xCLElBQUksc0VBQWM7QUFDbEIsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL19tb2JpbGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9fbW9iaWxlLmNzcz8zYTA0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdmlld0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC8qIC0tIE1vYmlsZSBNZW51IFN0eWxlcyAtLSAqL1xuXG4gICNjb250ZW50LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBuYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogdmFyKC0tdG9wYmFyLWhlaWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuICAgIHotaW5kZXg6IDEwMDA7XG5cbiAgICB3aWR0aDogMTAwZHZ3O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9wYmFyLWhlaWdodCkpO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwZHZ3O1xuICB9XG5cbiAgLnNpZGViYXItY2xvc2VkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICN0YXNrLWRldGFpbC1jb250YWluZXIge1xuICAgIHdpZHRoOiA4MHZ3O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX21vYmlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2QkFBNkI7O0VBRTdCO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLHlCQUF5Qjs7SUFFekIsYUFBYTs7SUFFYixhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLyogLS0gTW9iaWxlIE1lbnUgU3R5bGVzIC0tICovXFxuXFxuICAjY29udGVudC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiB2YXIoLS10b3BiYXItaGVpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG5cXG4gICAgei1pbmRleDogMTAwMDtcXG5cXG4gICAgd2lkdGg6IDEwMGR2dztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b3BiYXItaGVpZ2h0KSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwZHZ3O1xcbiAgfVxcblxcbiAgLnNpZGViYXItY2xvc2VkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAjdGFzay1kZXRhaWwtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tY29sb3ItcHJpbWFyeTogIzIzM2Q0ZDtcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNmZTdmMmQ7XG4gIC0tY29sb3ItYWNjZW50OiAjZTFlMWUxO1xuICAtLWNvbG9yLWRhbmdlcjogI2VjMDAwMDtcbiAgLS1mb250LXByaW1hcnk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tdG9wYmFyLWhlaWdodDogNTBweDtcbiAgLS1zaWRlYmFyLXdpZHRoOiAyNTBweDtcbiAgLS1jb250ZW50LWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLXRvcGJhci1oZWlnaHQpKTtcbiAgLS10YXNrLWlucHV0LXNpemU6IDEuMXJlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI3RvcGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogdmFyKC0tdG9wYmFyLWhlaWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbiN0b3BiYXIgPiBidXR0b24ge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbiNjb250ZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiB2YXIoLS10b3BiYXItaGVpZ2h0KTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuI2NvbnRlbnQtY29udGFpbmVyID4gbmF2LFxuI2NvbnRlbnQtY29udGFpbmVyID4gbWFpbiB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi8qIC0tIFRvcCBCYXIgLS0gKi9cbiNjbG9zZS1zaWRlYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2Nsb3NlLXNpZGViYXIgPiBkaXYge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jY2xvc2Utc2lkZWJhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDM0NDI7XG59XG5cbi8qIC0tLSBOYXYgLS0tICovXG5cbm5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1jb2xvci1hY2NlbnQpIHNvbGlkIDFweDtcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDQwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5uYXYgPiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWNsb3NlZCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc2lkZWJhci13aWR0aCkpO1xufVxuXG4jbmV3LWxpc3QtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLm5hdi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiLy9cIjtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5uYXYtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4vKiAtLS0gTWFpbiBDb250ZW50IC0tLSAqL1xuXG5tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi50b2RvLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogbWluKDEwMCUsIDUwMHB4KTtcbn1cblxuLnRvZG8tbGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcztcbn1cblxuLnRvZG8tbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGFkYTtcbn1cblxuLnRvZG8tbGlzdC1pdGVtID4gcCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4jYWN0aW9uLWJhciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi8qIERpYWxvZyBNZW51cyAqL1xuI3Rhc2stZGV0YWlsLWRpYWxvZzpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiN0YXNrLWRldGFpbC1jb250YWluZXIge1xuICB3aWR0aDogMzB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4jdGFzay1kZXRhaWwtY29udGFpbmVyID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiN0YXNrLWRldGFpbC1oZWFkZXIgPiAuY3Jvc3NtYXJrIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cblxuLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ1dHRvbi1jaXJjdWxhciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmJ1dHRvbi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWRhbmdlcik7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnV0dG9uLWRhbmdlcjpob3ZlciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYnV0dG9uLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5idXR0b24tcmVjdGFuZ3VsYXIge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uY2hlY2ttYXJrIHtcbiAgaGVpZ2h0OiB2YXIoLS10YXNrLWlucHV0LXNpemUpO1xuICB3aWR0aDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjOTI5MjkyO1xufVxuXG4uY3Jvc3NtYXJrIHtcbiAgaGVpZ2h0OiB2YXIoLS10YXNrLWlucHV0LXNpemUpO1xuICB3aWR0aDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLWRhbmdlcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uY3Jvc3NtYXJrOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFxcXEQ3XCI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jcm9zc21hcms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3Jvc3NtYXJrOmhvdmVyOjphZnRlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1vZGFsIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLm1vZGFsOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MzQpO1xufVxuXG4uZGl2aWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByaW9yaXR5LWluZGljYXRvciB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDVweDtcbn1cblxuLnByaW9yaXR5LWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnByaW9yaXR5LWhpZ2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xufVxuXG4ucHJpb3JpdHktbWVkaXVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLnByaW9yaXR5LWxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4vKiAtLS0gVGFnIFN0eWxlcyAtLS0gKi9cblxuc2VsZWN0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5pbnB1dCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsb0RBQW9EO0VBQ3BELHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHNDQUFzQztFQUN0QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2Qjs7RUFFN0IsV0FBVztFQUNYLFlBQVk7O0VBRVosZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxZQUFZO0VBQ1osMkNBQTJDO0VBQzNDLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxjQUFjOztFQUVkLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLHVCQUF1Qjs7QUFFdkI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLXByaW1hcnk6ICMyMzNkNGQ7XFxuICAtLWNvbG9yLXNlY29uZGFyeTogI2ZlN2YyZDtcXG4gIC0tY29sb3ItYWNjZW50OiAjZTFlMWUxO1xcbiAgLS1jb2xvci1kYW5nZXI6ICNlYzAwMDA7XFxuICAtLWZvbnQtcHJpbWFyeTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAtLXRvcGJhci1oZWlnaHQ6IDUwcHg7XFxuICAtLXNpZGViYXItd2lkdGg6IDI1MHB4O1xcbiAgLS1jb250ZW50LWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLXRvcGJhci1oZWlnaHQpKTtcXG4gIC0tdGFzay1pbnB1dC1zaXplOiAxLjFyZW07XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiN0b3BiYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogdmFyKC0tdG9wYmFyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuI3RvcGJhciA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiB2YXIoLS10b3BiYXItaGVpZ2h0KTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuI2NvbnRlbnQtY29udGFpbmVyID4gbmF2LFxcbiNjb250ZW50LWNvbnRhaW5lciA+IG1haW4ge1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLyogLS0gVG9wIEJhciAtLSAqL1xcbiNjbG9zZS1zaWRlYmFyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjbG9zZS1zaWRlYmFyID4gZGl2IHtcXG4gIGhlaWdodDogMXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Nsb3NlLXNpZGViYXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMzQ0MjtcXG59XFxuXFxuLyogLS0tIE5hdiAtLS0gKi9cXG5cXG5uYXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1jb2xvci1hY2NlbnQpIHNvbGlkIDFweDtcXG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuXFxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCA0MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxubmF2ID4gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItY2xvc2VkIHtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc2lkZWJhci13aWR0aCkpO1xcbn1cXG5cXG4jbmV3LWxpc3QtYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5uYXYtaXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtaXRlbTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIvL1xcXCI7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG59XFxuXFxuLm5hdi1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG4vKiAtLS0gTWFpbiBDb250ZW50IC0tLSAqL1xcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB3aWR0aDogbWluKDEwMCUsIDUwMHB4KTtcXG59XFxuXFxuLnRvZG8tbGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcztcXG59XFxuXFxuLnRvZG8tbGlzdC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RhZGE7XFxufVxcblxcbi50b2RvLWxpc3QtaXRlbSA+IHAge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jYWN0aW9uLWJhciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4vKiBEaWFsb2cgTWVudXMgKi9cXG4jdGFzay1kZXRhaWwtZGlhbG9nOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiN0YXNrLWRldGFpbC1jb250YWluZXIge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3Rhc2stZGV0YWlsLWNvbnRhaW5lciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdGFzay1kZXRhaWwtaGVhZGVyID4gLmNyb3NzbWFyayB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4vKiBDb21wb25lbnQgU3R5bGVzICovXFxuXFxuLmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmJ1dHRvbi1jaXJjdWxhciB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmJ1dHRvbi1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWRhbmdlcik7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmJ1dHRvbi1kYW5nZXI6aG92ZXIge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5idXR0b24tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmJ1dHRvbi1yZWN0YW5ndWxhciB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uY2hlY2ttYXJrIHtcXG4gIGhlaWdodDogdmFyKC0tdGFzay1pbnB1dC1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS10YXNrLWlucHV0LXNpemUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6ICM5MjkyOTI7XFxufVxcblxcbi5jcm9zc21hcmsge1xcbiAgaGVpZ2h0OiB2YXIoLS10YXNrLWlucHV0LXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXRhc2staW5wdXQtc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItZGFuZ2VyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5jcm9zc21hcms6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRDdcXFwiO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jcm9zc21hcms6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcm9zc21hcms6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tb2RhbCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubW9kYWw6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MzQpO1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByaW9yaXR5LWluZGljYXRvciB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogNXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktZGVmYXVsdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcXG59XFxuXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4vKiAtLS0gVGFnIFN0eWxlcyAtLS0gKi9cXG5cXG5zZWxlY3Qge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL19tb2JpbGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fbW9iaWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuZXhwb3J0IGNvbnN0IEFwcENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBtYWtlTGlzdCA9IChsaXN0TmFtZSkgPT4ge1xuICAgIHJldHVybiBuZXcgTGlzdChsaXN0TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTGlzdCA9IChOb3RlYm9vaywgbmV3TGlzdCkgPT4ge1xuICAgIE5vdGVib29rLnB1c2gobmV3TGlzdCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlTGlzdCA9IChOb3RlYm9vaywgbGlzdCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD9cIik7XG5cbiAgICBpZiAoY29uZmlybWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBVdGlsaXRpZXMuZmluZEluZGV4RnJvbUlEKE5vdGVib29rLCBsaXN0LmlkKTtcblxuICAgIE5vdGVib29rLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgY29uc3QgbWFrZVRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKE5vdGVib29rLCBsaXN0LCB0YXNrKSA9PiB7XG4gICAgLy8gY29uc3QgaWQgPSBOdW1iZXIobGlzdGlkKTtcbiAgICAvLyBjb25zdCBsaXN0ID0gVXRpbGl0aWVzLmZpbmRPYmplY3RGcm9tSUQoTm90ZWJvb2ssIGlkKTtcbiAgICBsaXN0LnRhc2tzLnB1c2godGFzayk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tPZmZUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKGxpc3QsIHRhc2tpZCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz9cIik7XG5cbiAgICBpZiAoY29uZmlybWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBVdGlsaXRpZXMuZmluZEluZGV4RnJvbUlEKGxpc3QudGFza3MsIHRhc2tpZCk7XG5cbiAgICBsaXN0LnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtYWtlTGlzdCxcbiAgICBhZGRMaXN0LFxuICAgIGRlbGV0ZUxpc3QsXG4gICAgbWFrZVRhc2ssXG4gICAgYWRkVGFzayxcbiAgICBjaGVja09mZlRhc2ssXG4gICAgZGVsZXRlVGFzayxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5pZCA9IFV0aWxpdGllcy5nZW5lcmF0ZUlEKCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbn1cbiIsImltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLmlkID0gVXRpbGl0aWVzLmdlbmVyYXRlSUQoKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBVdGlsaXRpZXMgPSAoKCkgPT4ge1xuICBjb25zdCBmaW5kT2JqZWN0RnJvbUlEID0gKEFycmF5LCBpZCkgPT4ge1xuICAgIGZvciAobGV0IGluZGV4IGluIEFycmF5KSB7XG4gICAgICBpZiAoQXJyYXlbaW5kZXhdLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gQXJyYXlbaW5kZXhdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaW5kSW5kZXhGcm9tSUQgPSAoQXJyYXksIGlkKSA9PiB7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gQXJyYXkpIHtcbiAgICAgIGlmIChBcnJheVtpbmRleF0uaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVJRCA9ICgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gIH07XG5cbiAgY29uc3Qgd3JpdGVUb0xvY2FsU3RvcmFnZSA9IChOb3RlYm9vaykgPT4ge1xuICAgIGxldCBub3RlYm9vayA9IEpTT04uc3RyaW5naWZ5KE5vdGVib29rKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vdGVib29rXCIsIG5vdGVib29rKTtcbiAgfTtcblxuICBjb25zdCByZWFkTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVib29rXCIpID09PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vdGVib29rXCIsIFwiW11cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm5vdGVib29rKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGZpbmRPYmplY3RGcm9tSUQsXG4gICAgZmluZEluZGV4RnJvbUlELFxuICAgIGdlbmVyYXRlSUQsXG4gICAgd3JpdGVUb0xvY2FsU3RvcmFnZSxcbiAgICByZWFkTG9jYWxTdG9yYWdlLFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tIFwiLi9hcHBDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuZXhwb3J0IGNvbnN0IFZpZXdDb250cm9sbGVyID0gKCgpID0+IHtcbiAgLy8gKi0tLSBTSEFSRUQgRE9NIGVsZW1lbnRzIC0tLSogLy9cbiAgY29uc3QgdG9kb19saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3RcIik7XG4gIGNvbnN0IGxpc3RfaGVhZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC1oZWFkaW5nXCIpO1xuICBjb25zdCB0YXNrRGV0YWlsRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC1kaWFsb2dcIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5cbiAgLy8gICBDb250cm9sIHZpZXcgYW5kIERPTSBpbnRlcmFjdGlvbnNcbiAgY29uc3QgYnVpbGROYXYgPSAoTm90ZWJvb2spID0+IHtcbiAgICBjb25zdCBuYXZfbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2X2xpc3RcIik7XG4gICAgLy8gUmVtb3ZlIGFsbCBuYXYgaXRlbXNcbiAgICBuYXZfbGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIC8vIENyZWF0ZSBET00gZWxlbWVudCBmb3IgZWFjaCBsaXN0IGluIE5vdGVib29rXG4gICAgZm9yIChsZXQgaW5kZXggaW4gTm90ZWJvb2spIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBOb3RlYm9va1tpbmRleF07XG4gICAgICAvLyBDcmVhdGUgRE9NIGVsZW1lbnRzXG4gICAgICBjb25zdCBuYXZfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIG5hdl9pdGVtLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICAgICAgbmF2X2l0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpO1xuICAgICAgbmF2X2l0ZW0uaWQgPSBsaXN0LmlkO1xuXG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBuYXYgaXRlbVxuICAgICAgbmF2X2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYnVpbGRMaXN0KE5vdGVib29rLCBsaXN0KTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlYmFyLWNsb3NlZFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBcHBlbmQgbmF2IGl0ZW0gdG8gbmF2XG4gICAgICBuYXZfbGlzdC5hcHBlbmRDaGlsZChuYXZfaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJ1aWxkTGlzdCA9IChOb3RlYm9vaywgbGlzdCkgPT4ge1xuICAgIGNvbnN0IGlkID0gbGlzdC5pZDtcblxuICAgIC8vIFNldCBhY3RpdmUgbGlzdFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uLWJhclwiKS5kYXRhc2V0Lmxpc3RpZCA9IGlkO1xuXG4gICAgbGlzdF9oZWFkaW5nLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuXG4gICAgdG9kb19saXN0LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgLy8gQ3JlYXRlIGxpc3QgaXRlbSBlbGVtZW50IGZvciBlYWNoIHRhc2sgaW4gbGlzdC50YXNrc1xuICAgIGZvciAoY29uc3QgaW5kZXggaW4gbGlzdC50YXNrcykge1xuICAgICAgY29uc3QgdGFzayA9IGxpc3QudGFza3NbaW5kZXhdO1xuXG4gICAgICBjb25zdCBsaXN0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaXN0X2l0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdC1pdGVtXCIpO1xuXG4gICAgICAvLyBDcmVhdGUgY2hlY2tib3ggYW5kIGFkZCBldmVudCBsaXN0ZW5lclxuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2ttYXJrXCIpO1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIC8vIFRvZ2dsZSB0YXNrLmNvbXBsZXRlZCBhbmQgdXBkYXRlIGxvY2FsU3RvcmFnZVxuICAgICAgICBBcHBDb250cm9sbGVyLmNoZWNrT2ZmVGFzayh0YXNrKTtcbiAgICAgICAgVXRpbGl0aWVzLndyaXRlVG9Mb2NhbFN0b3JhZ2UoTm90ZWJvb2spO1xuXG4gICAgICAgIGJ1aWxkTGlzdChOb3RlYm9vaywgbGlzdCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ3JlYXRlIGNyb3NzIG1hcmsgYW5kIGFkZCBldmVudCBsaXN0ZW5lclxuICAgICAgY29uc3QgY3Jvc3NtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNyb3NzbWFyay5jbGFzc0xpc3QuYWRkKFwiY3Jvc3NtYXJrXCIpO1xuICAgICAgY3Jvc3NtYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIERlbGV0ZSB0YXNrIGFuZCB1cGRhdGUgbG9jYWxTdG9yYWdlXG4gICAgICAgIEFwcENvbnRyb2xsZXIuZGVsZXRlVGFzayhsaXN0LCB0YXNrLmlkKTtcbiAgICAgICAgVXRpbGl0aWVzLndyaXRlVG9Mb2NhbFN0b3JhZ2UoTm90ZWJvb2spO1xuXG4gICAgICAgIGJ1aWxkTGlzdChOb3RlYm9vaywgbGlzdCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGJ1aWxkRGV0YWlsZWRWaWV3KHRhc2spO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFJlbmRlciBpdGVtIHdpdGggc3RyaWtldGhyb3VnaCBpZiBjb21wbGV0ZWRcbiAgICAgIGlmICh0cnVlID09PSB0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaW5kaWNhdG9yXCIpO1xuXG4gICAgICBpZiAoXCJoaWdoXCIgPT09IHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaGlnaFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoXCJtZWRpdW1cIiA9PT0gdGFzay5wcmlvcml0eS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1tZWRpdW1cIik7XG4gICAgICB9IGVsc2UgaWYgKFwibG93XCIgPT09IHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbG93XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWRlZmF1bHRcIik7XG4gICAgICB9XG5cbiAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICBsaXN0X2l0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGNyb3NzbWFyayk7XG5cbiAgICAgIHRvZG9fbGlzdC5hcHBlbmRDaGlsZChsaXN0X2l0ZW0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGVhckxpc3QgPSAoKSA9PiB7XG4gICAgdG9kb19saXN0LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGxpc3RfaGVhZGluZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoZGlhbG9nKSA9PiB7XG4gICAgaWYgKGRpYWxvZy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuZWRcIikpIHtcbiAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgZGlhbG9nLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuZWRcIik7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNpZGViYXItY2xvc2VkXCIpO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkRGV0YWlsZWRWaWV3ID0gKHRhc2spID0+IHtcbiAgICAvLyBkbyBzdHVmZlxuICAgIGNvbnNvbGUubG9nKHRhc2spO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsLXRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC1kZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC1kdWVkYXRlXCIpO1xuICAgIGR1ZWRhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWwtcHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgdG9nZ2xlTW9kYWwodGFza0RldGFpbERpYWxvZyk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJEZXRhaWxlZFZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsLXRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC1kZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbC1kdWVkYXRlXCIpO1xuICAgIGR1ZWRhdGUudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsLXByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJ1aWxkTmF2LFxuICAgIGJ1aWxkTGlzdCxcbiAgICBjbGVhckxpc3QsXG4gICAgdG9nZ2xlTW9kYWwsXG4gICAgdG9nZ2xlU2lkZWJhcixcbiAgICBidWlsZERldGFpbGVkVmlldyxcbiAgICBjbGVhckRldGFpbGVkVmlldyxcbiAgfTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL19tb2JpbGUuY3NzXCI7XG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBWaWV3Q29udHJvbGxlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmlld0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvdXRpbGl0aWVzXCI7XG5cbi8vIEFwcCBTdGF0ZVxubGV0IE5vdGVib29rID0gVXRpbGl0aWVzLnJlYWRMb2NhbFN0b3JhZ2UoKTtcblxuLy8gSW5pdGFsaXplIGFwcCBhbmQgYWRkIGV2ZW50IGxpc3RlbmVycyB0byBET00gZWxlbWVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy8gSW5pdGlhbGl6ZSBhcHAgd2hlbiBwYWdlIGlzIGxvYWRlZFxuICAoKCkgPT4ge1xuICAgIFZpZXdDb250cm9sbGVyLmJ1aWxkTmF2KE5vdGVib29rKTtcbiAgICBpZiAoTm90ZWJvb2subGVuZ3RoID4gMCkge1xuICAgICAgVmlld0NvbnRyb2xsZXIuYnVpbGRMaXN0KE5vdGVib29rLCBOb3RlYm9va1swXSk7XG4gICAgfVxuICB9KSgpO1xuXG4gIC8vIFNoYXJlZCBET00gRWxlbWVudHNcbiAgY29uc3QgbmV3TGlzdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWxpc3QtZGlhbG9nXCIpO1xuICBjb25zdCBuZXdUYXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1kaWFsb2dcIik7XG4gIGNvbnN0IHRhc2tEZXRhaWxEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsLWRpYWxvZ1wiKTtcbiAgY29uc3QgYWN0aW9uQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpb24tYmFyXCIpO1xuXG4gIC8vICotLS0gRVZFTlQgTElTVEVORVJTIC0tLSogLy9cbiAgLy8gT3BlbiBuZXcgbGlzdCBtb2RhbCB3aXRoIG5ldyBsaXN0IGJ1dHRvblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1saXN0LWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIFZpZXdDb250cm9sbGVyLnRvZ2dsZU1vZGFsKG5ld0xpc3REaWFsb2cpO1xuICB9KTtcblxuICAvLyBIYW5kbGUgc3VibWl0dGVkIG5ldyBsaXN0IGZvcm1cbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJuZXctbGlzdC1mb3JtXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBHYXRoZXIgc3VibWl0dGVkIGZvcm0gZGF0YVxuICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnN0IGlucHV0ID0gZm9ybS5lbGVtZW50cy5saXN0bmFtZS52YWx1ZTtcblxuICAgICAgLy8gTWFrZSBuZXcgbGlzdCBmcm9tIGRhdGFcbiAgICAgIGNvbnN0IG5ld19saXN0ID0gQXBwQ29udHJvbGxlci5tYWtlTGlzdChpbnB1dCk7XG5cbiAgICAgIC8vIEFkZCBsaXN0IHRvIE5vdGVib29rIGFuZCB1cGRhdGUgbG9jYWxTdG9yYWdlXG4gICAgICBBcHBDb250cm9sbGVyLmFkZExpc3QoTm90ZWJvb2ssIG5ld19saXN0KTtcbiAgICAgIFV0aWxpdGllcy53cml0ZVRvTG9jYWxTdG9yYWdlKE5vdGVib29rKTtcblxuICAgICAgLy8gUmVkcmF3IHNjcmVlblxuICAgICAgVmlld0NvbnRyb2xsZXIuYnVpbGROYXYoTm90ZWJvb2spO1xuICAgICAgVmlld0NvbnRyb2xsZXIuYnVpbGRMaXN0KE5vdGVib29rLCBuZXdfbGlzdCk7XG5cbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIFZpZXdDb250cm9sbGVyLnRvZ2dsZU1vZGFsKG5ld0xpc3REaWFsb2cpO1xuICAgIH0pO1xuXG4gIC8vIEhhbmRsZSBjYW5jZWxlZCBuZXcgbGlzdCBmb3JtXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibmV3LWxpc3QtY2FuY2VsXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctbGlzdC1mb3JtXCIpO1xuICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgVmlld0NvbnRyb2xsZXIudG9nZ2xlTW9kYWwobmV3TGlzdERpYWxvZyk7XG4gICAgfSk7XG5cbiAgLy8gRGVsZXRlIGxpc3Qgd2hlbiBkZWxldGUgbGlzdCBidXR0b24gaXMgY2xpY2tlZFxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS1saXN0LWJ1dHRvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gRmluZCBsaXN0IGZyb20gYWN0aXZlIGFjdGlvbkJhciBpZFxuICAgICAgY29uc3QgaWQgPSBOdW1iZXIoYWN0aW9uQmFyLmRhdGFzZXQubGlzdGlkKTtcbiAgICAgIGNvbnN0IGxpc3QgPSBVdGlsaXRpZXMuZmluZE9iamVjdEZyb21JRChOb3RlYm9vaywgaWQpO1xuXG4gICAgICAvLyBEZWxldGUgbGlzdCBhbmQgdXBkYXRlIGxvY2FsU3RvcmFnZVxuICAgICAgQXBwQ29udHJvbGxlci5kZWxldGVMaXN0KE5vdGVib29rLCBsaXN0KTtcbiAgICAgIFV0aWxpdGllcy53cml0ZVRvTG9jYWxTdG9yYWdlKE5vdGVib29rKTtcblxuICAgICAgVmlld0NvbnRyb2xsZXIuYnVpbGROYXYoTm90ZWJvb2spO1xuXG4gICAgICAvLyBJZiBOb3RlYm9vayBpcyBub3QgZW1wdHksIHJlZHJhdyBmaXJzdCBsaXN0XG4gICAgICBpZiAoTm90ZWJvb2subGVuZ3RoICE9IDApIHtcbiAgICAgICAgVmlld0NvbnRyb2xsZXIuYnVpbGRMaXN0KE5vdGVib29rLCBOb3RlYm9va1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbHNlIGNsZWFyIGxpc3QgZnJvbSBzY3JlZW5cbiAgICAgICAgVmlld0NvbnRyb2xsZXIuY2xlYXJMaXN0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgLy8gT3BlbiBuZXcgdGFzayBtb2RhbCB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgTm90ZWJvb2sgaGFzIGFueSBsaXN0c1xuICAgIGlmIChOb3RlYm9vay5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIElmIE5vdGVib29rIGhhcyBub3QgbGlzdCwgcHJvbXB0IHVzZXIgdG8gbWFrZSBhIGxpc3RcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIG1ha2UgYSBsaXN0IGZpcnN0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFZpZXdDb250cm9sbGVyLnRvZ2dsZU1vZGFsKG5ld1Rhc2tEaWFsb2cpO1xuICB9KTtcblxuICAvLyBIYW5kbGUgc3VibWl0dGVkIG5ldyB0YXNrIGZvcm1cbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1mb3JtXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBHYXRoZXIgc3VibWl0dGVkIGZvcm0gZGF0YVxuICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50cy50YXNrdGl0bGUudmFsdWU7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0uZWxlbWVudHMudGFza2Rlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IGZvcm0uZWxlbWVudHMudGFza2R1ZWRhdGUudmFsdWU7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHMudGFza3ByaW9yaXR5LnZhbHVlO1xuXG4gICAgICAvLyBNYWtlIG5ldyB0YXNrIGZyb20gZGF0YVxuICAgICAgY29uc3QgdGFzayA9IEFwcENvbnRyb2xsZXIubWFrZVRhc2soXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHlcbiAgICAgICk7XG4gICAgICBjb25zdCBpZCA9IE51bWJlcihhY3Rpb25CYXIuZGF0YXNldC5saXN0aWQpO1xuICAgICAgY29uc3QgbGlzdCA9IFV0aWxpdGllcy5maW5kT2JqZWN0RnJvbUlEKE5vdGVib29rLCBpZCk7XG5cbiAgICAgIC8vIEFkZCB0YXNrIHRvIGN1cnJlbnQgbGlzdCBhbmQgdXBkYXRlIGxvY2FsU3RvcmFnZVxuICAgICAgQXBwQ29udHJvbGxlci5hZGRUYXNrKE5vdGVib29rLCBsaXN0LCB0YXNrKTtcbiAgICAgIFZpZXdDb250cm9sbGVyLmJ1aWxkTGlzdChOb3RlYm9vaywgbGlzdCk7XG4gICAgICBVdGlsaXRpZXMud3JpdGVUb0xvY2FsU3RvcmFnZShOb3RlYm9vayk7XG5cbiAgICAgIC8vIFJlc2V0IGZvcm0gYW5kIGNsb3NlIG1vZGFsXG4gICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICBWaWV3Q29udHJvbGxlci50b2dnbGVNb2RhbChuZXdUYXNrRGlhbG9nKTtcbiAgICB9KTtcblxuICAvLyBIYW5kbGUgY2FuY2VsZWQgbmV3IHRhc2sgZm9ybVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWNhbmNlbFwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stZm9ybVwiKTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIFZpZXdDb250cm9sbGVyLnRvZ2dsZU1vZGFsKG5ld1Rhc2tEaWFsb2cpO1xuICAgIH0pO1xuXG4gIC8vIE1hbmFnZSBzaWRlYmFyIG9wZW4vY2xvc2VkIHN0YXR1c1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXNpZGViYXJcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFZpZXdDb250cm9sbGVyLnRvZ2dsZVNpZGViYXIpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWwtY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBWaWV3Q29udHJvbGxlci5jbGVhckRldGFpbGVkVmlldygpO1xuICAgIFZpZXdDb250cm9sbGVyLnRvZ2dsZU1vZGFsKHRhc2tEZXRhaWxEaWFsb2cpO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9