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
  alignItems: "center",
  padding: `${vars.space[16]} ${vars.space[20]}`,
});

export const backButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  padding: 0,
  border: "none",
  background: "none",
  color: vars.color.text.strong,
  cursor: "pointer",
});

export const heading = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[8],
  padding: `0 ${vars.space[20]}`,
  marginBottom: vars.space[32],
});

export const title = style([text.heading.xl.bold, { color: vars.color.text.strong }]);

export const subtitle = style([text.body.md.regular, { color: vars.color.text.secondary }]);

export const list = style({
  display: "flex",
  flexDirection: "column",
  padding: `0 ${vars.space[20]}`,
  flex: "1 0 0",
});

export const divider = style({
  height: 1,
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  margin: `${vars.space[8]} 0`,
});

export const row = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.space[12],
  padding: `${vars.space[12]} 0`,
});

export const rowLeft = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[12],
  minWidth: 0,
});

export const label = style([text.body.md.regular, { color: vars.color.text.strong }]);

export const labelEmphasized = style([text.body.lg.bold, { color: vars.color.text.strong }]);

export const badge = style([text.body.md.regular, { color: vars.color.text.tertiary }]);

export const detailLink = style([
  text.body.sm.regular,
  {
    color: vars.color.text.tertiary,
    textDecoration: "underline",
    background: "none",
    border: "none",
    cursor: "pointer",
    flexShrink: 0,
  },
]);

export const checkboxLabel = style({
  position: "relative",
  display: "inline-flex",
  cursor: "pointer",
  flexShrink: 0,
});

// Real, focusable/keyboard-operable checkbox — visually hidden in favor of
// the styled `checkbox` span next to it, per Biome's a11y/useSemanticElements.
export const checkboxInput = style({
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
});

export const checkbox = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  flexShrink: 0,
  borderRadius: vars.radius[8],
  border: `1.5px solid ${vars.color.border.strong}`,
  backgroundColor: "transparent",
  selectors: {
    [`${checkboxInput}:focus-visible + &`]: {
      outline: `2px solid ${vars.color.border.brand}`,
      outlineOffset: 2,
    },
  },
});

export const checkboxChecked = style({
  border: "none",
  backgroundColor: vars.color.fill.brand,
});

export const footer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space[12],
  padding: `0 ${vars.space[20]} ${vars.space[24]}`,
});

export const footerNote = style([text.body.sm.regular, { color: vars.color.text.tertiary }]);

export const cta = style([
  text.body.lg.bold,
  {
    width: "100%",
    padding: "14px 16px",
    borderRadius: vars.radius[12],
    border: "none",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: vars.color.fill.disabled,
    color: vars.color.text.tertiary,
    selectors: {
      "&:not(:disabled)": {
        backgroundColor: vars.color.fill.brand,
        color: vars.color.text.onBrand,
        cursor: "pointer",
      },
      "&:disabled": {
        cursor: "not-allowed",
      },
    },
  },
]);
