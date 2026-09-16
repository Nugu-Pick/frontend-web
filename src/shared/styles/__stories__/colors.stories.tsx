import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { palette } from "@/shared/config/tokens";
import { vars } from "@/shared/styles/theme.css";
import { flatten, Grid, Section, Swatch, ThemePair } from "./foundations";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj;

const semanticGroups = ["background", "text", "icon", "fill", "border"] as const;

/**
 * Semantic color roles — the tokens components should use
 * (`vars.color.<group>.<role>`). Shown in forced light / dark islands.
 */
export const Semantic: Story = {
  render: () => (
    <ThemePair>
      {semanticGroups.map((group) => (
        <Section key={group} title={group}>
          <Grid>
            {flatten(vars.color[group] as unknown as Record<string, unknown>).map(
              ({ path, value }) => (
                <Swatch key={path} name={`${group}.${path}`} value={value} />
              ),
            )}
          </Grid>
        </Section>
      ))}
    </ThemePair>
  ),
};

/** Raw palette from Figma `Value.tokens.json`. Not for direct use in components. */
export const Primitives: Story = {
  render: () => (
    <>
      {Object.entries(palette).map(([name, group]) => (
        <Section key={name} title={name}>
          <Grid>
            {(typeof group === "string"
              ? [{ path: name, value: group }]
              : flatten(group as Record<string, unknown>, name)
            ).map(({ path, value }) => (
              <Swatch key={path} name={path} value={value} />
            ))}
          </Grid>
        </Section>
      ))}
    </>
  ),
};
