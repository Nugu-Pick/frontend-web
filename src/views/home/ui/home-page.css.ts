import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const main = style({
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space.lg,
  padding: vars.space.xl,
  textAlign: "center",
});

export const title = style({
  fontSize: "2.5rem",
  fontWeight: 600,
  letterSpacing: "-0.03em",
});

export const subtitle = style({
  color: vars.color.muted,
  fontSize: "1rem",
  maxWidth: "40ch",
  lineHeight: 1.6,
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  padding: vars.space.lg,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
  fontFamily: vars.font.mono,
  fontSize: "0.875rem",
});
