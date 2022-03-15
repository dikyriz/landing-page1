import { CardOne } from "../../assets";

export default function ListImageDetail () {
    return (
        <section>
            <ul className="list-image-detailPortofolio">
                <li className="image-detailPortofolio">
                    <img src={CardOne} alt="img-portofolio" className="list-img-detailPortofolio"/>
                </li>
                <li className="image-detailPortofolio">
                    <img src={CardOne} alt="img-portofolio" className="list-img-detailPortofolio"/>
                </li>
                <li className="image-detailPortofolio">
                    <img src={CardOne} alt="img-portofolio" className="list-img-detailPortofolio"/>
                </li>
                <li className="image-detailPortofolio">
                    <img src={CardOne} alt="img-portofolio" className="list-img-detailPortofolio"/>
                </li>
            </ul>
        </section>
    );
}