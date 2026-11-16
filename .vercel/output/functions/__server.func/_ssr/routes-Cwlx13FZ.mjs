import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Siren, c as LayoutGrid, d as House, f as EyeOff, l as Landmark, m as BookOpen, n as WifiOff, o as Shield, p as ClipboardCheck, r as Users, s as Phone, t as X, u as Info } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cwlx13FZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var phishInbox = [
	{
		id: "kyc",
		channel: "SMS",
		from: "HDFC-BNK",
		subject: "KYC expired — account freeze in 2 hours",
		body: "Dear customer, your KYC is incomplete. Account will be blocked today. Update immediately: http://hdfc-kyc-update.in/login",
		verdict: "phishing",
		flags: [
			{
				label: "Spoofed sender",
				detail: "Banks do not use lookalike SMS IDs like HDFC-BNK. Check the official app or netbanking, not a text link."
			},
			{
				label: "Urgency trigger",
				detail: "A two-hour freeze threat is designed to stop you thinking."
			},
			{
				label: "Mismatched URL",
				detail: "hdfc-kyc-update.in is not an HDFC Bank domain. Real sites use hdfcbank.com."
			}
		],
		tactic: "Fake bank KYC freeze. The goal is your netbanking password and OTP."
	},
	{
		id: "courier",
		channel: "Email",
		from: "customs-hold@india-post-clear.in",
		subject: "Parcel held — pay customs ₹49 to release",
		body: "Your parcel DX-44921 is held at customs. Pay a nominal fee within 12 hours or it will be returned. Track & pay: https://india-post-clear.in/pay",
		verdict: "phishing",
		flags: [
			{
				label: "Spoofed domain",
				detail: "India Post uses indiapost.gov.in. india-post-clear.in is a lookalike."
			},
			{
				label: "Tiny payment bait",
				detail: "₹49 feels harmless. The page will ask for card or UPI and then a full OTP."
			},
			{
				label: "Unsolicited parcel",
				detail: "If you are not expecting a shipment, the hold notice is almost certainly fake."
			}
		],
		tactic: "Fake courier customs hold. Classic payment-page phishing."
	},
	{
		id: "upi",
		channel: "WhatsApp",
		from: "+91 98xxxxxx21 · “NPCI Rewards”",
		subject: "You won ₹2,500 UPI cashback",
		body: "Congratulations! Claim your NPCI cashback before midnight. Open the secure link and enter your UPI PIN to credit the wallet: bit.ly/upi-cash-claim",
		verdict: "phishing",
		flags: [
			{
				label: "PIN request",
				detail: "No genuine cashback ever asks for your UPI PIN. A PIN is only entered inside your own bank app."
			},
			{
				label: "Shortened link",
				detail: "bit.ly hides the real site. Expand or ignore unknown short links."
			},
			{
				label: "Fake authority",
				detail: "NPCI does not run personal cashback chats on WhatsApp."
			}
		],
		tactic: "Fake UPI cashback. Entering a PIN on their page authorises a debit, not a credit."
	},
	{
		id: "legit",
		channel: "In-app alert",
		from: "Your bank’s official app",
		subject: "New device login — was this you?",
		body: "We noticed a sign-in from a new phone in Bengaluru at 18:04. If this was you, no action is needed. If not, open the bank app you already installed and use “Freeze netbanking”. We will never ask you to tap a link in this message.",
		verdict: "safe",
		flags: [
			{
				label: "No link",
				detail: "The alert tells you to use the app you already trust. There is no URL."
			},
			{
				label: "No secret request",
				detail: "It does not ask for OTP, PIN, CVV, or a screen share."
			},
			{
				label: "Clear next step",
				detail: "If it was not you, the freeze control lives inside the real app, not a text."
			}
		],
		tactic: "A legitimate security alert. The safe pattern is: no link, no secrets, act inside the official app."
	}
];
var arrestLines = [
	{
		line: "You are under digital arrest. Do not disconnect this video call.",
		truth: "There is no such thing as digital arrest in Indian law. Police do not detain you over WhatsApp, Skype, or any video call."
	},
	{
		line: "I am calling from CBI / Mumbai Cyber Cell. Your Aadhaar is linked to a money-laundering case.",
		truth: "Real agencies send written notices through proper channels. They do not threaten you from an unknown video ID and they never ask you to stay on the call."
	},
	{
		line: "Transfer the disputed amount to this RBI verification account so we can clear your name.",
		truth: "The RBI never collects “verification” money into a private account. Any transfer they demand is the theft."
	},
	{
		line: "Share your screen and read out the OTP so we can confirm you are not the accused.",
		truth: "An OTP proves you control an account. Reading it aloud or showing it on screen lets them empty the account."
	},
	{
		line: "If you tell your family or hang up, a warrant will be executed at your home tonight.",
		truth: "Isolation is the scam. Hang up, tell someone you trust, and call 1930. Warrants are not served as a video ultimatum."
	}
];
var appSims = [
	{
		id: "flash",
		name: "Super Flashlight Pro",
		claim: "Turns on the torch. Nothing else.",
		permissions: [
			{
				name: "CAMERA (torch)",
				risk: "low",
				why: "A flashlight only needs the camera LED."
			},
			{
				name: "READ_SMS",
				risk: "high",
				why: "Reads every text, including bank OTPs. A torch does not need this."
			},
			{
				name: "BIND_ACCESSIBILITY_SERVICE",
				risk: "high",
				why: "Lets the app watch and tap other apps — the classic way to steal UPI and banking sessions."
			},
			{
				name: "SYSTEM_ALERT_WINDOW",
				risk: "high",
				why: "Draws fake screens over your real bank app so you type the PIN into the attacker’s overlay."
			}
		]
	},
	{
		id: "loan",
		name: "Instant Loan APK",
		claim: "₹50,000 loan in 10 minutes. Install outside the Play Store.",
		permissions: [
			{
				name: "READ_CONTACTS",
				risk: "high",
				why: "Used to harass your family if you miss a fee — a known illegal-lending pattern."
			},
			{
				name: "READ_SMS",
				risk: "high",
				why: "Harvests OTPs the moment they arrive."
			},
			{
				name: "BIND_ACCESSIBILITY_SERVICE",
				risk: "high",
				why: "Controls the screen so the app can approve payments you never saw."
			},
			{
				name: "REQUEST_INSTALL_PACKAGES",
				risk: "high",
				why: "Sideloads more malware after the first install."
			}
		]
	},
	{
		id: "notes",
		name: "Plain Notes (Play Store)",
		claim: "Offline notes. No account required.",
		permissions: [{
			name: "Storage for your notes",
			risk: "low",
			why: "Matches the stated job: save text on the device."
		}, {
			name: "Notifications",
			risk: "low",
			why: "Optional reminders. No SMS, no accessibility, no overlay."
		}]
	}
];
var flashcards = [
	{
		id: "f1",
		front: "A text says your KYC expires in two hours and includes a link.",
		back: "Do not tap. Open the bank app you already installed, or call the number on your card."
	},
	{
		id: "f2",
		front: "What is a lookalike domain?",
		back: "A site that almost spells a real brand (hdfc-kyc-update.in). Check the exact domain before you type anything."
	},
	{
		id: "f3",
		front: "Someone promises UPI cashback if you enter your PIN.",
		back: "Refuse. A UPI PIN only authorises a payment. Cashback never needs it."
	},
	{
		id: "f4",
		front: "“You are under digital arrest.”",
		back: "Hang up. Digital arrest is not a legal process. Call 1930 and tell a family member."
	},
	{
		id: "f5",
		front: "A caller in uniform asks you to stay on a video call all night.",
		back: "Disconnect Wi-Fi and mobile data. Police do not interrogate people on WhatsApp or Skype."
	},
	{
		id: "f6",
		front: "“Transfer money to an RBI verification account.”",
		back: "That account is the scammer’s. The RBI never asks citizens to park money for clearance."
	},
	{
		id: "f7",
		front: "Why is READ_SMS dangerous on a flashlight app?",
		back: "It can read banking OTPs. The permission does not match a torch."
	},
	{
		id: "f8",
		front: "What does an accessibility-service abuse do?",
		back: "It lets malware see and tap other apps, including confirming UPI payments."
	},
	{
		id: "f9",
		front: "A courier email asks for ₹49 customs duty.",
		back: "Expect a phishing payment page. Track parcels only on the official carrier site or app."
	},
	{
		id: "f10",
		front: "You received an OTP you did not request.",
		back: "Do not share it with anyone, including people claiming to be the bank or police."
	},
	{
		id: "f11",
		front: "How should a family verify a scary official call?",
		back: "Hang up and call back on a published number (bank on the card, police via 112, cybercrime via 1930)."
	},
	{
		id: "f12",
		front: "Where should Android apps come from?",
		back: "The Play Store (or the vendor’s official store). Turn off “install unknown apps”."
	}
];
var quiz = [
	{
		id: "q1",
		prompt: "An SMS from “SBI-ALERT” says your account will close unless you tap sbi-kyc-help.com. What do you do?",
		options: [
			"Tap the link and log in quickly so the account stays open",
			"Ignore the link and check status inside the official SBI app",
			"Forward the SMS to family so they can open it for you"
		],
		answer: 1,
		why: "The link is a lookalike. Logging in there gives the attacker your password. The official app is the only safe status check."
	},
	{
		id: "q2",
		prompt: "A WhatsApp message offers ₹2,500 UPI cashback if you enter your UPI PIN on their page. The safe move is:",
		options: [
			"Enter the PIN — cashback is credited only after PIN verification",
			"Pay ₹1 first to “activate” the reward",
			"Never enter a UPI PIN outside your own bank or UPI app"
		],
		answer: 2,
		why: "The PIN authorises a debit. Reward pages that ask for it are theft."
	},
	{
		id: "q3",
		prompt: "A person on video says they are CBI and you are under digital arrest. They forbid you to hang up.",
		options: [
			"Stay on the call and follow every instruction so the case is closed",
			"Disconnect data, hang up, tell someone, and call 1930",
			"Transfer a “security deposit” and then hang up"
		],
		answer: 1,
		why: "Digital arrest is a coercion script. Isolation plus a money transfer is the crime. 1930 is the national cybercrime helpline."
	},
	{
		id: "q4",
		prompt: "They tell you to move savings into an “RBI verification account” to prove innocence.",
		options: [
			"Transfer it — RBI accounts are always safe",
			"Refuse. RBI does not collect citizen money into a private account to clear a case",
			"Send half now and half after they email a receipt"
		],
		answer: 1,
		why: "There is no consumer “verification account” workflow. The destination is the scammer."
	},
	{
		id: "q5",
		prompt: "Super Flashlight Pro wants READ_SMS and Accessibility. What does that mismatch mean?",
		options: [
			"Those permissions make the torch brighter",
			"The app can read OTPs and control other apps — treat it as malware",
			"Android requires SMS access for every free app"
		],
		answer: 1,
		why: "A torch needs the camera LED only. SMS plus accessibility is an OTP-stealing setup."
	},
	{
		id: "q6",
		prompt: "A bank in-app message says a new device signed in and tells you to freeze access inside that same app. No link is included.",
		options: [
			"It is likely a real alert — use the app you already trust",
			"It is always phishing if it mentions a login",
			"Reply with your OTP so they can lock the device for you"
		],
		answer: 0,
		why: "No link and no secret request is the safe pattern. Never send an OTP to “confirm” anything."
	}
];
var checklist = [
	{
		id: "c1",
		label: "Turn on two-step verification for WhatsApp"
	},
	{
		id: "c2",
		label: "Turn off “install unknown apps” on every phone at home"
	},
	{
		id: "c3",
		label: "Set a UPI PIN that is not a birthday or 1234, and never share it"
	},
	{
		id: "c4",
		label: "Save 1930 and cybercrime.gov.in where the family can find them"
	},
	{
		id: "c5",
		label: "Agree a code word: if a call forbids you to hang up, you hang up"
	},
	{
		id: "c6",
		label: "Check bank apps only from the icon you installed, never from SMS links"
	},
	{
		id: "c7",
		label: "Review app permissions and remove anything that can read SMS"
	},
	{
		id: "c8",
		label: "Lock Aadhaar biometrics when you do not need them (UIDAI site or mAadhaar)"
	},
	{
		id: "c9",
		label: "Tell older relatives that police never arrest anyone on a video call"
	},
	{
		id: "c10",
		label: "Use a screen lock and keep the phone OS updated"
	},
	{
		id: "c11",
		label: "Do not keep OTPs visible on the lock screen"
	},
	{
		id: "c12",
		label: "Verify caller claims by calling back on a number printed on the card or official site"
	}
];
var knowledge = [
	{
		id: "k-phish",
		topic: "Phishing",
		title: "How a phish is built",
		keywords: "phishing kyc sms email link domain otp upi cashback courier",
		body: "A phish copies a brand, invents urgency, and moves you to a site the attacker controls. The three tells in this lab are a spoofed sender, a deadline, and a URL that is not the real organisation. Defence: do not use the message’s link. Open the official app, or type the known address yourself. Never enter a password, card number, or OTP on a page you reached from an unexpected text."
	},
	{
		id: "k-upi",
		topic: "Phishing",
		title: "UPI and QR tricks",
		keywords: "upi pin qr collect request cashback",
		body: "A UPI PIN authorises money leaving your account. “Receive money” screens and collect requests can be dressed up as refunds. Scan QR codes only when you intend to pay that person. If a collect request appears, decline it. Banks and NPCI will not ask you to enter a PIN to receive cashback."
	},
	{
		id: "k-arrest",
		topic: "Digital arrest",
		title: "The digital arrest script",
		keywords: "digital arrest cbi skype whatsapp police warrant",
		body: "Callers pose as CBI, police, or customs. They show a fake ID on video, name a crime, and order you to stay on the call. They then demand a transfer to a so-called verification account and a screen share. Indian law has no digital arrest. Disconnect the network, leave the room if you are shaken, tell a family member, and call 1930."
	},
	{
		id: "k-otp",
		topic: "Digital arrest",
		title: "Why they want the screen and the OTP",
		keywords: "otp screen share skype",
		body: "While you are frightened and on camera, they start a transfer or a password reset. The OTP arrives on your phone. If they can see the screen, or you read the code aloud, they complete the theft in seconds. No investigator needs your OTP."
	},
	{
		id: "k-apk",
		topic: "Malicious apps",
		title: "Permission mismatch",
		keywords: "apk permission sms accessibility flashlight loan",
		body: "Judge an app by the gap between what it claims to do and what it asks to access. A flashlight that wants SMS, contacts, and accessibility is not a flashlight. Accessibility services can read the screen and tap buttons inside banking apps. Overlay permission can paint a fake PIN pad on top of a real one."
	},
	{
		id: "k-sideload",
		topic: "Malicious apps",
		title: "Sideloaded APKs and illegal loan apps",
		keywords: "sideload apk play store loan contacts",
		body: "Files shared on chat (“install this APK for your loan or KYC”) skip Play Protect. Illegal lending apps then read contacts and threaten relatives. Keep unknown-sources installation off. Uninstall anything you did not get from a store you trust, then change banking passwords from a clean device."
	},
	{
		id: "k-help",
		topic: "Response",
		title: "If money already moved",
		keywords: "1930 cybercrime helpline freeze bank",
		body: "Call 1930 as soon as you can and report at cybercrime.gov.in. Ask your bank to freeze UPI and cards. Note the time, the amount, the UPI ID or account, and any phone numbers. Speed matters: banks can sometimes hold a fraudulent credit if they are told quickly. Do not pay a “recovery agent” who contacts you next — that is often a second scam."
	}
];
var prompts = [
	"How do I spot a fake KYC SMS?",
	"What is digital arrest?",
	"Why would a flashlight app read SMS?",
	"What should I do if I already paid?",
	"Is a UPI PIN safe to enter for cashback?"
];
var podcastLines = [
	{
		who: "Host",
		text: "Three scams are hitting Indian families at once: fake bank and courier messages, digital arrest video calls, and apps that are not what they claim."
	},
	{
		who: "Expert",
		text: "Start with the family rule. If a message has a link and a deadline, nobody taps it. You open the real bank or courier app instead."
	},
	{
		who: "Host",
		text: "And the video call that says you are under digital arrest?"
	},
	{
		who: "Expert",
		text: "That phrase is the scam. Police and the CBI do not arrest people on WhatsApp. Hang up, turn off data, and call 1930. Never move money to a so-called verification account, and never show an OTP on camera."
	},
	{
		who: "Host",
		text: "What about apps?"
	},
	{
		who: "Expert",
		text: "If the job is a torch or a loan form, it does not need to read SMS or run an accessibility service. Those permissions steal banking codes. Install only from the official store, and switch off unknown APK installs."
	},
	{
		who: "Host",
		text: "One line to leave on the fridge."
	},
	{
		who: "Expert",
		text: "No link, no PIN, no video-call arrest. If they will not let you hang up, that is the moment you hang up."
	}
];
function readJson(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function writeJson(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
var CHECK_KEY = "suraksha-checks";
function QuizAndCertificate() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const q = quiz[step];
	function choose(i) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "quiz",
		className: "mx-auto max-w-6xl px-4 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8]",
				children: "Readiness"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-2xl font-semibold text-white",
				children: "Six scenarios"
			}),
			!done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 max-w-2xl rounded-2xl border border-[#1F2937] bg-[#111827] p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-slate-500",
						children: [
							"Question ",
							step + 1,
							" of ",
							quiz.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-lg text-white",
						children: q.prompt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-2",
						children: q.options.map((opt, i) => {
							const show = picked !== null;
							const right = i === q.answer;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => choose(i),
								className: `block w-full rounded-xl border px-3 py-3 text-left text-sm ${show && right ? "border-emerald-600 bg-emerald-950/40 text-white" : show && i === picked ? "border-[#EF4444] bg-red-950/40 text-white" : "border-[#1F2937] text-slate-200"}`,
								children: opt
							}, opt);
						})
					}),
					picked !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-slate-300",
							children: q.why
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: next,
							className: "mt-3 rounded-lg bg-[#38BDF8] px-4 py-2 text-sm font-medium text-[#090d16]",
							children: step + 1 === quiz.length ? "See result" : "Next"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-white",
						children: [
							"Score ",
							score,
							" / ",
							quiz.length,
							". ",
							score >= 5 ? "You can brief the family." : "Review the red items in the lab, then try again."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-sm text-slate-400",
						children: ["Name on the certificate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							onChange: (e) => setName(e.target.value),
							className: "mt-1 w-full rounded-lg border border-[#1F2937] bg-[#111827] px-3 py-2 text-white",
							placeholder: "Your name"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => window.print(),
						className: "no-print mt-3 rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#090d16]",
						children: "Print certificate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setDone(false);
							setStep(0);
							setPicked(null);
							setScore(0);
						},
						className: "no-print ml-2 mt-3 rounded-lg px-4 py-2 text-sm text-slate-300",
						children: "Retake"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: "certificate",
						className: "mt-6 rounded-2xl border-2 border-[#38BDF8] bg-white p-8 text-center text-slate-900",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.25em] text-sky-700",
								children: "Cyber Suraksha"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-2xl font-semibold",
								children: "Readiness certificate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg",
								children: name.trim() || "Participant"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm",
								children: [
									"Completed a scenario check on phishing, digital arrest, and malicious applications. Score ",
									score,
									" of ",
									quiz.length,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs text-slate-500",
								children: "Awareness practice only. Not a professional certification. Helpline 1930."
							})
						]
					})
				]
			})
		]
	});
}
function FamilyChecklist() {
	const [on, setOn] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		setOn(readJson(CHECK_KEY, {}));
	}, []);
	const count = checklist.filter((c) => on[c.id]).length;
	const pct = Math.round(count / checklist.length * 100);
	function toggle(id) {
		const next = {
			...on,
			[id]: !on[id]
		};
		setOn(next);
		writeJson(CHECK_KEY, next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "checklist",
		className: "border-t border-[#1F2937] bg-[#0c1220]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8]",
					children: "At home"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-semibold text-white",
					children: "Family cyber hygiene"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm text-slate-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							count,
							" of ",
							checklist.length
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [pct, "%"] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-2 rounded-full bg-[#111827]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-[#38BDF8]",
							style: { width: `${pct}%` }
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-2 md:grid-cols-2",
					children: checklist.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex cursor-pointer items-start gap-3 rounded-xl border border-[#1F2937] bg-[#111827] p-3 text-sm text-slate-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: !!on[c.id],
							onChange: () => toggle(c.id),
							className: "mt-1"
						}), c.label]
					}) }, c.id))
				})
			]
		})
	});
}
function SimulatorLab() {
	const [tab, setTab] = (0, import_react.useState)("phish");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "lab",
		className: "mx-auto max-w-6xl px-4 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8]",
				children: "Threat simulator lab"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-2xl font-semibold text-white md:text-3xl",
				children: "Practice the decision before it is real"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [
					["phish", "Spot the phish"],
					["arrest", "Digital arrest decoder"],
					["apk", "APK permission inspector"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab(id),
					className: `rounded-full px-4 py-2 text-sm ${tab === id ? "bg-[#38BDF8] text-[#090d16]" : "border border-[#1F2937] text-slate-300"}`,
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [
					tab === "phish" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhishTab, {}),
					tab === "arrest" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrestTab, {}),
					tab === "apk" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApkTab, {})
				]
			})
		]
	});
}
function PhishTab() {
	const [picked, setPicked] = (0, import_react.useState)({});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4",
		children: phishInbox.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhishCard, {
			item,
			choice: picked[item.id],
			onPick: (v) => setPicked((s) => ({
				...s,
				[item.id]: v
			}))
		}, item.id))
	});
}
function PhishCard({ item, choice, onPick }) {
	const correct = choice === item.verdict;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl border border-[#1F2937] bg-[#111827] p-4 md:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 text-xs text-slate-400",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded bg-white/5 px-2 py-0.5",
					children: item.channel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["From ", item.from] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-medium text-white",
				children: item.subject
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-300",
				children: item.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onPick("safe"),
					className: "rounded-lg border border-[#1F2937] px-3 py-2 text-sm text-white hover:border-[#38BDF8]",
					children: "Safe"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onPick("phishing"),
					className: "rounded-lg border border-[#1F2937] px-3 py-2 text-sm text-white hover:border-[#F59E0B]",
					children: "Phishing"
				})]
			}),
			choice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-4 rounded-xl border p-4 ${correct ? "border-emerald-700/60 bg-emerald-950/40" : "border-[#EF4444]/50 bg-red-950/30"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium text-white",
						children: [
							correct ? "Correct." : "Not quite.",
							" This message is ",
							item.verdict,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: item.flags.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[#F59E0B]",
								children: [f.label, ". "]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-slate-300",
								children: f.detail
							})]
						}, f.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-slate-400",
						children: item.tactic
					})
				]
			})
		]
	});
}
function ArrestTab() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl border border-[#EF4444]/40 bg-[#EF4444]/10 p-4 text-sm leading-relaxed text-red-100",
		children: "Law enforcement, the CBI, and the police never conduct arrests or interrogations over WhatsApp or Skype video calls."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 grid gap-3",
		children: arrestLines.map((row, i) => {
			const flipped = open === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen(flipped ? null : i),
				className: "rounded-2xl border border-[#1F2937] bg-[#111827] p-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-wider text-slate-500",
					children: [flipped ? "Legal reality" : "Scam script", " · tap to flip"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-white",
					children: flipped ? row.truth : `“${row.line}”`
				})]
			}, row.line);
		})
	})] });
}
function ApkTab() {
	const [id, setId] = (0, import_react.useState)(appSims[0].id);
	const app = appSims.find((a) => a.id === id) ?? appSims[0];
	const score = (0, import_react.useMemo)(() => app.permissions.filter((p) => p.risk === "high").length, [app]);
	const label = score === 0 ? "Low risk" : score < 3 ? "Elevated" : "Critical";
	const color = score === 0 ? "#34d399" : score < 3 ? "#F59E0B" : "#EF4444";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 md:grid-cols-[220px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-row gap-2 md:flex-col",
			children: appSims.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setId(a.id),
				className: `rounded-xl border px-3 py-3 text-left text-sm ${a.id === id ? "border-[#38BDF8] bg-[#38BDF8]/10 text-white" : "border-[#1F2937] text-slate-300"}`,
				children: a.name
			}, a.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-[#1F2937] bg-[#111827] p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-slate-500",
					children: "Android install preview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 text-xl text-white",
					children: app.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-slate-400",
					children: ["Claims: ", app.claim]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-slate-300",
								children: "Threat risk meter"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color },
								children: label
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-2 overflow-hidden rounded-full bg-[#090d16]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full",
								style: {
									width: `${Math.max(12, score / 4 * 100)}%`,
									background: color
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-slate-400",
							children: score > 0 ? "Accessibility abuse can watch your banking app and steal OTPs. Overlay permission can fake the PIN screen. The claimed utility does not need these rights." : "Permissions match the stated job. Still install only from a store you trust."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: app.permissions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-[#1F2937] bg-[#090d16] p-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: p.risk === "high" ? "text-[#EF4444]" : "text-emerald-300",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-slate-400",
							children: p.why
						})]
					}, p.name))
				})
			]
		})]
	});
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "no-print sticky top-0 z-40 border-b border-white/10 bg-[#090d16]/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-slate-400 md:hidden",
				children: "Cyber Suraksha"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen(true),
				className: "ml-auto inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-red-900/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "h-4 w-4" }), "SOS: Being scammed now?"]
			})]
		})
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "no-print fixed inset-0 z-50 flex justify-end bg-black/60",
		role: "dialog",
		"aria-modal": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "h-full w-full max-w-md overflow-auto border-l border-[#1F2937] bg-[#111827] p-6 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-[#EF4444]",
						children: "Crisis steps"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-xl font-semibold text-white",
						children: "Do these in order"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close",
						onClick: () => setOpen(false),
						className: "rounded-md p-1 text-slate-300 hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
							n: 1,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "h-5 w-5" }),
							title: "Disconnect Wi-Fi and mobile data",
							children: "Leave the call. A scammer cannot keep coaching you if the phone is offline."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
							n: 2,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-5 w-5" }),
							title: "Do not share OTPs or your screen",
							children: "No police officer, bank, or “RBI verifier” needs your OTP, UPI PIN, or a screen share."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
							n: 3,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" }),
							title: "Call 1930 or visit cybercrime.gov.in",
							children: "National Cybercrime Helpline 1930. Report at cybercrime.gov.in. If you are in danger, call 112."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
							n: 4,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "h-5 w-5" }),
							title: "Freeze bank and UPI",
							children: "Use the official bank app or the number on your card to block UPI, cards, and netbanking."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-slate-400",
					children: "Law enforcement never conducts arrests or interrogations over WhatsApp or Skype."
				})
			]
		})
	})] });
}
function Step({ n, icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-3 rounded-xl border border-[#1F2937] bg-[#090d16] p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EF4444]/15 text-[#EF4444]",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-slate-500",
				children: ["Step ", n]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium text-white",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-slate-400",
				children
			})
		] })]
	});
}
var CARD_KEY = "suraksha-cards";
function StudyStudio() {
	const [query, setQuery] = (0, import_react.useState)("How do I spot a fake KYC SMS?");
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	const [marks, setMarks] = (0, import_react.useState)({});
	const [speaking, setSpeaking] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setMarks(readJson(CARD_KEY, {}));
	}, []);
	const hits = (0, import_react.useMemo)(() => {
		const q = query.toLowerCase().split(/\s+/).filter((w) => w.length > 3);
		const scored = knowledge.map((k) => {
			const hay = `${k.title} ${k.keywords} ${k.body} ${k.topic}`.toLowerCase();
			return {
				k,
				n: q.reduce((acc, w) => acc + (hay.includes(w) ? 1 : 0), 0)
			};
		});
		const strong = scored.filter((s) => s.n > 0).sort((a, b) => b.n - a.n);
		return (strong.length ? strong : scored.slice(0, 3)).slice(0, 3).map((s) => s.k);
	}, [query]);
	const card = flashcards[idx];
	const mastered = Object.values(marks).filter((m) => m === "mastered").length;
	function mark(status) {
		const next = {
			...marks,
			[card.id]: status
		};
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
			setProgress((p) => p >= 92 ? p : p + 4);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "studio",
		className: "border-y border-[#1F2937] bg-[#0c1220]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#38BDF8]",
					children: "CyberNote"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-semibold text-white md:text-3xl",
					children: "Study studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-slate-400",
					children: "A local notebook over the built-in briefing. Nothing is sent to a server. Listening uses your browser’s speech engine."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-[#1F2937] bg-[#111827] p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-medium text-white",
									children: "Source briefing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-slate-300",
									children: "Phishing steals secrets with fake urgency. Digital arrest isolates you on a video call and demands a transfer. Malicious apps request rights that do not match their job, especially SMS and accessibility."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: [
										"Phishing",
										"Digital arrest",
										"Malicious apps",
										"1930"
									].map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setQuery(chip),
										className: "rounded-full border border-[#1F2937] px-3 py-1 text-xs text-[#38BDF8]",
										children: chip
									}, chip))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-[#1F2937] bg-[#111827] p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-medium text-white",
									children: "Ask the briefing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap gap-2",
									children: prompts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setQuery(p),
										className: "rounded-lg bg-[#090d16] px-2 py-1 text-left text-xs text-slate-300",
										children: p
									}, p))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: query,
									onChange: (e) => setQuery(e.target.value),
									className: "mt-3 w-full rounded-lg border border-[#1F2937] bg-[#090d16] px-3 py-2 text-sm text-white outline-none focus:border-[#38BDF8]",
									"aria-label": "Search the briefing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 space-y-3",
									children: hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[#38BDF8]",
											children: [
												h.topic,
												" · ",
												h.title
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-slate-300",
											children: h.body
										})]
									}, h.id))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-[#1F2937] bg-[#111827] p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-medium text-white",
											children: "Flashcards"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-slate-400",
											children: [
												mastered,
												"/",
												flashcards.length,
												" mastered"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setFlipped((f) => !f),
										className: "flip-scene mt-3 block w-full text-left",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `flip-card relative min-h-36 ${flipped ? "is-flipped" : ""}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flip-face rounded-xl bg-[#090d16] p-4 text-sm text-white",
												children: card.front
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flip-face flip-back absolute inset-0 rounded-xl bg-[#0b2433] p-4 text-sm text-slate-100",
												children: card.back
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-xs text-slate-500",
										children: [
											"Card ",
											idx + 1,
											" of ",
											flashcards.length,
											". Tap the card to flip."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => mark("learning"),
											className: "rounded-lg border border-[#F59E0B]/50 px-3 py-2 text-xs text-[#F59E0B]",
											children: "Still learning"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => mark("mastered"),
											className: "rounded-lg bg-[#38BDF8] px-3 py-2 text-xs font-medium text-[#090d16]",
											children: "Mastered"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-[#1F2937] bg-[#111827] p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-medium text-white",
										children: "Two-minute briefing"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 h-1.5 overflow-hidden rounded-full bg-[#090d16]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-[#38BDF8]",
											style: { width: `${progress}%` }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 max-h-48 space-y-2 overflow-auto text-sm",
										children: podcastLines.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[#38BDF8]",
											children: [l.who, ": "]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-slate-300",
											children: l.text
										})] }, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: listen,
											className: "rounded-lg bg-white/10 px-3 py-2 text-xs text-white",
											children: speaking ? "Restart listen" : "Listen"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: stop,
											className: "rounded-lg px-3 py-2 text-xs text-slate-400",
											children: "Stop"
										})]
									})
								]
							})]
						})
					]
				})
			]
		})
	});
}
var threats = [
	{
		name: "Electricity bill cut-off",
		tags: "bill electricity discom link",
		summary: "A text says power will be cut in an hour unless you pay on a link.",
		defense: "Discoms do not take card or UPI PIN in a random SMS. Pay only in the official app or at the counter. The short deadline is the pressure tactic."
	},
	{
		name: "Fake job offer",
		tags: "job offer telegram fee registration",
		summary: "A recruiter on Telegram or WhatsApp offers a work-from-home role, then asks for a registration or laptop fee.",
		defense: "Real employers do not charge you to join. Never pay a “refundable” deposit or install a remote-access app for an interview."
	},
	{
		name: "Sextortion",
		tags: "sextortion webcam blackmail",
		summary: "A message claims they have a video of you and demands payment in crypto or UPI.",
		defense: "Do not pay and do not reply. Paying marks you as someone who will pay again. Block, keep the message, and report on 1930. Tell someone you trust."
	},
	{
		name: "Deepfake video call",
		tags: "deepfake video relative",
		summary: "A video call looks and sounds like a relative asking for money right now.",
		defense: "Hang up and call that person back on the number you already have. Agree a family question only they would answer. Urgency plus a new number is the tell."
	},
	{
		name: "Digital arrest",
		tags: "digital arrest cbi skype",
		summary: "A caller in uniform says you are under digital arrest and must stay on the video call.",
		defense: "There is no digital arrest. Disconnect data, hang up, and call 1930. Never transfer money to a verification account."
	},
	{
		name: "UPI collect request",
		tags: "upi qr collect pin",
		summary: "A QR or collect request is labelled as a refund or cashback.",
		defense: "Entering a UPI PIN sends money out. Decline collect requests you did not start. Cashback never needs a PIN."
	},
	{
		name: "Malicious APK",
		tags: "apk loan flashlight sms",
		summary: "A chat file asks you to install an app outside the store, often a loan or “KYC” tool.",
		defense: "Keep unknown-app installs off. A torch or form does not need SMS or accessibility. Uninstall and change banking passwords from a clean phone if you already installed it."
	},
	{
		name: "Customs or courier hold",
		tags: "courier customs parcel",
		summary: "An email says a parcel is stuck until you pay a small fee.",
		defense: "Track only on the carrier you actually used. Lookalike domains and a tiny fee are there to steal the card or UPI that follows."
	}
];
var firstHour = [
	"Disconnect Wi-Fi and mobile data. Leave the call.",
	"Do not send another rupee, OTP, or screen share, even if they say it will “reverse” the first payment.",
	"Call 1930 and file at cybercrime.gov.in. Note the time, amount, UPI ID or account, and phone numbers.",
	"Call the number on your bank card and ask them to block UPI, cards, and netbanking.",
	"Tell one family member. Isolation is part of the scam.",
	"Ignore anyone who messages next offering paid “recovery.” That is often a second scam."
];
var contacts = [
	{
		name: "National Cybercrime Helpline",
		detail: "1930 — report financial fraud as soon as you can"
	},
	{
		name: "Online report",
		detail: "cybercrime.gov.in"
	},
	{
		name: "Emergency",
		detail: "112 — if you are in immediate danger"
	},
	{
		name: "Your bank",
		detail: "Use the number printed on the card or inside the official app. Do not use a number from the suspicious call."
	}
];
var team = [
	{
		name: "Mayur Anand",
		role: "Lead developer and architect"
	},
	{
		name: "Vikrant Reddy",
		role: "Documentation and report lead"
	},
	{
		name: "Imran Khan",
		role: "Content and localisation"
	},
	{
		name: "Nanda",
		role: "Community survey and presentation"
	}
];
var tabs = [
	{
		id: "home",
		label: "Home",
		icon: House
	},
	{
		id: "lab",
		label: "Lab",
		icon: Shield
	},
	{
		id: "studio",
		label: "Study",
		icon: BookOpen
	},
	{
		id: "quiz",
		label: "Quiz",
		icon: ClipboardCheck
	},
	{
		id: "family",
		label: "Family",
		icon: Users
	},
	{
		id: "db",
		label: "Threats",
		icon: LayoutGrid
	},
	{
		id: "report",
		label: "Report",
		icon: Phone
	},
	{
		id: "about",
		label: "Team",
		icon: Info
	}
];
function Portal() {
	const [tab, setTab] = (0, import_react.useState)("home");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen md:pl-56",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "no-print fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-[#1F2937] bg-[#0c1220] md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 px-4 py-5 font-semibold text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5 text-[#38BDF8]" }), "Cyber Suraksha"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-1 flex-col gap-1 px-2",
						children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab(t.id),
							className: `flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm ${tab === t.id ? "bg-[#38BDF8]/15 text-[#38BDF8]" : "text-slate-300 hover:bg-white/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4" }), t.label]
						}, t.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 py-4 text-xs text-slate-500",
						children: "Helpline 1930"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pb-24 md:pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -8
						},
						transition: { duration: .22 },
						children: [
							tab === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home, { onOpen: setTab }),
							tab === "lab" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimulatorLab, {}),
							tab === "studio" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudyStudio, {}),
							tab === "quiz" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizAndCertificate, {}),
							tab === "family" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyChecklist, {}),
							tab === "db" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreatDatabase, {}),
							tab === "report" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportHub, {}),
							tab === "about" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {})
						]
					}, tab)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "no-print fixed inset-x-0 bottom-0 z-30 flex gap-1 overflow-x-auto border-t border-[#1F2937] bg-[#0c1220]/95 px-2 py-2 backdrop-blur md:hidden",
				children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setTab(t.id),
					className: `flex min-w-16 flex-col items-center gap-1 rounded-lg px-2 py-1 text-[10px] ${tab === t.id ? "text-[#38BDF8]" : "text-slate-400"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4" }), t.label]
				}, t.id))
			})
		]
	});
}
function Home({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#F59E0B]",
				children: "VTU community project"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl",
				children: "A practice desk for phishing, digital arrest, and malicious apps."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-slate-400",
				children: "Built for families, classrooms, and workplaces. Every exercise stays on this device."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center gap-3 rounded-2xl border border-[#F59E0B]/40 bg-[#F59E0B]/10 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "h-5 w-5 text-[#F59E0B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-white",
					children: "Briefing level: elevated"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-slate-300",
					children: "This is a teaching focus, not a live feed. UPI phishing and digital-arrest calls are the scenarios to practise this week."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					[
						"lab",
						"Threat lab",
						"Classify messages, decode arrest scripts, inspect app permissions."
					],
					[
						"studio",
						"Study studio",
						"Search the briefing, flip cards, listen to the two-minute script."
					],
					[
						"quiz",
						"Readiness quiz",
						"Six scenarios and a printable certificate."
					],
					[
						"report",
						"Report hub",
						"1930, the first hour, and who to call at the bank."
					]
				].map(([id, title, blurb]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onOpen(id),
					className: "rounded-2xl border border-[#1F2937] bg-[#111827] p-4 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-white",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-slate-400",
						children: blurb
					})]
				}, id))
			})
		]
	});
}
function ThreatDatabase() {
	const [q, setQ] = (0, import_react.useState)("");
	const rows = (0, import_react.useMemo)(() => {
		const s = q.trim().toLowerCase();
		if (!s) return threats;
		return threats.filter((t) => `${t.name} ${t.tags} ${t.summary}`.toLowerCase().includes(s));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold text-white",
				children: "Threat database"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-slate-400",
				children: "Short India-focused notes. Search a scam name or a word like UPI, job, or deepfake."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search scams",
				className: "mt-4 w-full max-w-md rounded-lg border border-[#1F2937] bg-[#111827] px-3 py-2 text-sm text-white outline-none focus:border-[#38BDF8]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3",
				children: [rows.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-[#1F2937] bg-[#111827] p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-white",
							children: t.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-slate-300",
							children: t.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-slate-400",
							children: t.defense
						})
					]
				}, t.name)), rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-slate-500",
					children: "No match. Try “UPI” or “arrest”."
				})]
			})
		]
	});
}
function ReportHub() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold text-white",
				children: "Report hub"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-slate-400",
				children: "What to do in the first hour after money moves or a caller will not let you hang up."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 space-y-2",
				children: firstHour.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-[#1F2937] bg-[#111827] px-4 py-3 text-sm text-slate-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[#38BDF8]",
						children: [i + 1, ". "]
					}), step]
				}, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				children: contacts.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-[#1F2937] bg-[#111827] p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-white",
						children: c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-slate-400",
						children: c.detail
					})]
				}, c.name))
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold text-white",
				children: "Team Cyber Suraksha"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-slate-400",
				children: "A VTU community project: give families a way to practise the three scams that show up on Indian phones, without sending any data off the device."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				children: team.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-[#1F2937] bg-[#111827] p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-white",
						children: m.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-[#38BDF8]",
						children: m.role
					})]
				}, m.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-[#1F2937] bg-[#090d16] p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-semibold text-white",
						children: "500+"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-slate-400",
						children: "Outreach target for the community sessions. Not a measured live count."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-[#1F2937] bg-[#090d16] p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-semibold text-white",
						children: "Awareness lift"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-slate-400",
						children: "The quiz is the before-and-after check you can run in a session. Do not quote a percentage until you have survey numbers."
					})]
				})]
			})
		]
	});
}
var SplitComponent = Portal;
//#endregion
export { SplitComponent as component };
