export default function Footer() {
    return (
        <section className="section-footer">
            <div className="footer-left">
                <h1 className="footer-title">LOGO</h1>
                <p className="footer-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi 
                </p>
            </div>
            <div className="footer-right">
                <div className="footer-items">
                    <div className="footer-item">
                        <h1 className="item-title">Company</h1>
                        <ul className="list-items">
                            <li className="item">About</li>
                            <li className="item">Contact</li>
                            <li className="item">Service</li>
                            <li className="item">Pricing</li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h1 className="item-title">Quick Links</h1>
                        <ul className="list-items">
                            <li className="item">Privacy & Policy</li>
                            <li className="item">Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h1 className="item-title">Office</h1>
                        <ul className="list-items">
                            <li className="item">Monday - Saturday</li>
                            <li className="item">9 am - 5 pm</li>
                            <li className="item">Surabaya, Indonesia</li>
                            <li className="item">(021) - 01010101</li>
                            <li className="item">office@mail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>2021 • All rights reserved • Design by DV-Studio.</p>
            </div>
        </section>
    );
}