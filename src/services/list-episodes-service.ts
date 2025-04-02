import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"


export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const data = await repositoryPodcast()

    if (data.length > 0) {
        responseFormat.statusCode = StatusCode.OK
    } else {
        responseFormat.statusCode = StatusCode.NoContent
    }

    responseFormat.body = data

    return responseFormat
}