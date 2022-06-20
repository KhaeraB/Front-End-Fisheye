export default class GetVideoGallery {
    constructor(media) {
        this._media = media
        this.galleryElement = document.createElement("article");
        
    }

    createUserGalleries() {
        this.galleryElement.setAttribute("class", "cardImage lightbox__container");
          /* type du media */
        
        const video = `
            <video  class="thumbnail" height="240" onclick="openLightbox()">
                <source class="src-content" src="../../assets/photographers/media/${this._media.video}" type="video/mp4" ">
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause" type="button" data-state="play"><i class="far fa-play-circle"></i></button>
               </div>
            <div class="description">
                <p class="title">${this._media.title}</p>
                <div class="likes">
                    <p>${this._media.likes} </p>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
            </div>`; 

       


            this.galleryElement.innerHTML = video ;
            return this.galleryElement;        
    }
}