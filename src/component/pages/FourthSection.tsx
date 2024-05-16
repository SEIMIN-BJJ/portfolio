import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
`;

const FourthBoxText = styled(motion.div)`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: -21vh;

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

const FourthBoxTitle = styled(motion.p)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 1rem;
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

const FourthBoxSub = styled(motion.p)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 2rem;
  font-family: 'Pretendard-Bold';
  color: #fff;

  @media (max-width: 768px) {
    height: 50%;
  }

  ul {
    width:100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;

    @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  li {
      width: 100%;
      height: 100%;
      border: 1px solid #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      transition:  0.2s ease-in-out;

      @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    margin: 1rem auto;
    line-height: 2.3rem;
  }
`;



const FourthSection = () => {
  const [animate, setAnimate] = useState(false);
  
  // const animationLeft = {
  //   hidden: { opacity: 0, x: -50 },
  //   visible: { opacity: 1, x: 0 },
  // };

  const animationRight = {
    hidden: { opacity: 0, x: 0 },
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
  // const transitionText = {
  //   duration: 1,
  //   delay: 2,
  // };

  // const transitionHashTag = {
  //   duration: 1,
  //   delay: 1.5,
  // };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (window.innerWidth >= 768) {
      // 웹페이지에서의 스크롤 범위
      if (scrollPosition > 2200 && scrollPosition < 4000) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    } else {
      // 모바일에서의 스크롤 범위
      if (scrollPosition >2100 && scrollPosition < 4000) {
        setAnimate(true);
      } else {
        setAnimate(false);
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

  const listItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Container>
      <Content>
        <FourthBoxText
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}
        >
          <FourthBoxTitle       
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>Design</FourthBoxTitle>
          <FourthBoxSub          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionSecond}>
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </FourthBoxSub>
        </FourthBoxText>
      </Content>
    </Container>
  );
};

export default FourthSection;