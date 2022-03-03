import { Link } from "react-router-dom";
import { CardOne, CardThree, CardTwo } from "../assets";

export default function Portofolio () {
    return (
        <section className="section-portofolio">
        <div className="portofolio">
        <div className="portofolio-top">
            <h1 className="portofolio-title">&#8722; My Portfolio &#8722;</h1>
            <p className="portofolio-description">This is the project i have 
                made. I did this project 
                really well  to get good 
                result too.
            </p>

            <div className="arrow-portofolio"> 
            <button className="arrow-portofolio-child-1"><Link to="/">&#10140;</Link></button>
            <button className="arrow-portofolio-child-2"><Link to="/">&#10140;</Link></button>
            </div>
        </div>            
        
        <div className="portofolio-bottom">
            <ul className="card">
                <li className="card-child">
                    <div className="card-1">
                    <img src={CardOne} alt="card-1" className="img-card"/>
                    <div className="container">
                        <h4 className="card-title">Barn Fashion</h4>
                        <p className="card-description">UI Design</p>
                    </div>
                    <Link to="/carddetail" className="btn-card">Read More<span className="arrow-card">&#8722;&gt;</span></Link>
                </div>
                </li>
                <li className="card-child">
                    <div className="card-2">
                    <img src={CardTwo} alt="card-2" className="img-card"/>
                    <div className="container">
                        <h4 className="card-title">Header Code</h4>
                        <p className="card-description">Web Development</p>
                    </div>
                    <Link to="/carddetail" className="btn-card">Read More<span className="arrow-card">&#8722;&gt;</span></Link>
                </div>
                </li>
                <li className="card-child">
                    <div className="card-3">
                    <img src={CardThree} alt="card-3" className="img-card"/>
                    <div className="container">
                        <h4 className="card-title">Task Scheduling</h4>
                        <p className="card-description">Product Design</p>
                    </div>
                    <Link to="/carddetail" className="btn-card">Read More<span className="arrow-card">&#8722;&gt;</span></Link>
                </div>
                </li>
            </ul>
        </div>            
        </div>            

        </section>
    );
}