export default class GetVideoGallery {
    constructor(media) {
        this._media = media
        this.galleryElement = document.createElement("article");
        
    }

    createUserGalleries() {
        this.galleryElement.setAttribute("class", "cardImage");
          /* type du media */
        
        const video = `
            <video  class="thumbnail" height="240"  >
                <source src="../../assets/photographers/media/${this._media.video}" type="video/mp4">
            </video>
           `; 

        const description = `
            <div class="description">
                <p class="title">${this._media.title}</p>
                <div class="likes">
                    <p>${this._media.likes} </p>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
            </div>`; 

       


            this.galleryElement.innerHTML = video + description;
            return this.galleryElement;        
    }
}