import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 39, text: 'Open Source Projects'},
  { number: 7, text: 'Github Followers', },
  { number: 14, text: 'Github Stars', },
  { number: 200, text: 'NPM packages downloaded by devs', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Some Stats</SectionTitle>
    <Boxes>
      {data.map( (card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
