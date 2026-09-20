import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const button = style({
  alignSelf: "stretch",
  padding: "12px 0",
  borderRadius: vars.radius[12],
  border: `1px solid ${vars.color.border.default}`,
  background: "none",
  color: vars.color.text.secondary,
  cursor: "pointer",
});
