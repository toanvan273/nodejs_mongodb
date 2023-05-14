import express from 'express'
import * as dotenv from 'dotenv'
import {usersRouter, studentsRouter} from './routes/index.js'
dotenv.config() // must have
const app = express();
const PORT = process.env.PORT || 3002;
// routers
app.use('/users', usersRouter)
app.use('/students', studentsRouter)

app.get('/', (req,res) => {
    res.send('Hello Nodejs 2023')
})

app.listen(PORT, () => {
    console.log(`listening port: ${PORT}`)
})