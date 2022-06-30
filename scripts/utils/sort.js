export default class SortFilter {
    constructor(Media, listElement) {
        this.Media = Media

       
        this.$mediaFilter = document.querySelector('.sortBy')
        this.currentElement = null
        this.listElement = listElement

    }

    
    sortBy(value){
      
    document.querySelectorAll(".cardMedia").forEach( (elt)=>{ elt.remove() } )

    let mediasSorteds;

    if ( value == "likes")
    {
        /**
         * tri les données par popularité
         * @param {array} datas
         * @returns {array}
         */
        function getDataByPop(datas)
        {
            return datas.sort((a, b) => {
                // 'b'(par sa position) sera la reference et sera comparé à 'a', qui sera l'élément suivant
                // b > a
                return b.likes - a.likes;
            });
        }
        mediasSorteds = getDataByPop(mediasOfPhotographer)
    }
    if (value == "date")
    {
        /**
         * tri les données par date
         * @param {array} datas
         * @returns {array}
         */
        function getDataByDate(datas)
        {
            return datas.slice().sort((a, b) => {
            // a < b
            const valueA = new Date(a.date);
            const valueB = new Date(b.date);
            return valueB - valueA;
            });
        }
        mediasSorteds = getDataByDate(mediasOfPhotographer)
    }
    if (value == "title")
    {
        /**
         * tri les données par titre
         * @param {array} datas
         * @returns {array}
         */
        function getDataByTitle(datas)
        {
            return datas.sort((a, b) => {
            return a.title.localeCompare(b.title);
            });
        }
        mediasSorteds = getDataByTitle(mediasOfPhotographer)
    }
}
}

