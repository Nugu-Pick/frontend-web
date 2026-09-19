"use client";

import * as styles from "./profile-page.css";

type ChipProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

export function Chip({ label, selected, onSelect }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={selected ? styles.chipSelected : styles.chip}
    >
      {label}
    </button>
  );
}
