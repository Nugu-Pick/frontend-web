import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const wrap = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 2,
  color: vars.color.icon.brand,
});

export const value = style({
  color: vars.color.text.strong,
});
