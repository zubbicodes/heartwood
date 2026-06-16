import { createFileRoute, Link } from "@tanstack/react-router";
import glassImg from "@/assets/workshop-fused-glass.jpg";
import mosaicImg from "@/assets/workshop-mosaic.jpg";
import watercolorImg from "@/assets/workshop-watercolor.jpg";
import seasonalImg from "@/assets/workshop-seasonal.jpg";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops — Heartwood Studio" },
      { name: "description", content: "Half-day craft workshops in fused glass, mosaic, watercolour and seasonal making. Beginner-friendly, all materials included." },
      { property: "og:title", content: "Workshops — Heartwood Studio" },
      { property: "og:description", content: "Browse small-group creative workshops in our Cotswold studio." },
      { property: "og:image", content: mosaicImg },
    ],
  }),
  component: WorkshopsPage,
});

const workshops = [
  {
    img: glassImg,
    title: "Fused Glass Sun-Catchers",
    blurb: "Choose from a tray of jewel-toned glass pieces and design a small piece that catches the light. We'll fire your work and post it home the following week.",
    duration: "3 hours",
    level: "Beginner",
    group: "Max 6",
    price: "£75 per person",
  },
  {
    img: mosaicImg,
    title: "Mosaic Dish or Coaster",
    blurb: "A slow, satisfying introduction to mosaic. Cut, place, grout — leave with a finished piece you'll actually use.",
    duration: "4 hours",
    level: "Beginner",
    group: "Max 8",
    price: "£85 per person",
  },
  {
    img: watercolorImg,
    title: "Botanical Watercolour",
    blurb: "A calm guided session studying simple cuttings from the garden. We'll cover colour-mixing, washes and a little loose botanical drawing.",
    duration: "2 hours",
    level: "All abilities",
    group: "Max 8",
    price: "£45 per person",
  },
  {
    img: seasonalImg,
    title: "Seasonal Wreath Making",
    blurb: "Foraged foliage, dried flowers and a willow base. Autumn & winter only, with mulled apple juice and a wood-burner going.",
    duration: "3 hours",
    level: "Beginner",
    group: "Max 8",
    price: "£65 per person",
  },
];

function WorkshopsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-12 lg:pt-32">
        <p className="eyebrow"><span className="rule" />Workshops</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl">
          Small classes, <em className="italic text-sage-deep">slow afternoons,</em> things to take home.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-charcoal-soft">
          Every session is two to four hours, includes all materials, and is designed for
          people who'd never call themselves "an artist". Group sizes are small on purpose.
        </p>
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-6 pb-24 lg:px-12 lg:pb-32">
        {workshops.map((w, i) => (
          <article key={w.title} className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img
                src={w.img}
                alt={w.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1 md:pr-8" : "md:pl-8"}`}>
              <p className="eyebrow"><span className="rule" />0{i + 1}</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight">{w.title}</h2>
              <p className="mt-4 text-charcoal-soft">{w.blurb}</p>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-line py-6 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-charcoal-soft">Duration</dt>
                  <dd className="mt-1 font-serif text-lg">{w.duration}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-charcoal-soft">Skill level</dt>
                  <dd className="mt-1 font-serif text-lg">{w.level}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-charcoal-soft">Group size</dt>
                  <dd className="mt-1 font-serif text-lg">{w.group}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-charcoal-soft">From</dt>
                  <dd className="mt-1 font-serif text-lg">{w.price}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Enquire about dates</Link>
                <Link to="/experiences" className="btn-ghost">Book via Airbnb</Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-line bg-ivory-deep/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <p className="eyebrow"><span className="rule" />Private bookings</p>
          <h2 className="mt-4 font-serif text-4xl leading-snug">
            Hen parties, work days, milestone birthdays.
          </h2>
          <p className="mt-4 text-charcoal-soft">
            We host private groups of up to ten on weekday mornings and evenings.
            Tell us a little about the occasion and we'll suggest a workshop to fit.
          </p>
          <Link to="/contact" className="mt-8 inline-flex btn-primary">Plan a private session</Link>
        </div>
      </section>
    </>
  );
}