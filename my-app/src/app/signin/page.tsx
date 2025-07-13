"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-sm w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Sign In</h1>
        <p className="text-gray-700 mb-6 text-center">
          Sign in with your Google account to continue.
        </p>
        <button
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={() => signIn("google")}
        >
          <svg width={22} height={22} viewBox="0 0 48 48" style={{ display: "inline-block", verticalAlign: "middle" }}>
            <g>
              <path d="M44.5 20H24v8.5h11.7C34.6 33.6 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.1 4.6 29.3 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20.3-7.6 20.3-21 0-1.4-.1-2.6-.3-3.7z" fill="#FFC107"/>
              <path d="M6.3 14.1l7 5.1C15.9 16 19.7 13 24 13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.1 4.6 29.3 3 24 3c-7.2 0-13 5.8-13 13 0 1.3.2 2.6.3 3.8z" fill="#FF3D00"/>
              <path d="M24 45c5.8 0 10.7-1.9 14.2-5.2l-6.6-5.4C29.7 37 26.1 39 24 39c-5.7 0-10.5-3.7-12.3-8.9l-7.1 5.5C7.7 41.4 15.3 45 24 45z" fill="#4CAF50"/>
              <path d="M44.5 20H24v8.5h11.7c-1 2.7-3.1 5.2-5.7 6.9l6.6 5.4C41.6 37.8 45 32.6 45 24c0-1.4-.1-2.6-.3-3.7z" fill="#1976D2"/>
            </g>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}