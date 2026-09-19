import { style } from "@vanilla-extract/css";
import { text } from "@/shared/styles/text.css";
import { vars } from "@/shared/styles/theme.css";

export const page = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",
  width: "100%",
  backgroundColor: vars.color.background.default,
});

export const topBar = style({
  display: "flex",
  height: 52,
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "space-between",
  padding: `0 ${vars.space[16]}`,
});

export const backButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  padding: 0,
  border: "none",
  background: "none",
  color: vars.color.icon.primary,
  cursor: "pointer",
});

export const skipButton = style([
  text.body.sm.regular,
  {
    color: vars.color.text.tertiary,
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
  },
]);

export const content = style({
  display: "flex",
  flex: "1 0 0",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.space[32],
  padding: `${vars.space[24]} ${vars.space[20]} 0`,
});

export const heading = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.space[8],
  alignSelf: "stretch",
});

export const title = style([text.heading.xl.bold, { color: vars.color.text.strong }]);

export const subtitle = style([text.body.sm.regular, { color: vars.color.text.secondary }]);

export const sections = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.space[40],
  alignSelf: "stretch",
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.space[16],
  alignSelf: "stretch",
});

export const sectionTitle = style([text.body.lg.bold, { color: vars.color.text.strong }]);

// Figma lays this out as two fixed rows (gap 10 within a row, 12 between
// rows); flex-wrap gets the identical result without hardcoding "3 per row".
export const chipGrid = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: vars.space[12],
  columnGap: 10,
  alignSelf: "stretch",
});

const chipBase = style([
  text.body.md.medium,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 16px",
    borderRadius: vars.radius.full,
    border: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
]);

export const chip = style([
  chipBase,
  {
    // Figma's unselected chip bg (#F3F4F6) is a hair off our fill.neutralWeak
    // (#F4F4F4) — close enough to reuse rather than add a near-duplicate token.
    backgroundColor: vars.color.fill.neutralWeak,
    color: vars.color.text.secondary,
  },
]);

export const chipSelected = style([
  chipBase,
  {
    backgroundColor: vars.color.fill.brand,
    color: vars.color.text.onBrand,
  },
]);

export const bottom = style({
  display: "flex",
  flexDirection: "column",
  alignSelf: "stretch",
  gap: 10,
  padding: `${vars.space[12]} ${vars.space[16]} ${vars.space[40]}`,
  backgroundColor: vars.color.background.default,
});

export const cta = style([
  text.body.lg.bold,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    padding: "16px 0",
    borderRadius: vars.radius[12],
    border: "none",
    cursor: "pointer",
    backgroundColor: vars.color.fill.brand,
    color: vars.color.text.onBrand,
  },
]);
