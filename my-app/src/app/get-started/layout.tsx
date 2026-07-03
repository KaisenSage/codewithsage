import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Get Started",
  description:
    "Start your project with Codewithsage — design, development, and launch support for your digital product.",
  path: "/get-started",
});

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
