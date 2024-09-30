import React,  { useState, useEffect }  from 'react';
import { Content } from '@carbon/react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import MyHeader from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Gallery from './pages/Gallery';
import NomnomCaseStudy from './pages/CaseStudy/CaseStudy01';
import TCDRenters from './pages/CaseStudy/CaseStudy02';

function App() {
  return (
    <div className='App'>
      <MyHeader />
        <Content>
          <Router>
            <Routes>
                <Route path='/' element={<Home />}  />
                <Route path='/about' element={<About />}  />
                <Route path='/work' element={<Work />}  />
                <Route path='/gallery' element={<Gallery />}  />
                <Route path='/nomnom' element={<NomnomCaseStudy/>} />
                <Route path='/tcdrenters' element={<TCDRenters/>} />
            </Routes>
          </Router>
        </Content>
      <Footer />
    </div>
  );
}

export default App;