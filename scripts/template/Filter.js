export default class Filter {
    /**
     * 
     * 
     * @param {array} media
     * @param {dateTime} date
     * @param {string} title
     * @returns 
     */
    static async filterByInfo(media, date, title) {

       const view = () => {
        if(!date) {
            media
        }else{
           media.filter(info => info.date == info.date)
        }
        if(!title){
            media
        }else{
            media.filter(info => info.title == info.title)
        }
        
       } 
       return view
    }
}