"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ContentContractEmail = void 0;
var _components = require("@react-email/components");
var _jsxRuntime = require("react/jsx-runtime");
const ContentContractEmail = content => {
  const teal = "#1a3a4a";
  const gold = "#c8913a";
  const goldLight = "#e8b84b";
  const parchment = "#f4f0e8";
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.Html, {
    dir: "rtl",
    lang: "ar",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.Head, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("link", {
        href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
        charSet: "UTF-8"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
        children: "AL-TAER AL ASFAR - \u0623\u062D\u0643\u0627\u0645 \u0627\u0644\u0639\u0642\u062F"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
        children: `
          #contract-content p {
            margin: 0; padding: 0;
            line-height: 1.6; font-size: 0.875rem; color: #4b5563;
          }
          #contract-content > div {
            border-bottom: 1px solid #e5e7eb;
            padding-top: 0.5rem; padding-bottom: 0.5rem;
          }
          #contract-content > div > p:first-child {
            font-weight: 700; color: #374151; margin-bottom: 4px;
          }
          #contract-content strong { color: #c8913a; font-weight: 700; }
        `
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Preview, {
      children: "AL-TAER AL ASFAR \u2014 \u0623\u062D\u0643\u0627\u0645 \u0627\u0644\u0639\u0642\u062F"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("body", {
      style: {
        fontFamily: "'Tajawal', 'Segoe UI', sans-serif",
        margin: 0,
        padding: 0,
        backgroundColor: parchment
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          width: "210mm",
          minHeight: "297mm",
          backgroundColor: parchment,
          margin: "0 auto",
          position: "relative",
          boxSizing: "border-box",
          paddingBottom: "56px"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            padding: "24px 32px"
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              fontSize: "0.75rem",
              color: gold,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "12px"
            },
            children: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0623\u062D\u0643\u0627\u0645 \u0648\u0627\u0644\u0634\u0631\u0648\u0637"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              height: "2px",
              background: `linear-gradient(90deg, ${gold}, ${goldLight}, transparent)`,
              marginBottom: "18px",
              borderRadius: "2px"
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              backgroundColor: "#ffffff",
              border: "1px solid #e2d9c8",
              borderRight: `3px solid ${gold}`,
              borderRadius: "8px",
              padding: "24px 28px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              id: "contract-content",
              dangerouslySetInnerHTML: {
                __html: content
              }
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${gold}, ${goldLight}, ${gold}, transparent)`
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            style: {
              backgroundColor: teal,
              padding: "10px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              style: {
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.05em"
              },
              children: "www.newyolkfarm.com \xA0|\xA0 07717688884"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              style: {
                fontSize: "0.7rem",
                color: gold,
                letterSpacing: "0.08em"
              },
              children: "AL-TAER AL ASFAR"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              style: {
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.05em"
              },
              children: "\u0627\u0644\u0639\u0631\u0627\u0642 \u2014 \u0628\u063A\u062F\u0627\u062F \u2014 \u0634\u0627\u0631\u0639 \u0627\u0644\u0631\u0628\u064A\u0639\u064A"
            })]
          })]
        })]
      })
    })]
  });
};
exports.ContentContractEmail = ContentContractEmail;
var _default = exports.default = ContentContractEmail;