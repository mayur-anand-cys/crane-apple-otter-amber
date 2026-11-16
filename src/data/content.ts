export type PhishItem = {
  id: string;
  channel: string;
  from: string;
  subject: string;
  body: string;
  verdict: "phishing" | "safe";
  flags: { label: string; detail: string }[];
  tactic: string;
};

export const phishInbox: PhishItem[] = [
  {
    id: "kyc",
    channel: "SMS",
    from: "HDFC-BNK",
    subject: "KYC expired — account freeze in 2 hours",
    body: "Dear customer, your KYC is incomplete. Account will be blocked today. Update immediately: http://hdfc-kyc-update.in/login",
    verdict: "phishing",
    flags: [
      { label: "Spoofed sender", detail: "Banks do not use lookalike SMS IDs like HDFC-BNK. Check the official app or netbanking, not a text link." },
      { label: "Urgency trigger", detail: "A two-hour freeze threat is designed to stop you thinking." },
      { label: "Mismatched URL", detail: "hdfc-kyc-update.in is not an HDFC Bank domain. Real sites use hdfcbank.com." },
    ],
    tactic: "Fake bank KYC freeze. The goal is your netbanking password and OTP.",
  },
  {
    id: "courier",
    channel: "Email",
    from: "customs-hold@india-post-clear.in",
    subject: "Parcel held — pay customs ₹49 to release",
    body: "Your parcel DX-44921 is held at customs. Pay a nominal fee within 12 hours or it will be returned. Track & pay: https://india-post-clear.in/pay",
    verdict: "phishing",
    flags: [
      { label: "Spoofed domain", detail: "India Post uses indiapost.gov.in. india-post-clear.in is a lookalike." },
      { label: "Tiny payment bait", detail: "₹49 feels harmless. The page will ask for card or UPI and then a full OTP." },
      { label: "Unsolicited parcel", detail: "If you are not expecting a shipment, the hold notice is almost certainly fake." },
    ],
    tactic: "Fake courier customs hold. Classic payment-page phishing.",
  },
  {
    id: "upi",
    channel: "WhatsApp",
    from: "+91 98xxxxxx21 · “NPCI Rewards”",
    subject: "You won ₹2,500 UPI cashback",
    body: "Congratulations! Claim your NPCI cashback before midnight. Open the secure link and enter your UPI PIN to credit the wallet: bit.ly/upi-cash-claim",
    verdict: "phishing",
    flags: [
      { label: "PIN request", detail: "No genuine cashback ever asks for your UPI PIN. A PIN is only entered inside your own bank app." },
      { label: "Shortened link", detail: "bit.ly hides the real site. Expand or ignore unknown short links." },
      { label: "Fake authority", detail: "NPCI does not run personal cashback chats on WhatsApp." },
    ],
    tactic: "Fake UPI cashback. Entering a PIN on their page authorises a debit, not a credit.",
  },
  {
    id: "legit",
    channel: "In-app alert",
    from: "Your bank’s official app",
    subject: "New device login — was this you?",
    body: "We noticed a sign-in from a new phone in Bengaluru at 18:04. If this was you, no action is needed. If not, open the bank app you already installed and use “Freeze netbanking”. We will never ask you to tap a link in this message.",
    verdict: "safe",
    flags: [
      { label: "No link", detail: "The alert tells you to use the app you already trust. There is no URL." },
      { label: "No secret request", detail: "It does not ask for OTP, PIN, CVV, or a screen share." },
      { label: "Clear next step", detail: "If it was not you, the freeze control lives inside the real app, not a text." },
    ],
    tactic: "A legitimate security alert. The safe pattern is: no link, no secrets, act inside the official app.",
  },
];

export const arrestLines = [
  {
    line: "You are under digital arrest. Do not disconnect this video call.",
    truth: "There is no such thing as digital arrest in Indian law. Police do not detain you over WhatsApp, Skype, or any video call.",
  },
  {
    line: "I am calling from CBI / Mumbai Cyber Cell. Your Aadhaar is linked to a money-laundering case.",
    truth: "Real agencies send written notices through proper channels. They do not threaten you from an unknown video ID and they never ask you to stay on the call.",
  },
  {
    line: "Transfer the disputed amount to this RBI verification account so we can clear your name.",
    truth: "The RBI never collects “verification” money into a private account. Any transfer they demand is the theft.",
  },
  {
    line: "Share your screen and read out the OTP so we can confirm you are not the accused.",
    truth: "An OTP proves you control an account. Reading it aloud or showing it on screen lets them empty the account.",
  },
  {
    line: "If you tell your family or hang up, a warrant will be executed at your home tonight.",
    truth: "Isolation is the scam. Hang up, tell someone you trust, and call 1930. Warrants are not served as a video ultimatum.",
  },
];

export type AppSim = {
  id: string;
  name: string;
  claim: string;
  permissions: { name: string; risk: "low" | "high"; why: string }[];
};

export const appSims: AppSim[] = [
  {
    id: "flash",
    name: "Super Flashlight Pro",
    claim: "Turns on the torch. Nothing else.",
    permissions: [
      { name: "CAMERA (torch)", risk: "low", why: "A flashlight only needs the camera LED." },
      { name: "READ_SMS", risk: "high", why: "Reads every text, including bank OTPs. A torch does not need this." },
      { name: "BIND_ACCESSIBILITY_SERVICE", risk: "high", why: "Lets the app watch and tap other apps — the classic way to steal UPI and banking sessions." },
      { name: "SYSTEM_ALERT_WINDOW", risk: "high", why: "Draws fake screens over your real bank app so you type the PIN into the attacker’s overlay." },
    ],
  },
  {
    id: "loan",
    name: "Instant Loan APK",
    claim: "₹50,000 loan in 10 minutes. Install outside the Play Store.",
    permissions: [
      { name: "READ_CONTACTS", risk: "high", why: "Used to harass your family if you miss a fee — a known illegal-lending pattern." },
      { name: "READ_SMS", risk: "high", why: "Harvests OTPs the moment they arrive." },
      { name: "BIND_ACCESSIBILITY_SERVICE", risk: "high", why: "Controls the screen so the app can approve payments you never saw." },
      { name: "REQUEST_INSTALL_PACKAGES", risk: "high", why: "Sideloads more malware after the first install." },
    ],
  },
  {
    id: "notes",
    name: "Plain Notes (Play Store)",
    claim: "Offline notes. No account required.",
    permissions: [
      { name: "Storage for your notes", risk: "low", why: "Matches the stated job: save text on the device." },
      { name: "Notifications", risk: "low", why: "Optional reminders. No SMS, no accessibility, no overlay." },
    ],
  },
];

export const flashcards = [
  { id: "f1", front: "A text says your KYC expires in two hours and includes a link.", back: "Do not tap. Open the bank app you already installed, or call the number on your card." },
  { id: "f2", front: "What is a lookalike domain?", back: "A site that almost spells a real brand (hdfc-kyc-update.in). Check the exact domain before you type anything." },
  { id: "f3", front: "Someone promises UPI cashback if you enter your PIN.", back: "Refuse. A UPI PIN only authorises a payment. Cashback never needs it." },
  { id: "f4", front: "“You are under digital arrest.”", back: "Hang up. Digital arrest is not a legal process. Call 1930 and tell a family member." },
  { id: "f5", front: "A caller in uniform asks you to stay on a video call all night.", back: "Disconnect Wi-Fi and mobile data. Police do not interrogate people on WhatsApp or Skype." },
  { id: "f6", front: "“Transfer money to an RBI verification account.”", back: "That account is the scammer’s. The RBI never asks citizens to park money for clearance." },
  { id: "f7", front: "Why is READ_SMS dangerous on a flashlight app?", back: "It can read banking OTPs. The permission does not match a torch." },
  { id: "f8", front: "What does an accessibility-service abuse do?", back: "It lets malware see and tap other apps, including confirming UPI payments." },
  { id: "f9", front: "A courier email asks for ₹49 customs duty.", back: "Expect a phishing payment page. Track parcels only on the official carrier site or app." },
  { id: "f10", front: "You received an OTP you did not request.", back: "Do not share it with anyone, including people claiming to be the bank or police." },
  { id: "f11", front: "How should a family verify a scary official call?", back: "Hang up and call back on a published number (bank on the card, police via 112, cybercrime via 1930)." },
  { id: "f12", front: "Where should Android apps come from?", back: "The Play Store (or the vendor’s official store). Turn off “install unknown apps”." },
];

export const quiz = [
  {
    id: "q1",
    prompt: "An SMS from “SBI-ALERT” says your account will close unless you tap sbi-kyc-help.com. What do you do?",
    options: [
      "Tap the link and log in quickly so the account stays open",
      "Ignore the link and check status inside the official SBI app",
      "Forward the SMS to family so they can open it for you",
    ],
    answer: 1,
    why: "The link is a lookalike. Logging in there gives the attacker your password. The official app is the only safe status check.",
  },
  {
    id: "q2",
    prompt: "A WhatsApp message offers ₹2,500 UPI cashback if you enter your UPI PIN on their page. The safe move is:",
    options: [
      "Enter the PIN — cashback is credited only after PIN verification",
      "Pay ₹1 first to “activate” the reward",
      "Never enter a UPI PIN outside your own bank or UPI app",
    ],
    answer: 2,
    why: "The PIN authorises a debit. Reward pages that ask for it are theft.",
  },
  {
    id: "q3",
    prompt: "A person on video says they are CBI and you are under digital arrest. They forbid you to hang up.",
    options: [
      "Stay on the call and follow every instruction so the case is closed",
      "Disconnect data, hang up, tell someone, and call 1930",
      "Transfer a “security deposit” and then hang up",
    ],
    answer: 1,
    why: "Digital arrest is a coercion script. Isolation plus a money transfer is the crime. 1930 is the national cybercrime helpline.",
  },
  {
    id: "q4",
    prompt: "They tell you to move savings into an “RBI verification account” to prove innocence.",
    options: [
      "Transfer it — RBI accounts are always safe",
      "Refuse. RBI does not collect citizen money into a private account to clear a case",
      "Send half now and half after they email a receipt",
    ],
    answer: 1,
    why: "There is no consumer “verification account” workflow. The destination is the scammer.",
  },
  {
    id: "q5",
    prompt: "Super Flashlight Pro wants READ_SMS and Accessibility. What does that mismatch mean?",
    options: [
      "Those permissions make the torch brighter",
      "The app can read OTPs and control other apps — treat it as malware",
      "Android requires SMS access for every free app",
    ],
    answer: 1,
    why: "A torch needs the camera LED only. SMS plus accessibility is an OTP-stealing setup.",
  },
  {
    id: "q6",
    prompt: "A bank in-app message says a new device signed in and tells you to freeze access inside that same app. No link is included.",
    options: [
      "It is likely a real alert — use the app you already trust",
      "It is always phishing if it mentions a login",
      "Reply with your OTP so they can lock the device for you",
    ],
    answer: 0,
    why: "No link and no secret request is the safe pattern. Never send an OTP to “confirm” anything.",
  },
];

export const checklist = [
  { id: "c1", label: "Turn on two-step verification for WhatsApp" },
  { id: "c2", label: "Turn off “install unknown apps” on every phone at home" },
  { id: "c3", label: "Set a UPI PIN that is not a birthday or 1234, and never share it" },
  { id: "c4", label: "Save 1930 and cybercrime.gov.in where the family can find them" },
  { id: "c5", label: "Agree a code word: if a call forbids you to hang up, you hang up" },
  { id: "c6", label: "Check bank apps only from the icon you installed, never from SMS links" },
  { id: "c7", label: "Review app permissions and remove anything that can read SMS" },
  { id: "c8", label: "Lock Aadhaar biometrics when you do not need them (UIDAI site or mAadhaar)" },
  { id: "c9", label: "Tell older relatives that police never arrest anyone on a video call" },
  { id: "c10", label: "Use a screen lock and keep the phone OS updated" },
  { id: "c11", label: "Do not keep OTPs visible on the lock screen" },
  { id: "c12", label: "Verify caller claims by calling back on a number printed on the card or official site" },
];

export const knowledge = [
  {
    id: "k-phish",
    topic: "Phishing",
    title: "How a phish is built",
    keywords: "phishing kyc sms email link domain otp upi cashback courier",
    body: "A phish copies a brand, invents urgency, and moves you to a site the attacker controls. The three tells in this lab are a spoofed sender, a deadline, and a URL that is not the real organisation. Defence: do not use the message’s link. Open the official app, or type the known address yourself. Never enter a password, card number, or OTP on a page you reached from an unexpected text.",
  },
  {
    id: "k-upi",
    topic: "Phishing",
    title: "UPI and QR tricks",
    keywords: "upi pin qr collect request cashback",
    body: "A UPI PIN authorises money leaving your account. “Receive money” screens and collect requests can be dressed up as refunds. Scan QR codes only when you intend to pay that person. If a collect request appears, decline it. Banks and NPCI will not ask you to enter a PIN to receive cashback.",
  },
  {
    id: "k-arrest",
    topic: "Digital arrest",
    title: "The digital arrest script",
    keywords: "digital arrest cbi skype whatsapp police warrant",
    body: "Callers pose as CBI, police, or customs. They show a fake ID on video, name a crime, and order you to stay on the call. They then demand a transfer to a so-called verification account and a screen share. Indian law has no digital arrest. Disconnect the network, leave the room if you are shaken, tell a family member, and call 1930.",
  },
  {
    id: "k-otp",
    topic: "Digital arrest",
    title: "Why they want the screen and the OTP",
    keywords: "otp screen share skype",
    body: "While you are frightened and on camera, they start a transfer or a password reset. The OTP arrives on your phone. If they can see the screen, or you read the code aloud, they complete the theft in seconds. No investigator needs your OTP.",
  },
  {
    id: "k-apk",
    topic: "Malicious apps",
    title: "Permission mismatch",
    keywords: "apk permission sms accessibility flashlight loan",
    body: "Judge an app by the gap between what it claims to do and what it asks to access. A flashlight that wants SMS, contacts, and accessibility is not a flashlight. Accessibility services can read the screen and tap buttons inside banking apps. Overlay permission can paint a fake PIN pad on top of a real one.",
  },
  {
    id: "k-sideload",
    topic: "Malicious apps",
    title: "Sideloaded APKs and illegal loan apps",
    keywords: "sideload apk play store loan contacts",
    body: "Files shared on chat (“install this APK for your loan or KYC”) skip Play Protect. Illegal lending apps then read contacts and threaten relatives. Keep unknown-sources installation off. Uninstall anything you did not get from a store you trust, then change banking passwords from a clean device.",
  },
  {
    id: "k-help",
    topic: "Response",
    title: "If money already moved",
    keywords: "1930 cybercrime helpline freeze bank",
    body: "Call 1930 as soon as you can and report at cybercrime.gov.in. Ask your bank to freeze UPI and cards. Note the time, the amount, the UPI ID or account, and any phone numbers. Speed matters: banks can sometimes hold a fraudulent credit if they are told quickly. Do not pay a “recovery agent” who contacts you next — that is often a second scam.",
  },
];

export const prompts = [
  "How do I spot a fake KYC SMS?",
  "What is digital arrest?",
  "Why would a flashlight app read SMS?",
  "What should I do if I already paid?",
  "Is a UPI PIN safe to enter for cashback?",
];

export const podcastLines: { who: "Host" | "Expert"; text: string }[] = [
  { who: "Host", text: "Three scams are hitting Indian families at once: fake bank and courier messages, digital arrest video calls, and apps that are not what they claim." },
  { who: "Expert", text: "Start with the family rule. If a message has a link and a deadline, nobody taps it. You open the real bank or courier app instead." },
  { who: "Host", text: "And the video call that says you are under digital arrest?" },
  { who: "Expert", text: "That phrase is the scam. Police and the CBI do not arrest people on WhatsApp. Hang up, turn off data, and call 1930. Never move money to a so-called verification account, and never show an OTP on camera." },
  { who: "Host", text: "What about apps?" },
  { who: "Expert", text: "If the job is a torch or a loan form, it does not need to read SMS or run an accessibility service. Those permissions steal banking codes. Install only from the official store, and switch off unknown APK installs." },
  { who: "Host", text: "One line to leave on the fridge." },
  { who: "Expert", text: "No link, no PIN, no video-call arrest. If they will not let you hang up, that is the moment you hang up." },
];
