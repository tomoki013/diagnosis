import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Metadata } from "next";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "占い・診断館",
  description: "みんなで作る、新感覚の占い・診断サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} font-sans antialiased`}>
        <Header />
        <main className="flex-1 text-sm md:text-base">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
