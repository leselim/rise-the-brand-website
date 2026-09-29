/*
  Rise The Brand — website sign-ups to Google Sheets
  Paste this into Extensions > Apps Script on your sheet, then deploy as a Web app.
  The website posts trade applications and orders here; each lands on its own tab.
*/

const NOTIFY_EMAIL = "info@risethebrand.co.za";   // set to "" to switch off email alerts

const TABS = {
  application: {
    name: "Applications",
    headers: ["Received", "Type", "Name", "Business", "Email", "Phone", "City", "Province", "Where they will sell", "Status"],
    row: (d) => [new Date(), d.type, d.name, d.business, d.email, d.phone, d.city, d.province, d.about, "New"],
    subject: (d) => `${d.type} application from ${d.name}`,
  },
  order: {
    name: "Orders",
    headers: ["Received", "Name", "Email", "Phone", "Address", "Items", "Subtotal", "Notes", "Status"],
    row: (d) => [new Date(), d.name, d.email, d.phone, d.address, d.items, d.subtotal, d.notes, "Awaiting total"],
    subject: (d) => `New order from ${d.name}`,
  },
};

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents || "{}");
    const tab = TABS[d.kind];
    if (!tab) return respond({ ok: false, error: "unknown kind" });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(tab.name);
    if (!sh) {
      sh = ss.insertSheet(tab.name);
      sh.appendRow(tab.headers);
      sh.getRange(1, 1, 1, tab.headers.length).setFontWeight("bold").setBackground("#e3daf0");
      sh.setFrozenRows(1);
    }
    sh.appendRow(tab.row(d));

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: tab.subject(d),
        body: tab.headers.map((h, i) => `${h}: ${tab.row(d)[i]}`).join("\n") + `\n\nOpen the sheet: ${ss.getUrl()}`,
      });
    }
    return respond({ ok: true });
  } catch (err) {
    return respond({ ok: false, error: String(err) });
  }
}

function doGet() {
  return ContentService.createTextOutput("Rise sign-up endpoint is live.");
}

function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
