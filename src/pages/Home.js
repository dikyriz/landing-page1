import { useEffect } from "react";
import TopBar from "../topBar/TopBar";
import About from "./About";
import Blog from "./Blog";
import Client from "./Client";
import Footer from "./Footer";
import Header from "./Header";
import Portofolio from "./Portofolio";
import Pricing from "./Pricing";
import Services from "./Services";

export default function Home() {
    
    useEffect(function (){
        window.scrollTo(0, 0)
    }, [])

    return ( 
        <section className = "section-home">
        
        <TopBar/>
        <Header/>
        <About/>
        <Portofolio/>
        <Services/>   
        <Pricing/>
        <Client/>
        <Blog/>
        
    
    </section>

    );
}