import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "OnboardFlow AI - AI-Powered SaaS Onboarding",
  description:
    "Turn trial users into paying customers with AI-driven onboarding and retention automation.",
  keywords: [
    "SaaS onboarding",
    "AI onboarding",
    "user activation",
    "customer retention",
  ],
  robots: "index, follow",
  authors: [{ name: "OnboardFlow AI Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onboardflowai.com",
    title: "OnboardFlow AI - AI-Powered SaaS Onboarding",
    description:
      "Increase SaaS activation rates with AI-powered personalized onboarding.",
    images: [
      {
        url: "https://onboardflowai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OnboardFlow AI Dashboard",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/* Google Analytics or any tracking scripts */}
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      <head />

      <body className="dark:bg-black">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
