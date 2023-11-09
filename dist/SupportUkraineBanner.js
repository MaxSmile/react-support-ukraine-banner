"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//import './SupportUkraineBanner.css';

var SupportUkraineBanner = function SupportUkraineBanner() {
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: "support-ukraine",
    href: "https://u24.gov.ua",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Donate to support freedom."
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "support-ukraine__flag",
    role: "img",
    "aria-label": "Flag of Ukraine"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "support-ukraine__flag__blue"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "support-ukraine__flag__yellow"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "support-ukraine__label"
  }, "Donate to support freedom."));
};
var _default = exports["default"] = SupportUkraineBanner;