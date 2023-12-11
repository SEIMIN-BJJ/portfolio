import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TechIMG from "../assets/images/desktop.png";
import { motion } from "framer-motion";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
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
  flex-direction: column;
  background-image: url(${TechIMG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  text-align: center;
  z-index: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    margin: 2rem auto;
  }
`;

const SecondBoxText = styled(motion.li)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    justify-content: flex-start;
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

const SecondBoxSub = styled(motion.section)`
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

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 10vh;
    font-size: 3rem;

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
    padding: 0.2rem 1.2rem; 
    transition: 0.15s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #ccc;
      color:#fff;
      opacity: 1;
    }

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
            <ul>
              <SiAdobephotoshop style={{marginRight:'1rem'}}/>
              <SiAdobeillustrator style={{marginRight:'1rem'}} />
              <SiAdobexd style={{marginRight:'1rem'}}/>
              <SiAdobepremierepro style={{marginRight: '1rem'}}/>
              <SiFigma style={{marginRight:'1rem'}} />
            </ul>
          </SecondBoxSub>
          <SecondBoxHashTag          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionHashTag}>
            <p>#꼼꼼함</p>
            <p>#협동력</p>
            <p>#창의력</p>
            <p>#그리드</p>
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
            <ul>
            <SiHtml5 style={{marginRight:'1rem'}}/> 
            <SiCss3 style={{marginRight:'1rem'}}/>
            <SiJavascript style={{marginRight:'1rem'}}/>
            <SiTypescript style={{marginRight:'1rem'}}/>
            <SiSass style={{marginRight:'1rem'}}/>
            <SiGithub style={{marginRight:'1rem'}}/>
            <SiReact style={{marginRight:'1rem'}}/>
            </ul>
          </SecondBoxSub>
          <SecondBoxHashTag          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionHashTag}>
            <p>#클린코드</p>
            <p>#컴포넌트</p>
            <p>#끈기</p>
          </SecondBoxHashTag>
        </SecondBoxText>
      </Content>
    </Container>
  );
};

export default SecondSection;
