import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FourthMeIMG from "../assets/images/FourthMe.png";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 130vh;
    flex-direction: column;
  }
`;

const ContentBoxPicture = styled(motion.div)`
  width: 25rem;
  height: 25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${FourthMeIMG});
  position: relative;
  margin-top: -7vh;

  @media (max-width: 768px) {
    width: 90%;
    height: 50%;
    background-size: cover;
    background-position: center center;
    margin: 0.5rem auto;
    border-radius: 5px;
  }
`;

const ContentBoxText = styled(motion.div)`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: -41vh;

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

const ContentBoxTitle = styled(motion.p)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 60px;
  padding-top: 0;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: 'Pretendard-ExtraBold';
  position: relative;
  color: #212020;
  text-align: right;

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

const ContentBoxSub = styled(motion.p)`
  width: 100%;
  height: auto;
  padding: 20px 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  font-size: 0.8rem;
  font-family: 'Pretendard-Bold';
  color: #171717a7;
  line-height: 2rem;

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

const ContentBoxHashTag = styled(motion.li)`
  width: 100%;
  padding: 0px 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10rem;
    font-family: 'Pretendard-Medium';
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0.1rem 0.5rem; 

  a {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    border: 0;

    .github:hover {
        color: #ccc;
        transition: 0.21s ease-in-out;

      }
      .mail:hover {
        color: #76adfb;
        transition: 0.21s ease-in-out;

      }
      .phone:hover {
        color: #17b92c;
        transition: 0.21s ease-in-out;

      }

    @media (max-width: 768px) {
    padding: 0 0.8rem; 
    font-size: 2rem;

}
  }

  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    margin: 1rem auto;
}

`;

const FourthSection = () => {
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
  const transitionSecond = {
    duration: 1,
    delay: 0.9,
  };
  const transitionText = {
    duration: 1,
    delay: 2,
  };

  const transitionHashTag = {
    duration: 1,
    delay: 1.5,
  };

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

  return (
    <Container>
      <Content>
        <ContentBoxText
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}
        >
          <ContentBoxTitle       
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>Collaboration is More Important Than Development</ContentBoxTitle>
          <ContentBoxSub          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionSecond}>
            개발보다 중요한건 협업이다.<br />
            같이 일하던 부장님이 계셨는데 항상 저 문구를 강조하셨습니다.<br />
            개발보다 더 중요한건 협업이다.<br />
            기술이란 것은 배우면 그만이다.<br />
            기술이란 내가 쓰는 도구에 지나지 않는다.<br />
            한가지 스택을 무서울 정도로 파보고 또 파봐라.<br />
            한가지를 오롯이 내것으로 만드는 것도 어려운데<br />
            새로운게 나왔다고 전부 다 가지려는 건 욕심이다.<br />
            진짜로 잘하는 사람은 소통을 잘하는 사람이다.<br />
            너무나 당연한 얘기이고 세상이치에 전부 대입 할 수 있는 말이지만<br />
            너무나 쉽기도 어렵기도 한 이 이야기를 명심하라고 얘기하셨습니다.<br />
            그 말씀들을 항상 마음에 새기고 일이든 어디서든 적용 하려 노력합니다.<br />
            소통할 수 있는 사람, 노력하는 사람, 임성민입니다.
          </ContentBoxSub>
          <ContentBoxHashTag          
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionHashTag}>
            <p>              
              <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/SEIMIN-BJJ">
                <FaGithub className="github" />
              </a>
            </p>
            <p>              
              <a 
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:interkp12@gmail.com">
                <FiMail className="mail" />
              </a>
            </p>
            <p>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="tel:010-6418-5624">
                <FaPhone className="phone" />
              </a>
            </p>
          </ContentBoxHashTag>
        </ContentBoxText>
        <ContentBoxPicture
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionText}
        ></ContentBoxPicture>
      </Content>
    </Container>
  );
};

export default FourthSection;