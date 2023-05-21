import express from 'express'
import * as dotenv from 'dotenv'
import {usersRouter, studentsRouter} from './routes/index.js'
dotenv.config() // must have
import connect from './database/database.js'
import checkToken from './authentication/auth.js'
const app = express();
const PORT = process.env.PORT || 3002;

app.use(checkToken) // check tokenJwt before go on app
app.use(express.json())
// routers
app.use('/users', usersRouter)
app.use('/students', studentsRouter)

app.get('/', (req,res) => {
    res.send('Hello Nodejs 2023')
})

app.listen(PORT,async () => {
    await connect()
    console.log(`listening port: ${PORT}`)
})
