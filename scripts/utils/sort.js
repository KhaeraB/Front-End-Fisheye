export default class SortFilter {
    constructor(media) {
        this.media = media
        this.button = document.querySelector("#btn")
      
        this.getLabel()

    }

    
    show(){
        this.display()
    }
    
    display(){  
      this.button.addEventListener('click', function(e){
            e.preventDefault()
            ToggleHidden()
        })
        function ToggleHidden(){
            const select = document.querySelector("#dropdown")
            const arrow = document.querySelector(".arrow")
            select.classList.toggle('hidden')
            arrow.classList.toggle('active')
        }
    }

    

    getLabel(){
        document.querySelectorAll(".option").forEach(function(option){
            option.addEventListener('click', function(e){
                const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText
                console.log(labelElement)
            })
        }) 
    }
   
}

