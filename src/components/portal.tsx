import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  ClipboardCheck,
  House,
  Info,
  LayoutGrid,
  Phone,
  Shield,
  Siren,
  Users,
} from "lucide-react";
import { FamilyChecklist, QuizAndCertificate } from "@/components/assess";
import { SimulatorLab } from "@/components/lab";
import { Navbar } from "@/components/shell";
import { StudyStudio } from "@/components/studio";
import { firstHour, team, threats } from "@/data/portal";

const tabs = [
  { id: "home", label: "Home", icon: House },
  { id: "lab", label: "Lab", icon: Shield },
  { id: "studio", label: "Study", icon: BookOpen },
  { id: "quiz", label: "Quiz", icon: ClipboardCheck },
  { id: "family", label: "Family", icon: Users },
  { id: "db", label: "Threats", icon: LayoutGrid },
  { id: "report", label: "Report", icon: Phone },
  { id: "about", label: "Team", icon: Info },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function Portal() {
  const [tab, setTab] = useState<TabId>("home");
  return (
    <div className="min-h-screen md:pl-56">
      <aside className="no-print fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-[#1F2937] bg-[#0c1220] md:flex">
        <div className="flex items-center gap-2 px-4 py-5 font-semibold text-white">
          <Shield className="h-5 w-5 text-[#38BDF8]" />
          Cyber Suraksha
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm ${tab === t.id ? "bg-[#38BDF8]/15 text-[#38BDF8]" : "text-slate-300 hover:bg-white/5"}`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </nav>
        <p className="px-4 py-4 text-xs text-slate-500">Helpline 1930</p>
      </aside>
      <div className="pb-24 md:pb-8">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {tab === "home" && <Home onOpen={setTab} />}
            {tab === "lab" && <SimulatorLab />}
            {tab === "studio" && <StudyStudio />}
            {tab === "quiz" && <QuizAndCertificate />}
            {tab === "family" && <FamilyChecklist />}
            {tab === "db" && <ThreatDatabase />}
            {tab === "report" && <ReportHub />}
            {tab === "about" && <About />}
          </motion.div>
        </AnimatePresence>
      </div>
      <nav className="no-print fixed inset-x-0 bottom-0 z-30 flex gap-1 overflow-x-auto border-t border-[#1F2937] bg-[#0c1220]/95 px-2 py-2 backdrop-blur md:hidden">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`flex min-w-16 flex-col items-center gap-1 rounded-lg px-2 py-1 text-[10px] ${tab === t.id ? "text-[#38BDF8]" : "text-slate-400"}`}
          >
            <t.icon className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

function Home({ onOpen }: { onOpen: (id: TabId) => void }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">VTU community project</p>
      <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
        A practice desk for phishing, digital arrest, and malicious apps.
      </h1>
      <p className="mt-4 max-w-2xl text-slate-400">
        Built for families, classrooms, and workplaces. Every exercise stays on this device.
      </p>
      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#F59E0B]/40 bg-[#F59E0B]/10 p-4">
        <Siren className="h-5 w-5 text-[#F59E0B]" />
        <div>
          <p className="text-sm font-medium text-white">Briefing level: elevated</p>
          <p className="text-sm text-slate-300">This is a teaching focus, not a live feed. UPI phishing and digital-arrest calls are the scenarios to practise this week.</p>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {(
          [
            ["lab", "Threat lab", "Classify messages, decode arrest scripts, inspect app permissions."],
            ["studio", "Study studio", "Search the briefing, flip cards, listen to the two-minute script."],
            ["quiz", "Readiness quiz", "Six scenarios and a printable certificate."],
            ["report", "Report hub", "1930, the first hour, and who to call at the bank."],
          ] as const
        ).map(([id, title, blurb]) => (
          <button key={id} type="button" onClick={() => onOpen(id)} className="rounded-2xl border border-[#1F2937] bg-[#111827] p-4 text-left">
            <p className="font-medium text-white">{title}</p>
            <p className="mt-2 text-sm text-slate-400">{blurb}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

function ThreatDatabase() {
  const [q, setQ] = useState("");
  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return threats;
    return threats.filter((t) => `${t.name} ${t.tags} ${t.summary}`.toLowerCase().includes(s));
  }, [q]);
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h2 className="text-2xl font-semibold text-white">Threat database</h2>
      <p className="mt-2 text-sm text-slate-400">Short India-focused notes. Search a scam name or a word like UPI, job, or deepfake.</p>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search scams"
        className="mt-4 w-full max-w-md rounded-lg border border-[#1F2937] bg-[#111827] px-3 py-2 text-sm text-white outline-none focus:border-[#38BDF8]"
      />
      <div className="mt-4 grid gap-3">
        {rows.map((t) => (
          <article key={t.name} className="rounded-2xl border border-[#1F2937] bg-[#111827] p-4">
            <h3 className="font-medium text-white">{t.name}</h3>
            <p className="mt-2 text-sm text-slate-300">{t.summary}</p>
            <p className="mt-2 text-sm text-slate-400">{t.defense}</p>
          </article>
        ))}
        {rows.length === 0 && <p className="text-sm text-slate-500">No match. Try “UPI” or “arrest”.</p>}
      </div>
    </section>
  );
}

function ReportHub() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h2 className="text-2xl font-semibold text-white">Report hub</h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-400">What to do in the first hour after money moves or a caller will not let you hang up.</p>
      <ol className="mt-4 space-y-2">
        {firstHour.map((step, i) => (
          <li key={step} className="rounded-xl border border-[#1F2937] bg-[#111827] px-4 py-3 text-sm text-slate-200">
            <span className="text-[#38BDF8]">{i + 1}. </span>
            {step}
          </li>
        ))}
      </ol>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <a href="tel:1930" className="rounded-2xl border border-[#EF4444]/40 bg-[#EF4444]/10 p-4">
          <p className="text-2xl font-semibold text-[#EF4444]">1930</p>
          <p className="text-sm text-slate-400">National cybercrime helpline</p>
        </a>
        <a href="https://cybercrime.gov.in" className="rounded-2xl border border-[#38BDF8]/40 bg-[#38BDF8]/10 p-4">
          <p className="text-lg font-semibold text-[#38BDF8]">cybercrime.gov.in</p>
          <p className="text-sm text-slate-400">File the report online</p>
        </a>
        <a href="tel:112" className="rounded-2xl border border-[#F59E0B]/40 bg-[#F59E0B]/10 p-4">
          <p className="text-2xl font-semibold text-[#F59E0B]">112</p>
          <p className="text-sm text-slate-400">If you are in immediate danger</p>
        </a>
      </div>
      <p className="mt-4 text-sm text-slate-400">For the bank, use the number printed on the card or inside the official app. Do not use a number from the suspicious call.</p>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h2 className="text-2xl font-semibold text-white">Team Cyber Suraksha</h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-400">
        A VTU community project: give families a way to practise the three scams that show up on Indian phones, without sending any data off the device.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {team.map((m) => (
          <article key={m.name} className="rounded-2xl border border-[#1F2937] bg-[#111827] p-4">
            <p className="font-medium text-white">{m.name}</p>
            <p className="mt-1 text-sm text-[#38BDF8]">{m.role}</p>
            <p className="mt-2 text-sm text-slate-400">{m.detail}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <article className="rounded-2xl border border-[#1F2937] bg-[#090d16] p-4">
          <p className="text-2xl font-semibold text-white">500+</p>
          <p className="text-sm text-slate-400">Outreach target for the community sessions. Not a measured live count.</p>
        </article>
        <article className="rounded-2xl border border-[#1F2937] bg-[#090d16] p-4">
          <p className="text-2xl font-semibold text-white">Awareness lift</p>
          <p className="text-sm text-slate-400">The quiz is the before-and-after check you can run in a session. Do not quote a percentage until you have survey numbers.</p>
        </article>
      </div>
    </section>
  );
}
