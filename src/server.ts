import * as http from 'http';

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {})


server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})