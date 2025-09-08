import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
export default function ShinyButton({ variant = "primary", as = "button", href, className = "", children, ...rest }) {
    const Comp = as === "a" ? motion.a : motion.button;
    const base = "relative inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 font-semibold transition will-change-transform";
    const styles = variant === "primary"
        ? "bg-green-600 text-white hover:bg-green-700 active:scale-[.98] shadow-md"
        : "bg-white text-green-700 border border-green-600 hover:bg-green-50 active:scale-[.98]";
    return (_jsxs(Comp, { href: href, whileHover: { y: -1 }, whileTap: { scale: 0.98 }, className: `${base} ${styles} ${className}`, ...rest, children: [_jsx("span", { className: "absolute inset-0 overflow-hidden rounded-2xl", children: _jsx("span", { className: "pointer-events-none absolute top-0 left-0 h-full w-1/3 opacity-20", style: {
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,.7), transparent)",
                        animation: "shiny 1.8s linear infinite",
                    } }) }), _jsx("span", { className: "relative z-10 flex items-center gap-2", children: children })] }));
}
