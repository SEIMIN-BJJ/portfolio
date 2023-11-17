import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

const Header = styled.header`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: #467ba1db;
  z-index: 100;
  transition: transform 0.3s ease-in-out; 
  opacity: 0.5;
  &.hidden {
    transform: translateY(-100%); 
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;

    &.hidden {
      transform: translateY(-100%);
    }
  }
`;

const Logo = styled.h4`
  width: 100%;
  height: 100%;
  margin: 0 12.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color:#fff;
  font-family: "Pretendard-Bold";

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 5rem;
  }
`;

const Nav = styled.nav`
  width: 30%;
  height: 100%;
  margin: 0 12rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;

`;

const Li = styled.li`
  width: 100%;
  height: 3.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 10px;
      padding: 3px 3px;
    }
  }
`;

const HeaderComp = () => {
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setHidden(scrollPosition > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Header className={hidden ? "hidden" : ""}>
      <Logo>SEIMIN</Logo>
      <Nav>
        <Ul>
          <Li>
            <a href="/"><FaGithub /></a>
          </Li>
          <Li>
            <a href="/"><FiMail /></a>
          </Li>
          <Li>
            <a href="/"><FaYoutube /></a>
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
};

export default HeaderComp;
