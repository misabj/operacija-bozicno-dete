import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { OCC_LOGO } from "../content/images";
const link = "px-3 py-2 rounded-xl text-sm font-medium transition whitespace-nowrap";
const active = "bg-green-600 text-white";
const idle = "text-gray-700 hover:text-green-700 hover:bg-green-100";
export default function Header() {
    const [open, setOpen] = useState(false);
    const [hide, setHide] = useState(false);
    const last = useRef(0);
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setHide(y > 10 && y > last.current);
            last.current = y;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const close = () => setOpen(false);
    const Nav = () => (_jsx("nav", { className: "flex flex-col gap-2 md:flex-row md:items-center", children: [
            ["/", "Početna"],
            ["/o-nama", "O nama"],
            ["/trening", "OCC Treninzi"],
            ["/galerija", "Galerija"],
            ["/pitanja", "Pitanja"],
            ["/kontakt", "Kontakt"],
        ].map(([to, label]) => (_jsx(NavLink, { to: to, onClick: close, className: ({ isActive }) => `${link} ${isActive ? active : idle}`, children: label }, to))) }));
    return (_jsxs("header", { className: `sticky top-0 z-40 backdrop-blur bg-white border-b transition-transform duration-300 ${hide ? "-translate-y-full" : "translate-y-0"}`, children: [_jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between", children: [_jsxs(NavLink, { to: "/", className: "flex items-center gap-3", children: [_jsx("img", { src: OCC_LOGO, alt: "OCC logo", className: "w-10 h-10 rounded-xl bg-white p-1 border shadow" }), _jsxs("div", { className: "leading-tight", children: [_jsx("div", { className: "font-black tracking-tight", children: "Operacija Bo\u017Ei\u0107no Dete" }), _jsx("div", { className: "text-[11px] text-gray-500", children: "Poklon-kutije za decu" })] })] }), _jsx("div", { className: "hidden md:block", children: _jsx(Nav, {}) }), _jsx("button", { onClick: () => setOpen(!open), className: "md:hidden p-2 rounded-xl border hover:bg-green-50", "aria-label": "Meni", children: open ? _jsx(X, { className: "w-5 h-5" }) : _jsx(Menu, { className: "w-5 h-5" }) })] }), open && (_jsx("div", { className: "md:hidden border-t bg-white px-4 py-3", children: _jsx(Nav, {}) }))] }));
}
