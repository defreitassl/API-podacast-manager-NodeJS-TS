import * as http from 'http';
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcasts-controller"

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {

    const [baseUrl, queryString] = req.url ?.split("?") ?? ["", ""]

    if (req.method == "GET" && baseUrl === "/api/list") {
        await getListEpisodes(req, res)
    } 

    if (req.method === "GET" && baseUrl === "/api/episode") {
        await getFilterEpisodes(req, res)
    }
})


server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})