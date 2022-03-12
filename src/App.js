import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portofolio from './pages/Portofolio';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Blogs from './singlePage/Blogs';
import {Helmet} from 'react-helmet';
import TopBar from './topBar/TopBar';
import Header from './singlePage/Header';
import Footer from './pages/Footer';
import DetailBlog from './singlePage/DetailBlog';

function App() {
  return (
    <>
      <TopBar/>
      <Header/>
      <DetailBlog/>
      <Footer/>
    </>
  );
}

export default App;
