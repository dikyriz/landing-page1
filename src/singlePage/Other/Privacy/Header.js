import { BGsinglePage } from "../../../assets";
import '../../css/header.css';

export default function Header () {
    return (
        <section>
            <div className="header-blog-single">
                <img src={BGsinglePage} alt="bg-singlePage" className="img-singlePage" />
                <h1 className="title-singleBlog">Privacy & Policy</h1>
            </div>
        </section>
    );
}