import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { text } from "@/shared/styles/text.css";
import { vars } from "@/shared/styles/theme.css";
import { flatten, Section } from "./foundations";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: { layout: "padded" },
};
export default meta;

const sample = "누구픽 nugupick 0123456789";

function TypeGroup({ title, group }: { title: string; group: Record<string, unknown> }) {
  return (
    <Section title={title}>
      {flatten(group).map(({ path, value }) => (
        <div
          key={path}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            padding: "10px 0",
            borderBottom: `1px solid ${vars.color.border.default}`,
          }}
        >
          <code
            style={{
              width: 140,
              flexShrink: 0,
              fontSize: 12,
              color: vars.color.text.tertiary,
            }}
          >
            {title}.{path}
          </code>
          <span className={value} style={{ color: vars.color.text.strong }}>
            {sample}
          </span>
        </div>
      ))}
    </Section>
  );
}

/**
 * Named text styles from Figma "font style.json" (Pretendard). No `@font-face`
 * is wired up yet — falls back through the system Korean sans stack; see
 * `shared/config/tokens.ts` `fontFamily.pretendard`.
 */
export const TypeScale: StoryObj = {
  render: () => (
    <>
      <TypeGroup title="display" group={text.display} />
      <TypeGroup title="heading" group={text.heading} />
      <TypeGroup title="body" group={text.body} />
      <TypeGroup title="label" group={text.label} />
    </>
  ),
};
