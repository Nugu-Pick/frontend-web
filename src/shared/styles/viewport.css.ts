import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

/**
 * Mobile-only product: every screen is designed for a phone. On wide
 * viewports (desktop/tablet) we still show that same mobile layout, capped
 * to phone width and centered, instead of stretching it full-bleed.
 */
export const MAX_WIDTH = 480;

export const viewport = style({
  maxWidth: MAX_WIDTH,
  minHeight: "100dvh",
  marginInline: "auto",
  position: "relative",
  overflowX: "hidden",
  backgroundColor: vars.color.background.default,
  paddingTop: "env(safe-area-inset-top)",
  paddingBottom: "env(safe-area-inset-bottom)",
  "@media": {
    // Frame the phone column once there's visible gutter on either side.
    [`(min-width: ${MAX_WIDTH + 1}px)`]: {
      boxShadow: `0 0 0 1px ${vars.color.border.default}`,
    },
  },
});
