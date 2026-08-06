const FEATURES = [
  {
    title: "Kongsi 1-tap ke WhatsApp",
    body: "Setiap dokumen jadi PDF kemas siap kongsi — dengan mesej WhatsApp pra-tulis dan pautan pendek /r/:code.",
  },
  {
    title: "Tindakan pelanggan tanpa akaun",
    body: "Kelulusan sebut harga dan muat naik bukti bayaran guna pautan token — pelanggan tak perlu install apa-apa.",
  },
  {
    title: "Job Preset & katalog produk",
    body: "Simpan jenis kerja berulang (cth: servis aircond 1.5HP) supaya sebut harga siap dalam saat.",
  },
  {
    title: "Variation Order & Deduction",
    body: "Kerja tambahan dan potongan direkod berasingan — sebut harga asal kekal tak berubah.",
  },
  {
    title: "SST & LHDN sedia ada",
    body: "Status SST syarikat, nombor SST, dan penomboran dokumen dibina untuk keperluan cukai tempatan.",
  },
  {
    title: "Passkey & RLS multi-tenant",
    body: "Log masuk biometrik (WebAuthn) dan Row Level Security di PostgreSQL — data setiap kontraktor diasingkan di lapisan pangkalan data.",
  },
  {
    title: "Laporan operasi & hasil",
    body: "Nilai kesihatan perniagaan across jobs, invois dan status bayaran — dibina untuk founder, bukan jabatan kewangan.",
  },
  {
    title: "Sokongan & FAQ dalam app",
    body: "Raise tiket, dapat notifikasi emel bila balasan tiba, atau cari jawapan sendiri di FAQ.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="ciri" className="border-t border-ink-border bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">
            Apa yang anda dapat
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Bukan CRM generik. Alat kerja sebenar kontraktor.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-ink p-6">
              <h3 className="font-body text-sm font-semibold text-paper">{f.title}</h3>
              <p className="mt-2 font-body text-xs leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
