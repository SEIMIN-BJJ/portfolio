import React from "react";
import styled from "styled-components";
import Header from "component/block/Header/header";
// import Footer from "component/block/Footer/footer";
import "../../App.scss";

const Container = styled.section`
  width: 100% !important;
  height: auto !important;
  text-align: center;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 70rem !important;
  height: 100vh !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
`;

const ContentBoxPicture = styled.p`
  width: 24rem;
  height: 40vh;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  background-color: #cec;
`;

const ContentBoxText = styled.li`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border: 1px solid black;
  padding-left: 3rem;
`;

const ContentBoxTitle = styled.p`
  width: 30vw;
  height: 10vh;
  border: 1px solid black;
  background-color: salmon;
`;

const ContentBoxSub = styled.p`
  width: 40vw;
  height: 50vh;
  border: 1px solid black;
  background-color: bisque;
`;

const MainSection = () => {
  return (
    <Container>
      <Header />
      <Content>
        <ContentBoxPicture></ContentBoxPicture>
        <ContentBoxText>
          <ContentBoxTitle></ContentBoxTitle>
          <ContentBoxSub></ContentBoxSub>
        </ContentBoxText>
      </Content>{" "}
      <Content>
        <ContentBoxPicture></ContentBoxPicture>
        <ContentBoxText>
          <ContentBoxTitle></ContentBoxTitle>
          <ContentBoxSub></ContentBoxSub>
        </ContentBoxText>
      </Content>{" "}
      <Content>
        <ContentBoxPicture></ContentBoxPicture>
        <ContentBoxText>
          <ContentBoxTitle></ContentBoxTitle>
          <ContentBoxSub></ContentBoxSub>
        </ContentBoxText>
      </Content>
    </Container>
  );
};

export default MainSection;
