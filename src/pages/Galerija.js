import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Section from "../components/Section";
import { GALLERY } from "../content/images";
import Lightbox from "../components/Lightbox";
import AnimatedBackground from "../components/AnimatedBackground";
export default function Galerija() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    return (_jsxs("div", { className: "relative overflow-hidden", children: [_jsx(AnimatedBackground, {}), _jsx(Section, { title: "Galerija", className: "py-12", children: _jsxs("div", { className: "max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-4", children: [GALLERY.slice(0, 9).map((p, i) => (_jsx("img", { src: p.src, alt: p.alt, className: "rounded-2xl border shadow-sm h-56 w-full object-cover cursor-pointer", onClick: () => { setModalOpen(true); setModalIndex(i); } }, i))), modalOpen && (_jsx(Lightbox, { images: GALLERY.slice(0, 9), initialIndex: modalIndex, onClose: () => setModalOpen(false) }))] }) })] }));
}
