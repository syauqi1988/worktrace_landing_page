export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-border/60 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-paper">
          <span className="grid h-7 w-7 place-items-center rounded-sm bg-signal text-xs font-mono text-ink">
            WT
          </span>
          WorkTrace
        </a>
        <nav className="hidden items-center gap-8 font-body text-sm text-muted md:flex">
          <a href="#trail" className="transition hover:text-paper">Cara ia berfungsi</a>
          <a href="#ciri" className="transition hover:text-paper">Ciri-ciri</a>
          <a href="#harga" className="transition hover:text-paper">Harga</a>
          <a href="#faq" className="transition hover:text-paper">Soalan Lazim</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://app.worktrace.my/login"
            className="focus-ring hidden rounded-md px-3 py-2 font-body text-sm font-medium text-muted transition hover:text-paper sm:block"
          >
            Log Masuk
          </a>
          <a
            href="https://app.worktrace.my/onboarding"
            className="focus-ring rounded-md bg-signal px-4 py-2 font-body text-sm font-semibold text-ink transition hover:bg-white"
          >
            Mula Percuma
          </a>
        </div>
      </div>
    </header>
  );
}
