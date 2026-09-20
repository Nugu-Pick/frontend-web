import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { viewport } from "@/shared/styles/viewport.css";
import { PlaceDetailPage } from "./place-detail-page";

// Figma: Food Pick — "상세 페이지 · 장소" (node 27-2391)
// https://www.figma.com/design/oIbrn3j37lbTH75B0PJ8us/Food-Pick-%C2%B7-Login---Signup-Flow?node-id=27-2391&m=dev
const meta: Meta<typeof PlaceDetailPage> = {
  title: "Views/Place Detail",
  component: PlaceDetailPage,
  decorators: [
    (Story) => (
      <div className={viewport}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof PlaceDetailPage>;

/** API 나오기 전 더미 데이터로 채운 UI (frontend-web#17). */
export const Default: Story = {};
