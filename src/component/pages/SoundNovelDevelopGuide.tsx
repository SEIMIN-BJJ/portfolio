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
  margin: auto;
  border: 1px solid #000;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
`;

const ContentBoxText = styled(motion.ul)`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  flex-direction: column;

  li {
    width: 100%;
    height: 10%;
    border: 1px solid #000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    
  }

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

const SoundNovelDevelopGuide = () => {
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
        <ContentBoxText>
            <li>Sound Novel Develop</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ContentBoxText>
      </Content>
    </Container>
  );
};

export default SoundNovelDevelopGuide;
