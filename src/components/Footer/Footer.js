import React from 'react';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkList, Slogan, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Hyricon Development 2022</Slogan>
        </CompanyContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
