"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFForm = PDFForm;
const react_1 = __importStar(require("react"));
function PDFForm() {
    // State for all form fields
    const [form, setForm] = (0, react_1.useState)({
        numId: 1,
        createdAt: new Date().toISOString(),
        itemAmount: 1,
        paymentMethod: "cash",
        realm: "iraq",
        currency: "usd",
        currencyAmount: 100,
        userName: "Test User",
        userPhone: "+964",
        userEmail: "@gmail.com",
        item: "hen",
        insurance: false,
    });
    const [status, setStatus] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)("");
    const [attachments, setAttachments] = (0, react_1.useState)([]);
    const [token, setToken] = (0, react_1.useState)("");
    const [authState, setAuthState] = (0, react_1.useState)("out");
    const [loading, setLoading] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const t = localStorage.getItem("pdf_ui_token") || "";
        setToken(t);
        setAuthState((t ? "in" : "out"));
    }, []);
    function handleChange(e) {
        const target = e.target;
        const { id, value, type } = target;
        setForm(f => ({
            ...f,
            [id]: type === "checkbox" ? target.checked : value
        }));
    }
    async function handleLogin() {
        setLoading(true);
        setError("");
        setStatus("Authenticating...");
        try {
            const res = await fetch("http://localhost:8090/api/pdf-ui/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password: document.getElementById("password")?.value })
            });
            const data = await res.json();
            if (res.ok && data.token) {
                localStorage.setItem("pdf_ui_token", data.token);
                setToken(data.token);
                setAuthState("in");
                setStatus("Authenticated");
            }
            else {
                setError("Authentication failed");
                setStatus("");
            }
        }
        catch (err) {
            setError(String(err));
            setStatus("");
        }
        setLoading(false);
    }
    function handleLogout() {
        localStorage.removeItem("pdf_ui_token");
        setToken("");
        setAuthState("out");
        setStatus("Logged out");
    }
    async function handleGenerate() {
        setLoading(true);
        setError("");
        setStatus("Generating PDFs...");
        setAttachments([]);
        try {
            const res = await fetch("http://localhost:8090/api/pdf/generatePDF", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? (token.startsWith("Bearer ") ? token : "Bearer " + token) : ""
                },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (res.ok && data && (data.data?.attachments || data.attachments)) {
                const atts = data.data?.attachments || data.attachments;
                setAttachments(atts);
                setStatus(`Generated ${atts.length} PDF(s)`);
            }
            else {
                setError("No attachments returned");
                setStatus("");
            }
        }
        catch (err) {
            setError(String(err));
            setStatus("");
        }
        setLoading(false);
    }
    async function handleSend() {
        setLoading(true);
        setError("");
        setStatus("Sending contracts...");
        try {
            const res = await fetch("http:/localhost:8089/api/email/deposit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? (token.startsWith("Bearer ") ? token : "Bearer " + token) : ""
                },
                body: JSON.stringify({ ...form, attachments })
            });
            const data = await res.json();
            if (res.ok) {
                setStatus("Contracts sent successfully");
            }
            else {
                setError("Send failed: " + (data ? JSON.stringify(data) : ""));
                setStatus("");
            }
        }
        catch (err) {
            setError(String(err));
            setStatus("");
        }
        setLoading(false);
    }
    return (<div>
      {authState === "out" ? (<div className="card">
          <h1>Authentication</h1>
          <div className="section-desc">Secure access required to continue</div>
          <div className="grid">
            <div className="full">
              <label>Password</label>
              <input id="password" type="password" placeholder="Enter your password"/>
            </div>
            <div className="full auth-actions">
              <button onClick={handleLogin} disabled={loading}>Sign In</button>
              {(() => {
                const isIn = authState === "in";
                return (<div className={"status-badge " + (isIn ? "logged-in" : "logged-out")}>
                    {isIn ? "Authenticated" : "Not Authenticated"}
                  </div>);
            })()}
            </div>
          </div>
          {error && <div className="err">{error}</div>}
        </div>) : (<div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
            <div>
              <h1>Document Generator</h1>
              <div className="section-desc">Configure and generate professional PDF contracts</div>
            </div>
            <button onClick={handleLogout} style={{ marginTop: 0 }}>Sign Out</button>
          </div>
          <div className="grid">
            <div className="form-group">
              <label>Region</label>
              <select id="realm" value={form.realm} onChange={handleChange}>
                <option value="iraq">Iraq</option>
                <option value="romain">Romania</option>
              </select>
            </div>
            <div className="form-group">
              <label>Document ID</label>
              <input id="numId" type="number" value={form.numId} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Creation Date</label>
              <input id="createdAt" value={form.createdAt} disabled/>
            </div>
            <div className="form-group">
              <label>Item Quantity</label>
              <input id="itemAmount" type="number" value={form.itemAmount} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Currency Amount</label>
              <input id="currencyAmount" type="number" value={form.currencyAmount} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Currency</label>
              <select id="currency" value={form.currency} onChange={handleChange}>
                <option value="usd">USD</option>
                <option value="iqd">IQD</option>
                <option value="yolk">YOLK</option>
              </select>
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <input id="paymentMethod" value={form.paymentMethod} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Client Name</label>
              <input id="userName" value={form.userName} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input id="userPhone" value={form.userPhone} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input id="userEmail" value={form.userEmail} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Item Description</label>
              <select id="item" value={form.item} onChange={handleChange}>
                <option value="hen">hen</option>
                <option value="cattle">cattle</option>
                <option value="rooster">rooster</option>
              </select>
            </div>
            <div className="form-group full checkbox-row">
              <input id="insurance" type="checkbox" checked={form.insurance} onChange={handleChange}/>
              <label htmlFor="insurance">Include Insurance Coverage</label>
              <span className="muted">(Available for select templates)</span>
            </div>
          </div>
          <div className="actions">
            <button className="primary" onClick={handleGenerate} disabled={loading}>Generate PDFs</button>
            <button onClick={handleSend} disabled={loading || attachments.length === 0}>Send Contracts</button>
          </div>
          <div className="out">
            {status && <div className="muted">{status}</div>}
            {error && <div className="err">{error}</div>}
            <div className="list">
              {attachments.map((a, i) => (<a key={i} className="dl" href={`data:${a.contentType};base64,${a.content}`} download={a.filename}>
                  {a.filename}
                </a>))}
            </div>
          </div>
        </div>)}
    </div>);
}
