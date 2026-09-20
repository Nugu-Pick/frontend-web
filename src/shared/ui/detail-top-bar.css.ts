import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const topBar = style({
  display: "flex",
  height: 52,
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "space-between",
  padding: `0 ${vars.space[16]}`,
});

export const iconButton = style({
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

export const actions = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[12],
});
