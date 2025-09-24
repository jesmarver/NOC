import mongoose from "mongoose";
import { envs } from "../../config/plugin/envs.plugin";
import { LogModel, MongoDatabase } from "../../data/mongo";
import { MongoLogDatasource } from "./mongo-log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";


describe('MongoLogDatasource', () => {
    const logDatasource = new MongoLogDatasource();

    const log = new LogEntity({
            level: LogSeverityLevel.medium,
            message: 'test-message',
            origin: 'mongo-log.datasource.ts',
        });

    beforeAll(async () => {
        await MongoDatabase.connect({
            dbName: envs.MONGO_DB_NAME,
            mongoUrl: envs.MONGO_URL,
        });
    });

    afterEach(async () => {
        await LogModel.deleteMany();
    })

    afterAll(async () => {
        mongoose.connection.close();
    });
    

    test('should create a log', async () => {
        const logSpy = jest.spyOn(console, 'log');
        

        await logDatasource.saveLog(log);

        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledWith("Mongo Log created: ", expect.any(String));
    });

    test('should get logs', async () => {

        await logDatasource.saveLog(log);
        await logDatasource.saveLog(log);

        const logs = await logDatasource.getLogs(LogSeverityLevel.medium);

        expect(logs).toHaveLength(2);
        expect(logs[0].level).toBe(LogSeverityLevel.medium);

    });
});