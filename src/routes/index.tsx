import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ImagePlaceholder, VideoPlaceholder } from "@/components/MediaPlaceholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AT Contracting Solutions, LLC | Premium Building & Remodeling" },
      {
        name: "description",
        content:
          "AT Contracting Solutions, LLC delivers premium residential and commercial construction, remodeling and finish carpentry. Call +1 512-589-7789 for a free quote.",
      },
      { property: "og:title", content: "AT Contracting Solutions, LLC | Premium Building & Remodeling" },
      {
        property: "og:description",
        content:
          "High-end contracting, remodeling and custom builds crafted with precision. Free quotes — +1 512-589-7789.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+1 512-589-7789";
const PHONE_HREF = "tel:+15125897789";
const EMAIL = "at.cs512@gmail.com";

function Index() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <AboutTrust />
      <Services />
      <ReelsSection />
      <Projects />
      <CreativeMedia />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-blue)] font-display text-sm tracking-wider text-primary-foreground">
            AT
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg text-secondary-foreground">
              AT Contracting Solutions
            </span>
            <span className="hairline-label">LLC · Licensed & Insured</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a className="transition-colors hover:text-primary" href="#about">About</a>
          <a className="transition-colors hover:text-primary" href="#services">Services</a>
          <a className="transition-colors hover:text-primary" href="#projects">Projects</a>
          <a className="transition-colors hover:text-primary" href="#contact">Contact</a>
        </nav>
        <a
          href={PHONE_HREF}
          className="rounded-full bg-[image:var(--gradient-green)] px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Free Quote
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
      <div className="absolute -right-32 top-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-32">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-1.5 text-xs tracking-[0.22em] text-primary uppercase">
              Austin, TX · Since Day One
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 font-display text-5xl leading-[1.05] text-secondary-foreground sm:text-6xl lg:text-7xl">
              Building With
              <span className="block text-luxe-gradient italic">Uncommon Precision.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              AT Contracting Solutions, LLC delivers refined residential and commercial
              construction — remodels, custom finishes and full builds executed with
              craftsmanship you can feel in every detail.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[image:var(--gradient-blue)] px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-[var(--shadow-luxe)] transition-transform duration-300 hover:-translate-y-1"
              >
                Get Your Free Quote
              </a>
              <a
                href="#projects"
                className="rounded-full border border-primary/25 px-8 py-4 text-sm font-semibold tracking-wide text-primary transition-colors duration-300 hover:bg-secondary"
              >
                View Our Work
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["100%", "Client Focused"],
                ["Licensed", "& Fully Insured"],
                ["On-Time", "Every Build"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-2xl text-secondary-foreground">{k}</dt>
                  <dd className="mt-1 text-xs tracking-wide text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="relative">
            <ImagePlaceholder
              label="Hero Banner Image"
              hint="Recommended 1600 × 2000"
              ratio="aspect-[4/5]"
              className="shadow-[var(--shadow-luxe)]"
            />
            <div className="surface-card absolute -bottom-8 -left-6 hidden w-64 p-5 sm:block">
              <p className="hairline-label">Now Booking</p>
              <p className="mt-2 font-display text-xl text-secondary-foreground">
                Custom Builds & Remodels
              </p>
              <a href={PHONE_HREF} className="mt-2 block text-sm font-medium text-accent">
                {PHONE}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutTrust() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <Reveal>
            <p className="hairline-label">About the Company</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-secondary-foreground sm:text-5xl">
              A contracting standard built on trust, detail and quiet luxury.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                We are a full-service contracting company serving homeowners, designers and
                commercial clients who expect more than the ordinary. Every project begins
                with a clear plan, honest pricing and a schedule we hold ourselves to.
              </p>
              <p>
                From framing and drywall to premium tile, cabinetry and finish carpentry, our
                crews treat your property like our own — clean sites, careful protection and
                a final walkthrough that leaves nothing unresolved.
              </p>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Transparent, itemized estimates",
                "Licensed, insured & code-compliant",
                "Premium materials & finishes",
                "Clean, respectful job sites",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-secondary-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <figure className="surface-card relative h-full p-9">
            <span className="hairline-label">Client Review</span>
            <div className="mt-5 flex gap-1 text-[color:var(--gold)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="m12 2 2.9 6.3 6.9.8-5 4.8 1.3 6.8L12 17.4 5.9 20.7 7.2 13.9l-5-4.8 6.9-.8L12 2Z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-6 font-display text-2xl leading-snug text-secondary-foreground">
              “AT Contracting Solutions handled our full remodel start to finish. The
              craftsmanship, communication and cleanliness were outstanding — it genuinely
              looks like a designer home now.”
            </blockquote>
            <figcaption className="mt-8 border-t border-border pt-6">
              <span className="block text-sm font-semibold text-secondary-foreground">
                Verified Client
              </span>
              <span className="hairline-label">Austin, Texas · Full Home Remodel</span>
            </figcaption>
            <span className="pointer-events-none absolute right-8 top-8 font-display text-7xl leading-none text-primary/10">
              ”
            </span>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

const SERVICES = [
  ["Remodeling & Renovation", "Kitchens, bathrooms and whole-home transformations."],
  ["New Construction", "Ground-up residential and light commercial builds."],
  ["Finish Carpentry", "Trim, cabinetry, built-ins and custom millwork."],
  ["Drywall & Painting", "Flawless surfaces with premium coatings."],
  ["Flooring & Tile", "Hardwood, LVP, large-format tile and stone."],
  ["Exterior & Decks", "Siding, fencing, patios and outdoor living."],
];

function Services() {
  return (
    <section id="services" className="border-y border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <div>
          <Reveal>
            <p className="hairline-label">What We Do</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-secondary-foreground sm:text-5xl">
              Complete contracting services, finished to a premium standard.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              One accountable team for the entire scope — so your project moves faster,
              stays cleaner and finishes better.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {SERVICES.map(([title, copy], i) => (
              <Reveal key={title} delay={100 + i * 80}>
                <div className="surface-card h-full p-6 transition-transform duration-500 hover:-translate-y-1.5">
                  <h3 className="font-display text-xl text-secondary-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={200}>
          <ImagePlaceholder
            label="Large Services Image"
            hint="Recommended 1400 × 1750"
            ratio="aspect-[4/5]"
            className="shadow-[var(--shadow-luxe)]"
          />
        </Reveal>
      </div>
    </section>
  );
}

function ReelsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[image:var(--gradient-blue)] py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(oklch(1_0_0/0.5)_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
              On Site
            </p>
            <h2 className="mt-5 font-display text-4xl text-primary-foreground sm:text-5xl">
              Watch the craft in motion.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">
              Add your own reels below — walkthroughs, before-and-afters and finish details.
            </p>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-14 media-frame aspect-video w-full shadow-[var(--shadow-luxe)]">
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-5 p-8 text-center">
              <span className="float-slow flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-card/85 text-primary shadow-[var(--shadow-soft)]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 translate-x-[2px]">
                  <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                </svg>
              </span>
              <p className="font-display text-2xl text-secondary-foreground sm:text-3xl">
                Full-Width Reel Space
              </p>
              <p className="hairline-label">16:9 or 9:16 · Your Video Here</p>
            </div>
            <span className="pointer-events-none absolute inset-4 z-10 rounded-[inherit] border border-dashed border-primary/20" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="hairline-label">Selected Work</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-secondary-foreground sm:text-5xl">
              Projects finished with intention.
            </h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-accent underline-offset-4 hover:underline">
            Start your project →
          </a>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <Reveal delay={100} className="lg:col-span-2">
          <div className="surface-card h-full overflow-hidden p-3">
            <ImagePlaceholder label="Featured Project" hint="Wide · 1800 × 1100" ratio="aspect-[16/10]" />
            <div className="px-4 pb-3 pt-5">
              <h3 className="font-display text-2xl text-secondary-foreground">
                Modern Kitchen & Living Remodel
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Full gut renovation with custom cabinetry, large-format tile and integrated
                lighting.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="surface-card flex h-full flex-col p-3">
            <ImagePlaceholder label="Project Image" hint="Portrait · 900 × 1200" ratio="aspect-[3/4]" />
            <div className="px-4 pb-3 pt-5">
              <h3 className="font-display text-xl text-secondary-foreground">Spa Bathroom Build</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Curbless shower, stone surfaces, warm brass fixtures.
              </p>
            </div>
          </div>
        </Reveal>

        {[
          ["Custom Deck & Patio", "Cedar framing with clean, durable detailing."],
          ["Commercial Build-Out", "Fast-tracked interior fit-out, zero punch list."],
          ["Finish Carpentry Detail", "Paneling, trim and built-ins made to measure."],
        ].map(([title, copy], i) => (
          <Reveal key={title} delay={280 + i * 90}>
            <div className="surface-card h-full p-3 transition-transform duration-500 hover:-translate-y-1.5">
              <ImagePlaceholder label="Project Image" hint="1200 × 900" ratio="aspect-[4/3]" />
              <div className="px-4 pb-3 pt-5">
                <h3 className="font-display text-xl text-secondary-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CreativeMedia() {
  return (
    <section className="border-y border-border bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="hairline-label">Creative Media</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-secondary-foreground sm:text-5xl">
              Stills and reels, side by side.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A flexible gallery space for your photography and short-form video content.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={120} className="lg:col-span-7">
            <ImagePlaceholder
              label="Feature Image"
              hint="1600 × 1200"
              ratio="aspect-[4/3]"
              className="h-full shadow-[var(--shadow-luxe)]"
            />
          </Reveal>
          <Reveal delay={220} className="lg:col-span-5">
            <VideoPlaceholder label="Reel One" hint="9:16 Vertical Reel" ratio="aspect-[9/16]" className="h-full" />
          </Reveal>
          <Reveal delay={320} className="lg:col-span-5">
            <VideoPlaceholder label="Reel Two" hint="9:16 Vertical Reel" ratio="aspect-[4/3]" />
          </Reveal>
          <Reveal delay={400} className="lg:col-span-4">
            <ImagePlaceholder label="Detail Shot" hint="1000 × 1000" ratio="aspect-square" />
          </Reveal>
          <Reveal delay={480} className="lg:col-span-3">
            <ImagePlaceholder label="Detail Shot" hint="800 × 1000" ratio="aspect-[4/5]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
      <div className="absolute -left-20 top-10 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-10">
        <Reveal>
          <div>
            <p className="hairline-label">Free Quote</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
              Let’s price your project — no pressure, no guesswork.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Call or email AT Contracting Solutions, LLC and we’ll schedule a walkthrough,
              then send a clear, itemized estimate.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="rounded-full bg-[image:var(--gradient-blue)] px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-[var(--shadow-luxe)] transition-transform duration-300 hover:-translate-y-1"
              >
                Call {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full border border-primary/25 px-8 py-4 text-sm font-semibold tracking-wide text-primary transition-colors duration-300 hover:bg-secondary"
              >
                Email Us
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="surface-card p-9">
            <h3 className="font-display text-2xl text-secondary-foreground">Direct Contact</h3>
            <dl className="mt-8 space-y-7">
              <div>
                <dt className="hairline-label">Phone</dt>
                <dd className="mt-2">
                  <a href={PHONE_HREF} className="font-display text-2xl text-primary hover:text-accent">
                    {PHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="hairline-label">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all font-display text-2xl text-primary hover:text-accent"
                  >
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="hairline-label">Hours</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  Monday – Saturday · 8:00 AM – 7:00 PM
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="font-display text-base text-secondary-foreground">
          AT Contracting Solutions, LLC
        </p>
        <p>Licensed & Insured · Austin, TX</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
