import { useNavigate } from "react-router-dom";
import { CardOne } from "../../assets";
import '../css/post.css';
import TopBarSP from "../topBarSP/TopBarSP";

export default function Post() {
    const navigate = useNavigate();

    return (
        <section className="post">
            <div className='item-card-singlePage-portofolio' onClick={() => {navigate('test')}}>
                    <img src={CardOne} alt="card-portofolio" className='img-card-sp-pf'/>
                    <div className='container-sp-pf'>
                        <h1 className='title-card-sp'>Barn Fashion</h1>
                        <p className='description-card-sp'>UI Design</p>
                    </div>
                </div>
        </section>
    );
}