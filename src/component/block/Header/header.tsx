import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { BsArrowUpSquare } from "react-icons/bs";

const Header = styled.header`
  width: 55rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: auto;
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.h4`
  width: 50%;
  height: 3.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  font-family: 'Pretendard-Medium';
  padding: 0 19rem;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
    color: #000;
    padding: 0px 30px;
    position: relative;

  }
`;

const Nav = styled.nav`
  width: 50%;
  padding: 0 18rem;

  @media (max-width: 768px) {
  width: 35%;
  color: #000;
  font-family: "Pretendard-Bold";
  position: relative;
  padding: 0;
  }
`;

const Ul = styled.ul`
  width: 8rem;
  display: flex;
  align-items: center;

`;

const Li = styled.li`
  width: 100%;
  height: 3.5rem;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
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

    ${Logo} {
      opacity: 1;

    }

    ${Li} {
      
      a{

      .github:hover {
        color: #ccc;
        transition: 0.21s ease-in-out;

      }
      .mail:hover {
        color: #76adfb;
        transition: 0.21s ease-in-out;

      }
      .youtube:hover {
        color: #FF0000;
        transition: 0.21s ease-in-out;

      }
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

const ScrollToTopIcon = styled(BsArrowUpSquare)`
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
  transition: color 0.3s;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 2rem 3rem 4rem 4rem;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000;
  }
`;

const HeaderComp = () => {
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef(null); 

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setHidden(scrollPosition > 700 && scrollPosition < 1500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (headerRef.current) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Header>
      <HeaderDiv ref={headerRef} className={hidden ? "hidden" : ""}>
        <Logo>SEIMIN</Logo>
        <Nav>
          <Ul>
          <Li>
              <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/SEIMIN-BJJ">
                <FaGithub className="github" />
              </a>
            </Li>
            <Li>
              <a 
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:interkp12@gmail.com">
                <FiMail className="mail" />
              </a>
            </Li>
            <Li>
              <a                       
              href="https://www.youtube.com/@seimin00"
              target="_blank"
              rel="noopener noreferrer">
                <FaYoutube className="youtube"/>
              </a>
            </Li>
          </Ul>
        </Nav>
          <ScrollToTopIcon onClick={scrollToTop} />
      </HeaderDiv>
    </Header>
  );
};

export default HeaderComp;