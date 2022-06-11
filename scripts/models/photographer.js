export default class GetSinglePage{
    constructor(data, idUrl) {
        this._name = data.name
        this._id = data.id
        
        this._city = data.city 
        this._country = data.country 
        this._tagline = data.tagline 
        this._portrait = data.portrait

        this._photographerId  = data.photographerId
        this._title = data.title
        this._image = data.image
        this._video = data.video
        this._likes = data.likes
        this._photographerPrice = data.price 

        this._idUrl = idUrl
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

    get photographerPrice(){
        return this._photographerPrice; 
    }

    get portrait(){
        return `../../assets/photographers/photographerId/${this._portrait}` 
    }

    get photographerId(){
        return  this._photographerId; 
    }

    get title(){
        return  this._title; 
    }

    get likes(){
        return  this._likes;  
    }

    get image(){
        
        return this._image; 
    }

    get video(){
        
        return this._video; 
    }
}