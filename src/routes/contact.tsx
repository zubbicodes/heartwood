import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Heartwood Studio" },
      { name: "description", content: "Get in touch about workshops, private bookings or gift vouchers. We aim to reply within two working days." },
      { property: "og:title", content: "Contact — Heartwood Studio" },
      { property: "og:description", content: "Enquire about a workshop or private booking." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-12 lg:pt-32">
        <p className="eyebrow"><span className="rule" />Contact</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl">
          Say <em className="italic text-sage-deep">hello.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-charcoal-soft">
          Tell us a little about what you're after — a workshop date, a gift voucher, a
          private group — and we'll come back to you within two working days.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 md:grid-cols-12 lg:px-12">
        <form
          className="md:col-span-7 space-y-6"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <Field label="Your name" id="name" />
          <Field label="Email" id="email" type="email" />
          <Field label="Phone (optional)" id="phone" type="tel" />
          <div>
            <label htmlFor="workshop" className="block text-xs uppercase tracking-[0.18em] text-charcoal-soft">
              Which workshop?
            </label>
            <select
              id="workshop"
              className="mt-2 w-full border-0 border-b border-charcoal bg-transparent py-3 font-serif text-lg text-charcoal focus:border-sage-deep focus:outline-none focus:ring-0"
              defaultValue=""
            >
              <option value="" disabled>Choose one…</option>
              <option>Fused Glass Sun-Catchers</option>
              <option>Mosaic Dish or Coaster</option>
              <option>Botanical Watercolour</option>
              <option>Seasonal Wreath Making</option>
              <option>Private group booking</option>
              <option>Gift voucher</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-[0.18em] text-charcoal-soft">
              Your message
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-2 w-full border-0 border-b border-charcoal bg-transparent py-3 font-serif text-lg text-charcoal focus:border-sage-deep focus:outline-none focus:ring-0"
              placeholder="A few lines about what you have in mind"
            />
          </div>
          <button type="submit" className="btn-primary">{sent ? "Message sent — thank you" : "Send enquiry"}</button>
        </form>

        <aside className="md:col-span-5 md:pl-8">
          <div className="border-t border-charcoal pt-6">
            <p className="eyebrow">Studio</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-charcoal">
              The Old Dairy<br />
              Wheatfield Lane<br />
              Painswick, Gloucestershire<br />
              GL6 6XB
            </p>
          </div>
          <div className="mt-10 border-t border-charcoal pt-6">
            <p className="eyebrow">Direct</p>
            <p className="mt-4 font-serif text-xl text-charcoal">hello@heartwoodstudio.co.uk</p>
            <p className="mt-1 font-serif text-xl text-charcoal">01452 812 334</p>
          </div>
          <div className="mt-10 border-t border-charcoal pt-6">
            <p className="eyebrow">Opening</p>
            <p className="mt-4 text-charcoal-soft">Thursday — Sunday<br />Workshops by booking only.</p>
          </div>
        </aside>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
          <p className="eyebrow"><span className="rule" />Find us</p>
          <h2 className="mt-4 font-serif text-3xl leading-snug">Down a single-track lane near Painswick.</h2>
          <div className="mt-8 overflow-hidden border border-line">
            <iframe
              title="Map of Painswick, Gloucestershire"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-2.2200%2C51.7700%2C-2.1500%2C51.8000&layer=mapnik&marker=51.7850%2C-2.1950"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-[0.18em] text-charcoal-soft">{label}</label>
      <input
        id={id}
        type={type}
        className="mt-2 w-full border-0 border-b border-charcoal bg-transparent py-3 font-serif text-lg text-charcoal placeholder:text-charcoal-soft/60 focus:border-sage-deep focus:outline-none focus:ring-0"
      />
    </div>
  );
}