import React from 'react';
import { Content, Grid, Column } from '@carbon/react';
import Home from './pages/Home';
import MyHeader from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <MyHeader/>
        <Content>
          <Home />
        </Content>
    <Footer />
    </>
    
  );
}

export default App;