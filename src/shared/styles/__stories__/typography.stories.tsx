import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { vars } from "@/shared/styles/theme.css";
import { Section } from "./foundations";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: { layout: "padded" },
};
export default meta;

/**
 * Only font families exist as tokens so far. A type scale (size / line-height /
 * weight / letter-spacing, named text styles) is pending a Figma export.
 */
export const Families: StoryObj = {
  render: () => (
    <Section title="font" hint="type scale TBD — no Figma export yet">
      {(
        [
          ["vars.font.body", vars.font.body],
          ["vars.font.mono", vars.font.mono],
        ] as const
      ).map(([name, value]) => (
        <div key={name} style={{ marginBottom: 24 }}>
          <code
            style={{
              display: "block",
              marginBottom: 4,
              fontSize: 12,
              color: vars.color.text.tertiary,
            }}
          >
            {name}
          </code>
          <p style={{ fontFamily: value, fontSize: 20, margin: 0, color: vars.color.text.primary }}>
            누구픽 nugupick — The quick brown fox 0123456789
          </p>
        </div>
      ))}
    </Section>
  ),
};
