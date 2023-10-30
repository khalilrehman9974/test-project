import {logger} from '../util';
import {MailProvider} from '../providers/mail';
import {EmailProperties} from '../business_objects/auth';
import {sendNotification} from '../providers/email_service';

export class MailService {
  private mailProvider = new MailProvider();
  public async sendEMail(reqEmail: EmailProperties): Promise<boolean> {
    try {
      let result: any = await sendNotification(
        reqEmail.emailSubject,
        reqEmail.emailHTMLContent,
        reqEmail.emailTo
      );
      result = true;
      return result;
    } catch (error) {
      //Error while sending the SMS
      logger.error('Util_SERVICE_SNDEMAIL_ERROR', error);
      return false;
    }
  }
}
