import { BGsinglePage } from "../assets";

export default function Header() {
    return (
        <section>
            <div className="header-blog-single">
                <img src={BGsinglePage} alt="bg-singlePage" className="img-singlePage" />
                <h1 className="title-singleBlog">BLOG</h1>
                <p className="description-singeBlog">Home/<span className="description-singleBlog-child">Blog</span></p>
            </div>
        </section>
    );
}