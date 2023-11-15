import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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

const ContentBoxPicture = styled(motion.p)`
  width: 24rem;
  height: 40vh;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  background-color: #cec;
`;

const ContentBoxText = styled(motion.li)`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border: 1px solid black;
  padding-left: 3rem;
`;

const ContentBoxTitle = styled(motion.p)`
  width: 30vw;
  height: 10vh;
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: salmon;
  padding: 30px 30px;
`;

const ContentBoxSub = styled(motion.p)`
  width: 40vw;
  height: 50vh;
  border: 1px solid black;
  background-color: bisque;
`;

const FouthSection = () => {
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
    duration: 0.8,
    delay: 1.2,
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 1300) {
      setAnimate(true);
    } else {
      setAnimate(false);
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
          transition={transition}
        >
          <ContentBoxTitle>4페이지</ContentBoxTitle>
          <ContentBoxSub></ContentBoxSub>
        </ContentBoxText>
      </Content>
    </Container>
  );
};

export default FouthSection;
