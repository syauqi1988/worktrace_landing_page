import { getPricingPlans } from "@/lib/supabase";
import PricingCards from "./PricingCards";

// Re-fetch pricing from Supabase at most once per minute (ISR), so changes
// made in the pricing_plans table show up on the live site without a
// redeploy, while still being served from a fast cache most of the time.
export const revalidate = 60;

export default async function PricingSection() {
  const plans = await getPricingPlans();

  return (
    <section id="harga" className="border-t border-ink-border bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">Harga</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Mula percuma. Naik taraf bila anda dah rasa nilainya.
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted">
            Harga ditarik terus dari pangkalan data WorkTrace — bukan hardcoded.
            Apa yang anda nampak di sini sama dengan apa yang tertera dalam app.
          </p>
        </div>

        <div className="mt-14">
          <PricingCards plans={plans} />
        </div>
      </div>
    </section>
  );
}
