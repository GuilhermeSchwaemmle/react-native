import * as express from "express"
import users from './usuarios'

const app = express()

app.use(express.json())
app.use("/user", users)
app.use("/user/:id", users)


const PORT = process.env.PORT
app.listen(PORT, () => { console.log(`executando em http://localhost:${PORT}`) })