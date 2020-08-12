import React, { Component } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
    secNavbar =false;
    componentDidMount=()=>{
        document.querySelector('.fa-bars').addEventListener('click',()=>{
            if(!this.secNavbar){
                document.querySelector('.sec-navbar').style.display ='block';
                setTimeout(() => {
                    document.querySelector('.sec-navbar').style.transform ='scaleY(1)';
                }, 10);
                this.secNavbar=true;
            }
            else{
                document.querySelector('.sec-navbar').style.transform ='scaleY(0)';
                setTimeout(() => {
                    document.querySelector('.sec-navbar').style.display ='none';
                }, 200);
                this.secNavbar=false;
            }
        })
        window.addEventListener('resize',()=>{
            if(window.innerWidth>960 && this.secNavbar){
                document.querySelector('.sec-navbar').style.transform ='scaleY(0)';
                document.querySelector('.sec-navbar').style.display ='none';
                this.secNavbar=false;
            }
        })
    }

    render() {
        return (
            <main>
            <div id='nav' className = 'navbar container flex flex-center'>
                <section className='logo flex-one'>MEDIA-X</section>
                <nav className='pc'>
                    <Link to = './'>Portfolio</Link>
                    <Link to = './About'>About</Link>
                    <Link to = './Contact'>Contact</Link>
                </nav>
                <nav className='tablet'>
                <i className="fas fa-bars"></i>
                </nav>
            </div>

            <div className='sec-navbar'>
                    <Link to = './'>Portfolio</Link>
                    <Link to = './About'>About</Link>
                    <Link to = './Contact'>Contact</Link>
            </div>
            
            </main>
        )
    }
}

export default Navbar
