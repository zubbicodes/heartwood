import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-workshop.jpg";
import founderImg from "@/assets/founder-portrait.jpg";
import glassImg from "@/assets/workshop-fused-glass.jpg";
import mosaicImg from "@/assets/workshop-mosaic.jpg";
import watercolorImg from "@/assets/workshop-watercolor.jpg";
import seasonalImg from "@/assets/workshop-seasonal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heartwood Studio — Creative Workshops for Curious Minds" },
      { name: "description", content: "Half-day fused glass, mosaic, watercolour and seasonal craft workshops in a warm countryside studio in Gloucestershire." },
      { property: "og:title", content: "Heartwood Studio — Creative Workshops" },
      { property: "og:description", content: "Small-group, beginner-friendly creative workshops in the English countryside." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Welcome />
      <WorkshopPreview />
      <Quote />
      <Upcoming />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="A small group making fused glass art together at a sunlit wooden workshop table"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/30 via-ivory/10 to-ivory/95" />
      </div>
      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 lg:px-12 lg:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-charcoal">
            <span className="rule" />
            A countryside craft studio
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-charcoal sm:text-6xl lg:text-[5.25rem]">
            Creative workshops <br />
            <em className="italic text-sage-deep">for curious minds.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-charcoal-soft">
            Slow afternoons of making, in a quiet studio tucked into the Cotswold hills.
            Fused glass, mosaic, watercolour and seasonal crafts — all materials, tea
            and warm welcome included.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/workshops" className="btn-primary">View Workshops</Link>
            <a
              href="https://www.airbnb.co.uk/experiences"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Book via Airbnb
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div className="relative">
          <img
            src={founderImg}
            alt="Portrait of studio founder Hannah holding a finished mosaic"
            loading="lazy"
            width={1200}
            height={1500}
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-sage-deep/40 md:block" />
        </div>
        <div>
          <p className="eyebrow"><span className="rule" />Welcome</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
            A gentle space to put down<br />the noise and make something.
          </h2>
          <p className="mt-6 text-charcoal-soft">
            Heartwood Studio is a small, independent workshop run by Hannah from a
            converted dairy in rural Gloucestershire. Sessions are short enough to feel
            like a treat — two to four hours — and small enough that you'll never feel rushed.
          </p>
          <p className="mt-4 text-charcoal-soft">
            Whether you've made things since childhood or haven't picked up a paintbrush
            in twenty years, you'll be at home here. Come on your own, with a friend, or
            gather a few people for a quiet celebration.
          </p>
          <Link to="/about" className="mt-8 inline-block text-sm uppercase tracking-[0.18em] text-sage-deep link-underline">
            Read Hannah's story
          </Link>
        </div>
      </div>
    </section>
  );
}

const featured = [
  { img: glassImg, title: "Fused Glass", note: "3 hrs · Beginners welcome", to: "/workshops" as const },
  { img: mosaicImg, title: "Mosaic Making", note: "4 hrs · No experience needed", to: "/workshops" as const },
  { img: watercolorImg, title: "Botanical Watercolour", note: "2 hrs · Calm & guided", to: "/workshops" as const },
  { img: seasonalImg, title: "Seasonal Wreaths", note: "3 hrs · Autumn & winter", to: "/workshops" as const },
];

function WorkshopPreview() {
  return (
    <section className="border-t border-line bg-ivory-deep/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow"><span className="rule" />Current workshops</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Four ways to spend an afternoon.
            </h2>
          </div>
          <Link to="/workshops" className="text-sm uppercase tracking-[0.18em] text-charcoal link-underline">
            See all workshops →
          </Link>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((w) => (
            <Link key={w.title} to={w.to} className="group block">
              <div className="overflow-hidden">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-serif text-2xl">{w.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-charcoal-soft">{w.note}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
      <p className="eyebrow"><span className="rule" />Kind words</p>
      <blockquote className="mt-8 font-serif text-3xl leading-snug text-charcoal sm:text-4xl">
        "It was the most relaxing afternoon I've had in a year. I left with something
        I made with my own hands — and a quieter head."
      </blockquote>
      <p className="mt-6 text-sm uppercase tracking-[0.18em] text-charcoal-soft">
        Emily — Fused glass workshop, May
      </p>
    </section>
  );
}

function Upcoming() {
  const dates = [
    { date: "Sat 21 Jun", title: "Fused Glass Sun-Catchers", spots: "2 spaces left" },
    { date: "Sun 29 Jun", title: "Beginner Mosaic Dish", spots: "4 spaces left" },
    { date: "Thu 03 Jul", title: "Botanical Watercolour", spots: "6 spaces left" },
  ];
  return (
    <section className="border-t border-line bg-sage-deep py-24 text-ivory lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-ivory/70">
              <span className="mr-3 inline-block h-px w-10 bg-ivory/60 align-middle" />
              Upcoming dates
            </p>
            <h2 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl">
              Pull up a chair this summer.
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 border border-ivory/40 px-7 py-4 text-xs uppercase tracking-[0.18em] text-ivory transition hover:bg-ivory hover:text-sage-deep">
            Enquire to book
          </Link>
        </div>
        <ul className="mt-14 divide-y divide-ivory/20 border-y border-ivory/20">
          {dates.map((d) => (
            <li key={d.title} className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline">
              <span className="md:col-span-3 text-sm uppercase tracking-[0.18em] text-ivory/70">{d.date}</span>
              <span className="md:col-span-6 font-serif text-2xl text-ivory">{d.title}</span>
              <span className="md:col-span-3 md:text-right text-xs uppercase tracking-[0.18em] text-clay-soft">{d.spots}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
