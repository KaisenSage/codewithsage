"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Cookie } from "lucide-react";

type Props = {
  onAccept?: () => void;
  cookieName?: string;
  expiryDays?: number;
};

export default function CookieConsent({ onAccept, cookieName = "site_cookie_consent", expiryDays = 365 }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const c = Cookies.get(cookieName);
    if (!c) {
      // show banner if no consent set
      setVisible(true);
    } else {
      // if already accepted, call onAccept so parent can init analytics/widgets
      if (c === "accepted" && onAccept) onAccept();
    }
  }, [cookieName, onAccept]);

  function accept() {
    Cookies.set(cookieName, "accepted", { expires: expiryDays });
    setVisible(false);
    onAccept?.();
  }

  function decline() {
    Cookies.set(cookieName, "declined", { expires: expiryDays });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <section
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-[#101a32] text-white shadow-[0_24px_80px_rgba(15,23,42,0.35)] ring-1 ring-slate-950/10 sm:bottom-6"
    >
      <div className="pointer-events-none absolute -right-16 -top-28 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6 lg:p-7">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-200/20 bg-blue-400/10 text-blue-200">
            <Cookie className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
              Your cookie preferences
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              We use essential cookies to run this site. With your permission,
              we also use optional cookies for analytics and chat features.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col-reverse gap-2 sm:flex-row">
          <button
            onClick={decline}
            className="min-h-11 rounded-full border border-white/15 px-5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="min-h-11 rounded-full bg-blue-500 px-6 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(59,130,246,0.3)] transition hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            Accept
          </button>
        </div>
      </div>
    </section>
  );
}