"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsMounted(true), 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      aria-label="Theme preference"
      className="grid grid-cols-3 rounded-full border border-black/10 bg-white/80 p-1 text-sm shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-slate-950/65"
      role="group"
    >
      {themes.map((item) => {
        const Icon = item.icon;
        const isActive = isMounted && theme === item.value;

        return (
          <button
            aria-pressed={isActive}
            className={`flex h-9 items-center justify-center gap-2 rounded-full px-3 font-medium transition ${
              isActive
                ? "bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"
                : "text-slate-600 hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            }`}
            key={item.value}
            onClick={() => setTheme(item.value)}
            title={`${item.label} theme`}
            type="button"
          >
            <Icon aria-hidden="true" className="size-4" />
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
