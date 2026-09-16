import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";
import { fontFamily, palette, radius, space } from "@/shared/config/tokens";

/**
 * SEMANTIC design tokens — the only tokens components may use.
 *
 * `color.*` swaps between light and dark (`prefers-color-scheme`, no toggle).
 * `space` / `radius` / `font` are static. Structure mirrors the Figma
 * "Semantic" collection (Light/Dark modes); raw values live in
 * `shared/config/tokens.ts`.
 */
const toKebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

export const vars = createGlobalThemeContract(
  {
    color: {
      background: { default: null, lower: null, floated: null },
      text: {
        strong: null,
        primary: null,
        secondary: null,
        tertiary: null,
        brand: null,
        onBrand: null,
        danger: null,
      },
      icon: { primary: null, secondary: null, brand: null },
      fill: {
        brand: null,
        brandPressed: null,
        brandWeak: null,
        neutralWeak: null,
        disabled: null,
        dangerWeak: null,
      },
      border: { default: null, strong: null, brand: null },
    },
    font: { body: null, mono: null, pretendard: null },
    space: {
      4: null,
      8: null,
      12: null,
      16: null,
      20: null,
      24: null,
      32: null,
      40: null,
      48: null,
      64: null,
    },
    radius: { 8: null, 12: null, 16: null, 24: null, full: null },
    // Third-party brand marks (social login) — fixed regardless of theme.
    brand: { kakao: null, naver: null },
  },
  (_value, path) => `np-${path.map(toKebab).join("-")}`,
);

/**
 * Semantic color role → primitive, per theme (from Figma Light/Dark modes).
 * Shapes are checked against the contract by `createGlobalTheme` / `assignVars`.
 */
const lightColor = {
  background: {
    default: palette.white,
    lower: palette.gray[50],
    floated: palette.white,
  },
  text: {
    strong: palette.gray[900],
    primary: palette.gray[800],
    secondary: palette.gray[600],
    tertiary: palette.gray[500],
    brand: palette.orange[600],
    onBrand: palette.white,
    danger: palette.status.red,
  },
  icon: {
    primary: palette.gray[800],
    secondary: palette.gray[500],
    brand: palette.orange[500],
  },
  fill: {
    brand: palette.orange[500],
    brandPressed: palette.orange[600],
    brandWeak: palette.orangeAlpha[12],
    neutralWeak: palette.gray[100],
    disabled: palette.gray[200],
    dangerWeak: palette.status.redAlpha12,
  },
  border: {
    default: palette.gray[200],
    strong: palette.gray[300],
    brand: palette.orange[500],
  },
};

const darkColor = {
  background: {
    default: palette.gray[900],
    lower: palette.black,
    floated: palette.gray[800],
  },
  text: {
    strong: palette.white,
    primary: palette.gray[50],
    secondary: palette.gray[300],
    tertiary: palette.gray[400],
    brand: palette.orange[300],
    onBrand: palette.white,
    danger: palette.status.red,
  },
  icon: {
    primary: palette.gray[50],
    secondary: palette.gray[400],
    brand: palette.orange[300],
  },
  fill: {
    brand: palette.orange[400],
    brandPressed: palette.orange[500],
    brandWeak: palette.orangeAlpha[20],
    neutralWeak: palette.gray[800],
    disabled: palette.gray[700],
    dangerWeak: palette.status.redAlpha12,
  },
  border: {
    default: palette.gray[700],
    strong: palette.gray[600],
    brand: palette.orange[400],
  },
};

createGlobalTheme(":root", vars, {
  color: lightColor,
  font: {
    body: "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
    mono: "var(--font-geist-mono), ui-monospace, monospace",
    pretendard: fontFamily.pretendard,
  },
  space,
  radius,
  brand: {
    kakao: palette.social.kakao,
    naver: palette.social.naver,
  },
});

// Auto dark (OS preference) — skipped when an explicit `data-theme` is set.
globalStyle(":root:not([data-theme])", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      colorScheme: "dark",
      vars: assignVars(vars.color, darkColor),
    },
  },
});

// Manual overrides — used by the app's theme switch and Storybook's toolbar,
// and to force a fixed-theme island anywhere in the tree.
globalStyle('[data-theme="light"]', {
  colorScheme: "light",
  vars: assignVars(vars.color, lightColor),
});

globalStyle('[data-theme="dark"]', {
  colorScheme: "dark",
  vars: assignVars(vars.color, darkColor),
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
  color: vars.color.text.strong,
  backgroundColor: vars.color.background.default,
  WebkitFontSmoothing: "antialiased",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
