import React from 'react';
import { Navbar } from './components';
import {
  AboutUs, Chef, Findus, Footer, Gallery, Header, Intro, Laurels, SpecMenu,
} from './container';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <Findus />
    <Footer />
  </>
);

export default App;
