import GetHomePhotographers from "../models/home.js "

export default class PhotographerFactory {
    constructor(data) {
       
        if (data) {
            return new GetHomePhotographers(data)
        } else {
            throw 'Unknown type format'
        }
    }
}