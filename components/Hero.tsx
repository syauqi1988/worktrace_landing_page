import StampTrail from "./StampTrail";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pb-20 pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-raised px-3 py-1 font-mono text-xs text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Dibina untuk kontraktor Malaysia
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            11 langkah kerja.
            <br />
            <span className="text-signal">1 trail</span> yang tak boleh diponteng.
          </h1>

          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-muted">
            WorkTrace tukar sebut harga, kelulusan, kerja, invois dan bayaran anda
            daripada bertaburan dalam WhatsApp — kepada satu sistem yang dikunci
            ikut turutan. Tiada invois tanpa kelulusan. Tiada &ldquo;dia kata dia
            tak setuju&rdquo;.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://app.worktrace.my/onboarding"
              className="focus-ring rounded-md bg-signal px-6 py-3.5 text-center font-body text-base font-semibold text-ink transition hover:bg-white"
            >
              Mula Percuma — Tiada Kad Kredit
            </a>
            <a
              href="#trail"
              className="focus-ring rounded-md border border-ink-border px-6 py-3.5 text-center font-body text-base font-medium text-paper transition hover:border-signal hover:text-signal"
            >
              Lihat cara ia berfungsi ↓
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
            <span>React + Supabase &middot; RLS multi-tenant</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Bahasa Malaysia + English</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>SST &amp; FPX/BillPlz sedia ada</span>
          </div>
        </div>

        <StampTrail />
      </div>
    </section>
  );
}
