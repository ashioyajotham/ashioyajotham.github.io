"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useHasMounted();

  if (!mounted) {
    return (
      <button
        className="pixel-btn-ghost"
        style={{ padding: "8px 12px", fontSize: "14px" }}
        aria-label="Toggle theme"
      >
        ◐
      </button>
    );
  }

  return (
    <button
      className="pixel-btn-ghost"
      style={{ padding: "8px 12px", fontSize: "14px" }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}