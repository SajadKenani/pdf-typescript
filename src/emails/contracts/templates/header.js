import { Head, Html, Img, Preview } from "@react-email/components";
import { mainLogo } from "../images.js";
export const HeaderContractEmail = ({ commonProps, title }) => {
    const teal = "#1a3a4a";
    const gold = "#c8913a";
    const goldLight = "#e8b84b";
    const parchment = "#f4f0e8";
    const cream = "#fdfcf9";
    const date = commonProps.createdAt.toLocaleDateString("ar-IQ", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
    return (<Html dir="rtl" lang="ar">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet"/>
        <script src="https://cdn.tailwindcss.com"/>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>AL-TAER AL ASFAR - عقد</title>
      </Head>

      <Preview>AL-TAER AL ASFAR — {title}</Preview>

      <body style={{ fontFamily: "'Tajawal', 'Segoe UI', sans-serif", margin: 0, padding: 0, backgroundColor: parchment }}>
        {/* A4 page: content + footer pinned to bottom */}
        <div style={{ width: "210mm", minHeight: "297mm", backgroundColor: parchment, margin: "0 auto", position: "relative", boxSizing: "border-box", paddingBottom: "56px" }}>

          {/* Top accent bar */}
          <div style={{ height: "8px", width: "100%", background: `linear-gradient(90deg, ${teal} 0%, ${gold} 40%, ${goldLight} 60%, ${teal} 100%)` }}/>

          {/* ── HEADER ── */}
          <div style={{ backgroundColor: teal, padding: "28px 32px 0", position: "relative", overflow: "hidden" }}>
            <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `
                repeating-linear-gradient(45deg, rgba(200,145,58,.07) 0, rgba(200,145,58,.07) 1px, transparent 1px, transparent 20px),
                repeating-linear-gradient(-45deg, rgba(200,145,58,.07) 0, rgba(200,145,58,.07) 1px, transparent 1px, transparent 20px)
              `,
        }}/>

            <table style={{ borderCollapse: "collapse", width: "100%", position: "relative", zIndex: 10 }}>
              <tbody>
                <tr>
                  <td style={{ width: "96px", paddingLeft: "20px", verticalAlign: "middle" }}>
                    <div style={{
            width: "88px", height: "88px", borderRadius: "50%", padding: "4px",
            border: "2px solid rgba(200,145,58,0.55)",
            backgroundColor: "rgba(255,255,255,0.05)",
            display: "flex", alignItems: "center", justifyContent: "center",
        }}>
                      <Img src={`data:image/png;base64,${mainLogo}`} width="56" height="56" alt="Logo" style={{ display: "block" }}/>
                    </div>
                  </td>
                  <td style={{ textAlign: "right", verticalAlign: "middle", paddingRight: "4px" }}>
                    <div style={{ fontSize: "1.75rem", color: "#ffffff", lineHeight: 1.2, marginBottom: "4px" }}>شركة الطائر الأصفر</div>
                    <div style={{ fontSize: "0.8rem", color: gold, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "6px" }}>AL-TAER AL ASFAR</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>العراق — بغداد — شارع الربيعي — عمارة سنتر الربيعي</div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: "20px", height: "1px", background: `linear-gradient(90deg, transparent, ${gold}, ${goldLight}, ${gold}, transparent)`, position: "relative", zIndex: 10 }}/>

            <div style={{ padding: "16px 0", textAlign: "center", position: "relative", zIndex: 10 }}>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "8px" }}>وثيقة رسمية</div>
              <span style={{
            display: "inline-block", padding: "6px 28px", borderRadius: "9999px",
            background: `linear-gradient(135deg, ${gold}, ${goldLight})`,
            color: teal, fontSize: "1.05rem",
        }}>
                {title}
              </span>
            </div>
          </div>

          {/* ── META ── */}
          <div style={{ backgroundColor: "#ffffff", padding: "20px 32px", borderBottom: "1px solid #e2d9c8" }}>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ width: "50%", verticalAlign: "top", paddingLeft: "24px" }}>
                    <div style={{ fontSize: "0.75rem", color: gold, letterSpacing: "0.15em", textTransform: "uppercase", borderBottom: "1px solid #f0e8d5", paddingBottom: "6px", marginBottom: "10px" }}>
                      معلومات العقد
                    </div>
                    {[
            { label: "رقم العقد", value: `#${commonProps.depositNumId}` },
            { label: "تاريخ الإصدار", value: date },
            { label: "عملية الدفع", value: commonProps.paymentMethod },
            { label: "مؤمن عليه", value: commonProps.insurance ? "نعم" : "لا" },
        ].map(({ label, value }) => (<div key={label} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: gold, flexShrink: 0 }}/>
                        <span style={{ fontSize: "0.8rem", minWidth: "110px", color: "#6b5c45" }}>{label}</span>
                        <span style={{ fontSize: "0.8rem", color: teal }}>{value}</span>
                      </div>))}
                  </td>

                  <td style={{ width: "50%", verticalAlign: "top", paddingRight: "24px", borderRight: "1px solid #ede7d8" }}>
                    <div style={{ fontSize: "0.75rem", color: gold, letterSpacing: "0.15em", textTransform: "uppercase", borderBottom: "1px solid #f0e8d5", paddingBottom: "6px", marginBottom: "10px" }}>
                      بيانات المشتري
                    </div>
                    {[
            commonProps.userName ? { label: "الاسم", value: commonProps.userName, bold: true } : null,
            commonProps.userPhone ? { label: "الهاتف", value: commonProps.userPhone } : null,
            commonProps.userEmail ? { label: "البريد", value: commonProps.userEmail } : null,
        ]
            .filter(Boolean)
            .map((row) => (<div key={row.label} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                          <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: gold, flexShrink: 0 }}/>
                          <span style={{ fontSize: "0.8rem", minWidth: "80px", color: "#6b5c45" }}>{row.label}</span>
                          <span style={{ fontSize: "0.8rem", color: teal }}>{row.value}</span>
                        </div>))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── ORDER DETAILS TABLE ── */}
          <div style={{ padding: "24px 32px", backgroundColor: cream }}>
            <div style={{ fontSize: "0.75rem", color: gold, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>
              تفاصيل الطلب
            </div>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr style={{ backgroundColor: teal }}>
                  {[
            { label: "الوصف", align: "right" },
            { label: "الكمية", align: "center" },
            { label: "عملية الدفع", align: "center" },
            { label: "المبلغ الكلي", align: "left" },
        ].map(({ label, align }, i) => (<th key={label} style={{
                padding: "10px 12px", fontSize: "0.75rem",
                color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em",
                textTransform: "uppercase", textAlign: align,
                borderRadius: i === 0 ? "0 6px 6px 0" : i === 3 ? "6px 0 0 6px" : undefined,
            }}>{label}</th>))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #ede7d8" }}>
                  <td style={{ padding: "14px 12px", fontSize: "0.85rem", textAlign: "right", color: teal }}>{commonProps.item}</td>
                  <td style={{ padding: "14px 12px", fontSize: "0.85rem", textAlign: "center", color: "#5c5248" }}>{commonProps.itemAmount}</td>
                  <td style={{ padding: "14px 12px", fontSize: "0.85rem", textAlign: "center", color: "#5c5248" }}>{commonProps.paymentMethod}</td>
                  <td style={{ padding: "14px 12px", fontSize: "0.85rem", textAlign: "left", color: teal }}>
                    {commonProps.currencyAmount.toLocaleString()} {commonProps.currency}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── PINNED FOOTER ── */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
            {/* thin gold rule */}
            <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${gold}, ${goldLight}, ${gold}, transparent)` }}/>
            <div style={{ backgroundColor: teal, padding: "10px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "0.7rem", color: `rgba(255,255,255,0.4)`, letterSpacing: "0.05em" }}>
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
export default HeaderContractEmail;
