import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "ACLD",
  description: "You've reached Aura's website - information for my bots and how to get in touch can be found here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/pfp_fullsize_no_bg.png" sizes="any" />
      </head>
      <body className="antialiased font-sans z-0 scroll-smooth">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
