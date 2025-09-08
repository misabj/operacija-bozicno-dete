import { jsx as _jsx } from "react/jsx-runtime";
import { OCC_LOGO } from "../content/images";
export default function LogoMark({ className = "w-14 h-14" }) {
    return (_jsx("div", { className: `rounded-2xl bg-white/90 border shadow grid place-items-center ${className}`, children: _jsx("img", { src: OCC_LOGO, alt: "Operation Christmas Child logo", className: "p-1 object-contain" }) }));
}
