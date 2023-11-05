import React from "react";
import styled from "styled-components";

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  background-color: #000;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10vw;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  color: #fff;
`;

const MainSection = () => {
  return (
    <Container>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        blanditiis atque ea quas et quis ad, cupiditate alias velit accusamus
        mollitia maiores magnam quos! Blanditiis sequi accusantium quia dolore
        illo.
      </Content>
    </Container>
  );
};

export default MainSection;
