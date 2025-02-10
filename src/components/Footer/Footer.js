import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+33 ">+212 6 13 58 02 81</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email me at</LinkTitle>
          <LinkItem href="https://mail.google.com/mail/?view=cm&fs=1&to=elbani.othman@gmail.com" target="_blank" rel="noopener noreferrer">
            elbani.othman@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer>
        <Slogan>Building one project at a time.</Slogan>
      </CompanyContainer>
      <SocialIconsContainer>
        <SocialIcons href="https://github.com/paradoxial-composition">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/othman-el-bani-701b41176/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/oto_otoman?igsh=dG02NWttcmR6d2g2">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://x.com/emptyKing_?t=12T03W1obV_Xx3hhTSlQZA&s=08">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
