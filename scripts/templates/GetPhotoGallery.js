export default class GetPhotoGallery{
    constructor(media) {
        this._media = media
        this.$galleryElement = document.getElementById('images-gallery')
    }
     
    async createUserGalleries() {
        const galleries = `
            <article id='cardImage'>
            <img class='thumbnail' src="${this._media.image}" alt="${this._media.title}">
            <div class="description">
                <p class="title">${this._media.title}</p>
                <div class="likes">
                    <p>${this._media.likes} </p>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
            </div>
            </article>
            `

        this.$galleryElement.innerHTML = galleries

    }   
}