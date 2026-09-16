import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { space } from "@/shared/config/tokens";
import { Ruler, Section } from "./foundations";

const meta: Meta = {
  title: "Foundations/Spacing",
  parameters: { layout: "padded" },
};
export default meta;

/** `vars.space[n]` — Figma "Spacing" scale, keyed by pixel value. */
export const Scale: StoryObj = {
  render: () => (
    <Section title="space" hint="vars.space[n]">
      {Object.entries(space).map(([key, value]) => (
        <Ruler key={key} name={`space[${key}]`} value={value} />
      ))}
    </Section>
  ),
};
