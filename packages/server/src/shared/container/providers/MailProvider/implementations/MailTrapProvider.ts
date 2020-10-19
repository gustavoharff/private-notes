import nodemailer, { Transporter } from 'nodemailer';

import IMailProvider from '../models/IMailProvider';

class MailTrapProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '34e6ab63eaa881',
        pass: '30b6cea3d7913a',
      },
    });

    this.client = transporter;
  }

  public async sendMail(to: string, body: string): Promise<void> {
    await this.client.sendMail({
      from: 'Private Notes <team@privatenotes.com>',
      to,
      subject: 'Password recovery',
      text: body,
    });
  }
}

export default MailTrapProvider;
