import Footer from "../../pages/Footer";
import Privacy from "./Privacy/Privacy";
import Header from "./Contact/Header";
import TermConditions from "./TermConditions/TermConditions";
import Contact from "./Contact/Contact";
import { useParams } from "react-router-dom";
import TopBarSP from "../topBarSP/TopBarSP";

export default function SinglePage () {
    let {contact} = useParams();
    console.log(contact);
    return (
        <section>
            <TopBarSP/>
            <Header/>
            <Contact/>
        </section>
    );
}