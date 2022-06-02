import GetHomePhotographers from "../models/home.js "

export default class PhotographerFactory {
    constructor(data) {
        // Si le type correspond à l'ancienne API, alors retourne moi l'ancien formattage
        if (data) {
            return new GetHomePhotographers(data)
        } else {
            throw 'Unknown type format'
        }
    }
}