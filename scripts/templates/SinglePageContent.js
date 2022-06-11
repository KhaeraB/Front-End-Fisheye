export default class HeaderContentProfil{
    constructor(photographers) {
        this._photographers = photographers
        this.$infosElement = document.querySelector('#main .photograph-info')
        this.$avatarElement = document.querySelector('#main .photograph-avatar')
    }
    
    createUserInfoCard() {
         // Ajout l'avatar du photograph-info  */
        const infoPhotographer = 
            `<h1 class="photographer_name">${this._photographers.name}</h1>
            <h2 class="photographer_city">${this._photographers.city}, ${this._photographers.country}</h2>
            <p class="photographer_tagline">${this._photographers.tagline}</p>`
        
        
            // Ajout l'avatar du photograph-avatar  */
       const avatar = 
        `<img src="${this._photographers.portrait}" alt="photo de ${this._photographers.name}">`
      
        

        this.$infosElement.innerHTML = infoPhotographer
        this.$avatarElement.innerHTML = avatar
        return ; 
    }   
}