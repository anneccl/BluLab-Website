import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Configuration de la font monospace
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-mono", 
});

export const metadata: Metadata = {
  title: {
    default: "BluLab",
    template: "BluLab | %s"
  },
  description: "Découvrez les dernières nouveautés du BluLab",

  // LOGO/FAVICON
  icons: {
    icon: '/logo.svg',           // Favicon dans l'onglet
    shortcut: '/logo.svg',       // Raccourci
    apple: '/logo.svg',          // Icon iOS
  },
  
  // OPEN GRAPH (partage sur réseaux sociaux)
  openGraph: {
    title: "BluLab - Where streetwear meets community",
    description: "Drops limités, events, pop-ups et énergie BluLab.",
    url: 'https://blulab.ci', //  URL du site
    siteName: 'BluLab',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 120,
        alt: 'BluLab Logo',
      },
    ],
    locale: 'fr_CI',
    type: 'website',
  },
  
  // TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    title: "BluLab - Where streetwear meets community",
    description: "Drops limités, events, pop-ups et énergie BluLab.",
    images: ['/logo.svg'], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={robotoMono.variable}>
      {/* <div className="min-h-screen bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: "url('/fond.jpg')" }}> */}
      <body className="antialiased font-mono"> {/* ← Applique la font partout */}
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
      {/* </div> */}
    </html>
  );
}