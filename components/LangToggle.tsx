
"use client";
import React from "react";
import type { LocaleKey } from "@/lib/data";
export default function LangToggle({ lang, setLang }: { lang: LocaleKey; setLang: (l: LocaleKey) => void; }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <button onClick={() => setLang("en")} className={`px-2 py-1 ${lang === "en" ? "font-semibold underline" : "opacity-60 hover:opacity-100"}`} aria-pressed={lang === "en"}>EN</button>
      <span className="opacity-30">/</span>
      <button onClick={() => setLang("id")} className={`px-2 py-1 ${lang === "id" ? "font-semibold underline" : "opacity-60 hover:opacity-100"}`} aria-pressed={lang === "id"}>ID</button>
    </div>
  );
}
