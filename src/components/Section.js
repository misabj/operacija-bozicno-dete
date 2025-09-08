import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Section({ title, subtitle, className = "", children }) {
    return (_jsxs("section", { className: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`, children: [title && (_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold tracking-tight", children: title }), subtitle && _jsx("p", { className: "mt-2 text-gray-600 max-w-3xl mx-auto", children: subtitle })] })), children] }));
}
