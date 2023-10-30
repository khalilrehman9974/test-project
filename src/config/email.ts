import dotenv from 'dotenv';
dotenv.config();

export const emailConfig = {
  email_key:
    process.env.MAIL_KEY ||
    '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',
  email_from: process.env.EMAIL_FROM || 'faiqfaiqfaiq@gmail.com',
};
