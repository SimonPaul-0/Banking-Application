import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville"
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon, a modern banking platform",
  icons: {
    icon: "/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${libreBaskerville.variable}`}>
        {children}
      </body>
    </html>
  );
}

