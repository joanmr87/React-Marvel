import React from 'react';

import '../assets/styles/App.css';

import charactersInfo from '../data/marvel/characters.json';
import comicInfo from '../data/marvel/comics.json';

import Header from '../components/Header.jsx';
import ContainerBody from '../components/ContainerBody.jsx';
import Footer from '../components/Footer.jsx';
import SplitPane from '../components/SplitPane.jsx';
import HeroeDetail from '../components/HeroeDetail';


function App() {
  console.log(charactersInfo.data.results[18]);
  return (
    <div className="App">
      <Header/>
      <ContainerBody>
      <SplitPane>
        <HeroeDetail heroe={charactersInfo.data.results[14]}/>
      </SplitPane>
      
      </ContainerBody>
      <Footer/>
    </div>
  );
}

export default App;
