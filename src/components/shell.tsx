import { useState, type ReactNode } from "react";
import { Siren, WifiOff, EyeOff, Phone, Landmark, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="no-print sticky top-0 z-40 border-b border-white/10 bg-[#090d16]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <p className="text-sm text-slate-400 md:hidden">Cyber Suraksha</p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="ml-auto inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-red-900/40 animate-pulse"
          >
            <Siren className="h-4 w-4" />
            SOS: Being scammed now?
          </button>
        </div>
      </header>
      {open && (
        <div className="no-print fixed inset-0 z-50 flex justify-end bg-black/60" role="dialog" aria-modal="true">
          <div className="h-full w-full max-w-md overflow-auto border-l border-[#1F2937] bg-[#111827] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#EF4444]">Crisis steps</p>
                <h2 className="mt-1 text-xl font-semibold text-white">Do these in order</h2>
              </div>
              <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="rounded-md p-1 text-slate-300 hover:bg-white/10">
                <X className="h-5 w-5" />
              </button>
            </div>
            <ol className="mt-6 space-y-4">
              <Step n={1} icon={<WifiOff className="h-5 w-5" />} title="Disconnect Wi-Fi and mobile data">
                Leave the call. A scammer cannot keep coaching you if the phone is offline.
              </Step>
              <Step n={2} icon={<EyeOff className="h-5 w-5" />} title="Do not share OTPs or your screen">
                No police officer, bank, or “RBI verifier” needs your OTP, UPI PIN, or a screen share.
              </Step>
              <Step n={3} icon={<Phone className="h-5 w-5" />} title="Call 1930 or visit cybercrime.gov.in">
                National Cybercrime Helpline 1930. Report at cybercrime.gov.in. If you are in danger, call 112.
              </Step>
              <Step n={4} icon={<Landmark className="h-5 w-5" />} title="Freeze bank and UPI">
                Use the official bank app or the number on your card to block UPI, cards, and netbanking.
              </Step>
            </ol>
            <p className="mt-4 text-sm text-slate-400">Police do not arrest or interrogate anyone over WhatsApp or Skype.</p>
            <a href="tel:1930" className="mt-4 block rounded-lg bg-[#EF4444] px-4 py-3 text-center text-sm font-semibold text-white">
              Call 1930 now
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function Step({ n, icon, title, children }: { n: number; icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <li className="flex gap-3 rounded-xl border border-[#1F2937] bg-[#090d16] p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EF4444]/15 text-[#EF4444]">{icon}</div>
      <div>
        <p className="text-xs text-slate-500">Step {n}</p>
        <p className="font-medium text-white">{title}</p>
        <p className="mt-1 text-sm text-slate-400">{children}</p>
      </div>
    </li>
  );
}
