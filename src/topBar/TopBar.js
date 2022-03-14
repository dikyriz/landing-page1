import { Link } from "react-scroll";
import './topbar.css';

export default function TopBar() {
    return (
        <>
            <nav className='nav'>
            <p className='nav-logo'>LOGO</p>
            <Link to="/" className='nav-item' smooth={true} duration={1000}>Home</Link>
            <Link to="about" className='nav-item' smooth={true} duration={1000}>About</Link>
            <Link to="portofolio" className='nav-item' smooth={true} duration={1000}>Portofolio</Link>
            <Link to="services" className='nav-item' smooth={true} duration={1000}>Services</Link>
            <Link to="pricing" className='nav-item' smooth={true} duration={1000}>Pricing</Link>
            <Link to="blog" className='nav-item' smooth={true} duration={1000}>Blog</Link>
          </nav>
        </>
    )
}