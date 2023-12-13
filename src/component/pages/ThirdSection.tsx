import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import DeskTopIMG from "../assets/images/desktopTwo.jpg";
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
    height: 100vh;
    flex-direction: column;
  }
`;

const ThirdBoxPicture = styled(motion.div)`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-image: url(${DeskTopIMG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  text-align: center;
  z-index: 0;

`;

const ThirdBoxText = styled(motion.li)`
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ThirdBoxTitle = styled(motion.p)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 1rem;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: "SB 어그로OTF B";
  position: relative;
  color:#fff;


  @media (max-width: 768px) {
    width: 100%;
    height: 2vh;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0 auto;

  }
`;

const ThirdBoxSub = styled(motion.section)`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 2rem;
  font-family: "SB 어그로OTF M";
  color: #fff;
  border: 1px solid #fff;
  white-space: nowrap;
  overflow: hidden; // 추가된 부분

  @media (max-width: 768px) {
    width: 100%;
    height: 10vh;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// const ModalContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right:0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   width: 50%;
//   height: 50%;
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 10px;
// `;

// const ModalCloseButton = styled.button`
//   margin-top: 1rem;
//   background-color: #ccc;
//   color: #fff;
//   border: none;
//   padding: 10px;
//   position: relative;
//   cursor: pointer;
// `;

// const ModalDescription = styled.p`
//   font-size: 16px;
//   color: #333;
// `;

const ThirdSection = () => {

  const [animate, setAnimate] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);

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

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  
    if (window.innerWidth >= 768) {
      // 웹페이지에서의 스크롤 범위
      if (scrollPosition > 1200 && scrollPosition < 2000) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    } else {
      // 모바일에서의 스크롤 범위
      if (scrollPosition > 1300 && scrollPosition < 2000) {
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


  // const handleModalOpen = () => {
  //   setModalOpen(true);
  // };
  
  // const handleModalClose = () => {
  //   setModalOpen(false);
  // };
  return (
    <Container>
      <Content>
        <ThirdBoxPicture
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}
        ></ThirdBoxPicture>
        <ThirdBoxText
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionSecond}
        >
          <ThirdBoxTitle       
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>HandiCraft</ThirdBoxTitle>

            <ThirdBoxSub
              variants={animationRight}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
              transition={transitionText}
            >
            </ThirdBoxSub>
          {/* {modalOpen && (
          <ModalContainer>
            <ModalContent>
              <ModalDescription>
                - 꼼꼼함은 디자이너든 개발자든 어떤일을 하든 필수적인 것이라고 생각합니다.<br /><br />일을함에 있어서 프로세스가 있듯이 끝내고 한번 더 두번 더 검수를 하는 것이 몸에 배어있습니다.
              </ModalDescription>
              <ModalCloseButton onClick={handleModalClose}>닫기</ModalCloseButton>
            </ModalContent>
          </ModalContainer>
          )} */}
        </ThirdBoxText>
      </Content>

    </Container>
  );
};

export default ThirdSection;
