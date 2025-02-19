import localFont from "next/font/local";
import "./globals.css";
import { getServerSession } from 'next-auth'

import SessionProvider from '../components/SessionProvider'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ร้านอาหารสวนปัญจะ",
  description: "ร้านอาหารสวนปัญจะ บรรยากาศดี อาหารอร่อย",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
