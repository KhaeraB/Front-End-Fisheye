class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    } 
    async get() {
      
        return fetch(this._url)
            .then(res => res.json())
            .then((data) => {
                return data})
            .catch(err => console.log('an error occurs', err))
    }
}


export default class AllPhotographers extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        return await this.get()
    }
}
