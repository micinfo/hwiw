// src/types/types.d.ts
interface Window {
  dataLayer?: (string | number | boolean | object)[];
  gtag?: (...args: any[]) => void;
}
