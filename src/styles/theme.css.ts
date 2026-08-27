import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";

/**
 * Design tokens. Reference these in `*.css.ts` files via `vars.color.background` etc.
 * Values live in the theme objects below so light / dark can swap them.
 */
export const vars = createGlobalThemeContract(
  {
    color: {
      background: "color-background",
      surface: "color-surface",
      foreground: "color-foreground",
      muted: "color-muted",
      border: "color-border",
      accent: "color-accent",
      accentForeground: "color-accent-foreground",
    },
    font: {
      body: "font-body",
      mono: "font-mono",
    },
    space: {
      xs: "space-xs",
      sm: "space-sm",
      md: "space-md",
      lg: "space-lg",
      xl: "space-xl",
    },
    radius: {
      sm: "radius-sm",
      md: "radius-md",
      full: "radius-full",
    },
  },
  (value) => `np-${value}`,
);

const lightColors = {
  background: "#ffffff",
  surface: "#f7f7f8",
  foreground: "#171717",
  muted: "#6b7280",
  border: "#e5e7eb",
  accent: "#2563eb",
  accentForeground: "#ffffff",
};

const darkColors = {
  background: "#0a0a0a",
  surface: "#161616",
  foreground: "#ededed",
  muted: "#9ca3af",
  border: "#262626",
  accent: "#3b82f6",
  accentForeground: "#0a0a0a",
};

createGlobalTheme(":root", vars, {
  color: lightColors,
  font: {
    body: "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
    mono: "var(--font-geist-mono), ui-monospace, monospace",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
  },
  radius: {
    sm: "6px",
    md: "12px",
    full: "9999px",
  },
});

globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      colorScheme: "dark",
      vars: assignVars(vars.color, darkColors),
    },
  },
});

/* ---- minimal reset ---- */
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  maxWidth: "100vw",
});

globalStyle("body", {
  minHeight: "100dvh",
  fontFamily: vars.font.body,
  color: vars.color.foreground,
  backgroundColor: vars.color.background,
  WebkitFontSmoothing: "antialiased",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
