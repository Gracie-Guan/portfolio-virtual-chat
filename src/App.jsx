import React,  { useState, useEffect }  from 'react';
import { Content } from '@carbon/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyHeader from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Gallery from './pages/Gallery';
import NomnomCaseStudy from './pages/CaseStudy/CaseStudy01';
import TCDRenters from './pages/CaseStudy/CaseStudy02';
import MktResearch from './pages/CaseStudy/csMkt01';  
import ProductLaunch from './pages/CaseStudy/csMkt02';
import TestDrive from './pages/CaseStudy/csMkt03';     
import MktIntegrated from './pages/CaseStudy/csMkt04'; 


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
                <Route path='/playground' element={<Gallery />}  />
                <Route path='/nomnom' element={<NomnomCaseStudy/>} />
                <Route path='/tcdrenters' element={<TCDRenters/>} />
                <Route path='/research' element={<MktResearch  />} />
                <Route path='/launch' element={<ProductLaunch />} />
                <Route path='/testdrive' element={<TestDrive />} />
                <Route path='/campaign' element={<MktIntegrated />} />
            </Routes>
          </Router>
        </Content>
      <Footer />
    </div>
  );
}

export default App;