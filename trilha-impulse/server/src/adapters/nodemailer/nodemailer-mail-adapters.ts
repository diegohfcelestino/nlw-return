import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "868df43baf96e7",
    pass: "703ca4a2f96efa"
  }
});

export  class NodemailerMailAdapter implements MailAdapter {
  
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
    from: "Equipe Feedget <notification@feedget.com>",
    to: "Diego Ferreira <diegohfcelestino@gmail.com>",
    subject,
    html: body,
  })
  };
    
}