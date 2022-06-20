export default class GetPhotoGallery {
    constructor(media) {
        this._media = media
        this.galleryElement = document.createElement("article");
        
    }

    createUserGalleries() {
        this.galleryElement.setAttribute("class", "cardImage lightbox__container", );
    
        const image = `
            <img class='thumbnail src-content' src="../../assets/photographers/media/${this._media.image}" alt="${this._media.title}" onclick="openLightbox()">
            <div class="description">
                <p class="title">${this._media.title}</p>
                <div class="likes">
                    <p>${this._media.likes} </p>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
            </div>`; 

            this.galleryElement.innerHTML = image ;
            return this.galleryElement;        
    }
}