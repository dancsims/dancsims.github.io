import React from "react";

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  icon,
  children,
  className = "",
}) => {
  return (
    <div
      className={`rounded-xl shadow-lg bg-white dark:bg-neutral-900 p-6 ${className}`}
    >
      <div className="flex items-center mb-4">
        {icon && <span className="mr-2 text-xl">{icon}</span>}
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="text-neutral-700 dark:text-neutral-200">{children}</div>
    </div>
  );
};
