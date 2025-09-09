import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const r = await fetch("https://api.resend.com/domains", {
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` }
  });
  const text = await r.text();
  res.status(r.status).json({ status: r.status, ok: r.ok, text });
}