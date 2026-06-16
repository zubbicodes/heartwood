import { createFileRoute, Link } from "@tanstack/react-router";
import founderImg from "@/assets/founder-portrait.jpg";
import studioImg from "@/assets/studio-exterior.jpg";
import potteryImg from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hannah — Heartwood Studio" },
      { name: "description", content: "Meet Hannah, the maker behind Heartwood Studio. A lifelong love of craft, teaching, and slow afternoons." },
      { property: "og:title", content: "About — Heartwood Studio" },
      { property: "og:description", content: "The story behind a small Cotswold craft studio." },
      { property: "og:image", content: founderImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-12 lg:pt-32">
        <p className="eyebrow"><span className="rule" />About</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl">
          The maker behind <em className="italic text-sage-deep">the studio.</em>
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 md:grid-cols-12 md:items-start lg:px-12">
        <div className="md:col-span-5">
          <img
            src={founderImg}
            alt="Hannah, founder of Heartwood Studio"
            loading="lazy"
            width={1200}
            height={1500}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="eyebrow">Hi, I'm Hannah</p>
          <h2 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
            I've been making things for as long as I can remember.
          </h2>
          <div className="mt-6 space-y-5 text-charcoal-soft">
            <p>
              I grew up in a house full of fabric scraps and half-finished projects. My
              grandmother taught me to embroider before I could properly hold a pencil,
              and I've been chasing that quiet feeling of making ever since.
            </p>
            <p>
              After fifteen years working as a primary school art teacher, I found
              myself daydreaming about a small studio of my own — somewhere people could
              come for a few hours, leave their phones in their bags, and remember what
              it feels like to make something with their hands.
            </p>
            <p>
              Heartwood opened in 2021 in a stone dairy at the edge of a working farm.
              The kettle is always on, the wood-burner does its best in winter, and
              there's always cake.
            </p>
            <p className="font-serif text-2xl italic leading-snug text-charcoal">
              "You don't have to be 'good at art'. You just have to be willing
              to spend an afternoon trying."
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ivory-deep/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3 lg:px-12">
          {[
            { title: "Small groups", body: "Never more than eight people. Always enough time and attention for everyone." },
            { title: "Everything provided", body: "Tools, materials, aprons, recipes — and tea, coffee and a slice of something." },
            { title: "All abilities welcome", body: "Most guests are beginners. Many haven't 'done art' since school. You will be fine." },
          ].map((p) => (
            <div key={p.title}>
              <p className="eyebrow"><span className="rule" />Our way</p>
              <h3 className="mt-4 font-serif text-2xl">{p.title}</h3>
              <p className="mt-3 text-charcoal-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img src={studioImg} alt="The Heartwood Studio stone cottage exterior" loading="lazy" className="aspect-[5/4] w-full object-cover" />
          <div>
            <p className="eyebrow"><span className="rule" />The studio</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">A converted dairy on a working farm.</h2>
            <p className="mt-5 text-charcoal-soft">
              We're tucked down a single-track lane near Painswick, with parking
              outside the door, rolling fields beyond the kitchen window, and chickens
              who like to supervise.
            </p>
            <Link to="/contact" className="mt-8 inline-block btn-ghost">Plan a visit</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12">
        <img src={potteryImg} alt="Hands working with clay at a wooden table" loading="lazy" className="aspect-[16/9] w-full object-cover" />
      </section>
    </>
  );
}