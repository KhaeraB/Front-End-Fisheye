export default class PhotographerFactory {
    constructor(data, type) {
        // Si le type correspond à l'ancienne API, alors retourne moi l'ancien formattage
        if (type === 'photographersApi') {
            return new Api(data)
        
        } else {
            throw 'Unknown type format'
        }
    }
}