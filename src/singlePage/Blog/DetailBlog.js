import { useNavigate } from 'react-router-dom';
import { CardOneBlog, CardTwoBlog } from '../../assets';
import '../css/detailBlog.css';
import TopBarSP from '../topBarSP/TopBarSP';

export default function DetailBlog() {
    const navigate = useNavigate();
    return (
        <>
        <TopBarSP/>
        <section className='section-detailBlog'>
            <div className='container-detailBlog'>
                <h1 className='title-detailBlog'><span className='go-back' onClick={() => {navigate('/blogs')}}><i class="fa-solid fa-arrow-left"></i></span>Stages of Making a Visual Design</h1>
                <p className='date-detailBlog'>18 November 2021  -  Admin</p>
                <img src={CardOneBlog} alt='card-detail' className='img-card-detail'/>
                <p className='descriptions-detail-blog'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    <span className='descriptions-detail-blog-child'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                    velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span>

                    <span className='descriptions-detail-blog-child'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give 
                    you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-
                    builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those 
                    who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</span>
                </p>
            </div>
            <div className='pictures'>
                <ul className='list-items-blog'>
                    <li className='item-blog'>
                        <img src={CardOneBlog} alt='pictures' className='img-picture'/>
                    </li>
                    <li className='item-blog'>
                        <img src={CardOneBlog} alt='pictures' className='img-picture'/>
                    </li>
                    <li className='item-blog'>
                        <img src={CardTwoBlog} alt='pictures' className='img-picture'/>
                    </li>
                    <li className='item-blog'>
                        <img src={CardTwoBlog} alt='pictures' className='img-picture'/>
                    </li>
                </ul>
            </div>
        </section>
        </>
    );
}