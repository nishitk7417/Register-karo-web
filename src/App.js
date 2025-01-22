import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutUs from './components/Main/AboutUs/AboutUs';
import Home from './components/Main/Home/Home';
import Contact from './components/Main/Contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
