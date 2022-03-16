import { Link } from "react-router-dom";
import { ImageBackground } from "../assets";
import './css/header.css';

export default function Header() {
    return (
        <section className="section-header">
            <a className="anchor" id="/" /> 
            <img src={ImageBackground} alt="img-bg"  className="home-bg"/>
            <div className="header-items">
                <h1 className = "home-title"> VICMAS <span className = "home-title-child"> DISON </span></h1>
                <h4 className = "home-title2"> I 'am a Product Design and<span className="home-title-child2">Fullstack Website Developer</span></h4>

                <div className = "btn-home">
                    <Link to = '/about' className = "btn btn-contact"> Contact Me <span className = "arrow">&#8722;&gt;</span></Link>
                    <Link to= '/portofolio' className = "btn btn-portofolio">Portofolio<span className = "arrow" > &#8722;&gt;</span></Link>
                </div>
            </div>
            <p className= "home-sosmed">
            <i className="fa-brands fa-dribbble icons-header"></i>&#124; 
            <i className="fa-brands fa-github icons-header"></i>&#124; 
            <i className="fa-brands fa-instagram icons-header"></i> 
            </p>
        </section>
    );
}