/**
 * Email Notification Service for MEX / Techtonika Operations
 * Sends notifications to administrators when forms are submitted.
 * Designed to gracefully log if SMTP/Email provider is not configured.
 */

const ADMIN_NOTIFICATION_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || 'admin@mex.com.au';

export async function sendAdminNotification({ type, data }) {
  try {
    const timestamp = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' });
    const subject = `[MEX Notification] New ${type} from ${data.name || data.email || 'Visitor'}`;

    console.log('====================================================');
    console.log(`[Email Service Notification] - ${timestamp}`);
    console.log(`TO: ${ADMIN_NOTIFICATION_EMAIL}`);
    console.log(`SUBJECT: ${subject}`);
    console.log(`TYPE: ${type}`);
    console.log('DETAILS:', JSON.stringify(data, null, 2));
    console.log('====================================================');

    // If an external email provider API is configured (e.g. Resend, SendGrid, Postmark)
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || 'notifications@techtonika.com.au',
            to: [ADMIN_NOTIFICATION_EMAIL],
            subject,
            text: `New submission received:\n\nType: ${type}\nName: ${data.name || 'N/A'}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nCompany: ${data.company || 'N/A'}\nContent: ${data.message || data.requirements || 'N/A'}\nTime: ${timestamp}`,
          }),
        });
        console.log('[Email Service] Successfully dispatched via Resend API');
      } catch (err) {
        console.warn('[Email Service] Failed to send email via Resend API:', err.message);
      }
    }

    return { success: true, notified: true };
  } catch (err) {
    // Database submission MUST NEVER fail if email notification fails
    console.warn('[Email Service Warning] Non-critical notification error:', err.message);
    return { success: false, error: err.message };
  }
}

export default {
  sendAdminNotification,
};
