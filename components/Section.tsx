
import React from "react";
export default function Section({ title, children }: { title: string; children: React.ReactNode; }) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
