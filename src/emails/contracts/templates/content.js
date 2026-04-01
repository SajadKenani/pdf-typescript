import { Head, Html, Preview } from "@react-email/components";
export const ContentContractEmail = (content) => {
    const teal = "#1a3a4a";
    const gold = "#c8913a";
    const goldLight = "#e8b84b";
    const parchment = "#f4f0e8";
    return (<Html dir="rtl" lang="ar">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet"/>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>AL-TAER AL ASFAR - أحكام العقد</title>
        <style>{`
          #contract-content p {
            margin: 0; padding: 0;
            line-height: 1.6; font-size: 0.875rem; color: #4b5563;
          }
          #contract-content > div {
            border-bottom: 1px solid #e5e7eb;
            padding-top: 0.5rem; padding-bottom: 0.5rem;
          }
          #contract-content > div > p:first-child {
            font-weight: 700; color: #374151; margin-bottom: 4px;
          }
          #contract-content strong { color: #c8913a; font-weight: 700; }
        `}</style>
      </Head>

      <Preview>AL-TAER AL ASFAR — أحكام العقد</Preview>

      <body style={{ fontFamily: "'Tajawal', 'Segoe UI', sans-serif", margin: 0, padding: 0, backgroundColor: parchment }}>
        <div style={{ width: "210mm", minHeight: "297mm", backgroundColor: parchment, margin: "0 auto", position: "relative", boxSizing: "border-box", paddingBottom: "56px" }}>

          {/* ── Section header band ── */}
          {/* <div style={{ backgroundColor: teal, padding: "20px 32px 16px", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(200,145,58,.07) 0, rgba(200,145,58,.07) 1px, transparent 1px, transparent 20px),
              repeating-linear-gradient(-45deg, rgba(200,145,58,.07) 0, rgba(200,145,58,.07) 1px, transparent 1px, transparent 20px)
            `,
          }} />
          <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
            <span style={{
              display: "inline-block", padding: "4px 24px", borderRadius: "9999px",
              background: `linear-gradient(135deg, ${gold}, ${goldLight})`,
              color: teal, fontSize: "1.05rem",
            }}>
              أحكام العقد
            </span>
          </div>
          <div style={{ marginTop: "16px", height: "1px", background: `linear-gradient(90deg, transparent, ${gold}, ${goldLight}, ${gold}, transparent)` }} />
        </div> */}

          {/* ── Content body ── */}
          <div style={{ padding: "24px 32px" }}>
            <div style={{ fontSize: "0.75rem", color: gold, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>
              تفاصيل الأحكام والشروط
            </div>
            <div style={{ height: "2px", background: `linear-gradient(90deg, ${gold}, ${goldLight}, transparent)`, marginBottom: "18px", borderRadius: "2px" }}/>

            <div style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2d9c8",
            borderRight: `3px solid ${gold}`,
            borderRadius: "8px",
            padding: "24px 28px",
        }}>
              <div id="contract-content" dangerouslySetInnerHTML={{ __html: content }}/>
            </div>
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
export default ContentContractEmail;
