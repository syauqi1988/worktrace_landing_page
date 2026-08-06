export default function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-body text-xs text-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} WorkTrace. Dibuat di Malaysia.</p>
        <div className="flex gap-6">
          <a href="https://app.worktrace.my/refund-policy" className="hover:text-paper">
            Dasar Bayaran Balik
          </a>
          <a href="https://app.worktrace.my/support" className="hover:text-paper">
            Sokongan
          </a>
          <a href="https://app.worktrace.my/faq" className="hover:text-paper">
            FAQ Produk
          </a>
        </div>
      </div>
    </footer>
  );
}
