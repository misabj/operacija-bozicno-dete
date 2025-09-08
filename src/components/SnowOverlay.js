import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Snowfall from "./Snowfall";
export default function SnowOverlay() {
    const [count, setCount] = useState(80);
    const [enabled, setEnabled] = useState(true);
    // poštuj prefers-reduced-motion
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = () => setEnabled(!mq.matches);
        onChange();
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);
    // manja gustina na mobilnom
    useEffect(() => {
        const update = () => setCount(window.innerWidth < 640 ? 40 : 90);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    if (!enabled)
        return null;
    return (_jsx("div", { "aria-hidden": "true", className: "pointer-events-none fixed inset-0 z-30", children: _jsx(Snowfall, { count: count }) }));
}
