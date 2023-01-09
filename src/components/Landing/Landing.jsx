import React from 'react'

import AboutMe from '../AboutMe/AboutMe'
import Header from '../Header/Header'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import layer0 from '../../images/Layer0.png';
import layer1 from '../../images/Layer1.png';
import layer2 from '../../images/Layer2.png';
import layer3 from '../../images/Layer3.png';
import layer4 from '../../images/Layer4.png';
import layer5 from '../../images/Layer5.png';
import layer6 from '../../images/Layer6.png';


const Landing = () => {
  return (
    <div >
      <Parallax pages = {2}>
        <ParallaxLayer offset={0} speed={0.4} 
        style={{
          backgroundImage: `url(${layer0})`,
          backgroundSize: 'cover'
        }}>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}
        style={{
          backgroundImage: `url(${layer1})`,
          backgroundSize: 'cover'
        }}>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.6}
        style={{
          backgroundImage: `url(${layer2})`,
          backgroundSize: 'cover'
        }}>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.7}
        style={{
          backgroundImage: `url(${layer3})`,
          // backgroundSize: 'cover'
        }}>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.8}
        style={{
          backgroundImage: `url(${layer4})`,
          backgroundSize: 'cover'
        }}>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.9}
        style={{
          backgroundImage: `url(${layer5})`,
          backgroundSize: 'cover'
        }}>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}
        style={{
          backgroundImage: `url(${layer6})`,
          backgroundSize: 'cover',
        }}>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0.9999} speed={0.75}>
          <Header text="hello world"></Header>
          <AboutMe></AboutMe>
        </ParallaxLayer>
      </Parallax>
    </div>
  )

}

export default Landing;
