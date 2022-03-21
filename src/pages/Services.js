import { CardThree } from "../assets";
import { Link } from "react-router-dom";
import './css/services.css';
import './css/pricing.css';

export default function Services () {
    return (
        <section className="sections">
            <div className="section-services">
            <a className="anchor" id="services"/>
            <h1 className = "services-title" > We Can Help You </h1> 
                <p className = "services-description" > We help make your dreams come true through 
                <span className = "services-description-child" > innovation and creative perspectives.</span> 
                </p>
                <div className = "card-services" >
                    <ul className="flip-box">       
                    <li className="flip-box-inner">
                        <div className="flip-box-front">
                            <h4 className = "card-title-services-card1" > Web Design </h4>
                        </div>
                        <div className="flip-box-back">
                            <p className = "card-description-services-card1" >
                            Making plans wireframe to UI design on demand and does not neglect the main
                            function. </p>
                        </div>                    
                    </li>
                    </ul>  
                    <ul className="flip-box">
                    <li className="flip-box-inner">
                        <div className="flip-box-front">
                            <h4 className = "card-title-services" > Web Development </h4>
                        </div>
                        <div className="flip-box-back">
                             <p className = "card-description-services" >
                             Make a website display according to the results of slicing UI design and create and design database and systems can running smoothly. 
                            </p>
                        </div>                
                    </li>
                    </ul>
                    <ul className="flip-box ">
                    <li className="flip-box-inner">
                        <div className="flip-box-front">
                            <h4 className = "card-title-services" > App Development </h4>
                        </div>
                        <div className="flip-box-back">
                            <p className = "card-description-services" >
                            Mobile application development to make work easier and certainly can be used wherever you are. 
                            </p>
                        </div>
                    </li>
                    </ul>                     
                </div>
            </div>
            <div className="section-pricing">
                <a className="anchor" id="pricing" />
                <h1 className="pricing-title">Have a Project on Your Mind</h1>
                <p className="pricing-description">Don't have a website yet ? Want to have a website for
                product branding ?<span className="pricing-description-child">Confused where to do
                it. Trust us to build your website.</span> 
                </p>
                <div className="button">
                    <Link to="/contact" className="btn btn-contact-pricing">Contact Me<span className="arrow-pricing">&#8722;&gt;</span></Link>
                    <Link to="pricing" className="btn btn-order">Order Now<span className="arrow-pricing">&#8722;&gt;</span></Link>
                </div>
            </div>
            
        </section>
    );
}