export default class SortFilter {
    constructor(media) {
        this.media = media
        this.button = document.querySelector("#btn")
        this.options = document.querySelectorAll(".option")
    
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
        const title = evt.target.value
    
        selectLabel.innerText = title

        select.classList.toggle('hidden')
        arrow.classList.toggle('active')  
        
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
        console.log(this.media)     
    }

    sortByTitle(){
        this.media.sort(function(a, b) {
            return a.title.localeCompare(b.title);
          })
        console.log(this.media)
    }

}

