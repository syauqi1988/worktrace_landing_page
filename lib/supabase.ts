import { createClient } from "@supabase/supabase-js";

// These are PUBLIC, browser-safe keys (Supabase "anon"/"publishable" keys).
// Row Level Security on the `pricing_plans` table only exposes rows where
// is_active = true, so it is safe to query directly from the client or
// server with this key. Never put your service_role key here.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
});

export type PlanFeature = {
  label: string;
  included: boolean;
};

export type PricingPlan = {
  plan_key: string;
  name: string;
  tagline: string | null;
  monthly_price: number;
  yearly_price: number;
  yearly_discount_pct: number;
  currency: string;
  max_jobs: number | null;
  max_customers: number | null;
  features: PlanFeature[];
  is_active: boolean;
  is_featured: boolean;
  badge_text: string | null;
  badge_color: string | null;
  sort_order: number;
};

/**
 * Fetches live, active pricing plans from the connected Supabase project.
 * Falls back to a static snapshot if the request fails (e.g. missing env
 * vars during local preview) so the page never breaks.
 */
export async function getPricingPlans(): Promise<PricingPlan[]> {
  try {
    const { data, error } = await supabase
      .from("pricing_plans")
      .select(
        "plan_key,name,tagline,monthly_price,yearly_price,yearly_discount_pct,currency,max_jobs,max_customers,features,is_active,is_featured,badge_text,badge_color,sort_order"
      )
      .eq("is_active", true)
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      throw error ?? new Error("No plans returned");
    }

    return data as unknown as PricingPlan[];
  } catch (err) {
    console.error("Falling back to static pricing snapshot:", err);
    return FALLBACK_PLANS;
  }
}

// Static snapshot of the live pricing_plans table, used only if Supabase
// is unreachable at build/request time. Keep roughly in sync manually,
// or better: make sure NEXT_PUBLIC_SUPABASE_* env vars are always set.
const FALLBACK_PLANS: PricingPlan[] = [
  {
    plan_key: "free",
    name: "Free",
    tagline: "Cuba dulu, rasa dulu",
    monthly_price: 0,
    yearly_price: 0,
    yearly_discount_pct: 0,
    currency: "MYR",
    max_jobs: 3,
    max_customers: 2,
    features: [
      { label: "Kongsi PDF via WhatsApp", included: true },
      { label: "Logo syarikat di PDF", included: true },
      { label: "Kaedah bayaran (bank + QR)", included: true },
      { label: "Kerja aktif tanpa had", included: false },
      { label: "Pelanggan tanpa had", included: false },
      { label: "Sistem referral", included: false },
    ],
    is_active: true,
    is_featured: false,
    badge_text: "Percuma",
    badge_color: "gray",
    sort_order: 1,
  },
  {
    plan_key: "pro",
    name: "Pro",
    tagline: "Untuk kontraktor yang serius",
    monthly_price: 39,
    yearly_price: 374.4,
    yearly_discount_pct: 20,
    currency: "MYR",
    max_jobs: null,
    max_customers: null,
    features: [
      { label: "Kerja aktif tanpa had", included: true },
      { label: "Pelanggan tanpa had", included: true },
      { label: "Logo syarikat di PDF", included: true },
      { label: "Kaedah bayaran (bank + QR)", included: true },
      { label: "Sistem referral", included: true },
      { label: "Sokongan prioriti", included: true },
      { label: "Kongsi PDF via WhatsApp", included: true },
    ],
    is_active: true,
    is_featured: true,
    badge_text: "Paling Popular",
    badge_color: "blue",
    sort_order: 2,
  },
  {
    plan_key: "team",
    name: "Team",
    tagline: "Untuk pasukan kecil 2-10 orang",
    monthly_price: 99,
    yearly_price: 950.4,
    yearly_discount_pct: 20,
    currency: "MYR",
    max_jobs: null,
    max_customers: null,
    features: [
      { label: "Semua ciri Pro", included: true },
      { label: "Multi-user access (5 seat)", included: true },
      { label: "Tugasan kerja kepada pekerja", included: true },
      { label: "Laporan prestasi pasukan", included: true },
      { label: "Kawalan akses & kebenaran", included: true },
      { label: "Tambah seat — RM15/pengguna", included: true },
    ],
    is_active: true,
    is_featured: false,
    badge_text: "Akan Datang",
    badge_color: "amber",
    sort_order: 3,
  },
];
