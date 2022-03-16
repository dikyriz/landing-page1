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