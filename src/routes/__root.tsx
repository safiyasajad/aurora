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
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-6 font-display text-5xl text-gold-gradient">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for has drifted off course.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-gold">Return Home</Link>
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
        <h1 className="font-display text-3xl text-gold-gradient">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Please try again or return to the homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-gold">Try again</button>
          <a href="/" className="btn-ghost-gold">Go home</a>
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
      { title: "Aurora Gems — Finest Natural Sri Lankan Sapphires" },
      { name: "description", content: "Aurora Gems sources premium natural Sri Lankan sapphires and fine jewelry for international buyers, investors, and collectors. Beruwala · Colombo · Bangkok." },
      { name: "author", content: "Aurora Gems" },
      { property: "og:site_name", content: "Aurora Gems" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0a1124" },
      { property: "og:title", content: "Aurora Gems — Finest Natural Sri Lankan Sapphires" },
      { name: "twitter:title", content: "Aurora Gems — Finest Natural Sri Lankan Sapphires" },
      { property: "og:description", content: "Aurora Gems sources premium natural Sri Lankan sapphires and fine jewelry for international buyers, investors, and collectors. Beruwala · Colombo · Bangkok." },
      { name: "twitter:description", content: "Aurora Gems sources premium natural Sri Lankan sapphires and fine jewelry for international buyers, investors, and collectors. Beruwala · Colombo · Bangkok." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/59b0e311-3ef7-49b9-92bd-d5611b42724f/id-preview-d9a3cf81--89c48a1a-456b-4459-8b31-c6525e785091.lovable.app-1782729484151.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/59b0e311-3ef7-49b9-92bd-d5611b42724f/id-preview-d9a3cf81--89c48a1a-456b-4459-8b31-c6525e785091.lovable.app-1782729484151.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap" },
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
      <Outlet />
    </QueryClientProvider>
  );
}

