import {
    disableBodyScroll,
    enableBodyScroll
} from './body-scroll-lock.js'
export default class ContactForm{

    constructor(photographer){
        this.modal = document.getElementById("contact_modal");
        this.photographer = photographer
        this.isRequired()
        this.isNameValid()
        this.isEmailValid()
        this.message = document.getElementById('message');
        
    }
    showModal() {
        this.display()
        let form = document.getElementById("form-modal")
       console.log(email.parentElement)
       
        this.isRequired()
        this.isNameValid()
        this.isEmailValid()
        

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // submit to the server if the form is valid
            const FormValid =[
                this.checkFirstName(),
                this.checkLastName(),
                this.checkEmail()
            ];
            if (FormValid.includes(false)) {
                return false;
            }
            return this.closeModal();
        });
        
        const keys = (e) => {
            e.key === "Escape" && this.closeModal()
            if(e.key === "Tab" && e.currentTarget === document.querySelector(".modal #infoPhotographer #close")){
                e.preventDefault()
                this.modal.focus()
            }
        }
     
        document.addEventListener('keydown', keys)
        disableBodyScroll(this.display)
    }
    
   
    
    display(){
        
        this.modal.classList.add("displayForm")
       
        this.modal.innerHTML = 
            ` <div class="modal">
          <header id="infoPhotographer">
            <h2>Contactez-moi</h2>
            <h3>${this.photographer.name}</h3>
            <button id="close" aria-label="Close dialog">Fermer</button>
          </header>
          <form method="post" id="form-modal">
                <div class="formData">
                    <label for="firstname">Prénom</label>
                    <input name="firstname" id="firstname" type="text" required/>
                </div>
                <div class="formData">
                    <label for="lastname">Nom</label>
                    <input name="lastname" id="lastname" type="text" required/>
                </div>
                <div class="formData">
                    <label for="email">Email</label>
                    <input name="email" id="email" type="email" required/>
                </div>
                <div class="formData">
                    <label for="message">Votre message</label>
                    <textarea name="message" id="message" type="text" required></textarea>
                </div>
                <button class="submit" >Envoyer</button>
    
        </div>`
        document.querySelector(".modal #infoPhotographer #close").addEventListener('click', (e) => {
            if (e.target == e.currentTarget) {
                e.preventDefault()
                this.closeModal()
            }
        })  
    }
    
    
     
    closeModal() {
        this.modal.classList.remove('displayForm')
        enableBodyScroll(this.display)  
    }

     // requiered
     isRequired = (value) => value === '' ? false : true;

     // user name
    isNameValid = function(name) {
     const regName = new RegExp(
             /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/);
         return regName.test(name);
     };

     // user email
     isEmailValid = (email) => {
         const regEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
         return regEmail.test(email);
     };
 
    checkFirstName = () =>{
        const firstName = document.getElementById('firstname');
        const formField = firstName.parentElement;
        const first = firstName.value.trim();
      console.log(firstName.parentElement)
        if (!this.isRequired(first)) {
          formField.setAttribute('data-error', 'Merci de remplir ce champs.');
          formField.setAttribute('data-error-visible', 'true');
          return false;
        } else if (!this.isNameValid(first)) {
          formField.setAttribute('data-error', 'Votre prenom n\'est pas valide.');
          formField.setAttribute('data-error-visible', 'true');
          return false;
        } else {
          firstName.style.border = '2px solid #00c040';
          formField.setAttribute('data-error-visible', 'false');
          return true;
        }
      };
      
      checkLastName = () =>{
        const lastName = document.getElementById('lastname');
        const formField = lastName.parentElement;
        const last = lastName.value.trim();
      
        if (!this.isRequired(last)) {
          formField.setAttribute('data-error', 'Merci de remplir ce champs.');
          formField.setAttribute('data-error-visible', 'true');
          return false;
        } else if (!this.isNameValid(last)) {
          formField.setAttribute('data-error', 'Votre nom n\'est pas valide.');
          formField.setAttribute('data-error-visible', 'true');
          return false;
        } else {
          lastName.style.border = '2px solid #00c040';
          formField.setAttribute('data-error-visible', 'false');
          return true;
        }
      };
      
      checkEmail = () =>{
        const email = document.getElementById('email');
        const formField = email.parentElement;
        const mail = email.value.trim();
      
        if (!this.isRequired(mail)) {
          formField.setAttribute('data-error', 'Merci de remplir ce champs.');
          formField.setAttribute('data-error-visible', 'true');
          return false;
        } else if (!this.isEmailValid(mail)) {
          formField.setAttribute('data-error', 'Votre email n\'est pas valide.');
          formField.setAttribute('data-error-visible', 'true');
          return false;
        } else {
          email.style.border = '2px solid #00c040';
          formField.setAttribute('data-error-visible', 'false');
          return true;
        }
        
      };
    //submit= () =>{
       

        
   // }
    

    

}

