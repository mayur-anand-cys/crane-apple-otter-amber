import { useEffect, useState } from "react";
import { checklist, quiz } from "@/data/content";
import { readJson, writeJson } from "@/lib/storage";

const CHECK_KEY = "suraksha-checks";

export function QuizAndCertificate() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const q = quiz[step];

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (step + 1 >= quiz.length) setDone(true);
    else {
      setStep((s) => s + 1);
      setPicked(null);
    }
  }

  return (
    <section id="quiz" className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">Readiness</p>
      <h2 className="mt-2 text-2xl font-semibold text-white">Six scenarios</h2>
      {!done ? (
        <div className="mt-6 max-w-2xl rounded-2xl border border-[#1F2937] bg-[#111827] p-5">
          <p className="text-xs text-slate-500">
            Question {step + 1} of {quiz.length}
          </p>
          <h3 className="mt-2 text-lg text-white">{q.prompt}</h3>
          <div className="mt-4 space-y-2">
            {q.options.map((opt, i) => {
              const show = picked !== null;
              const right = i === q.answer;
              const mine = i === picked;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => choose(i)}
                  className={`block w-full rounded-xl border px-3 py-3 text-left text-sm ${
                    show && right
                      ? "border-emerald-600 bg-emerald-950/40 text-white"
                      : show && mine
                        ? "border-[#EF4444] bg-red-950/40 text-white"
                        : "border-[#1F2937] text-slate-200"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <div className="mt-4">
              <p className="text-sm text-slate-300">{q.why}</p>
              <button type="button" onClick={next} className="mt-3 rounded-lg bg-[#38BDF8] px-4 py-2 text-sm font-medium text-[#090d16]">
                {step + 1 === quiz.length ? "See result" : "Next"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-6 max-w-2xl">
          <p className="text-white">
            Score {score} / {quiz.length}. {score >= 5 ? "You can brief the family." : "Review the red items in the lab, then try again."}
          </p>
          <label className="mt-4 block text-sm text-slate-400">
            Name on the certificate
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-[#1F2937] bg-[#111827] px-3 py-2 text-white"
              placeholder="Your name"
            />
          </label>
          <button type="button" onClick={() => window.print()} className="no-print mt-3 rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#090d16]">
            Print certificate
          </button>
          <button
            type="button"
            onClick={() => {
              setDone(false);
              setStep(0);
              setPicked(null);
              setScore(0);
            }}
            className="no-print ml-2 mt-3 rounded-lg px-4 py-2 text-sm text-slate-300"
          >
            Retake
          </button>
          <article id="certificate" className="mt-6 rounded-2xl border-2 border-[#38BDF8] bg-white p-8 text-center text-slate-900">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-700">Cyber Suraksha</p>
            <h3 className="mt-2 text-2xl font-semibold">Readiness certificate</h3>
            <p className="mt-4 text-lg">{name.trim() || "Participant"}</p>
            <p className="mt-2 text-sm">
              Completed a scenario check on phishing, digital arrest, and malicious applications. Score {score} of {quiz.length}.
            </p>
            <p className="mt-4 text-xs text-slate-500">Awareness practice only. Not a professional certification. Helpline 1930.</p>
          </article>
        </div>
      )}
    </section>
  );
}

export function FamilyChecklist() {
  const [on, setOn] = useState<Record<string, boolean>>({});
  useEffect(() => {
    setOn(readJson(CHECK_KEY, {}));
  }, []);
  const count = checklist.filter((c) => on[c.id]).length;
  const pct = Math.round((count / checklist.length) * 100);

  function toggle(id: string) {
    const next = { ...on, [id]: !on[id] };
    setOn(next);
    writeJson(CHECK_KEY, next);
  }

  return (
    <section id="checklist" className="border-t border-[#1F2937] bg-[#0c1220]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">At home</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Family cyber hygiene</h2>
        <div className="mt-4 max-w-xl">
          <div className="flex justify-between text-sm text-slate-400">
            <span>
              {count} of {checklist.length}
            </span>
            <span>{pct}%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-[#111827]">
            <div className="h-full rounded-full bg-[#38BDF8]" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <ul className="mt-6 grid gap-2 md:grid-cols-2">
          {checklist.map((c) => (
            <li key={c.id}>
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#1F2937] bg-[#111827] p-3 text-sm text-slate-200">
                <input type="checkbox" checked={!!on[c.id]} onChange={() => toggle(c.id)} className="mt-1" />
                {c.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
