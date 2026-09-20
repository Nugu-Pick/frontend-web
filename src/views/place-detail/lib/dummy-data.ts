import type { Review } from "@/shared/ui/review-card";

// API 나오기 전 UI 작업용 더미 데이터.
// Figma: Food Pick — "상세 페이지 · 장소" (node 27-2391)
// https://www.figma.com/design/oIbrn3j37lbTH75B0PJ8us/Food-Pick-%C2%B7-Login---Signup-Flow?node-id=27-2391&m=dev
export const placeDetailDummy = {
  imageCount: 5,
  name: "진작다이닝 성수점",
  category: "일식",
  rating: 4.6,
  reviewCount: 20,
  address: "서울 성동구 왕십리로14나길 10 1층",
  tags: ["또간집 후보", "연예인 맛집", "웨이팅 필수"],
  celebrityPicks: [
    {
      id: "c1",
      name: "카리나",
      handle: "aespa",
      menu: "그레이 무화과 베이글",
      note: "크림치즈 추가 · 아메리카노",
    },
    {
      id: "c2",
      name: "윈터",
      handle: "aespa",
      menu: "연어 오픈 샌드위치",
      note: "치즈 추가 · 라떼",
    },
    {
      id: "c3",
      name: "닝닝",
      handle: "aespa",
      menu: "트러플 크림 파스타",
      note: "곱빼기 · 스파클링",
    },
  ],
  originalVideo: {
    title: "SK하이닉스 이천 맛집 브이로그",
    source: "이천 맛집 탐방",
    duration: "30:24",
  },
  reviews: [
    {
      id: "r1",
      author: "쿠리만쥬",
      rating: 4.6,
      date: "2026.08.23",
      content:
        "장어가 겉바속촉이었어요. 김밥도 맛있었고, 계란말이는 부드럽고 촉촉해서 좋았습니다. 사장님과 직원분들도 친절해서 즐거운 식사였네요.",
    },
    {
      id: "r2",
      author: "밥심러버",
      rating: 4.8,
      date: "2026.08.18",
      content: "웨이팅 30분 있었지만 기다린 보람이 있었어요. 다음에도 또 올 것 같아요.",
    },
    {
      id: "r3",
      author: "성수동토박이",
      rating: 4.4,
      date: "2026.08.02",
      content: "분위기도 좋고 가격대도 합리적이에요. 데이트 코스로 추천합니다.",
    },
  ] satisfies Review[],
  instaPosts: [
    { id: "i1", caption: undefined },
    { id: "i2", caption: "반포 아파트 실제상황" },
    { id: "i3", caption: undefined },
  ],
};
