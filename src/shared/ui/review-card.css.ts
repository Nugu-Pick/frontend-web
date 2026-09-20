import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const card = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[8],
  alignSelf: "stretch",
  paddingBottom: vars.space[16],
  borderBottom: `1px solid ${vars.color.border.default}`,
});

export const head = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[8],
});

export const avatar = style({
  width: 28,
  height: 28,
  borderRadius: vars.radius.full,
});

export const author = style({
  color: vars.color.text.strong,
});

export const date = style({
  marginLeft: "auto",
  color: vars.color.text.tertiary,
});

export const content = style({
  color: vars.color.text.secondary,
});
