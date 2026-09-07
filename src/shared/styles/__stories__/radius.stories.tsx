import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { radius } from "@/shared/config/tokens";
import { Grid, RadiusBox, Section } from "./foundations";

const meta: Meta = {
  title: "Foundations/Radius",
  parameters: { layout: "padded" },
};
export default meta;

/** `vars.radius[n]` — Figma "Radius" scale. `full` = 999px. */
export const Scale: StoryObj = {
  render: () => (
    <Section title="radius" hint="vars.radius[n]">
      <Grid>
        {Object.entries(radius).map(([key, value]) => (
          <RadiusBox key={key} name={`radius[${key}]`} value={value} />
        ))}
      </Grid>
    </Section>
  ),
};
