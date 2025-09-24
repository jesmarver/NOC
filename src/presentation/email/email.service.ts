import nodemailer from 'nodemailer';
import { envs } from '../../config/plugin/envs.plugin';



export interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[];

}

export interface Attachment {
    filename: string;
    path: string;
}

export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    });

    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const { to, subject, htmlBody, attachments } = options;

        try {
            const sentInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachments,
            });

            return true;
        } catch (error) {

            return false;
        }
    }

    sendEmailWithFileSystemLogs(to: string | string[]): Promise<boolean> {
        const subject = 'Logs del servidor';
        const htmlBody = `
            <h3>Logs de sistema - NOC</h3>
            <p>Excepteur velit adipisicing quis ad esse officia cupidatat cupidatat laborum officia velit adipisicing.</p>
            <p>Ver logs adjuntos</p>
            `;
        const attachments: Attachment[] = [
            {
                filename: 'logs-all.log',
                path: './logs/logs-all.log'
            },
            {
                filename: 'logs-high.log',
                path: './logs/logs-high.log'
            },
            {
                filename: 'logs-medium.log',
                path: './logs/logs-medium.log'
            },
        ];

        return this.sendEmail({
            to: to,
            subject: subject,
            attachments: attachments,
            htmlBody: htmlBody,
        });
    }

}