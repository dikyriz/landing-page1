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
import TopBar from './topBar/TopBar';

function App() {
  return (
    <>
      <TopBar/>
      <Home/>
      
    </>
  );
}

export default App;
