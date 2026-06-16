import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Heartwood Studio — Creative Workshops in the English Countryside" },
      { name: "description", content: "Small-group fused glass, mosaic, watercolour and seasonal craft workshops. A calm, welcoming studio in the UK." },
      { name: "author", content: "Heartwood Studio" },
      { property: "og:title", content: "Heartwood Studio — Creative Workshops" },
      { property: "og:description", content: "Half-day creative workshops in a warm countryside studio. Beginners welcome." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </QueryClientProvider>
  );
}

function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/workshops", label: "Workshops" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/experiences", label: "Airbnb" },
  { to: "/contact", label: "Contact" },
] as const;

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ivory/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight text-charcoal">Heartwood</span>
          <span className="eyebrow hidden sm:inline">Studio</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.78rem] uppercase tracking-[0.18em] text-charcoal-soft transition-colors hover:text-charcoal"
              activeProps={{ className: "text-[0.78rem] uppercase tracking-[0.18em] text-sage-deep" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden btn-primary md:inline-flex">
          Enquire
        </Link>
        <details className="md:hidden">
          <summary className="cursor-pointer list-none text-xs uppercase tracking-[0.18em] text-charcoal">Menu</summary>
          <div className="absolute left-0 right-0 top-full border-t border-line bg-ivory px-6 py-6">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm uppercase tracking-[0.18em] text-charcoal">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-ivory-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-12">
        <div className="md:col-span-2">
          <p className="eyebrow">Heartwood Studio</p>
          <h3 className="mt-4 max-w-md font-serif text-2xl leading-snug text-charcoal">
            A small countryside studio for slow, hands-on making.
          </h3>
          <p className="mt-4 max-w-md text-sm text-charcoal-soft">
            Workshops run Thursday through Sunday, year-round. All materials provided.
            Tea, cake, and good company included.
          </p>
        </div>
        <div>
          <p className="eyebrow">Visit</p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
            The Old Dairy<br />
            Wheatfield Lane<br />
            Painswick, Gloucestershire<br />
            GL6 6XB
          </p>
        </div>
        <div>
          <p className="eyebrow">Stay in touch</p>
          <p className="mt-4 text-sm text-charcoal-soft">
            hello@heartwoodstudio.co.uk<br />
            01452 812 334
          </p>
          <div className="mt-5 flex gap-4 text-xs uppercase tracking-[0.18em] text-charcoal-soft">
            <a href="#" className="link-underline">Instagram</a>
            <a href="#" className="link-underline">Airbnb</a>
          </div>
        </div>
      </div>
      <div className="border-t border-line/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-charcoal-soft md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© {new Date().getFullYear()} Heartwood Studio. Handmade in Gloucestershire.</p>
          <p>Site by the studio.</p>
        </div>
      </div>
    </footer>
  );
}
