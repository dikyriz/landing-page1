import { BGsinglePage } from "../../../assets";
import '../../css/header.css';

export default function Header () {
    return (
        <section>
            <div className="header-blog-single">
                <img src={BGsinglePage} alt="bg-singlePage" className="img-singlePage" />
                <h1 className="title-singleBlog">CONTACT US</h1>
                <p className="description-singeBlog">Home/<span className="description-singleBlog-child">Contact Us</span></p>
            </div>
        </section>
    );
}