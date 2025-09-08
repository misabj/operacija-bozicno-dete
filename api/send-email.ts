import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  const { name, email, subject, message, honeypot } = (req.body as any) || {};
  if (honeypot) return res.status(200).json({ ok: true });
  if (!name || !email || !message) return res.status(400).json({ ok: false, error: "Nedostaju obavezna polja" });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ ok: false, error: "RESEND_API_KEY is missing on server" });

  const resend = new Resend(apiKey);

  // Obavezno: koristi From koji SIGURNO prolazi bez verifikacije domena
  const from = process.env.CONTACT_FROM || "Operacija Božićno Dete <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO || "nikolic.milos86@gmail.com"; // po želji promeni

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: subject || `Kontakt sa sajta — ${name}`,
      text: `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`,
      html: `
        <div style="font-family:system-ui,Arial,sans-serif;line-height:1.5">
          <h2>Kontakt poruka sa sajta</h2>
          <p><b>Ime:</b> ${escapeHtml(name)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Predmet:</b> ${escapeHtml(subject || "—")}</p>
          <hr/>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) return res.status(500).json({ ok: false, error: error.message });

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || "Greška pri slanju" });
  }
}

function escapeHtml(s: string) {
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
