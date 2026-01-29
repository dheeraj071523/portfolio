import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <img src="/logo.svg" height={40} width={40} />{" "}
        <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
          Dheeraj Kumawat
        </span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <NavLink>Blog</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/dheeraj071523">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/dheeraj-kumawat-50a423224">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/dheeraj070704/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://x.com/Dheeraj50256041">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://leetcode.com/u/dheerajkumawat0707/">
         <SiLeetcode size = "3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
