
"use client";
import React, { useState } from "react";
import Pill from "../components/Pill";
import Section from "../components/Section";
import LangToggle from "../components/LangToggle";
import { LOCALES, DATA, type LocaleKey } from "../lib/data";

export default function Page() {
  const [lang, setLang] = useState<LocaleKey>(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const initial = (url.searchParams.get("lang") as LocaleKey) || "en";
      return initial === "id" ? "id" : "en";
    }
    return "en";
  });

  const t = LOCALES[lang];
  const meta = t.meta;

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-semibold tracking-tight">{meta.name}</a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:underline">{t.ui.projects}</a>
            <a href="#experience" className="hover:underline">{t.ui.experience}</a>
            <a href="#skills" className="hover:underline">{t.ui.skills}</a>
            <a href="#contact" className="hover:underline">{t.ui.contact}</a>
            <LangToggle lang={lang} setLang={setLang} />
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-4 py-10">
        <section className="mb-10">
          <h1 className="text-3xl font-bold leading-tight">{meta.title}</h1>
          <p className="mt-3 max-w-2xl text-[15px] text-neutral-700">{meta.summary}</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-neutral-600">
            <span>{meta.location}</span>
            <span>•</span>
            <a className="hover:underline" href={`mailto:${meta.email}`}>{meta.email}</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {meta.socials.map((s: any) => (
              <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="text-sm underline">{s.label}</a>
            ))}
          </div>
        </section>

        <Section title={t.ui.projects}>
          <div id="projects" className="grid gap-6 md:grid-cols-2">
            {DATA.projects.length === 0 && (<p className="text-sm text-neutral-600">{t.ui.emptyProjects}</p>)}
            {DATA.projects.map((p: any) => (
              <article key={p.name} className="rounded-2xl border p-6">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                {p.tagline && <p className="mt-1 text-neutral-600">{p.tagline}</p>}
                {p.desc && <p className="mt-3 text-sm text-neutral-700">{p.desc}</p>}
                {p.tech && (<div className="mt-3 flex flex-wrap gap-2">{p.tech.map((tt: string) => (<Pill key={tt}>{tt}</Pill>))}</div>)}
                {p.links && (<div className="mt-4 flex gap-3 text-sm">{p.links.map((l: any) => (<a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="underline">{l.label}</a>))}</div>)}
              </article>
            ))}
          </div>
        </Section>

        <Section title={t.ui.experience}>
          <div id="experience" className="space-y-8">
            {DATA.experience.map((e: any) => (
              <div key={`${e.company}-${e.role}`} className="rounded-2xl border p-6">
                <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                  <h3 className="text-base font-semibold">{e.role} · {e.company}</h3>
                  <span className="text-xs text-neutral-500">{e.date}</span>
                </div>
                {e.tech && (<div className="mt-2 flex flex-wrap gap-2">{e.tech.map((tt: string) => (<Pill key={tt}>{tt}</Pill>))}</div>)}
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-800">
                  {e.bullets.map((b: string, i: number) => (<li key={i}>{b}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t.ui.skills}>
          <div id="skills" className="flex flex-wrap gap-2">
            {DATA.skills.map((s: string) => (<Pill key={s}>{s}</Pill>))}
          </div>
        </Section>

        <Section title={t.ui.contact}>
          <div id="contact" className="rounded-2xl border p-6">
            <p className="text-sm text-neutral-700">
              {lang === "en" ? "Want to collaborate or have an opportunity? Reach out via email or this form."
                              : "Ingin kolaborasi atau ada peluang? Hubungi lewat email atau form ini."}
            </p>
            <form
              className="mt-4 grid gap-3"
              action="https://formspree.io/f/your-id"  // TODO: replace with real endpoint
              method="POST"
              onSubmit={(e) => { alert(lang === "en" ? "Form submitted (demo)." : "Form terkirim (demo)."); }}
            >
              <input className="rounded-xl border p-2" name="name" placeholder={lang === "en" ? "Your name" : "Nama Anda"} required />
              <input className="rounded-xl border p-2" type="email" name="email" placeholder={lang === "en" ? "Your email" : "Email Anda"} required />
              <textarea className="rounded-xl border p-2" name="message" rows={4} placeholder={lang === "en" ? "Your message" : "Pesan Anda"} required />
              <button className="w-fit rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50" type="submit">{t.ui.send}</button>
            </form>
            <div className="mt-3 text-sm">
              <a className="underline" href={`mailto:${meta.email}`}>{t.ui.email}: {meta.email}</a>
            </div>
          </div>
        </Section>

        <footer className="mt-12 border-t py-6 text-center text-xs text-neutral-500">
          {`${LOCALES[lang].meta.name} · ${lang === "en" ? "Education:" : "Pendidikan:"} ${DATA.education.school} (${DATA.education.date}) — ${DATA.education.degree}`}
        </footer>
      </main>
    </div>
  );
}
