import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export default function Reveal({ children, delay = 0, y = 16, once = true }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
    const ctrl = useAnimation();
    useEffect(() => {
        if (inView) {
            ctrl.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay } });
        }
    }, [inView, ctrl, delay]);
    return (_jsx(motion.div, { ref: ref, initial: { opacity: 0, y }, animate: ctrl, children: children }));
}
