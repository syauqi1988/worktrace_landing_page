"use client";

import { useState } from "react";
import type { PricingPlan } from "@/lib/supabase";

function formatMYR(n: number) {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    minimumFractionDigits: n % 1 === 0 ? 0 : 2,
  }).format(n);
}

const BADGE_COLOR: Record<string, string> = {
  gray: "bg-ink-border text-muted",
  blue: "bg-signal text-ink",
  amber: "bg-ok/20 text-ok",
};

export default function PricingCards({ plans }: { plans: PricingPlan[] }) {
  const [yearly, setYearly] = useState(true);

  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        <span className={`font-body text-sm ${!yearly ? "text-paper" : "text-muted"}`}>
          Bulanan
        </span>
        <button
          onClick={() => setYearly((y) => !y)}
          className="focus-ring relative h-7 w-14 rounded-full bg-ink-border transition"
          aria-label="Tukar antara harga bulanan dan tahunan"
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-signal transition-transform ${
              yearly ? "translate-x-8" : "translate-x-1"
            }`}
          />
        </button>
        <span className={`font-body text-sm ${yearly ? "text-paper" : "text-muted"}`}>
          Tahunan <span className="text-ok">(jimat sehingga 20%)</span>
        </span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => {
          const comingSoon = plan.badge_text === "Akan Datang";
          const price = yearly ? plan.yearly_price / 12 : plan.monthly_price;
          return (
            <div
              key={plan.plan_key}
              className={`relative flex flex-col rounded-xl border p-7 ${
                plan.is_featured
                  ? "border-signal bg-ink-raised shadow-xl shadow-signal/10"
                  : "border-ink-border bg-ink-raised"
              }`}
            >
              {plan.badge_text && (
                <span
                  className={`absolute -top-3 left-7 rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide ${
                    BADGE_COLOR[plan.badge_color ?? "gray"] ?? BADGE_COLOR.gray
                  }`}
                >
                  {plan.badge_text}
                </span>
              )}

              <h3 className="font-display text-xl font-bold text-paper">{plan.name}</h3>
              <p className="mt-1 font-body text-sm text-muted">{plan.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-paper">
                  {formatMYR(Math.round(price))}
                </span>
                {plan.monthly_price > 0 && (
                  <span className="font-body text-sm text-muted">/ bulan</span>
                )}
              </div>
              {yearly && plan.monthly_price > 0 && (
                <p className="mt-1 font-mono text-xs text-ok">
                  Dibilkan {formatMYR(plan.yearly_price)}/tahun
                </p>
              )}

              <div className="my-6 border-t border-dashed border-ink-border" />

              <ul className="flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 font-mono text-xs ${
                        f.included ? "text-ok" : "text-muted/40"
                      }`}
                    >
                      {f.included ? "✓" : "—"}
                    </span>
                    <span
                      className={`font-body text-sm ${
                        f.included ? "text-paper/90" : "text-muted/50 line-through"
                      }`}
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={
                  comingSoon
                    ? "#waitlist"
                    : `https://app.worktrace.my/onboarding?plan=${plan.plan_key}`
                }
                className={`focus-ring mt-8 rounded-md px-5 py-3 text-center font-body text-sm font-semibold transition ${
                  comingSoon
                    ? "border border-ink-border text-muted hover:border-ok hover:text-ok"
                    : plan.is_featured
                    ? "bg-signal text-ink hover:bg-white"
                    : "border border-ink-border text-paper hover:border-signal hover:text-signal"
                }`}
              >
                {comingSoon
                  ? "Daftar Senarai Tunggu"
                  : plan.monthly_price === 0
                  ? "Mula Percuma"
                  : "Naik Taraf Sekarang"}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
