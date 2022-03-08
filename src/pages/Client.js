import { ClientOne, ClientTwo } from "../assets";

export default function Client() {
    return (
        <section className="section-client">
            <div className="client-header">
                <h1 className="client-title">Our Clients</h1>
                <p className="client-description">Those who have trusted our services. Project delivered, customer happy.</p>
            </div>
            <div className="client-items">
                <div className="client-item">
                    <img src={ClientOne} alt="client-one" className="img-clnt"/>
                    <div className="container-clnt">
                    <p className="item-clnt-description">
                        You'll get the best of what you put in. the 
                        team is working at their best to provide us
                        variety of spaces and homes. Had a great 
                        experience working with them. Thanks a lot
                    </p>
                    </div>
                </div>
                <div className="client-item">
                    <img src={ClientTwo} alt="client-two" className="img-clnt"/>
                    <div className="container-clnt">
                    <p className="item-clnt-description">
                        I am very happy to get the design results 
                        that are according to my wishes. 
                        Thank you friend.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
}