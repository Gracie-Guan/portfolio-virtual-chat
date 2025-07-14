import React from 'react';
import { Content } from '@carbon/react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import MyHeader from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import Chat from './pages/Chat';
import Gallery from './pages/Gallery';
import NomnomCaseStudy from './pages/CaseStudy/CaseStudy01';
import TCDRenters from './pages/CaseStudy/CaseStudy02';
import MktResearch from './pages/CaseStudy/csMkt01';  
import ProductLaunch from './pages/CaseStudy/csMkt02';
import TestDrive from './pages/CaseStudy/csMkt03';     
import MktIntegrated from './pages/CaseStudy/csMkt04'; 
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='App'>
      <MyHeader />
        <Content>
          {/* <Router> */}
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />}  />
                <Route path='/chat' element={<Chat />}  />
                <Route path='/work' element={<Work />}  />
                <Route path='/playground' element={<Gallery />}  />
                <Route path='/nomnom' element={<NomnomCaseStudy/>} />
                <Route path='/tcdrenters' element={<TCDRenters/>} />
                <Route path='/research' element={<MktResearch  />} />
                <Route path='/launch' element={<ProductLaunch />} />
                <Route path='/testdrive' element={<TestDrive />} />
                <Route path='/campaign' element={<MktIntegrated />} />
            </Routes>
          {/* </Router> */}
        </Content>
      <Footer />
    </div>
  );
}

export default App;