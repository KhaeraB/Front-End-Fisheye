import AllPhotographers from "../api/Api.js"

import ProfilFactory from "../factories/ProfilFactory.js"

import Lightbox from "../utils/Lightbox.js" 

import SortFilter from "../utils/Sort.js"

export default class HeaderSinglePage {
    constructor() {
        this.$userInfoProfil = document.getElementById("photograph-header")
        this.$userImagesProfil = document.getElementById("images-gallery")
        this.$likesElement = document.getElementById("likes_price")
        
        this.$priceEl = document.querySelectorAll("#like_price ")
        this.mediasApi = new AllPhotographers("../data/fisheye-data.json")

        this.idUrl = new URL(window.location.href).searchParams.get("id")

    }
    async displayCardPhotographers() {
        const photographersData = await this.mediasApi.getPhotographers()
        const data = photographersData
        data.map((info) => {
            if(info.id == this.idUrl){
                this.$userInfoProfil.innerHTML = 
                `<div class="photograph-info">
                    <h1 class="photographer_name">${info.name}</h1>
                    <h2 class="photographer_city">${info.city}, ${info.country}</h2>
                    <p class="photographer_tagline">${info.tagline}</p>
                </div>
                <button class="contact_button" onclick="displayModal()">
                    Contactez-moi
                </button>
                <div class="photograph-avatar">
                    <img src="../../assets/photographers/photographerId/${info.portrait}" alt="photo de ${info.name}">
                </div>`
            }
        })
    }

    async displayImagesPhotographers() {
        const galleryPhotographers = await this.mediasApi.getPhotos()
        const imagesData = galleryPhotographers
        
        imagesData
            .filter((media) => media.photographerId === parseInt(this.idUrl))
            .map((mediasingle) => {
                new ProfilFactory(mediasingle, this.idUrl)
            })
        imagesData.forEach((photo) => {
            if (photo.photographerId == parseInt(this.idUrl)) {
                
                const galleryElement = document.createElement("article")
                galleryElement.setAttribute('data-title', `${photo.title}`)
                if ("image" in photo) {
                  
                    galleryElement.setAttribute("class", "cardMedia" )
                    
                    const image = `
                    <img class='thumbnail src-content' data-title="${photo.title}" src="../../assets/photographers/media/${photo.image}" alt="${photo.title}" >
                    <div class="description">
                        <p class="title">${photo.title}</p>
                        <div id="likes-${photo.id}" class="rent">
                            <p>${photo.likes} </p>
                            <i class="fa fa-heart " aria-hidden="true"></i>
                        </div>
                    </div>` 
        
                    galleryElement.innerHTML = image
              
                } else {
                   galleryElement.setAttribute("class", "cardMedia ")
                   galleryElement.setAttribute('data-title', `${photo.title}`) 
                    const video = `
                      <video  class="thumbnail" data-title="${photo.title}" height="240" >
                          <source class="src-content"  src="../../assets/photographers/media/${photo.video}" type="video/mp4" >
                      </video>
                      <div id="video-controls" class="controls" data-state="hidden">
                          <button id="playpause" type="button" data-state="play"><i class="far fa-play-circle"></i></button>
                    </div>
                      <div class="description">
                          <p class="title">${photo.title}</p>
                          <div id="likes-${photo.id}" class="rent">
                              <p>${photo.likes} </p>
                              <i class="fa fa-heart " aria-hidden="true"></i>
                          </div>
                      </div>` 
                      galleryElement.innerHTML = video
                            
                }
                this.$userImagesProfil.append(galleryElement)
            }
          
        })
    }
    async displayLightBox(){
        const mediaList = await this.mediasApi.getPhotos()
        let listMedia = mediaList.map(media => new ProfilFactory(media))
        .filter((media) => media.photographerId === parseInt(this.idUrl))
        let lightbox = new Lightbox(listMedia)
      
            document.querySelectorAll("#images-gallery .cardMedia .thumbnail").forEach(elDom => {
                elDom.addEventListener("click", (e)=>{
                    lightbox.show(e.currentTarget.dataset.title)
                })
            })
        
        
    }

    async displaySortFilter(){
        const getDataSort = await this.mediasApi.getPhotos()
        let sortData = getDataSort.map(info => new ProfilFactory(info))
        .filter((media) => media.photographerId === parseInt(this.idUrl))

        let filter = new SortFilter(sortData)
        document.querySelectorAll("#sortBy select option").forEach(elDom => {
            elDom.addEventListener("click", (e)=>{
                filter.sortBy(e)
            })
        })
    }

    
    async displayLikes() {
        const likesPhotographers = await this.mediasApi.getLikes()
        const likesData = likesPhotographers
        const pricePhotographers = await this.mediasApi.getPhotographers()
        const priceData = pricePhotographers
        let likeTotal = 0
        let contentLike = ""
        let contentPrice = ""

        likesData
        .filter((media) => media.photographerId === parseInt(this.idUrl))
        .map((mediasingle) => {
         likeTotal = likeTotal + mediasingle.likes
            //console.log(mediasingle.likes)
           
            contentLike  =  
            `<div class="banner_info">
                    <p>${likeTotal}</p>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                `

           //console.log(document.querySelector('.banner_info p')) 
               
           document.querySelector("#likes-"+ mediasingle.id).addEventListener("click", () => {
            let infoBanner = document.querySelector('.banner_info p')
                    if(!document.querySelector("#likes-"+mediasingle.id+ " .fa-heart").classList.contains("liked")){
                        console.log(likeTotal++)
                        document.querySelector("#likes-"+mediasingle.id+ " .fa-heart").classList.add('liked')
                        infoBanner.innerHTML++
                        document.querySelector("#likes-"+mediasingle.id+ " p").innerHTML++
                    } else{
                        console.log(likeTotal--)
                        document.querySelector("#likes-"+mediasingle.id+ " .fa-heart").classList.remove('liked')
                        infoBanner.innerHTML--
                        document.querySelector("#likes-"+mediasingle.id+ " p").innerHTML--
                    }
                })
            })   
        priceData
        .map((price) => {
            if (price.id == this.idUrl) {       
                contentPrice = 
                    `<div class="info_price">
                    <p>${price.price} €/ jour</p>        
                    </div>
                    `  
            }

        }) 
        //console.log(document.querySelector("#likes .fa-heart").classList.contains("liked"))
       
        this.$likesElement.innerHTML = contentLike + contentPrice  
    } 


}

const app = new HeaderSinglePage()
app.displayCardPhotographers()
app.displayImagesPhotographers()
app.displayLightBox()
app.displayLikes()
app.displaySortFilter()





