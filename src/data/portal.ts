export const threats = [
  {
    name: "Electricity bill cut-off",
    tags: "bill electricity discom link",
    summary: "A text says power will be cut in an hour unless you pay on a link.",
    defense: "Discoms do not take card or UPI PIN in a random SMS. Pay only in the official app or at the counter. The short deadline is the pressure tactic.",
  },
  {
    name: "Fake job offer",
    tags: "job offer telegram fee registration",
    summary: "A recruiter on Telegram or WhatsApp offers a work-from-home role, then asks for a registration or laptop fee.",
    defense: "Real employers do not charge you to join. Never pay a “refundable” deposit or install a remote-access app for an interview.",
  },
  {
    name: "Sextortion",
    tags: "sextortion webcam blackmail",
    summary: "A message claims they have a video of you and demands payment in crypto or UPI.",
    defense: "Do not pay and do not reply. Paying marks you as someone who will pay again. Block, keep the message, and report on 1930. Tell someone you trust.",
  },
  {
    name: "Deepfake video call",
    tags: "deepfake video relative",
    summary: "A video call looks and sounds like a relative asking for money right now.",
    defense: "Hang up and call that person back on the number you already have. Agree a family question only they would answer. Urgency plus a new number is the tell.",
  },
  {
    name: "Digital arrest",
    tags: "digital arrest cbi skype",
    summary: "A caller in uniform says you are under digital arrest and must stay on the video call.",
    defense: "There is no digital arrest. Disconnect data, hang up, and call 1930. Never transfer money to a verification account.",
  },
  {
    name: "UPI collect request",
    tags: "upi qr collect pin",
    summary: "A QR or collect request is labelled as a refund or cashback.",
    defense: "Entering a UPI PIN sends money out. Decline collect requests you did not start. Cashback never needs a PIN.",
  },
  {
    name: "Malicious APK",
    tags: "apk loan flashlight sms",
    summary: "A chat file asks you to install an app outside the store, often a loan or “KYC” tool.",
    defense: "Keep unknown-app installs off. A torch or form does not need SMS or accessibility. Uninstall and change banking passwords from a clean phone if you already installed it.",
  },
  {
    name: "Customs or courier hold",
    tags: "courier customs parcel",
    summary: "An email says a parcel is stuck until you pay a small fee.",
    defense: "Track only on the carrier you actually used. Lookalike domains and a tiny fee are there to steal the card or UPI that follows.",
  },
];

export const firstHour = [
  "Disconnect Wi-Fi and mobile data. Leave the call.",
  "Do not send another rupee, OTP, or screen share, even if they say it will “reverse” the first payment.",
  "Call 1930 and file at cybercrime.gov.in. Note the time, amount, UPI ID or account, and phone numbers.",
  "Call the number on your bank card and ask them to block UPI, cards, and netbanking.",
  "Tell one family member. Isolation is part of the scam.",
  "Ignore anyone who messages next offering paid “recovery.” That is often a second scam.",
];

export const contacts = [
  { name: "National Cybercrime Helpline", detail: "1930 — report financial fraud as soon as you can" },
  { name: "Online report", detail: "cybercrime.gov.in" },
  { name: "Emergency", detail: "112 — if you are in immediate danger" },
  { name: "Your bank", detail: "Use the number printed on the card or inside the official app. Do not use a number from the suspicious call." },
];

export const team = [
  { name: "Mayur Anand", role: "Lead developer and architect", detail: "System design, the practice desk, and how the sections fit together." },
  { name: "Vikrant Reddy", role: "Documentation and report lead", detail: "Project report, structure, and final formatting." },
  { name: "Imran Khan", role: "Content and localisation", detail: "Scenario research and the India-focused quiz and scam notes." },
  { name: "Nanda", role: "Community survey and presentation", detail: "Session plan, audience notes, and the viva presentation." },
];
