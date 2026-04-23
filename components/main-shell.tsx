"use client";

import React from "react";
import Sidebar from "@/components/sidebar";
import { Header } from "@/components/header";

interface MainShellProps {
  navLinks: { text: string; url: string }[];
  children: React.ReactNode;
}

export default function MainShell({ navLinks, children }: MainShellProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile); // open by default on desktop, closed on mobile
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    // Listen for sidebar-close event from Sidebar
    const closeSidebar = () => setSidebarOpen(false);
    window.addEventListener("sidebar-close", closeSidebar);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("sidebar-close", closeSidebar);
    };
  }, []);

  return (
    <div className="flex min-h-screen relative">
      <div
        className={
          !isMobile && sidebarOpen
            ? "flex-1 md:ml-[272px] ml-0 transition-all duration-300"
            : "flex-1 ml-0 transition-all duration-300"
        }
      >
        <Header onSidebarToggle={() => setSidebarOpen((v) => !v)} />
        <div className="p-4">{children}</div>
      </div>
      {/* Overlay and Sidebar rendered last so they are above header/content on mobile */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-300 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar links={navLinks} isOpen={sidebarOpen} />
    </div>
  );
}
