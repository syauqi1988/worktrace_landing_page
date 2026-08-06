export default function GuaranteeSection() {
  return (
    <section className="border-t border-ink-border bg-ink-raised py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full border-2 border-ok text-ok">
          <span className="font-display text-xl font-bold">✓</span>
        </div>
        <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl">
          Tiada risiko untuk cuba.
        </h2>
        <p className="max-w-xl font-body text-base leading-relaxed text-muted">
          Plan Free kekal percuma selama-lamanya untuk 3 kerja aktif dan 2
          pelanggan — cukup untuk anda rasa sendiri trail dari sebut harga
          sampai resit. Naik taraf hanya bila anda dah nampak nilainya. Boleh
          batal bila-bila masa, dan permintaan bayaran balik dilayan mengikut
          dasar bayaran balik kami.
        </p>
      </div>
    </section>
  );
}
