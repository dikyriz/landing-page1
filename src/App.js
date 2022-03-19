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
import SinglePageB from './singlePage/Blog/Blogs';
import SinglePage from './singlePage/Other/SinglePage';
import SinglePageP from './singlePage/Portofolio/SinglePage';
import TermConditions from './singlePage/Other/TermConditions/TermConditions';
import DetailPortofolio from './singlePage/Portofolio/DetailPortofolio';
import TopBarSP from './singlePage/topBarSP/TopBarSP';
import SinglePagePr from './singlePage/Pricing/SinglePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:slug' element={<SinglePage/>} />
        <Route path='portofolio' element={<SinglePageP/>} />
        <Route path='portofolio/:slug' element={<DetailPortofolio/>} />
        <Route path='pricing' element={<SinglePagePr/>} />
        <Route path='blogs' element={<SinglePageB/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
