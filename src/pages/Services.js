import { CardThree } from "../assets";
import { Link } from "react-router-dom";

export default function Services () {
    return (
        <section className="sections" >
            <div className="section-services" id="services">
            <h1 className = "services-title" > We Can Help You </h1> 
                <p className = "services-description" > We help make your dreams come true through 
                <span className = "services-description-child" > innovation and creative perspectives.</span> 
                </p>
                <div className = "card-services" >
                    <ul>       
                    <li>
                    <div className = "card-1-services" >
                    <img src = {CardThree} alt = "card-3" className = "img-services" />
                        <div className = "container-services" >
                            <h4 className = "card-title-services-card1" > Web Design </h4> 
                            <p className = "card-description-services-card1" >
                            Making plans wireframe to UI design on demand and does not neglect the main
                            function. </p> 
                        </div> 
                    </div> 
                    </li> 
                    <li>
                    <div className = "card-2-services" >
                        <div className = "container-services" >
                            <h4 className = "card-title-services" > Web Development </h4> 
                            <p className = "card-description-services" >
                            Make a website display according to the results of slicing UI design and create and design database and systems can running smoothly. 
                            </p> 
                        </div> 
                    </div> 
                    </li> 
                    <li >
                    <div className = "card-3-services" >
                        <div className = "container-services" >
                            <h4 className = "card-title-services" > App Development </h4> 
                            <p className = "card-description-services" >
                            Mobile application development to make work easier and certainly can be used wherever you are. 
                            </p> 
                        </div> 
                    </div> 
                    </li> 
                    </ul> 
                </div>
            </div>
            <div className="section-pricing" id="pricing">
                <h1 className="pricing-title">Have a Project on Your Mind</h1>
                <p className="pricing-description">Don't have a website yet ? Want to have a website for
                product branding ?<span className="pricing-description-child">Confused where to do
                it. Trust us to build your website.</span> 
                </p>
                <div className="button">
                    <button className="btn btn-contact-pricing"><Link to="/">Contact Me<span className="arrow-pricing">&#8722;&gt;</span></Link></button>
                    <button className="btn btn-order"><Link to="/">Order Now<span className="arrow-pricing">&#8722;&gt;</span></Link></button>
                </div>
            </div>
            
        </section>
    );
}