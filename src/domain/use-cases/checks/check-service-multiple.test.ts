import { LogEntity } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";
import { CheckServiceMultiple } from "./check-service-multiple";

describe('CheckServiceMultiple UseCase', () => {


    const mockRepo1 = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    };
    const mockRepo2 = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    };
    const mockRepo3 = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    };

    const successCallback = jest.fn();
    const errorCallback = jest.fn();

    const checkServiceMultiple = new CheckServiceMultiple([mockRepo1, mockRepo2, mockRepo3], successCallback, errorCallback);

    test('should call success when fetch returns true', async () => {
        const url = 'https://www.google.com';
        const wasOk = await checkServiceMultiple.execute(url);

        expect(wasOk).toBeTruthy();

        expect(successCallback).toHaveBeenCalled();
        expect(errorCallback).not.toHaveBeenCalled();

        expect(mockRepo1.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
        expect(mockRepo2.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
        expect(mockRepo3.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));

    })
});