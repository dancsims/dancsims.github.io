"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, Mail } from "lucide-react";
import ContactDrawer from "./ui/contact-drawer";

interface HeaderProps {
  onSidebarToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="flex items-center gap-4 px-6 py-4 bg-black border-b relative z-40">
        <button
          aria-label="Toggle sidebar"
          className="p-2 rounded hover:bg-gray-100"
          onClick={onSidebarToggle}
        >
          <Menu size={20} />
        </button>
        <nav
          aria-label="Breadcrumb"
          className="flex items-center text-sm text-gray-100 flex-1"
        >
          <span className="font-medium text-gray-500">Home</span>
          {segments.map((segment, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="mx-1" size={16} />
              <span className="capitalize">{segment.replace(/-/g, " ")}</span>
            </React.Fragment>
          ))}
        </nav>
        <button
          aria-label="Contact"
          className="ml-auto p-2 rounded hover:bg-gray-100 text-gray-100 hover:text-blue-500"
          onClick={() => setDrawerOpen(true)}
        >
          <Mail size={20} />
        </button>
      </header>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};
