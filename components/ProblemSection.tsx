const PAINS = [
  {
    stat: "47 mesej",
    title: "hilang dalam satu thread WhatsApp",
    body: "Harga, tarikh, dan &ldquo;ok proceed&rdquo; pelanggan bertaburan antara emoji dan gambar unit aircond.",
  },
  {
    stat: "RM 0",
    title: "bukti bila pelanggan tak nak bayar",
    body: "Tiada rekod kelulusan bertulis bermakna tiada pertahanan bila timbul pertikaian harga.",
  },
  {
    stat: "3 versi",
    title: "invois berlainan dalam Excel",
    body: "Copy-paste harga dari sebut harga ke invois — sampai nombor tak padan dan pelanggan komplen.",
  },
];

export default function ProblemSection() {
  return (
    <section className="border-t border-ink-border bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">
            Bunyi macam biasa?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            WhatsApp bukan sistem perniagaan. Tapi itulah yang kita semua guna.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PAINS.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-ink-border bg-ink-raised p-6 transition hover:border-signal/50"
            >
              <p className="font-display text-3xl font-bold text-signal">{p.stat}</p>
              <h3 className="mt-3 font-body text-base font-semibold text-paper">
                {p.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
