"use client";

import { useRouter } from "next/navigation";
import * as styles from "./detail-top-bar.css";
import { BookmarkIcon, ChevronLeftIcon, ShareIcon } from "./icons";

export function DetailTopBar() {
  const router = useRouter();

  return (
    <div className={styles.topBar}>
      <button
        type="button"
        className={styles.iconButton}
        aria-label="뒤로가기"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon size={28} />
      </button>
      <div className={styles.actions}>
        <button type="button" className={styles.iconButton} aria-label="저장">
          <BookmarkIcon size={22} />
        </button>
        <button type="button" className={styles.iconButton} aria-label="공유">
          <ShareIcon size={22} />
        </button>
      </div>
    </div>
  );
}
