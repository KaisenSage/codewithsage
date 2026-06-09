import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Start your project with Codewithsage — design, development, and launch support for your digital product.",
  alternates: {
    canonical: "/get-started",
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
