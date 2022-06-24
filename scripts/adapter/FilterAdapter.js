import Filter from "../utils/Filter.js";
export default class FilterAdapter {
    constructor(media, date, title) {
        this.media = media
        this.date = date
        this.title = title
        
    }

    async filterByinfo() {
        return await Filter.filterByInfo( this.date, this.title, this.media)
        
    }
}

