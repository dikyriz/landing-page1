import { CardOneBlog } from "../assets";

export default function Blog () {
    return (
        <section className="section-blog">
            <div className="header-blog">
                <h1 className="blog-title">Blog Posts</h1>
                <p className="blog-description">Latest news and articles</p>
            </div>
            <div className="card-blog">
                <div className="card-1-blog">
                    <img src={CardOneBlog} alt="card-1-blog" className="img-blog"/>
                    <div className="container-blog">
                    <h4 className="card-title">Stages of Making a Vi..</h4>
                    <p className="card-description">Lorem dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna 
                    aliqua ....
                    </p>
                    </div>
                </div>
            </div>                
        </section>
    );
}