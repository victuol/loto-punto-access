import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";

/**
 * Loto Punto — marketing landing page (English).
 *
 * Frosted Financial Minimal direction: dark "deep" canvas, sky-blue brand,
 * teal accent, glassmorphism surfaces, ambient gradient blobs.
 *
 * The Figma interface is embedded into the marked container below
 * (`#loto-embed`). To embed a prototype, drop a Figma iframe inside the
 * `<div data-figma-embed>` block in <FigmaEmbedSlot />.
 */
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Loto Punto — Cardless cash access for banking deserts" },
      { name: "description", content: "Loto Punto is developing a cardless ATM interface that minimizes transaction fees using dynamic QR codes and mobile banking integration — bringing affordable cash access back to U.S. neighborhoods abandoned by traditional bank branches." },
      { property: "og:title", content: "Loto Punto — Cardless cash access for banking deserts" },
      { property: "og:description", content: "A cardless ATM interface using dynamic QR codes and mobile banking to lower transaction fees where traditional branches have disappeared." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 text-ink">
      <span className="grid size-9 place-items-center rounded-xl bg-brand/90 font-display text-lg font-bold text-deep">
        L
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        Loto Punto
      </span>
    </a>
  );
}

function Nav() {
  return (
    <nav className="flex items-center justify-between rounded-2xl border border-glass-border bg-glass px-6 py-4 backdrop-blur-xl">
      <Logo />
      <div className="hidden items-center gap-8 text-sm text-ink/70 md:flex">
        <a href="#problem" className="transition-colors hover:text-ink">The Problem</a>
        <a href="#solution" className="transition-colors hover:text-ink">Solution</a>
        <a href="#demo" className="transition-colors hover:text-ink">Prototype</a>
        <a href="#research" className="transition-colors hover:text-ink">Research</a>
      </div>
      <a
        href="#demo"
        className="rounded-lg border border-glass-border bg-glass px-4 py-2 text-sm font-medium text-ink backdrop-blur transition-colors hover:bg-white/15"
      >
        Request access
      </a>
    </nav>
  );
}

/**
 * Reserved container for the Figma interface prototype.
 * To embed: replace the inner placeholder with a Figma iframe, e.g.
 *   <iframe src="https://www.figma.com/embed?embed_host=loto&url=..." allowFullScreen />
 */
function FigmaEmbedSlot({
  aspect = "4/3",
  children,
}: {
  aspect?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand/30 to-accent/20 blur-2xl" />
      <div className="relative rounded-3xl border border-glass-border bg-glass p-3 shadow-2xl backdrop-blur-2xl">
        <div className="flex items-center gap-2 px-2 pb-3">
          <span className="size-2.5 rounded-full bg-white/30" />
          <span className="size-2.5 rounded-full bg-white/30" />
          <span className="size-2.5 rounded-full bg-white/30" />
          <span className="ml-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
            Figma embed
          </span>
        </div>
        {/* data-figma-embed: paste your Figma prototype iframe inside this div */}
        <div
          id="loto-embed"
          data-figma-embed
          data-embed="figma"
          className={
            children
              ? "w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              : "grid w-full place-items-center rounded-2xl border border-dashed border-white/20 bg-white/5"
          }
          style={{ aspectRatio: aspect, minHeight: "clamp(360px, 50vw, 560px)" }}
        >
          {children ?? (
            <div className="text-center">
              <div className="mx-auto grid size-14 place-items-center rounded-2xl border border-white/20 bg-white/10 font-display text-2xl font-bold text-white/70">
                QR
              </div>
              <div className="mt-3 text-sm font-medium text-white/70">
                Interface embed point
              </div>
              <div className="mt-1 text-xs text-white/40">
                Paste your Figma embed code here
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="mt-14 grid items-center gap-10 lg:grid-cols-2">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-3 py-1 text-xs font-medium text-accent backdrop-blur">
          <span className="size-1.5 rounded-full bg-accent" />
          Financial access, reimagined
        </span>
        <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Skip the card.
          <br />
          <span className="text-white/50">Skip the fees.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
          A cardless ATM that pairs with your existing mobile bank. Scan a dynamic
          QR code, access your own cash, and pay a fraction of out-of-network
          costs — where the branches have gone.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#demo"
            className="rounded-xl bg-brand px-6 py-3.5 font-medium text-deep shadow-lg shadow-brand/30 transition-colors hover:bg-brand/90"
          >
            Try the interface
          </a>
          <a
            href="#research"
            className="rounded-xl border border-glass-border bg-glass px-6 py-3.5 font-medium text-ink/80 backdrop-blur transition-colors hover:bg-white/15"
          >
            Read the research
          </a>
        </div>
        <div className="mt-10 flex gap-10">
          <div>
            <div className="font-display text-3xl font-bold">83%</div>
            <div className="mt-1 text-sm text-ink/55">
              of Americans still rely on cash daily
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold text-accent">−60%</div>
            <div className="mt-1 text-sm text-ink/55">
              typical transaction fee reduction
            </div>
          </div>
        </div>
      </div>

      {/* EMBED CONTAINER: Figma interface goes here */}
      <FigmaEmbedSlot>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "100%" }}
          src="https://embed.figma.com/proto/iSapCOb1M5uBllNYnZgIRi/BreB?page-id=0%3A1&node-id=2078-1017&p=f&viewport=523%2C341%2C0.07&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2078%3A1017&embed-host=share"
          allowFullScreen
        />
      </FigmaEmbedSlot>
    </section>
  );
}

function Problem() {
  return (
    <section id="problem" className="mt-24 scroll-mt-24">
      <div className="max-w-xl">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          The problem
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
          When the branch leaves, the fees move in.
        </h2>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <p className="text-pretty text-lg leading-relaxed text-ink/70">
          Rising real estate costs and overhead have driven traditional bank
          branches out of low-income neighborhoods, creating vast banking
          deserts. Low-income adults are left facing severe financial strain,
          forced to navigate exorbitant out-of-network ATM fees simply to
          access their own money.
        </p>
        <p className="text-pretty text-lg leading-relaxed text-ink/70">
          Deprived of affordable institutional banking, vulnerable populations
          are pushed toward predatory alternatives — check cashers, payday
          lenders, and loan sharks — to meet basic liquidity needs. Cash remains
          an unavoidable daily utility for 83% of Americans, yet the physical gap
          to reach it keeps widening.
        </p>
      </div>
    </section>
  );
}

function Solution() {
  const features = [
    {
      step: "1",
      title: "Dynamic QR pairing",
      body: "No physical card. A rotating, session-bound code links the terminal to the bank app already in your pocket — eliminating the card rail entirely.",
      tone: "brand",
    },
    {
      step: "2",
      title: "App-native withdrawals",
      body: "Your existing mobile banking does the work. Open the app, authorize the amount, and the machine dispenses — no new account, no new credentials.",
      tone: "accent",
    },
    {
      step: "3",
      title: "Lower-barrier economics",
      body: "Fewer machines, fewer intermediaries, less drift toward check cashers and payday traps — lowering the cost of accessing your own money.",
      tone: "neutral",
    },
  ];

  return (
    <section id="solution" className="mt-20 scroll-mt-24">
      <div className="max-w-xl">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          The solution
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
          How Loto Punto closes the gap
        </h2>
        <p className="mt-3 text-ink/60">
          Self-service access built for the neighborhoods banks left behind.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.step}
            className="rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-xl"
          >
            <div
              className={
                "grid size-11 place-items-center rounded-xl font-display text-xl font-bold " +
                (f.tone === "brand"
                  ? "bg-brand/20 text-accent"
                  : f.tone === "accent"
                    ? "bg-accent/20 text-accent"
                    : "bg-white/10 text-ink/80")
              }
            >
              {f.step}
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResearchBand() {
  return (
    <section id="research" className="mt-16 scroll-mt-24">
      <div className="overflow-hidden rounded-3xl border border-glass-border bg-gradient-to-r from-white/10 to-white/[0.03] p-8 backdrop-blur-xl md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              The research objective
            </span>
            <p className="mt-4 font-display text-2xl font-medium leading-snug text-ink/90">
              Establishing a theoretical and practical framework for designing
              self-service financial interfaces that maximize economic
              accessibility while advancing resource conservation across human,
              computational, physical, and financial dimensions.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-ink/60">
              Driving adoption introduces a behavioral barrier: entrenched habits
              around physical payment cards create cognitive friction when users
              transition to a completely new interaction model. This study frames
              how a cardless interface can earn that habit change — without adding
              cost to the people least able to pay it.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-glass-border bg-glass p-4">
              <div className="font-display text-2xl font-bold">4</div>
              <div className="mt-1 text-xs text-ink/55">conservation dimensions</div>
            </div>
            <div className="rounded-xl border border-glass-border bg-glass p-4">
              <div className="font-display text-2xl font-bold">0</div>
              <div className="mt-1 text-xs text-ink/55">physical cards required</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="mt-24 scroll-mt-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Interactive prototype
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
            Try the cardless interface
          </h2>
          <p className="mt-3 text-ink/60">
            The slot below is reserved for a live Figma embed. Drop a prototype
            iframe into the marked container and it renders at full width.
          </p>
        </div>
        <a
          href="#demo"
          className="self-start rounded-xl bg-brand px-6 py-3.5 font-medium text-deep shadow-lg shadow-brand/30 transition-colors hover:bg-brand/90 md:self-auto"
        >
          Open full prototype
        </a>
      </div>
      <div className="mt-8">
        <FigmaEmbedSlot aspect="16/10" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-glass-border pt-8 text-sm text-ink/40 md:flex-row">
      <span>Loto Punto — concept prototype · Cardless cash access</span>
      <span>Bringing affordable cash back to banking deserts</span>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-deep font-sans text-ink">
      {/* ambient gradient light */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="lp-blob absolute -left-16 -top-24 size-[36rem] rounded-full bg-brand/40 blur-3xl" />
        <div className="lp-blob-rev absolute -right-24 top-1/3 size-[32rem] rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 size-[28rem] rounded-full bg-white/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <Nav />
        <Hero />
        <Problem />
        <Solution />
        <DemoSection />
        <ResearchBand />
        <Footer />
      </div>
    </div>
  );
}
