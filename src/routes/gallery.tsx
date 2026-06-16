import { createFileRoute } from "@tanstack/react-router";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/workshop-fused-glass.jpg";
import g8 from "@/assets/workshop-watercolor.jpg";
import g9 from "@/assets/workshop-seasonal.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Heartwood Studio" },
      { name: "description", content: "Moments from our workshops: hands at work, finished pieces, and happy guests." },
      { property: "og:title", content: "Gallery — Heartwood Studio" },
      { property: "og:description", content: "A scrapbook of workshop moments." },
      { property: "og:image", content: g1 },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: g1, alt: "Two women laughing while painting" },
  { src: g5, alt: "A botanical mosaic held up to the light" },
  { src: g2, alt: "Finished fused-glass coasters on linen" },
  { src: g3, alt: "Hands shaping clay on a wooden table" },
  { src: g4, alt: "The studio interior with light wood beams" },
  { src: g7, alt: "Coloured glass pieces ready to fuse" },
  { src: g6, alt: "Workshop guests holding their finished paintings" },
  { src: g8, alt: "Watercolour palette and botanical illustration" },
  { src: g9, alt: "A dried-flower wreath being built on a table" },
];

function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-12 lg:pt-32">
        <p className="eyebrow"><span className="rule" />Gallery</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl">
          A scrapbook of <em className="italic text-sage-deep">recent afternoons.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-charcoal-soft">
          Hands at work, finished pieces, and the occasional happy chaos.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12 lg:pb-32">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {images.map((img) => (
            <figure key={img.src} className="mb-6 break-inside-avoid overflow-hidden">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full" />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}