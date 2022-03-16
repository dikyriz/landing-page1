import { Link } from "react-router-dom";
import './topbarsp.css';

export default function TopBarSP() {
    return (
        <>
            <nav className='nav'>
            <Link to="/" className='nav-logo'><span className="back-home">&#10140;</span>GO BACK</Link><p ></p>
          </nav>
        </>
    )
}