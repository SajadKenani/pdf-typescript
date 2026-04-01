import { render } from "@react-email/render";
import chromium from "@sparticuz/chromium";
import { PDFDocument } from "pdf-lib";
import { env } from "../../../env.js";
import authIraq from "../contracts/data/iraq/auth.json";
import careIraq from "../contracts/data/iraq/care.json";
import rentalIraq from "../contracts/data/iraq/rental.json";
import salesIraq from "../contracts/data/iraq/sales.json";
import cattleRomain from "../contracts/data/romain/cattle/cattle.json";
import roosterRomain from "../contracts/data/romain/rooster/rooster.json";
import authRomain from "../contracts/data/romain/hen/auth.json";
import careRomain from "../contracts/data/romain/hen/care.json";
import rentalRomain from "../contracts/data/romain/hen/rental.json";
import salesRomain from "../contracts/data/romain/hen/sales.json";
import withdrawShared from "../contracts/data/shared/withdraw.json";
import ContentContractEmail from "../contracts/templates/content.js";
import FooterContractEmail from "../contracts/templates/footer.js";
import HeaderContractEmail from "../contracts/templates/header.js";
import AlTaerReceiptEmail from "../contracts/templates/shared/invoice.js";
import { PDF_OPTIONS } from "../contracts/types.js";
const isThreePageContractType = (contractType) => contractType === "sales" ||
    contractType === "care" ||
    contractType === "rental" ||
    contractType === "auth" ||
    contractType === "withdraw" ||
    contractType === "cattle" ||
    contractType === "rooster";
const CONTENT_MAP = {
    iraq: {
        sales: salesIraq,
        rental: rentalIraq,
        care: careIraq,
        auth: authIraq,
        withdraw: withdrawShared,
    },
    romain: {
        sales: salesRomain,
        rental: rentalRomain,
        care: careRomain,
        auth: authRomain,
        cattle: cattleRomain,
        rooster: roosterRomain,
        withdraw: withdrawShared,
    },
};
const toCommonProps = ({ contractData, contractType }) => {
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
            return (CONTENT_MAP[realmKey]?.[contractType] ?? withdrawShared);
        })(),
    };
};
const renderPdfFromReactEmail = async ({ page, component }) => {
    const html = await render(component);
    await setupPage(page);
    await page.setContent(html, {
        waitUntil: ["domcontentloaded"],
        timeout: 25_000,
    });
    await page.evaluate(() => document.fonts.ready);
    return await page.pdf(PDF_OPTIONS);
};
export const mergePdfBuffers = async (pdfParts) => {
    const merged = await PDFDocument.create();
    for (const part of pdfParts) {
        const doc = await PDFDocument.load(part);
        const copiedPages = await merged.copyPages(doc, doc.getPageIndices());
        copiedPages.forEach((copiedPage) => merged.addPage(copiedPage));
    }
    return await merged.save();
};
export const getBrowser = async () => {
    const isVercel = !!env.VERCEL_ENV;
    let puppeteer, launchOptions = {
        timeout: 30000,
        protocolTimeout: 60000,
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-gpu",
            "--disable-web-security",
            "--disable-features=ChromeWhatsNew",
            "--disable-features=VizDisplayCompositor",
            "--no-first-run",
            "--no-default-browser-check",
            "--memory-pressure-off",
            "--max_old_space_size=4096",
            "--disable-backgrounding-occluded-windows",
            "--disable-renderer-backgrounding",
            "--disable-background-timer-throttling",
            "--disable-ipc-flooding-protection",
        ],
    };
    if (isVercel) {
        puppeteer = await import("puppeteer-core");
        launchOptions = {
            ...launchOptions,
            args: chromium.args,
            executablePath: await chromium.executablePath(),
            // executablePath:
            //   "https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar",
        };
    }
    else {
        puppeteer = await import("puppeteer");
    }
    const browser = await puppeteer.launch(launchOptions);
    return browser;
};
export const setupPage = async (page) => {
    page.setDefaultTimeout(30000);
    page.setDefaultNavigationTimeout(30000);
    await page.setCacheEnabled(false);
    await page.setViewport({ width: 1200, height: 1600 });
    await page.emulateMediaType("screen");
};
export const pdfRendering = async (page, contractType, contractData) => {
    const commonProps = toCommonProps({ contractData, contractType });
    const interpolateJsonPlaceholders = ({ text, currencyAmount, date, itemAmount, }) => {
        const resolvedText = text == null ? "" : String(text);
        return resolvedText
            .replaceAll("{currencyAmount}", currencyAmount == null ? "" : String(currencyAmount))
            .replaceAll("{date}", date)
            .replaceAll("{itemAmount}", String(itemAmount));
    };
    const myContent = commonProps.content?.content?.map((term, index) => {
        const lines = term.content
            .map((line, lineIndex) => `<p
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
        const headerPdf = await renderPdfFromReactEmail({ page, component: HeaderContractEmail({ commonProps: commonProps, title: commonProps.content?.title ?? "" }) });
        const contentPdf = await renderPdfFromReactEmail({ page, component: ContentContractEmail(myContent?.join("") ?? "") });
        const footerPdf = await renderPdfFromReactEmail({ page, component: FooterContractEmail(commonProps) });
        return await mergePdfBuffers([headerPdf, contentPdf, footerPdf]);
    }
    if (contractType === "receipt")
        return await renderPdfFromReactEmail({ page, component: AlTaerReceiptEmail(commonProps) });
    return await renderPdfFromReactEmail({ page, component: ContentContractEmail(String(myContent)) });
};
