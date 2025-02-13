import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Contact",
    description: "Contact Me."
}
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          {children}
        </>
    );
  }