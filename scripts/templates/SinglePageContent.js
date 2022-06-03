export default class MainContentPhotographer{
    constructor(photographers) {
        this._photographers = photographers
        this.$infosElement = document.querySelector('#main .photograph-info')
        this.$avatarElement = document.querySelector('#main .photograph-avatar')
        
    }
    
    async createUserInfoCard() {
         // Ajout l'avatar du photograph-info  */
        const infoPhotograph = 
            `<h1 class="photographer_name">${this._photographers.name}</h1>
            <h2 class="photographer_city">${this._photographers.city}, ${this._photographers.country}</h2>
            <p class="photographer_tagline">${this._photographers.tagline}</p>`
        
        
            // Ajout l'avatar du photograph-avatar  */
       const avatar = 
        `<img src="${this._photographers.portrait}" alt="photo de ${this._photographers.name}">`
      
        //const price = 
       //`<p>${this._photographers.price}</p> / jour`



        this.$infosElement.innerHTML = infoPhotograph
        this.$avatarElement.innerHTML = avatar
       
        
    }   
}