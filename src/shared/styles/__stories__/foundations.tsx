import type { ReactNode } from "react";
import { vars } from "@/shared/styles/theme.css";

/** Flatten a nested token object to dotted-path / value pairs. */
export type TokenEntry = { path: string; value: string };

export function flatten(obj: Record<string, unknown>, prefix = ""): TokenEntry[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof value === "string"
      ? [{ path, value }]
      : flatten(value as Record<string, unknown>, path);
  });
}

const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";

export function Section({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2
        style={{
          font: `600 12px/1.4 ${mono}`,
          letterSpacing: "0.09em",
          textTransform: "uppercase",
          color: vars.color.text.tertiary,
          margin: "0 0 12px",
        }}
      >
        {title}
        {hint ? (
          <span style={{ textTransform: "none", marginLeft: 8, opacity: 0.7 }}>— {hint}</span>
        ) : null}
      </h2>
      {children}
    </section>
  );
}

export function Grid({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 12,
      }}
    >
      {children}
    </div>
  );
}

export function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <div
      style={{
        border: `1px solid ${vars.color.border.default}`,
        borderRadius: 10,
        overflow: "hidden",
        background: vars.color.background.floated,
      }}
    >
      <div
        style={{
          height: 56,
          background: value,
          borderBottom: `1px solid ${vars.color.border.default}`,
        }}
      />
      <div style={{ padding: "8px 10px" }}>
        <div style={{ font: `500 12px/1.3 ${mono}`, color: vars.color.text.primary }}>{name}</div>
        <div style={{ font: `12px/1.3 ${mono}`, color: vars.color.text.tertiary }}>{value}</div>
      </div>
    </div>
  );
}

export function Ruler({ name, value }: { name: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
      <code
        style={{
          font: `12px/1.3 ${mono}`,
          color: vars.color.text.secondary,
          width: 96,
          flexShrink: 0,
        }}
      >
        {name}
      </code>
      <div
        style={{
          height: 16,
          width: value,
          background: vars.color.fill.brand,
          borderRadius: 2,
        }}
      />
      <span style={{ font: `12px/1.3 ${mono}`, color: vars.color.text.tertiary }}>{value}</span>
    </div>
  );
}

export function RadiusBox({ name, value }: { name: string; value: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          height: 72,
          border: `2px solid ${vars.color.border.brand}`,
          borderRadius: value,
          background: vars.color.fill.brandWeak,
        }}
      />
      <code
        style={{
          display: "block",
          marginTop: 8,
          font: `12px/1.3 ${mono}`,
          color: vars.color.text.secondary,
        }}
      >
        {name}
      </code>
      <span style={{ font: `11px/1.3 ${mono}`, color: vars.color.text.tertiary }}>{value}</span>
    </div>
  );
}

/** Renders children twice, in forced light and dark islands, side by side. */
export function ThemePair({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {(["light", "dark"] as const).map((theme) => (
        <div
          key={theme}
          data-theme={theme}
          style={{
            background: vars.color.background.default,
            color: vars.color.text.primary,
            border: `1px solid ${vars.color.border.default}`,
            borderRadius: 12,
            padding: 16,
          }}
        >
          <div
            style={{
              font: `600 11px/1.4 ${mono}`,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: vars.color.text.tertiary,
              marginBottom: 12,
            }}
          >
            {theme}
          </div>
          {children}
        </div>
      ))}
    </div>
  );
}
