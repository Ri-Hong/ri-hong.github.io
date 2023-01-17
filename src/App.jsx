import React, { useEffect } from 'react'
import './styles.css'

//Images
import background from './images/background.png'
import layer0 from './images/Layer0.png';
import layer1 from './images/Layer1.png';
import layer2 from './images/Layer2.png';
import layer3 from './images/Layer3.png';
import layer4 from './images/Layer4.png';
import layer5 from './images/Layer5.png';
import layer6 from './images/Layer6.png';

//Components
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

import resume from './Resumes/resume.pdf'

import ReactGA from "react-ga4";
ReactGA.initialize("G-C17KTPET1R");

function App() {

  return (
    <body>
      <div class="wrapper">
        <header>
          <img src={layer0} className="layer0 layer" alt="" draggable="false"></img>
          <img src={layer1} className="layer1 layer" alt="" draggable="false"></img>
          <img src={layer2} className="layer2 layer" alt="" draggable="false"></img>
          <img src={layer3} className="layer3 layer" alt="" draggable="false"></img>
          <img src={layer4} className="layer4 layer" alt="" draggable="false"></img>
          <img src={layer5} className="layer5 layer" alt="" draggable="false"></img>
          <img src={layer6} className="layer6 layer" alt="" draggable="false"></img>
          <div className="fade layer6 layer"></div>
          <h1 class="title">Ri Hong</h1>
          <a className="navBtn" href={resume} target="_blank" rel="noreferrer">Resume</a>
        </header>
         <div className="contentSection" style={{backgroundImage: `url(${background})`}}>
          <Header text="About Me"></Header>
          <AboutMe></AboutMe>
          <Header text="Skills"></Header>
          <Skills></Skills>
          <Header text="Experience"></Header>
          <Experience></Experience>
          <Header text="Projects"></Header>
          <Projects></Projects>
          <Footer></Footer>
        </div>
      </div>
    </body>

  );
}

export default App;
