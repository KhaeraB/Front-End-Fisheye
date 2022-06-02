export default class GetSinglePage{
    constructor(data, idUrl, namePhotographer) {
        this._name = data.name
        this._id = data.id
        
        this._city = data.city 
        this._country = data.country 
        this._tagline = data.tagline 
        this._portrait = data.portrait

        this._photographerId  = data.photographerId
        this._title = data.title
        this._image = data.image
        this._likes = data.likes
        this._productPrice = data.price 

        this._idUrl = idUrl
        this._namePhotographer = namePhotographer
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

    get productPrice(){
        return this._productPrice; 
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

    get namePhotographer(){
        let idURL = new URL(window.location.href).searchParams.get("id");
        this._namePhotographer = ""
        switch (idURL) {
            case "243":
            this._namePhotographer = "Mimi";
            break;
            case "930":
            this._namePhotographer = "Ellie Rose";
            break;
            case "82":
            this._namePhotographer = "Tracy";
            break;
            case "527":
            this._namePhotographer = "Nabeel";
            break;
            case "925":
            this._namePhotographer = "Rhode";
            break;
            case "195":
            this._namePhotographer = "Marcel";
            break;
            default:
            break;
        }
        return this._namePhotographer
    }

    
    get image(){
        return `../../assets/photographers/${this.namePhotographer}/${this._image}` 
    }
}