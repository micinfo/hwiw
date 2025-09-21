'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script'; // For manual gtag.js loading
import ReactGA from 'react-ga4';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log('Analytics: Initializing...'); // Debug log 1
    console.log('Analytics: Measurement ID:', process.env.NEXT_PUBLIC_GA_ID); // Should log your G-ID

    // Manual gtag.js script load (fallback if react-ga4 fails)
    if (!window.gtag) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        console.log('Analytics: gtag.js loaded'); // Debug log 2
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          send_page_view: false, // Manual control for SPA
          cookie_domain: 'auto', // Works with ngrok domain
          debug_mode: true, // Logs to console
        });
      };
    }

    // Initialize react-ga4
    if (process.env.NEXT_PUBLIC_GA_ID) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID, {
        testMode: true, // Console logs events
        gaOptions: {
          cookie_domain: 'auto',
        },
      });
      console.log('Analytics: react-ga4 initialized'); // Debug log 3
    } else {
      console.error('Analytics: No Measurement ID found!');
    }

    // Track initial page view
    const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    ReactGA.send({ hitType: 'pageview', page: url, title: document.title });
    console.log('Analytics: Initial page view sent'); // Debug log 4
  }, []);

  useEffect(() => {
    const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    ReactGA.send({ hitType: 'pageview', page: url, title: document.title });
    console.log('Analytics: Route change page view sent'); // Debug log 5
  }, [pathname, searchParams]);

  return null;
}