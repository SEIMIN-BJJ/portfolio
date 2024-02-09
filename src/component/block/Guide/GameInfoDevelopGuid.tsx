import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CloudAniMation from "../../Animation/CloudAniMation";
import "../../../App.scss"

const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #689cf8;
  color: yellow;

  @media screen and (max-width: 768px) {
  height: 110vh;
  overflow-x: hidden;
  }

  @media screen and (max-width: 375px) {
  height: 130vh;
  overflow-x: hidden;
  }

  @media screen and (max-width: 360px) {
  height: 110vh;
  overflow-x: hidden;
  }
`;

const Content = styled.div`
  width: 55rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media screen and (max-width: 768px) {
  width: 100vw;
  height: auto;
  }
`;

const ContentBoxText = styled(motion.div)`
  width: 100%;
  height: auto;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const ContentTitle = styled.h4`
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  font-family: "PressStart2P-Regular";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 3rem;
  color: yellow;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin: 5rem 0 1rem 0;
  }

`;

const ContentText = styled.ul`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
  margin: 1rem 0 1rem 0;
  justify-content: center;
}

li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
    border: 1px solid #fff;
    font-family: "PressStart2P-Regular";
    border-radius: 4px;
    padding: 5px;
    margin: 2px;
    font-size: 0.5rem;
    text-shadow: 
    -1px 0px #bababa, 
     0px 1px #bababa, 
     1px 0px #bababa, 
     0px -1px #bababa;
  }
`;

const ContentExplanation = styled.h1`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 0.9rem;
  letter-spacing: 1px;
  line-height: 1.5rem;
  color: #ffff36;
  text-shadow: 
    -1px 0px #bababa, 
      0px 1px #bababa, 
      1px 0px #bababa, 
      0px -1px #bababa;

  @media screen and (max-width: 768px) {
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 20px;
}
`;

const ContentWebExplan = styled.video`
  width: 55rem;
  height: 30rem;
  object-fit: contain;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0 1rem 0;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
  width: 100%;
  height: auto;
  justify-content: center;
  padding: 20px;
  border: 0;
}
`;

const ContentMobileExplan = styled.video`
  width: 55rem;
  height: 30rem;
  object-fit: contain;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.7rem 0 1rem 0;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
  width: 100%;
  height: auto;
  justify-content: center;
  border: 0;
  padding: 20px;

}
`;

const ContentBtn = styled.button`
  width: 5.5rem;
  height: 2rem;
  border: 1px solid #fff;
  border-radius: 30px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem 3rem;
  color: #fff;
  transition: 0.21s ease-in-out;
  padding: 3px;
  font-weight: 900;

  &:hover {

    background-color: #fff;
    color: #000;
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    width: 6rem;
    height: 2rem;
    font-size: 0.8rem;
    margin: 1rem 2rem;
  }

`;

const GameInfoDevelopGuid = () => {
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
      <Content>
      <CloudAniMation />
        <ContentBoxText
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}
        >
      <Link to={"/"}>
        <ContentBtn>PORTFOLIO</ContentBtn>
      </Link>
        <ContentTitle>Sound Novel Project <br /><br />Develop</ContentTitle>
          <ContentText>
            <li>React</li>
            <li>Style-Components</li>
            <li>TypeScript</li>
            <li>axios</li>
            <li>Framer-Motion</li>
          </ContentText>
          <ContentExplanation>
            간단한 GameInfomation을 구축한 웹사이트입니다.<br />
            API는 Rawg에서 사용한 오픈 API이며 axios를 이용해 구축하였습니다.
            스크롤이 끝나면 다른 정보를 가져오게 하였고 쓰로틀링을 넣어 시간을 두고 정보를 가져오게 했습니다.
            리소스 사용이 워낙 많다보니 대처법으로 진행하였습니다.<br />
            트레일러까지 구현하려 했으나 데이터 양이 많아 무제한 서비스를 이용해야 하는 상황이라 플랫폼 장르까지가 한계였습니다.
          </ContentExplanation>
          <ContentWebExplan autoPlay muted playsInline>
            <source src={process.env.PUBLIC_URL + "/videos/GameInfoExplan.mp4"} type="video/mp4" />
          </ContentWebExplan>
          <ContentMobileExplan autoPlay muted playsInline>
            <source src={process.env.PUBLIC_URL + "/videos/GameMobileExplan.mp4"} type="video/mp4" />
          </ContentMobileExplan>
        </ContentBoxText>
      </Content>
    </Container>
  );
};

export default GameInfoDevelopGuid;


