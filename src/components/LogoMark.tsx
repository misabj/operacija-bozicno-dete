import { OCC_LOGO } from "../content/images";


export default function LogoMark({ className = "w-14 h-14" }: { className?: string }) {
return (
<div className={`rounded-2xl bg-white/90 border shadow grid place-items-center ${className}`}>
{/* eslint-disable-next-line @next/next/no-img-element */}
<img src={OCC_LOGO} alt="Operation Christmas Child logo" className="p-1 object-contain"/>
</div>
);
}