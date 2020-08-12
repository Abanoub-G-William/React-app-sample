import React, { Component } from 'react'
import './Contact.css'

export class Contact extends Component {
    render() {
        return (
            <div className ='contact container'>
                <section>
                    <h2>CONTACT</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed commodo purus. Donec varius nisl diam, id lobortis nisl vulputate volutpat. Integer pellentesque rutrum elit id auctor sel mastiom para madrms elo pltsadea.</p>
                    <h4>Address</h4>
                    <p>1572  Filbert Street ,Birmingham city</p>
                    <h4>Phone</h4>
                    <p>610-788-7607</p>
                    <h4>Email</h4>
                    <p>4gvvm5gdqwh@thrubay.com</p>
               </section>
                <section>
                <h2>CONTACT FORM</h2>
                <form>
                    <input type='text' placeholder ='Your Name'></input>
                    <input type='text' placeholder ='Your Email'></input>
                    <input type='text' placeholder ='Your Phone'></input>
                    <input type='password' placeholder ='Your Password'></input>
                    <button>SEND MESSAGE</button>

                </form>

                </section>
            </div>
        )
    }
}

export default Contact
