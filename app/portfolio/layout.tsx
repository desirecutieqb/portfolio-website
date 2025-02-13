import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Portfolio",
    description: "Have a look at my recent projects."
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