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

  // Build breadcrumb paths for each segment
  const breadcrumbPaths = segments.map(
    (_, idx) => "/" + segments.slice(0, idx + 1).join("/"),
  );

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="flex items-center gap-4 px-6 py-4 bg-black border-b sticky top-0 left-0 w-full z-50">
        <button
          aria-label="Toggle sidebar"
          className="p-2 rounded hover:bg-gray-100 inline-flex"
          onClick={onSidebarToggle}
        >
          <Menu size={20} />
        </button>
        <nav
          aria-label="Breadcrumb"
          className="flex items-center text-sm text-gray-100 flex-1"
        >
          {/* Home breadcrumb */}
          {pathname === "/" ? (
            <span className="font-medium text-gray-500">Home</span>
          ) : (
            <a href="/" className="hover:underline text-gray-100">
              Home
            </a>
          )}
          {segments.map((segment, idx) => {
            const isLast = idx === segments.length - 1;
            const path = breadcrumbPaths[idx];
            return (
              <React.Fragment key={idx}>
                <ChevronRight className="mx-1" size={16} />
                {isLast ? (
                  <span className="capitalize font-medium text-gray-500">
                    {segment.replace(/-/g, " ")}
                  </span>
                ) : (
                  <a
                    href={path}
                    className="capitalize hover:underline text-gray-100"
                  >
                    {segment.replace(/-/g, " ")}
                  </a>
                )}
              </React.Fragment>
            );
          })}
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
