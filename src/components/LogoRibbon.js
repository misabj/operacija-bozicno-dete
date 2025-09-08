import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { OCC_LOGO } from "../content/images";
export default function LogoRibbon() {
    // Dupliramo niz da bi animacija bila seamless
    const logos = Array.from({ length: 16 }).map((_, i) => (_jsx("img", { src: OCC_LOGO, alt: "OCC", className: "h-10 w-auto opacity-70" }, i)));
    return (_jsxs("div", { className: "relative overflow-hidden border-y bg-gradient-to-r from-emerald-50 via-white to-emerald-50", children: [_jsxs("div", { className: "flex gap-8 py-2 animate-[marquee_18s_linear_infinite] [--w:130px]", style: { width: "max-content" }, children: [logos, logos] }), _jsx("style", { children: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            ` })] }));
}
