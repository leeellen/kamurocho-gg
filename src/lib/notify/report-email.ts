// Sends a "new report" notification email via Gmail SMTP (nodemailer).
//
// Best-effort: never throws. If credentials are unset it logs once and skips,
// so the reports endpoint keeps working without email configured. Call it from
// `after()` in the route so email latency never blocks the submitter's response.
//
// Env:
//   GMAIL_USER          the Gmail address that sends (SMTP login)
//   GMAIL_APP_PASSWORD  a 16-char Google "app password" (needs 2-Step
//                       Verification on; NOT the normal account password)
//   REPORT_NOTIFY_TO    recipient (default: same as GMAIL_USER — send to self)
//
// Use a personal Gmail account, not a managed Workspace one, since Workspace
// admins can disable app passwords.

import nodemailer from "nodemailer";

export type ReportNotification = {
  id?: number | string | null;
  appId: number | null;
  kind: string;
  targetRef: string | null;
  locale: string;
  description: string;
  userAgent: string | null;
  createdAt?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendReportNotification(report: ReportNotification): Promise<void> {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.warn("[reports] GMAIL_USER/GMAIL_APP_PASSWORD unset — skipping email notification");
    return;
  }

  const to = process.env.REPORT_NOTIFY_TO ?? user;

  const rows: Array<[string, string]> = [
    ["종류", report.kind],
    ["앱 ID", report.appId != null ? String(report.appId) : "—"],
    ["대상", report.targetRef ?? "—"],
    ["언어", report.locale],
    ["User-Agent", report.userAgent ?? "—"],
    ["리포트 ID", report.id != null ? String(report.id) : "—"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#888;white-space:nowrap;vertical-align:top">${escapeHtml(
          label,
        )}</td><td style="padding:4px 0;color:#111">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const html = `<div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px">
  <h2 style="margin:0 0 4px">새 리포트가 접수되었습니다</h2>
  <table style="border-collapse:collapse;font-size:14px;margin:12px 0">${rowsHtml}</table>
  <div style="margin-top:8px">
    <div style="color:#888;font-size:13px;margin-bottom:4px">내용</div>
    <div style="white-space:pre-wrap;background:#f5f5f5;border-radius:8px;padding:12px;font-size:14px;line-height:1.6;color:#111">${escapeHtml(
      report.description,
    )}</div>
  </div>
</div>`;

  const subject = `[리포트] ${report.kind} — ${report.description.slice(0, 40)}`;

  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
    await transport.sendMail({ from: user, to, subject, html });
  } catch (error) {
    console.error("[reports] email send failed", error);
  }
}
