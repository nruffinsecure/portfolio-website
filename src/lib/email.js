import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: import.meta.env.MAILTRAP_USER,
    pass: import.meta.env.MAILTRAP_PASS
  }
});

export async function sendQuoteRequest(formData) {
  const emailContent = `
    New Quote Request
    
    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Business Type: ${formData.businessType}
    Timeline: ${formData.timeline}
    Budget: ${formData.budget}
    
    Required Features:
    ${formData.features.join(', ')}
    
    Additional Requirements:
    ${formData.message}
  `;

  const mailOptions = {
    from: '"Website Quote Request" <quotes@nickruffin.com>',
    to: 'your-email@example.com',
    subject: `Website Quote Request from ${formData.name}`,
    text: emailContent,
    replyTo: formData.email
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
}
