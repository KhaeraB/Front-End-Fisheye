import AllPhotographers from "../api/Api.js"

export default class Home {
    constructor() {

        this.photographersApi = new AllPhotographers('../data/fisheye-data.json')
    }

    async displayPhotographers() {
        const photographersData = await this.photographersApi.getPhotographers()
        const onlyPhotographers = photographersData 
       // console.log(onlyPhotographers)
        let $usersWrapper = document.getElementById('photographer_section')
        $usersWrapper.innerHTML =  onlyPhotographers.map(photographer => 
          
           `<article> 
               <a href="../photographer.html?id=${photographer.id}" id="link" title="${photographer.name}"  aria-label="${photographer.name}">
                   <img src="../../assets/photographers/photographerId/${photographer.portrait}" alt="${photographer.name}">
                   <h2 alt= "${photographer.name}">${photographer.name}</h2>
               </a>

               <h4 alt= "${photographer.city}, ${photographer.country}">${photographer.city}, ${photographer.country}</h4>

               <p>${photographer.tagline}</p>

               <small>${photographer.price}€/jour</small>
           </article>`
           
           ).join('')   

       
    }
    
}

const app = new Home()
app.displayPhotographers() 