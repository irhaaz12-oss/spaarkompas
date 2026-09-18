import { NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

type Subscriber = {
  email: string;
  subscribedAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "subscribers.json");

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function readSubscribers(): Promise<Subscriber[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as Subscriber[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = (body.email || "").trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Vul een geldig e-mailadres in." }, { status: 400 });
    }

    await mkdir(DATA_DIR, { recursive: true });
    const list = await readSubscribers();

    if (list.some((s) => s.email === email)) {
      return NextResponse.json({ message: "Dit e-mailadres staat al op de lijst. Bedankt!" });
    }

    list.push({ email, subscribedAt: new Date().toISOString() });
    await writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf8");

    console.log(`[newsletter] nieuwe aanmelding: ${email}`);

    return NextResponse.json({
      message: "Bedankt! Je bent aangemeld voor de nieuwsbrief.",
    });
  } catch (err) {
    console.error("[newsletter] fout:", err);
    return NextResponse.json(
      { error: "Opslaan mislukt. Probeer het later opnieuw." },
      { status: 500 },
    );
  }
}
