import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { viewport as viewportStyle } from "@/shared/styles/viewport.css";
import { Providers } from "./providers";
import "@/shared/styles/theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nugupick",
  description: "nugupick web",
};

// Mobile-only product: allow content under the notch/home-indicator so the
// safe-area padding in viewport.css.ts has something to react to.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className={viewportStyle}>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
