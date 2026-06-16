import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Airbnb Experiences — Heartwood Studio" },
      { name: "description", content: "Book our craft workshops directly via Airbnb Experiences — perfect for visitors to the Cotswolds." },
      { property: "og:title", content: "Airbnb Experiences — Heartwood Studio" },
      { property: "og:description", content: "Discover our Cotswold craft workshops on Airbnb." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ExperiencesPage,
});

const testimonials = [
  {
    quote: "By far the loveliest thing we did on our trip to England. Hannah is a generous, patient teacher and the studio is heaven.",
    name: "Marlene",
    location: "Hamburg",
  },
  {
    quote: "Booked it as a surprise for my partner's birthday. We left with two little glass dishes and a much quieter day than we'd planned.",
    name: "Tom",
    location: "London",
  },
  {
    quote: "I don't think of myself as creative, at all. I made something I'm proud of. Cake was excellent too.",
    name: "Priya",
    location: "Bristol",
  },
];

const upcoming = [
  { date: "Sat 21 Jun", title: "Fused Glass Sun-Catchers", time: "2:00 — 5:00pm" },
  { date: "Sun 29 Jun", title: "Beginner Mosaic Dish", time: "10:00am — 2:00pm" },
  { date: "Thu 03 Jul", title: "Botanical Watercolour", time: "10:30am — 12:30pm" },
  { date: "Sat 12 Jul", title: "Fused Glass Coasters", time: "2:00 — 5:00pm" },
];

function ExperiencesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Friends enjoying a workshop together" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-32 text-ivory lg:px-12 lg:py-40">
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-ivory/80">
            <span className="mr-3 inline-block h-px w-10 bg-ivory/60 align-middle" />
            On Airbnb Experiences
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl">
            Visiting the Cotswolds? <br />
            <em className="italic">Book us in for an afternoon.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ivory/85">
            Our most popular workshops are listed on Airbnb Experiences — instant booking,
            free cancellation, and reviews from hundreds of past guests.
          </p>
          <a
            href="https://www.airbnb.co.uk/experiences"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-ivory px-7 py-4 text-xs uppercase tracking-[0.18em] text-charcoal transition hover:bg-clay hover:text-ivory"
          >
            View on Airbnb →
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-t border-charcoal pt-6">
              <blockquote className="font-serif text-xl leading-snug text-charcoal">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-charcoal-soft">
                {t.name} · {t.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ivory-deep/60 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow"><span className="rule" />Upcoming on Airbnb</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Open spaces this season.</h2>
            </div>
            <Link to="/workshops" className="text-sm uppercase tracking-[0.18em] text-charcoal link-underline">
              See all workshops →
            </Link>
          </div>
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {upcoming.map((u) => (
              <li key={u.title + u.date} className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline">
                <span className="md:col-span-3 text-sm uppercase tracking-[0.18em] text-charcoal-soft">{u.date}</span>
                <span className="md:col-span-6 font-serif text-2xl">{u.title}</span>
                <span className="md:col-span-3 md:text-right text-xs uppercase tracking-[0.18em] text-sage-deep">{u.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}