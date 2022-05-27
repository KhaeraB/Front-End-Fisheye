import AllPhotographers from "./api/Api.js"
import PhotographerFactory from "./factories/photographer.js"
import PhotographersHomeCard from "./templates/PhotographersHomeCard.js"

export default class App {
    constructor() {
        this.$usersWrapper = document.querySelector('#main .photographer_section')
        
        this.photographersApi = new AllPhotographers('../data/fisheye-data.json')

    }

    async displayPhotographers() {
        const photographersData = await this.photographersApi.get()
        const onlyPhotographers = photographersData.photographers
        console.log(onlyPhotographers)
        const UsersPhotographers = onlyPhotographers.map(photographers => new PhotographerFactory(photographers, 'photographersApi'))
      
       

        UsersPhotographers.forEach(photographer => {
                const Template = new PhotographersHomeCard(photographer)
                console.log(Template)
                this.$usersWrapper.appendChild(
                    Template.createUserCard()
                )
            })
    }
}

const app = new App()
app.displayPhotographers()