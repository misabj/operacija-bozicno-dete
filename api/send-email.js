import { Resend } from "resend";
export default async function handler(req, res) {
    if (req.method !== "POST")
        return res.status(405).json({ ok: false, error: "Method not allowed" });
    const { name, email, subject, message, honeypot } = req.body || {};
    if (honeypot)
        return res.status(200).json({ ok: true });
    if (!name || !email || !message)
        return res
            .status(400)
            .json({ ok: false, error: "Nedostaju obavezna polja" });
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const to = process.env.CONTACT_TO || "info@operacijabozicnodete.com";
        await resend.emails.send({
            from: process.env.CONTACT_FROM ||
                "Operacija Božićno Dete <noreply@operacijabozicnodete.com>",
            to,
            replyTo: email, // ✅ ispravno (string | string[])
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
        return res.status(200).json({ ok: true });
    }
    catch (err) {
        return res
            .status(500)
            .json({ ok: false, error: err?.message || "Greška pri slanju" });
    }
}
function escapeHtml(s) {
    return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}
