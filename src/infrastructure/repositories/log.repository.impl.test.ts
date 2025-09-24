import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepositoryImpl } from "./log.repository.impl";


describe('LogRepositoryImpl', () => {

    const mockLogDatasource = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    };

    const logRepository = new LogRepositoryImpl(mockLogDatasource);

    beforeEach(()=>{
        jest.clearAllMocks();
    })


    test('saveLog should call the datasource with arguments', async() => {
        
        const newLog = new LogEntity({
            level: LogSeverityLevel.low,
            message: 'test-message',
            origin: 'log.repository.impl.test.ts',
        });
        await logRepository.saveLog(newLog);

        expect(mockLogDatasource.saveLog).toHaveBeenCalledWith(newLog);
    });

    test('getLogs should call the datasource with arguments', async() => {
        const level = LogSeverityLevel.low;
        await logRepository.getLogs(level);

        expect(mockLogDatasource.getLogs).toHaveBeenCalledWith(level);
    });
});