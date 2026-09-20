import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { Review } from "./review-card";
import { ReviewCard } from "./review-card";
import { list } from "./review-card.css";

const meta: Meta<typeof ReviewCard> = {
  title: "UI/Review Card",
  component: ReviewCard,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof ReviewCard>;

const review: Review = {
  id: "r1",
  author: "쿠리만쥬",
  rating: 4.6,
  date: "2026.08.23",
  content:
    "장어가 겉바속촉이었어요. 김밥도 맛있었고, 계란말이는 부드럽고 촉촉해서 좋았습니다. 사장님과 직원분들도 친절해서 즐거운 식사였네요.",
};

export const Default: Story = {
  args: { review },
};

/** place-detail·recipe-detail이 함께 쓰는 목록 레이아웃 (`list` export). */
export const List: Story = {
  render: () => (
    <div className={list}>
      <ReviewCard review={review} />
      <ReviewCard
        review={{
          id: "r2",
          author: "밥심러버",
          rating: 4.8,
          date: "2026.08.18",
          content: "웨이팅 30분 있었지만 기다린 보람이 있었어요. 다음에도 또 올 것 같아요.",
        }}
      />
    </div>
  ),
};
