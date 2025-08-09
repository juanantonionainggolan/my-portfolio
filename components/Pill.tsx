
import React from "react";
export default function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-block rounded-full border px-3 py-1 text-sm">{children}</span>;
}
