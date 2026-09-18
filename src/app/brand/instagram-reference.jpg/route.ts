import { INSTAGRAM_REFERENCE_JPEG_BASE64 } from "@/lib/instagramReferenceBase64";

export const runtime = "nodejs";

export function GET() {
  const buf = Buffer.from(INSTAGRAM_REFERENCE_JPEG_BASE64, "base64");
  return new Response(buf, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400, immutable",
    },
  });
}
