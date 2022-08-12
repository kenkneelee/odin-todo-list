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


{/* <footer>
<p>
    Made by
    <a href="https://github.com/kenkneelee">Kenny Lee</a>
    for
    <a href="https://www.theodinproject.com/">The Odin Project.</a>
</p>
</footer> */}

/* <body>
    <div id="aside">
        <h2>This Week</h2>
        <ul id="calendar">
            <li class="calendarDay">Monday</li>
            <li class="calendarDay">Tuesday</li>
            <li class="calendarDay">Wednesday</li>
            <li class="calendarDay">Thursday</li>
            <li class="calendarDay">Friday</li>
            <li class="calendarDay">Saturday</li>
            <li class="calendarDay">Sunday</li>
        </ul>
    </div>

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheVVJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RG9zaXMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUGFnZSBsYXlvdXQgc3R1ZmYgKi9cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb3Npc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEycHgsIGNhbGMoMC42MjVyZW0gKyAoKDF2dyAtIDEwLjhweCkgKiAwLjkyNTkpKSwgMjBweCk7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcInNpZGUgY29udGVudCBhc2lkZVxcXCJcXG4gICAgICAgIFxcXCJzaWRlIGZvb3RlciBmb290ZXJcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogSGVhZGVyIHN0dWZmICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25vdGlmaWNhdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbiNub3RpZkJlbGwge1xcbiAgICB3aWR0aDogM3JlbTtcXG59XFxuI3VzZXJQcm9maWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4jdXNlckljb24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAzcmVtO1xcbn1cXG5cXG4vKiBTaWRlYmFyIHN0dWZmICovXFxuXFxuI3NpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3NpZGViYXItbGlua3Mge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuI3NpZGViYXItbGlua3MgPiBsaSB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuI3NpZGViYXItbGlua3MgdWwge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwIDIwJTtcXG59XFxuI3NpZGViYXItYm90dG9tIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgc3R1ZmYgKi9cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7ICovXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6ICMxZjJjMzY7XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMC41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTQyKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjJjMzY2NTtcXG59XFxuXFxuI21haW4taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI2MwYzBjMDtcXG59XFxuXFxuI2NhcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJkOmhvdmVyLFxcbi5jYWxlbmRhckRheTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxufVxcblxcbi5jYXJkSGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBSaWdodCBzaWRlIHN0dWZmICovXFxuXFxuI2FzaWRlIHtcXG4gICAgZ3JpZC1hcmVhOiBhc2lkZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIGNvbG9yOiAjYzBjMGMwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbiNhc2lkZSB1bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuI2NhbGVuZGFyIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGhlaWdodDogODAlO1xcbn1cXG5cXG4uY2FsZW5kYXJEYXkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgLyogYm94LXNoYWRvdzogLTZweCAtNnB4IDE0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLFxcbiAgICAgICAgLTZweCAtNnB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcbiAgICAgICAgNnB4IDZweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSksIDZweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpOyAqL1xcbn1cXG5cXG4vKiBGb290ZXIgc3R1ZmYgKi9cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgcCBhIHtcXG4gICAgY29sb3I6ICNjMGMwYzA7XFxufVxcblxcblxcblxcblxcblxcbiNzaWRlYmFyLFxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyYzM2O1xcbiAgICBjb2xvcjogI2MwYzBjMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2MwYzBjMDZkO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbiNtYWluLWNvbnRlbnQsXFxuI2FzaWRlIHtcXG4gICAgYm9yZGVyOiBweCBzb2xpZCAjYzBjMGMwNmQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIHRvIGJvdHRvbSxcXG4gICAgICAgICMzMDQzNTIsXFxuICAgICAgICAjYzBjMGMwXFxuICAgICk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IC0ycHggLTJweCAxNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSxcXG4gICAgICAgIC0ycHggLTJweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSxcXG4gICAgICAgIDJweCAycHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpLCAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXFxuICAgICAgICAtMXB4IC0xcHggNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcXG4gICAgICAgIDJweCAycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSksIDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0ycHggLTJweCA2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcbiAgICAgICAgaW5zZXQgLTJweCAtMnB4IDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXFxuICAgICAgICBpbnNldCAycHggMnB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSxcXG4gICAgICAgIGluc2V0IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSx3RUFBd0U7QUFDNUU7QUFDQTtJQUNJLGFBQWE7SUFDYjs7OzRCQUd3QjtJQUN4QixrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBLGtCQUFrQjs7QUFFbEI7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBLHVCQUF1Qjs7QUFFdkI7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQyxlQUFlO0FBQ25COztBQUVBOztJQUVJLG9DQUFvQztJQUNwQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQzs7bUZBRStFO0FBQ25GOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7Ozs7O0FBTUE7OztJQUdJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBOztJQUVJLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEI7Ozs7S0FJQyxFQUFFLHFFQUFxRTtJQUN4RSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUI7O2dGQUU0RTtBQUNoRjtBQUNBO0lBQ0k7OzZFQUV5RTtBQUM3RTtBQUNBO0lBQ0k7Ozs2Q0FHeUM7QUFDN0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RG9zaXMmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuLyogUGFnZSBsYXlvdXQgc3R1ZmYgKi9cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb3Npc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEycHgsIGNhbGMoMC42MjVyZW0gKyAoKDF2dyAtIDEwLjhweCkgKiAwLjkyNTkpKSwgMjBweCk7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcInNpZGUgY29udGVudCBhc2lkZVxcXCJcXG4gICAgICAgIFxcXCJzaWRlIGZvb3RlciBmb290ZXJcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogSGVhZGVyIHN0dWZmICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25vdGlmaWNhdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbiNub3RpZkJlbGwge1xcbiAgICB3aWR0aDogM3JlbTtcXG59XFxuI3VzZXJQcm9maWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4jdXNlckljb24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAzcmVtO1xcbn1cXG5cXG4vKiBTaWRlYmFyIHN0dWZmICovXFxuXFxuI3NpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3NpZGViYXItbGlua3Mge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuI3NpZGViYXItbGlua3MgPiBsaSB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuI3NpZGViYXItbGlua3MgdWwge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwIDIwJTtcXG59XFxuI3NpZGViYXItYm90dG9tIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgc3R1ZmYgKi9cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7ICovXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6ICMxZjJjMzY7XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMC41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTQyKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjJjMzY2NTtcXG59XFxuXFxuI21haW4taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI2MwYzBjMDtcXG59XFxuXFxuI2NhcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJkOmhvdmVyLFxcbi5jYWxlbmRhckRheTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxufVxcblxcbi5jYXJkSGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBSaWdodCBzaWRlIHN0dWZmICovXFxuXFxuI2FzaWRlIHtcXG4gICAgZ3JpZC1hcmVhOiBhc2lkZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIGNvbG9yOiAjYzBjMGMwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbiNhc2lkZSB1bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuI2NhbGVuZGFyIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGhlaWdodDogODAlO1xcbn1cXG5cXG4uY2FsZW5kYXJEYXkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgLyogYm94LXNoYWRvdzogLTZweCAtNnB4IDE0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLFxcbiAgICAgICAgLTZweCAtNnB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcbiAgICAgICAgNnB4IDZweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSksIDZweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpOyAqL1xcbn1cXG5cXG4vKiBGb290ZXIgc3R1ZmYgKi9cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgcCBhIHtcXG4gICAgY29sb3I6ICNjMGMwYzA7XFxufVxcblxcblxcblxcblxcblxcbiNzaWRlYmFyLFxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyYzM2O1xcbiAgICBjb2xvcjogI2MwYzBjMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2MwYzBjMDZkO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbiNtYWluLWNvbnRlbnQsXFxuI2FzaWRlIHtcXG4gICAgYm9yZGVyOiBweCBzb2xpZCAjYzBjMGMwNmQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIHRvIGJvdHRvbSxcXG4gICAgICAgICMzMDQzNTIsXFxuICAgICAgICAjYzBjMGMwXFxuICAgICk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IC0ycHggLTJweCAxNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSxcXG4gICAgICAgIC0ycHggLTJweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSxcXG4gICAgICAgIDJweCAycHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpLCAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXFxuICAgICAgICAtMXB4IC0xcHggNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcXG4gICAgICAgIDJweCAycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSksIDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0ycHggLTJweCA2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcbiAgICAgICAgaW5zZXQgLTJweCAtMnB4IDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXFxuICAgICAgICBpbnNldCAycHggMnB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSxcXG4gICAgICAgIGluc2V0IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHtkaXNwbGF5SGVhZGVyLCBkaXNwbGF5U2lkZWJhciwgZGlzcGxheUFzaWRlLCBkaXNwbGF5Rm9vdGVyfSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlVSVwiO1xuZGlzcGxheUhlYWRlcihcIktlblwiKTtcbmRpc3BsYXlTaWRlYmFyKFtcIlByb2plY3RcIiwgXCJBbm90aGVyXCIsIFwiQW5kIGFub3RoZXJcIl0pO1xuZGlzcGxheUFzaWRlKCk7XG5kaXNwbGF5Rm9vdGVyKCk7XG5cbmNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cbi8vIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbi8vICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIFxuLy8gICAgLy8gQWRkIHRoZSBpbWFnZSB0byBvdXIgZXhpc3RpbmcgZGl2LlxuLy8gICAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4vLyAgICBteUljb24uc3JjID0gbm90aWZCZWxsO1xuIFxuLy8gICAgZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xuIFxuLy8gICAgIHJldHVybiBlbGVtZW50O1xuLy8gICB9XG4gXG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyIsImltcG9ydCBub3RpZl9CZWxsIGZyb20gXCIuLi9pbWFnZXMvbm90aWZfQmVsbC5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIobmFtZSwgaWNvbikge1xuICAgIC8vIGhlYWRlciBjb250YWluZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgLy8gPmFwcCBsb2dvIGFuZCB0aXRsZSAobGVmdClcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIlRvLURvXCI7XG5cbiAgICAvLyA+cmlnaHQgc2lkZSBjb250YWluZXJcbiAgICBjb25zdCBub3RpZmljYXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3RpZmljYXRpb25zLmlkID0gXCJub3RpZmljYXRpb25zXCI7XG5cbiAgICBjb25zdCBub3RpZkJlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5vdGlmQmVsbC5pZCA9IFwibm90aWZCZWxsXCI7XG4gICAgbm90aWZCZWxsLnNyYyA9IG5vdGlmX0JlbGw7XG5cbiAgICAvLyA+PiB1c2VyIHByb2ZpbGUgc2VjdGlvblxuICAgIGNvbnN0IHVzZXJQcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1c2VyUHJvZmlsZS5pZCA9IFwidXNlclByb2ZpbGVcIjtcbiAgICAvLyA+Pj4gd2VsY29tZSBtc2dcbiAgICBjb25zdCB1c2VyTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1c2VyTXNnLnRleHRDb250ZW50ID0gXCJXZWxjb21lLCBcIiArIG5hbWU7XG4gICAgLy8gPj4+IGljb24gaW1hZ2VcbiAgICBjb25zdCB1c2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdXNlckljb24uaWQgPSBcInVzZXJJY29uXCI7XG4gICAgdXNlckljb24uc3JjID0gXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODkxMDU5MDk/dj00XCI7XG5cbiAgICB1c2VyUHJvZmlsZS5hcHBlbmQodXNlck1zZywgdXNlckljb24pO1xuICAgIG5vdGlmaWNhdGlvbnMuYXBwZW5kKG5vdGlmQmVsbCwgdXNlclByb2ZpbGUpO1xuXG4gICAgLy8gRE9NIGZ1bmN0aW9ucyB0byBhcHBlbmQgdG8gcGFnZVxuICAgIGhlYWRlci5hcHBlbmQobG9nbywgbm90aWZpY2F0aW9ucyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVNpZGViYXIocHJvamVjdHMpIHtcbiAgICAvLyBzaWRlYmFyIGNvbnRhaW5lclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXIuaWQgPSBcInNpZGViYXJcIjtcblxuICAgIC8vID5zaWRlYmFyIGxpbmtzXG4gICAgY29uc3Qgc2lkZWJhckxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHNpZGViYXJMaW5rcy5pZCA9IFwic2lkZWJhci1saW5rc1wiO1xuXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdG9kYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwcm9qZWN0TGlzdC50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IHRoaXNQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICB0aGlzUHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgIHByb2plY3RMaXN0TGlzdC5hcHBlbmRDaGlsZCh0aGlzUHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29tcGxldGVkLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWRcIjtcblxuXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RMaXN0KTtcbiAgICBzaWRlYmFyTGlua3MuYXBwZW5kKHRvZGF5LCBwcm9qZWN0TGlzdCwgY29tcGxldGVkKTtcblxuICAgIGNvbnN0IHNpZGViYXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgc2lkZWJhckJvdHRvbS5pZCA9IFwic2lkZWJhci1ib3R0b21cIjtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzZXR0aW5ncy50ZXh0Q29udGVudCA9IFwiU2V0dGluZ3NcIjtcbiAgICBjb25zdCBsb2dPdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbG9nT3V0LnRleHRDb250ZW50ID0gXCJMb2cgT3V0XCI7XG4gICAgc2lkZWJhckJvdHRvbS5hcHBlbmQoc2V0dGluZ3MsIGxvZ091dCk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZChzaWRlYmFyTGlua3MsIHNpZGViYXJCb3R0b20pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QXNpZGUoKSB7XG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFzaWRlLmlkID0gXCJhc2lkZVwiO1xuICAgIGNvbnN0IGFzaWRlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGFzaWRlSGVhZGVyLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIjtcbiAgICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjYWxlbmRhci5pZD1cImNhbGVuZGFyXCI7XG4gICAgLy8gdGVtcCBjb2RlIGZvciBkYXlzLCBsZWFybiB0byB1c2UgZGF0ZS1mbnNcbiAgICBjb25zdCBkYXlzID0gW1xuICAgICAgICBcIk1vbmRheVwiLFxuICAgICAgICBcIlR1ZXNkYXlcIixcbiAgICAgICAgXCJXZWRuZXNkYXlcIixcbiAgICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgICBcIkZyaWRheVwiLFxuICAgICAgICBcIlNhdHVyZGF5XCIsXG4gICAgICAgIFwiU3VuZGF5XCIsXG4gICAgXTtcbiAgICBkYXlzLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChcImNhbGVuZGFyRGF5XCIpO1xuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSBhO1xuICAgICAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChkYXkpO1xuICAgIH0pO1xuICAgIGFzaWRlLmFwcGVuZChhc2lkZUhlYWRlcixjYWxlbmRhcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhc2lkZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Rm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb290ZXJUZXh0LmlubmVySFRNTCA9IGBNYWRlIGJ5XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rZW5rbmVlbGVlXCI+S2VubnkgTGVlPC9hPlxuICAgIGZvclxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCI+VGhlIE9kaW4gUHJvamVjdC48L2E+YFxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuXG57LyogPGZvb3Rlcj5cbjxwPlxuICAgIE1hZGUgYnlcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tlbmtuZWVsZWVcIj5LZW5ueSBMZWU8L2E+XG4gICAgZm9yXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIj5UaGUgT2RpbiBQcm9qZWN0LjwvYT5cbjwvcD5cbjwvZm9vdGVyPiAqL31cblxuLyogPGJvZHk+XG4gICAgPGRpdiBpZD1cImFzaWRlXCI+XG4gICAgICAgIDxoMj5UaGlzIFdlZWs8L2gyPlxuICAgICAgICA8dWwgaWQ9XCJjYWxlbmRhclwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2FsZW5kYXJEYXlcIj5Nb25kYXk8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2FsZW5kYXJEYXlcIj5UdWVzZGF5PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNhbGVuZGFyRGF5XCI+V2VkbmVzZGF5PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNhbGVuZGFyRGF5XCI+VGh1cnNkYXk8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2FsZW5kYXJEYXlcIj5GcmlkYXk8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2FsZW5kYXJEYXlcIj5TYXR1cmRheTwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYWxlbmRhckRheVwiPlN1bmRheTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgyPkFsbCBQcm9qZWN0czwvaDI+XG4gICAgICAgICAgICA8YnV0dG9uPk5ldyBUYXNrPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiY2FyZHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPVwiY2hlY2tlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBUZXN0IGNhcmQgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+QXJjaGl2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cD5EdWU6IEF1Z3VzdCAyMCwgMjAyMjwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVGVzdCBjYXJkIGRlc2NyaXB0aW9uIGdvZXMgaGVyZS4gTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0XG4gICAgICAgICAgICAgICAgICAgIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9yZSBzdXNjaXBpdCBsYXVkYW50aXVtXG4gICAgICAgICAgICAgICAgICAgIG51bGxhIHZlcm8gZG9sb3JlcyBtYWduYW0gc2FlcGUsIG5lcXVlIHBlcmZlcmVuZGlzIGZ1Z2l0XG4gICAgICAgICAgICAgICAgICAgIGRvbG9yaWJ1cyBxdW9kIHZlbCBuZWNlc3NpdGF0aWJ1cyBpbXBlZGl0IHNvbHV0YSB2b2x1cHRhdGVzXG4gICAgICAgICAgICAgICAgICAgIHJlcHJlaGVuZGVyaXQgc2ludCBtb2xlc3RpYXMuIFF1YXNpIVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9XCJjaGVja2VkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRlc3QgY2FyZCBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5BcmNoaXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwPkR1ZTogQXVndXN0IDIwLCAyMDIyPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBUZXN0IGNhcmQgZGVzY3JpcHRpb24gZ29lcyBoZXJlLiBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXRcbiAgICAgICAgICAgICAgICAgICAgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3JlIHN1c2NpcGl0IGxhdWRhbnRpdW1cbiAgICAgICAgICAgICAgICAgICAgbnVsbGEgdmVybyBkb2xvcmVzIG1hZ25hbSBzYWVwZSwgbmVxdWUgcGVyZmVyZW5kaXMgZnVnaXRcbiAgICAgICAgICAgICAgICAgICAgZG9sb3JpYnVzIHF1b2QgdmVsIG5lY2Vzc2l0YXRpYnVzIGltcGVkaXQgc29sdXRhIHZvbHVwdGF0ZXNcbiAgICAgICAgICAgICAgICAgICAgcmVwcmVoZW5kZXJpdCBzaW50IG1vbGVzdGlhcy4gUXVhc2khXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmRIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD1cImNoZWNrZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGVzdCBjYXJkIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkFyY2hpdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHA+RHVlOiBBdWd1c3QgMjAsIDIwMjI8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFRlc3QgY2FyZCBkZXNjcmlwdGlvbiBnb2VzIGhlcmUuIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldFxuICAgICAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcmUgc3VzY2lwaXQgbGF1ZGFudGl1bVxuICAgICAgICAgICAgICAgICAgICBudWxsYSB2ZXJvIGRvbG9yZXMgbWFnbmFtIHNhZXBlLCBuZXF1ZSBwZXJmZXJlbmRpcyBmdWdpdFxuICAgICAgICAgICAgICAgICAgICBkb2xvcmlidXMgcXVvZCB2ZWwgbmVjZXNzaXRhdGlidXMgaW1wZWRpdCBzb2x1dGEgdm9sdXB0YXRlc1xuICAgICAgICAgICAgICAgICAgICByZXByZWhlbmRlcml0IHNpbnQgbW9sZXN0aWFzLiBRdWFzaSFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPVwiY2hlY2tlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBUZXN0IGNhcmQgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+QXJjaGl2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cD5EdWU6IEF1Z3VzdCAyMCwgMjAyMjwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVGVzdCBjYXJkIGRlc2NyaXB0aW9uIGdvZXMgaGVyZS4gTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0XG4gICAgICAgICAgICAgICAgICAgIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9yZSBzdXNjaXBpdCBsYXVkYW50aXVtXG4gICAgICAgICAgICAgICAgICAgIG51bGxhIHZlcm8gZG9sb3JlcyBtYWduYW0gc2FlcGUsIG5lcXVlIHBlcmZlcmVuZGlzIGZ1Z2l0XG4gICAgICAgICAgICAgICAgICAgIGRvbG9yaWJ1cyBxdW9kIHZlbCBuZWNlc3NpdGF0aWJ1cyBpbXBlZGl0IHNvbHV0YSB2b2x1cHRhdGVzXG4gICAgICAgICAgICAgICAgICAgIHJlcHJlaGVuZGVyaXQgc2ludCBtb2xlc3RpYXMuIFF1YXNpIVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxmb290ZXI+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgTWFkZSBieVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rZW5rbmVlbGVlXCI+S2VubnkgTGVlPC9hPlxuICAgICAgICAgICAgZm9yXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiPlRoZSBPZGluIFByb2plY3QuPC9hPlxuICAgICAgICA8L3A+XG4gICAgPC9mb290ZXI+XG48L2JvZHk+ICovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=