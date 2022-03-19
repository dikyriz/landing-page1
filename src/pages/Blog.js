import { useNavigate } from "react-router-dom";
import { CardOneBlog, CardThreeBlog, CardTwoBlog } from "../assets";
import './css/blog.css';

export default function Blog () {
    const navigate = useNavigate();

    return (
        <section className="section-blog">
            <a className="anchor" id="blog" />
            <div className="header-blog">
                <h1 className="blog-title">Blog Posts</h1>
                <p className="blog-description">Latest news and articles</p>
            </div>
            <div className="card-blog">
                <div className="card-1-blog">
                    <img src={CardOneBlog} alt="card-1-blog" className="img-blog"/>
                    <div className="container-blog">
                    <h4 className="card-title-blog">Stages of Making a Vi..</h4>
                    <p className="card-description-blog">Lorem dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna 
                    aliqua ....
                    </p>
                    </div>
                </div>
                <div className="card-1-blog">
                    <img src={CardTwoBlog} alt="card-2-blog" className="img-blog" />
                    <div className="container-blog">
                    <h4 className="card-title-blog">How to Make an Attr..</h4>
                    <p className="card-description-blog">Lorem dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna 
                    aliqua ....
                    </p>
                    </div>
                </div>
                <div className="card-1-blog">
                    <img src={CardThreeBlog} alt="card-3-blog" className="img-blog"/>
                    <div className="container-blog">
                    <h4 className="card-title-blog">Increase Visitor Tra..</h4>
                    <p className="card-description-blog">Lorem dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna 
                    aliqua ....
                    </p>
                    </div>
                </div>
            </div>                
            <div className="more-blogs-post">
                <p className="more-blogs" onClick={() => {navigate('blogs')}}>Read More Blogs</p>
            </div>
        </section>
    );
}