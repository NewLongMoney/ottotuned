import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ottotuned.local"),
  title: "Otto Tuned | Making Your Dreams a Reality",
  description:
    "Kenya’s vehicle pro-tuner for all makes. Tarmac racing champion Lëroy Otto — Euro tuning, diesel, stock block, full calibration & track prep. Mamba Turbo partner. Call +254 782 217 212.",
  keywords: [
    "Otto Tuned",
    "Lëroy Otto",
    "Leroy Otto",
    "vehicle tuner Kenya",
    "car tuning Nairobi",
    "Euro tuning",
    "diesel tuning Kenya",
    "ECU calibration",
    "Kenya motorsport",
  ],
  openGraph: {
    title: "Otto Tuned | Making Your Dreams a Reality",
    description:
      "Kenya racing-champion tuning for all makes. Book a consultation with Lëroy Otto — +254 782 217 212.",
    type: "website",
    images: [
      {
        url: "/brand/instagram-reference.jpg",
        width: 1200,
        height: 630,
        alt: "Otto Tuned — brand reference from @ottotuned_",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Otto Tuned",
    description: "Making your dreams a reality. Vehicle Pro-Tuner — All Makes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
