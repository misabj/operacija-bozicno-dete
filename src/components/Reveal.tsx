import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";


type Props = { children: React.ReactNode; delay?: number; y?: number; once?: boolean };
export default function Reveal({ children, delay = 0, y = 16, once = true }: Props) {
const ref = useRef<HTMLDivElement>(null);
const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
const ctrl = useAnimation();


useEffect(() => {
if (inView) {
ctrl.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay } });
}
}, [inView, ctrl, delay]);


return (
<motion.div ref={ref} initial={{ opacity: 0, y }} animate={ctrl}>
{children}
</motion.div>
);
}