"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupPage = exports.pdfRendering = exports.mergePdfBuffers = exports.getBrowser = void 0;
var _render = require("@react-email/render");
var _chromium = _interopRequireDefault(require("@sparticuz/chromium"));
var _pdfLib = require("pdf-lib");
var _env = require("../../../env.js");
var _auth = _interopRequireDefault(require("../contracts/data/iraq/auth.json"));
var _care = _interopRequireDefault(require("../contracts/data/iraq/care.json"));
var _rental = _interopRequireDefault(require("../contracts/data/iraq/rental.json"));
var _sales = _interopRequireDefault(require("../contracts/data/iraq/sales.json"));
var _cattle = _interopRequireDefault(require("../contracts/data/romain/cattle/cattle.json"));
var _rooster = _interopRequireDefault(require("../contracts/data/romain/rooster/rooster.json"));
var _auth2 = _interopRequireDefault(require("../contracts/data/romain/hen/auth.json"));
var _care2 = _interopRequireDefault(require("../contracts/data/romain/hen/care.json"));
var _rental2 = _interopRequireDefault(require("../contracts/data/romain/hen/rental.json"));
var _sales2 = _interopRequireDefault(require("../contracts/data/romain/hen/sales.json"));
var _withdraw = _interopRequireDefault(require("../contracts/data/shared/withdraw.json"));
var _content = _interopRequireDefault(require("../contracts/templates/content.js"));
var _footer = _interopRequireDefault(require("../contracts/templates/footer.js"));
var _header = _interopRequireDefault(require("../contracts/templates/header.js"));
var _invoice = _interopRequireDefault(require("../contracts/templates/shared/invoice.js"));
var _types = require("../contracts/types.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const isThreePageContractType = contractType => contractType === "sales" || contractType === "care" || contractType === "rental" || contractType === "auth" || contractType === "withdraw" || contractType === "cattle" || contractType === "rooster";
const CONTENT_MAP = {
  iraq: {
    sales: _sales.default,
    rental: _rental.default,
    care: _care.default,
    auth: _auth.default,
    withdraw: _withdraw.default
  },
  romain: {
    sales: _sales2.default,
    rental: _rental2.default,
    care: _care2.default,
    auth: _auth2.default,
    cattle: _cattle.default,
    rooster: _rooster.default,
    withdraw: _withdraw.default
  }
};
const toCommonProps = ({
  contractData,
  contractType
}) => {
  return {
    depositNumId: contractData.numId,
    createdAt: contractData.createdAt,
    userName: contractData.userName,
    userEmail: contractData.userEmail,
    userPhone: contractData.userPhone,
    realm: contractData.realm,
    item: contractData.item,
    currency: contractData.currency,
    currencyAmount: contractData.currencyAmount,
    paymentMethod: contractData.paymentMethod,
    itemAmount: contractData.itemAmount,
    insurance: contractData.insurance,
    contentType: isThreePageContractType(contractType) ? contractType : undefined,
    content: (() => {
      const realmRaw = String(contractData.realm ?? "").toLowerCase();
      const realmKey = realmRaw === "iraq" ? "iraq" : "romain";
      return CONTENT_MAP[realmKey]?.[contractType] ?? _withdraw.default;
    })()
  };
};
const renderPdfFromReactEmail = async ({
  page,
  component
}) => {
  const html = await (0, _render.render)(component);
  await setupPage(page);
  await page.setContent(html, {
    waitUntil: ["domcontentloaded"],
    timeout: 25_000
  });
  await page.evaluate(() => document.fonts.ready);
  return await page.pdf(_types.PDF_OPTIONS);
};
const mergePdfBuffers = async pdfParts => {
  const merged = await _pdfLib.PDFDocument.create();
  for (const part of pdfParts) {
    const doc = await _pdfLib.PDFDocument.load(part);
    const copiedPages = await merged.copyPages(doc, doc.getPageIndices());
    copiedPages.forEach(copiedPage => merged.addPage(copiedPage));
  }
  return await merged.save();
};
exports.mergePdfBuffers = mergePdfBuffers;
const getBrowser = async () => {
  const isVercel = !!_env.env.VERCEL_ENV;
  let puppeteer,
    launchOptions = {
      timeout: 30000,
      protocolTimeout: 60000,
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--disable-web-security", "--disable-features=ChromeWhatsNew", "--disable-features=VizDisplayCompositor", "--no-first-run", "--no-default-browser-check", "--memory-pressure-off", "--max_old_space_size=4096", "--disable-backgrounding-occluded-windows", "--disable-renderer-backgrounding", "--disable-background-timer-throttling", "--disable-ipc-flooding-protection"]
    };
  if (isVercel) {
    puppeteer = await Promise.resolve().then(() => _interopRequireWildcard(require("puppeteer-core")));
    launchOptions = {
      ...launchOptions,
      args: _chromium.default.args,
      executablePath: await _chromium.default.executablePath()
      // executablePath:
      //   "https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar",
    };
  } else {
    puppeteer = await Promise.resolve().then(() => _interopRequireWildcard(require("puppeteer")));
  }
  const browser = await puppeteer.launch(launchOptions);
  return browser;
};
exports.getBrowser = getBrowser;
const setupPage = async page => {
  page.setDefaultTimeout(30000);
  page.setDefaultNavigationTimeout(30000);
  await page.setCacheEnabled(false);
  await page.setViewport({
    width: 1200,
    height: 1600
  });
  await page.emulateMediaType("screen");
};
exports.setupPage = setupPage;
const pdfRendering = async (page, contractType, contractData) => {
  const commonProps = toCommonProps({
    contractData,
    contractType
  });
  const interpolateJsonPlaceholders = ({
    text,
    currencyAmount,
    date,
    itemAmount
  }) => {
    const resolvedText = text == null ? "" : String(text);
    return resolvedText.replaceAll("{currencyAmount}", currencyAmount == null ? "" : String(currencyAmount)).replaceAll("{date}", date).replaceAll("{itemAmount}", String(itemAmount));
  };
  const myContent = commonProps.content?.content?.map((term, index) => {
    const lines = term.content.map((line, lineIndex) => `<p
           key="${lineIndex}"
           style="margin:0;padding:0;line-height:1.4;font-size:0.875rem;color:#4b5563;">
            ${interpolateJsonPlaceholders({
      text: `${lineIndex + 1}- ${line[`.${lineIndex + 1}`]}`,
      currencyAmount: contractData.currencyAmount,
      date: contractData.createdAt.toLocaleDateString("en-GB"),
      itemAmount: contractData.itemAmount
    })}
          </p>`);
    return `<div key="${index}" style="border-bottom:1px solid #e5e7eb;padding-top:0.5rem;padding-bottom:0.5rem;">
                  <p style="margin:0;font-weight:700;color:#374151;"> ${term.title} </p>
                  ${lines.join("")}
              </div>`;
  });
  if (isThreePageContractType(contractType)) {
    const headerPdf = await renderPdfFromReactEmail({
      page,
      component: (0, _header.default)({
        commonProps: commonProps,
        title: commonProps.content?.title ?? ""
      })
    });
    const contentPdf = await renderPdfFromReactEmail({
      page,
      component: (0, _content.default)(myContent?.join("") ?? "")
    });
    const footerPdf = await renderPdfFromReactEmail({
      page,
      component: (0, _footer.default)(commonProps)
    });
    return await mergePdfBuffers([headerPdf, contentPdf, footerPdf]);
  }
  if (contractType === "receipt") return await renderPdfFromReactEmail({
    page,
    component: (0, _invoice.default)(commonProps)
  });
  return await renderPdfFromReactEmail({
    page,
    component: (0, _content.default)(String(myContent))
  });
};
exports.pdfRendering = pdfRendering;