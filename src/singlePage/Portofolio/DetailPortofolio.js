import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardOne } from '../../assets';
import '../css/detailPortofolio.css';
import TopBarSP from '../topBarSP/TopBarSP';
import DescriptionDetail from './DescriptionDetail';
import ListImageDetail from './ListImageDetail';


export default function DetailPortofolio() {
    // const [images, setImages] = useState (false);
    const [data, setData] = useState(true);
    const params = useParams();
    console.log(params.slug);

    useEffect(function() {

        if (data) {
            // setImages(false);
            console.log('data = ', data);
        }

        // if (images) {
        //     setData(false);
        //     console.log('images = ', images);
        // }
    });

    return (
        <>
        <section className={data ? 'section-detailPortofolio' : 'section-change-detailPortofolio'}>
            <h1 className='title-detailPortofolio'>Wireframe Mobile Apps</h1>
            <img src={CardOne} alt='img-portofolio' className='img-detailPortofolio'/>
            <ul className='list-item-detailPortofolio'>
                <li className={data ? 'btn-detailPortofolio' : 'item-detailPortofolio'} onClick={() => setData(true)}>Description</li>
                <li className={data ? 'item-detailPortofolio' : 'btn-detailPortofolio'} onClick={() => setData(false)}>Images</li>
            </ul>
            <div className='container-description'>
                {data ? ( <DescriptionDetail/> ) : (<ListImageDetail/>)}                
                
            </div>
        </section>
        </>
    );
}