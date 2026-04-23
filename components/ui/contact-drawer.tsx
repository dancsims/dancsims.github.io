import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} w-full max-w-full sm:w-96 md:w-80 md:max-w-xs`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-xl font-bold text-blue-400">Contact Me!</h2>
          <button
            onClick={onClose}
            aria-label="Close drawer"
            className="text-2xl font-bold text-neutral-300 hover:text-blue-400"
          >
            ×
          </button>
        </div>
        <div className="px-6 pb-2 text-neutral-300 text-sm">
          While I'm not actively seeking new opportunities, I always enjoy
          connecting with fellow engineers. Feel free to reach out if you'd like
          to chat about technology, share ideas, or explore ways we can
          collaborate!
        </div>
        <div className="px-6 pb-2">
          <hr className="border-t border-neutral-700 my-4" />
          <div className="flex justify-center gap-8 text-3xl">
            <a
              href="mailto:sims.daniel@live.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-sims-464b088a"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/dancsims"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
