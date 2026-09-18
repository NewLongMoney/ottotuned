import { NextRequest, NextResponse } from "next/server";
import { readFile, readdir } from "fs/promises";
import path from "path";

const TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".mp4": "video/mp4",
  ".webp": "image/webp",
};

async function readB64Asset(key: string): Promise<string | null> {
  const dir = path.join(process.cwd(), "src/data/media-b64");
  const single = path.join(dir, key);
  try {
    return await readFile(single, "utf8");
  } catch {
    // fall through to parts
  }
  try {
    const files = await readdir(dir);
    const prefix = key + ".part";
    const parts = files
      .filter((n) => n.startsWith(prefix))
      .sort();
    if (!parts.length) return null;
    const chunks: string[] = [];
    for (const name of parts) {
      chunks.push(await readFile(path.join(dir, name), "utf8"));
    }
    return chunks.join("");
  } catch {
    return null;
  }
}

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> },
) {
  const parts = (await ctx.params).path;
  const rel = parts.join("/");
  const key = ("media/" + rel).replace(/\//g, "_") + ".b64.txt";
  const b64 = await readB64Asset(key);
  if (!b64) {
    return new NextResponse("Not found", { status: 404 });
  }
  const buf = Buffer.from(b64, "base64");
  const ext = path.extname(rel).toLowerCase();
  return new NextResponse(buf, {
    headers: {
      "Content-Type": TYPES[ext] || "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
      "Accept-Ranges": "bytes",
    },
  });
}
