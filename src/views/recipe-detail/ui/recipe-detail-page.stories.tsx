import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { viewport } from "@/shared/styles/viewport.css";
import { RecipeDetailPage } from "./recipe-detail-page";

// Figma: Food Pick — "소스 조합 상세" 레시피 버전 (node 155-14)
// https://www.figma.com/design/oIbrn3j37lbTH75B0PJ8us/Food-Pick-%C2%B7-Login---Signup-Flow?node-id=155-14&m=dev
const meta: Meta<typeof RecipeDetailPage> = {
  title: "Views/Recipe Detail",
  component: RecipeDetailPage,
  decorators: [
    (Story) => (
      <div className={viewport}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof RecipeDetailPage>;

/** API 나오기 전 더미 데이터로 채운 UI (frontend-web#17). */
export const Default: Story = {};
