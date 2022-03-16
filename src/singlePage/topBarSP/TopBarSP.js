import { Link } from "react-router-dom";
import './topbarsp.css';

export default function TopBarSP() {
    return (
        <>
            <nav className='nav-single'>
            <Link to="/" className='nav-logo-single'><i className="fa-solid fa-house-chimney back-home"></i></Link>
          </nav>
        </>
    )
}