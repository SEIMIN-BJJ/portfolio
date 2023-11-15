import React from "react";
import styled from "styled-components";
import "../../App.scss";


const Content = styled.div`
  width: 70rem !important;
  min-height: 100vh !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
`;

const ContentBoxText = styled.li`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border: 1px solid black;
  padding: 3rem;
`;

const ContentBoxTitle = styled.p`
  width: 30vw;
  height: 10vh;
  border: 1px solid black;
  background-color: salmon;
`;

const ContentBoxSub = styled.div`
  width: 100%;
  height: 50vh;
  border: 1px solid black;
  background-color: bisque;
`;

const SecondSection = () => {
  return (
      <Content>
        <ContentBoxText>
          <ContentBoxTitle></ContentBoxTitle>
          <ContentBoxSub></ContentBoxSub>
        </ContentBoxText>
      </Content>
  );
};

export default SecondSection;
