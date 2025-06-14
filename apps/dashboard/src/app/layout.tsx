import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "DevPlus | Developer Extension",
    template: "%s | DevPlus - Web Dev Companion",
  },
  description:
    "DevPlus is a modern browser extension for frontend developers. It enhances the dev experience by providing real-time insights into React state, console logs, API calls, and more — all in an intuitive overlay UI.",
  keywords: [
    "web extension",
    "frontend developer tools",
    "React DevTools",
    "Next.js extension",
    "debugging tools",
    "browser extension",
    "developer overlay",
    "DevPlus",
    "JavaScript",
    "TypeScript",
    "React",
    "performance monitor",
  ],
  authors: [{ name: "Marvellous Udoye" }],
  creator: "Marvellous Udoye",
  publisher: "Marvellous Udoye",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devplus.vercel.app/",
    siteName: "DevPlus | Web Extension for Developers",
    title: "DevPlus - Browser Extension for Frontend Developers",
    description:
      "DevPlus helps developers inspect logs, monitor state, and debug frontend apps faster — directly in the browser. Built for modern stacks like React, Next.js, and TypeScript.",
  },
  applicationName: "DevPlus - Web Dev Extension",
  category: "Developer Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta
          httpEquiv="Cache-Control"
          content="no-store, no-cache, must-revalidate"
        />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="font-jakarta antialiased">{children}</body>
    </html>
  );
}
