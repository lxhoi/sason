"use client";

import * as React from "react";

export interface SegmentedControlOption<T extends string = string> {
  value: T;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

export interface SegmentedControlProps<T extends string = string> {
  options: SegmentedControlOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function CupertinoSegmentedControl<T extends string = string>({
  options,
  value,
  onChange,
  className = "",
  size = "md",
}: SegmentedControlProps<T>) {
  const sizeClasses = {
    sm: "p-0.5 text-xs",
    md: "p-1 text-xs",
    lg: "p-1.5 text-sm",
  };

  const itemSizeClasses = {
    sm: "px-2.5 py-1",
    md: "px-3.5 py-1.5",
    lg: "px-4.5 py-2",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/[0.08] backdrop-blur-2xl shadow-inner ${sizeClasses[size]} ${className}`}
      role="tablist"
    >
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={`relative flex items-center gap-1.5 rounded-full font-medium transition-all duration-200 select-none ${itemSizeClasses[size]} ${
              isActive
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-[0_2px_12px_rgba(99,102,241,0.35)] ring-1 ring-white/25 scale-[1.02]"
                : "text-white/60 hover:text-white/90 hover:bg-white/5 active:scale-95"
            }`}
          >
            {option.icon && <span className="shrink-0">{option.icon}</span>}
            <span className="whitespace-nowrap">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
