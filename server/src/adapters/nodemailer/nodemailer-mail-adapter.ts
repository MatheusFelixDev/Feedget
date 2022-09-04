import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a6b2c12d6c61b8",
      pass: "4c607c9ed6fa71"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Switch company <Switch@company.com>',
            to: 'Matheus Felix <matheusfelix.dev@gmail.com>',
            subject,
            html: body,
    
        });
    }
}