import express from 'express'
const app = express()
import cors from "cors"
import routes from "./routes/routes.js"


app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log('Server running on port 3000'))