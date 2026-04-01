"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDepositPdf = void 0;
var _helpers = require("./helpers.js");
const getDepositPdf = async contractData => {
  try {
    console.log("Attempting PDF generation...");
    if (contractData.type.toLowerCase().includes("cattle")) return await generatePdfRobust(contractData);
    return await generateThreeAttachments(contractData);
  } catch (error) {
    console.error("PDF generation failed:", error);
  }
};
exports.getDepositPdf = getDepositPdf;
const generatePdfRobust = async contractData => {
  const browser = await (0, _helpers.getBrowser)();
  const attachments = [];
  const cattlePage = await browser.newPage();
  try {
    const pdfCattle = await (0, _helpers.pdfRendering)(cattlePage, "cattle", contractData);
    const contractTypes = [{
      type: "cattle",
      pdf: pdfCattle
    }];
    contractTypes.forEach(({
      type,
      pdf
    }) => {
      attachments.push({
        filename: `${type}-contract-${contractData.numId}.pdf`,
        content: Buffer.from(pdf).toString("base64"),
        encoding: "base64",
        contentType: "application/pdf"
      });
    });
    return attachments;
  } finally {
    await cattlePage.close();
    await browser.close();
  }
};
const generateThreeAttachments = async contractData => {
  const browser = await (0, _helpers.getBrowser)();
  const attachments = [];
  const [rentalPage, carePage, salesPage, authPage, withdrawPage, receipt] = await Promise.all([browser.newPage(), browser.newPage(), browser.newPage(), browser.newPage(), browser.newPage(), browser.newPage()]);
  try {
    // Generate PDFs in two batches to reduce peak memory usage
    const [pdfSales, pdfRental] = await Promise.all([(0, _helpers.pdfRendering)(salesPage, "sales", contractData), (0, _helpers.pdfRendering)(rentalPage, "rental", contractData)]);
    const [pdfCare, pdfAuth] = await Promise.all([(0, _helpers.pdfRendering)(carePage, "care", contractData), (0, _helpers.pdfRendering)(authPage, "auth", contractData)]);
    const [pdfWithdraw, pdfReceipt] = await Promise.all([(0, _helpers.pdfRendering)(withdrawPage, "withdraw", contractData), (0, _helpers.pdfRendering)(receipt, "receipt", contractData)]);
    // const contractTypes = [
    //   { type: "rental", pdf: pdfRental },
    //   { type: "care", pdf: pdfCare },
    //   { type: "sales", pdf: pdfSales },
    //   { type: "auth", pdf: pdfAuth },
    //   { type: "withdraw", pdf: pdfWithdraw },
    //   { type: "receipt", pdf: pdfReceipt },
    // ]
    const pdf = await (0, _helpers.mergePdfBuffers)([pdfSales, pdfRental, pdfCare, pdfAuth, pdfWithdraw, pdfReceipt]);
    // contractTypes.forEach(({ type, pdf }) => {
    attachments.push({
      filename: `contract-${contractData.numId}.pdf`,
      content: Buffer.from(pdf).toString("base64"),
      encoding: "base64",
      contentType: "application/pdf"
    });
    // })
    return attachments;
  } finally {
    await Promise.all([rentalPage.close(), carePage.close(), salesPage.close(), authPage.close(), withdrawPage.close(), receipt.close()]);
    await browser.close();
  }
};