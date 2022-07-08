import GetHomePhotographers from "../models/home.js "
/**
* @param {Data} data media of data
*/
export default class PhotographerFactory {
    constructor(data) {
       
        if (data) {
            return new GetHomePhotographers(data)
        } else {
            throw 'Unknown type format'
        }
    }
}