import Footer from "../../pages/Footer";
import Privacy from "./Privacy/Privacy";
import Header from "./Contact/Header";
import TermConditions from "./TermConditions/TermConditions";
import Contact from "./Contact/Contact";

export default function SinglePage () {
    return (
        <section>
            <Header/>
            <Contact/>
            <Footer/>
        </section>
    );
}