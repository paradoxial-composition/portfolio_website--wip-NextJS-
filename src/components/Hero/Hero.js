import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I m Oto <br />
        Welcome to my virtual business card.
      </SectionTitle>
      <SectionText>
        I am a Fullstack JavaScritp developper with a sense of adventure and want for new experiences, I am light minded, fast learner and adaptive.
      </SectionText>
      <Button onClick={() => window.open('https://github.com/paradoxial-composition', '_blank')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;