import { enableBodyScroll, disableBodyScroll } from "./body-scroll-lock.js"
export default class Lightbox{
        /**
         * @param {string} url du media
         */
    constructor(listElement){
        this.currentElement = null
        this.listElement = listElement
        this.contentMedia = document.querySelector("#modal-lightbox .content #lightbox__container #lightbox__content") 
        this.manageElement()
        this.idUrl = new URL(window.location.href).searchParams.get("id");
        this.onKeyUp = this.onKeyUp.bind(this);
        this.target = document.querySelector("#modal-lightbox")
        
    }
    show(id){
        this.currentElement = this.getElementById(id)

        this.target.focus() 
        
        this.display() 
        disableBodyScroll(this.display)
      
    }

    prev(e){
       
        let index = this.listElement.findIndex(element => element.title == this.currentElement.title)
        if(index == 0){
            e.preventDefault()
            this.currentElement = this.listElement[this.listElement.length] 
            document.querySelector(".content .lightbox__next").classList.add("hide") 
        } else {
            this.currentElement = this.listElement[index - 1] 
        }
     
        this.display()
    }

    next(e){
        let index = this.listElement.findIndex(element => element.title == this.currentElement.title)

        if(index == this.listElement.length - 1){
            e.preventDefault()
            this.currentElement = this.listElement[0] 
            document.querySelector(".content .lightbox__next").classList.add("hide") 
        } else {
            this.currentElement = this.listElement[index + 1] 
        }
        
        this.display()
    }
   
    close(){
        this.target.classList.remove("show")
        document.body.classList.remove('no-scroll')
        document.removeEventListener('keydown', this.keyControl)
        enableBodyScroll(this.display)
    }
    /**
    * les entrés clavier sur la lightbox
    * @param {KeybordEvent} e 
    */

    onKeyUp(e) {
        if(e.key == 'Escape'){
            this.close(e)
        }else if (e.key == 'ArrowLeft'){
            this.prev(e)
        }else if (e.key == 'ArrowRight'){
            this.next(e)
        }
    }

    manageElement(){
        document.querySelector("#modal-lightbox .content .lightbox__next").addEventListener('click', () => {
            this.next()
        })
        document.querySelector("#modal-lightbox .content .lightbox__prev").addEventListener('click', () => {
            this.prev()
        })
        document.querySelector("#modal-lightbox .content .lightbox__close").addEventListener('click', (e) => {
            if(e.target == e.currentTarget){
                e.preventDefault()
                this.close()
            }
        })

       
        document.addEventListener('keyup', this.onKeyUp) 
      
    }

    display(){
        
        if(this.currentElement.photographerId == this.idUrl){
            if (this.currentElement.image) {
                console.log(this.currentElement.image)
                this.contentMedia.innerHTML = `<img class='src-content' src="../../assets/photographers/media/${this.currentElement.image}" alt="${this.currentElement.title}" >
                <p id="lightbox__title"> ${this.currentElement.title}</p>`
                this.target.classList.add("show")
            }else {
                this.contentMedia.innerHTML = this.contentMedia.innerHTML =  ` <video  title="${this.currentElement.title}" controls  >
                <source class="src-content"  src="../../assets/photographers/media/${this.currentElement.video}" type="video/mp4" >
            </video> 
            <p id="lightbox__title"> ${this.currentElement.title}</p>`
            this.target.classList.add("show")
            }
        
        }
    }

    
    getElementById(title){
        return this.listElement.find(element => element.title == title)
    }

  
}
