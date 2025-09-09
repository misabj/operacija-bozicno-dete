import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  try {
    const { name, email, subject, message, honeypot } = (req.body as any) || {};
    if (honeypot) return res.status(200).json({ ok: true });
    if (!name || !email || !message) return res.status(400).json({ ok: false, error: "Nedostaju obavezna polja" });

    const key = process.env.RESEND_API_KEY;
    if (!key) return res.status(500).json({ ok: false, error: "RESEND_API_KEY is missing on server" });

    const resend = new Resend(key);
    const from = process.env.CONTACT_FROM || "Operacija Božićno Dete <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO || "info@operacijabozicnodete.com";

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: subject || `Kontakt sa sajta — ${name}`,
      text: `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`,
    });

    if (error) {
      const msg = (typeof error === "string" ? error : (error as any)?.message) || JSON.stringify(error);
      return res.status(500).json({ ok: false, error: msg });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || "Greška pri slanju" });
  }
}