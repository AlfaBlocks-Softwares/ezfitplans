"use client";

import { useTheme } from "next-themes";
import Button from "./Button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </Button>
  );
}
