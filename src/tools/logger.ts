import { Logger, createLogger, format, transports } from 'winston';
import { TransformableInfo } from 'logform';
import config from './Config';
const { combine, timestamp, printf } = format;

const myFormat = (label: string) =>
    printf(({ message, timestamp, level }) => `${timestamp} [${level}][${label.split(' ').join('_')}] => ${message}`);

const checkLogger = (label: string) => (info: TransformableInfo) => {
    const type = label.split('.')[0];
    const modes: string[] = config.LOGGER[type];
    if (!modes || modes.includes(info.level)) {
        return info;
    }
    return false;
};

const _createLogger = (label: string) =>
    createLogger({
        format: combine(
            format(checkLogger(label))(),
            format.splat(),
            timestamp(),
            format.colorize({ all: true }),
            myFormat(label)
        ),
        transports: [new transports.Console()],
    });

const logger = _createLogger('All');

export { logger as default, Logger, _createLogger as createLogger };
