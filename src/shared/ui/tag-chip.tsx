import { text } from "@/shared/styles/text.css";
import { chip } from "./tag-chip.css";

export function TagChip({ label }: { label: string }) {
  return <span className={`${chip} ${text.label.md.medium}`}>{label}</span>;
}
