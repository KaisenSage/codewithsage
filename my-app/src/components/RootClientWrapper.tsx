"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AppearOnScroll from "@/components/AppearOnScroll";
import Cookies from "js-cookie";

export default function ClientRootWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    const c = Cookies.get("site_cookie_consent");
    if (c === "accepted" || c === "declined") {
      setConsent(c as "accepted" | "declined");
    }
  }, []);

  const handleAccept = useCallback(() => {
    setConsent("accepted");
  }, []);

  return (
    <ClerkProvider>
      {/* Load Tawk only AFTER consent */}
      {consent === "accepted" && (
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/68d056215510221925d1554a/1j5mt0to4';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      )}

      {pathname !== "/" && <Navbar />}

      <main className="flex-1 flex flex-col">{children}</main>

      {/* Show footer on all pages except homepage */}
      {pathname !== "/" && (
        <AppearOnScroll amount={0.15}>
          <Footer />
        </AppearOnScroll>
      )}

      {/* Cookie consent banner (shown if no consent yet) */}
      <CookieConsent onAccept={handleAccept} />
    </ClerkProvider>
  );
}
