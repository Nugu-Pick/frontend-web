/**
 * Design-system PRIMITIVE tokens
 */

type Ramp = Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;

export const palette = {
  white: "#FFFFFF",
  black: "#000000",

  // Figma: "Orange"
  orange: {
    50: "#FFF3EE",
    100: "#FFDDD1",
    200: "#FFBDA7",
    300: "#FF906C",
    400: "#F76535",
    500: "#FF571A",
    600: "#FB4400",
    700: "#A92E00",
    800: "#862500",
    900: "#641C00",
  },

  // Figma: "Grey"
  gray: {
    50: "#FAFAFA",
    100: "#F4F4F4",
    200: "#E8E8E8",
    300: "#D6D6D6",
    400: "#B7B7B7",
    500: "#939393",
    600: "#747474",
    700: "#575757",
    800: "#393939",
    900: "#212121",
  },

  // Figma: "Orange / Alpha 12|20" — translucent brand fills (base #E43D00)
  orangeAlpha: {
    12: "rgba(228, 61, 0, 0.12)",
    20: "rgba(228, 61, 0, 0.2)",
  },

  // Figma: "Status"
  status: {
    red: "#F04452",
    redAlpha12: "rgba(240, 68, 82, 0.12)",
  },

  // Figma: "Social"
  social: {
    kakao: "#FEE500",
    naver: "#03C75A",
    googleBlue: "#4285F4",
  },
} as const satisfies {
  white: string;
  black: string;
  orange: Ramp;
  gray: Ramp;
  orangeAlpha: Record<12 | 20, string>;
  status: Record<"red" | "redAlpha12", string>;
  social: Record<"kakao" | "naver" | "googleBlue", string>;
};

// Figma: "Spacing" (px). Keyed by pixel value to stay 1:1 with the export.
export const space = {
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  64: "64px",
} as const;

// Figma: "Radius" (px). `full` = 999.
export const radius = {
  8: "8px",
  12: "12px",
  16: "16px",
  24: "24px",
  full: "999px",
} as const;
