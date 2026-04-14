"use client";

//Sidebar.js
import React from "react";
import {
  FaUserCircle,
  FaHome,
  FaBriefcase,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";

type Link = {
  text: string;
  url: string;
  icon?: React.ReactNode;
};

interface SidebarProps {
  links: Link[];
  isOpen?: boolean;
}

const defaultLinks: Link[] = [
  { text: "Home", url: "/", icon: <FaHome /> },
  { text: "Experience", url: "/experience", icon: <FaBriefcase /> },
  { text: "Portfolio", url: "/portfolio", icon: <FaProjectDiagram /> },
  { text: "Skills", url: "/skills", icon: <FaTools /> },
];

const Sidebar: React.FC<SidebarProps> = ({
  links = defaultLinks,
  isOpen = true,
}) => {
  return (
    <aside
      className={`fixed left-1 top-1 h-[calc(100vh-0.5rem)] z-20 transition-all duration-300 ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}
      aria-label="Sidebar"
      style={{ marginBottom: "1rem" }}
    >
      <div
        className="relative flex flex-col h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-xl rounded-2xl border-r border-l border-gray-700 transition-all duration-300"
        style={{ minWidth: isOpen ? 256 : 0, marginLeft: 0 }}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center py-8 border-b border-gray-700">
          <FaUserCircle className="text-5xl text-blue-400 mb-2 drop-shadow-lg" />
          <span className="text-lg font-semibold text-white tracking-wide">
            Dan Sims
          </span>
          <span className="text-xs text-gray-400">
            Senior Software Engineer
          </span>
        </div>
        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col gap-2 mt-8 px-4">
          {links.map((link, idx) => (
            <a
              href={link.url}
              key={idx}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-200 font-medium transition-all duration-200 hover:bg-blue-900/60 hover:text-blue-400 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-base">{link.text}</span>
            </a>
          ))}
        </nav>
        {/* Footer */}
        <div className="mt-auto py-6 px-4 text-xs text-gray-500 text-center border-t border-gray-700">
          Crafted with{" "}
          <span aria-label="love" role="img">
            ❤️
          </span>{" "}
          by Daniel Sims
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
