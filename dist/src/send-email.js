"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = exports.sendDepositEmail = void 0;
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _env = require("../env.js");
var _contractEmail = require("./emails/contract-email.js");
var _contract = require("./emails/pdf/contract.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const transporter = _nodemailer.default.createTransport({
  pool: true,
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  tls: {
    servername: "smtp.gmail.com"
  },
  auth: {
    user: _env.env.EMAIL_FROM,
    pass: _env.env.EMAIL_PASSWORD
  }
});
const sendEmail = async options => {
  const result = await transporter.sendMail(options);
  const failed = result.rejected.filter(Boolean);
  if (failed.length > 0) {
    throw new Error(`Email (${failed.join(", ")}) could not be sent`);
  }
  return result;
};
exports.sendEmail = sendEmail;
const sendDepositEmail = async ({
  userEmail,
  numId,
  createdAt,
  realm,
  type,
  currency,
  currencyAmount,
  item,
  itemAmount,
  paymentMethod,
  valueInUsd,
  userName,
  userPhone,
  insurance
}) => {
  // if (!env.VERCEL_ENV) {
  //     // skip sending emails in local/dev environments
  //     return [];
  // }
  const html = await (0, _contractEmail.getDepositEmailHtml)({
    userName: userEmail.split("@")[0] ?? "Newyolker"
  });
  const pdf = await (0, _contract.getDepositPdf)({
    numId: numId,
    createdAt: createdAt,
    realm: realm,
    userName: userName,
    type: type,
    item: item,
    itemAmount: itemAmount,
    currency: currency,
    currencyAmount: currencyAmount,
    paymentMethod: paymentMethod,
    valueInUsd: valueInUsd,
    userPhone: userPhone,
    userEmail: userEmail,
    insurance: insurance
  });
  const attachments = Array.isArray(pdf) ? pdf : [{
    filename: `${numId} - Deposit contract.pdf`,
    content: pdf,
    contentType: "application/pdf"
  }];
  await sendEmail({
    from: "newyolk.io <contact@newyolk.io>",
    to: userEmail,
    subject: `${numId} - Deposit contract`,
    html,
    attachments
  });
  return attachments;
};
exports.sendDepositEmail = sendDepositEmail;