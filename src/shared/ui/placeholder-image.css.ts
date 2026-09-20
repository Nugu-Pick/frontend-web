import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const base = style({
  display: "flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: vars.color.fill.neutralWeak,
  color: vars.color.icon.secondary,
  overflow: "hidden",
});
