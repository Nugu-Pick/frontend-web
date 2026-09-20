import { text } from "@/shared/styles/text.css";
import { StarIcon } from "./icons";
import * as styles from "./star-rating.css";

type StarRatingProps = {
  rating: number;
  size?: number;
};

export function StarRating({ rating, size = 14 }: StarRatingProps) {
  return (
    <span className={`${styles.wrap} ${text.label.lg.medium}`}>
      <StarIcon size={size} />
      <span className={styles.value}>{rating.toFixed(1)}</span>
    </span>
  );
}
