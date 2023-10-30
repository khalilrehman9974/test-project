import sendGrid from '@sendgrid/mail';
import {logger} from '../util';
import {emailConfig} from '../config/email';

export class MailProvider {
  /**
   * sendEmail
   * @param from
   * @param to
   * @param subject
   * @param plainTextContent
   * @param htmlContent
   * @returns
   */
  public async sendEmail(
    from: string,
    to: string,
    subject: string,
    htmlContent: string
  ) {
    sendGrid.setApiKey(emailConfig.email_key);

    const msg: any = {
      from: from ? from : emailConfig.email_from,
      to: to,
      subject: subject,
      html: htmlContent,
    };

    return new Promise(resolve => {
      sendGrid
        .send(msg)
        .then(response => {
          console.log('Email Sent, Got response: ', response);
          logger.info('MAIL_SENT_RESPONSE', {response, emailConfig});
        })
        .catch(err => {
          logger.error('MAIL_FAILED', {err, emailConfig});
        });
      resolve(true);
    });
  }
}
