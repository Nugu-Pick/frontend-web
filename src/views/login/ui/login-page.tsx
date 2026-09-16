import { GoogleIcon, KakaoIcon, NaverIcon } from "./icons";
import * as styles from "./login-page.css";

// Figma: Food Pick · Login & Signup Flow — "01 Login · Social Start" (node 6-2)
// https://www.figma.com/design/oIbrn3j37lbTH75B0PJ8us/Food-Pick-%C2%B7-Login---Signup-Flow?node-id=6-2
//
// Buttons are presentational only for now — OAuth wiring (kakao/naver/google)
// and the guest-browse route land with the auth feature.
export function LoginPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            먹고 싶은 순간을
            <br />
            저장해보세요
          </h1>
          <p className={styles.subtitle}>
            인물의 맛집과 음식 조합을 저장하고
            <br />
            나중에 간편하게 다시 확인할 수 있어요.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.buttonList}>
          <button type="button" className={styles.kakaoButton}>
            <KakaoIcon />
            카카오로 시작하기
          </button>
          <button type="button" className={styles.naverButton}>
            <NaverIcon />
            네이버로 시작하기
          </button>
          <button type="button" className={styles.googleButton}>
            <GoogleIcon />
            Google로 시작하기
          </button>
        </div>
        <button type="button" className={styles.guestLink}>
          로그인 없이 둘러보기
        </button>
      </section>
    </main>
  );
}
