// src/app/lib/AnalyticsSetup.tsx
"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import ReactGA from "react-ga4";

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log("Analytics: Initializing...");
    console.log("Analytics: Measurement ID:", process.env.NEXT_PUBLIC_GA_ID);

    if (!window.gtag) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        console.log("Analytics: gtag.js loaded");
        window.dataLayer = window.dataLayer || [];
        window.gtag = function (
          ...args: (string | Date | Record<string, unknown>)[]
        ) {
          window.dataLayer.push(args);
        };
        window.gtag("js", new Date());
        window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
          send_page_view: false,
          cookie_domain: "auto",
          debug_mode: true,
        });
      };
    }

    if (process.env.NEXT_PUBLIC_GA_ID) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID, {
        testMode: true,
        gaOptions: {
          cookie_domain: "auto",
        },
      });
      console.log("Analytics: react-ga4 initialized");
    } else {
      console.error("Analytics: No Measurement ID found!");
    }

    const url = `${pathname}${
      searchParams.toString() ? `?${searchParams.toString()}` : ""
    }`;
    ReactGA.send({ hitType: "pageview", page: url, title: document.title });
    console.log("Analytics: Initial page view sent");
  }, [pathname, searchParams]);

  useEffect(() => {
    const url = `${pathname}${
      searchParams.toString() ? `?${searchParams.toString()}` : ""
    }`;
    ReactGA.send({ hitType: "pageview", page: url, title: document.title });
    console.log("Analytics: Route change page view sent");
  }, [pathname, searchParams]);

  return null; // No UI, just tracking
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      {" "}
      {/* Fallback can be null or a loading spinner */}
      <AnalyticsContent />
    </Suspense>
  );
}
