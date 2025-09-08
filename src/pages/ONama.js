import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// ============================================
// src/pages/OAksiji.tsx — “O nama” (Creative+ v2)
// Vite + React + TS + Tailwind v4 + framer-motion
// Koristi postojeće: Section, Reveal, ShinyButton, LogoMark, AnimatedBackground
// (opciono koristi GALLERY slike iz src/content/images)
// ============================================
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import AnimatedBackground from "../components/AnimatedBackground";
import { GALLERY } from "../content/images";
// ---- CountUp hook (lagani rAF brojač) ----
function useCountUp(to, duration = 1200) {
    const [val, setVal] = useState(0);
    const startRef = useRef(null);
    useEffect(() => {
        let r = 0;
        const easeOut = (t) => 1 - Math.pow(1 - t, 3);
        const step = (ts) => {
            if (!startRef.current)
                startRef.current = ts;
            const p = Math.min(1, (ts - startRef.current) / duration);
            setVal(Math.round(to * easeOut(p)));
            if (p < 1)
                r = requestAnimationFrame(step);
        };
        r = requestAnimationFrame(step);
        return () => cancelAnimationFrame(r);
    }, [to, duration]);
    return val;
}
export default function ONama() {
    const k1 = useCountUp(10000, 2400); // primer metrika
    const k2 = useCountUp(40, 2400);
    const k3 = useCountUp(500, 2400);
    const photos = useMemo(() => (GALLERY?.length ? GALLERY.slice(0, 6) : []), []);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "relative overflow-hidden", children: [_jsx(AnimatedBackground, {}), _jsx(Section, { title: "O nama", subtitle: "Od ideje do osmeha \u2014 korak po korak.", className: "py-12", children: _jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto", children: [_jsx(Reveal, { children: _jsxs("div", { className: "prose prose-emerald max-w-none", children: [_jsx("p", { children: "Nastali smo iz jednostavne ideje: da nijedno dete ne ostane bez osmeha za praznike. Kutija za cipele postaje mala riznica pa\u017Enje i topline, koja poru\u010Duje: \u201Eva\u017Ean/na si\u201C." }), _jsx("p", { children: "Sve radimo volonterski, sa javnim rokovima i lokacijama prikupljanja. Donacije koristimo odgovorno \u2014 prvenstveno za logistiku i ciljane kupovine kada ne\u0161to nedostaje." }), _jsxs("ul", { className: "list-disc list-inside text-gray-700", children: [_jsx("li", { children: "Jasne smernice po uzrastima" }), _jsx("li", { children: "Transparentna podela i izve\u0161taji" }), _jsx("li", { children: "Saradnja sa \u0161kolama i udru\u017Eenjima" })] }), _jsx("h3", { children: "\u0160ta \u017Eelimo u svakoj kutiji" }), _jsxs("ul", { className: "list-disc list-inside text-gray-700", children: [_jsx("li", { children: "\u201EWow\u201C igra\u010Dka (npr. pli\u0161ana, kocke, dru\u0161tvena igra)" }), _jsx("li", { children: "\u0160kolski pribor (olovke, bojice, sveska, lepak)" }), _jsx("li", { children: "Higijena (\u010Detkica, pasta, sapun, maramice)" })] }), _jsx("h3", { children: "\u0160ta izbegavamo" }), _jsxs("ul", { className: "list-disc list-inside text-gray-700", children: [_jsx("li", { children: "Kvarljivu hranu, napitke i te\u010Dnosti" }), _jsx("li", { children: "O\u0161tre/razbijaju\u0107e predmete i staklo" }), _jsx("li", { children: "Lekove, suplemente, novac i dokumenta" })] }), _jsx("h3", { children: "Na\u0161e obe\u0107anje" }), _jsxs("ul", { className: "list-disc list-inside text-gray-700", children: [_jsx("li", { children: "Bezbednost i dostojanstvo dece su na prvom mestu" }), _jsx("li", { children: "Jasne smernice i odgovorna logistika" }), _jsx("li", { children: "Javnost informacija i kratki izve\u0161taji posle akcije" })] })] }) }), _jsx(Reveal, { delay: .05, children: _jsx("div", { className: "grid grid-cols-3 gap-3", children: photos.length ? photos.map((p, i) => (_jsx(motion.div, { initial: { opacity: 0, scale: .96 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: .35, delay: i * .05 }, className: `rounded-2xl overflow-hidden border shadow-sm ${i % 4 === 0 ? "col-span-2" : ""}`, children: _jsx("img", { src: p.src, alt: p.alt, className: "h-40 w-full object-cover" }) }, i))) : (_jsx("div", { className: "rounded-2xl border bg-white p-6 text-gray-500", children: "Dodajte slike u /public/occ/\u2026" })) }) })] }) }), _jsxs(Section, { className: "py-10", children: [_jsx("div", { className: "text-center mb-8", children: _jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold", children: "Kako te\u010De akcija" }) }), _jsxs("div", { className: "relative max-w-4xl mx-auto", children: [_jsx("div", { className: "absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 to-emerald-400/60" }), [
                                    { t: "Ideja i plan", d: "Dogovaramo kalendar, smernice i punktove." },
                                    { t: "Prikupljanje", d: "Zajednice sakupljaju i donose pakete po uzrastu." },
                                    { t: "Pakovanje", d: "Volonteri proveravaju sadržaj i dopunjuju po potrebi." },
                                    { t: "Distribucija", d: "Sigurno i dostojanstveno uručivanje preko partnera." },
                                ].map((item, i) => (_jsxs("div", { className: "relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-6 mb-8", children: [_jsxs("div", { className: `sm:col-start-${i % 2 ? 2 : 1} ${i % 2 ? "sm:text-left sm:pr-10" : "sm:text-right sm:pl-10"}`, children: [_jsxs("div", { className: "text-sm text-emerald-700 font-semibold", children: ["Korak ", i + 1] }), _jsx("div", { className: "text-lg font-bold", children: item.t }), _jsx("div", { className: "text-gray-600", children: item.d })] }), _jsx("div", { className: `absolute left-0 sm:left-1/2 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100` })] }, i)))] })] }), _jsx(Section, { className: "py-10", children: _jsx("div", { className: "grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto", children: [{ label: "Kutija ", val: k1, suf: "+" }, { label: "Gradova ", val: k2, suf: "+" }, { label: "Volontera ", val: k3, suf: "+" }].map((s, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 8 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: .05 * i }, className: "relative overflow-hidden rounded-2xl border bg-white p-6 text-center shadow-sm card-gradient", children: [_jsxs("div", { className: "text-3xl font-black text-emerald-700", children: [s.val, s.suf] }), _jsx("div", { className: "text-xs text-gray-600 mt-1", children: s.label }), _jsx("span", { className: "pointer-events-none absolute inset-0 -translate-x-full opacity-20 [animation:shiny_2s_linear_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent)]" })] }, i))) }) }), _jsx("svg", { className: "block w-full text-emerald-50", viewBox: "0 0 1440 80", preserveAspectRatio: "none", "aria-hidden": "true", children: _jsx("path", { d: "M0,32 C240,80 480,0 720,32 C960,64 1200,48 1440,8 L1440,80 L0,80 Z", fill: "currentColor" }) })] }) }));
}
