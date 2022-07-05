export default class SortFilter {
    constructor(media) {
        this.media = media
        this.button = document.querySelector("#btn")
        this.options = document.querySelectorAll(".option")
        this.title = null
    }

    display() {
        const select = document.querySelector("#dropdown")
        const arrow = document.querySelector(".arrow")
      
        select.classList.toggle('hidden')
        arrow.classList.toggle('active')
       
        this.options.forEach(elt => {
            elt.addEventListener("click", this.initSort)
        })
      
    }

    initSort(evt){
        const select = document.querySelector("#dropdown")
        const arrow = document.querySelector(".arrow")
        const selectLabel = document.querySelector("#select-label")
        this.title = evt.target.value
       
        selectLabel.innerText = this.title

        select.classList.toggle('hidden')
        arrow.classList.toggle('active')  
        /* filtrage */
        if(this.title === "Popularité"){
          this.sortByLikes
        }else if(this.title === "Date"){
           this.sortByDate
        }else if(this.title === "Titre"){
           this.sortByTitle
        }else{
            console.table(this.media)
        } 
    }
    
    sortByLikes(){
    
        this.media.sort(function (a, b) {
            return b.likes - a.likes;
          });
       
    }

    sortByDate(){
    
        this.media.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          });
       
          
    }

    sortByTitle(){
    
        this.media.sort(function(a, b) {
            return a.title.localeCompare(b.title);
          });

          console.log(this.media)
    }

}

