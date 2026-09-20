import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.space[8],
  alignSelf: "stretch",
});

export const title = style({
  color: vars.color.text.strong,
});

export const action = style({
  background: "none",
  border: "none",
  padding: 0,
  color: vars.color.text.brand,
  cursor: "pointer",
});
