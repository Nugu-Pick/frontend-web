import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const heroWrap = style({
  position: "relative",
  width: "100%",
});

export const heroCounter = style({
  position: "absolute",
  right: vars.space[12],
  bottom: vars.space[12],
  padding: "3px 8px",
  borderRadius: vars.radius.full,
  backgroundColor: "rgba(0, 0, 0, 0.55)",
  color: vars.color.text.onBrand,
});

export const infoSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[12],
});

export const name = style({
  color: vars.color.text.strong,
});

export const addressRow = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[8],
  color: vars.color.text.secondary,
});

export const copyButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 2,
  border: "none",
  background: "none",
  padding: 0,
  color: vars.color.text.brand,
  cursor: "pointer",
});

export const scrollRow = style({
  display: "flex",
  gap: vars.space[12],
  overflowX: "auto",
  marginInline: `calc(${vars.space[20]} * -1)`,
  paddingInline: vars.space[20],
  selectors: {
    "&::-webkit-scrollbar": { display: "none" },
  },
});

export const celebrityCard = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[8],
  width: 160,
  flexShrink: 0,
});

export const celebrityHead = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[8],
});

export const celebrityAvatar = style({
  width: 32,
  height: 32,
  borderRadius: vars.radius.full,
});

export const celebrityName = style({
  color: vars.color.text.strong,
});

export const celebrityHandle = style({
  color: vars.color.text.tertiary,
});

export const celebrityMenu = style({
  color: vars.color.text.primary,
});

export const celebrityNote = style({
  color: vars.color.text.tertiary,
});

export const videoCard = style({
  position: "relative",
  width: "100%",
  borderRadius: vars.radius[16],
  overflow: "hidden",
});

export const videoPlayOverlay = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const videoDuration = style({
  position: "absolute",
  right: vars.space[12],
  bottom: vars.space[12],
  padding: "3px 8px",
  borderRadius: vars.radius.full,
  backgroundColor: "rgba(0, 0, 0, 0.55)",
  color: vars.color.text.onBrand,
});

export const videoTitle = style({
  color: vars.color.text.primary,
});

export const reviewList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[16],
});

export const instaItem = style({
  position: "relative",
  width: 140,
  flexShrink: 0,
  borderRadius: vars.radius[12],
  overflow: "hidden",
});

export const instaCaption = style({
  position: "absolute",
  left: vars.space[8],
  right: vars.space[8],
  bottom: vars.space[8],
  color: vars.color.text.onBrand,
});
