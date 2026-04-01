import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getDepositPdf } from "./src/emails/pdf/contract.js";
import { sendEmail } from "./src/send-email.js";

const app = express();
const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

// Simple password for demo
const PASSWORD = process.env.PDF_UI_PASSWORD || "password";

app.post("/api/pdf-ui/login", (req, res) => {
  const { password } = req.body;
  if (password === PASSWORD) {
    // In production, use JWT or session
    return res.json({ token: "demo-token" });
  }
  res.status(401).json({ error: "Invalid password" });
});

app.post("/api/pdf/generatePDF", async (req, res) => {
  try {
    const contractData = req.body;
    const attachments = await getDepositPdf(contractData);
    res.json({ attachments });
  } catch (err) {
    res.status(500).json({ error: err?.message || String(err) });
  }
});

app.post("/api/email/deposit", async (req, res) => {
  try {
    const { userEmail, attachments, ...rest } = req.body;
    await sendEmail({
      to: userEmail,
      subject: "Your Deposit Contract",
      text: "Please find your contract attached.",
      attachments: attachments?.map(a => ({
        filename: a.filename,
        content: Buffer.from(a.content, "base64"),
        contentType: a.contentType,
      })),
      ...rest,
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err?.message || String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
