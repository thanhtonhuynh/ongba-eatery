import { TailwindScreenSizeIndicator } from "@/components/dev/tw-screensize-indicator";
import { Footer, Header, HeaderSpacer } from "@/components/layout";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["vietnamese"],
  variable: "--font-bricolage-grotesque",
});

const titoli = localFont({
  src: "../public/titoliDiTesta.woff2",
  variable: "--font-titoli",
});

export const metadata: Metadata = {
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
      className={`${figtree.variable} ${titoli.variable} ${bricolage_grotesque.variable} scroll-smooth`}
    >
      <body className="overflow-x-hidden antialiased">
        <div className="relative mx-auto flex min-h-screen w-full max-w-full flex-col scroll-smooth">
          <Header />
          <HeaderSpacer />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
        <TailwindScreenSizeIndicator />
      </body>
    </html>
  );
}
