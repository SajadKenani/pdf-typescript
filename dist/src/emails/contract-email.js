"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDepositEmailHtml = exports.DepositEmail = void 0;
var _components = require("@react-email/components");
var _render = require("@react-email/render");
var _jsxRuntime = require("react/jsx-runtime");
const DepositEmail = ({
  userName
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Head, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tailwind, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Body, {
        className: "bg-gray-50 mx-auto my-auto font-sans",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.Container, {
          className: "bg-white mx-auto my-[40px] max-w-[600px] rounded-lg border border-solid border-[#e1e5e9] p-[32px] shadow-sm",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.Section, {
            className: "text-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Img, {
              src: `https://newyolk.io/android-chrome-512x512.png`,
              width: "80",
              height: "80",
              alt: "New Yolk Logo",
              className: "my-0 mx-auto rounded-lg"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Heading, {
              className: "mx-0 p-0 font-bold my-[24px] text-center text-[28px] text-[#1a1a1a]",
              children: "Deposit Contract"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.Section, {
            className: "mb-[24px]",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.Text, {
              className: "mb-[16px] text-[16px] leading-[26px] text-[#333333]",
              children: ["Dear ", userName, ","]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Text, {
              className: "mb-[16px] text-[16px] leading-[26px] text-[#333333]",
              children: "Thank you for choosing New Yolk for your investment needs. We are pleased to confirm that your deposit has been successfully processed and your contract has been generated."
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Text, {
              className: "font-medium mb-[16px] text-[16px] leading-[26px] text-[#333333]",
              children: "Your deposit contract is now ready and attached to this email as a PDF document."
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.Section, {
            className: "text-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Text, {
              className: "mb-[8px] text-[12px] leading-[20px] text-[#888888]",
              children: "This email was sent regarding your deposit contract"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Text, {
              className: "mb-[8px] text-[12px] leading-[20px] text-[#888888]",
              children: "New Yolk Investment Solutions | Baghdad, Iraq"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Text, {
              className: "text-[12px] leading-[20px] text-[#888888]",
              children: "\xA9 2025 New Yolk. All rights reserved."
            })]
          })]
        })
      })
    })]
  });
};
exports.DepositEmail = DepositEmail;
const getDepositEmailHtml = async ({
  userName
}) => {
  return await (0, _render.render)(DepositEmail({
    userName: userName
  }));
};
exports.getDepositEmailHtml = getDepositEmailHtml;