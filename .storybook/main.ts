import type { StorybookConfig } from "@storybook/nextjs-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-themes", "@chromatic-com/storybook"],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  viteFinal: (viteConfig) => {
    viteConfig.resolve = { ...viteConfig.resolve, tsconfigPaths: true };
    viteConfig.plugins = viteConfig.plugins ?? [];
    viteConfig.plugins.push(vanillaExtractPlugin());
    return viteConfig;
  },
};

export default config;
