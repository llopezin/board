import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

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
        className={`${monstserrat.className} antialiased color-mutedSand bg-stone-800`}
      >
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
