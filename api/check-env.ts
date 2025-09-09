import type { VercelRequest, VercelResponse } from "@vercel/node";
export default function handler(req: VercelRequest, res: VercelResponse) {
  const k = process.env.RESEND_API_KEY || "";
  res.status(200).json({
    env: process.env.VERCEL_ENV,
    has_RESEND_API_KEY: !!k,
    RESEND_head_tail: k ? k.slice(0,4)+"…"+k.slice(-4) : null,
    CONTACT_FROM: process.env.CONTACT_FROM || null,
    CONTACT_TO: process.env.CONTACT_TO || null,
  });
}

