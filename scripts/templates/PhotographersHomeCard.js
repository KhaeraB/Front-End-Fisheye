export default class PhotograpgersHomeCard{
    constructor(photographers) {
        this._photographers = photographers
    }

    createUserCard() {
        const $thumbnail = document.createElement('article')

        const photographerCard = 
        `
        <a href="../photographer.html" id="link" title="${this.name}" >
            <img src="${this.portrait}" alt="photo de ${this.name}">
            
            <h2 alt= "${this.name}">${this.name}</h2>
        </a>
        <h4 alt= "${this.city}, ${this.country}">${this.city}, ${this.country}</h4>
        <p>${this.tagline}</p>
        <small>${this.price}€/jour</small>
        `
        
        
        $thumbnail.innerHTML = photographerCard
        return $thumbnail
    }
}

