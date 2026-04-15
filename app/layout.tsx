import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainShell from "@/components/main-shell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Sims",
  description: "Personal portfolio of Daniel Sims",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Experience", url: "/experience" },
    { text: "Portfolio", url: "/portfolio" },
    { text: "Skills", url: "/skills" },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainShell navLinks={navLinks}>{children}</MainShell>
      </body>
    </html>
  );
}
