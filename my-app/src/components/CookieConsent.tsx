"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

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
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-3xl mx-auto bg-white border rounded-lg shadow-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div className="text-sm text-gray-700">
        We use cookies to improve your experience. By clicking Accept you consent to non‑essential cookies
        (analytics, chat widgets). See our <a href="/cookie-policy" className="text-blue-600 underline">Cookie Policy</a>.
      </div>
      <div className="flex gap-2">
        <button
          onClick={decline}
          className="px-3 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Accept
        </button>
      </div>
    </div>
  );
}