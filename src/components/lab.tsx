import { useMemo, useState } from "react";
import { appSims, arrestLines, phishInbox, type PhishItem } from "@/data/content";

type Tab = "phish" | "arrest" | "apk";

export function SimulatorLab() {
  const [tab, setTab] = useState<Tab>("phish");
  return (
    <section id="lab" className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">Threat simulator lab</p>
      <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Practice the decision before it is real</h2>
      <div className="mt-6 flex flex-wrap gap-2">
        {(
          [
            ["phish", "Spot the phish"],
            ["arrest", "Digital arrest decoder"],
            ["apk", "APK permission inspector"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`rounded-full px-4 py-2 text-sm ${tab === id ? "bg-[#38BDF8] text-[#090d16]" : "border border-[#1F2937] text-slate-300"}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tab === "phish" && <PhishTab />}
        {tab === "arrest" && <ArrestTab />}
        {tab === "apk" && <ApkTab />}
      </div>
    </section>
  );
}

function PhishTab() {
  const [picked, setPicked] = useState<Record<string, "phishing" | "safe">>({});
  return (
    <div className="grid gap-4">
      {phishInbox.map((item) => (
        <PhishCard key={item.id} item={item} choice={picked[item.id]} onPick={(v) => setPicked((s) => ({ ...s, [item.id]: v }))} />
      ))}
    </div>
  );
}

function PhishCard({ item, choice, onPick }: { item: PhishItem; choice?: "phishing" | "safe"; onPick: (v: "phishing" | "safe") => void }) {
  const correct = choice === item.verdict;
  return (
    <article className="rounded-2xl border border-[#1F2937] bg-[#111827] p-4 md:p-5">
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
        <span className="rounded bg-white/5 px-2 py-0.5">{item.channel}</span>
        <span>From {item.from}</span>
      </div>
      <h3 className="mt-2 font-medium text-white">{item.subject}</h3>
      <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-300">{item.body}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => onPick("safe")} className="rounded-lg border border-[#1F2937] px-3 py-2 text-sm text-white hover:border-[#38BDF8]">
          Safe
        </button>
        <button type="button" onClick={() => onPick("phishing")} className="rounded-lg border border-[#1F2937] px-3 py-2 text-sm text-white hover:border-[#F59E0B]">
          Phishing
        </button>
      </div>
      {choice && (
        <div className={`mt-4 rounded-xl border p-4 ${correct ? "border-emerald-700/60 bg-emerald-950/40" : "border-[#EF4444]/50 bg-red-950/30"}`}>
          <p className="text-sm font-medium text-white">{correct ? "Correct." : "Not quite."} This message is {item.verdict}.</p>
          <ul className="mt-3 space-y-2">
            {item.flags.map((f) => (
              <li key={f.label} className="text-sm">
                <span className="text-[#F59E0B]">{f.label}. </span>
                <span className="text-slate-300">{f.detail}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-slate-400">{item.tactic}</p>
        </div>
      )}
    </article>
  );
}

function ArrestTab() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <div className="rounded-2xl border border-[#EF4444]/40 bg-[#EF4444]/10 p-4 text-sm leading-relaxed text-red-100">
        Law enforcement, the CBI, and the police never conduct arrests or interrogations over WhatsApp or Skype video calls.
      </div>
      <div className="mt-4 grid gap-3">
        {arrestLines.map((row, i) => {
          const flipped = open === i;
          return (
            <button
              key={row.line}
              type="button"
              onClick={() => setOpen(flipped ? null : i)}
              className="rounded-2xl border border-[#1F2937] bg-[#111827] p-4 text-left"
            >
              <p className="text-xs uppercase tracking-wider text-slate-500">{flipped ? "Legal reality" : "Scam script"} · tap to flip</p>
              <p className="mt-2 text-white">{flipped ? row.truth : `“${row.line}”`}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ApkTab() {
  const [id, setId] = useState(appSims[0].id);
  const app = appSims.find((a) => a.id === id) ?? appSims[0];
  const score = useMemo(() => app.permissions.filter((p) => p.risk === "high").length, [app]);
  const label = score === 0 ? "Low risk" : score < 3 ? "Elevated" : "Critical";
  const color = score === 0 ? "#34d399" : score < 3 ? "#F59E0B" : "#EF4444";
  return (
    <div className="grid gap-4 md:grid-cols-[220px_1fr]">
      <div className="flex flex-row gap-2 md:flex-col">
        {appSims.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => setId(a.id)}
            className={`rounded-xl border px-3 py-3 text-left text-sm ${a.id === id ? "border-[#38BDF8] bg-[#38BDF8]/10 text-white" : "border-[#1F2937] text-slate-300"}`}
          >
            {a.name}
          </button>
        ))}
      </div>
      <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-5">
        <p className="text-xs text-slate-500">Android install preview</p>
        <h3 className="mt-1 text-xl text-white">{app.name}</h3>
        <p className="mt-1 text-sm text-slate-400">Claims: {app.claim}</p>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-300">Threat risk meter</span>
            <span style={{ color }}>{label}</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#090d16]">
            <div className="h-full rounded-full" style={{ width: `${Math.max(12, (score / 4) * 100)}%`, background: color }} />
          </div>
          <p className="mt-2 text-sm text-slate-400">
            {score > 0
              ? "Accessibility abuse can watch your banking app and steal OTPs. Overlay permission can fake the PIN screen. The claimed utility does not need these rights."
              : "Permissions match the stated job. Still install only from a store you trust."}
          </p>
        </div>
        <ul className="mt-4 space-y-2">
          {app.permissions.map((p) => (
            <li key={p.name} className="rounded-xl border border-[#1F2937] bg-[#090d16] p-3 text-sm">
              <span className={p.risk === "high" ? "text-[#EF4444]" : "text-emerald-300"}>{p.name}</span>
              <p className="mt-1 text-slate-400">{p.why}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
