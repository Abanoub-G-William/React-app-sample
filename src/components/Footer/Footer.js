import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-google-plus-g"></i>
                    <i className="fab fa-behance"></i>
                    <br/>
                    <p>© 2019 Media. All Rights Reserved.</p>     
            </div>
        )
    }
}

export default Footer
