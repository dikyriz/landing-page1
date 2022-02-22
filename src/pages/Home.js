import {Link} from "react-router-dom";

export default function Home () {
    return (
        <section className="section-home">
            <h1 className="home-title">VICMAS<span className="home-title-child">DISON</span></h1>
            <h4 className="home-title2">I'am a Product Design and<span className="home-title-child2">Fullstack Website Developer</span></h4>

            <button className="btn btn-contact"><Link to='/about'>Contact Me<span className="arrow">&#8722;&gt;</span></Link></button>
            <button className="btn btn-portofolio"><Link to='/portofolio'>Portofolio<span className="arrow">&#8722;&gt;</span></Link></button>
        
        </section>
    );
}