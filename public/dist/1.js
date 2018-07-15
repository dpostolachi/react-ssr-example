(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../components/page/post.js":
/*!**********************************!*\
  !*** ../components/page/post.js ***!
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
            title: null,
            body: null,
            comments: []
        };

        var postId = props.match.params.postId;
        return _this;
    }

    _createClass(_default, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var postId = this.props.match.params.postId;


            (0, _nodeFetch2.default)('https://jsonplaceholder.typicode.com/posts/' + postId).then(function (resp) {
                return resp.json();
            }).then(function (post) {
                var title = post.title,
                    body = post.body;


                _this2.setState({
                    title: title,
                    body: body
                });
            });

            (0, _nodeFetch2.default)('https://jsonplaceholder.typicode.com/comments?postId=' + postId).then(function (resp) {
                return resp.json();
            }).then(function (comments) {

                _this2.setState({
                    comments: comments.map(function (comment) {
                        var name = comment.name,
                            body = comment.body;


                        return {
                            name: name,
                            body: body
                        };
                    })

                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                title = _state.title,
                body = _state.body,
                comments = _state.comments;


            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'h1',
                    null,
                    title
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                    'p',
                    null,
                    body
                ),
                _react2.default.createElement(
                    'h4',
                    null,
                    'Comments:'
                ),
                comments.map(function (comment, key) {
                    var name = comment.name,
                        body = comment.body;


                    return _react2.default.createElement(
                        'div',
                        { className: 'jumbotron', key: key },
                        _react2.default.createElement(
                            'h1',
                            { className: 'display-10' },
                            name
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'lead' },
                            body
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
//# sourceMappingURL=1.js.map