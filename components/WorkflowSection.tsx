const STAGES = [
  { n: "01", label: "Job Dicipta", detail: "Log pelanggan, tapak & skop kerja." },
  { n: "02", label: "Sebut Harga", detail: "Dari katalog produk atau job preset — auto-nombor." },
  { n: "03", label: "Kelulusan Pelanggan", detail: "Lulus via pautan awam, tiada log masuk." },
  { n: "04", label: "Work Order", detail: "Auto-jana selepas lulus, kekalkan harga & skop." },
  { n: "05", label: "Kerja Bermula", detail: "Status job dikemaskini secara langsung." },
  { n: "06", label: "Completion Report", detail: "Gambar & catatan di tapak, guna telefon." },
  { n: "07", label: "Variation Order", detail: "Kerja tambahan dibilkan berasingan — pilihan." },
  { n: "08", label: "Deduction", detail: "Potongan telus sebelum invois — pilihan." },
  { n: "09", label: "Invois", detail: "Auto-jana dari sebut harga + VO + potongan." },
  { n: "10", label: "Bukti Bayaran", detail: "Pelanggan muat naik bukti via pautan awam." },
  { n: "11", label: "Resit", detail: "Dikeluarkan bila bayaran disahkan — trail selesai." },
];

export default function WorkflowSection() {
  return (
    <section id="trail" className="border-t border-ink-border bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">
            Cara ia berfungsi
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Satu trail berkunci. Tiada langkah boleh diponteng.
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted">
            Setiap dokumen terikat kepada yang sebelumnya. Tiada invois tanpa
            kelulusan. Tiada resit tanpa bukti bayaran. Ini melindungi kontraktor
            semasa pertikaian, dan melindungi pelanggan daripada caj mengejut.
          </p>
        </div>

        <div className="perforated my-12" />

        <div className="-mx-6 overflow-x-auto px-6 pb-4">
          <div className="flex w-max gap-4">
            {STAGES.map((s, i) => (
              <div key={s.n} className="flex items-stretch gap-4">
                <div className="docket flex w-56 flex-col justify-between rounded-lg p-5 text-ink">
                  <p className="font-mono text-xs font-semibold text-stamp">{s.n}</p>
                  <div className="mt-3">
                    <h3 className="font-body text-sm font-semibold leading-snug">
                      {s.label}
                    </h3>
                    <p className="mt-2 font-body text-xs leading-relaxed text-ink/60">
                      {s.detail}
                    </p>
                  </div>
                </div>
                {i < STAGES.length - 1 && (
                  <div className="flex items-center">
                    <div className="h-px w-6 bg-ink-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="font-mono text-xs text-muted">
          ← geser untuk lihat trail penuh →
        </p>
      </div>
    </section>
  );
}
