import React,  { useState, useEffect }  from 'react';
import { Content, Grid, Column } from '@carbon/react';
import Home from './pages/Home';
import Work from './pages/Work';
import MyHeader from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleNavigation = (event) => {
      setCurrentPage(event.detail);
    };

    window.addEventListener('navigate', handleNavigation);

    return () => {
      window.removeEventListener('navigate', handleNavigation);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'work':
        return <Work />;
      case 'about':
        return <About />;
     case 'gallery':
        return <Gallery />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <MyHeader />
      <Content>
        {renderPage()}
      </Content>
      <Footer />
    </>
  );
}

export default App;