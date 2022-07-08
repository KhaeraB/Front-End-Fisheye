import {
    disableBodyScroll,
    enableBodyScroll
} from './body-scroll-lock.js'
export default class Lightbox {
    /**
     * @param {string} url du media
     */
    constructor(listElement) {
        this.currentElement = null
        this.listElement = listElement
        this.lightboxnext =  document.querySelector("#modal-lightbox .content .lightbox__next")
        this.lightboxprev =  document.querySelector("#modal-lightbox .content .lightbox__prev")
        this.lightboxclose = document.querySelector("#modal-lightbox .content .lightbox__close")
        this.trigger = document.getElementsByClassName("cardMedia")
        this.contentMedia = document.querySelector("#modal-lightbox .content #lightbox__container #lightbox__content")
        this.manageElement()
        this.idUrl = new URL(window.location.href).searchParams.get("id");
        this.target = document.querySelector("#modal-lightbox")

    }
    // affichage de la lightbox
    show(title) {
        this.currentElement = this.getTitle(title)
        this.display()
        disableBodyScroll(this.display)
        
    }
// fleche de gauche retour
    prev() {
        let index = this.listElement.findIndex(element => element.title == this.currentElement.title)
        if (index == 0) {
            this.currentElement = this.listElement[this.listElement.length - 1]
        } else {
            this.currentElement = this.listElement[index - 1]
        }
        this.display()

    }
// fleche de gauche avant
    next() {
        let index = this.listElement.findIndex(element =>element.title == this.currentElement.title)
        if (index == this.listElement.length - 1) {
            this.currentElement = this.listElement[0]
        } else {
            this.currentElement = this.listElement[index + 1]
        }
        this.display()

    }
// crroix fermeture
    close() {
        this.target.classList.remove("show")
        enableBodyScroll(this.display)
    }
    

    
// gestion des events
    manageElement() {
       this.lightboxnext.addEventListener('click', () => {
            this.next()
        })
       this.lightboxprev.addEventListener('click', () => {
            this.prev()
        })
        this.lightboxclose.addEventListener('click', (e) => {
            if (e.target == e.currentTarget) {
                e.preventDefault()
                this.close()
            }
        })
        /**
         * les entrés clavier sur la lightbox
         * @param {KeybordEvent} e 
         */
        document.addEventListener('keyup', (el) =>{
                switch(el.key){
                   
                    case "ArrowLeft" :
                        this.prev(); 
                        break; 
                    case "ArrowRight": 
                        this.next();
                        break; 
                    case "Escape" : 
                        this.close(); 
                        break; 
                }
        })

    }
// Affichage de la modal HTML pour le DOM
    display() {
        if (this.currentElement.image) {
            this.contentMedia.innerHTML = `
            <img class='src-content' data-title="${this.currentElement.title}" src="./assets/photographers/media/${this.currentElement.image}" alt="${this.currentElement.title}" aria-label="Liliac Breasted roller" >
            <p id="lightbox__title"> ${this.currentElement.title}</p>`
            this.target.classList.add("show")
        } else {
            this.contentMedia.innerHTML = this.contentMedia.innerHTML = ` 
            <video  title="${this.currentElement.title}" data-title="${this.currentElement.title}" controls  >
                <source class="src-content"  src="./assets/photographers/media/${this.currentElement.video}" type="video/mp4" aria-label="Liliac Breasted roller">
            </video> 
            <p id="lightbox__title"> ${this.currentElement.title}</p>`
            this.target.classList.add("show")
        }
    }

// récupération par titre 
    getTitle(title) {
        return this.listElement.find(element => element.title == title)
    }


}