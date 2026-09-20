import type { Review } from "@/shared/ui/review-card";

// API 나오기 전 UI 작업용 더미 데이터.
// Figma: Food Pick — "소스 조합 상세" 레시피 버전 (node 155-14)
// https://www.figma.com/design/oIbrn3j37lbTH75B0PJ8us/Food-Pick-%C2%B7-Login---Signup-Flow?node-id=155-14&m=dev
export const recipeDetailDummy = {
  heroLabel: "HAIDILAO SAUCE BAR",
  heroEmoji: "🍲",
  name: "ONEUS 건희의 하이디라오 건희소스",
  tags: ["하이디라오 소스", "연예인 조합", "레시피 인증"],
  description: "고소한 참깨 풍미에 은은한 매콤함을 더한 조합, 튀김·고기·채소를 찍어 먹기 좋아요.",
  rating: 4.7,
  reviewCount: 128,
  savedCount: 1240,
  creator: {
    name: "ONEUS 건희",
    subtitle: "원본 방송 · 2023.08.12",
  },
  tasteProfile: [
    { label: "고소함", value: 80 },
    { label: "짠맛", value: 55 },
    { label: "매콤함", value: 65 },
    { label: "새콤함", value: 30 },
    { label: "달콤함", value: 40 },
  ],
  servingNote: "1인분 기준",
  ingredients: [
    { name: "참깨소스", amount: "2큰술" },
    { name: "다진 마늘", amount: "1작은술" },
    { name: "고추기름", amount: "1큰술" },
    { name: "굴소스", amount: "1/2큰술" },
    { name: "참기름·쪽파", amount: "1큰술" },
    { name: "고수", amount: "선택" },
  ],
  ingredientNote: "※ 굴소스는 취향에 따라 빼도 좋아요. 매운맛은 고추기름 양으로 조정하세요.",
  steps: [
    "참깨소스와 굴소스를 먼저 섞어 베이스를 만든다.",
    "다진 마늘, 고추기름, 쪽파를 넣고 고루 섞는다.",
    "고기나 채소를 찍어 먹거나 국물에 곁들이면 더욱 풍부하게 즐길 수 있다.",
  ],
  tip: {
    title: "건희소스 팁",
    content: "처음부터 고추기름을 많이 넣기보다 조금씩 추가하면 실패가 적어요.",
  },
  pairings: [
    { id: "p1", emoji: "🍖", label: "양고기" },
    { id: "p2", emoji: "🥩", label: "소고기" },
    { id: "p3", emoji: "🥗", label: "비빔·정찬" },
  ],
  allergyNote:
    "참깨와 굴 성분이 포함돼요. 굴소스는 간장 1/2큰술로 대체 가능하고, 참깨 알레르기가 있다면 이 조합은 피해주세요.",
  reviewSummary: { taste: 4.8, ease: 4.6, repurchase: 4.7 },
  reviews: [
    {
      id: "r1",
      author: "소스초보",
      rating: 5,
      date: "2026.09.03",
      content: "고소한 맛이 진했고 설탕이 없어도 괜찮았고, 고수 없이도 충분히 맛있었어요.",
    },
    {
      id: "r2",
      author: "마리라베",
      rating: 4,
      date: "2026.08.28",
      content:
        "고추기름을 반 큰술만 넣으니 제 입맛에는 딱 맞았어요. 고수 한 스푼 넣으면 더 부드러워요.",
    },
  ] satisfies Review[],
  originalContents: [
    {
      id: "v1",
      kind: "VIDEO",
      title: "건희가 직접 알려주는 하이디라오 소스 조합",
      source: "ONEUS 공식 · 원본 보기",
    },
    {
      id: "v2",
      kind: "SHORTS",
      title: "소스에서 바로 따라하기",
      source: "탄 편집 영상 · 출처 보기",
    },
  ],
  similarRecipes: [
    { id: "s1", name: "굴마늘 참깨소스", meta: "알딸고소 · ★4.8" },
    { id: "s2", name: "마라 땅궁소스", meta: "알알고소 · ★4.6" },
  ],
};
