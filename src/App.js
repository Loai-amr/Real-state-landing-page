import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { SliderData } from './data/SliderData'
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import InfoSection from "./components/InfoSection";
import { InfoDta,InfoDtaTwo } from "./data/InfoData";
import TwoinoneSec from "./components/TwoinoneSec";
import BlackBack from "./components/BlackBack";
import Footer from "./components/Footer";
import Fade from 'react-reveal/Fade';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
const [isOpen,setIsOpen] = useState(false);
const toggle = () => {
  setIsOpen(!isOpen)
}
const ShoN='true';

  return (
    <>
    <Router>
      <GlobalStyle/>
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          
          <Switch>
              <Route exact path='/'>
              <Hero slides={SliderData} id="rentals"/>
               <Fade right> 
                  <InfoSection {...InfoDta}/>
                </Fade>
                <TwoinoneSec/>
                <BlackBack/>
                <Fade left>
                <InfoSection {...InfoDtaTwo}/>
              </Fade>
              </Route>
              <Route path='/homes'>
               <Navbar toggle={toggle} ShoN={ShoN}/>
                <Dropdown isOpen={isOpen} toggle={toggle} />
                <TwoinoneSec />
              </Route>
              <Route path='/about'>
                <BlackBack/>
              </Route>
              <Route path='/rentals'>
              <Hero slides={SliderData} id="rentals"/>
              </Route>
            </Switch>
          <Footer/>
          </Router>


    </>
  );
}

export default App;
