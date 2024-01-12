import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MeIMG from "../assets/images/me.png";
import Header from "component/block/Header/header";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import "../../App.scss";

const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const Content = styled.div`
  width: 55rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
`;

const ContentBoxPicture = styled(motion.div)`
  width: 24rem;
  height: 40vh;
  display: flex;
  justify-content: space-between;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -20vh;
  background-image: url(${MeIMG});

  @media (max-width: 768px) {
    width: 100%;
    height: 30%;
    background-size: contain;
    background-position: center center;
    margin: 1rem auto;
  }
`;

const ContentBoxText = styled(motion.li)`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: -20vh;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
  }
`;

const ContentBoxTitle = styled(motion.p)`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 60px;
  padding-top: 0;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: "SB 어그로OTF B";
  position: relative;
  color: #212020;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 3rem;
  }
`;

const ContentBoxSub = styled(motion.p)`
  width: 100%;
  height: auto;
  padding: 20px 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 0.89rem;
  font-family: "SB 어그로OTF M";
  color: #171717a7;
  /* border: 1px solid black; */

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    padding: 1rem auto;
  }
`;

const ContentBoxHashTag = styled(motion.p)`
  width: 100%;
  padding: 0px 60px;
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
    font-weight: bold;
    color: #ccc;
    padding: 0.1rem 1.2rem; 
    transition: 0.15s ease-in-out;
    font-family: 'SB 어그로OTF L';
    font-weight: bold;
    cursor: pointer;

  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.5rem;

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

  const transitionHashTag = {
    duration: 1,
    delay: 2,
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  
    if (window.innerWidth >= 768) {
      // 웹페이지에서의 스크롤 범위
      if (scrollPosition > 300 && scrollPosition < 600) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
    } else {
      // 모바일에서의 스크롤 범위
      if (scrollPosition > 600) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
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
            안녕하세요. UI / UX 디자이너, 퍼블리셔 임성민입니다.<br /><br /> 개발과 디자인은 어느것 하나 쉽지없다 라는 생각을 가지고 작업을 하고 있습니다. <br /> <br /> 사람들은 눈에 들어오는 것을 중요시 여깁니다. 그리고 보는 수준이 높습니다.<br /> <br /> 그래서 어떻게 해야 더 편하게 볼 수 있을까. 어떻게 하면 더 편하게 사용할 수 있을까.<br /> <br />어떻게 하면 더 좋을 수 있을까를 궁극적인 목표로 공부하고 있습니다.<br /><br />CSS와 Javascript 등으로 동적화면을 구축하는 것에 관심이 많고 
            <br /><br /> 인터랙티브 웹에 관심이 많아 현재도 꾸준히 노력 및 공부중입니다.
          </ContentBoxSub>
          <ContentBoxHashTag          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionHashTag}>
            <p>#노력</p>
            <p>#끈기</p>
            <p>#편의성</p>
          </ContentBoxHashTag>
        </ContentBoxText>
      </Content>
      <SecondSection />
      <FourthSection />
      <ThirdSection /> 
    </Container>
  );
};

export default MainSection;
