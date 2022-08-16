"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dosis&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Page layout stuff */\n\n* {\n    box-sizing: border-box;\n    font-family: \"Dosis\", sans-serif;\n}\nhtml {\n    font-size: clamp(12px, calc(0.625rem + ((1vw - 10.8px) * 0.9259)), 20px);\n}\nbody {\n    display: grid;\n    grid-template-areas:\n        \"header header header\"\n        \"side content aside\"\n        \"side footer footer\";\n    grid-template-columns: 1fr 5fr 2fr;\n    grid-template-rows: auto 1fr auto;\n    height: 100vh;\n    margin: 0;\n}\n\n/* Header stuff */\n\nheader {\n    grid-area: header;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#notifications {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n#notifBell {\n    width: 3rem;\n}\n#userProfile {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n#userIcon {\n    border-radius: 50%;\n    width: 3rem;\n}\n\n/* Sidebar stuff */\n\n#sidebar {\n    grid-area: side;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#sidebar-links {\n    list-style-type: none;\n    padding: 0.5rem;\n}\n#sidebar-links > li {\n    padding: 0.5rem;\n}\n#sidebar-links ul {\n    padding: 0.5rem 0 0 20%;\n}\n#sidebar-bottom {\n    list-style: none;\n    padding-left: 1rem;\n}\n\n/* Main content stuff */\n\n#main-content {\n    grid-area: content;\n    /* background-color: bisque; */\n    overflow-y: scroll;\n    padding: 1rem;\n    color: #1f2c36;\n}\n::-webkit-scrollbar {\n    width: 0.5rem;\n    color: red;\n    background: rgba(128, 128, 128, 0.142);\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #1f2c3665;\n}\n\n#main-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #c0c0c0;\n}\n\n#cards {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.card {\n    /* background-color: antiquewhite; */\n    border-radius: 20px;\n    padding: 1rem;\n    background: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    cursor: pointer;\n}\n\n.card:hover,\n.calendarDay:hover {\n    background: rgba(255, 255, 255, 0.4);\n    transition-duration: 500ms;\n}\n\n.cardHeader {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Right side stuff */\n\n#aside {\n    grid-area: aside;\n    background-color: beige;\n    color: #c0c0c0;\n    padding: 0.5rem;\n}\n\n#aside ul {\n    padding: 0;\n    list-style-type: none;\n}\n\n#calendar {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    height: 80%;\n}\n\n.calendarDay {\n    padding: 1rem;\n    background: #efefef;\n    border: none;\n    border-radius: 0.5rem;\n    color: #444;\n    outline: none;\n    background: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    /* box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),\n        -6px -6px 10px rgba(255, 255, 255, 0.5),\n        6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15); */\n}\n\n/* Footer stuff */\n\nfooter {\n    grid-area: footer;\n    text-align: center;\n}\n\nfooter p a {\n    color: #c0c0c0;\n}\n\n\n\n\n\n#sidebar,\nheader,\nfooter {\n    background-color: #1f2c36;\n    color: #c0c0c0;\n    border: 2px solid #c0c0c06d;\n    box-sizing: border-box;\n    padding: 0.5rem;\n}\n\n#main-content,\n#aside {\n    border: px solid #c0c0c06d;\n    box-sizing: border-box;\n    background: linear-gradient(\n        to bottom,\n        #304352,\n        #c0c0c0\n    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    background-attachment: scroll;\n}\n\nbutton {\n    background: rgba(255, 255, 255, 0.4);\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.4rem;\n    color: #444;\n    font-size: 1rem;\n    text-align: center;\n    outline: none;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n    box-shadow: -2px -2px 14px rgba(255, 255, 255, 0.3),\n        -2px -2px 10px rgba(255, 255, 255, 0.1),\n        2px 2px 8px rgba(255, 255, 255, 0.075), 2px 2px 10px rgba(0, 0, 0, 0.15);\n}\nbutton:hover {\n    box-shadow: -1px -1px 6px rgba(255, 255, 255, 0.4),\n        -1px -1px 4px rgba(255, 255, 255, 0.2),\n        2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);\n}\nbutton:active {\n    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.5),\n        inset -2px -2px 4px rgba(255, 255, 255, 0.3),\n        inset 2px 2px 2px rgba(255, 255, 255, 0.075),\n        inset 2px 2px 4px rgba(0, 0, 0, 0.15);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA,sBAAsB;;AAEtB;IACI,sBAAsB;IACtB,gCAAgC;AACpC;AACA;IACI,wEAAwE;AAC5E;AACA;IACI,aAAa;IACb;;;4BAGwB;IACxB,kCAAkC;IAClC,iCAAiC;IACjC,aAAa;IACb,SAAS;AACb;;AAEA,iBAAiB;;AAEjB;IACI,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA,kBAAkB;;AAElB;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,uBAAuB;;AAEvB;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,cAAc;AAClB;AACA;IACI,aAAa;IACb,UAAU;IACV,sCAAsC;AAC1C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,oCAAoC;IACpC,yCAAyC;IACzC,0CAA0C;IAC1C,eAAe;AACnB;;AAEA;;IAEI,oCAAoC;IACpC,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA,qBAAqB;;AAErB;IACI,gBAAgB;IAChB,uBAAuB;IACvB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;IACrB,WAAW;IACX,aAAa;IACb,oCAAoC;IACpC,yCAAyC;IACzC,0CAA0C;IAC1C;;mFAE+E;AACnF;;AAEA,iBAAiB;;AAEjB;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;;;;;AAMA;;;IAGI,yBAAyB;IACzB,cAAc;IACd,2BAA2B;IAC3B,sBAAsB;IACtB,eAAe;AACnB;;AAEA;;IAEI,0BAA0B;IAC1B,sBAAsB;IACtB;;;;KAIC,EAAE,qEAAqE;IACxE,6BAA6B;AACjC;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,4BAA4B;IAC5B;;gFAE4E;AAChF;AACA;IACI;;6EAEyE;AAC7E;AACA;IACI;;;6CAGyC;AAC7C","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Dosis&display=swap\");\n\n/* Page layout stuff */\n\n* {\n    box-sizing: border-box;\n    font-family: \"Dosis\", sans-serif;\n}\nhtml {\n    font-size: clamp(12px, calc(0.625rem + ((1vw - 10.8px) * 0.9259)), 20px);\n}\nbody {\n    display: grid;\n    grid-template-areas:\n        \"header header header\"\n        \"side content aside\"\n        \"side footer footer\";\n    grid-template-columns: 1fr 5fr 2fr;\n    grid-template-rows: auto 1fr auto;\n    height: 100vh;\n    margin: 0;\n}\n\n/* Header stuff */\n\nheader {\n    grid-area: header;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#notifications {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n#notifBell {\n    width: 3rem;\n}\n#userProfile {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n#userIcon {\n    border-radius: 50%;\n    width: 3rem;\n}\n\n/* Sidebar stuff */\n\n#sidebar {\n    grid-area: side;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#sidebar-links {\n    list-style-type: none;\n    padding: 0.5rem;\n}\n#sidebar-links > li {\n    padding: 0.5rem;\n}\n#sidebar-links ul {\n    padding: 0.5rem 0 0 20%;\n}\n#sidebar-bottom {\n    list-style: none;\n    padding-left: 1rem;\n}\n\n/* Main content stuff */\n\n#main-content {\n    grid-area: content;\n    /* background-color: bisque; */\n    overflow-y: scroll;\n    padding: 1rem;\n    color: #1f2c36;\n}\n::-webkit-scrollbar {\n    width: 0.5rem;\n    color: red;\n    background: rgba(128, 128, 128, 0.142);\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #1f2c3665;\n}\n\n#main-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #c0c0c0;\n}\n\n#cards {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.card {\n    /* background-color: antiquewhite; */\n    border-radius: 20px;\n    padding: 1rem;\n    background: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    cursor: pointer;\n}\n\n.card:hover,\n.calendarDay:hover {\n    background: rgba(255, 255, 255, 0.4);\n    transition-duration: 500ms;\n}\n\n.cardHeader {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Right side stuff */\n\n#aside {\n    grid-area: aside;\n    background-color: beige;\n    color: #c0c0c0;\n    padding: 0.5rem;\n}\n\n#aside ul {\n    padding: 0;\n    list-style-type: none;\n}\n\n#calendar {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    height: 80%;\n}\n\n.calendarDay {\n    padding: 1rem;\n    background: #efefef;\n    border: none;\n    border-radius: 0.5rem;\n    color: #444;\n    outline: none;\n    background: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    /* box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),\n        -6px -6px 10px rgba(255, 255, 255, 0.5),\n        6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15); */\n}\n\n/* Footer stuff */\n\nfooter {\n    grid-area: footer;\n    text-align: center;\n}\n\nfooter p a {\n    color: #c0c0c0;\n}\n\n\n\n\n\n#sidebar,\nheader,\nfooter {\n    background-color: #1f2c36;\n    color: #c0c0c0;\n    border: 2px solid #c0c0c06d;\n    box-sizing: border-box;\n    padding: 0.5rem;\n}\n\n#main-content,\n#aside {\n    border: px solid #c0c0c06d;\n    box-sizing: border-box;\n    background: linear-gradient(\n        to bottom,\n        #304352,\n        #c0c0c0\n    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    background-attachment: scroll;\n}\n\nbutton {\n    background: rgba(255, 255, 255, 0.4);\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.4rem;\n    color: #444;\n    font-size: 1rem;\n    text-align: center;\n    outline: none;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n    box-shadow: -2px -2px 14px rgba(255, 255, 255, 0.3),\n        -2px -2px 10px rgba(255, 255, 255, 0.1),\n        2px 2px 8px rgba(255, 255, 255, 0.075), 2px 2px 10px rgba(0, 0, 0, 0.15);\n}\nbutton:hover {\n    box-shadow: -1px -1px 6px rgba(255, 255, 255, 0.4),\n        -1px -1px 4px rgba(255, 255, 255, 0.2),\n        2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);\n}\nbutton:active {\n    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.5),\n        inset -2px -2px 4px rgba(255, 255, 255, 0.3),\n        inset 2px 2px 2px rgba(255, 255, 255, 0.075),\n        inset 2px 2px 4px rgba(0, 0, 0, 0.15);\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_displayUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayUI */ "./src/modules/displayUI.js");


(0,_modules_displayUI__WEBPACK_IMPORTED_MODULE_1__.displayHeader)("Ken");
(0,_modules_displayUI__WEBPACK_IMPORTED_MODULE_1__.displaySidebar)(["Project", "Another", "And another"]);
(0,_modules_displayUI__WEBPACK_IMPORTED_MODULE_1__.displayAside)();
(0,_modules_displayUI__WEBPACK_IMPORTED_MODULE_1__.displayFooter)();
(0,_modules_displayUI__WEBPACK_IMPORTED_MODULE_1__.displayMain)([
    {
        title: "Do the thing",
        due: "September 1, 2022",
        description: "This is a sample project. Does it work?",
    },
    {
        title: "Do the other thing",
        due: "September 9, 2022",
        description: "This is another sample project. It do work.",
    },
    {
        title: "Do the last thing",
        due: "September 23, 2022",
        description: "lorem ipsum blablablabdlask jsdaklhjdkahjd sdklajhdkja",
    },
]);

console.log("hello");

// function component() {
//     const element = document.createElement('div');

//    // Add the image to our existing div.
//    const myIcon = new Image();
//    myIcon.src = notifBell;

//    element.appendChild(myIcon);

//     return element;
//   }

//   document.body.appendChild(component());


/***/ }),

/***/ "./src/modules/displayUI.js":
/*!**********************************!*\
  !*** ./src/modules/displayUI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAside": () => (/* binding */ displayAside),
/* harmony export */   "displayFooter": () => (/* binding */ displayFooter),
/* harmony export */   "displayHeader": () => (/* binding */ displayHeader),
/* harmony export */   "displayMain": () => (/* binding */ displayMain),
/* harmony export */   "displaySidebar": () => (/* binding */ displaySidebar)
/* harmony export */ });
/* harmony import */ var _images_notif_Bell_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/notif_Bell.svg */ "./src/images/notif_Bell.svg");


function displayHeader(name, icon) {
    // header container
    const header = document.createElement("header");

    // >app logo and title (left)
    const logo = document.createElement("h1");
    logo.textContent = "To-Do";

    // >right side container
    const notifications = document.createElement("div");
    notifications.id = "notifications";

    const notifBell = document.createElement("img");
    notifBell.id = "notifBell";
    notifBell.src = _images_notif_Bell_svg__WEBPACK_IMPORTED_MODULE_0__;

    // >> user profile section
    const userProfile = document.createElement("div");
    userProfile.id = "userProfile";
    // >>> welcome msg
    const userMsg = document.createElement("div");
    userMsg.textContent = "Welcome, " + name;
    // >>> icon image
    const userIcon = document.createElement("img");
    userIcon.id = "userIcon";
    userIcon.src = "https://avatars.githubusercontent.com/u/89105909?v=4";

    userProfile.append(userMsg, userIcon);
    notifications.append(notifBell, userProfile);

    // DOM functions to append to page
    header.append(logo, notifications);
    document.body.appendChild(header);
}

function displaySidebar(projects) {
    // sidebar container
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    // >sidebar links
    const sidebarLinks = document.createElement("ul");
    sidebarLinks.id = "sidebar-links";

    const today = document.createElement("li");
    today.textContent = "Today";

    const projectList = document.createElement("li");
    projectList.textContent = "Projects";

    const projectListList = document.createElement("ul");

    projects.forEach((project) => {
        let thisProject = document.createElement("li");
        thisProject.textContent = project;
        projectListList.appendChild(thisProject);
    });

    const completed = document.createElement("li");
    completed.textContent = "Completed";


    projectList.appendChild(projectListList);
    sidebarLinks.append(today, projectList, completed);

    const sidebarBottom = document.createElement("ul");
    sidebarBottom.id = "sidebar-bottom";
    const settings = document.createElement("li");
    settings.textContent = "Settings";
    const logOut = document.createElement("li");
    logOut.textContent = "Log Out";
    sidebarBottom.append(settings, logOut);

    sidebar.append(sidebarLinks, sidebarBottom);
    document.body.appendChild(sidebar);
}

function displayAside() {
    const aside = document.createElement("div");
    aside.id = "aside";
    const asideHeader = document.createElement("h2");
    asideHeader.textContent = "This Week";
    const calendar = document.createElement("ul");
    calendar.id="calendar";
    // temp code for days, learn to use date-fns
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    days.forEach((a) => {
        const day = document.createElement("li");
        day.classList.add("calendarDay");
        day.textContent = a;
        calendar.appendChild(day);
    });
    aside.append(asideHeader,calendar);
    document.body.appendChild(aside);
}

function displayFooter () {
    const footer = document.createElement("footer");
    const footerText = document.createElement("p");
    footerText.innerHTML = `Made by
    <a href="https://github.com/kenkneelee">Kenny Lee</a>
    for
    <a href="https://www.theodinproject.com/">The Odin Project.</a>`
    footer.appendChild(footerText);

    document.body.appendChild(footer);
}

function displayMain(cardArray) {
    const mainContent = document.createElement("div");
    mainContent.id= "main-content";

    const mainHeader = document.createElement("div");
    mainHeader.id= "main-header";

    // temp, replace with project name
    const mainHeaderText = document.createElement("h2");
    mainHeaderText.textContent="All Projects";

    const newTaskButton = document.createElement("button");
    newTaskButton.textContent = "New Task";

    mainHeader.append(mainHeaderText, newTaskButton)

    // card stuff
    const cards = document.createElement("div");
    cards.id="cards";

    cardArray.forEach(cardObject => {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardHeader = document.createElement("h3");
        cardHeader.classList.add("cardHeader");

        const cardSpan = document.createElement("span");
        cardSpan.textContent = cardObject.title;
        const cardCheckbox = document.createElement("input");
        cardCheckbox.type = "checkbox";
        cardCheckbox.checked="checked";
        cardSpan.prepend(cardCheckbox);

        const cardButtons = document.createElement("div");
        const archiveButton = document.createElement("button");
        archiveButton.textContent="Archive";
        const deleteButton = document.createElement("button");
        deleteButton.textContent="Delete";
        cardButtons.append(archiveButton,deleteButton);

        cardHeader.append(cardSpan, cardButtons);

        const dueDate = document.createElement("p");
        dueDate.textContent = cardObject.due;
        const description = document.createElement("p");
        description.textContent= cardObject.description;

        card.append(cardHeader, dueDate, description);
        cards.append(card);
    })



    mainContent.append (mainHeader, cards);
    document.body.appendChild(mainContent);
}


/* <body>
    <div id="main-content">
        <div id="main-header">
            <h2>All Projects</h2>
            <button>New Task</button>
        </div>
        <div id="cards">

            <div class="card">
                <h3 class="cardHeader">
                    <span>
                        <input type="checkbox" checked="checked" />
                        Test card header
                    </span>
                    <div>
                        <button>Archive</button>
                        <button>Delete</button>
                    </div>
                </h3>
                <p>Due: August 20, 2022</p>
                <p>
                    Test card description goes here. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Dolore suscipit laudantium
                    nulla vero dolores magnam saepe, neque perferendis fugit
                    doloribus quod vel necessitatibus impedit soluta voluptates
                    reprehenderit sint molestias. Quasi!
                </p>
            </div>

        </div>
    </div>

    <footer>
        <p>
            Made by
            <a href="https://github.com/kenkneelee">Kenny Lee</a>
            for
            <a href="https://www.theodinproject.com/">The Odin Project.</a>
        </p>
    </footer>
</body> */


/***/ }),

/***/ "./src/images/notif_Bell.svg":
/*!***********************************!*\
  !*** ./src/images/notif_Bell.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f025c2a08a5359763e7.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7O0FBSUw7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURvc2lzJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFBhZ2UgbGF5b3V0IHN0dWZmICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9zaXNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5odG1sIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCBjYWxjKDAuNjI1cmVtICsgKCgxdncgLSAxMC44cHgpICogMC45MjU5KSksIDIwcHgpO1xcbn1cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJzaWRlIGNvbnRlbnQgYXNpZGVcXFwiXFxuICAgICAgICBcXFwic2lkZSBmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhlYWRlciBzdHVmZiAqL1xcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNub3RpZmljYXRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4jbm90aWZCZWxsIHtcXG4gICAgd2lkdGg6IDNyZW07XFxufVxcbiN1c2VyUHJvZmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuI3VzZXJJY29uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogM3JlbTtcXG59XFxuXFxuLyogU2lkZWJhciBzdHVmZiAqL1xcblxcbiNzaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNzaWRlYmFyLWxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbiNzaWRlYmFyLWxpbmtzID4gbGkge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbiNzaWRlYmFyLWxpbmtzIHVsIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMCAyMCU7XFxufVxcbiNzaWRlYmFyLWJvdHRvbSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50IHN0dWZmICovXFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlOyAqL1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiAjMWYyYzM2O1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE0Mik7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyYzM2NjU7XFxufVxcblxcbiNtYWluLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNjMGMwYzA7XFxufVxcblxcbiNjYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FyZDpob3ZlcixcXG4uY2FsZW5kYXJEYXk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbn1cXG5cXG4uY2FyZEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogUmlnaHQgc2lkZSBzdHVmZiAqL1xcblxcbiNhc2lkZSB7XFxuICAgIGdyaWQtYXJlYTogYXNpZGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBjb2xvcjogI2MwYzBjMDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jYXNpZGUgdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbiNjYWxlbmRhciB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmNhbGVuZGFyRGF5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIC8qIGJveC1zaGFkb3c6IC02cHggLTZweCAxNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcXG4gICAgICAgIC02cHggLTZweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcXG4gICAgICAgIDZweCA2cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpLCA2cHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTsgKi9cXG59XFxuXFxuLyogRm9vdGVyIHN0dWZmICovXFxuXFxuZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHAgYSB7XFxuICAgIGNvbG9yOiAjYzBjMGMwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4jc2lkZWJhcixcXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMmMzNjtcXG4gICAgY29sb3I6ICNjMGMwYzA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjMGMwYzA2ZDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50LFxcbiNhc2lkZSB7XFxuICAgIGJvcmRlcjogcHggc29saWQgI2MwYzBjMDZkO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICB0byBib3R0b20sXFxuICAgICAgICAjMzA0MzUyLFxcbiAgICAgICAgI2MwYzBjMFxcbiAgICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBib3gtc2hhZG93OiAtMnB4IC0ycHggMTRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXFxuICAgICAgICAtMnB4IC0ycHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksXFxuICAgICAgICAycHggMnB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSwgMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCA2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxcbiAgICAgICAgLTFweCAtMXB4IDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXFxuICAgICAgICAycHggMnB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpLCAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMnB4IC0ycHggNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcXG4gICAgICAgIGluc2V0IC0ycHggLTJweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLFxcbiAgICAgICAgaW5zZXQgMnB4IDJweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSksXFxuICAgICAgICBpbnNldCAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxzQkFBc0I7O0FBRXRCO0lBQ0ksc0JBQXNCO0lBQ3RCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksd0VBQXdFO0FBQzVFO0FBQ0E7SUFDSSxhQUFhO0lBQ2I7Ozs0QkFHd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQSx1QkFBdUI7O0FBRXZCO0lBQ0ksa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6QywwQ0FBMEM7SUFDMUMsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxvQ0FBb0M7SUFDcEMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQSxxQkFBcUI7O0FBRXJCO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6QywwQ0FBMEM7SUFDMUM7O21GQUUrRTtBQUNuRjs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7Ozs7OztBQU1BOzs7SUFHSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCOzs7O0tBSUMsRUFBRSxxRUFBcUU7SUFDeEUsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCOztnRkFFNEU7QUFDaEY7QUFDQTtJQUNJOzs2RUFFeUU7QUFDN0U7QUFDQTtJQUNJOzs7NkNBR3lDO0FBQzdDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURvc2lzJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbi8qIFBhZ2UgbGF5b3V0IHN0dWZmICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9zaXNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5odG1sIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCBjYWxjKDAuNjI1cmVtICsgKCgxdncgLSAxMC44cHgpICogMC45MjU5KSksIDIwcHgpO1xcbn1cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJzaWRlIGNvbnRlbnQgYXNpZGVcXFwiXFxuICAgICAgICBcXFwic2lkZSBmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhlYWRlciBzdHVmZiAqL1xcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNub3RpZmljYXRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4jbm90aWZCZWxsIHtcXG4gICAgd2lkdGg6IDNyZW07XFxufVxcbiN1c2VyUHJvZmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuI3VzZXJJY29uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogM3JlbTtcXG59XFxuXFxuLyogU2lkZWJhciBzdHVmZiAqL1xcblxcbiNzaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNzaWRlYmFyLWxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbiNzaWRlYmFyLWxpbmtzID4gbGkge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbiNzaWRlYmFyLWxpbmtzIHVsIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMCAyMCU7XFxufVxcbiNzaWRlYmFyLWJvdHRvbSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50IHN0dWZmICovXFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlOyAqL1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiAjMWYyYzM2O1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE0Mik7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyYzM2NjU7XFxufVxcblxcbiNtYWluLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNjMGMwYzA7XFxufVxcblxcbiNjYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FyZDpob3ZlcixcXG4uY2FsZW5kYXJEYXk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbn1cXG5cXG4uY2FyZEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogUmlnaHQgc2lkZSBzdHVmZiAqL1xcblxcbiNhc2lkZSB7XFxuICAgIGdyaWQtYXJlYTogYXNpZGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBjb2xvcjogI2MwYzBjMDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jYXNpZGUgdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbiNjYWxlbmRhciB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmNhbGVuZGFyRGF5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIC8qIGJveC1zaGFkb3c6IC02cHggLTZweCAxNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcXG4gICAgICAgIC02cHggLTZweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcXG4gICAgICAgIDZweCA2cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpLCA2cHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTsgKi9cXG59XFxuXFxuLyogRm9vdGVyIHN0dWZmICovXFxuXFxuZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHAgYSB7XFxuICAgIGNvbG9yOiAjYzBjMGMwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4jc2lkZWJhcixcXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMmMzNjtcXG4gICAgY29sb3I6ICNjMGMwYzA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjMGMwYzA2ZDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50LFxcbiNhc2lkZSB7XFxuICAgIGJvcmRlcjogcHggc29saWQgI2MwYzBjMDZkO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICB0byBib3R0b20sXFxuICAgICAgICAjMzA0MzUyLFxcbiAgICAgICAgI2MwYzBjMFxcbiAgICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBib3gtc2hhZG93OiAtMnB4IC0ycHggMTRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXFxuICAgICAgICAtMnB4IC0ycHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksXFxuICAgICAgICAycHggMnB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSwgMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCA2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxcbiAgICAgICAgLTFweCAtMXB4IDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXFxuICAgICAgICAycHggMnB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpLCAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMnB4IC0ycHggNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcXG4gICAgICAgIGluc2V0IC0ycHggLTJweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLFxcbiAgICAgICAgaW5zZXQgMnB4IDJweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSksXFxuICAgICAgICBpbnNldCAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgICBkaXNwbGF5SGVhZGVyLFxuICAgIGRpc3BsYXlTaWRlYmFyLFxuICAgIGRpc3BsYXlBc2lkZSxcbiAgICBkaXNwbGF5Rm9vdGVyLFxuICAgIGRpc3BsYXlNYWluLFxufSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlVSVwiO1xuZGlzcGxheUhlYWRlcihcIktlblwiKTtcbmRpc3BsYXlTaWRlYmFyKFtcIlByb2plY3RcIiwgXCJBbm90aGVyXCIsIFwiQW5kIGFub3RoZXJcIl0pO1xuZGlzcGxheUFzaWRlKCk7XG5kaXNwbGF5Rm9vdGVyKCk7XG5kaXNwbGF5TWFpbihbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJEbyB0aGUgdGhpbmdcIixcbiAgICAgICAgZHVlOiBcIlNlcHRlbWJlciAxLCAyMDIyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBzYW1wbGUgcHJvamVjdC4gRG9lcyBpdCB3b3JrP1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJEbyB0aGUgb3RoZXIgdGhpbmdcIixcbiAgICAgICAgZHVlOiBcIlNlcHRlbWJlciA5LCAyMDIyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYW5vdGhlciBzYW1wbGUgcHJvamVjdC4gSXQgZG8gd29yay5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRG8gdGhlIGxhc3QgdGhpbmdcIixcbiAgICAgICAgZHVlOiBcIlNlcHRlbWJlciAyMywgMjAyMlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJsb3JlbSBpcHN1bSBibGFibGFibGFiZGxhc2sganNkYWtsaGpka2FoamQgc2RrbGFqaGRramFcIixcbiAgICB9LFxuXSk7XG5cbmNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cbi8vIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbi8vICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbi8vICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cbi8vICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuLy8gICAgbXlJY29uLnNyYyA9IG5vdGlmQmVsbDtcblxuLy8gICAgZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xuXG4vLyAgICAgcmV0dXJuIGVsZW1lbnQ7XG4vLyAgIH1cblxuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbiIsImltcG9ydCBub3RpZl9CZWxsIGZyb20gXCIuLi9pbWFnZXMvbm90aWZfQmVsbC5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIobmFtZSwgaWNvbikge1xuICAgIC8vIGhlYWRlciBjb250YWluZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgLy8gPmFwcCBsb2dvIGFuZCB0aXRsZSAobGVmdClcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIlRvLURvXCI7XG5cbiAgICAvLyA+cmlnaHQgc2lkZSBjb250YWluZXJcbiAgICBjb25zdCBub3RpZmljYXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3RpZmljYXRpb25zLmlkID0gXCJub3RpZmljYXRpb25zXCI7XG5cbiAgICBjb25zdCBub3RpZkJlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5vdGlmQmVsbC5pZCA9IFwibm90aWZCZWxsXCI7XG4gICAgbm90aWZCZWxsLnNyYyA9IG5vdGlmX0JlbGw7XG5cbiAgICAvLyA+PiB1c2VyIHByb2ZpbGUgc2VjdGlvblxuICAgIGNvbnN0IHVzZXJQcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1c2VyUHJvZmlsZS5pZCA9IFwidXNlclByb2ZpbGVcIjtcbiAgICAvLyA+Pj4gd2VsY29tZSBtc2dcbiAgICBjb25zdCB1c2VyTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1c2VyTXNnLnRleHRDb250ZW50ID0gXCJXZWxjb21lLCBcIiArIG5hbWU7XG4gICAgLy8gPj4+IGljb24gaW1hZ2VcbiAgICBjb25zdCB1c2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdXNlckljb24uaWQgPSBcInVzZXJJY29uXCI7XG4gICAgdXNlckljb24uc3JjID0gXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODkxMDU5MDk/dj00XCI7XG5cbiAgICB1c2VyUHJvZmlsZS5hcHBlbmQodXNlck1zZywgdXNlckljb24pO1xuICAgIG5vdGlmaWNhdGlvbnMuYXBwZW5kKG5vdGlmQmVsbCwgdXNlclByb2ZpbGUpO1xuXG4gICAgLy8gRE9NIGZ1bmN0aW9ucyB0byBhcHBlbmQgdG8gcGFnZVxuICAgIGhlYWRlci5hcHBlbmQobG9nbywgbm90aWZpY2F0aW9ucyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVNpZGViYXIocHJvamVjdHMpIHtcbiAgICAvLyBzaWRlYmFyIGNvbnRhaW5lclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXIuaWQgPSBcInNpZGViYXJcIjtcblxuICAgIC8vID5zaWRlYmFyIGxpbmtzXG4gICAgY29uc3Qgc2lkZWJhckxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHNpZGViYXJMaW5rcy5pZCA9IFwic2lkZWJhci1saW5rc1wiO1xuXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdG9kYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwcm9qZWN0TGlzdC50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IHRoaXNQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICB0aGlzUHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgIHByb2plY3RMaXN0TGlzdC5hcHBlbmRDaGlsZCh0aGlzUHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29tcGxldGVkLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWRcIjtcblxuXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RMaXN0KTtcbiAgICBzaWRlYmFyTGlua3MuYXBwZW5kKHRvZGF5LCBwcm9qZWN0TGlzdCwgY29tcGxldGVkKTtcblxuICAgIGNvbnN0IHNpZGViYXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgc2lkZWJhckJvdHRvbS5pZCA9IFwic2lkZWJhci1ib3R0b21cIjtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzZXR0aW5ncy50ZXh0Q29udGVudCA9IFwiU2V0dGluZ3NcIjtcbiAgICBjb25zdCBsb2dPdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbG9nT3V0LnRleHRDb250ZW50ID0gXCJMb2cgT3V0XCI7XG4gICAgc2lkZWJhckJvdHRvbS5hcHBlbmQoc2V0dGluZ3MsIGxvZ091dCk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZChzaWRlYmFyTGlua3MsIHNpZGViYXJCb3R0b20pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QXNpZGUoKSB7XG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFzaWRlLmlkID0gXCJhc2lkZVwiO1xuICAgIGNvbnN0IGFzaWRlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGFzaWRlSGVhZGVyLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIjtcbiAgICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjYWxlbmRhci5pZD1cImNhbGVuZGFyXCI7XG4gICAgLy8gdGVtcCBjb2RlIGZvciBkYXlzLCBsZWFybiB0byB1c2UgZGF0ZS1mbnNcbiAgICBjb25zdCBkYXlzID0gW1xuICAgICAgICBcIk1vbmRheVwiLFxuICAgICAgICBcIlR1ZXNkYXlcIixcbiAgICAgICAgXCJXZWRuZXNkYXlcIixcbiAgICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgICBcIkZyaWRheVwiLFxuICAgICAgICBcIlNhdHVyZGF5XCIsXG4gICAgICAgIFwiU3VuZGF5XCIsXG4gICAgXTtcbiAgICBkYXlzLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChcImNhbGVuZGFyRGF5XCIpO1xuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSBhO1xuICAgICAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChkYXkpO1xuICAgIH0pO1xuICAgIGFzaWRlLmFwcGVuZChhc2lkZUhlYWRlcixjYWxlbmRhcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhc2lkZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Rm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb290ZXJUZXh0LmlubmVySFRNTCA9IGBNYWRlIGJ5XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rZW5rbmVlbGVlXCI+S2VubnkgTGVlPC9hPlxuICAgIGZvclxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCI+VGhlIE9kaW4gUHJvamVjdC48L2E+YFxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNYWluKGNhcmRBcnJheSkge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ29udGVudC5pZD0gXCJtYWluLWNvbnRlbnRcIjtcblxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5IZWFkZXIuaWQ9IFwibWFpbi1oZWFkZXJcIjtcblxuICAgIC8vIHRlbXAsIHJlcGxhY2Ugd2l0aCBwcm9qZWN0IG5hbWVcbiAgICBjb25zdCBtYWluSGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtYWluSGVhZGVyVGV4dC50ZXh0Q29udGVudD1cIkFsbCBQcm9qZWN0c1wiO1xuXG4gICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV3VGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2tcIjtcblxuICAgIG1haW5IZWFkZXIuYXBwZW5kKG1haW5IZWFkZXJUZXh0LCBuZXdUYXNrQnV0dG9uKVxuXG4gICAgLy8gY2FyZCBzdHVmZlxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkcy5pZD1cImNhcmRzXCI7XG5cbiAgICBjYXJkQXJyYXkuZm9yRWFjaChjYXJkT2JqZWN0ID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICAgICAgY29uc3QgY2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgY2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY2FyZEhlYWRlclwiKTtcblxuICAgICAgICBjb25zdCBjYXJkU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBjYXJkU3Bhbi50ZXh0Q29udGVudCA9IGNhcmRPYmplY3QudGl0bGU7XG4gICAgICAgIGNvbnN0IGNhcmRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2FyZENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGNhcmRDaGVja2JveC5jaGVja2VkPVwiY2hlY2tlZFwiO1xuICAgICAgICBjYXJkU3Bhbi5wcmVwZW5kKGNhcmRDaGVja2JveCk7XG5cbiAgICAgICAgY29uc3QgY2FyZEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBhcmNoaXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYXJjaGl2ZUJ1dHRvbi50ZXh0Q29udGVudD1cIkFyY2hpdmVcIjtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50PVwiRGVsZXRlXCI7XG4gICAgICAgIGNhcmRCdXR0b25zLmFwcGVuZChhcmNoaXZlQnV0dG9uLGRlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgY2FyZEhlYWRlci5hcHBlbmQoY2FyZFNwYW4sIGNhcmRCdXR0b25zKTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBjYXJkT2JqZWN0LmR1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQ9IGNhcmRPYmplY3QuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY2FyZC5hcHBlbmQoY2FyZEhlYWRlciwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBjYXJkcy5hcHBlbmQoY2FyZCk7XG4gICAgfSlcblxuXG5cbiAgICBtYWluQ29udGVudC5hcHBlbmQgKG1haW5IZWFkZXIsIGNhcmRzKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbn1cblxuXG4vKiA8Ym9keT5cbiAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgyPkFsbCBQcm9qZWN0czwvaDI+XG4gICAgICAgICAgICA8YnV0dG9uPk5ldyBUYXNrPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiY2FyZHNcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9XCJjaGVja2VkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRlc3QgY2FyZCBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5BcmNoaXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwPkR1ZTogQXVndXN0IDIwLCAyMDIyPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBUZXN0IGNhcmQgZGVzY3JpcHRpb24gZ29lcyBoZXJlLiBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXRcbiAgICAgICAgICAgICAgICAgICAgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3JlIHN1c2NpcGl0IGxhdWRhbnRpdW1cbiAgICAgICAgICAgICAgICAgICAgbnVsbGEgdmVybyBkb2xvcmVzIG1hZ25hbSBzYWVwZSwgbmVxdWUgcGVyZmVyZW5kaXMgZnVnaXRcbiAgICAgICAgICAgICAgICAgICAgZG9sb3JpYnVzIHF1b2QgdmVsIG5lY2Vzc2l0YXRpYnVzIGltcGVkaXQgc29sdXRhIHZvbHVwdGF0ZXNcbiAgICAgICAgICAgICAgICAgICAgcmVwcmVoZW5kZXJpdCBzaW50IG1vbGVzdGlhcy4gUXVhc2khXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIE1hZGUgYnlcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va2Vua25lZWxlZVwiPktlbm55IExlZTwvYT5cbiAgICAgICAgICAgIGZvclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIj5UaGUgT2RpbiBQcm9qZWN0LjwvYT5cbiAgICAgICAgPC9wPlxuICAgIDwvZm9vdGVyPlxuPC9ib2R5PiAqL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9