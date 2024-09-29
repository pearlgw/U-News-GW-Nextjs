import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import RandomNews from "@/components/random-news";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "U-News-GW",
  description: "news for your where you can find what you need",
  icons: {
    icon: [{ url: '/img/u-news-gw.png', sizes: '32x32' }, { url: '/img/u-news-gw.png', sizes: '16' }],
    apple: {
      url: '/img/u-news-gw.png',
      sizes: '180x180'
    }
  },
  manifest: '/img/site.webmanifest',
  openGraph: {
    title: "U-News-GW",
    description: "news for your where you can find what you need",
    type: 'article',
    authors: 'natagw'
  },
  keywords: ['U-News-GW', 'News', 'News about everything']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <main className="px-2 md:px-20">
          <Header />
          <Navbar />
          <section className="flex justify-between">
            {children}
            <RandomNews />
          </section>
        </main>
      </body>
    </html>
  );
}
