import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const hero = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space[12],
  width: "100%",
  aspectRatio: "4 / 3",
  backgroundColor: vars.color.fill.brandWeak,
});

export const heroEmoji = style({
  fontSize: 56,
  lineHeight: 1,
});

export const heroLabel = style({
  padding: "6px 14px",
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.background.floated,
  color: vars.color.text.brand,
});

export const infoSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[12],
});

export const name = style({
  color: vars.color.text.strong,
});

export const description = style({
  color: vars.color.text.secondary,
});

export const creatorCard = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[12],
  padding: vars.space[16],
  borderRadius: vars.radius[16],
  border: `1px solid ${vars.color.border.default}`,
});

export const creatorAvatar = style({
  width: 40,
  height: 40,
  borderRadius: vars.radius.full,
});

export const creatorMeta = style({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  flex: 1,
});

export const creatorName = style({
  color: vars.color.text.strong,
});

export const creatorSubtitle = style({
  color: vars.color.text.tertiary,
});

export const creatorLinkButton = style({
  padding: "6px 12px",
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.border.default}`,
  background: "none",
  color: vars.color.text.secondary,
  cursor: "pointer",
  whiteSpace: "nowrap",
});

export const tasteList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[12],
});

export const tasteRow = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[12],
});

export const tasteLabel = style({
  width: 48,
  flexShrink: 0,
  color: vars.color.text.secondary,
});

export const tasteTrack = style({
  flex: 1,
  height: 8,
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.fill.neutralWeak,
  overflow: "hidden",
});

export const tasteFill = style({
  height: "100%",
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.fill.brand,
});

export const ingredientNote = style({
  color: vars.color.text.tertiary,
});

export const ingredientList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[8],
});

export const ingredientRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: vars.color.text.primary,
});

export const ingredientAmount = style({
  color: vars.color.text.secondary,
});

export const stepList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[12],
});

export const stepRow = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vars.space[12],
});

export const stepBadge = style({
  display: "flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  width: 22,
  height: 22,
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.fill.brandWeak,
  color: vars.color.text.brand,
});

export const stepText = style({
  color: vars.color.text.primary,
});

export const tipBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: vars.space[16],
  borderRadius: vars.radius[16],
  backgroundColor: vars.color.fill.brandWeak,
});

export const tipTitle = style({
  color: vars.color.text.brand,
});

export const tipContent = style({
  color: vars.color.text.primary,
});

export const pairingGrid = style({
  display: "flex",
  gap: vars.space[12],
});

export const pairingItem = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space[8],
  padding: `${vars.space[16]} 0`,
  borderRadius: vars.radius[16],
  backgroundColor: vars.color.fill.neutralWeak,
});

export const pairingEmoji = style({
  fontSize: 24,
  lineHeight: 1,
});

export const pairingLabel = style({
  color: vars.color.text.secondary,
});

export const allergyBox = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: vars.space[16],
  borderRadius: vars.radius[16],
  border: `1px solid ${vars.color.border.default}`,
});

export const allergyTitle = style({
  color: vars.color.text.strong,
});

export const allergyContent = style({
  color: vars.color.text.secondary,
});

export const reviewSummaryRow = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[16],
  color: vars.color.text.secondary,
});

export const reviewSummaryOverall = style({
  display: "flex",
  alignItems: "center",
  gap: 4,
});

export const originalContentList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[12],
});

export const originalContentCard = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: vars.space[16],
  borderRadius: vars.radius[16],
  border: `1px solid ${vars.color.border.default}`,
});

export const originalContentKind = style({
  color: vars.color.text.brand,
});

export const originalContentTitle = style({
  color: vars.color.text.strong,
});

export const originalContentSource = style({
  color: vars.color.text.tertiary,
});

export const similarList = style({
  display: "flex",
  flexDirection: "column",
});

export const similarRow = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[12],
  padding: `${vars.space[12]} 0`,
  borderBottom: `1px solid ${vars.color.border.default}`,
});

export const similarThumb = style({
  width: 44,
  height: 44,
  borderRadius: vars.radius[8],
});

export const similarMeta = style({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  flex: 1,
});

export const similarName = style({
  color: vars.color.text.strong,
});

export const similarSub = style({
  color: vars.color.text.tertiary,
});

export const exploreButton = style([
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    padding: "14px 0",
    borderRadius: vars.radius[12],
    border: "none",
    cursor: "pointer",
    backgroundColor: vars.color.fill.brand,
    color: vars.color.text.onBrand,
  },
]);
