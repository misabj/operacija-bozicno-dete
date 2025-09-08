import { useState } from "react";
import Section from "../components/Section";
import { GALLERY } from "../content/images";
import Lightbox from "../components/Lightbox";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Galerija() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    return (
        <div className="relative overflow-hidden">
            <AnimatedBackground />
            <Section title="Galerija" className="py-12">
                <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-4">
                    {GALLERY.slice(0, 9).map((p, i) => (
                        <img
                            key={i}
                            src={p.src}
                            alt={p.alt}
                            className="rounded-2xl border shadow-sm h-56 w-full object-cover cursor-pointer"
                            onClick={() => { setModalOpen(true); setModalIndex(i); }}
                        />
                    ))}
                    {modalOpen && (
                        <Lightbox
                            images={GALLERY.slice(0, 9)}
                            initialIndex={modalIndex}
                            onClose={() => setModalOpen(false)}
                        />
                    )}
                </div>
            </Section>
        </div>
    );
}