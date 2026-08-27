import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin({
  // Next 16+: run vanilla-extract through Turbopack. Falls back to webpack automatically.
  unstable_turbopack: { mode: "auto" },
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withVanillaExtract(nextConfig);
