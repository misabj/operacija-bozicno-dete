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
function useCountUp(to: number, duration = 1200) {
    const [val, setVal] = useState(0);
    const startRef = useRef<number | null>(null);
    useEffect(() => {
        let r = 0;
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
        const step = (ts: number) => {
            if (!startRef.current) startRef.current = ts;
            const p = Math.min(1, (ts - startRef.current) / duration);
            setVal(Math.round(to * easeOut(p)));
            if (p < 1) r = requestAnimationFrame(step);
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

    return (
        <>
            {/* HERO (sa animiranom pozadinom + talas separatorom) */}
            <div className="relative overflow-hidden">
                <AnimatedBackground />
                {/* PRIČA + KOLAŽ SLIKA */}
                <Section
                    title="O nama"
                    subtitle="Od ideje do osmeha — korak po korak."
                    className="py-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                        <Reveal>
                            <div className="prose prose-emerald max-w-none">
                                <p>
                                    Nastali smo iz jednostavne ideje: da nijedno dete ne ostane bez osmeha za praznike.
                                    Kutija za cipele postaje mala riznica pažnje i topline, koja poručuje: „važan/na si“.
                                </p>

                                <p>
                                    Sve radimo volonterski, sa javnim rokovima i lokacijama prikupljanja.
                                    Donacije koristimo odgovorno — prvenstveno za logistiku i ciljane kupovine kada nešto nedostaje.
                                </p>

                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Jasne smernice po uzrastima</li>
                                    <li>Transparentna podela i izveštaji</li>
                                    <li>Saradnja sa školama i udruženjima</li>
                                </ul>

                                <h3>Šta želimo u svakoj kutiji</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>„Wow“ igračka (npr. plišana, kocke, društvena igra)</li>
                                    <li>Školski pribor (olovke, bojice, sveska, lepak)</li>
                                    <li>Higijena (četkica, pasta, sapun, maramice)</li>
                                </ul>

                                <h3>Šta izbegavamo</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Kvarljivu hranu, napitke i tečnosti</li>
                                    <li>Oštre/razbijajuće predmete i staklo</li>
                                    <li>Lekove, suplemente, novac i dokumenta</li>
                                </ul>

                                <h3>Naše obećanje</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Bezbednost i dostojanstvo dece su na prvom mestu</li>
                                    <li>Jasne smernice i odgovorna logistika</li>
                                    <li>Javnost informacija i kratki izveštaji posle akcije</li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={.05}>
                            <div className="grid grid-cols-3 gap-3">
                                {photos.length ? photos.map((p, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .35, delay: i * .05 }}
                                        className={`rounded-2xl overflow-hidden border shadow-sm ${i % 4 === 0 ? "col-span-2" : ""}`}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={p.src} alt={p.alt} className="h-40 w-full object-cover" />
                                    </motion.div>
                                )) : (
                                    <div className="rounded-2xl border bg-white p-6 text-gray-500">Dodajte slike u /public/occ/…</div>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </Section>

                {/* TIMELINE — kako teče akcija */}
                <Section className="py-10">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-extrabold">Kako teče akcija</h2>

                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 to-emerald-400/60" />
                        {[
                            { t: "Ideja i plan", d: "Dogovaramo kalendar, smernice i punktove." },
                            { t: "Prikupljanje", d: "Zajednice sakupljaju i donose pakete po uzrastu." },
                            { t: "Pakovanje", d: "Volonteri proveravaju sadržaj i dopunjuju po potrebi." },
                            { t: "Distribucija", d: "Sigurno i dostojanstveno uručivanje preko partnera." },
                        ].map((item, i) => (
                            <div key={i} className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-6 mb-8">
                                <div className={`sm:col-start-${i % 2 ? 2 : 1} ${i % 2 ? "sm:text-left sm:pr-10" : "sm:text-right sm:pl-10"}`}>
                                    <div className="text-sm text-emerald-700 font-semibold">Korak {i + 1}</div>
                                    <div className="text-lg font-bold">{item.t}</div>
                                    <div className="text-gray-600">{item.d}</div>
                                </div>
                                <div className={`absolute left-0 sm:left-1/2 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100`} />
                            </div>
                        ))}
                    </div>
                </Section>

                {/* STATISTIKA (sa CountUp i micro-shine) */}
                <Section className="py-10">
                    <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {[{ label: "Kutija ", val: k1, suf: "+" }, { label: "Gradova ", val: k2, suf: "+" }, { label: "Volontera ", val: k3, suf: "+" }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .05 * i }}
                                className="relative overflow-hidden rounded-2xl border bg-white p-6 text-center shadow-sm card-gradient">
                                <div className="text-3xl font-black text-emerald-700">{s.val}{s.suf}</div>
                                <div className="text-xs text-gray-600 mt-1">{s.label}</div>
                                <span className="pointer-events-none absolute inset-0 -translate-x-full opacity-20 [animation:shiny_2s_linear_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent)]" />
                            </motion.div>
                        ))}
                    </div>

                </Section>
                {/* talas separator */}
                <svg className="block w-full text-emerald-50" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,32 C240,80 480,0 720,32 C960,64 1200,48 1440,8 L1440,80 L0,80 Z" fill="currentColor" />
                </svg>
            </div>
        </>
    );
}
