import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navigation from "@/components/Navigation";
// Removed usePathname import that was no longer needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healthy Women in the Workplace",
  description: "Prioritizing and protecting the cardiovascular and reproductive health of women at every life stage",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="text-purple-700 font-bold text-xl">
                  <Image
                    src="/logo.svg"
                    alt="Doctor with clipboard"
                    width={120}
                    height={120}
                    className="rounded-full"
                    priority
                  />
                </div>
              </div>
              <Navigation />
              <button className="md:hidden text-purple-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-pink-500 text-white py-2">
            <div className="container mx-auto px-4 flex justify-between items-center text-sm">
              <div>PH-MONT-00178 Dec 2022</div>
              <div className="flex space-x-4">
                <a href="/privacy" className="hover:underline">Privacy Statement</a>
                <a href="/terms" className="hover:underline">Terms of Use</a>
                <a href="/contact" className="hover:underline">Contact Us</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
