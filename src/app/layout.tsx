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
    "Vehicle Pro-Tuner for all makes. Multiple racing champion Lëroy Otto — Euro tuning, diesel, stock block, full calibration & track prep. Partnered with Mamba Turbo.",
  keywords: [
    "Otto Tuned",
    "Lëroy Otto",
    "vehicle tuner",
    "Euro tuning",
    "diesel tuning",
    "ECU calibration",
    "South Africa",
  ],
  openGraph: {
    title: "Otto Tuned | Making Your Dreams a Reality",
    description:
      "Racing-champion tuning for all makes. Book a consultation with Lëroy Otto.",
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
