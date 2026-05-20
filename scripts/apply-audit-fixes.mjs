import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error("Missing Supabase env vars.");

const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

const path = process.argv[2] ?? "/tmp/audit/fix/fix-batch-out.json";
const entries = JSON.parse(readFileSync(path, "utf8"));

let updated = 0;
let failed = 0;
const now = new Date().toISOString();
for (const e of entries) {
  if (!e.new_content?.trim()) {
    console.warn("skip empty", e.guide_id);
    continue;
  }
  const { error } = await sb
    .from("guides")
    .update({ content: e.new_content, updated_at: now })
    .eq("id", e.guide_id);
  if (error) {
    console.error("FAIL", e.guide_id, error.message);
    failed += 1;
    continue;
  }
  updated += 1;
}

console.log(`updated=${updated} failed=${failed}`);
