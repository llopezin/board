import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monstserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Board",
  description: "Board fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monstserrat.className} antialiased color-mutedSand bg-slategrey`}
      >
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
