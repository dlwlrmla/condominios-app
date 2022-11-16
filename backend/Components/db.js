import mysql from 'mysql2/promise'
import {config} from './config.js'
export const connect = async () => {
    const connection = await mysql.createConnection(config)
    return connection
}
