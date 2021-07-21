import React from 'react';

import '../assets/styles/App.css';

import charactersInfo from '../data/marvel/characters.json';
import comicInfo from '../data/marvel/comics.json';

import Header from '../components/Header.jsx';
import ContainerBody from '../components/ContainerBody.jsx';
import Footer from '../components/Footer.jsx';
import SplitPane from '../components/SplitPane.jsx';
import HeroeDetail from '../components/HeroeDetail';
import HeroesList from '../components/HeroesList';
import LinkList from '../components/LinkList';
import Accordion from '../components/Accordion';


function App() {
  console.log(charactersInfo);
  return (
    <div className="App">
      <Header/>
      <ContainerBody>
      <SplitPane 
        right={ <>
                <HeroeDetail heroe={charactersInfo.data.results[14]}/>
                <Accordion >                  
                  <LinkList heroe={charactersInfo.data.results[14]}/>
                </Accordion>
                </>
              }
              
        left={ <HeroesList/>}>
      </SplitPane>
      
      </ContainerBody>
      <Footer/>
    </div>
  );
}

export default App;
