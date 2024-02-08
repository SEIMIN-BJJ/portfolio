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
  margin: 0 auto;
  padding: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 130vh;
    flex-direction: column;
  }
`;

const ContentBoxPicture = styled(motion.div)`
  width: 24rem;
  height: 26rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${MeIMG});
  position: relative;
  margin-top: -20vh;

  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    margin: 0.5rem auto;
    border-radius: 5px;
  }
`;

const ContentBoxText = styled(motion.div)`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: -35vh;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;

  }
`;

const ContentBoxTitle = styled(motion.p)`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 60px;
  padding-top: 0;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: 'Pretendard-ExtraBold';
  position: relative;
  color: #212020;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 2.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    margin: 1rem auto;

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
  font-size: 0.8rem;
  font-family: 'Pretendard-Bold';
  color: #171717a7;
  line-height: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    margin: 1rem auto;
    line-height: 2.3rem;
  }
`;

const ContentBoxHashTag = styled(motion.li)`
  width: 100%;
  padding: 0px 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  p {
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10rem;
    font-family: 'Pretendard-Medium';
    font-size: 0.8rem;
    font-weight: bold;
    color: #ccc;
    padding: 0.1rem 1.2rem; 

    @media (max-width: 768px) {
      display: none;
}

  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    margin: 1rem auto;
}

`;

const MainSection = () => {
  const [animate, setAnimate] = useState(false);
  
  const animationLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // const animationRight = {
  //   hidden: { opacity: 0, x: 50 },
  //   visible: { opacity: 1, x: 0 },
  // };

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
          variants={animationLeft}
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
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionText}>
            안녕하세요. 웹퍼블리셔, 프론트엔드 개발자 임성민입니다.<br />
            저는 개발과 디자인은 어느 것 하나 쉽지없다 라는 생각을 가지고 작업을 하고 있습니다.<br />
            눈에 보이는 시각적인 요소는 매우 중요하며, 사용자들의 기대 수준도 높습니다.<br />
            그래서 어떻게 하면 사람들이 더 편안하게 보고 사용할 수 있을지, <br />
            어떻게 하면 더 사용자 친화적으로 만들 수 있을지에 대한 고민을 끊임없이 하고 있습니다.<br />
            저의 궁극적인 목표는 사용자들이 웹사이트나 앱을 더 편안하게 사용할 수 있도록 하는 것입니다. <br />
            그러기 위해서 다양한 기술을 사용하여 동적인 화면을 구축하고, <br />사용자와의 상호작용을 강화하는데 집중하고 있습니다.<br /> 
            인터랙티브한 웹에 큰 관심을 가지고 있으며, 이를 위해 꾸준히 노력하고 공부하고 있습니다.<br />
            저의 열정과 노력을 통해 사용자들에게 더 나은 웹 경험을 제공하기 위해 노력하고 있습니다.
          </ContentBoxSub>
          <ContentBoxHashTag          
          variants={animationLeft}
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
      <ThirdSection /> 
      <FourthSection />
    </Container>
  );
};

export default MainSection;
