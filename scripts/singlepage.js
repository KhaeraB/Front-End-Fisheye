import AllPhotographers from "./api/Api.js"

import ProfilFactory from "./factories/profilPhotographer.js"

import SinglePageContent from "./templates/SinglePageContent.js"
import GetPhotoGallery from "./templates/GetPhotoGallery.js"
import GetLikes from "./templates/Getlikes.js"


export default class SinglePage {
    constructor() {
        this.$userInfoProfil = document.getElementById('photograph-header')
        this.$userImagesProfil = document.getElementById('images-gallery')
        this.$likesElement = document.getElementById('likes_price')
        this.mediasApi = new AllPhotographers('../data/fisheye-data.json')
        this.idUrl = new URL(window.location.href).searchParams.get("id")
        this.namePhotographer
    }
    async displayPhotographers() {
      const photographersData = await this.mediasApi.getPhotographers()
        const data = photographersData
        const InfoPhotographers = data.map(medias => new ProfilFactory(medias, this.idUrl))
   
        InfoPhotographers.forEach(media => {
            if(this.idUrl == media.id){
                const ProfilTemplate = new SinglePageContent(media, this.idUrl)
               
                this.$userInfoProfil.appendChild(
                    ProfilTemplate.createUserInfoCard()
                )
            } 
        })
    }
    async displayImagesPhotographers() {
        const galleryPhotographers = await this.mediasApi.getPhotos()
        const imagesData = galleryPhotographers
        const galleriesImages = imagesData.map(medias => new ProfilFactory(medias, this.idUrl))
    
        galleriesImages.forEach(photo => {
           
            if(photo.photographerId == this.idUrl){
                let PhotoTemplate = new GetPhotoGallery(photo, this.idUrl, this.namePhotographer);
                this.$userImagesProfil.appendChild(
                    PhotoTemplate.createUserGalleries()
                );
            } 
        });
    }  

    async displayLikes() {
        const likesPhotographers = await this.mediasApi.getLikes()
        const likesData = likesPhotographers
        const viewLikes = likesData.map(medias => new ProfilFactory(medias, this.idUrl))
        
        viewLikes.forEach(like => {
            let totalLikes =[]
            if(like.photographerId == this.idUrl){ 
                totalLikes = totalLikes + like.likes
            }
            let LikeTemplate = new GetLikes(like, this.idUrl);
            this.$likesElement.append(
            LikeTemplate.createUserLikes());
            
            
        });
        
    
    } 
    
}

const app = new SinglePage()
app.displayPhotographers() 
app.displayImagesPhotographers()
app.displayLikes()