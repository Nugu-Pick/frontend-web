import { text } from "@/shared/styles/text.css";
import * as detail from "@/shared/ui/detail-page.css";
import { DetailTopBar } from "@/shared/ui/detail-top-bar";
import { CopyIcon, PlayIcon } from "@/shared/ui/icons";
import { OutlineButton } from "@/shared/ui/outline-button";
import { PlaceholderImage } from "@/shared/ui/placeholder-image";
import { ReviewCard } from "@/shared/ui/review-card";
import { SectionHeader, SectionHeaderAction } from "@/shared/ui/section-header";
import { StarRating } from "@/shared/ui/star-rating";
import { TagChip } from "@/shared/ui/tag-chip";
import { placeDetailDummy as place } from "../lib/dummy-data";
import * as styles from "./place-detail-page.css";

// Figma: Food Pick — "상세 페이지 · 장소" (node 27-2391)
// https://www.figma.com/design/oIbrn3j37lbTH75B0PJ8us/Food-Pick-%C2%B7-Login---Signup-Flow?node-id=27-2391&m=dev
//
// API 나오기 전, 더미 데이터로 미리 만든 UI (frontend-web#17). 이미지 캐로셀·후기
// 더보기·후기 작성 등 실제 동작은 API 연동 시 붙인다.
export function PlaceDetailPage() {
  return (
    <main className={detail.page}>
      <DetailTopBar />

      <div className={styles.heroWrap}>
        <PlaceholderImage aspectRatio="1 / 1" iconSize={40} />
        <span className={`${styles.heroCounter} ${text.label.md.medium}`}>
          1/{place.imageCount}
        </span>
      </div>

      <div className={detail.content}>
        <section className={styles.infoSection}>
          <h1 className={`${styles.name} ${text.heading.lg.bold}`}>{place.name}</h1>
          <div className={`${detail.metaRow} ${text.body.sm.regular}`}>
            <span>{place.category}</span>
            <span>·</span>
            <StarRating rating={place.rating} />
            <span>·</span>
            <span>리뷰 {place.reviewCount}</span>
          </div>
          <div className={`${styles.addressRow} ${text.body.sm.regular}`}>
            <span>{place.address}</span>
            <button type="button" className={`${styles.copyButton} ${text.label.lg.medium}`}>
              <CopyIcon />
              복사
            </button>
          </div>
          <div className={detail.tagsRow}>
            {place.tags.map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
          </div>
        </section>

        <section className={detail.section}>
          <SectionHeader title="맛있게 먹은 연예인" />
          <div className={styles.scrollRow}>
            {place.celebrityPicks.map((pick) => (
              <div key={pick.id} className={styles.celebrityCard}>
                <div className={styles.celebrityHead}>
                  <PlaceholderImage
                    className={styles.celebrityAvatar}
                    aspectRatio="1 / 1"
                    iconSize={16}
                  />
                  <span className={`${styles.celebrityName} ${text.label.lg.medium}`}>
                    {pick.name}
                  </span>
                  <span className={`${styles.celebrityHandle} ${text.label.md.regular}`}>
                    {pick.handle}
                  </span>
                </div>
                <span className={`${styles.celebrityMenu} ${text.body.sm.medium}`}>
                  {pick.menu}
                </span>
                <span className={`${styles.celebrityNote} ${text.label.md.regular}`}>
                  {pick.note}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className={detail.section}>
          <SectionHeader title="원본 영상" />
          <div className={styles.videoCard}>
            <PlaceholderImage aspectRatio="16 / 9" iconSize={32} />
            <span className={styles.videoPlayOverlay}>
              <PlayIcon size={44} />
            </span>
            <span className={`${styles.videoDuration} ${text.label.md.medium}`}>
              {place.originalVideo.duration}
            </span>
          </div>
          <span className={`${styles.videoTitle} ${text.body.sm.medium}`}>
            {place.originalVideo.title}
          </span>
        </section>

        <section className={detail.section}>
          <SectionHeader
            title={`유저의 후기 (${place.reviewCount})`}
            action={<SectionHeaderAction label="후기 작성하기" />}
          />
          <div className={styles.reviewList}>
            {place.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <OutlineButton>후기 더 확인하기</OutlineButton>
        </section>

        <section className={detail.section}>
          <SectionHeader title="이 가게의 인스타 영상, 트위터" />
          <div className={styles.scrollRow}>
            {place.instaPosts.map((post) => (
              <div key={post.id} className={styles.instaItem}>
                <PlaceholderImage aspectRatio="3 / 4" iconSize={24} />
                {post.caption && (
                  <span className={`${styles.instaCaption} ${text.label.md.bold}`}>
                    {post.caption}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
