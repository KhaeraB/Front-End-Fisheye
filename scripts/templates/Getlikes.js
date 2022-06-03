export default class GetLikes{
    constructor(media) {
        this._media = media
        this.$likesElement = document.getElementById('likes_price')
        this.idUrl = new URL(window.location.href).searchParams.get("id")

    }
     
    async createUserLikes() {
    
       const likes_price = 
        `
            <div class="banner_info">
            <p>${this._media.likes}</p>
            <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
            <div class="banner_info price">
            </div>
        `
        this.$likesElement.innerHTML =likes_price
        

    }   
}