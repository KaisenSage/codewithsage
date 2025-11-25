"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

/**
 * Client-only wrapper for Footer so we can use usePathname for conditional display.
 * This avoids making the entire root layout a client component.
 */
export default function FooterClient() {
  const pathname = usePathname();

  // Show footer on all pages except "/"
  if (pathname === "/") return null;

  return <Footer />;
}