import express from 'express'
import esjs from './routes/esjs'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/:code', esjs)

export default app
