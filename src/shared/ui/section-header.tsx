import type { ReactNode } from "react";
import { text } from "@/shared/styles/text.css";
import * as styles from "./section-header.css";

type SectionHeaderProps = {
  title: string;
  action?: ReactNode;
};

export function SectionHeader({ title, action }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <h2 className={`${styles.title} ${text.body.lg.bold}`}>{title}</h2>
      {action}
    </div>
  );
}

export function SectionHeaderAction({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button type="button" className={`${styles.action} ${text.label.lg.medium}`} onClick={onClick}>
      {label}
    </button>
  );
}
