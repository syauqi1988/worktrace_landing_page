import type { Metadata } from "next";

// Self-hosted font files (bundled via @fontsource, no runtime fetch to
// Google Fonts needed) — keeps builds reliable in sandboxed/offline CI
// environments as well as on Vercel.
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorkTrace — Sistem Operasi Kontraktor Malaysia",
  description:
    "Sebut harga, lulus, invois, dan dapat bayaran — semua dalam satu trail digital. Dibina untuk kontraktor aircond, elektrik, paip, renovation & fabrikasi di Malaysia.",
  metadataBase: new URL("https://worktrace.my"),
  openGraph: {
    title: "WorkTrace — Sistem Operasi Kontraktor Malaysia",
    description:
      "Hentikan kekacauan WhatsApp. Satu trail digital dari sebut harga sampai resit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ms">
      <body className="font-body bg-ink text-paper antialiased">{children}</body>
    </html>
  );
}
