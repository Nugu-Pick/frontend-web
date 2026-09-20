import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const chip = style({
  display: "inline-flex",
  alignItems: "center",
  flexShrink: 0,
  padding: "4px 10px",
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.fill.neutralWeak,
  color: vars.color.text.secondary,
  whiteSpace: "nowrap",
});
