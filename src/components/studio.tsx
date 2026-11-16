import { useEffect, useMemo, useState } from "react";
import { flashcards, knowledge, podcastLines, prompts } from "@/data/content";
import { readJson, writeJson } from "@/lib/storage";

const CARD_KEY = "suraksha-cards";

export function StudyStudio() {
  const [query, setQuery] = useState("How do I spot a fake KYC SMS?");
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [marks, setMarks] = useState<Record<string, "learning" | "mastered">>({});
  const [speaking, setSpeaking] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMarks(readJson(CARD_KEY, {}));
  }, []);

  const hits = useMemo(() => {
    const q = query.toLowerCase().split(/\s+/).filter((w) => w.length > 3);
    const scored = knowledge.map((k) => {
      const hay = `${k.title} ${k.keywords} ${k.body} ${k.topic}`.toLowerCase();
      const n = q.reduce((acc, w) => acc + (hay.includes(w) ? 1 : 0), 0);
      return { k, n };
    });
    const strong = scored.filter((s) => s.n > 0).sort((a, b) => b.n - a.n);
    return (strong.length ? strong : scored.slice(0, 3)).slice(0, 3).map((s) => s.k);
  }, [query]);

  const card = flashcards[idx];
  const mastered = Object.values(marks).filter((m) => m === "mastered").length;

  function mark(status: "learning" | "mastered") {
    const next = { ...marks, [card.id]: status };
    setMarks(next);
    writeJson(CARD_KEY, next);
    setFlipped(false);
    setIdx((i) => (i + 1) % flashcards.length);
  }

  function listen() {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const text = podcastLines.map((l) => `${l.who}. ${l.text}`).join(" ");
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    utter.onend = () => {
      setSpeaking(false);
      setProgress(100);
    };
    utter.onstart = () => setSpeaking(true);
    setProgress(8);
    const timer = window.setInterval(() => {
      setProgress((p) => (p >= 92 ? p : p + 4));
    }, 700);
    utter.onend = () => {
      window.clearInterval(timer);
      setSpeaking(false);
      setProgress(100);
    };
    window.speechSynthesis.speak(utter);
  }

  function stop() {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }

  return (
    <section id="studio" className="border-y border-[#1F2937] bg-[#0c1220]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">CyberNote</p>
        <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Study studio</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          A local notebook over the built-in briefing. Nothing is sent to a server. Listening uses your browser’s speech engine.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-4">
            <h3 className="text-sm font-medium text-white">Source briefing</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Phishing steals secrets with fake urgency. Digital arrest isolates you on a video call and demands a transfer. Malicious apps request rights that do not match their job, especially SMS and accessibility.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Phishing", "Digital arrest", "Malicious apps", "1930"].map((chip) => (
                <button key={chip} type="button" onClick={() => setQuery(chip)} className="rounded-full border border-[#1F2937] px-3 py-1 text-xs text-[#38BDF8]">
                  {chip}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-4">
            <h3 className="text-sm font-medium text-white">Ask the briefing</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {prompts.map((p) => (
                <button key={p} type="button" onClick={() => setQuery(p)} className="rounded-lg bg-[#090d16] px-2 py-1 text-left text-xs text-slate-300">
                  {p}
                </button>
              ))}
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-3 w-full rounded-lg border border-[#1F2937] bg-[#090d16] px-3 py-2 text-sm text-white outline-none focus:border-[#38BDF8]"
              aria-label="Search the briefing"
            />
            <div className="mt-3 space-y-3">
              {hits.map((h) => (
                <article key={h.id} className="text-sm">
                  <p className="text-[#38BDF8]">
                    {h.topic} · {h.title}
                  </p>
                  <p className="mt-1 text-slate-300">{h.body}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-4">
              <div className="flex items-center justify-between text-sm">
                <h3 className="font-medium text-white">Flashcards</h3>
                <span className="text-slate-400">
                  {mastered}/{flashcards.length} mastered
                </span>
              </div>
              <button type="button" onClick={() => setFlipped((f) => !f)} className="flip-scene mt-3 block w-full text-left">
                <div className={`flip-card relative min-h-36 ${flipped ? "is-flipped" : ""}`}>
                  <div className="flip-face rounded-xl bg-[#090d16] p-4 text-sm text-white">{card.front}</div>
                  <div className="flip-face flip-back absolute inset-0 rounded-xl bg-[#0b2433] p-4 text-sm text-slate-100">{card.back}</div>
                </div>
              </button>
              <p className="mt-2 text-xs text-slate-500">Card {idx + 1} of {flashcards.length}. Tap the card to flip.</p>
              <div className="mt-3 flex gap-2">
                <button type="button" onClick={() => mark("learning")} className="rounded-lg border border-[#F59E0B]/50 px-3 py-2 text-xs text-[#F59E0B]">
                  Still learning
                </button>
                <button type="button" onClick={() => mark("mastered")} className="rounded-lg bg-[#38BDF8] px-3 py-2 text-xs font-medium text-[#090d16]">
                  Mastered
                </button>
              </div>
            </div>
            <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-4">
              <h3 className="text-sm font-medium text-white">Two-minute briefing</h3>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#090d16]">
                <div className="h-full bg-[#38BDF8]" style={{ width: `${progress}%` }} />
              </div>
              <div className="mt-3 max-h-48 space-y-2 overflow-auto text-sm">
                {podcastLines.map((l, i) => (
                  <p key={i}>
                    <span className="text-[#38BDF8]">{l.who}: </span>
                    <span className="text-slate-300">{l.text}</span>
                  </p>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <button type="button" onClick={listen} className="rounded-lg bg-white/10 px-3 py-2 text-xs text-white">
                  {speaking ? "Restart listen" : "Listen"}
                </button>
                <button type="button" onClick={stop} className="rounded-lg px-3 py-2 text-xs text-slate-400">
                  Stop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
