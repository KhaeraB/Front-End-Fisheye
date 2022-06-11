import AllPhotographers from "./api/Api.js";

import ProfilFactory from "./factories/profilPhotographer.js";

import HeaderContentProfil from "./templates/SinglePageContent.js";
import GetPhotoGallery from "./templates/GetPhotoGallery.js";
import GetVideoGallery from "./templates/GetVideoGallery.js";

import GetLikes from "./templates/Getlikes.js";

export default class HeaderSinglePage {
    constructor() {
        this.$userInfoProfil = document.querySelectorAll(
            "#main #photograph-header"
        );
        this.$userImagesProfil = document.getElementById("images-gallery");
        this.$likesElement = document.querySelectorAll("#likes_price");
        this.$priceEl = document.querySelector("#likes_price .banner_info_price p");
        this.mediasApi = new AllPhotographers("../data/fisheye-data.json");

        this.idUrl = new URL(window.location.href).searchParams.get("id");

    }
    async displayCardPhotographers() {
        const photographersData = await this.mediasApi.getPhotographers()
        const data = photographersData
        const InfoPhotographers = data.map(medias => new ProfilFactory(medias))

        InfoPhotographers.forEach(user => {
            if (this.idUrl == user.id) {
                const ProfilTemplate = new HeaderContentProfil(user, this.idUrl);
                
                this.$userInfoProfil.append(
                    ProfilTemplate.createUserInfoCard()
                )
                /*this.$priceEl.append(
                    `${user.photographerPrice} € / jour`
                );*/
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
        let likeTotal = 0
        likesData
            .filter((media) => media.photographerId === parseInt(this.idUrl))
            .map((mediasingle) => {
                new ProfilFactory(mediasingle, this.idUrl);
            });
        likesData.forEach((like) => {
            if (like.photographerId == this.idUrl) {
                likeTotal = likeTotal + like.likes;
                 
            }
        })
        let LikeTemplate = new GetLikes(likeTotal, this.idUrl);
        this.$likesElement.append(
            LikeTemplate.UserTotalLikes()
        );
    } 

}


const app = new HeaderSinglePage();
app.displayCardPhotographers();
app.displayImagesPhotographers();
app.displayLikes();
