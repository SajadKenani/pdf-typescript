import { Head, Html, Img, Preview } from "@react-email/components";
import { logo, mainLogo, signature } from "../../images.js";
export const AlTaerInvoiceEmail = ({ depositNumId, createdAt, item, itemAmount, currency, currencyAmount, userName, userPhone, userEmail, }) => {
    const issueDate = createdAt.toLocaleDateString("ar-IQ", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
    const time = createdAt.toLocaleTimeString("ar-IQ", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const unitPrice = currencyAmount / itemAmount;
    const subtotal = currencyAmount;
    // Shared inline styles for colours not in default Tailwind palette
    const teal = "#1a3a4a";
    const gold = "#c8913a";
    const goldLight = "#e8b84b";
    const parchment = "#f4f0e8";
    const cream = "#fdfcf9";
    return (<Html dir="rtl" lang="ar">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet"/>
        <script src="https://cdn.tailwindcss.com"/>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>AL-TAER AL ASFAR - فاتورة</title>
      </Head>

      <Preview>AL-TAER AL ASFAR — فاتورة رقم {String(depositNumId)}</Preview>

      <body style={{
            fontFamily: "'Tajawal', 'Segoe UI', sans-serif",
            margin: 0,
            padding: 0,
            backgroundColor: "#0d1117",
        }}>
        {/* ── A4 page ── */}
        <div className="relative mx-auto overflow-hidden" style={{
            width: "210mm",
            minHeight: "297mm",
            backgroundColor: parchment,
        }}>
          {/* Top accent bar */}
          <div className="h-2 w-full" style={{
            background: `linear-gradient(90deg, ${teal} 0%, ${gold} 40%, ${goldLight} 60%, ${teal} 100%)`,
        }}/>

          {/* ════════════ HEADER ════════════ */}
          <div className="px-8 pb-0 pt-7 relative overflow-hidden" style={{ backgroundColor: teal }}>
            {/* Diamond grid overlay */}
            <div className="inset-0 pointer-events-none absolute" style={{
            backgroundImage: `
                                    repeating-linear-gradient(45deg, rgba(200,145,58,.07) 0, rgba(200,145,58,.07) 1px, transparent 1px, transparent 20px),
                                    repeating-linear-gradient(-45deg, rgba(200,145,58,.07) 0, rgba(200,145,58,.07) 1px, transparent 1px, transparent 20px)
                                `,
        }}/>

            {/* Logo + name */}
            <table className="relative z-10 w-full" style={{ borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td className="w-24 pl-5 align-middle">
                    <div className="h-24 w-24 p-1 flex items-center justify-center rounded-full" style={{
            border: `2px solid rgba(200,145,58,0.55)`,
            backgroundColor: "rgba(255,255,255,0.05)",
        }}>
                      <Img src={`data:image/png;base64,${mainLogo}`} width="60" height="60" alt="Logo" className="block" style={{ zIndex: 99999 }}/>
                    </div>
                  </td>
                  <td className="pr-1 text-right align-middle">
                    <div className="mb-0.5 text-3xl font-black leading-tight text-white">شركة الطائر الأصفر</div>
                    <div className="mb-1.5 text-sm font-normal uppercase" style={{ color: gold, letterSpacing: "0.18em" }}>
                      AL-TAER AL ASFAR
                    </div>
                    <div className="text-xs font-light text-white/50">العراق — بغداد — شارع الربيعي</div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Gold divider */}
            <div className="mt-5 relative z-10 h-px w-full" style={{
            background: `linear-gradient(90deg, transparent, ${gold}, ${goldLight}, ${gold}, transparent)`,
        }}/>

            {/* Invoice label + badge */}
            <div className="py-4 relative z-10 text-center">
              <div className="text-sm font-normal text-white/50 uppercase" style={{ letterSpacing: "0.3em" }}>
                فاتورة مبيعات
              </div>
              <div className="mt-2">
                <span className="px-5 py-1 text-lg font-extrabold inline-block rounded-full" style={{
            background: `linear-gradient(135deg, ${gold}, ${goldLight})`,
            color: teal,
        }}>
                  # {depositNumId}
                </span>
              </div>
            </div>
          </div>

          {/* ════════════ META ════════════ */}
          <div className="bg-white px-8 py-5" style={{ borderBottom: "1px solid #e2d9c8" }}>
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  {/* Invoice info */}
                  <td className="pl-6 w-1/2 align-top">
                    <div className="mb-2.5 pb-1.5 text-sm font-bold border-b uppercase" style={{
            color: gold,
            borderColor: "#f0e8d5",
            letterSpacing: "0.15em",
        }}>
                      معلومات الفاتورة
                    </div>
                    {[
            { label: "رقم الفاتورة", value: `#${depositNumId}` },
            { label: "تاريخ الإصدار", value: issueDate },
            { label: "الوقت", value: time },
        ].map(({ label, value }) => (<div key={label} className="mb-1.5 gap-2 flex items-center">
                        <span className="h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: gold }}/>
                        <span className="text-sm font-semibold min-w-[100px]" style={{ color: "#6b5c45" }}>
                          {label}
                        </span>
                        <span className="text-sm font-normal" style={{ color: teal }}>
                          {value}
                        </span>
                      </div>))}
                  </td>

                  {/* Customer info */}
                  <td className="pr-6 w-1/2 align-top" style={{ borderRight: "1px solid #ede7d8" }}>
                    <div className="mb-2.5 pb-1.5 text-sm font-bold border-b uppercase" style={{
            color: gold,
            borderColor: "#f0e8d5",
            letterSpacing: "0.15em",
        }}>
                      بيانات العميل
                    </div>
                    {[
            userName ? { label: "الاسم", value: userName, bold: true } : null,
            userEmail ? { label: "البريد", value: userEmail } : null,
            userPhone ? { label: "الهاتف", value: userPhone } : null,
        ]
            .filter(Boolean)
            .map((row) => (<div key={row.label} className="mb-1.5 gap-2 flex items-center">
                          <span className="h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: gold }}/>
                          <span className="text-sm font-semibold min-w-[80px]" style={{ color: "#6b5c45" }}>
                            {row.label}
                          </span>
                          <span className={`text-sm ${row.bold ? "font-bold" : "font-normal"}`} style={{ color: teal }}>
                            {row.value}
                          </span>
                        </div>))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ════════════ ITEMS TABLE ════════════ */}
          <div className="px-8 py-6" style={{ backgroundColor: cream }}>
            <div className="mb-3 text-sm font-bold uppercase" style={{ color: gold, letterSpacing: "0.2em" }}>
              تفاصيل الطلب
            </div>

            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: teal }}>
                  <th className="px-3 py-2.5 text-sm font-semibold text-white/70 text-right uppercase" style={{ borderRadius: "0 6px 6px 0", letterSpacing: "0.12em" }}>
                    الوصف
                  </th>
                  <th className="px-3 py-2.5 text-sm font-semibold text-white/70 text-center uppercase" style={{ letterSpacing: "0.12em" }}>
                    الكمية
                  </th>
                  <th className="px-3 py-2.5 text-sm font-semibold text-white/70 text-center uppercase" style={{ letterSpacing: "0.12em" }}>
                    سعر الوحدة
                  </th>
                  <th className="px-3 py-2.5 text-sm font-semibold text-white/70 text-left uppercase" style={{ borderRadius: "6px 0 0 6px", letterSpacing: "0.12em" }}>
                    المجموع
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #ede7d8" }}>
                  <td className="px-3 py-3.5 text-sm font-bold text-right" style={{ color: teal }}>
                    {item}
                  </td>
                  <td className="px-3 py-3.5 text-sm font-normal text-center" style={{ color: "#5c5248" }}>
                    {itemAmount}
                  </td>
                  <td className="px-3 py-3.5 text-sm font-normal text-center" style={{ color: "#5c5248" }}>
                    {unitPrice.toLocaleString()} {currency}
                  </td>
                  <td className="px-3 py-3.5 text-sm font-bold text-left" style={{ color: teal }}>
                    {subtotal.toLocaleString()} {currency}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ════════════ NOTE ════════════ */}
          <div className="mx-8 my-6 p-3.5 rounded-md" style={{
            backgroundColor: "#fff9ee",
            border: "1px solid #e8d8b0",
            borderRight: `3px solid ${gold}`,
        }}>
            <div className="mb-1 text-sm font-bold" style={{ color: gold }}>
              ⚠ ملاحظة هامة
            </div>
            <div className="text-sm font-normal leading-relaxed text-right" style={{ color: "#000000" }}>
              في حالة المطالبة بأسترجاع المبلغ وفسخ العقد من قبل الطرف الثاني أو المشتري، يتحمل مبلغ وقدره <strong style={{ color: gold }}>25%</strong> من قيمة
              العقد المبرم بين الطرفين.
            </div>
          </div>

          {/* ════════════ SIGNATURES ════════════ */}
          <div className="px-8 pb-6">
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  {/* First party */}
                  <td className="p-4 w-1/2 text-center align-top" style={{ borderLeft: "1px dashed #ddd3be" }}>
                    <div className="mb-1.5 text-sm font-bold uppercase" style={{ color: gold, letterSpacing: "0.15em" }}>
                      الطرف الأول
                    </div>
                    <div className="mb-0.5 text-sm font-bold" style={{ color: teal }}>
                      شركة الطائر الأصفر
                    </div>
                    <div className="mb-3 text-sm font-normal" style={{ color: "#000000" }}>
                      مهاب علي ياسين
                    </div>
                    <div className="mx-auto flex items-center justify-center rounded-md" style={{
            width: "182px",
            height: "100px",
            border: "1px solid #ddd3be",
            backgroundColor: cream,
        }}>
                      <Img src={`data:image/png;base64,${signature}`} width="80" height="60" alt="Signature" style={{ display: "block", objectFit: "contain" }}/>

                      <Img src={`data:image/png;base64,${logo}`} width="80" height="60" alt="Signature" style={{ display: "block", objectFit: "contain" }}/>
                    </div>
                  </td>

                  {/* Second party */}
                  <td className="p-4 w-1/2 text-center align-top">
                    <div className="mb-1.5 text-sm font-bold uppercase" style={{ color: gold, letterSpacing: "0.15em" }}>
                      الطرف الثاني
                    </div>
                    <div className="mb-0.5 text-sm font-bold" style={{ color: teal }}>
                      {userName}
                    </div>
                    <div className="mb-3 text-sm font-normal" style={{ color: "#000000" }}>
                      المشتري
                    </div>
                    <div className="mx-auto flex items-center justify-center rounded-md" style={{ width: "182px", height: "100px", border: "1px solid #ddd3be", backgroundColor: cream }}>
                      <div className="w-20 h-px" style={{ backgroundColor: gold }}/>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ════════════ FOOTER ════════════ */}
          <div className="px-8 py-5 relative overflow-hidden text-center" style={{ backgroundColor: teal }}>
            {/* Gold top stripe */}
            <div className="left-0 top-0 h-0.5 absolute w-full" style={{
            background: `linear-gradient(90deg, ${gold}, ${goldLight}, ${gold})`,
        }}/>
            {/* Pattern overlay */}
            <div className="inset-0 pointer-events-none absolute" style={{
            backgroundImage: `
                                    repeating-linear-gradient(45deg, rgba(200,145,58,.04) 0, rgba(200,145,58,.04) 1px, transparent 1px, transparent 20px),
                                    repeating-linear-gradient(-45deg, rgba(200,145,58,.04) 0, rgba(200,145,58,.04) 1px, transparent 1px, transparent 20px)
                                `,
        }}/>

            <div className="relative z-10">
              <div className="mb-2 text-base font-bold tracking-wider" style={{ color: goldLight }}>
                شكراً لثقتكم بنا
              </div>
              <div className="mb-2 w-10 mx-auto h-px" style={{ backgroundColor: "rgba(200,145,58,0.4)" }}/>
              <div className="text-sm font-light leading-loose text-white/50">
                www.newyolkfarm.com &nbsp;|&nbsp; 07717688884
                <br />
                العراق — بغداد — شارع الربيعي — عمارة سنتر الربيعي
              </div>
            </div>
          </div>
        </div>
      </body>
    </Html>);
};
export default AlTaerInvoiceEmail;
