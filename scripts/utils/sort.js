import Profil from "../pages/Profil.js"
export default class SortFilter {
    constructor(media) {
        this.media = media
        this.button = document.querySelector("#btn")
        this.options = document.querySelectorAll(".option")
       console.log([...this.media])
    }

    display() {
        const select = document.querySelector("#dropdown")
        const arrow = document.querySelector(".arrow")
      
        select.classList.toggle('hidden')
        arrow.classList.toggle('active')
      
        this.options.forEach(elt => {
            elt.addEventListener("click", this.getTitle)
        })
    }

    getTitle(evt){
        const select = document.querySelector("#dropdown")
        const arrow = document.querySelector(".arrow")
        const selectLabel = document.querySelector("#select-label")
        
        const title = evt.target.value
        selectLabel.innerText = title

        select.classList.toggle('hidden')
        arrow.classList.toggle('active')  

        if(title === "likes"){
            filter.sortByLikes()

        }else if(title === "date"){
            filter.sortByDate()
        }else if(title === "title"){
            filter.sortByTitle()
        }else{

        }
    }

    sortByLikes(){
    
        this.media.sort(function (a, b) {
            return b.likes - a.likes;
          });
       
          console.log(this.media)
    }

    sortByDate(){
    
        this.media.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          });
       
          console.log(this.media)
    }
    sortByTitle(){
    
        this.media.sort(function(a, b) {
            
            if (a.title.toUpperCase() < b.title.toUpperCase()) {
              return -1;
            }
            if (a.title.toUpperCase() >  b.title.toUpperCase()) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
          console.log(this.media)
    }

}

