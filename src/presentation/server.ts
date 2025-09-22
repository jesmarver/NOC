import { envs } from "../config/plugin/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron.service";
import { EmailService } from "./email/email.service";


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);

const emailService = new EmailService();

export class Server {

    public static start() {
        console.log("Server started...")
        
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository
        // )
        // .execute(["jesusperike@gmail.com", "perike777@gmail.com"]);

        // emailService.sendEmail({
        //     to:'jesusperike@gmail.com',
        //     subject: 'Logs de sistema',
        //     htmlBody: `
        //     <h3>Logs de sistema - NOC</h3>
        //     <p>Excepteur velit adipisicing quis ad esse officia cupidatat cupidatat laborum officia velit adipisicing.</p>
        //     <p>Ver logs adjuntos</p>
        //     `,
        
        // });
        // emailService.sendEmailWithFileSystemLogs(["jesusperike@gmail.com"])

        // Mandar email

        // CronService.createJob('*/5 * * * * *', () => {
        //     const url = "https://www.google.com";
        //     new CheckService(
        //         fileSystemLogRepository,
        //         () => console.log(`${url} is ok`),
        //         (error) => console.log(error),
        //     ).execute(url);

        // });

    }

}