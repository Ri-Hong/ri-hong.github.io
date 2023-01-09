import React from 'react'

//Styled Components
import { 
  Section,
  SectionColumn,
  Image,
  TextSection,
  Title,
  Company,
  Time,
  Description} from './Experience.elements'

//Images
import MicrogreenLogo from '../../images/MicrogreenLogo.png';
import BCSCLogo from '../../images/BCSCLogo.png';

//IMAGE DIMENSIONS: 1500W x 1000H

const Experience = () => {
  return (
    <div>
      <Section imgStart={false}>
        <SectionColumn>
          <Image imgStart={false} src={MicrogreenLogo}></Image>
        </SectionColumn>
        <SectionColumn>
          <TextSection>
            <Title>Software Developer</Title>
            <Company>Microgreen Solar Corporation</Company>
            <Time>(Summers 2019-2022)</Time>
            <Description>During my summer internships at Microgreen, I had the opportunity to work on a variety of projects with numerous technologies, from IoT to app development to HMI programming. Microgreen helped me see the endless applications of programming and is one of the catalysts for me choosing a CS degree.</Description>
          </TextSection>
        </SectionColumn>
      </Section>
      <Section imgStart={true}>
        <SectionColumn>
          <Image imgStart={true} src={BCSCLogo}></Image>
        </SectionColumn>
        <SectionColumn>
          <TextSection>
            <Title>Team Captain</Title>
            <Company>Bethune Computer Science Club</Company>
            <Time>(September 2020 - June 2022)</Time>
            <Description>During my time as a Team Captain, I collaborated with my team to organize weekly meetings about computer science, such as preparing for the CCC. We also hosted the school’s first ever hackathon, with over 40 participants. I also led the development of the club’s official website.</Description>
          </TextSection>
        </SectionColumn>
      </Section>

    </div>
  )
}

export default Experience