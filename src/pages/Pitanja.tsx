import AnimatedBackground from "../components/AnimatedBackground";
import Section from "../components/Section";


export default function Pitanja() {
    const data = [
        ["Veličina kutije?", "Može standardna kutija za cipele ili plastična slične dimenzije."],
        ["Poruka u kutiji?", "Da, kratka poruka ili crtež su dobrodošli."],
        ["Šta obavezno ide u kutiju?", "‘Wow’ igračka (npr. plišana, autić, lutka), školski pribor (olovke, bojice, sveska), lična higijena (četkica, pasta, sapun) i sitan slatkiš dužeg roka. Sve treba da bude novo i nekorišćeno."],
        ["Kako se prijavljujem za volontiranje?", "Možeš se prijaviti putem kontakt forme na sajtu ili direktno na info@operacijabozicnodete.com."],
        ["Kako da označim pol i uzrast?", "Zalepi nalepnicu sa uzrastom 2–4, 5–9 ili 10–14 i (po želji) pol. Ako je sadržaj neutralan, pol može ostati neoznačen."],
        ["Kako mogu da doniram sredstva?", "Sva uputstva za donacije nalaze se na stranici /donacije. Možete donirati online ili putem uputstva za uplatu na račun."],
        ["Da li se kutije pregledaju pre podele?", "Da. Volonteri otvaraju svaku kutiju radi bezbednosti i dopune po smernicama; po potrebi zamenjujemo neadekvatne stavke i ponovo zapečatimo."],
        ["Kako mogu da saznam više o projektu?", "Sve informacije, novosti i kontakt podatke možeš pronaći na zvaničnoj stranici operacijabozicnodete.com."]
    ];
    return (
        <div className="relative overflow-hidden">
            <AnimatedBackground />
            <Section title="Česta pitanja" className="py-12">
                <div className="max-w-3xl mx-auto divide-y">
                    {data.map(([q, a]) => (
                        <details key={q} className="py-4">
                            <summary className="font-semibold cursor-pointer select-none">{q}</summary>
                            <p className="mt-2 text-gray-700">{a}</p>
                        </details>
                    ))}
                </div>
            </Section>
        </div>
    );
}