export default class PhotographersGalleryFactory{
    constructor(photo){
        this.photo = photo
        this.galleryElement = document.createElement("article")
        this.userImagesProfil = document.getElementById("images-gallery")
        this.userImagesProfil.append(this.galleryElement)
    }

    ViewCardMedia(){
        this.galleryElement.setAttribute('data-title', `${this.photo.title}`)
        this.galleryElement.setAttribute("aria-label", "Liliac Breasted roller, closeup view")
        if ("image" in this.photo) {
                      
            this.galleryElement.setAttribute("class", "cardMedia" )
           
            const image = `
            <a href="#" aria-label="ouvrir la media">
                <img class='thumbnail src-content' data-title="${this.photo.title}" src="../../assets/photographers/media/${this.photo.image}" alt="${this.photo.title}" >
            </a>
            <div class="description">
                <p class="title">${this.photo.title}</p>
                <div id="likes-${this.photo.id}" class="rent">
                    <p>${this.photo.likes} </p>
                    <i class="fa fa-heart " aria-hidden="true" aria-label="likes"></i>
                </div>
            </div>` 
    
            this.galleryElement.innerHTML = image
      
        } else {
           this.galleryElement.setAttribute("class", "cardMedia ")
           this.galleryElement.setAttribute('data-title', `${this.photo.title}`) 
            const video = `
            <a href="#" aria-label="ouvrir la media">
                <video  class="thumbnail" data-title="${this.photo.title}" height="240" >
                  <source class="src-content"  src="../../assets/photographers/media/${this.photo.video}" type="video/mp4" >
                </video>
                <div id="video-controls" class="controls" data-state="hidden">
                  <button id="playpause" type="button" data-state="play"><i class="far fa-play-circle"></i></button>
                </div>
            </a>
              <div class="description">
                  <p class="title">${this.photo.title}</p>
                  <div id="likes-${this.photo.id}" class="rent">
                      <p>${this.photo.likes} </p>
                      <i class="fa fa-heart " aria-hidden="true" aria-label="likes"></i>
                  </div>
              </div>` 

            this.galleryElement.innerHTML = video           
        }
    }
    
}
