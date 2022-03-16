import Footer from "../../pages/Footer";
import TopBarSP from "../topBarSP/TopBarSP";
import DetailPortofolio from "./DetailPortofolio";
import Header from "./Header";
import Portofolio from "./Portofolio";

export default function SinglePage() {
    return (
        <section>
            <TopBarSP/>
            <Header/>
            <Portofolio/>
        </section>
    );
}