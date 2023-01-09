import React from 'react'
import './styles.css'

//Images
import background from './images/background.png'
import layer0 from './images/Layer0.png';
import layer1 from './images/Layer1.png';
import layer2 from './images/Layer2.png';
import layer3 from './images/Layer3.png';
import layer4 from './images/Layer4.png';
import layer5 from './images/Layer5.png';
import layer6 from './images/Layer6v4.png';

//Components
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

import resume from './Resumes/resume.pdf'

function App() {

  return (
    <div>

      <div className="parallax">
        {/* <Navbar></Navbar> */}

        {/* Parallax Landing */}
        <div className="parallax__group" id="landing_layer">
          <div className="parallax__layer parallax__layer--0">
            <img className="parallax__img" src={layer0} alt="" draggable="false"></img>
          </div>
          <div className="parallax__layer parallax__layer--1">
            <img className="parallax__img" src={layer1} alt="" draggable="false"></img>
          </div>
          <div className="parallax__layer parallax__layer--name">
            <h1 className="name">Ri Hong</h1>
          </div>
          <div className="parallax__layer parallax__layer--resume_button">
            <a className="navBtn" href={resume} target="_blank" rel="noreferrer">Resume</a>
          </div>
          <div className="parallax__layer parallax__layer--2">
            <img className="parallax__img" src={layer2} alt="" draggable="false"></img>
          </div>
          <div className="parallax__layer parallax__layer--3">
            <img className="parallax__img" src={layer3} alt="" draggable="false"></img>
          </div>
          <div className="parallax__layer parallax__layer--4">
            <img className="parallax__img" src={layer4} alt="" draggable="false"></img>
          </div>
          <div className="parallax__layer parallax__layer--5">
            <img className="parallax__img" src={layer5} alt="" draggable="false"></img>
          </div>
          <div className="parallax__layer parallax__layer--6">
            <img className="parallax__img" src={layer6} alt="" draggable="false"></img>
          </div>
        </div>
        <div style={{height: "135vh"}}></div>

        {/* Content */}
        {/* <div className="parallax__group" id="content_layer" style={{backgroundImage: `url(${background})`, border: '3px solid red'}}>
          <Header text="About Me"></Header>
          <AboutMe></AboutMe>
          <Header text="Skills"></Header>
          <Skills></Skills>
          <Header text="Experience"></Header>
          <Experience></Experience>
          <Header text="Projects"></Header>
          <Projects></Projects>
          <Footer></Footer>
        </div> */}

      </div>

    </div>
  );
}

export default App;
