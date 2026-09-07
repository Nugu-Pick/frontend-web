import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";
import { palette } from "@/shared/config/tokens";

/**
 * SEMANTIC design tokens — the only tokens components may use
 * (`vars.color.fg.default`, `vars.space.md`, …).
 *
 * `color.*` swaps between light and dark; everything else is static.
 * Raw palette values live in `shared/config/tokens.ts`; the light/dark
 * maps below wire primitives → semantic roles.
 *
 * TODO(figma): review the role → primitive mapping against Figma's semantic
 * layer. Rename roles here if Figma names them differently, then update usages.
 */
export const vars = createGlobalThemeContract(
  {
    color: {
      bg: { default: null, subtle: null, elevated: null, inverse: null },
      fg: {
        default: null,
        muted: null,
        subtle: null,
        inverse: null,
        onAccent: null,
      },
      border: { default: null, subtle: null, strong: null },
      accent: {
        default: null,
        hover: null,
        pressed: null,
        subtle: null,
        fg: null,
      },
      success: { fg: null, bg: null },
      warning: { fg: null, bg: null },
      danger: { fg: null, bg: null },
      info: { fg: null, bg: null },
    },
    font: { body: null, mono: null },
    space: { xs: null, sm: null, md: null, lg: null, xl: null },
    radius: { sm: null, md: null, full: null },
  },
  (_value, path) => `np-${path.join("-")}`,
);

/**
 * Semantic color role → primitive, per theme. Shape is checked against the
 * contract by `createGlobalTheme` / `assignVars` below.
 */
const lightColor = {
  bg: {
    default: palette.white,
    subtle: palette.gray[50],
    elevated: palette.white,
    inverse: palette.gray[900],
  },
  fg: {
    default: palette.gray[900],
    muted: palette.gray[600],
    subtle: palette.gray[500],
    inverse: palette.white,
    onAccent: palette.white,
  },
  border: {
    default: palette.gray[200],
    subtle: palette.gray[100],
    strong: palette.gray[300],
  },
  accent: {
    default: palette.brand[600],
    hover: palette.brand[700],
    pressed: palette.brand[800],
    subtle: palette.brand[50],
    fg: palette.white,
  },
  success: { fg: palette.green[700], bg: palette.green[50] },
  warning: { fg: palette.amber[800], bg: palette.amber[50] },
  danger: { fg: palette.red[700], bg: palette.red[50] },
  info: { fg: palette.blue[700], bg: palette.blue[50] },
};

const darkColor = {
  bg: {
    default: palette.gray[900],
    subtle: palette.gray[800],
    elevated: palette.gray[800],
    inverse: palette.gray[50],
  },
  fg: {
    default: palette.gray[50],
    muted: palette.gray[400],
    subtle: palette.gray[500],
    inverse: palette.gray[900],
    onAccent: palette.white,
  },
  border: {
    default: palette.gray[700],
    subtle: palette.gray[800],
    strong: palette.gray[600],
  },
  accent: {
    default: palette.brand[400],
    hover: palette.brand[300],
    pressed: palette.brand[200],
    subtle: palette.brand[900],
    fg: palette.gray[900],
  },
  success: { fg: palette.green[300], bg: palette.green[900] },
  warning: { fg: palette.amber[300], bg: palette.amber[900] },
  danger: { fg: palette.red[300], bg: palette.red[900] },
  info: { fg: palette.blue[300], bg: palette.blue[900] },
};

createGlobalTheme(":root", vars, {
  color: lightColor,
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
      vars: assignVars(vars.color, darkColor),
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
  color: vars.color.fg.default,
  backgroundColor: vars.color.bg.default,
  WebkitFontSmoothing: "antialiased",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
