import { Head, Html, Img, Preview } from "@react-email/components";
import { logo, signature } from "../images.js";
export const FooterContractEmail = (props) => {
    const { userName } = props;
    const teal = "#1a3a4a";
    const gold = "#c8913a";
    const goldLight = "#e8b84b";
    const parchment = "#f4f0e8";
    const cream = "#fdfcf9";
    return (<Html dir="rtl" lang="ar">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet"/>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>AL-TAER AL ASFAR - توقيع العقد</title>
      </Head>

      <Preview>AL-TAER AL ASFAR — توقيع العقد</Preview>

      <body style={{ fontFamily: "'Tajawal', 'Segoe UI', sans-serif", margin: 0, padding: 0, backgroundColor: parchment }}>
        <div style={{ width: "210mm", minHeight: "297mm", backgroundColor: parchment, margin: "0 auto", position: "relative", boxSizing: "border-box", paddingBottom: "56px" }}>

          {/* ── Important notes ── */}
          <div style={{ padding: "28px 32px 0" }}>
            <div style={{
            padding: "14px 16px", borderRadius: "8px",
            backgroundColor: "#fff9ee", border: "1px solid #e8d8b0",
            borderRight: `3px solid ${gold}`,
        }}>
              <div style={{ fontSize: "0.85rem", color: gold, marginBottom: "6px" }}>⚠ ملاحظات هامة</div>
              <div style={{ fontSize: "0.82rem", lineHeight: 1.9, color: "#3a3028", textAlign: "right" }}>
                • يعتبر هذا العقد ساري المفعول من تاريخ التوقيع.<br />
                • أي تعديل على هذا العقد يجب أن يكون مكتوباً وموقعاً من الطرفين.<br />
                • في حالة النزاع، يتم الرجوع للقوانين المعمول بها في العراق.<br />
                • الطرف الأول غير مسؤول عن النفوق الطبيعي أو الأمراض الوبائية.<br />
                • في حالة المطالبة بأسترجاع المبلغ وفسخ العقد من قبل المشتري، يتحمل مبلغ وقدره{" "}
                <strong style={{ color: gold }}>25%</strong> من قيمة العقد المبرم بين الطرفين.
              </div>
            </div>
          </div>

          {/* ── Confirmation line ── */}
          <div style={{ padding: "20px 32px 0", textAlign: "center" }}>
            <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${gold}, ${goldLight}, ${gold}, transparent)`, marginBottom: "14px" }}/>
            <div style={{ fontSize: "0.9rem", color: teal }}>قررت وبكامل قناعتي قد وقعت العقد</div>
            <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${gold}, ${goldLight}, ${gold}, transparent)`, marginTop: "14px" }}/>
          </div>

          {/* ── Signatures ── */}
          <div style={{ padding: "20px 32px 28px" }}>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                <tr>
                  {/* First party */}
                  <td style={{ width: "50%", textAlign: "center", verticalAlign: "top", padding: "16px", borderLeft: "1px dashed #ddd3be" }}>
                    <div style={{ fontSize: "0.75rem", color: gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>الطرف الأول</div>
                    <div style={{ fontSize: "0.85rem", color: teal, marginBottom: "2px" }}>شركة الطائر الأصفر</div>
                    <div style={{ fontSize: "0.82rem", color: "#5c5248", marginBottom: "12px" }}>مهاب علي ياسين</div>
                    <div style={{
            width: "182px", height: "100px", margin: "0 auto",
            border: "1px solid #ddd3be", borderRadius: "8px",
            backgroundColor: cream, display: "flex", alignItems: "center", justifyContent: "center",
        }}>
                      <Img src={`data:image/png;base64,${signature}`} width="80" height="60" alt="Signature" style={{ display: "inline-block", objectFit: "contain" }}/>
                      <Img src={`data:image/png;base64,${logo}`} width="80" height="60" alt="Stamp" style={{ display: "inline-block", objectFit: "contain" }}/>
                    </div>
                  </td>

                  {/* Second party */}
                  <td style={{ width: "50%", textAlign: "center", verticalAlign: "top", padding: "16px" }}>
                    <div style={{ fontSize: "0.75rem", color: gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>الطرف الثاني</div>
                    <div style={{ fontSize: "0.85rem", color: teal, marginBottom: "2px" }}>{userName}</div>
                    <div style={{ fontSize: "0.82rem", color: "#5c5248", marginBottom: "12px" }}>المشتري</div>
                    <div style={{
            width: "182px", height: "100px", margin: "0 auto",
            border: "1px solid #ddd3be", borderRadius: "8px",
            backgroundColor: cream, display: "flex", alignItems: "center", justifyContent: "center",
        }}>
                      <div style={{ width: "80px", height: "1px", backgroundColor: gold }}/>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── PINNED FOOTER ── */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
            <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${gold}, ${goldLight}, ${gold}, transparent)` }}/>
            <div style={{ backgroundColor: teal, padding: "10px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>
                www.newyolkfarm.com &nbsp;|&nbsp; 07717688884
              </div>
              <div style={{ fontSize: "0.7rem", color: gold, letterSpacing: "0.08em" }}>
                AL-TAER AL ASFAR
              </div>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>
                العراق — بغداد — شارع الربيعي
              </div>
            </div>
          </div>

        </div>
      </body>
    </Html>);
};
export default FooterContractEmail;
