import React from 'react'

//Styled Components
import { 
  Container,
  Project,
  Image,
  Links,
  Link,
  Title,
  Date,
  Description,
  GithubIcon,
  DevpostIcon,
  LinkIcon} from './Projects.elements'

//Images
import BCSC from '../../images/bcsc.png';
import Foodtastic from '../../images/foodtastic.png';
import Fluencity from '../../images/fluencity.png';
import SmartDoorLock from '../../images/smartDoorLock.png';
import SmartDoorLockApp from '../../images/smartdoorlockapp.png';


//IMAGE RESOLUTIONS: W: 2880px H: 1635px

const Projects = () => {
  return (
    <div>
      <Container>
        <Project>
          <Image src={BCSC}></Image>
          <Links>
            <Link href="https://github.com/Bethune-Computer-Science-Club/club-website" target="_blank" rel="noreferrer"><GithubIcon/></Link>
            <Link href="codingclub.bethuneci.com/" target="_blank" rel="noreferrer"><LinkIcon/></Link>
          </Links>
          <Title>CS Club Website</Title>
          <Date>May 2021</Date>
          <Description>The official website of the Bethune Computer Science Club. The frontend was created with React.js. Firebase used to authenticate executives and a Firestore database used to store announcements, executives, and projects.</Description>
        </Project>
        <Project>
          <Image src={Foodtastic}></Image>
          <Links>
            <Link href="https://github.com/ThunderRoar/Foodtastic" target="_blank" rel="noreferrer"><GithubIcon/></Link>
            <Link href="https://devpost.com/software/foodtastic" target="_blank" rel="noreferrer"><DevpostIcon/></Link>
            <Link href="https://thunderroar.github.io/Foodtastic/" target="_blank" rel="noreferrer"><LinkIcon/></Link>
          </Links>
          <Title>Foodtastic</Title>
          <Date>May 2022</Date>
          <Description>A website that uses the Flipp API and Spoonacular API to compile a list of recipes and supermarkets to find the cheapest ingredients. This project was submitted to Jamhacks 6, and won Best Hack for University Students. It was created using HTML, CSS, and JS.</Description>
        </Project>
        <Project>
          <Image src={Fluencity}></Image>
          <Links>
            <Link href="https://github.com/Winswins22/Fluencity" target="_blank" rel="noreferrer"><GithubIcon/></Link>
            <Link href="https://devpost.com/software/fluencity" target="_blank" rel="noreferrer"><DevpostIcon/></Link>
            <Link href="https://winswins22.github.io/Fluencity/" target="_blank" rel="noreferrer"><LinkIcon/></Link>
          </Links>
          <Title>Fluencity</Title>
          <Date>August 2021</Date>
          <Description>This is a website used to train reading and speech fluency using the Symbl.ai text-to-speech API. Fluencity was submitted to XHacks 2021 and won Best Veteran Hack and Best use of Symbl.ai. It was built using React.js.</Description>
        </Project>
        <Project>
          <Image src={SmartDoorLock}></Image>
          <Links>
            <Link href="https://github.com/Ri-Hong/Smart-Door-Lock" target="_blank" rel="noreferrer"><GithubIcon/></Link>
          </Links>
          <Title>Smart Door Lock</Title>
          <Date>April 2021</Date>
          <Description>A lock module which consists of a ESP32 microcontroller, a 16x2 LCD display, an HW-138 keypad, and a SG90 servo motor. To lock/unlock, the user can enter a pin or use the companion app. The module and the app communicate via IoT MQTT. </Description>
        </Project>
        <Project>
          <Image src={SmartDoorLockApp}></Image>
          <Links>
            <Link href="https://github.com/Ri-Hong/Smart-Door-Lock-App" target="_blank" rel="noreferrer"><GithubIcon/></Link>
          </Links>
          <Title>Smart Door Lock App</Title>
          <Date>April 2021</Date>
          <Description>This is the companion app to the Smart Door Lock Module. This app allows the user to monitor the state of the lock, check the usage history of the lock, and edit the pin and of the user. This app was made using Android Studio and uses the builtin Android database.</Description>
        </Project>
        
      </Container>
    </div>
  );
}

export default Projects