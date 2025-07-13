"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e0e7ff 0%, #f0f4f8 100%)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2.5rem 2rem",
          borderRadius: "1.25rem",
          boxShadow: "0 6px 32px 0 rgba(80, 112, 255, 0.10), 0 1.5px 6px 0 rgba(0,0,0,0.05)",
          minWidth: "320px",
          maxWidth: "90vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            background: "linear-gradient(135deg,#4285F4 60%,#34A853 100%)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.25rem",
          }}
        >
          <svg width={36} height={36} viewBox="0 0 48 48" fill="none">
            <g>
              <path d="M44.5 20H24v8.5h11.7C34.6 33.6 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.1 4.6 29.3 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20.3-7.6 20.3-21 0-1.4-.1-2.6-.3-3.7z" fill="#FFC107"/>
              <path d="M6.3 14.1l7 5.1C15.9 16 19.7 13 24 13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.1 4.6 29.3 3 24 3c-7.2 0-13 5.8-13 13 0 1.3.2 2.6.3 3.8z" fill="#FF3D00"/>
              <path d="M24 45c5.8 0 10.7-1.9 14.2-5.2l-6.6-5.4C29.7 37 26.1 39 24 39c-5.7 0-10.5-3.7-12.3-8.9l-7.1 5.5C7.7 41.4 15.3 45 24 45z" fill="#4CAF50"/>
              <path d="M44.5 20H24v8.5h11.7c-1 2.7-3.1 5.2-5.7 6.9l6.6 5.4C41.6 37.8 45 32.6 45 24c0-1.4-.1-2.6-.3-3.7z" fill="#1976D2"/>
            </g>
          </svg>
        </div>
        <h1 style={{ marginBottom: "1.15rem", fontWeight: 700, fontSize: "1.7rem", color: "#22223b", textAlign: "center" }}>
          Sign in to your account
        </h1>
        <p style={{ color: "#585e8b", marginBottom: "2rem", textAlign: "center" }}>
          Welcome back! Please sign in with your Google account to continue.
        </p>
        <button
          style={{
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "0.5rem",
            background: "linear-gradient(90deg,#4285F4 60%,#34A853 100%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(66,133,244,0.10)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "background 0.2s",
          }}
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