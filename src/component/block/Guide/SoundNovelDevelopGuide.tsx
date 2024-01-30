import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import DevCapture from "../../assets/images/SoundCature.png";
import "../../../App.scss"
import { Link } from "react-router-dom";

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
  margin: 0 auto;

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
  height: 3rem;
  font-size: 2rem;
  font-family: "ChosunCentennial";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

`;

const ContetInfo = styled.div`
  width: 100%;
  height: auto;
  font-family: "ChosunCentennial";
  margin: 3rem auto;
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
    padding: 3px;
    margin: 2px;
    font-size: 0.8rem;
  }
`;

const ContentExplanation = styled.p`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 0.9rem;

`;
const ContentMov = styled.video`
  width: 55rem;
  height: auto;
  object-fit: cover;
  margin: 1rem auto;
  border: 1px solid #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ContentCapture = styled.img`
  width: 55rem;
  height: 23.7rem;
  margin: 1rem auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${DevCapture});
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid #fff;
  background-position: center center;
`;

const ContentBtn = styled.button`
  width: 5.5rem;
  height: 2rem;
  border: 1px solid #fff;
  border-radius: 30px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem 3rem auto;
  color: #fff;
  transition: 0.21s ease-in-out;
  padding: 3px;
  font-weight: 900;

  &:hover {

    background-color: #fff;
    color: #000;
    opacity: 1;
  }
`
const SoundNovelDevelopGuide = () => {
  const [animate, setAnimate] = useState(false);



  const animationRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 1,
    delay: 0.2,
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition)
    if (window.innerWidth >= 768) {
      if (scrollPosition > 3000 && scrollPosition < 5000) {
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
      <Link to={"/"}>
         <ContentBtn>PORTFOLIO</ContentBtn>
      </Link>
      <Content>
        <ContentBoxText
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}
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
          <ContentExplanation>
            사운드노벨 장르의 웹북 토이프로젝트로 제작하였습니다.<br />
            Router를 활용하여 한장한장의 글을 썼고 Framer-Motion을 이용한 애니메이션을 추가하여 책장이 넘어가는 효과를 주었으며<br />
            말그대로 사운드 노벨인 장르이기 때문에 React Hook을 사용하여 배경화면 켜기 / 끄기의 간단한 기능을 넣었습니다.<br />
            그 외의 스타일적인 부분들은 Style-Components으로 처리하였습니다.
          </ContentExplanation>
          <ContentCapture />
          <ContentMov autoPlay loop muted playsInline>
              <source src={process.env.PUBLIC_URL + "/videos/SoundExplan.mp4"} type="video/mp4" />
            </ContentMov>
        </ContetInfo>
        </ContentBoxText>
      </Content>
    </Container>
  );
};

export default SoundNovelDevelopGuide;
