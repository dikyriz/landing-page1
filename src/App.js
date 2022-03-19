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
import SinglePageB from './singlePage/Blog/SinglePage';
import SinglePage from './singlePage/Other/SinglePage';
import SinglePageP from './singlePage/Portofolio/SinglePage';
import TermConditions from './singlePage/Other/TermConditions/TermConditions';
import DetailPortofolio from './singlePage/Portofolio/DetailPortofolio';
import TopBarSP from './singlePage/topBarSP/TopBarSP';
import SinglePagePr from './singlePage/Pricing/SinglePage';
import DetailBlog from './singlePage/Blog/DetailBlog';

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
        <Route path='blogs/:slug' element={<DetailBlog/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
