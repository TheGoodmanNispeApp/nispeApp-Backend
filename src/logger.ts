import bunyan, { LogLevel } from 'bunyan';
import dotenv from 'dotenv';
dotenv.config();

const log = bunyan.createLogger({ name: 'NispeApp' });
log.level(process.env.BUNYAN_LEVEL as LogLevel);

export default log;
