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
___CSS_LOADER_EXPORT___.push([module.id, "/* Page layout stuff */\n\n* {\n    box-sizing: border-box;\n    font-family: \"Dosis\", sans-serif;\n}\nhtml {\n    font-size: clamp(12px, calc(0.625rem + ((1vw - 10.8px) * 0.9259)), 20px);\n}\nbody {\n    display: grid;\n    grid-template-areas:\n        \"header header header\"\n        \"side content aside\"\n        \"side footer footer\";\n    grid-template-columns: 1fr 5fr 2fr;\n    grid-template-rows: auto 1fr auto;\n    height: 100vh;\n    margin: 0;\n}\n\n/* Header stuff */\n\nheader {\n    grid-area: header;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#notifications {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n#notifBell {\n    width: 40px;\n}\n#userProfile {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n#userIcon {\n    border-radius: 50%;\n    width: 50px;\n}\n\n/* Sidebar stuff */\n\n#sidebar {\n    grid-area: side;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#sidebar-links {\n    list-style-type: none;\n    padding: 0.5rem;\n}\n#sidebar-links > li {\n    padding: 0.5rem;\n}\n#sidebar-links ul {\n    padding: 0.5rem 0 0 20%;\n}\n#sidebar-bottom {\n    list-style: none;\n    padding-left: 1rem;\n}\n\n/* Main content stuff */\n\n#main-content {\n    grid-area: content;\n    /* background-color: bisque; */\n    overflow-y: scroll;\n    padding: 1rem;\n    color: #1f2c36;\n}\n::-webkit-scrollbar {\n    width: 0.5rem;\n    color: red;\n    background: rgba(128, 128, 128, 0.142);\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #1f2c3665;\n}\n\n#main-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #c0c0c0;\n}\n\n#cards {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.card {\n    /* background-color: antiquewhite; */\n    border-radius: 20px;\n    padding: 1rem;\n    background: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    cursor: pointer;\n}\n\n.card:hover,\n.calendarDay:hover {\n    background: rgba(255, 255, 255, 0.4);\n    transition-duration: 500ms;\n}\n\n.cardHeader {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Right side stuff */\n\n#aside {\n    grid-area: aside;\n    background-color: beige;\n    color: #c0c0c0;\n    padding: 0.5rem;\n}\n\n#aside ul {\n    padding: 0;\n}\n\n#calendar {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    height: 80%;\n}\n\n.calendarDay {\n    padding: 1rem;\n    background: #efefef;\n    border: none;\n    border-radius: 0.5rem;\n    color: #444;\n    outline: none;\n    background: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    /* box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),\n        -6px -6px 10px rgba(255, 255, 255, 0.5),\n        6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15); */\n}\n\n/* Footer stuff */\n\nfooter {\n    grid-area: footer;\n    text-align: center;\n}\n\nfooter p a {\n    color: #c0c0c0;\n}\n\n\n\n\n\n#sidebar,\nheader,\nfooter {\n    background-color: #1f2c36;\n    color: #c0c0c0;\n    border: 2px solid #c0c0c06d;\n    box-sizing: border-box;\n    padding: 0.5rem;\n}\n\n#main-content,\n#aside {\n    border: px solid #c0c0c06d;\n    box-sizing: border-box;\n    background: linear-gradient(\n        to bottom,\n        #304352,\n        #c0c0c0\n    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    background-attachment: scroll;\n}\n\nbutton {\n    background: rgba(255, 255, 255, 0.4);\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.4rem;\n    color: #444;\n    font-size: 1rem;\n    text-align: center;\n    outline: none;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n    box-shadow: -2px -2px 14px rgba(255, 255, 255, 0.3),\n        -2px -2px 10px rgba(255, 255, 255, 0.1),\n        2px 2px 8px rgba(255, 255, 255, 0.075), 2px 2px 10px rgba(0, 0, 0, 0.15);\n}\nbutton:hover {\n    box-shadow: -1px -1px 6px rgba(255, 255, 255, 0.4),\n        -1px -1px 4px rgba(255, 255, 255, 0.2),\n        2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);\n}\nbutton:active {\n    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.5),\n        inset -2px -2px 4px rgba(255, 255, 255, 0.3),\n        inset 2px 2px 2px rgba(255, 255, 255, 0.075),\n        inset 2px 2px 4px rgba(0, 0, 0, 0.15);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA,sBAAsB;;AAEtB;IACI,sBAAsB;IACtB,gCAAgC;AACpC;AACA;IACI,wEAAwE;AAC5E;AACA;IACI,aAAa;IACb;;;4BAGwB;IACxB,kCAAkC;IAClC,iCAAiC;IACjC,aAAa;IACb,SAAS;AACb;;AAEA,iBAAiB;;AAEjB;IACI,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA,kBAAkB;;AAElB;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,uBAAuB;;AAEvB;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,cAAc;AAClB;AACA;IACI,aAAa;IACb,UAAU;IACV,sCAAsC;AAC1C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,oCAAoC;IACpC,yCAAyC;IACzC,0CAA0C;IAC1C,eAAe;AACnB;;AAEA;;IAEI,oCAAoC;IACpC,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA,qBAAqB;;AAErB;IACI,gBAAgB;IAChB,uBAAuB;IACvB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;IACrB,WAAW;IACX,aAAa;IACb,oCAAoC;IACpC,yCAAyC;IACzC,0CAA0C;IAC1C;;mFAE+E;AACnF;;AAEA,iBAAiB;;AAEjB;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;;;;;AAMA;;;IAGI,yBAAyB;IACzB,cAAc;IACd,2BAA2B;IAC3B,sBAAsB;IACtB,eAAe;AACnB;;AAEA;;IAEI,0BAA0B;IAC1B,sBAAsB;IACtB;;;;KAIC,EAAE,qEAAqE;IACxE,6BAA6B;AACjC;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,4BAA4B;IAC5B;;gFAE4E;AAChF;AACA;IACI;;6EAEyE;AAC7E;AACA;IACI;;;6CAGyC;AAC7C","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Dosis&display=swap\");\n\n/* Page layout stuff */\n\n* {\n    box-sizing: border-box;\n    font-family: \"Dosis\", sans-serif;\n}\nhtml {\n    font-size: clamp(12px, calc(0.625rem + ((1vw - 10.8px) * 0.9259)), 20px);\n}\nbody {\n    display: grid;\n    grid-template-areas:\n        \"header header header\"\n        \"side content aside\"\n        \"side footer footer\";\n    grid-template-columns: 1fr 5fr 2fr;\n    grid-template-rows: auto 1fr auto;\n    height: 100vh;\n    margin: 0;\n}\n\n/* Header stuff */\n\nheader {\n    grid-area: header;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#notifications {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n#notifBell {\n    width: 40px;\n}\n#userProfile {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n#userIcon {\n    border-radius: 50%;\n    width: 50px;\n}\n\n/* Sidebar stuff */\n\n#sidebar {\n    grid-area: side;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#sidebar-links {\n    list-style-type: none;\n    padding: 0.5rem;\n}\n#sidebar-links > li {\n    padding: 0.5rem;\n}\n#sidebar-links ul {\n    padding: 0.5rem 0 0 20%;\n}\n#sidebar-bottom {\n    list-style: none;\n    padding-left: 1rem;\n}\n\n/* Main content stuff */\n\n#main-content {\n    grid-area: content;\n    /* background-color: bisque; */\n    overflow-y: scroll;\n    padding: 1rem;\n    color: #1f2c36;\n}\n::-webkit-scrollbar {\n    width: 0.5rem;\n    color: red;\n    background: rgba(128, 128, 128, 0.142);\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #1f2c3665;\n}\n\n#main-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #c0c0c0;\n}\n\n#cards {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.card {\n    /* background-color: antiquewhite; */\n    border-radius: 20px;\n    padding: 1rem;\n    background: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    cursor: pointer;\n}\n\n.card:hover,\n.calendarDay:hover {\n    background: rgba(255, 255, 255, 0.4);\n    transition-duration: 500ms;\n}\n\n.cardHeader {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Right side stuff */\n\n#aside {\n    grid-area: aside;\n    background-color: beige;\n    color: #c0c0c0;\n    padding: 0.5rem;\n}\n\n#aside ul {\n    padding: 0;\n}\n\n#calendar {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    height: 80%;\n}\n\n.calendarDay {\n    padding: 1rem;\n    background: #efefef;\n    border: none;\n    border-radius: 0.5rem;\n    color: #444;\n    outline: none;\n    background: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    /* box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),\n        -6px -6px 10px rgba(255, 255, 255, 0.5),\n        6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15); */\n}\n\n/* Footer stuff */\n\nfooter {\n    grid-area: footer;\n    text-align: center;\n}\n\nfooter p a {\n    color: #c0c0c0;\n}\n\n\n\n\n\n#sidebar,\nheader,\nfooter {\n    background-color: #1f2c36;\n    color: #c0c0c0;\n    border: 2px solid #c0c0c06d;\n    box-sizing: border-box;\n    padding: 0.5rem;\n}\n\n#main-content,\n#aside {\n    border: px solid #c0c0c06d;\n    box-sizing: border-box;\n    background: linear-gradient(\n        to bottom,\n        #304352,\n        #c0c0c0\n    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    background-attachment: scroll;\n}\n\nbutton {\n    background: rgba(255, 255, 255, 0.4);\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.4rem;\n    color: #444;\n    font-size: 1rem;\n    text-align: center;\n    outline: none;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n    box-shadow: -2px -2px 14px rgba(255, 255, 255, 0.3),\n        -2px -2px 10px rgba(255, 255, 255, 0.1),\n        2px 2px 8px rgba(255, 255, 255, 0.075), 2px 2px 10px rgba(0, 0, 0, 0.15);\n}\nbutton:hover {\n    box-shadow: -1px -1px 6px rgba(255, 255, 255, 0.4),\n        -1px -1px 4px rgba(255, 255, 255, 0.2),\n        2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);\n}\nbutton:active {\n    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.5),\n        inset -2px -2px 4px rgba(255, 255, 255, 0.3),\n        inset 2px 2px 2px rgba(255, 255, 255, 0.075),\n        inset 2px 2px 4px rgba(0, 0, 0, 0.15);\n}\n"],"sourceRoot":""}]);
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

function displaySidebar (projects) {
    // sidebar container
    const sidebar = document.createElement("div");
    sidebar.id="sidebar";

    // >sidebar links
    const sidebarLinks = document.createElement("ul");
    sidebarLinks.id="sidebar-links";

    const today = document.createElement("li");
    today.textContent = "Today";

    const projectList = document.createElement("li");
    projectList.textContent="Projects";

    const projectListList = document.createElement("ul");

    projects.forEach (project => {
        let thisProject = document.createElement("li");
        thisProject.textContent = project;
        projectListList.appendChild(thisProject);
    })

    projectList.appendChild(projectListList);
    sidebarLinks.append(today, projectList);


    const sidebarBottom = document.createElement("ul");
    sidebarBottom.id="sidebar-bottom";
    const settings = document.createElement("li");
    settings.textContent="Settings";
    const logOut = document.createElement("li");
    logOut.textContent="Log Out";
    sidebarBottom.append(settings, logOut);


    sidebar.append(sidebarLinks, sidebarBottom);
    document.body.appendChild(sidebar);
}



/* <body>
    <div id="sidebar">
        <ul id="sidebar-links">
            <li>Today</li>
            <li>
                Projects
                <ul>
                    <li>Sample project</li>
                    <li>Sample project 2</li>
                    <li>Sample project 3</li>
                </ul>
            </li>
            <li>Completed</li>
        </ul>

        <ul id="sidebar-bottom">
            <li>Settings</li>
            <li>Log out</li>
        </ul>
    </div>

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURvc2lzJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFBhZ2UgbGF5b3V0IHN0dWZmICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9zaXNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5odG1sIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCBjYWxjKDAuNjI1cmVtICsgKCgxdncgLSAxMC44cHgpICogMC45MjU5KSksIDIwcHgpO1xcbn1cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJzaWRlIGNvbnRlbnQgYXNpZGVcXFwiXFxuICAgICAgICBcXFwic2lkZSBmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhlYWRlciBzdHVmZiAqL1xcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNub3RpZmljYXRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4jbm90aWZCZWxsIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcbiN1c2VyUHJvZmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuI3VzZXJJY29uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLyogU2lkZWJhciBzdHVmZiAqL1xcblxcbiNzaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNzaWRlYmFyLWxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbiNzaWRlYmFyLWxpbmtzID4gbGkge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbiNzaWRlYmFyLWxpbmtzIHVsIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMCAyMCU7XFxufVxcbiNzaWRlYmFyLWJvdHRvbSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50IHN0dWZmICovXFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlOyAqL1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiAjMWYyYzM2O1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE0Mik7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyYzM2NjU7XFxufVxcblxcbiNtYWluLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNjMGMwYzA7XFxufVxcblxcbiNjYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FyZDpob3ZlcixcXG4uY2FsZW5kYXJEYXk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbn1cXG5cXG4uY2FyZEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogUmlnaHQgc2lkZSBzdHVmZiAqL1xcblxcbiNhc2lkZSB7XFxuICAgIGdyaWQtYXJlYTogYXNpZGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBjb2xvcjogI2MwYzBjMDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jYXNpZGUgdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY2FsZW5kYXIge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5jYWxlbmRhckRheSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAvKiBib3gtc2hhZG93OiAtNnB4IC02cHggMTRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXFxuICAgICAgICAtNnB4IC02cHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXFxuICAgICAgICA2cHggNnB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSwgNnB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7ICovXFxufVxcblxcbi8qIEZvb3RlciBzdHVmZiAqL1xcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBwIGEge1xcbiAgICBjb2xvcjogI2MwYzBjMDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuI3NpZGViYXIsXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjJjMzY7XFxuICAgIGNvbG9yOiAjYzBjMGMwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzBjMGMwNmQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuI21haW4tY29udGVudCxcXG4jYXNpZGUge1xcbiAgICBib3JkZXI6IHB4IHNvbGlkICNjMGMwYzA2ZDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgdG8gYm90dG9tLFxcbiAgICAgICAgIzMwNDM1MixcXG4gICAgICAgICNjMGMwYzBcXG4gICAgKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMC40cmVtO1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogLTJweCAtMnB4IDE0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLFxcbiAgICAgICAgLTJweCAtMnB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLFxcbiAgICAgICAgMnB4IDJweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSksIDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcXG4gICAgICAgIC0xcHggLTFweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxcbiAgICAgICAgMnB4IDJweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSwgMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTJweCAtMnB4IDZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXFxuICAgICAgICBpbnNldCAtMnB4IC0ycHggNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSxcXG4gICAgICAgIGluc2V0IDJweCAycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpLFxcbiAgICAgICAgaW5zZXQgMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsc0JBQXNCOztBQUV0QjtJQUNJLHNCQUFzQjtJQUN0QixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHdFQUF3RTtBQUM1RTtBQUNBO0lBQ0ksYUFBYTtJQUNiOzs7NEJBR3dCO0lBQ3hCLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUEsdUJBQXVCOztBQUV2QjtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx5Q0FBeUM7SUFDekMsMENBQTBDO0lBQzFDLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksb0NBQW9DO0lBQ3BDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6QywwQ0FBMEM7SUFDMUM7O21GQUUrRTtBQUNuRjs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7Ozs7OztBQU1BOzs7SUFHSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCOzs7O0tBSUMsRUFBRSxxRUFBcUU7SUFDeEUsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCOztnRkFFNEU7QUFDaEY7QUFDQTtJQUNJOzs2RUFFeUU7QUFDN0U7QUFDQTtJQUNJOzs7NkNBR3lDO0FBQzdDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURvc2lzJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbi8qIFBhZ2UgbGF5b3V0IHN0dWZmICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9zaXNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5odG1sIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCBjYWxjKDAuNjI1cmVtICsgKCgxdncgLSAxMC44cHgpICogMC45MjU5KSksIDIwcHgpO1xcbn1cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJzaWRlIGNvbnRlbnQgYXNpZGVcXFwiXFxuICAgICAgICBcXFwic2lkZSBmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhlYWRlciBzdHVmZiAqL1xcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNub3RpZmljYXRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4jbm90aWZCZWxsIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcbiN1c2VyUHJvZmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuI3VzZXJJY29uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLyogU2lkZWJhciBzdHVmZiAqL1xcblxcbiNzaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNzaWRlYmFyLWxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbiNzaWRlYmFyLWxpbmtzID4gbGkge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbiNzaWRlYmFyLWxpbmtzIHVsIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMCAyMCU7XFxufVxcbiNzaWRlYmFyLWJvdHRvbSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50IHN0dWZmICovXFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlOyAqL1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiAjMWYyYzM2O1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE0Mik7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyYzM2NjU7XFxufVxcblxcbiNtYWluLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNjMGMwYzA7XFxufVxcblxcbiNjYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FyZDpob3ZlcixcXG4uY2FsZW5kYXJEYXk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbn1cXG5cXG4uY2FyZEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogUmlnaHQgc2lkZSBzdHVmZiAqL1xcblxcbiNhc2lkZSB7XFxuICAgIGdyaWQtYXJlYTogYXNpZGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBjb2xvcjogI2MwYzBjMDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jYXNpZGUgdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY2FsZW5kYXIge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5jYWxlbmRhckRheSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAvKiBib3gtc2hhZG93OiAtNnB4IC02cHggMTRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXFxuICAgICAgICAtNnB4IC02cHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXFxuICAgICAgICA2cHggNnB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSwgNnB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7ICovXFxufVxcblxcbi8qIEZvb3RlciBzdHVmZiAqL1xcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBwIGEge1xcbiAgICBjb2xvcjogI2MwYzBjMDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuI3NpZGViYXIsXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjJjMzY7XFxuICAgIGNvbG9yOiAjYzBjMGMwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzBjMGMwNmQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuI21haW4tY29udGVudCxcXG4jYXNpZGUge1xcbiAgICBib3JkZXI6IHB4IHNvbGlkICNjMGMwYzA2ZDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgdG8gYm90dG9tLFxcbiAgICAgICAgIzMwNDM1MixcXG4gICAgICAgICNjMGMwYzBcXG4gICAgKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMC40cmVtO1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogLTJweCAtMnB4IDE0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLFxcbiAgICAgICAgLTJweCAtMnB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLFxcbiAgICAgICAgMnB4IDJweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSksIDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcXG4gICAgICAgIC0xcHggLTFweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxcbiAgICAgICAgMnB4IDJweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSwgMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTJweCAtMnB4IDZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXFxuICAgICAgICBpbnNldCAtMnB4IC0ycHggNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSxcXG4gICAgICAgIGluc2V0IDJweCAycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpLFxcbiAgICAgICAgaW5zZXQgMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQge2Rpc3BsYXlIZWFkZXIsIGRpc3BsYXlTaWRlYmFyfSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlVSVwiO1xuZGlzcGxheUhlYWRlcihcIktlblwiKTtcbmRpc3BsYXlTaWRlYmFyKFtcIlByb2plY3RcIiwgXCJBbm90aGVyXCIsIFwiQW5kIGFub3RoZXJcIl0pO1xuXG5jb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuXG4vLyBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4vLyAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBcbi8vICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cbi8vICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuLy8gICAgbXlJY29uLnNyYyA9IG5vdGlmQmVsbDtcbiBcbi8vICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKTtcbiBcbi8vICAgICByZXR1cm4gZWxlbWVudDtcbi8vICAgfVxuIFxuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiLCJpbXBvcnQgbm90aWZfQmVsbCBmcm9tIFwiLi4vaW1hZ2VzL25vdGlmX0JlbGwuc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SGVhZGVyKG5hbWUsIGljb24pIHtcbiAgICAvLyBoZWFkZXIgY29udGFpbmVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIC8vID5hcHAgbG9nbyBhbmQgdGl0bGUgKGxlZnQpXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJUby1Eb1wiO1xuXG4gICAgLy8gPnJpZ2h0IHNpZGUgY29udGFpbmVyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90aWZpY2F0aW9ucy5pZCA9IFwibm90aWZpY2F0aW9uc1wiO1xuXG4gICAgY29uc3Qgbm90aWZCZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBub3RpZkJlbGwuaWQgPSBcIm5vdGlmQmVsbFwiO1xuICAgIG5vdGlmQmVsbC5zcmMgPSBub3RpZl9CZWxsO1xuXG4gICAgLy8gPj4gdXNlciBwcm9maWxlIHNlY3Rpb24gXG4gICAgY29uc3QgdXNlclByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVzZXJQcm9maWxlLmlkID0gXCJ1c2VyUHJvZmlsZVwiO1xuICAgIC8vID4+PiB3ZWxjb21lIG1zZ1xuICAgIGNvbnN0IHVzZXJNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVzZXJNc2cudGV4dENvbnRlbnQgPSBcIldlbGNvbWUsIFwiICsgbmFtZTtcbiAgICAvLyA+Pj4gaWNvbiBpbWFnZVxuICAgIGNvbnN0IHVzZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB1c2VySWNvbi5pZCA9IFwidXNlckljb25cIjtcbiAgICB1c2VySWNvbi5zcmMgPSBcImh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS84OTEwNTkwOT92PTRcIjtcblxuICAgIHVzZXJQcm9maWxlLmFwcGVuZCh1c2VyTXNnLCB1c2VySWNvbik7XG4gICAgbm90aWZpY2F0aW9ucy5hcHBlbmQobm90aWZCZWxsLCB1c2VyUHJvZmlsZSk7XG5cbiAgICAvLyBET00gZnVuY3Rpb25zIHRvIGFwcGVuZCB0byBwYWdlXG4gICAgaGVhZGVyLmFwcGVuZChsb2dvLCBub3RpZmljYXRpb25zKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5U2lkZWJhciAocHJvamVjdHMpIHtcbiAgICAvLyBzaWRlYmFyIGNvbnRhaW5lclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXIuaWQ9XCJzaWRlYmFyXCI7XG5cbiAgICAvLyA+c2lkZWJhciBsaW5rc1xuICAgIGNvbnN0IHNpZGViYXJMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBzaWRlYmFyTGlua3MuaWQ9XCJzaWRlYmFyLWxpbmtzXCI7XG5cbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0b2RheS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHByb2plY3RMaXN0LnRleHRDb250ZW50PVwiUHJvamVjdHNcIjtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIHByb2plY3RzLmZvckVhY2ggKHByb2plY3QgPT4ge1xuICAgICAgICBsZXQgdGhpc1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHRoaXNQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgcHJvamVjdExpc3RMaXN0LmFwcGVuZENoaWxkKHRoaXNQcm9qZWN0KTtcbiAgICB9KVxuXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RMaXN0KTtcbiAgICBzaWRlYmFyTGlua3MuYXBwZW5kKHRvZGF5LCBwcm9qZWN0TGlzdCk7XG5cblxuICAgIGNvbnN0IHNpZGViYXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgc2lkZWJhckJvdHRvbS5pZD1cInNpZGViYXItYm90dG9tXCI7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgc2V0dGluZ3MudGV4dENvbnRlbnQ9XCJTZXR0aW5nc1wiO1xuICAgIGNvbnN0IGxvZ091dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsb2dPdXQudGV4dENvbnRlbnQ9XCJMb2cgT3V0XCI7XG4gICAgc2lkZWJhckJvdHRvbS5hcHBlbmQoc2V0dGluZ3MsIGxvZ091dCk7XG5cblxuICAgIHNpZGViYXIuYXBwZW5kKHNpZGViYXJMaW5rcywgc2lkZWJhckJvdHRvbSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbn1cblxuXG5cbi8qIDxib2R5PlxuICAgIDxkaXYgaWQ9XCJzaWRlYmFyXCI+XG4gICAgICAgIDx1bCBpZD1cInNpZGViYXItbGlua3NcIj5cbiAgICAgICAgICAgIDxsaT5Ub2RheTwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5TYW1wbGUgcHJvamVjdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5TYW1wbGUgcHJvamVjdCAyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlNhbXBsZSBwcm9qZWN0IDM8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPkNvbXBsZXRlZDwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHVsIGlkPVwic2lkZWJhci1ib3R0b21cIj5cbiAgICAgICAgICAgIDxsaT5TZXR0aW5nczwvbGk+XG4gICAgICAgICAgICA8bGk+TG9nIG91dDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGlkPVwiYXNpZGVcIj5cbiAgICAgICAgPGgyPlRoaXMgV2VlazwvaDI+XG4gICAgICAgIDx1bCBpZD1cImNhbGVuZGFyXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYWxlbmRhckRheVwiPk1vbmRheTwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYWxlbmRhckRheVwiPlR1ZXNkYXk8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2FsZW5kYXJEYXlcIj5XZWRuZXNkYXk8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2FsZW5kYXJEYXlcIj5UaHVyc2RheTwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYWxlbmRhckRheVwiPkZyaWRheTwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYWxlbmRhckRheVwiPlNhdHVyZGF5PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNhbGVuZGFyRGF5XCI+U3VuZGF5PC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBpZD1cIm1haW4taGVhZGVyXCI+XG4gICAgICAgICAgICA8aDI+QWxsIFByb2plY3RzPC9oMj5cbiAgICAgICAgICAgIDxidXR0b24+TmV3IFRhc2s8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJjYXJkc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9XCJjaGVja2VkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRlc3QgY2FyZCBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5BcmNoaXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwPkR1ZTogQXVndXN0IDIwLCAyMDIyPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBUZXN0IGNhcmQgZGVzY3JpcHRpb24gZ29lcyBoZXJlLiBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXRcbiAgICAgICAgICAgICAgICAgICAgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3JlIHN1c2NpcGl0IGxhdWRhbnRpdW1cbiAgICAgICAgICAgICAgICAgICAgbnVsbGEgdmVybyBkb2xvcmVzIG1hZ25hbSBzYWVwZSwgbmVxdWUgcGVyZmVyZW5kaXMgZnVnaXRcbiAgICAgICAgICAgICAgICAgICAgZG9sb3JpYnVzIHF1b2QgdmVsIG5lY2Vzc2l0YXRpYnVzIGltcGVkaXQgc29sdXRhIHZvbHVwdGF0ZXNcbiAgICAgICAgICAgICAgICAgICAgcmVwcmVoZW5kZXJpdCBzaW50IG1vbGVzdGlhcy4gUXVhc2khXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmRIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD1cImNoZWNrZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGVzdCBjYXJkIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkFyY2hpdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHA+RHVlOiBBdWd1c3QgMjAsIDIwMjI8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFRlc3QgY2FyZCBkZXNjcmlwdGlvbiBnb2VzIGhlcmUuIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldFxuICAgICAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcmUgc3VzY2lwaXQgbGF1ZGFudGl1bVxuICAgICAgICAgICAgICAgICAgICBudWxsYSB2ZXJvIGRvbG9yZXMgbWFnbmFtIHNhZXBlLCBuZXF1ZSBwZXJmZXJlbmRpcyBmdWdpdFxuICAgICAgICAgICAgICAgICAgICBkb2xvcmlidXMgcXVvZCB2ZWwgbmVjZXNzaXRhdGlidXMgaW1wZWRpdCBzb2x1dGEgdm9sdXB0YXRlc1xuICAgICAgICAgICAgICAgICAgICByZXByZWhlbmRlcml0IHNpbnQgbW9sZXN0aWFzLiBRdWFzaSFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPVwiY2hlY2tlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBUZXN0IGNhcmQgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+QXJjaGl2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cD5EdWU6IEF1Z3VzdCAyMCwgMjAyMjwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVGVzdCBjYXJkIGRlc2NyaXB0aW9uIGdvZXMgaGVyZS4gTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0XG4gICAgICAgICAgICAgICAgICAgIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9yZSBzdXNjaXBpdCBsYXVkYW50aXVtXG4gICAgICAgICAgICAgICAgICAgIG51bGxhIHZlcm8gZG9sb3JlcyBtYWduYW0gc2FlcGUsIG5lcXVlIHBlcmZlcmVuZGlzIGZ1Z2l0XG4gICAgICAgICAgICAgICAgICAgIGRvbG9yaWJ1cyBxdW9kIHZlbCBuZWNlc3NpdGF0aWJ1cyBpbXBlZGl0IHNvbHV0YSB2b2x1cHRhdGVzXG4gICAgICAgICAgICAgICAgICAgIHJlcHJlaGVuZGVyaXQgc2ludCBtb2xlc3RpYXMuIFF1YXNpIVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9XCJjaGVja2VkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRlc3QgY2FyZCBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5BcmNoaXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwPkR1ZTogQXVndXN0IDIwLCAyMDIyPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBUZXN0IGNhcmQgZGVzY3JpcHRpb24gZ29lcyBoZXJlLiBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXRcbiAgICAgICAgICAgICAgICAgICAgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3JlIHN1c2NpcGl0IGxhdWRhbnRpdW1cbiAgICAgICAgICAgICAgICAgICAgbnVsbGEgdmVybyBkb2xvcmVzIG1hZ25hbSBzYWVwZSwgbmVxdWUgcGVyZmVyZW5kaXMgZnVnaXRcbiAgICAgICAgICAgICAgICAgICAgZG9sb3JpYnVzIHF1b2QgdmVsIG5lY2Vzc2l0YXRpYnVzIGltcGVkaXQgc29sdXRhIHZvbHVwdGF0ZXNcbiAgICAgICAgICAgICAgICAgICAgcmVwcmVoZW5kZXJpdCBzaW50IG1vbGVzdGlhcy4gUXVhc2khXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICBNYWRlIGJ5XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tlbmtuZWVsZWVcIj5LZW5ueSBMZWU8L2E+XG4gICAgICAgICAgICBmb3JcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCI+VGhlIE9kaW4gUHJvamVjdC48L2E+XG4gICAgICAgIDwvcD5cbiAgICA8L2Zvb3Rlcj5cbjwvYm9keT4gKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==