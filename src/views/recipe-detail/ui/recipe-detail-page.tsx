import { text } from "@/shared/styles/text.css";
import * as detail from "@/shared/ui/detail-page.css";
import { DetailTopBar } from "@/shared/ui/detail-top-bar";
import { ChevronRightIcon } from "@/shared/ui/icons";
import { OutlineButton } from "@/shared/ui/outline-button";
import { PlaceholderImage } from "@/shared/ui/placeholder-image";
import { ReviewCard } from "@/shared/ui/review-card";
import { SectionHeader, SectionHeaderAction } from "@/shared/ui/section-header";
import { StarRating } from "@/shared/ui/star-rating";
import { TagChip } from "@/shared/ui/tag-chip";
import { recipeDetailDummy as recipe } from "../lib/dummy-data";
import * as styles from "./recipe-detail-page.css";

// Figma: Food Pick — "소스 조합 상세" 레시피 버전 (node 155-14)
// https://www.figma.com/design/oIbrn3j37lbTH75B0PJ8us/Food-Pick-%C2%B7-Login---Signup-Flow?node-id=155-14&m=dev
//
// API 나오기 전, 더미 데이터로 미리 만든 UI (frontend-web#17). 알레르기 아코디언,
// 후기 더보기, 비슷한 조합 탐색 등 실제 동작은 API 연동 시 붙인다.
export function RecipeDetailPage() {
  return (
    <main className={detail.page}>
      <DetailTopBar />

      <div className={styles.hero}>
        <span className={styles.heroEmoji}>{recipe.heroEmoji}</span>
        <span className={`${styles.heroLabel} ${text.label.lg.bold}`}>{recipe.heroLabel}</span>
      </div>

      <div className={detail.content}>
        <section className={styles.infoSection}>
          <div className={detail.tagsRow}>
            {recipe.tags.map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
          </div>
          <h1 className={`${styles.name} ${text.heading.lg.bold}`}>{recipe.name}</h1>
          <p className={`${styles.description} ${text.body.sm.regular}`}>{recipe.description}</p>
          <div className={`${detail.metaRow} ${text.body.sm.regular}`}>
            <StarRating rating={recipe.rating} />
            <span>·</span>
            <span>후기 {recipe.reviewCount}</span>
            <span>·</span>
            <span>저장 {recipe.savedCount.toLocaleString()}</span>
          </div>
        </section>

        <section className={detail.section}>
          <SectionHeader title="누가 만든 조합인가요?" />
          <div className={styles.creatorCard}>
            <PlaceholderImage className={styles.creatorAvatar} aspectRatio="1 / 1" iconSize={20} />
            <div className={styles.creatorMeta}>
              <span className={`${styles.creatorName} ${text.body.md.bold}`}>
                {recipe.creator.name}
              </span>
              <span className={`${styles.creatorSubtitle} ${text.label.md.regular}`}>
                {recipe.creator.subtitle}
              </span>
            </div>
            <button type="button" className={`${styles.creatorLinkButton} ${text.label.lg.medium}`}>
              원본 보기
            </button>
          </div>
        </section>

        <section className={detail.section}>
          <SectionHeader title="맛의 특징" />
          <div className={styles.tasteList}>
            {recipe.tasteProfile.map((taste) => (
              <div key={taste.label} className={styles.tasteRow}>
                <span className={`${styles.tasteLabel} ${text.body.sm.regular}`}>
                  {taste.label}
                </span>
                <div className={styles.tasteTrack}>
                  <div className={styles.tasteFill} style={{ width: `${taste.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={detail.section}>
          <SectionHeader
            title="필요한 재료"
            action={<span className={text.label.md.regular}>{recipe.servingNote}</span>}
          />
          <div className={styles.ingredientList}>
            {recipe.ingredients.map((ingredient) => (
              <div
                key={ingredient.name}
                className={`${styles.ingredientRow} ${text.body.sm.regular}`}
              >
                <span>{ingredient.name}</span>
                <span className={styles.ingredientAmount}>{ingredient.amount}</span>
              </div>
            ))}
          </div>
          <span className={`${styles.ingredientNote} ${text.label.md.regular}`}>
            {recipe.ingredientNote}
          </span>
        </section>

        <section className={detail.section}>
          <SectionHeader title="만드는 법" />
          <div className={styles.stepList}>
            {recipe.steps.map((step, index) => (
              // Dummy content has no stable step id — index is fine for a static list.
              // biome-ignore lint/suspicious/noArrayIndexKey: static dummy list, no reordering
              <div key={index} className={styles.stepRow}>
                <span className={`${styles.stepBadge} ${text.label.md.bold}`}>{index + 1}</span>
                <span className={`${styles.stepText} ${text.body.sm.regular}`}>{step}</span>
              </div>
            ))}
          </div>
          <div className={styles.tipBox}>
            <span className={`${styles.tipTitle} ${text.label.lg.bold}`}>{recipe.tip.title}</span>
            <span className={`${styles.tipContent} ${text.body.sm.regular}`}>
              {recipe.tip.content}
            </span>
          </div>
        </section>

        <section className={detail.section}>
          <SectionHeader title="잘 어울리는 메뉴" />
          <div className={styles.pairingGrid}>
            {recipe.pairings.map((pairing) => (
              <div key={pairing.id} className={styles.pairingItem}>
                <span className={styles.pairingEmoji}>{pairing.emoji}</span>
                <span className={`${styles.pairingLabel} ${text.label.md.medium}`}>
                  {pairing.label}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.allergyBox}>
            <span className={`${styles.allergyTitle} ${text.label.lg.bold}`}>
              알레르기 · 대체 재료
            </span>
            <span className={`${styles.allergyContent} ${text.body.sm.regular}`}>
              {recipe.allergyNote}
            </span>
          </div>
        </section>

        <section className={detail.section}>
          <SectionHeader
            title={`유저의 후기 ${recipe.reviewCount}`}
            action={<SectionHeaderAction label="후기 작성하기" />}
          />
          <div className={`${styles.reviewSummaryRow} ${text.label.lg.regular}`}>
            <span className={styles.reviewSummaryOverall}>
              <StarRating rating={recipe.rating} />
            </span>
            <span>맛 {recipe.reviewSummary.taste}</span>
            <span>·</span>
            <span>따라하기 {recipe.reviewSummary.ease}</span>
            <span>·</span>
            <span>재구매 {recipe.reviewSummary.repurchase}</span>
          </div>
          <div className={styles.reviewList}>
            {recipe.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <OutlineButton>후기 전체 보기</OutlineButton>
        </section>

        <section className={detail.section}>
          <SectionHeader title="원본 콘텐츠" />
          <div className={styles.originalContentList}>
            {recipe.originalContents.map((original) => (
              <div key={original.id} className={styles.originalContentCard}>
                <span className={`${styles.originalContentKind} ${text.label.md.bold}`}>
                  # {original.kind}
                </span>
                <span className={`${styles.originalContentTitle} ${text.body.sm.medium}`}>
                  {original.title}
                </span>
                <span className={`${styles.originalContentSource} ${text.label.md.regular}`}>
                  {original.source}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className={detail.section}>
          <SectionHeader title="비슷한 소스 조합" />
          <div className={styles.similarList}>
            {recipe.similarRecipes.map((similar) => (
              <div key={similar.id} className={styles.similarRow}>
                <PlaceholderImage
                  className={styles.similarThumb}
                  aspectRatio="1 / 1"
                  iconSize={16}
                />
                <div className={styles.similarMeta}>
                  <span className={`${styles.similarName} ${text.body.sm.medium}`}>
                    {similar.name}
                  </span>
                  <span className={`${styles.similarSub} ${text.label.md.regular}`}>
                    {similar.meta}
                  </span>
                </div>
                <ChevronRightIcon size={18} />
              </div>
            ))}
          </div>
          <button type="button" className={`${styles.exploreButton} ${text.body.md.bold}`}>
            더 많은 소스 조합 탐색
          </button>
        </section>
      </div>
    </main>
  );
}
