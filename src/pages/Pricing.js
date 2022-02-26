import { Link } from "react-router-dom";

export default function Pricing () {
    return (
        <section className="section-pricing">
            <h1 className="pricing-title">Have a Project on Your Mind</h1>
            <p className="pricing-description">Don't have a website yet ? Want to have a website for
            product branding ?<span className="pricing-description-child">Confused where to do
            it. Trust us to build your website.</span> 
            </p>
            <button><Link to="/">Contact Me<span className="arrow-pricing">&#8722;&gt;</span></Link></button>
            <button><Link to="/">Order Now<span className="arrow-pricing">&#8722;&gt;</span></Link></button>
        </section>
    );
}