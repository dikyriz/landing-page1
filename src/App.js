import logo from './logo.svg';

import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portofolio from './pages/Portofolio';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import {Helmet} from 'react-helmet';
import TopBar from './topBar/TopBar';
import Footer from './pages/Footer';
import DetailBlog from './singlePage/Blog/DetailBlog';
import SinglePage from './singlePage/Other/SinglePage';
import SinglePageP from './singlePage/Portofolio/SinglePage';
import TermConditions from './singlePage/Other/TermConditions/TermConditions';
import DetailPortofolio from './singlePage/Portofolio/DetailPortofolio';
import TopBarSP from './singlePage/topBarSP/TopBarSP';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:contact' element={<SinglePage/>} />
        <Route path='portofolio' element={<SinglePageP/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
