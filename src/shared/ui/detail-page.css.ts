import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

/**
 * Layout shared by every "detail" view (place, recipe, …) — hero + top bar
 * differ per view, but the page shell, content padding, section rhythm and
 * meta/tag rows underneath don't.
 */
export const page = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",
  width: "100%",
  backgroundColor: vars.color.background.default,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[32],
  padding: `${vars.space[20]} ${vars.space[20]} ${vars.space[40]}`,
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[16],
});

export const tagsRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space[8],
});

export const metaRow = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[8],
  color: vars.color.text.secondary,
});
