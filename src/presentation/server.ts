import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron.service";
import { EmailService } from "./email/email.service";


const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
);

const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource(),
);

const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource(),
);

const emailService = new EmailService();

export class Server {

    public static async start() {
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

        // const logs = await logRepository.getLogs(LogSeverityLevel.low);
        // console.log(logs);
        // const 

        // CronService.createJob('*/5 * * * * *', () => {
        //     const url = "https://www.google.com";
        //     new CheckServiceMultiple(
        //         [fsLogRepository,
        //             mongoLogRepository,
        //             postgresLogRepository,],
        //         () => console.log(`${url} is ok`),
        //         (error) => console.log(error),
        //     ).execute(url);
        // });

    }

}