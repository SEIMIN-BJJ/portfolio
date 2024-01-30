import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../../../App.scss"

const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;

  @media screen and (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const Content = styled.div`
  width: 55rem;
  height: auto;
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

const ContentBoxText = styled(motion.ul)`
  width: 100%;
  height: auto;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

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

const ContentTitle = styled.h4`
  width: 100%;
  height: 10rem;
  font-size: 2rem;
  font-family: "ChosunCentennial";
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;

`;

const ContetInfo = styled.div`
  width: 100%;
  height: 100rem;
  font-family: "ChosunCentennial";

`;

const ContentText = styled.ul`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 5px;
    margin: 5px;
  }
`;
const ContentMov = styled.video`
  width: 55rem;
  height: auto;
  object-fit: cover;
  margin-top: 3rem;
`;

const SoundNovelDevelopGuide = () => {
  const [animate, setAnimate] = useState(false);

  // const animationLeft = {
  //   hidden: { opacity: 0, x: -50 },
  //   visible: { opacity: 1, x: 0 },
  // };

  const animationRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 1,
    delay: 0.2,
  };
  // const transitionSecond = {
  //   duration: 1,
  //   delay: 0.9,
  // };
  // const transitionText = {
  //   duration: 1,
  //   delay: 1.5,
  // };

  // const transitionHashTag = {
  //   duration: 1,
  //   delay: 2,
  // };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (window.innerWidth >= 768) {
      if (scrollPosition > 300 && scrollPosition < 600) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
    } else {
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
      <Content>
        <ContentBoxText
          // variants={animationRight}
          // initial="hidden"
          // animate={animate ? "visible" : "hidden"}
          // transition={transition}
        >
        <ContentTitle>Sound Novel Toy Project <br />Develop</ContentTitle>
        <ContetInfo>
          <ContentText>
            <li>React</li>
            <li>Style-Components</li>
            <li>TypeScript</li>
            <li>TypeIt</li>
            <li>Framer-Motion</li>
          </ContentText>
          <ContentMov autoPlay loop muted playsInline>
              <source src={process.env.PUBLIC_URL + "/videos/SoundMov.mp4"} type="video/mp4" />
            </ContentMov>
        </ContetInfo>
        </ContentBoxText>
      </Content>
    </Container>
  );
};

export default SoundNovelDevelopGuide;
