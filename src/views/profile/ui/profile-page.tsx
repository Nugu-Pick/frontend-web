"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeftIcon } from "@/shared/ui/icons";
import { Chip } from "./chip";
import * as styles from "./profile-page.css";

// Figma: Food Pick · Login & Signup Flow — "05 Profile · Optional" (node 9-2)
// https://www.figma.com/design/oIbrn3j37lbTH75B0PJ8us/Food-Pick-%C2%B7-Login---Signup-Flow?node-id=9-2
//
// Entirely optional — the subtitle says every feature works without
// answering. The Figma mock shows one age chip and one gender chip already
// "selected", but that reads as a dev-handoff demo of the selected/
// unselected chip styles rather than a real default, so nothing is
// preselected here. The CTA ("선택 완료") stays enabled regardless of
// selection, since "건너뛰기" already covers the no-input path.

const AGE_OPTIONS = ["만 14~19세", "20대", "30대", "40대", "50대", "60대 이상"];
const GENDER_OPTIONS = ["여성", "남성"];

export function ProfilePage() {
  const router = useRouter();
  const [age, setAge] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);

  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <button
          type="button"
          className={styles.backButton}
          aria-label="뒤로가기"
          onClick={() => router.back()}
        >
          <ChevronLeftIcon size={28} />
        </button>
        <button type="button" className={styles.skipButton}>
          건너뛰기
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.heading}>
          <h1 className={styles.title}>맞춤 푸드 픽을 추천해드릴게요</h1>
          <p className={styles.subtitle}>입력하지 않아도 모든 기능을 이용할 수 있어요.</p>
        </div>

        <div className={styles.sections}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>연령대</h2>
            <div className={styles.chipGrid}>
              {AGE_OPTIONS.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  selected={age === option}
                  onSelect={() => setAge((prev) => (prev === option ? null : option))}
                />
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>성별</h2>
            <div className={styles.chipGrid}>
              {GENDER_OPTIONS.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  selected={gender === option}
                  onSelect={() => setGender((prev) => (prev === option ? null : option))}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className={styles.bottom}>
        <button type="button" className={styles.cta}>
          선택 완료
        </button>
      </div>
    </main>
  );
}
