import React from "react";


type Props = {
title?: React.ReactNode;
subtitle?: React.ReactNode;
className?: string;
children?: React.ReactNode;
};


export default function Section({ title, subtitle, className = "", children }: Props) {
return (
<section className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
{title && (
<div className="text-center mb-8">
<h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
{subtitle && <p className="mt-2 text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
</div>
)}
{children}
</section>
);
}