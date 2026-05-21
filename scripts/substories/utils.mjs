export function stripHtml(s) {
  return s
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/li>|<\/p>|<\/dt>|<\/dd>|<\/h[1-6]>/gi, "\n")
    .replace(/<img[^>]*>/gi, "")
    .replace(/<a\s+[^>]*>/gi, "")
    .replace(/<\/a>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&rarr;/gi, "→")
    .replace(/　/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export async function fetchText(url, { delayMs = 400 } = {}) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "ko-KR,ko;q=0.9,ja;q=0.8,en;q=0.7",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  const html = await res.text();
  if (delayMs > 0) await sleep(delayMs);
  return html;
}

export function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

export function escTs(s) {
  return JSON.stringify(s);
}

export function lit(ko, en) {
  return `{ ko: ${escTs(ko)}, en: ${escTs(en)} }`;
}
