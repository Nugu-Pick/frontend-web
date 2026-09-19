"use client";

import { CheckIcon } from "./icons";
import * as styles from "./terms-page.css";

type TermRowProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
  badge?: "필수" | "선택";
  emphasized?: boolean;
  onDetail?: () => void;
};

export function TermRow({ label, checked, onChange, badge, emphasized, onDetail }: TermRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.rowLeft}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={styles.checkboxInput}
            aria-label={label}
          />
          <span className={`${styles.checkbox} ${checked ? styles.checkboxChecked : ""}`}>
            {checked && <CheckIcon />}
          </span>
        </label>
        <span className={emphasized ? styles.labelEmphasized : styles.label}>
          {badge && <span className={styles.badge}>({badge}) </span>}
          {label}
        </span>
      </div>
      {onDetail && (
        <button type="button" className={styles.detailLink} onClick={onDetail}>
          상세보기
        </button>
      )}
    </div>
  );
}
