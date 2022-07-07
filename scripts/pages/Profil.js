import AllPhotographers from "api/Api.js"

import ProfilFactory from "factories/ProfilFactory.js"

import PhotographersGalleryFactory from "factories/PhotographersGallery.js"

import Lightbox from "utils/Lightbox.js" 

import ContactForm from "utils/contactForm.js"

let PHOTOGRAPHERS = await new AllPhotographers(
    "./data/fisheye-data.json"
  ).getPhotos();
const medias = PHOTOGRAPHERS.filter((data) => data.photographerId === parseInt(new URL(window.location.href).searchParams.get("id")))


export default class Profil {
    constructor() {
        this.userInfoProfil = document.getElementById("photograph-header")
        this.userImagesProfil = document.getElementById("images-gallery")
        this.likesElement = document.getElementById("likes_price")
        
       
        this.mediasApi = new AllPhotographers("./data/fisheye-data.json")

        this.idUrl = new URL(window.location.href).searchParams.get("id")

    }
    async displayCardPhotographers() {
        const photographersData = await this.mediasApi.getPhotographers()
        const data = photographersData
        data.map((info) => {
            if(info.id == this.idUrl){
                this.userInfoProfil.innerHTML = 
                `<div class="photograph-info">
                    <h1 class="photographer_name">${info.name}</h1>
                    <h2 class="photographer_city">${info.city}, ${info.country}</h2>
                    <p class="photographer_tagline">${info.tagline}</p>
                </div>
                <button id="contact_button"  aria-label="Contact Me">
                    Contactez-moi
                </button>
                <div class="photograph-avatar">
                    <img src="./assets/photographers/photographerId/${info.portrait}" alt="photo de ${info.name}">
                </div>`
            }
        })
    }

    async displayImagesPhotographers(contents) {
     
        contents.forEach((photo) => {
            if (photo.photographerId == parseInt(this.idUrl)) {
               const viewCard =  new PhotographersGalleryFactory(photo)
               viewCard.ViewCardMedia()
            }
          
        })
    }
    /**
     * @param {string} string media of data
     */
    async displayLightBox(){
        // init data of lightbox
 
        medias.map(media => new ProfilFactory(media))
        .filter((media) => media.photographerId === parseInt(this.idUrl))
        
        // link with lightbox file
        let lightbox = new Lightbox(medias)
      
            document
            .querySelectorAll("#images-gallery .cardMedia .thumbnail")
            .forEach((elDom) => {
                elDom.addEventListener("click", (e)=>{
                    lightbox.show(e.currentTarget.dataset.title)
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
        // init data of photographer profil  

        
        likesData
        .filter((media) => media.photographerId === parseInt(this.idUrl))
        .map((mediasingle) => {
         likeTotal = likeTotal + mediasingle.likes
           // the phtotographer total of like
           
            contentLike  =  
            `<div class="banner_info">
                    <p>${likeTotal}</p>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                `

           //like and dislike action
               
           document.querySelector("#likes-"+ mediasingle.id).addEventListener("click", () => {
            let infoBanner = document.querySelector('.banner_info p')
                    if(!document.querySelector("#likes-"+mediasingle.id+ " .fa-heart").classList.contains("liked")){
                        document.querySelector("#likes-"+mediasingle.id+ " .fa-heart").classList.add('liked')
                        infoBanner.innerHTML++
                        document.querySelector("#likes-"+mediasingle.id+ " p").innerHTML++
                    } else{
                        document.querySelector("#likes-"+mediasingle.id+ " .fa-heart").classList.remove('liked')
                        infoBanner.innerHTML--
                        document.querySelector("#likes-"+mediasingle.id+ " p").innerHTML--
                    }
                })
            })   
            // the phtotographer pricce by day
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
       
        this.likesElement.innerHTML = contentLike + contentPrice  
    } 
   
    /**
     * @param {string} string media of data
     */
     async displayContactModal(){
        // init data of lightbox
        const conctactinfo = await this.mediasApi.getPhotographers()


        conctactinfo.map((contactInfo) => {
            let newcontact = new ContactForm(contactInfo)
            if (contactInfo.id == this.idUrl) { 
                window.onload=function(){
                    let el = document.getElementById("contact_button")
                    el.addEventListener("click", (e)=>{
                        newcontact.showModal(e)
                    })
                }
            }     
        })
    }
     /**
     * @param {string} string media of data
     * 
     * Filter Media Profil Photographer
     */
    async displaySortFilter(){
         
        document.querySelector("#btn").addEventListener("click", (e) => {
            e.preventDefault();
            this.display(medias);
          });
          document.querySelectorAll(".option").forEach((elt) => {
                const select = document.querySelector("#dropdown")
                const arrow = document.querySelector(".arrow")
                const selectLabel = document.querySelector("#select-label")
            elt.addEventListener("click", (evt) => {
                document.querySelectorAll(".cardMedia").forEach((elt) => {
                    elt.remove();
              });
              
                const title = evt.target.value;
                selectLabel.innerText = title
                select.classList.toggle('hidden')
                arrow.classList.toggle('active')
              switch (title) {
                case "Popularité":
                  console.log("Popularité");
                  medias?.sort(function (a, b) {
                    return b.likes - a.likes;
                  });
                  this.displayImagesPhotographers(medias);
                  break;
                case "Date":
                  console.log("Date");
                  medias?.sort(function (a, b) {
                    return new Date(b.date) - new Date(a.date);
                  });
                  this.displayImagesPhotographers(medias);
                  break;
                case "Titre":
                  console.log("Titre");
                  medias?.sort(function (a, b) {
                    return a.title?.localeCompare(b.title);
                  });
                  this.displayImagesPhotographers(medias);
                  break;
              }
              this.displayLightBox()
              this.displayLikes()
            });
            
          });
      
    }
    display(){
        const select = document.querySelector("#dropdown")
        const arrow = document.querySelector(".arrow")

        select.classList.toggle('hidden')
        arrow.classList.toggle('active')
    }

}

const app = new Profil()
app.displayCardPhotographers()
app.displayImagesPhotographers(medias)
app.displayLightBox()
app.displayLikes()
app.displayContactModal()
app.displaySortFilter()





