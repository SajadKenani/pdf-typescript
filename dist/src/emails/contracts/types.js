"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDF_OPTIONS = void 0;
const PDF_OPTIONS = exports.PDF_OPTIONS = {
  format: "A4",
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: "<div></div>",
  footerTemplate: "<div></div>",
  margin: {
    top: "0mm",
    right: "0mm",
    bottom: "0mm",
    left: "0mm"
  },
  timeout: 25000,
  preferCSSPageSize: true
};