import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/navbar";

// Configuration de la font monospace
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-mono", 
});

export const metadata: Metadata = {
  title: "BluLab",
  description: "Découvrez les derniers drops BluLab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={robotoMono.variable}>
      <body className="antialiased font-mono"> {/* ← Applique la font partout */}
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}