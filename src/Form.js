import React from 'react';

const initialState = {
    subject: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    subjectError: '',
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    phoneError: '',
    messageError: '',
    generalError: '',
    isSuccess: ''
}


export default class Form extends React.Component {
    
    state = initialState;

change = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};


validate = () => {
    let subjectError= '';
    let firstNameError= '';
    let lastNameError= '';
    let emailError = '';
    let phoneError= '';
    let messageError= '';
    let generalError = '';

    if(!this.state.subject) {  subjectError = "Subject cannot  be blank";  generalError = "true";}
    if(!this.state.firstName) {  firstNameError = "First name cannot  be blank";  generalError = "true";}
    if(!this.state.lastName) {  lastNameError = "Last name cannot  be blank";  generalError = "true";}
    if(!this.state.message) {  messageError = "Message cannot  be blank";  generalError = "true";}
    if(!this.state.phone) {  phoneError = "Phone cannot  be blank";  generalError = "true";}
    if(!this.state.email.includes('@')) {   emailError = 'Invalid email';    generalError = "true";}

    if(emailError || subjectError || firstNameError || lastNameError || phoneError || messageError || generalError) {
        this.setState({emailError, subjectError, firstNameError, lastNameError, phoneError, messageError, generalError});
        return false;
    }

    return true;
}

onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
    this.props.onSubmit(this.state);
        let isSuccess = "true";
        this.setState({initialState, isSuccess});
    }
}

    render() {
        return (
            <form>
              <div className="row"> 
              <div className="col-md-12">            

                <div className="col-md-12">
                  Nous contacter
                      Attention, ce formulaire est pour entrer en contact avec Tipaw. Pour toutes vos questions concernant les annonces, 
                    merci de contacter directement les éleveurs via le bouton "Contacter l'éleveur"  disponible dans chaque annonce.
                {this.state.generalError ? (
                       <div className="alert alert-danger mt-3 " role="alert">
                            Vérifiez que tous les champs requis ont été correctement remplis.
                         </div>
               ) : null}

                {this.state.isSuccess ? (
                       <div className="alert alert-success mt-3 " role="alert">
                            Merci pour votre message
                         </div>
               ) : null}

                </div>
            </div>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                <div className="form-group mt-5 ">
                       
                       
                <select name="subject" 
                    value={this.state.subject} 
                    onChange={e => this.change(e)}
                    className={"form-control " + (this.state.subjectError ? 'alert-danger' : '')}>
                        <option value="">Choisissez votre sujet</option>
                        <option value="general">Général</option>
                        <option value="races">Races</option>
                        <option value="option-visibilité">Option visibilité</option>
                        <option value="formations">Formations</option>
                        <option value="annonces">Annonces</option>
                        <option value="balades">Balades</option>
                        <option value="divers">Divers</option>
                </select>   
                       
                         
                    </div>
                    <div className="form-group">
                    <input
                    name="firstName" 
                    placeholder='Prenom' 
                    value={this.state.prenom} 
                    onChange={e => this.change(e)}
                    className={"form-control " + (this.state.firstNameError ? 'alert-danger' : '')}
                    />
                    {this.state.firstNameError ? (
                             <div>
                                 {this.state.firstNameError}
                             </div>  
                        ) : null}
                    </div>
                    <div className="form-group">
                    <input
                    name = "lastName" 
                    placeholder='Nom' 
                    value={this.state.nom} 
                    onChange={e => this.change(e)}
                    className={"form-control " + (this.state.lastNameError ? 'alert-danger' : '')}
                    />
                    {this.state.lastNameError ? (
                             <div>
                                 {this.state.lastNameError}
                             </div>  
                        ) : null}
                    </div>
                    <div className="form-group">
                    <input
                    name = "email" 
                    placeholder='Email' 
                    value={this.state.email} 
                    onChange={e => this.change(e)}
                    className={"form-control " + (this.state.emailError ? 'alert-danger' : '')}
                    />
                        {this.state.emailError ? (
                             <div>
                                 {this.state.emailError}
                             </div>  
                        ) : null}
                    </div>
                    <div className="form-group">
                    <input
                    name ="phone"
                    placeholder='Telephone' 
                    value={this.state.telephone} 
                    onChange={e => this.change(e)}
                    className={"form-control " + (this.state.phoneError ? 'alert-danger' : '')}
                    />
                    {this.state.phoneError ? (
                             <div>
                                 {this.state.phoneError}
                             </div>  
                        ) : null}
                    </div>
                    <div className="form-group">
                    <textarea
                    name="message"
                    placeholder='message'  
                    value={this.state.message} 
                    onChange={e => this.change(e)}
                    className={"form-control " + (this.state.messageError ? 'alert-danger' : '')}
                    ></textarea>
                    {this.state.messageError ? (
                             <div>
                                 {this.state.messageError}
                             </div>  
                        ) : null}
                    </div>
                
                   <button onClick={e => this.onSubmit(e)} className="btn btn-success">Envoyer</button>
                </div>
                <div className="col-md-3"></div>
               </div> 
            </form>
        )
    }

}