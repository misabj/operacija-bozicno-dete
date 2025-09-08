import { useState } from "react";
import Section from "../components/Section";
import { copy } from "../content/copy";
import { GALLERY } from "../content/images";
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type FormState = "idle" | "sending" | "sent" | "error";

export default function Kontakt() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // hidden anti-spam
  });
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.message) {
      setError("Popunite ime, email i poruku.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError("Unesite ispravan email.");
      return;
    }

    setState("sending");
    try {
        const url = new URL("/api/send-email", window.location.origin).toString();
        const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form),
        });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Greška pri slanju");
      }
      setState("sent");
      setForm({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch (err: any) {
      setState("error");
      setError(err?.message || "Greška pri slanju");
    }
  };

  return (
    <Section title="Kontakt" subtitle="Pišite nam — javimo se u najkraćem roku." className="py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* FORM */}
        <div className="rounded-3xl border bg-white p-6 shadow-sm card-gradient">
          <form onSubmit={onSubmit} className="space-y-4">
            {/* honeypot (ne dirati) */}
            <input type="text" name="honeypot" value={form.honeypot} onChange={onChange} className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Ime i prezime *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Vaše ime"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="vaš@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Predmet</label>
              <input
                name="subject"
                value={form.subject}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Predmet poruke (opciono)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Poruka *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={6}
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Kako možemo da pomognemo?"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded-xl border bg-red-50 p-3 text-sm text-red-700">
                <AlertCircle className="w-4 h-4" /> {error}
              </div>
            )}

            <button
              type="submit"
              disabled={state === "sending"}
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-5 py-2.5 font-semibold hover:bg-emerald-700 disabled:opacity-60"
            >
              {state === "sending" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}
              {state === "sending" ? "Slanje…" : "Pošalji poruku"}
            </button>

            {state === "sent" && (
              <div className="flex items-center gap-2 text-emerald-700 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Poruka je poslata. Hvala!
              </div>
            )}

            <p className="text-xs text-gray-500">Možeš i direktno: <a className="underline" href={`mailto:${copy.contactMail}`}>{copy.contactMail}</a></p>
          </form>
        </div>

        {/* FOTO + brzi kontakt */}
        <div className="rounded-3xl border bg-white p-3 shadow-sm card-gradient">
          <img src={GALLERY[0].src} alt={GALLERY[0].alt} className="rounded-2xl h-64 w-full object-cover" />
          <div className="mt-4 rounded-2xl border bg-emerald-50/60 p-4 text-sm text-emerald-900">
            <div className="font-semibold">Brzi kontakt</div>
            <div className="mt-2">
              Email: <a className="underline" href={`mailto:${copy.contactMail}`}>{copy.contactMail}</a>
            </div>
            <div className="mt-1 text-gray-700">Odgovaramo obično u roku od 1–2 radna dana.</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
