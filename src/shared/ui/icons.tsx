/**
 * Small set of icons reused across views. Promote an icon here once it's
 * needed in a second place — page-specific marks (brand logos, etc.) stay
 * local to their view.
 */

type IconProps = { size?: number };

export function ChevronLeftIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 5 8 12l7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
