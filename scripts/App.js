export default class App {
    constructor() {
        this.$usersWrapper = document.querySelector('.photographer_section')
        
        this.photographersApi = new AllPhotographers('../data/fisheye-data.json')
    }

    async main() {
        const photographersData = await this.photographersApi.getPhotographers()

        const Photographers = photographersData .map(photographer => new PhotographerFactory(photographer, 'photographersApi'))

        console.log(Photographers)

        const FullUsers = Photographers

        FullUsers.forEach(photographer => {
                const Template = new PhotograpgersHomeCard(photographer)
                this.$usersWrapper.appendChild(
                    Template.createUserCard()
                )
            })
    }
}

const app = new App()
app.main()