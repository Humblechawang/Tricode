import { Moon, Sun } from "lucide-react";

type Props = {
  theme: "light" | "dark";
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-colors hover:bg-surface-raised"
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
