import nodemailer from "nodemailer";
import { env } from "../env.js";
import { getDepositEmailHtml } from "./emails/contract-email.js";
import { getDepositPdf } from "./emails/pdf/contract.js";
const transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    tls: {
        servername: "smtp.gmail.com",
    },
    auth: {
        user: env.EMAIL_FROM,
        pass: env.EMAIL_PASSWORD,
    },
});
const sendEmail = async (options) => {
    const result = await transporter.sendMail(options);
    const failed = result.rejected.filter(Boolean);
    if (failed.length > 0) {
        throw new Error(`Email (${failed.join(", ")}) could not be sent`);
    }
    return result;
};
const sendDepositEmail = async ({ userEmail, numId, createdAt, realm, type, currency, currencyAmount, item, itemAmount, paymentMethod, valueInUsd, userName, userPhone, insurance, }) => {
    // if (!env.VERCEL_ENV) {
    //     // skip sending emails in local/dev environments
    //     return [];
    // }
    const html = await getDepositEmailHtml({
        userName: userEmail.split("@")[0] ?? "Newyolker",
    });
    const pdf = await getDepositPdf({
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
        insurance: insurance,
    });
    const attachments = Array.isArray(pdf)
        ? pdf
        : [
            {
                filename: `${numId} - Deposit contract.pdf`,
                content: pdf,
                contentType: "application/pdf",
            },
        ];
    await sendEmail({
        from: "newyolk.io <contact@newyolk.io>",
        to: userEmail,
        subject: `${numId} - Deposit contract`,
        html,
        attachments,
    });
    return attachments;
};
export { sendEmail, sendDepositEmail };
