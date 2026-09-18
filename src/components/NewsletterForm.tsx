"use client";

import { useState, FormEvent } from "react";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { message?: string; error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Er ging iets mis. Probeer het later opnieuw.");
        return;
      }
      setStatus("ok");
      setMessage(data.message || "Bedankt! Je bent aangemeld.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Netwerkfout. Controleer je verbinding.");
    }
  }

  return (
    <div
      className={
        compact
          ? ""
          : "rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8"
      }
    >
      {!compact && (
        <>
          <h2 className="text-xl font-semibold text-slate-900">Nieuwsbrief</h2>
          <p className="mt-2 text-sm text-slate-600">
            Krijg af en toe een praktische tip over sparen, budgetteren of beleggen. Geen spam,
            uitschrijven kan altijd.
          </p>
        </>
      )}

      <form onSubmit={onSubmit} className={`flex flex-col gap-3 sm:flex-row ${compact ? "" : "mt-5"}`}>
        <label htmlFor="newsletter-email" className="sr-only">
          E-mailadres
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="jij@voorbeeld.nl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="w-full flex-1 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none ring-teal-700/30 placeholder:text-slate-400 focus:border-teal-600 focus:ring-2"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:opacity-60"
        >
          {status === "loading" ? "Bezig…" : "Aanmelden"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-3 text-sm ${status === "ok" ? "text-teal-800" : "text-red-700"}`}
          role="status"
        >
          {message}
        </p>
      )}
    </div>
  );
}
