import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Trening.tsx
import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Gift, ExternalLink, MapPin } from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";
const CITIES = [
    {
        id: "NS",
        name: "Novi Sad",
        coords: [45.2671, 19.8335],
        address: "Novi Sad – Liman, Sala 3 (ul. Primer 12)",
        gmaps: "https://maps.google.com/?q=Novi+Sad",
        datetime: "Subota, 11. oktobar 2025 • 10:00–12:00",
    },
    {
        id: "BG",
        name: "Beograd",
        coords: [44.7866, 20.4489],
        address: "Beograd – Centar, Dom omladine (ul. Primer 5)",
        gmaps: "https://maps.google.com/?q=Beograd",
        datetime: "Nedelja, 12. oktobar 2025 • 16:00–18:00",
    },
    {
        id: "NI",
        name: "Niš",
        coords: [43.3209, 21.8958],
        address: "Niš – Medijana, Sala 1 (ul. Primer 7)",
        gmaps: "https://maps.google.com/?q=Ni%C5%A1",
        datetime: "Sreda, 15. oktobar 2025 • 18:00–20:00",
    },
];
// ——— MARKER (OCC logo kao pin) ———
const giftIcon = L.icon({
    iconUrl: "/occ/logo.png", // public/occ/logo.png
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -34],
    className: "occ-marker",
});
// ——— FitBounds helper ———
function FitToCities({ bounds }) {
    const map = useMap();
    useEffect(() => {
        map.fitBounds(bounds, { padding: [30, 30], maxZoom: 12, animate: true });
    }, [map, bounds]);
    return null;
}
// ——— FlyTo kada izaberemo grad sa leve strane ———
function FlyToActive({ city }) {
    const map = useMap();
    useEffect(() => {
        if (city)
            map.flyTo(city.coords, 13, { duration: 0.8 });
    }, [city, map]);
    return null;
}
export default function Trening() {
    const [active, setActive] = useState(CITIES[1]); // default: Beograd
    // granice preko svih gradova
    const bounds = useMemo(() => L.latLngBounds(CITIES.map((c) => L.latLng(c.coords))), []);
    return (_jsxs("div", { className: "relative overflow-hidden", children: [_jsx(AnimatedBackground, {}), _jsx(Section, { title: "Treninzi po gradovima", subtitle: "Levo \u2013 termini i lokacije \u2022 Desno \u2013 interaktivna mapa (klik na karticu ili marker)", className: "py-12", children: _jsxs("div", { className: "grid lg:grid-cols-12 gap-6", children: [_jsxs("div", { className: "lg:col-span-5 space-y-4", children: [_jsx(Reveal, { children: CITIES.map((c) => {
                                        const selected = active?.id === c.id;
                                        return (_jsx("button", { onClick: () => setActive(c), className: `w-full text-left rounded-2xl border bg-white p-4 shadow-sm transition
                    ${selected ? "ring-2 ring-emerald-400" : "hover:-translate-y-0.5"}`, children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: `grid h-10 w-10 place-items-center rounded-xl shadow
                        ${selected ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700 border"}`, children: _jsx(Gift, { className: "w-5 h-5" }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "font-extrabold", children: c.name }), selected && (_jsx("span", { className: "text-xs rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5", children: "aktivno" }))] }), _jsx("div", { className: "mt-1 text-sm text-gray-700", children: c.datetime }), _jsx("div", { className: "text-sm text-gray-600", children: c.address }), _jsxs("a", { href: c.gmaps, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1 text-sm text-emerald-700 hover:underline mt-2", children: ["Otvori u Google mapama ", _jsx(ExternalLink, { className: "w-3.5 h-3.5" })] })] })] }) }, c.id));
                                    }) }), _jsxs("div", { className: "rounded-2xl border bg-emerald-50/60 p-4 text-sm text-emerald-900", children: [_jsx("strong", { children: "Napomena:" }), " Ako do\u0111e do izmene termina/loc\u030Cacije, obavesti\u0107emo ovde i putem mejla. Pitanja:", _jsx("a", { className: "underline ml-1", href: "mailto:info@operacijabozicnodete.com", children: "info@operacijabozicnodete.com" }), "."] })] }), _jsx("div", { className: "lg:col-span-7", children: _jsx("div", { className: "rounded-3xl border overflow-hidden shadow-sm card-gradient", children: _jsxs(MapContainer, { className: "h-[65vh] w-full" // smanjena mapa
                                    , center: [44.2, 20.9], zoom: 7, minZoom: 6, maxZoom: 17, scrollWheelZoom: true, children: [_jsx(TileLayer, { url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", attribution: '\u00A9 <a href="https://www.openstreetmap.org/copyright">OSM</a> \u00B7 \u00A9 <a href="https://carto.com/attributions">CARTO</a>' }), _jsx(FitToCities, { bounds: bounds }), _jsx(FlyToActive, { city: active }), CITIES.map((c) => (_jsx(Marker, { position: c.coords, icon: giftIcon, eventHandlers: { click: () => setActive(c) }, children: _jsx(Popup, { children: _jsxs("div", { className: "text-sm", children: [_jsxs("div", { className: "flex items-center gap-2 font-bold", children: [_jsx(MapPin, { className: "w-4 h-4 text-emerald-600" }), c.name] }), _jsx("div", { className: "mt-1 text-gray-700", children: c.datetime }), _jsx("div", { className: "text-gray-700", children: c.address }), _jsxs("a", { className: "inline-flex items-center gap-1 text-emerald-700 hover:underline mt-1", href: c.gmaps, target: "_blank", rel: "noreferrer", children: ["Otvori u Google mapama ", _jsx(ExternalLink, { className: "w-3.5 h-3.5" })] })] }) }) }, c.id)))] }) }) })] }) })] }));
}
