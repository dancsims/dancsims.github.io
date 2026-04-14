import React from "react";

interface TagProps {
  label: string;
  backgroundColor?: string;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  label,
  backgroundColor = "",
  className = "",
}) => (
  <span
    className={`inline-block px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 text-xs font-medium mr-2 mb-2 transition-colors duration-150 hover:bg-gray-400 hover:text-white cursor-pointer ${className}`}
    style={backgroundColor ? { backgroundColor } : undefined}
  >
    {label}
  </span>
);
