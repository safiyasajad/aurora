import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroSapphire from "@/assets/hero-sapphire.jpg";
import gemRoyalBlue from "@/assets/gem-royal-blue.jpg";
import gemCornflower from "@/assets/gem-cornflower.jpg";
import gemPadparadscha from "@/assets/gem-padparadscha.jpg";
import gemYellow from "@/assets/gem-yellow.jpg";
import gemPink from "@/assets/gem-pink.jpg";
import gemStar from "@/assets/gem-star.jpg";
import expSelection from "@/assets/experience-selection.jpg";
import expAccommodation from "@/assets/experience-accommodation.jpg";
import expMine from "@/assets/experience-mine.jpg";
import jewelryRing from "@/assets/jewelry-ring.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurora Gems - Finest Natural Sri Lankan Sapphires" },
      {
        name: "description",
        content:
          "Direct access to premium natural Sri Lankan sapphires. NGJA registered sourcing, buyer concierge, mine visits, export support and custom jewelry from Beruwala, Colombo and Bangkok.",
      },
      { property: "og:title", content: "Aurora Gems - Finest Natural Sri Lankan Sapphires" },
      {
        property: "og:description",
        content:
          "From mine to market: a complete buying experience for international gemstone buyers.",
      },
      { property: "og:image", content: "/assets/hero-sapphire.jpg" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          name: "Aurora Gems",
          description: "Natural Sri Lankan sapphires, fine jewelry and buyer concierge services.",
          telephone: "+94774579076",
          areaServed: ["LK", "TH", "Worldwide"],
          address: [
            { "@type": "PostalAddress", addressLocality: "Beruwala", addressCountry: "LK" },
            { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
            { "@type": "PostalAddress", addressLocality: "Bangkok", addressCountry: "TH" },
          ],
          sameAs: ["https://instagram.com/Rashard_Rifkhan"],
        }),
      },
    ],
  }),
  component: Index,
});

const WHATSAPP =
  "https://wa.me/94774579076?text=Hello%20Aurora%20Gems%2C%20I%27d%20like%20to%20enquire";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <Trust />
      <Proof />
      <WhyUs />
      <Collection />
      <Services />
      <Experience />
      <Jewelry />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* ───────────────────── NAV ───────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Collection", "#collection"],
    ["Services", "#services"],
    ["Experience", "#experience"],
    ["Jewelry", "#jewelry"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/40 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Mark />
          <div className="leading-none">
            <div className="font-display text-lg md:text-xl text-gold-gradient">Aurora Gems</div>
            <div className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground mt-0.5">
              Ceylon / Est. Trust
            </div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="text-[11px] tracking-[0.22em] uppercase text-foreground/80 hover:text-gold transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href="#contact" className="btn-gold">
            Book a Trip
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden text-gold p-2"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M3 7h18" />
                <path d="M3 17h18" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.22em] uppercase text-foreground/80"
              >
                {l}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-gold w-full">
              Book a Trip
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Mark() {
  return (
    <div className="relative h-9 w-9 rounded-full border border-gold/50 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sapphire-glow/30 via-sapphire/20 to-transparent" />
      <svg viewBox="0 0 24 24" className="relative w-4 h-4 text-gold" fill="currentColor">
        <path d="M12 2l3.5 6L22 9l-5 4.5L18.5 22 12 18l-6.5 4L7 13.5 2 9l6.5-1z" />
      </svg>
    </div>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end pt-24 pb-16 md:pb-28">
      <div className="absolute inset-0">
        <img
          src={heroSapphire}
          alt="Cinematic close-up of a natural Royal Blue Sri Lankan sapphire"
          width={1920}
          height={1280}
          className="w-full h-full object-cover animate-fade-slow"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 w-full">
        <div className="max-w-2xl animate-reveal">
          <span className="eyebrow">Ceylon Sapphires / Generational Sourcing</span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
            Discover the Finest <br />
            <span className="text-gold-gradient italic">Natural Sri Lankan</span> <br />
            Sapphires
          </h1>
          <p className="mt-7 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
            Direct access to premium gemstones from Sri Lanka's most trusted sourcing networks. From
            mine to market, a complete buying experience for international gemstone buyers.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold">
              Book a Buying Trip
            </a>
            <a href="#collection" className="btn-ghost-gold">
              View Gem Collection
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6 text-[10px] tracking-[0.3em] uppercase text-foreground/60">
            <span>Beruwala</span>
            <span className="w-6 h-px bg-gold/40" />
            <span>Colombo</span>
            <span className="w-6 h-px bg-gold/40" />
            <span>Bangkok</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/70 text-[10px] tracking-[0.3em] uppercase animate-float">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}

/* ───────────────── TRUST STRIP ───────────────── */
function Trust() {
  const items = [
    "NGJA Registered",
    "Chinfort Gem Traders Association",
    "Ethical Sourcing",
    "Certified Gemstones",
    "International Trading",
  ];
  return (
    <section className="border-y border-border/50 bg-ink/40">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-6 md:py-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {items.map((t, i) => (
          <div
            key={t}
            className="flex items-center gap-3 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-foreground/70"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-gold"
              strokeWidth="1.5"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span>{t}</span>
            {i < items.length - 1 && <span className="hidden md:inline w-px h-3 bg-border ml-7" />}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────── WHY US ─────────────────── */
function Proof() {
  const proof = [
    {
      k: "Certification",
      v: "Lab reports can be arranged through recognized gem testing partners before purchase.",
    },
    {
      k: "Export Support",
      v: "Documentation, packing guidance and compliant handover are coordinated for international buyers.",
    },
    {
      k: "Source Access",
      v: "Private inventory introductions across Beruwala, Colombo, Ratnapura and Bangkok trading networks.",
    },
    {
      k: "Buyer Privacy",
      v: "Discreet appointment-only sourcing for collectors, jewelers, investors and wholesale buyers.",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-px border border-border/60 bg-border/60 md:grid-cols-4">
          {proof.map((item) => (
            <div key={item.k} className="bg-background p-6 md:p-7">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold">{item.k}</div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    {
      t: "Direct From Source",
      d: "Native Sri Lankan network with generations of sourcing relationships across Beruwala and Ratnapura.",
    },
    {
      t: "Airport Concierge",
      d: "Personal pickup at Bandaranaike International and seamless transfer to your accommodation.",
    },
    {
      t: "Curated Accommodation",
      d: "Vetted boutique stays in Beruwala arranged for your visit and trading schedule.",
    },
    {
      t: "Two Trading Capitals",
      d: "Active presence in Sri Lanka and at the Jewelry Trade Center, Bangkok.",
    },
    {
      t: "Certified Stones",
      d: "Independently certified gemstones with full export documentation handled on your behalf.",
    },
    {
      t: "Investor Discretion",
      d: "Confidential, white-glove service for collectors, jewelers and wholesale buyers.",
    },
  ];
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          eyebrow="Why Aurora Gems"
          title={
            <>
              Trusted by buyers <span className="italic text-gold-gradient">across continents</span>
            </>
          }
          intro="A complete sourcing partnership built on transparency, provenance and personal service."
        />
        <div className="mt-16 grid gap-px bg-border/60 md:grid-cols-2 lg:grid-cols-3 border border-border/60">
          {reasons.map((r, i) => (
            <div
              key={r.t}
              className="group bg-background p-8 lg:p-10 hover:bg-card transition-colors duration-500"
            >
              <div className="text-gold/60 font-display text-sm tracking-[0.2em]">0{i + 1}</div>
              <h3 className="mt-6 text-2xl text-foreground">{r.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              <div className="mt-8 hairline-gold opacity-30 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── COLLECTION ──────────────── */
function Collection() {
  const gems = [
    {
      name: "Royal Blue Sapphire",
      origin: "Ceylon / Heated or Unheated",
      img: gemRoyalBlue,
      detail: "Best for engagement rings, investment stones and premium jewelry suites.",
    },
    {
      name: "Cornflower Blue Sapphire",
      origin: "Ceylon / Premium Color",
      img: gemCornflower,
      detail: "Soft vivid blue selections for collectors seeking classic Ceylon character.",
    },
    {
      name: "Padparadscha Sapphire",
      origin: "Rare / Pinkish-Orange",
      img: gemPadparadscha,
      detail: "Rare collector-grade stones sourced by appointment and subject to availability.",
    },
    {
      name: "Yellow Sapphire",
      origin: "Vivid Canary",
      img: gemYellow,
      detail: "Bright calibrated and single-stone options for custom jewelry commissions.",
    },
    {
      name: "Pink Sapphire",
      origin: "Ceylon / Hot Pink",
      img: gemPink,
      detail: "Fine pink tones for statement rings, matched pairs and boutique jewelry lines.",
    },
    {
      name: "Star Sapphire",
      origin: "Six-Ray Asterism",
      img: gemStar,
      detail: "Distinctive cabochons selected for sharp stars and strong body color.",
    },
  ];
  return (
    <section id="collection" className="py-24 md:py-36 bg-ink/40 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          eyebrow="Featured Collection"
          title={
            <>
              A gallery of <span className="italic text-gold-gradient">Ceylon's rarest</span>
            </>
          }
          intro="Hand-selected stones representing the breadth and depth of Sri Lankan sapphire heritage."
        />
        <div className="mt-16 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gems.map((g) => (
            <article
              key={g.name}
              className="group relative overflow-hidden border border-border/60 bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={g.img}
                  alt={`${g.name} - natural Sri Lankan sapphire`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 lg:p-7">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold/80">
                  {g.origin}
                </div>
                <h3 className="mt-2 text-2xl text-foreground">{g.name}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/70">
                  {g.detail}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-gold-soft hover:text-gold transition-colors"
                >
                  Enquire
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
              <div className="absolute top-0 left-0 w-10 h-10 border-l border-t border-gold/40" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r border-b border-gold/40" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── SERVICES ──────────────── */
function Services() {
  const cats = [
    {
      tag: "01 / Gemstone Trading",
      title: "Sourcing & Wholesale",
      items: [
        "Natural Blue Sapphires",
        "Pink & Yellow Sapphires",
        "Padparadscha & Star Sapphires",
        "Rare Collector Stones",
        "Certified Gemstones",
        "Wholesale Parcels",
      ],
    },
    {
      tag: "02 / Buyer Concierge",
      title: "Visiting Sri Lanka",
      items: [
        "Airport Pickup",
        "Beruwala Accommodation",
        "Personal Buying Assistance",
        "Gem Market Visits",
        "Mine Visit Arrangements",
        "Export Documentation",
      ],
    },
    {
      tag: "03 / Custom Jewelry",
      title: "Bespoke Manufacturing",
      items: [
        "Engagement Rings",
        "Luxury Jewelry",
        "Bespoke Designs",
        "Gemstone Setting",
        "CAD Jewelry Design",
        "Master Craftsmanship",
      ],
    },
  ];
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Every step, <span className="italic text-gold-gradient">white-glove</span>
            </>
          }
          intro="From a single certified stone to a fully escorted buying trip, we orchestrate the entire experience."
        />
        <div className="mt-16 grid lg:grid-cols-3 gap-px bg-border/60 border border-border/60">
          {cats.map((c) => (
            <div key={c.title} className="bg-background p-8 lg:p-10">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold">{c.tag}</div>
              <h3 className="mt-5 text-3xl">{c.title}</h3>
              <div className="hairline-gold mt-6 opacity-50" />
              <ul className="mt-6 space-y-3">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gold mt-1.5 shrink-0"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── EXPERIENCE ─────────────── */
function Experience() {
  const steps = [
    {
      n: "I",
      t: "Arrival",
      d: "We meet you at Bandaranaike International with private transfer to Beruwala or Colombo.",
      img: expAccommodation,
    },
    {
      n: "II",
      t: "Sourcing",
      d: "Curated gem market visits, vetted dealer introductions and access to private inventories.",
      img: expSelection,
    },
    {
      n: "III",
      t: "Mine & Origin",
      d: "Optional visits to working sapphire mines and traditional gem cutting houses.",
      img: expMine,
    },
  ];
  return (
    <section id="experience" className="py-24 md:py-36 bg-ink/40 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          eyebrow="The Buyer Experience"
          title={
            <>
              From arrival <span className="italic text-gold-gradient">to export</span>
            </>
          }
          intro="A choreographed journey crafted around your time, your budget and your collecting goals."
        />
        <div className="mt-16 space-y-16 md:space-y-24">
          {steps.map((s, i) => (
            <div
              key={s.t}
              className={`grid md:grid-cols-12 gap-8 md:gap-14 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="md:col-span-7 relative">
                <div className="relative overflow-hidden border border-border/60">
                  <img
                    src={s.img}
                    alt={s.t}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 text-gold font-display text-5xl drop-shadow-lg">
                    {s.n}
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
                  Step {s.n}
                </div>
                <h3 className="mt-3 font-display text-4xl md:text-5xl">{s.t}</h3>
                <p className="mt-5 text-foreground/75 leading-relaxed">{s.d}</p>
                <div className="mt-6 hairline-gold opacity-50 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── JEWELRY ──────────────── */
function Jewelry() {
  return (
    <section id="jewelry" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative">
          <img
            src={jewelryRing}
            alt="Bespoke sapphire and diamond ring"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full aspect-square object-cover border border-border/60"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block">
            <div className="bg-background border border-gold/50 px-6 py-4">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Atelier</div>
              <div className="font-display text-lg mt-1">Master Craftsmen</div>
            </div>
          </div>
        </div>
        <div>
          <span className="eyebrow">Custom Jewelry</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
            Bespoke pieces, <br />
            <span className="italic text-gold-gradient">set with your stone</span>
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Our in-house atelier and CAD studio transform certified gemstones into heirloom
            engagement rings and high jewelry. Every commission is a private collaboration between
            collector and craftsman.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-foreground/80">
            {[
              "Engagement Rings",
              "Luxury Jewelry",
              "Bespoke Designs",
              "Gemstone Setting",
              "CAD Design",
              "Heirloom Restoration",
            ].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold" />
                {x}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex gap-4">
            <a href="#contact" className="btn-gold">
              Commission a Piece
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TESTIMONIALS ─────────────── */
function Testimonials() {
  const quotes = [
    {
      q: "Rashard's network gave us access to stones we would never have seen on the open market. The Beruwala trip was flawless from arrival to export.",
      a: "Daniel R.",
      r: "Wholesale Buyer / New York",
    },
    {
      q: "A genuine, knowledgeable partner. Three Padparadscha sapphires sourced and certified for our private collection in under a week.",
      a: "Mei L.",
      r: "Collector / Hong Kong",
    },
    {
      q: "From airport pickup to the JTC office in Bangkok, every detail was handled. This is how high-end gemstone trading should feel.",
      a: "Andreas K.",
      r: "Jeweler / Antwerp",
    },
  ];
  return (
    <section className="py-24 md:py-36 bg-ink/40 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          eyebrow="Trusted Worldwide"
          title={
            <>
              Voices from <span className="italic text-gold-gradient">our buyers</span>
            </>
          }
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {quotes.map((t, i) => (
            <figure key={i} className="border border-border/60 bg-background p-8 lg:p-10 relative">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-gold/40" fill="currentColor">
                <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v3H4v2h5v-7a4 4 0 00-4-4V9h4V7zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v3h-3v2h5v-7a4 4 0 00-4-4V9h4V7z" />
              </svg>
              <blockquote className="mt-5 font-display text-xl leading-snug text-foreground/90">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border/60">
                <div className="text-foreground">{t.a}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">
                  {t.r}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CONTACT ─────────────────── */
function FAQ() {
  const questions = [
    {
      q: "Can you arrange gemstone certification?",
      a: "Yes. Certification can be coordinated before purchase when required, with options depending on stone type, value and buyer timeline.",
    },
    {
      q: "Do you work with heated and unheated sapphires?",
      a: "Yes. We source both categories and clearly discuss treatment expectations, certification needs and budget before presenting stones.",
    },
    {
      q: "Can international buyers visit Sri Lanka?",
      a: "Yes. We can help plan airport pickup, accommodation, gem market visits, mine visits and private buying appointments.",
    },
    {
      q: "Do you handle export documentation?",
      a: "We guide buyers through compliant export documentation and coordinate with the appropriate local process for each transaction.",
    },
    {
      q: "Can I commission jewelry with a selected stone?",
      a: "Yes. Sapphire rings and bespoke jewelry can be produced with CAD design, setting guidance and craftsmanship support.",
    },
    {
      q: "What should I include in an inquiry?",
      a: "Tell us your target gemstone, budget range, preferred treatment, certification needs, travel dates and whether you are buying retail or wholesale.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-ink/40 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          eyebrow="Buyer FAQ"
          title={
            <>
              Answers before <span className="italic text-gold-gradient">you travel</span>
            </>
          }
          intro="Practical details for international buyers planning a sourcing trip or private gemstone purchase."
        />
        <div className="mt-14 grid gap-px border border-border/60 bg-border/60 md:grid-cols-2">
          {questions.map((item) => (
            <article key={item.q} className="bg-background p-7 md:p-8">
              <h3 className="text-2xl">{item.q}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = `Hello Aurora Gems,%0A%0AName: ${encodeURIComponent(String(fd.get("name") || ""))}%0AEmail: ${encodeURIComponent(String(fd.get("email") || ""))}%0ABuyer Type: ${encodeURIComponent(String(fd.get("buyerType") || ""))}%0ABudget: ${encodeURIComponent(String(fd.get("budget") || ""))}%0AArrival: ${encodeURIComponent(String(fd.get("date") || ""))}%0AInterest: ${encodeURIComponent(String(fd.get("interest") || ""))}%0ACertification Needed: ${encodeURIComponent(String(fd.get("certification") || ""))}%0A%0A${encodeURIComponent(String(fd.get("message") || ""))}`;
    window.open(`https://wa.me/94774579076?text=${msg}`, "_blank");
    setSent(true);
  };
  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="eyebrow">Begin Your Journey</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
            Book a buying trip <br />
            <span className="italic text-gold-gradient">to Ceylon</span>
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Reach us directly via WhatsApp for the fastest response, or send a detailed inquiry
            through the form.
          </p>

          <div className="mt-10 space-y-5">
            <ContactRow label="Phone / WhatsApp" value="+94 774 579 076" href="tel:+94774579076" />
            <ContactRow label="WhatsApp Chat" value="wa.me/94774579076" href={WHATSAPP} />
            <ContactRow
              label="Instagram"
              value="@Rashard_Rifkhan"
              href="https://instagram.com/Rashard_Rifkhan"
            />
            <ContactRow label="WeChat" value="Rashard - Aurora Gems" />
          </div>

          <div className="mt-10 pt-8 border-t border-border/60 grid sm:grid-cols-3 gap-6 text-sm">
            {[
              { c: "Beruwala", d: "Sourcing HQ" },
              { c: "Colombo", d: "Operations" },
              { c: "Bangkok", d: "JTC / Thailand" },
            ].map((o) => (
              <div key={o.c}>
                <div className="text-gold text-[10px] tracking-[0.3em] uppercase">{o.d}</div>
                <div className="mt-2 font-display text-2xl">{o.c}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="border border-border/60 bg-card p-7 md:p-10 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field name="name" label="Full Name" required />
              <Field name="email" label="Email" type="email" required />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Field
                name="buyerType"
                label="Buyer Type"
                placeholder="Collector, jeweler, wholesale..."
              />
              <Field name="budget" label="Budget Range" placeholder="e.g. USD 5,000 - 20,000" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Field name="date" label="Intended Arrival" type="date" />
              <Field
                name="interest"
                label="Primary Interest"
                placeholder="e.g. Royal Blue Sapphires"
              />
            </div>
            <Field
              name="certification"
              label="Certification Needs"
              placeholder="e.g. Required before purchase, flexible, not sure"
            />
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                maxLength={1000}
                className="w-full bg-input/60 border border-border focus:border-gold/60 focus:outline-none px-4 py-3 text-foreground text-sm resize-none transition-colors"
                placeholder="Tell us about the stones or jewelry you're seeking, your travel plans, or any questions."
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                Confidential / No spam / Direct reply
              </p>
              <button type="submit" className="btn-gold">
                {sent ? "Sent - Send Again" : "Send on WhatsApp"}
              </button>
            </div>
          </form>

          <div className="mt-6 border border-border/60 overflow-hidden">
            <iframe
              title="Aurora Gems - Beruwala, Sri Lanka"
              src="https://www.google.com/maps?q=Beruwala,Sri+Lanka&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[40%] contrast-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const Inner = (
    <>
      <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70">{label}</div>
      <div className="mt-1 text-lg text-foreground group-hover:text-gold transition-colors">
        {value}
      </div>
    </>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group block border-b border-border/50 pb-4"
    >
      {Inner}
    </a>
  ) : (
    <div className="group block border-b border-border/50 pb-4">{Inner}</div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={150}
        placeholder={placeholder}
        className="w-full bg-input/60 border border-border focus:border-gold/60 focus:outline-none px-4 py-3 text-foreground text-sm transition-colors"
      />
    </div>
  );
}

/* ─────────────────── FOOTER ─────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border/60 bg-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Mark />
            <span className="font-display text-2xl text-gold-gradient">Aurora Gems</span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground italic font-display text-lg">
            "Connecting the world with the finest Sri Lankan sapphires."
          </p>
          <div className="mt-6 flex gap-3">
            {["NGJA Registered", "Chinfort Member"].map((b) => (
              <span
                key={b}
                className="text-[10px] tracking-[0.25em] uppercase border border-gold/40 text-gold-soft px-3 py-1.5"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Navigate</div>
          <ul className="space-y-2 text-sm">
            {[
              ["Collection", "#collection"],
              ["Services", "#services"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="text-foreground/70 hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Reach Us</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <a href="tel:+94774579076" className="hover:text-gold">
                +94 774 579 076
              </a>
            </li>
            <li>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-gold">
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/Rashard_Rifkhan"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                @Rashard_Rifkhan
              </a>
            </li>
            <li>WeChat: Rashard - Aurora Gems</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
          <span>
            Copyright {new Date().getFullYear()} Aurora Gems / Beruwala / Colombo / Bangkok
          </span>
          <span>Crafted with Ceylon Pride</span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────── WhatsApp Floating ─────────── */
function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] text-white transition-transform group-hover:scale-110">
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.45-1.318.13-.343.2-.685.2-1.058 0-.087 0-.13-.014-.187-.044-.107-1.717-.832-1.844-.832zm-3.55 7.45h-.014a9.81 9.81 0 0 1-4.997-1.368l-.358-.214-3.708 1.06 1.06-3.65-.243-.387a9.7 9.7 0 0 1-1.514-5.207c.014-5.412 4.397-9.804 9.794-9.804 2.624 0 5.084 1.018 6.943 2.882a9.74 9.74 0 0 1 2.853 6.93c0 5.41-4.398 9.78-9.81 9.78zm8.366-18.27a11.622 11.622 0 0 0-8.336-3.404C9.156 2.98 3.815 8.34 3.8 14.94c-.014 2.104.544 4.16 1.604 5.97L3.7 26.97l6.236-1.634a11.598 11.598 0 0 0 5.575 1.42h.014c6.43 0 11.687-5.213 11.687-11.674 0-3.1-1.218-6.013-3.395-8.196z" />
        </svg>
      </span>
    </a>
  );
}

/* ─────────────────────── helpers ─────────────────────── */
function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">{title}</h2>
      {intro && <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">{intro}</p>}
    </div>
  );
}
