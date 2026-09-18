import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".mp4": "video/mp4",
  ".webp": "image/webp",
};

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> },
) {
  const parts = (await ctx.params).path;
  const rel = parts.join("/");
  const key = ("media/" + rel).replace(/\//g, "_") + ".b64.txt";
  const file = path.join(process.cwd(), "src/data/media-b64", key);
  try {
    const b64 = await readFile(file, "utf8");
    const buf = Buffer.from(b64, "base64");
    const ext = path.extname(rel).toLowerCase();
    return new NextResponse(buf, {
      headers: {
        "Content-Type": TYPES[ext] || "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable",
        "Accept-Ranges": "bytes",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
