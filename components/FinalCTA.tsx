export default function FinalCTA() {
  return (
    <section id="waitlist" className="relative overflow-hidden border-t border-ink-border bg-ink-raised py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[100px]" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
          Hentikan mengejar pelanggan dalam WhatsApp.
        </h2>
        <p className="mt-4 font-body text-base text-muted">
          Sediakan syarikat anda dalam WorkTrace dalam masa kurang 5 minit.
          Job pertama, sebut harga pertama — percuma.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://app.worktrace.my/onboarding"
            className="focus-ring rounded-md bg-signal px-7 py-3.5 font-body text-base font-semibold text-ink transition hover:bg-white"
          >
            Mula Percuma Sekarang
          </a>
          <a
            href="https://app.worktrace.my/login"
            className="focus-ring rounded-md border border-ink-border px-7 py-3.5 font-body text-base font-medium text-paper transition hover:border-signal hover:text-signal"
          >
            Log Masuk
          </a>
        </div>
      </div>
    </section>
  );
}
