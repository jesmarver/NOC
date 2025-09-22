

export enum LogSeverityLevel {
    low = "low",
    medium = "medium",
    high = "high",
}

export interface LogEntityOptions{
    message: string;
    level: LogSeverityLevel;
    origin: string;
    createdAt?: Date;
}


export class LogEntity {
    public level: LogSeverityLevel; // Enum
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor(options: LogEntityOptions) {
        const {level, message, createdAt = new Date(), origin} = options;
        this.level = level;
        this.message = message;
        this.createdAt = createdAt;
        this.origin = origin;
    }

    static fromJson = (jsonData: string): LogEntity => {
        const {message, level, createdAt, origin} = JSON.parse(jsonData);

        const log = new LogEntity({
            message: message,
            level: level,
            createdAt: createdAt,
            origin: origin,
        });

        return log;
    }


}