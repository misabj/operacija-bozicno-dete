// src/pages/Trening.tsx
import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import type { LatLngExpression, LatLngBoundsExpression } from "leaflet";
import { Gift, ExternalLink, MapPin } from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";

// ——— PODEŠAVANJE LOKACIJA + VREMENA (izmeni po potrebi) ———
type City = {
  id: "NS" | "BG" | "NI";
  name: string;
  coords: LatLngExpression;
  address: string;
  gmaps: string;
  datetime: string; // prikaz vremena
};

const CITIES: City[] = [
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
function FitToCities({ bounds }: { bounds: LatLngBoundsExpression }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(bounds, { padding: [30, 30], maxZoom: 12, animate: true });
  }, [map, bounds]);
  return null;
}

// ——— FlyTo kada izaberemo grad sa leve strane ———
function FlyToActive({ city }: { city: City | null }) {
  const map = useMap();
  useEffect(() => {
    if (city) map.flyTo(city.coords as [number, number], 13, { duration: 0.8 });
  }, [city, map]);
  return null;
}

export default function Trening() {
  const [active, setActive] = useState<City | null>(CITIES[1]); // default: Beograd

  // granice preko svih gradova
  const bounds = useMemo(
    () => L.latLngBounds(CITIES.map((c) => L.latLng(c.coords as [number, number]))) as LatLngBoundsExpression,
    []
  );

  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <Section
        title="Treninzi po gradovima"
        subtitle="Levo – termini i lokacije • Desno – interaktivna mapa (klik na karticu ili marker)"
        className="py-12"
      >
        <div className="grid lg:grid-cols-12 gap-6">
          {/* LEVA KOLONA — kartice sa terminima */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal>
              {CITIES.map((c) => {
                const selected = active?.id === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActive(c)}
                    className={`w-full text-left rounded-2xl border bg-white p-4 shadow-sm transition
                    ${selected ? "ring-2 ring-emerald-400" : "hover:-translate-y-0.5"}`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`grid h-10 w-10 place-items-center rounded-xl shadow
                        ${selected ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700 border"}`}
                      >
                        <Gift className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-extrabold">{c.name}</h3>
                          {selected && (
                            <span className="text-xs rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">
                              aktivno
                            </span>
                          )}
                        </div>
                        <div className="mt-1 text-sm text-gray-700">{c.datetime}</div>
                        <div className="text-sm text-gray-600">{c.address}</div>
                        <a
                          href={c.gmaps}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-emerald-700 hover:underline mt-2"
                        >
                          Otvori u Google mapama <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </button>
                );
              })}
            </Reveal>

            <div className="rounded-2xl border bg-emerald-50/60 p-4 text-sm text-emerald-900">
              <strong>Napomena:</strong> Ako dođe do izmene termina/ločacije, obavestićemo ovde i putem mejla. Pitanja:
              <a className="underline ml-1" href="mailto:info@operacijabozicnodete.com">
                info@operacijabozicnodete.com
              </a>
              .
            </div>
          </div>

          {/* DESNA KOLONA — manja mapa */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border overflow-hidden shadow-sm card-gradient">
              <MapContainer
                className="h-[65vh] w-full" // smanjena mapa
                center={[44.2, 20.9]}
                zoom={7}
                minZoom={6}
                maxZoom={17}
                scrollWheelZoom
              >
                {/* svetli „Google-like“ stil */}
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &middot; &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                <FitToCities bounds={bounds} />
                <FlyToActive city={active} />

                {CITIES.map((c) => (
                  <Marker
                    key={c.id}
                    position={c.coords}
                    icon={giftIcon}
                    eventHandlers={{ click: () => setActive(c) }}
                  >
                    <Popup>
                      <div className="text-sm">
                        <div className="flex items-center gap-2 font-bold">
                          <MapPin className="w-4 h-4 text-emerald-600" />
                          {c.name}
                        </div>
                        <div className="mt-1 text-gray-700">{c.datetime}</div>
                        <div className="text-gray-700">{c.address}</div>
                        <a
                          className="inline-flex items-center gap-1 text-emerald-700 hover:underline mt-1"
                          href={c.gmaps}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Otvori u Google mapama <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
