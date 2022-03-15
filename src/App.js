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
import SinglePage from './singlePage/Pricing/SinglePage';

function App() {
  return (
    <>
      <TopBar/>
      <SinglePage/>
    </>
  );
}

export default App;
