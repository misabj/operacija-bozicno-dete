import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";


export type LightboxImage = { src: string; alt?: string };


type Props = {
images: LightboxImage[];
initialIndex: number;
onClose: () => void;
};


export default function Lightbox({ images, initialIndex, onClose }: Props) {
const [index, setIndex] = useState(initialIndex);


const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
const next = () => setIndex((i) => (i + 1) % images.length);


useEffect(() => {
const onKey = (e: KeyboardEvent) => {
if (e.key === "Escape") onClose();
if (e.key === "ArrowLeft") prev();
if (e.key === "ArrowRight") next();
};
document.addEventListener("keydown", onKey);
return () => document.removeEventListener("keydown", onKey);
}, []);


// Preload neighbors for instant switch
const neighbors = useMemo(() => [images[(index+1)%images.length], images[(index-1+images.length)%images.length]], [index, images]);
useEffect(() => { neighbors.forEach(n => { const img = new Image(); img.src = n.src; }); }, [neighbors]);


const current = images[index];


return (
<div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
{/* backdrop */}
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fade-in_.2s_ease]" onClick={onClose} />


{/* content */}
<div className="absolute inset-0 flex items-center justify-center p-4">
<figure className="relative max-w-6xl w-full animate-[scale-in_.18s_ease]">
{/* eslint-disable-next-line @next/next/no-img-element */}
<img src={current.src} alt={current.alt || "Fotografija"}
className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10" />
<figcaption className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-xs text-white/80 px-2">
{index+1} / {images.length} — {current.alt}
</figcaption>


{/* arrows */}
<button aria-label="Prethodna" onClick={prev}
className="absolute left-2 top-1/2 -translate-y-1/2 rounded-2xl bg-white/80 hover:bg-white text-gray-800 p-2 shadow">
<ChevronLeft className="w-6 h-6" />
</button>
<button aria-label="Sledeća" onClick={next}
className="absolute right-2 top-1/2 -translate-y-1/2 rounded-2xl bg-white/80 hover:bg-white text-gray-800 p-2 shadow">
<ChevronRight className="w-6 h-6" />
</button>


{/* close */}
<button aria-label="Zatvori" onClick={onClose}
className="absolute -top-3 -right-3 rounded-full bg-white text-gray-900 p-2 shadow border">
<X className="w-5 h-5" />
</button>
</figure>
</div>
</div>
);
}