import {Link} from "react-router-dom";
import {CardOne, CardThree, CardTwo, IconIg, ImageBackground} from "../assets";
import About from "./About";
import Blog from "./Blog";
import Client from "./Client";
import Footer from "./Footer";
import Header from "./Header";
import Portofolio from "./Portofolio";
import Pricing from "./Pricing";
import Services from "./Services";

export default function Home() {
    return ( 
        <section className = "section-home">
        
        <Header/>
        <About/>
        <Portofolio/>
        <Services/>   
        <Pricing/>
        <Client/>
        <Blog/>
        <Footer/>
    
    </section>

    );
}