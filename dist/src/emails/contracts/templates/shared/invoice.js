"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AlTaerInvoiceEmail = void 0;
var _components = require("@react-email/components");
var _images = require("../../images.js");
var _jsxRuntime = require("react/jsx-runtime");
const AlTaerInvoiceEmail = ({
  depositNumId,
  createdAt,
  item,
  itemAmount,
  currency,
  currencyAmount,
  userName,
  userPhone,
  userEmail
}) => {
  const issueDate = createdAt.toLocaleDateString("ar-IQ", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  const time = createdAt.toLocaleTimeString("ar-IQ", {
    hour: "2-digit",
    minute: "2-digit"
  });
  const unitPrice = currencyAmount / itemAmount;
  const subtotal = currencyAmount;
  // Shared inline styles for colours not in default Tailwind palette
  const teal = "#1a3a4a";
  const gold = "#c8913a";
  const goldLight = "#e8b84b";
  const parchment = "#f4f0e8";
  const cream = "#fdfcf9";
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
        children: "AL-TAER AL ASFAR - \u0641\u0627\u062A\u0648\u0631\u0629"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.Preview, {
      children: ["AL-TAER AL ASFAR \u2014 \u0641\u0627\u062A\u0648\u0631\u0629 \u0631\u0642\u0645 ", String(depositNumId)]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("body", {
      style: {
        fontFamily: "'Tajawal', 'Segoe UI', sans-serif",
        margin: 0,
        padding: 0,
        backgroundColor: "#0d1117"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "relative mx-auto overflow-hidden",
        style: {
          width: "210mm",
          minHeight: "297mm",
          backgroundColor: parchment
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "h-2 w-full",
          style: {
            background: `linear-gradient(90deg, ${teal} 0%, ${gold} 40%, ${goldLight} 60%, ${teal} 100%)`
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "px-8 pb-0 pt-7 relative overflow-hidden",
          style: {
            backgroundColor: teal
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "inset-0 pointer-events-none absolute",
            style: {
              backgroundImage: `
                                    repeating-linear-gradient(45deg, rgba(200,145,58,.07) 0, rgba(200,145,58,.07) 1px, transparent 1px, transparent 20px),
                                    repeating-linear-gradient(-45deg, rgba(200,145,58,.07) 0, rgba(200,145,58,.07) 1px, transparent 1px, transparent 20px)
                                `
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
            className: "relative z-10 w-full",
            style: {
              borderCollapse: "collapse"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                  className: "w-24 pl-5 align-middle",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "h-24 w-24 p-1 flex items-center justify-center rounded-full",
                    style: {
                      border: `2px solid rgba(200,145,58,0.55)`,
                      backgroundColor: "rgba(255,255,255,0.05)"
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Img, {
                      src: `data:image/png;base64,${_images.mainLogo}`,
                      width: "60",
                      height: "60",
                      alt: "Logo",
                      className: "block",
                      style: {
                        zIndex: 99999
                      }
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                  className: "pr-1 text-right align-middle",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "mb-0.5 text-3xl font-black leading-tight text-white",
                    children: "\u0634\u0631\u0643\u0629 \u0627\u0644\u0637\u0627\u0626\u0631 \u0627\u0644\u0623\u0635\u0641\u0631"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "mb-1.5 text-sm font-normal uppercase",
                    style: {
                      color: gold,
                      letterSpacing: "0.18em"
                    },
                    children: "AL-TAER AL ASFAR"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "text-xs font-light text-white/50",
                    children: "\u0627\u0644\u0639\u0631\u0627\u0642 \u2014 \u0628\u063A\u062F\u0627\u062F \u2014 \u0634\u0627\u0631\u0639 \u0627\u0644\u0631\u0628\u064A\u0639\u064A"
                  })]
                })]
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mt-5 relative z-10 h-px w-full",
            style: {
              background: `linear-gradient(90deg, transparent, ${gold}, ${goldLight}, ${gold}, transparent)`
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "py-4 relative z-10 text-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "text-sm font-normal text-white/50 uppercase",
              style: {
                letterSpacing: "0.3em"
              },
              children: "\u0641\u0627\u062A\u0648\u0631\u0629 \u0645\u0628\u064A\u0639\u0627\u062A"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "mt-2",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                className: "px-5 py-1 text-lg font-extrabold inline-block rounded-full",
                style: {
                  background: `linear-gradient(135deg, ${gold}, ${goldLight})`,
                  color: teal
                },
                children: ["# ", depositNumId]
              })
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "bg-white px-8 py-5",
          style: {
            borderBottom: "1px solid #e2d9c8"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
            className: "w-full",
            style: {
              borderCollapse: "collapse"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                  className: "pl-6 w-1/2 align-top",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "mb-2.5 pb-1.5 text-sm font-bold border-b uppercase",
                    style: {
                      color: gold,
                      borderColor: "#f0e8d5",
                      letterSpacing: "0.15em"
                    },
                    children: "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629"
                  }), [{
                    label: "رقم الفاتورة",
                    value: `#${depositNumId}`
                  }, {
                    label: "تاريخ الإصدار",
                    value: issueDate
                  }, {
                    label: "الوقت",
                    value: time
                  }].map(({
                    label,
                    value
                  }) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "mb-1.5 gap-2 flex items-center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "h-1 w-1 shrink-0 rounded-full",
                      style: {
                        backgroundColor: gold
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "text-sm font-semibold min-w-[100px]",
                      style: {
                        color: "#6b5c45"
                      },
                      children: label
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "text-sm font-normal",
                      style: {
                        color: teal
                      },
                      children: value
                    })]
                  }, label))]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                  className: "pr-6 w-1/2 align-top",
                  style: {
                    borderRight: "1px solid #ede7d8"
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "mb-2.5 pb-1.5 text-sm font-bold border-b uppercase",
                    style: {
                      color: gold,
                      borderColor: "#f0e8d5",
                      letterSpacing: "0.15em"
                    },
                    children: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644"
                  }), [userName ? {
                    label: "الاسم",
                    value: userName,
                    bold: true
                  } : null, userEmail ? {
                    label: "البريد",
                    value: userEmail
                  } : null, userPhone ? {
                    label: "الهاتف",
                    value: userPhone
                  } : null].filter(Boolean).map(row => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "mb-1.5 gap-2 flex items-center",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "h-1 w-1 shrink-0 rounded-full",
                      style: {
                        backgroundColor: gold
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "text-sm font-semibold min-w-[80px]",
                      style: {
                        color: "#6b5c45"
                      },
                      children: row.label
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: `text-sm ${row.bold ? "font-bold" : "font-normal"}`,
                      style: {
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
          className: "px-8 py-6",
          style: {
            backgroundColor: cream
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mb-3 text-sm font-bold uppercase",
            style: {
              color: gold,
              letterSpacing: "0.2em"
            },
            children: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0637\u0644\u0628"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
            className: "w-full",
            style: {
              borderCollapse: "collapse"
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                style: {
                  backgroundColor: teal
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                  className: "px-3 py-2.5 text-sm font-semibold text-white/70 text-right uppercase",
                  style: {
                    borderRadius: "0 6px 6px 0",
                    letterSpacing: "0.12em"
                  },
                  children: "\u0627\u0644\u0648\u0635\u0641"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                  className: "px-3 py-2.5 text-sm font-semibold text-white/70 text-center uppercase",
                  style: {
                    letterSpacing: "0.12em"
                  },
                  children: "\u0627\u0644\u0643\u0645\u064A\u0629"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                  className: "px-3 py-2.5 text-sm font-semibold text-white/70 text-center uppercase",
                  style: {
                    letterSpacing: "0.12em"
                  },
                  children: "\u0633\u0639\u0631 \u0627\u0644\u0648\u062D\u062F\u0629"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                  className: "px-3 py-2.5 text-sm font-semibold text-white/70 text-left uppercase",
                  style: {
                    borderRadius: "6px 0 0 6px",
                    letterSpacing: "0.12em"
                  },
                  children: "\u0627\u0644\u0645\u062C\u0645\u0648\u0639"
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                style: {
                  borderBottom: "1px solid #ede7d8"
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                  className: "px-3 py-3.5 text-sm font-bold text-right",
                  style: {
                    color: teal
                  },
                  children: item
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                  className: "px-3 py-3.5 text-sm font-normal text-center",
                  style: {
                    color: "#5c5248"
                  },
                  children: itemAmount
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                  className: "px-3 py-3.5 text-sm font-normal text-center",
                  style: {
                    color: "#5c5248"
                  },
                  children: [unitPrice.toLocaleString(), " ", currency]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                  className: "px-3 py-3.5 text-sm font-bold text-left",
                  style: {
                    color: teal
                  },
                  children: [subtotal.toLocaleString(), " ", currency]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "mx-8 my-6 p-3.5 rounded-md",
          style: {
            backgroundColor: "#fff9ee",
            border: "1px solid #e8d8b0",
            borderRight: `3px solid ${gold}`
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mb-1 text-sm font-bold",
            style: {
              color: gold
            },
            children: "\u26A0 \u0645\u0644\u0627\u062D\u0638\u0629 \u0647\u0627\u0645\u0629"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "text-sm font-normal leading-relaxed text-right",
            style: {
              color: "#000000"
            },
            children: ["\u0641\u064A \u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629 \u0628\u0623\u0633\u062A\u0631\u062C\u0627\u0639 \u0627\u0644\u0645\u0628\u0644\u063A \u0648\u0641\u0633\u062E \u0627\u0644\u0639\u0642\u062F \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062B\u0627\u0646\u064A \u0623\u0648 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u060C \u064A\u062A\u062D\u0645\u0644 \u0645\u0628\u0644\u063A \u0648\u0642\u062F\u0631\u0647 ", /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              style: {
                color: gold
              },
              children: "25%"
            }), " \u0645\u0646 \u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0645\u0628\u0631\u0645 \u0628\u064A\u0646 \u0627\u0644\u0637\u0631\u0641\u064A\u0646."]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "px-8 pb-6",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
            className: "w-full",
            style: {
              borderCollapse: "collapse"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                  className: "p-4 w-1/2 text-center align-top",
                  style: {
                    borderLeft: "1px dashed #ddd3be"
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "mb-1.5 text-sm font-bold uppercase",
                    style: {
                      color: gold,
                      letterSpacing: "0.15em"
                    },
                    children: "\u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u0623\u0648\u0644"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "mb-0.5 text-sm font-bold",
                    style: {
                      color: teal
                    },
                    children: "\u0634\u0631\u0643\u0629 \u0627\u0644\u0637\u0627\u0626\u0631 \u0627\u0644\u0623\u0635\u0641\u0631"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "mb-3 text-sm font-normal",
                    style: {
                      color: "#000000"
                    },
                    children: "\u0645\u0647\u0627\u0628 \u0639\u0644\u064A \u064A\u0627\u0633\u064A\u0646"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "mx-auto flex items-center justify-center rounded-md",
                    style: {
                      width: "182px",
                      height: "100px",
                      border: "1px solid #ddd3be",
                      backgroundColor: cream
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Img, {
                      src: `data:image/png;base64,${_images.signature}`,
                      width: "80",
                      height: "60",
                      alt: "Signature",
                      style: {
                        display: "block",
                        objectFit: "contain"
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Img, {
                      src: `data:image/png;base64,${_images.logo}`,
                      width: "80",
                      height: "60",
                      alt: "Signature",
                      style: {
                        display: "block",
                        objectFit: "contain"
                      }
                    })]
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                  className: "p-4 w-1/2 text-center align-top",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "mb-1.5 text-sm font-bold uppercase",
                    style: {
                      color: gold,
                      letterSpacing: "0.15em"
                    },
                    children: "\u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062B\u0627\u0646\u064A"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "mb-0.5 text-sm font-bold",
                    style: {
                      color: teal
                    },
                    children: userName
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "mb-3 text-sm font-normal",
                    style: {
                      color: "#000000"
                    },
                    children: "\u0627\u0644\u0645\u0634\u062A\u0631\u064A"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "mx-auto flex items-center justify-center rounded-md",
                    style: {
                      width: "182px",
                      height: "100px",
                      border: "1px solid #ddd3be",
                      backgroundColor: cream
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "w-20 h-px",
                      style: {
                        backgroundColor: gold
                      }
                    })
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "px-8 py-5 relative overflow-hidden text-center",
          style: {
            backgroundColor: teal
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "left-0 top-0 h-0.5 absolute w-full",
            style: {
              background: `linear-gradient(90deg, ${gold}, ${goldLight}, ${gold})`
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "inset-0 pointer-events-none absolute",
            style: {
              backgroundImage: `
                                    repeating-linear-gradient(45deg, rgba(200,145,58,.04) 0, rgba(200,145,58,.04) 1px, transparent 1px, transparent 20px),
                                    repeating-linear-gradient(-45deg, rgba(200,145,58,.04) 0, rgba(200,145,58,.04) 1px, transparent 1px, transparent 20px)
                                `
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative z-10",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "mb-2 text-base font-bold tracking-wider",
              style: {
                color: goldLight
              },
              children: "\u0634\u0643\u0631\u0627\u064B \u0644\u062B\u0642\u062A\u0643\u0645 \u0628\u0646\u0627"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "mb-2 w-10 mx-auto h-px",
              style: {
                backgroundColor: "rgba(200,145,58,0.4)"
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "text-sm font-light leading-loose text-white/50",
              children: ["www.newyolkfarm.com \xA0|\xA0 07717688884", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "\u0627\u0644\u0639\u0631\u0627\u0642 \u2014 \u0628\u063A\u062F\u0627\u062F \u2014 \u0634\u0627\u0631\u0639 \u0627\u0644\u0631\u0628\u064A\u0639\u064A \u2014 \u0639\u0645\u0627\u0631\u0629 \u0633\u0646\u062A\u0631 \u0627\u0644\u0631\u0628\u064A\u0639\u064A"]
            })]
          })]
        })]
      })
    })]
  });
};
exports.AlTaerInvoiceEmail = AlTaerInvoiceEmail;
var _default = exports.default = AlTaerInvoiceEmail;