import express, { Request, Response } from 'express'
import serverlessExpress from '@codegenie/serverless-express'


const app = express()
app.use(express.raw({ type: '*/*' }))

const port = 8080

app.get('/', async (_: Request, res: Response) => {
    res.status(200).send("Hello!")
})

export const handler = serverlessExpress({ app });
