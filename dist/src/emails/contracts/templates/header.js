"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderContractEmail = void 0;
var _components = require("@react-email/components");
var _images = require("../images.js");
var _jsxRuntime = require("react/jsx-runtime");
const HeaderContractEmail = ({
  commonProps,
  title
}) => {
  const teal = "#1a3a4a";
  const gold = "#c8913a";
  const goldLight = "#e8b84b";
  const parchment = "#f4f0e8";
  const cream = "#fdfcf9";
  const date = commonProps.createdAt.toLocaleDateString("ar-IQ", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.Html, {
    dir: "rtl",
    lang: "ar",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.Head, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("link", {
        href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("script", {
        src: "https://cdn.tailwindcss.com"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
        charSet: "UTF-8"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
        children: "AL-TAER AL ASFAR - \u0639\u0642\u062F"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.Preview, {
      children: ["AL-TAER AL ASFAR \u2014 ", title]
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            height: "8px",
            width: "100%",
            background: `linear-gradient(90deg, ${teal} 0%, ${gold} 40%, ${goldLight} 60%, ${teal} 100%)`
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            backgroundColor: teal,
            padding: "28px 32px 0",
            position: "relative",
            overflow: "hidden"
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              backgroundImage: `
                repeating-linear-gradient(45deg, rgba(200,145,58,.07) 0, rgba(200,145,58,.07) 1px, transparent 1px, transparent 20px),
                repeating-linear-gradient(-45deg, rgba(200,145,58,.07) 0, rgba(200,145,58,.07) 1px, transparent 1px, transparent 20px)
              `
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
            style: {
              borderCollapse: "collapse",
              width: "100%",
              position: "relative",
              zIndex: 10
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                  style: {
                    width: "96px",
                    paddingLeft: "20px",
                    verticalAlign: "middle"
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    style: {
                      width: "88px",
                      height: "88px",
                      borderRadius: "50%",
                      padding: "4px",
                      border: "2px solid rgba(200,145,58,0.55)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Img, {
                      src: `data:image/png;base64,${_images.mainLogo}`,
                      width: "56",
                      height: "56",
                      alt: "Logo",
                      style: {
                        display: "block"
                      }
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                  style: {
                    textAlign: "right",
                    verticalAlign: "middle",
                    paddingRight: "4px"
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    style: {
                      fontSize: "1.75rem",
                      color: "#ffffff",
                      lineHeight: 1.2,
                      marginBottom: "4px"
                    },
                    children: "\u0634\u0631\u0643\u0629 \u0627\u0644\u0637\u0627\u0626\u0631 \u0627\u0644\u0623\u0635\u0641\u0631"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    style: {
                      fontSize: "0.8rem",
                      color: gold,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      marginBottom: "6px"
                    },
                    children: "AL-TAER AL ASFAR"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    style: {
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.5)"
                    },
                    children: "\u0627\u0644\u0639\u0631\u0627\u0642 \u2014 \u0628\u063A\u062F\u0627\u062F \u2014 \u0634\u0627\u0631\u0639 \u0627\u0644\u0631\u0628\u064A\u0639\u064A \u2014 \u0639\u0645\u0627\u0631\u0629 \u0633\u0646\u062A\u0631 \u0627\u0644\u0631\u0628\u064A\u0639\u064A"
                  })]
                })]
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              marginTop: "20px",
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${gold}, ${goldLight}, ${gold}, transparent)`,
              position: "relative",
              zIndex: 10
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            style: {
              padding: "16px 0",
              textAlign: "center",
              position: "relative",
              zIndex: 10
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              style: {
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "8px"
              },
              children: "\u0648\u062B\u064A\u0642\u0629 \u0631\u0633\u0645\u064A\u0629"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              style: {
                display: "inline-block",
                padding: "6px 28px",
                borderRadius: "9999px",
                background: `linear-gradient(135deg, ${gold}, ${goldLight})`,
                color: teal,
                fontSize: "1.05rem"
              },
              children: title
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            backgroundColor: "#ffffff",
            padding: "20px 32px",
            borderBottom: "1px solid #e2d9c8"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
            style: {
              borderCollapse: "collapse",
              width: "100%"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                  style: {
                    width: "50%",
                    verticalAlign: "top",
                    paddingLeft: "24px"
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    style: {
                      fontSize: "0.75rem",
                      color: gold,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid #f0e8d5",
                      paddingBottom: "6px",
                      marginBottom: "10px"
                    },
                    children: "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0639\u0642\u062F"
                  }), [{
                    label: "رقم العقد",
                    value: `#${commonProps.depositNumId}`
                  }, {
                    label: "تاريخ الإصدار",
                    value: date
                  }, {
                    label: "عملية الدفع",
                    value: commonProps.paymentMethod
                  }, {
                    label: "مؤمن عليه",
                    value: commonProps.insurance ? "نعم" : "لا"
                  }].map(({
                    label,
                    value
                  }) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "6px"
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      style: {
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: gold,
                        flexShrink: 0
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      style: {
                        fontSize: "0.8rem",
                        minWidth: "110px",
                        color: "#6b5c45"
                      },
                      children: label
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      style: {
                        fontSize: "0.8rem",
                        color: teal
                      },
                      children: value
                    })]
                  }, label))]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                  style: {
                    width: "50%",
                    verticalAlign: "top",
                    paddingRight: "24px",
                    borderRight: "1px solid #ede7d8"
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    style: {
                      fontSize: "0.75rem",
                      color: gold,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid #f0e8d5",
                      paddingBottom: "6px",
                      marginBottom: "10px"
                    },
                    children: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A"
                  }), [commonProps.userName ? {
                    label: "الاسم",
                    value: commonProps.userName,
                    bold: true
                  } : null, commonProps.userPhone ? {
                    label: "الهاتف",
                    value: commonProps.userPhone
                  } : null, commonProps.userEmail ? {
                    label: "البريد",
                    value: commonProps.userEmail
                  } : null].filter(Boolean).map(row => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "6px"
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      style: {
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: gold,
                        flexShrink: 0
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      style: {
                        fontSize: "0.8rem",
                        minWidth: "80px",
                        color: "#6b5c45"
                      },
                      children: row.label
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      style: {
                        fontSize: "0.8rem",
                        color: teal
                      },
                      children: row.value
                    })]
                  }, row.label))]
                })]
              })
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            padding: "24px 32px",
            backgroundColor: cream
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              fontSize: "0.75rem",
              color: gold,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "12px"
            },
            children: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0637\u0644\u0628"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
            style: {
              borderCollapse: "collapse",
              width: "100%"
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
                style: {
                  backgroundColor: teal
                },
                children: [{
                  label: "الوصف",
                  align: "right"
                }, {
                  label: "الكمية",
                  align: "center"
                }, {
                  label: "عملية الدفع",
                  align: "center"
                }, {
                  label: "المبلغ الكلي",
                  align: "left"
                }].map(({
                  label,
                  align
                }, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                  style: {
                    padding: "10px 12px",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textAlign: align,
                    borderRadius: i === 0 ? "0 6px 6px 0" : i === 3 ? "6px 0 0 6px" : undefined
                  },
                  children: label
                }, label))
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                style: {
                  borderBottom: "1px solid #ede7d8"
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                  style: {
                    padding: "14px 12px",
                    fontSize: "0.85rem",
                    textAlign: "right",
                    color: teal
                  },
                  children: commonProps.item
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                  style: {
                    padding: "14px 12px",
                    fontSize: "0.85rem",
                    textAlign: "center",
                    color: "#5c5248"
                  },
                  children: commonProps.itemAmount
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                  style: {
                    padding: "14px 12px",
                    fontSize: "0.85rem",
                    textAlign: "center",
                    color: "#5c5248"
                  },
                  children: commonProps.paymentMethod
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                  style: {
                    padding: "14px 12px",
                    fontSize: "0.85rem",
                    textAlign: "left",
                    color: teal
                  },
                  children: [commonProps.currencyAmount.toLocaleString(), " ", commonProps.currency]
                })]
              })
            })]
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
                color: `rgba(255,255,255,0.4)`,
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
exports.HeaderContractEmail = HeaderContractEmail;
var _default = exports.default = HeaderContractEmail;