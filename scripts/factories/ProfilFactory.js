import GetSinglePage from "../models/photographer.js"
/**
* @param {Data} data media of data
*/
export default class ProfilFactory {
    constructor(data) {
        return new GetSinglePage(data)
    }
}
