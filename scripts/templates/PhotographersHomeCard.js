export default class PhotographersHomeCard{
    constructor(photographers) {
        this._photographers = photographers
        this.$thumbnail = document.createElement('article')
    }
    
    createUserCard() {
        

        const photographerCard = 
        `
        <a href="../photographer.html?id=${this._photographers.id}" id="link" title="${this._photographers.name}" >
            <img src="${this._photographers.portrait}" alt="photo de ${this._photographers.name}">
            
            <h2 alt= "${this._photographers.name}">${this._photographers.name}</h2>
        </a>
        <h4 alt= "${this._photographers.city}, ${this._photographers.country}">${this._photographers.city}, ${this._photographers.country}</h4>
        <p>${this._photographers.tagline}</p>
        <small>${this._photographers.price}€/jour</small>
        `
        
        
        this.$thumbnail.innerHTML = photographerCard
        return this.$thumbnail
    }
}

