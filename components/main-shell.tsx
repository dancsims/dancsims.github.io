"use client";

import React from "react";
import Sidebar from "@/components/sidebar";
import { Header } from "@/components/header";

interface MainShellProps {
  navLinks: { text: string; url: string }[];
  children: React.ReactNode;
}

export default function MainShell({ navLinks, children }: MainShellProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  return (
    <div className="flex min-h-screen">
      <Sidebar links={navLinks} isOpen={sidebarOpen} />
      <div
        className={
          sidebarOpen
            ? "flex-1 ml-[272px] mt-2 transition-all duration-300"
            : "flex-1 ml-0 mt-2 transition-all duration-300"
        }
      >
        <Header onSidebarToggle={() => setSidebarOpen((v) => !v)} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
