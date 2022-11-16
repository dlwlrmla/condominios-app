import express from 'express'
const app = express()
import { connect } from './Components/db.js'
import './Components/db.js'
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World')
    }
)
export const getUsers = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM users')
    res.json(rows)
}
app.get('/users', getUsers)


app.listen(3000, () => console.log('Server running on port 3000'))