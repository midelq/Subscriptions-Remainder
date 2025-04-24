import emailTemplates from './email-template.js';
import dayjs from 'dayjs';
import transporter, { accountEmail } from '../config/nodemailer.js';

export const sendReminderEmail = async ({ to, type, subscription }) => {
  if (!to || !type) throw new Error('Missing required parameters');

  const template = emailTemplates.find((t) => t.label === type);
  if (!template) {
    console.error('Available template types:', emailTemplates.map(t => t.label));
    throw new Error('Invalid email type');
  }

  const userName = subscription?.user?.name || 'User';

  const mailInfo = {
    userName,
    subscriptionName: subscription.name,
    renewalDate: dayjs(subscription.renewalDate).format('MMM D, YYYY'),
    planName: subscription.name,
    price: `${subscription.currency} ${subscription.price} (${subscription.frequency})`,
    paymentMethod: subscription.paymentMethod,
  };

  const subject = template.generateSubject(mailInfo);
  const message = template.generateBody(mailInfo);

  const mailOptions = {
    from: accountEmail,
    to,
    subject,
    html: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
};
