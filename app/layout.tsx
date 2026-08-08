import { restaurant } from "@/_data/restaurant";
import { TailwindScreenSizeIndicator } from "@/components/dev/tw-screensize-indicator";
import { Footer, Header, RestaurantJsonLd } from "@/components/layout";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["vietnamese"],
  variable: "--font-bricolage-grotesque",
});

const kasepi_sans = localFont({
  src: "../public/kasepi-sans.ttf",
  variable: "--font-kasepi-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(restaurant.url),
  title: "Ongba Eatery",
  description: "Honouring Vietnamese tradition with a modern twist.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bricolage_grotesque.variable} ${kasepi_sans.variable} scroll-smooth`}
    >
      <body className="font-bricolage-grotesque overflow-x-hidden antialiased">
        <div className="relative mx-auto flex min-h-screen w-full max-w-full flex-col scroll-smooth">
          <Header />
          {/* <HeaderSpacer /> */}
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
        <TailwindScreenSizeIndicator />
        <RestaurantJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
