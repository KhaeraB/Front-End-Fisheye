import GetSinglePage from "../models/photographer.js"

export default class ProfilFactory {
    constructor(data, idUrl, namePhotographer) {
        // Si le type correspond à l'ancienne API, alors retourne moi l'ancien formattage
         
        return new GetSinglePage(data, idUrl, namePhotographer)
        
    }
}
