import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaDiscord } from "react-icons/fa";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", fontSize: '27px'}}>
          <img href="/public/logo.png" size="3rem" /> <span>Hycrion</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#languages">
          <NavLink>Languages</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Hyricon-Development">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://discord.gg/5rYZJHrk3q">
          <FaDiscord size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
