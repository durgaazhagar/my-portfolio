import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Durga A - Cybersecurity Professional",
  description: "Aspiring Cybersecurity Professional specializing in web security, ethical hacking, and Python development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${bricolageGrotesque.className} dark bg-black text-white`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
