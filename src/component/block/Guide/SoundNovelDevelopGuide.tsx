import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
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
  font-family: "ChosunCentennial";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin: 3rem 0 1rem 0;
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
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 3px;
    margin: 2px;
    font-size: 0.8rem;
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

  @media screen and (max-width: 768px) {
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 10px 20px;
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
  border: 1px solid #252525;
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
  border: 1px solid #252525;
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

  const scrollToThirdSection = () => {
    const iPhoneSE = window.innerWidth <= 375 && window.innerHeight <= 667;
    const iPhoneXR = window.innerWidth <= 414 && window.innerHeight <= 896;
    const iPhone12Pro = window.innerWidth <= 390 && window.innerHeight <= 844;
    const iPhone14Pro = window.innerWidth <= 430 && window.innerHeight <= 932;
    const WebScroll = window.innerWidth > 2000 || window.innerHeight > 2000;

    let scrollPosition;
  
    if (iPhoneSE) {
      scrollPosition = 1800; 
    } else if (iPhone12Pro) {
      scrollPosition = 2300; 
    } else if (iPhoneXR) {
      scrollPosition = 2400; 
    } else if (iPhone14Pro) {
      scrollPosition = 2500;
    } else if (WebScroll) {
      scrollPosition = 3000;
    } else {
      scrollPosition = 2000; 
    }
  
    scroll.scrollTo(scrollPosition);
};


  return (
    <Container>
      <Content>
        <ContentBoxText
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}
        >
      <Link to={"/"}>
        <ContentBtn onClick={scrollToThirdSection}>PORTFOLIO</ContentBtn>
      </Link>
        <ContentTitle>Sound Novel Project <br />Develop</ContentTitle>
          <ContentText>
            <li>React</li>
            <li>Style-Components</li>
            <li>TypeScript</li>
            <li>TypeIt</li>
            <li>Framer-Motion</li>
          </ContentText>
          <ContentExplanation>
          Sound Novel 장르의 웹북 프로젝트로 구현하였습니다. <br />프로젝트의 핵심은 Router를 통한 네비게이션, Framer-Motion을 활용한 애니메이션 효과 및 Hook을 활용한 간단하게 기능 구현이 있습니다.
          각 페이지를 독립적으로 구성하고, Framer-Motion을 이용하여 책장이 넘어가는 애니메이션을 구현하였습니다. <br />그리고 Hook을 활용하여 배경음악을 켜고 끄는 기능을 간편하게 구현했습니다.
          <br />프로젝트의 스타일링은 Style-Components를 사용하여 일관된 디자인을 유지하였습니다. 특히, 반복되는 구성 요소들을 최소화하고 글의 내용 및 배경 음악에 더 많은 주력을 기울여 제작했습니다. 이를 통해 사용자가 내용에 더욱 집중할 수 있도록 하였습니다.
          <br /> Sound Novel만의 독특한 특성을 살려 시각적 및 청각적 경험을 제공하는 데 중점을 두었습니다.
          </ContentExplanation>
          <ContentWebExplan autoPlay muted playsInline>
            <source src={process.env.PUBLIC_URL + "/videos/SoundExplan.mp4"} type="video/mp4" />
          </ContentWebExplan>
          <ContentMobileExplan autoPlay muted playsInline>
            <source src={process.env.PUBLIC_URL + "/videos/SoundMobileExplan.mp4"} type="video/mp4" />
          </ContentMobileExplan>
        </ContentBoxText>
      </Content>
    </Container>
  );
};

export default SoundNovelDevelopGuide;


