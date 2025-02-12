"use client"
import "./globals.css";
import { Quicksand } from "next/font/google";
import ParticleComponent from "./components/particles";
const quickSand = Quicksand({
  subsets: ["latin"],
  weight: '500',
  display: 'swap',
  variable: "--font-quicksand"
})



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
      </body>
    </html>
  );
}
