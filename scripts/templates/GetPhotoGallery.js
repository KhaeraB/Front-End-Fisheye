export default class GetPhotoGallery{
    constructor(media) {
        this._media = media
        this.$galleryElement = document.getElementById('images-gallery')
    }
     
    async createUserGalleries() {
        
        const image = `
            <article id='cardImage'>
            <img class='thumbnail type-contenu' src="${this._media.image}" alt="${this._media.title}">
            <div class="description">
                <p class="title">${this._media.title}</p>
                <div class="likes">
                    <p>${this._media.likes} </p>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
            </div>
            </article>
            `
            /*const video = `
            <article id='cardImage'>
            <video class="thumbnail type-contenu" height="240" controls>
                <source src="${this._media.image}" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
            </video>
            <div class="description">
                <p class="title">${this._media.title}</p>
                <div class="likes">
                    <p>${this._media.likes} </p>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
            </div>
            </article>
            `*/

        this.$galleryElement.innerHTML = image
        return this.$galleryElement
    }   
}