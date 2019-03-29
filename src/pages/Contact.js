import React, { Component } from 'react';
import '../style/mainContact.css';
import SimpleReactValidator from 'simple-react-validator'

class Contact extends Component {
    state = { 
        reason:'1',
        name:'',
        message:'',
        email:'',
        load:false,
     }
     handleChange=e=>{
         if(e.target.name==='reason'||e.target.name==='name'||e.target.name==='message'||e.target.name==='email'){
            this.setState({ [e.target.name]:e.target.value  });
         }
     }
     handleSubmit=e=>{
        e.preventDefault()
        if( this.validator.allValid() ){
            //alert('You submitted the form and stuff!');


            // let dataToSend ={
            //     'title':this.state.reason,
            //     'author':this.state.name,
            //     'message':this.state.message,
            //     'author_email':this.state.email,
            // }
            // JSON.stringify(dataToSend)
            // const dataToSend = new FormData();
            
            // dataToSend.append('title',this.state.reason)
            // dataToSend.append('author',this.state.name)
            // dataToSend.append('message',this.state.message)
            // dataToSend.append('author_email',this.state.email)

            const url = document.querySelector('.contactForm').getAttribute('action')
            const method = document.querySelector('.contactForm').getAttribute('method')
            this.setState({ load:true  });
            fetch(url, {
                method: method.toUpperCase(),
                body: JSON.stringify({
                    'title':this.state.reason,
                'author':this.state.name,
                'message':this.state.message,
                'author_email':this.state.email,
                })
            })
            .then(ret => ret.json())
            .then(ret => {
                console.log(ret)
                this.setState({ load:false  });
            })//odpowiedz
            .catch(err => {
            console.log(err)//błąd
            this.setState({ load:true  });
            });
        


          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
     }
     componentWillMount() {
        this.validator = new SimpleReactValidator({
            element: message => <div className="failValidation"><strong>!</strong>{message}</div>
          })
     }
    render() { 
        return ( 
            <>
            <h1>Kontakt</h1>
            <form className="contactForm" onSubmit={this.handleSubmit} action={`http://megafiszka.eu/api/POST/mail.php`} method='post'>
            
            <label>Powód wiadomości: 
            <select name="reason" onChange={this.handleChange} value={this.state.reason}>
            <option value="1">Chciałbym zgłosić propozycję nowego cytatu</option>
            <option value="2">Chciałbym zgłosić błąd w aplikacji</option>
            <option value="3">Chciałbym skontaktować się z administratorem</option>
            </select>
            </label>
            {this.validator.message('reason', this.state.reason, 'numeric:1')}
            
            <label>
            <input name='name' type="text" placeholder="Wpisz imię" onChange={this.handleChange} value={this.state.name}/>
            </label>
            {this.validator.message('name', this.state.name, 'required|alpha_num|max:20')}

            <label>
            <input name='email' type='email' placeholder="Wpisz swój eamil" onChange={this.handleChange} value={this.state.email}/>
            </label>
            {this.validator.message('email', this.state.email, 'required|email')}

            <label>
            <textarea name="message" placeholder="Treść wiadomości" onChange={this.handleChange} value={this.state.message}></textarea>
            </label>
            {this.validator.message('message', this.state.message, 'required|string|min:10|max:200')}

            <button className={this.state.load?'load':''}>WYŚLIJ<i className="icon-spin2"></i></button>
            </form>
            </>
         );
    }
}
 
export default Contact;