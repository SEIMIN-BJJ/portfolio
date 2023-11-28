import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "component/block/Header/header";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FouthSection from "./FouthSection";
import "../../App.scss";

const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(#ffffff, #f2f2f2); */
  background-color: #fff;
`;

const Content = styled.div`
  width: 70rem;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ContentBoxText = styled(motion.li)`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0;
  }
`;

const ContentBoxPicture = styled(motion.div)`
  width: 24rem;
  height: 40vh;
  display: flex;
  justify-content: space-between;
  background-image: url(./images/just-me.png);
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 4rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;


const ContentBoxTitle = styled(motion.p)`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px 80px;
  padding-top: 0;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: "SB 어그로OTF B";
  position: relative;
  color: #212020;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ContentBoxSub = styled(motion.p)`
  width: 100%;
  height: auto;
  padding: 30px 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-family: "SB 어그로OTF M";
  color: #171717a7;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const ContentBoxHashTag = styled(motion.p)`
  width: 100%;
  height: auto;
  padding: 0px 80px;
  font-family: "SB 어그로OTF M";
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: #171717a7;

  p {
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10rem;
    font-size: 0.8rem;
    color: #ccc;
    padding: 0.2rem 1.2rem; 

  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const MainSection = () => {
  const [animate, setAnimate] = useState(false);

  const animationLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const animationRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 1,
    delay: 0.2,
  };
  const transitionSecond = {
    duration: 1,
    delay: 0.9,
  };
  const transitionText = {
    duration: 1,
    delay: 1.5,
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setAnimate(false);
    } else {
      setAnimate(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []); 

  return (
    <Container>
      <Header />
      <Content>
        <ContentBoxPicture
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}
        ></ContentBoxPicture>
        <ContentBoxText
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionSecond}
        >
          <ContentBoxTitle       
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>My Developer Life</ContentBoxTitle>
          <ContentBoxSub          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionText}>
            안녕하세요. 웹퍼블리셔, UI / UX 디자이너 임성민이라고 합니다.<br /><br /> 개발과 디자인은 동일하다는 생각을 하면서 동시에 작업을 하는 사람입니다. <br /> <br /> 사람들은 눈에 들어오는 것을 중요시 여깁니다.<br /> <br /> 어떻게 해야 더 편하게 사용할 수 있을까.<br /> <br /> 어떻게 하면 더 편하게 볼 수 있을까를 궁극적인 목표로 작업을 하는 사람입니다.<br /> <br /> 그러다 보면 점점 더 실력이 좋아지겠지요?
          </ContentBoxSub>
          <ContentBoxHashTag          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionText}>
            <p>#노력</p>
            <p>#연륜</p>
            <p>#미친놈</p>
          </ContentBoxHashTag>
        </ContentBoxText>
      </Content>
      <SecondSection />
      <ThirdSection />
      <FouthSection />
    </Container>
  );
};

export default MainSection;
