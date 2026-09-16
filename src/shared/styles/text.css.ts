import { style } from "@vanilla-extract/css";
import { fontWeight } from "@/shared/config/tokens";
import { vars } from "@/shared/styles/theme.css";

/**
 * Named text styles — Figma "font style.json" typography collection
 * (display / heading / body / label × size × weight). Font size, line
 * height and weight don't swap between light/dark, so these are compiled
 * classes rather than theme vars (`vars.*`).
 *
 * Usage: `<h1 className={text.heading.lg.bold}>`
 */
type Weight = keyof typeof fontWeight;

function textStyle(fontSize: number, lineHeight: number, weight: Weight) {
  return style({
    fontFamily: vars.font.pretendard,
    fontWeight: fontWeight[weight],
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
    letterSpacing: 0,
  });
}

export const text = {
  display: {
    lg: {
      medium: textStyle(30, 40, "medium"),
      bold: textStyle(30, 40, "bold"),
    },
    sm: {
      medium: textStyle(26, 34, "medium"),
      bold: textStyle(26, 34, "bold"),
    },
  },
  heading: {
    xl: {
      medium: textStyle(22, 30, "medium"),
      bold: textStyle(22, 30, "bold"),
    },
    lg: {
      medium: textStyle(20, 28, "medium"),
      bold: textStyle(20, 28, "bold"),
    },
    sm: {
      medium: textStyle(18, 26, "medium"),
      bold: textStyle(18, 26, "bold"),
    },
  },
  body: {
    xl: {
      regular: textStyle(17, 26, "regular"),
      medium: textStyle(17, 26, "medium"),
      bold: textStyle(17, 26, "bold"),
    },
    lg: {
      regular: textStyle(16, 24, "regular"),
      medium: textStyle(16, 24, "medium"),
      bold: textStyle(16, 24, "bold"),
    },
    md: {
      regular: textStyle(15, 22, "regular"),
      medium: textStyle(15, 22, "medium"),
      bold: textStyle(15, 22, "bold"),
    },
    sm: {
      regular: textStyle(14, 20, "regular"),
      medium: textStyle(14, 20, "medium"),
      bold: textStyle(14, 20, "bold"),
    },
  },
  label: {
    lg: {
      regular: textStyle(13, 20, "regular"),
      medium: textStyle(13, 20, "medium"),
      bold: textStyle(13, 20, "bold"),
    },
    md: {
      regular: textStyle(12, 18, "regular"),
      medium: textStyle(12, 18, "medium"),
      bold: textStyle(12, 18, "bold"),
    },
    sm: {
      regular: textStyle(11, 16, "regular"),
      medium: textStyle(11, 16, "medium"),
      bold: textStyle(11, 16, "bold"),
    },
  },
} as const;
