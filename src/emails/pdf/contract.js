import { getBrowser, mergePdfBuffers, pdfRendering } from "./helpers.js";
const getDepositPdf = async (contractData) => {
    try {
        console.log("Attempting PDF generation...");
        if ((contractData.type).toLowerCase().includes("cattle"))
            return await generatePdfRobust(contractData);
        return await generateThreeAttachments(contractData);
    }
    catch (error) {
        console.error("PDF generation failed:", error);
    }
};
const generatePdfRobust = async (contractData) => {
    const browser = await getBrowser();
    const attachments = [];
    const cattlePage = await browser.newPage();
    try {
        const pdfCattle = await pdfRendering(cattlePage, "cattle", contractData);
        const contractTypes = [{ type: "cattle", pdf: pdfCattle }];
        contractTypes.forEach(({ type, pdf }) => {
            attachments.push({
                filename: `${type}-contract-${contractData.numId}.pdf`,
                content: Buffer.from(pdf).toString("base64"),
                encoding: "base64",
                contentType: "application/pdf",
            });
        });
        return attachments;
    }
    finally {
        await cattlePage.close();
        await browser.close();
    }
};
const generateThreeAttachments = async (contractData) => {
    const browser = await getBrowser();
    const attachments = [];
    const [rentalPage, carePage, salesPage, authPage, withdrawPage, receipt] = await Promise.all([
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
    ]);
    try {
        // Generate PDFs in two batches to reduce peak memory usage
        const [pdfSales, pdfRental] = await Promise.all([
            pdfRendering(salesPage, "sales", contractData),
            pdfRendering(rentalPage, "rental", contractData),
        ]);
        const [pdfCare, pdfAuth] = await Promise.all([
            pdfRendering(carePage, "care", contractData),
            pdfRendering(authPage, "auth", contractData),
        ]);
        const [pdfWithdraw, pdfReceipt] = await Promise.all([
            pdfRendering(withdrawPage, "withdraw", contractData),
            pdfRendering(receipt, "receipt", contractData),
        ]);
        // const contractTypes = [
        //   { type: "rental", pdf: pdfRental },
        //   { type: "care", pdf: pdfCare },
        //   { type: "sales", pdf: pdfSales },
        //   { type: "auth", pdf: pdfAuth },
        //   { type: "withdraw", pdf: pdfWithdraw },
        //   { type: "receipt", pdf: pdfReceipt },
        // ]
        const pdf = await mergePdfBuffers([pdfSales, pdfRental, pdfCare, pdfAuth, pdfWithdraw, pdfReceipt]);
        // contractTypes.forEach(({ type, pdf }) => {
        attachments.push({
            filename: `contract-${contractData.numId}.pdf`,
            content: Buffer.from(pdf).toString("base64"),
            encoding: "base64",
            contentType: "application/pdf",
        });
        // })
        return attachments;
    }
    finally {
        await Promise.all([rentalPage.close(), carePage.close(), salesPage.close(), authPage.close(), withdrawPage.close(), receipt.close()]);
        await browser.close();
    }
};
export { getDepositPdf };
