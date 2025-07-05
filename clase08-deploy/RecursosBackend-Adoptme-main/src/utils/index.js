import bcrypt from 'bcrypt';
import {fileURLToPath} from 'url';
import { dirname } from 'path';


import winston from "winston"

export const createHash = async(password) =>{
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salts);
}

export const passwordValidation = async(user,password) => bcrypt.compare(password,user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

export const logger2=winston.createLogger(
    {
        levels:{
            "grave":0, 
            "medio":1, 
            "leve": 2, 
            "info": 3
        },
        transports:[
            new winston.transports.Console(
                {
                    level: "leve", 
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.colorize(
                            {
                                colors:{
                                    "grave":"red", 
                                    "medio":"yellow",
                                    "leve":"green",
                                    "info":"blue"
                                }
                            }
                        ),
                        winston.format.simple()
                    )   
                }
            )
        ]
    }
)