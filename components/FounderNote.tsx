const TRADES = [
  "Aircond & Refrigeration",
  "Elektrik",
  "Paip & Plumbing",
  "Renovation",
  "Kerja Kimpalan & Fabrikasi",
  "Penyelenggaraan",
];

export default function FounderNote() {
  return (
    <section className="border-t border-ink-border bg-ink-raised py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-muted">
          Dibina untuk trade-trade ini
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {TRADES.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink-border px-4 py-1.5 font-body text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl border-l-2 border-signal pl-6">
          <p className="font-body text-base italic leading-relaxed text-paper/90">
            &ldquo;WorkTrace bukan cuba jadi Salesforce untuk kontraktor kecil. Ia
            dibina bermula dari satu masalah: bila sebut harga hidup dalam
            WhatsApp, tiada siapa boleh buktikan apa yang dipersetujui. Jadi kami
            kunci setiap dokumen kepada yang sebelumnya — dan buat ia mudah
            cukup untuk dihantar dari telefon, di tapak kerja.&rdquo;
          </p>
          <p className="mt-4 font-mono text-xs text-muted">— Pasukan WorkTrace</p>
        </div>
      </div>
    </section>
  );
}
