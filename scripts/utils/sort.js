import HeaderSinglePage from "../pages/headerSinglePage.js"

export default class SortFilter {
    constructor(Media, listElement) {
        this.Media = Media

        this.$filterFormInfo = document.querySelector('.filter-form')
        this.$mediaWrapper = document.querySelector('#images-gallery')
        this.currentElement = null
        this.listElement = listElement

    }

    async filter(date, title) {
        this.clearWrapper()
        this.currentElement = this.getElementById(id)
        const AdaptedFilterLib = new FilterAdapter(this.Media, date, title)
        const Filtered= await AdaptedFilterLib.filterByInfo()
        
        Filtered.forEach(info => {
            const Template = new HeaderSinglePage(info)
            this.$mediaWrapper.appendChild(Template.displayImagesPhotographers())
        })
    }
 
    onChangeFilter() {
        select = document.getElementById("filter-select");     
    }
  
    clearWrapper() {
        this.$mediaWrapper.innerHTML = ""
    }

    render() {
        const filterForm = `
            <label for="filter-select"><h3>Trier :</h3></label>
            <select name="filter-select" id="filter-select">
                <option value="">Popularité</option>
                <option value="date">Date</option>
                <option value="title">Titre</option>
            </select>`
            

        this.$filterFormInfo.innerHTML = filterForm
        this.onChangeFilter()
        
        
    }
    getElementById(title){
        return this.listElement.find(element => element.title == title)
    }
}