"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const PDFForm_jsx_1 = require("./PDFForm.jsx");
function App() {
    return (<div className="wrap">
      <PDFForm_jsx_1.PDFForm />
    </div>);
}
exports.default = App;
