import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import "../../App.scss";

const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
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
    flex-direction: column;
  }
`;

const SecondBoxPicture = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(./images/desktop-1.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  text-align: center;
  opacity: 0.1;
  z-index: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center center;
    margin: 2rem auto;
  }
`;

const SecondBoxText = styled(motion.li)`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SecondBoxTitle = styled(motion.p)`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px 0px;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: "SB 어그로OTF B";
  position: relative;
  color:#fff;


  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SecondBoxSub = styled(motion.p)`
  width: 100%;
  height: auto;
  padding: 50px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 3rem;
  font-family: "SB 어그로OTF M";
  color:#fff;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;

  }
`;

const SecondBoxHashTag = styled(motion.p)`
  width: 100%;
  height: auto;
  font-family: "SB 어그로OTF M";
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
    padding: 0.1rem 1.2rem; 

  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;

  }
`;


const SecondSection = () => {
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

    console.log(scrollPosition);

    if (scrollPosition > 650 && scrollPosition < 1500)  {
      setAnimate(true);

    } else  {
      setAnimate(false);
    };
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
        <SecondBoxPicture
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}
        ></SecondBoxPicture>
        <SecondBoxText
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionSecond}
        >
          <SecondBoxTitle       
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>Graphic Design</SecondBoxTitle>
          <SecondBoxSub          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionText}>
              <SiAdobephotoshop />
              <SiAdobeillustrator />
          </SecondBoxSub>
          <SecondBoxHashTag          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionHashTag}>
            <p>#노력</p>
            <p>#연륜</p>
            <p>#미친놈</p>
          </SecondBoxHashTag>
          <SecondBoxTitle       
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>Development</SecondBoxTitle>
          <SecondBoxSub          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionText}>
          </SecondBoxSub>
          <SecondBoxHashTag          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionHashTag}>
            <p>#노력</p>
            <p>#연륜</p>
            <p>#미친놈</p>
          </SecondBoxHashTag>
        </SecondBoxText>
      </Content>
    </Container>
  );
};

export default SecondSection;
