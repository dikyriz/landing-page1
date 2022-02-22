import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portofolio from './pages/Portofolio';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import {Helmet} from 'react-helmet';

function App() {
  return (
    <div className="app">
      <Helmet>
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
      </Helmet>
        <nav className='nav'>
          <Link to="/" className='nav-item'>Home</Link>
          <Link to="/about" className='nav-item'>About</Link>
          <Link to="/portofolio" className='nav-item'>Portofolio</Link>
          <Link to="/services" className='nav-item'>Services</Link>
          <Link to="/pricing" className='nav-item'>Pricing</Link>
          <Link to="/blog" className='nav-item'>Blog</Link>
        </nav>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='portofolio' element={<Portofolio/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='pricing' element={<Pricing/>}/>
          <Route path='blog' element={<Blog/>}/>
        </Routes>
    </div>
  );
}

export default App;
