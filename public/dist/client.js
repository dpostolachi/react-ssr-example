/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"client": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/controls/header.js":
/*!****************************************!*\
  !*** ../components/controls/header.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
            'nav',
            { className: 'nav justify-content-center' },
            _react2.default.createElement(
                'li',
                { className: 'nav-item' },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/', className: 'nav-link' },
                    'Home'
                )
            )
        )
    );
};

/***/ }),

/***/ "../components/layout/index.js":
/*!*************************************!*\
  !*** ../components/layout/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(/*! ../controls/header */ "../components/controls/header.js");

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_PureComponent) {
    _inherits(Layout, _PureComponent);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            var loadableState = this.props.loadableState;


            return _react2.default.createElement(
                'html',
                { lang: 'en' },
                _react2.default.createElement(
                    'head',
                    null,
                    _react2.default.createElement('meta', { charSet: 'UTF-8' }),
                    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
                    _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'ie=edge' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'Hello'
                    ),
                    _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm', crossOrigin: 'anonymous' })
                ),
                _react2.default.createElement(
                    'body',
                    null,
                    _react2.default.createElement(_header2.default, null),
                    {...this.props.children},
                    loadableState === null ? null : loadableState.getScriptElement ? loadableState.getScriptElement() : _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: 'window.__LOADABLE_STATE__ = ' + JSON.stringify(loadableState, { isJSON: true }) + ';' } }),
                    _react2.default.createElement('script', { src: '/public/dist/vendor.js', defer: true }),
                    _react2.default.createElement('script', { src: '/public/dist/client.js', defer: true })
                )
            );
        }
    }]);

    return Layout;
}(_react.PureComponent);

exports.default = Layout;

/***/ }),

/***/ "../node_modules/loadable-components/dist/loadable-components.es.js":
/*!**************************************************************************!*\
  !*** ../node_modules/loadable-components/dist/loadable-components.es.js ***!
  \**************************************************************************/
/*! exports provided: default, componentTracker, loadComponents, getState, LOADABLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentTracker", function() { return componentTracker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponents", function() { return loadComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADABLE", function() { return LOADABLE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);



var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var components = {};

var track = function track(component, modules) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var id = modules.join('-');
  if (index) id += '-' + index;
  if (components[id]) {
    return track(component, modules, index + 1);
  }
  components[id] = component;
  return id;
};

var get$1 = function get$$1(id) {
  return components[id];
};
var getAll = function getAll() {
  return _extends({}, components);
};
var reset = function reset() {
  components = {};
};

var tracker = /*#__PURE__*/Object.freeze({
  track: track,
  get: get$1,
  getAll: getAll,
  reset: reset
});

var LOADABLE_STATE = '__LOADABLE_STATE__';
var LOADABLE = '@@loadable-components/loadable';

/* eslint-env browser */

function loadState(rootState) {
  if (!rootState.children) return Promise.resolve(null);

  return Promise.all(rootState.children.map(function (state) {
    var component = get$1(state.id);

    if (!component) {
      console.warn( // eslint-disable-line
      'loadable-component client modules:', getAll());
      console.warn( // eslint-disable-line
      'loadable-component server modules:', window[LOADABLE_STATE]);

      return Promise.reject(new Error('loadable-components: module "' + state.id + '" is not found, client and server modules are not sync. You are probably not using the same resolver on server and client.'));
    }

    var getLoadable = component[LOADABLE];

    if (typeof getLoadable !== 'function') {
      return Promise.reject(new Error('loadable-components: module "' + state.id + '" is not a loadable component, please verify your SSR setup'));
    }

    return getLoadable().load().then(function () {
      return loadState(state);
    });
  }));
}

function loadComponents() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('loadable-components: `loadComponents` must ' + 'be called client-side: `window` is undefined'));
  }

  var state = window[LOADABLE_STATE];
  if (!state) {
    return Promise.reject(new Error('loadable-components state not found. ' + 'You have a problem server-side. ' + 'Please verify that you have called `loadableState.getScriptTag()` server-side.'));
  }

  return loadState(state);
}

/* eslint-env browser */

function getState() {
  var _ref;

  var componentByIds = getAll();
  var children = Object.keys(componentByIds).reduce(function (ids, id) {
    var component = componentByIds[id];
    if (component.loadingPromise) return [].concat(ids, [{ id: component.componentId }]);
    return ids;
  }, []);
  return _ref = {}, _ref[LOADABLE_STATE] = { children: children }, _ref;
}

/* eslint-disable no-underscore-dangle */
var resolveModuleDefault = function resolveModuleDefault(module) {
  return module.__esModule ? module.default : module;
};

/* eslint-disable react/sort-comp */

var EmptyComponent = function EmptyComponent() {
  return null;
};

function loadable(getComponent) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ErrorComponent = _ref.ErrorComponent,
      ErrorComponent = _ref$ErrorComponent === undefined ? EmptyComponent : _ref$ErrorComponent,
      _ref$LoadingComponent = _ref.LoadingComponent,
      LoadingComponent = _ref$LoadingComponent === undefined ? EmptyComponent : _ref$LoadingComponent,
      _render = _ref.render,
      modules = _ref.modules,
      asyncMode = _ref.asyncMode;

  var LoadableComponent = function (_React$Component) {
    inherits(LoadableComponent, _React$Component);

    LoadableComponent.load = function load() {
      if (!LoadableComponent.loadingPromise) {
        LoadableComponent.loadingPromise = getComponent().then(function (module) {
          var _hoistNonReactStatics;

          var Component = resolveModuleDefault(module);
          LoadableComponent.Component = Component;
          hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(LoadableComponent, Component, (_hoistNonReactStatics = {
            Component: true,
            loadingPromise: true,
            load: true
          }, _hoistNonReactStatics[LOADABLE] = true, _hoistNonReactStatics.componentId = true, _hoistNonReactStatics));
          return Component;
        }).catch(function (error) {
          LoadableComponent.loadingPromise = null;
          throw error;
        });
      }

      return LoadableComponent.loadingPromise;
    };

    function LoadableComponent(props) {
      classCallCheck(this, LoadableComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.state = {
        Component: LoadableComponent.Component,
        error: null,
        loading: !LoadableComponent.Component
      };
      _this.mounted = false;
      _this.loadingPromise = null;

      if (typeof window !== 'undefined' && _this.state.Component === null && _this.loadingPromise === null) {
        _this.loadingPromise = LoadableComponent.load().then(function (Component) {
          _this.safeSetState({ Component: Component, loading: false });
        }).catch(function (error) {
          _this.safeSetState({ error: error, loading: false });
        });
      }
      return _this;
    }

    LoadableComponent.prototype.componentDidMount = function componentDidMount() {
      this.mounted = true;
    };

    LoadableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    LoadableComponent.prototype.safeSetState = function safeSetState(state) {
      if (!this.mounted) return;
      this.setState(state);
    };

    LoadableComponent.prototype.render = function render() {
      var _state = this.state,
          Component = _state.Component,
          error = _state.error;


      if (typeof _render === 'function') {
        return _render(_extends({}, this.state, {
          ownProps: this.props
        }));
      }

      if (Component !== null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, this.props);
      }

      if (error !== null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorComponent, { error: error, ownProps: this.props });
      }

      if (asyncMode) {
        throw this.loadingPromise;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingComponent, this.props);
    };

    return LoadableComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  LoadableComponent.Component = null;
  LoadableComponent.loadingPromise = null;


  LoadableComponent[LOADABLE] = function () {
    return LoadableComponent;
  };

  if (modules) {
    var id = track(LoadableComponent, modules);
    LoadableComponent.componentId = id;
  }

  return LoadableComponent;
}

var componentTracker = tracker;

/* harmony default export */ __webpack_exports__["default"] = (loadable);

//# sourceMappingURL=loadable-components.es.js.map


/***/ }),

/***/ "../router/appRouter.js":
/*!******************************!*\
  !*** ../router/appRouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(/*! ../routes */ "../routes/index.js");

var _routes2 = _interopRequireDefault(_routes);

var _layout = __webpack_require__(/*! ../components/layout */ "../components/layout/index.js");

var _layout2 = _interopRequireDefault(_layout);

var _reactRouter = __webpack_require__(/*! react-router */ "../node_modules/react-router/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

    return _react2.default.createElement(
        _layout2.default,
        props,
        _react2.default.createElement(
            _reactRouter.Switch,
            null,
            _routes2.default.map(function (route, key) {
                var component = route.component,
                    path = route.path;

                var exact = route.exact || false;
                var strict = route.strict || false;

                return _react2.default.createElement(_reactRouter.Route, { component: component, path: path, exact: exact, strict: strict, key: key });
            })
        )
    );
};

/***/ }),

/***/ "../routes/index.js":
/*!**************************!*\
  !*** ../routes/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _loadableComponents = __webpack_require__(/*! loadable-components */ "../node_modules/loadable-components/dist/loadable-components.es.js");

var _loadableComponents2 = _interopRequireDefault(_loadableComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = {
    path: '/',
    exact: true,
    component: (0, _loadableComponents2.default)(function () {
        return new Promise(function (resolve) {
            __webpack_require__.e(/*! require.ensure */ 0).then((function (require) {
                resolve(__webpack_require__(/*! ../components/page/home.js */ "../components/page/home.js"));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        });
    }, {
        modules: ['../components/page/home.js']
    })
};

var Another = {
    path: '/post/:postId',
    exact: true,
    component: (0, _loadableComponents2.default)(function () {
        return new Promise(function (resolve) {
            __webpack_require__.e(/*! require.ensure */ 1).then((function (require) {
                resolve(__webpack_require__(/*! ../components/page/post.js */ "../components/page/post.js"));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        });
    }, {
        modules: ['../components/page/post.js']
    })
};

var Page404 = {
    path: '/',
    exact: false,
    component: (0, _loadableComponents2.default)(function () {
        return new Promise(function (resolve) {
            __webpack_require__.e(/*! require.ensure */ 2).then((function (require) {
                resolve(__webpack_require__(/*! ../components/page/404.js */ "../components/page/404.js"));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        });
    }, {
        modules: ['../components/page/404.js']
    })
};

exports.default = [Home, Another, Page404];

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loadableComponents = __webpack_require__(/*! loadable-components */ "../node_modules/loadable-components/dist/loadable-components.es.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");

var _appRouter = __webpack_require__(/*! ../router/appRouter.js */ "../router/appRouter.js");

var _appRouter2 = _interopRequireDefault(_appRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadableState = window.__LOADABLE_STATE__;

(0, _loadableComponents.loadComponents)().then(function () {
    (0, _reactDom.hydrate)(_react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(_appRouter2.default, { loadableState: loadableState })
    ), document);
});

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dumitras/.Projects/node/ujoin/client/index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=client.js.map