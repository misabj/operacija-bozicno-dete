import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const raw = process.env.RESEND_API_KEY ?? "";
  const trimmed = raw.trim();
  const hasKey = !!raw;
  const hasEdgeWhitespace = hasKey && raw !== trimmed;

  res.status(200).json({
    env: process.env.VERCEL_ENV || "unknown",
    has_RESEND_API_KEY: hasKey,
    key_preview: hasKey ? raw.slice(0,4)+"…"+raw.slice(-4) : null,
    has_edge_whitespace: hasEdgeWhitespace, // true => u Vercel UI je upisan space/newline
    contact_from: process.env.CONTACT_FROM || null,
    contact_to: process.env.CONTACT_TO || null
  });
}