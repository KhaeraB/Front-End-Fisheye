export default class GetLikes{
    constructor(likeTotal) {
        this.likeTotal = likeTotal
        this.$likesElement = document.getElementById('likes_price');
    } 
         
    UserTotalLikes() {
        const likes = 
            `
            <div class="banner_info">
            <p>${this.likeTotal}</p>
            <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
            <div class="banner_info_price">
            <p></p>
            </div>
            `
            this.$likesElement.innerHTML = likes;  
            return this.$likesElement;  
    } 
    
}