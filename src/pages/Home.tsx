import { Calendar, CheckCircle2, Gift, MapPin, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ShinyButton from "../components/ShinyButton";
import Section from "../components/Section";
import AnimatedBackground from "../components/AnimatedBackground";
import Reveal from "../components/Reveal";
import LogoRibbon from "../components/LogoRibbon";
import LogoMark from "../components/LogoMark";
import { GALLERY } from "../content/images";
import { copy } from "../content/copy";
import { useMemo } from "react";


function daysToOrthodoxChristmas() {
    const now = new Date();
    const year = now.getMonth() > 0 || (now.getMonth() === 0 && now.getDate() > 7) ? now.getFullYear() + 1 : now.getFullYear();
    const target = new Date(year, 0, 7);
    return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}


import { useState } from "react";

export default function Home() {
    const [modalIndex, setModalIndex] = useState<number | null>(null);
    const days = useMemo(() => daysToOrthodoxChristmas(), []);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -40]);


    return (
        <>
            <div className="relative overflow-hidden">
            <AnimatedBackground />
                <motion.section style={{ y }} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
                    <div className="grid md:grid-cols-12 gap-10 items-center">
                        <div className="md:col-span-7">
                            <div className="flex items-center gap-3">
                                <LogoMark />
                                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-emerald-700 bg-emerald-50">
                                    <Sparkles className="w-4 h-4" /> Humanitarna inicijativa
                                </span>
                            </div>
                            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}
                                className="mt-4 text-5xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-emerald-700 to-emerald-500">
                                {copy.heroTitle}
                            </motion.h1>
                            <p className="mt-5 text-lg text-gray-700 max-w-xl">{copy.heroSub}</p>


                            <div className="mt-7 flex flex-wrap gap-3">
                                <ShinyButton as="a" href="/trening"><Gift className="w-4 h-4" /> {copy.ctaPrimary}</ShinyButton>
                                <ShinyButton as="a" href="/kontakt" variant="outline">{copy.ctaSecondary}</ShinyButton>
                            </div>


                            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-700">
                                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {days} dana do Božića</div>
                                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Širom Srbije</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Sigurno i provereno</div>
                            </div>
                        </div>


                        <div className="md:col-span-5">
                            {/* Mini kolaž sa vašim slikama */}
                            <div className="w-full">
                                <div className="grid grid-cols-3 gap-3">
                                    {GALLERY.slice(1, 5).map((p, i) => (
                                        <div
                                            key={i}
                                            className={`rounded-2xl overflow-hidden border shadow-sm ${i % 3 === 0 ? "col-span-2" : ""} cursor-pointer`}
                                            onClick={() => setModalIndex(i)}
                                        >
                                            <img src={p.src} alt={p.alt} className="h-40 w-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-2 text-xs text-gray-500">Fotografije: volonteri i aktivnosti „Operacija Božićno Dete“.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>
            

            <LogoRibbon />

            <Section className="py-14">
                <Reveal>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Tri koraka do osmeha</h2>
                        <p className="mt-2 text-gray-600">Jednostavno, jasno i bez stresa.</p>
                    </div>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-6">
                    {copy.steps.map((c, i) => (
                        <Reveal key={i} delay={i * 0.08}>
                            <div className="group relative rounded-2xl border bg-white p-6 shadow-sm card-gradient transition-transform hover:-translate-y-1">
                                <h3 className="text-lg font-bold">{c.title}</h3>
                                <p className="mt-2 text-gray-600">{c.text}</p>
                                <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ background: "radial-gradient(600px 120px at 50% 0%, rgba(16,185,129,0.15), transparent 60%)" }} />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>



            <Section className="py-14">
                <div className="flex justify-center">
                    <div className="rounded-3xl border bg-white p-4 shadow-sm card-gradient w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                            {GALLERY.slice(0, 12).map((p, i) => (
                                <img
                                    key={i}
                                    src={p.src}
                                    alt={p.alt}
                                    className="h-24 w-full object-cover rounded-xl cursor-pointer"
                                    onClick={() => setModalIndex(i)}
                                />
                            ))}
                        </div>
                        <p className="mt-2 text-xs text-gray-500 text-center">Pogled iz aktivnosti na terenu i edukacija volontera.</p>
                    </div>
                </div>

               

                {/* Modal for image preview */}
                {typeof modalIndex === "number" && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                        onClick={() => setModalIndex(null)}
                    >
                        <div
                            className="relative bg-white rounded-2xl shadow-lg max-w-2xl w-full p-4 flex flex-col items-center"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={GALLERY.slice(1, 12)[modalIndex].src}
                                alt={GALLERY.slice(1, 12)[modalIndex].alt}
                                className="max-h-[70vh] w-auto rounded-xl mb-4"
                            />
                            <div className="flex justify-between w-full">
                                <button
                                    className="px-4 py-2 rounded bg-emerald-100 hover:bg-emerald-200"
                                    disabled={modalIndex === 0}
                                    onClick={() => setModalIndex(modalIndex - 1)}
                                >
                                    ←
                                </button>
                                <button
                                    className="px-4 py-2 rounded bg-emerald-100 hover:bg-emerald-200"
                                    disabled={modalIndex === GALLERY.slice(1, 12).length - 1}
                                    onClick={() => setModalIndex(modalIndex + 1)}
                                >
                                    →
                                </button>
                            </div>
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={() => setModalIndex(null)}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}

         </Section>

         </div>

        </>
    );
}

