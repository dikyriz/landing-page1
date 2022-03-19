import Footer from "../../pages/Footer";
import DetailBlog from "./DetailBlog";
import Blogs from "./Blogs";
import Header from "./Header";
import TopBarSP from "../topBarSP/TopBarSP";

export default function SinglePage() {
    return (
        <section>
            <TopBarSP/>
           <Header/>
           <Blogs/>
        </section>
    );
}