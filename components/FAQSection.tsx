"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Perlukah pelanggan saya muat turun app atau daftar akaun?",
    a: "Tidak. Kelulusan sebut harga dan muat naik bukti bayaran guna pautan token peribadi — pelanggan buka terus dari WhatsApp, tiada log masuk diperlukan.",
  },
  {
    q: "Boleh tak saya import produk & harga yang saya dah ada?",
    a: "Katalog produk/servis anda disimpan sekali dan digunakan sebagai picker dalam setiap sebut harga dan invois baharu — tiada taip semula setiap job.",
  },
  {
    q: "Macam mana dengan SST dan keperluan cukai LHDN?",
    a: "Anda boleh daftar status SST dan nombor SST syarikat dalam Settings. Ia akan terpakai pada sebut harga/invois yang berkenaan, dan penomboran dokumen disusun untuk rekod pematuhan.",
  },
  {
    q: "Data saya selamat dan diasingkan daripada kontraktor lain?",
    a: "Ya. Row Level Security (RLS) dikuatkuasakan di lapisan PostgreSQL — data setiap akaun kontraktor diasingkan di pangkalan data, bukan sekadar di paparan skrin.",
  },
  {
    q: "Boleh tak saya batal langganan bila-bila masa?",
    a: "Boleh. Pembatalan boleh dibuat dari Settings, dan proses penghapusan akaun disediakan sepenuhnya — dari permintaan sehingga pengesahan — tanpa jalan buntu.",
  },
  {
    q: "Plan Team belum boleh saya guna sekarang?",
    a: "Betul, Team (multi-user, tugasan pekerja, kawalan akses) sedang dalam pembinaan. Daftar senarai tunggu dan kami akan hubungi anda sebaik ia dibuka.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-ink-border bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-signal">
          Soalan Lazim
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
          Sebelum anda tanya, kami dah jawab.
        </h2>

        <div className="mt-12 divide-y divide-ink-border rounded-lg border border-ink-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-body text-sm font-semibold text-paper">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 font-mono text-lg text-signal transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="font-body text-sm leading-relaxed text-muted">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
