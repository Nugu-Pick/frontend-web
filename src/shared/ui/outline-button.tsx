import type { ReactNode } from "react";
import { text } from "@/shared/styles/text.css";
import { button } from "./outline-button.css";

export function OutlineButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button type="button" className={`${button} ${text.body.sm.medium}`} onClick={onClick}>
      {children}
    </button>
  );
}
