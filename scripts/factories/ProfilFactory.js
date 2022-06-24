import GetSinglePage from "../models/photographer.js"

export default class ProfilFactory {
    constructor(data) {
        return new GetSinglePage(data)
    }
}
