import { CardOne } from '../../assets';
import '../css/portofolio.css';

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
                <div className='item-card-singlePage-portofolio'>
                    <img src={CardOne} alt="card-portofolio" className='img-card-sp-pf'/>
                    <div className='container-sp-pf'>
                        <h1 className='title-card-sp'>Barn Fashion</h1>
                        <p className='description-card-sp'>UI Design</p>
                    </div>
                </div>
                 <div className='item-card-singlePage-portofolio'>
                    <img src={CardOne} alt="card-portofolio" className='img-card-sp-pf'/>
                    <div className='container-sp-pf'>
                        <h1 className='title-card-sp'>Header Code</h1>
                        <p className='description-card-sp'>Web Development</p>
                    </div>
                </div>
                 <div className='item-card-singlePage-portofolio'>
                    <img src={CardOne} alt="card-portofolio" className='img-card-sp-pf'/>
                    <div className='container-sp-pf'>
                        <h1 className='title-card-sp'>Task Scheduling</h1>
                        <p className='description-card-sp'>Product Design</p>
                    </div>
                </div>
                 <div className='item-card-singlePage-portofolio'>
                    <img src={CardOne} alt="card-portofolio" className='img-card-sp-pf'/>
                    <div className='container-sp-pf'>
                        <h1 className='title-card-sp'>Wireframe Mobile Apps</h1>
                        <p className='description-card-sp'>UI Design</p>
                    </div>
                </div>
            </div>
        </section>
    );
}