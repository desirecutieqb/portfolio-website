import "./globals.css";
import { Quicksand } from "next/font/google";
import { Metadata } from "next";
import ParticleComponent from "./components/particles";
import Footer from "./components/Footer";
const quickSand = Quicksand({
  subsets: ["latin"],
  weight: '500',
  display: 'swap',
  variable: "--font-quicksand"
})

export const metadata: Metadata = {
  title: {
    default: "Mykyta Tarakanov",
    template: "%s - Mykyta Tarakanov",
  },
  openGraph:{
    url:"desirecutieqb.com"
  },
  description: "Check out my work.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

        className={`${quickSand.className} antialiased`}
      >
        <ParticleComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
