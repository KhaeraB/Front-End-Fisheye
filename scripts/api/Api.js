class Api {	
	constructor(url) {
	
    url = "./data/fisheye-data.json"
    this.url = url
	}
	
        async getPhotographesJSON() {
            console.log(this.url)
            return fetch(this.url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('erreur', err))
        }
        
        async getPhotosJSON() {
            return fetch(this.url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('erreur', err))
        }
        
        async getLikesJSON() {
            return fetch(this.url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('erreur', err))
        }
	}
	
	
	export default class AllPhotographers extends Api {
        constructor(url) {
            super(url)
        }
        async getPhotographers() {
            return await this.getPhotographesJSON()
        }
        
        async getPhotos() {
            return await this.getPhotosJSON()
        }
        
        async getLikes() {
            return await this.getLikesJSON()
        }
	}
