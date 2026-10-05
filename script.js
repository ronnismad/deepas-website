/* ============================================================
   Deepa's — interactions
   i18n (en/bn) · reveals · nav · form
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ============================================================
     LANGUAGE
     English is the source text in the markup; Bengali lives here.
     data-i18n      → textContent
     data-i18n-html → innerHTML (headings that carry <em>)
     data-i18n-ph   → placeholder
     data-i18n-aria → aria-label
     ============================================================ */
  var STRINGS = {
    en: {
      "__title": "Deepa's — Handwoven Sarees from Bengal",
      "__desc": "Deepa's is a West Bengal boutique by two sisters, Kamelia and Mistu. Traditionally handwoven sarees from the state's great looms — Shantipur, Phulia, Begampur, Dhaniakhali, Bishnupur and Murshidabad — priced for everyone.",
      "ui.invalid": "Please complete the highlighted fields.",
      "ui.ok": "Thank you! Opening your email app…",

      "nav.about": "About",
      "nav.weavers": "Weavers",
      "nav.collections": "Collections",
      "nav.terms": "Terms",
      "nav.contact": "Contact",
      "nav.cta": "Enquire",

      "hero.eyebrow": "Handwoven in Bengal · Small batches",
      "hero.title": "Deepa's",
      "hero.sub": "Boutique Saree Collection",
      "hero.lede": "Heirloom sarees from Bengal's legendary looms — Shantipur and Phulia cottons, Bishnupur Baluchari, Dhaniakhali, Begampur and Murshidabad silk — chosen thread by thread, priced for everyone.",
      "hero.b1": "View sarees",
      "hero.b2": "Our story",
      "hero.scroll": "Scroll",

      "band.1": "Shantipur",
      "band.2": "Phulia",
      "band.3": "Begampur",
      "band.4": "Dhaniakhali",
      "band.5": "Bishnupur",
      "band.6": "Murshidabad",
      "band.7": "Santiniketan",

      "about.k": "01 — About · আমাদের কথা",
      "about.title": "Two sisters, one <em>mother's dream</em>",
      "about.cap1": "Kamelia & Mistu",
      "about.cap2": "Est. with love",
      "about.lead": "Deepa's is an initiative of two sisters, Kamelia and Mistu. The name is their late mother's first name — Deepa — whose dream was to open a boutique of her own.",
      "about.p1": "For years they bought boutique sarees that looked lovely in the shop and frayed after one wash, at prices that never quite matched what they were getting. Unsatisfied with that, the sisters decided to start their own boutique: one built to make genuinely high-quality sarees affordable, and reachable by everyone.",
      "about.p2": "So they went to the looms themselves. Every Deepa's saree is <em>traditionally handwoven</em> by artisan families across Bengal's great weaving hubs — GI-tagged Shantipur, Begampur and Dhaniakhali cotton, the narrative Baluchari silk of Bishnupur, Murshidabad silk, and hand-stitched kantha from Santiniketan. No powerloom shortcuts, no middlemen.",
      "about.p3": "Maa's name is on the door. Her dream is in every drape.",
      "about.s1n": "6", "about.s1t": "Weaving hubs",
      "about.s2n": "100%", "about.s2t": "Handloom",
      "about.s3n": "40+", "about.s3t": "Weaver families",

      "weavers.k": "02 — The loom road · তাঁতের পথ",
      "weavers.title": "Six towns, one <em>handloom belt</em>",
      "weavers.sub": "Our sarees are woven traditionally in the great saree-weaving hubs of West Bengal — in family looms that have been running for generations, most of them GI-tagged for exactly the cloth they make.",
      "hub.gi": "GI tagged",
      "hub.cluster": "Shantipur cluster",
      "hub.silk": "Silk country",
      "hub.1.d": "Nadia district · cotton tant",
      "hub.1.f": "Weaving here dates to 1409. The Shantipuri sari has carried a GI tag since 2009 and is still folded the old way, in the Guti Bhanj.",
      "hub.2.d": "Nadia district · Tangail & jamdani",
      "hub.2.f": "The other half of the Shantipur cluster: 12,000 looms and 36,000 weavers, the densest stretch of handlooms in Bengal.",
      "hub.3.d": "Hooghly district · cotton tant",
      "hub.3.f": "Matapar and Booty borders on a khatkhti loom, a craft recorded here since the 16th century and GI-tagged in 2026.",
      "hub.4.d": "Hooghly district · cotton tant",
      "hub.4.f": "100 × 100 thread count, a 1.5–2 inch border and the traditional grey body — the plain, honest everyday saree.",
      "hub.5.d": "Bankura district · Baluchari silk",
      "hub.5.f": "Terracotta temple scenes lifted straight onto the pallu — Mahabharata episodes woven into silk over five or six days. GI since 2011.",
      "hub.6.d": "Murshidabad district · mulberry silk",
      "hub.6.f": "Bengal's silk town since the 13th century and the source of Garad, Korial and Baluchari — fine, light and easy to drape.",

      "col.k": "03 — Collections · সংগ্রহ",
      "col.title": "Woven where it has <em>always</em> been woven",
      "col.sub": "Six families of cloth, each from the town that gave it its name. Prices stay honest because we buy at the loom.",
      "col.1.t": "Shantipuri Tant",
      "col.1.p": "Feather-light cotton with extra-weft motifs worked in by hand, woven at Shantipur and folded the Guti Bhanj way.",
      "col.1.m": "Cotton · Shantipur, Nadia · GI 2009",
      "col.2.t": "Begampuri Tant",
      "col.2.p": "Contrasting body and border, Matapar and Booty patterns, on the khatkhti frame loom the town has used for centuries.",
      "col.2.m": "Cotton · Begampur, Hooghly · GI 2026",
      "col.3.t": "Dhaniakhali Tant",
      "col.3.p": "The workaday saree done properly — 100 × 100 count, a firm inch-and-a-half border, traditionally left in its natural grey.",
      "col.3.m": "Cotton · Dhaniakhali, Hooghly · GI",
      "col.4.t": "Baluchari Silk",
      "col.4.p": "A whole epic on the pallu: Mahabharata and Ramayana scenes drawn from Bishnupur's terracotta walls, a week on the loom.",
      "col.4.m": "Silk · Bishnupur, Bankura · GI 2011",
      "col.5.t": "Murshidabad Garad",
      "col.5.p": "Undyed mulberry silk with a woven border — the auspicious white-and-maroon saree, light enough to drape all day.",
      "col.5.m": "Silk · Murshidabad · GI registered",
      "col.6.t": "Nakshi Kantha",
      "col.6.p": "Not a loom but a needle: running-stitch embroidery in flowers, birds and geometry, made by hand around Santiniketan.",
      "col.6.m": "Cotton · Santiniketan, Birbhum · GI",

      "banner.q": "High quality should never be a <em>luxury</em>.",
      "banner.c": "— Kamelia & Mistu, founders",

      "contact.k": "04 — Contact · যোগাযোগ",
      "contact.title": "Tell us what you are <em>looking for</em>",
      "contact.sub": "A wedding, a gift, an everyday saree you will actually wear — write to us and we will pull together options from the looms.",
      "form.name": "Name",
      "form.namePh": "Your name",
      "form.email": "Email",
      "form.emailPh": "you@example.com",
      "form.topic": "Interested in",
      "form.t1": "Everyday tant",
      "form.t2": "Silk & occasion",
      "form.t3": "Bridal & trousseau",
      "form.t4": "Kantha & hand-work",
      "form.t5": "Something else",
      "form.msg": "Message",
      "form.msgPh": "Colours, length, budget, occasion…",
      "form.send": "Send enquiry",
      "info1.t": "Write to us",
      "info2.t": "Call the boutique",
      "info3.t": "Studio",
      "info3.p": "Kolkata, West Bengal — visits by appointment.",
      "info4.t": "Hours",
      "info4.p": "Tue – Sun · 11:00 – 19:00 IST",

      "terms.k": "05 — Terms · শর্তাবলী",
      "terms.title": "Small shop, <em>plain rules</em>",
      "terms.1.t": "Ordering & payment",
      "terms.1.p": "Orders are confirmed once payment is received. We accept UPI, cards and bank transfer. Because every saree is handwoven, pieces are reserved for 48 hours while you decide.",
      "terms.2.t": "Shipping within India",
      "terms.2.p": "Dispatched from Kolkata within 2–4 working days and delivered across India in roughly a week. Handloom pieces travel folded in muslin, never in plastic.",
      "terms.3.t": "Returns & exchange",
      "terms.3.p": "Unworn sarees with tags intact may be returned within 7 days of delivery for an exchange or credit. Sale and altered pieces are final.",
      "terms.4.t": "Caring for handloom cloth",
      "terms.4.p": "Soak cotton tant once in cold salted water to set the colour, wash mild, starch lightly and dry in shade. Dry-clean silks. Slubs, uneven selvedge and slight shade variation are the signature of the hand, not a defect.",
      "terms.5.t": "Authenticity",
      "terms.5.p": "Where a cloth carries a Geographical Indication, we name the town it comes from and the tag it holds. If a piece turns out not to be handwoven as described, we will refund it in full.",
      "terms.upd": "Last updated — October 2026.",

      "footer.tag": "Handwoven in West Bengal",
      "footer.by": "An initiative of Kamelia & Mistu"
    },

    bn: {
      "__title": "দীপা'স — বাংলার হাতে বোনা শাড়ি",
      "__desc": "দীপা'স হলো দুই বোন কামেলিয়া ও মিষ্টুর পশ্চিমবঙ্গের বুটিক। রাজ্যের মহান তাঁত-কেন্দ্র — শান্তিপুর, ফুলিয়া, বেগমপুর, ধনিয়াখালি, বিষ্ণুপুর ও মুর্শিদাবাদ — থেকে ঐতিহ্যভাবে বোনা শাড়ি, সবার জন্য সাশ্রয়ী দামে।",
      "ui.invalid": "চিহ্নিত ঘরগুলো পূরণ করুন।",
      "ui.ok": "ধন্যবাদ! আপনার ইমেইল অ্যাপ খোলা হচ্ছে…",

      "nav.about": "আমাদের কথা",
      "nav.weavers": "তাঁতিরা",
      "nav.collections": "সংগ্রহ",
      "nav.terms": "শর্তাবলী",
      "nav.contact": "যোগাযোগ",
      "nav.cta": "জিজ্ঞাসা করুন",

      "hero.eyebrow": "বাংলায় হাতে বোনা · সীমিত পরিমাণ",
      "hero.title": "দীপা'স",
      "hero.sub": "বুটিক শাড়ির সংগ্রহ",
      "hero.lede": "বাংলার বিখ্যাত তাঁত থেকে আসা পুরোনোমানের শাড়ি — শান্তিপুর ও ফুলিয়ার তাঁত, বিষ্ণুপুরের বালুচরি, ধনিয়াখালি, বেগমপুর আর মুর্শিদাবাদের রেশম — সুতো বেছে বেছে নেওয়া, সবার জন্য সাশ্রয়ী দামে।",
      "hero.b1": "শাড়ি দেখুন",
      "hero.b2": "আমাদের গল্প",
      "hero.scroll": "নিচে যান",

      "band.1": "শান্তিপুর",
      "band.2": "ফুলিয়া",
      "band.3": "বেগমপুর",
      "band.4": "ধনিয়াখালি",
      "band.5": "বিষ্ণুপুর",
      "band.6": "মুর্শিদাবাদ",
      "band.7": "সাঁতালিকেতন",

      "about.k": "01 — আমাদের কথা · About",
      "about.title": "দুই বোন, একটা <em>মায়ের স্বপ্ন</em>",
      "about.cap1": "কামেলিয়া ও মিষ্টু",
      "about.cap2": "ভালোবাসা দিয়ে প্রতিষ্ঠিত",
      "about.lead": "দীপা'স হলো দুই বোন কামেলিয়া ও মিষ্টুর উদ্যোগ। নামটি এসেছে তাদের প্রয়াত মায়ের প্রথম নাম দীপা'র কাছ থেকে — যার স্বপ্ন ছিল নিজের একটা বুটিক খোলা।",
      "about.p1": "বহু বছর ধরে তারা এমন বুটিকের শাড়ি কিনেছে যেগুলি দোকানে দেখতে সুন্দর কিন্তু এক ধোয়ায়ই ছেঁড়া পড়ে যেত, আর দাম কোনোদিন তার সঙ্গে মেলত না। এতে অসন্তুষ্ট হয়ে বোনরা ঠিক করেন নিজেদের বুটিক শুরু করতে — যেখানে সত্যিকারের মানের শাড়ি হবে সাশ্রয়ী, আর সবার কাছে পৌঁছে যাবে।",
      "about.p2": "তাই নিজেরা সরাসরি তাঁতের কাছে যান। প্রতিটি দীপা'স শাড়ি বাংলার মহান তাঁত-কেন্দ্রগুলোতে কারিগর পরিবারদের হাতে <em>ঐতিহ্যভাবে বোনা</em> — জিআই ট্যাগধারী শান্তিপুর, বেগমপুর ও ধনিয়াখালির তাঁত, বিষ্ণুপুরের গল্পবালুচরি রেশম, মুর্শিদাবাদের রেশম, আর সাঁতালিকেতনের হাতে সেলাই করা কাঁথা। কোনো পাওয়ারলুমের ছোট পথ নেই, কোনো দালাল নেই।",
      "about.p3": "মায়ের নাম দরজায় লেখা। তার স্বপ্ন প্রতিটি শাড়িতে।",
      "about.s1n": "6", "about.s1t": "তাঁত-কেন্দ্র",
      "about.s2n": "100%", "about.s2t": "হাতের তাঁত",
      "about.s3n": "40+", "about.s3t": "তাঁতি পরিবার",

      "weavers.k": "02 — তাঁতের পথ · The loom road",
      "weavers.title": "ছয়টি শহর, একটি <em>তাঁতের সারি</em>",
      "weavers.sub": "আমাদের শাড়ি বোনা হয় পশ্চিমবঙ্গের মহান শাড়ি-তাঁত-কেন্দ্রগুলোতে, ঐতিহ্যভাবে — সেই পারিবারিক তাঁতে যা প্রজন্ম ধরে চলছে, যাদের বেশিরভাগই তাদের বোনা কাপড়ের জন্যই জিআই ট্যাগ পেয়েছে।",
      "hub.gi": "জিআই ট্যাগ",
      "hub.cluster": "শান্তিপুর ক্লাস্টার",
      "hub.silk": "রেশমের দেশ",
      "hub.1.d": "নদিয়া জেলা · সুতি তাঁত",
      "hub.1.f": "এখানকার তাঁতের হিসাব ১৪০৯ সাল থেকে। শান্তিপুরী শাড়ি ২০০৯ সাল থেকে জিআই ট্যাগ পাচ্ছে, আর এখনো সেই পুরোনো ভাবে, গুটি ভাঁজে ভাঁজ করা হয়।",
      "hub.2.d": "নদিয়া জেলা · ট্যাংগেল ও জামদানি",
      "hub.2.f": "শান্তিপুর ক্লাস্টারের অপর অর্ধেক: ১২ হাজার তাঁত, ৩৬ হাজার তাঁতি — বাংলার সবচেয়ে ঘন তাঁতের জঙ্গল।",
      "hub.3.d": "হুগলি জেলা · সুতি তাঁত",
      "hub.3.f": "খাতখাটি তাঁতে মাতাপার ও বুটির পাড় — ষোলো শতক থেকে চলা এই শিল্প, ২০২৬ সালে জিআই ট্যাগ।",
      "hub.4.d": "হুগলি জেলা · সুতি তাঁত",
      "hub.4.f": "১০০ × ১০০ সুতার গণনা, দেড়–দুই ইঞ্চির পাড় আর ঐতিহ্যবাহী ধূসর দেহ — সাদাসিধা, নির্ভরযোগ্য রোজকারের শাড়ি।",
      "hub.5.d": "বাঁকুড়া জেলা · বালুচরি রেশম",
      "hub.5.f": "টেরাকোটা মন্দিরের দৃশ্য সরাসরি আঁচলে — পাঁচ–ছয় দিনে রেশমে বোনা মহাভারতের প্রসঙ্গ। ২০১১ সাল থেকে জিআই।",
      "hub.6.d": "মুর্শিদাবাদ জেলা · মালবরি রেশম",
      "hub.6.f": "তেরো শতক থেকে বাংলার রেশমের শহর, গড়দ, কোরিয়াল ও বালুচরির উৎস — সূক্ষ্ম, হালকা, সহজে জড়ানো যায়।",

      "col.k": "03 — সংগ্রহ · Collections",
      "col.title": "<em>যেখানে</em> শুরু থেকেই বোনা হয়, সেখানেই",
      "col.sub": "ছয়টি কাপড়ের পরিবার, প্রতিটি তার নাম দেওয়া শহর থেকে। তাঁত থেকেই কিনি, তাই দাম থাকে সৎ।",
      "col.1.t": "শান্তিপুরী তাঁত",
      "col.1.p": "পরকের মতো হালকা সুতি, অতিরিক্ত ওফ-এর নকশা হাতে বসানো, শান্তিপুরে বোনা, গুটি ভাঁজে ভাঁজ করা।",
      "col.1.m": "সুতি · শান্তিপুর, নদিয়া · GI 2009",
      "col.2.t": "বেগমপুরী তাঁত",
      "col.2.p": "দেহ আর পাড়ে বিপরীত রঙ, মাতাপার ও বুটির নকশা, শতক ধরে শহরের খাতখাটি ফ্রেম তাঁতে।",
      "col.2.m": "সুতি · বেগমপুর, হুগলি · GI 2026",
      "col.3.t": "ধনিয়াখালি তাঁত",
      "col.3.p": "রোজকারের শাড়ি যথাযথভাবে — ১০০ × ১০০ গণনা, অড়বাড় দেড় ইঞ্চির পাড়, ঐতিহ্যভাবে তার নিজের ধূসর রঙেই ছাড়া।",
      "col.3.m": "সুতি · ধনিয়াখালি, হুগলি · GI",
      "col.4.t": "বালুচরি রেশম",
      "col.4.p": "আঁচলে সমগ্র মহাকাব্য: বিষ্ণুপুরের টেরাকোটা দেয়াল থেকে নেওয়া মহাভারত ও রামায়ণের দৃশ্য, তাঁতে এক সপ্তাহ সময়।",
      "col.4.m": "রেশম · বিষ্ণুপুর, বাঁকুড়া · GI 2011",
      "col.5.t": "মুর্শিদাবাদী গড়দ",
      "col.5.p": "রঙ ছাড়া রেশমের দেহ, বোনা পাড় — শুভে পরার সাদা-লাল শাড়ি, দিনভর পরার মতো হালকা।",
      "col.5.m": "রেশম · মুর্শিদাবাদ · GI নিবন্ধিত",
      "col.6.t": "নকশি কাঁথা",
      "col.6.p": "তাঁত নয়, সুই: ফুল, পাখি আর জ্যামিতিতে রানিং স্টিচ সেলাই, সাঁতালিকেতনের আশপাশে হাতে তৈরি।",
      "col.6.m": "সুতি · সাঁতালিকেতন, বীরভূম · GI",

      "banner.q": "ভালো মান কখনোই <em>বিলাসিতা</em> হওয়া উচিত নয়।",
      "banner.c": "— কামেলিয়া ও মিষ্টু, প্রতিষ্ঠাতা",

      "contact.k": "04 — যোগাযোগ · Contact",
      "contact.title": "আমাদের বলুন <em>কী খুঁজছেন</em>",
      "contact.sub": "বিয়ে, উপহার, বা এমন এক রোজকারের শাড়ি যা সত্যিই পরবেন — লিখুন, তাঁত থেকে বেছে এনে দেখাব।",
      "form.name": "নাম",
      "form.namePh": "আপনার নাম",
      "form.email": "ইমেইল",
      "form.emailPh": "you@example.com",
      "form.topic": "যাতে আগ্রহ",
      "form.t1": "রোজকারের তাঁত",
      "form.t2": "রেশম ও অনুষ্ঠান",
      "form.t3": "বিবাহ ও কনেদের পোশাক",
      "form.t4": "কাঁথা ও হাতের কাজ",
      "form.t5": "অন্য কিছু",
      "form.msg": "বার্তা",
      "form.msgPh": "রঙ, দৈর্ঘ্য, বাজেট, উপলক্ষ…",
      "form.send": "অনুরোধ পাঠান",
      "info1.t": "আমাদের লিখুন",
      "info2.t": "বুটিকে ফোন করুন",
      "info3.t": "স্টুডিও",
      "info3.p": "কলকাতা, পশ্চিমবঙ্গ — আগাম সময় নিয়ে দেখা।",
      "info4.t": "সময়",
      "info4.p": "মঙ্গল – রবি · 11:00 – 19:00 IST",

      "terms.k": "05 — শর্তাবলী · Terms",
      "terms.title": "ছোট দোকান, <em>সহজ নিয়ম</em>",
      "terms.1.t": "অর্ডার ও পরিশোধ",
      "terms.1.p": "পেমেন্ট পাওয়ার পরেই অর্ডার নিশ্চিত হয়। আমরা ইউপিআই, কার্ড ও ব্যাংক ট্রান্সফার গ্রহণ করি। প্রতিটি শাড়ি হাতে বোনা বলে পছন্দ হলে ৪৮ ঘণ্টা সংরক্ষিত থাকে।",
      "terms.2.t": "ভারতজুড়ে ডেলিভারি",
      "terms.2.p": "কলকাতা থেকে ২–৪ কর্মদিবসের মধ্যে পাঠানো হয়, আর সারা ভারতে প্রায় এক সপ্তাহে পৌঁছায়। তাঁতের পিস মলমলে মুড়ে যায়, কখনো প্লাস্টিকে নয়।",
      "terms.3.t": "ফেরত ও বদল",
      "terms.3.p": "ট্যাগ সহ না পরা শাড়ি ডেলিভারির ৭ দিনের মধ্যে বদল বা ক্রেডিটের জন্য ফেরত দেওয়া যায়। সেল ও সংশোধিত পিস চূড়ান্ত।",
      "terms.4.t": "তাঁতের কাপড়ের যত্ন",
      "terms.4.p": "সুতি তাঁত একবার লবণ মিশ্রিত ঠান্ডা পানিতে ভিজিয়ে রঙ স্থির করুন, মৃদু ডিটার্জেন্টে ধোয়ান, সামান্য ষ্টার্চ, ছায়ায় শুকান। রেশম ড্রাই ক্লিন করুন। সুতোর অসমতা, অসম পাড় বা হালকা রঙের পার্থক্য হাতের কাজের সই, ত্রুটি নয়।",
      "terms.5.t": "প্রামাণিকতা",
      "terms.5.p": "যে কাপড়ে ভৌগোলিক নির্দেশ থাকে, তার উৎসের শহর আর ট্যাগ আমরা লিখে দিই। বর্ণনা অনুযায়ী হাতে বোনা না হলে পুরো টাকা ফেরত।",
      "terms.upd": "সর্বশেষ হালনাগাদ — অক্টোবর 2026।",

      "footer.tag": "পশ্চিমবঙ্গে হাতে বোনা",
      "footer.by": "কামেলিয়া ও মিষ্টুর উদ্যোগ"
    }
  };

  var LANG_KEY = "deepas.lang";
  var lang = "en";

  function readStoredLang() {
    var stored = null;
    try { stored = window.localStorage.getItem(LANG_KEY); } catch (e) { stored = null; }
    if (stored === "en" || stored === "bn") return stored;
    var nav = (navigator.language || "").toLowerCase();
    return nav.indexOf("bn") === 0 ? "bn" : "en";
  }

  function t(key) {
    var v = STRINGS[lang][key];
    return v == null ? STRINGS.en[key] : v;
  }

  function applyLang(next) {
    if (!STRINGS[next]) next = "en";
    lang = next;
    var dict = STRINGS[next];

    document.documentElement.lang = next;

    $$("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    $$("[data-i18n-html]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-html")];
      if (v != null) el.innerHTML = v;
    });
    $$("[data-i18n-ph]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-ph")];
      if (v != null) el.setAttribute("placeholder", v);
    });
    $$("[data-i18n-aria]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-aria")];
      if (v != null) el.setAttribute("aria-label", v);
    });

    if (dict.__title) document.title = dict.__title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc && dict.__desc) desc.setAttribute("content", dict.__desc);

    $$(".lang-switch button").forEach(function (btn) {
      var on = btn.getAttribute("data-lang") === next;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    try { window.localStorage.setItem(LANG_KEY, next); } catch (e) { /* private mode */ }

    window.dispatchEvent(new CustomEvent("deepas:langchange", { detail: { lang: next } }));
  }

  $$(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  applyLang(readStoredLang());

  /* ---------- year ---------- */
  var yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- stagger reveal delays within groups ---------- */
  $$(".hero__content .reveal, .stats .reveal, .cards .reveal, .hubs .reveal, .contact__aside .reveal, .terms__list .reveal")
    .forEach(function (el, i) {
      el.style.setProperty("--d", (i % 6) * 90 + "ms");
    });

  /* ---------- reveal on scroll ---------- */
  var revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
    // hero is always above the fold — reveal it on load so short viewports
    // (where rootMargin/threshold can never intersect) don't strand it hidden
    requestAnimationFrame(function () {
      $$(".hero__content .reveal").forEach(function (el) {
        revealObserver.unobserve(el);
        el.classList.add("in-view");
      });
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ---------- nav state ---------- */
  var nav = $("#nav");
  var navLinks = $("#navLinks");
  var navToggle = $("#navToggle");
  var progressBar = $("#progressBar");
  var sections = $$("section[id]");
  var linkMap = {};
  $$(".nav__links a[href^='#']").forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    if (!linkMap[id]) linkMap[id] = [];
    linkMap[id].push(a);
  });

  function setMenu(open) {
    navLinks.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }
  navToggle.addEventListener("click", function () {
    setMenu(!navLinks.classList.contains("open"));
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  /* ---------- scroll driven effects ---------- */
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var docH = document.documentElement.scrollHeight - window.innerHeight;
    var docH2 = docH > 0 ? docH : 1;

    /* progress bar */
    if (progressBar) progressBar.style.width = Math.min(100, (y / docH2) * 100) + "%";

    /* nav */
    nav.classList.toggle("scrolled", y > 40);

    /* active link */
    var current = "";
    sections.forEach(function (sec) {
      if (sec.id && y >= sec.offsetTop - window.innerHeight * 0.4) current = sec.id;
    });
    Object.keys(linkMap).forEach(function (id) {
      linkMap[id].forEach(function (a) {
        a.classList.toggle("active", id === current && !a.classList.contains("nav__cta"));
      });
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }
  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", requestTick);
  window.addEventListener("deepas:langchange", requestTick);
  onScroll();

  /* ---------- card tilt ---------- */
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    $$("[data-tilt]").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
        var ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
        card.style.transform = "perspective(900px) rotateX(" + rx.toFixed(2) +
          "deg) rotateY(" + ry.toFixed(2) + "deg) translateY(-10px)";
      });
      card.addEventListener("mouseleave", function () { card.style.transform = ""; });
    });
  }

  /* ---------- terms: one open at a time ---------- */
  var terms = $$(".term");
  terms.forEach(function (d) {
    d.addEventListener("toggle", function () {
      if (d.open) {
        terms.forEach(function (other) { if (other !== d) other.open = false; });
      }
    });
  });

  /* ---------- contact form ---------- */
  var form = $("#contactForm");
  var note = $("#formNote");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#name", form);
      var email = $("#email", form);
      var topic = $("#topic", form);
      var message = $("#message", form);
      var valid = true;

      [name, email, message].forEach(function (field) {
        var ok = field.value.trim().length > 0 &&
          (field.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()));
        field.classList.toggle("invalid", !ok);
        if (!ok) valid = false;
      });

      if (!valid) {
        note.classList.remove("ok");
        note.textContent = t("ui.invalid");
        return;
      }

      var subject = encodeURIComponent("Deepa's — " + topic.value + " (" + name.value.trim() + ")");
      var body = encodeURIComponent(
        "Name: " + name.value.trim() + "\n" +
        "Email: " + email.value.trim() + "\n" +
        "Interested in: " + topic.value + "\n\n" +
        message.value.trim()
      );
      note.classList.add("ok");
      note.textContent = t("ui.ok");
      window.location.href = "mailto:hello@deepas.example?subject=" + subject + "&body=" + body;
      form.reset();
    });

    form.addEventListener("input", function (e) {
      if (e.target.classList) e.target.classList.remove("invalid");
      if (note && note.textContent) { note.textContent = ""; note.classList.remove("ok"); }
    });
  }
})();
