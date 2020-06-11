"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _a = require("./a.js");

Object.keys(_a).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _a[key];
    }
  });
});

var _b = require("./b.js");

Object.keys(_b).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _b[key];
    }
  });
});