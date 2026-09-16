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

export const hero = style({
  display: "flex",
  flex: "1 0 0",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  alignSelf: "stretch",
  padding: "212px 0 190px",
  backgroundColor: vars.color.fill.brand,
});

export const copy = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space[8],
  width: "100%",
});

export const title = style([
  text.display.sm.bold,
  {
    color: vars.color.text.onBrand,
    textAlign: "center",
  },
]);

export const subtitle = style([
  text.body.md.regular,
  {
    color: vars.color.text.onBrand,
    textAlign: "center",
  },
]);

export const content = style({
  display: "flex",
  flex: "1 0 0",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "stretch",
  gap: vars.space[24],
  paddingBottom: vars.space[40],
});

export const buttonList = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
  gap: vars.space[16],
  padding: `0 ${vars.space[20]}`,
});

const buttonBase = style([
  text.body.lg.medium,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    gap: vars.space[12],
    // Figma spec (14px 16px) sits outside the 4px space scale — kept literal.
    padding: "14px 16px",
    borderRadius: vars.radius[12],
    border: "none",
    cursor: "pointer",
  },
]);

export const kakaoButton = style([
  buttonBase,
  {
    backgroundColor: vars.brand.kakao,
    color: vars.color.text.strong,
  },
]);

export const naverButton = style([
  buttonBase,
  {
    backgroundColor: vars.brand.naver,
    color: vars.color.text.onBrand,
  },
]);

export const googleButton = style([
  buttonBase,
  {
    backgroundColor: vars.color.fill.neutralWeak,
    color: vars.color.text.strong,
  },
]);

export const guestLink = style([
  text.body.md.regular,
  {
    alignSelf: "stretch",
    textAlign: "center",
    color: vars.color.text.tertiary,
    background: "none",
    border: "none",
    cursor: "pointer",
  },
]);
