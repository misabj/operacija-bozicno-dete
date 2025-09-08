import { OCC_LOGO } from "../content/images";

export default function LogoRibbon() {
    // Dupliramo niz da bi animacija bila seamless
    const logos = Array.from({ length: 16 }).map((_, i) => (
        <img key={i} src={OCC_LOGO} alt="OCC" className="h-10 w-auto opacity-70" />
    ));

    return (
        <div className="relative overflow-hidden border-y bg-gradient-to-r from-emerald-50 via-white to-emerald-50">
            <div
                className="flex gap-8 py-2 animate-[marquee_18s_linear_infinite] [--w:130px]"
                style={{ width: "max-content" }}
            >
                {logos}
                {logos}
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}