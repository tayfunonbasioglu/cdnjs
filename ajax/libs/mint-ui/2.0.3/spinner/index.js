module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 235);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 106:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* styles */
__webpack_require__(10)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(12)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },

/***/ 117:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 12:
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    class: ['mint-spinner-fading-circle circle-color-' + _uid],
    style: ({
      width: spinnerSize,
      height: spinnerSize
    })
  }, [_l((12), function(n) {
    return _h('div', {
      staticClass: "mint-spinner-fading-circle-circle",
      class: ['is-circle' + (n + 1)]
    })
  })])
}},staticRenderFns: []}

/***/ },

/***/ 125:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(166)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* styles */
__webpack_require__(117)

/* script */
__vue_exports__ = __webpack_require__(73)

/* template */
var __vue_template__ = __webpack_require__(188)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* styles */
__webpack_require__(106)

/* script */
__vue_exports__ = __webpack_require__(74)

/* template */
var __vue_template__ = __webpack_require__(177)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* styles */
__webpack_require__(125)

/* script */
__vue_exports__ = __webpack_require__(75)

/* template */
var __vue_template__ = __webpack_require__(195)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },

/***/ 166:
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('span', [_h(spinner, {
    tag: "component"
  })])
}},staticRenderFns: []}

/***/ },

/***/ 177:
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    staticClass: "mint-spinner-snake",
    style: ({
      'border-top-color': spinnerColor,
      'border-left-color': spinnerColor,
      'border-bottom-color': spinnerColor,
      'height': spinnerSize,
      'width': spinnerSize
    })
  })
}},staticRenderFns: []}

/***/ },

/***/ 188:
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    staticClass: "mint-spinner-double-bounce",
    style: ({
      width: spinnerSize,
      height: spinnerSize
    })
  }, [_h('div', {
    staticClass: "mint-spinner-double-bounce-bounce1",
    style: ({
      backgroundColor: spinnerColor
    })
  }), " ", _h('div', {
    staticClass: "mint-spinner-double-bounce-bounce2",
    style: ({
      backgroundColor: spinnerColor
    })
  })])
}},staticRenderFns: []}

/***/ },

/***/ 195:
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    staticClass: "mint-spinner-triple-bounce"
  }, [_h('div', {
    staticClass: "mint-spinner-triple-bounce-bounce1",
    style: (bounceStyle)
  }), " ", _h('div', {
    staticClass: "mint-spinner-triple-bounce-bounce2",
    style: (bounceStyle)
  }), " ", _h('div', {
    staticClass: "mint-spinner-triple-bounce-bounce3",
    style: (bounceStyle)
  })])
}},staticRenderFns: []}

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(6)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}


module.exports = __vue_exports__


/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_spinner__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_spinner__);


__WEBPACK_IMPORTED_MODULE_0__src_spinner___default.a.install = function(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_spinner___default.a.name, __WEBPACK_IMPORTED_MODULE_0__src_spinner___default.a);
};

module.exports = __WEBPACK_IMPORTED_MODULE_0__src_spinner___default.a;


/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

"use strict";

/* harmony default export */ exports["default"] = {
  computed: {
    spinnerColor: function spinnerColor() {
      return this.color || this.$parent.color || '#ccc';
    },

    spinnerSize: function spinnerSize() {
      return (this.size || this.$parent.size || 28) + 'px';
    }
  },

  props: {
    size: Number,
    color: String
  }
};


/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vue__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  name: 'fading-circle',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__common_vue___default.a],

  created: function created() {
    this.styleNode = document.createElement('style');
    var css = ".circle-color-" + (this._uid) + " > div::before { background-color: " + (this.spinnerColor) + "; }";

    this.styleNode.type = 'text/css';
    this.styleNode.rel = 'stylesheet';
    this.styleNode.title = 'fading circle style';
    document.getElementsByTagName('head')[0].appendChild(this.styleNode);
    this.styleNode.appendChild(document.createTextNode(css));
  },

  destroyed: function destroyed() {
    if (this.styleNode) {
      this.styleNode.parentNode.removeChild(this.styleNode);
    }
  }
};


/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//

var SPINNERS = [
  'snake',
  'double-bounce',
  'triple-bounce',
  'fading-circle'
];
var parseSpinner = function(index) {
  if ({}.toString.call(index) === '[object Number]') {
    if (SPINNERS.length <= index) {
      console.warn(("'" + index + "' spinner not found, use the default spinner."));
      index = 0;
    }
    return SPINNERS[index];
  }

  if (SPINNERS.indexOf(index) === -1) {
    console.warn(("'" + index + "' spinner not found, use the default spinner."));
    index = SPINNERS[0];
  }
  return index;
};

/**
 * mt-spinner
 * @module components/spinner
 * @desc 加载动画
 * @param {(string|number)} [type=snake] - 显示类型，传入类型名或者类型 id，可选 `snake`, `dobule-bounce`, `triple-bounce`, `fading-circle`
 * @param {number} size - 尺寸
 * @param {string} color - 颜色
 *
 * @example
 * <mt-spinner type="snake"></mt-spinner>
 *
 * <!-- double-bounce -->
 * <mt-spinner :type="1"></mt-spinner>
 *
 * <!-- default snake -->
 * <mt-spinner :size="30" color="#999"></mt-spinner>
 */
/* harmony default export */ exports["default"] = {
  name: 'mt-spinner',

  computed: {
    spinner: function spinner() {
      return ("spinner-" + (parseSpinner(this.type)));
    }
  },

  components: {
    SpinnerSnake: __webpack_require__(152),
    SpinnerDoubleBounce: __webpack_require__(151),
    SpinnerTripleBounce: __webpack_require__(153),
    SpinnerFadingCircle: __webpack_require__(11)
  },

  props: {
    type: {
      default: 0
    },
    size: {
      type: Number,
      default: 28
    },
    color: {
      type: String,
      default: '#ccc'
    }
  }
};


/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vue__);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  name: 'double-bounce',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__common_vue___default.a]
};


/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vue__);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  name: 'snake',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__common_vue___default.a]
};


/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vue__);
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  name: 'triple-bounce',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__common_vue___default.a],

  computed: {
    spinnerSize: function spinnerSize() {
      return ((this.size || this.$parent.size || 28) / 3) + 'px';
    },

    bounceStyle: function bounceStyle() {
      return {
        width: this.spinnerSize,
        height: this.spinnerSize,
        backgroundColor: this.spinnerColor
      };
    }
  }
};


/***/ }

/******/ });