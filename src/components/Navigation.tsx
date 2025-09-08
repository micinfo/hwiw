'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="hidden md:flex space-x-8">
      <Link 
        href="/" 
        className={`${pathname === "/" ? "bg-pink-500 text-white" : "text-purple-700 hover:text-pink-500"} px-6 py-2 rounded-full transition-colors`}
      >
        Home
      </Link>
      <Link 
        href="/about" 
        className={`${pathname === "/about" ? "bg-pink-500 text-white" : "text-purple-700 hover:text-pink-500"} px-6 py-2 rounded-full transition-colors`}
      >
        About Us
      </Link>
      <Link 
        href="/conditions" 
        className={`${pathname === "/conditions" ? "bg-pink-500 text-white" : "text-purple-700 hover:text-pink-500"} px-6 py-2 rounded-full transition-colors`}
      >
        Conditions
      </Link>
      <Link 
        href="/resources" 
        className={`${pathname === "/resources" ? "bg-pink-500 text-white" : "text-purple-700 hover:text-pink-500"} px-6 py-2 rounded-full transition-colors`}
      >
        Resources
      </Link>
      <Link 
        href="/resources/pdf" 
        className={`${pathname === "/resources/pdf" ? "bg-pink-500 text-white" : "text-purple-700 hover:text-pink-500"} px-6 py-2 rounded-full transition-colors`}
      >
        PDF Resources
      </Link>
      <Link 
        href="/contact" 
        className={`${pathname === "/contact" ? "bg-pink-500 text-white" : "text-purple-700 hover:text-pink-500"} px-6 py-2 rounded-full transition-colors`}
      >
        Contact Us
      </Link>
    </nav>
  );
}