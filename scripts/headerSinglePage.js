import AllPhotographers from "./api/Api.js";

import ProfilFactory from "./factories/profilPhotographer.js";

import GetPhotoGallery from "./templates/GetPhotoGallery.js";
import GetVideoGallery from "./templates/GetVideoGallery.js";

export default class HeaderSinglePage {
    constructor() {
        this.$userInfoProfil = document.getElementById("photograph-header");
        this.$userImagesProfil = document.getElementById("images-gallery");
        this.$likesElement = document.getElementById("likes_price");
        
        this.$priceEl = document.querySelectorAll("#like_price ");
        this.mediasApi = new AllPhotographers("../data/fisheye-data.json");

        this.idUrl = new URL(window.location.href).searchParams.get("id");

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
        const galleryPhotographers = await this.mediasApi.getPhotos();
        const imagesData = galleryPhotographers;
        imagesData
            .filter((media) => media.photographerId === parseInt(this.idUrl))
            .map((mediasingle) => {
                new ProfilFactory(mediasingle, this.idUrl);
            });
        imagesData.forEach((photo) => {
            if (photo.photographerId == parseInt(this.idUrl)) {
                if ("image" in photo) {
                    let MediaTemplate = new GetPhotoGallery(photo, this.idUrl);
                    this.$userImagesProfil.append(
                        MediaTemplate.createUserGalleries()
                    );
                } else {
                    let MediaTemplate = new GetVideoGallery(photo, this.idUrl);
                    this.$userImagesProfil.append(
                        MediaTemplate.createUserGalleries()
                    );
                }
            }
        });
    }

    async displayLikes() {
        const likesPhotographers = await this.mediasApi.getLikes();
        const likesData = likesPhotographers;
        const pricePhotographers = await this.mediasApi.getPhotographers();
        const priceData = pricePhotographers;

        let likeTotal = 0
        let contentLike = ""
        let contentPrice = ""

        likesData
        .filter((media) => media.photographerId === parseInt(this.idUrl))
        .map((mediasingle) => {
            if (mediasingle.photographerId == this.idUrl) {
                likeTotal = likeTotal + mediasingle.likes;
                contentLike  = 
                `<div class="banner_info">
                    <p>${likeTotal}</p>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                `
            }
            
        priceData
        .map((price) => {
            if (price.id == this.idUrl) {       
                contentPrice = 
                    `<div class="info_price">
                    <p>${price.price} €/ jour</p>        
                    </div>
                    `
                return this.$likesElement.innerHTML = contentLike + contentPrice    
            }
        });
           
    });   
           
    } 


}


const app = new HeaderSinglePage();
app.displayCardPhotographers();
app.displayImagesPhotographers();
app.displayLikes();
