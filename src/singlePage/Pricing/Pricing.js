import '../css/pricing.css';

export default function Pricing () {
    return (
        <section className='pricing-singlePage'>
            <h1 className='title-pricing-singlePage'>Flexibel Plans</h1>
            <p className='desc-pricing-singlePage'>Choose a plan that works best for you
            <span className='desc-pricing-singlePage-child'>and your team</span></p>
            <div className='card-singlePage'>
                <div className='card-pricing-singlePage'>
                    <ul className='list-card-pricing-singlePage'>
                        <li className='card-pricing-singlePage-1'>
                            <h1 className='title-card-pricing-singlePage'>Basic Plan</h1>
                            <p className='desc-card-pricing-singlePage'>For most businesses looking to 
                            optimize web queries.</p>
                            <li className='item-card-pricing-singlePage'>10 GB Disk Space</li>
                            <li className='item-card-pricing-singlePage'>Unlimited Users</li>
                            <li className='item-card-pricing-singlePage'>Chat Support</li>
                            <li className='item-card-pricing-singlePage'>Unlimited Subdomains</li>
                            <div className='btn-singlePage'>
                                <p className='btn-card-pricing-singlePage'>Get The Offer Now</p>
                            </div>
                        </li>
                    </ul>
                    <ul className='list-card-pricing-singlePage'>
                        <li className='card-pricing-singlePage-1'>
                            <h1 className='title-card-pricing-singlePage'>Popular Plan</h1>
                            <p className='desc-card-pricing-singlePage'>For most businesses looking to 
                            optimize web queries.</p>
                            <li className='item-card-pricing-singlePage'>10 GB Disk Space</li>
                            <li className='item-card-pricing-singlePage'>Unlimited Users</li>
                            <li className='item-card-pricing-singlePage'>Chat Support</li>
                            <li className='item-card-pricing-singlePage'>Unlimited Subdomains</li>
                            <div className='btn-singlePage'>
                                <p className='btn-card-pricing-singlePage'>Get The Offer Now</p>
                            </div>
                        </li>
                    </ul>
                    <ul className='list-card-pricing-singlePage'>
                        <li className='card-pricing-singlePage-1'>
                            <h1 className='title-card-pricing-singlePage'>Enterprise Plan</h1>
                            <p className='desc-card-pricing-singlePage'>For most businesses looking to 
                            optimize web queries.</p>
                            <li className='item-card-pricing-singlePage'>10 GB Disk Space</li>
                            <li className='item-card-pricing-singlePage'>Unlimited Users</li>
                            <li className='item-card-pricing-singlePage'>Chat Support</li>
                            <li className='item-card-pricing-singlePage'>Unlimited Subdomains</li>
                            <div className='btn-singlePage'>
                                <p className='btn-card-pricing-singlePage'>Get The Offer Now</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}