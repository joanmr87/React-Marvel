import React, {useState} from 'react';

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
  const [selectedHeroe, setSelectedHeroe] = useState(10);

  return (
    <div className="App">
      <Header/>
      <ContainerBody>
      <SplitPane 
        right={ <>
                <HeroeDetail heroe={charactersInfo.data.results[selectedHeroe]} selectedHeroe={selectedHeroe} setSelectedHeroe={setSelectedHeroe}/>
                <Accordion >                  
                  <LinkList heroeComics={charactersInfo.data.results[selectedHeroe].comics} selectedHeroe={selectedHeroe} setSelectedHeroe={setSelectedHeroe}/>

                </Accordion>
                </>
              }
              
        left={ <HeroesList heroe={charactersInfo.data} selectedHeroe={selectedHeroe} setSelectedHeroe={setSelectedHeroe}/>}>
      </SplitPane>
      
      </ContainerBody>
      <Footer/>
    </div>
  );
}

export default App;
