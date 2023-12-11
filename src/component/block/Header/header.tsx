import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

const Header = styled.header`
  width: 55rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.h4`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  font-family: "Pretendard-Bold";
  padding: 0 20rem;

  @media (max-width: 768px) {
    width: 100vw;
    font-size: 1.5rem;
    color: #000;
    font-family: "Pretendard-Bold";
    margin: 0 auto;
    padding: 0px 30px;
    position: relative;

  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0 20rem;

  @media (max-width: 768px) {
  width: 50vw;
  color: #000;
  font-family: "Pretendard-Bold";
  margin: 0 auto;
  position: relative;
  padding: 0px 30px;
  }
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
`;

const Li = styled.li`
  width: 100%;
  height: 3.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    transition: background-color 0.3s;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin: 0 auto;
    }
  }

`;

const HeaderDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 100;
  transition: background-color 0.5s, opacity 0.5s, transform 0.3s ease-in-out;

  &.hidden {
    transform: translateY(-100%);
  }

  &:hover {
    background-color: #000;
    opacity: 1;
    backdrop-filter: blur(10px);

    ${Logo} {
      color: #fff;
    }


    ${Li} {

      a{
      color: #fff; 
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
   }
  }
`;

const HeaderComp = () => {
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setHidden(scrollPosition > 1500);
    // setHidden(scrollPosition > 0 && scrollPosition < 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Header>
      <HeaderDiv className={hidden ? "hidden" : ""}>
        <Logo>SEIMIN</Logo>
        <Nav>
          <Ul>
          <Li>
              <a href="/">
                <FaGithub />
              </a>
            </Li>
            <Li>
              <a href="/">
                <FiMail />
              </a>
            </Li>
            <Li>
              <a href="/">
                <FaYoutube />
              </a>
            </Li>
          </Ul>
        </Nav>
      </HeaderDiv>
    </Header>
  );
};

export default HeaderComp;