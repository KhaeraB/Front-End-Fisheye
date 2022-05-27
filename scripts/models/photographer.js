export default class GetSinglePage {
    constructor(data) {
        this._name = data.name
        this._id = data.id
        
        this._city = data.city 
        this._country = data.country 
        this._tagline = data.tagline 
        this._portrait = data.portrait

        this._photographerId  = data.photographerId
        this._title = data._itle
        this._images = data.images
        this._likes = data._likes
        this._price = data._price 


    }

    get name(){
        return this._name }; 



    get id(){
        return  this._id; 
    }
   

    get city(){
        return  this._city; 
    }
   

    get country(){
        return  this._country; 
    }

    get tagline(){
        return this._tagline; 
    }

    get price(){
        return this._price; 
    }

    get portrait(){
        return `../../assets/photographers/photographerId/${this._portrait}` 
    }
}