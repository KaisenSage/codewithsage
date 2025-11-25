"use client";
import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import Cookies from "js-cookie";
import CookieConsent from "@/components/CookieConsent";

/**
 * Client-only component:
 * - reads cookie consent
 * - loads Tawk script only after consent
 * - renders CookieConsent UI (calls onAccept)
 */
export default function CookieAndScripts() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    const c = Cookies.get("site_cookie_consent");
    if (c === "accepted" || c === "declined") {
      setConsent(c as "accepted" | "declined");
    }
  }, []);

  const handleAccept = useCallback(() => {
    Cookies.set("site_cookie_consent", "accepted", { expires: 365 });
    setConsent("accepted");
  }, []);

  return (
    <>
      {/* Tawk chat: only injected after consent */}
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

      {/* Cookie consent banner */}
      <CookieConsent onAccept={handleAccept} />
    </>
  );
}