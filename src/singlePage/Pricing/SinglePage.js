import Footer from "../../pages/Footer";
import TopBarSP from "../topBarSP/TopBarSP";
import Header from "./Header";
import Pricing from "./Pricing";

export default function SinglePage() {
    return (
        <section>
            <TopBarSP/>
            <Header/>
            <Pricing/>
        </section>
    );
}