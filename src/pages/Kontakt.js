import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Section from "../components/Section";
import { copy } from "../content/copy";
import { GALLERY } from "../content/images";
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
export default function Kontakt() {
    const [state, setState] = useState("idle");
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "", // hidden anti-spam
    });
    const [error, setError] = useState(null);
    const onChange = (e) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        if (!form.name || !form.email || !form.message) {
            setError("Popunite ime, email i poruku.");
            return;
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
            setError("Unesite ispravan email.");
            return;
        }
        setState("sending");
        try {
            const url = new URL("/api/send-email", window.location.origin).toString();
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok || !data.ok) {
                throw new Error(data?.error || "Greška pri slanju");
            }
            setState("sent");
            setForm({ name: "", email: "", subject: "", message: "", honeypot: "" });
        }
        catch (err) {
            setState("error");
            setError(err?.message || "Greška pri slanju");
        }
    };
    return (_jsx(Section, { title: "Kontakt", subtitle: "Pi\u0161ite nam \u2014 javimo se u najkra\u0107em roku.", className: "py-12", children: _jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-8", children: [_jsx("div", { className: "rounded-3xl border bg-white p-6 shadow-sm card-gradient", children: _jsxs("form", { onSubmit: onSubmit, className: "space-y-4", children: [_jsx("input", { type: "text", name: "honeypot", value: form.honeypot, onChange: onChange, className: "hidden", tabIndex: -1, autoComplete: "off" }), _jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Ime i prezime *" }), _jsx("input", { name: "name", value: form.name, onChange: onChange, required: true, className: "mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400", placeholder: "Va\u0161e ime" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Email *" }), _jsx("input", { type: "email", name: "email", value: form.email, onChange: onChange, required: true, className: "mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400", placeholder: "va\u0161@email.com" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Predmet" }), _jsx("input", { name: "subject", value: form.subject, onChange: onChange, className: "mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400", placeholder: "Predmet poruke (opciono)" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Poruka *" }), _jsx("textarea", { name: "message", value: form.message, onChange: onChange, required: true, rows: 6, className: "mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400", placeholder: "Kako mo\u017Eemo da pomognemo?" })] }), error && (_jsxs("div", { className: "flex items-center gap-2 rounded-xl border bg-red-50 p-3 text-sm text-red-700", children: [_jsx(AlertCircle, { className: "w-4 h-4" }), " ", error] })), _jsxs("button", { type: "submit", disabled: state === "sending", className: "inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-5 py-2.5 font-semibold hover:bg-emerald-700 disabled:opacity-60", children: [state === "sending" ? _jsx(Loader2, { className: "w-4 h-4 animate-spin" }) : _jsx(Mail, { className: "w-4 h-4" }), state === "sending" ? "Slanje…" : "Pošalji poruku"] }), state === "sent" && (_jsxs("div", { className: "flex items-center gap-2 text-emerald-700 text-sm", children: [_jsx(CheckCircle2, { className: "w-4 h-4" }), "Poruka je poslata. Hvala!"] })), _jsxs("p", { className: "text-xs text-gray-500", children: ["Mo\u017Ee\u0161 i direktno: ", _jsx("a", { className: "underline", href: `mailto:${copy.contactMail}`, children: copy.contactMail })] })] }) }), _jsxs("div", { className: "rounded-3xl border bg-white p-3 shadow-sm card-gradient", children: [_jsx("img", { src: GALLERY[0].src, alt: GALLERY[0].alt, className: "rounded-2xl h-64 w-full object-cover" }), _jsxs("div", { className: "mt-4 rounded-2xl border bg-emerald-50/60 p-4 text-sm text-emerald-900", children: [_jsx("div", { className: "font-semibold", children: "Brzi kontakt" }), _jsxs("div", { className: "mt-2", children: ["Email: ", _jsx("a", { className: "underline", href: `mailto:${copy.contactMail}`, children: copy.contactMail })] }), _jsx("div", { className: "mt-1 text-gray-700", children: "Odgovaramo obi\u010Dno u roku od 1\u20132 radna dana." })] })] })] }) }));
}
