import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ImacIMG from "../assets/images/pngwing.com.png"
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

// const ThirdBoxPicture = styled(motion.div)`
//   width: 100%;
//   height: 100vh;
//   flex-direction: column;
//   /* background-image: url(${DeskTopIMG}); */
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center center;
//   position: absolute;
//   text-align: center;
//   z-index: 0;

// `;

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
  color: #212020;

  @media (max-width: 768px) {
    width: 100%;
    height: 15vh;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

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

  @media (max-width: 768px) {
    height: 100%;
  }

  ul {
    width:100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);


    @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
    
    li {
      width: 100%;
      height: 100%;
      border: 1px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
      width: 100%;
      height: 15vh;
      display: flex;
      justify-content: center;
      align-items: center;
      }
    }

      .Sn-Page {
      width: 100%;
      height: 100%;
      color: #ccc;
      font-size: 2rem;
      font-family: "ChosunCentennial";
      background-color: #191919;
      transition: 1s ease-in-out ;
      cursor: pointer;

      @media (max-width: 768px) {
      width: 100%;
      height: 15vh;
      display: flex;
      justify-content: center;
      align-items: center;
      }
    }
  }
`;

const ModalBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  cursor: pointer; 

`;

const ModalContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-width: 80%;
  max-height: 80%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  overflow-y: auto;

  article {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      .Monitor {
      width: 100%;
      height: 80%;
      background-image: url(${ImacIMG});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;

      }
    }
  }
`;

const ThirdSection = () => {

  const [animate, setAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      if (scrollPosition > 1200 && scrollPosition < 10000) {
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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
              <ul>
                <li className="Sn-Page" onClick={openModal}>
                  <p>SOUND NOVEL</p>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </ThirdBoxSub>
        </ThirdBoxText>

        <AnimatePresence>
          {showModal && (
            <ModalBackground
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0}}
              onClick={closeModal}
            >
              <ModalContent>
                <article>
                  <ul>
                    <li className="Monitor"></li>
                  </ul>
                  <ul></ul>
                </article>
              </ModalContent>
            </ModalBackground>
          )}
        </AnimatePresence>
      </Content>

    </Container>
  );
};

export default ThirdSection;
