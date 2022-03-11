import { CardOneBlog, CardThreeBlog, CardTwoBlog } from '../assets';
import './css/blogs.css';

export default function Blogs() {
    return (
        <section className="section-blogs">
            <div className='card-blogs'>
                <div className='card-blogs-1'>
                    <h1 className='title-blogs'>Stages of Making a Visual Design</h1>
                    <div className='container-blogs'>
                        <img src={CardOneBlog} alt="card-blog" className='img-card-blogs'/>
                        <div className='container-descriptions-blogs'>
                            <p className='descriptions-card-blogs'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                ad minim veniam, quis nostrud exercitation ullamco laboris
                                aliquip ex ea commodo consequat.... <span className='descriptions-card-blogs-child'>Read More</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='card-blogs-2'>
                    <h1 className='title-blogs'>How to Make an Attractive Product</h1>
                    <div className='container-blogs'>
                        <img src={CardTwoBlog} alt='card-blog' className='img-card-blogs' />
                        <div className='container-descriptions-blogs-2'>
                            <p className='descriptions-card-blogs'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                ad minim veniam, quis nostrud exercitation ullamco laboris
                                aliquip ex ea commodo consequat.... <span className='descriptions-card-blogs-child'>Read More</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='card-blogs-3'>
                    <h1 className='title-blogs'>Increase Visitor Traffic</h1>
                    <div className='container-blogs'>
                        <img src={CardThreeBlog} alt='card-blog' className='img-card-blogs'/>
                        <div className='container-descriptions-blogs-3'>
                            <p className='descriptions-card-blogs'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                ad minim veniam, quis nostrud exercitation ullamco laboris
                                aliquip ex ea commodo consequat.... <span className='descriptions-card-blogs-child'>Read More</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}