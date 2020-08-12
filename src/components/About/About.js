import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './About.css'

export class About extends Component {
    render() {
        return (
            <div className='about'>
                <section className='about-us container'>
                    <div><img src = './images/a1.webp' alt ='img'></img> </div>
                    <div>
                        <h1>WHO <span>WE ARE</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel dolor at tellus pulvinar condimentum. Praesent maximus ultrices feugiat. Mauris ipsum leo, iaculis et eleifend a, vulputate eget tellus. Donec condimentum interdum maximus.</p>
                    </div>
                    <div><img src = './images/a2.webp' alt ='img'></img></div>
                    <div><img src = './images/a3.webp' alt ='img'></img></div>


                </section>


                <section className='services container'>
                    <h1>OUR <span>SERVICES</span></h1>
                    <p>Phasellus tincidunt leo a sagittis euismod. Aenean vulputate risus lobortis</p>
                    <div className='grid'>
                         <section>
                             <i className="fas fa-laptop"></i>
                             <br/>
                             <h3>Web design</h3>
                             <p> Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare vitae magna.</p>
                         </section>
                         <section>
                             <i className="fas fa-cogs"></i>
                             <br/>
                             <h3>Web development</h3>
                             <p> Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare vitae magna.</p>
                         </section><section>
                             <i className="fas fa-camera-retro"></i>
                             <br/>
                             <h3>Photography</h3>
                             <p> Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare vitae magna.</p>
                         </section><section>
                             <i className="fas fa-mobile-alt"></i>
                             <br/>
                             <h3>App Design</h3>
                             <p> Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare vitae magna.</p>
                         </section><section>
                            <i className="fas fa-mail-bulk"></i>
                             <br/>
                             <h3>Marketing</h3>
                             <p> Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare vitae magna.</p>
                         </section><section>
                             <i className="fas fa-bullhorn"></i>
                             <br/>
                             <h3>Social Media</h3>
                             <p> Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare vitae magna.</p>
                         </section>
                    </div>
                </section>
            

                <h1 className = 'team-mobile container'>OUR <span>GREAT TEAM</span></h1>

                <section className='team container'>
                    <div>
                        <h1>OUR <span>GREAT TEAM</span></h1>
                    </div>
                    <div><img src = './images/c1.jpg' alt ='img'></img>
                        <h3>Adam Rock</h3>
                        <p>Founder / Ceo</p>
                    </div>
                    <div><img src = './images/c2.jpg' alt ='img'></img>
                        <h3>Sara Jack</h3>
                        <p>Agency Menager</p>
                        </div>
                    <div><img src = './images/c3.jpg' alt ='img'></img>
                        <h3>John Borg</h3>
                        <p>Designer</p></div>
                    <div><img src = './images/c4.jpg' alt ='img'></img>
                        <h3>Frank Myst</h3>
                        <p>Developer</p></div>
                    <div><img src = './images/c5.jpg' alt ='img'></img>
                        <h3>Mia Ross</h3>
                        <p>Developer</p></div>
                </section>
           
                <h1 className = 'team-mobile container'>OUR <span>CLIENTS</span></h1>
                <section className = 'container clients '>
                    <div><img src = './images/logo_1.png' alt ='img'></img></div>
                    <div><h1>OUR <span>GREAT CLIENTS</span></h1></div>
                    <div><img src = './images/logo_2.png' alt ='img'></img></div>
                    <div><img src = './images/logo_3.png' alt ='img'></img></div>
                    <div><img src = './images/logo_1.png' alt ='img'></img></div>
                    <div><img src = './images/logo_5.png' alt ='img'></img></div>
                    <div><img src = './images/logo_6.png' alt ='img'></img></div>
                    <div><img src = './images/logo_1.png' alt ='img'></img></div>

                </section>
           

                <section className='sub'
                 style ={{
                    textAlign:'center',
                    backgroundImage : "url('./images/contact.webp')",
                    backgroundPosition : 'cover',
                    backgroundSize:'cover'}
                    }>
                    <h2>CAN'T WAIT TO HEAR FROM YOU!</h2>
                    <Link to = './Contact'>Contact</Link>

                </section>
            </div>
        )
    }
}

export default About
