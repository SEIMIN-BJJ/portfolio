import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: salmon;
  transition: transform 0.3s ease-in-out; 

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
  width: 5rem;
  height: 100%;
  border: 1px solid black;
  margin: 0 12.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 5rem;
  }
`;

const Nav = styled.nav`
  width: 200px;
  height: 100%;
  border: 1px solid black;
  margin: 0 12.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

const Li = styled.li`
  width: 100%;
  height: 3.3rem;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

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
            <a href="/">github</a>
          </Li>
          <Li>
            <a href="/">mail</a>
          </Li>
          <Li>
            <a href="/">youtube</a>
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
};

export default HeaderComp;
