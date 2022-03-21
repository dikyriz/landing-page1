import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact () {
    const navigate = useNavigate();

    useEffect(function (){
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="section-contact-singlePage">
            <h1 className="title-contact-singlePage">
                Have a Project ?
                <span className="title-contact-singlePage-child">
                    Let's discuss together
                </span>
            </h1>
            <div className="card-contact-singlePage">
                <ul className="list-card-contact">
                    <li className="contact-maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.25708156316!2d112.64264274529835!3d-7.275443785053112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Kota%20SBY%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1647318669300!5m2!1sid!2sid" width={400} height={300} style={{border:0}} allowFullScreen loading={'lazy'} className="maps"></iframe>
                    </li>
                    <li className="contact-input">
                        <div className="container-input">

                        <h1 className="title-card-contact">Send us a Message</h1>
                        <label className="lbl-contact">Name<span className="lbl-contact-child">&#42;</span></label>
                        <input className="ipt-contact"/>
                        <label className="lbl-contact">Email<span className="lbl-contact-child">&#42;</span></label>
                        <input className="ipt-contact"/>
                        <label className="lbl-contact">Phone<span className="lbl-contact-child">&#42;</span></label>
                        <input className="ipt-contact"/>
                        <label className="lbl-contact">Message<span className="lbl-contact-child">&#42;</span></label>
                        <textarea className="tex-contact"/>
                        <p className="btn-contact-singlePage">Send Message</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}