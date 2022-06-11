import AllPhotographers from "./api/Api.js"
import PhotographerFactory from "./factories/photographer.js"
import PhotographersHomeCard from "./templates/PhotographersHomeCard.js"

export default class Home {
    constructor() {
        this.$usersWrapper = document.getElementById('photographer_section')
    
        this.photographersApi = new AllPhotographers('../data/fisheye-data.json')
    }

    async displayPhotographers() {
        const photographersData = await this.photographersApi.getPhotographers()
        const onlyPhotographers = photographersData
        //const UsersPhotographers = onlyPhotographers.map(photographers => new PhotographerFactory(photographers))
       
        const Template = new PhotographersHomeCard(onlyPhotographers);
       // console.log(onlyPhotographers)

       this.$usersWrapper.innerHTML =  Template.createUserCard()
    }
    
}

const app = new Home()
app.displayPhotographers() 