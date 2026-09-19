"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeftIcon } from "@/shared/ui/icons";
import { TermRow } from "./term-row";
import * as styles from "./terms-page.css";

// Figma: Food Pick · Login & Signup Flow
//   "02 Terms · Default"     (node 7-2)  — nothing checked, CTA disabled
//   "03 Terms · All Agreed"  (node 7-35) — required items checked, CTA enabled
// https://www.figma.com/design/oIbrn3j37lbTH75B0PJ8us/Food-Pick-%C2%B7-Login---Signup-Flow?node-id=7-2
//
// One interactive page covers both states. "전체 약관 동의" toggles/reflects
// only the REQUIRED items (age/service/privacy) — matching the exact
// Figma "All Agreed" state, where marketing stayed unchecked while the
// top checkbox showed checked. Marketing is always an independent toggle.
// The CTA enables the same way: all required items checked, regardless of
// marketing. If the intent was for "전체 동의" to also bundle marketing,
// that's a one-line change (add "marketing" to REQUIRED_KEYS toggling).

type RequiredKey = "age" | "service" | "privacy";
type TermKey = RequiredKey | "marketing";

const REQUIRED_KEYS: RequiredKey[] = ["age", "service", "privacy"];

const initialChecked: Record<TermKey, boolean> = {
  age: false,
  service: false,
  privacy: false,
  marketing: false,
};

export function TermsPage() {
  const router = useRouter();
  const [checked, setChecked] = useState(initialChecked);

  const allRequiredChecked = REQUIRED_KEYS.every((key) => checked[key]);

  function toggle(key: TermKey) {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function toggleAllRequired() {
    const next = !allRequiredChecked;
    setChecked((prev) => ({
      ...prev,
      age: next,
      service: next,
      privacy: next,
    }));
  }

  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <button
          type="button"
          className={styles.backButton}
          aria-label="뒤로가기"
          onClick={() => router.back()}
        >
          <ChevronLeftIcon />
        </button>
      </div>

      <div className={styles.heading}>
        <h1 className={styles.title}>약관동의</h1>
        <p className={styles.subtitle}>서비스 이용을 위해 약관에 동의해 주세요.</p>
      </div>

      <div className={styles.list}>
        <TermRow
          label="전체 약관 동의"
          checked={allRequiredChecked}
          onChange={toggleAllRequired}
          emphasized
        />
        <div className={styles.divider} />
        <TermRow
          label="만 14세 이상입니다"
          badge="필수"
          checked={checked.age}
          onChange={() => toggle("age")}
        />
        <TermRow
          label="서비스 이용약관"
          badge="필수"
          checked={checked.service}
          onChange={() => toggle("service")}
          onDetail={() => {}}
        />
        <TermRow
          label="개인정보 수집·이용"
          badge="필수"
          checked={checked.privacy}
          onChange={() => toggle("privacy")}
          onDetail={() => {}}
        />
        <TermRow
          label="마케팅 활용 동의"
          badge="선택"
          checked={checked.marketing}
          onChange={() => toggle("marketing")}
          onDetail={() => {}}
        />
      </div>

      <div className={styles.footer}>
        <p className={styles.footerNote}>필수 약관에 모두 동의해야 가입할 수 있어요.</p>
        <button type="button" className={styles.cta} disabled={!allRequiredChecked}>
          동의하고 시작하기
        </button>
      </div>
    </main>
  );
}
