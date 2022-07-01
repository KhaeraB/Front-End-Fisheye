import Profil from "../pages/Profil.js"
export default class SortFilter {
    constructor(media) {
        media 
        this.button = document.querySelector("#btn")
        this.options = document.querySelectorAll(".option")
        console.log(media)
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
            console.log(title)
        if(title === "Popularité"){
           sortByLikes(media)
            console.table(media)
        }else if(title === "Date"){
           sortByDate(media)
            console.table(media)
        }else if(title === "Titre"){
           sortByTitle(media)
            console.table(media)
        }else{
            console.table(media)
        }
    }

    sortByLikes(){
    
        media.sort(function (a, b) {
            return b.likes - a.likes;
          });
       
          console.log(media)
    }

    sortByDate(){
    
        media.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          });
       
          console.log(media)
    }
    sortByTitle(){
    
        media.sort(function(a, b) {
            
            if (a.title.toUpperCase() < b.title.toUpperCase()) {
              return -1;
            }
            if (a.title.toUpperCase() >  b.title.toUpperCase()) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
          console.log(media)
    }

}

