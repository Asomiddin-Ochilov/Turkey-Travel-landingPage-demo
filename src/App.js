import React from 'react';
import './App.css';
import {Cantainer} from "./styled/styled";
import Header from "./components/header/header";
import About from "./components/about us/about";
import Gallery from "./components/gallery/gallery";
import AboutTurkey from "./components/about turkey/AboutTurkey";
import FooterBlock from "./components/footer/footer";
function App() {
  return (
      <Cantainer>
       <Header/>
       <About/>
       <Gallery/>
       <AboutTurkey/>
       <FooterBlock/>
      </Cantainer>
  );
}

export default App;
