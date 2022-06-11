import GetSinglePage from "../models/photographer.js"

export default class ProfilFactory {
    constructor(data, idUrl) {
        return new GetSinglePage(data, idUrl)
    }
}
