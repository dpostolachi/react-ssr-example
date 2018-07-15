(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../components/page/home.js":
/*!**********************************!*\
  !*** ../components/page/home.js ***!
  \**********************************/
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

var _nodeFetch = __webpack_require__(/*! node-fetch */ "../node_modules/node-fetch/browser.js");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_PureComponent) {
    _inherits(_default, _PureComponent);

    function _default(props) {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

        _this.state = {
            posts: []
        };

        return _this;
    }

    _createClass(_default, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            return (0, _nodeFetch2.default)('https://jsonplaceholder.typicode.com/posts').then(function (resp) {
                return resp.json();
            }).then(function (posts) {
                return _this2.setState({ posts: posts });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            console.log(this.state);

            var posts = this.state.posts;


            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Posts'
                ),
                posts.map(function (post, key) {
                    var id = post.id,
                        title = post.title,
                        body = post.body;


                    return _react2.default.createElement(
                        'div',
                        { className: 'jumbotron', key: key },
                        _react2.default.createElement(
                            'h1',
                            { className: 'display-6' },
                            title
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'lead' },
                            body.substring(0, 20) + '...'
                        ),
                        _react2.default.createElement('hr', { className: 'my-4' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'lead' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { className: 'btn btn-primary btn-md', to: '/post/' + id },
                                'Read more'
                            )
                        )
                    );
                })
            );
        }
    }]);

    return _default;
}(_react.PureComponent);

exports.default = _default;

/***/ }),

/***/ "../node_modules/node-fetch/browser.js":
/*!*********************************************!*\
  !*** ../node_modules/node-fetch/browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = exports = window.fetch;

// Needed for TypeScript and Webpack.
exports.default = window.fetch.bind(window);

exports.Headers = window.Headers;
exports.Request = window.Request;
exports.Response = window.Response;


/***/ })

}]);
//# sourceMappingURL=0.js.map