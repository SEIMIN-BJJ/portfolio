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
  background-color: #fff;
  color: #000;

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
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  letter-spacing: 5px;

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
    color: #000;
    border: 1px solid #000;
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
  line-height: 1.5rem;

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

  @media screen and (max-width: 768px) {
  width: 100%;
  height: 30rem;
  justify-content: center;
  border: 0;
  padding: 20px;

}
`;

const ContentBtn = styled.button`
  width: 5.5rem;
  height: 2rem;
  border: 1px solid #000;
  border-radius: 30px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem 3rem;
  color: #000;
  transition: 0.21s ease-in-out;
  padding: 3px;
  font-weight: 900;

  &:hover {

    background-color: #000;
    color: #fff;
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    width: 6rem;
    height: 2rem;
    font-size: 0.8rem;
    margin: 1rem 2rem;
  }

`;
const RockFestaDevelopGuide = () => {
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
    scroll.scrollTo(1800);
  };

  return (
    <Container>
      <Link to={"/"}>
        <ContentBtn onClick={scrollToThirdSection}>PORTFOLIO</ContentBtn>
      </Link>
      <Content>
        <ContentBoxText
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}
        >
        <ContentTitle>Rock Festival Project <br />Develop</ContentTitle>
          <ContentText>
            <li>React</li>
            <li>Style-Components</li>
            <li>TypeScript</li>
            <li>Axios</li>
            <li>Framer-Motion</li>
          </ContentText>
          <ContentExplanation>
          락 페스티벌 컨셉의 웹사이트를 제작하였습니다.<br />프로젝트는 랜딩 페이지 형태로 구성하였으며 YouTube API 및 Unsplash API를 axios를 활용하여 영상 및 이미지를 동적으로 제작하였습니다.<br />API키는 보안상 env로 안전하게 관리하였습니다.
          <br />특히 특정 밴드들에 중점을 두어 자세한 설명과 관련 영상을 모달 창을 활용하여 효과적으로 볼 수 있게 하였고. 이를 통해 밴드들에 대한 다양한 정보를 쉽게 볼 수 있습니다.
          또한 동일한 아티스트를 클릭할 경우 랜덤으로 영상이 재생되도록 구현하여 사용자가 여러 영상을 볼 수 있는 것에 주력하였습니다. <br />웹사이트를 통해 다양한 아티스트의 정보와 음악을 자연스럽게 경험할 수 있게 하였습니다.
          </ContentExplanation>
          <ContentWebExplan autoPlay muted playsInline>
            <source src={process.env.PUBLIC_URL + "/videos/RockExplan.mp4"} type="video/mp4" />
          </ContentWebExplan>
          <ContentMobileExplan autoPlay muted playsInline>
            <source src={process.env.PUBLIC_URL + "/videos/RockMobileExplan.mp4"} type="video/mp4" />
          </ContentMobileExplan>
        </ContentBoxText>
      </Content>
    </Container>
  );
};

export default RockFestaDevelopGuide;
