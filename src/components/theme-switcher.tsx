"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsMounted(true), 0);

    return () => window.clearTimeout(timer);
  }, []);

  const isDark = isMounted && resolvedTheme === "dark";
  const Icon = isDark ? Sun : Moon;
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      aria-label={`Switch to ${nextTheme} theme`}
      className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-slate-700 shadow-sm backdrop-blur-xl transition hover:border-[#B4A7D6]/70 hover:text-[#7C6AB6] dark:border-white/15 dark:bg-slate-950/65 dark:text-slate-200 dark:hover:text-[#8BD5DD]"
      onClick={() => setTheme(nextTheme)}
      title={`Switch to ${nextTheme} theme`}
      type="button"
    >
      <Icon aria-hidden="true" className="size-4" />
    </button>
  );
}
