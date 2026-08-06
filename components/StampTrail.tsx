"use client";

import { useEffect, useState } from "react";

export default function StampTrail() {
  const [stamped, setStamped] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStamped(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-sm select-none">
      {/* phone frame */}
      <div className="relative rounded-[2rem] border border-ink-border bg-ink-raised p-3 shadow-2xl shadow-black/40">
        <div className="mb-3 flex items-center gap-2 rounded-xl bg-[#0B141A] px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-signal/80" />
          <div className="flex-1">
            <p className="font-body text-xs font-semibold text-paper">Ahmad — Pelanggan</p>
            <p className="font-body text-[10px] text-muted">dalam talian</p>
          </div>
        </div>

        {/* chat bubble containing the docket */}
        <div className="rounded-2xl rounded-tl-sm bg-[#005C4B]/90 p-3">
          <p className="mb-2 font-body text-xs text-paper/90">
            Salam Encik, ini sebut harga servis aircond unit anda 👇
          </p>

          {/* the docket card */}
          <div className="docket relative overflow-hidden rounded-lg p-4 text-ink">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-ink/50">
                  Sebut Harga
                </p>
                <p className="font-mono text-sm font-medium text-ink/80">QUO-0142</p>
              </div>
              <span className="rounded-sm bg-ink/10 px-2 py-1 font-mono text-[10px] text-ink/60">
                PDF
              </span>
            </div>

            <div className="my-3 border-t border-dashed border-paper-line" />

            <div className="space-y-1.5 font-body text-xs text-ink/70">
              <div className="flex justify-between">
                <span>Servis Aircond 1.5HP (x2)</span>
                <span>RM 240.00</span>
              </div>
              <div className="flex justify-between">
                <span>Top-up gas R32</span>
                <span>RM 120.00</span>
              </div>
              <div className="flex justify-between font-semibold text-ink">
                <span>Jumlah</span>
                <span>RM 360.00</span>
              </div>
            </div>

            {/* stamp */}
            <div
              className={`pointer-events-none absolute -right-2 bottom-2 rounded-md border-[3px] border-stamp px-3 py-1 font-display text-sm font-bold uppercase tracking-wide text-stamp ${
                stamped ? "animate-stamp-thud opacity-100" : "opacity-0"
              }`}
              style={{ transform: "rotate(-9deg)" }}
            >
              Diluluskan
              <span className="block text-center font-mono text-[9px] font-normal tracking-normal">
                oleh pelanggan
              </span>
            </div>
          </div>

          <p className="mt-2 font-body text-[10px] text-paper/60">
            Tiada log masuk diperlukan — pelanggan lulus terus dari pautan.
          </p>
        </div>
      </div>

      {/* floating status chip */}
      <div className="absolute -right-4 -top-4 animate-float rounded-full bg-ok px-3 py-1.5 font-mono text-[11px] font-semibold text-ink shadow-lg shadow-black/30 sm:-right-8">
        + Audit trail disimpan
      </div>
    </div>
  );
}
