import { LogEntity, LogSeverityLevel } from "./log.entity";


describe('LogEntity', () => {
    const dataObj = {
        message: 'Hola mundo',
        level: LogSeverityLevel.high,
        origin: 'log.entity.test.ts',
    };
    test('should create a LogEntity instance', () => {


        const log = new LogEntity(
            dataObj
        );

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe(dataObj.message);
        expect(log.origin).toBe(dataObj.origin);
        expect(log.level).toBe(dataObj.level);
        expect(log.createdAt).toBeInstanceOf(Date);

    });

    test('should create a LogEntity instance from JSON', () => {
        const json = `{ "level": "low", "message": "Service https://www.google.com working", "createdAt": "2025-09-23T10:49:35.270Z", "origin": "check-service.ts" }`;

        const log = LogEntity.fromJson(json);

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe("Service https://www.google.com working");
        expect(log.origin).toBe("check-service.ts");
        expect(log.level).toBe("low");
        expect(log.createdAt).toBeInstanceOf(Date);
    });

    test('should create a LogEntity instance from Object', () => {
        const log = LogEntity.fromObject(dataObj);


        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe(dataObj.message);
        expect(log.origin).toBe(dataObj.origin);
        expect(log.level).toBe(dataObj.level);
        expect(log.createdAt).toBeInstanceOf(Date);
    });
})