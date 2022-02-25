import { CardThree } from "../assets";

export default function Services () {
    return (
        <section className="section-services">
            <h1 className="services-title">We Can Help You</h1>
            <p className="services-description">We help make your dreams come true through 
            <span className="services-description-child">innovation and creative perspectives.</span>
            </p>

            <div className="card-services">
                <ul>
                    <li>
                        <img src={CardThree} alt="card-3" className="img-services"/>
                        <div className="card-1-services">
                        <div className="container-services">
                            <h4 className="card-title-services">Web Design</h4>
                            <p className="card-description-services">
                            Making plans wireframe to UI
                            design on demand and does not 
                            neglect the main function.
                            </p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="card-2-services">
                        <div className="container-services">
                            <h4 className="card-title-services">Web Development</h4>
                            <p className="card-description-services">
                            Make a website display
                            according to the results of slicing
                            UI design and create and design
                            database and systems can
                            running smoothly.
                            </p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="card-3-services">
                        <div className="container-services">
                            <h4 className="card-title-services">App Development</h4>
                            <p className="card-description-services">
                            Mobile application development 
                            to make work easier and 
                            certainly can be used wherever 
                            you are.
                            </p>
                        </div>
                        </div>
                    </li>
                </ul>
            </div> 
        </section>
    );
}