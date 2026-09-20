import type { CSSProperties, ReactNode } from "react";
import { ImageIcon } from "./icons";
import { base } from "./placeholder-image.css";

/**
 * Stand-in for a real photo/video thumbnail — dummy data has no image
 * assets to point at yet. Swap for a real <img>/<Image> once the API lands.
 */
type PlaceholderImageProps = {
  aspectRatio?: string;
  className?: string;
  style?: CSSProperties;
  iconSize?: number;
  children?: ReactNode;
};

export function PlaceholderImage({
  aspectRatio = "1 / 1",
  className,
  style,
  iconSize = 28,
  children,
}: PlaceholderImageProps) {
  return (
    <div className={className ? `${base} ${className}` : base} style={{ aspectRatio, ...style }}>
      {children ?? <ImageIcon size={iconSize} />}
    </div>
  );
}
