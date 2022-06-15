export default class PhotographersHomeCard{
    constructor(photographers) {
        this._photographers = photographers
    }
    
    createUserCard() {
        const homeThumbnail = this._photographers.map(photographer => 
           
            `<article> 
            <a href="../photographer.html?id=${photographer.id}" id="link" title="${photographer.name}" >
                <img src="../../assets/photographers/photographerId/${photographer.portrait}" alt="photo de ${photographer.name}">
                <h2 alt= "${photographer.name}">${photographer.name}</h2>
            </a>

            <h4 alt= "${photographer.city}, ${photographer.country}">${photographer.city}, ${photographer.country}</h4>

            <p>${photographer.tagline}</p>

            <small>${photographer.price}€/jour</small>
            </article>`
            
            ) 
 
        
            return  homeThumbnail.join('')
        

    }

}

