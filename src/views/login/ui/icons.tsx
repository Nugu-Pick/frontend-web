/**
 * Minimal inline SNS marks for the social login buttons.
 * Approximate, recognizable shapes — swap for official brand assets
 * (Kakao/Naver/Google each publish exact logo files) before shipping.
 */

export function KakaoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        fill="#000"
        d="M10 2.5c-4.556 0-8.25 2.92-8.25 6.522 0 2.298 1.487 4.32 3.73 5.487-.164.6-.594 2.176-.68 2.514-.107.418.153.412.322.3.133-.089 2.106-1.43 2.964-2.017.612.09 1.246.14 1.914.14 4.556 0 8.25-2.92 8.25-6.424S14.556 2.5 10 2.5Z"
      />
    </svg>
  );
}

export function NaverIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path fill="#fff" d="M12.55 3v6.42L7.62 3H4v14h3.45v-6.42L12.38 17H16V3h-3.45Z" />
    </svg>
  );
}

export function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M19.6 10.23c0-.82-.07-1.42-.22-2.05H10v3.72h5.5c-.15.96-.96 2.4-2.75 3.37l-.02.17 3.99 3.09.28.03c2.54-2.35 4-5.8 4-9.9-.01-.14-.01-.29-.02-.43Z"
      />
      <path
        fill="#34A853"
        d="M10 20c2.7 0 4.96-.89 6.62-2.42l-3.98-3.09c-.75.5-1.7.79-2.64.79-2.03 0-3.76-1.37-4.38-3.22l-.16.01-4.14 3.2-.05.15C2.66 17.75 6.03 20 10 20Z"
      />
      <path
        fill="#FBBC05"
        d="M5.62 12.06c-.15-.45-.24-.94-.24-1.44s.09-.99.23-1.44l-.01-.15L1.4 5.78l-.14.06A9.99 9.99 0 0 0 0 10.62c0 1.61.39 3.14 1.26 4.48l4.36-3.04Z"
      />
      <path
        fill="#EA4335"
        d="M10 4c1.47 0 2.79.5 3.83 1.49l2.87-2.87C14.95.99 12.7 0 10 0 6.03 0 2.66 2.25 1.26 5.66l4.36 3.04C6.24 6.87 7.97 4 10 4Z"
      />
    </svg>
  );
}
