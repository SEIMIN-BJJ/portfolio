import React from "react";
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
`;

const Logo = styled.div`
  width: 5rem;
  height: 100%;
  border: 1px solid black;
  margin: 0 11.6rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Nav = styled.nav`
  width: 200px;
  height: 100%;
  border: 1px solid black;
  margin: 0 11.6rem;
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
  }
`;

const header = () => {
  return (
    <Header>
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

export default header;
