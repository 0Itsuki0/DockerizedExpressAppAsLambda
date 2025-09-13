import express, { Request, Response } from 'express'

const app = express()
app.use(express.raw({ type: '*/*' }))

const port = 8080

app.get('/', async (_: Request, res: Response) => {
    res.status(200).send("Hello!")
})

// For Web adaptor Readiness Check: https://github.com/awslabs/aws-lambda-web-adapter?tab=readme-ov-file#readiness-check
// By default, Lambda Web Adapter will send HTTP GET requests to the web application at http://127.0.0.1:8080/.
// The port and path can be customized with two environment variables: AWS_LWA_READINESS_CHECK_PORT and AWS_LWA_READINESS_CHECK_PATH.
// Lambda Web Adapter will retry this request every 10 milliseconds until the web application returns an HTTP response (status code >= 100 and < 500) or the function times out.
// After passing readiness check, Lambda Web Adapter will start Lambda Runtime and forward the invokes to the web application.
app.get('/health-check', async (_: Request, res: Response) => {
    res.sendStatus(200)
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
