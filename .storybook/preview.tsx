import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/nextjs-vite";
import "@/shared/styles/theme.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
    // The theme tokens own the page background; disable the addon's own control.
    backgrounds: { disable: true },
    // App Router project (`next/navigation`) — without this the framework's
    // router decorator mocks the Pages Router instead, and any `useRouter()`
    // call throws "invariant expected app router to be mounted".
    nextjs: { appDirectory: true },
    chromatic: {
      modes: {
        light: { theme: "light" },
        dark: { theme: "dark" },
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: { light: "light", dark: "dark" },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
  tags: ["autodocs"],
};

export default preview;
