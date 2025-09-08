import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
export default function Lightbox({ images, initialIndex, onClose }) {
    const [index, setIndex] = useState(initialIndex);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setIndex((i) => (i + 1) % images.length);
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape")
                onClose();
            if (e.key === "ArrowLeft")
                prev();
            if (e.key === "ArrowRight")
                next();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);
    // Preload neighbors for instant switch
    const neighbors = useMemo(() => [images[(index + 1) % images.length], images[(index - 1 + images.length) % images.length]], [index, images]);
    useEffect(() => { neighbors.forEach(n => { const img = new Image(); img.src = n.src; }); }, [neighbors]);
    const current = images[index];
    return (_jsxs("div", { className: "fixed inset-0 z-[100]", role: "dialog", "aria-modal": "true", children: [_jsx("div", { className: "absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fade-in_.2s_ease]", onClick: onClose }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center p-4", children: _jsxs("figure", { className: "relative max-w-6xl w-full animate-[scale-in_.18s_ease]", children: [_jsx("img", { src: current.src, alt: current.alt || "Fotografija", className: "w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10" }), _jsxs("figcaption", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-xs text-white/80 px-2", children: [index + 1, " / ", images.length, " \u2014 ", current.alt] }), _jsx("button", { "aria-label": "Prethodna", onClick: prev, className: "absolute left-2 top-1/2 -translate-y-1/2 rounded-2xl bg-white/80 hover:bg-white text-gray-800 p-2 shadow", children: _jsx(ChevronLeft, { className: "w-6 h-6" }) }), _jsx("button", { "aria-label": "Slede\u0107a", onClick: next, className: "absolute right-2 top-1/2 -translate-y-1/2 rounded-2xl bg-white/80 hover:bg-white text-gray-800 p-2 shadow", children: _jsx(ChevronRight, { className: "w-6 h-6" }) }), _jsx("button", { "aria-label": "Zatvori", onClick: onClose, className: "absolute -top-3 -right-3 rounded-full bg-white text-gray-900 p-2 shadow border", children: _jsx(X, { className: "w-5 h-5" }) })] }) })] }));
}
