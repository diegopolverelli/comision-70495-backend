import { fileURLToPath } from 'url';
import { dirname } from 'path';
import winston from "winston"
import { config } from './config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

// config.MODE
const transporteArchivo = new winston.transports.File({
    level: "warn",
    filename:"./src/log/error.log",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    )
})

const transporteConsola = new winston.transports.Console({
    level: "debug",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.simple()
    )
})

export const logger = winston.createLogger(
    {
        transports: [
            transporteArchivo, 
            // transporteConsola
        ]
    }
)

if(config.MODE!="production"){
    logger.add(transporteConsola)
}