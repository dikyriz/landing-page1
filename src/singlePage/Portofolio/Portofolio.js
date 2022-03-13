import { CardOne } from '../../assets';
import '../css/portofolio.css';
import Post from './Post';

export default function Portofolio () {
    return (
        <section className="portofolio-singlePage">
            <h1 className='title-singlePage-portofolio'>My Projects.</h1>
            <ul className='list-item-singlePage-portofolio'>
                <li className='item-singlePage-portofolio'>All</li>
                <li className='item-singlePage-portofolio'>Web Development</li>
                <li className='item-singlePage-portofolio'>Product Design</li>
                <li className='item-singlePage-portofolio'>UI Design</li>
            </ul>
            <div className='card-singlePage-portofolio'>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </section>
    );
}