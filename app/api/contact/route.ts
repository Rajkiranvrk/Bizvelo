import { NextResponse } from "next/server";

/**
 * GOOGLE APPS SCRIPT WEBHOOK DEPLOYMENT INSTRUCTIONS:
 * 
 * 1. Open a Google Sheet where you want to collect form submissions.
 * 2. Click "Extensions" > "Apps Script".
 * 3. Delete any default code and paste the following Google Apps Script:
 * 
 * ```javascript
 * function doPost(e) {
 *   try {
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     var data = JSON.parse(e.postData.contents);
 *     
 *     // Append incoming row: Timestamp, Name, Phone, Email, Service Interest, Message
 *     sheet.appendRow([
 *       new Date(),
 *       data.name,
 *       data.phone,
 *       data.email,
 *       data.service,
 *       data.message
 *     ]);
 *     
 *     return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } catch (error) {
 *     return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 * ```
 * 
 * 4. Click "Deploy" (top right) > "New deployment".
 * 5. Select type "Web app".
 * 6. Set "Execute as": "Me" (your email).
 * 7. Set "Who has access": "Anyone". (This is critical so your Next.js app can POST to it).
 * 8. Click "Deploy" and authorize permissions.
 * 9. Copy the generated Web App URL and add it to your environment variables as `GOOGLE_SHEET_WEBHOOK_URL`.
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Validate inputs
    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (name, phone, email)" },
        { status: 400 }
      );
    }

    // Google Sheets integration via Apps Script Web App URL
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    console.log("Processing lead submission:", { name, phone, email, service, message });

    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, email, service, message }),
        });

        if (!response.ok) {
          console.error("Failed to forward lead to Google Apps Script webhook");
        } else {
          console.log("Lead successfully forwarded to Google Sheet");
        }
      } catch (webhookError) {
        console.error("Error communicating with Google Apps Script Webhook:", webhookError);
      }
    } else {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL environment variable is not set. Lead logged locally only.");
    }

    // Always succeed from user perspective to prevent blockages
    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully.",
    });
  } catch (error) {
    console.error("API error in contact submission:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
