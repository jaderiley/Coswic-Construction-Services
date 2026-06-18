/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "Coswic Construction Services",
    phone:     "+27 72 856 0676",
    whatsapp:  "+27 72 856 0676",
    address:   "11 James Hyde Pl, Randburg, South Africa",
    hours:     "Mon–Sat 7am–6pm · Emergency 24/7",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Randburg",
      "Northcliff",
      "Cresta",
      "Bordeaux",
      "Robindale",
      "Windsor East",
      "Fontainebleau",
      "Bloubosrand"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "Coswic Construction Services — Plumber in randburg",
    description: "Coswic Construction Services provides professional plumber in Randburg. 9 Google reviews. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "ember",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Plumber · Randburg & surrounds",
    heroTitle:  "Burst pipe? Blocked drain? <em>We will fix it fast.</em>",
    heroLead:   "Coswic Construction Services provides fast, reliable plumbing services for homes and businesses across Randburg and the surrounding areas. Emergency callouts welcome.",

    googleRating: "4.8",
    reviewsCount: "9",
    featuredQuote: "Had a burst pipe at 10pm. They answered, arrived within an hour and fixed it cleanly. Brilliant service.",
    featuredQuoteAuthor: "— Thabo M., Google review",

    trustSignals: ["Emergency callouts", "Leak detection", "Drain unblocking", "Geyser repairs"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "All the plumbing work you'd expect from a local expert.",
    servicesLead:  "From a dripping tap to a burst geyser — we arrive fast, quote clearly and get it fixed.",
    services: [
      {
        icon:  "droplet",
        title: "Emergency plumbing",
        desc:  "Burst pipes, major leaks and flooded rooms handled fast, day or night. We answer the phone when others do not."
      },
      {
        icon:  "wrench",
        title: "Drain unblocking",
        desc:  "Blocked sink, toilet or main drain? We clear it properly — not just the surface blockage that comes back in a week."
      },
      {
        icon:  "circuit",
        title: "Geyser repairs & replacement",
        desc:  "Leaking, not heating or tripping the breaker? We repair or replace geysers and get hot water back quickly."
      },
      {
        icon:  "gauge",
        title: "Leak detection",
        desc:  "We trace hidden leaks in walls and underground pipes without unnecessary digging, then repair them correctly."
      },
      {
        icon:  "bolt",
        title: "Pipe repairs & relaying",
        desc:  "Cracked, corroded or leaking pipes repaired or repiped properly so the problem does not come back next month."
      },
      {
        icon:  "hardhat",
        title: "Bathroom & kitchen plumbing",
        desc:  "New basin, toilet, shower or kitchen sink installation. We fit it properly so it lasts."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Emergency plumbing",
        title:   "Fast response, proper fix",
        caption: "Emergency plumbing calls handled quickly. We arrive, assess and fix rather than patching and promising to come back."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Drain unblocking",
        title:   "Cleared completely, not just temporarily",
        caption: "Drain blockages cleared to the cause — not just pushed down the line to come back in a month."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Geyser work",
        title:   "Hot water restored",
        caption: "Geyser repairs, pressure valve replacements and full geyser swaps handled on the same day where possible."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Leak detection",
        title:   "Found and fixed, less digging",
        caption: "Hidden leaks traced with pressure testing and listening equipment before any wall or floor is opened."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Pipe repairs",
        title:   "Repaired to last",
        caption: "Cracked and corroded pipes repaired properly using the right materials and fittings for the application."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Coswic Construction Services team at work in Randburg",
      text:  "Fast, reliable plumbing — emergency callouts welcome."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Randburg. Serving the wider area.",
    areasLead:  "We cover Randburg, Northcliff, Cresta and the surrounding suburbs. Emergency callouts available throughout the area.",
    areasNote:  "Not on this list? Call us — we cover most of the greater Johannesburg area for emergencies.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why neighbours keep calling us back.",
    why: [
      {
        title: "We answer the phone",
        desc:  "Plumbing emergencies do not keep office hours — and neither do we. Call any time and we will get someone moving."
      },
      {
        title: "Quote before we start",
        desc:  "We give you a price before touching anything. No surprises on the invoice."
      },
      {
        title: "We fix it properly",
        desc:  "Not a temporary patch — a real repair using the right fittings and materials so the problem stays fixed."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 9 verified Google reviews.",
    reviews: [
      {
        body:   "Had a burst pipe at 10pm. They answered, arrived within an hour and fixed it cleanly. Brilliant service.",
        name:   "Thabo M.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Used them for a leaking geyser and a blocked drain the same week. Honest pricing and excellent work both times.",
        name:   "Sandra K.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Finally found a plumber who actually shows up when they say they will. Highly recommend.",
        name:   "Pieter V.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Common plumbing questions.",
    faqLead:  "What most people ask before booking.",
    faq: [
      {
        q: "Do you do emergency callouts after hours?",
        a: "Yes — we handle emergency plumbing calls around the clock. Call us with what is happened and we will get the nearest plumber moving."
      },
      {
        q: "How quickly can you get here?",
        a: "Response time depends on location and time of day, but we aim to be with you within an hour for genuine emergencies in our service area."
      },
      {
        q: "Do you quote before starting work?",
        a: "Always. We assess the problem, give you a clear price and only start once you are happy to go ahead."
      },
      {
        q: "Can you fix a burst pipe that is inside a wall?",
        a: "Yes. We locate the leak, open the minimum necessary, make the repair properly and leave the area as tidy as possible."
      },
      {
        q: "My geyser is leaking — do I need a new one?",
        a: "Not always. We will check whether it is a pressure valve, the element or a tank fault. Repairs are often cheaper and faster than a full replacement."
      },
      {
        q: "Do you work on older copper pipe systems?",
        a: "Yes — we work on both copper and modern plastic pipe systems and stock fittings for both."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us what is going on.",
    contactLead:  "Send through the details and we will reply on WhatsApp, usually quickly.",
    contactPlaceholder: "e.g. burst pipe in kitchen, geyser leaking, blocked toilet"
  }
};
