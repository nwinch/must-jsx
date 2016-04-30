"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Must) {
  Must.prototype.jsx = function (expected) {
    var actual = (0, _reactElementToJsxString2.default)(this.actual);
    var transformed = (0, _reactElementToJsxString2.default)(expected);
    var opts = { actual: actual, expected: transformed };

    this.assert(actual === transformed, "equal JSX", opts);
    return this;
  };
};

var _reactElementToJsxString = require("react-element-to-jsx-string");

var _reactElementToJsxString2 = _interopRequireDefault(_reactElementToJsxString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }