import nodemailer from 'nodemailer';

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// RPG-themed email template styles
const emailStyles = `
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #2c3e50;
      color: #ffffff;
      padding: 20px;
      text-align: center;
      border-radius: 8px 8px 0 0;
      border-bottom: 4px solid #e74c3c;
    }
    .content {
      padding: 20px;
      background-color: #ffffff;
    }
    .footer {
      text-align: center;
      padding: 20px;
      background-color: #2c3e50;
      color: #ffffff;
      border-radius: 0 0 8px 8px;
    }
    .quest-title {
      color: #e74c3c;
      font-size: 24px;
      margin-bottom: 20px;
      text-align: center;
      font-weight: bold;
    }
    .quest-details {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 4px;
      margin: 15px 0;
      border-left: 4px solid #e74c3c;
    }
    .quest-label {
      font-weight: bold;
      color: #2c3e50;
    }
    .quest-value {
      color: #34495e;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #e74c3c;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 20px;
    }
    .signature {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #eee;
      text-align: center;
      color: #7f8c8d;
    }
  </style>
`;

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email credentials not configured');
    return { success: false, error: 'Email configuration missing' };
  }

  const mailOptions = {
    from: `"RPG Portfolio" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `🎮 New Quest Received: ${subject}`,
    html: `
      ${emailStyles}
      <div class="container">
        <div class="header">
          <h1>🎮 New Quest Received!</h1>
        </div>
        <div class="content">
          <div class="quest-title">A New Adventurer Has Arrived!</div>
          <div class="quest-details">
            <p><span class="quest-label">Adventurer's Name:</span> <span class="quest-value">${name}</span></p>
            <p><span class="quest-label">Contact Scroll:</span> <span class="quest-value">${email}</span></p>
            <p><span class="quest-label">Quest Title:</span> <span class="quest-value">${subject}</span></p>
          </div>
          <div class="quest-details">
            <p><span class="quest-label">Quest Message:</span></p>
            <p>${message}</p>
          </div>
          <div class="signature">
            <p>Quest received at: ${new Date().toLocaleString()}</p>
            <p>May your response be swift and your words be true!</p>
          </div>
        </div>
        <div class="footer">
          <p>⚔️ RPG Portfolio - Quest Management System ⚔️</p>
        </div>
      </div>
    `,
  };

  try {
    console.log('Attempting to send contact email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error };
  }
}

export async function sendNewsletterConfirmation(email: string) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email credentials not configured');
    return { success: false, error: 'Email configuration missing' };
  }

  const mailOptions = {
    from: `"RPG Portfolio" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: '🎮 Welcome to the Guild Newsletter!',
    html: `
      ${emailStyles}
      <div class="container">
        <div class="header">
          <h1>Welcome to the Guild!</h1>
        </div>
        <div class="content">
          <div class="quest-title">You've Joined the Adventure!</div>
          <div class="quest-details">
            <p>Greetings, brave adventurer!</p>
            <p>You have successfully joined our guild's newsletter. As a member, you'll be the first to know about:</p>
            <ul>
              <li>🎯 New quests and challenges</li>
              <li>⚔️ Latest adventures and achievements</li>
              <li>📜 Updates from the realm</li>
              <li>🎨 New magical artifacts and creations</li>
            </ul>
          </div>
          <div class="quest-details">
            <p>Your scroll of contact (${email}) has been added to our guild's records.</p>
            <p>Fear not, for we shall only send you the most important messages from our realm!</p>
          </div>
          <div class="signature">
            <p>Best regards,</p>
            <p>Bhargav Adepu</p>
            <p>Guild Master & Full Stack Developer</p>
          </div>
        </div>
        <div class="footer">
          <p>⚔️ RPG Portfolio - Guild Newsletter ⚔️</p>
        </div>
      </div>
    `,
  };

  try {
    console.log('Attempting to send newsletter confirmation...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Newsletter confirmation sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending newsletter confirmation:', error);
    return { success: false, error };
  }
} 