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
    hours:     "Mon–Fri 7am–5pm · Sat 8am–1pm",
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
    title:       "Coswic Construction Services — Building & construction in Randburg",
    description: "Coswic Construction Services provides professional building and construction services in Randburg — new builds, extensions and renovations. 9 Google reviews. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "ember",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Building & construction · Randburg & surrounds",
    heroTitle:  "Building, extending or renovating? <em>Built right, finished properly.</em>",
    heroLead:   "Coswic Construction Services handles new builds, extensions, renovations and structural work for homes and businesses across Randburg. Clear quotes, quality workmanship and projects finished on time.",

    googleRating: "4.8",
    reviewsCount: "9",
    featuredQuote: "Coswic managed our whole build from foundation to finish. On schedule, on budget and the quality of the work speaks for itself.",
    featuredQuoteAuthor: "— Thabo M., Google review",

    trustSignals: ["New builds & extensions", "Renovations", "Structural work", "Clear fixed quotes"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "Everything from foundation to final finish.",
    servicesLead:  "New builds, extensions and renovations — managed properly, built to last and finished to a high standard.",
    services: [
      {
        icon:  "hardhat",
        title: "New builds & extensions",
        desc:  "Full residential and commercial builds and additions — from foundations and brickwork to roof and finishes, project-managed end to end."
      },
      {
        icon:  "wrench",
        title: "Renovations & alterations",
        desc:  "Reworking, opening up or modernising an existing building — done cleanly, with minimal disruption and a clear schedule."
      },
      {
        icon:  "bolt",
        title: "Structural & concrete work",
        desc:  "Foundations, slabs, columns and load-bearing alterations carried out correctly and to engineering specification."
      },
      {
        icon:  "droplet",
        title: "Waterproofing & damp proofing",
        desc:  "Roofs, balconies, basements and walls sealed properly so leaks and rising damp are stopped at the source."
      },
      {
        icon:  "shield",
        title: "Boundary walls & paving",
        desc:  "Boundary and retaining walls, driveways and paving built solid, level and to last through Highveld weather."
      },
      {
        icon:  "broom",
        title: "Plastering, tiling & finishes",
        desc:  "Plastering, screeding, tiling and painting — the finishing work that decides whether a build looks professional."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of projects we take on.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — New builds & extensions",
        title:   "Built from the ground up",
        caption: "Foundations, brickwork, roofing and finishes managed as one project so the build runs to schedule and to spec."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Renovations",
        title:   "Old space, made new",
        caption: "Existing homes reworked and modernised — walls moved, rooms reconfigured and finishes brought up to standard."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Structural work",
        title:   "Solid where it counts",
        caption: "Foundations, slabs and load-bearing changes done to engineering specification, signed off and built to last."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Waterproofing",
        title:   "Sealed and dry",
        caption: "Roofs, balconies and walls waterproofed properly so leaks and damp are dealt with at the source, not patched over."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Finishes",
        title:   "Finished properly",
        caption: "Plastering, tiling and painting completed to a high standard — the detail that makes a build look professional."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Coswic Construction Services team on a building site in Randburg",
      text:  "Quality building and construction — from foundation to final finish."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Randburg. Building across the wider area.",
    areasLead:  "We take on projects in Randburg, Northcliff, Cresta and the surrounding suburbs. Site visits and quotes available throughout the area.",
    areasNote:  "Not on this list? Call us — we work across most of the greater Johannesburg area.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why clients build with us.",
    why: [
      {
        title: "Clear, fixed quotes",
        desc:  "A detailed quote up front so you know exactly what the project costs before a single brick is laid. No surprise extras."
      },
      {
        title: "Properly project-managed",
        desc:  "One point of contact, a real schedule and trades coordinated for you — so the build moves and you are kept in the loop."
      },
      {
        title: "Built to last",
        desc:  "Done to specification with quality materials and skilled tradesmen, so the work stands up years down the line."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 9 verified Google reviews.",
    reviews: [
      {
        body:   "Coswic managed our whole build from foundation to finish. On schedule, on budget and the quality of the work speaks for itself.",
        name:   "Thabo M.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Used them for an extension and full renovation. Clear quote, tidy site and they finished when they said they would.",
        name:   "Sandra K.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Reliable construction team that actually manages the job properly. Quality work and honest pricing throughout.",
        name:   "Pieter V.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Common construction questions.",
    faqLead:  "What most people ask before starting a project.",
    faq: [
      {
        q: "Do you give a fixed quote before starting?",
        a: "Yes — we visit the site, work through what you want and give a detailed written quote so you know the cost before any work begins."
      },
      {
        q: "Do you handle plans and approvals?",
        a: "For builds and extensions that need them, we can assist with drawings and council submission, and work to approved plans and engineering specs."
      },
      {
        q: "How long will my project take?",
        a: "It depends on scope, but we give a realistic schedule up front and keep you updated against it as the work progresses."
      },
      {
        q: "Do you manage the whole project or just the building?",
        a: "We can manage the full project — coordinating trades, materials and timelines — so you have a single point of contact throughout."
      },
      {
        q: "Are your builds done to specification?",
        a: "Yes. Structural work is done to engineering specification and finishes to a high standard, with the right materials for the job."
      },
      {
        q: "Do you do renovations as well as new builds?",
        a: "Both — from full new builds and extensions to renovations, alterations and smaller building work."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us about your project.",
    contactLead:  "Send through what you are planning and we will reply on WhatsApp to arrange a site visit and quote.",
    contactPlaceholder: "e.g. double-storey extension, full home renovation, boundary wall and paving"
  }
};
