"use client";

//Sidebar.js
import React, { useState } from "react";

type Link = {
  text: string;
  url: string;
};

interface SidebarProps {
  links: Link[];
  isOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ links, isOpen = true }) => {
  return (
    <div
      className={`bg-gray-800 text-white fixed h-screen transition-all duration-300 z-10 ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}
    >
      <div className="flex flex-col items-left p-4">
        {links.map((link, idx) => (
          <div className="mt-4" key={idx}>
            <a href={link.url} className="text-white hover:text-gray-300">
              {link.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
