"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SupportUkraineBanner = function SupportUkraineBanner() {
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://u24.gov.ua",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Donate to support freedom.",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      background: '#000',
      display: 'flex',
      justifyContent: 'center',
      padding: '0px 5px',
      zIndex: 10000,
      textDecoration: 'none',
      fontFamily: 'arial'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    role: "img",
    "aria-label": "Flag of Ukraine",
    style: {
      height: '25px',
      marginRight: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '40px',
      height: '12.5px',
      background: '#005BBB'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '40px',
      height: '12.5px',
      background: '#FFD500'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: 'white',
      fontSize: '12px',
      lineHeight: '25px'
    }
  }, "Donate to support freedom."));
};
var _default = exports["default"] = SupportUkraineBanner;