import { text } from "@/shared/styles/text.css";
import { PlaceholderImage } from "./placeholder-image";
import * as styles from "./review-card.css";
import { StarRating } from "./star-rating";

export type Review = {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
};

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <PlaceholderImage className={styles.avatar} aspectRatio="1 / 1" iconSize={14} />
        <span className={`${styles.author} ${text.label.lg.medium}`}>{review.author}</span>
        <StarRating rating={review.rating} size={12} />
        <span className={`${styles.date} ${text.label.md.regular}`}>{review.date}</span>
      </div>
      <p className={`${styles.content} ${text.body.sm.regular}`}>{review.content}</p>
    </article>
  );
}
