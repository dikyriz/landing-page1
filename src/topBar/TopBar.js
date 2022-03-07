import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <>
            <nav className='nav'>
            <p className='nav-logo'>LOGO</p>
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/about" className='nav-item'>About</Link>
            <Link to="/portofolio" className='nav-item'>Portofolio</Link>
            <Link to="/services" className='nav-item'>Services</Link>
            <Link to="/pricing" className='nav-item'>Pricing</Link>
            <Link to="/blog" className='nav-item'>Blog</Link>
          </nav>
        </>
    )
}